import axios from "axios"
import { MoviesArray } from "../types/MoviesArray.type"
import { MovieInfo } from "../types/MovieInfo.type"
import { ActorInfo } from "../types/ActorInfo.types"
import { GenreList} from "../types/Genre.types"

const FAKE_DELAY = 1000
export const API_KEY = import.meta.env.VITE_APP_TMDB_API_KEY

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    timeout: 1000,
    method: "GET",
    headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
    },
    })

const get = async <T>(endpoint: string) => {
    
    const response = await instance.get<T>(endpoint)
    !!FAKE_DELAY && await new Promise(resolve => setTimeout(resolve, FAKE_DELAY))
    return response.data
}

export const getPopularMovies =(page=1) => {
    return get<MoviesArray>(`/movie/popular?&page=${page}&include_adult=false!`)
}

export const getOnTheaterMovie = (page=1) => {
    return get<MoviesArray>(`/movie/now_playing?&region=SE&page=${page}&include_adult=false!`)
}

export const getTopRatedMovies = (page=1) => {
    return get<MoviesArray>(`/movie/top_rated?&page=${page}&include_adult=false!`)
}

export const getMovie = (id: number) => {
    return get<MovieInfo>(`/movie/${id}?append_to_response=credits,similar,images,videos&include_adult=false!`)
}

export const getActor = (id: number) => {
    return get<ActorInfo>(`/person/${id}?append_to_response=credits,images&include_adult=false!`)
}

export const getGenreList = () => {
    return get<GenreList>(`/genre/movie/list?&include_adult=false!`)
}

export const getGenres = (data:number[], page:number) => {
    return get<MoviesArray>(`/discover/movie?&region=SE&with_genres=${data.map((genre) => genre).join(",")}&desc_by=popularity&page=${page}&include_adult=false!`)
}
    

