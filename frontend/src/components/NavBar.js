import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./nav.css"
import {Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';



function NavScroll(props) {
  
  const history = useNavigate();
  const dispatch =useDispatch();
  const userLogin = useSelector(state=> state.userLogin);

  const {userInfo} = userLogin;

  function logoutHandler (){

    dispatch(logout());
    history("/");
  }

  const name = props.name;
  return (
    <Navbar expand="lg" className="brown">
      <Container fluid >
        <Navbar.Brand href="/">
        <Link to="/">Notes App</Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="mynotes">
              
              <Link to="/mynotes">My Notes</Link>
              </Nav.Link>
    
            <NavDropdown title={name} id="navbarScrollingDropdown">
              <NavDropdown.Item onClick ={logoutHandler
              }>Logout</NavDropdown.Item>
             {/*  <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action5">
                Settings
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;