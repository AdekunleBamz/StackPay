# Contributing to StackPay

Thank you for your interest in contributing to StackPay! 🎉

## How to Contribute

### Reporting Bugs

1. Check existing [Issues](https://github.com/AdekunleBamz/StackPay/issues) to avoid duplicates
2. Open a new issue with a clear title and description
3. Include steps to reproduce, expected vs actual behavior

### Suggesting Features

1. Open an issue with the `enhancement` label
2. Describe the feature and its use case
3. Discuss implementation approach if possible

### Pull Requests

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Run tests: `npm test`
5. Commit with clear messages: `git commit -m "feat: add new feature"`
6. Push and open a Pull Request

### Development Setup

```bash
# Clone the repo
git clone https://github.com/AdekunleBamz/StackPay.git
cd StackPay

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Run development server
npm run dev

# Run tests
npm test
```

### Code Style

- **Smart Contracts**: Follow Clarity best practices
- **Frontend**: Use React/Next.js patterns
- **Commits**: Use conventional commits (feat:, fix:, docs:, etc.)

### Testing

- All smart contract changes must include tests
- Ensure all existing tests pass before submitting

## Questions?

Feel free to open an issue for any questions or discussions.

---

Thank you for helping improve StackPay! 💰
