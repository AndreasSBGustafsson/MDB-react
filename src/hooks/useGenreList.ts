import { useQuery } from "@tanstack/react-query"
import { getGenreList } from "../services/TMDBAPI"

const useGenreList = () => {
    return useQuery(["genreList"], () => getGenreList()
    )
}

export default useGenreList
