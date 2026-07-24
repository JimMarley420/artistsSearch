import styles from "./styles.css" with { type: "css" };
import { createModal } from "./modal.tsx";

document.adoptedStyleSheets.push(styles);

function isTrackUri(uri: string): boolean {
  const uriObj = Spicetify.URI.from(uri);
  return !!(uriObj && (uriObj as { type?: string }).type === "track");
}

function isPlaylistUri(uri: string): boolean {
  const uriObj = Spicetify.URI.from(uri);
  return !!(uriObj && (uriObj as { type?: string }).type === "playlist");
}

async function handleMenuClick(uris: string[], _uids?: string[], contextUri?: string) {
  const trackUris = uris.filter(isTrackUri);
  
  if (trackUris.length === 0) {
    Spicetify.showNotification("No tracks selected", true);
    return;
  }
  
  let playlistUri: string | undefined;
  if (contextUri && isPlaylistUri(contextUri)) {
    playlistUri = contextUri;
  }
  
  createModal(trackUris, playlistUri);
}

function shouldAdd(uris: string[]): boolean {
  return uris.some(isTrackUri);
}

const bulkDeleteMenuItem = new Spicetify.ContextMenu.Item(
  "Delete from Playlist",
  handleMenuClick,
  shouldAdd,
  "block" as Spicetify.Icon
);

bulkDeleteMenuItem.register();