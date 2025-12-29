import {useEffect, useState} from "react";
import {getStargazers} from "~/lib/api/github/stargazers";


export default function useStargazers({...request}: GetStargazersRequest): GetStargazersResponse {
    const [response, setResponse] = useState<GetStargazersResponse>({
        stargazerCount: undefined,
    });
    useEffect(() => {
        getStargazers(request).then(res => setResponse(res));
    }, []);
    return response;
}