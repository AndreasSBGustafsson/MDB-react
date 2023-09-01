import MovieCarousel from '../components/carousels/MovieCarousel'
import LoadingDots from '../components/spinners/LoadingDots'
import useTopRated from '../hooks/useTopRated'
import useOnTheater from '../hooks/useOnTheater'
import usePopularMovies from '../hooks/usePopularMovies'
import useLastVisited from '../hooks/useLastVisited'
import { getVisitedArray } from '../utils/lastVisited'
import LastVistedCar from '../components/carousels/LastVistedCar'
import { useEffect, useState } from 'react'
import useTrending from '../hooks/useTrending'
import TrendingMovieCard from '../components/carousels/TrendingMovieCard'


const HomePage = () => {


  const storedSwitchState = sessionStorage.getItem('switchState') === "true" ? true : false
  const storedTrendOption = sessionStorage.getItem('trendOption') === "day" ? "day" : "week"
  
  const [switchState, setSwitchState] = useState(storedSwitchState)
  const [trendOption, setTrendOption] = useState(storedTrendOption)

  const handle = () => {
    setSwitchState(!switchState)
  }

  useEffect(() => { 
    
    if(!switchState){
      setTrendOption("day")
      sessionStorage.setItem('trendOption', "day")
      sessionStorage.setItem('switchState', "true")
    }
    else{
    setTrendOption("week")
    sessionStorage.setItem('trendOption', "week")
    sessionStorage.setItem('switchState', "false")
    }
    
  refetchTrend()

  },[switchState])


    //Gatting last visited movies from local storage by using useLastVisited hook
    const {data: lastVisited, isFetching:isLoadingVisited, isError:errorVisited} = useLastVisited(getVisitedArray())


    const {data:Trending,
    isFetching:isLoadingTrending,
    isError:errorTrending,
    refetch:refetchTrend
    } = useTrending(trendOption)
      
    
    const {
      data:popularMovies,
      isFetching:isLoadingPopular,
      isError:errorPopular
    } = usePopularMovies("popularmoivesCar",1)

    const {
      data:onTheater,
      isFetching:isLoadingTheater,
      isError:errorTheater
    } = useOnTheater("ontheaterCar",1)

    const {
      data:topRated,
      isFetching:isLoadingTopRated,
      isError:errorTopRated,
    } = useTopRated("topratedCar",1)

    const isLoading = [isLoadingPopular, isLoadingTheater, isLoadingTopRated, isLoadingVisited].some(Boolean);
    const hasError = [errorPopular, errorTheater, errorTopRated, errorVisited].some(Boolean);



  return (
    <>
    {isLoading ? <LoadingDots /> : null}

    {hasError ? (
      <div>Something Went Wrong</div>
    ) : (
      <>
        <MovieCarousel
          data={popularMovies}
          title="Popular Movies"
          navTo="popularmovies"
          loading={isLoadingPopular}
          error={errorPopular}
        />

        <MovieCarousel
          data={onTheater}
          title="On Theater"
          navTo="ontheater"
          loading={isLoadingTheater}
          error={errorTheater}
        />

        <MovieCarousel
          data={topRated}
          title="Top Rated"
          navTo="toprated"
          loading={isLoadingTopRated}
          error={errorTopRated}
        />

        <LastVistedCar
          data={lastVisited}
          title="Last Visited"
          loading={isLoadingPopular}
          error={errorPopular}
        />

        <TrendingMovieCard
            data={Trending}
            title="Trending"
            loading={isLoadingTrending}
            error={errorTrending}
            navTo='trending'
            switchState={()=>handle()}
            trendOption={trendOption}
        />

      </>
    )}
  </>
)
}

export default HomePage