import { useQuery } from '@tanstack/react-query'
import { getTopRatedMovies } from '../services/TMDBAPI'


const useTopRated = (queryKey:string,page:number) => {
    return useQuery([`${queryKey}`],()=>getTopRatedMovies(page),
            {
                staleTime:1000*60*6
            }
    )   
}

export default useTopRated