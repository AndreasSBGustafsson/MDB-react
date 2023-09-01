import { Card, CardGroup, Carousel } from 'react-bootstrap'
import { Cast } from '../../types/Credits.types'
import { useNavigate } from 'react-router-dom'
import { MovieInfo } from '../../types/MovieInfo.type'
import LoadingSpinner from '../spinners/LoadingDots'


type Props = {
    data:MovieInfo|undefined
    loading?:boolean
    error?:boolean
}

const ActorCarousel = ({data, loading}: Props) => {

    const navigate = useNavigate()


    return (
        <>
        {loading ? <LoadingSpinner/> : 
        <>
        {data?.credits.cast && (
            <>
            <h2>Actors</h2>
            <Carousel
            indicators={false}
            interval={null}>

                {data.credits.cast.map((cast: Cast, index) => (
                    <Carousel.Item key={index}>
                        <CardGroup >
                            <Card>
                                <div 
                                onClick={()=>navigate(`/actor/${cast.id}`)}
                                className='d-flex d-column justify-content-center align-items-center'
                                style={{
                                background:`url(https://image.tmdb.org/t/p/w500${cast.profile_path})`,
                                backgroundSize:'cover',
                                height:'100%',
                                }}
                                >
                                {cast.profile_path?(
                                <>
                                <Card.Img 
                                    className='justify-content-center align-items-center'
                                    variant="Top" 
                                    src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                                    style={{
                                        height:'18rem',
                                        width:'auto',
                                        backdropFilter: `blur(12px)`
                                    }}/>

                                <Card.Body
                                    className='d-column movieCardTitle'>
                                        <Card.Title style={{color:'white'}}>{cast.name}</Card.Title>
                                </Card.Body>
                                </>
                                ):(
                                <>
                                <Card.Img variant="top"
                                    src={`https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg`}
                                    style={{
                                        height:'18rem',
                                        width:'50%',
                                        backdropFilter: `blur(12px)`
                                    }}/>
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
            <Card.Title
                style={{textAlign:'center',}}
                className='movieCardTitle'
                onClick={()=>navigate(`/actors/${data.id}`)}
                >All Actors
            </Card.Title>
            </>
            )}
        </>
        }
        </>
  )
}

export default ActorCarousel