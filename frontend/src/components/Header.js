import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'

// https://react-bootstrap.github.io/components/navbar/
/* <Navbar.Brand href="/">ProShop</Navbar.Brand> when not <LinkContainer>*/ 
const Header = () => {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch( logout() )
    }

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>ProShop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to='/cart'>
                                <Nav.Link>
                                    <li className="fas fa-shopping-cart"></li>
                                    Cart
                                </Nav.Link>
                            </LinkContainer>

                            { userInfo ? (
                                <NavDropdown title={userInfo.name} id='username' >
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <LinkContainer to='/login'>
                                    <Nav.Link>
                                        <li className="fas fa-user"></li>
                                        Sign in
                                    </Nav.Link>
                                </LinkContainer>
                            ) }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
