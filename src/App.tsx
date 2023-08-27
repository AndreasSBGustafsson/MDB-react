import { Container } from 'react-bootstrap'
import './assets/scss/App.scss'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import { Routes, Route } from 'react-router-dom'



const App = () => {
  return (
    <>
      <Navigation />
      <Container className='mt-2'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movie/:id' element={<MoviePage />} />
        </Routes>
      </Container>
      </>
      
  )
}

export default App