import { Button, Card, CardGroup, Carousel } from "react-bootstrap"
import { Movie, MoviesArray } from "../../types/MoviesArray.type"
import setPageSessionStorage from "../../utils/setPageSessionStorage"
import { Link, useNavigate } from "react-router-dom"


type Props = {data:MoviesArray|undefined
    title:string
    navTo:string
    loading?:boolean
    error?:boolean
    submit?:()=>void
    switchState:()=>void
    trendOption:string
}

const TrendingMovieCard = ({data, title, navTo, loading, error, trendOption, submit, switchState}: Props) => {

    const navigate = useNavigate()

    const navToCategory = () => {
        
        setPageSessionStorage(navTo)
        navigate(`/result/${navTo}`)
    }

    return (
        <div>
        
            <div>
              {error ? (
                <div></div>
              ) : (
                <div>
                  {data?.results.length === 0 ? (
                    <h2>Could Not Get Data ....</h2>
                  ) : (
                    <div style={{height:'18rem'}}>
                      <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                        <h2 style={{ margin: '1rem' }} onClick={navToCategory}>
                          {title}
                        </h2>
                        <div className="d-flex" style={{alignItems:'center'}}>
                          <h3 style={{padding:'1rem', width:'5rem', textAlign:'end'}}>{trendOption}</h3>
                        <Button onClick={switchState} style={{ marginRight: '3rem' , fontSize:'10px', width:'5rem'}} disabled={loading}variant='warning'>
                          switch to {!!trendOption}
                        </Button>
                        </div>
                      </div>
                      <Carousel indicators={false} interval={null}>
                        {data?.results.map((movie: Movie, index) => (
                          <Carousel.Item key={index}>
                            <CardGroup>
                              <Card as={Link} to={`/movie/${movie.id}`} key={movie.id} onClick={submit}>
                                <div
                                  className='d-flex flex-column justify-content-center align-items-center'
                                  style={{
                                    background: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '100%',
                                  }}
                                >
                                  <div
                                    className='d-flex d-column justify-content-center align-items-center'
                                    style={{ height: '100%' }}
                                  >
                                    <Card.Img
                                      className='justify-content-center align-items-center'
                                      variant='Top'
                                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                      style={{
                                        height: '18rem',
                                        width: 'auto',
                                        position: 'relative',
                                      }}
                                    />
                                    <Card.Body className='d-column movieCard'>
                                      <Card.Title className='movieCardTitle' style={{ color: 'white', borderRadius: '1rem', padding: '0.5rem' }}>
                                        {movie.title}
                                      </Card.Title>
                                    </Card.Body>
                                  </div>
                                </div>
                              </Card>
                            </CardGroup>
                          </Carousel.Item>
                        ))}
                      </Carousel>
                    </div>
                  )}
                </div>
              )}
            </div>

        </div>
      );
      
}






export default TrendingMovieCard



