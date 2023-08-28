import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useQuery } from '@tanstack/react-query'
import * as TMBD from '../services/TMDBAPI'
import { Link, useNavigate,} from 'react-router-dom'
import { Card,} from 'react-bootstrap'
import { GenreObjects } from '../types/Genre.types'


type Props = {}

const Result = (props: Props) => {

const [genreList, setGenreList] = React.useState<number[]>([])
const [selectedGenres, setSelectedGenres] = React.useState<string[]>([])


const navigate =useNavigate()

const {
  data
} = useQuery(['genreList'],TMBD.getGenreList)

const {
  data: gen,
  refetch,
} = useQuery(['genre'],()=> TMBD.getGenres(genreList))

const submit = (e:any) => {
console.log("u pressed submit");
  refetch()
}

  return (
    <>
      {/* farligt döpt kod nedan! */}
      <div
      style={{
        color:'white',
        }}
      >Genre</div>
        <Card
        className='bg-dark'
          style={{
            color:'white',
          }}
            >
          <Form
          >
            {data?.genres.map((genre: GenreObjects) => (
              <Form.Check
                key={genre.id}
                type="checkbox"
                label={genre.name}
                value={genre.id}
                checked={genreList.includes(genre.id)} // Set checkbox checked based on genreList
                onChange={(e) => {
                  const genreId = Number(e.target.value);
                  if (e.target.checked) {
                    setGenreList((prevGenreList) => [...prevGenreList, genreId])
                    setSelectedGenres((prevSelectedGenres) => [...prevSelectedGenres, genre.name])
                  } else {
                    setGenreList((prevGenreList) =>
                      prevGenreList.filter((id) => id !== genreId)
                    )
                    setSelectedGenres((prevSelectedGenres) =>
                    prevSelectedGenres.filter((name) => name !== genre.name)
                  )     
                  }
                }}
              />
            ))}
            <Button onClick={(e)=>submit(e)} variant="primary">Submit</Button>
          </Form>
        </Card>
        {!gen && <div>Loading...</div>}
        {gen && gen.results.length === 0 && <div>No results</div>}

        {gen &&(
          <>
          {selectedGenres.length < 1 && <div style={{color:'white'}}>Select genres!</div>}
          <div style={{
            color:'white',
            fontSize:'1.2rem',
            margin:'0.5rem',
            }}  
            >
          {selectedGenres.join(', ')}</div>
            {gen.results.map((movie: any) => (
              <Card
              >
                <div className='d-flex' key={movie.id}
                >
                  
                  <Card.Img onClick={()=>navigate(`/movie/${movie.id}`)}variant="bottom" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} style={{height:'10rem', width:'auto'}}/>
                  
                    <Card.Body /* style={{flexDirection:'column'}} */
                     style={{
                      wordBreak: 'break-word'
                    }}>
                      <Card.Title as={Link} to={`/movie/${movie.id}`}>{movie.title}</Card.Title>
                      <Card.Text style={{
                        fontSize:'0.8rem',
                        
                        }}
                        >
                        {movie.genre_ids.name}
                        
                        {movie.overview}
                      </Card.Text>
                      <Link to={`/movie/${movie.id}`}>
                        <Button variant="primary" >Se mer</Button>
                      </Link>
                    </Card.Body>
                  </div>
                </Card>
              ))}
          </>
        )}
    </>
  )
}


export default Result