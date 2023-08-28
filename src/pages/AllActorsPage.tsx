import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useQuery } from '@tanstack/react-query'
import * as TMBD from '../services/TMDBAPI'
import { Link, useNavigate, useParams,} from 'react-router-dom'
import { Card,} from 'react-bootstrap'
import { GenreObjects } from '../types/Genre.types'
import { Movie } from '../types/MoviesArray.type'
import { Cast } from '../types/Credits.types'
import ResultCard from '../components/ResultCard'
import ActorsResultCard from '../components/ActorsResultCard'


type Props = {
    id?:number
}

const Result = (props: Props) => {

const {id} = useParams()
const movieId = Number(id)

const {
  data
} = useQuery(['movie'],()=>TMBD.getMovie(movieId))

/* const {
  data: gen,
  refetch,
} = useQuery(['genre'],()=> TMBD.getGenres(genreList)) */

/* const submit = (e:any) => {
console.log("u pressed submit");
  refetch()
} */

  return (
    <ActorsResultCard
    data={data}
    />
  )
  
}


export default Result



