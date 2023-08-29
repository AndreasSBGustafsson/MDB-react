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

     {!data && <div>Loading...</div>}
     {data?.credits && data.credits.cast.length === 0 && <div>No results</div>}

     {data?.credits.cast && (
      <>
        {data.credits.cast.map((cast: Cast, index) => (
          <Card
            key={index}
          >
            <div className='d-flex'
            >
              
              <Card.Img onClick={()=>navigate(`/actor/${cast.id}`)}variant="bottom" src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} style={{height:'10rem', width:'auto'}}/>
              
                <Card.Body /* style={{flexDirection:'column'}} */
                 style={{
                  wordBreak: 'break-word'
                }}>
                  <Card.Title as={Link} to={`/actor/${cast.id}`}>{cast.name}</Card.Title>
                  <Card.Text style={{
                    fontSize:'0.8rem',
                    }}
                    >
     
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