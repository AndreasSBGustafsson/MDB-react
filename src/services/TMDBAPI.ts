import axios from "axios"
import { PopularMovies } from "../types/PopularMovies.type"


const BASE_URL = import .meta.env.VITE_TMDB_BASE_URL
const FAKE_DELAY = 1000
const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const flag = import.meta.env.VITE_FLAG


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
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
    return get<PopularMovies>(`/movie/popular`)
}

export const getOnTheaterMovie = () => {
    return get<PopularMovies>(`/movie/now_playing?language=sv-SV&region=SE`)
}

export const getTopRatedMovies = () => {
    return get<PopularMovies>(`/movie/top_rated`)
}