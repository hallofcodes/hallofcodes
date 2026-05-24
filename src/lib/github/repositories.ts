export type Repo = {
  name: string;
  description: string | null;
  language: string | null;
  url: string;
  stars: number;
  forks: number;
  watchers: number;
  archived: boolean;
  default_branch: string;
  created_at: string;
  pushed_at: string;
};

export async function getRepositories(): Promise<Repo[]> {
  const org = "hallofcodes";
  const perPage = 100;

  let page = 1;
  let allRepos: Repo[] = [];

  while (true) {
    const res = await fetch(
      `https://api.github.com/orgs/${org}/repos?per_page=${perPage}&page=${page}`,
      {
        next: { revalidate: 10800 }, // 3 hours
      },
    );

    if (!res.ok) {
      throw new Error(`GitHub API error: ${res.status}`);
    }

    const data = await res.json();

    if (data.length === 0) break;

    const filtered = data
      .filter((repo: any) => !repo.fork && !repo.private) // only original public repos
      .map((repo: any) => ({
        name: repo.name,
        description: repo.description,
        language: repo.language,
        url: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        watchers: repo.watchers_count,
        archived: repo.archived,
        default_branch: repo.default_branch,
        created_at: repo.created_at,
        pushed_at: repo.pushed_at,
      }))
      .sort(
        (a: Repo, b: Repo) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      );

    allRepos = [...allRepos, ...filtered];
    page++;
  }

  return allRepos;
}
