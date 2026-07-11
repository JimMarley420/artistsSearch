const CLEAN_PATTERNS: RegExp[] = [
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
  /\s*- Official Music Video/gi,
];

export function cleanQuery(query: string): string {
  let cleaned = query;
  for (const pattern of CLEAN_PATTERNS) {
    cleaned = cleaned.replace(pattern, "");
  }
  return cleaned.trim().replace(/\s+/g, " ");
}

export function buildSearchQuery(title: string, artists: string[], preferOfficial: boolean): string {
  const artistsStr = artists.join(" ");
  let query = `${title} ${artistsStr}`.trim();
  if (preferOfficial) {
    query = `${query} Official`;
  }
  return cleanQuery(query);
}
