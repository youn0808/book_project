import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
// import Book from "../components/Book";

const SubjectScreen = () => {
  const params = useParams();
  const params_subject = params.id;
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState("");
  useEffect(() => {
    setLoading(true);
    fetch(`https://openlibrary.org/subjects/${params_subject}.json?limit=10`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setLoading(false));
  }, []);

  const books = data.works;

  return (
    <>
      <h3>Subject:{params_subject} </h3>
      <span>Number of serached books:{data.work_count}</span>

      <ListGroup variant="flush">
        {books?.map((book) => {
          return (
            <ListGroup.Item key={book.cover_edition_key}>
              <a href={`/${book.cover_edition_key}`}>{book.title}</a>
            </ListGroup.Item>
          );
        })}
      </ListGroup>

      {/* <Row>
        {books?.map((book, index) => (
          <Col key={book.cover_edition_key} sm={12} md={6} lg={4} xl={3}>
            <Book book={book}></Book>
          </Col>
        ))}
      </Row>
      <ul>
        {books?.map((item, i) => {
          return <li key={i}>{item.title}</li>;
        })}
      </ul> */}
    </>
  );
};

{
  /* <Row>
  {products.map((product) => (
    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
      <Product product={product} />
    </Col>
  ))}
</Row>; */
}

export default SubjectScreen;

// /subjects/love.json?details=true
