import { useContext, useEffect, useState } from 'react'
import ResultCard from '../components/ResultCard'
import SortResultCard from '../components/SortResultCard'
import Bytasida from '../components/Partial/Bytasida'
import useGenreList from '../hooks/useGenreList'
import useGenres from '../hooks/useGenres'
import { ResultContext } from '../context/Context'
import LoadingDots from '../components/Spinners/LoadingDots'

const Result = () => {
  const { genreListContext } = useContext(ResultContext);

  // Get the current page from sessionStorage
  const storedPage = sessionStorage.getItem('currentPage')
  const initialPage = storedPage ? parseInt(storedPage, 10) :1

  // Initialize state using the stored current page
  const [page, setPage] = useState<number>(initialPage)
  const [totalPages, setTotalPages] = useState<number>(0)

  // Fetch genre list
  const { 
    data: genreList,
    isLoading: isLoadingGenreList,
    isError: errorGenreList 
  } = useGenreList()

  // Fetch genres
  const {
    data: genres,
    isFetching: isLoadingGenres,
    isError: errorGenres,
    refetch,
  } = useGenres(genreListContext, page)

  const handleSortSubmit = () => {
    setPage(1)
    sessionStorage.setItem('currentPage', '1')
  }

  const handleNextClick = () => {
    const nextPage = page + 1;
    sessionStorage.setItem('currentPage', nextPage.toString())
    setPage(nextPage)
  }

  const handlePreviousClick = () => {
    const prevPage = Math.max(1, page - 1);
    sessionStorage.setItem('currentPage', prevPage.toString())
    setPage(prevPage)
  }

  useEffect(() => {
    refetch()
    if (genres) 
      setTotalPages(genres.total_pages)
  }, [genreListContext, page, genres])

  useEffect(() => {
    setPage(1)
    if (genres) 
      setTotalPages(genres.total_pages)
      refetch()
  }, [genreListContext])

  useEffect(() => {
    if (genres) 
      setTotalPages(genres.total_pages)
      setPage(initialPage)
  }, [genres])

  useEffect(() => {

    refetch()
  }, [page])

  return (
    <>
      {isLoadingGenreList && isLoadingGenres ? <LoadingDots /> :
      <>
      {errorGenreList || errorGenres ? <div>Something went wrong...</div>:
      <>
      <SortResultCard
      submit={handleSortSubmit}
      data={genreList}
      error={errorGenreList} />

      <ResultCard
      data={genres}
      error={errorGenres}
      loading={isLoadingGenres}
      />

      <Bytasida
        page={page}
        totalPages={totalPages}
        loading={isLoadingGenres}
        onNextClick={handleNextClick}
        onPreviousClick={handlePreviousClick}
      />
      </>
      }
      </>
      }
    </>
  )
}

export default Result