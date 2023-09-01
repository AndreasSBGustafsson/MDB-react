import { useQuery } from '@tanstack/react-query'
import { getOnTheaterMovie } from '../services/TMDBAPI'


const useOnTheater = (queryKey:string, page:number) => {
    return useQuery([`${queryKey}`],()=>getOnTheaterMovie(page),
            {
                staleTime:1000*60*6
            }
    )
}

export default useOnTheater