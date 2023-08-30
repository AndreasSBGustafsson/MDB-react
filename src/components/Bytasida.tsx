import { Button } from 'react-bootstrap'

type Props = {
    page:number
    totalPages:number
    onNextClick:()=>void
    onPreviousClick:()=>void
}

const Bytasida = ({page, totalPages, onNextClick,onPreviousClick}: Props) => {
  return (

    <>
  
    <div style={{
        display:'flex',
        justifyContent:'space-between',
        width:'100%',
        }}
        >
    <Button onClick={onPreviousClick} disabled={page===1}>Previous</Button>
    <div>{page}/{totalPages}</div>
    <Button onClick={onNextClick} disabled={page===totalPages}>Next</Button>
    </div>
  
    </>
  )
}

export default Bytasida