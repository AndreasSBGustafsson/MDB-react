import { Card, Carousel, Modal } from "react-bootstrap"
import { Backdrop, MovieInfo, Result } from "../../types/MovieInfo.type"
import { useEffect, useState } from "react"
import { ActorInfo } from "../../types/ActorInfo.types"


type Props = {
    data?:MovieInfo|undefined
    data2?:MovieInfo|undefined
    data3?:ActorInfo|undefined
    title:string
}


const MoiveImgCarousel = ({data, data2,data3, title }: Props) => {

  const [cardTitle, setCardTitle] = useState("")
  const [showModal, setShowModal] = useState(false)
  const handleModalClose = () => setShowModal(false)
  const handleModalShow = () => setShowModal(true)

  useEffect(() => {
      setCardTitle(title)      
  },[title])

    return (
        <>
        {data && (
        <>
          {data?.images.backdrops.length!==0 && (
            <>
            <h2>{cardTitle}</h2>
              <Carousel
              indicators={false}
              interval={null}
              >  
                {data?.images.backdrops.map((img:Backdrop, index) => (
                    <Carousel.Item key={index}>
                      <Card>
                          {img &&(
                          <>
                          <Card.Img 
                              className='justify-content-center align-items-center'
                              variant="Top" 
                              src={`https://image.tmdb.org/t/p/w500${img.file_path}`}
                              onClick={handleModalShow}
                              style={{
                                height:'50%',
                                backdropFilter: `blur(12px)`
                              }}
                          />
                          </>
                          )}
                          <Modal show={showModal} onHide={handleModalClose} size="lg">
                            <Modal.Header closeButton></Modal.Header>
                            <Modal.Body>
                              <img 
                                src={`https://image.tmdb.org/t/p/w500${img.file_path}`}
                                style={{ width: '100%', height: 'auto' }} />
                            </Modal.Body>
                          </Modal>
                      </Card>
                    </Carousel.Item>
                ))
                }
              </Carousel>
          </>
          )}
        </>
        )}

        {data2 && (
        <>
          {data2?.videos.results.length!==0&& (
            <>
            <h2>{cardTitle}</h2>
              <Carousel
              indicators={false}
              interval={null}
              >  
                {data2?.videos.results.map((video:Result, index) => (   
                    <Carousel.Item key={index}>
                      <Card>
                          <>
                          <iframe 
                            width="100%" 
                            height="420" 
                            src={`https://www.youtube.com/embed/${video.key}`} 
                            title="YouTube video player" 
                            allow="accelerometer; autoplay;
                              clipboard-write; 
                              encrypted-media; 
                              gyroscope; 
                              picture-in-picture" 
                            allowFullScreen
                          />
                          </>
                      </Card>
                    </Carousel.Item>
                  
                ))
                }
              </Carousel>
          </>
          )}
        </>
        )}
              
        {data3 && (
          
          <>
            <h2>{cardTitle}</h2>
            <Carousel
            indicators={false}
            interval={null}
            >
              {data3.images.profiles.map((img, index) => ( 
              <Carousel.Item key={index} >
                      <Card>
                        {img &&(
                          <>
                            <Card.Img 
                                className='justify-content-center align-items-center'
                                variant="Top" 
                                src={`https://image.tmdb.org/t/p/w500${img.file_path}`}
                                onClick={handleModalShow}
                                style={{
                                  height:'50%',
                                  backdropFilter: `blur(12px)`
                                }}
                            />
                            <Modal show={showModal} onHide={handleModalClose} size="lg">
                              <Modal.Header closeButton></Modal.Header>
                              <Modal.Body>
                                <img 
                                  src={`https://image.tmdb.org/t/p/w500${img.file_path}`}
                                  style={{ width: '100%', height: 'auto' }} />
                              </Modal.Body>
                            </Modal>
                          </>
                          )}
                      </Card>
              </Carousel.Item>
              ))}
            </Carousel>
            </>
        )}
        </>
  )
}


export default MoiveImgCarousel

           




