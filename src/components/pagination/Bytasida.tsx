import { Button } from 'react-bootstrap'
import LoadingSpinnerSm from '../spinners/LoadingSpinnerSm'

type Props = {
    data?:any
    page:number
    totalPages:number
    loading:boolean
    error:boolean
    onNextClick:()=>void
    onPreviousClick:()=>void
}

const Bytasida = ({page, totalPages, loading, error, onNextClick,onPreviousClick}: Props) => {
  return (
    <>
    {!error ? (
    <>
    {totalPages>1 &&(
      
    <div style={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        }}
        >

          
          
    <Button variant='dark' onClick={onPreviousClick} disabled={page===1 || loading}>Previous</Button>
    <div  className='d-flex'>{page}/{totalPages}
    <div style={{position:'absolute', right:'25%' }}className='loadingSpinnerSm'>{loading &&<LoadingSpinnerSm/>}</div>
    <div style={{position:'absolute', left:'30%' }}className='loadingSpinnerSm'>{loading &&<LoadingSpinnerSm/>}</div>
    </div>
    <Button variant='dark' onClick={onNextClick} disabled={page===totalPages || loading}>Next</Button>
    </div>
  )}
  </>
  ):(
    <div></div>
  )
  }
  </>
  )
}

export default Bytasida