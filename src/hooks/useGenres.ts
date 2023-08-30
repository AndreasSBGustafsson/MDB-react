import { useQuery } from "@tanstack/react-query";
import { getGenres } from "../services/TMDBAPI";

const useGenres = (genreList:number[], page:number) => {

return useQuery(['genre'],()=> getGenres(genreList, page))
}

export default useGenres