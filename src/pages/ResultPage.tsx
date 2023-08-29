import React, { useContext, useEffect } from 'react'

import ResultCard from '../components/ResultCard'
import SortResultCard from '../components/SortResultCard'
import Bytasida from '../components/Bytasida'
import useGenreList from '../hooks/useGenreList'
import useGenres from '../hooks/useGenres'
import { ResultContext } from '../context/Context'


type Props = {}

const Result = (props: Props) => {

const [page, setPage] = React.useState<number>(1)
const [totalPages, setTotalPages] = React.useState<number>(1)

const {genreListContext} = useContext(ResultContext)

const {
  data: gen,
} = useGenreList(true)

const {
  data: genres,
  refetch,
} = useGenres(genreListContext, page)

const handleSortSubmit = () => {
  console.log("u pressed submit");
  setPage(1)
  refetch()
  setTotalPages(totalPages)
}

useEffect(() => {
  setPage(1)
  if (genres) {
    setTotalPages(genres.total_pages)   
  }
}
, [])

useEffect(() => {
  refetch()
}
, [page])





  return (
    <>
    <SortResultCard
    submit={handleSortSubmit}
    data={gen}
    />
    <ResultCard
    data={genres}
    />
    <Bytasida
    page={page}
    totalPages={totalPages} // Pass the total number of pages as needed
    onNextClick={() => setPage(page + 1)} // Increment page for Next click
    onPreviousClick={() => setPage(page - 1)} // Decrement page for Previous click
    />
    </>
  )
}


export default Result