async function getStargazers({user, repo, ...request}: GetStargazersRequest): Promise<GetStargazersResponse> {
    try {
        const query = encodeURIComponent(`${repo} in:name user:${user}`);
        const response = await fetch("https://api.github.com/search/repositories?q=" + query, {
            method: "GET",
            headers: {
                "X-GitHub-Api-Version": "2022-11-28",
            },
        })
        const res = await response.json()
        return {
            stargazerCount: res.items[0].stargazers_count
        }
    }catch (e) {
        console.error(e);
        return {
            stargazerCount: 0,
        }
    }
}

export {getStargazers}