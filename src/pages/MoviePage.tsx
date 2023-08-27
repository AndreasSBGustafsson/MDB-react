import { Card, CardGroup } from "react-bootstrap"
import { useQuery } from "@tanstack/react-query"
import * as TMBD from '../services/TMDBAPI'
import { useParams } from "react-router-dom"
import { useEffect } from "react"

type Props = {}

const MoviePage = (props: Props) => {

  const { id } = useParams()
  const movieId = Number(id)


  const {
    data: movie,
  } = useQuery(['movie'],()=>TMBD.getMovie(movieId))


 useEffect(() => {
  console.log(movie);
  
  console.log(movie?.credits)
  console.log(movie?.credits);
  
  }
  , [movie])
  

  return (
    <>
      <div>MovieInfo</div>
      <Card>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} />
        <Card.Body>
          <Card.Title>
            {movie?.title}
            <Card.Body style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Card.Text>{movie?.tagline}</Card.Text>
        </Card.Body>
          </Card.Title>
            {movie?.release_date}
            <Card.Body style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <Card.Text>Genres: {movie?.genres.map((genre) => genre.name).join(', ')}</Card.Text>
            </Card.Body>
          <Card.Text>
            {movie?.overview}
          </Card.Text>
        </Card.Body>
        <Card.Body
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          >
          </Card.Body>
      </Card>

      <Card>
        <Card.Body style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Card.Text>Rating: {movie?.vote_average}</Card.Text>
        </Card.Body>
        <Card.Body>
        </Card.Body>
        <Card.Body style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Card.Text>Spoken Languages: {movie?.spoken_languages.map((language) => language.name).join(', ')}</Card.Text>
        </Card.Body>
        <Card.Body style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Card.Text>Runtime: {movie?.runtime}</Card.Text>
        </Card.Body>
        <Card.Body style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Card.Text>Budget: {movie?.budget}</Card.Text>
        </Card.Body>
        <Card.Body style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Card.Text>Revenue: {movie?.revenue}</Card.Text>
        </Card.Body>
        <Card.Body style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Card.Text>Popularity: {movie?.popularity}</Card.Text>
        </Card.Body>
        <Card.Body style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Card.Text>Original Language: {movie?.original_language}</Card.Text>
        </Card.Body>
        <Card.Body style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Card.Text>Original Title: {movie?.original_title}</Card.Text>
        </Card.Body>
        <Card.Body style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Card.Text>Video: {movie?.video}</Card.Text>
        </Card.Body>
      </Card>


{movie?.credits && 

      <Card>
        <Card.Body style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Card.Text>Actors: {movie?.credits.cast.map((actor) => actor.name).join(', ')}
          </Card.Text>
        </Card.Body>
        <Card.Body style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Card.Text>Production Countries: {movie?.production_countries.map((country) => country.name).join(', ')}</Card.Text>
        </Card.Body>
        </Card>
 
}
    </>
  
  )
}



export default MoviePage