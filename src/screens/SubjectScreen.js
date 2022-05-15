import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
// import Book from "../components/Book";

const SubjectScreen = () => {
  const params = useParams();
  const params_subject = params.id;

  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  const [books, setBooks] = useState([]);
  const [data, setData] = useState("");

  // useEffect(() => {
  //   setLoading(true);

  //   fetch(`https://openlibrary.org/subjects/${params_subject}.json?limit=10?`)
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .then(() => setLoading(false));
  // }, [params_subject]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(
        `https://openlibrary.org/subjects/${params_subject}.json?limit=10?`
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

      setBooks(loadedBooks);
      setIsLoading(false);
    };
    fetchBooks().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  }
  const bookList = books.map((book) => {
    return (
      <ListGroup.Item key={book.id}>
        <Link
          style={{ textDecoration: "none" }}
          to={`/${book.olid}`}
          state={{ book }}
        >
          {book.title}
        </Link>
      </ListGroup.Item>
    );
  });
  return (
    <>
      <h3>List of "{params_subject}" subject books</h3>
      <span>Number of serached books:{data.work_count}</span>

      <ListGroup variant="flush">{bookList}</ListGroup>
      {/* 
      <ListGroup variant="flush">
        {books?.map((book) => {
          return (
            
            <ListGroup.Item key={book.cover_edition_key}>
              
              <Link
                style={{ textDecoration: "none" }}
                to={`/${book.cover_edition_key}`}
                state={{
                  title: book.title,
                  olid: book.cover_edition_key,
                  subjects: book.subject,
                  authors: book.authors,
                  isbn: book.availability === null ? "null" : book.availability,
                }}
              >
                {book.title}
              </Link>
            </ListGroup.Item>
          );
        })}
      </ListGroup> */}
    </>
  );
};

export default SubjectScreen;
