import { Button, Card } from 'react-bootstrap'
import { MovieInfo } from '../types/MovieInfo.type'
import { Cast } from '../types/Credits.types'
import { Link, useNavigate } from 'react-router-dom'

type Props = {
    data:MovieInfo | undefined
}

const ActorsResultCard = ({data}: Props) => {
    
const navigate =useNavigate()

  return (
    <>
      <div>Actors in {data?.title} </div>
      {data?.credits.cast && (
        <>
          {data.credits.cast.map((cast: Cast, index) => (
            <Card
              key={index}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                marginTop: '1rem',
                marginBottom: '1rem',
                display: 'flex', 
                flexDirection: 'row',
              }}>
              <div className='d-flex'
                style={{
                  height: '12rem',
                  width: '100%',
                  flexDirection: 'row',
                }}>
                <Card.Img onClick={()=>navigate(`/actor/${cast.id}`)}variant="bottom"
                  src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                  style={{height:'auto', width:'auto'}}
                  className="rounded-start"/>
                <Card.Body
                  style={{
                    backgroundColor: 'white',
                    flex: '1',
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                  className="overflow-hidden rounded-end"
                >
                  <div style={{ height: '100%' }}>
                    <Card.Title as={Link} to={`/actor/${cast.id}`}>{cast.name}</Card.Title>
                    <Card.Text 
                      style={{
                      fontSize:'0.8rem',
                      height:'auto',
                      }}>
                    <Card.Text>
                      {cast.character}
                    </Card.Text>
                    <Card.Text>
                      {cast.known_for_department}
                    </Card.Text>
                    <Card.Text>
                      {cast.original_name}
                    </Card.Text>
                    </Card.Text>
                    <Link to={`/actor/${cast.id}`}>
                      <Button variant="primary" >Se mer</Button>
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

export default ActorsResultCard