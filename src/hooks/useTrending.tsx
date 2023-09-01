import { useQuery } from '@tanstack/react-query'
import { getTrending } from '../services/TMDBAPI'



const useTrending = (option:string) => {

    return useQuery(['trending'],()=>getTrending(option),
        {
            staleTime:1000*60*6
        }
    )
}


export default useTrending