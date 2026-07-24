await new Promise((resolve) => Spicetify.Events.webpackLoaded.on(resolve));

// extensions/addToPlaylistMulti/src/styles.css
var sheet = new CSSStyleSheet();
sheet.replaceSync(`.add-to-playlist-modal {
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

.add-to-playlist-content {
  background: #181818;
  border-radius: 8px;
  width: 420px;
  max-height: 550px;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-family: var(--font-family, spotify), sans-serif;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}

.add-to-playlist-header {
  padding: 16px 20px;
  border-bottom: 1px solid #282828;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.add-to-playlist-header-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.add-to-playlist-close {
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

.add-to-playlist-close:hover {
  background: #282828;
}

.add-to-playlist-close svg {
  width: 18px;
  height: 18px;
  fill: #b3b3b3;
  transition: fill 0.15s;
}

.add-to-playlist-close:hover svg {
  fill: #fff;
}

.add-to-playlist-github {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: background 0.15s;
}

.add-to-playlist-github:hover {
  background: #282828;
}

.add-to-playlist-github svg {
  width: 18px;
  height: 18px;
  fill: #b3b3b3;
  transition: fill 0.15s;
}

.add-to-playlist-github:hover svg {
  fill: #fff;
}

.add-to-playlist-search {
  padding: 16px 20px;
  border-bottom: 1px solid #282828;
}

.add-to-playlist-search-wrapper {
  display: flex;
  align-items: center;
  background: #282828;
  border-radius: 4px;
  padding: 0 12px;
}

.add-to-playlist-search-icon {
  color: #b3b3b3;
  display: flex;
  align-items: center;
}

.add-to-playlist-search-icon svg {
  width: 20px;
  height: 20px;
}

.add-to-playlist-search input {
  flex: 1;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 14px;
  padding: 12px;
  outline: none;
}

.add-to-playlist-search input::placeholder {
  color: #b3b3b3;
}

.add-to-playlist-track-count {
  padding: 12px 20px;
  color: #b3b3b3;
  font-size: 13px;
}

.add-to-playlist-list {
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;
}

.add-to-playlist-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  color: #b3b3b3;
  font-size: 14px;
}

.add-to-playlist-item {
  display: flex;
  align-items: center;
  padding: 8px 20px;
  cursor: pointer;
  transition: background 0.15s;
}

.add-to-playlist-item:hover {
  background: #282828;
}

.add-to-playlist-item.selected {
  background: rgba(29, 185, 84, 0.1);
}

.add-to-playlist-checkbox-wrapper {
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-to-playlist-checkbox {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.add-to-playlist-checkbox-custom {
  width: 16px;
  height: 16px;
  border: 2px solid #b3b3b3;
  border-radius: 3px;
  transition: all 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-to-playlist-checkbox:checked + .add-to-playlist-checkbox-custom {
  background: #1db954;
  border-color: #1db954;
}

.add-to-playlist-checkbox:checked + .add-to-playlist-checkbox-custom::after {
  content: "";
  width: 6px;
  height: 10px;
  border: solid #000;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  margin-bottom: 2px;
}

.add-to-playlist-name {
  color: #fff;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.add-to-playlist-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-top: 1px solid #282828;
}

.add-to-playlist-select-all {
  background: transparent;
  border: none;
  color: #1db954;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  padding: 8px 16px;
  transition: color 0.2s;
}

.add-to-playlist-select-all:hover {
  color: #1ed760;
}

.add-to-playlist-btn {
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.add-to-playlist-btn.cancel {
  background: transparent;
  border: 1px solid #727272;
  color: #fff;
}

.add-to-playlist-btn.cancel:hover {
  border-color: #fff;
}

.add-to-playlist-btn.confirm {
  background: #1db954;
  border: none;
  color: #000;
}

.add-to-playlist-btn.confirm:hover:not(:disabled) {
  background: #1ed760;
}

.add-to-playlist-btn.confirm:disabled {
  background: #535353;
  color: #181818;
  cursor: not-allowed;
}

.add-to-playlist-confirm-content {
  background: #181818;
  border-radius: 8px;
  width: 380px;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}

.add-to-playlist-confirm-header {
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
}

.add-to-playlist-confirm-list {
  max-height: 200px;
  overflow-y: auto;
  margin-bottom: 16px;
}

.add-to-playlist-confirm-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #282828;
}

.add-to-playlist-confirm-item .track-name {
  color: #fff;
  font-size: 14px;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.add-to-playlist-confirm-item .playlist-name {
  color: #b3b3b3;
  font-size: 12px;
  margin-left: 12px;
  white-space: nowrap;
}

.add-to-playlist-confirm-more {
  color: #b3b3b3;
  font-size: 12px;
  padding: 8px 0;
}

.add-to-playlist-confirm-info {
  color: #b3b3b3;
  font-size: 13px;
  margin-bottom: 16px;
}

.add-to-playlist-confirm-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}`);
var styles_default = sheet;

// shared/webpack/schema.ts
var metadataSchema = {
  "spotify.metadata.Track": {
    fields: {
      1: { name: "gid", type: "bytes" },
      2: { name: "name", type: "string" },
      3: { name: "album", type: "spotify.metadata.Album" },
      4: { name: "artist", type: "spotify.metadata.Artist", repeated: true },
      5: { name: "number", type: "sint32" },
      6: { name: "disc_number", type: "sint32" },
      7: { name: "duration", type: "sint32" },
      8: { name: "popularity", type: "sint32" },
      9: { name: "explicit", type: "bool" },
      10: { name: "external_id", type: "spotify.metadata.ExternalId", repeated: true },
      11: { name: "restriction", type: "spotify.metadata.Restriction", repeated: true },
      12: { name: "file", type: "spotify.metadata.AudioFile", repeated: true },
      13: { name: "alternative", type: "spotify.metadata.Track", repeated: true },
      14: { name: "sale_period", type: "spotify.metadata.SalePeriod", repeated: true },
      15: { name: "preview", type: "spotify.metadata.AudioFile", repeated: true },
      16: { name: "tags", type: "string", repeated: true },
      17: { name: "earliest_live_timestamp", type: "int64" },
      18: { name: "has_lyrics", type: "bool" },
      19: { name: "availability", type: "spotify.metadata.Availability", repeated: true },
      21: { name: "licensor", type: "spotify.metadata.Licensor" },
      22: { name: "language_of_performance", type: "string", repeated: true },
      24: { name: "original_audio", type: "spotify.metadata.Audio" },
      27: { name: "original_title", type: "string" },
      28: { name: "version_title", type: "string" },
      32: { name: "artist_with_role", type: "spotify.metadata.ArtistWithRole", repeated: true },
      36: { name: "canonical_uri", type: "string" },
      37: { name: "prerelease_config", type: "spotify.metadata.PrereleaseConfig" },
      39: {
        name: "content_authorization_attributes",
        type: "spotify.metadata.ContentAuthorizationAttributes"
      },
      40: { name: "track_content_rating", type: "spotify.metadata.ContentRating", repeated: true },
      41: { name: "audio_formats", type: "spotify.metadata.TrackAudioFormat", repeated: true },
      43: { name: "unknown_field", type: "int32" },
      44: { name: "implementation_details", type: "spotify.metadata.ImplementationDetails" },
      47: { name: "test", type: "spotify.metadata.TestCategory" },
      129: { name: "media_type", type: "enum", enumType: "MediaType" }
    },
    enums: { MediaType: { 0: "MIXED", 1: "AUDIO", 2: "VIDEO" } }
  },
  "spotify.metadata.Album": {
    fields: {
      1: { name: "gid", type: "bytes" },
      2: { name: "name", type: "string" },
      3: { name: "artist", type: "spotify.metadata.Artist", repeated: true },
      4: { name: "type", type: "enum", enumType: "Type" },
      5: { name: "label", type: "string" },
      6: { name: "date", type: "spotify.metadata.Date" },
      7: { name: "popularity", type: "sint32" },
      8: { name: "genre", type: "string", repeated: true },
      9: { name: "cover", type: "spotify.metadata.Image", repeated: true },
      10: { name: "external_id", type: "spotify.metadata.ExternalId", repeated: true },
      11: { name: "disc", type: "spotify.metadata.Disc", repeated: true },
      12: { name: "review", type: "string", repeated: true },
      13: { name: "copyright", type: "spotify.metadata.Copyright", repeated: true },
      14: { name: "restriction", type: "spotify.metadata.Restriction", repeated: true },
      15: { name: "related", type: "spotify.metadata.Album", repeated: true },
      16: { name: "sale_period", type: "spotify.metadata.SalePeriod", repeated: true },
      17: { name: "cover_group", type: "spotify.metadata.ImageGroup" },
      18: { name: "original_title", type: "string" },
      19: { name: "version_title", type: "string" },
      20: { name: "type_str", type: "string" },
      23: { name: "availability", type: "spotify.metadata.Availability", repeated: true },
      25: { name: "licensor", type: "spotify.metadata.Licensor" },
      37: { name: "prerelease_config", type: "spotify.metadata.PrereleaseConfig" }
    },
    enums: {
      Type: { 1: "ALBUM", 2: "SINGLE", 3: "COMPILATION", 4: "EP", 5: "AUDIOBOOK", 6: "PODCAST" }
    }
  },
  "spotify.metadata.ContentRating": {
    fields: {
      1: { name: "tag", type: "enum", enumType: "ContentRatingTag" },
      2: { name: "label", type: "string", repeated: true }
    },
    enums: { ContentRatingTag: { 0: "UNKNOWN", 1: "EXPLICIT" } }
  },
  "spotify.metadata.Date": {
    fields: {
      1: { name: "year", type: "sint32" },
      2: { name: "month", type: "sint32" },
      3: { name: "day", type: "sint32" }
    }
  },
  "spotify.metadata.Image": {
    fields: {
      1: { name: "file_id", type: "bytes" },
      2: { name: "size", type: "enum", enumType: "Size" },
      3: { name: "width", type: "sint32" },
      4: { name: "height", type: "sint32" }
    },
    enums: { Size: { 0: "UNKNOWN", 1: "SMALL", 2: "MEDIUM", 3: "LARGE", 4: "EXTRA_LARGE" } }
  },
  "spotify.metadata.AudioFile": {
    fields: {
      1: { name: "file_id", type: "bytes" },
      2: { name: "format", type: "enum", enumType: "Format" },
      3: { name: "bitrate", type: "sint32" },
      4: { name: "preview", type: "bytes" }
    },
    enums: {
      Format: { 1: "MP4", 2: "OGG", 3: "WEBM", 4: "UNKNOWN" }
    }
  },
  "spotify.metadata.Artist": {
    fields: {
      1: { name: "gid", type: "bytes" },
      2: { name: "name", type: "string" },
      3: { name: "image", type: "spotify.metadata.Image", repeated: true },
      4: { name: "genre", type: "string", repeated: true },
      5: { name: "profile", type: "spotify.metadata.ArtistProfile" }
    }
  },
  "spotify.metadata.ArtistProfile": {
    fields: {
      1: { name: "name", type: "string" },
      2: { name: "biography", type: "string" },
      3: { name: "image", type: "spotify.metadata.Image", repeated: true },
      4: { name: "artist_name", type: "spotify.metadata.LocalizedString", repeated: true }
    }
  },
  "spotify.metadata.LocalizedString": {
    fields: {
      1: { name: "locale", type: "string" },
      2: { name: "string", type: "string" }
    }
  },
  "spotify.metadata.ExternalId": {
    fields: {
      1: { name: "type", type: "string" },
      2: { name: "id", type: "string" }
    }
  },
  "spotify.metadata.Restriction": {
    fields: {
      1: { name: "countries", type: "string", repeated: true },
      2: { name: "catalogues", type: "string", repeated: true },
      3: { name: "reason", type: "enum", enumType: "Reason" }
    },
    enums: { Reason: { 0: "UNKNOWN", 1: "NOT_AVAILABLE_IN_COUNTRY", 2: "NOT_AVAILABLE_FOR_CURRENCY", 3: "NOT_AVAILABLE_FOR_USER" } }
  },
  "spotify.metadata.Availability": {
    fields: {
      1: { name: "start_time", type: "int64" },
      2: { name: "after_start_time", type: "bool" },
      3: { name: "is_available", type: "bool" }
    }
  },
  "spotify.metadata.TrackAudioFormat": {
    fields: {
      1: { name: "codec", type: "enum", enumType: "Codec" },
      2: { name: "bitrate", type: "sint32" }
    },
    enums: {
      Codec: { 0: "UNKNOWN", 1: "MP3", 2: "AAC", 3: "OGG_VORBIS", 4: "FLAC", 5: "WEBMA_OPUS", 6: "WEBMA_VORBIS" }
    }
  },
  "spotify.metadata.Audio": {
    fields: {
      1: { name: "gain", type: "sint32" },
      2: { name: "sample_offset", type: "sint32" }
    }
  },
  "spotify.metadata.Disc": {
    fields: {
      1: { name: "number", type: "sint32" },
      2: { name: "name", type: "string" }
    }
  },
  "spotify.metadata.ArtistWithRole": {
    fields: {
      1: { name: "artist", type: "spotify.metadata.Artist" },
      2: { name: "role", type: "spotify.metadata.ArtistRole", repeated: true },
      3: { name: "has_saving_rights", type: "bool" }
    }
  },
  "spotify.metadata.ArtistRole": {
    fields: {
      1: { name: "id", type: "enum", enumType: "RoleId" }
    },
    enums: {
      RoleId: { 0: "MAIN", 1: "FEATURED", 2: "REMIX", 3: "PRODUCER", 4: "COMPOSER", 5: "LYRICIST" }
    }
  },
  "spotify.metadata.SalePeriod": {
    fields: {
      1: { name: "start", type: "spotify.metadata.Date" },
      2: { name: "end", type: "spotify.metadata.Date" }
    }
  },
  "spotify.metadata.ImageGroup": {
    fields: {
      1: { name: "backing_type", type: "enum", enumType: "BackingType" },
      2: { name: "image", type: "spotify.metadata.Image", repeated: true }
    },
    enums: { BackingType: { 0: "UNKNOWN", 1: "DEFAULT", 2: "VIDEO_FRAME" } }
  },
  "spotify.metadata.Copyright": {
    fields: {
      1: { name: "type", type: "enum", enumType: "Type" },
      2: { name: "text", type: "string" }
    },
    enums: { Type: { 0: "P", 1: "C" } }
  },
  "spotify.metadata.VideoFile": {
    fields: { 1: { name: "file_id", type: "bytes" } }
  },
  "spotify.metadata.Licensor": {
    fields: {
      1: { name: "licensor_id", type: "string" }
    }
  },
  "spotify.metadata.ContentAuthorizationAttributes": {
    fields: {
      1: { name: "cat_id", type: "string" },
      2: { name: "content_rights", type: "string" },
      3: { name: "rights_owner_id", type: "string" }
    }
  },
  "spotify.metadata.ImplementationDetails": {
    fields: {
      1: { name: "impl_id", type: "string" },
      2: { name: "description", type: "string" }
    }
  },
  "spotify.metadata.PrereleaseConfig": {
    fields: {
      1: { name: "is_premium_only", type: "bool" },
      2: { name: "release_date", type: "int64" }
    }
  },
  "spotify.metadata.TestCategory": {
    fields: {
      1: { name: "category", type: "string" },
      2: { name: "is_enabled", type: "bool" }
    }
  }
};

