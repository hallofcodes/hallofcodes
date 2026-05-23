import * as cheerio from "cheerio";
import { getMembers } from "../github/members";

let cachedTrackedMembers: WakaTimeUser[] | null = null;
let cacheExpiresAt = 0;

const CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6 hours

export type WakaTimeUser = {
  name: string;
  username: string;
  codingTime: string;
  languages: string[];
};

async function fetchLeaderboardPage(page: number): Promise<WakaTimeUser[]> {
  const res = await fetch(`https://wakatime.com/leaders?page=${page}`, {
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch WakaTime leaderboard page ${page}`);
  }

  return parseLeaderboard(await res.text());
}

function parseLeaderboard(html: string): WakaTimeUser[] {
  const $ = cheerio.load(html);

  const users: WakaTimeUser[] = [];

  $(".leaders tbody tr").each((_, el) => {
    const anchor = $(el).find("a.leader-coder");

    const name = anchor.text().trim();

    const href = anchor.attr("href") ?? "";

    /**
     * /@Josiah_Jd?rank=100&page=1
     */
    const username = href.match(/\/@([^?]+)/)?.[1] ?? "";

    const codingTime = $(el).find("td.tcol").text().trim();

    const languages = $(el)
      .find("td.langcol a")
      .map((_, lang) => $(lang).text().trim())
      .get();

    // console.log({ name, username, codingTime, languages });

    users.push({
      name,
      username,
      codingTime,
      languages,
    });
  });

  return users;
}

export async function fetchTrackedMembers() {
  const now = Date.now();

  // return cached result if still valid
  if (cachedTrackedMembers && now < cacheExpiresAt) {
    return cachedTrackedMembers;
  }

  const members = await getMembers();
  // console.log(`Fetched ${members.length} members from GitHub`);
  // console.log("Members:", members.map((m) => m.login).join(", "));

  const memberSet = new Set(members.map((m) => m.login.toLowerCase()));

  const found = new Map<string, WakaTimeUser>();

  for (let page = 1; page <= 15; page++) {
    const users = await fetchLeaderboardPage(page);

    for (const user of users) {
      const username = user.username.toLowerCase();

      if (memberSet.has(username)) {
        // console.log(`Found tracked member: ${username}`);
        found.set(username, user);
      }
    }

    // stop early if we found top 3 members
    if (found.size == 3) {
      break;
    }
  }

  const result = Array.from(found.values());

  // update cache
  cachedTrackedMembers = result;
  cacheExpiresAt = now + CACHE_TTL_MS;

  return result;
}
