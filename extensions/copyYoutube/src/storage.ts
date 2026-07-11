const API_KEY_STORAGE = "copyYoutube.apiKey";
const PREFER_OFFICIAL_STORAGE = "copyYoutube.preferOfficial";

export function getApiKey(): string | null {
  return Spicetify.LocalStorage.get(API_KEY_STORAGE);
}

export function setApiKey(key: string): void {
  Spicetify.LocalStorage.set(API_KEY_STORAGE, key);
}

export function getPreferOfficial(): boolean {
  return Spicetify.LocalStorage.get(PREFER_OFFICIAL_STORAGE) === "true";
}

export function setPreferOfficial(value: boolean): void {
  Spicetify.LocalStorage.set(PREFER_OFFICIAL_STORAGE, String(value));
}
