import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useQuery } from '@tanstack/react-query'
import * as TMBD from '../services/TMDBAPI'
import { Link, useNavigate,} from 'react-router-dom'
import { Card,} from 'react-bootstrap'
import { GenreObjects } from '../types/Genre.types'
import ResultCard from '../components/ResultCard'
import SortResultCard from '../components/SortResultCard'


type Props = {}

const Result = (props: Props) => {

const [genreList, setGenreList] = React.useState<number[]>([])
const [selectedGenres, setSelectedGenres] = React.useState<string[]>([])


const navigate =useNavigate()

const {
  data
} = useQuery(['genreList'],TMBD.getGenreList)

const {
  data: gen,
  refetch,
} = useQuery(['genre'],()=> TMBD.getGenres(genreList))

const submit = (e:any) => {
console.log("u pressed submit");
  refetch()
}

  return (
    <>
    <SortResultCard/>
    <ResultCard
    data={gen}
    />
    </>
  )
}


export default Result