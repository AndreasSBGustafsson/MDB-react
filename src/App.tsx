import { Container } from 'react-bootstrap'
import './assets/scss/App.scss'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import ActorPage from './pages/ActorPage'
import ResultlPage from './pages/ResultPage'
import { Routes, Route } from 'react-router-dom'



const App = () => {
  return (
    <>
      <Navigation />
      <Container className='mt-2'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/result' element={<ResultlPage />} />
          <Route path='/movie/:id' element={<MoviePage />} />
          <Route path='/actor/:id' element={<ActorPage />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </Container>
      </>
      
  )
}

export default App