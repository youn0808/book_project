import React from "react";
import { Form, FormControl, Button, Navbar, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  let navigate = useNavigate();
  const onSearchHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${e.target[0].value}`);
  };

  return (
    <header title="Header">
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to="/">
            BookList
          </Navbar.Brand>

          <Form onSubmit={onSearchHandler} className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button type="submit" variant="outline-success">
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
