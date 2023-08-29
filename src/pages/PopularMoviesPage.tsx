import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useQuery } from '@tanstack/react-query'
import * as TMBD from '../services/TMDBAPI'
import { Link, useNavigate,} from 'react-router-dom'
import { Card,} from 'react-bootstrap'
import { GenreObjects } from '../types/Genre.types'
import ResultCard from '../components/ResultCard'
import Bytasida from '../components/Bytasida'


type Props = {}

const Result = (props: Props) => {

  const [page, setPage] = React.useState<number>(1)
  const [totalPages, setTotalPages] = React.useState<number>(1)

const {
  data,
  refetch
} = useQuery(['popularMovies'],()=>TMBD.getPopularMovies(page))

/* const {
  data: gen,
  refetch,
} = useQuery(['genre'],()=> TMBD.getGenres(genreList)) */

/* const submit = (e:any) => {
console.log("u pressed submit");
  refetch()
} */

useEffect(() => {
  if (data) {
    setPage(data.page)
    setTotalPages(data.total_pages)   
  }
}
, [])

useEffect(() => {
  refetch()
}
, [page])

  return (
      <>
       <div>Popular Movies</div>
        {!data && <div>Loading...</div>}
        {data?.results && data.results.length === 0 && <div>No results</div>}
        <ResultCard
        data={data}
        />
        <Bytasida
        page={page}
        totalPages={totalPages}
        onNextClick={() => setPage(page + 1)} // Increment page for Next click
        onPreviousClick={() => setPage(page - 1)} 
        />
        </>
  )
}


export default Result