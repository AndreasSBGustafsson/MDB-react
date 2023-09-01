const setPageSessionStorage = (data:string) => {
  
  console.log("setPage was triggered");
  if(data === 'popularmovies') {sessionStorage.setItem('currentPagePopularMovies', '1')}
  else if(data === 'toprated'){ sessionStorage.setItem('currentPageTopRated', '1')}
  else if(data === 'ontheater') {sessionStorage.setItem('currentPageOnTheater', '1')}
  else if(data === 'trending')  {sessionStorage.setItem('currentPageTrending', '1')}
   
}

export default setPageSessionStorage



