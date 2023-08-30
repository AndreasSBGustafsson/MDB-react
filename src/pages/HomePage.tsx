import { useQuery } from '@tanstack/react-query'
import * as TMBD from '../services/TMDBAPI'
import MovieCarousel from '../components/Carousels/MovieCarousel'
import LoadingSpinner from '../components/Spinners/LoadingSpinner'
import LoadingDots from '../components/Spinners/LoadingDots'


const HomePage = () => {

  const {
    data:popularMovies,
    isFetching:isLoadingPopular,
    isError:errorPopular
  } = useQuery(['popularMovies'],()=>TMBD.getPopularMovies())

  const {
    data:onTheater,
    isFetching:isLoadingTheater,
    isError:errorTheater
  } = useQuery(['onTheater'],()=>TMBD.getOnTheaterMovie())

  const {
    data:topRated,
    isFetching:isLoadingTopRated,
    isError:errorTopRated,
  } = useQuery(['topRated'],()=>TMBD.getTopRatedMovies())


  return (
    <>
    {isLoadingPopular && isLoadingTheater && isLoadingTopRated ? <LoadingDots/>:
    <>
      {errorTopRated && errorTheater && errorPopular ? <div>Something Went Wrong</div>:
      <>    
      <MovieCarousel
      data={popularMovies}
      title={"Popular Movies"}
      navTo={"popularmovies"}
      loading={isLoadingPopular}
      error={errorPopular}

      />
      <MovieCarousel 
      data={onTheater}
      title={"On Theater"}
      navTo='ontheater'
      loading={isLoadingTheater}
      error={errorTheater}
      />
      <MovieCarousel 
      data={topRated}
      title={"Top Rated"}
      navTo={'toprated'}
      loading={isLoadingTopRated}
      error={errorTopRated}
      />
    </>
    }
    </>
    }
    </>
  )
}

export default HomePage