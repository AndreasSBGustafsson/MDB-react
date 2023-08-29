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
    <MovieCarousel
    data={popularMovies}
    title={"Popular Movies"}
    navTo={"popularmovies"}

    />
    <MovieCarousel 
    data={onTheater}
    title={"On Theater"}
    navTo='ontheater'
    />
    <MovieCarousel 
    data={topRated}
    title={"Top Rated"}
    navTo='toprated'
    />
  </>
  )
}

export default HomePage