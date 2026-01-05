
type GetStargazersRequest = {
    user: string;
    repo: string;
}

type GetStargazersResponse = {
    stargazerCount: number | undefined;
}
