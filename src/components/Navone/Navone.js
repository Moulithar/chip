import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import logo from "./assets/images/logo.png";
import "./assets/styles/index.css";

const Navone= ()=> {

  return (
    <>
    <div className="navone">
      <Navbar expand="lg">
        <Container >
          <Navbar.Brand href="#">
            <img src={logo} className="logo" alt="" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
               style={{ maxHeight: '100px' }}
               navbarScroll
            >
            
                <Nav.Link href="#home">Home</Nav.Link>

                <NavDropdown title="Discover" id="basic-nav-dropdown">
                   <NavDropdown.Item href="#action/3.1">
                    action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    next
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                  action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4"> Separated link</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Pages" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4"> Separated link</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#home">Contact</Nav.Link> 

            </Nav>

                <div className="d-flex gap-2 navbtn">
                  <Button className="button2">Apps</Button>
                  <Button className="button1">Support</Button>
                </div>
            </Navbar.Collapse>
          </Container>
      </Navbar>
    </div>
    </>
    
  );
}

export default Navone;