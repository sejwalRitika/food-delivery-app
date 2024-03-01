import React, { useState } from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import Logo from '../../assets/logo/logo.png';
import '../../styles/Headerstyle.css';
const Header = () =>{
const [nav, setNav]= useState(false);

// srcoll Navbar
const changeValueOnScroll =() =>{
const srcollValue = document?.documentElement?.scrollTop;
srcollValue > 100 ? setNav(true) : setNav(false)
}
window.addEventListener('scroll',changeValueOnScroll )
return(
<header>
 <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""}`}>
      <Container>
        <Navbar.Brand href="#home">
<NavLink to="/" className="logo">
<img src={Logo} alt="Logo" className="img-fluid"/>
</NavLink>

</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink}to="/home">Home</Nav.Link>
            <Nav.Link as={NavLink}to="/about">About</Nav.Link>
 <Nav.Link as={NavLink}to="/menu">Our Menu</Nav.Link>
 <Nav.Link as={NavLink}to="/shop">Shop</Nav.Link>
 <Nav.Link as={NavLink}to="/blog">Blog</Nav.Link>
 <Nav.Link as={NavLink}to="/contact">Contact</Nav.Link>
<Nav.Link as={NavLink}to="/">
<div className="cart">
<i className="bi bi-bag fs-5"></i>
<em className="roundponit">2</em>
</div>
</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
)
}
export default Header;
