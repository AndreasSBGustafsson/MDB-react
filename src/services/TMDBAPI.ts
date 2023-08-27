import axios from "axios"
import { MoviesArray } from "../types/MoviesArray.type"
import { MovieInfo } from "../types/MovieInfo.type"

const FAKE_DELAY = 1000

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    timeout: 1000,
    method: "GET",
    headers: {
        "Accept": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWQwNDRkMzFkZDA0MWNjNGMyNzI3NDNmMjVjMWUxOSIsInN1YiI6IjY0ZTRkZDIyYzYxM2NlMDEyY2MzNmQzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q1L89gR_u_NLShmDNjOFxBFgKk2DFoziVo4TJ6BTKek"
    

    },
    })

const get = async <T>(endpoint: string) => {
    const response = await instance.get<T>(endpoint)
    !!FAKE_DELAY && await new Promise(resolve => setTimeout(resolve, FAKE_DELAY))
    return response.data
}

export const getPopularMovies =() => {
    return get<MoviesArray>(`/movie/popular`)
}

export const getOnTheaterMovie = () => {
    return get<MoviesArray>(`/movie/now_playing?language=sv-SV&region=SE`)
}

export const getTopRatedMovies = () => {
    return get<MoviesArray>(`/movie/top_rated`)
}



export const getMovie = (id: number) => {
    return get<MovieInfo>(`/movie/${id}?append_to_response=credits`)
}
