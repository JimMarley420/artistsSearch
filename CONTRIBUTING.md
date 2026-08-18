# Contributing to Spicetify Extensions & Themes

First off, thanks for taking the time to contribute!

All types of contributions are encouraged and valued. See the [Table of Contents](#table-of-contents) for different ways to help and details about how this project handles them. Please make sure to read the relevant section before making your contribution. It will make it a lot easier for us maintainers and smooth out the experience for all involved. The community looks forward to your contributions.

And if you like the project, but just don't have time to contribute, that's fine. There are other easy ways to support the project and show your appreciation, which we would also be very happy about:

- **Star the project**
- **Tweet about it**
- Refer this project in your project's readme
- Mention the project at local meetups and tell your friends/colleagues

## Table of Contents

- [I Have a Question](#i-have-a-question)
- [I Want To Contribute](#i-want-to-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Your First Code Contribution](#your-first-code-contribution)
  - [Improving The Documentation](#improving-the-documentation)
  - [Bringing a new Extension or Theme](#bringing-a-new-extension-or-theme)
- [Styleguides](#styleguides)
  - [Commit Messages](#commit-messages)
  - [Code Style](#code-style)
- [Join The Project Team](#join-the-project-team)

## I Have a Question

> [!IMPORTANT]
> If you want to ask a question, we assume that you have read the available [Documentation](https://github.com/JimMarley420/spicetify-extension#readme).

Before you ask a question, it is best to search for existing [Issues](https://github.com/JimMarley420/spicetify-extension/issues) that might help you. In case you have found a suitable issue and still need clarification, you can write your question in this issue. It is also advisable to search the internet for answers first.

If you then still feel the need to ask a question and need clarification, we recommend the following:

- Open an [Issue](https://github.com/JimMarley420/spicetify-extension/issues/new).
- Provide as much context as you can about what you're running into.
- Provide project and platform versions (nodejs, npm, Spicetify, Spotify, etc), depending on what seems relevant.

We will then take care of the issue as soon as possible.

## I Want To Contribute

> [!NOTE]
> **Legal Notice:** When contributing to this project, you must agree that you have authored 100% of the content, that you have the necessary rights to the content and that the content you contribute may be provided under the project license. See [README](README.md#license) — (c) 2026 JimMarley420.

### Reporting Bugs

#### Before Submitting a Bug Report

A good bug report shouldn't leave others needing to chase you up for more information. Therefore, we ask you to investigate carefully, collect information and describe the issue in detail in your report. Please complete the following steps in advance to help us fix any potential bug as fast as possible.

- Make sure that you are using the latest version.
- Determine if your bug is really a bug and not an error on your side, e.g. using incompatible environment components/versions (make sure that you have read the [documentation](https://github.com/JimMarley420/spicetify-extension#readme)).
- To see if other users have experienced (and potentially already solved) the same issue you are having, check if there is not already a bug report existing for your bug.
- Also make sure to search the internet (including the [Spicetify Community](https://community.spicetify.app/)) to see if users outside of the GitHub community have discussed the issue.

#### How Do I Submit a Good Bug Report?

We use GitHub issues to track bugs and errors. If you run into an issue with the project:

- Open an [Issue](https://github.com/JimMarley420/spicetify-extension/issues/new/choose).
- **Explain the behavior you would expect and the actual behavior.**
- Please provide as much context as possible and describe the reproduction steps that someone else can follow to recreate the issue on their own. For good bug reports you should isolate the problem and create a reduced test case.
- Provide the information you collected in the previous section (OS/Platform, Spicetify & Spotify versions, extension version, etc).

Once it's filed:

- The project team will label the issue accordingly.
- A team member will try to reproduce the issue with your provided steps. If there are no reproduction steps or no obvious way to reproduce the issue, the team will ask you for those steps and mark the issue as `status: needs repro`.
- If the team is able to reproduce the issue, it will be marked as `status: triaged` and left to be implemented by someone.

> **Security issues:** Never report security related issues, vulnerabilities or bugs to the issue tracker — see our [Security Policy](SECURITY.md).

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for the project, including completely new features and minor improvements to existing functionality. Following these guidelines will help maintainers and the community to understand your suggestion and find related suggestions.

#### Before Submitting an Enhancement

- Make sure that you are using the latest version.
- Read the documentation carefully and find out if the functionality is already covered, maybe by an individual extension/theme.
- Perform a [search](https://github.com/JimMarley420/spicetify-extension/issues) to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.
- Find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the project's developers of the merits of this feature.

#### How Do I Submit a Good Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://github.com/JimMarley420/spicetify-extension/issues).

- Use a **clear and descriptive title** for the issue to identify the suggestion.
- Provide a **step-by-step description** of the suggested enhancement in as many details as possible.
- Describe the current behavior and explain which behavior you expected to see instead and why.
- You may want to include screenshots and animated GIFs which help you demonstrate the steps or point out the part which the suggestion is related to.
- Explain why this enhancement would be useful to most users.

### Your First Code Contribution

Unsure where to begin contributing? Start by exploring issues with the [`good first issue`](https://github.com/JimMarley420/spicetify-extension/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) and [`help wanted`](https://github.com/JimMarley420/spicetify-extension/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) labels.

#### Setup

```bash
# Clone the repo
git clone https://github.com/JimMarley420/spicetify-extension.git
cd spicetify-extension

# Check prerequisites
deno --version   # Deno 2.x required

# Install deps
deno install
```

You can open the project in any editor with Deno support (VS Code + the official Deno extension recommended).

#### Building

```bash
# Build all extensions
deno task build

# Run the whole CI-like pipeline (lint + typecheck + build + tests)
deno task check
deno task test
```

### Improving The Documentation

Documentation improvements and typo fixes are one of the best ways to get started with open source. The docs live in:

- The [root README](./README.md)
- Each extension's own `README.md` folder
- The `themes/CustomNight/README.md`

Docs PRs follow the same process, and the `fix:` commit prefix is enough to get them merged.

### Bringing a new Extension or Theme

Want to add a whole new extension or theme? Great! Some guidelines:

- Extensions live in `extensions/<folderName>/` with source in a `src/` folder and an entry file `src/app.{ts,tsx}`.
- Themes live in `themes/<ThemeName>/` with `user.css`, `color.ini`, `preview.png` and a `README.md`.
- A proper `README.md` per extension/theme is mandatory (features, usage, preview images).
- Extensions and themes must be listed in [manifest.json](manifest.json) with tags and authors.
- Run `deno task check`, `deno task test` and `deno task release` before submitting.

## Styleguides

### Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/). Each commit should be prefixed with a type — this also drives our [semantic versioning](https://github.com/JimMarley420/spicetify-extension#versioning):

| Type | Description | Version bump |
|------|-------------|--------------|
| `feat:` | A new feature | **minor** |
| `fix:` | A bug fix | **patch** |
| `docs:` | Documentation only | patch |
| `style:` | Formatting, no code change | patch |
| `refactor:` | Code change that neither fixes a bug nor adds a feature | patch |
| `perf:` | A performance improvement | patch |
| `chore:` | Maintenance, tooling, CI/CD | patch |
| `build:` | Build system / external dependencies | patch |
| `feat!:`, `fix!:`, … | Breaking change (add `!` or `BREAKING CHANGE`) | **major** |

Example:

```text
feat(artistSearch): add album grouping

fix: resolve timeout when playlist is huge
docs: clarify installation steps
chore: bump stylelint
```

### Code Style

- **TypeScript** with strict mode, follow the existing code patterns in the repo.
- **Biome** is used for linting & formatting — run `deno task format` before committing.
- **Stylelint** is used for themes' CSS — run `deno task theme:lint` for changes under `themes/`.
- No semicolons; single quotes; trailing commas (Biome defaults, or whatever the config sets).

## Join The Project Team

Maintainers come from the community. If you consistently contribute high-quality PRs, help triage issues and participate in discussions, we'll be happy to invite you to the team.

## Attribution

This guide is based on the [contributing-gen](https://github.com/bttger/contributing-gen), the Spicetify Marketplace contributing guide, and [all-contributors](https://allcontributors.org/). Make your own!