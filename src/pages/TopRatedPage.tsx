import React, { useEffect } from 'react'

import { useQuery } from '@tanstack/react-query'
import * as TMBD from '../services/TMDBAPI'
import ResultCard from '../components/ResultCard'
import Bytasida from '../components/Bytasida'


type Props = {}

const Result = (props: Props) => {

  const [page, setPage] = React.useState<number>(1)
  const [totalPages, setTotalPages] = React.useState<number>(1)


const {
  data,
  refetch
} = useQuery(['topRated'],()=>TMBD.getTopRatedMovies(page))

useEffect(() => {
  setPage(1)
  if (data) {
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
       <div>Top Rated</div>
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