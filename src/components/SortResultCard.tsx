import React, { useContext, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Card,} from 'react-bootstrap'
import { GenreList, GenreObjects } from '../types/Genre.types'
import { ResultContext, ResultUpdateContext } from '../context/Context'
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from '@tanstack/react-query'
import { MoviesArray } from '../types/MoviesArray.type'

type Props = {
  data: GenreList| undefined
  submit: () => void
}

const SortResultCard = ({submit, data}: Props) => {

const [genreList, setGenreList] = React.useState<number[]>([])
const [selectedGenres, setSelectedGenres] = React.useState<string[]>([])


const {updateGenreList} = useContext(ResultContext)
     
    

      useEffect(() => {
        updateGenreList(genreList)
      }
      , [genreList])

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
           {data?.genres.map((genre: GenreObjects) => (
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
           <Button onClick={submit} variant="primary">Submit</Button>
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

