import React, { Component, useEffect, useState } from 'react';
import  { Fragment} from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import logo from '../../assets/images/logo.jpg';
import './NavBar.css'

     const NavBar =() => {
      const [sticky, setSticky] = useState(false);
      useEffect(() =>{
        window.addEventListener('scroll', ()=>{
          window.scrollY > 100 ? setSticky(true): setSticky(false)

        })

      });

        return (
     <Fragment>
     <Navbar fixed='top'  collapseOnSelect expand="lg" className={` ${sticky? 'navbgcolor' : '' }` } >
        <Navbar.Brand href="#hero"><img src={logo} alt="" ></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">        
          </Nav>
          <Nav>
          <Nav.Link href="#hero" className='text-white'>HOME</Nav.Link>
            <Nav.Link href="#service" className='text-white'>SERVICES</Nav.Link>
            <Nav.Link href="#projects" className='text-white'>PORTFOLIO</Nav.Link>
            <Nav.Link href="#courses" className='text-white'>COURSES</Nav.Link>            
            <Nav.Link href="#contact" className='text-white'>CONTACT</Nav.Link>
            <Nav.Link href="#footer" className='text-white'>ABOUT</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
    </Navbar>
            </Fragment>
        );
    }


export default NavBar;