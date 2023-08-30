import { useQuery } from "@tanstack/react-query"
import * as TMBD from '../services/TMDBAPI'
import { useParams} from "react-router-dom"
import MovieOverview from "../components/MovieOverview"
import ActorCarousel from "../components/Carousels/ActorCarousel"
import MovieCarousel from "../components/Carousels/MovieCarousel"
import MovieImgCarousel from "../components/Carousels/MovieImgCarousel"
import React from "react"
import LoadingDots from "../components/Spinners/LoadingDots"


const MoviePage = () => {

  const { id } = useParams()
  const movieId = Number(id)
  const [newMovie, setNewMovie] = React.useState<number>(movieId)
  
  const {
    data: movie,
    isFetching: isLoadingMovie,
    isError: errorMovie,
    refetch,
  } = useQuery(['movie'],()=>TMBD.getMovie(newMovie))

  const handleMovieSubmit = () => {
    console.log("handleMovieSubmit", "you Submited")
    setNewMovie((Number(useParams())))
    refetch()
  }

  return (
      <>
      {errorMovie && <div>Something Went Wrong</div>}
      {isLoadingMovie ? <LoadingDots /> :
      <>
      <MovieOverview
      data={movie}
      loading={isLoadingMovie}
      />
        
      <ActorCarousel
      data={movie}
      loading={isLoadingMovie}
      error={errorMovie}
      />

      <MovieCarousel
      data={movie?.similar}
      title={"Similar Movies"}
      navTo={"movie"}
      loading={isLoadingMovie}
      error={errorMovie}
      submit={handleMovieSubmit}
      />
      <MovieImgCarousel
      data={movie}
      title="Images"
      loading={isLoadingMovie}
      error={errorMovie}
      />

      <MovieImgCarousel
      data2={movie} 
      title="Videos"
      loading={isLoadingMovie}
      error={errorMovie}
      />

      </>
      }
      </>  
  )
}


export default MoviePage