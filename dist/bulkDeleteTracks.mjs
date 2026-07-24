await new Promise((resolve) => Spicetify.Events.webpackLoaded.on(resolve));

// extensions/bulkDeleteTracks/src/styles.css
var sheet = new CSSStyleSheet();
sheet.replaceSync(`.bulk-delete-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.bulk-delete-content {
  background: #181818;
  border-radius: 8px;
  width: 820px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-family: var(--font-family, spotify), sans-serif;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}

.bulk-delete-header {
  padding: 16px 20px;
  border-bottom: 1px solid #282828;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bulk-delete-header-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.bulk-delete-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.15s;
}

.bulk-delete-close:hover {
  background: #282828;
}

.bulk-delete-close svg {
  width: 18px;
  height: 18px;
  fill: #b3b3b3;
  transition: fill 0.15s;
}

.bulk-delete-close:hover svg {
  fill: #fff;
}

.bulk-delete-github {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: background 0.15s;
}

.bulk-delete-github:hover {
  background: #282828;
}

.bulk-delete-github svg {
  width: 18px;
  height: 18px;
  fill: #b3b3b3;
  transition: fill 0.15s;
}

.bulk-delete-github:hover svg {
  fill: #fff;
}

.bulk-delete-playlist-selector {
  padding: 12px 20px;
  border-bottom: 1px solid #282828;
}

.bulk-delete-playlist-label {
  display: block;
  color: #b3b3b3;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.bulk-delete-playlist-select {
  width: 100%;
  padding: 8px 12px;
  background: #3f3f3f;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='%23b3b3b3'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 36px;
}

.bulk-delete-playlist-select:hover {
  background-color: #4a4a4a;
}

.bulk-delete-playlist-select:focus {
  outline: none;
  background-color: #4a4a4a;
}

.bulk-delete-search {
  padding: 10px 20px;
  border-bottom: 1px solid #282828;
}

.bulk-delete-search-wrapper {
  display: flex;
  align-items: center;
  background: #282828;
  border-radius: 4px;
  padding: 0 12px;
}

.bulk-delete-search-icon {
  color: #b3b3b3;
  display: flex;
  align-items: center;
}

.bulk-delete-search-icon svg {
  width: 20px;
  height: 20px;
}

.bulk-delete-search input {
  flex: 1;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 14px;
  padding: 8px 12px;
  outline: none;
}

.bulk-delete-search input::placeholder {
  color: #b3b3b3;
}

.bulk-delete-search input:disabled {
  opacity: 0.5;
}

.bulk-delete-track-info {
  padding: 8px 20px;
  background: #121212;
  border-bottom: 1px solid #282828;
}

.bulk-delete-track-info p {
  color: #b3b3b3;
  font-size: 13px;
  margin: 0;
}

.bulk-delete-track-info span {
  color: #fff;
  font-weight: 600;
}

/* ========== Header Bar (sortable columns) ========== */
.bulk-delete-header-bar {
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 32px;
  background: #121212;
  border-bottom: 1px solid #282828;
  gap: 8px;
  flex-shrink: 0;
}

.bulk-delete-hcell {
  display: flex;
  align-items: center;
  font-size: 11px;
  font-weight: 600;
  color: #b3b3b3;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bulk-delete-hcell-sortable {
  cursor: pointer;
  transition: color 0.15s;
  gap: 4px;
}

.bulk-delete-hcell-sortable:hover {
  color: #fff;
}

/* Sort arrows via pseudo-elements */
.bulk-delete-hcell-sort-asc::after,
.bulk-delete-hcell-sort-desc::after {
  content: "";
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  margin-left: 4px;
  flex-shrink: 0;
}

.bulk-delete-hcell-sort-asc::after {
  border-bottom: 5px solid #1db954;
}

.bulk-delete-hcell-sort-desc::after {
  border-top: 5px solid #1db954;
}

/* Header cell widths - must match item columns */
.bulk-delete-hcell-num {
  width: 32px;
  justify-content: center;
  flex-shrink: 0;
}

.bulk-delete-hcell-check {
  width: 20px;
  margin-right: 8px;
  flex-shrink: 0;
}

.bulk-delete-hcell-img {
  width: 40px;
  flex-shrink: 0;
}

.bulk-delete-hcell-name {
  flex: 3;
  min-width: 0;
}

.bulk-delete-hcell-artist {
  flex: 2;
  min-width: 0;
}

.bulk-delete-hcell-album {
  flex: 2;
  min-width: 0;
}

.bulk-delete-hcell-addedby {
  width: 110px;
  flex-shrink: 0;
}

.bulk-delete-hcell-addedat {
  width: 90px;
  flex-shrink: 0;
}

.bulk-delete-hcell-play {
  width: 180px;
  flex-shrink: 0;
}

/* ========== Track List ========== */
.bulk-delete-list {
  flex: 1;
  overflow-y: auto;
  padding: 0;
  min-height: 400px;
}

.bulk-delete-virtual-window {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  will-change: transform;
}

.bulk-delete-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 400px;
  color: #b3b3b3;
  font-size: 14px;
}

.bulk-delete-item {
  display: flex;
  align-items: center;
  padding: 4px 16px;
  cursor: pointer;
  transition: background 0.15s;
  gap: 8px;
  height: 58px;
  box-sizing: border-box;
}

.bulk-delete-item:hover {
  background: #282828;
}

.bulk-delete-item.selected {
  background: rgba(29, 185, 84, 0.1);
}

.bulk-delete-track-number {
  width: 32px;
  text-align: center;
  color: #b3b3b3;
  font-size: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bulk-delete-playing-indicator {
  width: 12px;
  height: 12px;
  display: inline-block;
}

.bulk-delete-playing-indicator::before {
  content: "";
  display: block;
  width: 12px;
  height: 12px;
  background: #1db954;
  border-radius: 50%;
  animation: bulk-delete-pulse 1s ease-in-out infinite;
}

@keyframes bulk-delete-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.bulk-delete-track-image-container {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 4px;
  overflow: hidden;
  background: #282828;
}

.bulk-delete-track-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bulk-delete-item-info {
  flex: 3;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
  overflow: hidden;
}

.bulk-delete-item-title {
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  text-decoration: none;
  display: block;
  line-height: 1.3;
}

.bulk-delete-item-title:hover {
  text-decoration: underline;
}

.bulk-delete-item-artist {
  color: #b3b3b3;
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bulk-delete-item-album {
  color: #727272;
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Added By / Added At meta column */
.bulk-delete-item-meta {
  width: 200px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.bulk-delete-item-addedby {
  color: #b3b3b3;
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bulk-delete-item-addedat {
  color: #727272;
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ========== Playback Controls ========== */
.bulk-delete-playback-controls {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 180px;
  flex-shrink: 0;
}

.bulk-delete-playback-button {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
  flex-shrink: 0;
}

.bulk-delete-playback-button:hover {
  background: #282828;
}

.bulk-delete-playback-button svg {
  width: 14px;
  height: 14px;
}

.bulk-delete-slider-container {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  min-width: 0;
}

.bulk-delete-slider-time {
  color: #b3b3b3;
  font-size: 10px;
  min-width: 30px;
  text-align: center;
}

.bulk-delete-slider {
  flex: 1;
  height: 3px;
  -webkit-appearance: none;
  appearance: none;
  background: #4a4a4a;
  border-radius: 2px;
  cursor: pointer;
  min-width: 40px;
}

.bulk-delete-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
}

.bulk-delete-slider:hover::-webkit-slider-thumb {
  transform: scale(1.2);
}

/* ========== Checkbox ========== */
.bulk-delete-checkbox-wrapper {
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.bulk-delete-checkbox {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.bulk-delete-checkbox-custom {
  width: 18px;
  height: 18px;
  border: 2px solid #b3b3b3;
  border-radius: 4px;
  transition: all 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #282828;
}

.bulk-delete-checkbox:checked + .bulk-delete-checkbox-custom {
  background: #1db954;
  border-color: #1db954;
}

.bulk-delete-checkbox:checked + .bulk-delete-checkbox-custom::after {
  content: "";
  width: 6px;
  height: 10px;
  border: solid #000;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  margin-bottom: 2px;
}

/* ========== Buttons ========== */
.bulk-delete-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-top: 1px solid #282828;
}

.bulk-delete-select-all {
  background: transparent;
  border: none;
  color: #1db954;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  padding: 6px 12px;
  transition: color 0.2s;
}

.bulk-delete-select-all:hover {
  color: #1ed760;
}

.bulk-delete-button-group {
  display: flex;
  gap: 12px;
}

.bulk-delete-btn {
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.bulk-delete-btn.cancel {
  background: transparent;
  border: 1px solid #727272;
  color: #fff;
}

.bulk-delete-btn.cancel:hover {
  border-color: #fff;
}

.bulk-delete-btn.delete {
  background: #e91429;
  color: #fff;
}

.bulk-delete-btn.delete:hover:not(:disabled) {
  background: #f03727;
}

.bulk-delete-btn.delete:disabled {
  background: #535353;
  color: #181818;
  cursor: not-allowed;
}

/* ========== Confirmation Modal ========== */
.bulk-delete-confirm-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}

.bulk-delete-confirm-content {
  background: #181818;
  border-radius: 8px;
  width: 480px;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}

.bulk-delete-confirm-header {
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
}

.bulk-delete-confirm-warning {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: rgba(233, 20, 41, 0.1);
  border-radius: 4px;
  margin-bottom: 20px;
}

.bulk-delete-confirm-warning svg {
  width: 24px;
  height: 24px;
  color: #e91429;
  flex-shrink: 0;
}

.bulk-delete-confirm-warning p {
  color: #fff;
  font-size: 14px;
  margin: 0;
  line-height: 1.4;
}

.bulk-delete-confirm-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
}

.bulk-delete-confirm-track-list {
  max-height: 300px;
  overflow-y: auto;
  border-radius: 4px;
  background: #282828;
}

.bulk-delete-confirm-track-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-bottom: 1px solid #333;
}

.bulk-delete-confirm-track-item:last-child {
  border-bottom: none;
}

.bulk-delete-confirm-track-image {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  object-fit: cover;
  background: #333;
}

.bulk-delete-confirm-track-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.bulk-delete-confirm-track-title {
  color: #fff;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bulk-delete-confirm-track-artist-album {
  color: #a0a0a0;
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
`);
var styles_default = sheet;

