import React from "react";
import { Link, useParams } from "react-router-dom";
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
  }, [params_subject]);

  const books = data.works;

  return (
    <>
      <h3>Subject:{params_subject} </h3>
      <span>Number of serached books:{data.work_count}</span>

      <ListGroup variant="flush">
        {books?.map((book) => {
          const book_data = {
            olid: book.cover_edition_key,
            title: book.title,
          };
          return (
            // cover_edition_key is Open Library ID (OLID)
            <ListGroup.Item key={book.cover_edition_key}>
              <Link to={{
                  pathname: `/${book.cover_edition_key}`,
                  state: { book: true },
                }}
              >
                {book.title}
              </Link>

              {/* <a href={`/${book.cover_edition_key}`}>{book.title}</a> */}
              <div>{book.cover_edition_key}</div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
};

export default SubjectScreen;
