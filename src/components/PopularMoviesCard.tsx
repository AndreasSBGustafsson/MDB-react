import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import {useNavigate} from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import * as TMBD from '../services/TMDBAPI'
import {Movie } from '../types/PopularMovies.type'



type Props = {}

const HomePageCard = (props: Props) => {

    const {
        data: popularMovies,
    } = useQuery(['popular'],TMBD.getPopularMovies)




    const navigate = useNavigate()

    const [cardTitle, setCardTitle] = useState(["Popular Titles"])

    const navToMovie = () => {
        console.log("navToMovie", "you Clicked to a Movie");
        
        navigate("/movie/:id")
    }
  
    return (

        <>
        <h2>Popular Movies</h2>
        <CardGroup>
            {popularMovies?.results.map((movie: Movie) => (
                <Card key={movie.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                    {/* <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>
                            {movie.overview}
                        </Card.Text>
                        <Button onClick={navToMovie} variant="primary">Go somewhere</Button>
                    </Card.Body> */}
                </Card>
            ))}
        </CardGroup>
      </>



    )
        

}



export default HomePageCard