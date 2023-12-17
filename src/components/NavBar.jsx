import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className='logo' NavLink to="/">Py<span>Script</span></Navbar.Brand>
          <Nav className="nav-menu d-flex gap-3 justify-space-around">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/about">About</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar