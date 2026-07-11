import { PopupModal } from "../../../shared/components/popupModal.tsx";
import { SettingsForm } from "./settings.tsx";
import { getApiKey, getPreferOfficial } from "./storage.ts";
import { getCachedVideoId, setCachedVideoId, buildCacheKey } from "./cache.ts";
import { buildSearchQuery } from "./utils.ts";
import { searchYouTube } from "./youtube.ts";
import { copyToClipboard } from "./clipboard.ts";
import type { TrackInfo } from "./types.ts";
import styles from "./styles.css" with { type: "css" };

document.adoptedStyleSheets.push(styles);

interface GraphQLTrack {
  name?: string;
  artists?: {
    items?: Array<{
      profile?: { name?: string };
      name?: string;
    }>;
  } | Array<{
    profile?: { name?: string };
    name?: string;
  }>;
}

async function getTrackInfo(uri: string): Promise<TrackInfo | null> {
  const defs = Spicetify.GraphQL.Definitions as Record<string, unknown>;
  const trackDefNames = ["queryTrack", "fetchTrack", "getTrack", "track"];

  for (const defName of trackDefNames) {
    const def = defs[defName];
    if (!def) continue;

    try {
      const response = await Spicetify.Platform.GraphQLLoader(def, { uri });
      const data = (response as { data?: Record<string, GraphQLTrack> })?.data;
      if (!data) continue;

      const track: GraphQLTrack | undefined = data.trackUnion || data.track || data.trackV2 || data.track_v2;
      if (!track?.name) continue;

      const artists: string[] = [];
      const artistItems = Array.isArray(track.artists)
        ? track.artists
        : track.artists?.items || [];

      for (const a of artistItems) {
        if (a?.profile?.name) artists.push(a.profile.name);
        else if (a?.name) artists.push(a.name);
      }

      return { name: track.name, artists };
    } catch {
      continue;
    }
  }

  console.warn("[Copy YouTube Link] No compatible GraphQL track definition found");
  return null;
}

async function copyAndNotify(videoId: string) {
  const youtubeUrl = `https://youtu.be/${videoId}`;
  const copied = await copyToClipboard(youtubeUrl);
  Spicetify.showNotification(copied ? "YouTube link copied" : "Failed to copy to clipboard", !copied);
}

async function handleCopyYouTubeLink(uris: string[]) {
  if (!uris || uris.length === 0) {
    Spicetify.showNotification("Could not identify track", true);
    return;
  }

  const uri = uris[0];

  const apiKey = getApiKey();
  if (!apiKey) {
    Spicetify.showNotification("API key missing — configure in YouTube Link Settings", true);
    return;
  }

  const trackInfo = await getTrackInfo(uri);
  if (!trackInfo || !trackInfo.name) {
    Spicetify.showNotification("Could not retrieve track information", true);
    return;
  }

  const preferOfficial = getPreferOfficial();
  const searchQuery = buildSearchQuery(trackInfo.name, trackInfo.artists, preferOfficial);
  const cacheKey = buildCacheKey(trackInfo.name, trackInfo.artists, preferOfficial);

  const cached = getCachedVideoId(cacheKey);
  if (cached) {
    await copyAndNotify(cached);
    return;
  }

  try {
    const result = await searchYouTube(searchQuery, apiKey);

    if (!result) {
      Spicetify.showNotification("No result found", true);
      return;
    }

    setCachedVideoId(cacheKey, result.videoId);
    await copyAndNotify(result.videoId);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);

    switch (message) {
      case "NETWORK_ERROR":
        Spicetify.showNotification("Network error — check your connection", true);
        break;
      case "QUOTA_EXCEEDED":
        Spicetify.showNotification("YouTube API quota exceeded — try again tomorrow", true);
        break;
      case "INVALID_KEY":
        Spicetify.showNotification("Invalid API key — check your settings", true);
        break;
      case "ACCESS_DENIED":
        Spicetify.showNotification("YouTube API access denied", true);
        break;
      default:
        Spicetify.showNotification("An error occurred while searching YouTube", true);
    }
  }
}

function showSettings() {
  PopupModal({
    title: "YouTube API Settings",
    content: <SettingsForm onClose={() => PopupModal.hide()} />,
    template: true,
  });
}

const copyYouTubeMenuItem = new Spicetify.ContextMenu.Item(
  "Copy YouTube Link",
  handleCopyYouTubeLink,
  (uris: string[]) => {
    if (!uris || uris.length === 0) return false;
    return uris.some((uri: string) => {
      const uriObj = Spicetify.URI.from(uri);
      return uriObj && (uriObj as unknown as { type: string }).type === "track";
    });
  },
  "copy" as Spicetify.Icon,
);

setTimeout(() => {
  copyYouTubeMenuItem.register();
}, 0);

new Spicetify.Menu.Item("YouTube Link Settings", true, showSettings, "external-link").register();
