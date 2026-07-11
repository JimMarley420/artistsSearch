import type { CacheEntry } from "./types.ts";

const CACHE_DURATION = 5 * 60 * 1000;

const cache = new Map<string, CacheEntry>();

export function getCachedVideoId(key: string): string | null {
  const entry = cache.get(key);
  if (!entry) return null;

  if (Date.now() - entry.timestamp > CACHE_DURATION) {
    cache.delete(key);
    return null;
  }

  return entry.videoId;
}

export function setCachedVideoId(key: string, videoId: string): void {
  cache.set(key, { videoId, timestamp: Date.now() });
}

export function buildCacheKey(title: string, artists: string[], preferOfficial: boolean): string {
  return `${title}|${artists.join("|")}|${preferOfficial ? "1" : "0"}`;
}
