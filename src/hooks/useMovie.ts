import { useQuery } from "@tanstack/react-query"
import { getMovie } from "../services/TMDBAPI"


const useMovie = (id:number) => {
    return useQuery(['movie',id],()=>getMovie(id),
            {
                staleTime:1000*60*6
            }
    )
}

export default useMovie