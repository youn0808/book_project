import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Pagination from "../components/Pagination";
const SearchBookScreen = () => {
  let navigate = useNavigate();
  const params = useParams();
  const search_target = params.search;
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [books, setBooks] = useState([]);
  const [data, setData] = useState("");

  const gobackHandler = (e) => {
    navigate(`/`);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(
        `http://openlibrary.org/search.json?title=${search_target}&jscmd=details`
      );

      if (!response.ok) {
        throw new Error("Response error!!");
      }
      const responseData = await response.json();
      const books = responseData.docs;
      const loadedBooks = [];

      for (const key in books) {
        console.log(books[key]);
        loadedBooks.push({
          id: key,
          title: books[key].title ? books[key].title : "No title",
          olid: books[key].cover_edition_key
            ? books[key].cover_edition_key
            : "No Olid",
          subjects: books[key].subject ? books[key].subject : "No subjects",
          authors: books[key].author_name
            ? books[key].author_name
            : "No authors",
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
  }, [search_target]);

  if (isLoading) {
    return <h2>Loading...</h2>;
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
          <h3>Search :"{search_target}" </h3>
        </Col>

        <Col md={4}>
          {" "}
          <Button onClick={gobackHandler} className=" btn-light my-3">
            Go Back
          </Button>
        </Col>
      </Row>

      <Pagination books={books} loading={isLoading} />
    </>
  );
};

export default SearchBookScreen;
