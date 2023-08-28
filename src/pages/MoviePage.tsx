import { Card, CardGroup, Carousel, CarouselItem } from "react-bootstrap"
import { useQuery } from "@tanstack/react-query"
import * as TMBD from '../services/TMDBAPI'
import { useParams, Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { Cast } from "../types/Credits.types"
import Result from "./ResultPage"
import MovieOverview from "../components/MovieOverview"
import ActorCarousel from "../components/ActorCarousel"

type Props = {}

const MoviePage = (props: Props) => {

  const { id } = useParams()
  const movieId = Number(id)

  const navigate = useNavigate()


  const {
    data: movie,
  } = useQuery(['movie'],()=>TMBD.getMovie(movieId)
  )


/*  useEffect(() => {
  console.log(movie);
  
  console.log(movie?.credits)
  console.log(movie?.credits);
  
  }
  , [movie]) */
  

  return (
    <>
<MovieOverview
data={movie}
/>
<ActorCarousel
data={movie}
/>
</>



  
  )
}



export default MoviePage