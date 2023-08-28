import { Card, CardGroup, Carousel } from 'react-bootstrap'
import { Cast } from '../types/Credits.types'
import { Link } from 'react-router-dom'
import { ActorInfo } from '../types/ActorInfo.types'
import { useEffect } from 'react'
import { MovieInfo } from '../types/MovieInfo.type'



type Props = {
    data:MovieInfo|undefined
}


const ActorCarousel = ({data}: Props) => {


useEffect(() => {
    console.log(data);
        
        }
        , [])

  return (
    <>
    <h2>Actors</h2>
    <Carousel
    indicators={false}
    
    >
        {data?.credits.cast.map((cast: Cast, index) => (
            
            <Carousel.Item key={index} /* style={{ width: '18rem' }} */>
                <CardGroup /* className='justify-content-center align-items-center' */>
                    <Card as={Link} to={`/actor/${cast.id}`} key={cast.id}>
                        <div 
                        className='d-flex d-column justify-content-center align-items-center'
                        style={{
                          background:`url(https://image.tmdb.org/t/p/w500${cast.profile_path})`,
                          backgroundSize:'cover',
                          height:'100%',
                        }}
                        >
                        {cast.profile_path&&(
                          <>
                        <Card.Img 
                            className='justify-content-center align-items-center'
                            variant="Top" 
                            src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                            style={{
                                height:'18rem',
                                width:'auto',
                                backdropFilter: `blur(12px)`
                            }}
                        />
                        <Card.Body
                            className='d-column'>
                                <Card.Title style={{color:'white'}}>{cast.name}</Card.Title>
                        </Card.Body>

                        </>
                            )}


                            {cast.profile_path===null&&(
                              <>
                              <Card.Img variant="top" src={`https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg`}
                              style={{
                                height:'18rem',
                                width:'50%',
                                backdropFilter: `blur(12px)`
                            }} />
                              <Card.Body
                              className='d-column'>
                              <Card.Title style={{color:'darks'}}>{cast.name}</Card.Title>
                              </Card.Body>
                            </>
                            )}
                        </div>
                        
                    </Card>
                </CardGroup>
            </Carousel.Item>
        ))}
    </Carousel>
    </>
  )
}

export default ActorCarousel