import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink, Link} from 'react-router-dom'
import logo from '../assets/scss/logo.png'

const Navigation = () =>{
    return (
       <Navbar bg="dark" variant="dark" expand="lg">
              <Container>
               
                <Navbar.Brand as={Link} to="/">
                    <img
                    src={logo}
                    style={{
                         justifySelf:'center',
                         height:'2rem',
                         marginRight:'0.5rem',
                         marginLeft:'0.5rem',
                         borderRadius:'50%',
                         border:'1px solid white',
                         padding:'0.1rem',

                    }}
                    width="30"
                    height="30"
                    className="d-inline-block align-top rounded"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="me-auto">
                          <Nav.Link as={NavLink} to="/" >Home</Nav.Link>
                          <NavDropdown title="Categories">
                              <NavDropdown.Item as={NavLink} to="/result/popularmovies" >Popular Movies</NavDropdown.Item>
                              <NavDropdown.Item as={NavLink} to="/result/ontheater" >On Theater</NavDropdown.Item>
                              <NavDropdown.Item as={NavLink} to="/result/toprated" >Top Rated</NavDropdown.Item>
                              </NavDropdown>
                          <Nav.Link as={NavLink} to="/result" >Genres</Nav.Link>
                     </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
    )
}

export default Navigation