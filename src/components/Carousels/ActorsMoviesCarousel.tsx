import React from 'react'
import { Card, CardGroup, Carousel } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { Cast, Credits } from '../../types/Credits.types'

type Props = {
    data:Credits|undefined
}

const ActorsMoviesCarousel = ({data}: Props) => {

  return (
        <>
        <h2>Played in:</h2>    
        <Carousel
            indicators={false}
            interval={null}
        >
            {data?.cast.map((movie  => (
                <Carousel.Item key={movie.id} /* style={{ width: '18rem' }} */>
                    <CardGroup /* className='justify-content-center align-items-center' */>
                        <Card as={Link} to={`/movie/${movie.id}`} key={movie.id}>
                            <div className='
                                d-flex
                                flex-column
                                justify-content-center 
                                align-items-center'
                            style={{
                                background:`url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
                                backgroundSize:'cover',
                                backgroundPosition:'center',
                                height:'100%',
                            }}
                            >
                            <div 
                                className='d-flex d-column justify-content-center align-items-center'
                                style={{height:'100%'}}
                            >
                            <Card.Img 
                                className='justify-content-center align-items-center'
                                variant="Top" 
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                style={{
                                    height:'18rem',
                                    width:'auto',
                                    position: 'relative',
                                }}/>
                                
                            <Card.Body
                            className='d-column movieCardTitle'>
                                <Card.Title style={{color:'white'}}>{movie.title}</Card.Title>
                            </Card.Body>
                            </div>
                            </div>
                        </Card>
                    </CardGroup>
                </Carousel.Item>
            )))}
        </Carousel>
    </>
  )
}

export default ActorsMoviesCarousel