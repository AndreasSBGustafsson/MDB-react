import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink, Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { Dropdown } from 'react-bootstrap';


const Navigation = () =>{
    return (
       <Navbar bg="dark" variant="dark" expand="lg">
              <Container>
                <Navbar.Brand as={Link} to="/">AMDB</Navbar.Brand>
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
                     <Form>
                          <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                          {/* <Button variant="outline-success">Search</Button> */}
                     </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
    )
}

export default Navigation