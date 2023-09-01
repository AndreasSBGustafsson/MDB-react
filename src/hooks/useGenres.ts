import { useQuery } from "@tanstack/react-query";
import { getGenres } from "../services/TMDBAPI";


const useGenres = (genreList:number[], page:number) => {
    return useQuery(['genre'],()=> getGenres(genreList, page),
            {
                staleTime:1000*60*6
            }
    )
}

export default useGenres