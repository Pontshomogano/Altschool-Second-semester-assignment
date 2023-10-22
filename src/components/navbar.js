import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { DeleteLocalStorage } from "./authentication/localstorage";
import "./navbar.css";

import { Link } from "react-router-dom";

const NavbarComponent = (props) => {
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="nav-wrap">
          <Navbar.Brand href="#home">MOGANO App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link className="navLinker" to="/">
                  {" "}
                  Home{" "}
                </Link>
              </Nav.Link>

              <Nav.Link href="#link">
                <Link className="navLinker" to="/signin">
                  {" "}
                  Sign-in{" "}
                </Link>
              </Nav.Link>

              <Nav.Link href="#link">
                <Link className="navLinker" to="/contact">
                  {" "}
                  Contact Us{" "}
                </Link>
              </Nav.Link>
              {/*  */}

              <Nav.Link>
                <Link to="/signin">
                  <Button
                    onClick={() => {
                      DeleteLocalStorage("moganoapp");
                    }}
                    className="btn btn-danger"
                  >
                    LOGOUT
                  </Button>
                </Link>
              </Nav.Link>

              {/* <Nav.Link href="#link">
                <Link to="/signin">
                  <Button variant="primary">Logout</Button>
                </Link>
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
