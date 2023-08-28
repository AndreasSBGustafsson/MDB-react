import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useQuery } from '@tanstack/react-query'
import * as TMBD from '../services/TMDBAPI'
import { Link, useNavigate, useParams,} from 'react-router-dom'
import { Card,} from 'react-bootstrap'
import { GenreObjects } from '../types/Genre.types'
import { Movie } from '../types/MoviesArray.type'
import { Cast } from '../types/Credits.types'


type Props = {
    id?:number
}

const Result = (props: Props) => {

const [genreList, setGenreList] = React.useState<number[]>([])

const {id} = useParams()
const movieId = Number(id)

const navigate =useNavigate()

const {
  data
} = useQuery(['movie'],()=>TMBD.getMovie(movieId))

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
       <div>Actors</div>
    
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
        {data?.credits && data.credits.cast.length === 0 && <div>No results</div>}

        {data?.credits.cast && (
          <>
            {data.credits.cast.map((cast: Cast) => (
              <Card
              >
                <div className='d-flex' key={cast.id}
                >
                  
                  <Card.Img onClick={()=>navigate(`/actor/${cast.id}`)}variant="bottom" src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} style={{height:'10rem', width:'auto'}}/>
                  
                    <Card.Body /* style={{flexDirection:'column'}} */
                     style={{
                      wordBreak: 'break-word'
                    }}>
                      <Card.Title as={Link} to={`/actor/${cast.id}`}>{cast.name}</Card.Title>
                      <Card.Text style={{
                        fontSize:'0.8rem',
                        }}
                        >

                        <Card.Text>
                        {cast.character}
                        </Card.Text>

                        <Card.Text>
                        {cast.known_for_department}
                        </Card.Text>

                        <Card.Text>
                        {cast.original_name}
                        </Card.Text>

                        </Card.Text>
                      <Link to={`/actor/${cast.id}`}>
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