import { useQuery } from "@tanstack/react-query"
import * as TMBD from '../services/TMDBAPI'
import { useParams, useNavigate } from "react-router-dom"
import MovieOverview from "../components/MovieOverview"
import ActorCarousel from "../components/ActorCarousel"
import MovieCarousel from "../components/MovieCarousel"
import MovieImgCarousel from "../components/MovieImgCarousel"

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

<MovieCarousel
data={movie?.similar}
title={"Similar Movies"}
navTo={"movie"}
/>
<MovieImgCarousel
data={movie}
title="Images"
/>

<MovieImgCarousel
data2={movie?.videos} 
title="Videos"
/>

    </>




  
  )
}



export default MoviePage