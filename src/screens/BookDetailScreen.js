import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";

const BookDetailScreen = () => {
  // const params = useParams();

  const location = useLocation();

  const { title } = location.state;
  const { olid } = location.state;
  const { authors } = location.state;
  const subjects = location.state.subjects;
  // console.log(location.state.subjects);
  // const { subjects } = location.state;

  const { isbn } = location.state;
  // console.log(location.state);

  // console.log(location.myCustomProps);

  // const book = location.state;

  // https://covers.openlibrary.org/b/olid/OL24333153M-L.jpg

  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  let coverImage = `http://covers.openlibrary.org/b/olid/` + olid + "-L.jpg";

  //fetch a selected book detail data
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://openlibrary.org/api/books?bibkeys=OLID:${olid}&jscmd=details&format=json`
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setLoading(false));
  }, [olid]);
  // const val = `OLID:${olid}`;
  // console.log(data[val]);
  const bookDetailObj = data[`OLID:${olid}`];
  console.log(bookDetailObj);
  const infoURL = `${bookDetailObj?.info_url}`;
  const year = bookDetailObj?.details.publish_date;

  // console.log(bookDetailObj?.details.publish_date);

  // const myOlid = {
  //   s: sl,
  // };
  // console.log(data[OLID:OL7050533M);

  // console.log(`${data}.OLID:${olid}`);

  return (
    <>
      <Link className="btn btn-light my-3" to="/"></Link>
      <Row>
        <Col md={6}>
          <a href={infoURL}>
            <Image src={coverImage} fluid></Image>
          </a>
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{title}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              Authors :
              {authors.map((author, index) => {
                return index === authors.length - 1 ? (
                  <span key={index}>{author.name} </span>
                ) : (
                  <span key={index}>{author.name}, </span>
                );
              })}
            </ListGroup.Item>

            <ListGroup.Item>
              <Link to={`/${olid}/subject`} state={{ subjects: subjects }}>
                Subject
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>Publish year: {year}</ListGroup.Item>
            {/* <ListGroup.Item>Openlibrary:{infoURL}</ListGroup.Item> */}
            <ListGroup.Item>Description Info:</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default BookDetailScreen;
