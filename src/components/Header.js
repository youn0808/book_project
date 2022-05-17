import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header title="Header">
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to="/subjects">
            BookList
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
