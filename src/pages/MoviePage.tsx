import { Card, CardGroup, Carousel, CarouselItem } from "react-bootstrap"
import { useQuery } from "@tanstack/react-query"
import * as TMBD from '../services/TMDBAPI'
import { useParams, Link } from "react-router-dom"
import { useEffect } from "react"
import { Cast } from "../types/Credits.types"
import Result from "./ResultPage"

type Props = {}

const MoviePage = (props: Props) => {

  const { id } = useParams()
  const movieId = Number(id)


  const {
    data: movie,
  } = useQuery(['movie'],()=>TMBD.getMovie(movieId)
  )


 useEffect(() => {
  console.log(movie);
  
  console.log(movie?.credits)
  console.log(movie?.credits);
  
  }
  , [movie])
  

  return (
    <>

    {movie?.credits &&(
      <>
      <Card>
      <div className='
          d-flex
          flex-column
          align-items-center
          '
      style={{
          background:`url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
          backgroundSize:'cover',
          height:'100%',
          /* backdropFilter:'blur(6px)' */
      }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} style={{
          width:'70%',
          objectFit:'cover',
        }}
        />
        </div>
        <Card.Body style={{
          // display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'center',
        }}
        className="
          d-flex
          flex-column
          align-items-center"
        >
          <Card.Title className=" flex-column, text-center">
            {movie?.title}
            <Card.Body style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Card.Text>{movie?.tagline}</Card.Text>
        </Card.Body>
          </Card.Title>
            {movie?.release_date}
            <Card.Body style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
              className="square border">
              <Card.Text>Genres: {movie?.genres.map((genre) => genre.name).join(', ')}</Card.Text>
            </Card.Body>
          <Card.Text className="me-3">
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
      </Card>
</>
)}



<> 
        <h2>Actors</h2>
        <Carousel
        indicators={false}
        
        >
            {movie?.credits.cast.map((cast: Cast) => (
                
                <Carousel.Item key={movie.id} /* style={{ width: '18rem' }} */>
                    <CardGroup /* className='justify-content-center align-items-center' */>
                        <Card as={Link} to={`/actor/${cast.id}`} key={cast.id}>
               
                            <div 
                            className='d-flex d-column justify-content-center align-items-center'
                            style={{
                              background:`url(https://image.tmdb.org/t/p/w500${cast.profile_path})`,
                              backgroundSize:'cover',
                              height:'100%',
                              /* backdropFilter:'blur(6px)' */
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

        <div style={{fontSize:'24px'}}> See All Actors</div>
        {movie?.images &&(
          <>
          <h2>Images</h2>
          <Carousel>
            {movie?.images.backdrops.map((image,index) => (
            <CarouselItem key={index}>
              <img
                className="d-block w-100"
                src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                alt="First slide"
              />
            </CarouselItem>
            ))}
            <CarouselItem>
  
            </CarouselItem>
          </Carousel>
          </>
        )}
      {movie?.videos &&(
          <>
          <h2>Videos</h2>
          <Carousel
          indicators={false}
          >
            {movie?.videos.results.map((video,index) => (
              <CarouselItem key={index}
              className="justify-content-center align-items-center"
              >
                <iframe
                className="d-block w-100"
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${video.key}`}
                  allowFullScreen
                  title='video'
                />
              </CarouselItem>
              
            ))}

          </Carousel>
          </>
        )}
       
        </>
    </>
  
  )
}



export default MoviePage