import { LastVisited } from '../../types/LastVisited.type'
import { Card, CardGroup, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MovieInfo } from '../../types/MovieInfo.type'

type Props = {data:LastVisited|undefined, title:string, loading?:boolean, error?:boolean}

const LastVistedCar = ({data, title }:Props) => {

   //This shows data so there's data to be displayed
    data?.map((movie: MovieInfo) => (console.log(movie.poster_path)))

    
    


  return (
    <>
    {data?.length === 0 ? <h2>Could Not Get Data ....</h2>:
    <>
    <h2>{title}</h2>
            <Carousel
            indicators={false}
            interval={null}
            >
                {data?.map((movie: MovieInfo,index) => (
                    <Carousel.Item key={index} >
                        <CardGroup>
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
                ))
                
                }
            </Carousel>
    </>
    }
    </>
  )
}

export default LastVistedCar