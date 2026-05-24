export type Member = {
  login: string;
  avatar: string;
};

export async function getMembers(): Promise<Member[]> {
  const org = "hallofcodes";
  const perPage = 100;

  let page = 1;
  let allMembers: Member[] = [];

  while (true) {
    const res = await fetch(
      `https://api.github.com/orgs/${org}/public_members?per_page=${perPage}&page=${page}`,
      {
        next: { revalidate: 10800 }, // 3 hours
      },
    );

    if (!res.ok) {
      throw new Error(`GitHub API error: ${res.status}`);
    }

    const data = await res.json();

    // stop when no more results
    if (data.length === 0) break;

    const mapped = data.map((user: any) => ({
      login: user.login,
      avatar: user.avatar_url,
    }));

    allMembers = [...allMembers, ...mapped];
    page++;
  }

  return allMembers;
}
