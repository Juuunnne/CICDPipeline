# CI/CD Pipeline Demo

A demonstration of a complete CI/CD pipeline for Node.js projects, automating versioning, testing, and deployment processes.

## Features

- Automated versioning with [standard-version](https://github.com/conventional-changelog/standard-version)
- Automated changelog generation
- Git tagging automation
- Continuous Integration with GitHub Actions
- Automated testing with Jest
- Code quality enforcement with ESLint
- Commit message linting with commitlint

## Project Structure

```
.
├── .github/
│   └── workflows/       # GitHub Actions workflows
│       └── ci-cd.yml    # CI/CD pipeline configuration
├── __tests__/           # Test files
│   └── index.test.js    # API tests
├── .eslintrc.js         # ESLint configuration
├── .gitignore           # Git ignore file
├── .versionrc           # standard-version configuration
├── commitlint.config.js # Commit linting rules
├── index.js             # Main application file
├── package.json         # Project dependencies and scripts
└── release.sh           # Release automation script
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

### Installation

1. Clone the repository

   ```
   git clone https://github.com/yourusername/cicdpipeline.git
   cd cicdpipeline
   ```

2. Install dependencies

   ```
   npm install
   ```

3. Set up Git hooks
   ```
   npx husky install
   ```

### Development

Start the development server:

```
npm run dev
```

### Testing

Run tests:

```
npm test
```

Run linting:

```
npm run lint
```

## Release Process

The project includes a release script that automates:

- Running tests
- Bumping version (following semantic versioning)
- Updating the CHANGELOG.md
- Creating a Git tag
- Pushing changes to the repository

To create a new release:

```
# For patch release (0.0.x)
npm run release:patch

# For minor release (0.x.0)
npm run release:minor

# For major release (x.0.0)
npm run release:major
```

Or use the release script directly:

```
./release.sh [patch|minor|major]
```

## CI/CD Pipeline

The project includes a complete GitHub Actions workflow that:

1. **Testing**:

   - Runs on every push to the main branch and pull requests
   - Tests with multiple Node.js versions (16.x and 18.x)
   - Runs linting to ensure code quality

2. **Building**:

   - Creates a distribution package
   - Archives build artifacts
   - Uploads artifacts for use in later stages

3. **Release Automation**:
   - Automatically runs on successful pushes to main branch
   - Uses standard-version to bump version numbers according to semantic versioning
   - Generates a CHANGELOG from commit messages
   - Creates Git tags
   - Creates GitHub Releases with attached build artifacts
   - Publishes release packages

### Workflow Diagram

```
Push to Main Branch
       |
       v
  Run Tests -----> Run Linting
       |
       v
 Build Package
       |
       v
Generate Version/CHANGELOG
       |
       v
   Git Tagging
       |
       v
 Create Release
       |
       v
Attach Build Artifacts
```

## Commit Message Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/) for commit messages:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Types include:

- feat: A new feature
- fix: A bug fix
- docs: Documentation changes
- style: Changes that don't affect the code's meaning
- refactor: Code changes that neither fix bugs nor add features
- perf: Performance improvements
- test: Adding or correcting tests
- chore: Changes to the build process or auxiliary tools

## License

This project is licensed under the ISC License - see the LICENSE file for details.