// extensions/bulkDeleteTracks/src/modal.tsx
async function fetchAllLibraryContents() {
  const LibraryAPI = Spicetify.Platform?.LibraryAPI;
  if (!LibraryAPI) return [];
  const pageSize = 1e4;
  const items = [];
  let offset = 0;
  while (true) {
    const response = await LibraryAPI.getContents({
      offset,
      limit: pageSize,
      flattenTree: true
    });
    const pageItems = response?.items || [];
    items.push(...pageItems);
    if (pageItems.length < pageSize) {
      break;
    }
    offset += pageSize;
  }
  return items;
}
async function fetchPlaylistsWithDeletePermission() {
  try {
    const items = await fetchAllLibraryContents();
    const playlists = [];
    for (const item of items) {
      const playlist = item;
      if (playlist.type === "playlist" && (playlist.canDelete || playlist.canAddTo)) {
        playlists.push({
          name: playlist.name || "Unknown",
          uri: playlist.uri || "",
          canDelete: playlist.canDelete || false,
          canAddTo: playlist.canAddTo || false
        });
      }
    }
    return playlists;
  } catch (e) {
    return [];
  }
}
function formatTime(ms) {
  if (ms == null || isNaN(ms) || ms <= 0) return "0:00";
  const s = Math.floor(ms / 1e3);
  return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;
}
function formatDate(isoStr) {
  if (!isoStr) return "";
  try {
    const date = new Date(isoStr);
    if (isNaN(date.getTime())) return isoStr;
    return date.toLocaleDateString(void 0, {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  } catch {
    return isoStr;
  }
}
function createPlaybackControl(uri, duration) {
  const container = document.createElement("div");
  container.className = "bulk-delete-playback-controls";
  container.dataset.uri = uri;
  const playBtn = document.createElement("button");
  playBtn.className = "bulk-delete-playback-button";
  playBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>`;
  playBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    try {
      const player = Spicetify.Player;
      if (!player) return;
      const currentUri = player?.data?.item?.uri;
      if (currentUri === uri) {
        if (player?.isPlaying()) {
          player.pause();
        } else {
          player.play();
        }
      } else {
        player.playUri(uri);
      }
    } catch (err) {
      Spicetify.Player?.playUri(uri);
    }
  });
  const sliderContainer = document.createElement("div");
  sliderContainer.className = "bulk-delete-slider-container";
  const currentTime = document.createElement("span");
  currentTime.className = "bulk-delete-slider-time";
  currentTime.textContent = "0:00";
  const slider = document.createElement("input");
  slider.type = "range";
  slider.className = "bulk-delete-slider";
  slider.min = "0";
  slider.max = duration > 0 ? duration.toString() : "1000";
  slider.value = "0";
  slider.step = "1000";
  const totalTime = document.createElement("span");
  totalTime.className = "bulk-delete-slider-time";
  totalTime.textContent = formatTime(duration);
  slider.addEventListener("input", () => {
    currentTime.textContent = formatTime(parseInt(slider.value));
  });
  slider.addEventListener("change", () => {
    try {
      Spicetify.Player?.seek(parseInt(slider.value));
    } catch (e) {
      console.error("Failed to seek:", e);
    }
  });
  sliderContainer.appendChild(currentTime);
  sliderContainer.appendChild(slider);
  sliderContainer.appendChild(totalTime);
  container.appendChild(playBtn);
  container.appendChild(sliderContainer);
  return container;
}
function createTrackImage(url) {
  const imgContainer = document.createElement("div");
  imgContainer.className = "bulk-delete-track-image-container";
  const img = document.createElement("img");
  img.className = "bulk-delete-track-image";
  img.src = url || "";
  img.loading = "lazy";
  img.onerror = () => {
    img.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23282828' d='M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z'/%3E%3C/svg%3E";
  };
  imgContainer.appendChild(img);
  return imgContainer;
}
function createPlayingIndicator() {
  const indicator = document.createElement("div");
  indicator.className = "bulk-delete-playing-indicator";
  return indicator;
}
async function getPlaylistTracks(playlistUri, onProgress, checkUpTo) {
  let tracks = [];
  try {
    const PlaylistAPI = Spicetify.Platform?.PlaylistAPI;
    if (!PlaylistAPI) {
      throw new Error("PlaylistAPI not available");
    }
    const pageSize = 200;
    let offset = 0;
    while (true) {
      const response = await PlaylistAPI.getContents(playlistUri, {
        offset,
        limit: pageSize
      });
      if (!response?.items?.length) {
        break;
      }
      for (const item of response.items) {
        if (item?.uri) {
          let name = "Unknown Track";
          let artist = "Unknown Artist";
          let album = "Unknown Album";
          let imageUrl = "";
          let duration = 0;
          let uid = item.uid || "";
          let addedBy = "";
          let addedAt = "";
          if (item.name) name = item.name;
          if (item.artists?.[0]?.name) artist = item.artists[0].name;
          if (item.album?.name) album = item.album.name;
          const albumUri = item.album?.uri || "";
          if (item.album?.images?.[0]?.url) imageUrl = item.album.images[0].url;
          else if (item.album?.coverArt?.sources?.[0]?.url) imageUrl = item.album.coverArt.sources[0].url;
          const itemAny = item;
          let durationVal = 0;
          if (itemAny.duration && typeof itemAny.duration === "object") {
            const dur = itemAny.duration;
            if (dur.totalMs) durationVal = dur.totalMs;
            else if (dur.milliseconds) durationVal = dur.milliseconds;
          } else if (typeof itemAny.duration === "number") {
            durationVal = itemAny.duration;
          } else if (typeof itemAny.durationMs === "number") {
            durationVal = itemAny.durationMs;
          }
          duration = durationVal;
          const addedByField = itemAny.addedBy || itemAny.added_by;
          if (addedByField) {
            if (typeof addedByField === "string") {
              addedBy = addedByField;
            } else if (typeof addedByField === "object") {
              const ab = addedByField;
              addedBy = ab.name || ab.displayName || ab.display_name || ab.id || "";
            }
          }
          const addedAtField = itemAny.addedAt || itemAny.added_at;
          if (addedAtField) {
            if (typeof addedAtField === "string") {
              addedAt = addedAtField;
            } else if (typeof addedAtField === "object") {
              const aa = addedAtField;
              addedAt = aa.isoString || aa.iso_str || "";
            }
          }
          tracks.push({
            uri: item.uri,
            name,
            artist,
            album,
            albumUri,
            imageUrl,
            duration,
            uid,
            addedBy,
            addedAt
          });
        }
      }
      onProgress?.(tracks, tracks.length);
      if (checkUpTo && tracks.length >= checkUpTo) {
        break;
      }
      if (response.items.length < pageSize) {
        break;
      }
      offset += pageSize;
    }
  } catch (e) {
    console.error("Error fetching playlist tracks:", e);
    throw e;
  }
  return tracks;
}
async function deleteTracksFromPlaylist(playlistUri, tracks) {
  const PlaylistAPI = Spicetify.Platform?.PlaylistAPI;
  if (!PlaylistAPI) {
    return false;
  }
  try {
    const trackList = tracks.map((t) => ({
      uri: t.uri,
      uid: t.uid
    }));
    await PlaylistAPI.remove(playlistUri, trackList);
    return true;
  } catch (e) {
    try {
      await PlaylistAPI.remove(playlistUri, tracks.map((t) => t.uri));
      return true;
    } catch (e2) {
      console.error("Delete failed:", e2);
      return false;
    }
  }
}
function createDeleteConfirmModal(tracks, playlistName, onConfirm, onCancel) {
  const overlay = document.createElement("div");
  overlay.className = "bulk-delete-confirm-overlay";
  const content = document.createElement("div");
  content.className = "bulk-delete-confirm-content";
  const header = document.createElement("div");
  header.className = "bulk-delete-confirm-header";
  header.textContent = "Delete Tracks";
  const warning = document.createElement("div");
  warning.className = "bulk-delete-confirm-warning";
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("fill", "currentColor");
  path.setAttribute("d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z");
  svg.appendChild(path);
  const p = document.createElement("p");
  p.appendChild(document.createTextNode("This will permanently remove "));
  const strong1 = document.createElement("strong");
  strong1.textContent = tracks.length.toString();
  p.appendChild(strong1);
  p.appendChild(document.createTextNode(" track(s) from "));
  const strong2 = document.createElement("strong");
  strong2.textContent = playlistName;
  p.appendChild(strong2);
  p.appendChild(document.createTextNode(". This action cannot be undone."));
  warning.appendChild(svg);
  warning.appendChild(p);
  const trackList = document.createElement("div");
  trackList.className = "bulk-delete-confirm-track-list";
  for (const track of tracks) {
    const trackItem = document.createElement("div");
    trackItem.className = "bulk-delete-confirm-track-item";
    const img = document.createElement("img");
    img.className = "bulk-delete-confirm-track-image";
    img.src = track.imageUrl || "https://www.scdn.co/i/_global/favicon.png";
    img.alt = "";
    const info = document.createElement("div");
    info.className = "bulk-delete-confirm-track-info";
    const title = document.createElement("span");
    title.className = "bulk-delete-confirm-track-title";
    title.textContent = track.name;
    const artistAlbum = document.createElement("span");
    artistAlbum.className = "bulk-delete-confirm-track-artist-album";
    artistAlbum.textContent = `${track.artist} \u2014 ${track.album}`;
    info.appendChild(title);
    info.appendChild(artistAlbum);
    trackItem.appendChild(img);
    trackItem.appendChild(info);
    trackList.appendChild(trackItem);
  }
  const buttons = document.createElement("div");
  buttons.className = "bulk-delete-confirm-buttons";
  const cancelBtn = document.createElement("button");
  cancelBtn.className = "bulk-delete-btn cancel";
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", () => {
    overlay.remove();
    onCancel();
  });
  const confirmBtn = document.createElement("button");
  confirmBtn.className = "bulk-delete-btn delete";
  confirmBtn.textContent = "Delete";
  confirmBtn.addEventListener("click", () => {
    overlay.remove();
    onConfirm();
  });
  buttons.appendChild(cancelBtn);
  buttons.appendChild(confirmBtn);
  content.appendChild(header);
  content.appendChild(warning);
  content.appendChild(trackList);
  content.appendChild(buttons);
  overlay.appendChild(content);
  document.body.appendChild(overlay);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.remove();
      onCancel();
    }
  });
}
function createModal(trackUris, preferredPlaylistUri) {
  let allPlaylists = [];
  let currentTracks = [];
  let filteredTracks = [];
  const selectedSet = /* @__PURE__ */ new Set();
  let currentPlaylistUri = preferredPlaylistUri || null;
  let updateInterval = null;
  let sortColumn = "";
  let sortDirection = "asc";
  const getSelectionKey = (track) => track.uid || track.uri;
  const modal = document.createElement("div");
  let renderedTracksRef = [];
  let scrollListenerAdded = false;
  modal.className = "bulk-delete-modal";
  const cleanupAndClose = () => {
    if (updateInterval) {
      window.clearInterval(updateInterval);
      updateInterval = null;
    }
    modal.remove();
  };
  const content = document.createElement("div");
  content.className = "bulk-delete-content";
  const header = document.createElement("div");
  header.className = "bulk-delete-header";
  const headerTitle = document.createElement("span");
  headerTitle.textContent = "Bulk Delete from Playlist";
  const headerRight = document.createElement("div");
  headerRight.className = "bulk-delete-header-right";
  const githubLink = document.createElement("a");
  githubLink.className = "bulk-delete-github";
  githubLink.href = "https://github.com/JimMarley420/spicetify-extension";
  githubLink.target = "_blank";
  githubLink.rel = "noopener noreferrer";
  githubLink.setAttribute("aria-label", "Open GitHub repository");
  githubLink.innerHTML = `<svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;
  const closeBtn = document.createElement("button");
  closeBtn.className = "bulk-delete-close";
  closeBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`;
  headerRight.appendChild(githubLink);
  headerRight.appendChild(closeBtn);
  header.appendChild(headerTitle);
  header.appendChild(headerRight);
  const playlistSelector = document.createElement("div");
  playlistSelector.className = "bulk-delete-playlist-selector";
  const playlistLabel = document.createElement("label");
  playlistLabel.className = "bulk-delete-playlist-label";
  playlistLabel.textContent = "Select Playlist";
  const playlistSelect = document.createElement("select");
  playlistSelect.className = "bulk-delete-playlist-select";
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Select a playlist";
  placeholder.disabled = true;
  playlistSelect.appendChild(placeholder);
  playlistSelector.appendChild(playlistLabel);
  playlistSelector.appendChild(playlistSelect);
  const searchContainer = document.createElement("div");
  searchContainer.className = "bulk-delete-search";
  const searchWrapper = document.createElement("div");
  searchWrapper.className = "bulk-delete-search-wrapper";
  const searchIcon = document.createElement("div");
  searchIcon.className = "bulk-delete-search-icon";
  searchIcon.innerHTML = `<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`;
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search tracks in playlist...";
  searchInput.disabled = true;
  searchWrapper.appendChild(searchIcon);
  searchWrapper.appendChild(searchInput);
  searchContainer.appendChild(searchWrapper);
  const trackInfo = document.createElement("div");
  trackInfo.className = "bulk-delete-track-info";
  trackInfo.innerHTML = `<p><span>0</span> track(s) selected from playlist</p>`;
  const headerBar = document.createElement("div");
  headerBar.className = "bulk-delete-header-bar";
  const sortableColumns = [
    { key: "", label: "#", className: "bulk-delete-hcell-num" },
    { key: "", label: "", className: "bulk-delete-hcell-check" },
    { key: "", label: "", className: "bulk-delete-hcell-img" },
    { key: "name", label: "Title", className: "bulk-delete-hcell-name" },
    { key: "artist", label: "Artist", className: "bulk-delete-hcell-artist" },
    { key: "album", label: "Album", className: "bulk-delete-hcell-album" },
    { key: "addedBy", label: "Added By", className: "bulk-delete-hcell-addedby" },
    { key: "addedAt", label: "Added At", className: "bulk-delete-hcell-addedat" },
    { key: "", label: "", className: "bulk-delete-hcell-play" }
  ];
  const headerCells = /* @__PURE__ */ new Map();
  for (const col of sortableColumns) {
    const cell = document.createElement("div");
    cell.className = `bulk-delete-hcell ${col.className}`;
    if (col.key) {
      cell.classList.add("bulk-delete-hcell-sortable");
      cell.textContent = col.label;
      cell.dataset.sortKey = col.key;
      headerCells.set(col.key, cell);
      cell.addEventListener("click", () => {
        if (sortColumn === col.key) {
          sortDirection = sortDirection === "asc" ? "desc" : "asc";
        } else {
          sortColumn = col.key;
          sortDirection = "asc";
        }
        updateSortIndicators();
        applySortAndRender();
      });
    } else {
      cell.textContent = col.label;
    }
    headerBar.appendChild(cell);
  }
  function updateSortIndicators() {
    headerCells.forEach((cell, key) => {
      cell.classList.remove("bulk-delete-hcell-sort-asc", "bulk-delete-hcell-sort-desc");
      if (key === sortColumn) {
        cell.classList.add(sortDirection === "asc" ? "bulk-delete-hcell-sort-asc" : "bulk-delete-hcell-sort-desc");
      }
    });
  }
  function compareTracks(a, b, col, dir) {
    let result = 0;
    switch (col) {
      case "name":
        result = a.name.localeCompare(b.name);
        break;
      case "artist":
        result = a.artist.localeCompare(b.artist);
        break;
      case "album":
        result = a.album.localeCompare(b.album);
        break;
      case "addedBy":
        result = a.addedBy.localeCompare(b.addedBy);
        break;
      case "addedAt":
        if (!a.addedAt && !b.addedAt) result = 0;
        else if (!a.addedAt) result = 1;
        else if (!b.addedAt) result = -1;
        else if (a.addedAt < b.addedAt) result = -1;
        else if (a.addedAt > b.addedAt) result = 1;
        else result = 0;
        break;
    }
    return dir === "asc" ? result : -result;
  }
  function applySortAndRender() {
    if (sortColumn) {
      filteredTracks = [...filteredTracks].sort((a, b) => compareTracks(a, b, sortColumn, sortDirection));
    } else {
      filteredTracks = [...currentTracks].filter(
        (t) => t.name.toLowerCase().includes(searchInput.value.toLowerCase()) || t.artist.toLowerCase().includes(searchInput.value.toLowerCase()) || t.album.toLowerCase().includes(searchInput.value.toLowerCase())
      );
    }
    renderTracks(filteredTracks);
    updateButtonState();
  }
  const trackList = document.createElement("div");
  trackList.className = "bulk-delete-list";
  const emptyState = document.createElement("div");
  emptyState.className = "bulk-delete-empty";
  emptyState.textContent = "Select a playlist first";
  trackList.appendChild(emptyState);
  const ITEM_HEIGHT = 58;
  const BUFFER = 8;
  function renderTracks(tracks) {
    const shouldResetScroll = renderedTracksRef !== tracks;
    renderedTracksRef = tracks;
    if (tracks.length === 0) {
      trackList.innerHTML = "";
      const emptyMsg = searchInput.value ? "No tracks found" : "Playlist is empty";
      const empty = document.createElement("div");
      empty.className = "bulk-delete-empty";
      empty.textContent = emptyMsg;
      trackList.appendChild(empty);
      return;
    }
    emptyState.style.display = "none";
    trackList.style.position = "relative";
    if (!scrollListenerAdded) {
      scrollListenerAdded = true;
      trackList.addEventListener("scroll", () => {
        renderTracks(renderedTracksRef);
      });
    }
    let spacer = trackList.querySelector(".bulk-delete-virtual-spacer");
    if (!spacer) {
      spacer = document.createElement("div");
      spacer.className = "bulk-delete-virtual-spacer";
      trackList.appendChild(spacer);
    }
    let windowEl = trackList.querySelector(".bulk-delete-virtual-window");
    if (!windowEl) {
      windowEl = document.createElement("div");
      windowEl.className = "bulk-delete-virtual-window";
      trackList.appendChild(windowEl);
    }
    if (shouldResetScroll) {
      trackList.scrollTop = 0;
    }
    const totalHeight = tracks.length * ITEM_HEIGHT;
    spacer.style.height = `${totalHeight}px`;
    spacer.style.pointerEvents = "none";
    const scrollTop = trackList.scrollTop;
    const viewportHeight = trackList.clientHeight;
    const startIndex = Math.max(0, Math.floor(scrollTop / ITEM_HEIGHT) - BUFFER);
    const endIndex = Math.min(tracks.length, Math.ceil((scrollTop + viewportHeight) / ITEM_HEIGHT) + BUFFER);
    windowEl.style.transform = `translateY(${startIndex * ITEM_HEIGHT}px)`;
    windowEl.innerHTML = "";
    const currentPlayingUri = Spicetify.Player?.data?.item?.uri || null;
    for (let i = startIndex; i < endIndex; i++) {
      const track = tracks[i];
      const isPlaying = currentPlayingUri === track.uri;
      const item = document.createElement("div");
      item.className = "bulk-delete-item" + (selectedSet.has(getSelectionKey(track)) ? " selected" : "");
      item.setAttribute("data-uri", track.uri);
      item.setAttribute("data-index", i.toString());
      item.style.cursor = "pointer";
      item.addEventListener("click", (e) => {
        if (e.target.closest(".bulk-delete-checkbox-wrapper") || e.target.closest(".bulk-delete-playback-controls")) {
          return;
        }
        checkbox.checked = !checkbox.checked;
        const key = getSelectionKey(track);
        if (checkbox.checked) {
          selectedSet.add(key);
          item.classList.add("selected");
        } else {
          selectedSet.delete(key);
          item.classList.remove("selected");
        }
        updateButtonState();
      });
      const trackNumber = document.createElement("span");
      trackNumber.className = "bulk-delete-track-number";
      if (isPlaying) {
        trackNumber.appendChild(createPlayingIndicator());
      } else {
        trackNumber.textContent = (i + 1).toString();
      }
      const image = createTrackImage(track.imageUrl);
      const info = document.createElement("div");
      info.className = "bulk-delete-item-info";
      const title = document.createElement("a");
      title.className = "bulk-delete-item-title";
      title.href = track.albumUri;
      title.textContent = track.name;
      title.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (track.albumUri.startsWith("spotify:album:")) {
          const path = track.albumUri.replace("spotify:album:", "/album/");
          Spicetify.Platform?.History?.push(path);
        }
      });
      const artist = document.createElement("span");
      artist.className = "bulk-delete-item-artist";
      artist.textContent = track.artist;
      const album = document.createElement("span");
      album.className = "bulk-delete-item-album";
      album.textContent = track.album;
      info.appendChild(title);
      info.appendChild(artist);
      info.appendChild(album);
      const metaInfo = document.createElement("div");
      metaInfo.className = "bulk-delete-item-meta";
      const addedByEl = document.createElement("span");
      addedByEl.className = "bulk-delete-item-addedby";
      addedByEl.textContent = track.addedBy || "";
      addedByEl.title = track.addedBy ? `Added by: ${track.addedBy}` : "";
      const addedAtEl = document.createElement("span");
      addedAtEl.className = "bulk-delete-item-addedat";
      const formattedDate = formatDate(track.addedAt);
      addedAtEl.textContent = formattedDate;
      addedAtEl.title = track.addedAt ? `Added: ${track.addedAt}` : "";
      metaInfo.appendChild(addedByEl);
      metaInfo.appendChild(addedAtEl);
      const playback = createPlaybackControl(track.uri, track.duration);
      const checkboxWrapper = document.createElement("div");
      checkboxWrapper.className = "bulk-delete-checkbox-wrapper";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "bulk-delete-checkbox";
      checkbox.checked = selectedSet.has(getSelectionKey(track));
      const customCheckbox = document.createElement("div");
      customCheckbox.className = "bulk-delete-checkbox-custom";
      checkboxWrapper.appendChild(checkbox);
      checkboxWrapper.appendChild(customCheckbox);
      checkbox.addEventListener("change", () => {
        const key = getSelectionKey(track);
        if (checkbox.checked) {
          selectedSet.add(key);
          item.classList.add("selected");
        } else {
          selectedSet.delete(key);
          item.classList.remove("selected");
        }
        updateButtonState();
      });
      item.appendChild(trackNumber);
      item.appendChild(checkboxWrapper);
      item.appendChild(image);
      item.appendChild(info);
      item.appendChild(metaInfo);
      item.appendChild(playback);
      windowEl.appendChild(item);
    }
  }
  function filterTracks() {
    const query = searchInput.value.toLowerCase();
    let filtered = currentTracks.filter(
      (t) => t.name.toLowerCase().includes(query) || t.artist.toLowerCase().includes(query) || t.album.toLowerCase().includes(query)
    );
    if (sortColumn) {
      filtered.sort((a, b) => compareTracks(a, b, sortColumn, sortDirection));
    }
    filteredTracks = filtered;
    renderTracks(filteredTracks);
    updateButtonState();
  }
  function updateButtonState() {
    const selectedCount = selectedSet.size;
    trackInfo.innerHTML = `<p><span>${selectedCount}</span> track(s) selected from playlist</p>`;
    deleteBtn.disabled = selectedCount === 0;
    if (selectedCount === 0) {
      selectAllBtn.textContent = "Select All";
    } else if (selectedCount === filteredTracks.length) {
      selectAllBtn.textContent = "Deselect All";
    } else {
      selectAllBtn.textContent = "Select All";
    }
  }
  async function selectPlaylist(uri) {
    if (!uri) return;
    currentPlaylistUri = uri;
    playlistSelect.value = uri;
    sortColumn = "";
    sortDirection = "asc";
    updateSortIndicators();
    emptyState.textContent = "Loading tracks...";
    trackList.innerHTML = "";
    trackList.appendChild(emptyState);
    try {
      currentTracks = await getPlaylistTracks(uri, (tracks, totalLoaded) => {
        if (currentPlaylistUri !== uri) return;
        emptyState.textContent = `Loaded ${totalLoaded} track(s)...`;
      });
      if (currentPlaylistUri !== uri) return;
      filteredTracks = [...currentTracks];
      selectedSet.clear();
      searchInput.disabled = false;
      searchInput.value = "";
      for (const trackUri of trackUris) {
        const track = currentTracks.find((t) => t.uri === trackUri);
        if (track) {
          selectedSet.add(getSelectionKey(track));
        }
      }
      renderTracks(filteredTracks);
      updateButtonState();
      if (selectedSet.size > 0) {
        const scrollIndex = filteredTracks.findIndex((t) => selectedSet.has(getSelectionKey(t)));
        if (scrollIndex > 0) {
          const viewportHeight = trackList.clientHeight || 400;
          trackList.scrollTop = Math.max(0, scrollIndex * ITEM_HEIGHT - viewportHeight / 2 + ITEM_HEIGHT / 2);
        }
      }
    } catch (e) {
      if (currentPlaylistUri !== uri) return;
      emptyState.textContent = "Failed to load tracks";
      trackList.appendChild(emptyState);
      Spicetify.showNotification("Failed to load tracks", true);
    }
  }
  function resetToEmpty() {
    currentPlaylistUri = null;
    currentTracks = [];
    filteredTracks = [];
    selectedSet.clear();
    searchInput.disabled = true;
    searchInput.value = "";
    sortColumn = "";
    sortDirection = "asc";
    updateSortIndicators();
    trackList.innerHTML = "";
    emptyState.textContent = "Select a playlist first";
    trackList.appendChild(emptyState);
    updateButtonState();
  }
  async function loadPlaylists() {
    try {
      allPlaylists = await fetchPlaylistsWithDeletePermission();
      allPlaylists.sort((a, b) => a.name.localeCompare(b.name));
      for (const playlist of allPlaylists) {
        const option = document.createElement("option");
        option.value = playlist.uri;
        option.textContent = playlist.name;
        playlistSelect.appendChild(option);
      }
      if (currentPlaylistUri && allPlaylists.some((p) => p.uri === currentPlaylistUri)) {
        await selectPlaylist(currentPlaylistUri);
        return;
      }
      if (trackUris.length > 0 && allPlaylists.length > 0) {
        for (const playlist of allPlaylists) {
          if (playlist.uri === currentPlaylistUri) continue;
          try {
            const tracks = await getPlaylistTracks(playlist.uri, void 0, trackUris.length * 2);
            const trackUrisSet = new Set(tracks.map((t) => t.uri));
            if (trackUris.some((uri) => trackUrisSet.has(uri))) {
              await selectPlaylist(playlist.uri);
              return;
            }
          } catch (e) {
          }
        }
      }
    } catch (e) {
      Spicetify.showNotification("Failed to load playlists", true);
    }
  }
  loadPlaylists();
  playlistSelect.addEventListener("change", async () => {
    const selectedUri = playlistSelect.value;
    if (selectedUri) {
      await selectPlaylist(selectedUri);
    } else {
      resetToEmpty();
    }
  });
  let searchTimeout = null;
  searchInput.addEventListener("input", () => {
    if (searchTimeout) {
      window.clearTimeout(searchTimeout);
    }
    searchTimeout = window.setTimeout(() => {
      filterTracks();
    }, 150);
  });
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "bulk-delete-buttons";
  const selectAllBtn = document.createElement("button");
  selectAllBtn.className = "bulk-delete-select-all";
  selectAllBtn.textContent = "Select All";
  selectAllBtn.addEventListener("click", () => {
    if (selectedSet.size === filteredTracks.length) {
      selectedSet.clear();
    } else {
      filteredTracks.forEach((t) => selectedSet.add(getSelectionKey(t)));
    }
    renderTracks(filteredTracks);
    updateButtonState();
  });
  const buttonGroup = document.createElement("div");
  buttonGroup.className = "bulk-delete-button-group";
  const cancelBtn = document.createElement("button");
  cancelBtn.className = "bulk-delete-btn cancel";
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", () => cleanupAndClose());
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "bulk-delete-btn delete";
  deleteBtn.textContent = "Delete";
  deleteBtn.disabled = true;
  deleteBtn.addEventListener("click", async () => {
    if (!currentPlaylistUri) return;
    const playlist = allPlaylists.find((p) => p.uri === currentPlaylistUri);
    const playlistName = playlist?.name || "Unknown Playlist";
    const trackCount = selectedSet.size;
    const tracksToDelete = currentTracks.filter((t) => selectedSet.has(getSelectionKey(t)));
    createDeleteConfirmModal(
      tracksToDelete,
      playlistName,
      async () => {
        const tracksWithUid = tracksToDelete.map((t) => ({ uri: t.uri, uid: t.uid }));
        const success = await deleteTracksFromPlaylist(currentPlaylistUri, tracksWithUid);
        if (success) {
          Spicetify.showNotification(`Deleted ${trackCount} track(s) from playlist`);
          currentTracks = currentTracks.filter((t) => !selectedSet.has(getSelectionKey(t)));
          filteredTracks = filteredTracks.filter((t) => !selectedSet.has(getSelectionKey(t)));
          selectedSet.clear();
          renderTracks(filteredTracks);
          updateButtonState();
        } else {
          Spicetify.showNotification("Failed to delete tracks", true);
        }
      },
      () => {
      }
    );
  });
  buttonGroup.appendChild(cancelBtn);
  buttonGroup.appendChild(deleteBtn);
  buttonContainer.appendChild(selectAllBtn);
  buttonContainer.appendChild(buttonGroup);
  content.appendChild(header);
  content.appendChild(playlistSelector);
  content.appendChild(searchContainer);
  content.appendChild(trackInfo);
  content.appendChild(headerBar);
  content.appendChild(trackList);
  content.appendChild(buttonContainer);
  modal.appendChild(content);
  document.body.appendChild(modal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      cleanupAndClose();
    }
  });
  closeBtn.addEventListener("click", cleanupAndClose);
  const updatePlaybackState = () => {
    const player = Spicetify.Player;
    if (!player?.data?.item) {
      return;
    }
    const currentUri = player.data.item.uri;
    const isPlaying = player.isPlaying();
    const position = player.getProgress();
    const duration = player.getDuration() || player.data.item.duration?.totalMs || 0;
    trackList.querySelectorAll(".bulk-delete-playback-controls").forEach((ctrl) => {
      const playBtn = ctrl.querySelector(".bulk-delete-playback-button");
      const slider = ctrl.querySelector(".bulk-delete-slider");
      const currentTime = ctrl.querySelector(".bulk-delete-slider-time");
      if (ctrl.dataset.uri === currentUri) {
        if (isPlaying) {
          playBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="currentColor"/></svg>`;
        } else {
          playBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>`;
        }
        if (slider) {
          slider.value = position.toString();
          slider.max = duration.toString();
        }
        if (currentTime) currentTime.textContent = formatTime(position);
      }
    });
    trackList.querySelectorAll(".bulk-delete-item").forEach((item) => {
      const trackNumber = item.querySelector(".bulk-delete-track-number");
      if (!trackNumber) return;
      const uri = item.getAttribute("data-uri");
      if (uri === currentUri) {
        trackNumber.innerHTML = `<div class="bulk-delete-playing-indicator"></div>`;
      } else {
        const idx = parseInt(item.getAttribute("data-index"), 10);
        trackNumber.textContent = (idx + 1).toString();
      }
    });
  };
  const startPlaybackUpdates = () => {
    if (updateInterval) return;
    updateInterval = window.setInterval(updatePlaybackState, 1e3);
  };
  startPlaybackUpdates();
  playlistSelect.focus();
}

// extensions/bulkDeleteTracks/src/app.tsx
document.adoptedStyleSheets.push(styles_default);
function isTrackUri(uri) {
  const uriObj = Spicetify.URI.from(uri);
  return !!(uriObj && uriObj.type === "track");
}
function isPlaylistUri(uri) {
  const uriObj = Spicetify.URI.from(uri);
  return !!(uriObj && uriObj.type === "playlist");
}
async function handleMenuClick(uris, _uids, contextUri) {
  const trackUris = uris.filter(isTrackUri);
  if (trackUris.length === 0) {
    Spicetify.showNotification("No tracks selected", true);
    return;
  }
  let playlistUri;
  if (contextUri && isPlaylistUri(contextUri)) {
    playlistUri = contextUri;
  }
  createModal(trackUris, playlistUri);
}
function shouldAdd(uris) {
  return uris.some(isTrackUri);
}
var bulkDeleteMenuItem = new Spicetify.ContextMenu.Item(
  "Delete from Playlist",
  handleMenuClick,
  shouldAdd,
  "block"
);
bulkDeleteMenuItem.register();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vZXh0ZW5zaW9ucy9idWxrRGVsZXRlVHJhY2tzL3NyYy9zdHlsZXMuY3NzIiwgIi4uL2V4dGVuc2lvbnMvYnVsa0RlbGV0ZVRyYWNrcy9zcmMvbW9kYWwudHN4IiwgIi4uL2V4dGVuc2lvbnMvYnVsa0RlbGV0ZVRyYWNrcy9zcmMvYXBwLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXG4gICAgICAgICAgY29uc3Qgc2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICAgIHNoZWV0LnJlcGxhY2VTeW5jKGAuYnVsay1kZWxldGUtbW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLmJ1bGstZGVsZXRlLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMTgxODE4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA4MjBweDtcbiAgbWF4LWhlaWdodDogODV2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSwgc3BvdGlmeSksIHNhbnMtc2VyaWY7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uYnVsay1kZWxldGUtaGVhZGVyIHtcbiAgcGFkZGluZzogMTZweCAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI4MjgyODtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5idWxrLWRlbGV0ZS1oZWFkZXItcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLmJ1bGstZGVsZXRlLWNsb3NlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xufVxuXG4uYnVsay1kZWxldGUtY2xvc2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xufVxuXG4uYnVsay1kZWxldGUtY2xvc2Ugc3ZnIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgZmlsbDogI2IzYjNiMztcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjE1cztcbn1cblxuLmJ1bGstZGVsZXRlLWNsb3NlOmhvdmVyIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG59XG5cbi5idWxrLWRlbGV0ZS1naXRodWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xufVxuXG4uYnVsay1kZWxldGUtZ2l0aHViOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzI4MjgyODtcbn1cblxuLmJ1bGstZGVsZXRlLWdpdGh1YiBzdmcge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBmaWxsOiAjYjNiM2IzO1xuICB0cmFuc2l0aW9uOiBmaWxsIDAuMTVzO1xufVxuXG4uYnVsay1kZWxldGUtZ2l0aHViOmhvdmVyIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG59XG5cbi5idWxrLWRlbGV0ZS1wbGF5bGlzdC1zZWxlY3RvciB7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyODI4Mjg7XG59XG5cbi5idWxrLWRlbGV0ZS1wbGF5bGlzdC1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLmJ1bGstZGVsZXRlLXBsYXlsaXN0LXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYmFja2dyb3VuZDogIzNmM2YzZjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSclMjNiM2IzYjMnJTNFJTNDcGF0aCBkPSdNNyAxMGw1IDUgNS01eicvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTJweCBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbi5idWxrLWRlbGV0ZS1wbGF5bGlzdC1zZWxlY3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE0YTRhO1xufVxuXG4uYnVsay1kZWxldGUtcGxheWxpc3Qtc2VsZWN0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTtcbn1cblxuLmJ1bGstZGVsZXRlLXNlYXJjaCB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyODI4Mjg7XG59XG5cbi5idWxrLWRlbGV0ZS1zZWFyY2gtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMyODI4Mjg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMCAxMnB4O1xufVxuXG4uYnVsay1kZWxldGUtc2VhcmNoLWljb24ge1xuICBjb2xvcjogI2IzYjNiMztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJ1bGstZGVsZXRlLXNlYXJjaC1pY29uIHN2ZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5idWxrLWRlbGV0ZS1zZWFyY2ggaW5wdXQge1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJ1bGstZGVsZXRlLXNlYXJjaCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2IzYjNiMztcbn1cblxuLmJ1bGstZGVsZXRlLXNlYXJjaCBpbnB1dDpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmJ1bGstZGVsZXRlLXRyYWNrLWluZm8ge1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgYmFja2dyb3VuZDogIzEyMTIxMjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyODI4Mjg7XG59XG5cbi5idWxrLWRlbGV0ZS10cmFjay1pbmZvIHAge1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW46IDA7XG59XG5cbi5idWxrLWRlbGV0ZS10cmFjay1pbmZvIHNwYW4ge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLyogPT09PT09PT09PSBIZWFkZXIgQmFyIChzb3J0YWJsZSBjb2x1bW5zKSA9PT09PT09PT09ICovXG4uYnVsay1kZWxldGUtaGVhZGVyLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBiYWNrZ3JvdW5kOiAjMTIxMjEyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI4MjgyODtcbiAgZ2FwOiA4cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uYnVsay1kZWxldGUtaGNlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmJ1bGstZGVsZXRlLWhjZWxsLXNvcnRhYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cztcbiAgZ2FwOiA0cHg7XG59XG5cbi5idWxrLWRlbGV0ZS1oY2VsbC1zb3J0YWJsZTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vKiBTb3J0IGFycm93cyB2aWEgcHNldWRvLWVsZW1lbnRzICovXG4uYnVsay1kZWxldGUtaGNlbGwtc29ydC1hc2M6OmFmdGVyLFxuLmJ1bGstZGVsZXRlLWhjZWxsLXNvcnQtZGVzYzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmJ1bGstZGVsZXRlLWhjZWxsLXNvcnQtYXNjOjphZnRlciB7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMWRiOTU0O1xufVxuXG4uYnVsay1kZWxldGUtaGNlbGwtc29ydC1kZXNjOjphZnRlciB7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMWRiOTU0O1xufVxuXG4vKiBIZWFkZXIgY2VsbCB3aWR0aHMgLSBtdXN0IG1hdGNoIGl0ZW0gY29sdW1ucyAqL1xuLmJ1bGstZGVsZXRlLWhjZWxsLW51bSB7XG4gIHdpZHRoOiAzMnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5idWxrLWRlbGV0ZS1oY2VsbC1jaGVjayB7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5idWxrLWRlbGV0ZS1oY2VsbC1pbWcge1xuICB3aWR0aDogNDBweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5idWxrLWRlbGV0ZS1oY2VsbC1uYW1lIHtcbiAgZmxleDogMztcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4uYnVsay1kZWxldGUtaGNlbGwtYXJ0aXN0IHtcbiAgZmxleDogMjtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4uYnVsay1kZWxldGUtaGNlbGwtYWxidW0ge1xuICBmbGV4OiAyO1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5idWxrLWRlbGV0ZS1oY2VsbC1hZGRlZGJ5IHtcbiAgd2lkdGg6IDExMHB4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmJ1bGstZGVsZXRlLWhjZWxsLWFkZGVkYXQge1xuICB3aWR0aDogOTBweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5idWxrLWRlbGV0ZS1oY2VsbC1wbGF5IHtcbiAgd2lkdGg6IDE4MHB4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLyogPT09PT09PT09PSBUcmFjayBMaXN0ID09PT09PT09PT0gKi9cbi5idWxrLWRlbGV0ZS1saXN0IHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMDtcbiAgbWluLWhlaWdodDogNDAwcHg7XG59XG5cbi5idWxrLWRlbGV0ZS12aXJ0dWFsLXdpbmRvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbn1cblxuLmJ1bGstZGVsZXRlLWVtcHR5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5idWxrLWRlbGV0ZS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNHB4IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cztcbiAgZ2FwOiA4cHg7XG4gIGhlaWdodDogNThweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmJ1bGstZGVsZXRlLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xufVxuXG4uYnVsay1kZWxldGUtaXRlbS5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjksIDE4NSwgODQsIDAuMSk7XG59XG5cbi5idWxrLWRlbGV0ZS10cmFjay1udW1iZXIge1xuICB3aWR0aDogMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idWxrLWRlbGV0ZS1wbGF5aW5nLWluZGljYXRvciB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJ1bGstZGVsZXRlLXBsYXlpbmctaW5kaWNhdG9yOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYmFja2dyb3VuZDogIzFkYjk1NDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IGJ1bGstZGVsZXRlLXB1bHNlIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJ1bGstZGVsZXRlLXB1bHNlIHtcbiAgMCUsIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG4gIDUwJSB7IG9wYWNpdHk6IDAuNTsgfVxufVxuXG4uYnVsay1kZWxldGUtdHJhY2staW1hZ2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogIzI4MjgyODtcbn1cblxuLmJ1bGstZGVsZXRlLXRyYWNrLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5idWxrLWRlbGV0ZS1pdGVtLWluZm8ge1xuICBmbGV4OiAzO1xuICBtaW4td2lkdGg6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYnVsay1kZWxldGUtaXRlbS10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG5cbi5idWxrLWRlbGV0ZS1pdGVtLXRpdGxlOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5idWxrLWRlbGV0ZS1pdGVtLWFydGlzdCB7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBmb250LXNpemU6IDExcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uYnVsay1kZWxldGUtaXRlbS1hbGJ1bSB7XG4gIGNvbG9yOiAjNzI3MjcyO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vKiBBZGRlZCBCeSAvIEFkZGVkIEF0IG1ldGEgY29sdW1uICovXG4uYnVsay1kZWxldGUtaXRlbS1tZXRhIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycHg7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmJ1bGstZGVsZXRlLWl0ZW0tYWRkZWRieSB7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBmb250LXNpemU6IDExcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uYnVsay1kZWxldGUtaXRlbS1hZGRlZGF0IHtcbiAgY29sb3I6ICM3MjcyNzI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi8qID09PT09PT09PT0gUGxheWJhY2sgQ29udHJvbHMgPT09PT09PT09PSAqL1xuLmJ1bGstZGVsZXRlLXBsYXliYWNrLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHdpZHRoOiAxODBweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5idWxrLWRlbGV0ZS1wbGF5YmFjay1idXR0b24ge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmJ1bGstZGVsZXRlLXBsYXliYWNrLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyODI4Mjg7XG59XG5cbi5idWxrLWRlbGV0ZS1wbGF5YmFjay1idXR0b24gc3ZnIHtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbn1cblxuLmJ1bGstZGVsZXRlLXNsaWRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4uYnVsay1kZWxldGUtc2xpZGVyLXRpbWUge1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ1bGstZGVsZXRlLXNsaWRlciB7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogM3B4O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICM0YTRhNGE7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtaW4td2lkdGg6IDQwcHg7XG59XG5cbi5idWxrLWRlbGV0ZS1zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ1bGstZGVsZXRlLXNsaWRlcjpob3Zlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi8qID09PT09PT09PT0gQ2hlY2tib3ggPT09PT09PT09PSAqL1xuLmJ1bGstZGVsZXRlLWNoZWNrYm94LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5idWxrLWRlbGV0ZS1jaGVja2JveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnVsay1kZWxldGUtY2hlY2tib3gtY3VzdG9tIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2IzYjNiMztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xufVxuXG4uYnVsay1kZWxldGUtY2hlY2tib3g6Y2hlY2tlZCArIC5idWxrLWRlbGV0ZS1jaGVja2JveC1jdXN0b20ge1xuICBiYWNrZ3JvdW5kOiAjMWRiOTU0O1xuICBib3JkZXItY29sb3I6ICMxZGI5NTQ7XG59XG5cbi5idWxrLWRlbGV0ZS1jaGVja2JveDpjaGVja2VkICsgLmJ1bGstZGVsZXRlLWNoZWNrYm94LWN1c3RvbTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlcjogc29saWQgIzAwMDtcbiAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi8qID09PT09PT09PT0gQnV0dG9ucyA9PT09PT09PT09ICovXG4uYnVsay1kZWxldGUtYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzI4MjgyODtcbn1cblxuLmJ1bGstZGVsZXRlLXNlbGVjdC1hbGwge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzFkYjk1NDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xufVxuXG4uYnVsay1kZWxldGUtc2VsZWN0LWFsbDpob3ZlciB7XG4gIGNvbG9yOiAjMWVkNzYwO1xufVxuXG4uYnVsay1kZWxldGUtYnV0dG9uLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uYnVsay1kZWxldGUtYnRuIHtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uYnVsay1kZWxldGUtYnRuLmNhbmNlbCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzI3MjcyO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ1bGstZGVsZXRlLWJ0bi5jYW5jZWw6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNmZmY7XG59XG5cbi5idWxrLWRlbGV0ZS1idG4uZGVsZXRlIHtcbiAgYmFja2dyb3VuZDogI2U5MTQyOTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idWxrLWRlbGV0ZS1idG4uZGVsZXRlOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZDogI2YwMzcyNztcbn1cblxuLmJ1bGstZGVsZXRlLWJ0bi5kZWxldGU6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjNTM1MzUzO1xuICBjb2xvcjogIzE4MTgxODtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLyogPT09PT09PT09PSBDb25maXJtYXRpb24gTW9kYWwgPT09PT09PT09PSAqL1xuLmJ1bGstZGVsZXRlLWNvbmZpcm0tb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwMDtcbn1cblxuLmJ1bGstZGVsZXRlLWNvbmZpcm0tY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICMxODE4MTg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDQ4MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmJ1bGstZGVsZXRlLWNvbmZpcm0taGVhZGVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmJ1bGstZGVsZXRlLWNvbmZpcm0td2FybmluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogMTJweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzMsIDIwLCA0MSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS13YXJuaW5nIHN2ZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjZTkxNDI5O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmJ1bGstZGVsZXRlLWNvbmZpcm0td2FybmluZyBwIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS10cmFjay1saXN0IHtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogIzI4MjgyODtcbn1cblxuLmJ1bGstZGVsZXRlLWNvbmZpcm0tdHJhY2staXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcbn1cblxuLmJ1bGstZGVsZXRlLWNvbmZpcm0tdHJhY2staXRlbTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmJ1bGstZGVsZXRlLWNvbmZpcm0tdHJhY2staW1hZ2Uge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS10cmFjay1pbmZvIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJweDtcbn1cblxuLmJ1bGstZGVsZXRlLWNvbmZpcm0tdHJhY2stdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmJ1bGstZGVsZXRlLWNvbmZpcm0tdHJhY2stYXJ0aXN0LWFsYnVtIHtcbiAgY29sb3I6ICNhMGEwYTA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5gKTtcbiAgICAgICAgICBleHBvcnQgZGVmYXVsdCBzaGVldDtcbiAgICAgICAgIiwgImludGVyZmFjZSBQbGF5bGlzdCB7XG4gIG5hbWU6IHN0cmluZztcbiAgdXJpOiBzdHJpbmc7XG4gIGNhbkRlbGV0ZTogYm9vbGVhbjtcbiAgY2FuQWRkVG86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBUcmFjayB7XG4gIHVyaTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGFydGlzdDogc3RyaW5nO1xuICBhbGJ1bTogc3RyaW5nO1xuICBhbGJ1bVVyaTogc3RyaW5nO1xuICBpbWFnZVVybDogc3RyaW5nO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICB1aWQ6IHN0cmluZztcbiAgYWRkZWRCeTogc3RyaW5nO1xuICBhZGRlZEF0OiBzdHJpbmc7XG59XG5cbnR5cGUgU29ydENvbHVtbiA9IFwibmFtZVwiIHwgXCJhcnRpc3RcIiB8IFwiYWxidW1cIiB8IFwiYWRkZWRCeVwiIHwgXCJhZGRlZEF0XCIgfCBcIlwiO1xudHlwZSBTb3J0RGlyZWN0aW9uID0gXCJhc2NcIiB8IFwiZGVzY1wiO1xuXG5hc3luYyBmdW5jdGlvbiBmZXRjaEFsbExpYnJhcnlDb250ZW50cygpOiBQcm9taXNlPG9iamVjdFtdPiB7XG4gIGNvbnN0IExpYnJhcnlBUEkgPSAoU3BpY2V0aWZ5IGFzIGFueSkuUGxhdGZvcm0/LkxpYnJhcnlBUEk7XG4gIGlmICghTGlicmFyeUFQSSkgcmV0dXJuIFtdO1xuXG4gIGNvbnN0IHBhZ2VTaXplID0gMTAwMDA7XG4gIGNvbnN0IGl0ZW1zOiBvYmplY3RbXSA9IFtdO1xuICBsZXQgb2Zmc2V0ID0gMDtcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgTGlicmFyeUFQSS5nZXRDb250ZW50cyh7XG4gICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgIGxpbWl0OiBwYWdlU2l6ZSxcbiAgICAgIGZsYXR0ZW5UcmVlOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcGFnZUl0ZW1zID0gcmVzcG9uc2U/Lml0ZW1zIHx8IFtdO1xuICAgIGl0ZW1zLnB1c2goLi4ucGFnZUl0ZW1zKTtcblxuICAgIGlmIChwYWdlSXRlbXMubGVuZ3RoIDwgcGFnZVNpemUpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIG9mZnNldCArPSBwYWdlU2l6ZTtcbiAgfVxuXG4gIHJldHVybiBpdGVtcztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoUGxheWxpc3RzV2l0aERlbGV0ZVBlcm1pc3Npb24oKTogUHJvbWlzZTxQbGF5bGlzdFtdPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgaXRlbXMgPSBhd2FpdCBmZXRjaEFsbExpYnJhcnlDb250ZW50cygpO1xuXG4gICAgY29uc3QgcGxheWxpc3RzOiBQbGF5bGlzdFtdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgIGNvbnN0IHBsYXlsaXN0ID0gaXRlbSBhcyB7IHR5cGU/OiBzdHJpbmc7IGNhbkRlbGV0ZT86IGJvb2xlYW47IGNhbkFkZFRvPzogYm9vbGVhbjsgbmFtZT86IHN0cmluZzsgdXJpPzogc3RyaW5nIH07XG4gICAgICBpZiAocGxheWxpc3QudHlwZSA9PT0gXCJwbGF5bGlzdFwiICYmIChwbGF5bGlzdC5jYW5EZWxldGUgfHwgcGxheWxpc3QuY2FuQWRkVG8pKSB7XG4gICAgICAgIHBsYXlsaXN0cy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBwbGF5bGlzdC5uYW1lIHx8IFwiVW5rbm93blwiLFxuICAgICAgICAgIHVyaTogcGxheWxpc3QudXJpIHx8IFwiXCIsXG4gICAgICAgICAgY2FuRGVsZXRlOiBwbGF5bGlzdC5jYW5EZWxldGUgfHwgZmFsc2UsXG4gICAgICAgICAgY2FuQWRkVG86IHBsYXlsaXN0LmNhbkFkZFRvIHx8IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGxheWxpc3RzO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWUobXM6IG51bWJlciB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XG4gIGlmIChtcyA9PSBudWxsIHx8IGlzTmFOKG1zKSB8fCBtcyA8PSAwKSByZXR1cm4gXCIwOjAwXCI7XG4gIGNvbnN0IHMgPSBNYXRoLmZsb29yKG1zIC8gMTAwMCk7XG4gIHJldHVybiBgJHtNYXRoLmZsb29yKHMgLyA2MCl9OiR7KHMgJSA2MCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShpc29TdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghaXNvU3RyKSByZXR1cm4gXCJcIjtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoaXNvU3RyKTtcbiAgICBpZiAoaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSByZXR1cm4gaXNvU3RyO1xuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHtcbiAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgbW9udGg6IFwic2hvcnRcIixcbiAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgfSk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBpc29TdHI7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUGxheWJhY2tDb250cm9sKHVyaTogc3RyaW5nLCBkdXJhdGlvbjogbnVtYmVyKTogSFRNTEVsZW1lbnQge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1wbGF5YmFjay1jb250cm9sc1wiO1xuICBjb250YWluZXIuZGF0YXNldC51cmkgPSB1cmk7XG5cbiAgY29uc3QgcGxheUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHBsYXlCdG4uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1wbGF5YmFjay1idXR0b25cIjtcbiAgcGxheUJ0bi5pbm5lckhUTUwgPSBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk04IDV2MTRsMTEtN3pcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjwvc3ZnPmA7XG5cbiAgcGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwbGF5ZXIgPSAoU3BpY2V0aWZ5IGFzIGFueSkuUGxheWVyO1xuICAgICAgaWYgKCFwbGF5ZXIpIHJldHVybjtcblxuICAgICAgY29uc3QgY3VycmVudFVyaSA9IHBsYXllcj8uZGF0YT8uaXRlbT8udXJpO1xuICAgICAgaWYgKGN1cnJlbnRVcmkgPT09IHVyaSkge1xuICAgICAgICBpZiAocGxheWVyPy5pc1BsYXlpbmcoKSkge1xuICAgICAgICAgIHBsYXllci5wYXVzZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXllci5wbGF5VXJpKHVyaSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAoU3BpY2V0aWZ5IGFzIGFueSkuUGxheWVyPy5wbGF5VXJpKHVyaSk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBzbGlkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzbGlkZXJDb250YWluZXIuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1zbGlkZXItY29udGFpbmVyXCI7XG5cbiAgY29uc3QgY3VycmVudFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY3VycmVudFRpbWUuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1zbGlkZXItdGltZVwiO1xuICBjdXJyZW50VGltZS50ZXh0Q29udGVudCA9IFwiMDowMFwiO1xuXG4gIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgc2xpZGVyLnR5cGUgPSBcInJhbmdlXCI7XG4gIHNsaWRlci5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLXNsaWRlclwiO1xuICBzbGlkZXIubWluID0gXCIwXCI7XG4gIHNsaWRlci5tYXggPSBkdXJhdGlvbiA+IDAgPyBkdXJhdGlvbi50b1N0cmluZygpIDogXCIxMDAwXCI7XG4gIHNsaWRlci52YWx1ZSA9IFwiMFwiO1xuICBzbGlkZXIuc3RlcCA9IFwiMTAwMFwiO1xuXG4gIGNvbnN0IHRvdGFsVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB0b3RhbFRpbWUuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1zbGlkZXItdGltZVwiO1xuICB0b3RhbFRpbWUudGV4dENvbnRlbnQgPSBmb3JtYXRUaW1lKGR1cmF0aW9uKTtcblxuICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICBjdXJyZW50VGltZS50ZXh0Q29udGVudCA9IGZvcm1hdFRpbWUocGFyc2VJbnQoc2xpZGVyLnZhbHVlKSk7XG4gIH0pO1xuXG4gIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgKFNwaWNldGlmeSBhcyBhbnkpLlBsYXllcj8uc2VlayhwYXJzZUludChzbGlkZXIudmFsdWUpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlZWs6XCIsIGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgc2xpZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRUaW1lKTtcbiAgc2xpZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNsaWRlcik7XG4gIHNsaWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3RhbFRpbWUpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5QnRuKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNsaWRlckNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVHJhY2tJbWFnZSh1cmw6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgY29uc3QgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW1nQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtdHJhY2staW1hZ2UtY29udGFpbmVyXCI7XG5cbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1nLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtdHJhY2staW1hZ2VcIjtcbiAgaW1nLnNyYyA9IHVybCB8fCBcIlwiO1xuICBpbWcubG9hZGluZyA9IFwibGF6eVwiO1xuXG4gIGltZy5vbmVycm9yID0gKCkgPT4ge1xuICAgIGltZy5zcmMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnJTNFJTNDcGF0aCBmaWxsPSclMjMyODI4MjgnIGQ9J00xMiAzdjEwLjU1Yy0uNTktLjM0LTEuMjctLjU1LTItLjU1LTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNFY3aDRWM2gtNnonLyUzRSUzQy9zdmclM0VcIjtcbiAgfTtcblxuICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgcmV0dXJuIGltZ0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGxheWluZ0luZGljYXRvcigpOiBIVE1MRWxlbWVudCB7XG4gIGNvbnN0IGluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluZGljYXRvci5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLXBsYXlpbmctaW5kaWNhdG9yXCI7XG4gIHJldHVybiBpbmRpY2F0b3I7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQbGF5bGlzdFRyYWNrcyhcbiAgcGxheWxpc3RVcmk6IHN0cmluZyxcbiAgb25Qcm9ncmVzcz86ICh0cmFja3M6IFRyYWNrW10sIHRvdGFsTG9hZGVkOiBudW1iZXIpID0+IHZvaWQsXG4gIGNoZWNrVXBUbz86IG51bWJlclxuKTogUHJvbWlzZTxUcmFja1tdPiB7XG4gIGxldCB0cmFja3M6IFRyYWNrW10gPSBbXTtcblxuICB0cnkge1xuICAgIGNvbnN0IFBsYXlsaXN0QVBJID0gKFNwaWNldGlmeSBhcyBhbnkpLlBsYXRmb3JtPy5QbGF5bGlzdEFQSTtcblxuICAgIGlmICghUGxheWxpc3RBUEkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsYXlsaXN0QVBJIG5vdCBhdmFpbGFibGVcIik7XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZVNpemUgPSAyMDA7XG4gICAgbGV0IG9mZnNldCA9IDA7XG5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBQbGF5bGlzdEFQSS5nZXRDb250ZW50cyhwbGF5bGlzdFVyaSwge1xuICAgICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgbGltaXQ6IHBhZ2VTaXplLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2U/Lml0ZW1zPy5sZW5ndGgpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiByZXNwb25zZS5pdGVtcykge1xuICAgICAgICBpZiAoaXRlbT8udXJpKSB7XG4gICAgICAgICAgbGV0IG5hbWUgPSBcIlVua25vd24gVHJhY2tcIjtcbiAgICAgICAgICBsZXQgYXJ0aXN0ID0gXCJVbmtub3duIEFydGlzdFwiO1xuICAgICAgICAgIGxldCBhbGJ1bSA9IFwiVW5rbm93biBBbGJ1bVwiO1xuICAgICAgICAgIGxldCBpbWFnZVVybCA9IFwiXCI7XG4gICAgICAgICAgbGV0IGR1cmF0aW9uID0gMDtcbiAgICAgICAgICBsZXQgdWlkID0gaXRlbS51aWQgfHwgXCJcIjtcbiAgICAgICAgICBsZXQgYWRkZWRCeSA9IFwiXCI7XG4gICAgICAgICAgbGV0IGFkZGVkQXQgPSBcIlwiO1xuXG4gICAgICAgICAgaWYgKGl0ZW0ubmFtZSkgbmFtZSA9IGl0ZW0ubmFtZTtcbiAgICAgICAgICBpZiAoaXRlbS5hcnRpc3RzPy5bMF0/Lm5hbWUpIGFydGlzdCA9IGl0ZW0uYXJ0aXN0c1swXS5uYW1lO1xuICAgICAgICAgIGlmIChpdGVtLmFsYnVtPy5uYW1lKSBhbGJ1bSA9IGl0ZW0uYWxidW0ubmFtZTtcbiAgICAgICAgICBjb25zdCBhbGJ1bVVyaSA9IGl0ZW0uYWxidW0/LnVyaSB8fCBcIlwiO1xuICAgICAgICAgIGlmIChpdGVtLmFsYnVtPy5pbWFnZXM/LlswXT8udXJsKSBpbWFnZVVybCA9IGl0ZW0uYWxidW0uaW1hZ2VzWzBdLnVybDtcbiAgICAgICAgICBlbHNlIGlmIChpdGVtLmFsYnVtPy5jb3ZlckFydD8uc291cmNlcz8uWzBdPy51cmwpIGltYWdlVXJsID0gaXRlbS5hbGJ1bS5jb3ZlckFydC5zb3VyY2VzWzBdLnVybDtcblxuICAgICAgICAgIGNvbnN0IGl0ZW1BbnkgPSBpdGVtIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICAgICAgICAgIGxldCBkdXJhdGlvblZhbDogbnVtYmVyID0gMDtcbiAgICAgICAgICBpZiAoaXRlbUFueS5kdXJhdGlvbiAmJiB0eXBlb2YgaXRlbUFueS5kdXJhdGlvbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgY29uc3QgZHVyID0gaXRlbUFueS5kdXJhdGlvbiBhcyB7IHRvdGFsTXM/OiBudW1iZXI7IG1pbGxpc2Vjb25kcz86IG51bWJlciB9O1xuICAgICAgICAgICAgaWYgKGR1ci50b3RhbE1zKSBkdXJhdGlvblZhbCA9IGR1ci50b3RhbE1zO1xuICAgICAgICAgICAgZWxzZSBpZiAoZHVyLm1pbGxpc2Vjb25kcykgZHVyYXRpb25WYWwgPSBkdXIubWlsbGlzZWNvbmRzO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGl0ZW1BbnkuZHVyYXRpb24gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGR1cmF0aW9uVmFsID0gaXRlbUFueS5kdXJhdGlvbjtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtQW55LmR1cmF0aW9uTXMgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGR1cmF0aW9uVmFsID0gaXRlbUFueS5kdXJhdGlvbk1zO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uVmFsO1xuXG4gICAgICAgICAgLy8gRXh0cmFjdCBhZGRlZEJ5ICh3aG8gYWRkZWQgdGhlIHRyYWNrKVxuICAgICAgICAgIGNvbnN0IGFkZGVkQnlGaWVsZCA9IGl0ZW1BbnkuYWRkZWRCeSB8fCBpdGVtQW55LmFkZGVkX2J5O1xuICAgICAgICAgIGlmIChhZGRlZEJ5RmllbGQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYWRkZWRCeUZpZWxkID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgIGFkZGVkQnkgPSBhZGRlZEJ5RmllbGQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhZGRlZEJ5RmllbGQgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgY29uc3QgYWIgPSBhZGRlZEJ5RmllbGQgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gICAgICAgICAgICAgIGFkZGVkQnkgPSAoYWIubmFtZSB8fCBhYi5kaXNwbGF5TmFtZSB8fCBhYi5kaXNwbGF5X25hbWUgfHwgYWIuaWQgfHwgXCJcIikgYXMgc3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEV4dHJhY3QgYWRkZWRBdCAod2hlbiB0aGUgdHJhY2sgd2FzIGFkZGVkKVxuICAgICAgICAgIGNvbnN0IGFkZGVkQXRGaWVsZCA9IGl0ZW1BbnkuYWRkZWRBdCB8fCBpdGVtQW55LmFkZGVkX2F0O1xuICAgICAgICAgIGlmIChhZGRlZEF0RmllbGQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYWRkZWRBdEZpZWxkID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgIGFkZGVkQXQgPSBhZGRlZEF0RmllbGQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhZGRlZEF0RmllbGQgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgY29uc3QgYWEgPSBhZGRlZEF0RmllbGQgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gICAgICAgICAgICAgIGFkZGVkQXQgPSAoYWEuaXNvU3RyaW5nIHx8IGFhLmlzb19zdHIgfHwgXCJcIikgYXMgc3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRyYWNrcy5wdXNoKHtcbiAgICAgICAgICAgIHVyaTogaXRlbS51cmksXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgYXJ0aXN0LFxuICAgICAgICAgICAgYWxidW0sXG4gICAgICAgICAgICBhbGJ1bVVyaSxcbiAgICAgICAgICAgIGltYWdlVXJsLFxuICAgICAgICAgICAgZHVyYXRpb24sXG4gICAgICAgICAgICB1aWQsXG4gICAgICAgICAgICBhZGRlZEJ5LFxuICAgICAgICAgICAgYWRkZWRBdCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvblByb2dyZXNzPy4odHJhY2tzLCB0cmFja3MubGVuZ3RoKTtcblxuICAgICAgaWYgKGNoZWNrVXBUbyAmJiB0cmFja3MubGVuZ3RoID49IGNoZWNrVXBUbykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3BvbnNlLml0ZW1zLmxlbmd0aCA8IHBhZ2VTaXplKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBvZmZzZXQgKz0gcGFnZVNpemU7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHBsYXlsaXN0IHRyYWNrczpcIiwgZSk7XG4gICAgdGhyb3cgZTtcbiAgfVxuXG4gIHJldHVybiB0cmFja3M7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVUcmFja3NGcm9tUGxheWxpc3QoXG4gIHBsYXlsaXN0VXJpOiBzdHJpbmcsXG4gIHRyYWNrczogeyB1cmk6IHN0cmluZzsgdWlkOiBzdHJpbmcgfVtdXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgY29uc3QgUGxheWxpc3RBUEkgPSAoU3BpY2V0aWZ5IGFzIGFueSkuUGxhdGZvcm0/LlBsYXlsaXN0QVBJO1xuXG4gIGlmICghUGxheWxpc3RBUEkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHRyYWNrTGlzdCA9IHRyYWNrcy5tYXAodCA9PiAoe1xuICAgICAgdXJpOiB0LnVyaSxcbiAgICAgIHVpZDogdC51aWRcbiAgICB9KSk7XG4gICAgYXdhaXQgUGxheWxpc3RBUEkucmVtb3ZlKHBsYXlsaXN0VXJpLCB0cmFja0xpc3QpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IFBsYXlsaXN0QVBJLnJlbW92ZShwbGF5bGlzdFVyaSwgdHJhY2tzLm1hcCh0ID0+IHQudXJpKSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlMikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkRlbGV0ZSBmYWlsZWQ6XCIsIGUyKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVsZXRlQ29uZmlybU1vZGFsKFxuICB0cmFja3M6IFRyYWNrW10sXG4gIHBsYXlsaXN0TmFtZTogc3RyaW5nLFxuICBvbkNvbmZpcm06ICgpID0+IHZvaWQsXG4gIG9uQ2FuY2VsOiAoKSA9PiB2b2lkXG4pIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG92ZXJsYXkuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1jb25maXJtLW92ZXJsYXlcIjtcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWNvbmZpcm0tY29udGVudFwiO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlci5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWNvbmZpcm0taGVhZGVyXCI7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiRGVsZXRlIFRyYWNrc1wiO1xuXG4gIGNvbnN0IHdhcm5pbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3YXJuaW5nLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY29uZmlybS13YXJuaW5nXCI7XG5cbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDI0IDI0XCIpO1xuICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJwYXRoXCIpO1xuICBwYXRoLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJjdXJyZW50Q29sb3JcIik7XG4gIHBhdGguc2V0QXR0cmlidXRlKFwiZFwiLCBcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0xIDE1aC0ydi0yaDJ2MnptMC00aC0yVjdoMnY2elwiKTtcbiAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlRoaXMgd2lsbCBwZXJtYW5lbnRseSByZW1vdmUgXCIpKTtcbiAgY29uc3Qgc3Ryb25nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIik7XG4gIHN0cm9uZzEudGV4dENvbnRlbnQgPSB0cmFja3MubGVuZ3RoLnRvU3RyaW5nKCk7XG4gIHAuYXBwZW5kQ2hpbGQoc3Ryb25nMSk7XG4gIHAuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIgdHJhY2socykgZnJvbSBcIikpO1xuICBjb25zdCBzdHJvbmcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiKTtcbiAgc3Ryb25nMi50ZXh0Q29udGVudCA9IHBsYXlsaXN0TmFtZTtcbiAgcC5hcHBlbmRDaGlsZChzdHJvbmcyKTtcbiAgcC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIi4gVGhpcyBhY3Rpb24gY2Fubm90IGJlIHVuZG9uZS5cIikpO1xuXG4gIHdhcm5pbmcuYXBwZW5kQ2hpbGQoc3ZnKTtcbiAgd2FybmluZy5hcHBlbmRDaGlsZChwKTtcblxuICBjb25zdCB0cmFja0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0cmFja0xpc3QuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1jb25maXJtLXRyYWNrLWxpc3RcIjtcblxuICBmb3IgKGNvbnN0IHRyYWNrIG9mIHRyYWNrcykge1xuICAgIGNvbnN0IHRyYWNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdHJhY2tJdGVtLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY29uZmlybS10cmFjay1pdGVtXCI7XG5cbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZy5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWNvbmZpcm0tdHJhY2staW1hZ2VcIjtcbiAgICBpbWcuc3JjID0gdHJhY2suaW1hZ2VVcmwgfHwgXCJodHRwczovL3d3dy5zY2RuLmNvL2kvX2dsb2JhbC9mYXZpY29uLnBuZ1wiO1xuICAgIGltZy5hbHQgPSBcIlwiO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5mby5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWNvbmZpcm0tdHJhY2staW5mb1wiO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0aXRsZS5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWNvbmZpcm0tdHJhY2stdGl0bGVcIjtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRyYWNrLm5hbWU7XG5cbiAgICBjb25zdCBhcnRpc3RBbGJ1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGFydGlzdEFsYnVtLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY29uZmlybS10cmFjay1hcnRpc3QtYWxidW1cIjtcbiAgICBhcnRpc3RBbGJ1bS50ZXh0Q29udGVudCA9IGAke3RyYWNrLmFydGlzdH0gXHUyMDE0ICR7dHJhY2suYWxidW19YDtcblxuICAgIGluZm8uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQoYXJ0aXN0QWxidW0pO1xuICAgIHRyYWNrSXRlbS5hcHBlbmRDaGlsZChpbWcpO1xuICAgIHRyYWNrSXRlbS5hcHBlbmRDaGlsZChpbmZvKTtcbiAgICB0cmFja0xpc3QuYXBwZW5kQ2hpbGQodHJhY2tJdGVtKTtcbiAgfVxuXG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidXR0b25zLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY29uZmlybS1idXR0b25zXCI7XG5cbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2FuY2VsQnRuLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtYnRuIGNhbmNlbFwiO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgIG9uQ2FuY2VsKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25maXJtQnRuLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtYnRuIGRlbGV0ZVwiO1xuICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgb25Db25maXJtKCk7XG4gIH0pO1xuXG4gIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgYnV0dG9ucy5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2FybmluZyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodHJhY2tMaXN0KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChidXR0b25zKTtcblxuICBvdmVybGF5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBvdmVybGF5KSB7XG4gICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgb25DYW5jZWwoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9kYWwodHJhY2tVcmlzOiBzdHJpbmdbXSwgcHJlZmVycmVkUGxheWxpc3RVcmk/OiBzdHJpbmcgfCBudWxsKSB7XG4gIGxldCBhbGxQbGF5bGlzdHM6IFBsYXlsaXN0W10gPSBbXTtcbiAgbGV0IGN1cnJlbnRUcmFja3M6IFRyYWNrW10gPSBbXTtcbiAgbGV0IGZpbHRlcmVkVHJhY2tzOiBUcmFja1tdID0gW107XG4gIGNvbnN0IHNlbGVjdGVkU2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIGxldCBjdXJyZW50UGxheWxpc3RVcmk6IHN0cmluZyB8IG51bGwgPSBwcmVmZXJyZWRQbGF5bGlzdFVyaSB8fCBudWxsO1xuICBsZXQgdXBkYXRlSW50ZXJ2YWw6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG4gIGxldCBzb3J0Q29sdW1uOiBTb3J0Q29sdW1uID0gXCJcIjtcbiAgbGV0IHNvcnREaXJlY3Rpb246IFNvcnREaXJlY3Rpb24gPSBcImFzY1wiO1xuXG4gIGNvbnN0IGdldFNlbGVjdGlvbktleSA9ICh0cmFjazogVHJhY2spID0+IHRyYWNrLnVpZCB8fCB0cmFjay51cmk7XG5cbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgcmVuZGVyZWRUcmFja3NSZWY6IFRyYWNrW10gPSBbXTtcbiAgbGV0IHNjcm9sbExpc3RlbmVyQWRkZWQgPSBmYWxzZTtcbiAgbW9kYWwuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1tb2RhbFwiO1xuXG4gIGNvbnN0IGNsZWFudXBBbmRDbG9zZSA9ICgpID0+IHtcbiAgICBpZiAodXBkYXRlSW50ZXJ2YWwpIHtcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHVwZGF0ZUludGVydmFsKTtcbiAgICAgIHVwZGF0ZUludGVydmFsID0gbnVsbDtcbiAgICB9XG4gICAgbW9kYWwucmVtb3ZlKCk7XG4gIH07XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1jb250ZW50XCI7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtaGVhZGVyXCI7XG5cbiAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBcIkJ1bGsgRGVsZXRlIGZyb20gUGxheWxpc3RcIjtcblxuICBjb25zdCBoZWFkZXJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlclJpZ2h0LmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtaGVhZGVyLXJpZ2h0XCI7XG5cbiAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBnaXRodWJMaW5rLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtZ2l0aHViXCI7XG4gIGdpdGh1YkxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL0ppbU1hcmxleTQyMC9zcGljZXRpZnktZXh0ZW5zaW9uXCI7XG4gIGdpdGh1YkxpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgZ2l0aHViTGluay5yZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIjtcbiAgZ2l0aHViTGluay5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiT3BlbiBHaXRIdWIgcmVwb3NpdG9yeVwiKTtcbiAgZ2l0aHViTGluay5pbm5lckhUTUwgPSBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xMiAwYy02LjYyNiAwLTEyIDUuMzczLTEyIDEyIDAgNS4zMDIgMy40MzggOS44IDguMjA3IDExLjM4Ny41OTkuMTExLjc5My0uMjYxLjc5My0uNTc3di0yLjIzNGMtMy4zMzguNzI2LTQuMDMzLTEuNDE2LTQuMDMzLTEuNDE2LS41NDYtMS4zODctMS4zMzMtMS43NTYtMS4zMzMtMS43NTYtMS4wODktLjc0NS4wODMtLjcyOS4wODMtLjcyOSAxLjIwNS4wODQgMS44MzkgMS4yMzcgMS44MzkgMS4yMzcgMS4wNyAxLjgzNCAyLjgwNyAxLjMwNCAzLjQ5Mi45OTcuMTA3LS43NzUuNDE4LTEuMzA1Ljc2Mi0xLjYwNC0yLjY2NS0uMzA1LTUuNDY3LTEuMzM0LTUuNDY3LTUuOTMxIDAtMS4zMTEuNDY5LTIuMzgxIDEuMjM2LTMuMjIxLS4xMjQtLjMwMy0uNTM1LTEuNTI0LjExNy0zLjE3NiAwIDAgMS4wMDgtLjMyMiAzLjMwMSAxLjIzLjk1Ny0uMjY2IDEuOTgzLS4zOTkgMy4wMDMtLjQwNCAxLjAyLjAwNSAyLjA0Ny4xMzggMy4wMDYuNDA0IDIuMjkxLTEuNTUyIDMuMjk3LTEuMjMgMy4yOTctMS4yMy42NTMgMS42NTMuMjQyIDIuODc0LjExOCAzLjE3Ni43Ny44NCAxLjIzNSAxLjkxMSAxLjIzNSAzLjIyMSAwIDQuNjA5LTIuODA3IDUuNjI0LTUuNDc5IDUuOTIxLjQzLjM3Mi44MjMgMS4xMDIuODIzIDIuMjIydjMuMjkzYzAgLjMxOS4xOTIuNjk0LjgwMS41NzYgNC43NjUtMS41ODkgOC4xOTktNi4wODYgOC4xOTktMTEuMzg2IDAtNi42MjctNS4zNzMtMTItMTItMTJ6XCIvPjwvc3ZnPmA7XG5cbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjbG9zZUJ0bi5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWNsb3NlXCI7XG4gIGNsb3NlQnRuLmlubmVySFRNTCA9IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTE5IDYuNDFMMTcuNTkgNSAxMiAxMC41OSA2LjQxIDUgNSA2LjQxIDEwLjU5IDEyIDUgMTcuNTkgNi40MSAxOSAxMiAxMy40MSAxNy41OSAxOSAxOSAxNy41OSAxMy40MSAxMnpcIi8+PC9zdmc+YDtcblxuICBoZWFkZXJSaWdodC5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcbiAgaGVhZGVyUmlnaHQuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJSaWdodCk7XG5cbiAgY29uc3QgcGxheWxpc3RTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYXlsaXN0U2VsZWN0b3IuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1wbGF5bGlzdC1zZWxlY3RvclwiO1xuXG4gIGNvbnN0IHBsYXlsaXN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHBsYXlsaXN0TGFiZWwuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1wbGF5bGlzdC1sYWJlbFwiO1xuICBwbGF5bGlzdExhYmVsLnRleHRDb250ZW50ID0gXCJTZWxlY3QgUGxheWxpc3RcIjtcblxuICBjb25zdCBwbGF5bGlzdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHBsYXlsaXN0U2VsZWN0LmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtcGxheWxpc3Qtc2VsZWN0XCI7XG5cbiAgY29uc3QgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBwbGFjZWhvbGRlci52YWx1ZSA9IFwiXCI7XG4gIHBsYWNlaG9sZGVyLnRleHRDb250ZW50ID0gXCJTZWxlY3QgYSBwbGF5bGlzdFwiO1xuICBwbGFjZWhvbGRlci5kaXNhYmxlZCA9IHRydWU7XG4gIHBsYXlsaXN0U2VsZWN0LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyKTtcblxuICBwbGF5bGlzdFNlbGVjdG9yLmFwcGVuZENoaWxkKHBsYXlsaXN0TGFiZWwpO1xuICBwbGF5bGlzdFNlbGVjdG9yLmFwcGVuZENoaWxkKHBsYXlsaXN0U2VsZWN0KTtcblxuICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWFyY2hDb250YWluZXIuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1zZWFyY2hcIjtcblxuICBjb25zdCBzZWFyY2hXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2VhcmNoV3JhcHBlci5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLXNlYXJjaC13cmFwcGVyXCI7XG5cbiAgY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlYXJjaEljb24uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1zZWFyY2gtaWNvblwiO1xuICBzZWFyY2hJY29uLmlubmVySFRNTCA9IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTE1LjUgMTRoLS43OWwtLjI4LS4yN0E2LjQ3MSA2LjQ3MSAwIDAwMTYgOS41IDYuNSA2LjUgMCAxMDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6XCIvPjwvc3ZnPmA7XG5cbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHNlYXJjaElucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgc2VhcmNoSW5wdXQucGxhY2Vob2xkZXIgPSBcIlNlYXJjaCB0cmFja3MgaW4gcGxheWxpc3QuLi5cIjtcbiAgc2VhcmNoSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuXG4gIHNlYXJjaFdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VhcmNoSWNvbik7XG4gIHNlYXJjaFdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpO1xuICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoV3JhcHBlcik7XG5cbiAgY29uc3QgdHJhY2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdHJhY2tJbmZvLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtdHJhY2staW5mb1wiO1xuICB0cmFja0luZm8uaW5uZXJIVE1MID0gYDxwPjxzcGFuPjA8L3NwYW4+IHRyYWNrKHMpIHNlbGVjdGVkIGZyb20gcGxheWxpc3Q8L3A+YDtcblxuICAvLyAtLS0gU29ydGFibGUgaGVhZGVyIGJhciAtLS1cbiAgY29uc3QgaGVhZGVyQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyQmFyLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtaGVhZGVyLWJhclwiO1xuXG4gIGNvbnN0IHNvcnRhYmxlQ29sdW1uczogeyBrZXk6IFNvcnRDb2x1bW47IGxhYmVsOiBzdHJpbmc7IGNsYXNzTmFtZTogc3RyaW5nIH1bXSA9IFtcbiAgICB7IGtleTogXCJcIiBhcyBTb3J0Q29sdW1uLCBsYWJlbDogXCIjXCIsIGNsYXNzTmFtZTogXCJidWxrLWRlbGV0ZS1oY2VsbC1udW1cIiB9LFxuICAgIHsga2V5OiBcIlwiIGFzIFNvcnRDb2x1bW4sIGxhYmVsOiBcIlwiLCBjbGFzc05hbWU6IFwiYnVsay1kZWxldGUtaGNlbGwtY2hlY2tcIiB9LFxuICAgIHsga2V5OiBcIlwiIGFzIFNvcnRDb2x1bW4sIGxhYmVsOiBcIlwiLCBjbGFzc05hbWU6IFwiYnVsay1kZWxldGUtaGNlbGwtaW1nXCIgfSxcbiAgICB7IGtleTogXCJuYW1lXCIsIGxhYmVsOiBcIlRpdGxlXCIsIGNsYXNzTmFtZTogXCJidWxrLWRlbGV0ZS1oY2VsbC1uYW1lXCIgfSxcbiAgICB7IGtleTogXCJhcnRpc3RcIiwgbGFiZWw6IFwiQXJ0aXN0XCIsIGNsYXNzTmFtZTogXCJidWxrLWRlbGV0ZS1oY2VsbC1hcnRpc3RcIiB9LFxuICAgIHsga2V5OiBcImFsYnVtXCIsIGxhYmVsOiBcIkFsYnVtXCIsIGNsYXNzTmFtZTogXCJidWxrLWRlbGV0ZS1oY2VsbC1hbGJ1bVwiIH0sXG4gICAgeyBrZXk6IFwiYWRkZWRCeVwiLCBsYWJlbDogXCJBZGRlZCBCeVwiLCBjbGFzc05hbWU6IFwiYnVsay1kZWxldGUtaGNlbGwtYWRkZWRieVwiIH0sXG4gICAgeyBrZXk6IFwiYWRkZWRBdFwiLCBsYWJlbDogXCJBZGRlZCBBdFwiLCBjbGFzc05hbWU6IFwiYnVsay1kZWxldGUtaGNlbGwtYWRkZWRhdFwiIH0sXG4gICAgeyBrZXk6IFwiXCIgYXMgU29ydENvbHVtbiwgbGFiZWw6IFwiXCIsIGNsYXNzTmFtZTogXCJidWxrLWRlbGV0ZS1oY2VsbC1wbGF5XCIgfSxcbiAgXTtcblxuICBjb25zdCBoZWFkZXJDZWxsczogTWFwPHN0cmluZywgSFRNTEVsZW1lbnQ+ID0gbmV3IE1hcCgpO1xuXG4gIGZvciAoY29uc3QgY29sIG9mIHNvcnRhYmxlQ29sdW1ucykge1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNlbGwuY2xhc3NOYW1lID0gYGJ1bGstZGVsZXRlLWhjZWxsICR7Y29sLmNsYXNzTmFtZX1gO1xuICAgIGlmIChjb2wua2V5KSB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJidWxrLWRlbGV0ZS1oY2VsbC1zb3J0YWJsZVwiKTtcbiAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBjb2wubGFiZWw7XG4gICAgICBjZWxsLmRhdGFzZXQuc29ydEtleSA9IGNvbC5rZXk7XG4gICAgICBoZWFkZXJDZWxscy5zZXQoY29sLmtleSwgY2VsbCk7XG5cbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHNvcnRDb2x1bW4gPT09IGNvbC5rZXkpIHtcbiAgICAgICAgICAvLyBUb2dnbGUgZGlyZWN0aW9uXG4gICAgICAgICAgc29ydERpcmVjdGlvbiA9IHNvcnREaXJlY3Rpb24gPT09IFwiYXNjXCIgPyBcImRlc2NcIiA6IFwiYXNjXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc29ydENvbHVtbiA9IGNvbC5rZXk7XG4gICAgICAgICAgc29ydERpcmVjdGlvbiA9IFwiYXNjXCI7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlU29ydEluZGljYXRvcnMoKTtcbiAgICAgICAgYXBwbHlTb3J0QW5kUmVuZGVyKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGNvbC5sYWJlbDtcbiAgICB9XG4gICAgaGVhZGVyQmFyLmFwcGVuZENoaWxkKGNlbGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlU29ydEluZGljYXRvcnMoKSB7XG4gICAgaGVhZGVyQ2VsbHMuZm9yRWFjaCgoY2VsbCwga2V5KSA9PiB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJidWxrLWRlbGV0ZS1oY2VsbC1zb3J0LWFzY1wiLCBcImJ1bGstZGVsZXRlLWhjZWxsLXNvcnQtZGVzY1wiKTtcbiAgICAgIGlmIChrZXkgPT09IHNvcnRDb2x1bW4pIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKHNvcnREaXJlY3Rpb24gPT09IFwiYXNjXCIgPyBcImJ1bGstZGVsZXRlLWhjZWxsLXNvcnQtYXNjXCIgOiBcImJ1bGstZGVsZXRlLWhjZWxsLXNvcnQtZGVzY1wiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXBhcmVUcmFja3MoYTogVHJhY2ssIGI6IFRyYWNrLCBjb2w6IFNvcnRDb2x1bW4sIGRpcjogU29ydERpcmVjdGlvbik6IG51bWJlciB7XG4gICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgc3dpdGNoIChjb2wpIHtcbiAgICAgIGNhc2UgXCJuYW1lXCI6XG4gICAgICAgIHJlc3VsdCA9IGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImFydGlzdFwiOlxuICAgICAgICByZXN1bHQgPSBhLmFydGlzdC5sb2NhbGVDb21wYXJlKGIuYXJ0aXN0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiYWxidW1cIjpcbiAgICAgICAgcmVzdWx0ID0gYS5hbGJ1bS5sb2NhbGVDb21wYXJlKGIuYWxidW0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJhZGRlZEJ5XCI6XG4gICAgICAgIHJlc3VsdCA9IGEuYWRkZWRCeS5sb2NhbGVDb21wYXJlKGIuYWRkZWRCeSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImFkZGVkQXRcIjpcbiAgICAgICAgaWYgKCFhLmFkZGVkQXQgJiYgIWIuYWRkZWRBdCkgcmVzdWx0ID0gMDtcbiAgICAgICAgZWxzZSBpZiAoIWEuYWRkZWRBdCkgcmVzdWx0ID0gMTtcbiAgICAgICAgZWxzZSBpZiAoIWIuYWRkZWRBdCkgcmVzdWx0ID0gLTE7XG4gICAgICAgIGVsc2UgaWYgKGEuYWRkZWRBdCA8IGIuYWRkZWRBdCkgcmVzdWx0ID0gLTE7XG4gICAgICAgIGVsc2UgaWYgKGEuYWRkZWRBdCA+IGIuYWRkZWRBdCkgcmVzdWx0ID0gMTtcbiAgICAgICAgZWxzZSByZXN1bHQgPSAwO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGRpciA9PT0gXCJhc2NcIiA/IHJlc3VsdCA6IC1yZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseVNvcnRBbmRSZW5kZXIoKSB7XG4gICAgaWYgKHNvcnRDb2x1bW4pIHtcbiAgICAgIGZpbHRlcmVkVHJhY2tzID0gWy4uLmZpbHRlcmVkVHJhY2tzXS5zb3J0KChhLCBiKSA9PiBjb21wYXJlVHJhY2tzKGEsIGIsIHNvcnRDb2x1bW4sIHNvcnREaXJlY3Rpb24pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVzdG9yZSBvcmlnaW5hbCBvcmRlciAoYXMgbG9hZGVkIGZyb20gQVBJKVxuICAgICAgZmlsdGVyZWRUcmFja3MgPSBbLi4uY3VycmVudFRyYWNrc10uZmlsdGVyKHQgPT5cbiAgICAgICAgdC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoSW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgdC5hcnRpc3QudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hJbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICB0LmFsYnVtLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoSW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKSlcbiAgICAgICk7XG4gICAgfVxuICAgIHJlbmRlclRyYWNrcyhmaWx0ZXJlZFRyYWNrcyk7XG4gICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcbiAgfVxuXG4gIGNvbnN0IHRyYWNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRyYWNrTGlzdC5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWxpc3RcIjtcblxuICBjb25zdCBlbXB0eVN0YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZW1wdHlTdGF0ZS5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWVtcHR5XCI7XG4gIGVtcHR5U3RhdGUudGV4dENvbnRlbnQgPSBcIlNlbGVjdCBhIHBsYXlsaXN0IGZpcnN0XCI7XG4gIHRyYWNrTGlzdC5hcHBlbmRDaGlsZChlbXB0eVN0YXRlKTtcblxuICBjb25zdCBJVEVNX0hFSUdIVCA9IDU4O1xuICBjb25zdCBCVUZGRVIgPSA4O1xuXG4gIGZ1bmN0aW9uIHJlbmRlclRyYWNrcyh0cmFja3M6IFRyYWNrW10pIHtcbiAgICBjb25zdCBzaG91bGRSZXNldFNjcm9sbCA9IHJlbmRlcmVkVHJhY2tzUmVmICE9PSB0cmFja3M7XG4gICAgcmVuZGVyZWRUcmFja3NSZWYgPSB0cmFja3M7XG5cbiAgICBpZiAodHJhY2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdHJhY2tMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBjb25zdCBlbXB0eU1zZyA9IHNlYXJjaElucHV0LnZhbHVlID8gXCJObyB0cmFja3MgZm91bmRcIiA6IFwiUGxheWxpc3QgaXMgZW1wdHlcIjtcbiAgICAgIGNvbnN0IGVtcHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGVtcHR5LmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtZW1wdHlcIjtcbiAgICAgIGVtcHR5LnRleHRDb250ZW50ID0gZW1wdHlNc2c7XG4gICAgICB0cmFja0xpc3QuYXBwZW5kQ2hpbGQoZW1wdHkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVtcHR5U3RhdGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHRyYWNrTGlzdC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcblxuICAgIGlmICghc2Nyb2xsTGlzdGVuZXJBZGRlZCkge1xuICAgICAgc2Nyb2xsTGlzdGVuZXJBZGRlZCA9IHRydWU7XG4gICAgICB0cmFja0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICAgIHJlbmRlclRyYWNrcyhyZW5kZXJlZFRyYWNrc1JlZik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgc3BhY2VyID0gdHJhY2tMaXN0LnF1ZXJ5U2VsZWN0b3IoXCIuYnVsay1kZWxldGUtdmlydHVhbC1zcGFjZXJcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKCFzcGFjZXIpIHtcbiAgICAgIHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzcGFjZXIuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS12aXJ0dWFsLXNwYWNlclwiO1xuICAgICAgdHJhY2tMaXN0LmFwcGVuZENoaWxkKHNwYWNlcik7XG4gICAgfVxuXG4gICAgbGV0IHdpbmRvd0VsID0gdHJhY2tMaXN0LnF1ZXJ5U2VsZWN0b3IoXCIuYnVsay1kZWxldGUtdmlydHVhbC13aW5kb3dcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKCF3aW5kb3dFbCkge1xuICAgICAgd2luZG93RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgd2luZG93RWwuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS12aXJ0dWFsLXdpbmRvd1wiO1xuICAgICAgdHJhY2tMaXN0LmFwcGVuZENoaWxkKHdpbmRvd0VsKTtcbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkUmVzZXRTY3JvbGwpIHtcbiAgICAgIHRyYWNrTGlzdC5zY3JvbGxUb3AgPSAwO1xuICAgIH1cblxuICAgIGNvbnN0IHRvdGFsSGVpZ2h0ID0gdHJhY2tzLmxlbmd0aCAqIElURU1fSEVJR0hUO1xuICAgIHNwYWNlci5zdHlsZS5oZWlnaHQgPSBgJHt0b3RhbEhlaWdodH1weGA7XG4gICAgc3BhY2VyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcblxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRyYWNrTGlzdC5zY3JvbGxUb3A7XG4gICAgY29uc3Qgdmlld3BvcnRIZWlnaHQgPSB0cmFja0xpc3QuY2xpZW50SGVpZ2h0O1xuXG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IE1hdGgubWF4KDAsIE1hdGguZmxvb3Ioc2Nyb2xsVG9wIC8gSVRFTV9IRUlHSFQpIC0gQlVGRkVSKTtcbiAgICBjb25zdCBlbmRJbmRleCA9IE1hdGgubWluKHRyYWNrcy5sZW5ndGgsIE1hdGguY2VpbCgoc2Nyb2xsVG9wICsgdmlld3BvcnRIZWlnaHQpIC8gSVRFTV9IRUlHSFQpICsgQlVGRkVSKTtcblxuICAgIHdpbmRvd0VsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7c3RhcnRJbmRleCAqIElURU1fSEVJR0hUfXB4KWA7XG4gICAgd2luZG93RWwuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGNvbnN0IGN1cnJlbnRQbGF5aW5nVXJpID0gKFNwaWNldGlmeSBhcyBhbnkpLlBsYXllcj8uZGF0YT8uaXRlbT8udXJpIHx8IG51bGw7XG5cbiAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA8IGVuZEluZGV4OyBpKyspIHtcbiAgICAgIGNvbnN0IHRyYWNrID0gdHJhY2tzW2ldO1xuICAgICAgY29uc3QgaXNQbGF5aW5nID0gY3VycmVudFBsYXlpbmdVcmkgPT09IHRyYWNrLnVyaTtcblxuICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpdGVtLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtaXRlbVwiICsgKHNlbGVjdGVkU2V0LmhhcyhnZXRTZWxlY3Rpb25LZXkodHJhY2spKSA/IFwiIHNlbGVjdGVkXCIgOiBcIlwiKTtcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS11cmlcIiwgdHJhY2sudXJpKTtcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBpLnRvU3RyaW5nKCkpO1xuICAgICAgaXRlbS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcblxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xvc2VzdChcIi5idWxrLWRlbGV0ZS1jaGVja2JveC13cmFwcGVyXCIpIHx8XG4gICAgICAgICAgICAoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoXCIuYnVsay1kZWxldGUtcGxheWJhY2stY29udHJvbHNcIikpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9ICFjaGVja2JveC5jaGVja2VkO1xuICAgICAgICBjb25zdCBrZXkgPSBnZXRTZWxlY3Rpb25LZXkodHJhY2spO1xuICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgIHNlbGVjdGVkU2V0LmFkZChrZXkpO1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGVjdGVkU2V0LmRlbGV0ZShrZXkpO1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZUJ1dHRvblN0YXRlKCk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdHJhY2tOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHRyYWNrTnVtYmVyLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtdHJhY2stbnVtYmVyXCI7XG4gICAgICBpZiAoaXNQbGF5aW5nKSB7XG4gICAgICAgIHRyYWNrTnVtYmVyLmFwcGVuZENoaWxkKGNyZWF0ZVBsYXlpbmdJbmRpY2F0b3IoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFja051bWJlci50ZXh0Q29udGVudCA9IChpICsgMSkudG9TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW1hZ2UgPSBjcmVhdGVUcmFja0ltYWdlKHRyYWNrLmltYWdlVXJsKTtcblxuICAgICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpbmZvLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtaXRlbS1pbmZvXCI7XG5cbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICB0aXRsZS5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWl0ZW0tdGl0bGVcIjtcbiAgICAgIHRpdGxlLmhyZWYgPSB0cmFjay5hbGJ1bVVyaTtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdHJhY2submFtZTtcbiAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmICh0cmFjay5hbGJ1bVVyaS5zdGFydHNXaXRoKFwic3BvdGlmeTphbGJ1bTpcIikpIHtcbiAgICAgICAgICBjb25zdCBwYXRoID0gdHJhY2suYWxidW1VcmkucmVwbGFjZShcInNwb3RpZnk6YWxidW06XCIsIFwiL2FsYnVtL1wiKTtcbiAgICAgICAgICAoU3BpY2V0aWZ5IGFzIGFueSkuUGxhdGZvcm0/Lkhpc3Rvcnk/LnB1c2gocGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBhcnRpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGFydGlzdC5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWl0ZW0tYXJ0aXN0XCI7XG4gICAgICBhcnRpc3QudGV4dENvbnRlbnQgPSB0cmFjay5hcnRpc3Q7XG5cbiAgICAgIGNvbnN0IGFsYnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBhbGJ1bS5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWl0ZW0tYWxidW1cIjtcbiAgICAgIGFsYnVtLnRleHRDb250ZW50ID0gdHJhY2suYWxidW07XG5cbiAgICAgIGluZm8uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgaW5mby5hcHBlbmRDaGlsZChhcnRpc3QpO1xuICAgICAgaW5mby5hcHBlbmRDaGlsZChhbGJ1bSk7XG5cbiAgICAgIC8vIEFkZGVkIGJ5IC8gQWRkZWQgYXQgZGlzcGxheVxuICAgICAgY29uc3QgbWV0YUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbWV0YUluZm8uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1pdGVtLW1ldGFcIjtcblxuICAgICAgY29uc3QgYWRkZWRCeUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBhZGRlZEJ5RWwuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1pdGVtLWFkZGVkYnlcIjtcbiAgICAgIGFkZGVkQnlFbC50ZXh0Q29udGVudCA9IHRyYWNrLmFkZGVkQnkgfHwgXCJcIjtcbiAgICAgIGFkZGVkQnlFbC50aXRsZSA9IHRyYWNrLmFkZGVkQnkgPyBgQWRkZWQgYnk6ICR7dHJhY2suYWRkZWRCeX1gIDogXCJcIjtcblxuICAgICAgY29uc3QgYWRkZWRBdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBhZGRlZEF0RWwuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1pdGVtLWFkZGVkYXRcIjtcbiAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBmb3JtYXREYXRlKHRyYWNrLmFkZGVkQXQpO1xuICAgICAgYWRkZWRBdEVsLnRleHRDb250ZW50ID0gZm9ybWF0dGVkRGF0ZTtcbiAgICAgIGFkZGVkQXRFbC50aXRsZSA9IHRyYWNrLmFkZGVkQXQgPyBgQWRkZWQ6ICR7dHJhY2suYWRkZWRBdH1gIDogXCJcIjtcblxuICAgICAgbWV0YUluZm8uYXBwZW5kQ2hpbGQoYWRkZWRCeUVsKTtcbiAgICAgIG1ldGFJbmZvLmFwcGVuZENoaWxkKGFkZGVkQXRFbCk7XG5cbiAgICAgIGNvbnN0IHBsYXliYWNrID0gY3JlYXRlUGxheWJhY2tDb250cm9sKHRyYWNrLnVyaSwgdHJhY2suZHVyYXRpb24pO1xuXG4gICAgICBjb25zdCBjaGVja2JveFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY2hlY2tib3hXcmFwcGVyLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY2hlY2tib3gtd3JhcHBlclwiO1xuXG4gICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICBjaGVja2JveC5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWNoZWNrYm94XCI7XG4gICAgICBjaGVja2JveC5jaGVja2VkID0gc2VsZWN0ZWRTZXQuaGFzKGdldFNlbGVjdGlvbktleSh0cmFjaykpO1xuXG4gICAgICBjb25zdCBjdXN0b21DaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjdXN0b21DaGVja2JveC5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWNoZWNrYm94LWN1c3RvbVwiO1xuXG4gICAgICBjaGVja2JveFdyYXBwZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgY2hlY2tib3hXcmFwcGVyLmFwcGVuZENoaWxkKGN1c3RvbUNoZWNrYm94KTtcblxuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3Qga2V5ID0gZ2V0U2VsZWN0aW9uS2V5KHRyYWNrKTtcbiAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgc2VsZWN0ZWRTZXQuYWRkKGtleSk7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0ZWRTZXQuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIHVwZGF0ZUJ1dHRvblN0YXRlKCk7XG4gICAgICB9KTtcblxuICAgICAgaXRlbS5hcHBlbmRDaGlsZCh0cmFja051bWJlcik7XG4gICAgICBpdGVtLmFwcGVuZENoaWxkKGNoZWNrYm94V3JhcHBlcik7XG4gICAgICBpdGVtLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaW5mbyk7XG4gICAgICBpdGVtLmFwcGVuZENoaWxkKG1ldGFJbmZvKTtcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQocGxheWJhY2spO1xuICAgICAgd2luZG93RWwuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmlsdGVyVHJhY2tzKCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoSW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgZmlsdGVyZWQgPSBjdXJyZW50VHJhY2tzLmZpbHRlcih0ID0+XG4gICAgICB0Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeSkgfHxcbiAgICAgIHQuYXJ0aXN0LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkpIHx8XG4gICAgICB0LmFsYnVtLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkpXG4gICAgKTtcbiAgICBpZiAoc29ydENvbHVtbikge1xuICAgICAgZmlsdGVyZWQuc29ydCgoYSwgYikgPT4gY29tcGFyZVRyYWNrcyhhLCBiLCBzb3J0Q29sdW1uLCBzb3J0RGlyZWN0aW9uKSk7XG4gICAgfVxuICAgIGZpbHRlcmVkVHJhY2tzID0gZmlsdGVyZWQ7XG4gICAgcmVuZGVyVHJhY2tzKGZpbHRlcmVkVHJhY2tzKTtcbiAgICB1cGRhdGVCdXR0b25TdGF0ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQnV0dG9uU3RhdGUoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRDb3VudCA9IHNlbGVjdGVkU2V0LnNpemU7XG4gICAgdHJhY2tJbmZvLmlubmVySFRNTCA9IGA8cD48c3Bhbj4ke3NlbGVjdGVkQ291bnR9PC9zcGFuPiB0cmFjayhzKSBzZWxlY3RlZCBmcm9tIHBsYXlsaXN0PC9wPmA7XG4gICAgZGVsZXRlQnRuLmRpc2FibGVkID0gc2VsZWN0ZWRDb3VudCA9PT0gMDtcblxuICAgIGlmIChzZWxlY3RlZENvdW50ID09PSAwKSB7XG4gICAgICBzZWxlY3RBbGxCdG4udGV4dENvbnRlbnQgPSBcIlNlbGVjdCBBbGxcIjtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQ291bnQgPT09IGZpbHRlcmVkVHJhY2tzLmxlbmd0aCkge1xuICAgICAgc2VsZWN0QWxsQnRuLnRleHRDb250ZW50ID0gXCJEZXNlbGVjdCBBbGxcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0QWxsQnRuLnRleHRDb250ZW50ID0gXCJTZWxlY3QgQWxsXCI7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlZCBoYW5kbGVyOiBzZWxlY3QgYSBwbGF5bGlzdCBieSBVUkksIGxvYWQgaXRzIHRyYWNrcywgYW5kIHByZS1zZWxlY3RcbiAgICogYW55IHRyYWNrcyB0aGF0IG1hdGNoIHRyYWNrVXJpcyAodGhlIG9uZXMgdGhlIHVzZXIgcmlnaHQtY2xpY2tlZCBvbikuXG4gICAqL1xuICBhc3luYyBmdW5jdGlvbiBzZWxlY3RQbGF5bGlzdCh1cmk6IHN0cmluZykge1xuICAgIGlmICghdXJpKSByZXR1cm47XG5cbiAgICBjdXJyZW50UGxheWxpc3RVcmkgPSB1cmk7XG4gICAgcGxheWxpc3RTZWxlY3QudmFsdWUgPSB1cmk7XG5cbiAgICAvLyBSZXNldCBzb3J0XG4gICAgc29ydENvbHVtbiA9IFwiXCI7XG4gICAgc29ydERpcmVjdGlvbiA9IFwiYXNjXCI7XG4gICAgdXBkYXRlU29ydEluZGljYXRvcnMoKTtcblxuICAgIC8vIFNob3cgbG9hZGluZyBzdGF0ZVxuICAgIGVtcHR5U3RhdGUudGV4dENvbnRlbnQgPSBcIkxvYWRpbmcgdHJhY2tzLi4uXCI7XG4gICAgdHJhY2tMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgdHJhY2tMaXN0LmFwcGVuZENoaWxkKGVtcHR5U3RhdGUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGN1cnJlbnRUcmFja3MgPSBhd2FpdCBnZXRQbGF5bGlzdFRyYWNrcyh1cmksICh0cmFja3MsIHRvdGFsTG9hZGVkKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50UGxheWxpc3RVcmkgIT09IHVyaSkgcmV0dXJuOyAvLyBzZWxlY3Rpb24gY2hhbmdlZCBtaWQtbG9hZFxuICAgICAgICBlbXB0eVN0YXRlLnRleHRDb250ZW50ID0gYExvYWRlZCAke3RvdGFsTG9hZGVkfSB0cmFjayhzKS4uLmA7XG4gICAgICB9KTtcblxuICAgICAgLy8gQmFpbCBpZiB0aGUgdXNlciBzd2l0Y2hlZCB0byBhbm90aGVyIHBsYXlsaXN0IHdoaWxlIGxvYWRpbmdcbiAgICAgIGlmIChjdXJyZW50UGxheWxpc3RVcmkgIT09IHVyaSkgcmV0dXJuO1xuXG4gICAgICBmaWx0ZXJlZFRyYWNrcyA9IFsuLi5jdXJyZW50VHJhY2tzXTtcbiAgICAgIHNlbGVjdGVkU2V0LmNsZWFyKCk7XG4gICAgICBzZWFyY2hJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgc2VhcmNoSW5wdXQudmFsdWUgPSBcIlwiO1xuXG4gICAgICAvLyBQcmUtc2VsZWN0IHRoZSB0cmFja3MgdGhlIHVzZXIgb3JpZ2luYWxseSByaWdodC1jbGlja2VkIG9uXG4gICAgICBmb3IgKGNvbnN0IHRyYWNrVXJpIG9mIHRyYWNrVXJpcykge1xuICAgICAgICBjb25zdCB0cmFjayA9IGN1cnJlbnRUcmFja3MuZmluZCh0ID0+IHQudXJpID09PSB0cmFja1VyaSk7XG4gICAgICAgIGlmICh0cmFjaykge1xuICAgICAgICAgIHNlbGVjdGVkU2V0LmFkZChnZXRTZWxlY3Rpb25LZXkodHJhY2spKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZW5kZXJUcmFja3MoZmlsdGVyZWRUcmFja3MpO1xuICAgICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcblxuICAgICAgLy8gU2Nyb2xsIHRvIHRoZSBmaXJzdCBzZWxlY3RlZCB0cmFja1xuICAgICAgaWYgKHNlbGVjdGVkU2V0LnNpemUgPiAwKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbEluZGV4ID0gZmlsdGVyZWRUcmFja3MuZmluZEluZGV4KHQgPT4gc2VsZWN0ZWRTZXQuaGFzKGdldFNlbGVjdGlvbktleSh0KSkpO1xuICAgICAgICBpZiAoc2Nyb2xsSW5kZXggPiAwKSB7XG4gICAgICAgICAgY29uc3Qgdmlld3BvcnRIZWlnaHQgPSB0cmFja0xpc3QuY2xpZW50SGVpZ2h0IHx8IDQwMDtcbiAgICAgICAgICB0cmFja0xpc3Quc2Nyb2xsVG9wID0gTWF0aC5tYXgoMCwgc2Nyb2xsSW5kZXggKiBJVEVNX0hFSUdIVCAtIHZpZXdwb3J0SGVpZ2h0IC8gMiArIElURU1fSEVJR0hUIC8gMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoY3VycmVudFBsYXlsaXN0VXJpICE9PSB1cmkpIHJldHVybjtcbiAgICAgIGVtcHR5U3RhdGUudGV4dENvbnRlbnQgPSBcIkZhaWxlZCB0byBsb2FkIHRyYWNrc1wiO1xuICAgICAgdHJhY2tMaXN0LmFwcGVuZENoaWxkKGVtcHR5U3RhdGUpO1xuICAgICAgU3BpY2V0aWZ5LnNob3dOb3RpZmljYXRpb24oXCJGYWlsZWQgdG8gbG9hZCB0cmFja3NcIiwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJlc2V0IHRoZSBtb2RhbCB0byB0aGUgZW1wdHkgKG5vIHBsYXlsaXN0IHNlbGVjdGVkKSBzdGF0ZSAqL1xuICBmdW5jdGlvbiByZXNldFRvRW1wdHkoKSB7XG4gICAgY3VycmVudFBsYXlsaXN0VXJpID0gbnVsbDtcbiAgICBjdXJyZW50VHJhY2tzID0gW107XG4gICAgZmlsdGVyZWRUcmFja3MgPSBbXTtcbiAgICBzZWxlY3RlZFNldC5jbGVhcigpO1xuICAgIHNlYXJjaElucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgc29ydENvbHVtbiA9IFwiXCI7XG4gICAgc29ydERpcmVjdGlvbiA9IFwiYXNjXCI7XG4gICAgdXBkYXRlU29ydEluZGljYXRvcnMoKTtcbiAgICB0cmFja0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBlbXB0eVN0YXRlLnRleHRDb250ZW50ID0gXCJTZWxlY3QgYSBwbGF5bGlzdCBmaXJzdFwiO1xuICAgIHRyYWNrTGlzdC5hcHBlbmRDaGlsZChlbXB0eVN0YXRlKTtcbiAgICB1cGRhdGVCdXR0b25TdGF0ZSgpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gbG9hZFBsYXlsaXN0cygpIHtcbiAgICB0cnkge1xuICAgICAgYWxsUGxheWxpc3RzID0gYXdhaXQgZmV0Y2hQbGF5bGlzdHNXaXRoRGVsZXRlUGVybWlzc2lvbigpO1xuICAgICAgYWxsUGxheWxpc3RzLnNvcnQoKGEsIGIpID0+IGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSkpO1xuXG4gICAgICBmb3IgKGNvbnN0IHBsYXlsaXN0IG9mIGFsbFBsYXlsaXN0cykge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBwbGF5bGlzdC51cmk7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHBsYXlsaXN0Lm5hbWU7XG4gICAgICAgIHBsYXlsaXN0U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICB9XG5cbiAgICAgIC8vIEF1dG8tc2VsZWN0OiBpZiBjb250ZXh0VXJpIHBvaW50cyB0byBhIHBsYXlsaXN0IHdlIGhhdmUgYWNjZXNzIHRvLFxuICAgICAgLy8gdHJ1c3QgaXQgYW5kIHNlbGVjdCBpdCBpbW1lZGlhdGVseSBcdTIwMTQgbm8gbmVlZCB0byBwcmUtZmV0Y2gganVzdCB0byB2ZXJpZnkuXG4gICAgICBpZiAoY3VycmVudFBsYXlsaXN0VXJpICYmIGFsbFBsYXlsaXN0cy5zb21lKHAgPT4gcC51cmkgPT09IGN1cnJlbnRQbGF5bGlzdFVyaSkpIHtcbiAgICAgICAgYXdhaXQgc2VsZWN0UGxheWxpc3QoY3VycmVudFBsYXlsaXN0VXJpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBGYWxsYmFjazogdHJ5IHRvIGZpbmQgd2hpY2ggb2YgdGhlIHVzZXIncyBwbGF5bGlzdHMgY29udGFpbnMgdGhlXG4gICAgICAvLyByaWdodC1jbGlja2VkIHRyYWNrcy4gIFNjYW4gcGxheWxpc3RzIHVudGlsIHdlIGZpbmQgYSBtYXRjaC5cbiAgICAgIGlmICh0cmFja1VyaXMubGVuZ3RoID4gMCAmJiBhbGxQbGF5bGlzdHMubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGNvbnN0IHBsYXlsaXN0IG9mIGFsbFBsYXlsaXN0cykge1xuICAgICAgICAgIGlmIChwbGF5bGlzdC51cmkgPT09IGN1cnJlbnRQbGF5bGlzdFVyaSkgY29udGludWU7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIEZldGNoIGp1c3QgZW5vdWdoIHRvIGNoZWNrIGlmIGFueSBzZWxlY3RlZCB0cmFjayBpcyBwcmVzZW50XG4gICAgICAgICAgICBjb25zdCB0cmFja3MgPSBhd2FpdCBnZXRQbGF5bGlzdFRyYWNrcyhwbGF5bGlzdC51cmksIHVuZGVmaW5lZCwgdHJhY2tVcmlzLmxlbmd0aCAqIDIpO1xuICAgICAgICAgICAgY29uc3QgdHJhY2tVcmlzU2V0ID0gbmV3IFNldCh0cmFja3MubWFwKHQgPT4gdC51cmkpKTtcbiAgICAgICAgICAgIGlmICh0cmFja1VyaXMuc29tZSh1cmkgPT4gdHJhY2tVcmlzU2V0Lmhhcyh1cmkpKSkge1xuICAgICAgICAgICAgICBhd2FpdCBzZWxlY3RQbGF5bGlzdChwbGF5bGlzdC51cmkpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gU2lsZW50bHkgc2tpcCBwbGF5bGlzdHMgdGhhdCBmYWlsIHRvIGxvYWRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihcIkZhaWxlZCB0byBsb2FkIHBsYXlsaXN0c1wiLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBsb2FkUGxheWxpc3RzKCk7XG5cbiAgcGxheWxpc3RTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRVcmkgPSBwbGF5bGlzdFNlbGVjdC52YWx1ZTtcbiAgICBpZiAoc2VsZWN0ZWRVcmkpIHtcbiAgICAgIGF3YWl0IHNlbGVjdFBsYXlsaXN0KHNlbGVjdGVkVXJpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzZXRUb0VtcHR5KCk7XG4gICAgfVxuICB9KTtcblxuICBsZXQgc2VhcmNoVGltZW91dDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgaWYgKHNlYXJjaFRpbWVvdXQpIHtcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoc2VhcmNoVGltZW91dCk7XG4gICAgfVxuICAgIHNlYXJjaFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmaWx0ZXJUcmFja3MoKTtcbiAgICB9LCAxNTApO1xuICB9KTtcblxuICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidXR0b25Db250YWluZXIuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1idXR0b25zXCI7XG5cbiAgY29uc3Qgc2VsZWN0QWxsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc2VsZWN0QWxsQnRuLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtc2VsZWN0LWFsbFwiO1xuICBzZWxlY3RBbGxCdG4udGV4dENvbnRlbnQgPSBcIlNlbGVjdCBBbGxcIjtcbiAgc2VsZWN0QWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkU2V0LnNpemUgPT09IGZpbHRlcmVkVHJhY2tzLmxlbmd0aCkge1xuICAgICAgc2VsZWN0ZWRTZXQuY2xlYXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsdGVyZWRUcmFja3MuZm9yRWFjaCh0ID0+IHNlbGVjdGVkU2V0LmFkZChnZXRTZWxlY3Rpb25LZXkodCkpKTtcbiAgICB9XG4gICAgcmVuZGVyVHJhY2tzKGZpbHRlcmVkVHJhY2tzKTtcbiAgICB1cGRhdGVCdXR0b25TdGF0ZSgpO1xuICB9KTtcblxuICBjb25zdCBidXR0b25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbkdyb3VwLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtYnV0dG9uLWdyb3VwXCI7XG5cbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2FuY2VsQnRuLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtYnRuIGNhbmNlbFwiO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNsZWFudXBBbmRDbG9zZSgpKTtcblxuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZWxldGVCdG4uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1idG4gZGVsZXRlXCI7XG4gIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gIGRlbGV0ZUJ0bi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFjdXJyZW50UGxheWxpc3RVcmkpIHJldHVybjtcblxuICAgIGNvbnN0IHBsYXlsaXN0ID0gYWxsUGxheWxpc3RzLmZpbmQocCA9PiBwLnVyaSA9PT0gY3VycmVudFBsYXlsaXN0VXJpKTtcbiAgICBjb25zdCBwbGF5bGlzdE5hbWUgPSBwbGF5bGlzdD8ubmFtZSB8fCBcIlVua25vd24gUGxheWxpc3RcIjtcbiAgICBjb25zdCB0cmFja0NvdW50ID0gc2VsZWN0ZWRTZXQuc2l6ZTtcbiAgICBjb25zdCB0cmFja3NUb0RlbGV0ZSA9IGN1cnJlbnRUcmFja3MuZmlsdGVyKHQgPT4gc2VsZWN0ZWRTZXQuaGFzKGdldFNlbGVjdGlvbktleSh0KSkpO1xuXG4gICAgY3JlYXRlRGVsZXRlQ29uZmlybU1vZGFsKFxuICAgICAgdHJhY2tzVG9EZWxldGUsXG4gICAgICBwbGF5bGlzdE5hbWUsXG4gICAgICBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRyYWNrc1dpdGhVaWQgPSB0cmFja3NUb0RlbGV0ZS5tYXAodCA9PiAoeyB1cmk6IHQudXJpLCB1aWQ6IHQudWlkIH0pKTtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IGRlbGV0ZVRyYWNrc0Zyb21QbGF5bGlzdChjdXJyZW50UGxheWxpc3RVcmkhLCB0cmFja3NXaXRoVWlkKTtcblxuICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgIFNwaWNldGlmeS5zaG93Tm90aWZpY2F0aW9uKGBEZWxldGVkICR7dHJhY2tDb3VudH0gdHJhY2socykgZnJvbSBwbGF5bGlzdGApO1xuXG4gICAgICAgICAgY3VycmVudFRyYWNrcyA9IGN1cnJlbnRUcmFja3MuZmlsdGVyKHQgPT4gIXNlbGVjdGVkU2V0LmhhcyhnZXRTZWxlY3Rpb25LZXkodCkpKTtcbiAgICAgICAgICBmaWx0ZXJlZFRyYWNrcyA9IGZpbHRlcmVkVHJhY2tzLmZpbHRlcih0ID0+ICFzZWxlY3RlZFNldC5oYXMoZ2V0U2VsZWN0aW9uS2V5KHQpKSk7XG4gICAgICAgICAgc2VsZWN0ZWRTZXQuY2xlYXIoKTtcbiAgICAgICAgICByZW5kZXJUcmFja3MoZmlsdGVyZWRUcmFja3MpO1xuICAgICAgICAgIHVwZGF0ZUJ1dHRvblN0YXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgU3BpY2V0aWZ5LnNob3dOb3RpZmljYXRpb24oXCJGYWlsZWQgdG8gZGVsZXRlIHRyYWNrc1wiLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICgpID0+IHt9XG4gICAgKTtcbiAgfSk7XG5cbiAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0QWxsQnRuKTtcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGxheWxpc3RTZWxlY3Rvcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VhcmNoQ29udGFpbmVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0cmFja0luZm8pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlckJhcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodHJhY2tMaXN0KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuXG4gIG1vZGFsLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gbW9kYWwpIHtcbiAgICAgIGNsZWFudXBBbmRDbG9zZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFudXBBbmRDbG9zZSk7XG5cbiAgY29uc3QgdXBkYXRlUGxheWJhY2tTdGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSAoU3BpY2V0aWZ5IGFzIGFueSkuUGxheWVyO1xuICAgIGlmICghcGxheWVyPy5kYXRhPy5pdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudFVyaSA9IHBsYXllci5kYXRhLml0ZW0udXJpO1xuICAgIGNvbnN0IGlzUGxheWluZyA9IHBsYXllci5pc1BsYXlpbmcoKTtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHBsYXllci5nZXRQcm9ncmVzcygpO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gcGxheWVyLmdldER1cmF0aW9uKCkgfHwgcGxheWVyLmRhdGEuaXRlbS5kdXJhdGlvbj8udG90YWxNcyB8fCAwO1xuXG4gICAgdHJhY2tMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnVsay1kZWxldGUtcGxheWJhY2stY29udHJvbHNcIikuZm9yRWFjaCgoY3RybDogYW55KSA9PiB7XG4gICAgICBjb25zdCBwbGF5QnRuID0gY3RybC5xdWVyeVNlbGVjdG9yKFwiLmJ1bGstZGVsZXRlLXBsYXliYWNrLWJ1dHRvblwiKTtcbiAgICAgIGNvbnN0IHNsaWRlciA9IGN0cmwucXVlcnlTZWxlY3RvcihcIi5idWxrLWRlbGV0ZS1zbGlkZXJcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gY3RybC5xdWVyeVNlbGVjdG9yKFwiLmJ1bGstZGVsZXRlLXNsaWRlci10aW1lXCIpO1xuXG4gICAgICBpZiAoY3RybC5kYXRhc2V0LnVyaSA9PT0gY3VycmVudFVyaSkge1xuICAgICAgICBpZiAoaXNQbGF5aW5nKSB7XG4gICAgICAgICAgcGxheUJ0bi5pbm5lckhUTUwgPSBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk02IDE5aDRWNUg2djE0em04LTE0djE0aDRWNWgtNHpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjwvc3ZnPmA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGxheUJ0bi5pbm5lckhUTUwgPSBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk04IDV2MTRsMTEtN3pcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjwvc3ZnPmA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNsaWRlcikge1xuICAgICAgICAgIHNsaWRlci52YWx1ZSA9IHBvc2l0aW9uLnRvU3RyaW5nKCk7XG4gICAgICAgICAgc2xpZGVyLm1heCA9IGR1cmF0aW9uLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRUaW1lKSBjdXJyZW50VGltZS50ZXh0Q29udGVudCA9IGZvcm1hdFRpbWUocG9zaXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdHJhY2tMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnVsay1kZWxldGUtaXRlbVwiKS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHRyYWNrTnVtYmVyID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmJ1bGstZGVsZXRlLXRyYWNrLW51bWJlclwiKTtcbiAgICAgIGlmICghdHJhY2tOdW1iZXIpIHJldHVybjtcblxuICAgICAgY29uc3QgdXJpID0gaXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXVyaVwiKTtcblxuICAgICAgaWYgKHVyaSA9PT0gY3VycmVudFVyaSkge1xuICAgICAgICB0cmFja051bWJlci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImJ1bGstZGVsZXRlLXBsYXlpbmctaW5kaWNhdG9yXCI+PC9kaXY+YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGlkeCA9IHBhcnNlSW50KGl0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKSwgMTApO1xuICAgICAgICB0cmFja051bWJlci50ZXh0Q29udGVudCA9IChpZHggKyAxKS50b1N0cmluZygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHN0YXJ0UGxheWJhY2tVcGRhdGVzID0gKCkgPT4ge1xuICAgIGlmICh1cGRhdGVJbnRlcnZhbCkgcmV0dXJuO1xuICAgIHVwZGF0ZUludGVydmFsID0gd2luZG93LnNldEludGVydmFsKHVwZGF0ZVBsYXliYWNrU3RhdGUsIDEwMDApO1xuICB9O1xuXG4gIHN0YXJ0UGxheWJhY2tVcGRhdGVzKCk7XG5cbiAgcGxheWxpc3RTZWxlY3QuZm9jdXMoKTtcbn1cbiIsICJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5jc3NcIiB3aXRoIHsgdHlwZTogXCJjc3NcIiB9O1xuaW1wb3J0IHsgY3JlYXRlTW9kYWwgfSBmcm9tIFwiLi9tb2RhbC50c3hcIjtcblxuZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc3R5bGVzKTtcblxuZnVuY3Rpb24gaXNUcmFja1VyaSh1cmk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB1cmlPYmogPSBTcGljZXRpZnkuVVJJLmZyb20odXJpKTtcbiAgcmV0dXJuICEhKHVyaU9iaiAmJiAodXJpT2JqIGFzIHsgdHlwZT86IHN0cmluZyB9KS50eXBlID09PSBcInRyYWNrXCIpO1xufVxuXG5mdW5jdGlvbiBpc1BsYXlsaXN0VXJpKHVyaTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHVyaU9iaiA9IFNwaWNldGlmeS5VUkkuZnJvbSh1cmkpO1xuICByZXR1cm4gISEodXJpT2JqICYmICh1cmlPYmogYXMgeyB0eXBlPzogc3RyaW5nIH0pLnR5cGUgPT09IFwicGxheWxpc3RcIik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZU1lbnVDbGljayh1cmlzOiBzdHJpbmdbXSwgX3VpZHM/OiBzdHJpbmdbXSwgY29udGV4dFVyaT86IHN0cmluZykge1xuICBjb25zdCB0cmFja1VyaXMgPSB1cmlzLmZpbHRlcihpc1RyYWNrVXJpKTtcbiAgXG4gIGlmICh0cmFja1VyaXMubGVuZ3RoID09PSAwKSB7XG4gICAgU3BpY2V0aWZ5LnNob3dOb3RpZmljYXRpb24oXCJObyB0cmFja3Mgc2VsZWN0ZWRcIiwgdHJ1ZSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBsZXQgcGxheWxpc3RVcmk6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgaWYgKGNvbnRleHRVcmkgJiYgaXNQbGF5bGlzdFVyaShjb250ZXh0VXJpKSkge1xuICAgIHBsYXlsaXN0VXJpID0gY29udGV4dFVyaTtcbiAgfVxuICBcbiAgY3JlYXRlTW9kYWwodHJhY2tVcmlzLCBwbGF5bGlzdFVyaSk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZEFkZCh1cmlzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICByZXR1cm4gdXJpcy5zb21lKGlzVHJhY2tVcmkpO1xufVxuXG5jb25zdCBidWxrRGVsZXRlTWVudUl0ZW0gPSBuZXcgU3BpY2V0aWZ5LkNvbnRleHRNZW51Lkl0ZW0oXG4gIFwiRGVsZXRlIGZyb20gUGxheWxpc3RcIixcbiAgaGFuZGxlTWVudUNsaWNrLFxuICBzaG91bGRBZGQsXG4gIFwiYmxvY2tcIiBhcyBTcGljZXRpZnkuSWNvblxuKTtcblxuYnVsa0RlbGV0ZU1lbnVJdGVtLnJlZ2lzdGVyKCk7Il0sCiAgIm1hcHBpbmdzIjogIjs7O0FBQ1UsSUFBTSxRQUFRLElBQUksY0FBYztBQUNoQyxNQUFNLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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
