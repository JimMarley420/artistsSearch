# Bulk Delete Tracks from Playlist

Delete multiple tracks from a playlist at once via right-click context menu.

<img width="800" alt="Bulk Delete Tracks from Playlist - Spicetify Extension" src="https://github.com/JimMarley420/spicetify-extension/blob/feat/sort-by-added/extensions/bulkDeleteTracks/assets/preview.png?raw=true" />


## Features

- **Context Menu Integration**: Select tracks in any playlist and delete them all at once
- **Playlist Selector**: Dropdown to choose which playlist to delete from
- **Permission Check**: Only shows playlists where you have delete permission (`canDelete`)
- **Search/Filter**: Filter tracks within the selected playlist by name, artist, or album
- **Multi-Select**: Checkbox system to select multiple tracks
- **Select All**: Quick select/deselect all visible tracks
- **Sortable Columns**: Click column headers to sort by name, artist, album, who added the track, or when it was added
- **Confirmation Modal**: Warns before permanent deletion with track count

## Usage

1. Right-click on one or more tracks in a playlist
2. Select "Bulk Delete from Playlist"
3. Choose the playlist to delete from (must have delete permission)
4. Select the tracks you want to delete (or use search to filter)
5. Click "Delete" and confirm

## Requirements

- Spicetify CLI installed
- Delete permission on the playlist(s)

## Installation

Copy `dist/bulkDeleteTracks.mjs` to your Spicetify extensions folder:

```bash
# Windows
copy dist\bulkDeleteTracks.mjs %APPDATA%\spicetify\Extensions\

# macOS / Linux
cp dist/bulkDeleteTracks.mjs ~/.config/spicetify/Extensions/
```

Then enable:

```bash
spicetify config extensions bulkDeleteTracks.mjs
spicetify apply
```

## Contributing

Found a bug or want to contribute? Here's how you can help:

- **Issues**: [Open an issue](https://github.com/JimMarley420/spicetify-extension/issues/new/choose)
- **Pull Requests**: [Create a PR](https://github.com/JimMarley420/spicetify-extension/compare)
- **Discussion**: [Start a discussion](https://github.com/JimMarley420/spicetify-extension/discussions)

## License

Copyright (c) 2026 JimMarley420

All rights reserved. This extension is provided for personal use only.

**You are NOT allowed to:**
- Republish or redistribute this extension on Spicetify Marketplace
- Claim authorship of the original work
- Fork and redistribute (modifications for personal use are allowed)
