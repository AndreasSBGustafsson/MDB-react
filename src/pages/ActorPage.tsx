import { useParams } from "react-router-dom"
import ActorsOverview from "../components/ActorsOverview"
import ActorsMoviesCarousel from "../components/carousels/ActorsMoviesCarousel"
import MoiveImgCarousel from "../components/carousels/MovieImgCarousel"
import LoadingDots from "../components/spinners/LoadingDots"
import useActor from "../hooks/useActor"


const ActorPage = () => {

  const { id } = useParams()
  const actorId = Number(id)

  const {
    data: actor,
    isFetching: isLoading,
    isError: error,
  } = useActor(actorId)


  return (
      <>
        {isLoading ?(
          <LoadingDots />
        ):(
          <>
            {error ?(
              <div>Something Went Wrong</div>
            ):(
              <>
                <ActorsOverview
                data={actor}
                />

                <ActorsMoviesCarousel  
                data={actor?.credits}
                />

                <MoiveImgCarousel
                data3={actor}
                title="Images"
                />
              </>
            )}
          </>
         )}
      </>
  )
}



export default ActorPage
