
 export const getVisited = () => {
    let visitedFromStorage = localStorage.getItem('visited')
    let visitedToStorage = visitedFromStorage ? JSON.parse(visitedFromStorage) :[]
    return visitedToStorage
  }


  export const visitedMovie = (movieId:number) => {

    let initialVisited:number[] = []

    let visitedFromStorage = localStorage.getItem('visited')
    console.log(typeof visitedFromStorage);
    
    let parsedVisited:number[] = visitedFromStorage ? JSON.parse(visitedFromStorage) :null

    console.log(parsedVisited);
    
    //Store 10 latest visited movies
    if(parsedVisited !== null){
    if(!parsedVisited.includes(movieId)){
      
      parsedVisited = [movieId, ...parsedVisited].slice(0, 10)
      localStorage.setItem('visited', JSON.stringify(parsedVisited))
     }

    } else{
      initialVisited.push(movieId)
      return localStorage.setItem('visited', JSON.stringify(initialVisited))
    }}


    export const getVisitedArray = () => {
      const storedVisited = localStorage.getItem('visited')
    let visitedArray:number[] = storedVisited ? JSON.parse(storedVisited) :[]
    return visitedArray
  }





