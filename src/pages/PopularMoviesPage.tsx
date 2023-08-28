import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useQuery } from '@tanstack/react-query'
import * as TMBD from '../services/TMDBAPI'
import { Link, useNavigate,} from 'react-router-dom'
import { Card,} from 'react-bootstrap'
import { GenreObjects } from '../types/Genre.types'
import ResultCard from '../components/ResultCard'


type Props = {}

const Result = (props: Props) => {

const [genreList, setGenreList] = React.useState<number[]>([])

const navigate =useNavigate()

const {
  data
} = useQuery(['popularMovies'],TMBD.getPopularMovies)

/* const {
  data: gen,
  refetch,
} = useQuery(['genre'],()=> TMBD.getGenres(genreList)) */

/* const submit = (e:any) => {
console.log("u pressed submit");
  refetch()
} */

  return (
      <>
       <div>Popular Movies</div>
        {!data && <div>Loading...</div>}
        {data?.results && data.results.length === 0 && <div>No results</div>}
        <ResultCard
        data={data}
        />
        </>
  )
}


export default Result