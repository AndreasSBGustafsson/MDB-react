import { useParams } from "react-router-dom"
import ActorsOverview from "../components/ActorsOverview"
import ActorsMoviesCarousel from "../components/carousels/ActorsMoviesCarousel"
import LoadingDots from "../components/spinners/LoadingDots"
import useActor from "../hooks/useActor"
import MovieImgCarousel from "../components/carousels/MovieImgCarousel"


const ActorPage = () => {

  const { id } = useParams()
  const actorId = Number(id)

  const {
    data: actor,
    isFetching: isLoading,
    isError: error,
  } = useActor(actorId)


  if (isLoading) return <LoadingDots />

  if (error) return <div>Something Went Wrong</div>

  return (
    <>
      <ActorsOverview data={actor} />
      <ActorsMoviesCarousel data={actor?.credits} />
      <MovieImgCarousel data3={actor} title="Images" />
    </>
  )
}



export default ActorPage
