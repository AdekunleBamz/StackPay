
import { Cl, ClarityType, cvToValue } from "@stacks/transactions";
import { beforeEach, describe, expect, it } from "vitest";

const accounts = simnet.getAccounts();
const employer = accounts.get("wallet_1")!;
const employee = accounts.get("wallet_2")!;
const deployer = accounts.get("deployer")!;

describe("StackPay Protocol", () => {
    it("allows creating a stream", () => {
        const ratePerBlock = 1000;
        const funding = 10000;

        // Create stream
        const { result } = simnet.callPublicFn(
            "stackpay",
            "create-stream",
            [Cl.principal(employee), Cl.uint(ratePerBlock), Cl.uint(funding)],
            employer
        );

        expect(result).toBeOk(Cl.uint(1));
    });

    it("allows withdrawal of accrued salary", () => {
        const ratePerBlock = 100;
        const funding = 1000;

        // Create stream
        simnet.callPublicFn(
            "stackpay",
            "create-stream",
            [Cl.principal(employee), Cl.uint(ratePerBlock), Cl.uint(funding)],
            employer
        );

        // Advance 5 blocks
        simnet.mineEmptyBlocks(5);

        // Withdraw
        const { result } = simnet.callPublicFn(
            "stackpay",
            "withdraw",
            [Cl.uint(1)],
            employee
        );

        // Should withdraw 5 * 100 = 500
        expect(result).toBeOk(Cl.uint(500));
    });

    it("prevents unauthorized withdrawal", () => {
        const ratePerBlock = 100;
        const funding = 1000;

        simnet.callPublicFn(
            "stackpay",
            "create-stream",
            [Cl.principal(employee), Cl.uint(ratePerBlock), Cl.uint(funding)],
            employer
        );

        const { result } = simnet.callPublicFn(
            "stackpay",
            "withdraw",
            [Cl.uint(1)],
            employer // Employer tries to withdraw employee's salary
        );

        expect(result).toBeErr(Cl.uint(1)); // Expect error u1 (unauthorized)
    });
});
