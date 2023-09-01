import { useQuery } from '@tanstack/react-query'
import { getPopularMovies } from '../services/TMDBAPI'


const usePopularMovies = (queryKey:string,page:number) => {
    return useQuery([`${queryKey}`],()=>getPopularMovies(page),
            {
                staleTime:1000*60*6
            }
    )
}

export default usePopularMovies