import React from 'react'
import { useQuery } from '@tanstack/react-query'
import * as TMBD from '../services/TMDBAPI'
import ResultCard from '../components/ResultCard'
import { useEffect } from 'react'
import Bytasida from '../components/Partial/Bytasida'


const Result = () => {

  const currentPage = sessionStorage.getItem('currentPageOnTheater')
  const initialPage = currentPage ? parseInt(currentPage) : 1
  const [page, setPage] = React.useState<number>(initialPage)

  const handleNextClick = () => {

    const pageToSave = page + 1
    sessionStorage.setItem('currentPageOnTheater', pageToSave.toString());
    setPage(page + 1)
  }
  
  const handlePreviousClick = () => {

    const pageToSave = page - 1
    sessionStorage.setItem('currentPageOnTheater', pageToSave.toString())
    setPage(page - 1)
  }

  const {
    data,
    refetch,
    isFetching:isLoading,
    isError:error,
  } = useQuery(['popularMovies'],()=>TMBD.getOnTheaterMovie(page))

  const totalPages = data?.total_pages || 1

  useEffect(() => {
    refetch()
  },[page, refetch])

  return (
      <>
      <div onClick={()=>setPage(1)}>On Theater</div>
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
        onNextClick={handleNextClick} 
        onPreviousClick={handlePreviousClick}
        />
        </>
  )
}


export default Result