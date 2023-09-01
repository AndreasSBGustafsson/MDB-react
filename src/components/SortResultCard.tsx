import React, { useContext, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import { Card,} from 'react-bootstrap'
import { GenreList, GenreObjects } from '../types/Genre.types'
import { ResultContext} from '../context/Context'
import LoadingDots from './spinners/LoadingDots'

type Props = {
  data: GenreList| undefined
  submit: () => void
  loading: boolean
  error: boolean
}

const SortResultCard = ({submit, data, error, loading }: Props) => {

  const currentGenreList = sessionStorage.getItem('genreList')
  const initialGenreList = currentGenreList ? JSON.parse(currentGenreList) : []
  const currentGenres = sessionStorage.getItem('selectedGenres')
  const initialGenres = currentGenres ? JSON.parse(currentGenres): []
  const [genreList, setGenreList] = React.useState<number[]>(initialGenreList)
  const [selectedGenres, setSelectedGenres] = React.useState<string[]>(initialGenres)

  const {updateGenreList} = useContext(ResultContext)
      
  useEffect(() => {
    const savedSelectedGenres = sessionStorage.getItem('selectedGenres')
    const savedGenreList = sessionStorage.getItem('genreList')
    if (savedSelectedGenres) {
      setSelectedGenres(JSON.parse(savedSelectedGenres))
    }
    if (savedGenreList) {
      setGenreList(JSON.parse(savedGenreList))
    }
  }, [])

  useEffect(() => {
    // Save selected genres and genreList to session storage when they change
    sessionStorage.setItem('selectedGenres', JSON.stringify(selectedGenres))
    sessionStorage.setItem('genreList', JSON.stringify(genreList))

    // Update genreList in the context
    updateGenreList(genreList)
    
  }, [selectedGenres, genreList])


  return (
    <>
    {error ? <></>:(
      <>
      <div style={{color:'white',}}>Genre</div>
       <Card className='bg-dark'style={{color:'white',}}>
         <Form>
           {data?.genres.map((genre: GenreObjects) => (
             <Form.Check onClick={submit}
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
         </Form>
       </Card>
         <div style={{
            color:'white',
            fontSize:'1.2rem',
            margin:'0.5rem',
            display:'flex',
            justifyContent:'space-between',
            }}  
            >
          {selectedGenres.length===0 ? selectedGenres.join(' '):selectedGenres.join(',')}
          {loading && <LoadingDots />}
          </div>
      </>
    )}
    </>
  )
}

export default SortResultCard