import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useQuery } from '@tanstack/react-query'
import * as TMBD from '../services/TMDBAPI'
import { Link, useParams } from 'react-router-dom'
import { Card, CardGroup } from 'react-bootstrap'
import { GenreObjects } from '../types/Genre.types'
import { useQueryClient } from '@tanstack/react-query'



type Props = {}

const Result = (props: Props) => {

const queryClient = useQueryClient()

const { id } = useParams()
const dataId = Number(id)
const [genreId, setGenreId] = React.useState<number|undefined>()
const [genreList, setGenreList] = React.useState<number[]>([])
const [object, setObject] = React.useState([])

// Information var användaren kommer ifrån
const [subject, setSubject] = React.useState("genre")
  
const {
  data
} = useQuery(['genreList'],TMBD.getGenreList)

const {
  data: gen,
  refetch,
} = useQuery(['genre'],()=> TMBD.getGenres(genreList)
)

const submit = (e:any) => {

 

console.log("u pressed submit");

  refetch()
}


// useEffect(() => {
//   if (genreId) {
//     console.log("genreList", genreList)
//     const newObject: any =() => {
//       return genreList.push(genreId)
//     }
//     const newArray = newObject()
//     setObject(newArray)
//   }
// }
// , [genreId])

// useEffect(() => {
//   if (genreList){
//   const uniqueArray = genreList.filter((item, pos) =>{
//     return genreList.indexOf(item) == pos;
//   }
//   );
//   setGenreList(uniqueArray)
//   }
// }, [genreId])
  



  return (
    <>
    {/* farligt döpt kod nedan! */}
    <div>{`${subject}s`}</div>

    <CardGroup>
      <Card>
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
          //  onClick={e => submit(e)}
         />
          ))}
          <Button onClick={(e)=>submit(e)} variant="primary">Submit</Button>
        </Form>
      </Card>



      <Card>
        {gen?.results.map((movie: any) => (
          <div key={movie.id}>
          <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <Card.Body>
              <Card.Title as={Link} to={`/movie/${movie.id}`}>{movie.title}</Card.Title>
              <Card.Text>
                {movie.genre_ids.name}
                {movie.overview}
              </Card.Text>

            </Card.Body>
            </div>
        ))}
      </Card>



      <Card>
        <Card.Img variant="top" /* src={`https://image.tmdb.org/t/p/w500${popularMovies?.results.poster_path}`} */ />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            {/* popularMovies?.results.overview */}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      </CardGroup>

    </>
  )
}


export default Result