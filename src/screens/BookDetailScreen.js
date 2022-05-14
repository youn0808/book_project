import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";

const BookDetailScreen = () => {
  const params = useParams();
  const params_olid = params.olid;
  // const location = useLocation();
  const {book} = this.props.location.state;
  console.log(book); // undefined

  // console.log(location.myCustomProps);

  // const book = location.state;

  // https://covers.openlibrary.org/b/olid/OL24333153M-L.jpg
  let coverImage = "http://covers.openlibrary.org/b/olid/";
  return (
    <>
      {/* <Link className="btn btn-light my-3" to="/"></Link>
      <Row>
        <Col md={6}>
          <Image src={`${coverImage}+${params_olid}+-L.jpg`} fluid></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{book.title}</h3>
            </ListGroup.Item>

            <ListGroup.Item>Description: {book.description}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row> */}
    </>
  );
};

export default BookDetailScreen;
