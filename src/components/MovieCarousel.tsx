import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import {Link,useNavigate} from 'react-router-dom'

import {Movie, MoviesArray } from '../types/MoviesArray.type'
import { Carousel } from 'react-bootstrap'



type Props = {
    data:MoviesArray|undefined
    title:string
    navTo:string
}

const MovieCarousel = ({data, title, navTo}: Props) => {
    console.log("PopularMoviesCard",data);
    
    
    const navigate = useNavigate()
    
    // const {
    // data: popularMovies,
    // } = useQuery(['popular'],TMBD.getPopularMovies)

    const [cardTitle, setCardTitle] = useState("")
    const [navTitle, setNavTitle] = useState("")
    
    useEffect(() => {
        setCardTitle(title)
        setNavTitle(navTo)
        
    }
    ,[])
  
    return (

        <>
        <h2 onClick={()=>navigate(`/result/${navTitle}`)}>{cardTitle}</h2>
        <Carousel
        indicators={false}
        
        >
            {data?.results.map((movie: Movie) => (
                
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



export default MovieCarousel