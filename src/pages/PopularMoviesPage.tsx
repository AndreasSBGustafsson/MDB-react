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

const navigate =useNavigate()

const {
  data
} = useQuery(['popularMovies'],TMBD.getPopularMovies)

/* const {
  data: gen,
  refetch,
} = useQuery(['genre'],()=> TMBD.getGenres(genreList)) */

/* const submit = (e:any) => {
console.log("u pressed submit");
  refetch()
} */

  return (
      <>
       <div>Popular Movies</div>
    
       {/*  <Card>
          <Form>
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
                    setGenreList((prevGenreList) => [...prevGenreList, genreId]);
                  } else {
                    setGenreList((prevGenreList) =>
                      prevGenreList.filter((id) => id !== genreId)
                    );     
                  }
                }}
              />
            ))}
            <Button onClick={(e)=>submit(e)} variant="primary">Submit</Button>
          </Form>
        </Card>  */}
        {!data && <div>Loading...</div>}
        {data?.results && data.results.length === 0 && <div>No results</div>}

        {data?.results && (
          <>
            {data.results.map((movie: any) => (
              <Card
                /* className='rounded' */
              style={{
                /* backgroundColor:'255,255,255,1, 0.5', */
                backgroundColor:'rgba(0,0,0,0.5)',
                margin:'1rem',
                
              }
                }
              >
                <div className='d-flex' key={movie.id}
                >
                  
                  <Card.Img
                  onClick={()=>navigate(`/movie/${movie.id}`)}
                  variant="left"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  style={{height:'10rem', width:'auto'}}
                    className='rounded-start'
               /* s */
                  />
                  
                    <Card.Body 
                    className='rounded-end'/* style={{flexDirection:'column'}} */
                     style={{
                      wordBreak: 'break-word',
                      backgroundColor:'white'
,
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