import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import {Link,useNavigate} from 'react-router-dom'
import {Movie, MoviesArray } from '../../types/MoviesArray.type'
import { Carousel } from 'react-bootstrap'
import LoadingDots from '../spinners/LoadingDots'
import setPageSessionStorage from '../../utils/setPageSessionStorage'


type Props = {
    data:MoviesArray|undefined
    title:string
    navTo:string
    loading?:boolean
    error?:boolean
    submit?:()=>void
}

const MovieCarousel = ({data, title, navTo, loading, error, submit}: Props) => {
    
    const navigate = useNavigate()

    const navToCategory = () => {
        
        setPageSessionStorage(navTo)
        navigate(`/result/${navTo}`)
    }
  
    return (

        <>
        {loading ? <LoadingDots/> : 
        <>
        {error ? <div></div>:
        <>
        {data?.results.length === 0 ? <></>:
        <>
            <h2 onClick={navToCategory}>{title}</h2>
            <Carousel
            indicators={false}
            interval={null}
            >
                {data?.results.map((movie: Movie) => (
                    
                    <Carousel.Item key={movie.id} /* style={{ width: '18rem' }} */>
                        <CardGroup /* className='justify-content-center align-items-center' */>
                            <Card as={Link} to={`/movie/${movie.id}`} key={movie.id} onClick={submit}>
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
                                    style={{height:'100%',}}
                                >

                                <Card.Img 
                                    className='justify-content-center align-items-center'
                                    variant="Top" 
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    style={{
                                        height:'18rem',
                                        width:'auto',
                
                                        position: 'relative',
                                    }}
                                />
                                    
                                <Card.Body
                                className='d-column movieCard'>
                                    <Card.Title className='movieCardTitle' style={{color:'white', borderRadius:'1rem', padding:'0.5rem'}}>{movie.title}</Card.Title>
                                </Card.Body>
                                </div>
                                </div>
                            </Card>
                        </CardGroup>
                    </Carousel.Item>
                ))}
            </Carousel>
            </>
        }
        </>
        }
        </>
        }
        </>
    )
}



export default MovieCarousel