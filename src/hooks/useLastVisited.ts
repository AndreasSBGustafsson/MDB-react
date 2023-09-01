import { useQuery } from "@tanstack/react-query"
import { getLastvisited } from "../services/TMDBAPI"


const useLastVisited = (ids:number[]) => {
    return useQuery(["lastVisited"], () => getLastvisited(ids),
            {
                staleTime:1000*60*6
            }
    )
}

export default useLastVisited