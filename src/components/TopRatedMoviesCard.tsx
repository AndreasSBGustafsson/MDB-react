import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import {Link, useNavigate} from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import * as TMBD from '../services/TMDBAPI'
import {Movie } from '../types/MoviesArray.type'
import { Carousel } from 'react-bootstrap'



type Props = {}

const HomePageCard = (props: Props) => {

    const {
        data: popularMovies,
    } = useQuery(['topRanked'],TMBD.getTopRatedMovies)




    const navigate = useNavigate()

    const [cardTitle, setCardTitle] = useState(["Popular Titles"])

    const navToMovie = () => {
        console.log("navToMovie", "you Clicked to a Movie");
        
        navigate("/movie/:id")
    }
  
    return (

        <>
        <h2 onClick={()=>navigate('/result/toprated')}>Topprankade</h2>
        <Carousel
        indicators={false}
        
        >
            {popularMovies?.results.map((movie: Movie) => (
                
                <Carousel.Item key={movie.id} /* style={{ width: '18rem' }} */>
                    <CardGroup /* className='justify-content-center align-items-center' */>
                        <Card as={Link} to={`/movie/${movie.id}`} key={movie.id}>
                            <div className='
                                d-flex
                                flex-column
                                justify-content-center 
                                align-items-center
                                '
                            style={{
                                background:`url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
                                backgroundSize:'cover',
                                height:'100%',
                                /* backdropFilter:'blur(6px)' */
                            }}
                            >
                            <div 
                            className='d-flex d-column justify-content-center align-items-center'
                            style={{
                                
                                
                            }}
                            >
                            <Card.Img 
                                className='justify-content-center align-items-center'
                                variant="Top" 
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                style={{
                                    height:'18rem',
                                    width:'auto',
                                    backdropFilter: `blur(12px)`
                                }}
                            />
                                
                            <Card.Body
                            className='d-column'>
                                <Card.Title style={{color:'white'}}>{movie.title}</Card.Title>
                            </Card.Body>
                            </div>
                            </div>
                        </Card>
                    </CardGroup>
                </Carousel.Item>
        
            ))}
        </Carousel>
      </>



    )
        

}



export default HomePageCard