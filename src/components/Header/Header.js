import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logoLight from '../../images/logo-light.png';
import logoDark from '../../images/logo-dark.png';
import './Header.css';

const Header = () => {
    const { pathname } = useLocation();

    let loginStyle, color;
    if(pathname === '/login' || pathname === '/register'){
        loginStyle = {
            backgroundColor: "white"
        };
        color = 'text-dark';
    }
    else{
        color = 'text-light';
    }

    return (
        <div style={loginStyle}>
            <Navbar expand="lg" className='pt-4'>
                <Container>
                    <Navbar.Brand className='me-5'>
                        <Link to='/home'><img style={{width: '100px'}} src={ pathname === '/login' ? logoDark : pathname === '/register' ? logoDark : logoLight } alt="" /></Link>
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
                            <Button variant="outline-light">Search</Button>
                        </Form>
                        <Nav
                            className="my-2 my-lg-c0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className={`text-decoration-none ${color} navlink`} to='/news'>News</Link>
                            <Link className={`text-decoration-none ${color} navlink`} to='/destination'>Destination</Link>
                            <Link className={`text-decoration-none ${color} navlink`} to='/blog'>Blog</Link>
                            <Link className={`text-decoration-none ${color} navlink`} to='/contact'>Contact</Link>
                        </Nav>
                        <Link className='text-decoration-none text-dark' to='/login'><Button className='ms-3' variant="warning">Login</Button></Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;