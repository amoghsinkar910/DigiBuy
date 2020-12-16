import React from 'react'
import {Navbar,Nav, Container} from 'react-bootstrap'

const Header = () =>{
    return(
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">DigiBuy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="/cart"><i className='hlogo fas fa-shopping-cart'></i>Cart</Nav.Link>
                    <Nav.Link href="/login"><i className='hlogo fas fa-user'></i>Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    );
}
export default Header