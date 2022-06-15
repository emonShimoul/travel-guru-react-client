import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#" className='me-5'>
                        <img style={{width: '100px'}} src={logo} />
                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex me-auto">
                            <Form.Control
                            type="search"
                            placeholder="Search Your Destination..."
                            className="me-2 pe-5"
                            aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav
                            className="my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">News</Nav.Link>
                            <Nav.Link href="#action2">Destination</Nav.Link>
                            <Nav.Link href="#action2">Blog</Nav.Link>
                            <Nav.Link href="#action2">Contact</Nav.Link>
                            <Button className='ms-3' variant="warning">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;