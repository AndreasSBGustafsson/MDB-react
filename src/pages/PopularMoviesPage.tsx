import React, { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import * as TMBD from '../services/TMDBAPI'
import ResultCard from '../components/ResultCard'
import Bytasida from '../components/Partial/Bytasida'


const Result = () => {

  const currentPage = sessionStorage.getItem('currentPagePopularMovies')
  const initialPage = currentPage ? parseInt(currentPage) : 1
  const [page, setPage] = React.useState<number>(initialPage)

  const handleNextClick = () => {
    const pageToSave = page + 1
    sessionStorage.setItem('currentPagePopularMovies', pageToSave.toString());
    setPage(page + 1)
  }
  
  const handlePreviousClick = () => {
    const pageToSave = page - 1
    sessionStorage.setItem('currentPagePopularMovies', pageToSave.toString());
    setPage(page - 1)
  }

  const {
    data,
    isFetching:isLoading,
    isError:error,
    refetch
  } = useQuery(['popularMovies'],()=>TMBD.getPopularMovies(page))

  const totalPages = data?.total_pages || 1

  useEffect(() => {
    refetch()
  }
  , [page, refetch])

  return (
      <>
      {data &&<div onClick={()=>setPage(1)}>Popular Movies</div>}
        {data?.results && data.results.length === 0 && <div>No results</div>}
        <ResultCard
        data={data}
        loading={isLoading}
        error={error}
        />
        <Bytasida
        page={page}
        totalPages={totalPages}
        loading={isLoading}
        onNextClick={handleNextClick} // Increment page for Next click
        onPreviousClick={handlePreviousClick} 
        />
        </>
  )
}


export default Result