import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";

const BookDetailScreen = () => {
  const [data, setData] = useState("");
  const [year, setYear] = useState("");
  const [infoURL, setInfoURL] = useState("");
  const location = useLocation();
  let navigate = useNavigate();
  //extract book inforatmion
  const book = location.state.book;
  const title = book.title;
  const olid = book.olid;
  const authors = book.authors;
  const subjects = book.subjects;

  let coverImage = `http://covers.openlibrary.org/b/olid/` + olid + "-L.jpg";

  // fetch selected book detail inforamtion
  useEffect(() => {
    const fetchDetailBook = async () => {
      const response = await fetch(
        `https://openlibrary.org/api/books?bibkeys=OLID:${olid}&jscmd=details&format=json`
      );

      if (!response.ok) {
        throw new Error("Response error");
      }
      const responseData = await response.json();
      setData(responseData[`OLID:${olid}`]);
      setYear(responseData[`OLID:${olid}`].details.publish_date);
      setInfoURL(responseData[`OLID:${olid}`].info_url);
    };
    fetchDetailBook();
  }, [olid]);

  return (
    <>
      {/* Go back btn */}
      <Row>
        <Col md={8}>
          <h3>Book detail</h3>
        </Col>
        <Col md={4}>
          {" "}
          <Button onClick={() => navigate(-1)} className=" btn-light my-3">
            Go Back
          </Button>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <a href={infoURL === "undefined" ? null : infoURL}>
            <Image
              width="350px"
              src={coverImage}
              fluid
              alt="book cover img"
            ></Image>
          </a>
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <a href={infoURL} style={{ textDecoration: "none" }}>
                <h3>{title}</h3>
              </a>
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
                Subject Detail
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              Publish year: {year ? year : "No year"}
            </ListGroup.Item>
            <ListGroup.Item>
              <a href={infoURL}>Description Link</a>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default BookDetailScreen;
