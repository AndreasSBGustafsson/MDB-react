import { useQuery } from "@tanstack/react-query"
import { getGenreList } from "../services/TMDBAPI"


const useGenreList = () => {
    return useQuery(["genreList"], () => getGenreList(),
            {
                staleTime:1000*60*6
            }
    )
}

export default useGenreList
