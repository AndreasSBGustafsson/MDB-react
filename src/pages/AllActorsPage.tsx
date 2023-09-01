import { useParams } from 'react-router-dom';
import ActorsResultCard from '../components/ActorsResultCard';
import LoadingDots from '../components/spinners/LoadingDots';
import useMovie from '../hooks/useMovie';

const AllActorsPage = () => {
  const { id: movieIdStr } = useParams()
  const movieId = Number(movieIdStr)

  const {
    data,
    isFetching: isLoading,
    isError: error,
  } = useMovie(movieId)

  if (isLoading) return <LoadingDots />
  
  if (error) return <div>Something Went Wrong</div>

  return <ActorsResultCard data={data} />
}

export default AllActorsPage;