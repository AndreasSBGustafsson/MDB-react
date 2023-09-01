import { useQuery } from "@tanstack/react-query"
import { getActor } from "../services/TMDBAPI"


const useActor = (id:number) => {
    return useQuery(['actor',id],()=>getActor(id),
            {
                staleTime:1000*60*6
            }
    )
}

export default useActor