import type { YouTubeSearchResult } from "./types.ts";

export async function searchYouTube(query: string, apiKey: string): Promise<YouTubeSearchResult | null> {
  const url = new URL("https://www.googleapis.com/youtube/v3/search");
  url.searchParams.set("part", "snippet");
  url.searchParams.set("type", "video");
  url.searchParams.set("maxResults", "1");
  url.searchParams.set("q", query);
  url.searchParams.set("key", apiKey);

  let response: Response;
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
      if (
        e instanceof Error &&
        (e.message === "QUOTA_EXCEEDED" || e.message === "INVALID_KEY")
      ) {
        throw e;
      }
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

  const videoId: string | undefined = data.items[0]?.id?.videoId;
  if (!videoId) {
    return null;
  }

  return { videoId };
}
