![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/JimMarley420/spicetify-extension?utm_source=oss&utm_medium=github&utm_campaign=JimMarley420%2Fspicetify-extension&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)

# 🎵 Spicetify Extensions & Themes

Collection of Spicetify extensions and themes for Spotify.

## All Extensions & Themes

| Name | Type | Description | Marketplace | Status |
|------|------|-------------|-------------|--------|
| [CustomNight](themes/CustomNight/README.md) | Theme | Customizable night sky with user background support | [Marketplace](https://github.com/spicetify/marketplace) | ✅ Active |
| [Artist Search](extensions/artistSearch/README.md) | Extension | Browse an artist's entire discography from context menu | [Marketplace](https://github.com/spicetify/marketplace) | ✅ Active |
| [Add to Multiple Playlists](extensions/addToPlaylistMulti/README.md) | Extension | Add tracks to multiple playlists at once | [Marketplace](https://github.com/spicetify/marketplace) | ✅ Active |
| [Bulk Delete Playlist](extensions/bulkDeletePlaylist/README.md) | Extension | Delete multiple tracks from a playlist at once | [Marketplace](https://github.com/spicetify/marketplace) | ✅ Active |
| [Copy YouTube Link](extensions/copyYoutube/README.md) | Extension | Copy the YouTube link of any track from the context menu | [Marketplace](https://github.com/spicetify/marketplace) | ✅ Active |

---

## Installation

### Themes

1. Copy the `CustomNight` folder to your Themes directory:
   - Windows: `%appdata%\spicetify\Themes\`
   - Linux/macOS: `~/.config/spicetify/Themes/`

2. Apply the theme:
   ```bash
   spicetify config current_theme CustomNight
   spicetify apply
   ```

### Extensions

Copy the desired extension from `dist/` to your Spicetify extensions folder:

| OS | Path |
|---|---|
| Windows | `%APPDATA%\spicetify\Extensions\` |
| macOS / Linux | `~/.config/spicetify/Extensions/` |

Enable:
```bash
spicetify config extensions <extension-name>.mjs
spicetify apply
```

## Development

```bash
# Build all
deno task build

# Release  all
deno task release

# Theme check
deno task theme:check
deno task theme:lint

# Lint
deno task check
deno task format
```

## License

Copyright (c) 2026 JimMarley420

**You are NOT allowed to:**
- Republish or redistribute on Spicetify Marketplace
- Claim authorship of the original work

---

Made by [JimMarley420](https://github.com/JimMarley420/spicetify-extension)
