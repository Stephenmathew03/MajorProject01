import { useAuth0 } from "@auth0/auth0-react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./index.css";

function Navbarcomp() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/home" className="title">
            HotelGenie
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto justify-content-start">
              <Nav.Link as={Link} to="/home" className="options">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="options">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="options">
                Contact Us
              </Nav.Link>
              {isAuthenticated && (
                <>
                  <span className="options mx-2">
                    Welcome, {user?.name || "Guest"}!
                  </span>
                  <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Logout
                  </button>
                </>
              )}
              {!isAuthenticated && (
                <button onClick={() => loginWithRedirect()}>Log In</button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Navbarcomp;