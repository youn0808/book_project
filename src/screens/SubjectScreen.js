import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Post from "../components/Post";

const SubjectScreen = () => {
  const params = useParams();
  const params_subject = params.id;

  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  const [books, setBooks] = useState([]);
  const [data, setData] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(
        `https://openlibrary.org/subjects/${params_subject}.json?limit=160`
      );

      if (!response.ok) {
        throw new Error("Response error");
      }
      const responseData = await response.json();
      const books = responseData.works;
      const loadedBooks = [];

      for (const key in books) {
        loadedBooks.push({
          id: key,
          title: books[key].title,
          olid: books[key].cover_edition_key,
          subjects: books[key].subject,
          authors: books[key].authors,
          isbn:
            books[key].availability === null ? "null" : books[key].availability,
        });
      }

      setData(responseData);
      setBooks(loadedBooks);
      setIsLoading(false);
    };
    fetchBooks().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [params_subject]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <>
      <Row>
        <Col md={8}>
          <h3>List of "{params_subject}" subject books</h3>
          <span>Number of serached books:{data.work_count}</span>
        </Col>
        <Col md={4}>
          {" "}
          <Button onClick={() => navigate(-1)} className=" btn-light my-3">
            Go Back
          </Button>
        </Col>
      </Row>

      <Post books={books} loading={isLoading} />
    </>
  );
};

export default SubjectScreen;
