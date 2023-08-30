import Button from 'react-bootstrap/Button'
import { Link, useNavigate,} from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { MoviesArray } from '../types/MoviesArray.type'
import LoadingDots from './Spinners/LoadingDots'


type Props = {
    data:MoviesArray|undefined
    error:boolean
    loading:boolean
}

const Result = ({ data,loading, error }: Props) => {
  const navigate = useNavigate();
  

  return (
    <>
      {error && <div>Something went wrong ...</div>}
      {loading &&(<><LoadingDots/></>)}
      {data && data.results.length === 0 &&<div>No results</div>}

     

      {data && (
        <>        
          {data.results.map((movie: any, index) => (
            <Card
              key={index}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                marginTop: '1rem',
                  marginBottom: '1rem', 
                display: 'flex', 
                flexDirection: 'row', 
              }}
            >
              <div
                className="d-flex"
                style={{
                  height: '12rem',
                  width: '100%',
                  flexDirection: 'row',
                  
                }}
              >
                <Card.Img
                  onClick={() =>{!loading&&navigate(`/movie/${movie.id}`)}}
                  variant="bottom"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  style={{ height: 'auto', width: 'auto' }}
                  className="rounded-start"
                />

                <Card.Body
                style={{
                  backgroundColor: 'white',
                  flex: '1', 
                  display: 'flex',
                  width: '100%',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
                  className="overflow-hidden overflow-fade rounded-end"
                >
                  
                  <div style={{ height: '100%' }}>
                    <Card.Title 
                    onClick={() =>{!loading&&navigate(`/movie/${movie.id}`)}}>
                      {movie.title}
                    </Card.Title>

                    <Card.Text
                        style={{
                          fontSize:'0.8rem',
                          height:'auto',
                        }}
                        
                        >
                        {movie.overview}
                    </Card.Text>

                    <Link to={`/movie/${movie.id}`}>
                    <Button
                       style={{
                        backgroundColor: 'grey',
                        color: 'white',
                        position: 'absolute',
                        bottom: '1rem',
                        left: '1rem',
                        zIndex: '1',
                        boxShadow: '0px 0px 10px 0px rgba(225,225,225,0.75)',
                      }}
                      className=""
                      variant=""
                      disabled={loading}
                    >
                      Se mer
                    </Button>
                  </Link>
                  </div>
                </Card.Body>
              </div>
            </Card>
          ))}
        </>
      )}
    </>
  )
}

export default Result;
