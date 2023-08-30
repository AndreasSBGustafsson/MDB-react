import { MovieInfo } from '../types/MovieInfo.type'
import { Card } from 'react-bootstrap'
import LoadingDots from './Spinners/LoadingDots'

type Props = {
    data:MovieInfo|undefined
    loading:boolean
}

const MovieOverview = ({data,loading}: Props) => {

  return (
    <>
    {loading ? <LoadingDots/> : 
    <>
    {data?.credits &&(
        <>
        <Card>
        <div className='
            d-flex
            flex-column
            align-items-center
            '
          style={{
              background:`url(https://image.tmdb.org/t/p/w500${data.backdrop_path})`,
              backgroundSize:'cover',
              backgroundPosition:'center',
              height:'100%',
              width:'100%',
          }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} style={{
              width:'30%',
              minWidth:'200px',
              height:'auto',
              objectFit:'cover',
              padding:'2rem',
              borderRadius:'3rem',
            }}
            />
          </div>

          <Card.Body 
            style={{
              justifyContent: 'space-between',
              alignContent: 'center',
            }}
            className="
              d-flex
              flex-column
              align-items-center"
            >

            <Card.Title className=" flex-column, text-center">
              {data.title}
                <Card.Text style={{font:'italic'}}>{data.tagline}</Card.Text>
            </Card.Title>

              {data.release_date}
              
                <Card.Text>{data.genres.map((genre) => genre.name).join(' ')}</Card.Text>
             
                {data.overview!==''&&(            
                <Card.Text className="me-3">
              {data.overview}
                </Card.Text>
                )}
          
            {data.vote_average!==0&&(
            <Card.Text>Rating: {data.vote_average}</Card.Text>
            )}
          
            {data.spoken_languages.length!==0&&(
            <Card.Text>Spoken Languages: {data.spoken_languages.map((language) => language.name).join(', ')}</Card.Text>
            )}
          
            {data.runtime!==0&&(
            <Card.Text>Runtime: {data.runtime}</Card.Text>
            )}
          
            {data.budget!==0&&(
            <Card.Text>Budget: {data.budget}</Card.Text>
            )}

            {data.revenue!==0&&(
            <Card.Text>Revenue: {data.revenue}</Card.Text>
            )}
            
            {data.popularity!==0&&(
            <Card.Text>Popularity: {data.popularity}</Card.Text>
            )}
            
            {data.original_language!==''&&(
            <Card.Text>Original Language: {data.original_language}</Card.Text>
            )}

          </Card.Body>
         
        </Card>
        </>
        )}
        </>
        }
        </>
  )
}

export default MovieOverview