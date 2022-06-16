import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className='pt-4'>
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
                            className="me-2 input-bg border border-white"
                            aria-label="Search"
                            />
                            <Button variant="btn btn-light">Search</Button>
                        </Form>
                        <Nav
                            className="my-2 my-lg-c0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='text-decoration-none text-light navlink' to='/news'>News</Link>
                            <Link className='text-decoration-none text-light navlink' to='/destination'>Destination</Link>
                            <Link className='text-decoration-none text-light navlink' to='/blog'>Blog</Link>
                            <Link className='text-decoration-none text-light navlink' to='/contact'>Contact</Link>
                        </Nav>
                            <Button className='ms-3' variant="warning"><Link className='text-decoration-none text-dark' to='/login'>Login</Link></Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;