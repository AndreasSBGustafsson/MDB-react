import Button from 'react-bootstrap/Button'
import { Link, useNavigate,} from 'react-router-dom'
import { Card,} from 'react-bootstrap'
import { MoviesArray } from '../types/MoviesArray.type'


type Props = {
    data:MoviesArray|undefined
    
}

const Result = ({ data }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      {!data && <div>Loading...</div>}
      {data && data.results.length === 0 && <div>No results</div>}

      {data && (
        <>
          {data.results.map((movie: any, index) => (
            <Card
              key={index}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                // margin: '1rem',
            
                marginTop: '1rem',
                  marginBottom: '1rem', // Add some padding around the image
                display: 'flex', // Use flexbox for layout
                flexDirection: 'row', // Arrange contents in a row
              }}
            >
              <div
                className="d-flex"
                style={{
                  height: '12rem',
                  width: '100%',
                  flexDirection: 'row', // Arrange the contents in a row
                  
                }}
              >
                <Card.Img
                  onClick={() => navigate(`/movie/${movie.id}`)}
                  variant="bottom"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  style={{ height: 'auto', width: 'auto' }}
                  className="rounded-start"
                />
                <Card.Body
                style={{
                  backgroundColor: 'white',
                  flex: '1', // Allow content to expand to fill height
                  display: 'flex',
                  width: '100%',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                   // Distribute space within the body
                 /*  padding: '1rem', // Add padding to separate content */
                }}
                  className="overflow-hidden overflow-fade rounded-end"
                >
                  <div style={{ height: '100%' }}>
                    <Card.Title as={Link} to={`/movie/${movie.id}`}>
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
  );
};

export default Result;
