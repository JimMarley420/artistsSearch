interface Playlist {
  name: string;
  uri: string;
  canDelete: boolean;
  canAddTo: boolean;
}

interface Track {
  uri: string;
  name: string;
  artist: string;
  album: string;
  albumUri: string;
  imageUrl: string;
  duration: number;
  uid: string;
}

async function fetchAllLibraryContents(): Promise<object[]> {
  const LibraryAPI = (Spicetify as any).Platform?.LibraryAPI;
  if (!LibraryAPI) return [];
  
  const pageSize = 10000;
  const items: object[] = [];
  let offset = 0;
  
  while (true) {
    const response = await LibraryAPI.getContents({
      offset: offset,
      limit: pageSize,
      flattenTree: true,
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

export async function fetchPlaylistsWithDeletePermission(): Promise<Playlist[]> {
  try {
    const items = await fetchAllLibraryContents();
    
    const playlists: Playlist[] = [];
    
    for (const item of items) {
      const playlist = item as { type?: string; canDelete?: boolean; canAddTo?: boolean; name?: string; uri?: string };
      if (playlist.type === "playlist" && (playlist.canDelete || playlist.canAddTo)) {
        playlists.push({
          name: playlist.name || "Unknown",
          uri: playlist.uri || "",
          canDelete: playlist.canDelete || false,
          canAddTo: playlist.canAddTo || false,
        });
      }
    }
    
    return playlists;
  } catch (e) {
    return [];
  }
}

function formatTime(ms: number | undefined): string {
  if (ms == null || isNaN(ms) || ms <= 0) return "0:00";
  const s = Math.floor(ms / 1000);
  return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;
}

function createPlaybackControl(uri: string, duration: number): HTMLElement {
  const container = document.createElement("div");
  container.className = "bulk-delete-playback-controls";
  container.dataset.uri = uri;
  
  const playBtn = document.createElement("button");
  playBtn.className = "bulk-delete-playback-button";
  playBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>`;
  
  playBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    try {
      const player = (Spicetify as any).Player;
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
      (Spicetify as any).Player?.playUri(uri);
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
      (Spicetify as any).Player?.seek(parseInt(slider.value));
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

function createTrackImage(url: string): HTMLElement {
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

function createPlayingIndicator(): HTMLElement {
  const indicator = document.createElement("div");
  indicator.className = "bulk-delete-playing-indicator";
  return indicator;
}

export async function getPlaylistTracks(
  playlistUri: string,
  onProgress?: (tracks: Track[], totalLoaded: number) => void,
  checkUpTo?: number
): Promise<Track[]> {
  let tracks: Track[] = [];
  
  try {
    const PlaylistAPI = (Spicetify as any).Platform?.PlaylistAPI;
    
    if (!PlaylistAPI) {
      throw new Error("PlaylistAPI not available");
    }
    
    const pageSize = 200;
    let offset = 0;
    
    while (true) {
      const response = await PlaylistAPI.getContents(playlistUri, {
        offset: offset,
        limit: pageSize,
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
          
          if (item.name) name = item.name;
          if (item.artists?.[0]?.name) artist = item.artists[0].name;
          if (item.album?.name) album = item.album.name;
          const albumUri = item.album?.uri || "";
          if (item.album?.images?.[0]?.url) imageUrl = item.album.images[0].url;
          else if (item.album?.coverArt?.sources?.[0]?.url) imageUrl = item.album.coverArt.sources[0].url;
          
          const itemAny = item as Record<string, unknown>;
          let durationVal: number = 0;
          if (itemAny.duration && typeof itemAny.duration === "object") {
            const dur = itemAny.duration as { totalMs?: number; milliseconds?: number };
            if (dur.totalMs) durationVal = dur.totalMs;
            else if (dur.milliseconds) durationVal = dur.milliseconds;
          } else if (typeof itemAny.duration === "number") {
            durationVal = itemAny.duration;
          } else if (typeof itemAny.durationMs === "number") {
            durationVal = itemAny.durationMs;
          }
          duration = durationVal;
          
          tracks.push({
            uri: item.uri,
            name,
            artist,
            album,
            albumUri,
            imageUrl,
            duration,
            uid,
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

export async function deleteTracksFromPlaylist(
  playlistUri: string,
  tracks: { uri: string; uid: string }[]
): Promise<boolean> {
  const PlaylistAPI = (Spicetify as any).Platform?.PlaylistAPI;
  
  if (!PlaylistAPI) {
    return false;
  }
  
  try {
    const trackList = tracks.map(t => ({
      uri: t.uri,
      uid: t.uid
    }));
    await PlaylistAPI.remove(playlistUri, trackList);
    return true;
  } catch (e) {
    try {
      await PlaylistAPI.remove(playlistUri, tracks.map(t => t.uri));
      return true;
    } catch (e2) {
      console.error("Delete failed:", e2);
      return false;
    }
  }
}

function createDeleteConfirmModal(
  tracks: Track[],
  playlistName: string,
  onConfirm: () => void,
  onCancel: () => void
) {
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
    artistAlbum.textContent = `${track.artist} — ${track.album}`;
    
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

export function createModal(trackUris: string[], preferredPlaylistUri?: string | null) {
  let allPlaylists: Playlist[] = [];
  let currentTracks: Track[] = [];
  let filteredTracks: Track[] = [];
  const selectedSet = new Set<string>();
  let currentPlaylistUri: string | null = preferredPlaylistUri || null;
  let updateInterval: number | null = null;
  
  const getSelectionKey = (track: Track) => track.uid || track.uri;
  
  const modal = document.createElement("div");
  let renderedTracksRef: Track[] = [];
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
  
  const trackList = document.createElement("div");
  trackList.className = "bulk-delete-list";
  
  const emptyState = document.createElement("div");
  emptyState.className = "bulk-delete-empty";
  emptyState.textContent = "Select a playlist first";
  trackList.appendChild(emptyState);
  
  const ITEM_HEIGHT = 72;
  const BUFFER = 8;
  
  function renderTracks(tracks: Track[]) {
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
    
    let spacer = trackList.querySelector(".bulk-delete-virtual-spacer") as HTMLElement;
    if (!spacer) {
      spacer = document.createElement("div");
      spacer.className = "bulk-delete-virtual-spacer";
      trackList.appendChild(spacer);
    }
    
    let windowEl = trackList.querySelector(".bulk-delete-virtual-window") as HTMLElement;
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
    
    const currentPlayingUri = (Spicetify as any).Player?.data?.item?.uri || null;
    
    for (let i = startIndex; i < endIndex; i++) {
      const track = tracks[i];
      const isPlaying = currentPlayingUri === track.uri;
      
      const item = document.createElement("div");
      item.className = "bulk-delete-item" + (selectedSet.has(getSelectionKey(track)) ? " selected" : "");
      item.setAttribute("data-uri", track.uri);
      item.setAttribute("data-index", i.toString());
      item.style.cursor = "pointer";
      
      item.addEventListener("click", (e) => {
        if ((e.target as HTMLElement).closest(".bulk-delete-checkbox-wrapper") || 
            (e.target as HTMLElement).closest(".bulk-delete-playback-controls")) {
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
          (Spicetify as any).Platform?.History?.push(path);
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
      item.appendChild(playback);
      windowEl.appendChild(item);
    }
  }
  
  function filterTracks() {
    const query = searchInput.value.toLowerCase();
    filteredTracks = currentTracks.filter(t => 
      t.name.toLowerCase().includes(query) ||
      t.artist.toLowerCase().includes(query) ||
      t.album.toLowerCase().includes(query)
    );
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
  
  async function loadPlaylistTracks(playlistUri: string) {
    const requestToken = playlistUri;
    emptyState.textContent = "Loading tracks...";
    trackList.innerHTML = "";
    trackList.appendChild(emptyState);
    
    try {
      currentTracks = await getPlaylistTracks(playlistUri, (tracks, totalLoaded) => {
        if (requestToken !== currentPlaylistUri) return;
        emptyState.textContent = `Loaded ${totalLoaded} track(s)...`;
      });
      if (requestToken !== currentPlaylistUri) return;
      filteredTracks = [...currentTracks];
      selectedSet.clear();
      searchInput.disabled = false;
      searchInput.value = "";
      renderTracks(filteredTracks);
      updateButtonState();
      return;
    } catch (e) {
      if (requestToken !== currentPlaylistUri) return;
      emptyState.textContent = "Failed to load tracks";
      trackList.appendChild(emptyState);
      Spicetify.showNotification("Failed to load tracks", true);
    }
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
      
      if (trackUris.length > 0 && allPlaylists.length > 0) {
        let foundPlaylist: Playlist | null = null;
        
        if (currentPlaylistUri) {
          const preferred = allPlaylists.find(p => p.uri === currentPlaylistUri);
          if (preferred) {
            try {
              const tracks = await getPlaylistTracks(preferred.uri, undefined, 500);
              const trackUrisSet = new Set(tracks.map(t => t.uri));
              const hasSelectedTrack = trackUris.some(uri => trackUrisSet.has(uri));
              if (hasSelectedTrack) {
                foundPlaylist = preferred;
              }
            } catch (e) {}
          }
        }
        
        if (!foundPlaylist) {
          for (const playlist of allPlaylists) {
            if (playlist.uri === currentPlaylistUri) continue;
            try {
              const tracks = await getPlaylistTracks(playlist.uri, undefined, 500);
              const trackUrisSet = new Set(tracks.map(t => t.uri));
              const hasSelectedTrack = trackUris.some(uri => trackUrisSet.has(uri));
              if (hasSelectedTrack) {
                foundPlaylist = playlist;
                break;
              }
            } catch (e) {}
          }
        }
        
        if (foundPlaylist) {
          playlistSelect.value = foundPlaylist.uri;
          currentPlaylistUri = foundPlaylist.uri;
          await loadPlaylistTracks(foundPlaylist.uri);
          
          selectedSet.clear();
          for (const uri of trackUris) {
            const track = currentTracks.find(t => t.uri === uri);
            if (track) {
              selectedSet.add(getSelectionKey(track));
            }
          }
          
          renderTracks(filteredTracks);
          updateButtonState();
          
          const scrollIndex = filteredTracks.findIndex(t => selectedSet.has(getSelectionKey(t)));
          if (scrollIndex > 0) {
            const viewportHeight = trackList.clientHeight || 400;
            trackList.scrollTop = Math.max(0, scrollIndex * ITEM_HEIGHT - viewportHeight / 2 + ITEM_HEIGHT / 2);
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
      currentPlaylistUri = selectedUri;
      await loadPlaylistTracks(selectedUri);
    } else {
      currentPlaylistUri = null;
      currentTracks = [];
      filteredTracks = [];
      selectedSet.clear();
      searchInput.disabled = true;
      searchInput.value = "";
      trackList.innerHTML = "";
      const empty = document.createElement("div");
      empty.className = "bulk-delete-empty";
      empty.textContent = "Select a playlist first";
      trackList.appendChild(empty);
      updateButtonState();
    }
  });
  
  let searchTimeout: number | null = null;
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
      filteredTracks.forEach(t => selectedSet.add(getSelectionKey(t)));
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
    
    const playlist = allPlaylists.find(p => p.uri === currentPlaylistUri);
    const playlistName = playlist?.name || "Unknown Playlist";
    const trackCount = selectedSet.size;
    const tracksToDelete = currentTracks.filter(t => selectedSet.has(getSelectionKey(t)));
    
    createDeleteConfirmModal(
      tracksToDelete,
      playlistName,
      async () => {
        const tracksWithUid = tracksToDelete.map(t => ({ uri: t.uri, uid: t.uid }));
        const success = await deleteTracksFromPlaylist(currentPlaylistUri!, tracksWithUid);
        
        if (success) {
          Spicetify.showNotification(`Deleted ${trackCount} track(s) from playlist`);
          
          currentTracks = currentTracks.filter(t => !selectedSet.has(getSelectionKey(t)));
          filteredTracks = filteredTracks.filter(t => !selectedSet.has(getSelectionKey(t)));
          selectedSet.clear();
          renderTracks(filteredTracks);
          updateButtonState();
        } else {
          Spicetify.showNotification("Failed to delete tracks", true);
        }
      },
      () => {}
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
    const player = (Spicetify as any).Player;
    if (!player?.data?.item) {
      return;
    }
    
    const currentUri = player.data.item.uri;
    const isPlaying = player.isPlaying();
    const position = player.getProgress();
    const duration = player.getDuration() || player.data.item.duration?.totalMs || 0;
    
    trackList.querySelectorAll(".bulk-delete-playback-controls").forEach((ctrl: any) => {
      const playBtn = ctrl.querySelector(".bulk-delete-playback-button");
      const slider = ctrl.querySelector(".bulk-delete-slider") as HTMLInputElement;
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
    
    trackList.querySelectorAll(".bulk-delete-item").forEach((item: any) => {
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
    updateInterval = window.setInterval(updatePlaybackState, 1000);
  };
  
  startPlaybackUpdates();
  
  playlistSelect.focus();
}