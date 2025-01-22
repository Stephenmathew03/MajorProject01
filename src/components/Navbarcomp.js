import { useAuth0 } from "@auth0/auth0-react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./index.css";

function Navbarcomp() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginWithRedirect({
        appState: { returnTo: window.location.pathname }
      });
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

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
            </Nav>
            <Nav className="ms-auto">
              {isAuthenticated ? (
                <div className="d-flex align-items-center">
                  <span className="options mx-2">
                    Welcome, {user?.name || "Guest"}!
                  </span>
                  <button
                    className="auth-button"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  className="auth-button"
                  onClick={handleLogin}
                >
                  Log In
                </button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="page-content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default Navbarcomp;