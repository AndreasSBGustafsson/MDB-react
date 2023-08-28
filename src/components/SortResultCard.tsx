import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useQuery } from '@tanstack/react-query'
import * as TMBD from '../services/TMDBAPI'
import { Link, useNavigate,} from 'react-router-dom'
import { Card,} from 'react-bootstrap'
import { GenreObjects } from '../types/Genre.types'
import { Movie } from '../types/MoviesArray.type'
import { Cast } from '../types/Credits.types'


type Props = {
}

const SortResultCard = (props: Props) => {

const [genreList, setGenreList] = React.useState<number[]>([])
const [selectedGenres, setSelectedGenres] = React.useState<string[]>([])


    const {
        data:genre
      } = useQuery(['genreList'],TMBD.getGenreList)
      
      const {
        data: Genres,
        refetch,
      } = useQuery(['genre'],()=> TMBD.getGenres(genreList))
      
      
      const submit = (e:any) => {
      console.log("u pressed submit");
        refetch()
      }



  return (
    <>
     {/* farligt döpt kod nedan! */}
     <div
     style={{
       color:'white',
       }}
     >Genre</div>
       <Card
       className='bg-dark'
         style={{
           color:'white',
         }}
           >
         <Form
         >
           {genre?.genres.map((genre: GenreObjects) => (
             <Form.Check
               key={genre.id}
               type="checkbox"
               label={genre.name}
               value={genre.id}
               checked={genreList.includes(genre.id)} // Set checkbox checked based on genreList
               onChange={(e) => {
                 const genreId = Number(e.target.value);
                 if (e.target.checked) {
                   setGenreList((prevGenreList) => [...prevGenreList, genreId])
                   setSelectedGenres((prevSelectedGenres) => [...prevSelectedGenres, genre.name])
                 } else {
                   setGenreList((prevGenreList) =>
                     prevGenreList.filter((id) => id !== genreId)
                   )
                   setSelectedGenres((prevSelectedGenres) =>
                   prevSelectedGenres.filter((name) => name !== genre.name)
                 )     
                 }
               }}
             />
           ))}
           <Button onClick={(e)=>submit(e)} variant="primary">Submit</Button>
         </Form>
       </Card>
       
        
         <div style={{
            color:'white',
            fontSize:'1.2rem',
            margin:'0.5rem',
            }}  
            >
          {selectedGenres.join(', ')}</div>
    </>
  )
}

export default SortResultCard