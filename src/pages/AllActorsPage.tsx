import { useParams } from 'react-router-dom'
import ActorsResultCard from '../components/ActorsResultCard'
import LoadingDots from '../components/spinners/LoadingDots'
import useMovie from '../hooks/useMovie'


const Result = () => {

  const {id} = useParams()
  const movieId = Number(id)

  const {
    data,
    isFetching:isLoading,
    isError:error,
  } = useMovie(movieId)


  return (
    <>
      {isLoading ?(
         <LoadingDots />
      ):(
        <>
          {error?(
            <div>Something Went Wrong</div>
          ):(
            <ActorsResultCard
            data={data}
            />
          )}
        </>
      )}
    </>
  )
}


export default Result



