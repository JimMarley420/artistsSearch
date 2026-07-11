await new Promise((resolve) => Spicetify.Events.webpackLoaded.on(resolve));

// tasks/shims/react-shim.ts
var {
  Children,
  Component,
  Fragment,
  Profiler,
  PureComponent,
  StrictMode,
  Suspense,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  act,
  cloneElement,
  createContext,
  createElement,
  createFactory,
  createRef,
  forwardRef,
  isValidElement,
  lazy,
  memo,
  startTransition,
  unstable_act,
  useCallback,
  useContext,
  useDebugValue,
  useDeferredValue,
  useEffect,
  useId,
  useImperativeHandle,
  useInsertionEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  useSyncExternalStore,
  useTransition,
  version
} = Spicetify.React;
var react_shim_default = Spicetify.React;

// tasks/shims/react-dom-shim.ts
var {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED2,
  createPortal,
  createRoot,
  findDOMNode,
  flushSync,
  hydrate,
  hydrateRoot,
  render,
  unmountComponentAtNode,
  unstable_batchedUpdates,
  unstable_renderSubtreeIntoContainer,
  version: version2
} = Spicetify.ReactDOM;
var react_dom_shim_default = Spicetify.ReactDOM;

// shared/styles/popupModal.css
var sheet = new CSSStyleSheet();
sheet.replaceSync(`body {
  overflow: hidden !important;
}

.modal {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(var(--spice-rgb-shadow), 0.5);
}

.modal__container {
  display: flex;
  flex-direction: column;
  width: 500px;
  max-height: 500px;
  background-color: rgba(var(--spice-rgb-card), 0.95);
  border-radius: 6px;
  box-shadow: 0 0 20px rgba(var(--spice-rgb-shadow), 0.5);
  backdrop-filter: blur(20px) saturate(1.4) brightness(1.2);
}

.modal__container--large {
  width: clamp(550px, 60vw, 650px);
  max-height: 80vh;
}

.modal__header {
  display: flex;
  justify-content: space-between;
  padding: 32px 32px 8px;
  border-bottom: 1px solid rgba(var(--spice-rgb-selected-row), 0.1);
}

.modal__titleContainer {
  display: flex;
  gap: 8px;
}

.modal__icon {
  display: flex;
  align-items: center;
}

.modal__title {
  display: flex;
}

.modal__buttonContainer {
  display: flex;
  gap: 8px;
  align-items: center;
}

.modal__buttonContainer .modal__button {
  height: 32px;
  padding: 8px;
  cursor: pointer;
  background-color: var(--spice-highlight);
  border: 0;
  border-radius: 8px;
}

.modal__buttonContainer .modal__button:hover {
  transform: scale(1.1);
}

.modal__buttonContainer .modal__button:active {
  transform: scale(0.9);
}

.modal__content {
  display: flex;
  padding: 16px 24px;
  overflow: auto;
  scrollbar-gutter: stable both-edges;
}

.modal__content > * {
  width: 100%;
}
`);
var popupModal_default = sheet;

// tasks/shims/jsx-runtime-shim.ts
var { Fragment: Fragment2, jsx, jsxs } = Spicetify.ReactJSX;

// shared/components/icons.tsx
var iconData = {
  search: {
    path: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
    size: 24
  },
  play: {
    path: "M8 5v14l11-7z",
    size: 24
  },
  pause: {
    path: "M6 19h4V5H6v14zm8-14v14h4V5h-4z",
    size: 24
  },
  editButton: {
    path: "M17.318 1.975a3.329 3.329 0 114.707 4.707L8.451 20.256c-.49.49-1.082.867-1.735 1.103L2.34 22.94a1 1 0 01-1.28-1.28l1.581-4.376a4.726 4.726 0 011.103-1.735L17.318 1.975zm3.293 1.414a1.329 1.329 0 00-1.88 0L5.159 16.963c-.283.283-.5.624-.636 1l-.857 2.372 2.371-.857a2.726 2.726 0 001.001-.636L20.611 5.268a1.329 1.329 0 000-1.879z",
    size: 24
  },
  settings: {
    path: "M7.96 5.33a2.67 2.67 0 115.34 2.67 2.67 2.67 0 01-5.34-2.67ZM6.67 8A1.33 1.33 0 109.33 8 1.33 1.33 0 006.67 8Zm4.82-4.81a.95.94 0 01-1.1-.75L10.05.55A.47.47 0 009.68.17 8.1 8.1 0 006.32.17.47.47 0 005.96.55L5.61 2.44a.95.95 0 01-1.25.71L2.55 2.51a.47.47 0 00-.51.13C1.28 3.47.71 4.46.36 5.53a.47.47 0 00.14.51L1.97 7.28a.94.94 0 010 1.43L.5 9.95a.47.47 0 00-.14.51 7.98 7.98 0 001.68 2.9.47.47 0 00.51.13l1.81-.65a.94.94 0 011.25.72l.34 1.89c.04.18.18.33.37.37a8.1 8.1 0 003.36 0 .47.47 0 00.37-.37l.34-1.89a.95.95 0 011.25-.72l1.81.65c.18.06.38.01.51-.13.76-.84 1.34-1.82 1.68-2.9a.47.47 0 00-.14-.5L14.03 8.72a.94.94 0 010-1.44L15.5 6.04a.47.47 0 00.14-.5 7.98 7.98 0 00-1.68-2.9.47.47 0 00-.51-.13l-1.81.65a.95.95 0 01-.15.04Zm-8.82.78 1.25.44a2.28 2.28 0 003-1.73l.24-1.3a6.81 6.81 0 011.68 0l.24 1.3a2.28 2.28 0 003.01 1.73l1.24-.44c.34.44.63.93.84 1.44l-1 .85a2.27 2.27 0 000 3.48l1 .85a6.65 6.65 0 01-.84 1.44l-1.24-.44A2.28 2.28 0 009.08 13.32l-.24 1.29a6.8 6.8 0 01-1.69 0l-.23-1.29A2.28 2.28 0 003.91 11.59l-1.24.44a6.65 6.65 0 01-.84-1.44l1-.86a2.27 2.27 0 000-3.47l-1-.85c.21-.51.5-1 .84-1.44Z",
    size: 16
  },
  close: {
    path: "M31.098 29.794 16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143",
    size: 32
  },
  github: {
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    size: 24
  },
  duplicate: {
    path: "M15 3.5c0-.5-.5-1-1-1H11V1c0-.5-.5-1-1-1H2C1.5 0 1 .5 1 1V11.5c0 .5.5 1 1 1H4.5V15c0 .5.5 1 1 1H14c.5 0 1-.5 1-1ZM2.5 2c0-.25.25-.5.5-.5H9c.25 0 .5.25.5.5v8.5c0 .25-.25.5-.5.5H3c-.25 0-.5-.25-.5-.5Zm4 12.5c-.25 0-.5-.25-.5-.5V12.5h4c.5 0 1-.5 1-1V4h2c.25 0 .5.25.5.5V14c0 .25-.25.5-.5.5Z",
    size: 16
  }
};
var createReactComponent = (name) => {
  const { path, size: defaultSize } = iconData[name];
  const Component2 = ({ size = defaultSize, fill = "currentColor" }) => /* @__PURE__ */ jsx(
    "svg",
    {
      "aria-label": name,
      fill,
      height: size,
      role: "img",
      viewBox: `0 0 ${defaultSize} ${defaultSize}`,
      width: size,
      children: /* @__PURE__ */ jsx("path", { d: path })
    }
  );
  Component2.defaultProps = {
    size: defaultSize,
    fill: "currentColor"
  };
  return Component2;
};
var { raw, react, html } = Object.keys(iconData).reduce(
  (acc, name) => {
    const size = iconData[name].size;
    acc.raw[name] = iconData[name].path;
    acc.react[name] = createReactComponent(name);
    acc.html[name] = `<svg class="artist-search-icon" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="currentColor"><path d="${iconData[name].path}"/></svg>`;
    return acc;
  },
  {
    raw: {},
    react: {},
    html: {}
  }
);
var Icons = {
  React: react,
  HTML: html,
  RAW: raw
};

