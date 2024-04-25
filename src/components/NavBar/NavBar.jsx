import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';
import './NavBar.css';

const NavBar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Fragment>
            <Navbar fixed="top" collapseOnSelect expand="lg" className={`${sticky ? 'navbgcolor' : ''}`}>
                <Navbar.Brand as={NavLink} to="/" exact><img src={logo} alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to="/" exact className={`${sticky ? 'text-red' : 'text-white'}`} activeClassName="active-link">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/services" className={`${sticky ? 'text-red' : 'text-white'}`} activeClassName="active-link">Services</Nav.Link>
                        <Nav.Link as={NavLink} to="/portfolio" className={`${sticky ? 'text-red' : 'text-white'}`} activeClassName="active-link">Portfolio</Nav.Link>
                        <Nav.Link as={NavLink} to="/courses" className={`${sticky ? 'text-red' : 'text-white'}`} activeClassName="active-link">Courses</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" className={`${sticky ? 'text-red' : 'text-white'}`} activeClassName="active-link">Contact</Nav.Link>
                        <Nav.Link as={NavLink} to="/about" className={`${sticky ? 'text-red' : 'text-white'}`} activeClassName="active-link">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    );
};

export default NavBar;
