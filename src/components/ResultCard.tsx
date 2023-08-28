import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link, useNavigate,} from 'react-router-dom'
import { Card,} from 'react-bootstrap'
import { MoviesArray } from '../types/MoviesArray.type'


type Props = {
    data:MoviesArray|undefined
    
}

const Result = ({data}: Props) => {
    
    const [selectedGenres, setSelectedGenres] = React.useState<string[]>([])
    
    const navigate =useNavigate()

    console.log('All data: ',data);
    


  return (
    <>
   
        {!data && <div>Loading...</div>}
        {data && data.results.length === 0 && <div>No results</div>}

        {data &&(
          <>
          
          
            {data.results.map((movie: any, index) => (
              <Card
              key={index}
              style={{
                /* backgroundColor:'255,255,255,1, 0.5', */
                backgroundColor:'rgba(0,0,0,0.5)',
                margin:'1rem',
              }}
              >
                <div className='d-flex' key={movie.id}
                >
                  
                  <Card.Img onClick={()=>navigate(`/movie/${movie.id}`)}
                  variant="bottom"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  style={{height:'10rem', width:'auto'}}
                  className='rounded-start'/>
                  
                    <Card.Body /* style={{flexDirection:'column'}} */
                     style={{
                      wordBreak: 'break-word',
                      backgroundColor:'white'
,
                    }}>
                      <Card.Title as={Link} to={`/movie/${movie.id}`}>{movie.title}</Card.Title>
                      <Card.Text style={{
                        fontSize:'0.8rem',
                        
                        }}
                        >
                        {movie.genre_ids.name}
                        
                        {movie.overview}
                      </Card.Text>
                      <Link to={`/movie/${movie.id}`}>
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


export default Result