// shared/webpack/protobuf.ts
function warn(reason, ctxOrThunk) {
  if (reason.includes("Decode error") || reason.includes("Schema not found")) {
    const ctx = typeof ctxOrThunk === "function" ? ctxOrThunk() : ctxOrThunk;
    console.warn("[Protobuf]", reason, ctx);
  }
}
var ProtobufReader = class _ProtobufReader {
  view;
  bytes;
  offset = 0;
  constructor(data) {
    if (data instanceof Uint8Array) {
      this.bytes = data;
    } else if (Array.isArray(data) || "length" in data) {
      this.bytes = new Uint8Array(Array.from(data));
    } else {
      this.bytes = new Uint8Array(Object.values(data));
    }
    this.view = new DataView(this.bytes.buffer, this.bytes.byteOffset, this.bytes.byteLength);
  }
  get isExhausted() {
    return this.offset >= this.bytes.length;
  }
  readVarint() {
    if (this.isExhausted) return null;
    let result = 0n;
    let shift = 0n;
    while (!this.isExhausted) {
      const byte = BigInt(this.bytes[this.offset++]);
      result |= (byte & 0x7fn) << shift;
      if (!(byte & 0x80n)) return result;
      shift += 7n;
      if (shift > 70n) {
        warn("Varint too long", {
          offset: this.offset,
          shift: shift.toString()
        });
        break;
      }
    }
    return null;
  }
  readZigZagVarint() {
    const n = this.readVarint();
    if (n === null) {
      warn("Invalid zigzag varint", { offset: this.offset });
      return 0n;
    }
    return n >> 1n ^ -(n & 1n);
  }
  readBytes(length) {
    const actualLength = Math.min(length, this.bytes.length - this.offset);
    const result = this.bytes.slice(this.offset, this.offset + actualLength);
    this.offset += actualLength;
    return result;
  }
  skip(wireType) {
    switch (wireType) {
      case 0:
        this.readVarint();
        break;
      case 1:
        this.offset += 8;
        break;
      case 2: {
        const len = this.readVarint();
        if (len !== null) this.offset += Number(len);
        break;
      }
      case 3:
        while (true) {
          const tag = this.readVarint();
          if (tag === null || (Number(tag) & 7) === 4) break;
          this.skip(Number(tag) & 7);
        }
        break;
      case 5:
        this.offset += 4;
        break;
      default:
        warn("Unknown wire type", {
          wireType,
          offset: this.offset
        });
    }
  }
  decode(schemaName) {
    const schema = metadataSchema[schemaName];
    if (!schema) {
      warn("Schema not found", { schemaName });
      return {};
    }
    const result = {};
    while (!this.isExhausted) {
      const tag = this.readVarint();
      if (tag === null || tag === 0n) break;
      const fieldNumber = Number(tag >> 3n);
      const wireType = Number(tag & 7n);
      const field = schema.fields[fieldNumber];
      if (!field) {
        if (wireType === 2) {
          const len = Number(this.readVarint() ?? 0n);
          const raw = this.readBytes(len);
          warn("Unknown field", () => ({
            schema: schemaName,
            fieldNumber,
            wireType,
            length: len,
            hex: Array.from(raw).map((b) => b.toString(16).padStart(2, "0")).join(" "),
            ascii: new TextDecoder().decode(raw).replace(/[^\x20-\x7E]/g, ".")
          }));
        } else {
          warn("Unknown field", {
            schema: schemaName,
            fieldNumber,
            wireType
          });
          this.skip(wireType);
        }
        continue;
      }
      let value;
      try {
        switch (field.type) {
          case "string": {
            const len = Number(this.readVarint() ?? 0n);
            value = new TextDecoder().decode(this.readBytes(len));
            break;
          }
          case "bytes": {
            const len = Number(this.readVarint() ?? 0n);
            value = Array.from(
              this.readBytes(len),
              (b) => (b < 16 ? "0" : "") + b.toString(16)
            ).join("");
            break;
          }
          case "bool":
            value = (this.readVarint() ?? 0n) !== 0n;
            break;
          case "int32":
          case "uint32":
            value = Number(this.readVarint() ?? 0n);
            break;
          case "int64":
          case "uint64": {
            const v = this.readVarint() ?? 0n;
            value = v <= BigInt(Number.MAX_SAFE_INTEGER) ? Number(v) : v.toString();
            break;
          }
          case "sint32":
            value = Number(this.readZigZagVarint());
            break;
          case "sint64": {
            const v = this.readZigZagVarint();
            value = v <= BigInt(Number.MAX_SAFE_INTEGER) && v >= BigInt(Number.MIN_SAFE_INTEGER) ? Number(v) : v.toString();
            break;
          }
          case "fixed32":
            value = this.view.getUint32(this.offset, true);
            this.offset += 4;
            break;
          case "fixed64":
            value = this.view.getBigUint64(this.offset, true).toString();
            this.offset += 8;
            break;
          case "float":
            value = this.view.getFloat32(this.offset, true);
            this.offset += 4;
            break;
          case "double":
            value = this.view.getFloat64(this.offset, true);
            this.offset += 8;
            break;
          case "enum": {
            const enumVal = Number(this.readVarint() ?? 0n);
            value = (field.enumType && schema.enums?.[field.enumType]?.[enumVal]) ?? enumVal;
            break;
          }
          default: {
            const len = Number(this.readVarint() ?? 0n);
            value = new _ProtobufReader(this.readBytes(len)).decode(field.type);
            break;
          }
        }
      } catch (err) {
        warn("Decode error", {
          schema: schemaName,
          field: field.name,
          fieldNumber,
          wireType,
          offset: this.offset,
          error: err
        });
        continue;
      }
      if (value === void 0) continue;
      if (field.repeated) {
        if (!result[field.name]) result[field.name] = [];
        result[field.name].push(value);
      } else {
        result[field.name] = value;
      }
    }
    return result;
  }
};
function decodeProtobuf(data, schemaName) {
  const result = new ProtobufReader(data).decode(schemaName);
  return result;
}

// shared/webpack/webpack.ts
var GLOBAL_KEY = "__cached_webpack_modules";
if (!globalThis[GLOBAL_KEY]) {
  globalThis[GLOBAL_KEY] = {
    require: null,
    modules: null,
    lastModuleCount: 0,
    serviceCache: /* @__PURE__ */ new Map(),
    searchCache: /* @__PURE__ */ new Map(),
    componentCache: /* @__PURE__ */ new Map()
  };
}
var shared = globalThis[GLOBAL_KEY];
var SpotifyWebpack = {
  getModules() {
    if (!shared.require) {
      const webpack = globalThis.webpackChunkclient_web;
      if (!webpack) return shared.modules ?? [];
      shared.require = webpack.push([[/* @__PURE__ */ Symbol()], {}, (re) => re]);
    }
    if (!shared.require || !shared.require.m) return shared.modules ?? [];
    const currentKeys = Object.keys(shared.require.m);
    if (shared.modules && shared.lastModuleCount === currentKeys.length) {
      return shared.modules;
    }
    shared.modules = currentKeys.map((id) => () => {
      try {
        const module = shared.require(id);
        if (typeof module === "object" && module !== null) {
          try {
            return Object.values(module);
          } catch {
            return [module];
          }
        }
        return [module];
      } catch {
        return [];
      }
    });
    shared.lastModuleCount = currentKeys.length;
    return shared.modules;
  },
  getModuleById(id) {
    if (!shared.modules) return null;
    const index = Number(id);
    if (!isNaN(index) && shared.modules[index]) {
      return shared.modules[index]();
    }
    if (!shared.require) {
      SpotifyWebpack.getModules();
    }
    try {
      const module = shared.require?.(id);
      if (typeof module === "object" && module !== null) {
        try {
          return Object.values(module);
        } catch {
          return [module];
        }
      }
      return [module];
    } catch {
      return null;
    }
  },
  findModuleByContent(keywords) {
    const cacheKey = keywords.join(",");
    if (shared.searchCache.has(cacheKey)) {
      return shared.searchCache.get(cacheKey);
    }
    if (!shared.require || !shared.require.m) {
      try {
        SpotifyWebpack.getModules();
      } catch {
        shared.searchCache.set(cacheKey, null);
        return null;
      }
    }
    if (!shared.require?.m) return null;
    const modules = shared.require.m;
    for (const id in modules) {
      const moduleFactory = modules[id];
      if (typeof moduleFactory !== "function") continue;
      const str = Function.prototype.toString.call(moduleFactory);
      if (keywords.every((k) => str.includes(k))) {
        try {
          const mod = shared.require(id);
          shared.searchCache.set(cacheKey, mod);
          return mod;
        } catch (err) {
          console.warn(`Failed to require module ${id}:`, err);
          return null;
        }
      }
    }
    shared.searchCache.set(cacheKey, null);
    return null;
  },
  findComponentByKeywords(keywords) {
    const cacheKey = keywords.join(",");
    if (shared.componentCache.has(cacheKey)) {
      return shared.componentCache.get(cacheKey);
    }
    if (!shared.require || !shared.require.m) {
      try {
        SpotifyWebpack.getModules();
      } catch {
        shared.componentCache.set(cacheKey, null);
        return null;
      }
    }
    if (!shared.require?.m) return null;
    const modules = shared.require.m;
    let foundModuleId = null;
    for (const id in modules) {
      const moduleFactory = modules[id];
      if (typeof moduleFactory !== "function") continue;
      try {
        const str = Function.prototype.toString.call(moduleFactory);
        if (keywords.every((k) => str.includes(k))) {
          foundModuleId = id;
          break;
        }
      } catch (_e) {
      }
    }
    if (!foundModuleId) return null;
    let exports;
    try {
      exports = shared.require(foundModuleId);
    } catch {
      shared.componentCache.set(cacheKey, null);
      return null;
    }
    const isLikelyComponent = (value) => {
      if (!value) return false;
      if (value.$$typeof && Symbol.keyFor(value.$$typeof)?.includes("react")) {
        return true;
      }
      return typeof value === "function";
    };
    let result = null;
    if (isLikelyComponent(exports)) {
      result = exports;
    } else if (typeof exports === "object") {
      for (const key in exports) {
        const value = exports[key];
        if (isLikelyComponent(value)) {
          result = value;
          break;
        }
      }
    }
    shared.componentCache.set(cacheKey, result);
    return result;
  },
  findService(serviceName) {
    const modules = SpotifyWebpack.getModules();
    for (const moduleGetter of modules) {
      if (!moduleGetter || typeof moduleGetter !== "function") continue;
      const module = moduleGetter();
      if (!module) continue;
      const exports = Array.isArray(module) ? module : [module];
      for (const m of exports) {
        if (m && typeof m === "function" && m.SERVICE_ID === serviceName) return m;
      }
    }
    return null;
  },
  getClient(serviceName) {
    if (shared.serviceCache.has(serviceName)) {
      return shared.serviceCache.get(serviceName);
    }
    const ServiceClass = SpotifyWebpack.findService(serviceName);
    if (!ServiceClass) {
      throw new Error(`Spotify Service not found: ${serviceName}`);
    }
    let client;
    if (typeof ServiceClass === "function") {
      const transport = globalThis.Spicetify?.Platform?.Registry?.resolve(/* @__PURE__ */ Symbol.for("EsperantoTransport"));
      if (transport) {
        client = new ServiceClass(transport);
      } else {
        throw new Error("EsperantoTransport not available");
      }
    } else {
      client = ServiceClass;
    }
    shared.serviceCache.set(serviceName, client);
    return client;
  }
};
globalThis.SpotifyWebpack = SpotifyWebpack;

// shared/api/fetchMetadataForTracks.ts
var MetadataService = "spotify.mdata_esperanto.proto.MetadataService";
var TRACK_V4 = 10;
async function fetchMetadataForTracks(trackURIs) {
  const MetadataClient = SpotifyWebpack.getClient(MetadataService);
  const uniqueURIs = [...new Set(trackURIs)];
  const response = await MetadataClient.fetch({
    extensionQuery: [{ extensionKind: TRACK_V4, entityUri: uniqueURIs }]
  });
  const resultMap = /* @__PURE__ */ new Map();
  if (response?.extension?.[0]?.entityExtension) {
    for (const entity of response.extension[0].entityExtension) {
      const byteObject = entity.extensionData?.value;
      if (byteObject) {
        const decoded = decodeProtobuf(byteObject, "spotify.metadata.Track");
        resultMap.set(entity.entityUri, decoded);
      } else {
        resultMap.set(entity.entityUri, null);
      }
    }
  }
  return resultMap;
}

