import { Card } from "react-bootstrap"
import { useQuery } from "@tanstack/react-query"
import * as TMBD from '../services/TMDBAPI'
import { useParams, Link } from "react-router-dom"
import ActorsOverview from "../components/ActorsOverview"
import ActorCarousel from "../components/ActorCarousel"

type Props = {}

const MoviePage = (props: Props) => {

  const { id } = useParams()
  const actorId = Number(id)



  const {
    data: actor,
  } = useQuery(['actor'],()=>TMBD.getActor(actorId))


  return (
    <>
    <ActorsOverview
    data={actor}
    />
    <ActorCarousel
    data={actor}
    />
    </>
  )
}



export default MoviePage

    // <>
    //     <Card>
    //         <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${actor?.profile_path}`}
    //         style={{
    //             width:'70%',
    //             objectFit:'cover',
    //             display:'table',
    //             margin:'0 auto',
    //         }}
    //         />
    //         <Card.Body>
    //             <Card.Title>
    //                 {actor?.name}
    //             </Card.Title>
    //             <Card.Text>
    //                 {actor?.biography}
    //             </Card.Text>
    //         </Card.Body>

    //         <Card.Body
    //             style={{
    //                /*  display: 'flex',
    //                 justifyContent: 'space-between',
    //                 alignItems: 'center', */
    //                 width:'auto',
    //             }}
    //         >
    //             <Card.Title>
    //                 Played as:
    //             </Card.Title>
    //             {actor?.credits.cast.map((movie, index)=>(
    //                 <>
        
    //     {movie.poster_path &&(
    //     <div key={index}
    //     style={{
    //         background:`url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
    //         backgroundSize:'cover',
    //         textAlign:'center',
    //         borderRadius:'10px',
    //         margin:'4px',
    //     }}
    //     >
    //         <div style={{
    //               textAlign: 'center',
    //               display: 'table',
    //               margin: '0 auto',
    //               width: '10%',
    //         }}>

            
    //     <Card.Text style={{
    //        /*  alignSelf:'center',
    //         fontSize:'18px',
    //         borderRadius:'50px',
    //         boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75)',
    //         backdropFilter: 'blur(6px)',
    //         width:'auto', */
    //         color:'white',
    //         }}
    //         >
    //         {movie.character}</Card.Text>
    //     <Card.Text 
    //         style={{
    //            /*  alignSelf:'center',                                                                                                                 
    //             fontSize:'18px',
    //             borderRadius:'50px',
    //             boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75)',
    //             backdropFilter: 'blur(6px)',
    //             width:'auto', */
    //             color:'white',
    //             }} 
    //         as={Link} to={`/movie/${movie.id}`}
    //         >
    //             {movie.title}
    //         </Card.Text>
    //     <Card.Text
    //     className="mb-5"
    //     style={{
    //        /*  alignSelf:'center',
    //         fontSize:'18px',
    //         borderRadius:'50px',
    //         boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75)',
    //         backdropFilter: 'blur(6px)',
    //         width:'auto', */
    //         color:'white',
    //     }}
    //     >{movie.release_date}</Card.Text>
    //     </div>
    //     </div>  
        
    //             )}

    //     {movie.poster_path === null &&(
    //         <div key={index}
    //         style={{
    //             background:`url(https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg)`,
    //             backgroundSize:'cover',
    //             textAlign:'center',
                
                
    //         }}
    //         >
    //             <div style={{
    //                   textAlign: 'center',
    //                   display: 'table',
    //                   margin: '0 auto',
    //                   width: '10%',
                      
    //             }}>


    //         <Card.Text style={{
    //             /*  alignSelf:'center',

    //             fontSize:'18px',
    //             borderRadius:'50px',
    //             boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75)',
    //             backdropFilter: 'blur(6px)',
    //             width:'auto', */
               
    //             color:'dark',
    //             }}
    //             >
    //             {movie.character}</Card.Text>
    //         <Card.Text
    //             style={{
    //                 /*  alignSelf:'center',
    //                 fontSize:'18px',
    //                 borderRadius:'50px',
    //                 boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75)',
    //                 backdropFilter: 'blur(6px)',
    //                 width:'auto', */
    //                 color:'dark',
    //                 }}
    //             as={Link} to={`/movie/${movie.id}`}
    //             >
    //                 {movie.title}
    //             </Card.Text>
    //         <Card.Text
    //         className="mb-5"
    //         style={{
    //             /*  alignSelf:'center',
    //             fontSize:'18px',
    //             borderRadius:'50px',
    //             boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75)',
    //             backdropFilter: 'blur(6px)',
    //             width:'auto', */
    //             color:'dark',
    //         }}

    //         >{movie.release_date}</Card.Text>
    //         </div>
    //         </div>  
    //                 )}
    //             </>
    //     ))
    //     }
               
    //         </Card.Body>
    //     </Card>
    // </>

