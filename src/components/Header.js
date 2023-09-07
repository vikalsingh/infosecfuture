import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./../index.css";
import {
  Image,
  Nav,
  Navbar,
  Container,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { Images } from "../utils/Images";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={Images.logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="menuLink">
              For Employer
            </Nav.Link>
            <Nav.Link href="#link" className="menuLink">
              For Recruiter
            </Nav.Link>
            <Nav.Link href="#link" className="menuLink">
              For Jobseeker
            </Nav.Link>
            <Nav.Link href="#link" className="menuLink">
              About us
            </Nav.Link>
            <Nav.Link href="#link" className="menuLink">
              FAQ's
            </Nav.Link>
            <Nav.Link href="#link" className="loginMenu">
              Login
            </Nav.Link>

            <Link to={"/register"}>
              {" "}
              <Button id="registerBtn" type="submit">
                Register
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
