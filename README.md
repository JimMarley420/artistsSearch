<div align="center">

# Spicetify Extensions & Themes

A curated collection of **Spicetify** extensions and themes for Spotify by Jimmy Marley.

[![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/JimMarley420/spicetify-extension?utm_source=oss&utm_medium=github&utm_campaign=JimMarley420%2Fspicetify-extension&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)](https://coderabbit.ai)

[![Latest Release](https://img.shields.io/github/v/release/JimMarley420/spicetify-extension?sort=date&label=Latest%20Release&style=for-the-badge&color=1DB954)](https://github.com/JimMarley420/spicetify-extension/releases/latest)
[![Stars](https://img.shields.io/github/stars/JimMarley420/spicetify-extension?style=for-the-badge&color=1DB954)](https://github.com/JimMarley420/spicetify-extension/stargazers)
[![Forks](https://img.shields.io/github/forks/JimMarley420/spicetify-extension?style=for-the-badge&color=1DB954)](https://github.com/JimMarley420/spicetify-extension/network)
[![Open Issues](https://img.shields.io/github/issues/JimMarley420/spicetify-extension?style=for-the-badge&color=1DB954)](https://github.com/JimMarley420/spicetify-extension/issues)
[![Closed Issues](https://img.shields.io/github/issues-closed/JimMarley420/spicetify-extension?style=for-the-badge&color=1DB954)](https://github.com/JimMarley420/spicetify-extension/issues?q=is%3Aissue+is%3Aclosed)
[![Pull Requests](https://img.shields.io/github/issues-pr/JimMarley420/spicetify-extension?style=for-the-badge&color=1DB954)](https://github.com/JimMarley420/spicetify-extension/pulls)
[![Contributors](https://img.shields.io/github/contributors/JimMarley420/spicetify-extension?style=for-the-badge&color=1DB954)](https://github.com/JimMarley420/spicetify-extension/graphs/contributors)
[![Last Commit](https://img.shields.io/github/last-commit/JimMarley420/spicetify-extension?style=for-the-badge&color=1DB954)](https://github.com/JimMarley420/spicetify-extension/commits/master)
[![Repo Size](https://img.shields.io/github/repo-size/JimMarley420/spicetify-extension?style=for-the-badge&color=1DB954)](https://github.com/JimMarley420/spicetify-extension)

[![Deno](https://img.shields.io/badge/Built%20With-Deno-black?style=flat-square&logo=deno&logoColor=white)](https://deno.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Biome](https://img.shields.io/badge/Biome-60A5FA?style=flat-square&logo=biome&logoColor=white)](https://biomejs.dev)
[![CI](https://img.shields.io/badge/CI-CircleCI-343434?style=flat-square&logo=circleci&logoColor=white)](https://circleci.com)

</div>

---

## Contents

- [What's Inside](#whats-inside)
- [Installation](#installation)
- [Install via Marketplace](#install-via-marketplace)
- [Development](#development)
- [Versioning](#versioning)
- [Resources](#resources)
- [Contributing](#contributing)
- [License](#license)

---

## What's Inside

| Name | Type | Description | Docs | Status |
|------|------|-------------|------|--------|
| [CustomNight](themes/CustomNight/README.md) | Theme | Customizable night sky with user background support | [docs](themes/CustomNight/README.md) | ✓ Active |
| [Artist Search](extensions/artistSearch/README.md) | Extension | Browse an artist's entire discography from context menu | [docs](extensions/artistSearch/README.md) | ✓ Active |
| [Add to Multiple Playlists](extensions/addToPlaylistMulti/README.md) | Extension | Add tracks to multiple playlists at once | [docs](extensions/addToPlaylistMulti/README.md) | ✓ Active |
| [Bulk Delete Tracks](extensions/bulkDeleteTracks/README.md) | Extension | Delete multiple tracks from a playlist at once | [docs](extensions/bulkDeleteTracks/README.md) | ✓ Active |
| [Copy YouTube Link](extensions/copyYoutube/README.md) | Extension | Copy the YouTube link of any track from the context menu | [docs](extensions/copyYoutube/README.md) | ✓ Active |

---

## Installation

> Requires [Spicetify](https://spicetify.app/) 2.x.

### Themes

1. Copy the `CustomNight` folder to your Themes directory:
   - **Windows:** `%APPDATA%\spicetify\Themes\`
   - **Linux / macOS:** `~/.config/spicetify/Themes/`

2. Apply the theme:

   ```bash
   spicetify config current_theme CustomNight
   spicetify apply
   ```

### Extensions

Copy the desired extension from `dist/` to your Spicetify extensions folder:

| OS | Path |
|----|------|
| Windows | `%APPDATA%\spicetify\Extensions\` |
| macOS / Linux | `~/.config/spicetify/Extensions/` |

Enable it:

```bash
spicetify config extensions <extension-name>.mjs
spicetify apply
```

---

## Install via Marketplace

All extensions and themes are also available on the [Spicetify Marketplace](https://github.com/spicetify/marketplace) — search for "JimMarley420" and install with one click.

[![Open in Marketplace](https://img.shields.io/badge/Spicetify-Marketplace-1DB954?style=for-the-badge&logo=spotify&logoColor=white)](https://github.com/spicetify/marketplace)

---

## Development

```bash
# Build all extensions
deno task build

# Release build (build + lint + validate manifest)
deno task release

# Dev build / watch mode
deno task dev-build
deno task dev-watch

# Theme check & lint
deno task theme:check
deno task theme:lint

# Lint, typecheck & format
deno task check
deno task format

# Tests
deno task test
```

---

## Versioning

This project follows [Semantic Versioning](https://semver.org/) (`vMAJOR.MINOR.PATCH`).

| Commit prefix | Meaning | Version bump |
|---------------|---------|--------------|
| `fix:` | Bug fix | patch (`v1.2.0 → v1.2.1`) |
| `feat:` | New feature | minor (`v1.1.0 → v1.2.0`) |
| `feat!:`, `BREAKING` | Breaking change | major (`v1.x → v2.0.0`) |

Every merge to `master` is tagged automatically by **CircleCI** and published as a [GitHub Release](https://github.com/JimMarley420/spicetify-extension/releases).

Pull requests that touch the build pipeline must carry the `CI/CD` label: it activates the `ci-cd-check` job in the CircleCI workflow (see [CONTRIBUTING.md](CONTRIBUTING.md#cicd-label)).

---

## Resources

Repository links:

- Issues — [open new](https://github.com/JimMarley420/spicetify-extension/issues/new/choose) / [browse all](https://github.com/JimMarley420/spicetify-extension/issues)
- Pull requests — [open](https://github.com/JimMarley420/spicetify-extension/pulls)/propose
- [Releases](https://github.com/JimMarley420/spicetify-extension/releases)
- [Commit history](https://github.com/JimMarley420/spicetify-extension/commits/master)
- [Contributing guide](CONTRIBUTING.md)
- [Security policy](SECURITY.md)
- [Code of conduct](CODE_OF_CONDUCT.md)
- [Discussions](https://github.com/JimMarley420/spicetify-extension/discussions)

---

## Contributing

Want to help? There are plenty of ways:

- Star the repo to show your support
- Open an issue when you find a bug
- Propose a feature
- Submit a pull request

All contributions are welcome — please read [CONTRIBUTING.md](CONTRIBUTING.md) first, and respect the [Code of Conduct](CODE_OF_CONDUCT.md).

---

## License

Copyright (c) 2026 JimMarley420

**You are NOT allowed to:**

- Republish or redistribute on Spicetify Marketplace
- Claim authorship of the original work
- Fork and redistribute (modifications for personal use are allowed)

---

<div align="center">

Made by [JimMarley420](https://github.com/JimMarley420)

[![GitHub followers](https://img.shields.io/github/followers/JimMarley420?style=social)](https://github.com/JimMarley420)

</div>
