import PopularMoviesCard from '../components/PopularMoviesCard'
import OnTheaterMoviesCard from '../components/OnTheaterMoviesCard'
import TopRatedMoviesCard from '../components/TopRatedMoviesCard'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <>
    <div className="App">
        <h1>App</h1>
    </div>
    <PopularMoviesCard  />
    <OnTheaterMoviesCard/>
    <TopRatedMoviesCard />
  </>
  )
}

export default HomePage