// extensions/addToPlaylistMulti/src/modal.tsx
async function fetchPlaylists() {
  const LibraryAPI = Spicetify.Platform?.LibraryAPI;
  if (!LibraryAPI) {
    throw new Error("LibraryAPI not available");
  }
  const response = await LibraryAPI.getContents({
    offset: 0,
    limit: 1e7,
    flattenTree: true
  });
  const playlists = [];
  const items = response?.items || [];
  for (const item of items) {
    if (item.type === "playlist" && item.canAddTo) {
      playlists.push({
        name: item.name,
        uri: item.uri
      });
    }
  }
  return playlists;
}
async function getPlaylistTracks(playlistUri) {
  const trackUris = /* @__PURE__ */ new Set();
  const PlaylistAPI = Spicetify.Platform?.PlaylistAPI;
  if (!PlaylistAPI) {
    throw new Error("PlaylistAPI not available");
  }
  const response = await PlaylistAPI.getContents(playlistUri, {
    offset: 0,
    limit: -1
  });
  if (response?.items) {
    for (const item of response.items) {
      if (item?.uri) {
        trackUris.add(item.uri);
      }
    }
  }
  return trackUris;
}
function getTrackName(uri) {
  const trackId = uri.split(":").pop() || "";
  return `Track (${trackId.slice(0, 8)}...)`;
}
function createConfirmModal(duplicates, trackCount, onConfirm, onCancel) {
  const modal = document.createElement("div");
  modal.className = "add-to-playlist-modal";
  const content = document.createElement("div");
  content.className = "add-to-playlist-confirm-content";
  const header = document.createElement("div");
  header.className = "add-to-playlist-confirm-header";
  header.textContent = "Tracks already in playlist(s)";
  const list = document.createElement("div");
  list.className = "add-to-playlist-confirm-list";
  const duplicateTrackUris = /* @__PURE__ */ new Set();
  for (const dup of duplicates) {
    duplicateTrackUris.add(dup.trackUri);
  }
  const uniqueDuplicateCount = duplicateTrackUris.size;
  for (const dup of duplicates.slice(0, 10)) {
    const item = document.createElement("div");
    item.className = "add-to-playlist-confirm-item";
    const trackName = document.createElement("span");
    trackName.className = "track-name";
    trackName.textContent = dup.trackName;
    const playlistName = document.createElement("span");
    playlistName.className = "playlist-name";
    playlistName.textContent = `in ${dup.playlistName}`;
    item.appendChild(trackName);
    item.appendChild(playlistName);
    list.appendChild(item);
  }
  if (duplicates.length > 10) {
    const more = document.createElement("div");
    more.className = "add-to-playlist-confirm-more";
    more.textContent = `...and ${duplicates.length - 10} more`;
    list.appendChild(more);
  }
  const info = document.createElement("div");
  info.className = "add-to-playlist-confirm-info";
  const playlistCount = new Set(duplicates.map((d) => d.playlistUri)).size;
  if (uniqueDuplicateCount === trackCount) {
    if (playlistCount === 1) {
      info.textContent = `This track is already in ${playlistCount} selected playlist.`;
    } else {
      info.textContent = `All ${uniqueDuplicateCount} track(s) are already in ${playlistCount} selected playlists.`;
    }
  } else {
    if (playlistCount === 1) {
      info.textContent = `${uniqueDuplicateCount} of ${trackCount} track(s) are already in ${playlistCount} selected playlist.`;
    } else {
      info.textContent = `${uniqueDuplicateCount} of ${trackCount} track(s) are already in ${playlistCount} selected playlists.`;
    }
  }
  const buttons = document.createElement("div");
  buttons.className = "add-to-playlist-confirm-buttons";
  const cancelBtn = document.createElement("button");
  cancelBtn.className = "add-to-playlist-btn cancel";
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", () => {
    modal.remove();
    onCancel();
  });
  const confirmBtn = document.createElement("button");
  confirmBtn.className = "add-to-playlist-btn confirm";
  confirmBtn.textContent = "Add Anyway";
  confirmBtn.addEventListener("click", () => {
    modal.remove();
    onConfirm();
  });
  buttons.appendChild(cancelBtn);
  buttons.appendChild(confirmBtn);
  content.appendChild(header);
  content.appendChild(list);
  content.appendChild(info);
  content.appendChild(buttons);
  modal.appendChild(content);
  document.body.appendChild(modal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
      onCancel();
    }
  });
}
async function addTracksToPlaylists(playlistUris, trackUris) {
  const PlaylistAPI = Spicetify.Platform?.PlaylistAPI;
  if (!PlaylistAPI) {
    throw new Error("No PlaylistAPI");
  }
  const success = [];
  const failed = [];
  for (const playlistUri of playlistUris) {
    try {
      await PlaylistAPI.add(playlistUri, trackUris, []);
      success.push(playlistUri);
    } catch (e) {
      failed.push(playlistUri);
    }
  }
  return { success, failed };
}
function createModal(trackUris) {
  let allPlaylists = [];
  let filteredPlaylists = [];
  const selectedSet = /* @__PURE__ */ new Set();
  const modal = document.createElement("div");
  modal.className = "add-to-playlist-modal";
  const content = document.createElement("div");
  content.className = "add-to-playlist-content";
  const header = document.createElement("div");
  header.className = "add-to-playlist-header";
  const headerTitle = document.createElement("span");
  headerTitle.textContent = "Add to Multiple Playlists";
  const headerRight = document.createElement("div");
  headerRight.className = "add-to-playlist-header-right";
  const githubLink = document.createElement("a");
  githubLink.className = "add-to-playlist-github";
  githubLink.href = "https://github.com/JimMarley420/spicetify-extension";
  githubLink.target = "_blank";
  githubLink.rel = "noopener noreferrer";
  githubLink.setAttribute("aria-label", "Open GitHub repository");
  githubLink.innerHTML = `<svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;
  const closeBtn = document.createElement("button");
  closeBtn.className = "add-to-playlist-close";
  closeBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`;
  closeBtn.addEventListener("click", () => modal.remove());
  headerRight.appendChild(githubLink);
  headerRight.appendChild(closeBtn);
  header.appendChild(headerTitle);
  header.appendChild(headerRight);
  const searchContainer = document.createElement("div");
  searchContainer.className = "add-to-playlist-search";
  const searchWrapper = document.createElement("div");
  searchWrapper.className = "add-to-playlist-search-wrapper";
  const searchIcon = document.createElement("div");
  searchIcon.className = "add-to-playlist-search-icon";
  searchIcon.innerHTML = `<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`;
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search playlists...";
  searchWrapper.appendChild(searchIcon);
  searchWrapper.appendChild(searchInput);
  searchContainer.appendChild(searchWrapper);
  const trackCount = document.createElement("div");
  trackCount.className = "add-to-playlist-track-count";
  trackCount.textContent = `${trackUris.length} track(s) selected`;
  const playlistList = document.createElement("div");
  playlistList.className = "add-to-playlist-list";
  const emptyState = document.createElement("div");
  emptyState.className = "add-to-playlist-empty";
  emptyState.textContent = "Loading playlists...";
  playlistList.appendChild(emptyState);
  function renderPlaylists(playlists) {
    playlistList.innerHTML = "";
    if (playlists.length === 0) {
      emptyState.textContent = searchInput.value ? "No playlists found" : "No playlists available";
      playlistList.appendChild(emptyState);
      return;
    }
    for (const playlist of playlists) {
      const item = document.createElement("label");
      item.className = "add-to-playlist-item" + (selectedSet.has(playlist.uri) ? " selected" : "");
      const checkboxWrapper = document.createElement("div");
      checkboxWrapper.className = "add-to-playlist-checkbox-wrapper";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "add-to-playlist-checkbox";
      checkbox.checked = selectedSet.has(playlist.uri);
      const customCheckbox = document.createElement("div");
      customCheckbox.className = "add-to-playlist-checkbox-custom";
      checkboxWrapper.appendChild(checkbox);
      checkboxWrapper.appendChild(customCheckbox);
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          selectedSet.add(playlist.uri);
          item.classList.add("selected");
        } else {
          selectedSet.delete(playlist.uri);
          item.classList.remove("selected");
        }
        updateButtonState();
      });
      const name = document.createElement("span");
      name.className = "add-to-playlist-name";
      name.textContent = playlist.name;
      item.appendChild(checkboxWrapper);
      item.appendChild(name);
      playlistList.appendChild(item);
    }
  }
  function filterPlaylists() {
    const query = searchInput.value.toLowerCase();
    filteredPlaylists = allPlaylists.filter((p) => p.name.toLowerCase().includes(query));
    renderPlaylists(filteredPlaylists);
    updateButtonState();
  }
  function updateButtonState() {
    const selectedCount = selectedSet.size;
    trackCount.textContent = `${trackUris.length} track(s) selected \u2022 ${selectedCount} playlist(s)`;
    confirmBtn.disabled = selectedCount === 0;
    const selectedWithinFiltered = filteredPlaylists.filter((p) => selectedSet.has(p.uri)).length;
    if (selectedWithinFiltered === 0) {
      selectAllBtn.textContent = "Select All";
    } else if (selectedWithinFiltered === filteredPlaylists.length) {
      selectAllBtn.textContent = "Deselect All";
    } else {
      selectAllBtn.textContent = "Select All";
    }
  }
  async function loadPlaylists() {
    try {
      allPlaylists = await fetchPlaylists();
      filteredPlaylists = [...allPlaylists];
      renderPlaylists(filteredPlaylists);
      updateButtonState();
    } catch (e) {
      emptyState.textContent = "Failed to load playlists";
      playlistList.appendChild(emptyState);
      Spicetify.showNotification("Failed to load playlists", true);
    }
  }
  loadPlaylists();
  searchInput.addEventListener("input", filterPlaylists);
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "add-to-playlist-buttons";
  buttonContainer.style.display = "flex";
  buttonContainer.style.justifyContent = "space-between";
  buttonContainer.style.alignItems = "center";
  const selectAllBtn = document.createElement("button");
  selectAllBtn.className = "add-to-playlist-select-all";
  selectAllBtn.textContent = "Select All";
  selectAllBtn.addEventListener("click", () => {
    const selectedWithinFiltered = filteredPlaylists.filter((p) => selectedSet.has(p.uri)).length;
    const allFilteredSelected = selectedWithinFiltered === filteredPlaylists.length;
    if (allFilteredSelected) {
      filteredPlaylists.forEach((p) => selectedSet.delete(p.uri));
      playlistList.querySelectorAll(".add-to-playlist-item").forEach((item) => {
        item.classList.remove("selected");
        const checkbox = item.querySelector(".add-to-playlist-checkbox");
        if (checkbox) checkbox.checked = false;
      });
    } else {
      filteredPlaylists.forEach((p) => selectedSet.add(p.uri));
      playlistList.querySelectorAll(".add-to-playlist-item").forEach((item) => {
        item.classList.add("selected");
        const checkbox = item.querySelector(".add-to-playlist-checkbox");
        if (checkbox) checkbox.checked = true;
      });
    }
    updateButtonState();
  });
  const buttonGroup = document.createElement("div");
  buttonGroup.style.display = "flex";
  buttonGroup.style.gap = "12px";
  buttonGroup.style.marginLeft = "auto";
  const cancelBtn = document.createElement("button");
  cancelBtn.className = "add-to-playlist-btn cancel";
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", () => modal.remove());
  const confirmBtn = document.createElement("button");
  confirmBtn.className = "add-to-playlist-btn confirm";
  confirmBtn.textContent = "Add";
  confirmBtn.disabled = true;
  confirmBtn.addEventListener("click", async () => {
    const playlistUris = Array.from(selectedSet);
    confirmBtn.disabled = true;
    confirmBtn.textContent = "Checking...";
    try {
      const duplicates = [];
      for (const playlistUri of playlistUris) {
        const playlist = allPlaylists.find((p) => p.uri === playlistUri);
        const playlistName = playlist?.name || "Unknown";
        try {
          const playlistTracks = await getPlaylistTracks(playlistUri);
          const duplicateUris = trackUris.filter((t) => playlistTracks.has(t));
          if (duplicateUris.length > 0) {
            confirmBtn.textContent = "Loading...";
            const trackMetadata = await fetchMetadataForTracks(duplicateUris);
            for (const trackUri of duplicateUris) {
              const meta = trackMetadata.get(trackUri);
              const trackName = meta?.name || meta?.title || meta?.track?.name || getTrackName(trackUri);
              duplicates.push({
                playlistUri,
                playlistName,
                trackUri,
                trackName
              });
            }
          }
        } catch (e) {
          Spicetify.showNotification(`Failed to check ${playlistName}`, true);
        }
      }
      if (duplicates.length > 0) {
        confirmBtn.textContent = "Adding...";
        createConfirmModal(
          duplicates,
          trackUris.length,
          async () => {
            const result = await addTracksToPlaylists(playlistUris, trackUris);
            if (result.success.length > 0) {
              Spicetify.showNotification(`Added ${trackUris.length} track(s) to ${result.success.length} playlist(s)`);
            } else {
              Spicetify.showNotification("No tracks were added", true);
            }
            modal.remove();
          },
          () => {
            confirmBtn.disabled = false;
            confirmBtn.textContent = "Add";
          }
        );
      } else {
        const result = await addTracksToPlaylists(playlistUris, trackUris);
        if (result.success.length > 0) {
          Spicetify.showNotification(`Added ${trackUris.length} track(s) to ${result.success.length} playlist(s)`);
        } else {
          Spicetify.showNotification("Failed to add tracks", true);
        }
        modal.remove();
      }
    } catch (e) {
      Spicetify.showNotification("Failed to add tracks", true);
      confirmBtn.disabled = false;
      confirmBtn.textContent = "Add";
    }
  });
  buttonGroup.appendChild(cancelBtn);
  buttonGroup.appendChild(confirmBtn);
  buttonContainer.appendChild(selectAllBtn);
  buttonContainer.appendChild(buttonGroup);
  content.appendChild(header);
  content.appendChild(searchContainer);
  content.appendChild(trackCount);
  content.appendChild(playlistList);
  content.appendChild(buttonContainer);
  modal.appendChild(content);
  document.body.appendChild(modal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
  searchInput.focus();
}

