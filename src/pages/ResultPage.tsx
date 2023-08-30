import React, { useContext, useEffect } from 'react'
import ResultCard from '../components/ResultCard'
import SortResultCard from '../components/SortResultCard'
import Bytasida from '../components/Bytasida'
import useGenreList from '../hooks/useGenreList'
import useGenres from '../hooks/useGenres'
import { ResultContext } from '../context/Context'

const Result = () => {

  // Get the current page from sessionStorage
  const currentPage = sessionStorage.getItem('currentPage');
  const initialPage = currentPage ? parseInt(currentPage) : 1;
  const [page, setPage] = React.useState<number>(initialPage);
  const [totalPages, setTotalPages] = React.useState<number>(1);

const {genreListContext} = useContext(ResultContext)

// Save the current page to sessionStorage when changing pages
const handleNextClick = () => {
  const pageToSave = page + 1;
  sessionStorage.setItem('currentPage', pageToSave.toString());
  setPage(page + 1);
};

const handlePreviousClick = () => {
  const pageToSave = page - 1;
  sessionStorage.setItem('currentPage', pageToSave.toString());
  setPage(page - 1);
};

const {
  data: gen,
} = useGenreList(true)

const {
  data: genres,
  refetch,
} = useGenres(genreListContext, page)

//fetch genres on page button click
useEffect(() => {
  refetch(); // Fetch movies when genreList or page changes
  if (genres)
  setTotalPages(genres?.total_pages)
}, [page, genreListContext]);


//update total pages
useEffect(() => {
  if (genres) {
    setTotalPages(genres.total_pages) 
    refetch() 
  }
}
, [genres])


const handleSortSubmit = () => {
  console.log("u pressed submit");
  setPage(1)
  const pageToSave = 1;
  sessionStorage.setItem('currentPage', pageToSave.toString());

}

//fetch genres on page load
useEffect(() => {
  setPage(currentPage ? parseInt(currentPage) : 1)
},[])

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
    onNextClick={handleNextClick } // Increment page for Next click
    onPreviousClick={handlePreviousClick} // Decrement page for Previous click
    />
    </>
  )
}


export default Result