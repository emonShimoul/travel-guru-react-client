import React from 'react';
import { Button, Container, Form, InputGroup, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand className='me-5'>
                        <Link to='/home'><img style={{width: '100px'}} src={logo} /></Link>
                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex me-auto">
                            <Form.Control
                            type="search"
                            placeholder="Search Your Destination..."
                            className="me-2 pe-5 input-bg border border-white"
                            aria-label="Search"
                            />
                            <Button variant="outline-dark">Search</Button>
                        </Form>
                        <Nav
                            className="my-2 my-lg-c0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link><Link className='text-decoration-none text-dark' to='/news'>News</Link></Nav.Link>
                            <Nav.Link><Link className='text-decoration-none text-dark' to='/destination'>Destination</Link></Nav.Link>
                            <Nav.Link><Link className='text-decoration-none text-dark' to='/blog'>Blog</Link></Nav.Link>
                            <Nav.Link><Link className='text-decoration-none text-dark' to='/contact'>Contact</Link></Nav.Link>
                            <Button className='ms-3' variant="warning"><Link className='text-decoration-none text-dark' to='/login'>Login</Link></Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;