import { useQuery } from "@tanstack/react-query"
import { getGenreList } from "../services/TMDBAPI"



const useGenreList = (keepPreviousData:true) => {
    return useQuery(["genreList",], () => getGenreList(), {
        keepPreviousData,
       
    })
}

export default useGenreList
