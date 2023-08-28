import PopularMoviesCard from '../components/MovieCarousel'
import OnTheaterMoviesCard from '../components/OnTheaterMoviesCard'
import TopRatedMoviesCard from '../components/TopRatedMoviesCard'
import { useQuery } from '@tanstack/react-query'
import * as TMBD from '../services/TMDBAPI'
import MovieCarousel from '../components/MovieCarousel'

type Props = {}

const HomePage = (props: Props) => {

  const {
    data:popularMovies
  } = useQuery(['popularMovies'],TMBD.getPopularMovies)

  const {
    data:onTheater
  } = useQuery(['onTheater'],TMBD.getOnTheaterMovie)


const {
  data:topRated
} = useQuery(['topRated'],TMBD.getTopRatedMovies)

console.log("popularMovies", popularMovies);


  return (
    <>
    <div className="App">
        <h1>App</h1>
    </div>

    
    <MovieCarousel
    data={popularMovies}
    title={"Popular Movies"}

    />
    <MovieCarousel 
    data={onTheater}
    title={"On Theater"}
    />
    <MovieCarousel 
    data={topRated}
    title={"Top Rated"}
    />
  </>
  )
}

export default HomePage