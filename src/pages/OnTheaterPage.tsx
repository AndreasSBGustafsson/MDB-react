import { useQuery } from '@tanstack/react-query'
import * as TMBD from '../services/TMDBAPI'
import ResultCard from '../components/ResultCard'


type Props = {}

const Result = (props: Props) => {

const {
  data
} = useQuery(['onTheater'],TMBD.getOnTheaterMovie)


  return (
      <>
       <div>On Theater</div>
        {!data && <div>Loading...</div>}
        {data?.results && data.results.length === 0 && <div>No results</div>}
        <ResultCard
        data={data}
        />
        </>
  )
}


export default Result