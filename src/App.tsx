import { Container } from 'react-bootstrap'
import './assets/scss/App.scss'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import ActorPage from './pages/ActorPage'
import ResultlPage from './pages/ResultPage'
import { Routes, Route } from 'react-router-dom'
import PopularMoviesPage from './pages/PopularMoviesPage'
import TopRatedPage from './pages/TopRatedPage'
import OnTheaterPage from './pages/OnTheaterPage'
import AllActorsPage from './pages/AllActorsPage'
import { ResultProvider } from './context/Context'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const App = () => {
  return (
    <>
    <div className='bg'>
      <Navigation />
      <Container className='mt-2'>
        <ResultProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/result' element={<ResultlPage />} />
          <Route path='/result/popularmovies' element={<PopularMoviesPage />} />
          <Route path='/result/toprated' element={<TopRatedPage />} />
          <Route path='/result/ontheater' element={<OnTheaterPage />} />
          <Route path='/movie/:id' element={<MoviePage />} />
          <Route path='/actor/:id' element={<ActorPage />} />
          <Route path='/actors/:id' element={<AllActorsPage/>} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
        </ResultProvider>
      </Container>
      </div>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
        </>
  )
}

export default App