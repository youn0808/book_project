import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer title="Footer">
      <Container>
        <Row>
          <Col className="text-center py-3">Openlibrary API</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
