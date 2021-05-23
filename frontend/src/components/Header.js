import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

// https://react-bootstrap.github.io/components/navbar/
const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">ProShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link href="/cart">
                            <li className="fas fa-shopping-cart"></li>
                            Cart
                        </Nav.Link>
                        <Nav.Link href="/login">
                            <li className="fas fa-user"></li>
                            Link
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
