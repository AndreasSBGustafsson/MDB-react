import { useQuery } from '@tanstack/react-query'
import * as TMBD from '../services/TMDBAPI'
import { useParams } from 'react-router-dom'
import ActorsResultCard from '../components/ActorsResultCard'
import LoadingDots from '../components/Spinners/LoadingDots'


const Result = () => {

  const {id} = useParams()
  const movieId = Number(id)

  const {
    data,
    isFetching:isLoading,
    isError:error,
  } = useQuery(['movie'],()=>TMBD.getMovie(movieId))


  return (
    <>
    {isLoading ? <LoadingDots />:
    <>
    {error? <div>Something Went Wrong</div>:

    <ActorsResultCard
    data={data}
    />
  }
    </>
  }
    </>
  )
}


export default Result



