import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css"

const MyNavbar = () => {
  return (
    <>
      <Navbar
        // fixed="top"
        // variant="primary"
        expand="md"
        className="sticky-top animate-navbar nav-theme justify-content-between"
      >
        <div>
          <Navbar.Brand href="#home">
            <img className="logo" src={'https://i.ibb.co/t4RkDb4/gm-logo.png'} alt="" />
          </Navbar.Brand>
        </div>

        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="color-light text-center " id="basic-navbar-nav">
            <Nav className="mr-auto rainbow-text">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="https://drive.google.com/file/d/1LVEbNjtKagJZhabYZC3ammm2wsczxcuY/view?usp=sharing">Resume</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#blogs">Blogs</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>

      </Navbar>
    </>
  );
};

export default MyNavbar;
