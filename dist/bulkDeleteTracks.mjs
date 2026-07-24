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
      item.appendChild(info);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vZXh0ZW5zaW9ucy9idWxrRGVsZXRlVHJhY2tzL3NyYy9zdHlsZXMuY3NzIiwgIi4uL2V4dGVuc2lvbnMvYnVsa0RlbGV0ZVRyYWNrcy9zcmMvbW9kYWwudHN4IiwgIi4uL2V4dGVuc2lvbnMvYnVsa0RlbGV0ZVRyYWNrcy9zcmMvYXBwLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXG4gICAgICAgICAgY29uc3Qgc2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICAgIHNoZWV0LnJlcGxhY2VTeW5jKGAuYnVsay1kZWxldGUtbW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLmJ1bGstZGVsZXRlLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMTgxODE4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA4MjBweDtcbiAgbWF4LWhlaWdodDogODV2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSwgc3BvdGlmeSksIHNhbnMtc2VyaWY7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uYnVsay1kZWxldGUtaGVhZGVyIHtcbiAgcGFkZGluZzogMTZweCAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI4MjgyODtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5idWxrLWRlbGV0ZS1oZWFkZXItcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLmJ1bGstZGVsZXRlLWNsb3NlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xufVxuXG4uYnVsay1kZWxldGUtY2xvc2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xufVxuXG4uYnVsay1kZWxldGUtY2xvc2Ugc3ZnIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgZmlsbDogI2IzYjNiMztcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjE1cztcbn1cblxuLmJ1bGstZGVsZXRlLWNsb3NlOmhvdmVyIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG59XG5cbi5idWxrLWRlbGV0ZS1naXRodWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xufVxuXG4uYnVsay1kZWxldGUtZ2l0aHViOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzI4MjgyODtcbn1cblxuLmJ1bGstZGVsZXRlLWdpdGh1YiBzdmcge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBmaWxsOiAjYjNiM2IzO1xuICB0cmFuc2l0aW9uOiBmaWxsIDAuMTVzO1xufVxuXG4uYnVsay1kZWxldGUtZ2l0aHViOmhvdmVyIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG59XG5cbi5idWxrLWRlbGV0ZS1wbGF5bGlzdC1zZWxlY3RvciB7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyODI4Mjg7XG59XG5cbi5idWxrLWRlbGV0ZS1wbGF5bGlzdC1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLmJ1bGstZGVsZXRlLXBsYXlsaXN0LXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYmFja2dyb3VuZDogIzNmM2YzZjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSclMjNiM2IzYjMnJTNFJTNDcGF0aCBkPSdNNyAxMGw1IDUgNS01eicvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTJweCBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbi5idWxrLWRlbGV0ZS1wbGF5bGlzdC1zZWxlY3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE0YTRhO1xufVxuXG4uYnVsay1kZWxldGUtcGxheWxpc3Qtc2VsZWN0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTtcbn1cblxuLmJ1bGstZGVsZXRlLXNlYXJjaCB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyODI4Mjg7XG59XG5cbi5idWxrLWRlbGV0ZS1zZWFyY2gtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMyODI4Mjg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMCAxMnB4O1xufVxuXG4uYnVsay1kZWxldGUtc2VhcmNoLWljb24ge1xuICBjb2xvcjogI2IzYjNiMztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJ1bGstZGVsZXRlLXNlYXJjaC1pY29uIHN2ZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5idWxrLWRlbGV0ZS1zZWFyY2ggaW5wdXQge1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJ1bGstZGVsZXRlLXNlYXJjaCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2IzYjNiMztcbn1cblxuLmJ1bGstZGVsZXRlLXNlYXJjaCBpbnB1dDpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmJ1bGstZGVsZXRlLXRyYWNrLWluZm8ge1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgYmFja2dyb3VuZDogIzEyMTIxMjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyODI4Mjg7XG59XG5cbi5idWxrLWRlbGV0ZS10cmFjay1pbmZvIHAge1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW46IDA7XG59XG5cbi5idWxrLWRlbGV0ZS10cmFjay1pbmZvIHNwYW4ge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLyogPT09PT09PT09PSBIZWFkZXIgQmFyIChzb3J0YWJsZSBjb2x1bW5zKSA9PT09PT09PT09ICovXG4uYnVsay1kZWxldGUtaGVhZGVyLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBiYWNrZ3JvdW5kOiAjMTIxMjEyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI4MjgyODtcbiAgZ2FwOiA4cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uYnVsay1kZWxldGUtaGNlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmJ1bGstZGVsZXRlLWhjZWxsLXNvcnRhYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cztcbiAgZ2FwOiA0cHg7XG59XG5cbi5idWxrLWRlbGV0ZS1oY2VsbC1zb3J0YWJsZTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vKiBTb3J0IGFycm93cyB2aWEgcHNldWRvLWVsZW1lbnRzICovXG4uYnVsay1kZWxldGUtaGNlbGwtc29ydC1hc2M6OmFmdGVyLFxuLmJ1bGstZGVsZXRlLWhjZWxsLXNvcnQtZGVzYzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmJ1bGstZGVsZXRlLWhjZWxsLXNvcnQtYXNjOjphZnRlciB7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMWRiOTU0O1xufVxuXG4uYnVsay1kZWxldGUtaGNlbGwtc29ydC1kZXNjOjphZnRlciB7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMWRiOTU0O1xufVxuXG4vKiBIZWFkZXIgY2VsbCB3aWR0aHMgLSBtdXN0IG1hdGNoIGl0ZW0gY29sdW1ucyAqL1xuLmJ1bGstZGVsZXRlLWhjZWxsLW51bSB7XG4gIHdpZHRoOiAzMnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5idWxrLWRlbGV0ZS1oY2VsbC1jaGVjayB7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5idWxrLWRlbGV0ZS1oY2VsbC1pbWcge1xuICB3aWR0aDogNDBweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5idWxrLWRlbGV0ZS1oY2VsbC1uYW1lIHtcbiAgZmxleDogMztcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4uYnVsay1kZWxldGUtaGNlbGwtYXJ0aXN0IHtcbiAgZmxleDogMjtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4uYnVsay1kZWxldGUtaGNlbGwtYWxidW0ge1xuICBmbGV4OiAyO1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5idWxrLWRlbGV0ZS1oY2VsbC1hZGRlZGJ5IHtcbiAgd2lkdGg6IDEzMHB4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmJ1bGstZGVsZXRlLWhjZWxsLWFkZGVkYXQge1xuICB3aWR0aDogOTBweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5idWxrLWRlbGV0ZS1oY2VsbC1wbGF5IHtcbiAgd2lkdGg6IDE4MHB4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLyogPT09PT09PT09PSBUcmFjayBMaXN0ID09PT09PT09PT0gKi9cbi5idWxrLWRlbGV0ZS1saXN0IHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMDtcbiAgbWluLWhlaWdodDogNDAwcHg7XG59XG5cbi5idWxrLWRlbGV0ZS12aXJ0dWFsLXdpbmRvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbn1cblxuLmJ1bGstZGVsZXRlLWVtcHR5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5idWxrLWRlbGV0ZS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNHB4IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cztcbiAgZ2FwOiA4cHg7XG4gIGhlaWdodDogNThweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmJ1bGstZGVsZXRlLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xufVxuXG4uYnVsay1kZWxldGUtaXRlbS5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjksIDE4NSwgODQsIDAuMSk7XG59XG5cbi5idWxrLWRlbGV0ZS10cmFjay1udW1iZXIge1xuICB3aWR0aDogMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idWxrLWRlbGV0ZS1wbGF5aW5nLWluZGljYXRvciB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJ1bGstZGVsZXRlLXBsYXlpbmctaW5kaWNhdG9yOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYmFja2dyb3VuZDogIzFkYjk1NDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IGJ1bGstZGVsZXRlLXB1bHNlIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJ1bGstZGVsZXRlLXB1bHNlIHtcbiAgMCUsIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG4gIDUwJSB7IG9wYWNpdHk6IDAuNTsgfVxufVxuXG4uYnVsay1kZWxldGUtdHJhY2staW1hZ2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogIzI4MjgyODtcbn1cblxuLmJ1bGstZGVsZXRlLXRyYWNrLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5idWxrLWRlbGV0ZS1pdGVtLWluZm8ge1xuICBmbGV4OiAzO1xuICBtaW4td2lkdGg6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYnVsay1kZWxldGUtaXRlbS10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG5cbi5idWxrLWRlbGV0ZS1pdGVtLXRpdGxlOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5idWxrLWRlbGV0ZS1pdGVtLWFydGlzdCB7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBmb250LXNpemU6IDExcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uYnVsay1kZWxldGUtaXRlbS1hbGJ1bSB7XG4gIGNvbG9yOiAjNzI3MjcyO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vKiBBZGRlZCBCeSBjb2x1bW4gKi9cbi5idWxrLWRlbGV0ZS1pdGVtLWFkZGVkYnkge1xuICB3aWR0aDogMTMwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgbWluLXdpZHRoOiAwO1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbi5idWxrLWRlbGV0ZS1hZGRlZGJ5LWF2YXRhciB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xufVxuXG4uYnVsay1kZWxldGUtYWRkZWRieS1uYW1lIHtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi8qIEFkZGVkIEF0IGNvbHVtbiAqL1xuLmJ1bGstZGVsZXRlLWl0ZW0tYWRkZWRhdCB7XG4gIHdpZHRoOiA5MHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgY29sb3I6ICM3MjcyNzI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cblxuLyogPT09PT09PT09PSBQbGF5YmFjayBDb250cm9scyA9PT09PT09PT09ICovXG4uYnVsay1kZWxldGUtcGxheWJhY2stY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgd2lkdGg6IDE4MHB4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmJ1bGstZGVsZXRlLXBsYXliYWNrLWJ1dHRvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXM7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uYnVsay1kZWxldGUtcGxheWJhY2stYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzI4MjgyODtcbn1cblxuLmJ1bGstZGVsZXRlLXBsYXliYWNrLWJ1dHRvbiBzdmcge1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xufVxuXG4uYnVsay1kZWxldGUtc2xpZGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5idWxrLWRlbGV0ZS1zbGlkZXItdGltZSB7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnVsay1kZWxldGUtc2xpZGVyIHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiAzcHg7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogIzRhNGE0YTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1pbi13aWR0aDogNDBweDtcbn1cblxuLmJ1bGstZGVsZXRlLXNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnVsay1kZWxldGUtc2xpZGVyOmhvdmVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLyogPT09PT09PT09PSBDaGVja2JveCA9PT09PT09PT09ICovXG4uYnVsay1kZWxldGUtY2hlY2tib3gtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmJ1bGstZGVsZXRlLWNoZWNrYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idWxrLWRlbGV0ZS1jaGVja2JveC1jdXN0b20ge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjYjNiM2IzO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMyODI4Mjg7XG59XG5cbi5idWxrLWRlbGV0ZS1jaGVja2JveDpjaGVja2VkICsgLmJ1bGstZGVsZXRlLWNoZWNrYm94LWN1c3RvbSB7XG4gIGJhY2tncm91bmQ6ICMxZGI5NTQ7XG4gIGJvcmRlci1jb2xvcjogIzFkYjk1NDtcbn1cblxuLmJ1bGstZGVsZXRlLWNoZWNrYm94OmNoZWNrZWQgKyAuYnVsay1kZWxldGUtY2hlY2tib3gtY3VzdG9tOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyOiBzb2xpZCAjMDAwO1xuICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLyogPT09PT09PT09PSBCdXR0b25zID09PT09PT09PT0gKi9cbi5idWxrLWRlbGV0ZS1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMjgyODI4O1xufVxuXG4uYnVsay1kZWxldGUtc2VsZWN0LWFsbCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMWRiOTU0O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG59XG5cbi5idWxrLWRlbGV0ZS1zZWxlY3QtYWxsOmhvdmVyIHtcbiAgY29sb3I6ICMxZWQ3NjA7XG59XG5cbi5idWxrLWRlbGV0ZS1idXR0b24tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEycHg7XG59XG5cbi5idWxrLWRlbGV0ZS1idG4ge1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5idWxrLWRlbGV0ZS1idG4uY2FuY2VsIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MjcyNzI7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnVsay1kZWxldGUtYnRuLmNhbmNlbDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cblxuLmJ1bGstZGVsZXRlLWJ0bi5kZWxldGUge1xuICBiYWNrZ3JvdW5kOiAjZTkxNDI5O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ1bGstZGVsZXRlLWJ0bi5kZWxldGU6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiAjZjAzNzI3O1xufVxuXG4uYnVsay1kZWxldGUtYnRuLmRlbGV0ZTpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICM1MzUzNTM7XG4gIGNvbG9yOiAjMTgxODE4O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4vKiA9PT09PT09PT09IENvbmZpcm1hdGlvbiBNb2RhbCA9PT09PT09PT09ICovXG4uYnVsay1kZWxldGUtY29uZmlybS1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDAwO1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogIzE4MTgxODtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogNDgwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS1oZWFkZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS13YXJuaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMywgMjAsIDQxLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5idWxrLWRlbGV0ZS1jb25maXJtLXdhcm5pbmcgc3ZnIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgY29sb3I6ICNlOTE0Mjk7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS13YXJuaW5nIHAge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG5cbi5idWxrLWRlbGV0ZS1jb25maXJtLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbi5idWxrLWRlbGV0ZS1jb25maXJtLXRyYWNrLWxpc3Qge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS10cmFjay1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS10cmFjay1pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS10cmFjay1pbWFnZSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG59XG5cbi5idWxrLWRlbGV0ZS1jb25maXJtLXRyYWNrLWluZm8ge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMnB4O1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS10cmFjay10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS10cmFjay1hcnRpc3QtYWxidW0ge1xuICBjb2xvcjogI2EwYTBhMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbmApO1xuICAgICAgICAgIGV4cG9ydCBkZWZhdWx0IHNoZWV0O1xuICAgICAgICAiLCAiaW50ZXJmYWNlIFBsYXlsaXN0IHtcbiAgbmFtZTogc3RyaW5nO1xuICB1cmk6IHN0cmluZztcbiAgY2FuRGVsZXRlOiBib29sZWFuO1xuICBjYW5BZGRUbzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFRyYWNrIHtcbiAgdXJpOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgYXJ0aXN0OiBzdHJpbmc7XG4gIGFsYnVtOiBzdHJpbmc7XG4gIGFsYnVtVXJpOiBzdHJpbmc7XG4gIGltYWdlVXJsOiBzdHJpbmc7XG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIHVpZDogc3RyaW5nO1xuICBhZGRlZEJ5OiBzdHJpbmc7XG4gIGFkZGVkQnlJbWFnZVVybDogc3RyaW5nO1xuICBhZGRlZEF0OiBzdHJpbmc7XG59XG5cbnR5cGUgU29ydENvbHVtbiA9IFwibmFtZVwiIHwgXCJhcnRpc3RcIiB8IFwiYWxidW1cIiB8IFwiYWRkZWRCeVwiIHwgXCJhZGRlZEF0XCIgfCBcIlwiO1xudHlwZSBTb3J0RGlyZWN0aW9uID0gXCJhc2NcIiB8IFwiZGVzY1wiO1xuXG5hc3luYyBmdW5jdGlvbiBmZXRjaEFsbExpYnJhcnlDb250ZW50cygpOiBQcm9taXNlPG9iamVjdFtdPiB7XG4gIGNvbnN0IExpYnJhcnlBUEkgPSAoU3BpY2V0aWZ5IGFzIGFueSkuUGxhdGZvcm0/LkxpYnJhcnlBUEk7XG4gIGlmICghTGlicmFyeUFQSSkgcmV0dXJuIFtdO1xuXG4gIGNvbnN0IHBhZ2VTaXplID0gMTAwMDA7XG4gIGNvbnN0IGl0ZW1zOiBvYmplY3RbXSA9IFtdO1xuICBsZXQgb2Zmc2V0ID0gMDtcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgTGlicmFyeUFQSS5nZXRDb250ZW50cyh7XG4gICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgIGxpbWl0OiBwYWdlU2l6ZSxcbiAgICAgIGZsYXR0ZW5UcmVlOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcGFnZUl0ZW1zID0gcmVzcG9uc2U/Lml0ZW1zIHx8IFtdO1xuICAgIGl0ZW1zLnB1c2goLi4ucGFnZUl0ZW1zKTtcblxuICAgIGlmIChwYWdlSXRlbXMubGVuZ3RoIDwgcGFnZVNpemUpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIG9mZnNldCArPSBwYWdlU2l6ZTtcbiAgfVxuXG4gIHJldHVybiBpdGVtcztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoUGxheWxpc3RzV2l0aERlbGV0ZVBlcm1pc3Npb24oKTogUHJvbWlzZTxQbGF5bGlzdFtdPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgaXRlbXMgPSBhd2FpdCBmZXRjaEFsbExpYnJhcnlDb250ZW50cygpO1xuXG4gICAgY29uc3QgcGxheWxpc3RzOiBQbGF5bGlzdFtdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgIGNvbnN0IHBsYXlsaXN0ID0gaXRlbSBhcyB7IHR5cGU/OiBzdHJpbmc7IGNhbkRlbGV0ZT86IGJvb2xlYW47IGNhbkFkZFRvPzogYm9vbGVhbjsgbmFtZT86IHN0cmluZzsgdXJpPzogc3RyaW5nIH07XG4gICAgICBpZiAocGxheWxpc3QudHlwZSA9PT0gXCJwbGF5bGlzdFwiICYmIChwbGF5bGlzdC5jYW5EZWxldGUgfHwgcGxheWxpc3QuY2FuQWRkVG8pKSB7XG4gICAgICAgIHBsYXlsaXN0cy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBwbGF5bGlzdC5uYW1lIHx8IFwiVW5rbm93blwiLFxuICAgICAgICAgIHVyaTogcGxheWxpc3QudXJpIHx8IFwiXCIsXG4gICAgICAgICAgY2FuRGVsZXRlOiBwbGF5bGlzdC5jYW5EZWxldGUgfHwgZmFsc2UsXG4gICAgICAgICAgY2FuQWRkVG86IHBsYXlsaXN0LmNhbkFkZFRvIHx8IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGxheWxpc3RzO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWUobXM6IG51bWJlciB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XG4gIGlmIChtcyA9PSBudWxsIHx8IGlzTmFOKG1zKSB8fCBtcyA8PSAwKSByZXR1cm4gXCIwOjAwXCI7XG4gIGNvbnN0IHMgPSBNYXRoLmZsb29yKG1zIC8gMTAwMCk7XG4gIHJldHVybiBgJHtNYXRoLmZsb29yKHMgLyA2MCl9OiR7KHMgJSA2MCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShpc29TdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghaXNvU3RyKSByZXR1cm4gXCJcIjtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoaXNvU3RyKTtcbiAgICBpZiAoaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSByZXR1cm4gaXNvU3RyO1xuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHtcbiAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgbW9udGg6IFwic2hvcnRcIixcbiAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgfSk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBpc29TdHI7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUGxheWJhY2tDb250cm9sKHVyaTogc3RyaW5nLCBkdXJhdGlvbjogbnVtYmVyKTogSFRNTEVsZW1lbnQge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1wbGF5YmFjay1jb250cm9sc1wiO1xuICBjb250YWluZXIuZGF0YXNldC51cmkgPSB1cmk7XG5cbiAgY29uc3QgcGxheUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHBsYXlCdG4uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1wbGF5YmFjay1idXR0b25cIjtcbiAgcGxheUJ0bi5pbm5lckhUTUwgPSBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk04IDV2MTRsMTEtN3pcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjwvc3ZnPmA7XG5cbiAgcGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwbGF5ZXIgPSAoU3BpY2V0aWZ5IGFzIGFueSkuUGxheWVyO1xuICAgICAgaWYgKCFwbGF5ZXIpIHJldHVybjtcblxuICAgICAgY29uc3QgY3VycmVudFVyaSA9IHBsYXllcj8uZGF0YT8uaXRlbT8udXJpO1xuICAgICAgaWYgKGN1cnJlbnRVcmkgPT09IHVyaSkge1xuICAgICAgICBpZiAocGxheWVyPy5pc1BsYXlpbmcoKSkge1xuICAgICAgICAgIHBsYXllci5wYXVzZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXllci5wbGF5VXJpKHVyaSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAoU3BpY2V0aWZ5IGFzIGFueSkuUGxheWVyPy5wbGF5VXJpKHVyaSk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBzbGlkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzbGlkZXJDb250YWluZXIuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1zbGlkZXItY29udGFpbmVyXCI7XG5cbiAgY29uc3QgY3VycmVudFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY3VycmVudFRpbWUuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1zbGlkZXItdGltZVwiO1xuICBjdXJyZW50VGltZS50ZXh0Q29udGVudCA9IFwiMDowMFwiO1xuXG4gIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgc2xpZGVyLnR5cGUgPSBcInJhbmdlXCI7XG4gIHNsaWRlci5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLXNsaWRlclwiO1xuICBzbGlkZXIubWluID0gXCIwXCI7XG4gIHNsaWRlci5tYXggPSBkdXJhdGlvbiA+IDAgPyBkdXJhdGlvbi50b1N0cmluZygpIDogXCIxMDAwXCI7XG4gIHNsaWRlci52YWx1ZSA9IFwiMFwiO1xuICBzbGlkZXIuc3RlcCA9IFwiMTAwMFwiO1xuXG4gIGNvbnN0IHRvdGFsVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB0b3RhbFRpbWUuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1zbGlkZXItdGltZVwiO1xuICB0b3RhbFRpbWUudGV4dENvbnRlbnQgPSBmb3JtYXRUaW1lKGR1cmF0aW9uKTtcblxuICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICBjdXJyZW50VGltZS50ZXh0Q29udGVudCA9IGZvcm1hdFRpbWUocGFyc2VJbnQoc2xpZGVyLnZhbHVlKSk7XG4gIH0pO1xuXG4gIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgKFNwaWNldGlmeSBhcyBhbnkpLlBsYXllcj8uc2VlayhwYXJzZUludChzbGlkZXIudmFsdWUpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlZWs6XCIsIGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgc2xpZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRUaW1lKTtcbiAgc2xpZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNsaWRlcik7XG4gIHNsaWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3RhbFRpbWUpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5QnRuKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNsaWRlckNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVHJhY2tJbWFnZSh1cmw6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgY29uc3QgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW1nQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtdHJhY2staW1hZ2UtY29udGFpbmVyXCI7XG5cbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1nLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtdHJhY2staW1hZ2VcIjtcbiAgaW1nLnNyYyA9IHVybCB8fCBcIlwiO1xuICBpbWcubG9hZGluZyA9IFwibGF6eVwiO1xuXG4gIGltZy5vbmVycm9yID0gKCkgPT4ge1xuICAgIGltZy5zcmMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnJTNFJTNDcGF0aCBmaWxsPSclMjMyODI4MjgnIGQ9J00xMiAzdjEwLjU1Yy0uNTktLjM0LTEuMjctLjU1LTItLjU1LTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNFY3aDRWM2gtNnonLyUzRSUzQy9zdmclM0VcIjtcbiAgfTtcblxuICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgcmV0dXJuIGltZ0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGxheWluZ0luZGljYXRvcigpOiBIVE1MRWxlbWVudCB7XG4gIGNvbnN0IGluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluZGljYXRvci5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLXBsYXlpbmctaW5kaWNhdG9yXCI7XG4gIHJldHVybiBpbmRpY2F0b3I7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQbGF5bGlzdFRyYWNrcyhcbiAgcGxheWxpc3RVcmk6IHN0cmluZyxcbiAgb25Qcm9ncmVzcz86ICh0cmFja3M6IFRyYWNrW10sIHRvdGFsTG9hZGVkOiBudW1iZXIpID0+IHZvaWQsXG4gIGNoZWNrVXBUbz86IG51bWJlclxuKTogUHJvbWlzZTxUcmFja1tdPiB7XG4gIGxldCB0cmFja3M6IFRyYWNrW10gPSBbXTtcblxuICB0cnkge1xuICAgIGNvbnN0IFBsYXlsaXN0QVBJID0gKFNwaWNldGlmeSBhcyBhbnkpLlBsYXRmb3JtPy5QbGF5bGlzdEFQSTtcblxuICAgIGlmICghUGxheWxpc3RBUEkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsYXlsaXN0QVBJIG5vdCBhdmFpbGFibGVcIik7XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZVNpemUgPSAyMDA7XG4gICAgbGV0IG9mZnNldCA9IDA7XG5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBQbGF5bGlzdEFQSS5nZXRDb250ZW50cyhwbGF5bGlzdFVyaSwge1xuICAgICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgbGltaXQ6IHBhZ2VTaXplLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2U/Lml0ZW1zPy5sZW5ndGgpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiByZXNwb25zZS5pdGVtcykge1xuICAgICAgICBpZiAoIWl0ZW0/LnVyaSkgY29udGludWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IG5hbWUgPSBcIlVua25vd24gVHJhY2tcIjtcbiAgICAgICAgICBsZXQgYXJ0aXN0ID0gXCJVbmtub3duIEFydGlzdFwiO1xuICAgICAgICAgIGxldCBhbGJ1bSA9IFwiVW5rbm93biBBbGJ1bVwiO1xuICAgICAgICAgIGxldCBpbWFnZVVybCA9IFwiXCI7XG4gICAgICAgICAgbGV0IGR1cmF0aW9uID0gMDtcbiAgICAgICAgICBsZXQgdWlkID0gaXRlbS51aWQgfHwgXCJcIjtcbiAgICAgICAgICBsZXQgYWRkZWRCeSA9IFwiXCI7XG4gICAgICAgICAgbGV0IGFkZGVkQXQgPSBcIlwiO1xuXG4gICAgICAgICAgaWYgKGl0ZW0ubmFtZSkgbmFtZSA9IGl0ZW0ubmFtZTtcbiAgICAgICAgICBpZiAoaXRlbS5hcnRpc3RzPy5bMF0/Lm5hbWUpIGFydGlzdCA9IGl0ZW0uYXJ0aXN0c1swXS5uYW1lO1xuICAgICAgICAgIGlmIChpdGVtLmFsYnVtPy5uYW1lKSBhbGJ1bSA9IGl0ZW0uYWxidW0ubmFtZTtcbiAgICAgICAgICBjb25zdCBhbGJ1bVVyaSA9IGl0ZW0uYWxidW0/LnVyaSB8fCBcIlwiO1xuICAgICAgICAgIGlmIChpdGVtLmFsYnVtPy5pbWFnZXM/LlswXT8udXJsKSBpbWFnZVVybCA9IGl0ZW0uYWxidW0uaW1hZ2VzWzBdLnVybDtcbiAgICAgICAgICBlbHNlIGlmIChpdGVtLmFsYnVtPy5jb3ZlckFydD8uc291cmNlcz8uWzBdPy51cmwpIGltYWdlVXJsID0gaXRlbS5hbGJ1bS5jb3ZlckFydC5zb3VyY2VzWzBdLnVybDtcblxuICAgICAgICAgIGNvbnN0IGl0ZW1BbnkgPSBpdGVtIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICAgICAgICAgIGxldCBkdXJhdGlvblZhbDogbnVtYmVyID0gMDtcbiAgICAgICAgICBpZiAoaXRlbUFueS5kdXJhdGlvbiAmJiB0eXBlb2YgaXRlbUFueS5kdXJhdGlvbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgY29uc3QgZHVyID0gaXRlbUFueS5kdXJhdGlvbiBhcyB7IHRvdGFsTXM/OiBudW1iZXI7IG1pbGxpc2Vjb25kcz86IG51bWJlciB9O1xuICAgICAgICAgICAgaWYgKGR1ci50b3RhbE1zKSBkdXJhdGlvblZhbCA9IGR1ci50b3RhbE1zO1xuICAgICAgICAgICAgZWxzZSBpZiAoZHVyLm1pbGxpc2Vjb25kcykgZHVyYXRpb25WYWwgPSBkdXIubWlsbGlzZWNvbmRzO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGl0ZW1BbnkuZHVyYXRpb24gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGR1cmF0aW9uVmFsID0gaXRlbUFueS5kdXJhdGlvbjtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtQW55LmR1cmF0aW9uTXMgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGR1cmF0aW9uVmFsID0gaXRlbUFueS5kdXJhdGlvbk1zO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uVmFsO1xuXG4gICAgICAgICAgLy8gRXh0cmFjdCBhZGRlZEJ5ICh3aG8gYWRkZWQgdGhlIHRyYWNrKVxuICAgICAgICAgIGxldCBhZGRlZEJ5SW1hZ2VVcmwgPSBcIlwiO1xuICAgICAgICAgIGNvbnN0IGFkZGVkQnlGaWVsZCA9IGl0ZW1BbnkuYWRkZWRCeSB8fCBpdGVtQW55LmFkZGVkX2J5O1xuICAgICAgICAgIGlmIChhZGRlZEJ5RmllbGQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYWRkZWRCeUZpZWxkID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgIGFkZGVkQnkgPSBhZGRlZEJ5RmllbGQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhZGRlZEJ5RmllbGQgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgY29uc3QgYWIgPSBhZGRlZEJ5RmllbGQgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gICAgICAgICAgICAgIGFkZGVkQnkgPSAoYWIubmFtZSB8fCBhYi5kaXNwbGF5TmFtZSB8fCBhYi5kaXNwbGF5X25hbWUgfHwgYWIuaWQgfHwgXCJcIikgYXMgc3RyaW5nO1xuICAgICAgICAgICAgICBhZGRlZEJ5SW1hZ2VVcmwgPSAoYWIuaW1hZ2VVcmwgfHwgYWIuYXZhdGFyIHx8IChhYi5pbWFnZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik/LnVybCB8fCBhYi5waWN0dXJlIHx8IFwiXCIpIGFzIHN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBFeHRyYWN0IGFkZGVkQXQgKHdoZW4gdGhlIHRyYWNrIHdhcyBhZGRlZClcbiAgICAgICAgICBjb25zdCBhZGRlZEF0RmllbGQgPSBpdGVtQW55LmFkZGVkQXQgfHwgaXRlbUFueS5hZGRlZF9hdDtcbiAgICAgICAgICBpZiAoYWRkZWRBdEZpZWxkKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFkZGVkQXRGaWVsZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICBhZGRlZEF0ID0gYWRkZWRBdEZpZWxkO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYWRkZWRBdEZpZWxkID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGFhID0gYWRkZWRBdEZpZWxkIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICAgICAgICAgICAgICBhZGRlZEF0ID0gKGFhLmlzb1N0cmluZyB8fCBhYS5pc29fc3RyIHx8IFwiXCIpIGFzIHN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0cmFja3MucHVzaCh7XG4gICAgICAgICAgICB1cmk6IGl0ZW0udXJpLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGFydGlzdCxcbiAgICAgICAgICAgIGFsYnVtLFxuICAgICAgICAgICAgYWxidW1VcmksXG4gICAgICAgICAgICBpbWFnZVVybCxcbiAgICAgICAgICAgIGR1cmF0aW9uLFxuICAgICAgICAgICAgdWlkLFxuICAgICAgICAgICAgYWRkZWRCeSxcbiAgICAgICAgICAgIGFkZGVkQnlJbWFnZVVybCxcbiAgICAgICAgICAgIGFkZGVkQXQsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJTa2lwcGluZyBiYWQgdHJhY2sgaXRlbTpcIiwgZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb25Qcm9ncmVzcz8uKHRyYWNrcywgdHJhY2tzLmxlbmd0aCk7XG5cbiAgICAgIGlmIChjaGVja1VwVG8gJiYgdHJhY2tzLmxlbmd0aCA+PSBjaGVja1VwVG8pIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXNwb25zZS5pdGVtcy5sZW5ndGggPCBwYWdlU2l6ZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgb2Zmc2V0ICs9IHBhZ2VTaXplO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwbGF5bGlzdCB0cmFja3M6XCIsIGUpO1xuICAgIHRocm93IGU7XG4gIH1cblxuICByZXR1cm4gdHJhY2tzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlVHJhY2tzRnJvbVBsYXlsaXN0KFxuICBwbGF5bGlzdFVyaTogc3RyaW5nLFxuICB0cmFja3M6IHsgdXJpOiBzdHJpbmc7IHVpZDogc3RyaW5nIH1bXVxuKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIGNvbnN0IFBsYXlsaXN0QVBJID0gKFNwaWNldGlmeSBhcyBhbnkpLlBsYXRmb3JtPy5QbGF5bGlzdEFQSTtcblxuICBpZiAoIVBsYXlsaXN0QVBJKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB0cmFja0xpc3QgPSB0cmFja3MubWFwKHQgPT4gKHtcbiAgICAgIHVyaTogdC51cmksXG4gICAgICB1aWQ6IHQudWlkXG4gICAgfSkpO1xuICAgIGF3YWl0IFBsYXlsaXN0QVBJLnJlbW92ZShwbGF5bGlzdFVyaSwgdHJhY2tMaXN0KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBQbGF5bGlzdEFQSS5yZW1vdmUocGxheWxpc3RVcmksIHRyYWNrcy5tYXAodCA9PiB0LnVyaSkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZTIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJEZWxldGUgZmFpbGVkOlwiLCBlMik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlbGV0ZUNvbmZpcm1Nb2RhbChcbiAgdHJhY2tzOiBUcmFja1tdLFxuICBwbGF5bGlzdE5hbWU6IHN0cmluZyxcbiAgb25Db25maXJtOiAoKSA9PiB2b2lkLFxuICBvbkNhbmNlbDogKCkgPT4gdm9pZFxuKSB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvdmVybGF5LmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY29uZmlybS1vdmVybGF5XCI7XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1jb25maXJtLWNvbnRlbnRcIjtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1jb25maXJtLWhlYWRlclwiO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkRlbGV0ZSBUcmFja3NcIjtcblxuICBjb25zdCB3YXJuaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2FybmluZy5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWNvbmZpcm0td2FybmluZ1wiO1xuXG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKTtcbiAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicGF0aFwiKTtcbiAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwiY3VycmVudENvbG9yXCIpO1xuICBwYXRoLnNldEF0dHJpYnV0ZShcImRcIiwgXCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMSAxNWgtMnYtMmgydjJ6bTAtNGgtMlY3aDJ2NnpcIik7XG4gIHN2Zy5hcHBlbmRDaGlsZChwYXRoKTtcblxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJUaGlzIHdpbGwgcGVybWFuZW50bHkgcmVtb3ZlIFwiKSk7XG4gIGNvbnN0IHN0cm9uZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIpO1xuICBzdHJvbmcxLnRleHRDb250ZW50ID0gdHJhY2tzLmxlbmd0aC50b1N0cmluZygpO1xuICBwLmFwcGVuZENoaWxkKHN0cm9uZzEpO1xuICBwLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiIHRyYWNrKHMpIGZyb20gXCIpKTtcbiAgY29uc3Qgc3Ryb25nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIik7XG4gIHN0cm9uZzIudGV4dENvbnRlbnQgPSBwbGF5bGlzdE5hbWU7XG4gIHAuYXBwZW5kQ2hpbGQoc3Ryb25nMik7XG4gIHAuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIuIFRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmUuXCIpKTtcblxuICB3YXJuaW5nLmFwcGVuZENoaWxkKHN2Zyk7XG4gIHdhcm5pbmcuYXBwZW5kQ2hpbGQocCk7XG5cbiAgY29uc3QgdHJhY2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdHJhY2tMaXN0LmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY29uZmlybS10cmFjay1saXN0XCI7XG5cbiAgZm9yIChjb25zdCB0cmFjayBvZiB0cmFja3MpIHtcbiAgICBjb25zdCB0cmFja0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRyYWNrSXRlbS5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWNvbmZpcm0tdHJhY2staXRlbVwiO1xuXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWcuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1jb25maXJtLXRyYWNrLWltYWdlXCI7XG4gICAgaW1nLnNyYyA9IHRyYWNrLmltYWdlVXJsIHx8IFwiaHR0cHM6Ly93d3cuc2Nkbi5jby9pL19nbG9iYWwvZmF2aWNvbi5wbmdcIjtcbiAgICBpbWcuYWx0ID0gXCJcIjtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGluZm8uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1jb25maXJtLXRyYWNrLWluZm9cIjtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdGl0bGUuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1jb25maXJtLXRyYWNrLXRpdGxlXCI7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0cmFjay5uYW1lO1xuXG4gICAgY29uc3QgYXJ0aXN0QWxidW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBhcnRpc3RBbGJ1bS5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWNvbmZpcm0tdHJhY2stYXJ0aXN0LWFsYnVtXCI7XG4gICAgYXJ0aXN0QWxidW0udGV4dENvbnRlbnQgPSBgJHt0cmFjay5hcnRpc3R9IFx1MjAxNCAke3RyYWNrLmFsYnVtfWA7XG5cbiAgICBpbmZvLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKGFydGlzdEFsYnVtKTtcbiAgICB0cmFja0l0ZW0uYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICB0cmFja0l0ZW0uYXBwZW5kQ2hpbGQoaW5mbyk7XG4gICAgdHJhY2tMaXN0LmFwcGVuZENoaWxkKHRyYWNrSXRlbSk7XG4gIH1cblxuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9ucy5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWNvbmZpcm0tYnV0dG9uc1wiO1xuXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ0bi5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWJ0biBjYW5jZWxcIjtcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICBvbkNhbmNlbCgpO1xuICB9KTtcblxuICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uZmlybUJ0bi5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWJ0biBkZWxldGVcIjtcbiAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgIG9uQ29uZmlybSgpO1xuICB9KTtcblxuICBidXR0b25zLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY29uZmlybUJ0bik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHdhcm5pbmcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRyYWNrTGlzdCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XG5cbiAgb3ZlcmxheS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcblxuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gb3ZlcmxheSkge1xuICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgIG9uQ2FuY2VsKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vZGFsKHRyYWNrVXJpczogc3RyaW5nW10sIHByZWZlcnJlZFBsYXlsaXN0VXJpPzogc3RyaW5nIHwgbnVsbCkge1xuICBsZXQgYWxsUGxheWxpc3RzOiBQbGF5bGlzdFtdID0gW107XG4gIGxldCBjdXJyZW50VHJhY2tzOiBUcmFja1tdID0gW107XG4gIGxldCBmaWx0ZXJlZFRyYWNrczogVHJhY2tbXSA9IFtdO1xuICBjb25zdCBzZWxlY3RlZFNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBsZXQgY3VycmVudFBsYXlsaXN0VXJpOiBzdHJpbmcgfCBudWxsID0gcHJlZmVycmVkUGxheWxpc3RVcmkgfHwgbnVsbDtcbiAgbGV0IHVwZGF0ZUludGVydmFsOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuICBsZXQgc29ydENvbHVtbjogU29ydENvbHVtbiA9IFwiXCI7XG4gIGxldCBzb3J0RGlyZWN0aW9uOiBTb3J0RGlyZWN0aW9uID0gXCJhc2NcIjtcbiAgbGV0IHBlbmRpbmdSZXF1ZXN0ID0gMDtcblxuICBjb25zdCBnZXRTZWxlY3Rpb25LZXkgPSAodHJhY2s6IFRyYWNrKSA9PiB0cmFjay51aWQgfHwgdHJhY2sudXJpO1xuXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHJlbmRlcmVkVHJhY2tzUmVmOiBUcmFja1tdID0gW107XG4gIGxldCBzY3JvbGxMaXN0ZW5lckFkZGVkID0gZmFsc2U7XG4gIG1vZGFsLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtbW9kYWxcIjtcblxuICBjb25zdCBjbGVhbnVwQW5kQ2xvc2UgPSAoKSA9PiB7XG4gICAgaWYgKHVwZGF0ZUludGVydmFsKSB7XG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh1cGRhdGVJbnRlcnZhbCk7XG4gICAgICB1cGRhdGVJbnRlcnZhbCA9IG51bGw7XG4gICAgfVxuICAgIG1vZGFsLnJlbW92ZSgpO1xuICB9O1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY29udGVudFwiO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlci5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWhlYWRlclwiO1xuXG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJCdWxrIERlbGV0ZSBmcm9tIFBsYXlsaXN0XCI7XG5cbiAgY29uc3QgaGVhZGVyUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJSaWdodC5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWhlYWRlci1yaWdodFwiO1xuXG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgZ2l0aHViTGluay5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWdpdGh1YlwiO1xuICBnaXRodWJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9KaW1NYXJsZXk0MjAvc3BpY2V0aWZ5LWV4dGVuc2lvblwiO1xuICBnaXRodWJMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gIGdpdGh1YkxpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG4gIGdpdGh1Ykxpbmsuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIk9wZW4gR2l0SHViIHJlcG9zaXRvcnlcIik7XG4gIGdpdGh1YkxpbmsuaW5uZXJIVE1MID0gYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyelwiLz48L3N2Zz5gO1xuXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2xvc2VCdG4uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1jbG9zZVwiO1xuICBjbG9zZUJ0bi5pbm5lckhUTUwgPSBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6XCIvPjwvc3ZnPmA7XG5cbiAgaGVhZGVyUmlnaHQuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG4gIGhlYWRlclJpZ2h0LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyUmlnaHQpO1xuXG4gIGNvbnN0IHBsYXlsaXN0U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5bGlzdFNlbGVjdG9yLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtcGxheWxpc3Qtc2VsZWN0b3JcIjtcblxuICBjb25zdCBwbGF5bGlzdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBwbGF5bGlzdExhYmVsLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtcGxheWxpc3QtbGFiZWxcIjtcbiAgcGxheWxpc3RMYWJlbC50ZXh0Q29udGVudCA9IFwiU2VsZWN0IFBsYXlsaXN0XCI7XG5cbiAgY29uc3QgcGxheWxpc3RTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBwbGF5bGlzdFNlbGVjdC5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLXBsYXlsaXN0LXNlbGVjdFwiO1xuXG4gIGNvbnN0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgcGxhY2Vob2xkZXIudmFsdWUgPSBcIlwiO1xuICBwbGFjZWhvbGRlci50ZXh0Q29udGVudCA9IFwiU2VsZWN0IGEgcGxheWxpc3RcIjtcbiAgcGxhY2Vob2xkZXIuZGlzYWJsZWQgPSB0cnVlO1xuICBwbGF5bGlzdFNlbGVjdC5hcHBlbmRDaGlsZChwbGFjZWhvbGRlcik7XG5cbiAgcGxheWxpc3RTZWxlY3Rvci5hcHBlbmRDaGlsZChwbGF5bGlzdExhYmVsKTtcbiAgcGxheWxpc3RTZWxlY3Rvci5hcHBlbmRDaGlsZChwbGF5bGlzdFNlbGVjdCk7XG5cbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2VhcmNoQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtc2VhcmNoXCI7XG5cbiAgY29uc3Qgc2VhcmNoV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlYXJjaFdyYXBwZXIuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1zZWFyY2gtd3JhcHBlclwiO1xuXG4gIGNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWFyY2hJY29uLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtc2VhcmNoLWljb25cIjtcbiAgc2VhcmNoSWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdBNi40NzEgNi40NzEgMCAwMDE2IDkuNSA2LjUgNi41IDAgMTA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0elwiLz48L3N2Zz5gO1xuXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBzZWFyY2hJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIHNlYXJjaElucHV0LnBsYWNlaG9sZGVyID0gXCJTZWFyY2ggdHJhY2tzIGluIHBsYXlsaXN0Li4uXCI7XG4gIHNlYXJjaElucHV0LmRpc2FibGVkID0gdHJ1ZTtcblxuICBzZWFyY2hXcmFwcGVyLmFwcGVuZENoaWxkKHNlYXJjaEljb24pO1xuICBzZWFyY2hXcmFwcGVyLmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcbiAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaFdyYXBwZXIpO1xuXG4gIGNvbnN0IHRyYWNrSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRyYWNrSW5mby5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLXRyYWNrLWluZm9cIjtcbiAgdHJhY2tJbmZvLmlubmVySFRNTCA9IGA8cD48c3Bhbj4wPC9zcGFuPiB0cmFjayhzKSBzZWxlY3RlZCBmcm9tIHBsYXlsaXN0PC9wPmA7XG5cbiAgLy8gLS0tIFNvcnRhYmxlIGhlYWRlciBiYXIgLS0tXG4gIGNvbnN0IGhlYWRlckJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlckJhci5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWhlYWRlci1iYXJcIjtcblxuICBjb25zdCBzb3J0YWJsZUNvbHVtbnM6IHsga2V5OiBTb3J0Q29sdW1uOyBsYWJlbDogc3RyaW5nOyBjbGFzc05hbWU6IHN0cmluZyB9W10gPSBbXG4gICAgeyBrZXk6IFwiXCIgYXMgU29ydENvbHVtbiwgbGFiZWw6IFwiI1wiLCBjbGFzc05hbWU6IFwiYnVsay1kZWxldGUtaGNlbGwtbnVtXCIgfSxcbiAgICB7IGtleTogXCJcIiBhcyBTb3J0Q29sdW1uLCBsYWJlbDogXCJcIiwgY2xhc3NOYW1lOiBcImJ1bGstZGVsZXRlLWhjZWxsLWNoZWNrXCIgfSxcbiAgICB7IGtleTogXCJcIiBhcyBTb3J0Q29sdW1uLCBsYWJlbDogXCJcIiwgY2xhc3NOYW1lOiBcImJ1bGstZGVsZXRlLWhjZWxsLWltZ1wiIH0sXG4gICAgeyBrZXk6IFwibmFtZVwiLCBsYWJlbDogXCJUaXRsZVwiLCBjbGFzc05hbWU6IFwiYnVsay1kZWxldGUtaGNlbGwtbmFtZVwiIH0sXG4gICAgeyBrZXk6IFwiYXJ0aXN0XCIsIGxhYmVsOiBcIkFydGlzdFwiLCBjbGFzc05hbWU6IFwiYnVsay1kZWxldGUtaGNlbGwtYXJ0aXN0XCIgfSxcbiAgICB7IGtleTogXCJhbGJ1bVwiLCBsYWJlbDogXCJBbGJ1bVwiLCBjbGFzc05hbWU6IFwiYnVsay1kZWxldGUtaGNlbGwtYWxidW1cIiB9LFxuICAgIHsga2V5OiBcImFkZGVkQnlcIiwgbGFiZWw6IFwiQWRkZWQgQnlcIiwgY2xhc3NOYW1lOiBcImJ1bGstZGVsZXRlLWhjZWxsLWFkZGVkYnlcIiB9LFxuICAgIHsga2V5OiBcImFkZGVkQXRcIiwgbGFiZWw6IFwiQWRkZWQgQXRcIiwgY2xhc3NOYW1lOiBcImJ1bGstZGVsZXRlLWhjZWxsLWFkZGVkYXRcIiB9LFxuICAgIHsga2V5OiBcIlwiIGFzIFNvcnRDb2x1bW4sIGxhYmVsOiBcIlwiLCBjbGFzc05hbWU6IFwiYnVsay1kZWxldGUtaGNlbGwtcGxheVwiIH0sXG4gIF07XG5cbiAgY29uc3QgaGVhZGVyQ2VsbHM6IE1hcDxzdHJpbmcsIEhUTUxFbGVtZW50PiA9IG5ldyBNYXAoKTtcblxuICBmb3IgKGNvbnN0IGNvbCBvZiBzb3J0YWJsZUNvbHVtbnMpIHtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjZWxsLmNsYXNzTmFtZSA9IGBidWxrLWRlbGV0ZS1oY2VsbCAke2NvbC5jbGFzc05hbWV9YDtcbiAgICBpZiAoY29sLmtleSkge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiYnVsay1kZWxldGUtaGNlbGwtc29ydGFibGVcIik7XG4gICAgICBjZWxsLnRleHRDb250ZW50ID0gY29sLmxhYmVsO1xuICAgICAgY2VsbC5kYXRhc2V0LnNvcnRLZXkgPSBjb2wua2V5O1xuICAgICAgaGVhZGVyQ2VsbHMuc2V0KGNvbC5rZXksIGNlbGwpO1xuXG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChzb3J0Q29sdW1uID09PSBjb2wua2V5KSB7XG4gICAgICAgICAgLy8gVG9nZ2xlIGRpcmVjdGlvblxuICAgICAgICAgIHNvcnREaXJlY3Rpb24gPSBzb3J0RGlyZWN0aW9uID09PSBcImFzY1wiID8gXCJkZXNjXCIgOiBcImFzY1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNvcnRDb2x1bW4gPSBjb2wua2V5O1xuICAgICAgICAgIHNvcnREaXJlY3Rpb24gPSBcImFzY1wiO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZVNvcnRJbmRpY2F0b3JzKCk7XG4gICAgICAgIGFwcGx5U29ydEFuZFJlbmRlcigpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBjb2wubGFiZWw7XG4gICAgfVxuICAgIGhlYWRlckJhci5hcHBlbmRDaGlsZChjZWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNvcnRJbmRpY2F0b3JzKCkge1xuICAgIGhlYWRlckNlbGxzLmZvckVhY2goKGNlbGwsIGtleSkgPT4ge1xuICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiYnVsay1kZWxldGUtaGNlbGwtc29ydC1hc2NcIiwgXCJidWxrLWRlbGV0ZS1oY2VsbC1zb3J0LWRlc2NcIik7XG4gICAgICBpZiAoa2V5ID09PSBzb3J0Q29sdW1uKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChzb3J0RGlyZWN0aW9uID09PSBcImFzY1wiID8gXCJidWxrLWRlbGV0ZS1oY2VsbC1zb3J0LWFzY1wiIDogXCJidWxrLWRlbGV0ZS1oY2VsbC1zb3J0LWRlc2NcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wYXJlVHJhY2tzKGE6IFRyYWNrLCBiOiBUcmFjaywgY29sOiBTb3J0Q29sdW1uLCBkaXI6IFNvcnREaXJlY3Rpb24pOiBudW1iZXIge1xuICAgIGxldCByZXN1bHQgPSAwO1xuICAgIHN3aXRjaCAoY29sKSB7XG4gICAgICBjYXNlIFwibmFtZVwiOlxuICAgICAgICByZXN1bHQgPSBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJhcnRpc3RcIjpcbiAgICAgICAgcmVzdWx0ID0gYS5hcnRpc3QubG9jYWxlQ29tcGFyZShiLmFydGlzdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImFsYnVtXCI6XG4gICAgICAgIHJlc3VsdCA9IGEuYWxidW0ubG9jYWxlQ29tcGFyZShiLmFsYnVtKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiYWRkZWRCeVwiOlxuICAgICAgICByZXN1bHQgPSBhLmFkZGVkQnkubG9jYWxlQ29tcGFyZShiLmFkZGVkQnkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJhZGRlZEF0XCI6XG4gICAgICAgIGlmICghYS5hZGRlZEF0ICYmICFiLmFkZGVkQXQpIHJlc3VsdCA9IDA7XG4gICAgICAgIGVsc2UgaWYgKCFhLmFkZGVkQXQpIHJlc3VsdCA9IDE7XG4gICAgICAgIGVsc2UgaWYgKCFiLmFkZGVkQXQpIHJlc3VsdCA9IC0xO1xuICAgICAgICBlbHNlIGlmIChhLmFkZGVkQXQgPCBiLmFkZGVkQXQpIHJlc3VsdCA9IC0xO1xuICAgICAgICBlbHNlIGlmIChhLmFkZGVkQXQgPiBiLmFkZGVkQXQpIHJlc3VsdCA9IDE7XG4gICAgICAgIGVsc2UgcmVzdWx0ID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBkaXIgPT09IFwiYXNjXCIgPyByZXN1bHQgOiAtcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlTb3J0QW5kUmVuZGVyKCkge1xuICAgIGlmIChzb3J0Q29sdW1uKSB7XG4gICAgICBmaWx0ZXJlZFRyYWNrcyA9IFsuLi5maWx0ZXJlZFRyYWNrc10uc29ydCgoYSwgYikgPT4gY29tcGFyZVRyYWNrcyhhLCBiLCBzb3J0Q29sdW1uLCBzb3J0RGlyZWN0aW9uKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlc3RvcmUgb3JpZ2luYWwgb3JkZXIgKGFzIGxvYWRlZCBmcm9tIEFQSSlcbiAgICAgIGZpbHRlcmVkVHJhY2tzID0gWy4uLmN1cnJlbnRUcmFja3NdLmZpbHRlcih0ID0+XG4gICAgICAgIHQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaElucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAgIHQuYXJ0aXN0LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoSW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgdC5hbGJ1bS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaElucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCkpXG4gICAgICApO1xuICAgIH1cbiAgICByZW5kZXJUcmFja3MoZmlsdGVyZWRUcmFja3MpO1xuICAgIHVwZGF0ZUJ1dHRvblN0YXRlKCk7XG4gIH1cblxuICBjb25zdCB0cmFja0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0cmFja0xpc3QuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1saXN0XCI7XG5cbiAgY29uc3QgZW1wdHlTdGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVtcHR5U3RhdGUuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1lbXB0eVwiO1xuICBlbXB0eVN0YXRlLnRleHRDb250ZW50ID0gXCJTZWxlY3QgYSBwbGF5bGlzdCBmaXJzdFwiO1xuICB0cmFja0xpc3QuYXBwZW5kQ2hpbGQoZW1wdHlTdGF0ZSk7XG5cbiAgY29uc3QgSVRFTV9IRUlHSFQgPSA1ODtcbiAgY29uc3QgQlVGRkVSID0gODtcblxuICBmdW5jdGlvbiByZW5kZXJUcmFja3ModHJhY2tzOiBUcmFja1tdKSB7XG4gICAgY29uc3Qgc2hvdWxkUmVzZXRTY3JvbGwgPSByZW5kZXJlZFRyYWNrc1JlZiAhPT0gdHJhY2tzO1xuICAgIHJlbmRlcmVkVHJhY2tzUmVmID0gdHJhY2tzO1xuXG4gICAgaWYgKHRyYWNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRyYWNrTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgY29uc3QgZW1wdHlNc2cgPSBzZWFyY2hJbnB1dC52YWx1ZSA/IFwiTm8gdHJhY2tzIGZvdW5kXCIgOiBcIlBsYXlsaXN0IGlzIGVtcHR5XCI7XG4gICAgICBjb25zdCBlbXB0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBlbXB0eS5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWVtcHR5XCI7XG4gICAgICBlbXB0eS50ZXh0Q29udGVudCA9IGVtcHR5TXNnO1xuICAgICAgdHJhY2tMaXN0LmFwcGVuZENoaWxkKGVtcHR5KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbXB0eVN0YXRlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB0cmFja0xpc3Quc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG5cbiAgICBpZiAoIXNjcm9sbExpc3RlbmVyQWRkZWQpIHtcbiAgICAgIHNjcm9sbExpc3RlbmVyQWRkZWQgPSB0cnVlO1xuICAgICAgdHJhY2tMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgICByZW5kZXJUcmFja3MocmVuZGVyZWRUcmFja3NSZWYpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IHNwYWNlciA9IHRyYWNrTGlzdC5xdWVyeVNlbGVjdG9yKFwiLmJ1bGstZGVsZXRlLXZpcnR1YWwtc3BhY2VyXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICghc3BhY2VyKSB7XG4gICAgICBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc3BhY2VyLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtdmlydHVhbC1zcGFjZXJcIjtcbiAgICAgIHRyYWNrTGlzdC5hcHBlbmRDaGlsZChzcGFjZXIpO1xuICAgIH1cblxuICAgIGxldCB3aW5kb3dFbCA9IHRyYWNrTGlzdC5xdWVyeVNlbGVjdG9yKFwiLmJ1bGstZGVsZXRlLXZpcnR1YWwtd2luZG93XCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICghd2luZG93RWwpIHtcbiAgICAgIHdpbmRvd0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHdpbmRvd0VsLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtdmlydHVhbC13aW5kb3dcIjtcbiAgICAgIHRyYWNrTGlzdC5hcHBlbmRDaGlsZCh3aW5kb3dFbCk7XG4gICAgfVxuXG4gICAgaWYgKHNob3VsZFJlc2V0U2Nyb2xsKSB7XG4gICAgICB0cmFja0xpc3Quc2Nyb2xsVG9wID0gMDtcbiAgICB9XG5cbiAgICBjb25zdCB0b3RhbEhlaWdodCA9IHRyYWNrcy5sZW5ndGggKiBJVEVNX0hFSUdIVDtcbiAgICBzcGFjZXIuc3R5bGUuaGVpZ2h0ID0gYCR7dG90YWxIZWlnaHR9cHhgO1xuICAgIHNwYWNlci5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0cmFja0xpc3Quc2Nyb2xsVG9wO1xuICAgIGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gdHJhY2tMaXN0LmNsaWVudEhlaWdodDtcblxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBNYXRoLm1heCgwLCBNYXRoLmZsb29yKHNjcm9sbFRvcCAvIElURU1fSEVJR0hUKSAtIEJVRkZFUik7XG4gICAgY29uc3QgZW5kSW5kZXggPSBNYXRoLm1pbih0cmFja3MubGVuZ3RoLCBNYXRoLmNlaWwoKHNjcm9sbFRvcCArIHZpZXdwb3J0SGVpZ2h0KSAvIElURU1fSEVJR0hUKSArIEJVRkZFUik7XG5cbiAgICB3aW5kb3dFbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3N0YXJ0SW5kZXggKiBJVEVNX0hFSUdIVH1weClgO1xuICAgIHdpbmRvd0VsLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBjb25zdCBjdXJyZW50UGxheWluZ1VyaSA9IChTcGljZXRpZnkgYXMgYW55KS5QbGF5ZXI/LmRhdGE/Lml0ZW0/LnVyaSB8fCBudWxsO1xuXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPCBlbmRJbmRleDsgaSsrKSB7XG4gICAgICBjb25zdCB0cmFjayA9IHRyYWNrc1tpXTtcbiAgICAgIGNvbnN0IGlzUGxheWluZyA9IGN1cnJlbnRQbGF5aW5nVXJpID09PSB0cmFjay51cmk7XG5cbiAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaXRlbS5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWl0ZW1cIiArIChzZWxlY3RlZFNldC5oYXMoZ2V0U2VsZWN0aW9uS2V5KHRyYWNrKSkgPyBcIiBzZWxlY3RlZFwiIDogXCJcIik7XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtdXJpXCIsIHRyYWNrLnVyaSk7XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgaS50b1N0cmluZygpKTtcbiAgICAgIGl0ZW0uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG5cbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoXCIuYnVsay1kZWxldGUtY2hlY2tib3gtd3JhcHBlclwiKSB8fFxuICAgICAgICAgICAgKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KFwiLmJ1bGstZGVsZXRlLXBsYXliYWNrLWNvbnRyb2xzXCIpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSAhY2hlY2tib3guY2hlY2tlZDtcbiAgICAgICAgY29uc3Qga2V5ID0gZ2V0U2VsZWN0aW9uS2V5KHRyYWNrKTtcbiAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICBzZWxlY3RlZFNldC5hZGQoa2V5KTtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxlY3RlZFNldC5kZWxldGUoa2V5KTtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVCdXR0b25TdGF0ZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHRyYWNrTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICB0cmFja051bWJlci5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLXRyYWNrLW51bWJlclwiO1xuICAgICAgaWYgKGlzUGxheWluZykge1xuICAgICAgICB0cmFja051bWJlci5hcHBlbmRDaGlsZChjcmVhdGVQbGF5aW5nSW5kaWNhdG9yKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhY2tOdW1iZXIudGV4dENvbnRlbnQgPSAoaSArIDEpLnRvU3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGltYWdlID0gY3JlYXRlVHJhY2tJbWFnZSh0cmFjay5pbWFnZVVybCk7XG5cbiAgICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaW5mby5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWl0ZW0taW5mb1wiO1xuXG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgdGl0bGUuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1pdGVtLXRpdGxlXCI7XG4gICAgICB0aXRsZS5ocmVmID0gdHJhY2suYWxidW1Vcmk7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRyYWNrLm5hbWU7XG4gICAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAodHJhY2suYWxidW1Vcmkuc3RhcnRzV2l0aChcInNwb3RpZnk6YWxidW06XCIpKSB7XG4gICAgICAgICAgY29uc3QgcGF0aCA9IHRyYWNrLmFsYnVtVXJpLnJlcGxhY2UoXCJzcG90aWZ5OmFsYnVtOlwiLCBcIi9hbGJ1bS9cIik7XG4gICAgICAgICAgKFNwaWNldGlmeSBhcyBhbnkpLlBsYXRmb3JtPy5IaXN0b3J5Py5wdXNoKHBhdGgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgYXJ0aXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBhcnRpc3QuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1pdGVtLWFydGlzdFwiO1xuICAgICAgYXJ0aXN0LnRleHRDb250ZW50ID0gdHJhY2suYXJ0aXN0O1xuXG4gICAgICBjb25zdCBhbGJ1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgYWxidW0uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1pdGVtLWFsYnVtXCI7XG4gICAgICBhbGJ1bS50ZXh0Q29udGVudCA9IHRyYWNrLmFsYnVtO1xuXG4gICAgICBpbmZvLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgIGluZm8uYXBwZW5kQ2hpbGQoYXJ0aXN0KTtcbiAgICAgIGluZm8uYXBwZW5kQ2hpbGQoYWxidW0pO1xuXG4gICAgICAvLyBBZGRlZCBieSBjb2x1bW4gKG5hbWUgKyBvcHRpb25hbCBhdmF0YXIpXG4gICAgICBjb25zdCBhZGRlZEJ5RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYWRkZWRCeUVsLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtaXRlbS1hZGRlZGJ5XCI7XG4gICAgICBhZGRlZEJ5RWwudGl0bGUgPSB0cmFjay5hZGRlZEJ5ID8gYEFkZGVkIGJ5OiAke3RyYWNrLmFkZGVkQnl9YCA6IFwiXCI7XG5cbiAgICAgIGlmICh0cmFjay5hZGRlZEJ5SW1hZ2VVcmwpIHtcbiAgICAgICAgY29uc3QgYXZhdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgYXZhdGFyLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtYWRkZWRieS1hdmF0YXJcIjtcbiAgICAgICAgYXZhdGFyLnNyYyA9IHRyYWNrLmFkZGVkQnlJbWFnZVVybDtcbiAgICAgICAgYXZhdGFyLmFsdCA9IFwiXCI7XG4gICAgICAgIGF2YXRhci5sb2FkaW5nID0gXCJsYXp5XCI7XG4gICAgICAgIGF2YXRhci5vbmVycm9yID0gKCkgPT4geyBhdmF0YXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyB9O1xuICAgICAgICBhZGRlZEJ5RWwuYXBwZW5kQ2hpbGQoYXZhdGFyKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmFtZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIG5hbWVTcGFuLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtYWRkZWRieS1uYW1lXCI7XG4gICAgICBuYW1lU3Bhbi50ZXh0Q29udGVudCA9IHRyYWNrLmFkZGVkQnkgfHwgXCJcIjtcbiAgICAgIGFkZGVkQnlFbC5hcHBlbmRDaGlsZChuYW1lU3Bhbik7XG5cbiAgICAgIC8vIEFkZGVkIGF0IGNvbHVtbiAoZGF0ZSBvbmx5KVxuICAgICAgY29uc3QgYWRkZWRBdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBhZGRlZEF0RWwuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1pdGVtLWFkZGVkYXRcIjtcbiAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBmb3JtYXREYXRlKHRyYWNrLmFkZGVkQXQpO1xuICAgICAgYWRkZWRBdEVsLnRleHRDb250ZW50ID0gZm9ybWF0dGVkRGF0ZTtcbiAgICAgIGFkZGVkQXRFbC50aXRsZSA9IHRyYWNrLmFkZGVkQXQgPyBgQWRkZWQ6ICR7dHJhY2suYWRkZWRBdH1gIDogXCJcIjtcblxuICAgICAgY29uc3QgcGxheWJhY2sgPSBjcmVhdGVQbGF5YmFja0NvbnRyb2wodHJhY2sudXJpLCB0cmFjay5kdXJhdGlvbik7XG5cbiAgICAgIGNvbnN0IGNoZWNrYm94V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjaGVja2JveFdyYXBwZXIuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1jaGVja2JveC13cmFwcGVyXCI7XG5cbiAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgIGNoZWNrYm94LmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY2hlY2tib3hcIjtcbiAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBzZWxlY3RlZFNldC5oYXMoZ2V0U2VsZWN0aW9uS2V5KHRyYWNrKSk7XG5cbiAgICAgIGNvbnN0IGN1c3RvbUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGN1c3RvbUNoZWNrYm94LmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY2hlY2tib3gtY3VzdG9tXCI7XG5cbiAgICAgIGNoZWNrYm94V3JhcHBlci5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICBjaGVja2JveFdyYXBwZXIuYXBwZW5kQ2hpbGQoY3VzdG9tQ2hlY2tib3gpO1xuXG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgICBjb25zdCBrZXkgPSBnZXRTZWxlY3Rpb25LZXkodHJhY2spO1xuICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICBzZWxlY3RlZFNldC5hZGQoa2V5KTtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3RlZFNldC5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdGVtLmFwcGVuZENoaWxkKHRyYWNrTnVtYmVyKTtcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoY2hlY2tib3hXcmFwcGVyKTtcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgaXRlbS5hcHBlbmRDaGlsZChpbmZvKTtcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoYWRkZWRCeUVsKTtcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoYWRkZWRBdEVsKTtcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQocGxheWJhY2spO1xuICAgICAgd2luZG93RWwuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmlsdGVyVHJhY2tzKCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoSW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgZmlsdGVyZWQgPSBjdXJyZW50VHJhY2tzLmZpbHRlcih0ID0+XG4gICAgICB0Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeSkgfHxcbiAgICAgIHQuYXJ0aXN0LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkpIHx8XG4gICAgICB0LmFsYnVtLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkpXG4gICAgKTtcbiAgICBpZiAoc29ydENvbHVtbikge1xuICAgICAgZmlsdGVyZWQuc29ydCgoYSwgYikgPT4gY29tcGFyZVRyYWNrcyhhLCBiLCBzb3J0Q29sdW1uLCBzb3J0RGlyZWN0aW9uKSk7XG4gICAgfVxuICAgIGZpbHRlcmVkVHJhY2tzID0gZmlsdGVyZWQ7XG4gICAgcmVuZGVyVHJhY2tzKGZpbHRlcmVkVHJhY2tzKTtcbiAgICB1cGRhdGVCdXR0b25TdGF0ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQnV0dG9uU3RhdGUoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRDb3VudCA9IHNlbGVjdGVkU2V0LnNpemU7XG4gICAgdHJhY2tJbmZvLmlubmVySFRNTCA9IGA8cD48c3Bhbj4ke3NlbGVjdGVkQ291bnR9PC9zcGFuPiB0cmFjayhzKSBzZWxlY3RlZCBmcm9tIHBsYXlsaXN0PC9wPmA7XG4gICAgZGVsZXRlQnRuLmRpc2FibGVkID0gc2VsZWN0ZWRDb3VudCA9PT0gMDtcblxuICAgIGlmIChzZWxlY3RlZENvdW50ID09PSAwKSB7XG4gICAgICBzZWxlY3RBbGxCdG4udGV4dENvbnRlbnQgPSBcIlNlbGVjdCBBbGxcIjtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQ291bnQgPT09IGZpbHRlcmVkVHJhY2tzLmxlbmd0aCkge1xuICAgICAgc2VsZWN0QWxsQnRuLnRleHRDb250ZW50ID0gXCJEZXNlbGVjdCBBbGxcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0QWxsQnRuLnRleHRDb250ZW50ID0gXCJTZWxlY3QgQWxsXCI7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlZCBoYW5kbGVyOiBzZWxlY3QgYSBwbGF5bGlzdCBieSBVUkksIGxvYWQgaXRzIHRyYWNrcywgYW5kIHByZS1zZWxlY3RcbiAgICogYW55IHRyYWNrcyB0aGF0IG1hdGNoIHRyYWNrVXJpcyAodGhlIG9uZXMgdGhlIHVzZXIgcmlnaHQtY2xpY2tlZCBvbikuXG4gICAqL1xuICBhc3luYyBmdW5jdGlvbiBzZWxlY3RQbGF5bGlzdCh1cmk6IHN0cmluZykge1xuICAgIGlmICghdXJpKSByZXR1cm47XG5cbiAgICBjb25zdCByZXF1ZXN0SWQgPSArK3BlbmRpbmdSZXF1ZXN0O1xuICAgIGN1cnJlbnRQbGF5bGlzdFVyaSA9IHVyaTtcbiAgICBwbGF5bGlzdFNlbGVjdC52YWx1ZSA9IHVyaTtcblxuICAgIC8vIFJlc2V0IHNvcnRcbiAgICBzb3J0Q29sdW1uID0gXCJcIjtcbiAgICBzb3J0RGlyZWN0aW9uID0gXCJhc2NcIjtcbiAgICB1cGRhdGVTb3J0SW5kaWNhdG9ycygpO1xuXG4gICAgLy8gU2hvdyBsb2FkaW5nIHN0YXRlXG4gICAgZW1wdHlTdGF0ZS50ZXh0Q29udGVudCA9IFwiTG9hZGluZyB0cmFja3MuLi5cIjtcbiAgICB0cmFja0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB0cmFja0xpc3QuYXBwZW5kQ2hpbGQoZW1wdHlTdGF0ZSk7XG5cbiAgICB0cnkge1xuICAgICAgY3VycmVudFRyYWNrcyA9IGF3YWl0IGdldFBsYXlsaXN0VHJhY2tzKHVyaSwgKHRyYWNrcywgdG90YWxMb2FkZWQpID0+IHtcbiAgICAgICAgaWYgKHBlbmRpbmdSZXF1ZXN0ICE9PSByZXF1ZXN0SWQpIHJldHVybjsgLy8gYSBuZXdlciByZXF1ZXN0IHN1cGVyc2VkZWQgdGhpcyBvbmVcbiAgICAgICAgZW1wdHlTdGF0ZS50ZXh0Q29udGVudCA9IGBMb2FkZWQgJHt0b3RhbExvYWRlZH0gdHJhY2socykuLi5gO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFRoaXMgcmVxdWVzdCBpcyBzdGFsZSBcdTIwMTQgYSBuZXdlciBzZWxlY3Rpb24gaGFzIHJlcGxhY2VkIGl0XG4gICAgICBpZiAocGVuZGluZ1JlcXVlc3QgIT09IHJlcXVlc3RJZCkgcmV0dXJuO1xuXG4gICAgICBmaWx0ZXJlZFRyYWNrcyA9IFsuLi5jdXJyZW50VHJhY2tzXTtcbiAgICAgIHNlbGVjdGVkU2V0LmNsZWFyKCk7XG4gICAgICBzZWFyY2hJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgc2VhcmNoSW5wdXQudmFsdWUgPSBcIlwiO1xuXG4gICAgICAvLyBQcmUtc2VsZWN0IHRoZSB0cmFja3MgdGhlIHVzZXIgb3JpZ2luYWxseSByaWdodC1jbGlja2VkIG9uXG4gICAgICBmb3IgKGNvbnN0IHRyYWNrVXJpIG9mIHRyYWNrVXJpcykge1xuICAgICAgICBjb25zdCB0cmFjayA9IGN1cnJlbnRUcmFja3MuZmluZCh0ID0+IHQudXJpID09PSB0cmFja1VyaSk7XG4gICAgICAgIGlmICh0cmFjaykge1xuICAgICAgICAgIHNlbGVjdGVkU2V0LmFkZChnZXRTZWxlY3Rpb25LZXkodHJhY2spKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZW5kZXJUcmFja3MoZmlsdGVyZWRUcmFja3MpO1xuICAgICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcblxuICAgICAgLy8gU2Nyb2xsIHRvIHRoZSBmaXJzdCBzZWxlY3RlZCB0cmFja1xuICAgICAgaWYgKHNlbGVjdGVkU2V0LnNpemUgPiAwKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbEluZGV4ID0gZmlsdGVyZWRUcmFja3MuZmluZEluZGV4KHQgPT4gc2VsZWN0ZWRTZXQuaGFzKGdldFNlbGVjdGlvbktleSh0KSkpO1xuICAgICAgICBpZiAoc2Nyb2xsSW5kZXggPiAwKSB7XG4gICAgICAgICAgY29uc3Qgdmlld3BvcnRIZWlnaHQgPSB0cmFja0xpc3QuY2xpZW50SGVpZ2h0IHx8IDQwMDtcbiAgICAgICAgICB0cmFja0xpc3Quc2Nyb2xsVG9wID0gTWF0aC5tYXgoMCwgc2Nyb2xsSW5kZXggKiBJVEVNX0hFSUdIVCAtIHZpZXdwb3J0SGVpZ2h0IC8gMiArIElURU1fSEVJR0hUIC8gMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAocGVuZGluZ1JlcXVlc3QgIT09IHJlcXVlc3RJZCkgcmV0dXJuO1xuICAgICAgZW1wdHlTdGF0ZS50ZXh0Q29udGVudCA9IFwiRmFpbGVkIHRvIGxvYWQgdHJhY2tzXCI7XG4gICAgICB0cmFja0xpc3QuYXBwZW5kQ2hpbGQoZW1wdHlTdGF0ZSk7XG4gICAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihcIkZhaWxlZCB0byBsb2FkIHRyYWNrc1wiLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICAvKiogUmVzZXQgdGhlIG1vZGFsIHRvIHRoZSBlbXB0eSAobm8gcGxheWxpc3Qgc2VsZWN0ZWQpIHN0YXRlICovXG4gIGZ1bmN0aW9uIHJlc2V0VG9FbXB0eSgpIHtcbiAgICBjdXJyZW50UGxheWxpc3RVcmkgPSBudWxsO1xuICAgIGN1cnJlbnRUcmFja3MgPSBbXTtcbiAgICBmaWx0ZXJlZFRyYWNrcyA9IFtdO1xuICAgIHNlbGVjdGVkU2V0LmNsZWFyKCk7XG4gICAgc2VhcmNoSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIHNlYXJjaElucHV0LnZhbHVlID0gXCJcIjtcbiAgICBzb3J0Q29sdW1uID0gXCJcIjtcbiAgICBzb3J0RGlyZWN0aW9uID0gXCJhc2NcIjtcbiAgICB1cGRhdGVTb3J0SW5kaWNhdG9ycygpO1xuICAgIHRyYWNrTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGVtcHR5U3RhdGUudGV4dENvbnRlbnQgPSBcIlNlbGVjdCBhIHBsYXlsaXN0IGZpcnN0XCI7XG4gICAgdHJhY2tMaXN0LmFwcGVuZENoaWxkKGVtcHR5U3RhdGUpO1xuICAgIHVwZGF0ZUJ1dHRvblN0YXRlKCk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBsb2FkUGxheWxpc3RzKCkge1xuICAgIHRyeSB7XG4gICAgICBhbGxQbGF5bGlzdHMgPSBhd2FpdCBmZXRjaFBsYXlsaXN0c1dpdGhEZWxldGVQZXJtaXNzaW9uKCk7XG4gICAgICBhbGxQbGF5bGlzdHMuc29ydCgoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XG5cbiAgICAgIGZvciAoY29uc3QgcGxheWxpc3Qgb2YgYWxsUGxheWxpc3RzKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHBsYXlsaXN0LnVyaTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcGxheWxpc3QubmFtZTtcbiAgICAgICAgcGxheWxpc3RTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgIH1cblxuICAgICAgLy8gQXV0by1zZWxlY3Q6IGlmIGNvbnRleHRVcmkgcG9pbnRzIHRvIGEgcGxheWxpc3Qgd2UgaGF2ZSBhY2Nlc3MgdG8sXG4gICAgICAvLyB0cnVzdCBpdCBhbmQgc2VsZWN0IGl0IGltbWVkaWF0ZWx5IFx1MjAxNCBubyBuZWVkIHRvIHByZS1mZXRjaCBqdXN0IHRvIHZlcmlmeS5cbiAgICAgIGlmIChjdXJyZW50UGxheWxpc3RVcmkgJiYgYWxsUGxheWxpc3RzLnNvbWUocCA9PiBwLnVyaSA9PT0gY3VycmVudFBsYXlsaXN0VXJpKSkge1xuICAgICAgICBhd2FpdCBzZWxlY3RQbGF5bGlzdChjdXJyZW50UGxheWxpc3RVcmkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEZhbGxiYWNrOiB0cnkgdG8gZmluZCB3aGljaCBvZiB0aGUgdXNlcidzIHBsYXlsaXN0cyBjb250YWlucyB0aGVcbiAgICAgIC8vIHJpZ2h0LWNsaWNrZWQgdHJhY2tzLiAgU2NhbiBwbGF5bGlzdHMgdW50aWwgd2UgZmluZCBhIG1hdGNoLlxuICAgICAgaWYgKHRyYWNrVXJpcy5sZW5ndGggPiAwICYmIGFsbFBsYXlsaXN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAoY29uc3QgcGxheWxpc3Qgb2YgYWxsUGxheWxpc3RzKSB7XG4gICAgICAgICAgaWYgKHBsYXlsaXN0LnVyaSA9PT0gY3VycmVudFBsYXlsaXN0VXJpKSBjb250aW51ZTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gRmV0Y2gganVzdCBlbm91Z2ggdG8gY2hlY2sgaWYgYW55IHNlbGVjdGVkIHRyYWNrIGlzIHByZXNlbnRcbiAgICAgICAgICAgIGNvbnN0IHRyYWNrcyA9IGF3YWl0IGdldFBsYXlsaXN0VHJhY2tzKHBsYXlsaXN0LnVyaSwgdW5kZWZpbmVkLCB0cmFja1VyaXMubGVuZ3RoICogMik7XG4gICAgICAgICAgICBjb25zdCB0cmFja1VyaXNTZXQgPSBuZXcgU2V0KHRyYWNrcy5tYXAodCA9PiB0LnVyaSkpO1xuICAgICAgICAgICAgaWYgKHRyYWNrVXJpcy5zb21lKHVyaSA9PiB0cmFja1VyaXNTZXQuaGFzKHVyaSkpKSB7XG4gICAgICAgICAgICAgIGF3YWl0IHNlbGVjdFBsYXlsaXN0KHBsYXlsaXN0LnVyaSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBTaWxlbnRseSBza2lwIHBsYXlsaXN0cyB0aGF0IGZhaWwgdG8gbG9hZFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIFNwaWNldGlmeS5zaG93Tm90aWZpY2F0aW9uKFwiRmFpbGVkIHRvIGxvYWQgcGxheWxpc3RzXCIsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbkNvbnRhaW5lci5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWJ1dHRvbnNcIjtcblxuICBjb25zdCBzZWxlY3RBbGxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzZWxlY3RBbGxCdG4uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1zZWxlY3QtYWxsXCI7XG4gIHNlbGVjdEFsbEJ0bi50ZXh0Q29udGVudCA9IFwiU2VsZWN0IEFsbFwiO1xuICBzZWxlY3RBbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRTZXQuc2l6ZSA9PT0gZmlsdGVyZWRUcmFja3MubGVuZ3RoKSB7XG4gICAgICBzZWxlY3RlZFNldC5jbGVhcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWx0ZXJlZFRyYWNrcy5mb3JFYWNoKHQgPT4gc2VsZWN0ZWRTZXQuYWRkKGdldFNlbGVjdGlvbktleSh0KSkpO1xuICAgIH1cbiAgICByZW5kZXJUcmFja3MoZmlsdGVyZWRUcmFja3MpO1xuICAgIHVwZGF0ZUJ1dHRvblN0YXRlKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGJ1dHRvbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uR3JvdXAuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1idXR0b24tZ3JvdXBcIjtcblxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdG4uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1idG4gY2FuY2VsXCI7XG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2xlYW51cEFuZENsb3NlKCkpO1xuXG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWJ0biBkZWxldGVcIjtcbiAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgZGVsZXRlQnRuLmRpc2FibGVkID0gdHJ1ZTtcblxuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWN1cnJlbnRQbGF5bGlzdFVyaSkgcmV0dXJuO1xuXG4gICAgY29uc3QgcGxheWxpc3QgPSBhbGxQbGF5bGlzdHMuZmluZChwID0+IHAudXJpID09PSBjdXJyZW50UGxheWxpc3RVcmkpO1xuICAgIGNvbnN0IHBsYXlsaXN0TmFtZSA9IHBsYXlsaXN0Py5uYW1lIHx8IFwiVW5rbm93biBQbGF5bGlzdFwiO1xuICAgIGNvbnN0IHRyYWNrQ291bnQgPSBzZWxlY3RlZFNldC5zaXplO1xuICAgIGNvbnN0IHRyYWNrc1RvRGVsZXRlID0gY3VycmVudFRyYWNrcy5maWx0ZXIodCA9PiBzZWxlY3RlZFNldC5oYXMoZ2V0U2VsZWN0aW9uS2V5KHQpKSk7XG5cbiAgICBjcmVhdGVEZWxldGVDb25maXJtTW9kYWwoXG4gICAgICB0cmFja3NUb0RlbGV0ZSxcbiAgICAgIHBsYXlsaXN0TmFtZSxcbiAgICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgdHJhY2tzV2l0aFVpZCA9IHRyYWNrc1RvRGVsZXRlLm1hcCh0ID0+ICh7IHVyaTogdC51cmksIHVpZDogdC51aWQgfSkpO1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgZGVsZXRlVHJhY2tzRnJvbVBsYXlsaXN0KGN1cnJlbnRQbGF5bGlzdFVyaSEsIHRyYWNrc1dpdGhVaWQpO1xuXG4gICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgU3BpY2V0aWZ5LnNob3dOb3RpZmljYXRpb24oYERlbGV0ZWQgJHt0cmFja0NvdW50fSB0cmFjayhzKSBmcm9tIHBsYXlsaXN0YCk7XG5cbiAgICAgICAgICBjdXJyZW50VHJhY2tzID0gY3VycmVudFRyYWNrcy5maWx0ZXIodCA9PiAhc2VsZWN0ZWRTZXQuaGFzKGdldFNlbGVjdGlvbktleSh0KSkpO1xuICAgICAgICAgIGZpbHRlcmVkVHJhY2tzID0gZmlsdGVyZWRUcmFja3MuZmlsdGVyKHQgPT4gIXNlbGVjdGVkU2V0LmhhcyhnZXRTZWxlY3Rpb25LZXkodCkpKTtcbiAgICAgICAgICBzZWxlY3RlZFNldC5jbGVhcigpO1xuICAgICAgICAgIHJlbmRlclRyYWNrcyhmaWx0ZXJlZFRyYWNrcyk7XG4gICAgICAgICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihcIkZhaWxlZCB0byBkZWxldGUgdHJhY2tzXCIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKCkgPT4ge31cbiAgICApO1xuICB9KTtcblxuICBidXR0b25Hcm91cC5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICBidXR0b25Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RBbGxCdG4pO1xuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uR3JvdXApO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChwbGF5bGlzdFNlbGVjdG9yKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChzZWFyY2hDb250YWluZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRyYWNrSW5mbyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyQmFyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0cmFja0xpc3QpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgbW9kYWwuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG5cbiAgLy8gLS0tIElOSVQgYWZ0ZXIgRE9NIGlzIHJlYWR5IC0tLVxuICBsb2FkUGxheWxpc3RzKCk7XG5cbiAgcGxheWxpc3RTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRVcmkgPSBwbGF5bGlzdFNlbGVjdC52YWx1ZTtcbiAgICBpZiAoc2VsZWN0ZWRVcmkpIHtcbiAgICAgIGF3YWl0IHNlbGVjdFBsYXlsaXN0KHNlbGVjdGVkVXJpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzZXRUb0VtcHR5KCk7XG4gICAgfVxuICB9KTtcblxuICBsZXQgc2VhcmNoVGltZW91dDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgaWYgKHNlYXJjaFRpbWVvdXQpIHtcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoc2VhcmNoVGltZW91dCk7XG4gICAgfVxuICAgIHNlYXJjaFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmaWx0ZXJUcmFja3MoKTtcbiAgICB9LCAxNTApO1xuICB9KTtcblxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgICBjbGVhbnVwQW5kQ2xvc2UoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhbnVwQW5kQ2xvc2UpO1xuXG4gIGNvbnN0IHVwZGF0ZVBsYXliYWNrU3RhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gKFNwaWNldGlmeSBhcyBhbnkpLlBsYXllcjtcbiAgICBpZiAoIXBsYXllcj8uZGF0YT8uaXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRVcmkgPSBwbGF5ZXIuZGF0YS5pdGVtLnVyaTtcbiAgICBjb25zdCBpc1BsYXlpbmcgPSBwbGF5ZXIuaXNQbGF5aW5nKCk7XG4gICAgY29uc3QgcG9zaXRpb24gPSBwbGF5ZXIuZ2V0UHJvZ3Jlc3MoKTtcbiAgICBjb25zdCBkdXJhdGlvbiA9IHBsYXllci5nZXREdXJhdGlvbigpIHx8IHBsYXllci5kYXRhLml0ZW0uZHVyYXRpb24/LnRvdGFsTXMgfHwgMDtcblxuICAgIHRyYWNrTGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1bGstZGVsZXRlLXBsYXliYWNrLWNvbnRyb2xzXCIpLmZvckVhY2goKGN0cmw6IGFueSkgPT4ge1xuICAgICAgY29uc3QgcGxheUJ0biA9IGN0cmwucXVlcnlTZWxlY3RvcihcIi5idWxrLWRlbGV0ZS1wbGF5YmFjay1idXR0b25cIik7XG4gICAgICBjb25zdCBzbGlkZXIgPSBjdHJsLnF1ZXJ5U2VsZWN0b3IoXCIuYnVsay1kZWxldGUtc2xpZGVyXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICBjb25zdCBjdXJyZW50VGltZSA9IGN0cmwucXVlcnlTZWxlY3RvcihcIi5idWxrLWRlbGV0ZS1zbGlkZXItdGltZVwiKTtcblxuICAgICAgaWYgKGN0cmwuZGF0YXNldC51cmkgPT09IGN1cnJlbnRVcmkpIHtcbiAgICAgICAgaWYgKGlzUGxheWluZykge1xuICAgICAgICAgIHBsYXlCdG4uaW5uZXJIVE1MID0gYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNNiAxOWg0VjVINnYxNHptOC0xNHYxNGg0VjVoLTR6XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48L3N2Zz5gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsYXlCdG4uaW5uZXJIVE1MID0gYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNOCA1djE0bDExLTd6XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48L3N2Zz5gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzbGlkZXIpIHtcbiAgICAgICAgICBzbGlkZXIudmFsdWUgPSBwb3NpdGlvbi50b1N0cmluZygpO1xuICAgICAgICAgIHNsaWRlci5tYXggPSBkdXJhdGlvbi50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50VGltZSkgY3VycmVudFRpbWUudGV4dENvbnRlbnQgPSBmb3JtYXRUaW1lKHBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRyYWNrTGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1bGstZGVsZXRlLWl0ZW1cIikuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgICBjb25zdCB0cmFja051bWJlciA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5idWxrLWRlbGV0ZS10cmFjay1udW1iZXJcIik7XG4gICAgICBpZiAoIXRyYWNrTnVtYmVyKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IHVyaSA9IGl0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS11cmlcIik7XG5cbiAgICAgIGlmICh1cmkgPT09IGN1cnJlbnRVcmkpIHtcbiAgICAgICAgdHJhY2tOdW1iZXIuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJidWxrLWRlbGV0ZS1wbGF5aW5nLWluZGljYXRvclwiPjwvZGl2PmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBpZHggPSBwYXJzZUludChpdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiksIDEwKTtcbiAgICAgICAgdHJhY2tOdW1iZXIudGV4dENvbnRlbnQgPSAoaWR4ICsgMSkudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzdGFydFBsYXliYWNrVXBkYXRlcyA9ICgpID0+IHtcbiAgICBpZiAodXBkYXRlSW50ZXJ2YWwpIHJldHVybjtcbiAgICB1cGRhdGVJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCh1cGRhdGVQbGF5YmFja1N0YXRlLCAxMDAwKTtcbiAgfTtcblxuICBzdGFydFBsYXliYWNrVXBkYXRlcygpO1xuXG4gIHBsYXlsaXN0U2VsZWN0LmZvY3VzKCk7XG59XG4iLCAiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCIgd2l0aCB7IHR5cGU6IFwiY3NzXCIgfTtcbmltcG9ydCB7IGNyZWF0ZU1vZGFsIH0gZnJvbSBcIi4vbW9kYWwudHN4XCI7XG5cbmRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHN0eWxlcyk7XG5cbmZ1bmN0aW9uIGlzVHJhY2tVcmkodXJpOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgdXJpT2JqID0gU3BpY2V0aWZ5LlVSSS5mcm9tKHVyaSk7XG4gIHJldHVybiAhISh1cmlPYmogJiYgKHVyaU9iaiBhcyB7IHR5cGU/OiBzdHJpbmcgfSkudHlwZSA9PT0gXCJ0cmFja1wiKTtcbn1cblxuZnVuY3Rpb24gaXNQbGF5bGlzdFVyaSh1cmk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB1cmlPYmogPSBTcGljZXRpZnkuVVJJLmZyb20odXJpKTtcbiAgcmV0dXJuICEhKHVyaU9iaiAmJiAodXJpT2JqIGFzIHsgdHlwZT86IHN0cmluZyB9KS50eXBlID09PSBcInBsYXlsaXN0XCIpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVNZW51Q2xpY2sodXJpczogc3RyaW5nW10sIF91aWRzPzogc3RyaW5nW10sIGNvbnRleHRVcmk/OiBzdHJpbmcpIHtcbiAgY29uc3QgdHJhY2tVcmlzID0gdXJpcy5maWx0ZXIoaXNUcmFja1VyaSk7XG4gIFxuICBpZiAodHJhY2tVcmlzLmxlbmd0aCA9PT0gMCkge1xuICAgIFNwaWNldGlmeS5zaG93Tm90aWZpY2F0aW9uKFwiTm8gdHJhY2tzIHNlbGVjdGVkXCIsIHRydWUpO1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgbGV0IHBsYXlsaXN0VXJpOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGlmIChjb250ZXh0VXJpICYmIGlzUGxheWxpc3RVcmkoY29udGV4dFVyaSkpIHtcbiAgICBwbGF5bGlzdFVyaSA9IGNvbnRleHRVcmk7XG4gIH1cbiAgXG4gIGNyZWF0ZU1vZGFsKHRyYWNrVXJpcywgcGxheWxpc3RVcmkpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRBZGQodXJpczogc3RyaW5nW10pOiBib29sZWFuIHtcbiAgcmV0dXJuIHVyaXMuc29tZShpc1RyYWNrVXJpKTtcbn1cblxuY29uc3QgYnVsa0RlbGV0ZU1lbnVJdGVtID0gbmV3IFNwaWNldGlmeS5Db250ZXh0TWVudS5JdGVtKFxuICBcIkRlbGV0ZSBmcm9tIFBsYXlsaXN0XCIsXG4gIGhhbmRsZU1lbnVDbGljayxcbiAgc2hvdWxkQWRkLFxuICBcImJsb2NrXCIgYXMgU3BpY2V0aWZ5Lkljb25cbik7XG5cbmJ1bGtEZWxldGVNZW51SXRlbS5yZWdpc3RlcigpOyJdLAogICJtYXBwaW5ncyI6ICI7OztBQUNVLElBQU0sUUFBUSxJQUFJLGNBQWM7QUFDaEMsTUFBTSxZQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQSt2QjNCO0FBQ1MsSUFBTyxpQkFBUTs7O0FDMXVCekIsZUFBZSwwQkFBNkM7QUFDMUQsUUFBTSxhQUFjLFVBQWtCLFVBQVU7QUFDaEQsTUFBSSxDQUFDLFdBQVksUUFBTyxDQUFDO0FBRXpCLFFBQU0sV0FBVztBQUNqQixRQUFNLFFBQWtCLENBQUM7QUFDekIsTUFBSSxTQUFTO0FBRWIsU0FBTyxNQUFNO0FBQ1gsVUFBTSxXQUFXLE1BQU0sV0FBVyxZQUFZO0FBQUEsTUFDNUM7QUFB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
