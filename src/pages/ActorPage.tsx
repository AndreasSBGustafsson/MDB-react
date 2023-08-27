import { Card, CardGroup } from "react-bootstrap"
import { useQuery } from "@tanstack/react-query"
import * as TMBD from '../services/TMDBAPI'
import { useParams, Link } from "react-router-dom"
import { useEffect } from "react"

type Props = {}

const MoviePage = (props: Props) => {

  const { id } = useParams()
  const actorId = Number(id)


  const {
    data: actor,
  } = useQuery(['actor'],()=>TMBD.getActor(actorId))

  

  return (
    <>
        <Card>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${actor?.profile_path}`} />
            <Card.Body>
                <Card.Title>
                    {actor?.name}
                </Card.Title>
                <Card.Text>
                    {actor?.biography}
                </Card.Text>
            </Card.Body>

            <Card.Body
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Card.Title> Played in:</Card.Title>
                <Card.Text>{actor?.credits.cast.map((movie)=>(
                    <>
                    <Card.Text>{movie.character}</Card.Text>
                    <Card.Text as={Link} to={`/movie/${movie.id}`}>{movie.title}</Card.Text>
                    <Card.Text>{movie.release_date}</Card.Text>
                    </>   
                ))}
                </Card.Text>
               
            </Card.Body>
        </Card>
    </>
  )
}



export default MoviePage