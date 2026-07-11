# Copy YouTube Link

Right-click any track in Spotify, copy its YouTube link directly to your clipboard.

**Available on Spicetify Marketplace:** [spicetify-extension](https://github.com/JimMarley420/spicetify-extension)

## Features

- **One-click copy** - Right-click any track and instantly get the YouTube link
- **Smart search** - Automatically cleans track titles (removes "Remastered", "Live", etc.) for better YouTube results
- **Official videos** - Optional preference for official music videos
- **5-minute cache** - Repeated searches for the same track don't hit the YouTube API
- **Secure storage** - API key stored locally via Spicetify LocalStorage

## Setup

1. Get a **YouTube Data API v3** key from [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Click your profile avatar (top-right) > **YouTube Link Settings**
3. Paste your API key and click **Save**

## Usage

1. **Right-click** any track in Spotify
2. Select **"Copy YouTube Link"**
3. The YouTube link is copied to your clipboard

### Notifications

| Message | Meaning |
|---|---|
| YouTube link copied | Success |
| API key missing | Configure API key in settings |
| No result found | YouTube returned no matching videos |
| Invalid API key | Check your API key in settings |
| Quota exceeded | Daily YouTube API limit reached |
| Network error | Check your internet connection |

## Development

```bash
# Build
deno task build

# Watch mode (rebuilds on changes)
deno task watch

# Dev build (auto-deploys to Spotify)
deno task dev-build
deno task dev-watch
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
