import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import NavLink from "react-bootstrap/NavLink"
import Container from 'react-bootstrap/Container';
import logo from '../images/teamLogo.jpg'

function Header() {
    return(
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className='justify-content-between'>
            <Container id="header">
                <Navbar.Brand href="/" className='align-items-center mx-3'><img id="logo" src={logo} alt="company logo"></img></Navbar.Brand>
                {/* This is the hamburger menu */}
                <Navbar.Toggle  className='mx-3' aria-controls="navbarScroll" data-bs-targets="#navbarScroll"></Navbar.Toggle>
                {/* pre collapsed navbar */}
                <Navbar.Collapse className="justify-content-end" id="navbarScroll">
                <Nav className='align-items-end px-4 navLinks'>
                    <NavLink eventKey="1" href="/" >Home</NavLink>
                    <NavLink eventKey="2" href="/reports" >Reports</NavLink>
                    <NavLink eventKey="3" href="/find us" >Contact</NavLink>
                    <NavLink eventKey="4" href="/squad" >Squad</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>        
        </Navbar>
    )
}

export default Header;