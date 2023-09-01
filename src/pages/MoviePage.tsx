import { useParams} from "react-router-dom"
import MovieOverview from "../components/MovieOverview"
import ActorCarousel from "../components/carousels/ActorCarousel"
import MovieCarousel from "../components/carousels/MovieCarousel"
import MovieImgCarousel from "../components/carousels/MovieImgCarousel"
import React from "react"
import LoadingDots from "../components/spinners/LoadingDots"
import useMovie from "../hooks/useMovie"


const MoviePage = () => {

  const { id } = useParams()
  const movieId = Number(id)
  const [newMovie, setNewMovie] = React.useState<number>(movieId)
  
  const {
    data: movie,
    isFetching: isLoadingMovie,
    isError: errorMovie,
    refetch,
  } = useMovie(newMovie)

  const handleMovieSubmit = () => {
    setNewMovie((Number(useParams())))
    refetch()
  }

  return (
      <>
        {errorMovie && <div>Something Went Wrong</div>}
        {isLoadingMovie ? (
          <LoadingDots />
        ):(
          <>
            <MovieOverview
            data={movie}
            />
              
            <ActorCarousel
            data={movie}
            />

            <MovieCarousel
            data={movie?.similar}
            title={"Similar Movies"}
            navTo={"movie"}
            error={errorMovie}
            submit={handleMovieSubmit}
            />
            
            <MovieImgCarousel
            data={movie}
            title="Images"
            />

            <MovieImgCarousel
            data2={movie} 
            title="Videos"
            />
          </>
        )}
      </>  
  )
}


export default MoviePage