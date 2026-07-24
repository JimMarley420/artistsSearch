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
  width: 130px;
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

.bulk-delete-item-title {
  flex: 3;
  min-width: 0;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  text-decoration: none;
  line-height: 1.3;
  padding-right: 8px;
}

.bulk-delete-item-title:hover {
  text-decoration: underline;
}

.bulk-delete-item-artist {
  flex: 2;
  min-width: 0;
  color: #b3b3b3;
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 8px;
}

.bulk-delete-item-album {
  flex: 2;
  min-width: 0;
  color: #727272;
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 8px;
}

/* Added By column */
.bulk-delete-item-addedby {
  width: 130px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  padding-right: 8px;
}

.bulk-delete-addedby-avatar {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  flex-shrink: 0;
  object-fit: cover;
  background: #333;
}

.bulk-delete-addedby-name {
  color: #b3b3b3;
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Added At column */
.bulk-delete-item-addedat {
  width: 90px;
  flex-shrink: 0;
  color: #727272;
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 8px;
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
        if (!item?.uri) continue;
        try {
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
          let addedByImageUrl = "";
          const addedByField = itemAny.addedBy || itemAny.added_by;
          if (addedByField) {
            if (typeof addedByField === "string") {
              addedBy = addedByField;
            } else if (typeof addedByField === "object") {
              const ab = addedByField;
              addedBy = ab.name || ab.displayName || ab.display_name || ab.id || "";
              addedByImageUrl = ab.imageUrl || ab.avatar || ab.image?.url || ab.picture || "";
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
            addedByImageUrl,
            addedAt
          });
        } catch (e) {
          console.warn("Skipping bad track item:", e);
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
  let pendingRequest = 0;
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
      const titleEl = document.createElement("a");
      titleEl.className = "bulk-delete-item-title";
      titleEl.href = track.albumUri;
      titleEl.textContent = track.name;
      titleEl.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (track.albumUri.startsWith("spotify:album:")) {
          const path = track.albumUri.replace("spotify:album:", "/album/");
          Spicetify.Platform?.History?.push(path);
        }
      });
      const artistEl = document.createElement("span");
      artistEl.className = "bulk-delete-item-artist";
      artistEl.textContent = track.artist;
      const albumEl = document.createElement("span");
      albumEl.className = "bulk-delete-item-album";
      albumEl.textContent = track.album;
      const addedByEl = document.createElement("div");
      addedByEl.className = "bulk-delete-item-addedby";
      addedByEl.title = track.addedBy ? `Added by: ${track.addedBy}` : "";
      if (track.addedByImageUrl) {
        const avatar = document.createElement("img");
        avatar.className = "bulk-delete-addedby-avatar";
        avatar.src = track.addedByImageUrl;
        avatar.alt = "";
        avatar.loading = "lazy";
        avatar.onerror = () => {
          avatar.style.display = "none";
        };
        addedByEl.appendChild(avatar);
      }
      const nameSpan = document.createElement("span");
      nameSpan.className = "bulk-delete-addedby-name";
      nameSpan.textContent = track.addedBy || "";
      addedByEl.appendChild(nameSpan);
      const addedAtEl = document.createElement("span");
      addedAtEl.className = "bulk-delete-item-addedat";
      const formattedDate = formatDate(track.addedAt);
      addedAtEl.textContent = formattedDate;
      addedAtEl.title = track.addedAt ? `Added: ${track.addedAt}` : "";
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
      item.appendChild(titleEl);
      item.appendChild(artistEl);
      item.appendChild(albumEl);
      item.appendChild(addedByEl);
      item.appendChild(addedAtEl);
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
    const requestId = ++pendingRequest;
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
        if (pendingRequest !== requestId) return;
        emptyState.textContent = `Loaded ${totalLoaded} track(s)...`;
      });
      if (pendingRequest !== requestId) return;
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
      if (pendingRequest !== requestId) return;
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
      if (trackUris.length === 0 || allPlaylists.length === 0) return;
      if (currentPlaylistUri && allPlaylists.some((p) => p.uri === currentPlaylistUri)) {
        playlistSelect.value = currentPlaylistUri;
        playlistSelect.dispatchEvent(new Event("change"));
        return;
      }
      emptyState.textContent = "Scanning playlists...";
      trackList.innerHTML = "";
      trackList.appendChild(emptyState);
      let bestPlaylist = null;
      let bestScore = 0;
      const scanLimit = Math.max(50, trackUris.length * 3);
      for (const playlist of allPlaylists) {
        try {
          const tracks = await getPlaylistTracks(playlist.uri, void 0, scanLimit);
          const trackUrisSet = new Set(tracks.map((t) => t.uri));
          let score = 0;
          for (const uri of trackUris) {
            if (trackUrisSet.has(uri)) score++;
          }
          if (score > bestScore) {
            bestScore = score;
            bestPlaylist = playlist;
          }
        } catch (e) {
        }
      }
      if (bestPlaylist && bestScore > 0) {
        playlistSelect.value = bestPlaylist.uri;
        playlistSelect.dispatchEvent(new Event("change"));
      } else {
        emptyState.textContent = "Select a playlist first";
        trackList.appendChild(emptyState);
      }
    } catch (e) {
      Spicetify.showNotification("Failed to load playlists", true);
    }
  }
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
  loadPlaylists();
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vZXh0ZW5zaW9ucy9idWxrRGVsZXRlVHJhY2tzL3NyYy9zdHlsZXMuY3NzIiwgIi4uL2V4dGVuc2lvbnMvYnVsa0RlbGV0ZVRyYWNrcy9zcmMvbW9kYWwudHN4IiwgIi4uL2V4dGVuc2lvbnMvYnVsa0RlbGV0ZVRyYWNrcy9zcmMvYXBwLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXG4gICAgICAgICAgY29uc3Qgc2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICAgIHNoZWV0LnJlcGxhY2VTeW5jKGAuYnVsay1kZWxldGUtbW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLmJ1bGstZGVsZXRlLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMTgxODE4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA4MjBweDtcbiAgbWF4LWhlaWdodDogODV2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSwgc3BvdGlmeSksIHNhbnMtc2VyaWY7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uYnVsay1kZWxldGUtaGVhZGVyIHtcbiAgcGFkZGluZzogMTZweCAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI4MjgyODtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5idWxrLWRlbGV0ZS1oZWFkZXItcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLmJ1bGstZGVsZXRlLWNsb3NlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xufVxuXG4uYnVsay1kZWxldGUtY2xvc2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xufVxuXG4uYnVsay1kZWxldGUtY2xvc2Ugc3ZnIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgZmlsbDogI2IzYjNiMztcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjE1cztcbn1cblxuLmJ1bGstZGVsZXRlLWNsb3NlOmhvdmVyIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG59XG5cbi5idWxrLWRlbGV0ZS1naXRodWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xufVxuXG4uYnVsay1kZWxldGUtZ2l0aHViOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzI4MjgyODtcbn1cblxuLmJ1bGstZGVsZXRlLWdpdGh1YiBzdmcge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBmaWxsOiAjYjNiM2IzO1xuICB0cmFuc2l0aW9uOiBmaWxsIDAuMTVzO1xufVxuXG4uYnVsay1kZWxldGUtZ2l0aHViOmhvdmVyIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG59XG5cbi5idWxrLWRlbGV0ZS1wbGF5bGlzdC1zZWxlY3RvciB7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyODI4Mjg7XG59XG5cbi5idWxrLWRlbGV0ZS1wbGF5bGlzdC1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLmJ1bGstZGVsZXRlLXBsYXlsaXN0LXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYmFja2dyb3VuZDogIzNmM2YzZjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSclMjNiM2IzYjMnJTNFJTNDcGF0aCBkPSdNNyAxMGw1IDUgNS01eicvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTJweCBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbi5idWxrLWRlbGV0ZS1wbGF5bGlzdC1zZWxlY3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE0YTRhO1xufVxuXG4uYnVsay1kZWxldGUtcGxheWxpc3Qtc2VsZWN0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTtcbn1cblxuLmJ1bGstZGVsZXRlLXNlYXJjaCB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyODI4Mjg7XG59XG5cbi5idWxrLWRlbGV0ZS1zZWFyY2gtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMyODI4Mjg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMCAxMnB4O1xufVxuXG4uYnVsay1kZWxldGUtc2VhcmNoLWljb24ge1xuICBjb2xvcjogI2IzYjNiMztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJ1bGstZGVsZXRlLXNlYXJjaC1pY29uIHN2ZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5idWxrLWRlbGV0ZS1zZWFyY2ggaW5wdXQge1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJ1bGstZGVsZXRlLXNlYXJjaCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2IzYjNiMztcbn1cblxuLmJ1bGstZGVsZXRlLXNlYXJjaCBpbnB1dDpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmJ1bGstZGVsZXRlLXRyYWNrLWluZm8ge1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgYmFja2dyb3VuZDogIzEyMTIxMjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyODI4Mjg7XG59XG5cbi5idWxrLWRlbGV0ZS10cmFjay1pbmZvIHAge1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW46IDA7XG59XG5cbi5idWxrLWRlbGV0ZS10cmFjay1pbmZvIHNwYW4ge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLyogPT09PT09PT09PSBIZWFkZXIgQmFyIChzb3J0YWJsZSBjb2x1bW5zKSA9PT09PT09PT09ICovXG4uYnVsay1kZWxldGUtaGVhZGVyLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBiYWNrZ3JvdW5kOiAjMTIxMjEyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI4MjgyODtcbiAgZ2FwOiA4cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uYnVsay1kZWxldGUtaGNlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmJ1bGstZGVsZXRlLWhjZWxsLXNvcnRhYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cztcbiAgZ2FwOiA0cHg7XG59XG5cbi5idWxrLWRlbGV0ZS1oY2VsbC1zb3J0YWJsZTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vKiBTb3J0IGFycm93cyB2aWEgcHNldWRvLWVsZW1lbnRzICovXG4uYnVsay1kZWxldGUtaGNlbGwtc29ydC1hc2M6OmFmdGVyLFxuLmJ1bGstZGVsZXRlLWhjZWxsLXNvcnQtZGVzYzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmJ1bGstZGVsZXRlLWhjZWxsLXNvcnQtYXNjOjphZnRlciB7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMWRiOTU0O1xufVxuXG4uYnVsay1kZWxldGUtaGNlbGwtc29ydC1kZXNjOjphZnRlciB7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMWRiOTU0O1xufVxuXG4vKiBIZWFkZXIgY2VsbCB3aWR0aHMgLSBtdXN0IG1hdGNoIGl0ZW0gY29sdW1ucyAqL1xuLmJ1bGstZGVsZXRlLWhjZWxsLW51bSB7XG4gIHdpZHRoOiAzMnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5idWxrLWRlbGV0ZS1oY2VsbC1jaGVjayB7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5idWxrLWRlbGV0ZS1oY2VsbC1pbWcge1xuICB3aWR0aDogNDBweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5idWxrLWRlbGV0ZS1oY2VsbC1uYW1lIHtcbiAgZmxleDogMztcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4uYnVsay1kZWxldGUtaGNlbGwtYXJ0aXN0IHtcbiAgZmxleDogMjtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4uYnVsay1kZWxldGUtaGNlbGwtYWxidW0ge1xuICBmbGV4OiAyO1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5idWxrLWRlbGV0ZS1oY2VsbC1hZGRlZGJ5IHtcbiAgd2lkdGg6IDEzMHB4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmJ1bGstZGVsZXRlLWhjZWxsLWFkZGVkYXQge1xuICB3aWR0aDogOTBweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5idWxrLWRlbGV0ZS1oY2VsbC1wbGF5IHtcbiAgd2lkdGg6IDE4MHB4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLyogPT09PT09PT09PSBUcmFjayBMaXN0ID09PT09PT09PT0gKi9cbi5idWxrLWRlbGV0ZS1saXN0IHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMDtcbiAgbWluLWhlaWdodDogNDAwcHg7XG59XG5cbi5idWxrLWRlbGV0ZS12aXJ0dWFsLXdpbmRvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbn1cblxuLmJ1bGstZGVsZXRlLWVtcHR5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5idWxrLWRlbGV0ZS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNHB4IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cztcbiAgZ2FwOiA4cHg7XG4gIGhlaWdodDogNThweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmJ1bGstZGVsZXRlLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xufVxuXG4uYnVsay1kZWxldGUtaXRlbS5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjksIDE4NSwgODQsIDAuMSk7XG59XG5cbi5idWxrLWRlbGV0ZS10cmFjay1udW1iZXIge1xuICB3aWR0aDogMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idWxrLWRlbGV0ZS1wbGF5aW5nLWluZGljYXRvciB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJ1bGstZGVsZXRlLXBsYXlpbmctaW5kaWNhdG9yOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYmFja2dyb3VuZDogIzFkYjk1NDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IGJ1bGstZGVsZXRlLXB1bHNlIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJ1bGstZGVsZXRlLXB1bHNlIHtcbiAgMCUsIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG4gIDUwJSB7IG9wYWNpdHk6IDAuNTsgfVxufVxuXG4uYnVsay1kZWxldGUtdHJhY2staW1hZ2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogIzI4MjgyODtcbn1cblxuLmJ1bGstZGVsZXRlLXRyYWNrLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5idWxrLWRlbGV0ZS1pdGVtLXRpdGxlIHtcbiAgZmxleDogMztcbiAgbWluLXdpZHRoOiAwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cblxuLmJ1bGstZGVsZXRlLWl0ZW0tdGl0bGU6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmJ1bGstZGVsZXRlLWl0ZW0tYXJ0aXN0IHtcbiAgZmxleDogMjtcbiAgbWluLXdpZHRoOiAwO1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxMXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuXG4uYnVsay1kZWxldGUtaXRlbS1hbGJ1bSB7XG4gIGZsZXg6IDI7XG4gIG1pbi13aWR0aDogMDtcbiAgY29sb3I6ICM3MjcyNzI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cblxuLyogQWRkZWQgQnkgY29sdW1uICovXG4uYnVsay1kZWxldGUtaXRlbS1hZGRlZGJ5IHtcbiAgd2lkdGg6IDEzMHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIG1pbi13aWR0aDogMDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuXG4uYnVsay1kZWxldGUtYWRkZWRieS1hdmF0YXIge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYmFja2dyb3VuZDogIzMzMztcbn1cblxuLmJ1bGstZGVsZXRlLWFkZGVkYnktbmFtZSB7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBmb250LXNpemU6IDExcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vKiBBZGRlZCBBdCBjb2x1bW4gKi9cbi5idWxrLWRlbGV0ZS1pdGVtLWFkZGVkYXQge1xuICB3aWR0aDogOTBweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGNvbG9yOiAjNzI3MjcyO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbi8qID09PT09PT09PT0gUGxheWJhY2sgQ29udHJvbHMgPT09PT09PT09PSAqL1xuLmJ1bGstZGVsZXRlLXBsYXliYWNrLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHdpZHRoOiAxODBweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5idWxrLWRlbGV0ZS1wbGF5YmFjay1idXR0b24ge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmJ1bGstZGVsZXRlLXBsYXliYWNrLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyODI4Mjg7XG59XG5cbi5idWxrLWRlbGV0ZS1wbGF5YmFjay1idXR0b24gc3ZnIHtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbn1cblxuLmJ1bGstZGVsZXRlLXNsaWRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4uYnVsay1kZWxldGUtc2xpZGVyLXRpbWUge1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ1bGstZGVsZXRlLXNsaWRlciB7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogM3B4O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICM0YTRhNGE7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtaW4td2lkdGg6IDQwcHg7XG59XG5cbi5idWxrLWRlbGV0ZS1zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ1bGstZGVsZXRlLXNsaWRlcjpob3Zlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi8qID09PT09PT09PT0gQ2hlY2tib3ggPT09PT09PT09PSAqL1xuLmJ1bGstZGVsZXRlLWNoZWNrYm94LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5idWxrLWRlbGV0ZS1jaGVja2JveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnVsay1kZWxldGUtY2hlY2tib3gtY3VzdG9tIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2IzYjNiMztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xufVxuXG4uYnVsay1kZWxldGUtY2hlY2tib3g6Y2hlY2tlZCArIC5idWxrLWRlbGV0ZS1jaGVja2JveC1jdXN0b20ge1xuICBiYWNrZ3JvdW5kOiAjMWRiOTU0O1xuICBib3JkZXItY29sb3I6ICMxZGI5NTQ7XG59XG5cbi5idWxrLWRlbGV0ZS1jaGVja2JveDpjaGVja2VkICsgLmJ1bGstZGVsZXRlLWNoZWNrYm94LWN1c3RvbTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlcjogc29saWQgIzAwMDtcbiAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi8qID09PT09PT09PT0gQnV0dG9ucyA9PT09PT09PT09ICovXG4uYnVsay1kZWxldGUtYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzI4MjgyODtcbn1cblxuLmJ1bGstZGVsZXRlLXNlbGVjdC1hbGwge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzFkYjk1NDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xufVxuXG4uYnVsay1kZWxldGUtc2VsZWN0LWFsbDpob3ZlciB7XG4gIGNvbG9yOiAjMWVkNzYwO1xufVxuXG4uYnVsay1kZWxldGUtYnV0dG9uLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uYnVsay1kZWxldGUtYnRuIHtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uYnVsay1kZWxldGUtYnRuLmNhbmNlbCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzI3MjcyO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ1bGstZGVsZXRlLWJ0bi5jYW5jZWw6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNmZmY7XG59XG5cbi5idWxrLWRlbGV0ZS1idG4uZGVsZXRlIHtcbiAgYmFja2dyb3VuZDogI2U5MTQyOTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idWxrLWRlbGV0ZS1idG4uZGVsZXRlOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZDogI2YwMzcyNztcbn1cblxuLmJ1bGstZGVsZXRlLWJ0bi5kZWxldGU6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjNTM1MzUzO1xuICBjb2xvcjogIzE4MTgxODtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLyogPT09PT09PT09PSBDb25maXJtYXRpb24gTW9kYWwgPT09PT09PT09PSAqL1xuLmJ1bGstZGVsZXRlLWNvbmZpcm0tb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwMDtcbn1cblxuLmJ1bGstZGVsZXRlLWNvbmZpcm0tY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICMxODE4MTg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDQ4MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmJ1bGstZGVsZXRlLWNvbmZpcm0taGVhZGVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmJ1bGstZGVsZXRlLWNvbmZpcm0td2FybmluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogMTJweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzMsIDIwLCA0MSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS13YXJuaW5nIHN2ZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjZTkxNDI5O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmJ1bGstZGVsZXRlLWNvbmZpcm0td2FybmluZyBwIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS10cmFjay1saXN0IHtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogIzI4MjgyODtcbn1cblxuLmJ1bGstZGVsZXRlLWNvbmZpcm0tdHJhY2staXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcbn1cblxuLmJ1bGstZGVsZXRlLWNvbmZpcm0tdHJhY2staXRlbTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmJ1bGstZGVsZXRlLWNvbmZpcm0tdHJhY2staW1hZ2Uge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS10cmFjay1pbmZvIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJweDtcbn1cblxuLmJ1bGstZGVsZXRlLWNvbmZpcm0tdHJhY2stdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmJ1bGstZGVsZXRlLWNvbmZpcm0tdHJhY2stYXJ0aXN0LWFsYnVtIHtcbiAgY29sb3I6ICNhMGEwYTA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5gKTtcbiAgICAgICAgICBleHBvcnQgZGVmYXVsdCBzaGVldDtcbiAgICAgICAgIiwgImludGVyZmFjZSBQbGF5bGlzdCB7XG4gIG5hbWU6IHN0cmluZztcbiAgdXJpOiBzdHJpbmc7XG4gIGNhbkRlbGV0ZTogYm9vbGVhbjtcbiAgY2FuQWRkVG86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBUcmFjayB7XG4gIHVyaTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGFydGlzdDogc3RyaW5nO1xuICBhbGJ1bTogc3RyaW5nO1xuICBhbGJ1bVVyaTogc3RyaW5nO1xuICBpbWFnZVVybDogc3RyaW5nO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICB1aWQ6IHN0cmluZztcbiAgYWRkZWRCeTogc3RyaW5nO1xuICBhZGRlZEJ5SW1hZ2VVcmw6IHN0cmluZztcbiAgYWRkZWRBdDogc3RyaW5nO1xufVxuXG50eXBlIFNvcnRDb2x1bW4gPSBcIm5hbWVcIiB8IFwiYXJ0aXN0XCIgfCBcImFsYnVtXCIgfCBcImFkZGVkQnlcIiB8IFwiYWRkZWRBdFwiIHwgXCJcIjtcbnR5cGUgU29ydERpcmVjdGlvbiA9IFwiYXNjXCIgfCBcImRlc2NcIjtcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hBbGxMaWJyYXJ5Q29udGVudHMoKTogUHJvbWlzZTxvYmplY3RbXT4ge1xuICBjb25zdCBMaWJyYXJ5QVBJID0gKFNwaWNldGlmeSBhcyBhbnkpLlBsYXRmb3JtPy5MaWJyYXJ5QVBJO1xuICBpZiAoIUxpYnJhcnlBUEkpIHJldHVybiBbXTtcblxuICBjb25zdCBwYWdlU2l6ZSA9IDEwMDAwO1xuICBjb25zdCBpdGVtczogb2JqZWN0W10gPSBbXTtcbiAgbGV0IG9mZnNldCA9IDA7XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IExpYnJhcnlBUEkuZ2V0Q29udGVudHMoe1xuICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICBsaW1pdDogcGFnZVNpemUsXG4gICAgICBmbGF0dGVuVHJlZTogdHJ1ZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHBhZ2VJdGVtcyA9IHJlc3BvbnNlPy5pdGVtcyB8fCBbXTtcbiAgICBpdGVtcy5wdXNoKC4uLnBhZ2VJdGVtcyk7XG5cbiAgICBpZiAocGFnZUl0ZW1zLmxlbmd0aCA8IHBhZ2VTaXplKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBvZmZzZXQgKz0gcGFnZVNpemU7XG4gIH1cblxuICByZXR1cm4gaXRlbXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFBsYXlsaXN0c1dpdGhEZWxldGVQZXJtaXNzaW9uKCk6IFByb21pc2U8UGxheWxpc3RbXT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgZmV0Y2hBbGxMaWJyYXJ5Q29udGVudHMoKTtcblxuICAgIGNvbnN0IHBsYXlsaXN0czogUGxheWxpc3RbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICBjb25zdCBwbGF5bGlzdCA9IGl0ZW0gYXMgeyB0eXBlPzogc3RyaW5nOyBjYW5EZWxldGU/OiBib29sZWFuOyBjYW5BZGRUbz86IGJvb2xlYW47IG5hbWU/OiBzdHJpbmc7IHVyaT86IHN0cmluZyB9O1xuICAgICAgaWYgKHBsYXlsaXN0LnR5cGUgPT09IFwicGxheWxpc3RcIiAmJiAocGxheWxpc3QuY2FuRGVsZXRlIHx8IHBsYXlsaXN0LmNhbkFkZFRvKSkge1xuICAgICAgICBwbGF5bGlzdHMucHVzaCh7XG4gICAgICAgICAgbmFtZTogcGxheWxpc3QubmFtZSB8fCBcIlVua25vd25cIixcbiAgICAgICAgICB1cmk6IHBsYXlsaXN0LnVyaSB8fCBcIlwiLFxuICAgICAgICAgIGNhbkRlbGV0ZTogcGxheWxpc3QuY2FuRGVsZXRlIHx8IGZhbHNlLFxuICAgICAgICAgIGNhbkFkZFRvOiBwbGF5bGlzdC5jYW5BZGRUbyB8fCBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYXlsaXN0cztcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lKG1zOiBudW1iZXIgfCB1bmRlZmluZWQpOiBzdHJpbmcge1xuICBpZiAobXMgPT0gbnVsbCB8fCBpc05hTihtcykgfHwgbXMgPD0gMCkgcmV0dXJuIFwiMDowMFwiO1xuICBjb25zdCBzID0gTWF0aC5mbG9vcihtcyAvIDEwMDApO1xuICByZXR1cm4gYCR7TWF0aC5mbG9vcihzIC8gNjApfTokeyhzICUgNjApLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoaXNvU3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoIWlzb1N0cikgcmV0dXJuIFwiXCI7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGlzb1N0cik7XG4gICAgaWYgKGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkgcmV0dXJuIGlzb1N0cjtcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7XG4gICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgIG1vbnRoOiBcInNob3J0XCIsXG4gICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgIH0pO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gaXNvU3RyO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYXliYWNrQ29udHJvbCh1cmk6IHN0cmluZywgZHVyYXRpb246IG51bWJlcik6IEhUTUxFbGVtZW50IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtcGxheWJhY2stY29udHJvbHNcIjtcbiAgY29udGFpbmVyLmRhdGFzZXQudXJpID0gdXJpO1xuXG4gIGNvbnN0IHBsYXlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwbGF5QnRuLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtcGxheWJhY2stYnV0dG9uXCI7XG4gIHBsYXlCdG4uaW5uZXJIVE1MID0gYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNOCA1djE0bDExLTd6XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48L3N2Zz5gO1xuXG4gIHBsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGxheWVyID0gKFNwaWNldGlmeSBhcyBhbnkpLlBsYXllcjtcbiAgICAgIGlmICghcGxheWVyKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IGN1cnJlbnRVcmkgPSBwbGF5ZXI/LmRhdGE/Lml0ZW0/LnVyaTtcbiAgICAgIGlmIChjdXJyZW50VXJpID09PSB1cmkpIHtcbiAgICAgICAgaWYgKHBsYXllcj8uaXNQbGF5aW5nKCkpIHtcbiAgICAgICAgICBwbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwbGF5ZXIucGxheSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5ZXIucGxheVVyaSh1cmkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgKFNwaWNldGlmeSBhcyBhbnkpLlBsYXllcj8ucGxheVVyaSh1cmkpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgc2xpZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2xpZGVyQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtc2xpZGVyLWNvbnRhaW5lclwiO1xuXG4gIGNvbnN0IGN1cnJlbnRUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGN1cnJlbnRUaW1lLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtc2xpZGVyLXRpbWVcIjtcbiAgY3VycmVudFRpbWUudGV4dENvbnRlbnQgPSBcIjA6MDBcIjtcblxuICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHNsaWRlci50eXBlID0gXCJyYW5nZVwiO1xuICBzbGlkZXIuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1zbGlkZXJcIjtcbiAgc2xpZGVyLm1pbiA9IFwiMFwiO1xuICBzbGlkZXIubWF4ID0gZHVyYXRpb24gPiAwID8gZHVyYXRpb24udG9TdHJpbmcoKSA6IFwiMTAwMFwiO1xuICBzbGlkZXIudmFsdWUgPSBcIjBcIjtcbiAgc2xpZGVyLnN0ZXAgPSBcIjEwMDBcIjtcblxuICBjb25zdCB0b3RhbFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgdG90YWxUaW1lLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtc2xpZGVyLXRpbWVcIjtcbiAgdG90YWxUaW1lLnRleHRDb250ZW50ID0gZm9ybWF0VGltZShkdXJhdGlvbik7XG5cbiAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgY3VycmVudFRpbWUudGV4dENvbnRlbnQgPSBmb3JtYXRUaW1lKHBhcnNlSW50KHNsaWRlci52YWx1ZSkpO1xuICB9KTtcblxuICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIChTcGljZXRpZnkgYXMgYW55KS5QbGF5ZXI/LnNlZWsocGFyc2VJbnQoc2xpZGVyLnZhbHVlKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZWVrOlwiLCBlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHNsaWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50VGltZSk7XG4gIHNsaWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzbGlkZXIpO1xuICBzbGlkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodG90YWxUaW1lKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGxheUJ0bik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzbGlkZXJDb250YWluZXIpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRyYWNrSW1hZ2UodXJsOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gIGNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGltZ0NvbnRhaW5lci5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLXRyYWNrLWltYWdlLWNvbnRhaW5lclwiO1xuXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltZy5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLXRyYWNrLWltYWdlXCI7XG4gIGltZy5zcmMgPSB1cmwgfHwgXCJcIjtcbiAgaW1nLmxvYWRpbmcgPSBcImxhenlcIjtcblxuICBpbWcub25lcnJvciA9ICgpID0+IHtcbiAgICBpbWcuc3JjID0gXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyUzRSUzQ3BhdGggZmlsbD0nJTIzMjgyODI4JyBkPSdNMTIgM3YxMC41NWMtLjU5LS4zNC0xLjI3LS41NS0yLS41NS0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTRWN2g0VjNoLTZ6Jy8lM0UlM0Mvc3ZnJTNFXCI7XG4gIH07XG5cbiAgaW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG4gIHJldHVybiBpbWdDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYXlpbmdJbmRpY2F0b3IoKTogSFRNTEVsZW1lbnQge1xuICBjb25zdCBpbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmRpY2F0b3IuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1wbGF5aW5nLWluZGljYXRvclwiO1xuICByZXR1cm4gaW5kaWNhdG9yO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGxheWxpc3RUcmFja3MoXG4gIHBsYXlsaXN0VXJpOiBzdHJpbmcsXG4gIG9uUHJvZ3Jlc3M/OiAodHJhY2tzOiBUcmFja1tdLCB0b3RhbExvYWRlZDogbnVtYmVyKSA9PiB2b2lkLFxuICBjaGVja1VwVG8/OiBudW1iZXJcbik6IFByb21pc2U8VHJhY2tbXT4ge1xuICBsZXQgdHJhY2tzOiBUcmFja1tdID0gW107XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBQbGF5bGlzdEFQSSA9IChTcGljZXRpZnkgYXMgYW55KS5QbGF0Zm9ybT8uUGxheWxpc3RBUEk7XG5cbiAgICBpZiAoIVBsYXlsaXN0QVBJKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGF5bGlzdEFQSSBub3QgYXZhaWxhYmxlXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VTaXplID0gMjAwO1xuICAgIGxldCBvZmZzZXQgPSAwO1xuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgUGxheWxpc3RBUEkuZ2V0Q29udGVudHMocGxheWxpc3RVcmksIHtcbiAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgIGxpbWl0OiBwYWdlU2l6ZSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlPy5pdGVtcz8ubGVuZ3RoKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcmVzcG9uc2UuaXRlbXMpIHtcbiAgICAgICAgaWYgKCFpdGVtPy51cmkpIGNvbnRpbnVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxldCBuYW1lID0gXCJVbmtub3duIFRyYWNrXCI7XG4gICAgICAgICAgbGV0IGFydGlzdCA9IFwiVW5rbm93biBBcnRpc3RcIjtcbiAgICAgICAgICBsZXQgYWxidW0gPSBcIlVua25vd24gQWxidW1cIjtcbiAgICAgICAgICBsZXQgaW1hZ2VVcmwgPSBcIlwiO1xuICAgICAgICAgIGxldCBkdXJhdGlvbiA9IDA7XG4gICAgICAgICAgbGV0IHVpZCA9IGl0ZW0udWlkIHx8IFwiXCI7XG4gICAgICAgICAgbGV0IGFkZGVkQnkgPSBcIlwiO1xuICAgICAgICAgIGxldCBhZGRlZEF0ID0gXCJcIjtcblxuICAgICAgICAgIGlmIChpdGVtLm5hbWUpIG5hbWUgPSBpdGVtLm5hbWU7XG4gICAgICAgICAgaWYgKGl0ZW0uYXJ0aXN0cz8uWzBdPy5uYW1lKSBhcnRpc3QgPSBpdGVtLmFydGlzdHNbMF0ubmFtZTtcbiAgICAgICAgICBpZiAoaXRlbS5hbGJ1bT8ubmFtZSkgYWxidW0gPSBpdGVtLmFsYnVtLm5hbWU7XG4gICAgICAgICAgY29uc3QgYWxidW1VcmkgPSBpdGVtLmFsYnVtPy51cmkgfHwgXCJcIjtcbiAgICAgICAgICBpZiAoaXRlbS5hbGJ1bT8uaW1hZ2VzPy5bMF0/LnVybCkgaW1hZ2VVcmwgPSBpdGVtLmFsYnVtLmltYWdlc1swXS51cmw7XG4gICAgICAgICAgZWxzZSBpZiAoaXRlbS5hbGJ1bT8uY292ZXJBcnQ/LnNvdXJjZXM/LlswXT8udXJsKSBpbWFnZVVybCA9IGl0ZW0uYWxidW0uY292ZXJBcnQuc291cmNlc1swXS51cmw7XG5cbiAgICAgICAgICBjb25zdCBpdGVtQW55ID0gaXRlbSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgICAgICAgICBsZXQgZHVyYXRpb25WYWw6IG51bWJlciA9IDA7XG4gICAgICAgICAgaWYgKGl0ZW1BbnkuZHVyYXRpb24gJiYgdHlwZW9mIGl0ZW1BbnkuZHVyYXRpb24gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGR1ciA9IGl0ZW1BbnkuZHVyYXRpb24gYXMgeyB0b3RhbE1zPzogbnVtYmVyOyBtaWxsaXNlY29uZHM/OiBudW1iZXIgfTtcbiAgICAgICAgICAgIGlmIChkdXIudG90YWxNcykgZHVyYXRpb25WYWwgPSBkdXIudG90YWxNcztcbiAgICAgICAgICAgIGVsc2UgaWYgKGR1ci5taWxsaXNlY29uZHMpIGR1cmF0aW9uVmFsID0gZHVyLm1pbGxpc2Vjb25kcztcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtQW55LmR1cmF0aW9uID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBkdXJhdGlvblZhbCA9IGl0ZW1BbnkuZHVyYXRpb247XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbUFueS5kdXJhdGlvbk1zID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBkdXJhdGlvblZhbCA9IGl0ZW1BbnkuZHVyYXRpb25NcztcbiAgICAgICAgICB9XG4gICAgICAgICAgZHVyYXRpb24gPSBkdXJhdGlvblZhbDtcblxuICAgICAgICAgIC8vIEV4dHJhY3QgYWRkZWRCeSAod2hvIGFkZGVkIHRoZSB0cmFjaylcbiAgICAgICAgICBsZXQgYWRkZWRCeUltYWdlVXJsID0gXCJcIjtcbiAgICAgICAgICBjb25zdCBhZGRlZEJ5RmllbGQgPSBpdGVtQW55LmFkZGVkQnkgfHwgaXRlbUFueS5hZGRlZF9ieTtcbiAgICAgICAgICBpZiAoYWRkZWRCeUZpZWxkKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFkZGVkQnlGaWVsZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICBhZGRlZEJ5ID0gYWRkZWRCeUZpZWxkO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYWRkZWRCeUZpZWxkID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGFiID0gYWRkZWRCeUZpZWxkIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICAgICAgICAgICAgICBhZGRlZEJ5ID0gKGFiLm5hbWUgfHwgYWIuZGlzcGxheU5hbWUgfHwgYWIuZGlzcGxheV9uYW1lIHx8IGFiLmlkIHx8IFwiXCIpIGFzIHN0cmluZztcbiAgICAgICAgICAgICAgYWRkZWRCeUltYWdlVXJsID0gKGFiLmltYWdlVXJsIHx8IGFiLmF2YXRhciB8fCAoYWIuaW1hZ2UgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pPy51cmwgfHwgYWIucGljdHVyZSB8fCBcIlwiKSBhcyBzdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRXh0cmFjdCBhZGRlZEF0ICh3aGVuIHRoZSB0cmFjayB3YXMgYWRkZWQpXG4gICAgICAgICAgY29uc3QgYWRkZWRBdEZpZWxkID0gaXRlbUFueS5hZGRlZEF0IHx8IGl0ZW1BbnkuYWRkZWRfYXQ7XG4gICAgICAgICAgaWYgKGFkZGVkQXRGaWVsZCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhZGRlZEF0RmllbGQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgYWRkZWRBdCA9IGFkZGVkQXRGaWVsZDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGFkZGVkQXRGaWVsZCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICBjb25zdCBhYSA9IGFkZGVkQXRGaWVsZCBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgICAgICAgICAgICAgYWRkZWRBdCA9IChhYS5pc29TdHJpbmcgfHwgYWEuaXNvX3N0ciB8fCBcIlwiKSBhcyBzdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdHJhY2tzLnB1c2goe1xuICAgICAgICAgICAgdXJpOiBpdGVtLnVyaSxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBhcnRpc3QsXG4gICAgICAgICAgICBhbGJ1bSxcbiAgICAgICAgICAgIGFsYnVtVXJpLFxuICAgICAgICAgICAgaW1hZ2VVcmwsXG4gICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgIHVpZCxcbiAgICAgICAgICAgIGFkZGVkQnksXG4gICAgICAgICAgICBhZGRlZEJ5SW1hZ2VVcmwsXG4gICAgICAgICAgICBhZGRlZEF0LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiU2tpcHBpbmcgYmFkIHRyYWNrIGl0ZW06XCIsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9uUHJvZ3Jlc3M/Lih0cmFja3MsIHRyYWNrcy5sZW5ndGgpO1xuXG4gICAgICBpZiAoY2hlY2tVcFRvICYmIHRyYWNrcy5sZW5ndGggPj0gY2hlY2tVcFRvKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzcG9uc2UuaXRlbXMubGVuZ3RoIDwgcGFnZVNpemUpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIG9mZnNldCArPSBwYWdlU2l6ZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcGxheWxpc3QgdHJhY2tzOlwiLCBlKTtcbiAgICB0aHJvdyBlO1xuICB9XG5cbiAgcmV0dXJuIHRyYWNrcztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRyYWNrc0Zyb21QbGF5bGlzdChcbiAgcGxheWxpc3RVcmk6IHN0cmluZyxcbiAgdHJhY2tzOiB7IHVyaTogc3RyaW5nOyB1aWQ6IHN0cmluZyB9W11cbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICBjb25zdCBQbGF5bGlzdEFQSSA9IChTcGljZXRpZnkgYXMgYW55KS5QbGF0Zm9ybT8uUGxheWxpc3RBUEk7XG5cbiAgaWYgKCFQbGF5bGlzdEFQSSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgdHJhY2tMaXN0ID0gdHJhY2tzLm1hcCh0ID0+ICh7XG4gICAgICB1cmk6IHQudXJpLFxuICAgICAgdWlkOiB0LnVpZFxuICAgIH0pKTtcbiAgICBhd2FpdCBQbGF5bGlzdEFQSS5yZW1vdmUocGxheWxpc3RVcmksIHRyYWNrTGlzdCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgUGxheWxpc3RBUEkucmVtb3ZlKHBsYXlsaXN0VXJpLCB0cmFja3MubWFwKHQgPT4gdC51cmkpKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRGVsZXRlIGZhaWxlZDpcIiwgZTIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVEZWxldGVDb25maXJtTW9kYWwoXG4gIHRyYWNrczogVHJhY2tbXSxcbiAgcGxheWxpc3ROYW1lOiBzdHJpbmcsXG4gIG9uQ29uZmlybTogKCkgPT4gdm9pZCxcbiAgb25DYW5jZWw6ICgpID0+IHZvaWRcbikge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb3ZlcmxheS5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWNvbmZpcm0tb3ZlcmxheVwiO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY29uZmlybS1jb250ZW50XCI7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY29uZmlybS1oZWFkZXJcIjtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJEZWxldGUgVHJhY2tzXCI7XG5cbiAgY29uc3Qgd2FybmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdhcm5pbmcuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1jb25maXJtLXdhcm5pbmdcIjtcblxuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIik7XG4gIGNvbnN0IHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInBhdGhcIik7XG4gIHBhdGguc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcImN1cnJlbnRDb2xvclwiKTtcbiAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTEgMTVoLTJ2LTJoMnYyem0wLTRoLTJWN2gydjZ6XCIpO1xuICBzdmcuYXBwZW5kQ2hpbGQocGF0aCk7XG5cbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiVGhpcyB3aWxsIHBlcm1hbmVudGx5IHJlbW92ZSBcIikpO1xuICBjb25zdCBzdHJvbmcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiKTtcbiAgc3Ryb25nMS50ZXh0Q29udGVudCA9IHRyYWNrcy5sZW5ndGgudG9TdHJpbmcoKTtcbiAgcC5hcHBlbmRDaGlsZChzdHJvbmcxKTtcbiAgcC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIiB0cmFjayhzKSBmcm9tIFwiKSk7XG4gIGNvbnN0IHN0cm9uZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIpO1xuICBzdHJvbmcyLnRleHRDb250ZW50ID0gcGxheWxpc3ROYW1lO1xuICBwLmFwcGVuZENoaWxkKHN0cm9uZzIpO1xuICBwLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiLiBUaGlzIGFjdGlvbiBjYW5ub3QgYmUgdW5kb25lLlwiKSk7XG5cbiAgd2FybmluZy5hcHBlbmRDaGlsZChzdmcpO1xuICB3YXJuaW5nLmFwcGVuZENoaWxkKHApO1xuXG4gIGNvbnN0IHRyYWNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRyYWNrTGlzdC5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWNvbmZpcm0tdHJhY2stbGlzdFwiO1xuXG4gIGZvciAoY29uc3QgdHJhY2sgb2YgdHJhY2tzKSB7XG4gICAgY29uc3QgdHJhY2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0cmFja0l0ZW0uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1jb25maXJtLXRyYWNrLWl0ZW1cIjtcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY29uZmlybS10cmFjay1pbWFnZVwiO1xuICAgIGltZy5zcmMgPSB0cmFjay5pbWFnZVVybCB8fCBcImh0dHBzOi8vd3d3LnNjZG4uY28vaS9fZ2xvYmFsL2Zhdmljb24ucG5nXCI7XG4gICAgaW1nLmFsdCA9IFwiXCI7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbmZvLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY29uZmlybS10cmFjay1pbmZvXCI7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRpdGxlLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY29uZmlybS10cmFjay10aXRsZVwiO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdHJhY2submFtZTtcblxuICAgIGNvbnN0IGFydGlzdEFsYnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgYXJ0aXN0QWxidW0uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1jb25maXJtLXRyYWNrLWFydGlzdC1hbGJ1bVwiO1xuICAgIGFydGlzdEFsYnVtLnRleHRDb250ZW50ID0gYCR7dHJhY2suYXJ0aXN0fSBcdTIwMTQgJHt0cmFjay5hbGJ1bX1gO1xuXG4gICAgaW5mby5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgaW5mby5hcHBlbmRDaGlsZChhcnRpc3RBbGJ1bSk7XG4gICAgdHJhY2tJdGVtLmFwcGVuZENoaWxkKGltZyk7XG4gICAgdHJhY2tJdGVtLmFwcGVuZENoaWxkKGluZm8pO1xuICAgIHRyYWNrTGlzdC5hcHBlbmRDaGlsZCh0cmFja0l0ZW0pO1xuICB9XG5cbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbnMuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1jb25maXJtLWJ1dHRvbnNcIjtcblxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdG4uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1idG4gY2FuY2VsXCI7XG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgb25DYW5jZWwoKTtcbiAgfSk7XG5cbiAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbmZpcm1CdG4uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1idG4gZGVsZXRlXCI7XG4gIGNvbmZpcm1CdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICBvbkNvbmZpcm0oKTtcbiAgfSk7XG5cbiAgYnV0dG9ucy5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICBidXR0b25zLmFwcGVuZENoaWxkKGNvbmZpcm1CdG4pO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh3YXJuaW5nKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0cmFja0xpc3QpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuXG4gIG92ZXJsYXkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cbiAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IG92ZXJsYXkpIHtcbiAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICBvbkNhbmNlbCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb2RhbCh0cmFja1VyaXM6IHN0cmluZ1tdLCBwcmVmZXJyZWRQbGF5bGlzdFVyaT86IHN0cmluZyB8IG51bGwpIHtcbiAgbGV0IGFsbFBsYXlsaXN0czogUGxheWxpc3RbXSA9IFtdO1xuICBsZXQgY3VycmVudFRyYWNrczogVHJhY2tbXSA9IFtdO1xuICBsZXQgZmlsdGVyZWRUcmFja3M6IFRyYWNrW10gPSBbXTtcbiAgY29uc3Qgc2VsZWN0ZWRTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgbGV0IGN1cnJlbnRQbGF5bGlzdFVyaTogc3RyaW5nIHwgbnVsbCA9IHByZWZlcnJlZFBsYXlsaXN0VXJpIHx8IG51bGw7XG4gIGxldCB1cGRhdGVJbnRlcnZhbDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgbGV0IHNvcnRDb2x1bW46IFNvcnRDb2x1bW4gPSBcIlwiO1xuICBsZXQgc29ydERpcmVjdGlvbjogU29ydERpcmVjdGlvbiA9IFwiYXNjXCI7XG4gIGxldCBwZW5kaW5nUmVxdWVzdCA9IDA7XG5cbiAgY29uc3QgZ2V0U2VsZWN0aW9uS2V5ID0gKHRyYWNrOiBUcmFjaykgPT4gdHJhY2sudWlkIHx8IHRyYWNrLnVyaTtcblxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCByZW5kZXJlZFRyYWNrc1JlZjogVHJhY2tbXSA9IFtdO1xuICBsZXQgc2Nyb2xsTGlzdGVuZXJBZGRlZCA9IGZhbHNlO1xuICBtb2RhbC5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLW1vZGFsXCI7XG5cbiAgY29uc3QgY2xlYW51cEFuZENsb3NlID0gKCkgPT4ge1xuICAgIGlmICh1cGRhdGVJbnRlcnZhbCkge1xuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodXBkYXRlSW50ZXJ2YWwpO1xuICAgICAgdXBkYXRlSW50ZXJ2YWwgPSBudWxsO1xuICAgIH1cbiAgICBtb2RhbC5yZW1vdmUoKTtcbiAgfTtcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWNvbnRlbnRcIjtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1oZWFkZXJcIjtcblxuICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiQnVsayBEZWxldGUgZnJvbSBQbGF5bGlzdFwiO1xuXG4gIGNvbnN0IGhlYWRlclJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyUmlnaHQuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1oZWFkZXItcmlnaHRcIjtcblxuICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGdpdGh1YkxpbmsuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1naXRodWJcIjtcbiAgZ2l0aHViTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vSmltTWFybGV5NDIwL3NwaWNldGlmeS1leHRlbnNpb25cIjtcbiAgZ2l0aHViTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuICBnaXRodWJMaW5rLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJPcGVuIEdpdEh1YiByZXBvc2l0b3J5XCIpO1xuICBnaXRodWJMaW5rLmlubmVySFRNTCA9IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTEyIDBjLTYuNjI2IDAtMTIgNS4zNzMtMTIgMTIgMCA1LjMwMiAzLjQzOCA5LjggOC4yMDcgMTEuMzg3LjU5OS4xMTEuNzkzLS4yNjEuNzkzLS41Nzd2LTIuMjM0Yy0zLjMzOC43MjYtNC4wMzMtMS40MTYtNC4wMzMtMS40MTYtLjU0Ni0xLjM4Ny0xLjMzMy0xLjc1Ni0xLjMzMy0xLjc1Ni0xLjA4OS0uNzQ1LjA4My0uNzI5LjA4My0uNzI5IDEuMjA1LjA4NCAxLjgzOSAxLjIzNyAxLjgzOSAxLjIzNyAxLjA3IDEuODM0IDIuODA3IDEuMzA0IDMuNDkyLjk5Ny4xMDctLjc3NS40MTgtMS4zMDUuNzYyLTEuNjA0LTIuNjY1LS4zMDUtNS40NjctMS4zMzQtNS40NjctNS45MzEgMC0xLjMxMS40NjktMi4zODEgMS4yMzYtMy4yMjEtLjEyNC0uMzAzLS41MzUtMS41MjQuMTE3LTMuMTc2IDAgMCAxLjAwOC0uMzIyIDMuMzAxIDEuMjMuOTU3LS4yNjYgMS45ODMtLjM5OSAzLjAwMy0uNDA0IDEuMDIuMDA1IDIuMDQ3LjEzOCAzLjAwNi40MDQgMi4yOTEtMS41NTIgMy4yOTctMS4yMyAzLjI5Ny0xLjIzLjY1MyAxLjY1My4yNDIgMi44NzQuMTE4IDMuMTc2Ljc3Ljg0IDEuMjM1IDEuOTExIDEuMjM1IDMuMjIxIDAgNC42MDktMi44MDcgNS42MjQtNS40NzkgNS45MjEuNDMuMzcyLjgyMyAxLjEwMi44MjMgMi4yMjJ2My4yOTNjMCAuMzE5LjE5Mi42OTQuODAxLjU3NiA0Ljc2NS0xLjU4OSA4LjE5OS02LjA4NiA4LjE5OS0xMS4zODYgMC02LjYyNy01LjM3My0xMi0xMi0xMnpcIi8+PC9zdmc+YDtcblxuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNsb3NlQnRuLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY2xvc2VcIjtcbiAgY2xvc2VCdG4uaW5uZXJIVE1MID0gYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyelwiLz48L3N2Zz5gO1xuXG4gIGhlYWRlclJpZ2h0LmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuICBoZWFkZXJSaWdodC5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclJpZ2h0KTtcblxuICBjb25zdCBwbGF5bGlzdFNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxheWxpc3RTZWxlY3Rvci5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLXBsYXlsaXN0LXNlbGVjdG9yXCI7XG5cbiAgY29uc3QgcGxheWxpc3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgcGxheWxpc3RMYWJlbC5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLXBsYXlsaXN0LWxhYmVsXCI7XG4gIHBsYXlsaXN0TGFiZWwudGV4dENvbnRlbnQgPSBcIlNlbGVjdCBQbGF5bGlzdFwiO1xuXG4gIGNvbnN0IHBsYXlsaXN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgcGxheWxpc3RTZWxlY3QuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1wbGF5bGlzdC1zZWxlY3RcIjtcblxuICBjb25zdCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHBsYWNlaG9sZGVyLnZhbHVlID0gXCJcIjtcbiAgcGxhY2Vob2xkZXIudGV4dENvbnRlbnQgPSBcIlNlbGVjdCBhIHBsYXlsaXN0XCI7XG4gIHBsYWNlaG9sZGVyLmRpc2FibGVkID0gdHJ1ZTtcbiAgcGxheWxpc3RTZWxlY3QuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXIpO1xuXG4gIHBsYXlsaXN0U2VsZWN0b3IuYXBwZW5kQ2hpbGQocGxheWxpc3RMYWJlbCk7XG4gIHBsYXlsaXN0U2VsZWN0b3IuYXBwZW5kQ2hpbGQocGxheWxpc3RTZWxlY3QpO1xuXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlYXJjaENvbnRhaW5lci5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLXNlYXJjaFwiO1xuXG4gIGNvbnN0IHNlYXJjaFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWFyY2hXcmFwcGVyLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtc2VhcmNoLXdyYXBwZXJcIjtcblxuICBjb25zdCBzZWFyY2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2VhcmNoSWNvbi5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLXNlYXJjaC1pY29uXCI7XG4gIHNlYXJjaEljb24uaW5uZXJIVE1MID0gYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QTYuNDcxIDYuNDcxIDAgMDAxNiA5LjUgNi41IDYuNSAwIDEwOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHpcIi8+PC9zdmc+YDtcblxuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgc2VhcmNoSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9IFwiU2VhcmNoIHRyYWNrcyBpbiBwbGF5bGlzdC4uLlwiO1xuICBzZWFyY2hJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG5cbiAgc2VhcmNoV3JhcHBlci5hcHBlbmRDaGlsZChzZWFyY2hJY29uKTtcbiAgc2VhcmNoV3JhcHBlci5hcHBlbmRDaGlsZChzZWFyY2hJbnB1dCk7XG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hXcmFwcGVyKTtcblxuICBjb25zdCB0cmFja0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0cmFja0luZm8uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS10cmFjay1pbmZvXCI7XG4gIHRyYWNrSW5mby5pbm5lckhUTUwgPSBgPHA+PHNwYW4+MDwvc3Bhbj4gdHJhY2socykgc2VsZWN0ZWQgZnJvbSBwbGF5bGlzdDwvcD5gO1xuXG4gIC8vIC0tLSBTb3J0YWJsZSBoZWFkZXIgYmFyIC0tLVxuICBjb25zdCBoZWFkZXJCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJCYXIuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1oZWFkZXItYmFyXCI7XG5cbiAgY29uc3Qgc29ydGFibGVDb2x1bW5zOiB7IGtleTogU29ydENvbHVtbjsgbGFiZWw6IHN0cmluZzsgY2xhc3NOYW1lOiBzdHJpbmcgfVtdID0gW1xuICAgIHsga2V5OiBcIlwiIGFzIFNvcnRDb2x1bW4sIGxhYmVsOiBcIiNcIiwgY2xhc3NOYW1lOiBcImJ1bGstZGVsZXRlLWhjZWxsLW51bVwiIH0sXG4gICAgeyBrZXk6IFwiXCIgYXMgU29ydENvbHVtbiwgbGFiZWw6IFwiXCIsIGNsYXNzTmFtZTogXCJidWxrLWRlbGV0ZS1oY2VsbC1jaGVja1wiIH0sXG4gICAgeyBrZXk6IFwiXCIgYXMgU29ydENvbHVtbiwgbGFiZWw6IFwiXCIsIGNsYXNzTmFtZTogXCJidWxrLWRlbGV0ZS1oY2VsbC1pbWdcIiB9LFxuICAgIHsga2V5OiBcIm5hbWVcIiwgbGFiZWw6IFwiVGl0bGVcIiwgY2xhc3NOYW1lOiBcImJ1bGstZGVsZXRlLWhjZWxsLW5hbWVcIiB9LFxuICAgIHsga2V5OiBcImFydGlzdFwiLCBsYWJlbDogXCJBcnRpc3RcIiwgY2xhc3NOYW1lOiBcImJ1bGstZGVsZXRlLWhjZWxsLWFydGlzdFwiIH0sXG4gICAgeyBrZXk6IFwiYWxidW1cIiwgbGFiZWw6IFwiQWxidW1cIiwgY2xhc3NOYW1lOiBcImJ1bGstZGVsZXRlLWhjZWxsLWFsYnVtXCIgfSxcbiAgICB7IGtleTogXCJhZGRlZEJ5XCIsIGxhYmVsOiBcIkFkZGVkIEJ5XCIsIGNsYXNzTmFtZTogXCJidWxrLWRlbGV0ZS1oY2VsbC1hZGRlZGJ5XCIgfSxcbiAgICB7IGtleTogXCJhZGRlZEF0XCIsIGxhYmVsOiBcIkFkZGVkIEF0XCIsIGNsYXNzTmFtZTogXCJidWxrLWRlbGV0ZS1oY2VsbC1hZGRlZGF0XCIgfSxcbiAgICB7IGtleTogXCJcIiBhcyBTb3J0Q29sdW1uLCBsYWJlbDogXCJcIiwgY2xhc3NOYW1lOiBcImJ1bGstZGVsZXRlLWhjZWxsLXBsYXlcIiB9LFxuICBdO1xuXG4gIGNvbnN0IGhlYWRlckNlbGxzOiBNYXA8c3RyaW5nLCBIVE1MRWxlbWVudD4gPSBuZXcgTWFwKCk7XG5cbiAgZm9yIChjb25zdCBjb2wgb2Ygc29ydGFibGVDb2x1bW5zKSB7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2VsbC5jbGFzc05hbWUgPSBgYnVsay1kZWxldGUtaGNlbGwgJHtjb2wuY2xhc3NOYW1lfWA7XG4gICAgaWYgKGNvbC5rZXkpIHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImJ1bGstZGVsZXRlLWhjZWxsLXNvcnRhYmxlXCIpO1xuICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGNvbC5sYWJlbDtcbiAgICAgIGNlbGwuZGF0YXNldC5zb3J0S2V5ID0gY29sLmtleTtcbiAgICAgIGhlYWRlckNlbGxzLnNldChjb2wua2V5LCBjZWxsKTtcblxuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoc29ydENvbHVtbiA9PT0gY29sLmtleSkge1xuICAgICAgICAgIC8vIFRvZ2dsZSBkaXJlY3Rpb25cbiAgICAgICAgICBzb3J0RGlyZWN0aW9uID0gc29ydERpcmVjdGlvbiA9PT0gXCJhc2NcIiA/IFwiZGVzY1wiIDogXCJhc2NcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzb3J0Q29sdW1uID0gY29sLmtleTtcbiAgICAgICAgICBzb3J0RGlyZWN0aW9uID0gXCJhc2NcIjtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVTb3J0SW5kaWNhdG9ycygpO1xuICAgICAgICBhcHBseVNvcnRBbmRSZW5kZXIoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjZWxsLnRleHRDb250ZW50ID0gY29sLmxhYmVsO1xuICAgIH1cbiAgICBoZWFkZXJCYXIuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVTb3J0SW5kaWNhdG9ycygpIHtcbiAgICBoZWFkZXJDZWxscy5mb3JFYWNoKChjZWxsLCBrZXkpID0+IHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImJ1bGstZGVsZXRlLWhjZWxsLXNvcnQtYXNjXCIsIFwiYnVsay1kZWxldGUtaGNlbGwtc29ydC1kZXNjXCIpO1xuICAgICAgaWYgKGtleSA9PT0gc29ydENvbHVtbikge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoc29ydERpcmVjdGlvbiA9PT0gXCJhc2NcIiA/IFwiYnVsay1kZWxldGUtaGNlbGwtc29ydC1hc2NcIiA6IFwiYnVsay1kZWxldGUtaGNlbGwtc29ydC1kZXNjXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcGFyZVRyYWNrcyhhOiBUcmFjaywgYjogVHJhY2ssIGNvbDogU29ydENvbHVtbiwgZGlyOiBTb3J0RGlyZWN0aW9uKTogbnVtYmVyIHtcbiAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICBzd2l0Y2ggKGNvbCkge1xuICAgICAgY2FzZSBcIm5hbWVcIjpcbiAgICAgICAgcmVzdWx0ID0gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiYXJ0aXN0XCI6XG4gICAgICAgIHJlc3VsdCA9IGEuYXJ0aXN0LmxvY2FsZUNvbXBhcmUoYi5hcnRpc3QpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJhbGJ1bVwiOlxuICAgICAgICByZXN1bHQgPSBhLmFsYnVtLmxvY2FsZUNvbXBhcmUoYi5hbGJ1bSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImFkZGVkQnlcIjpcbiAgICAgICAgcmVzdWx0ID0gYS5hZGRlZEJ5LmxvY2FsZUNvbXBhcmUoYi5hZGRlZEJ5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiYWRkZWRBdFwiOlxuICAgICAgICBpZiAoIWEuYWRkZWRBdCAmJiAhYi5hZGRlZEF0KSByZXN1bHQgPSAwO1xuICAgICAgICBlbHNlIGlmICghYS5hZGRlZEF0KSByZXN1bHQgPSAxO1xuICAgICAgICBlbHNlIGlmICghYi5hZGRlZEF0KSByZXN1bHQgPSAtMTtcbiAgICAgICAgZWxzZSBpZiAoYS5hZGRlZEF0IDwgYi5hZGRlZEF0KSByZXN1bHQgPSAtMTtcbiAgICAgICAgZWxzZSBpZiAoYS5hZGRlZEF0ID4gYi5hZGRlZEF0KSByZXN1bHQgPSAxO1xuICAgICAgICBlbHNlIHJlc3VsdCA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gZGlyID09PSBcImFzY1wiID8gcmVzdWx0IDogLXJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5U29ydEFuZFJlbmRlcigpIHtcbiAgICBpZiAoc29ydENvbHVtbikge1xuICAgICAgZmlsdGVyZWRUcmFja3MgPSBbLi4uZmlsdGVyZWRUcmFja3NdLnNvcnQoKGEsIGIpID0+IGNvbXBhcmVUcmFja3MoYSwgYiwgc29ydENvbHVtbiwgc29ydERpcmVjdGlvbikpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZXN0b3JlIG9yaWdpbmFsIG9yZGVyIChhcyBsb2FkZWQgZnJvbSBBUEkpXG4gICAgICBmaWx0ZXJlZFRyYWNrcyA9IFsuLi5jdXJyZW50VHJhY2tzXS5maWx0ZXIodCA9PlxuICAgICAgICB0Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hJbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICB0LmFydGlzdC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaElucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAgIHQuYWxidW0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hJbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmVuZGVyVHJhY2tzKGZpbHRlcmVkVHJhY2tzKTtcbiAgICB1cGRhdGVCdXR0b25TdGF0ZSgpO1xuICB9XG5cbiAgY29uc3QgdHJhY2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdHJhY2tMaXN0LmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtbGlzdFwiO1xuXG4gIGNvbnN0IGVtcHR5U3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbXB0eVN0YXRlLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtZW1wdHlcIjtcbiAgZW1wdHlTdGF0ZS50ZXh0Q29udGVudCA9IFwiU2VsZWN0IGEgcGxheWxpc3QgZmlyc3RcIjtcbiAgdHJhY2tMaXN0LmFwcGVuZENoaWxkKGVtcHR5U3RhdGUpO1xuXG4gIGNvbnN0IElURU1fSEVJR0hUID0gNTg7XG4gIGNvbnN0IEJVRkZFUiA9IDg7XG5cbiAgZnVuY3Rpb24gcmVuZGVyVHJhY2tzKHRyYWNrczogVHJhY2tbXSkge1xuICAgIGNvbnN0IHNob3VsZFJlc2V0U2Nyb2xsID0gcmVuZGVyZWRUcmFja3NSZWYgIT09IHRyYWNrcztcbiAgICByZW5kZXJlZFRyYWNrc1JlZiA9IHRyYWNrcztcblxuICAgIGlmICh0cmFja3MubGVuZ3RoID09PSAwKSB7XG4gICAgICB0cmFja0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGNvbnN0IGVtcHR5TXNnID0gc2VhcmNoSW5wdXQudmFsdWUgPyBcIk5vIHRyYWNrcyBmb3VuZFwiIDogXCJQbGF5bGlzdCBpcyBlbXB0eVwiO1xuICAgICAgY29uc3QgZW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZW1wdHkuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1lbXB0eVwiO1xuICAgICAgZW1wdHkudGV4dENvbnRlbnQgPSBlbXB0eU1zZztcbiAgICAgIHRyYWNrTGlzdC5hcHBlbmRDaGlsZChlbXB0eSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZW1wdHlTdGF0ZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdHJhY2tMaXN0LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuXG4gICAgaWYgKCFzY3JvbGxMaXN0ZW5lckFkZGVkKSB7XG4gICAgICBzY3JvbGxMaXN0ZW5lckFkZGVkID0gdHJ1ZTtcbiAgICAgIHRyYWNrTGlzdC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICAgICAgcmVuZGVyVHJhY2tzKHJlbmRlcmVkVHJhY2tzUmVmKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCBzcGFjZXIgPSB0cmFja0xpc3QucXVlcnlTZWxlY3RvcihcIi5idWxrLWRlbGV0ZS12aXJ0dWFsLXNwYWNlclwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoIXNwYWNlcikge1xuICAgICAgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNwYWNlci5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLXZpcnR1YWwtc3BhY2VyXCI7XG4gICAgICB0cmFja0xpc3QuYXBwZW5kQ2hpbGQoc3BhY2VyKTtcbiAgICB9XG5cbiAgICBsZXQgd2luZG93RWwgPSB0cmFja0xpc3QucXVlcnlTZWxlY3RvcihcIi5idWxrLWRlbGV0ZS12aXJ0dWFsLXdpbmRvd1wiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoIXdpbmRvd0VsKSB7XG4gICAgICB3aW5kb3dFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB3aW5kb3dFbC5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLXZpcnR1YWwtd2luZG93XCI7XG4gICAgICB0cmFja0xpc3QuYXBwZW5kQ2hpbGQod2luZG93RWwpO1xuICAgIH1cblxuICAgIGlmIChzaG91bGRSZXNldFNjcm9sbCkge1xuICAgICAgdHJhY2tMaXN0LnNjcm9sbFRvcCA9IDA7XG4gICAgfVxuXG4gICAgY29uc3QgdG90YWxIZWlnaHQgPSB0cmFja3MubGVuZ3RoICogSVRFTV9IRUlHSFQ7XG4gICAgc3BhY2VyLnN0eWxlLmhlaWdodCA9IGAke3RvdGFsSGVpZ2h0fXB4YDtcbiAgICBzcGFjZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdHJhY2tMaXN0LnNjcm9sbFRvcDtcbiAgICBjb25zdCB2aWV3cG9ydEhlaWdodCA9IHRyYWNrTGlzdC5jbGllbnRIZWlnaHQ7XG5cbiAgICBjb25zdCBzdGFydEluZGV4ID0gTWF0aC5tYXgoMCwgTWF0aC5mbG9vcihzY3JvbGxUb3AgLyBJVEVNX0hFSUdIVCkgLSBCVUZGRVIpO1xuICAgIGNvbnN0IGVuZEluZGV4ID0gTWF0aC5taW4odHJhY2tzLmxlbmd0aCwgTWF0aC5jZWlsKChzY3JvbGxUb3AgKyB2aWV3cG9ydEhlaWdodCkgLyBJVEVNX0hFSUdIVCkgKyBCVUZGRVIpO1xuXG4gICAgd2luZG93RWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtzdGFydEluZGV4ICogSVRFTV9IRUlHSFR9cHgpYDtcbiAgICB3aW5kb3dFbC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgY29uc3QgY3VycmVudFBsYXlpbmdVcmkgPSAoU3BpY2V0aWZ5IGFzIGFueSkuUGxheWVyPy5kYXRhPy5pdGVtPy51cmkgfHwgbnVsbDtcblxuICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4OyBpIDwgZW5kSW5kZXg7IGkrKykge1xuICAgICAgY29uc3QgdHJhY2sgPSB0cmFja3NbaV07XG4gICAgICBjb25zdCBpc1BsYXlpbmcgPSBjdXJyZW50UGxheWluZ1VyaSA9PT0gdHJhY2sudXJpO1xuXG4gICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGl0ZW0uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1pdGVtXCIgKyAoc2VsZWN0ZWRTZXQuaGFzKGdldFNlbGVjdGlvbktleSh0cmFjaykpID8gXCIgc2VsZWN0ZWRcIiA6IFwiXCIpO1xuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXVyaVwiLCB0cmFjay51cmkpO1xuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGkudG9TdHJpbmcoKSk7XG4gICAgICBpdGVtLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuXG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KFwiLmJ1bGstZGVsZXRlLWNoZWNrYm94LXdyYXBwZXJcIikgfHxcbiAgICAgICAgICAgIChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xvc2VzdChcIi5idWxrLWRlbGV0ZS1wbGF5YmFjay1jb250cm9sc1wiKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gIWNoZWNrYm94LmNoZWNrZWQ7XG4gICAgICAgIGNvbnN0IGtleSA9IGdldFNlbGVjdGlvbktleSh0cmFjayk7XG4gICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgc2VsZWN0ZWRTZXQuYWRkKGtleSk7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZWN0ZWRTZXQuZGVsZXRlKGtleSk7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB0cmFja051bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgdHJhY2tOdW1iZXIuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS10cmFjay1udW1iZXJcIjtcbiAgICAgIGlmIChpc1BsYXlpbmcpIHtcbiAgICAgICAgdHJhY2tOdW1iZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUGxheWluZ0luZGljYXRvcigpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYWNrTnVtYmVyLnRleHRDb250ZW50ID0gKGkgKyAxKS50b1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpbWFnZSA9IGNyZWF0ZVRyYWNrSW1hZ2UodHJhY2suaW1hZ2VVcmwpO1xuXG4gICAgICBjb25zdCB0aXRsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICB0aXRsZUVsLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtaXRlbS10aXRsZVwiO1xuICAgICAgdGl0bGVFbC5ocmVmID0gdHJhY2suYWxidW1Vcmk7XG4gICAgICB0aXRsZUVsLnRleHRDb250ZW50ID0gdHJhY2submFtZTtcbiAgICAgIHRpdGxlRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKHRyYWNrLmFsYnVtVXJpLnN0YXJ0c1dpdGgoXCJzcG90aWZ5OmFsYnVtOlwiKSkge1xuICAgICAgICAgIGNvbnN0IHBhdGggPSB0cmFjay5hbGJ1bVVyaS5yZXBsYWNlKFwic3BvdGlmeTphbGJ1bTpcIiwgXCIvYWxidW0vXCIpO1xuICAgICAgICAgIChTcGljZXRpZnkgYXMgYW55KS5QbGF0Zm9ybT8uSGlzdG9yeT8ucHVzaChwYXRoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGFydGlzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBhcnRpc3RFbC5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWl0ZW0tYXJ0aXN0XCI7XG4gICAgICBhcnRpc3RFbC50ZXh0Q29udGVudCA9IHRyYWNrLmFydGlzdDtcblxuICAgICAgY29uc3QgYWxidW1FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgYWxidW1FbC5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWl0ZW0tYWxidW1cIjtcbiAgICAgIGFsYnVtRWwudGV4dENvbnRlbnQgPSB0cmFjay5hbGJ1bTtcblxuICAgICAgLy8gQWRkZWQgYnkgY29sdW1uIChuYW1lICsgb3B0aW9uYWwgYXZhdGFyKVxuICAgICAgY29uc3QgYWRkZWRCeUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGFkZGVkQnlFbC5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWl0ZW0tYWRkZWRieVwiO1xuICAgICAgYWRkZWRCeUVsLnRpdGxlID0gdHJhY2suYWRkZWRCeSA/IGBBZGRlZCBieTogJHt0cmFjay5hZGRlZEJ5fWAgOiBcIlwiO1xuXG4gICAgICBpZiAodHJhY2suYWRkZWRCeUltYWdlVXJsKSB7XG4gICAgICAgIGNvbnN0IGF2YXRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGF2YXRhci5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWFkZGVkYnktYXZhdGFyXCI7XG4gICAgICAgIGF2YXRhci5zcmMgPSB0cmFjay5hZGRlZEJ5SW1hZ2VVcmw7XG4gICAgICAgIGF2YXRhci5hbHQgPSBcIlwiO1xuICAgICAgICBhdmF0YXIubG9hZGluZyA9IFwibGF6eVwiO1xuICAgICAgICBhdmF0YXIub25lcnJvciA9ICgpID0+IHsgYXZhdGFyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgfTtcbiAgICAgICAgYWRkZWRCeUVsLmFwcGVuZENoaWxkKGF2YXRhcik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5hbWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBuYW1lU3Bhbi5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWFkZGVkYnktbmFtZVwiO1xuICAgICAgbmFtZVNwYW4udGV4dENvbnRlbnQgPSB0cmFjay5hZGRlZEJ5IHx8IFwiXCI7XG4gICAgICBhZGRlZEJ5RWwuYXBwZW5kQ2hpbGQobmFtZVNwYW4pO1xuXG4gICAgICAvLyBBZGRlZCBhdCBjb2x1bW4gKGRhdGUgb25seSlcbiAgICAgIGNvbnN0IGFkZGVkQXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgYWRkZWRBdEVsLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtaXRlbS1hZGRlZGF0XCI7XG4gICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZm9ybWF0RGF0ZSh0cmFjay5hZGRlZEF0KTtcbiAgICAgIGFkZGVkQXRFbC50ZXh0Q29udGVudCA9IGZvcm1hdHRlZERhdGU7XG4gICAgICBhZGRlZEF0RWwudGl0bGUgPSB0cmFjay5hZGRlZEF0ID8gYEFkZGVkOiAke3RyYWNrLmFkZGVkQXR9YCA6IFwiXCI7XG5cbiAgICAgIGNvbnN0IHBsYXliYWNrID0gY3JlYXRlUGxheWJhY2tDb250cm9sKHRyYWNrLnVyaSwgdHJhY2suZHVyYXRpb24pO1xuXG4gICAgICBjb25zdCBjaGVja2JveFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY2hlY2tib3hXcmFwcGVyLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY2hlY2tib3gtd3JhcHBlclwiO1xuXG4gICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICBjaGVja2JveC5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWNoZWNrYm94XCI7XG4gICAgICBjaGVja2JveC5jaGVja2VkID0gc2VsZWN0ZWRTZXQuaGFzKGdldFNlbGVjdGlvbktleSh0cmFjaykpO1xuXG4gICAgICBjb25zdCBjdXN0b21DaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjdXN0b21DaGVja2JveC5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWNoZWNrYm94LWN1c3RvbVwiO1xuXG4gICAgICBjaGVja2JveFdyYXBwZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgY2hlY2tib3hXcmFwcGVyLmFwcGVuZENoaWxkKGN1c3RvbUNoZWNrYm94KTtcblxuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3Qga2V5ID0gZ2V0U2VsZWN0aW9uS2V5KHRyYWNrKTtcbiAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgc2VsZWN0ZWRTZXQuYWRkKGtleSk7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0ZWRTZXQuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIHVwZGF0ZUJ1dHRvblN0YXRlKCk7XG4gICAgICB9KTtcblxuICAgICAgaXRlbS5hcHBlbmRDaGlsZCh0cmFja051bWJlcik7XG4gICAgICBpdGVtLmFwcGVuZENoaWxkKGNoZWNrYm94V3JhcHBlcik7XG4gICAgICBpdGVtLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQodGl0bGVFbCk7XG4gICAgICBpdGVtLmFwcGVuZENoaWxkKGFydGlzdEVsKTtcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoYWxidW1FbCk7XG4gICAgICBpdGVtLmFwcGVuZENoaWxkKGFkZGVkQnlFbCk7XG4gICAgICBpdGVtLmFwcGVuZENoaWxkKGFkZGVkQXRFbCk7XG4gICAgICBpdGVtLmFwcGVuZENoaWxkKHBsYXliYWNrKTtcbiAgICAgIHdpbmRvd0VsLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbHRlclRyYWNrcygpIHtcbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaElucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IGZpbHRlcmVkID0gY3VycmVudFRyYWNrcy5maWx0ZXIodCA9PlxuICAgICAgdC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkpIHx8XG4gICAgICB0LmFydGlzdC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5KSB8fFxuICAgICAgdC5hbGJ1bS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5KVxuICAgICk7XG4gICAgaWYgKHNvcnRDb2x1bW4pIHtcbiAgICAgIGZpbHRlcmVkLnNvcnQoKGEsIGIpID0+IGNvbXBhcmVUcmFja3MoYSwgYiwgc29ydENvbHVtbiwgc29ydERpcmVjdGlvbikpO1xuICAgIH1cbiAgICBmaWx0ZXJlZFRyYWNrcyA9IGZpbHRlcmVkO1xuICAgIHJlbmRlclRyYWNrcyhmaWx0ZXJlZFRyYWNrcyk7XG4gICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUJ1dHRvblN0YXRlKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkQ291bnQgPSBzZWxlY3RlZFNldC5zaXplO1xuICAgIHRyYWNrSW5mby5pbm5lckhUTUwgPSBgPHA+PHNwYW4+JHtzZWxlY3RlZENvdW50fTwvc3Bhbj4gdHJhY2socykgc2VsZWN0ZWQgZnJvbSBwbGF5bGlzdDwvcD5gO1xuICAgIGRlbGV0ZUJ0bi5kaXNhYmxlZCA9IHNlbGVjdGVkQ291bnQgPT09IDA7XG5cbiAgICBpZiAoc2VsZWN0ZWRDb3VudCA9PT0gMCkge1xuICAgICAgc2VsZWN0QWxsQnRuLnRleHRDb250ZW50ID0gXCJTZWxlY3QgQWxsXCI7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZENvdW50ID09PSBmaWx0ZXJlZFRyYWNrcy5sZW5ndGgpIHtcbiAgICAgIHNlbGVjdEFsbEJ0bi50ZXh0Q29udGVudCA9IFwiRGVzZWxlY3QgQWxsXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdEFsbEJ0bi50ZXh0Q29udGVudCA9IFwiU2VsZWN0IEFsbFwiO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZWQgaGFuZGxlcjogc2VsZWN0IGEgcGxheWxpc3QgYnkgVVJJLCBsb2FkIGl0cyB0cmFja3MsIGFuZCBwcmUtc2VsZWN0XG4gICAqIGFueSB0cmFja3MgdGhhdCBtYXRjaCB0cmFja1VyaXMgKHRoZSBvbmVzIHRoZSB1c2VyIHJpZ2h0LWNsaWNrZWQgb24pLlxuICAgKi9cbiAgYXN5bmMgZnVuY3Rpb24gc2VsZWN0UGxheWxpc3QodXJpOiBzdHJpbmcpIHtcbiAgICBpZiAoIXVyaSkgcmV0dXJuO1xuXG4gICAgY29uc3QgcmVxdWVzdElkID0gKytwZW5kaW5nUmVxdWVzdDtcbiAgICBjdXJyZW50UGxheWxpc3RVcmkgPSB1cmk7XG4gICAgcGxheWxpc3RTZWxlY3QudmFsdWUgPSB1cmk7XG5cbiAgICAvLyBSZXNldCBzb3J0XG4gICAgc29ydENvbHVtbiA9IFwiXCI7XG4gICAgc29ydERpcmVjdGlvbiA9IFwiYXNjXCI7XG4gICAgdXBkYXRlU29ydEluZGljYXRvcnMoKTtcblxuICAgIC8vIFNob3cgbG9hZGluZyBzdGF0ZVxuICAgIGVtcHR5U3RhdGUudGV4dENvbnRlbnQgPSBcIkxvYWRpbmcgdHJhY2tzLi4uXCI7XG4gICAgdHJhY2tMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgdHJhY2tMaXN0LmFwcGVuZENoaWxkKGVtcHR5U3RhdGUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGN1cnJlbnRUcmFja3MgPSBhd2FpdCBnZXRQbGF5bGlzdFRyYWNrcyh1cmksICh0cmFja3MsIHRvdGFsTG9hZGVkKSA9PiB7XG4gICAgICAgIGlmIChwZW5kaW5nUmVxdWVzdCAhPT0gcmVxdWVzdElkKSByZXR1cm47IC8vIGEgbmV3ZXIgcmVxdWVzdCBzdXBlcnNlZGVkIHRoaXMgb25lXG4gICAgICAgIGVtcHR5U3RhdGUudGV4dENvbnRlbnQgPSBgTG9hZGVkICR7dG90YWxMb2FkZWR9IHRyYWNrKHMpLi4uYDtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBUaGlzIHJlcXVlc3QgaXMgc3RhbGUgXHUyMDE0IGEgbmV3ZXIgc2VsZWN0aW9uIGhhcyByZXBsYWNlZCBpdFxuICAgICAgaWYgKHBlbmRpbmdSZXF1ZXN0ICE9PSByZXF1ZXN0SWQpIHJldHVybjtcblxuICAgICAgZmlsdGVyZWRUcmFja3MgPSBbLi4uY3VycmVudFRyYWNrc107XG4gICAgICBzZWxlY3RlZFNldC5jbGVhcigpO1xuICAgICAgc2VhcmNoSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gXCJcIjtcblxuICAgICAgLy8gUHJlLXNlbGVjdCB0aGUgdHJhY2tzIHRoZSB1c2VyIG9yaWdpbmFsbHkgcmlnaHQtY2xpY2tlZCBvblxuICAgICAgZm9yIChjb25zdCB0cmFja1VyaSBvZiB0cmFja1VyaXMpIHtcbiAgICAgICAgY29uc3QgdHJhY2sgPSBjdXJyZW50VHJhY2tzLmZpbmQodCA9PiB0LnVyaSA9PT0gdHJhY2tVcmkpO1xuICAgICAgICBpZiAodHJhY2spIHtcbiAgICAgICAgICBzZWxlY3RlZFNldC5hZGQoZ2V0U2VsZWN0aW9uS2V5KHRyYWNrKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVuZGVyVHJhY2tzKGZpbHRlcmVkVHJhY2tzKTtcbiAgICAgIHVwZGF0ZUJ1dHRvblN0YXRlKCk7XG5cbiAgICAgIC8vIFNjcm9sbCB0byB0aGUgZmlyc3Qgc2VsZWN0ZWQgdHJhY2tcbiAgICAgIGlmIChzZWxlY3RlZFNldC5zaXplID4gMCkge1xuICAgICAgICBjb25zdCBzY3JvbGxJbmRleCA9IGZpbHRlcmVkVHJhY2tzLmZpbmRJbmRleCh0ID0+IHNlbGVjdGVkU2V0LmhhcyhnZXRTZWxlY3Rpb25LZXkodCkpKTtcbiAgICAgICAgaWYgKHNjcm9sbEluZGV4ID4gMCkge1xuICAgICAgICAgIGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gdHJhY2tMaXN0LmNsaWVudEhlaWdodCB8fCA0MDA7XG4gICAgICAgICAgdHJhY2tMaXN0LnNjcm9sbFRvcCA9IE1hdGgubWF4KDAsIHNjcm9sbEluZGV4ICogSVRFTV9IRUlHSFQgLSB2aWV3cG9ydEhlaWdodCAvIDIgKyBJVEVNX0hFSUdIVCAvIDIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKHBlbmRpbmdSZXF1ZXN0ICE9PSByZXF1ZXN0SWQpIHJldHVybjtcbiAgICAgIGVtcHR5U3RhdGUudGV4dENvbnRlbnQgPSBcIkZhaWxlZCB0byBsb2FkIHRyYWNrc1wiO1xuICAgICAgdHJhY2tMaXN0LmFwcGVuZENoaWxkKGVtcHR5U3RhdGUpO1xuICAgICAgU3BpY2V0aWZ5LnNob3dOb3RpZmljYXRpb24oXCJGYWlsZWQgdG8gbG9hZCB0cmFja3NcIiwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJlc2V0IHRoZSBtb2RhbCB0byB0aGUgZW1wdHkgKG5vIHBsYXlsaXN0IHNlbGVjdGVkKSBzdGF0ZSAqL1xuICBmdW5jdGlvbiByZXNldFRvRW1wdHkoKSB7XG4gICAgY3VycmVudFBsYXlsaXN0VXJpID0gbnVsbDtcbiAgICBjdXJyZW50VHJhY2tzID0gW107XG4gICAgZmlsdGVyZWRUcmFja3MgPSBbXTtcbiAgICBzZWxlY3RlZFNldC5jbGVhcigpO1xuICAgIHNlYXJjaElucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgc29ydENvbHVtbiA9IFwiXCI7XG4gICAgc29ydERpcmVjdGlvbiA9IFwiYXNjXCI7XG4gICAgdXBkYXRlU29ydEluZGljYXRvcnMoKTtcbiAgICB0cmFja0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBlbXB0eVN0YXRlLnRleHRDb250ZW50ID0gXCJTZWxlY3QgYSBwbGF5bGlzdCBmaXJzdFwiO1xuICAgIHRyYWNrTGlzdC5hcHBlbmRDaGlsZChlbXB0eVN0YXRlKTtcbiAgICB1cGRhdGVCdXR0b25TdGF0ZSgpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gbG9hZFBsYXlsaXN0cygpIHtcbiAgICB0cnkge1xuICAgICAgYWxsUGxheWxpc3RzID0gYXdhaXQgZmV0Y2hQbGF5bGlzdHNXaXRoRGVsZXRlUGVybWlzc2lvbigpO1xuICAgICAgYWxsUGxheWxpc3RzLnNvcnQoKGEsIGIpID0+IGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSkpO1xuXG4gICAgICBmb3IgKGNvbnN0IHBsYXlsaXN0IG9mIGFsbFBsYXlsaXN0cykge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBwbGF5bGlzdC51cmk7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHBsYXlsaXN0Lm5hbWU7XG4gICAgICAgIHBsYXlsaXN0U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0cmFja1VyaXMubGVuZ3RoID09PSAwIHx8IGFsbFBsYXlsaXN0cy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgICAgLy8gUHJpb3JpdHkgMTogaWYgY29udGV4dFVyaSBtYXRjaGVzIGEga25vd24gcGxheWxpc3QsIHRydXN0IGl0IGFuZFxuICAgICAgLy8gc2VsZWN0IGl0IGltbWVkaWF0ZWx5ICh0aGUgdXNlciByaWdodC1jbGlja2VkIGZyb20gdGhhdCBwbGF5bGlzdCkuXG4gICAgICBpZiAoY3VycmVudFBsYXlsaXN0VXJpICYmIGFsbFBsYXlsaXN0cy5zb21lKHAgPT4gcC51cmkgPT09IGN1cnJlbnRQbGF5bGlzdFVyaSkpIHtcbiAgICAgICAgcGxheWxpc3RTZWxlY3QudmFsdWUgPSBjdXJyZW50UGxheWxpc3RVcmk7XG4gICAgICAgIHBsYXlsaXN0U2VsZWN0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmlvcml0eSAyOiBzY2FuIHBsYXlsaXN0cyB0byBmaW5kIHRoZSBvbmUgY29udGFpbmluZyB0aGUgTU9TVFxuICAgICAgLy8gc2VsZWN0ZWQgdHJhY2tzLiAgT25seSBzY2FuIGVub3VnaCB0cmFja3MgdG8gbWFrZSBhIGRlY2lzaW9uLlxuICAgICAgZW1wdHlTdGF0ZS50ZXh0Q29udGVudCA9IFwiU2Nhbm5pbmcgcGxheWxpc3RzLi4uXCI7XG4gICAgICB0cmFja0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIHRyYWNrTGlzdC5hcHBlbmRDaGlsZChlbXB0eVN0YXRlKTtcblxuICAgICAgbGV0IGJlc3RQbGF5bGlzdDogUGxheWxpc3QgfCBudWxsID0gbnVsbDtcbiAgICAgIGxldCBiZXN0U2NvcmUgPSAwO1xuICAgICAgY29uc3Qgc2NhbkxpbWl0ID0gTWF0aC5tYXgoNTAsIHRyYWNrVXJpcy5sZW5ndGggKiAzKTtcblxuICAgICAgZm9yIChjb25zdCBwbGF5bGlzdCBvZiBhbGxQbGF5bGlzdHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB0cmFja3MgPSBhd2FpdCBnZXRQbGF5bGlzdFRyYWNrcyhwbGF5bGlzdC51cmksIHVuZGVmaW5lZCwgc2NhbkxpbWl0KTtcbiAgICAgICAgICBjb25zdCB0cmFja1VyaXNTZXQgPSBuZXcgU2V0KHRyYWNrcy5tYXAodCA9PiB0LnVyaSkpO1xuICAgICAgICAgIGxldCBzY29yZSA9IDA7XG4gICAgICAgICAgZm9yIChjb25zdCB1cmkgb2YgdHJhY2tVcmlzKSB7XG4gICAgICAgICAgICBpZiAodHJhY2tVcmlzU2V0Lmhhcyh1cmkpKSBzY29yZSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2NvcmUgPiBiZXN0U2NvcmUpIHtcbiAgICAgICAgICAgIGJlc3RTY29yZSA9IHNjb3JlO1xuICAgICAgICAgICAgYmVzdFBsYXlsaXN0ID0gcGxheWxpc3Q7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gU2tpcCBwbGF5bGlzdHMgdGhhdCBmYWlsIHRvIGxvYWRcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoYmVzdFBsYXlsaXN0ICYmIGJlc3RTY29yZSA+IDApIHtcbiAgICAgICAgcGxheWxpc3RTZWxlY3QudmFsdWUgPSBiZXN0UGxheWxpc3QudXJpO1xuICAgICAgICBwbGF5bGlzdFNlbGVjdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbXB0eVN0YXRlLnRleHRDb250ZW50ID0gXCJTZWxlY3QgYSBwbGF5bGlzdCBmaXJzdFwiO1xuICAgICAgICB0cmFja0xpc3QuYXBwZW5kQ2hpbGQoZW1wdHlTdGF0ZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgU3BpY2V0aWZ5LnNob3dOb3RpZmljYXRpb24oXCJGYWlsZWQgdG8gbG9hZCBwbGF5bGlzdHNcIiwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtYnV0dG9uc1wiO1xuXG4gIGNvbnN0IHNlbGVjdEFsbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHNlbGVjdEFsbEJ0bi5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLXNlbGVjdC1hbGxcIjtcbiAgc2VsZWN0QWxsQnRuLnRleHRDb250ZW50ID0gXCJTZWxlY3QgQWxsXCI7XG4gIHNlbGVjdEFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZFNldC5zaXplID09PSBmaWx0ZXJlZFRyYWNrcy5sZW5ndGgpIHtcbiAgICAgIHNlbGVjdGVkU2V0LmNsZWFyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlcmVkVHJhY2tzLmZvckVhY2godCA9PiBzZWxlY3RlZFNldC5hZGQoZ2V0U2VsZWN0aW9uS2V5KHQpKSk7XG4gICAgfVxuICAgIHJlbmRlclRyYWNrcyhmaWx0ZXJlZFRyYWNrcyk7XG4gICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcbiAgfSk7XG5cbiAgY29uc3QgYnV0dG9uR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidXR0b25Hcm91cC5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWJ1dHRvbi1ncm91cFwiO1xuXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ0bi5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWJ0biBjYW5jZWxcIjtcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjbGVhbnVwQW5kQ2xvc2UoKSk7XG5cbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlQnRuLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtYnRuIGRlbGV0ZVwiO1xuICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICBkZWxldGVCdG4uZGlzYWJsZWQgPSB0cnVlO1xuXG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGlmICghY3VycmVudFBsYXlsaXN0VXJpKSByZXR1cm47XG5cbiAgICBjb25zdCBwbGF5bGlzdCA9IGFsbFBsYXlsaXN0cy5maW5kKHAgPT4gcC51cmkgPT09IGN1cnJlbnRQbGF5bGlzdFVyaSk7XG4gICAgY29uc3QgcGxheWxpc3ROYW1lID0gcGxheWxpc3Q/Lm5hbWUgfHwgXCJVbmtub3duIFBsYXlsaXN0XCI7XG4gICAgY29uc3QgdHJhY2tDb3VudCA9IHNlbGVjdGVkU2V0LnNpemU7XG4gICAgY29uc3QgdHJhY2tzVG9EZWxldGUgPSBjdXJyZW50VHJhY2tzLmZpbHRlcih0ID0+IHNlbGVjdGVkU2V0LmhhcyhnZXRTZWxlY3Rpb25LZXkodCkpKTtcblxuICAgIGNyZWF0ZURlbGV0ZUNvbmZpcm1Nb2RhbChcbiAgICAgIHRyYWNrc1RvRGVsZXRlLFxuICAgICAgcGxheWxpc3ROYW1lLFxuICAgICAgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCB0cmFja3NXaXRoVWlkID0gdHJhY2tzVG9EZWxldGUubWFwKHQgPT4gKHsgdXJpOiB0LnVyaSwgdWlkOiB0LnVpZCB9KSk7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCBkZWxldGVUcmFja3NGcm9tUGxheWxpc3QoY3VycmVudFBsYXlsaXN0VXJpISwgdHJhY2tzV2l0aFVpZCk7XG5cbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihgRGVsZXRlZCAke3RyYWNrQ291bnR9IHRyYWNrKHMpIGZyb20gcGxheWxpc3RgKTtcblxuICAgICAgICAgIGN1cnJlbnRUcmFja3MgPSBjdXJyZW50VHJhY2tzLmZpbHRlcih0ID0+ICFzZWxlY3RlZFNldC5oYXMoZ2V0U2VsZWN0aW9uS2V5KHQpKSk7XG4gICAgICAgICAgZmlsdGVyZWRUcmFja3MgPSBmaWx0ZXJlZFRyYWNrcy5maWx0ZXIodCA9PiAhc2VsZWN0ZWRTZXQuaGFzKGdldFNlbGVjdGlvbktleSh0KSkpO1xuICAgICAgICAgIHNlbGVjdGVkU2V0LmNsZWFyKCk7XG4gICAgICAgICAgcmVuZGVyVHJhY2tzKGZpbHRlcmVkVHJhY2tzKTtcbiAgICAgICAgICB1cGRhdGVCdXR0b25TdGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFNwaWNldGlmeS5zaG93Tm90aWZpY2F0aW9uKFwiRmFpbGVkIHRvIGRlbGV0ZSB0cmFja3NcIiwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoKSA9PiB7fVxuICAgICk7XG4gIH0pO1xuXG4gIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdEFsbEJ0bik7XG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Hcm91cCk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHBsYXlsaXN0U2VsZWN0b3IpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHNlYXJjaENvbnRhaW5lcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodHJhY2tJbmZvKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJCYXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRyYWNrTGlzdCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcblxuICBtb2RhbC5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcblxuICAvLyAtLS0gSU5JVCBhZnRlciBET00gaXMgcmVhZHkgLS0tXG4gIC8vIEF0dGFjaCBBTEwgZXZlbnQgbGlzdGVuZXJzIEJFRk9SRSBsb2FkUGxheWxpc3RzKCkgdG8gZW5zdXJlIHRoZXkncmVcbiAgLy8gaW4gcGxhY2UgZXZlbiBpZiB0aGUgQVBJIGNhbGxzIGNvbXBsZXRlIHN5bmNocm9ub3VzbHkgKGUuZy4gbG9jYWwgY2FjaGUpLlxuICBwbGF5bGlzdFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFVyaSA9IHBsYXlsaXN0U2VsZWN0LnZhbHVlO1xuICAgIGlmIChzZWxlY3RlZFVyaSkge1xuICAgICAgYXdhaXQgc2VsZWN0UGxheWxpc3Qoc2VsZWN0ZWRVcmkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNldFRvRW1wdHkoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGxldCBzZWFyY2hUaW1lb3V0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICBpZiAoc2VhcmNoVGltZW91dCkge1xuICAgICAgd2luZG93LmNsZWFyVGltZW91dChzZWFyY2hUaW1lb3V0KTtcbiAgICB9XG4gICAgc2VhcmNoVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZpbHRlclRyYWNrcygpO1xuICAgIH0sIDE1MCk7XG4gIH0pO1xuXG4gIGxvYWRQbGF5bGlzdHMoKTtcblxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgICBjbGVhbnVwQW5kQ2xvc2UoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhbnVwQW5kQ2xvc2UpO1xuXG4gIGNvbnN0IHVwZGF0ZVBsYXliYWNrU3RhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gKFNwaWNldGlmeSBhcyBhbnkpLlBsYXllcjtcbiAgICBpZiAoIXBsYXllcj8uZGF0YT8uaXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRVcmkgPSBwbGF5ZXIuZGF0YS5pdGVtLnVyaTtcbiAgICBjb25zdCBpc1BsYXlpbmcgPSBwbGF5ZXIuaXNQbGF5aW5nKCk7XG4gICAgY29uc3QgcG9zaXRpb24gPSBwbGF5ZXIuZ2V0UHJvZ3Jlc3MoKTtcbiAgICBjb25zdCBkdXJhdGlvbiA9IHBsYXllci5nZXREdXJhdGlvbigpIHx8IHBsYXllci5kYXRhLml0ZW0uZHVyYXRpb24/LnRvdGFsTXMgfHwgMDtcblxuICAgIHRyYWNrTGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1bGstZGVsZXRlLXBsYXliYWNrLWNvbnRyb2xzXCIpLmZvckVhY2goKGN0cmw6IGFueSkgPT4ge1xuICAgICAgY29uc3QgcGxheUJ0biA9IGN0cmwucXVlcnlTZWxlY3RvcihcIi5idWxrLWRlbGV0ZS1wbGF5YmFjay1idXR0b25cIik7XG4gICAgICBjb25zdCBzbGlkZXIgPSBjdHJsLnF1ZXJ5U2VsZWN0b3IoXCIuYnVsay1kZWxldGUtc2xpZGVyXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICBjb25zdCBjdXJyZW50VGltZSA9IGN0cmwucXVlcnlTZWxlY3RvcihcIi5idWxrLWRlbGV0ZS1zbGlkZXItdGltZVwiKTtcblxuICAgICAgaWYgKGN0cmwuZGF0YXNldC51cmkgPT09IGN1cnJlbnRVcmkpIHtcbiAgICAgICAgaWYgKGlzUGxheWluZykge1xuICAgICAgICAgIHBsYXlCdG4uaW5uZXJIVE1MID0gYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNNiAxOWg0VjVINnYxNHptOC0xNHYxNGg0VjVoLTR6XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48L3N2Zz5gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsYXlCdG4uaW5uZXJIVE1MID0gYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNOCA1djE0bDExLTd6XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48L3N2Zz5gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzbGlkZXIpIHtcbiAgICAgICAgICBzbGlkZXIudmFsdWUgPSBwb3NpdGlvbi50b1N0cmluZygpO1xuICAgICAgICAgIHNsaWRlci5tYXggPSBkdXJhdGlvbi50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50VGltZSkgY3VycmVudFRpbWUudGV4dENvbnRlbnQgPSBmb3JtYXRUaW1lKHBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRyYWNrTGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1bGstZGVsZXRlLWl0ZW1cIikuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgICBjb25zdCB0cmFja051bWJlciA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5idWxrLWRlbGV0ZS10cmFjay1udW1iZXJcIik7XG4gICAgICBpZiAoIXRyYWNrTnVtYmVyKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IHVyaSA9IGl0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS11cmlcIik7XG5cbiAgICAgIGlmICh1cmkgPT09IGN1cnJlbnRVcmkpIHtcbiAgICAgICAgdHJhY2tOdW1iZXIuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJidWxrLWRlbGV0ZS1wbGF5aW5nLWluZGljYXRvclwiPjwvZGl2PmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBpZHggPSBwYXJzZUludChpdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiksIDEwKTtcbiAgICAgICAgdHJhY2tOdW1iZXIudGV4dENvbnRlbnQgPSAoaWR4ICsgMSkudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzdGFydFBsYXliYWNrVXBkYXRlcyA9ICgpID0+IHtcbiAgICBpZiAodXBkYXRlSW50ZXJ2YWwpIHJldHVybjtcbiAgICB1cGRhdGVJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCh1cGRhdGVQbGF5YmFja1N0YXRlLCAxMDAwKTtcbiAgfTtcblxuICBzdGFydFBsYXliYWNrVXBkYXRlcygpO1xuXG4gIHBsYXlsaXN0U2VsZWN0LmZvY3VzKCk7XG59XG4iLCAiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCIgd2l0aCB7IHR5cGU6IFwiY3NzXCIgfTtcbmltcG9ydCB7IGNyZWF0ZU1vZGFsIH0gZnJvbSBcIi4vbW9kYWwudHN4XCI7XG5cbmRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHN0eWxlcyk7XG5cbmZ1bmN0aW9uIGlzVHJhY2tVcmkodXJpOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgdXJpT2JqID0gU3BpY2V0aWZ5LlVSSS5mcm9tKHVyaSk7XG4gIHJldHVybiAhISh1cmlPYmogJiYgKHVyaU9iaiBhcyB7IHR5cGU/OiBzdHJpbmcgfSkudHlwZSA9PT0gXCJ0cmFja1wiKTtcbn1cblxuZnVuY3Rpb24gaXNQbGF5bGlzdFVyaSh1cmk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB1cmlPYmogPSBTcGljZXRpZnkuVVJJLmZyb20odXJpKTtcbiAgcmV0dXJuICEhKHVyaU9iaiAmJiAodXJpT2JqIGFzIHsgdHlwZT86IHN0cmluZyB9KS50eXBlID09PSBcInBsYXlsaXN0XCIpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVNZW51Q2xpY2sodXJpczogc3RyaW5nW10sIF91aWRzPzogc3RyaW5nW10sIGNvbnRleHRVcmk/OiBzdHJpbmcpIHtcbiAgY29uc3QgdHJhY2tVcmlzID0gdXJpcy5maWx0ZXIoaXNUcmFja1VyaSk7XG4gIFxuICBpZiAodHJhY2tVcmlzLmxlbmd0aCA9PT0gMCkge1xuICAgIFNwaWNldGlmeS5zaG93Tm90aWZpY2F0aW9uKFwiTm8gdHJhY2tzIHNlbGVjdGVkXCIsIHRydWUpO1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgbGV0IHBsYXlsaXN0VXJpOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGlmIChjb250ZXh0VXJpICYmIGlzUGxheWxpc3RVcmkoY29udGV4dFVyaSkpIHtcbiAgICBwbGF5bGlzdFVyaSA9IGNvbnRleHRVcmk7XG4gIH1cbiAgXG4gIGNyZWF0ZU1vZGFsKHRyYWNrVXJpcywgcGxheWxpc3RVcmkpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRBZGQodXJpczogc3RyaW5nW10pOiBib29sZWFuIHtcbiAgcmV0dXJuIHVyaXMuc29tZShpc1RyYWNrVXJpKTtcbn1cblxuY29uc3QgYnVsa0RlbGV0ZU1lbnVJdGVtID0gbmV3IFNwaWNldGlmeS5Db250ZXh0TWVudS5JdGVtKFxuICBcIkRlbGV0ZSBmcm9tIFBsYXlsaXN0XCIsXG4gIGhhbmRsZU1lbnVDbGljayxcbiAgc2hvdWxkQWRkLFxuICBcImJsb2NrXCIgYXMgU3BpY2V0aWZ5Lkljb25cbik7XG5cbmJ1bGtEZWxldGVNZW51SXRlbS5yZWdpc3RlcigpOyJdLAogICJtYXBwaW5ncyI6ICI7OztBQUNVLElBQU0sUUFBUSxJQUFJLGNBQWM7QUFDaEMsTUFBTSxZQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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
