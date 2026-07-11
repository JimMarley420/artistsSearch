export interface TrackInfo {
  name: string;
  artists: string[];
}

export interface YouTubeSearchResult {
  videoId: string;
}

export interface CacheEntry {
  videoId: string;
  timestamp: number;
}
