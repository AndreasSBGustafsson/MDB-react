import { Card, CardGroup, Carousel, Modal } from "react-bootstrap"
import { Backdrop, Images, MovieInfo, Result, Videos} from "../types/MovieInfo.type"
import { useEffect, useState } from "react"
import { ActorInfo, Profile } from "../types/ActorInfo.types"


type Props = {
    data?:MovieInfo|undefined
    data2?:Videos|undefined
    data3?:ActorInfo|undefined
    title:string
}


const MoiveImgCarousel = ({data, data2,data3, title}: Props) => {

  const [cardTitle, setCardTitle] = useState("")
  const [showModal, setShowModal] = useState(false)
  const handleModalClose = () => setShowModal(false)
  const handleModalShow = () => setShowModal(true)

  useEffect(() => {
      setCardTitle(title)
      console.log(title);
      console.log(data3);
      
      
  }
  ,[title])

  return (

    <>
    <h2>{cardTitle}</h2>
    <Carousel
    indicators={false}
    slide={false}

    >
 
 {data && (
  data?.images.backdrops.map((img:Backdrop, index) => (
    <Carousel.Item key={index} /* style={{ width: '18rem' }} */>
        <CardGroup /* className='justify-content-center align-items-center' */>
            <Card>
                {img &&(
                  <>
                <Card.Img 
                    className='justify-content-center align-items-center'
                    variant="Top" 
                    src={`https://image.tmdb.org/t/p/w500${img.file_path}`}
                    style={{
                      height:'18rem',
                      width:'auto',
                      backdropFilter: `blur(12px)`
                    }}
                    onClick={handleModalShow}
                />
                        <Modal show={showModal} onHide={handleModalClose} size="lg">
                            <Modal.Header closeButton></Modal.Header>
                            <Modal.Body>
                              <img src={`https://image.tmdb.org/t/p/w500${img.file_path}`} style={{ width: '100%', height: 'auto' }} />
                            </Modal.Body>
                          </Modal>
                </>
                    )}
                    {/* {img.file_path===null&&(
                      <>
                      <Card.Img variant="top" src={`https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg`}
                      style={{
                        height:'18rem',
                        width:'50%',
                        backdropFilter: `blur(12px)`
                    }} />
                    </>
                    )} */}
            </Card>
        </CardGroup>
    </Carousel.Item>
))
)}

{data2 && (

            data2?.results.map((video:Result, index) => (
       
              <Carousel.Item key={index}
              className="justify-content-center align-items-center"
              >
                <iframe
                className="d-block w-100"
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${video.key}`}
                  allowFullScreen
                  title='video'
                />
              </Carousel.Item>

            ))
)}

{data3 && (

  data3.images.profiles.map((img, index) => ( 
    <Carousel.Item key={index} /* style={{ width: '18rem' }} */>
        <CardGroup /* className='justify-content-center align-items-center' */>
            <Card>
                {img &&(
                  <>
                <Card.Img 
                    className='justify-content-center align-items-center'
                    variant="Top" 
                    src={`https://image.tmdb.org/t/p/w500${img.file_path}`}
                    style={{
                      height:'18rem',
                      width:'auto',
                      backdropFilter: `blur(12px)`
                    }}
                    onClick={handleModalShow}
                />
                        <Modal show={showModal} onHide={handleModalClose} size="lg">
                            <Modal.Header closeButton></Modal.Header>
                            <Modal.Body>
                              <img src={`https://image.tmdb.org/t/p/w500${img.file_path}`} style={{ width: '100%', height: 'auto' }} />
                            </Modal.Body>
                          </Modal>
                </>
                    )}
            </Card>
        </CardGroup>
    </Carousel.Item>
))
)}


          </Carousel>
          </>
        )}


export default MoiveImgCarousel

           
