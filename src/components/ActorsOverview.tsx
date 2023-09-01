import Card from 'react-bootstrap/Card'
import { ActorInfo } from '../types/ActorInfo.types'

type Props = {
    data:ActorInfo|undefined
}

const ActorOverview = ({data}: Props) => {

    return (
            <>
                <Card>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${data?.profile_path}`}
                    style={{
                        width:'70%',
                        objectFit:'cover',
                        display:'table',
                        margin:'0 auto',
                    }}
                    />
                    <Card.Body>
                        <Card.Title>
                            {data?.name}
                        </Card.Title>
                        <Card.Text
                        style={{
                            padding:'1rem',
                        }}>
                            {data?.biography}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </>
    )
}

export default ActorOverview