// extensions/addToPlaylistMulti/src/app.tsx
document.adoptedStyleSheets.push(styles_default);
async function handleMenuClick(uris) {
  const trackUris = uris.filter((uri) => {
    const uriObj = Spicetify.URI.from(uri);
    return uriObj && uriObj.type === "track";
  });
  if (trackUris.length === 0) {
    Spicetify.showNotification("No tracks selected", true);
    return;
  }
  createModal(trackUris);
}
var addToMultiplePlaylistsMenuItem = new Spicetify.ContextMenu.Item(
  "Add to Multiple Playlists",
  handleMenuClick,
  (uris) => {
    const hasTrack = uris.some((uri) => {
      const uriObj = Spicetify.URI.from(uri);
      return uriObj && uriObj.type === "track";
    });
    return hasTrack;
  },
  "plus-alt"
);
addToMultiplePlaylistsMenuItem.register();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vZXh0ZW5zaW9ucy9hZGRUb1BsYXlsaXN0TXVsdGkvc3JjL3N0eWxlcy5jc3MiLCAiLi4vc2hhcmVkL3dlYnBhY2svc2NoZW1hLnRzIiwgIi4uL3NoYXJlZC93ZWJwYWNrL3Byb3RvYnVmLnRzIiwgIi4uL3NoYXJlZC93ZWJwYWNrL3dlYnBhY2sudHMiLCAiLi4vc2hhcmVkL2FwaS9mZXRjaE1ldGFkYXRhRm9yVHJhY2tzLnRzIiwgIi4uL2V4dGVuc2lvbnMvYWRkVG9QbGF5bGlzdE11bHRpL3NyYy9tb2RhbC50c3giLCAiLi4vZXh0ZW5zaW9ucy9hZGRUb1BsYXlsaXN0TXVsdGkvc3JjL2FwcC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlxuICAgICAgICAgIGNvbnN0IHNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICBzaGVldC5yZXBsYWNlU3luYyhgLmFkZC10by1wbGF5bGlzdC1tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMTgxODE4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA0MjBweDtcbiAgbWF4LWhlaWdodDogNTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHksIHNwb3RpZnkpLCBzYW5zLXNlcmlmO1xuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1oZWFkZXIge1xuICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjgyODI4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1oZWFkZXItcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jbG9zZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cztcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jbG9zZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyODI4Mjg7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtY2xvc2Ugc3ZnIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgZmlsbDogI2IzYjNiMztcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjE1cztcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jbG9zZTpob3ZlciBzdmcge1xuICBmaWxsOiAjZmZmO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWdpdGh1YiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXM7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtZ2l0aHViOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzI4MjgyODtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1naXRodWIgc3ZnIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgZmlsbDogI2IzYjNiMztcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjE1cztcbn1cblxuLmFkZC10by1wbGF5bGlzdC1naXRodWI6aG92ZXIgc3ZnIHtcbiAgZmlsbDogI2ZmZjtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1zZWFyY2gge1xuICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjgyODI4O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LXNlYXJjaC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzI4MjgyODtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAwIDEycHg7XG59XG5cbi5hZGQtdG8tcGxheWxpc3Qtc2VhcmNoLWljb24ge1xuICBjb2xvcjogI2IzYjNiMztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1zZWFyY2gtaWNvbiBzdmcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LXNlYXJjaCBpbnB1dCB7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5hZGQtdG8tcGxheWxpc3Qtc2VhcmNoIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYjNiM2IzO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LXRyYWNrLWNvdW50IHtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWxpc3Qge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiA4cHggMDtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1lbXB0eSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWl0ZW0uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI5LCAxODUsIDg0LCAwLjEpO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWNoZWNrYm94LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtY2hlY2tib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jaGVja2JveC1jdXN0b20ge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjYjNiM2IzO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtY2hlY2tib3g6Y2hlY2tlZCArIC5hZGQtdG8tcGxheWxpc3QtY2hlY2tib3gtY3VzdG9tIHtcbiAgYmFja2dyb3VuZDogIzFkYjk1NDtcbiAgYm9yZGVyLWNvbG9yOiAjMWRiOTU0O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWNoZWNrYm94OmNoZWNrZWQgKyAuYWRkLXRvLXBsYXlsaXN0LWNoZWNrYm94LWN1c3RvbTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlcjogc29saWQgIzAwMDtcbiAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtbmFtZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyODI4Mjg7XG59XG5cbi5hZGQtdG8tcGxheWxpc3Qtc2VsZWN0LWFsbCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMWRiOTU0O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG59XG5cbi5hZGQtdG8tcGxheWxpc3Qtc2VsZWN0LWFsbDpob3ZlciB7XG4gIGNvbG9yOiAjMWVkNzYwO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWJ0biB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWJ0bi5jYW5jZWwge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcyNzI3MjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtYnRuLmNhbmNlbDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1idG4uY29uZmlybSB7XG4gIGJhY2tncm91bmQ6ICMxZGI5NTQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtYnRuLmNvbmZpcm06aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiAjMWVkNzYwO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWJ0bi5jb25maXJtOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogIzUzNTM1MztcbiAgY29sb3I6ICMxODE4MTg7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5hZGQtdG8tcGxheWxpc3QtY29uZmlybS1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogIzE4MTgxODtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogMzgwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWNvbmZpcm0taGVhZGVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jb25maXJtLWxpc3Qge1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jb25maXJtLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDhweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI4MjgyODtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jb25maXJtLWl0ZW0gLnRyYWNrLW5hbWUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmbGV4OiAxO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jb25maXJtLWl0ZW0gLnBsYXlsaXN0LW5hbWUge1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jb25maXJtLW1vcmUge1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA4cHggMDtcbn1cblxuLmFkZC10by1wbGF5bGlzdC1jb25maXJtLWluZm8ge1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uYWRkLXRvLXBsYXlsaXN0LWNvbmZpcm0tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogMTJweDtcbn1gKTtcbiAgICAgICAgICBleHBvcnQgZGVmYXVsdCBzaGVldDtcbiAgICAgICAgIiwgIi8vIHNvbWUgcHJvdG9idWYgZGVmcyB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZnaWFubHUvZ28tbGlicmVzcG90L3RyZWUvbWFzdGVyL3Byb3RvL3Nwb3RpZnkvbWV0YWRhdGEvbWV0YWRhdGEucHJvdG9cblxuZXhwb3J0IGludGVyZmFjZSBGaWVsZEluZm8ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbiAgcmVwZWF0ZWQ/OiBib29sZWFuO1xuICBlbnVtVHlwZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlU2NoZW1hIHtcbiAgZmllbGRzOiBSZWNvcmQ8bnVtYmVyLCBGaWVsZEluZm8+O1xuICBlbnVtcz86IFJlY29yZDxzdHJpbmcsIFJlY29yZDxudW1iZXIsIHN0cmluZz4+O1xufVxuXG5leHBvcnQgdHlwZSBNZXRhZGF0YVNjaGVtYSA9IFJlY29yZDxzdHJpbmcsIE1lc3NhZ2VTY2hlbWE+O1xuXG5leHBvcnQgY29uc3QgbWV0YWRhdGFTY2hlbWE6IE1ldGFkYXRhU2NoZW1hID0ge1xuICBcInNwb3RpZnkubWV0YWRhdGEuVHJhY2tcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcImdpZFwiLCB0eXBlOiBcImJ5dGVzXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJuYW1lXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDM6IHsgbmFtZTogXCJhbGJ1bVwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQWxidW1cIiB9LFxuICAgICAgNDogeyBuYW1lOiBcImFydGlzdFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQXJ0aXN0XCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICA1OiB7IG5hbWU6IFwibnVtYmVyXCIsIHR5cGU6IFwic2ludDMyXCIgfSxcbiAgICAgIDY6IHsgbmFtZTogXCJkaXNjX251bWJlclwiLCB0eXBlOiBcInNpbnQzMlwiIH0sXG4gICAgICA3OiB7IG5hbWU6IFwiZHVyYXRpb25cIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgICAgODogeyBuYW1lOiBcInBvcHVsYXJpdHlcIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgICAgOTogeyBuYW1lOiBcImV4cGxpY2l0XCIsIHR5cGU6IFwiYm9vbFwiIH0sXG4gICAgICAxMDogeyBuYW1lOiBcImV4dGVybmFsX2lkXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5FeHRlcm5hbElkXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAxMTogeyBuYW1lOiBcInJlc3RyaWN0aW9uXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5SZXN0cmljdGlvblwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTI6IHsgbmFtZTogXCJmaWxlXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5BdWRpb0ZpbGVcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDEzOiB7IG5hbWU6IFwiYWx0ZXJuYXRpdmVcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLlRyYWNrXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAxNDogeyBuYW1lOiBcInNhbGVfcGVyaW9kXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5TYWxlUGVyaW9kXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAxNTogeyBuYW1lOiBcInByZXZpZXdcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkF1ZGlvRmlsZVwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTY6IHsgbmFtZTogXCJ0YWdzXCIsIHR5cGU6IFwic3RyaW5nXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAxNzogeyBuYW1lOiBcImVhcmxpZXN0X2xpdmVfdGltZXN0YW1wXCIsIHR5cGU6IFwiaW50NjRcIiB9LFxuICAgICAgMTg6IHsgbmFtZTogXCJoYXNfbHlyaWNzXCIsIHR5cGU6IFwiYm9vbFwiIH0sXG4gICAgICAxOTogeyBuYW1lOiBcImF2YWlsYWJpbGl0eVwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQXZhaWxhYmlsaXR5XCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAyMTogeyBuYW1lOiBcImxpY2Vuc29yXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5MaWNlbnNvclwiIH0sXG4gICAgICAyMjogeyBuYW1lOiBcImxhbmd1YWdlX29mX3BlcmZvcm1hbmNlXCIsIHR5cGU6IFwic3RyaW5nXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAyNDogeyBuYW1lOiBcIm9yaWdpbmFsX2F1ZGlvXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5BdWRpb1wiIH0sXG4gICAgICAyNzogeyBuYW1lOiBcIm9yaWdpbmFsX3RpdGxlXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDI4OiB7IG5hbWU6IFwidmVyc2lvbl90aXRsZVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAzMjogeyBuYW1lOiBcImFydGlzdF93aXRoX3JvbGVcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkFydGlzdFdpdGhSb2xlXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAzNjogeyBuYW1lOiBcImNhbm9uaWNhbF91cmlcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgMzc6IHsgbmFtZTogXCJwcmVyZWxlYXNlX2NvbmZpZ1wiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuUHJlcmVsZWFzZUNvbmZpZ1wiIH0sXG4gICAgICAzOToge1xuICAgICAgICBuYW1lOiBcImNvbnRlbnRfYXV0aG9yaXphdGlvbl9hdHRyaWJ1dGVzXCIsXG4gICAgICAgIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5Db250ZW50QXV0aG9yaXphdGlvbkF0dHJpYnV0ZXNcIixcbiAgICAgIH0sXG4gICAgICA0MDogeyBuYW1lOiBcInRyYWNrX2NvbnRlbnRfcmF0aW5nXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5Db250ZW50UmF0aW5nXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICA0MTogeyBuYW1lOiBcImF1ZGlvX2Zvcm1hdHNcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLlRyYWNrQXVkaW9Gb3JtYXRcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDQzOiB7IG5hbWU6IFwidW5rbm93bl9maWVsZFwiLCB0eXBlOiBcImludDMyXCIgfSxcbiAgICAgIDQ0OiB7IG5hbWU6IFwiaW1wbGVtZW50YXRpb25fZGV0YWlsc1wiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuSW1wbGVtZW50YXRpb25EZXRhaWxzXCIgfSxcbiAgICAgIDQ3OiB7IG5hbWU6IFwidGVzdFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuVGVzdENhdGVnb3J5XCIgfSxcbiAgICAgIDEyOTogeyBuYW1lOiBcIm1lZGlhX3R5cGVcIiwgdHlwZTogXCJlbnVtXCIsIGVudW1UeXBlOiBcIk1lZGlhVHlwZVwiIH0sXG4gICAgfSxcbiAgICBlbnVtczogeyBNZWRpYVR5cGU6IHsgMDogXCJNSVhFRFwiLCAxOiBcIkFVRElPXCIsIDI6IFwiVklERU9cIiB9IH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5BbGJ1bVwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwiZ2lkXCIsIHR5cGU6IFwiYnl0ZXNcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcIm5hbWVcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgMzogeyBuYW1lOiBcImFydGlzdFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQXJ0aXN0XCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICA0OiB7IG5hbWU6IFwidHlwZVwiLCB0eXBlOiBcImVudW1cIiwgZW51bVR5cGU6IFwiVHlwZVwiIH0sXG4gICAgICA1OiB7IG5hbWU6IFwibGFiZWxcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgNjogeyBuYW1lOiBcImRhdGVcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkRhdGVcIiB9LFxuICAgICAgNzogeyBuYW1lOiBcInBvcHVsYXJpdHlcIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgICAgODogeyBuYW1lOiBcImdlbnJlXCIsIHR5cGU6IFwic3RyaW5nXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICA5OiB7IG5hbWU6IFwiY292ZXJcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkltYWdlXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAxMDogeyBuYW1lOiBcImV4dGVybmFsX2lkXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5FeHRlcm5hbElkXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAxMTogeyBuYW1lOiBcImRpc2NcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkRpc2NcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDEyOiB7IG5hbWU6IFwicmV2aWV3XCIsIHR5cGU6IFwic3RyaW5nXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAxMzogeyBuYW1lOiBcImNvcHlyaWdodFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuQ29weXJpZ2h0XCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAxNDogeyBuYW1lOiBcInJlc3RyaWN0aW9uXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5SZXN0cmljdGlvblwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTU6IHsgbmFtZTogXCJyZWxhdGVkXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5BbGJ1bVwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTY6IHsgbmFtZTogXCJzYWxlX3BlcmlvZFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuU2FsZVBlcmlvZFwiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgICAgMTc6IHsgbmFtZTogXCJjb3Zlcl9ncm91cFwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuSW1hZ2VHcm91cFwiIH0sXG4gICAgICAxODogeyBuYW1lOiBcIm9yaWdpbmFsX3RpdGxlXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDE5OiB7IG5hbWU6IFwidmVyc2lvbl90aXRsZVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAyMDogeyBuYW1lOiBcInR5cGVfc3RyXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDIzOiB7IG5hbWU6IFwiYXZhaWxhYmlsaXR5XCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5BdmFpbGFiaWxpdHlcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDI1OiB7IG5hbWU6IFwibGljZW5zb3JcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkxpY2Vuc29yXCIgfSxcbiAgICAgIDM3OiB7IG5hbWU6IFwicHJlcmVsZWFzZV9jb25maWdcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLlByZXJlbGVhc2VDb25maWdcIiB9LFxuICAgIH0sXG4gICAgZW51bXM6IHtcbiAgICAgIFR5cGU6IHsgMTogXCJBTEJVTVwiLCAyOiBcIlNJTkdMRVwiLCAzOiBcIkNPTVBJTEFUSU9OXCIsIDQ6IFwiRVBcIiwgNTogXCJBVURJT0JPT0tcIiwgNjogXCJQT0RDQVNUXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuQ29udGVudFJhdGluZ1wiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwidGFnXCIsIHR5cGU6IFwiZW51bVwiLCBlbnVtVHlwZTogXCJDb250ZW50UmF0aW5nVGFnXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJsYWJlbFwiLCB0eXBlOiBcInN0cmluZ1wiLCByZXBlYXRlZDogdHJ1ZSB9LFxuICAgIH0sXG4gICAgZW51bXM6IHsgQ29udGVudFJhdGluZ1RhZzogeyAwOiBcIlVOS05PV05cIiwgMTogXCJFWFBMSUNJVFwiIH0gfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLkRhdGVcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcInllYXJcIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcIm1vbnRoXCIsIHR5cGU6IFwic2ludDMyXCIgfSxcbiAgICAgIDM6IHsgbmFtZTogXCJkYXlcIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5JbWFnZVwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwiZmlsZV9pZFwiLCB0eXBlOiBcImJ5dGVzXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJzaXplXCIsIHR5cGU6IFwiZW51bVwiLCBlbnVtVHlwZTogXCJTaXplXCIgfSxcbiAgICAgIDM6IHsgbmFtZTogXCJ3aWR0aFwiLCB0eXBlOiBcInNpbnQzMlwiIH0sXG4gICAgICA0OiB7IG5hbWU6IFwiaGVpZ2h0XCIsIHR5cGU6IFwic2ludDMyXCIgfSxcbiAgICB9LFxuICAgIGVudW1zOiB7IFNpemU6IHsgMDogXCJVTktOT1dOXCIsIDE6IFwiU01BTExcIiwgMjogXCJNRURJVU1cIiwgMzogXCJMQVJHRVwiLCA0OiBcIkVYVFJBX0xBUkdFXCIgfSB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuQXVkaW9GaWxlXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJmaWxlX2lkXCIsIHR5cGU6IFwiYnl0ZXNcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcImZvcm1hdFwiLCB0eXBlOiBcImVudW1cIiwgZW51bVR5cGU6IFwiRm9ybWF0XCIgfSxcbiAgICAgIDM6IHsgbmFtZTogXCJiaXRyYXRlXCIsIHR5cGU6IFwic2ludDMyXCIgfSxcbiAgICAgIDQ6IHsgbmFtZTogXCJwcmV2aWV3XCIsIHR5cGU6IFwiYnl0ZXNcIiB9LFxuICAgIH0sXG4gICAgZW51bXM6IHtcbiAgICAgIEZvcm1hdDogeyAxOiBcIk1QNFwiLCAyOiBcIk9HR1wiLCAzOiBcIldFQk1cIiwgNDogXCJVTktOT1dOXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuQXJ0aXN0XCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJnaWRcIiwgdHlwZTogXCJieXRlc1wiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwibmFtZVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAzOiB7IG5hbWU6IFwiaW1hZ2VcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkltYWdlXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICA0OiB7IG5hbWU6IFwiZ2VucmVcIiwgdHlwZTogXCJzdHJpbmdcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDU6IHsgbmFtZTogXCJwcm9maWxlXCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5BcnRpc3RQcm9maWxlXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuQXJ0aXN0UHJvZmlsZVwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwibmFtZVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwiYmlvZ3JhcGh5XCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDM6IHsgbmFtZTogXCJpbWFnZVwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuSW1hZ2VcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDQ6IHsgbmFtZTogXCJhcnRpc3RfbmFtZVwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuTG9jYWxpemVkU3RyaW5nXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLkxvY2FsaXplZFN0cmluZ1wiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwibG9jYWxlXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJzdHJpbmdcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5FeHRlcm5hbElkXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJ0eXBlXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJpZFwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLlJlc3RyaWN0aW9uXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJjb3VudHJpZXNcIiwgdHlwZTogXCJzdHJpbmdcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJjYXRhbG9ndWVzXCIsIHR5cGU6IFwic3RyaW5nXCIsIHJlcGVhdGVkOiB0cnVlIH0sXG4gICAgICAzOiB7IG5hbWU6IFwicmVhc29uXCIsIHR5cGU6IFwiZW51bVwiLCBlbnVtVHlwZTogXCJSZWFzb25cIiB9LFxuICAgIH0sXG4gICAgZW51bXM6IHsgUmVhc29uOiB7IDA6IFwiVU5LTk9XTlwiLCAxOiBcIk5PVF9BVkFJTEFCTEVfSU5fQ09VTlRSWVwiLCAyOiBcIk5PVF9BVkFJTEFCTEVfRk9SX0NVUlJFTkNZXCIsIDM6IFwiTk9UX0FWQUlMQUJMRV9GT1JfVVNFUlwiIH0gfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLkF2YWlsYWJpbGl0eVwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwic3RhcnRfdGltZVwiLCB0eXBlOiBcImludDY0XCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJhZnRlcl9zdGFydF90aW1lXCIsIHR5cGU6IFwiYm9vbFwiIH0sXG4gICAgICAzOiB7IG5hbWU6IFwiaXNfYXZhaWxhYmxlXCIsIHR5cGU6IFwiYm9vbFwiIH0sXG4gICAgfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLlRyYWNrQXVkaW9Gb3JtYXRcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcImNvZGVjXCIsIHR5cGU6IFwiZW51bVwiLCBlbnVtVHlwZTogXCJDb2RlY1wiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwiYml0cmF0ZVwiLCB0eXBlOiBcInNpbnQzMlwiIH0sXG4gICAgfSxcbiAgICBlbnVtczoge1xuICAgICAgQ29kZWM6IHsgMDogXCJVTktOT1dOXCIsIDE6IFwiTVAzXCIsIDI6IFwiQUFDXCIsIDM6IFwiT0dHX1ZPUkJJU1wiLCA0OiBcIkZMQUNcIiwgNTogXCJXRUJNQV9PUFVTXCIsIDY6IFwiV0VCTUFfVk9SQklTXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuQXVkaW9cIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcImdhaW5cIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcInNhbXBsZV9vZmZzZXRcIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5EaXNjXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJudW1iZXJcIiwgdHlwZTogXCJzaW50MzJcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcIm5hbWVcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5BcnRpc3RXaXRoUm9sZVwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwiYXJ0aXN0XCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5BcnRpc3RcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcInJvbGVcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkFydGlzdFJvbGVcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICAgIDM6IHsgbmFtZTogXCJoYXNfc2F2aW5nX3JpZ2h0c1wiLCB0eXBlOiBcImJvb2xcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5BcnRpc3RSb2xlXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJpZFwiLCB0eXBlOiBcImVudW1cIiwgZW51bVR5cGU6IFwiUm9sZUlkXCIgfSxcbiAgICB9LFxuICAgIGVudW1zOiB7XG4gICAgICBSb2xlSWQ6IHsgMDogXCJNQUlOXCIsIDE6IFwiRkVBVFVSRURcIiwgMjogXCJSRU1JWFwiLCAzOiBcIlBST0RVQ0VSXCIsIDQ6IFwiQ09NUE9TRVJcIiwgNTogXCJMWVJJQ0lTVFwiIH0sXG4gICAgfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLlNhbGVQZXJpb2RcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcInN0YXJ0XCIsIHR5cGU6IFwic3BvdGlmeS5tZXRhZGF0YS5EYXRlXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJlbmRcIiwgdHlwZTogXCJzcG90aWZ5Lm1ldGFkYXRhLkRhdGVcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5JbWFnZUdyb3VwXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJiYWNraW5nX3R5cGVcIiwgdHlwZTogXCJlbnVtXCIsIGVudW1UeXBlOiBcIkJhY2tpbmdUeXBlXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJpbWFnZVwiLCB0eXBlOiBcInNwb3RpZnkubWV0YWRhdGEuSW1hZ2VcIiwgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgICB9LFxuICAgIGVudW1zOiB7IEJhY2tpbmdUeXBlOiB7IDA6IFwiVU5LTk9XTlwiLCAxOiBcIkRFRkFVTFRcIiwgMjogXCJWSURFT19GUkFNRVwiIH0gfSxcbiAgfSxcbiAgXCJzcG90aWZ5Lm1ldGFkYXRhLkNvcHlyaWdodFwiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwidHlwZVwiLCB0eXBlOiBcImVudW1cIiwgZW51bVR5cGU6IFwiVHlwZVwiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwidGV4dFwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgfSxcbiAgICBlbnVtczogeyBUeXBlOiB7IDA6IFwiUFwiLCAxOiBcIkNcIiB9IH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5WaWRlb0ZpbGVcIjoge1xuICAgIGZpZWxkczogeyAxOiB7IG5hbWU6IFwiZmlsZV9pZFwiLCB0eXBlOiBcImJ5dGVzXCIgfSB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuTGljZW5zb3JcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcImxpY2Vuc29yX2lkXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuQ29udGVudEF1dGhvcml6YXRpb25BdHRyaWJ1dGVzXCI6IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIDE6IHsgbmFtZTogXCJjYXRfaWRcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcImNvbnRlbnRfcmlnaHRzXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDM6IHsgbmFtZTogXCJyaWdodHNfb3duZXJfaWRcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5JbXBsZW1lbnRhdGlvbkRldGFpbHNcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcImltcGxfaWRcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgMjogeyBuYW1lOiBcImRlc2NyaXB0aW9uXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICB9LFxuICB9LFxuICBcInNwb3RpZnkubWV0YWRhdGEuUHJlcmVsZWFzZUNvbmZpZ1wiOiB7XG4gICAgZmllbGRzOiB7XG4gICAgICAxOiB7IG5hbWU6IFwiaXNfcHJlbWl1bV9vbmx5XCIsIHR5cGU6IFwiYm9vbFwiIH0sXG4gICAgICAyOiB7IG5hbWU6IFwicmVsZWFzZV9kYXRlXCIsIHR5cGU6IFwiaW50NjRcIiB9LFxuICAgIH0sXG4gIH0sXG4gIFwic3BvdGlmeS5tZXRhZGF0YS5UZXN0Q2F0ZWdvcnlcIjoge1xuICAgIGZpZWxkczoge1xuICAgICAgMTogeyBuYW1lOiBcImNhdGVnb3J5XCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIDI6IHsgbmFtZTogXCJpc19lbmFibGVkXCIsIHR5cGU6IFwiYm9vbFwiIH0sXG4gICAgfSxcbiAgfSxcbn07IiwgImltcG9ydCB7IG1ldGFkYXRhU2NoZW1hIH0gZnJvbSBcIi4vc2NoZW1hLnRzXCI7XG5cbmZ1bmN0aW9uIHdhcm4ocmVhc29uOiBzdHJpbmcsIGN0eE9yVGh1bms6IFJlY29yZDxzdHJpbmcsIGFueT4gfCAoKCkgPT4gUmVjb3JkPHN0cmluZywgYW55PikpIHtcbiAgaWYgKHJlYXNvbi5pbmNsdWRlcyhcIkRlY29kZSBlcnJvclwiKSB8fCByZWFzb24uaW5jbHVkZXMoXCJTY2hlbWEgbm90IGZvdW5kXCIpKSB7XG4gICAgY29uc3QgY3R4ID0gdHlwZW9mIGN0eE9yVGh1bmsgPT09IFwiZnVuY3Rpb25cIiA/IGN0eE9yVGh1bmsoKSA6IGN0eE9yVGh1bms7XG4gICAgY29uc29sZS53YXJuKFwiW1Byb3RvYnVmXVwiLCByZWFzb24sIGN0eCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByb3RvYnVmUmVhZGVyIHtcbiAgcHJpdmF0ZSB2aWV3OiBEYXRhVmlldztcbiAgcHJpdmF0ZSBieXRlczogVWludDhBcnJheTtcbiAgcHVibGljIG9mZnNldDogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBSZWNvcmQ8c3RyaW5nIHwgbnVtYmVyLCBudW1iZXI+IHwgQXJyYXlMaWtlPG51bWJlcj4gfCBVaW50OEFycmF5KSB7XG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICB0aGlzLmJ5dGVzID0gZGF0YTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkgfHwgXCJsZW5ndGhcIiBpbiBkYXRhKSB7XG4gICAgICB0aGlzLmJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoQXJyYXkuZnJvbShkYXRhIGFzIEFycmF5TGlrZTxudW1iZXI+KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnl0ZXMgPSBuZXcgVWludDhBcnJheShPYmplY3QudmFsdWVzKGRhdGEpKTtcbiAgICB9XG4gICAgdGhpcy52aWV3ID0gbmV3IERhdGFWaWV3KHRoaXMuYnl0ZXMuYnVmZmVyLCB0aGlzLmJ5dGVzLmJ5dGVPZmZzZXQsIHRoaXMuYnl0ZXMuYnl0ZUxlbmd0aCk7XG4gIH1cblxuICBnZXQgaXNFeGhhdXN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0ID49IHRoaXMuYnl0ZXMubGVuZ3RoO1xuICB9XG5cbiAgcmVhZFZhcmludCgpOiBiaWdpbnQgfCBudWxsIHtcbiAgICBpZiAodGhpcy5pc0V4aGF1c3RlZCkgcmV0dXJuIG51bGw7XG4gICAgbGV0IHJlc3VsdCA9IDBuO1xuICAgIGxldCBzaGlmdCA9IDBuO1xuICAgIHdoaWxlICghdGhpcy5pc0V4aGF1c3RlZCkge1xuICAgICAgY29uc3QgYnl0ZSA9IEJpZ0ludCh0aGlzLmJ5dGVzW3RoaXMub2Zmc2V0KytdKTtcbiAgICAgIHJlc3VsdCB8PSAoYnl0ZSAmIDB4N2ZuKSA8PCBzaGlmdDtcbiAgICAgIGlmICghKGJ5dGUgJiAweDgwbikpIHJldHVybiByZXN1bHQ7XG4gICAgICBzaGlmdCArPSA3bjtcbiAgICAgIGlmIChzaGlmdCA+IDcwbikge1xuICAgICAgICB3YXJuKFwiVmFyaW50IHRvbyBsb25nXCIsIHtcbiAgICAgICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0LFxuICAgICAgICAgIHNoaWZ0OiBzaGlmdC50b1N0cmluZygpLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmVhZFppZ1phZ1ZhcmludCgpOiBiaWdpbnQge1xuICAgIGNvbnN0IG4gPSB0aGlzLnJlYWRWYXJpbnQoKTtcbiAgICBpZiAobiA9PT0gbnVsbCkge1xuICAgICAgd2FybihcIkludmFsaWQgemlnemFnIHZhcmludFwiLCB7IG9mZnNldDogdGhpcy5vZmZzZXQgfSk7XG4gICAgICByZXR1cm4gMG47XG4gICAgfVxuICAgIHJldHVybiAobiA+PiAxbikgXiAtKG4gJiAxbik7XG4gIH1cblxuICByZWFkQnl0ZXMobGVuZ3RoOiBudW1iZXIpOiBVaW50OEFycmF5IHtcbiAgICBjb25zdCBhY3R1YWxMZW5ndGggPSBNYXRoLm1pbihsZW5ndGgsIHRoaXMuYnl0ZXMubGVuZ3RoIC0gdGhpcy5vZmZzZXQpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuYnl0ZXMuc2xpY2UodGhpcy5vZmZzZXQsIHRoaXMub2Zmc2V0ICsgYWN0dWFsTGVuZ3RoKTtcbiAgICB0aGlzLm9mZnNldCArPSBhY3R1YWxMZW5ndGg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHNraXAod2lyZVR5cGU6IG51bWJlcik6IHZvaWQge1xuICAgIHN3aXRjaCAod2lyZVR5cGUpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgdGhpcy5yZWFkVmFyaW50KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICB0aGlzLm9mZnNldCArPSA4O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjoge1xuICAgICAgICBjb25zdCBsZW4gPSB0aGlzLnJlYWRWYXJpbnQoKTtcbiAgICAgICAgaWYgKGxlbiAhPT0gbnVsbCkgdGhpcy5vZmZzZXQgKz0gTnVtYmVyKGxlbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAzOlxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgIGNvbnN0IHRhZyA9IHRoaXMucmVhZFZhcmludCgpO1xuICAgICAgICAgIGlmICh0YWcgPT09IG51bGwgfHwgKE51bWJlcih0YWcpICYgNykgPT09IDQpIGJyZWFrO1xuICAgICAgICAgIHRoaXMuc2tpcChOdW1iZXIodGFnKSAmIDcpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1OlxuICAgICAgICB0aGlzLm9mZnNldCArPSA0O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHdhcm4oXCJVbmtub3duIHdpcmUgdHlwZVwiLCB7XG4gICAgICAgICAgd2lyZVR5cGUsXG4gICAgICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGVjb2RlKHNjaGVtYU5hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgY29uc3Qgc2NoZW1hID0gbWV0YWRhdGFTY2hlbWFbc2NoZW1hTmFtZV07XG4gICAgaWYgKCFzY2hlbWEpIHtcbiAgICAgIHdhcm4oXCJTY2hlbWEgbm90IGZvdW5kXCIsIHsgc2NoZW1hTmFtZSB9KTtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQ6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcblxuICAgIHdoaWxlICghdGhpcy5pc0V4aGF1c3RlZCkge1xuICAgICAgY29uc3QgdGFnID0gdGhpcy5yZWFkVmFyaW50KCk7XG4gICAgICBpZiAodGFnID09PSBudWxsIHx8IHRhZyA9PT0gMG4pIGJyZWFrO1xuXG4gICAgICBjb25zdCBmaWVsZE51bWJlciA9IE51bWJlcih0YWcgPj4gM24pO1xuICAgICAgY29uc3Qgd2lyZVR5cGUgPSBOdW1iZXIodGFnICYgN24pO1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEuZmllbGRzW2ZpZWxkTnVtYmVyXTtcblxuICAgICAgaWYgKCFmaWVsZCkge1xuICAgICAgICBpZiAod2lyZVR5cGUgPT09IDIpIHtcbiAgICAgICAgICBjb25zdCBsZW4gPSBOdW1iZXIodGhpcy5yZWFkVmFyaW50KCkgPz8gMG4pO1xuICAgICAgICAgIGNvbnN0IHJhdyA9IHRoaXMucmVhZEJ5dGVzKGxlbik7XG5cbiAgICAgICAgICB3YXJuKFwiVW5rbm93biBmaWVsZFwiLCAoKSA9PiAoe1xuICAgICAgICAgICAgc2NoZW1hOiBzY2hlbWFOYW1lLFxuICAgICAgICAgICAgZmllbGROdW1iZXIsXG4gICAgICAgICAgICB3aXJlVHlwZSxcbiAgICAgICAgICAgIGxlbmd0aDogbGVuLFxuICAgICAgICAgICAgaGV4OiBBcnJheS5mcm9tKHJhdylcbiAgICAgICAgICAgICAgLm1hcCgoYikgPT4gYi50b1N0cmluZygxNikucGFkU3RhcnQoMiwgXCIwXCIpKVxuICAgICAgICAgICAgICAuam9pbihcIiBcIiksXG4gICAgICAgICAgICBhc2NpaTogbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKHJhdykucmVwbGFjZSgvW15cXHgyMC1cXHg3RV0vZywgXCIuXCIpLFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3YXJuKFwiVW5rbm93biBmaWVsZFwiLCB7XG4gICAgICAgICAgICBzY2hlbWE6IHNjaGVtYU5hbWUsXG4gICAgICAgICAgICBmaWVsZE51bWJlcixcbiAgICAgICAgICAgIHdpcmVUeXBlLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdGhpcy5za2lwKHdpcmVUeXBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgdmFsdWU6IGFueTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHN3aXRjaCAoZmllbGQudHlwZSkge1xuICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjoge1xuICAgICAgICAgICAgY29uc3QgbGVuID0gTnVtYmVyKHRoaXMucmVhZFZhcmludCgpID8/IDBuKTtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKHRoaXMucmVhZEJ5dGVzKGxlbikpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgXCJieXRlc1wiOiB7XG4gICAgICAgICAgICBjb25zdCBsZW4gPSBOdW1iZXIodGhpcy5yZWFkVmFyaW50KCkgPz8gMG4pO1xuICAgICAgICAgICAgdmFsdWUgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgICB0aGlzLnJlYWRCeXRlcyhsZW4pLFxuICAgICAgICAgICAgICAoYikgPT4gKGIgPCAxNiA/IFwiMFwiIDogXCJcIikgKyBiLnRvU3RyaW5nKDE2KSxcbiAgICAgICAgICAgICkuam9pbihcIlwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIFwiYm9vbFwiOlxuICAgICAgICAgICAgdmFsdWUgPSAodGhpcy5yZWFkVmFyaW50KCkgPz8gMG4pICE9PSAwbjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJpbnQzMlwiOlxuICAgICAgICAgIGNhc2UgXCJ1aW50MzJcIjpcbiAgICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHRoaXMucmVhZFZhcmludCgpID8/IDBuKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJpbnQ2NFwiOlxuICAgICAgICAgIGNhc2UgXCJ1aW50NjRcIjoge1xuICAgICAgICAgICAgY29uc3QgdiA9IHRoaXMucmVhZFZhcmludCgpID8/IDBuO1xuICAgICAgICAgICAgdmFsdWUgPSB2IDw9IEJpZ0ludChOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikgPyBOdW1iZXIodikgOiB2LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSBcInNpbnQzMlwiOlxuICAgICAgICAgICAgdmFsdWUgPSBOdW1iZXIodGhpcy5yZWFkWmlnWmFnVmFyaW50KCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcInNpbnQ2NFwiOiB7XG4gICAgICAgICAgICBjb25zdCB2ID0gdGhpcy5yZWFkWmlnWmFnVmFyaW50KCk7XG4gICAgICAgICAgICB2YWx1ZSA9XG4gICAgICAgICAgICAgIHYgPD0gQmlnSW50KE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKSAmJiB2ID49IEJpZ0ludChOdW1iZXIuTUlOX1NBRkVfSU5URUdFUilcbiAgICAgICAgICAgICAgICA/IE51bWJlcih2KVxuICAgICAgICAgICAgICAgIDogdi50b1N0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgXCJmaXhlZDMyXCI6XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMudmlldy5nZXRVaW50MzIodGhpcy5vZmZzZXQsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXQgKz0gNDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJmaXhlZDY0XCI6XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMudmlldy5nZXRCaWdVaW50NjQodGhpcy5vZmZzZXQsIHRydWUpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLm9mZnNldCArPSA4O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcImZsb2F0XCI6XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMudmlldy5nZXRGbG9hdDMyKHRoaXMub2Zmc2V0LCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ICs9IDQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiZG91YmxlXCI6XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMudmlldy5nZXRGbG9hdDY0KHRoaXMub2Zmc2V0LCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ICs9IDg7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiZW51bVwiOiB7XG4gICAgICAgICAgICBjb25zdCBlbnVtVmFsID0gTnVtYmVyKHRoaXMucmVhZFZhcmludCgpID8/IDBuKTtcbiAgICAgICAgICAgIHZhbHVlID0gKGZpZWxkLmVudW1UeXBlICYmIHNjaGVtYS5lbnVtcz8uW2ZpZWxkLmVudW1UeXBlXT8uW2VudW1WYWxdKSA/PyBlbnVtVmFsO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IE51bWJlcih0aGlzLnJlYWRWYXJpbnQoKSA/PyAwbik7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ldyBQcm90b2J1ZlJlYWRlcih0aGlzLnJlYWRCeXRlcyhsZW4pKS5kZWNvZGUoZmllbGQudHlwZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB3YXJuKFwiRGVjb2RlIGVycm9yXCIsIHtcbiAgICAgICAgICBzY2hlbWE6IHNjaGVtYU5hbWUsXG4gICAgICAgICAgZmllbGQ6IGZpZWxkLm5hbWUsXG4gICAgICAgICAgZmllbGROdW1iZXIsXG4gICAgICAgICAgd2lyZVR5cGUsXG4gICAgICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuXG4gICAgICBpZiAoZmllbGQucmVwZWF0ZWQpIHtcbiAgICAgICAgaWYgKCFyZXN1bHRbZmllbGQubmFtZV0pIHJlc3VsdFtmaWVsZC5uYW1lXSA9IFtdO1xuICAgICAgICByZXN1bHRbZmllbGQubmFtZV0ucHVzaCh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRbZmllbGQubmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVQcm90b2J1ZihkYXRhOiBhbnksIHNjaGVtYU5hbWU6IHN0cmluZyk6IGFueSB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBQcm90b2J1ZlJlYWRlcihkYXRhKS5kZWNvZGUoc2NoZW1hTmFtZSk7XG4gIHJldHVybiByZXN1bHQ7XG59IiwgImNvbnN0IEdMT0JBTF9LRVkgPSBcIl9fY2FjaGVkX3dlYnBhY2tfbW9kdWxlc1wiO1xuXG5pZiAoIShnbG9iYWxUaGlzIGFzIGFueSlbR0xPQkFMX0tFWV0pIHtcbiAgKGdsb2JhbFRoaXMgYXMgYW55KVtHTE9CQUxfS0VZXSA9IHtcbiAgICByZXF1aXJlOiBudWxsLFxuICAgIG1vZHVsZXM6IG51bGwsXG4gICAgbGFzdE1vZHVsZUNvdW50OiAwLFxuICAgIHNlcnZpY2VDYWNoZTogbmV3IE1hcDxzdHJpbmcsIGFueT4oKSxcbiAgICBzZWFyY2hDYWNoZTogbmV3IE1hcDxzdHJpbmcsIGFueT4oKSxcbiAgICBjb21wb25lbnRDYWNoZTogbmV3IE1hcDxzdHJpbmcsIGFueT4oKSxcbiAgfTtcbn1cblxuY29uc3Qgc2hhcmVkID0gKGdsb2JhbFRoaXMgYXMgYW55KVtHTE9CQUxfS0VZXTtcblxuZXhwb3J0IGNvbnN0IFNwb3RpZnlXZWJwYWNrID0ge1xuICBnZXRNb2R1bGVzKCkge1xuICAgIGlmICghc2hhcmVkLnJlcXVpcmUpIHtcbiAgICAgIGNvbnN0IHdlYnBhY2sgPSAoZ2xvYmFsVGhpcyBhcyBhbnkpLndlYnBhY2tDaHVua2NsaWVudF93ZWI7XG4gICAgICBpZiAoIXdlYnBhY2spIHJldHVybiBzaGFyZWQubW9kdWxlcyA/PyBbXTtcbiAgICAgIHNoYXJlZC5yZXF1aXJlID0gd2VicGFjay5wdXNoKFtbU3ltYm9sKCldLCB7fSwgKHJlOiBhbnkpID0+IHJlXSk7XG4gICAgfVxuXG4gICAgaWYgKCFzaGFyZWQucmVxdWlyZSB8fCAhc2hhcmVkLnJlcXVpcmUubSkgcmV0dXJuIHNoYXJlZC5tb2R1bGVzID8/IFtdO1xuXG4gICAgY29uc3QgY3VycmVudEtleXMgPSBPYmplY3Qua2V5cyhzaGFyZWQucmVxdWlyZS5tKTtcblxuICAgIGlmIChzaGFyZWQubW9kdWxlcyAmJiBzaGFyZWQubGFzdE1vZHVsZUNvdW50ID09PSBjdXJyZW50S2V5cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBzaGFyZWQubW9kdWxlcztcbiAgICB9XG5cbiAgICBzaGFyZWQubW9kdWxlcyA9IGN1cnJlbnRLZXlzLm1hcCgoaWQpID0+ICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHNoYXJlZC5yZXF1aXJlKGlkKTtcbiAgICAgICAgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgbW9kdWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKG1vZHVsZSk7XG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICByZXR1cm4gW21vZHVsZV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbbW9kdWxlXTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzaGFyZWQubGFzdE1vZHVsZUNvdW50ID0gY3VycmVudEtleXMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHNoYXJlZC5tb2R1bGVzO1xuICB9LFxuXG4gIGdldE1vZHVsZUJ5SWQoaWQ6IHN0cmluZykge1xuICAgIGlmICghc2hhcmVkLm1vZHVsZXMpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGlkKTtcbiAgICBpZiAoIWlzTmFOKGluZGV4KSAmJiBzaGFyZWQubW9kdWxlc1tpbmRleF0pIHtcbiAgICAgIHJldHVybiBzaGFyZWQubW9kdWxlc1tpbmRleF0oKTtcbiAgICB9XG4gICAgaWYgKCFzaGFyZWQucmVxdWlyZSkge1xuICAgICAgU3BvdGlmeVdlYnBhY2suZ2V0TW9kdWxlcygpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgbW9kdWxlID0gc2hhcmVkLnJlcXVpcmU/LihpZCk7XG4gICAgICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiBtb2R1bGUgIT09IG51bGwpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhtb2R1bGUpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICByZXR1cm4gW21vZHVsZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBbbW9kdWxlXTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSxcblxuICBmaW5kTW9kdWxlQnlDb250ZW50KGtleXdvcmRzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IGNhY2hlS2V5ID0ga2V5d29yZHMuam9pbihcIixcIik7XG4gICAgaWYgKHNoYXJlZC5zZWFyY2hDYWNoZS5oYXMoY2FjaGVLZXkpKSB7XG4gICAgICByZXR1cm4gc2hhcmVkLnNlYXJjaENhY2hlLmdldChjYWNoZUtleSk7XG4gICAgfVxuXG4gICAgaWYgKCFzaGFyZWQucmVxdWlyZSB8fCAhc2hhcmVkLnJlcXVpcmUubSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgU3BvdGlmeVdlYnBhY2suZ2V0TW9kdWxlcygpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHNoYXJlZC5zZWFyY2hDYWNoZS5zZXQoY2FjaGVLZXksIG51bGwpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXNoYXJlZC5yZXF1aXJlPy5tKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IG1vZHVsZXMgPSBzaGFyZWQucmVxdWlyZS5tO1xuXG4gICAgZm9yIChjb25zdCBpZCBpbiBtb2R1bGVzKSB7XG4gICAgICBjb25zdCBtb2R1bGVGYWN0b3J5ID0gbW9kdWxlc1tpZF07XG4gICAgICBpZiAodHlwZW9mIG1vZHVsZUZhY3RvcnkgIT09IFwiZnVuY3Rpb25cIikgY29udGludWU7XG5cbiAgICAgIGNvbnN0IHN0ciA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG1vZHVsZUZhY3RvcnkpO1xuXG4gICAgICBpZiAoa2V5d29yZHMuZXZlcnkoKGspID0+IHN0ci5pbmNsdWRlcyhrKSkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBtb2QgPSBzaGFyZWQucmVxdWlyZShpZCk7XG4gICAgICAgICAgc2hhcmVkLnNlYXJjaENhY2hlLnNldChjYWNoZUtleSwgbW9kKTtcbiAgICAgICAgICByZXR1cm4gbW9kO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYEZhaWxlZCB0byByZXF1aXJlIG1vZHVsZSAke2lkfTpgLCBlcnIpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2hhcmVkLnNlYXJjaENhY2hlLnNldChjYWNoZUtleSwgbnVsbCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG5cbiAgZmluZENvbXBvbmVudEJ5S2V5d29yZHMoa2V5d29yZHM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgY2FjaGVLZXkgPSBrZXl3b3Jkcy5qb2luKFwiLFwiKTtcbiAgICBpZiAoc2hhcmVkLmNvbXBvbmVudENhY2hlLmhhcyhjYWNoZUtleSkpIHtcbiAgICAgIHJldHVybiBzaGFyZWQuY29tcG9uZW50Q2FjaGUuZ2V0KGNhY2hlS2V5KTtcbiAgICB9XG5cbiAgICBpZiAoIXNoYXJlZC5yZXF1aXJlIHx8ICFzaGFyZWQucmVxdWlyZS5tKSB7XG4gICAgICB0cnkge1xuICAgICAgICBTcG90aWZ5V2VicGFjay5nZXRNb2R1bGVzKCk7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgc2hhcmVkLmNvbXBvbmVudENhY2hlLnNldChjYWNoZUtleSwgbnVsbCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghc2hhcmVkLnJlcXVpcmU/Lm0pIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgbW9kdWxlcyA9IHNoYXJlZC5yZXF1aXJlLm07XG4gICAgbGV0IGZvdW5kTW9kdWxlSWQgPSBudWxsO1xuXG4gICAgZm9yIChjb25zdCBpZCBpbiBtb2R1bGVzKSB7XG4gICAgICBjb25zdCBtb2R1bGVGYWN0b3J5ID0gbW9kdWxlc1tpZF07XG4gICAgICBpZiAodHlwZW9mIG1vZHVsZUZhY3RvcnkgIT09IFwiZnVuY3Rpb25cIikgY29udGludWU7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHN0ciA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG1vZHVsZUZhY3RvcnkpO1xuICAgICAgICBpZiAoa2V5d29yZHMuZXZlcnkoKGspID0+IHN0ci5pbmNsdWRlcyhrKSkpIHtcbiAgICAgICAgICBmb3VuZE1vZHVsZUlkID0gaWQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKF9lKSB7fVxuICAgIH1cblxuICAgIGlmICghZm91bmRNb2R1bGVJZCkgcmV0dXJuIG51bGw7XG5cbiAgICBsZXQgZXhwb3J0czogYW55O1xuICAgIHRyeSB7XG4gICAgICBleHBvcnRzID0gc2hhcmVkLnJlcXVpcmUoZm91bmRNb2R1bGVJZCk7XG4gICAgfSBjYXRjaCB7XG4gICAgICBzaGFyZWQuY29tcG9uZW50Q2FjaGUuc2V0KGNhY2hlS2V5LCBudWxsKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGlzTGlrZWx5Q29tcG9uZW50ID0gKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIGlmICghdmFsdWUpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmICh2YWx1ZS4kJHR5cGVvZiAmJiBTeW1ib2wua2V5Rm9yKHZhbHVlLiQkdHlwZW9mKT8uaW5jbHVkZXMoXCJyZWFjdFwiKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIjtcbiAgICB9O1xuXG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICBpZiAoaXNMaWtlbHlDb21wb25lbnQoZXhwb3J0cykpIHtcbiAgICAgIHJlc3VsdCA9IGV4cG9ydHM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZXhwb3J0cykge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGV4cG9ydHNba2V5XTtcbiAgICAgICAgaWYgKGlzTGlrZWx5Q29tcG9uZW50KHZhbHVlKSkge1xuICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2hhcmVkLmNvbXBvbmVudENhY2hlLnNldChjYWNoZUtleSwgcmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuXG4gIGZpbmRTZXJ2aWNlKHNlcnZpY2VOYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtb2R1bGVzID0gU3BvdGlmeVdlYnBhY2suZ2V0TW9kdWxlcygpO1xuXG4gICAgZm9yIChjb25zdCBtb2R1bGVHZXR0ZXIgb2YgbW9kdWxlcykge1xuICAgICAgaWYgKCFtb2R1bGVHZXR0ZXIgfHwgdHlwZW9mIG1vZHVsZUdldHRlciAhPT0gXCJmdW5jdGlvblwiKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IG1vZHVsZSA9IG1vZHVsZUdldHRlcigpO1xuICAgICAgaWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkobW9kdWxlKSA/IG1vZHVsZSA6IFttb2R1bGVdO1xuICAgICAgZm9yIChjb25zdCBtIG9mIGV4cG9ydHMpIHtcbiAgICAgICAgaWYgKG0gJiYgdHlwZW9mIG0gPT09IFwiZnVuY3Rpb25cIiAmJiBtLlNFUlZJQ0VfSUQgPT09IHNlcnZpY2VOYW1lKSByZXR1cm4gbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcblxuICBnZXRDbGllbnQ8VCA9IGFueT4oc2VydmljZU5hbWU6IHN0cmluZyk6IFQge1xuICAgIGlmIChzaGFyZWQuc2VydmljZUNhY2hlLmhhcyhzZXJ2aWNlTmFtZSkpIHtcbiAgICAgIHJldHVybiBzaGFyZWQuc2VydmljZUNhY2hlLmdldChzZXJ2aWNlTmFtZSk7XG4gICAgfVxuICAgIGNvbnN0IFNlcnZpY2VDbGFzcyA9IFNwb3RpZnlXZWJwYWNrLmZpbmRTZXJ2aWNlKHNlcnZpY2VOYW1lKTtcbiAgICBpZiAoIVNlcnZpY2VDbGFzcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTcG90aWZ5IFNlcnZpY2Ugbm90IGZvdW5kOiAke3NlcnZpY2VOYW1lfWApO1xuICAgIH1cblxuICAgIGxldCBjbGllbnQ6IGFueTtcbiAgICBpZiAodHlwZW9mIFNlcnZpY2VDbGFzcyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBjb25zdCB0cmFuc3BvcnQgPSAoZ2xvYmFsVGhpcyBhcyBhbnkpLlNwaWNldGlmeT8uUGxhdGZvcm0/LlJlZ2lzdHJ5Py5yZXNvbHZlKFN5bWJvbC5mb3IoXCJFc3BlcmFudG9UcmFuc3BvcnRcIikpO1xuICAgICAgaWYgKHRyYW5zcG9ydCkge1xuICAgICAgICBjbGllbnQgPSBuZXcgU2VydmljZUNsYXNzKHRyYW5zcG9ydCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFc3BlcmFudG9UcmFuc3BvcnQgbm90IGF2YWlsYWJsZVwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2xpZW50ID0gU2VydmljZUNsYXNzO1xuICAgIH1cblxuICAgIHNoYXJlZC5zZXJ2aWNlQ2FjaGUuc2V0KHNlcnZpY2VOYW1lLCBjbGllbnQpO1xuICAgIHJldHVybiBjbGllbnQ7XG4gIH0sXG59O1xuXG4oZ2xvYmFsVGhpcyBhcyBhbnkpLlNwb3RpZnlXZWJwYWNrID0gU3BvdGlmeVdlYnBhY2s7IiwgImltcG9ydCB7IGRlY29kZVByb3RvYnVmIH0gZnJvbSBcIi4uL3dlYnBhY2svcHJvdG9idWYudHNcIjtcbmltcG9ydCB7IFNwb3RpZnlXZWJwYWNrIH0gZnJvbSBcIi4uL3dlYnBhY2svd2VicGFjay50c1wiO1xuXG5jb25zdCBNZXRhZGF0YVNlcnZpY2UgPSBcInNwb3RpZnkubWRhdGFfZXNwZXJhbnRvLnByb3RvLk1ldGFkYXRhU2VydmljZVwiO1xuY29uc3QgVFJBQ0tfVjQgPSAxMDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoTWV0YWRhdGFGb3JUcmFja3ModHJhY2tVUklzOiBzdHJpbmdbXSk6IFByb21pc2U8TWFwPHN0cmluZywgYW55Pj4ge1xuICBjb25zdCBNZXRhZGF0YUNsaWVudCA9IFNwb3RpZnlXZWJwYWNrLmdldENsaWVudChNZXRhZGF0YVNlcnZpY2UpO1xuICBjb25zdCB1bmlxdWVVUklzID0gWy4uLm5ldyBTZXQodHJhY2tVUklzKV07XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBNZXRhZGF0YUNsaWVudC5mZXRjaCh7XG4gICAgZXh0ZW5zaW9uUXVlcnk6IFt7IGV4dGVuc2lvbktpbmQ6IFRSQUNLX1Y0LCBlbnRpdHlVcmk6IHVuaXF1ZVVSSXMgfV0sXG4gIH0pO1xuXG4gIGNvbnN0IHJlc3VsdE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBhbnk+KCk7XG5cbiAgaWYgKHJlc3BvbnNlPy5leHRlbnNpb24/LlswXT8uZW50aXR5RXh0ZW5zaW9uKSB7XG4gICAgZm9yIChjb25zdCBlbnRpdHkgb2YgcmVzcG9uc2UuZXh0ZW5zaW9uWzBdLmVudGl0eUV4dGVuc2lvbikge1xuICAgICAgY29uc3QgYnl0ZU9iamVjdCA9IGVudGl0eS5leHRlbnNpb25EYXRhPy52YWx1ZTtcbiAgICAgIGlmIChieXRlT2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IGRlY29kZWQgPSBkZWNvZGVQcm90b2J1ZihieXRlT2JqZWN0LCBcInNwb3RpZnkubWV0YWRhdGEuVHJhY2tcIik7XG4gICAgICAgIHJlc3VsdE1hcC5zZXQoZW50aXR5LmVudGl0eVVyaSwgZGVjb2RlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRNYXAuc2V0KGVudGl0eS5lbnRpdHlVcmksIG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRNYXA7XG59IiwgImltcG9ydCB7IGZldGNoTWV0YWRhdGFGb3JUcmFja3MgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2FwaS9mZXRjaE1ldGFkYXRhRm9yVHJhY2tzLnRzXCI7XG5cbmludGVyZmFjZSBQbGF5bGlzdCB7XG4gIG5hbWU6IHN0cmluZztcbiAgdXJpOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBEdXBsaWNhdGVDaGVjayB7XG4gIHBsYXlsaXN0VXJpOiBzdHJpbmc7XG4gIHBsYXlsaXN0TmFtZTogc3RyaW5nO1xuICB0cmFja1VyaTogc3RyaW5nO1xuICB0cmFja05hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoUGxheWxpc3RzKCk6IFByb21pc2U8UGxheWxpc3RbXT4ge1xuICBjb25zdCBMaWJyYXJ5QVBJID0gKFNwaWNldGlmeSBhcyBhbnkpLlBsYXRmb3JtPy5MaWJyYXJ5QVBJO1xuICBcbiAgaWYgKCFMaWJyYXJ5QVBJKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTGlicmFyeUFQSSBub3QgYXZhaWxhYmxlXCIpO1xuICB9XG4gIFxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IExpYnJhcnlBUEkuZ2V0Q29udGVudHMoe1xuICAgIG9mZnNldDogMCxcbiAgICBsaW1pdDogMTAwMDAwMDAsXG4gICAgZmxhdHRlblRyZWU6IHRydWUsXG4gIH0pO1xuICBcbiAgY29uc3QgcGxheWxpc3RzOiBQbGF5bGlzdFtdID0gW107XG4gIGNvbnN0IGl0ZW1zID0gcmVzcG9uc2U/Lml0ZW1zIHx8IFtdO1xuICBcbiAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgaWYgKGl0ZW0udHlwZSA9PT0gXCJwbGF5bGlzdFwiICYmIGl0ZW0uY2FuQWRkVG8pIHtcbiAgICAgIHBsYXlsaXN0cy5wdXNoKHtcbiAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICB1cmk6IGl0ZW0udXJpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gcGxheWxpc3RzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGxheWxpc3RUcmFja3MocGxheWxpc3RVcmk6IHN0cmluZyk6IFByb21pc2U8U2V0PHN0cmluZz4+IHtcbiAgY29uc3QgdHJhY2tVcmlzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIFxuICBjb25zdCBQbGF5bGlzdEFQSSA9IChTcGljZXRpZnkgYXMgYW55KS5QbGF0Zm9ybT8uUGxheWxpc3RBUEk7XG4gIFxuICBpZiAoIVBsYXlsaXN0QVBJKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxheWxpc3RBUEkgbm90IGF2YWlsYWJsZVwiKTtcbiAgfVxuICBcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBQbGF5bGlzdEFQSS5nZXRDb250ZW50cyhwbGF5bGlzdFVyaSwge1xuICAgIG9mZnNldDogMCxcbiAgICBsaW1pdDogLTEsXG4gIH0pO1xuICBcbiAgaWYgKHJlc3BvbnNlPy5pdGVtcykge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiByZXNwb25zZS5pdGVtcykge1xuICAgICAgaWYgKGl0ZW0/LnVyaSkge1xuICAgICAgICB0cmFja1VyaXMuYWRkKGl0ZW0udXJpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiB0cmFja1VyaXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFja05hbWUodXJpOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCB0cmFja0lkID0gdXJpLnNwbGl0KFwiOlwiKS5wb3AoKSB8fCBcIlwiO1xuICByZXR1cm4gYFRyYWNrICgke3RyYWNrSWQuc2xpY2UoMCwgOCl9Li4uKWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb25maXJtTW9kYWwoXG4gIGR1cGxpY2F0ZXM6IER1cGxpY2F0ZUNoZWNrW10sXG4gIHRyYWNrQ291bnQ6IG51bWJlcixcbiAgb25Db25maXJtOiAoKSA9PiB2b2lkLFxuICBvbkNhbmNlbDogKCkgPT4gdm9pZFxuKSB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWwuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtbW9kYWxcIjtcbiAgXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWNvbmZpcm0tY29udGVudFwiO1xuICBcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWNvbmZpcm0taGVhZGVyXCI7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiVHJhY2tzIGFscmVhZHkgaW4gcGxheWxpc3QocylcIjtcbiAgXG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsaXN0LmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWNvbmZpcm0tbGlzdFwiO1xuICBcbiAgY29uc3QgZHVwbGljYXRlVHJhY2tVcmlzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIGZvciAoY29uc3QgZHVwIG9mIGR1cGxpY2F0ZXMpIHtcbiAgICBkdXBsaWNhdGVUcmFja1VyaXMuYWRkKGR1cC50cmFja1VyaSk7XG4gIH1cbiAgY29uc3QgdW5pcXVlRHVwbGljYXRlQ291bnQgPSBkdXBsaWNhdGVUcmFja1VyaXMuc2l6ZTtcbiAgXG4gIGZvciAoY29uc3QgZHVwIG9mIGR1cGxpY2F0ZXMuc2xpY2UoMCwgMTApKSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbS5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1jb25maXJtLWl0ZW1cIjtcbiAgICBcbiAgICBjb25zdCB0cmFja05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0cmFja05hbWUuY2xhc3NOYW1lID0gXCJ0cmFjay1uYW1lXCI7XG4gICAgdHJhY2tOYW1lLnRleHRDb250ZW50ID0gZHVwLnRyYWNrTmFtZTtcbiAgICBcbiAgICBjb25zdCBwbGF5bGlzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBwbGF5bGlzdE5hbWUuY2xhc3NOYW1lID0gXCJwbGF5bGlzdC1uYW1lXCI7XG4gICAgcGxheWxpc3ROYW1lLnRleHRDb250ZW50ID0gYGluICR7ZHVwLnBsYXlsaXN0TmFtZX1gO1xuICAgIFxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQodHJhY2tOYW1lKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKHBsYXlsaXN0TmFtZSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgfVxuICBcbiAgaWYgKGR1cGxpY2F0ZXMubGVuZ3RoID4gMTApIHtcbiAgICBjb25zdCBtb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb3JlLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWNvbmZpcm0tbW9yZVwiO1xuICAgIG1vcmUudGV4dENvbnRlbnQgPSBgLi4uYW5kICR7ZHVwbGljYXRlcy5sZW5ndGggLSAxMH0gbW9yZWA7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChtb3JlKTtcbiAgfVxuICBcbiAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluZm8uY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtY29uZmlybS1pbmZvXCI7XG4gIFxuICBjb25zdCBwbGF5bGlzdENvdW50ID0gbmV3IFNldChkdXBsaWNhdGVzLm1hcChkID0+IGQucGxheWxpc3RVcmkpKS5zaXplO1xuICBcbiAgaWYgKHVuaXF1ZUR1cGxpY2F0ZUNvdW50ID09PSB0cmFja0NvdW50KSB7XG4gICAgaWYgKHBsYXlsaXN0Q291bnQgPT09IDEpIHtcbiAgICAgIGluZm8udGV4dENvbnRlbnQgPSBgVGhpcyB0cmFjayBpcyBhbHJlYWR5IGluICR7cGxheWxpc3RDb3VudH0gc2VsZWN0ZWQgcGxheWxpc3QuYDtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mby50ZXh0Q29udGVudCA9IGBBbGwgJHt1bmlxdWVEdXBsaWNhdGVDb3VudH0gdHJhY2socykgYXJlIGFscmVhZHkgaW4gJHtwbGF5bGlzdENvdW50fSBzZWxlY3RlZCBwbGF5bGlzdHMuYDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHBsYXlsaXN0Q291bnQgPT09IDEpIHtcbiAgICAgIGluZm8udGV4dENvbnRlbnQgPSBgJHt1bmlxdWVEdXBsaWNhdGVDb3VudH0gb2YgJHt0cmFja0NvdW50fSB0cmFjayhzKSBhcmUgYWxyZWFkeSBpbiAke3BsYXlsaXN0Q291bnR9IHNlbGVjdGVkIHBsYXlsaXN0LmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8udGV4dENvbnRlbnQgPSBgJHt1bmlxdWVEdXBsaWNhdGVDb3VudH0gb2YgJHt0cmFja0NvdW50fSB0cmFjayhzKSBhcmUgYWxyZWFkeSBpbiAke3BsYXlsaXN0Q291bnR9IHNlbGVjdGVkIHBsYXlsaXN0cy5gO1xuICAgIH1cbiAgfVxuICBcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbnMuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtY29uZmlybS1idXR0b25zXCI7XG4gIFxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdG4uY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtYnRuIGNhbmNlbFwiO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICBvbkNhbmNlbCgpO1xuICB9KTtcbiAgXG4gIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25maXJtQnRuLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWJ0biBjb25maXJtXCI7XG4gIGNvbmZpcm1CdG4udGV4dENvbnRlbnQgPSBcIkFkZCBBbnl3YXlcIjtcbiAgY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgIG9uQ29uZmlybSgpO1xuICB9KTtcbiAgXG4gIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgYnV0dG9ucy5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcbiAgXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChsaXN0KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChpbmZvKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChidXR0b25zKTtcbiAgXG4gIG1vZGFsLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICBcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG4gIFxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgIG9uQ2FuY2VsKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFRyYWNrc1RvUGxheWxpc3RzKFxuICBwbGF5bGlzdFVyaXM6IHN0cmluZ1tdLFxuICB0cmFja1VyaXM6IHN0cmluZ1tdXG4pOiBQcm9taXNlPHsgc3VjY2Vzczogc3RyaW5nW107IGZhaWxlZDogc3RyaW5nW10gfT4ge1xuICBjb25zdCBQbGF5bGlzdEFQSSA9IChTcGljZXRpZnkgYXMgYW55KS5QbGF0Zm9ybT8uUGxheWxpc3RBUEk7XG4gIFxuICBpZiAoIVBsYXlsaXN0QVBJKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gUGxheWxpc3RBUElcIik7XG4gIH1cbiAgXG4gIGNvbnN0IHN1Y2Nlc3M6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IGZhaWxlZDogc3RyaW5nW10gPSBbXTtcbiAgXG4gIGZvciAoY29uc3QgcGxheWxpc3RVcmkgb2YgcGxheWxpc3RVcmlzKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IFBsYXlsaXN0QVBJLmFkZChwbGF5bGlzdFVyaSwgdHJhY2tVcmlzLCBbXSk7XG4gICAgICBzdWNjZXNzLnB1c2gocGxheWxpc3RVcmkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGZhaWxlZC5wdXNoKHBsYXlsaXN0VXJpKTtcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiB7IHN1Y2Nlc3MsIGZhaWxlZCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9kYWwodHJhY2tVcmlzOiBzdHJpbmdbXSkge1xuICBsZXQgYWxsUGxheWxpc3RzOiBQbGF5bGlzdFtdID0gW107XG4gIGxldCBmaWx0ZXJlZFBsYXlsaXN0czogUGxheWxpc3RbXSA9IFtdO1xuICBjb25zdCBzZWxlY3RlZFNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbC5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1tb2RhbFwiO1xuICBcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtY29udGVudFwiO1xuICBcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWhlYWRlclwiO1xuICBcbiAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBcIkFkZCB0byBNdWx0aXBsZSBQbGF5bGlzdHNcIjtcbiAgXG4gIGNvbnN0IGhlYWRlclJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyUmlnaHQuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtaGVhZGVyLXJpZ2h0XCI7XG4gIFxuICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGdpdGh1YkxpbmsuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtZ2l0aHViXCI7XG4gIGdpdGh1YkxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL0ppbU1hcmxleTQyMC9zcGljZXRpZnktZXh0ZW5zaW9uXCI7XG4gIGdpdGh1YkxpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgZ2l0aHViTGluay5yZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIjtcbiAgZ2l0aHViTGluay5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiT3BlbiBHaXRIdWIgcmVwb3NpdG9yeVwiKTtcbiAgZ2l0aHViTGluay5pbm5lckhUTUwgPSBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xMiAwYy02LjYyNiAwLTEyIDUuMzczLTEyIDEyIDAgNS4zMDIgMy40MzggOS44IDguMjA3IDExLjM4Ny41OTkuMTExLjc5My0uMjYxLjc5My0uNTc3di0yLjIzNGMtMy4zMzguNzI2LTQuMDMzLTEuNDE2LTQuMDMzLTEuNDE2LS41NDYtMS4zODctMS4zMzMtMS43NTYtMS4zMzMtMS43NTYtMS4wODktLjc0NS4wODMtLjcyOS4wODMtLjcyOSAxLjIwNS4wODQgMS44MzkgMS4yMzcgMS44MzkgMS4yMzcgMS4wNyAxLjgzNCAyLjgwNyAxLjMwNCAzLjQ5Mi45OTcuMTA3LS43NzUuNDE4LTEuMzA1Ljc2Mi0xLjYwNC0yLjY2NS0uMzA1LTUuNDY3LTEuMzM0LTUuNDY3LTUuOTMxIDAtMS4zMTEuNDY5LTIuMzgxIDEuMjM2LTMuMjIxLS4xMjQtLjMwMy0uNTM1LTEuNTI0LjExNy0zLjE3NiAwIDAgMS4wMDgtLjMyMiAzLjMwMSAxLjIzLjk1Ny0uMjY2IDEuOTgzLS4zOTkgMy4wMDMtLjQwNCAxLjAyLjAwNSAyLjA0Ny4xMzggMy4wMDYuNDA0IDIuMjkxLTEuNTUyIDMuMjk3LTEuMjMgMy4yOTctMS4yMy42NTMgMS42NTMuMjQyIDIuODc0LjExOCAzLjE3Ni43Ny44NCAxLjIzNSAxLjkxMSAxLjIzNSAzLjIyMSAwIDQuNjA5LTIuODA3IDUuNjI0LTUuNDc5IDUuOTIxLjQzLjM3Mi44MjMgMS4xMDIuODIzIDIuMjIydjMuMjkzYzAgLjMxOS4xOTIuNjk0LjgwMS41NzYgNC43NjUtMS41ODkgOC4xOTktNi4wODYgOC4xOTktMTEuMzg2IDAtNi42MjctNS4zNzMtMTItMTItMTJ6XCIvPjwvc3ZnPmA7XG4gIFxuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNsb3NlQnRuLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWNsb3NlXCI7XG4gIGNsb3NlQnRuLmlubmVySFRNTCA9IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTE5IDYuNDFMMTcuNTkgNSAxMiAxMC41OSA2LjQxIDUgNSA2LjQxIDEwLjU5IDEyIDUgMTcuNTkgNi40MSAxOSAxMiAxMy40MSAxNy41OSAxOSAxOSAxNy41OSAxMy40MSAxMnpcIi8+PC9zdmc+YDtcbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IG1vZGFsLnJlbW92ZSgpKTtcbiAgXG4gIGhlYWRlclJpZ2h0LmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuICBoZWFkZXJSaWdodC5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gIFxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyUmlnaHQpO1xuICBcbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2VhcmNoQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LXNlYXJjaFwiO1xuICBcbiAgY29uc3Qgc2VhcmNoV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlYXJjaFdyYXBwZXIuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3Qtc2VhcmNoLXdyYXBwZXJcIjtcbiAgXG4gIGNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWFyY2hJY29uLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LXNlYXJjaC1pY29uXCI7XG4gIHNlYXJjaEljb24uaW5uZXJIVE1MID0gYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QTYuNDcxIDYuNDcxIDAgMDAxNiA5LjUgNi41IDYuNSAwIDEwOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHpcIi8+PC9zdmc+YDtcbiAgXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBzZWFyY2hJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIHNlYXJjaElucHV0LnBsYWNlaG9sZGVyID0gXCJTZWFyY2ggcGxheWxpc3RzLi4uXCI7XG4gIFxuICBzZWFyY2hXcmFwcGVyLmFwcGVuZENoaWxkKHNlYXJjaEljb24pO1xuICBzZWFyY2hXcmFwcGVyLmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcbiAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaFdyYXBwZXIpO1xuICBcbiAgY29uc3QgdHJhY2tDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRyYWNrQ291bnQuY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3QtdHJhY2stY291bnRcIjtcbiAgdHJhY2tDb3VudC50ZXh0Q29udGVudCA9IGAke3RyYWNrVXJpcy5sZW5ndGh9IHRyYWNrKHMpIHNlbGVjdGVkYDtcbiAgXG4gIGNvbnN0IHBsYXlsaXN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYXlsaXN0TGlzdC5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1saXN0XCI7XG4gIFxuICBjb25zdCBlbXB0eVN0YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZW1wdHlTdGF0ZS5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1lbXB0eVwiO1xuICBlbXB0eVN0YXRlLnRleHRDb250ZW50ID0gXCJMb2FkaW5nIHBsYXlsaXN0cy4uLlwiO1xuICBwbGF5bGlzdExpc3QuYXBwZW5kQ2hpbGQoZW1wdHlTdGF0ZSk7XG4gIFxuICBmdW5jdGlvbiByZW5kZXJQbGF5bGlzdHMocGxheWxpc3RzOiBQbGF5bGlzdFtdKSB7XG4gICAgcGxheWxpc3RMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgXG4gICAgaWYgKHBsYXlsaXN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGVtcHR5U3RhdGUudGV4dENvbnRlbnQgPSBzZWFyY2hJbnB1dC52YWx1ZSA/IFwiTm8gcGxheWxpc3RzIGZvdW5kXCIgOiBcIk5vIHBsYXlsaXN0cyBhdmFpbGFibGVcIjtcbiAgICAgIHBsYXlsaXN0TGlzdC5hcHBlbmRDaGlsZChlbXB0eVN0YXRlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZm9yIChjb25zdCBwbGF5bGlzdCBvZiBwbGF5bGlzdHMpIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICBpdGVtLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWl0ZW1cIiArIChzZWxlY3RlZFNldC5oYXMocGxheWxpc3QudXJpKSA/IFwiIHNlbGVjdGVkXCIgOiBcIlwiKTtcbiAgICAgIFxuICAgICAgY29uc3QgY2hlY2tib3hXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNoZWNrYm94V3JhcHBlci5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1jaGVja2JveC13cmFwcGVyXCI7XG4gICAgICBcbiAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgIGNoZWNrYm94LmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWNoZWNrYm94XCI7XG4gICAgICBjaGVja2JveC5jaGVja2VkID0gc2VsZWN0ZWRTZXQuaGFzKHBsYXlsaXN0LnVyaSk7XG4gICAgICBcbiAgICAgIGNvbnN0IGN1c3RvbUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGN1c3RvbUNoZWNrYm94LmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWNoZWNrYm94LWN1c3RvbVwiO1xuICAgICAgXG4gICAgICBjaGVja2JveFdyYXBwZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgY2hlY2tib3hXcmFwcGVyLmFwcGVuZENoaWxkKGN1c3RvbUNoZWNrYm94KTtcbiAgICAgIFxuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgc2VsZWN0ZWRTZXQuYWRkKHBsYXlsaXN0LnVyaSk7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZWN0ZWRTZXQuZGVsZXRlKHBsYXlsaXN0LnVyaSk7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBuYW1lLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LW5hbWVcIjtcbiAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBwbGF5bGlzdC5uYW1lO1xuICAgICAgXG4gICAgICBpdGVtLmFwcGVuZENoaWxkKGNoZWNrYm94V3JhcHBlcik7XG4gICAgICBpdGVtLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgcGxheWxpc3RMaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH1cbiAgfVxuICBcbiAgZnVuY3Rpb24gZmlsdGVyUGxheWxpc3RzKCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoSW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICBmaWx0ZXJlZFBsYXlsaXN0cyA9IGFsbFBsYXlsaXN0cy5maWx0ZXIocCA9PiBwLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeSkpO1xuICAgIHJlbmRlclBsYXlsaXN0cyhmaWx0ZXJlZFBsYXlsaXN0cyk7XG4gICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gdXBkYXRlQnV0dG9uU3RhdGUoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRDb3VudCA9IHNlbGVjdGVkU2V0LnNpemU7XG4gICAgdHJhY2tDb3VudC50ZXh0Q29udGVudCA9IGAke3RyYWNrVXJpcy5sZW5ndGh9IHRyYWNrKHMpIHNlbGVjdGVkIFx1MjAyMiAke3NlbGVjdGVkQ291bnR9IHBsYXlsaXN0KHMpYDtcbiAgICBjb25maXJtQnRuLmRpc2FibGVkID0gc2VsZWN0ZWRDb3VudCA9PT0gMDtcbiAgICBcbiAgICBjb25zdCBzZWxlY3RlZFdpdGhpbkZpbHRlcmVkID0gZmlsdGVyZWRQbGF5bGlzdHMuZmlsdGVyKHAgPT4gc2VsZWN0ZWRTZXQuaGFzKHAudXJpKSkubGVuZ3RoO1xuICAgIFxuICAgIGlmIChzZWxlY3RlZFdpdGhpbkZpbHRlcmVkID09PSAwKSB7XG4gICAgICBzZWxlY3RBbGxCdG4udGV4dENvbnRlbnQgPSBcIlNlbGVjdCBBbGxcIjtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkV2l0aGluRmlsdGVyZWQgPT09IGZpbHRlcmVkUGxheWxpc3RzLmxlbmd0aCkge1xuICAgICAgc2VsZWN0QWxsQnRuLnRleHRDb250ZW50ID0gXCJEZXNlbGVjdCBBbGxcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0QWxsQnRuLnRleHRDb250ZW50ID0gXCJTZWxlY3QgQWxsXCI7XG4gICAgfVxuICB9XG4gIFxuICBhc3luYyBmdW5jdGlvbiBsb2FkUGxheWxpc3RzKCkge1xuICAgIHRyeSB7XG4gICAgICBhbGxQbGF5bGlzdHMgPSBhd2FpdCBmZXRjaFBsYXlsaXN0cygpO1xuICAgICAgZmlsdGVyZWRQbGF5bGlzdHMgPSBbLi4uYWxsUGxheWxpc3RzXTtcbiAgICAgIHJlbmRlclBsYXlsaXN0cyhmaWx0ZXJlZFBsYXlsaXN0cyk7XG4gICAgICB1cGRhdGVCdXR0b25TdGF0ZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGVtcHR5U3RhdGUudGV4dENvbnRlbnQgPSBcIkZhaWxlZCB0byBsb2FkIHBsYXlsaXN0c1wiO1xuICAgICAgcGxheWxpc3RMaXN0LmFwcGVuZENoaWxkKGVtcHR5U3RhdGUpO1xuICAgICAgU3BpY2V0aWZ5LnNob3dOb3RpZmljYXRpb24oXCJGYWlsZWQgdG8gbG9hZCBwbGF5bGlzdHNcIiwgdHJ1ZSk7XG4gICAgfVxuICB9XG4gIFxuICBsb2FkUGxheWxpc3RzKCk7XG4gIFxuICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZmlsdGVyUGxheWxpc3RzKTtcbiAgXG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbkNvbnRhaW5lci5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1idXR0b25zXCI7XG4gIGJ1dHRvbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIGJ1dHRvbkNvbnRhaW5lci5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwic3BhY2UtYmV0d2VlblwiO1xuICBidXR0b25Db250YWluZXIuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XG4gIFxuICBjb25zdCBzZWxlY3RBbGxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzZWxlY3RBbGxCdG4uY2xhc3NOYW1lID0gXCJhZGQtdG8tcGxheWxpc3Qtc2VsZWN0LWFsbFwiO1xuICBzZWxlY3RBbGxCdG4udGV4dENvbnRlbnQgPSBcIlNlbGVjdCBBbGxcIjtcbiAgc2VsZWN0QWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRXaXRoaW5GaWx0ZXJlZCA9IGZpbHRlcmVkUGxheWxpc3RzLmZpbHRlcihwID0+IHNlbGVjdGVkU2V0LmhhcyhwLnVyaSkpLmxlbmd0aDtcbiAgICBjb25zdCBhbGxGaWx0ZXJlZFNlbGVjdGVkID0gc2VsZWN0ZWRXaXRoaW5GaWx0ZXJlZCA9PT0gZmlsdGVyZWRQbGF5bGlzdHMubGVuZ3RoO1xuICAgIFxuICAgIGlmIChhbGxGaWx0ZXJlZFNlbGVjdGVkKSB7XG4gICAgICBmaWx0ZXJlZFBsYXlsaXN0cy5mb3JFYWNoKHAgPT4gc2VsZWN0ZWRTZXQuZGVsZXRlKHAudXJpKSk7XG4gICAgICBwbGF5bGlzdExpc3QucXVlcnlTZWxlY3RvckFsbChcIi5hZGQtdG8tcGxheWxpc3QtaXRlbVwiKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvLXBsYXlsaXN0LWNoZWNrYm94XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGlmIChjaGVja2JveCkgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlcmVkUGxheWxpc3RzLmZvckVhY2gocCA9PiBzZWxlY3RlZFNldC5hZGQocC51cmkpKTtcbiAgICAgIHBsYXlsaXN0TGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFkZC10by1wbGF5bGlzdC1pdGVtXCIpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5hZGQtdG8tcGxheWxpc3QtY2hlY2tib3hcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgaWYgKGNoZWNrYm94KSBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB1cGRhdGVCdXR0b25TdGF0ZSgpO1xuICB9KTtcbiAgXG4gIGNvbnN0IGJ1dHRvbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uR3JvdXAuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBidXR0b25Hcm91cC5zdHlsZS5nYXAgPSBcIjEycHhcIjtcbiAgYnV0dG9uR3JvdXAuc3R5bGUubWFyZ2luTGVmdCA9IFwiYXV0b1wiO1xuICBcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2FuY2VsQnRuLmNsYXNzTmFtZSA9IFwiYWRkLXRvLXBsYXlsaXN0LWJ0biBjYW5jZWxcIjtcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBtb2RhbC5yZW1vdmUoKSk7XG4gIFxuICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uZmlybUJ0bi5jbGFzc05hbWUgPSBcImFkZC10by1wbGF5bGlzdC1idG4gY29uZmlybVwiO1xuICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgY29uZmlybUJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gIFxuICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcGxheWxpc3RVcmlzID0gQXJyYXkuZnJvbShzZWxlY3RlZFNldCk7XG4gICAgY29uZmlybUJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9IFwiQ2hlY2tpbmcuLi5cIjtcbiAgICBcbiAgICB0cnkge1xuICAgICAgY29uc3QgZHVwbGljYXRlczogRHVwbGljYXRlQ2hlY2tbXSA9IFtdO1xuICAgICAgXG4gICAgICBmb3IgKGNvbnN0IHBsYXlsaXN0VXJpIG9mIHBsYXlsaXN0VXJpcykge1xuICAgICAgICBjb25zdCBwbGF5bGlzdCA9IGFsbFBsYXlsaXN0cy5maW5kKHAgPT4gcC51cmkgPT09IHBsYXlsaXN0VXJpKTtcbiAgICAgICAgY29uc3QgcGxheWxpc3ROYW1lID0gcGxheWxpc3Q/Lm5hbWUgfHwgXCJVbmtub3duXCI7XG4gICAgICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHBsYXlsaXN0VHJhY2tzID0gYXdhaXQgZ2V0UGxheWxpc3RUcmFja3MocGxheWxpc3RVcmkpO1xuICAgICAgICAgIFxuICAgICAgICAgIGNvbnN0IGR1cGxpY2F0ZVVyaXMgPSB0cmFja1VyaXMuZmlsdGVyKHQgPT4gcGxheWxpc3RUcmFja3MuaGFzKHQpKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoZHVwbGljYXRlVXJpcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gXCJMb2FkaW5nLi4uXCI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRyYWNrTWV0YWRhdGEgPSBhd2FpdCBmZXRjaE1ldGFkYXRhRm9yVHJhY2tzKGR1cGxpY2F0ZVVyaXMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRyYWNrVXJpIG9mIGR1cGxpY2F0ZVVyaXMpIHtcbiAgICAgICAgICAgICAgY29uc3QgbWV0YSA9IHRyYWNrTWV0YWRhdGEuZ2V0KHRyYWNrVXJpKTtcbiAgICAgICAgICAgICAgY29uc3QgdHJhY2tOYW1lID0gbWV0YT8ubmFtZSB8fCBtZXRhPy50aXRsZSB8fCBtZXRhPy50cmFjaz8ubmFtZSB8fCBnZXRUcmFja05hbWUodHJhY2tVcmkpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgZHVwbGljYXRlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBwbGF5bGlzdFVyaSxcbiAgICAgICAgICAgICAgICBwbGF5bGlzdE5hbWUsXG4gICAgICAgICAgICAgICAgdHJhY2tVcmksXG4gICAgICAgICAgICAgICAgdHJhY2tOYW1lLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihgRmFpbGVkIHRvIGNoZWNrICR7cGxheWxpc3ROYW1lfWAsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChkdXBsaWNhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9IFwiQWRkaW5nLi4uXCI7XG4gICAgICAgIFxuICAgICAgICBjcmVhdGVDb25maXJtTW9kYWwoXG4gICAgICAgICAgZHVwbGljYXRlcyxcbiAgICAgICAgICB0cmFja1VyaXMubGVuZ3RoLFxuICAgICAgICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFkZFRyYWNrc1RvUGxheWxpc3RzKHBsYXlsaXN0VXJpcywgdHJhY2tVcmlzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgU3BpY2V0aWZ5LnNob3dOb3RpZmljYXRpb24oYEFkZGVkICR7dHJhY2tVcmlzLmxlbmd0aH0gdHJhY2socykgdG8gJHtyZXN1bHQuc3VjY2Vzcy5sZW5ndGh9IHBsYXlsaXN0KHMpYCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihcIk5vIHRyYWNrcyB3ZXJlIGFkZGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBjb25maXJtQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhZGRUcmFja3NUb1BsYXlsaXN0cyhwbGF5bGlzdFVyaXMsIHRyYWNrVXJpcyk7XG4gICAgICAgIFxuICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgIFNwaWNldGlmeS5zaG93Tm90aWZpY2F0aW9uKGBBZGRlZCAke3RyYWNrVXJpcy5sZW5ndGh9IHRyYWNrKHMpIHRvICR7cmVzdWx0LnN1Y2Nlc3MubGVuZ3RofSBwbGF5bGlzdChzKWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFNwaWNldGlmeS5zaG93Tm90aWZpY2F0aW9uKFwiRmFpbGVkIHRvIGFkZCB0cmFja3NcIiwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgU3BpY2V0aWZ5LnNob3dOb3RpZmljYXRpb24oXCJGYWlsZWQgdG8gYWRkIHRyYWNrc1wiLCB0cnVlKTtcbiAgICAgIGNvbmZpcm1CdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIGNvbmZpcm1CdG4udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICAgIH1cbiAgfSk7XG4gIFxuICBidXR0b25Hcm91cC5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICBidXR0b25Hcm91cC5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcbiAgXG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RBbGxCdG4pO1xuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uR3JvdXApO1xuICBcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHNlYXJjaENvbnRhaW5lcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodHJhY2tDb3VudCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGxheWxpc3RMaXN0KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICBcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gIFxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgXG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gbW9kYWwpIHtcbiAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgIH1cbiAgfSk7XG4gIFxuICBzZWFyY2hJbnB1dC5mb2N1cygpO1xufSIsICJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5jc3NcIiB3aXRoIHsgdHlwZTogXCJjc3NcIiB9O1xuaW1wb3J0IHsgY3JlYXRlTW9kYWwgfSBmcm9tIFwiLi9tb2RhbC50c3hcIjtcblxuZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc3R5bGVzKTtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlTWVudUNsaWNrKHVyaXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IHRyYWNrVXJpcyA9IHVyaXMuZmlsdGVyKCh1cmk6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHVyaU9iaiA9IFNwaWNldGlmeS5VUkkuZnJvbSh1cmkpO1xuICAgIHJldHVybiB1cmlPYmogJiYgKHVyaU9iaiBhcyBhbnkpLnR5cGUgPT09IFwidHJhY2tcIjtcbiAgfSk7XG4gIFxuICBpZiAodHJhY2tVcmlzLmxlbmd0aCA9PT0gMCkge1xuICAgIFNwaWNldGlmeS5zaG93Tm90aWZpY2F0aW9uKFwiTm8gdHJhY2tzIHNlbGVjdGVkXCIsIHRydWUpO1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgY3JlYXRlTW9kYWwodHJhY2tVcmlzKTtcbn1cblxuY29uc3QgYWRkVG9NdWx0aXBsZVBsYXlsaXN0c01lbnVJdGVtID0gbmV3IFNwaWNldGlmeS5Db250ZXh0TWVudS5JdGVtKFxuICBcIkFkZCB0byBNdWx0aXBsZSBQbGF5bGlzdHNcIixcbiAgaGFuZGxlTWVudUNsaWNrLFxuICAodXJpczogc3RyaW5nW10pID0+IHtcbiAgICBjb25zdCBoYXNUcmFjayA9IHVyaXMuc29tZSgodXJpOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHVyaU9iaiA9IFNwaWNldGlmeS5VUkkuZnJvbSh1cmkpO1xuICAgICAgcmV0dXJuIHVyaU9iaiAmJiAodXJpT2JqIGFzIGFueSkudHlwZSA9PT0gXCJ0cmFja1wiO1xuICAgIH0pO1xuICAgIHJldHVybiBoYXNUcmFjaztcbiAgfSxcbiAgXCJwbHVzLWFsdFwiIGFzIFNwaWNldGlmeS5JY29uXG4pO1xuXG5hZGRUb011bHRpcGxlUGxheWxpc3RzTWVudUl0ZW0ucmVnaXN0ZXIoKTsiXSwKICAibWFwcGluZ3MiOiAiOzs7QUFDVSxJQUFNLFFBQVEsSUFBSSxjQUFjO0FBQ2hDLE1BQU0sWUFBWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQW1WMUI7QUFDUSxJQUFPLGlCQUFROzs7QUN0VWxCLElBQU0saUJBQWlDO0FBQUEsRUFDNUMsMEJBQTBCO0FBQUEsSUFDeEIsUUFBUTtBQUFBLE1BQ04sR0FBRyxFQUFFLE1BQU0sT0FBTyxNQUFNLFFBQVE7QUFBQSxNQUNoQyxHQUFHLEVBQUUsTUFBTSxRQUFRLE1BQU0sU0FBUztBQUFBLE1BQ2xDLEdBQUcsRUFB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
