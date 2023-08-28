import React from 'react'
import { MovieInfo } from '../types/MovieInfo.type'
import { Card } from 'react-bootstrap'

type Props = {
    data:MovieInfo|undefined
}

const MovieOverview = ({data}: Props) => {
  return (
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
            height:'100%',
            /* backdropFilter:'blur(6px)' */
        }}>
          <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} style={{
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
              {data.title}
              <Card.Body style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Card.Text>{data.tagline}</Card.Text>
          </Card.Body>
            </Card.Title>
              {data.release_date}
              <Card.Body style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
                className="square border">
                <Card.Text>Genres: {data.genres.map((genre) => genre.name).join(', ')}</Card.Text>
              </Card.Body>
            <Card.Text className="me-3">
              {data.overview}
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
            <Card.Text>Rating: {data.vote_average}</Card.Text>
          </Card.Body>
          <Card.Body>
          </Card.Body>
          <Card.Body style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Card.Text>Spoken Languages: {data.spoken_languages.map((language) => language.name).join(', ')}</Card.Text>
          </Card.Body>
          <Card.Body style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Card.Text>Runtime: {data.runtime}</Card.Text>
          </Card.Body>
          <Card.Body style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Card.Text>Budget: {data.budget}</Card.Text>
          </Card.Body>
          <Card.Body style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Card.Text>Revenue: {data.revenue}</Card.Text>
          </Card.Body>
          <Card.Body style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Card.Text>Popularity: {data.popularity}</Card.Text>
          </Card.Body>
          <Card.Body style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Card.Text>Original Language: {data.original_language}</Card.Text>
          </Card.Body>
          <Card.Body style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Card.Text>Original Title: {data.original_title}</Card.Text>
          </Card.Body>
        </Card>
  </>
  )}
  </>
  )
}

export default MovieOverview