// shared/components/popupModal.tsx
document.adoptedStyleSheets.push(popupModal_default);
var modalRoot = null;
var modalContainerId = "popup-modal-container";
var closeModal = () => {
  const container = document.getElementById(modalContainerId);
  if (modalRoot) {
    modalRoot.unmount();
    modalRoot = null;
  }
  if (container) {
    container.remove();
  }
  document.body.style.overflow = "auto";
};
var ModalComponent = memo(
  ({ title, content, isLarge, buttons, icon, template, onClose }) => {
    const modalRef = useRef(null);
    useEffect(() => {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          onClose();
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [onClose]);
    const handleClose = () => {
      onClose();
    };
    const handleBackdropClick = (event) => {
      if (event.target === modalRef.current) {
        handleClose();
      }
    };
    const renderContent = () => {
      if (isValidElement(content)) {
        return content;
      }
      if (typeof content === "function") {
        const ContentComponent = content;
        return /* @__PURE__ */ jsx(ContentComponent, {});
      }
      return content;
    };
    if (template === true) {
      return /* @__PURE__ */ jsx("div", { className: "modal", onClick: handleBackdropClick, ref: modalRef, children: /* @__PURE__ */ jsxs("div", { className: `modal__container${isLarge ? " modal__container--large" : ""}`, children: [
        /* @__PURE__ */ jsxs("div", { className: "modal__header", children: [
          /* @__PURE__ */ jsxs("div", { className: "modal__titleContainer", children: [
            icon && /* @__PURE__ */ jsx("div", { className: "modal__icon", children: icon }),
            title && /* @__PURE__ */ jsx("h1", { className: "modal__title", children: title })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "modal__buttonContainer", children: [
            buttons,
            /* @__PURE__ */ jsx(Spicetify.ReactComponent.TooltipWrapper, { label: "Close", placement: "top", children: /* @__PURE__ */ jsx("button", { className: "modal__button modal__button--close", onClick: handleClose, children: /* @__PURE__ */ jsx(Icons.React.close, { size: 18 }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "modal__content", children: renderContent() })
      ] }) });
    }
    return /* @__PURE__ */ jsx("div", { className: "modal", onClick: handleBackdropClick, ref: modalRef, children: /* @__PURE__ */ jsx("div", { className: `modal__container${isLarge ? " modal__container--large" : ""}`, children: renderContent() }) });
  }
);
var PopupModal = (props) => {
  if (document.getElementById(modalContainerId)) {
    closeModal();
  }
  const container = document.createElement("div");
  container.id = modalContainerId;
  document.body.appendChild(container);
  modalRoot = createRoot(container);
  modalRoot.render(/* @__PURE__ */ jsx(ModalComponent, { ...props, onClose: closeModal }));
};
PopupModal.hide = closeModal;

// extensions/copyYoutube/src/storage.ts
var API_KEY_STORAGE = "copyYoutube.apiKey";
var PREFER_OFFICIAL_STORAGE = "copyYoutube.preferOfficial";
function getApiKey() {
  return Spicetify.LocalStorage.get(API_KEY_STORAGE);
}
function setApiKey(key) {
  Spicetify.LocalStorage.set(API_KEY_STORAGE, key);
}
function getPreferOfficial() {
  return Spicetify.LocalStorage.get(PREFER_OFFICIAL_STORAGE) === "true";
}
function setPreferOfficial(value) {
  Spicetify.LocalStorage.set(PREFER_OFFICIAL_STORAGE, String(value));
}

// extensions/copyYoutube/src/settings.tsx
function SettingsForm({ onClose }) {
  const [apiKey, setApiKeyState] = useState(getApiKey() || "");
  const [preferOfficial, setPreferOfficialState] = useState(getPreferOfficial());
  const handleSave = () => {
    setApiKey(apiKey.trim());
    setPreferOfficial(preferOfficial);
    onClose();
    Spicetify.showNotification("YouTube API settings saved");
  };
  return /* @__PURE__ */ jsxs("div", { className: "copy-youtube-settings", children: [
    /* @__PURE__ */ jsxs("div", { className: "copy-youtube-settings-field", children: [
      /* @__PURE__ */ jsx("label", { className: "copy-youtube-settings-label", htmlFor: "youtube-api-key", children: "Google YouTube API Key" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          className: "copy-youtube-settings-input",
          id: "youtube-api-key",
          onChange: (e) => setApiKeyState(e.target.value),
          placeholder: "Enter your YouTube Data API v3 key",
          type: "text",
          value: apiKey
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "copy-youtube-settings-field", children: /* @__PURE__ */ jsxs("label", { className: "copy-youtube-settings-checkbox", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          checked: preferOfficial,
          onChange: (e) => setPreferOfficialState(e.target.checked),
          type: "checkbox"
        }
      ),
      /* @__PURE__ */ jsx("span", { children: "Prefer official videos" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "copy-youtube-settings-buttons", children: [
      /* @__PURE__ */ jsx("button", { className: "copy-youtube-settings-btn cancel", onClick: onClose, type: "button", children: "Cancel" }),
      /* @__PURE__ */ jsx("button", { className: "copy-youtube-settings-btn save", onClick: handleSave, type: "button", children: "Save" })
    ] })
  ] });
}

// extensions/copyYoutube/src/cache.ts
var CACHE_DURATION = 5 * 60 * 1e3;
var cache = /* @__PURE__ */ new Map();
function getCachedVideoId(key) {
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() - entry.timestamp > CACHE_DURATION) {
    cache.delete(key);
    return null;
  }
  return entry.videoId;
}
function setCachedVideoId(key, videoId) {
  cache.set(key, { videoId, timestamp: Date.now() });
}
function buildCacheKey(title, artists, preferOfficial) {
  return `${title}|${artists.join("|")}|${preferOfficial ? "1" : "0"}`;
}

// extensions/copyYoutube/src/utils.ts
var CLEAN_PATTERNS = [
  /\s*\(Remastered(\s+\d{4})?\)/gi,
  /\s*\(Remaster\)/gi,
  /\s*\(Official Audio\)/gi,
  /\s*\(Official Video\)/gi,
  /\s*\(Official Music Video\)/gi,
  /\s*\(Lyric Video\)/gi,
  /\s*\(Live(\s+at\s+.+)?\)/gi,
  /\s*\(Visualizer\)/gi,
  /\s*\(Audio\)/gi,
  /\s*\(Explicit\)/gi,
  /\s*\(Deluxe(\s+Edition)?\)/gi,
  /\s*\(Bonus Track\)/gi,
  /\s*\(Radio Edit\)/gi,
  /\s*\(Single Edit\)/gi,
  /\s*\(Clean\)/gi,
  /\s*\(Instrumental\)/gi,
  /\s*\(Acoustic(\s+Version)?\)/gi,
  /\s*\(feat\.\s+.+?\)/gi,
  /\s*\(ft\.\s+.+?\)/gi,
  /\s*\[Remastered(\s+\d{4})?\]/gi,
  /\s*\[Official Audio\]/gi,
  /\s*\[Official Video\]/gi,
  /\s*\[Official Music Video\]/gi,
  /\s*\[Live\]/gi,
  /\s*\[Visualizer\]/gi,
  /\s*\[Audio\]/gi,
  /\s*\[Explicit\]/gi,
  /\s*\[Deluxe(\s+Edition)?\]/gi,
  /\s*\[Radio Edit\]/gi,
  /\s*- Remastered(\s+\d{4})?/gi,
  /\s*- Radio Edit/gi,
  /\s*- Single Edit/gi,
  /\s*- Acoustic(\s+Version)?/gi,
  /\s*- Live(\s+at\s+.+)?/gi,
  /\s*- Official Audio/gi,
  /\s*- Official Video/gi,
  /\s*- Official Music Video/gi
];
function cleanQuery(query) {
  let cleaned = query;
  for (const pattern of CLEAN_PATTERNS) {
    cleaned = cleaned.replace(pattern, "");
  }
  return cleaned.trim().replace(/\s+/g, " ");
}
function buildSearchQuery(title, artists, preferOfficial) {
  const artistsStr = artists.join(" ");
  let query = `${title} ${artistsStr}`.trim();
  if (preferOfficial) {
    query = `${query} Official`;
  }
  return cleanQuery(query);
}

// extensions/copyYoutube/src/youtube.ts
async function searchYouTube(query, apiKey) {
  const url = new URL("https://www.googleapis.com/youtube/v3/search");
  url.searchParams.set("part", "snippet");
  url.searchParams.set("type", "video");
  url.searchParams.set("maxResults", "1");
  url.searchParams.set("q", query);
  url.searchParams.set("key", apiKey);
  let response;
  try {
    response = await fetch(url.toString());
  } catch {
    throw new Error("NETWORK_ERROR");
  }
  if (response.status === 403) {
    try {
      const body = await response.json();
      const reason = body?.error?.errors?.[0]?.reason;
      if (reason === "quotaExceeded") {
        throw new Error("QUOTA_EXCEEDED");
      }
      if (reason === "keyInvalid") {
        throw new Error("INVALID_KEY");
      }
    } catch (e) {
      if (e instanceof Error && e.message !== "ACCESS_DENIED") throw e;
    }
    throw new Error("ACCESS_DENIED");
  }
  if (response.status === 400) {
    throw new Error("INVALID_KEY");
  }
  if (!response.ok) {
    throw new Error("API_ERROR");
  }
  const data = await response.json();
  if (!data.items || data.items.length === 0) {
    return null;
  }
  const videoId = data.items[0]?.id?.videoId;
  if (!videoId) {
    return null;
  }
  return { videoId };
}

// extensions/copyYoutube/src/clipboard.ts
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      return true;
    } catch {
      return false;
    }
  }
}

// extensions/copyYoutube/src/styles.css
var sheet2 = new CSSStyleSheet();
sheet2.replaceSync(`.copy-youtube-settings {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px 0;
}

.copy-youtube-settings-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.copy-youtube-settings-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--spice-text);
}

.copy-youtube-settings-input {
  width: 100%;
  padding: 8px 12px;
  font-size: 14px;
  color: var(--spice-text);
  background-color: var(--spice-card);
  border: 1px solid var(--spice-selected-row);
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.2s;
}

.copy-youtube-settings-input:focus {
  border-color: var(--spice-button-active);
}

.copy-youtube-settings-checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--spice-text);
  cursor: pointer;
  user-select: none;
}

.copy-youtube-settings-checkbox input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: var(--spice-button-active);
  cursor: pointer;
}

.copy-youtube-settings-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 8px;
}

.copy-youtube-settings-btn {
  padding: 8px 24px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.1s, opacity 0.2s;
}

.copy-youtube-settings-btn:hover {
  transform: scale(1.04);
}

.copy-youtube-settings-btn:active {
  transform: scale(0.96);
}

.copy-youtube-settings-btn.cancel {
  color: var(--spice-text);
  background-color: var(--spice-selected-row);
}

.copy-youtube-settings-btn.save {
  color: var(--spice-text);
  background-color: var(--spice-button-active);
}
`);
var styles_default = sheet2;

// extensions/copyYoutube/src/app.tsx
document.adoptedStyleSheets.push(styles_default);
async function getTrackInfo(uri) {
  const defs = Spicetify.GraphQL.Definitions;
  const trackDefNames = ["queryTrack", "fetchTrack", "getTrack", "track"];
  for (const defName of trackDefNames) {
    const def = defs[defName];
    if (!def) continue;
    try {
      const response = await Spicetify.Platform.GraphQLLoader(def, { uri });
      const data = response?.data;
      if (!data) continue;
      const track = data.trackUnion || data.track || data.trackV2 || data.track_v2;
      if (!track?.name) continue;
      const artists = [];
      const artistItems = Array.isArray(track.artists) ? track.artists : track.artists?.items || [];
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
async function handleCopyYouTubeLink(uris) {
  if (!uris || uris.length === 0) {
    Spicetify.showNotification("Could not identify track", true);
    return;
  }
  const uri = uris[0];
  const apiKey = getApiKey();
  if (!apiKey) {
    Spicetify.showNotification("API key missing \u2014 configure in YouTube Link Settings", true);
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
    const youtubeUrl = `https://youtu.be/${cached}`;
    const copied = await copyToClipboard(youtubeUrl);
    Spicetify.showNotification(copied ? "YouTube link copied" : "Failed to copy to clipboard", !copied);
    return;
  }
  try {
    const result = await searchYouTube(searchQuery, apiKey);
    if (!result) {
      Spicetify.showNotification("No result found", true);
      return;
    }
    setCachedVideoId(cacheKey, result.videoId);
    const youtubeUrl = `https://youtu.be/${result.videoId}`;
    const copied = await copyToClipboard(youtubeUrl);
    Spicetify.showNotification(copied ? "YouTube link copied" : "Failed to copy to clipboard", !copied);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    switch (message) {
      case "NETWORK_ERROR":
        Spicetify.showNotification("Network error \u2014 check your connection", true);
        break;
      case "QUOTA_EXCEEDED":
        Spicetify.showNotification("YouTube API quota exceeded \u2014 try again tomorrow", true);
        break;
      case "INVALID_KEY":
        Spicetify.showNotification("Invalid API key \u2014 check your settings", true);
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
    content: /* @__PURE__ */ jsx(SettingsForm, { onClose: () => PopupModal.hide() }),
    template: true
  });
}
var copyYouTubeMenuItem = new Spicetify.ContextMenu.Item(
  "Copy YouTube Link",
  handleCopyYouTubeLink,
  (uris) => {
    if (!uris || uris.length === 0) return false;
    return uris.some((uri) => {
      const uriObj = Spicetify.URI.from(uri);
      return uriObj && uriObj.type === "track";
    });
  },
  "copy"
);
setTimeout(() => {
  copyYouTubeMenuItem.register();
}, 0);
new Spicetify.Menu.Item("YouTube Link Settings", true, showSettings, "external-link").register();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vdGFza3Mvc2hpbXMvcmVhY3Qtc2hpbS50cyIsICIuLi90YXNrcy9zaGltcy9yZWFjdC1kb20tc2hpbS50cyIsICIuLi9zaGFyZWQvc3R5bGVzL3BvcHVwTW9kYWwuY3NzIiwgIi4uL3Rhc2tzL3NoaW1zL2pzeC1ydW50aW1lLXNoaW0udHMiLCAiLi4vc2hhcmVkL2NvbXBvbmVudHMvaWNvbnMudHN4IiwgIi4uL3NoYXJlZC9jb21wb25lbnRzL3BvcHVwTW9kYWwudHN4IiwgIi4uL2V4dGVuc2lvbnMvY29weVlvdXR1YmUvc3JjL3N0b3JhZ2UudHMiLCAiLi4vZXh0ZW5zaW9ucy9jb3B5WW91dHViZS9zcmMvc2V0dGluZ3MudHN4IiwgIi4uL2V4dGVuc2lvbnMvY29weVlvdXR1YmUvc3JjL2NhY2hlLnRzIiwgIi4uL2V4dGVuc2lvbnMvY29weVlvdXR1YmUvc3JjL3V0aWxzLnRzIiwgIi4uL2V4dGVuc2lvbnMvY29weVlvdXR1YmUvc3JjL3lvdXR1YmUudHMiLCAiLi4vZXh0ZW5zaW9ucy9jb3B5WW91dHViZS9zcmMvY2xpcGJvYXJkLnRzIiwgIi4uL2V4dGVuc2lvbnMvY29weVlvdXR1YmUvc3JjL3N0eWxlcy5jc3MiLCAiLi4vZXh0ZW5zaW9ucy9jb3B5WW91dHViZS9zcmMvYXBwLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IGNvbnN0IHtcbiAgQ2hpbGRyZW4sXG4gIENvbXBvbmVudCxcbiAgRnJhZ21lbnQsXG4gIFByb2ZpbGVyLFxuICBQdXJlQ29tcG9uZW50LFxuICBTdHJpY3RNb2RlLFxuICBTdXNwZW5zZSxcbiAgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQsXG4gIGFjdCxcbiAgY2xvbmVFbGVtZW50LFxuICBjcmVhdGVDb250ZXh0LFxuICBjcmVhdGVFbGVtZW50LFxuICBjcmVhdGVGYWN0b3J5LFxuICBjcmVhdGVSZWYsXG4gIGZvcndhcmRSZWYsXG4gIGlzVmFsaWRFbGVtZW50LFxuICBsYXp5LFxuICBtZW1vLFxuICBzdGFydFRyYW5zaXRpb24sXG4gIHVuc3RhYmxlX2FjdCxcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZUNvbnRleHQsXG4gIHVzZURlYnVnVmFsdWUsXG4gIHVzZURlZmVycmVkVmFsdWUsXG4gIHVzZUVmZmVjdCxcbiAgdXNlSWQsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZUluc2VydGlvbkVmZmVjdCxcbiAgdXNlTGF5b3V0RWZmZWN0LFxuICB1c2VNZW1vLFxuICB1c2VSZWR1Y2VyLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxuICB1c2VTeW5jRXh0ZXJuYWxTdG9yZSxcbiAgdXNlVHJhbnNpdGlvbixcbiAgdmVyc2lvbixcbn0gPSBTcGljZXRpZnkuUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IFNwaWNldGlmeS5SZWFjdDtcbiIsICJleHBvcnQgY29uc3Qge1xuICBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCxcbiAgY3JlYXRlUG9ydGFsLFxuICBjcmVhdGVSb290LFxuICBmaW5kRE9NTm9kZSxcbiAgZmx1c2hTeW5jLFxuICBoeWRyYXRlLFxuICBoeWRyYXRlUm9vdCxcbiAgcmVuZGVyLFxuICB1bm1vdW50Q29tcG9uZW50QXROb2RlLFxuICB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyxcbiAgdW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXIsXG4gIHZlcnNpb24sXG59ID0gU3BpY2V0aWZ5LlJlYWN0RE9NO1xuXG5leHBvcnQgZGVmYXVsdCBTcGljZXRpZnkuUmVhY3RET007XG4iLCAiXG4gICAgICAgICAgY29uc3Qgc2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICAgIHNoZWV0LnJlcGxhY2VTeW5jKGBib2R5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc3BpY2UtcmdiLXNoYWRvdyksIDAuNSk7XG59XG5cbi5tb2RhbF9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zcGljZS1yZ2ItY2FyZCksIDAuOTUpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEodmFyKC0tc3BpY2UtcmdiLXNoYWRvdyksIDAuNSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KSBzYXR1cmF0ZSgxLjQpIGJyaWdodG5lc3MoMS4yKTtcbn1cblxuLm1vZGFsX19jb250YWluZXItLWxhcmdlIHtcbiAgd2lkdGg6IGNsYW1wKDU1MHB4LCA2MHZ3LCA2NTBweCk7XG4gIG1heC1oZWlnaHQ6IDgwdmg7XG59XG5cbi5tb2RhbF9faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAzMnB4IDMycHggOHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSh2YXIoLS1zcGljZS1yZ2Itc2VsZWN0ZWQtcm93KSwgMC4xKTtcbn1cblxuLm1vZGFsX190aXRsZUNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xufVxuXG4ubW9kYWxfX2ljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9kYWxfX3RpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm1vZGFsX19idXR0b25Db250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vZGFsX19idXR0b25Db250YWluZXIgLm1vZGFsX19idXR0b24ge1xuICBoZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zcGljZS1oaWdobGlnaHQpO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLm1vZGFsX19idXR0b25Db250YWluZXIgLm1vZGFsX19idXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5tb2RhbF9fYnV0dG9uQ29udGFpbmVyIC5tb2RhbF9fYnV0dG9uOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbn1cblxuLm1vZGFsX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTZweCAyNHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgc2Nyb2xsYmFyLWd1dHRlcjogc3RhYmxlIGJvdGgtZWRnZXM7XG59XG5cbi5tb2RhbF9fY29udGVudCA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cbmApO1xuICAgICAgICAgIGV4cG9ydCBkZWZhdWx0IHNoZWV0O1xuICAgICAgICAiLCAiZXhwb3J0IGNvbnN0IHsgRnJhZ21lbnQsIGpzeCwganN4cyB9ID0gU3BpY2V0aWZ5LlJlYWN0SlNYO1xuIiwgImltcG9ydCB0eXBlIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJY29uUHJvcHMge1xuICBzaXplPzogbnVtYmVyO1xuICBmaWxsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBSZWFjdEljb25Db21wb25lbnQgPSBGQzxJY29uUHJvcHM+ICYge1xuICBkZWZhdWx0UHJvcHM/OiBQYXJ0aWFsPEljb25Qcm9wcz47XG59O1xuXG5jb25zdCBpY29uRGF0YSA9IHtcbiAgc2VhcmNoOiB7XG4gICAgcGF0aDogXCJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QTYuNDcxIDYuNDcxIDAgMDAxNiA5LjUgNi41IDYuNSAwIDEwOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHpcIixcbiAgICBzaXplOiAyNCxcbiAgfSxcbiAgcGxheToge1xuICAgIHBhdGg6IFwiTTggNXYxNGwxMS03elwiLFxuICAgIHNpemU6IDI0LFxuICB9LFxuICBwYXVzZToge1xuICAgIHBhdGg6IFwiTTYgMTloNFY1SDZ2MTR6bTgtMTR2MTRoNFY1aC00elwiLFxuICAgIHNpemU6IDI0LFxuICB9LFxuICBlZGl0QnV0dG9uOiB7XG4gICAgcGF0aDogXCJNMTcuMzE4IDEuOTc1YTMuMzI5IDMuMzI5IDAgMTE0LjcwNyA0LjcwN0w4LjQ1MSAyMC4yNTZjLS40OS40OS0xLjA4Mi44NjctMS43MzUgMS4xMDNMMi4zNCAyMi45NGExIDEgMCAwMS0xLjI4LTEuMjhsMS41ODEtNC4zNzZhNC43MjYgNC43MjYgMCAwMTEuMTAzLTEuNzM1TDE3LjMxOCAxLjk3NXptMy4yOTMgMS40MTRhMS4zMjkgMS4zMjkgMCAwMC0xLjg4IDBMNS4xNTkgMTYuOTYzYy0uMjgzLjI4My0uNS42MjQtLjYzNiAxbC0uODU3IDIuMzcyIDIuMzcxLS44NTdhMi43MjYgMi43MjYgMCAwMDEuMDAxLS42MzZMMjAuNjExIDUuMjY4YTEuMzI5IDEuMzI5IDAgMDAwLTEuODc5elwiLFxuICAgIHNpemU6IDI0LFxuICB9LFxuICBzZXR0aW5nczoge1xuICAgIHBhdGg6IFwiTTcuOTYgNS4zM2EyLjY3IDIuNjcgMCAxMTUuMzQgMi42NyAyLjY3IDIuNjcgMCAwMS01LjM0LTIuNjdaTTYuNjcgOEExLjMzIDEuMzMgMCAxMDkuMzMgOCAxLjMzIDEuMzMgMCAwMDYuNjcgOFptNC44Mi00LjgxYS45NS45NCAwIDAxLTEuMS0uNzVMMTAuMDUuNTVBLjQ3LjQ3IDAgMDA5LjY4LjE3IDguMSA4LjEgMCAwMDYuMzIuMTcuNDcuNDcgMCAwMDUuOTYuNTVMNS42MSAyLjQ0YS45NS45NSAwIDAxLTEuMjUuNzFMMi41NSAyLjUxYS40Ny40NyAwIDAwLS41MS4xM0MxLjI4IDMuNDcuNzEgNC40Ni4zNiA1LjUzYS40Ny40NyAwIDAwLjE0LjUxTDEuOTcgNy4yOGEuOTQuOTQgMCAwMTAgMS40M0wuNSA5Ljk1YS40Ny40NyAwIDAwLS4xNC41MSA3Ljk4IDcuOTggMCAwMDEuNjggMi45LjQ3LjQ3IDAgMDAuNTEuMTNsMS44MS0uNjVhLjk0Ljk0IDAgMDExLjI1LjcybC4zNCAxLjg5Yy4wNC4xOC4xOC4zMy4zNy4zN2E4LjEgOC4xIDAgMDAzLjM2IDAgLjQ3LjQ3IDAgMDAuMzctLjM3bC4zNC0xLjg5YS45NS45NSAwIDAxMS4yNS0uNzJsMS44MS42NWMuMTguMDYuMzguMDEuNTEtLjEzLjc2LS44NCAxLjM0LTEuODIgMS42OC0yLjlhLjQ3LjQ3IDAgMDAtLjE0LS41TDE0LjAzIDguNzJhLjk0Ljk0IDAgMDEwLTEuNDRMMTUuNSA2LjA0YS40Ny40NyAwIDAwLjE0LS41IDcuOTggNy45OCAwIDAwLTEuNjgtMi45LjQ3LjQ3IDAgMDAtLjUxLS4xM2wtMS44MS42NWEuOTUuOTUgMCAwMS0uMTUuMDRabS04LjgyLjc4IDEuMjUuNDRhMi4yOCAyLjI4IDAgMDAzLTEuNzNsLjI0LTEuM2E2LjgxIDYuODEgMCAwMTEuNjggMGwuMjQgMS4zYTIuMjggMi4yOCAwIDAwMy4wMSAxLjczbDEuMjQtLjQ0Yy4zNC40NC42My45My44NCAxLjQ0bC0xIC44NWEyLjI3IDIuMjcgMCAwMDAgMy40OGwxIC44NWE2LjY1IDYuNjUgMCAwMS0uODQgMS40NGwtMS4yNC0uNDRBMi4yOCAyLjI4IDAgMDA5LjA4IDEzLjMybC0uMjQgMS4yOWE2LjggNi44IDAgMDEtMS42OSAwbC0uMjMtMS4yOUEyLjI4IDIuMjggMCAwMDMuOTEgMTEuNTlsLTEuMjQuNDRhNi42NSA2LjY1IDAgMDEtLjg0LTEuNDRsMS0uODZhMi4yNyAyLjI3IDAgMDAwLTMuNDdsLTEtLjg1Yy4yMS0uNTEuNS0xIC44NC0xLjQ0WlwiLFxuICAgIHNpemU6IDE2LFxuICB9LFxuICBjbG9zZToge1xuICAgIHBhdGg6IFwiTTMxLjA5OCAyOS43OTQgMTYuOTU1IDE1LjY1IDMxLjA5NyAxLjUxIDI5LjY4My4wOTMgMTUuNTQgMTQuMjM3IDEuNC4wOTQtLjAxNiAxLjUwOCAxNC4xMjYgMTUuNjUtLjAxNiAyOS43OTVsMS40MTQgMS40MTRMMTUuNTQgMTcuMDY1bDE0LjE0NCAxNC4xNDNcIixcbiAgICBzaXplOiAzMixcbiAgfSxcbiAgZ2l0aHViOiB7XG4gICAgcGF0aDogXCJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyelwiLFxuICAgIHNpemU6IDI0LFxuICB9LFxuICBkdXBsaWNhdGU6IHtcbiAgICBwYXRoOiBcIk0xNSAzLjVjMC0uNS0uNS0xLTEtMUgxMVYxYzAtLjUtLjUtMS0xLTFIMkMxLjUgMCAxIC41IDEgMVYxMS41YzAgLjUuNSAxIDEgMUg0LjVWMTVjMCAuNS41IDEgMSAxSDE0Yy41IDAgMS0uNSAxLTFaTTIuNSAyYzAtLjI1LjI1LS41LjUtLjVIOWMuMjUgMCAuNS4yNS41LjV2OC41YzAgLjI1LS4yNS41LS41LjVIM2MtLjI1IDAtLjUtLjI1LS41LS41Wm00IDEyLjVjLS4yNSAwLS41LS4yNS0uNS0uNVYxMi41aDRjLjUgMCAxLS41IDEtMVY0aDJjLjI1IDAgLjUuMjUuNS41VjE0YzAgLjI1LS4yNS41LS41LjVaXCIsXG4gICAgc2l6ZTogMTYsXG4gIH0sXG59IGFzIGNvbnN0O1xuZXhwb3J0IHR5cGUgSWNvbk5hbWUgPSBrZXlvZiB0eXBlb2YgaWNvbkRhdGE7XG5cbmNvbnN0IGNyZWF0ZVJlYWN0Q29tcG9uZW50ID0gKG5hbWU6IEljb25OYW1lKTogUmVhY3RJY29uQ29tcG9uZW50ID0+IHtcbiAgY29uc3QgeyBwYXRoLCBzaXplOiBkZWZhdWx0U2l6ZSB9ID0gaWNvbkRhdGFbbmFtZV07XG4gIGNvbnN0IENvbXBvbmVudDogUmVhY3RJY29uQ29tcG9uZW50ID0gKHsgc2l6ZSA9IGRlZmF1bHRTaXplLCBmaWxsID0gXCJjdXJyZW50Q29sb3JcIiB9KSA9PiAoXG4gICAgPHN2Z1xuICAgICAgYXJpYS1sYWJlbD17bmFtZX1cbiAgICAgIGZpbGw9e2ZpbGx9XG4gICAgICBoZWlnaHQ9e3NpemV9XG4gICAgICByb2xlPVwiaW1nXCJcbiAgICAgIHZpZXdCb3g9e2AwIDAgJHtkZWZhdWx0U2l6ZX0gJHtkZWZhdWx0U2l6ZX1gfVxuICAgICAgd2lkdGg9e3NpemV9XG4gICAgPlxuICAgICAgPHBhdGggZD17cGF0aH0gLz5cbiAgICA8L3N2Zz5cbiAgKTtcbiAgQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaXplOiBkZWZhdWx0U2l6ZSxcbiAgICBmaWxsOiBcImN1cnJlbnRDb2xvclwiLFxuICB9O1xuICByZXR1cm4gQ29tcG9uZW50O1xufTtcblxuaW50ZXJmYWNlIEljb25Db2xsZWN0aW9uIHtcbiAgcmF3OiBSZWNvcmQ8SWNvbk5hbWUsIHN0cmluZz47XG4gIHJlYWN0OiBSZWNvcmQ8SWNvbk5hbWUsIFJlYWN0SWNvbkNvbXBvbmVudD47XG4gIGh0bWw6IFJlY29yZDxJY29uTmFtZSwgc3RyaW5nPjtcbn1cblxuY29uc3QgeyByYXcsIHJlYWN0LCBodG1sIH0gPSAoT2JqZWN0LmtleXMoaWNvbkRhdGEpIGFzIEljb25OYW1lW10pLnJlZHVjZTxJY29uQ29sbGVjdGlvbj4oXG4gIChhY2MsIG5hbWUpID0+IHtcbiAgICBjb25zdCBzaXplID0gaWNvbkRhdGFbbmFtZV0uc2l6ZTtcbiAgICBhY2MucmF3W25hbWVdID0gaWNvbkRhdGFbbmFtZV0ucGF0aDtcbiAgICBhY2MucmVhY3RbbmFtZV0gPSBjcmVhdGVSZWFjdENvbXBvbmVudChuYW1lKTtcbiAgICBhY2MuaHRtbFtuYW1lXSA9IGA8c3ZnIGNsYXNzPVwiYXJ0aXN0LXNlYXJjaC1pY29uXCIgd2lkdGg9XCIke3NpemV9XCIgaGVpZ2h0PVwiJHtzaXplfVwiIHZpZXdCb3g9XCIwIDAgJHtzaXplfSAke3NpemV9XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPjxwYXRoIGQ9XCIke2ljb25EYXRhW25hbWVdLnBhdGh9XCIvPjwvc3ZnPmA7XG4gICAgcmV0dXJuIGFjYztcbiAgfSxcbiAge1xuICAgIHJhdzoge30gYXMgUmVjb3JkPEljb25OYW1lLCBzdHJpbmc+LFxuICAgIHJlYWN0OiB7fSBhcyBSZWNvcmQ8SWNvbk5hbWUsIFJlYWN0SWNvbkNvbXBvbmVudD4sXG4gICAgaHRtbDoge30gYXMgUmVjb3JkPEljb25OYW1lLCBzdHJpbmc+LFxuICB9LFxuKTtcblxuZXhwb3J0IGNvbnN0IEljb25zID0ge1xuICBSZWFjdDogcmVhY3QsXG4gIEhUTUw6IGh0bWwsXG4gIFJBVzogcmF3LFxufTtcbiIsICJpbXBvcnQgdHlwZSB7IENvbXBvbmVudFR5cGUsIEZDLCBLZXlib2FyZEV2ZW50LCBNb3VzZUV2ZW50LCBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGlzVmFsaWRFbGVtZW50LCBtZW1vLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCwgdHlwZSBSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wb3B1cE1vZGFsLmNzc1wiIHdpdGggeyB0eXBlOiBcImNzc1wiIH07XG5pbXBvcnQgeyBJY29ucyB9IGZyb20gXCIuL2ljb25zLnRzeFwiO1xuXG5kb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChzdHlsZXMpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvcHVwTW9kYWxQcm9wcyB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBjb250ZW50OiBSZWFjdE5vZGUgfCBDb21wb25lbnRUeXBlPGFueT47XG4gIGlzTGFyZ2U/OiBib29sZWFuO1xuICBidXR0b25zPzogUmVhY3ROb2RlO1xuICBpY29uPzogUmVhY3ROb2RlO1xuICB0ZW1wbGF0ZT86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBNb2RhbENvbXBvbmVudFByb3BzIGV4dGVuZHMgUG9wdXBNb2RhbFByb3BzIHtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbn1cblxubGV0IG1vZGFsUm9vdDogUm9vdCB8IG51bGwgPSBudWxsO1xuY29uc3QgbW9kYWxDb250YWluZXJJZCA9IFwicG9wdXAtbW9kYWwtY29udGFpbmVyXCI7XG5cbmNvbnN0IGNsb3NlTW9kYWwgPSAoKTogdm9pZCA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZGFsQ29udGFpbmVySWQpO1xuICBpZiAobW9kYWxSb290KSB7XG4gICAgbW9kYWxSb290LnVubW91bnQoKTtcbiAgICBtb2RhbFJvb3QgPSBudWxsO1xuICB9XG4gIGlmIChjb250YWluZXIpIHtcbiAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gIH1cbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xufTtcblxuY29uc3QgTW9kYWxDb21wb25lbnQ6IEZDPE1vZGFsQ29tcG9uZW50UHJvcHM+ID0gbWVtbyhcbiAgKHsgdGl0bGUsIGNvbnRlbnQsIGlzTGFyZ2UsIGJ1dHRvbnMsIGljb24sIHRlbXBsYXRlLCBvbkNsb3NlIH0pID0+IHtcbiAgICBjb25zdCBtb2RhbFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG5cbiAgICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgb25DbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duIGFzIGFueSk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24gYXMgYW55KTtcbiAgICAgIH07XG4gICAgfSwgW29uQ2xvc2VdKTtcblxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgICAgb25DbG9zZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVCYWNrZHJvcENsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWxSZWYuY3VycmVudCkge1xuICAgICAgICBoYW5kbGVDbG9zZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJDb250ZW50ID0gKCk6IFJlYWN0Tm9kZSA9PiB7XG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY29udGVudCkpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjb25zdCBDb250ZW50Q29tcG9uZW50ID0gY29udGVudCBhcyBDb21wb25lbnRUeXBlO1xuICAgICAgICByZXR1cm4gPENvbnRlbnRDb21wb25lbnQgLz47XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9O1xuXG4gICAgaWYgKHRlbXBsYXRlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgb25DbGljaz17aGFuZGxlQmFja2Ryb3BDbGlja30gcmVmPXttb2RhbFJlZn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Btb2RhbF9fY29udGFpbmVyJHtpc0xhcmdlID8gXCIgbW9kYWxfX2NvbnRhaW5lci0tbGFyZ2VcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9fdGl0bGVDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICB7aWNvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19pY29uXCI+e2ljb259PC9kaXY+fVxuICAgICAgICAgICAgICAgIHt0aXRsZSAmJiA8aDEgY2xhc3NOYW1lPVwibW9kYWxfX3RpdGxlXCI+e3RpdGxlfTwvaDE+fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9fYnV0dG9uQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge2J1dHRvbnN9XG4gICAgICAgICAgICAgICAgPFNwaWNldGlmeS5SZWFjdENvbXBvbmVudC5Ub29sdGlwV3JhcHBlciBsYWJlbD1cIkNsb3NlXCIgcGxhY2VtZW50PVwidG9wXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1vZGFsX19idXR0b24gbW9kYWxfX2J1dHRvbi0tY2xvc2VcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICAgICAgICAgIDxJY29ucy5SZWFjdC5jbG9zZSBzaXplPXsxOH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvU3BpY2V0aWZ5LlJlYWN0Q29tcG9uZW50LlRvb2x0aXBXcmFwcGVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9fY29udGVudFwiPntyZW5kZXJDb250ZW50KCl9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIG9uQ2xpY2s9e2hhbmRsZUJhY2tkcm9wQ2xpY2t9IHJlZj17bW9kYWxSZWZ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1vZGFsX19jb250YWluZXIke2lzTGFyZ2UgPyBcIiBtb2RhbF9fY29udGFpbmVyLS1sYXJnZVwiIDogXCJcIn1gfT5cbiAgICAgICAgICB7cmVuZGVyQ29udGVudCgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0sXG4pO1xuXG5leHBvcnQgY29uc3QgUG9wdXBNb2RhbCA9IChwcm9wczogUG9wdXBNb2RhbFByb3BzKTogdm9pZCA9PiB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2RhbENvbnRhaW5lcklkKSkge1xuICAgIGNsb3NlTW9kYWwoKTtcbiAgfVxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuaWQgPSBtb2RhbENvbnRhaW5lcklkO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgbW9kYWxSb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuICBtb2RhbFJvb3QucmVuZGVyKDxNb2RhbENvbXBvbmVudCB7Li4ucHJvcHN9IG9uQ2xvc2U9e2Nsb3NlTW9kYWx9IC8+KTtcbn07XG5cblBvcHVwTW9kYWwuaGlkZSA9IGNsb3NlTW9kYWw7XG4iLCAiY29uc3QgQVBJX0tFWV9TVE9SQUdFID0gXCJjb3B5WW91dHViZS5hcGlLZXlcIjtcbmNvbnN0IFBSRUZFUl9PRkZJQ0lBTF9TVE9SQUdFID0gXCJjb3B5WW91dHViZS5wcmVmZXJPZmZpY2lhbFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBpS2V5KCk6IHN0cmluZyB8IG51bGwge1xuICByZXR1cm4gU3BpY2V0aWZ5LkxvY2FsU3RvcmFnZS5nZXQoQVBJX0tFWV9TVE9SQUdFKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEFwaUtleShrZXk6IHN0cmluZyk6IHZvaWQge1xuICBTcGljZXRpZnkuTG9jYWxTdG9yYWdlLnNldChBUElfS0VZX1NUT1JBR0UsIGtleSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcmVmZXJPZmZpY2lhbCgpOiBib29sZWFuIHtcbiAgcmV0dXJuIFNwaWNldGlmeS5Mb2NhbFN0b3JhZ2UuZ2V0KFBSRUZFUl9PRkZJQ0lBTF9TVE9SQUdFKSA9PT0gXCJ0cnVlXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRQcmVmZXJPZmZpY2lhbCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICBTcGljZXRpZnkuTG9jYWxTdG9yYWdlLnNldChQUkVGRVJfT0ZGSUNJQUxfU1RPUkFHRSwgU3RyaW5nKHZhbHVlKSk7XG59XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldEFwaUtleSwgc2V0QXBpS2V5LCBnZXRQcmVmZXJPZmZpY2lhbCwgc2V0UHJlZmVyT2ZmaWNpYWwgfSBmcm9tIFwiLi9zdG9yYWdlLnRzXCI7XG5cbmludGVyZmFjZSBTZXR0aW5nc0Zvcm1Qcm9wcyB7XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTZXR0aW5nc0Zvcm0oeyBvbkNsb3NlIH06IFNldHRpbmdzRm9ybVByb3BzKSB7XG4gIGNvbnN0IFthcGlLZXksIHNldEFwaUtleVN0YXRlXSA9IHVzZVN0YXRlKGdldEFwaUtleSgpIHx8IFwiXCIpO1xuICBjb25zdCBbcHJlZmVyT2ZmaWNpYWwsIHNldFByZWZlck9mZmljaWFsU3RhdGVdID0gdXNlU3RhdGUoZ2V0UHJlZmVyT2ZmaWNpYWwoKSk7XG5cbiAgY29uc3QgaGFuZGxlU2F2ZSA9ICgpID0+IHtcbiAgICBzZXRBcGlLZXkoYXBpS2V5LnRyaW0oKSk7XG4gICAgc2V0UHJlZmVyT2ZmaWNpYWwocHJlZmVyT2ZmaWNpYWwpO1xuICAgIG9uQ2xvc2UoKTtcbiAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihcIllvdVR1YmUgQVBJIHNldHRpbmdzIHNhdmVkXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5LXlvdXR1YmUtc2V0dGluZ3NcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29weS15b3V0dWJlLXNldHRpbmdzLWZpZWxkXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb3B5LXlvdXR1YmUtc2V0dGluZ3MtbGFiZWxcIiBodG1sRm9yPVwieW91dHViZS1hcGkta2V5XCI+XG4gICAgICAgICAgR29vZ2xlIFlvdVR1YmUgQVBJIEtleVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb3B5LXlvdXR1YmUtc2V0dGluZ3MtaW5wdXRcIlxuICAgICAgICAgIGlkPVwieW91dHViZS1hcGkta2V5XCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFwaUtleVN0YXRlKChlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIFlvdVR1YmUgRGF0YSBBUEkgdjMga2V5XCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e2FwaUtleX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHkteW91dHViZS1zZXR0aW5ncy1maWVsZFwiPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29weS15b3V0dWJlLXNldHRpbmdzLWNoZWNrYm94XCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjaGVja2VkPXtwcmVmZXJPZmZpY2lhbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJlZmVyT2ZmaWNpYWxTdGF0ZSgoZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZCl9XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4+UHJlZmVyIG9mZmljaWFsIHZpZGVvczwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHkteW91dHViZS1zZXR0aW5ncy1idXR0b25zXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29weS15b3V0dWJlLXNldHRpbmdzLWJ0biBjYW5jZWxcIiBvbkNsaWNrPXtvbkNsb3NlfSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgQ2FuY2VsXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvcHkteW91dHViZS1zZXR0aW5ncy1idG4gc2F2ZVwiIG9uQ2xpY2s9e2hhbmRsZVNhdmV9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICBTYXZlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBDYWNoZUVudHJ5IH0gZnJvbSBcIi4vdHlwZXMudHNcIjtcblxuY29uc3QgQ0FDSEVfRFVSQVRJT04gPSA1ICogNjAgKiAxMDAwO1xuXG5jb25zdCBjYWNoZSA9IG5ldyBNYXA8c3RyaW5nLCBDYWNoZUVudHJ5PigpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FjaGVkVmlkZW9JZChrZXk6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCBlbnRyeSA9IGNhY2hlLmdldChrZXkpO1xuICBpZiAoIWVudHJ5KSByZXR1cm4gbnVsbDtcblxuICBpZiAoRGF0ZS5ub3coKSAtIGVudHJ5LnRpbWVzdGFtcCA+IENBQ0hFX0RVUkFUSU9OKSB7XG4gICAgY2FjaGUuZGVsZXRlKGtleSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZW50cnkudmlkZW9JZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENhY2hlZFZpZGVvSWQoa2V5OiBzdHJpbmcsIHZpZGVvSWQ6IHN0cmluZyk6IHZvaWQge1xuICBjYWNoZS5zZXQoa2V5LCB7IHZpZGVvSWQsIHRpbWVzdGFtcDogRGF0ZS5ub3coKSB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ2FjaGVLZXkodGl0bGU6IHN0cmluZywgYXJ0aXN0czogc3RyaW5nW10sIHByZWZlck9mZmljaWFsOiBib29sZWFuKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke3RpdGxlfXwke2FydGlzdHMuam9pbihcInxcIil9fCR7cHJlZmVyT2ZmaWNpYWwgPyBcIjFcIiA6IFwiMFwifWA7XG59XG4iLCAiY29uc3QgQ0xFQU5fUEFUVEVSTlM6IFJlZ0V4cFtdID0gW1xuICAvXFxzKlxcKFJlbWFzdGVyZWQoXFxzK1xcZHs0fSk/XFwpL2dpLFxuICAvXFxzKlxcKFJlbWFzdGVyXFwpL2dpLFxuICAvXFxzKlxcKE9mZmljaWFsIEF1ZGlvXFwpL2dpLFxuICAvXFxzKlxcKE9mZmljaWFsIFZpZGVvXFwpL2dpLFxuICAvXFxzKlxcKE9mZmljaWFsIE11c2ljIFZpZGVvXFwpL2dpLFxuICAvXFxzKlxcKEx5cmljIFZpZGVvXFwpL2dpLFxuICAvXFxzKlxcKExpdmUoXFxzK2F0XFxzKy4rKT9cXCkvZ2ksXG4gIC9cXHMqXFwoVmlzdWFsaXplclxcKS9naSxcbiAgL1xccypcXChBdWRpb1xcKS9naSxcbiAgL1xccypcXChFeHBsaWNpdFxcKS9naSxcbiAgL1xccypcXChEZWx1eGUoXFxzK0VkaXRpb24pP1xcKS9naSxcbiAgL1xccypcXChCb251cyBUcmFja1xcKS9naSxcbiAgL1xccypcXChSYWRpbyBFZGl0XFwpL2dpLFxuICAvXFxzKlxcKFNpbmdsZSBFZGl0XFwpL2dpLFxuICAvXFxzKlxcKENsZWFuXFwpL2dpLFxuICAvXFxzKlxcKEluc3RydW1lbnRhbFxcKS9naSxcbiAgL1xccypcXChBY291c3RpYyhcXHMrVmVyc2lvbik/XFwpL2dpLFxuICAvXFxzKlxcKGZlYXRcXC5cXHMrLis/XFwpL2dpLFxuICAvXFxzKlxcKGZ0XFwuXFxzKy4rP1xcKS9naSxcbiAgL1xccypcXFtSZW1hc3RlcmVkKFxccytcXGR7NH0pP1xcXS9naSxcbiAgL1xccypcXFtPZmZpY2lhbCBBdWRpb1xcXS9naSxcbiAgL1xccypcXFtPZmZpY2lhbCBWaWRlb1xcXS9naSxcbiAgL1xccypcXFtPZmZpY2lhbCBNdXNpYyBWaWRlb1xcXS9naSxcbiAgL1xccypcXFtMaXZlXFxdL2dpLFxuICAvXFxzKlxcW1Zpc3VhbGl6ZXJcXF0vZ2ksXG4gIC9cXHMqXFxbQXVkaW9cXF0vZ2ksXG4gIC9cXHMqXFxbRXhwbGljaXRcXF0vZ2ksXG4gIC9cXHMqXFxbRGVsdXhlKFxccytFZGl0aW9uKT9cXF0vZ2ksXG4gIC9cXHMqXFxbUmFkaW8gRWRpdFxcXS9naSxcbiAgL1xccyotIFJlbWFzdGVyZWQoXFxzK1xcZHs0fSk/L2dpLFxuICAvXFxzKi0gUmFkaW8gRWRpdC9naSxcbiAgL1xccyotIFNpbmdsZSBFZGl0L2dpLFxuICAvXFxzKi0gQWNvdXN0aWMoXFxzK1ZlcnNpb24pPy9naSxcbiAgL1xccyotIExpdmUoXFxzK2F0XFxzKy4rKT8vZ2ksXG4gIC9cXHMqLSBPZmZpY2lhbCBBdWRpby9naSxcbiAgL1xccyotIE9mZmljaWFsIFZpZGVvL2dpLFxuICAvXFxzKi0gT2ZmaWNpYWwgTXVzaWMgVmlkZW8vZ2ksXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5RdWVyeShxdWVyeTogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IGNsZWFuZWQgPSBxdWVyeTtcbiAgZm9yIChjb25zdCBwYXR0ZXJuIG9mIENMRUFOX1BBVFRFUk5TKSB7XG4gICAgY2xlYW5lZCA9IGNsZWFuZWQucmVwbGFjZShwYXR0ZXJuLCBcIlwiKTtcbiAgfVxuICByZXR1cm4gY2xlYW5lZC50cmltKCkucmVwbGFjZSgvXFxzKy9nLCBcIiBcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFNlYXJjaFF1ZXJ5KHRpdGxlOiBzdHJpbmcsIGFydGlzdHM6IHN0cmluZ1tdLCBwcmVmZXJPZmZpY2lhbDogYm9vbGVhbik6IHN0cmluZyB7XG4gIGNvbnN0IGFydGlzdHNTdHIgPSBhcnRpc3RzLmpvaW4oXCIgXCIpO1xuICBsZXQgcXVlcnkgPSBgJHt0aXRsZX0gJHthcnRpc3RzU3RyfWAudHJpbSgpO1xuICBpZiAocHJlZmVyT2ZmaWNpYWwpIHtcbiAgICBxdWVyeSA9IGAke3F1ZXJ5fSBPZmZpY2lhbGA7XG4gIH1cbiAgcmV0dXJuIGNsZWFuUXVlcnkocXVlcnkpO1xufVxuIiwgImltcG9ydCB0eXBlIHsgWW91VHViZVNlYXJjaFJlc3VsdCB9IGZyb20gXCIuL3R5cGVzLnRzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2hZb3VUdWJlKHF1ZXJ5OiBzdHJpbmcsIGFwaUtleTogc3RyaW5nKTogUHJvbWlzZTxZb3VUdWJlU2VhcmNoUmVzdWx0IHwgbnVsbD4ge1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9zZWFyY2hcIik7XG4gIHVybC5zZWFyY2hQYXJhbXMuc2V0KFwicGFydFwiLCBcInNuaXBwZXRcIik7XG4gIHVybC5zZWFyY2hQYXJhbXMuc2V0KFwidHlwZVwiLCBcInZpZGVvXCIpO1xuICB1cmwuc2VhcmNoUGFyYW1zLnNldChcIm1heFJlc3VsdHNcIiwgXCIxXCIpO1xuICB1cmwuc2VhcmNoUGFyYW1zLnNldChcInFcIiwgcXVlcnkpO1xuICB1cmwuc2VhcmNoUGFyYW1zLnNldChcImtleVwiLCBhcGlLZXkpO1xuXG4gIGxldCByZXNwb25zZTogUmVzcG9uc2U7XG4gIHRyeSB7XG4gICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwudG9TdHJpbmcoKSk7XG4gIH0gY2F0Y2gge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5FVFdPUktfRVJST1JcIik7XG4gIH1cblxuICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnN0IHJlYXNvbiA9IGJvZHk/LmVycm9yPy5lcnJvcnM/LlswXT8ucmVhc29uO1xuICAgICAgaWYgKHJlYXNvbiA9PT0gXCJxdW90YUV4Y2VlZGVkXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUVVPVEFfRVhDRUVERURcIik7XG4gICAgICB9XG4gICAgICBpZiAocmVhc29uID09PSBcImtleUludmFsaWRcIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJTlZBTElEX0tFWVwiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIEVycm9yICYmIGUubWVzc2FnZSAhPT0gXCJBQ0NFU1NfREVOSUVEXCIpIHRocm93IGU7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIkFDQ0VTU19ERU5JRURcIik7XG4gIH1cblxuICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJTlZBTElEX0tFWVwiKTtcbiAgfVxuXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBUElfRVJST1JcIik7XG4gIH1cblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIGlmICghZGF0YS5pdGVtcyB8fCBkYXRhLml0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgdmlkZW9JZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gZGF0YS5pdGVtc1swXT8uaWQ/LnZpZGVvSWQ7XG4gIGlmICghdmlkZW9JZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHsgdmlkZW9JZCB9O1xufVxuIiwgImV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQodGV4dDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2gge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgIHRleHRhcmVhLnZhbHVlID0gdGV4dDtcbiAgICAgIHRleHRhcmVhLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgdGV4dGFyZWEuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XG4gICAgICB0ZXh0YXJlYS5zZWxlY3QoKTtcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGV4dGFyZWEpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iLCAiXG4gICAgICAgICAgY29uc3Qgc2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICAgIHNoZWV0LnJlcGxhY2VTeW5jKGAuY29weS15b3V0dWJlLXNldHRpbmdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xuICBwYWRkaW5nOiA4cHggMDtcbn1cblxuLmNvcHkteW91dHViZS1zZXR0aW5ncy1maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNnB4O1xufVxuXG4uY29weS15b3V0dWJlLXNldHRpbmdzLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tc3BpY2UtdGV4dCk7XG59XG5cbi5jb3B5LXlvdXR1YmUtc2V0dGluZ3MtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLXNwaWNlLXRleHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zcGljZS1jYXJkKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3BpY2Utc2VsZWN0ZWQtcm93KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycztcbn1cblxuLmNvcHkteW91dHViZS1zZXR0aW5ncy1pbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc3BpY2UtYnV0dG9uLWFjdGl2ZSk7XG59XG5cbi5jb3B5LXlvdXR1YmUtc2V0dGluZ3MtY2hlY2tib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tc3BpY2UtdGV4dCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5jb3B5LXlvdXR1YmUtc2V0dGluZ3MtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgYWNjZW50LWNvbG9yOiB2YXIoLS1zcGljZS1idXR0b24tYWN0aXZlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29weS15b3V0dWJlLXNldHRpbmdzLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uY29weS15b3V0dWJlLXNldHRpbmdzLWJ0biB7XG4gIHBhZGRpbmc6IDhweCAyNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcywgb3BhY2l0eSAwLjJzO1xufVxuXG4uY29weS15b3V0dWJlLXNldHRpbmdzLWJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XG59XG5cbi5jb3B5LXlvdXR1YmUtc2V0dGluZ3MtYnRuOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45Nik7XG59XG5cbi5jb3B5LXlvdXR1YmUtc2V0dGluZ3MtYnRuLmNhbmNlbCB7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS10ZXh0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3BpY2Utc2VsZWN0ZWQtcm93KTtcbn1cblxuLmNvcHkteW91dHViZS1zZXR0aW5ncy1idG4uc2F2ZSB7XG4gIGNvbG9yOiB2YXIoLS1zcGljZS10ZXh0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3BpY2UtYnV0dG9uLWFjdGl2ZSk7XG59XG5gKTtcbiAgICAgICAgICBleHBvcnQgZGVmYXVsdCBzaGVldDtcbiAgICAgICAgIiwgImltcG9ydCB7IFBvcHVwTW9kYWwgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvcG9wdXBNb2RhbC50c3hcIjtcbmltcG9ydCB7IFNldHRpbmdzRm9ybSB9IGZyb20gXCIuL3NldHRpbmdzLnRzeFwiO1xuaW1wb3J0IHsgZ2V0QXBpS2V5LCBnZXRQcmVmZXJPZmZpY2lhbCB9IGZyb20gXCIuL3N0b3JhZ2UudHNcIjtcbmltcG9ydCB7IGdldENhY2hlZFZpZGVvSWQsIHNldENhY2hlZFZpZGVvSWQsIGJ1aWxkQ2FjaGVLZXkgfSBmcm9tIFwiLi9jYWNoZS50c1wiO1xuaW1wb3J0IHsgYnVpbGRTZWFyY2hRdWVyeSB9IGZyb20gXCIuL3V0aWxzLnRzXCI7XG5pbXBvcnQgeyBzZWFyY2hZb3VUdWJlIH0gZnJvbSBcIi4veW91dHViZS50c1wiO1xuaW1wb3J0IHsgY29weVRvQ2xpcGJvYXJkIH0gZnJvbSBcIi4vY2xpcGJvYXJkLnRzXCI7XG5pbXBvcnQgdHlwZSB7IFRyYWNrSW5mbyB9IGZyb20gXCIuL3R5cGVzLnRzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5jc3NcIiB3aXRoIHsgdHlwZTogXCJjc3NcIiB9O1xuXG5kb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChzdHlsZXMpO1xuXG5pbnRlcmZhY2UgR3JhcGhRTFRyYWNrIHtcbiAgbmFtZT86IHN0cmluZztcbiAgYXJ0aXN0cz86IHtcbiAgICBpdGVtcz86IEFycmF5PHtcbiAgICAgIHByb2ZpbGU/OiB7IG5hbWU/OiBzdHJpbmcgfTtcbiAgICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgfT47XG4gIH0gfCBBcnJheTx7XG4gICAgcHJvZmlsZT86IHsgbmFtZT86IHN0cmluZyB9O1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gIH0+O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRUcmFja0luZm8odXJpOiBzdHJpbmcpOiBQcm9taXNlPFRyYWNrSW5mbyB8IG51bGw+IHtcbiAgY29uc3QgZGVmcyA9IFNwaWNldGlmeS5HcmFwaFFMLkRlZmluaXRpb25zIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBjb25zdCB0cmFja0RlZk5hbWVzID0gW1wicXVlcnlUcmFja1wiLCBcImZldGNoVHJhY2tcIiwgXCJnZXRUcmFja1wiLCBcInRyYWNrXCJdO1xuXG4gIGZvciAoY29uc3QgZGVmTmFtZSBvZiB0cmFja0RlZk5hbWVzKSB7XG4gICAgY29uc3QgZGVmID0gZGVmc1tkZWZOYW1lXTtcbiAgICBpZiAoIWRlZikgY29udGludWU7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBTcGljZXRpZnkuUGxhdGZvcm0uR3JhcGhRTExvYWRlcihkZWYsIHsgdXJpIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IChyZXNwb25zZSBhcyB7IGRhdGE/OiBSZWNvcmQ8c3RyaW5nLCBHcmFwaFFMVHJhY2s+IH0pPy5kYXRhO1xuICAgICAgaWYgKCFkYXRhKSBjb250aW51ZTtcblxuICAgICAgY29uc3QgdHJhY2s6IEdyYXBoUUxUcmFjayB8IHVuZGVmaW5lZCA9IGRhdGEudHJhY2tVbmlvbiB8fCBkYXRhLnRyYWNrIHx8IGRhdGEudHJhY2tWMiB8fCBkYXRhLnRyYWNrX3YyO1xuICAgICAgaWYgKCF0cmFjaz8ubmFtZSkgY29udGludWU7XG5cbiAgICAgIGNvbnN0IGFydGlzdHM6IHN0cmluZ1tdID0gW107XG4gICAgICBjb25zdCBhcnRpc3RJdGVtcyA9IEFycmF5LmlzQXJyYXkodHJhY2suYXJ0aXN0cylcbiAgICAgICAgPyB0cmFjay5hcnRpc3RzXG4gICAgICAgIDogdHJhY2suYXJ0aXN0cz8uaXRlbXMgfHwgW107XG5cbiAgICAgIGZvciAoY29uc3QgYSBvZiBhcnRpc3RJdGVtcykge1xuICAgICAgICBpZiAoYT8ucHJvZmlsZT8ubmFtZSkgYXJ0aXN0cy5wdXNoKGEucHJvZmlsZS5uYW1lKTtcbiAgICAgICAgZWxzZSBpZiAoYT8ubmFtZSkgYXJ0aXN0cy5wdXNoKGEubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IG5hbWU6IHRyYWNrLm5hbWUsIGFydGlzdHMgfTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgfVxuXG4gIGNvbnNvbGUud2FybihcIltDb3B5IFlvdVR1YmUgTGlua10gTm8gY29tcGF0aWJsZSBHcmFwaFFMIHRyYWNrIGRlZmluaXRpb24gZm91bmRcIik7XG4gIHJldHVybiBudWxsO1xufVxuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVDb3B5WW91VHViZUxpbmsodXJpczogc3RyaW5nW10pIHtcbiAgaWYgKCF1cmlzIHx8IHVyaXMubGVuZ3RoID09PSAwKSB7XG4gICAgU3BpY2V0aWZ5LnNob3dOb3RpZmljYXRpb24oXCJDb3VsZCBub3QgaWRlbnRpZnkgdHJhY2tcIiwgdHJ1ZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgdXJpID0gdXJpc1swXTtcblxuICBjb25zdCBhcGlLZXkgPSBnZXRBcGlLZXkoKTtcbiAgaWYgKCFhcGlLZXkpIHtcbiAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihcIkFQSSBrZXkgbWlzc2luZyBcdTIwMTQgY29uZmlndXJlIGluIFlvdVR1YmUgTGluayBTZXR0aW5nc1wiLCB0cnVlKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB0cmFja0luZm8gPSBhd2FpdCBnZXRUcmFja0luZm8odXJpKTtcbiAgaWYgKCF0cmFja0luZm8gfHwgIXRyYWNrSW5mby5uYW1lKSB7XG4gICAgU3BpY2V0aWZ5LnNob3dOb3RpZmljYXRpb24oXCJDb3VsZCBub3QgcmV0cmlldmUgdHJhY2sgaW5mb3JtYXRpb25cIiwgdHJ1ZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcHJlZmVyT2ZmaWNpYWwgPSBnZXRQcmVmZXJPZmZpY2lhbCgpO1xuICBjb25zdCBzZWFyY2hRdWVyeSA9IGJ1aWxkU2VhcmNoUXVlcnkodHJhY2tJbmZvLm5hbWUsIHRyYWNrSW5mby5hcnRpc3RzLCBwcmVmZXJPZmZpY2lhbCk7XG4gIGNvbnN0IGNhY2hlS2V5ID0gYnVpbGRDYWNoZUtleSh0cmFja0luZm8ubmFtZSwgdHJhY2tJbmZvLmFydGlzdHMsIHByZWZlck9mZmljaWFsKTtcblxuICBjb25zdCBjYWNoZWQgPSBnZXRDYWNoZWRWaWRlb0lkKGNhY2hlS2V5KTtcbiAgaWYgKGNhY2hlZCkge1xuICAgIGNvbnN0IHlvdXR1YmVVcmwgPSBgaHR0cHM6Ly95b3V0dS5iZS8ke2NhY2hlZH1gO1xuICAgIGNvbnN0IGNvcGllZCA9IGF3YWl0IGNvcHlUb0NsaXBib2FyZCh5b3V0dWJlVXJsKTtcbiAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihjb3BpZWQgPyBcIllvdVR1YmUgbGluayBjb3BpZWRcIiA6IFwiRmFpbGVkIHRvIGNvcHkgdG8gY2xpcGJvYXJkXCIsICFjb3BpZWQpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VhcmNoWW91VHViZShzZWFyY2hRdWVyeSwgYXBpS2V5KTtcblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihcIk5vIHJlc3VsdCBmb3VuZFwiLCB0cnVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRDYWNoZWRWaWRlb0lkKGNhY2hlS2V5LCByZXN1bHQudmlkZW9JZCk7XG5cbiAgICBjb25zdCB5b3V0dWJlVXJsID0gYGh0dHBzOi8veW91dHUuYmUvJHtyZXN1bHQudmlkZW9JZH1gO1xuICAgIGNvbnN0IGNvcGllZCA9IGF3YWl0IGNvcHlUb0NsaXBib2FyZCh5b3V0dWJlVXJsKTtcbiAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihjb3BpZWQgPyBcIllvdVR1YmUgbGluayBjb3BpZWRcIiA6IFwiRmFpbGVkIHRvIGNvcHkgdG8gY2xpcGJvYXJkXCIsICFjb3BpZWQpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFN0cmluZyhlcnIpO1xuXG4gICAgc3dpdGNoIChtZXNzYWdlKSB7XG4gICAgICBjYXNlIFwiTkVUV09SS19FUlJPUlwiOlxuICAgICAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihcIk5ldHdvcmsgZXJyb3IgXHUyMDE0IGNoZWNrIHlvdXIgY29ubmVjdGlvblwiLCB0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiUVVPVEFfRVhDRUVERURcIjpcbiAgICAgICAgU3BpY2V0aWZ5LnNob3dOb3RpZmljYXRpb24oXCJZb3VUdWJlIEFQSSBxdW90YSBleGNlZWRlZCBcdTIwMTQgdHJ5IGFnYWluIHRvbW9ycm93XCIsIHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJJTlZBTElEX0tFWVwiOlxuICAgICAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihcIkludmFsaWQgQVBJIGtleSBcdTIwMTQgY2hlY2sgeW91ciBzZXR0aW5nc1wiLCB0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiQUNDRVNTX0RFTklFRFwiOlxuICAgICAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihcIllvdVR1YmUgQVBJIGFjY2VzcyBkZW5pZWRcIiwgdHJ1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgU3BpY2V0aWZ5LnNob3dOb3RpZmljYXRpb24oXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBzZWFyY2hpbmcgWW91VHViZVwiLCB0cnVlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd1NldHRpbmdzKCkge1xuICBQb3B1cE1vZGFsKHtcbiAgICB0aXRsZTogXCJZb3VUdWJlIEFQSSBTZXR0aW5nc1wiLFxuICAgIGNvbnRlbnQ6IDxTZXR0aW5nc0Zvcm0gb25DbG9zZT17KCkgPT4gUG9wdXBNb2RhbC5oaWRlKCl9IC8+LFxuICAgIHRlbXBsYXRlOiB0cnVlLFxuICB9KTtcbn1cblxuY29uc3QgY29weVlvdVR1YmVNZW51SXRlbSA9IG5ldyBTcGljZXRpZnkuQ29udGV4dE1lbnUuSXRlbShcbiAgXCJDb3B5IFlvdVR1YmUgTGlua1wiLFxuICBoYW5kbGVDb3B5WW91VHViZUxpbmssXG4gICh1cmlzOiBzdHJpbmdbXSkgPT4ge1xuICAgIGlmICghdXJpcyB8fCB1cmlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB1cmlzLnNvbWUoKHVyaTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCB1cmlPYmogPSBTcGljZXRpZnkuVVJJLmZyb20odXJpKTtcbiAgICAgIHJldHVybiB1cmlPYmogJiYgKHVyaU9iaiBhcyB1bmtub3duIGFzIHsgdHlwZTogc3RyaW5nIH0pLnR5cGUgPT09IFwidHJhY2tcIjtcbiAgICB9KTtcbiAgfSxcbiAgXCJjb3B5XCIgYXMgU3BpY2V0aWZ5Lkljb24sXG4pO1xuXG5zZXRUaW1lb3V0KCgpID0+IHtcbiAgY29weVlvdVR1YmVNZW51SXRlbS5yZWdpc3RlcigpO1xufSwgMCk7XG5cbm5ldyBTcGljZXRpZnkuTWVudS5JdGVtKFwiWW91VHViZSBMaW5rIFNldHRpbmdzXCIsIHRydWUsIHNob3dTZXR0aW5ncywgXCJleHRlcm5hbC1saW5rXCIpLnJlZ2lzdGVyKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7QUFBTyxJQUFNO0FBQUEsRUFDWDtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0YsSUFBSSxVQUFVO0FBRWQsSUFBTyxxQkFBUSxVQUFVOzs7QUN2Q2xCLElBQU07QUFBQSxFQUNYLG9EQUFBQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBLFNBQUFDO0FBQ0YsSUFBSSxVQUFVO0FBRWQsSUFBTyx5QkFBUSxVQUFVOzs7QUNkZixJQUFNLFFBQVEsSUFBSSxjQUFjO0FB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O0FBRUEsSUFBTSxzQkFBc0IsSUFBSSxVQUFVLFlBQVk7QUFBQSxFQUNwRDtBQUFBLEVBQ0E7QUFBQSxFQUNBLENBQUMsU0FBbUI7QUFDbEIsUUFBSSxDQUFDLFFBQVEsS0FBSyxXQUFXLEVBQUcsUUFBTztBQUN2QyxXQUFPLEtBQUssS0FBSyxDQUFDLFFBQWdCO0FBQ2hDLFlBQU0sU0FBUyxVQUFVLElBQUksS0FBSyxHQUFHO0FBQ3JDLGFBQU8sVUFBVyxPQUF1QyxTQUFTO0FBQUEsSUFDcEUsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBO0FBQ0Y7QUFFQSxXQUFXLE1BQU07QUFDZixzQkFBb0IsU0FBUztBQUMvQixHQUFHLENBQUM7QUFFSixJQUFJLFVBQVUsS0FBSyxLQUFLLHlCQUF5QixNQUFNLGNBQWMsZUFBZSxFQUFFLFNBQVM7IiwKICAibmFtZXMiOiBbIl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEIiwgInZlcnNpb24iLCAiRnJhZ21lbnQiLCAiQ29tcG9uZW50IiwgInNoZWV0Il0KfQo=
