import { useContext, useEffect, useState } from 'react'
import ResultCard from '../components/ResultCard'
import SortResultCard from '../components/SortResultCard'
import Bytasida from '../components/pagination/Bytasida'
import useGenreList from '../hooks/useGenreList'
import useGenres from '../hooks/useGenres'
import { ResultContext } from '../context/Context'
import LoadingDots from '../components/spinners/LoadingDots'

const Result = () => {

  const { genreListContext } = useContext(ResultContext);

  // Get the current page from sessionStorage
  const storedPage = sessionStorage.getItem('currentPage')
  const initialPage = storedPage ? parseInt(storedPage, 10) :1
  
  // Initialize state using the stored current page
  const [page, setPage] = useState<number>(initialPage)
  const [totalPages, setTotalPages] = useState<number>(1)


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


  //Updates and resets page number on genre update
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

  //Updates genres
  useEffect(()=>{
    refetch()
    if (genres)
      setTotalPages(genres.total_pages)
  },[genreListContext, page])

  //Updates total pages (needed here for it to display on refetching!)
  useEffect(()=>{
    if (genres)
     setTotalPages(genres.total_pages)
  }, [genres])

  return (
    <>
      {isLoadingGenreList && isLoadingGenres ?(
         <LoadingDots /> 
      ):(
        <>
          {errorGenreList || errorGenres ? <div>Something went wrong...</div>:
            <>
              <SortResultCard
                submit={handleSortSubmit}
                data={genreList}
                error={errorGenreList}
                loading={isLoadingGenres}
              />

              <ResultCard
                data={genres}
                error={errorGenres}
                loading={isLoadingGenres}
              />

              <Bytasida
                page={page}
                totalPages={totalPages}
                loading={isLoadingGenres}
                error={errorGenres}
                onNextClick={handleNextClick}
                onPreviousClick={handlePreviousClick}
              />
            </>
          }
        </>
      )}
    </>
  )
}

export default Result