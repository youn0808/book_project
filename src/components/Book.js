import React from "react";
import { Card } from "react-bootstrap";
const Book = ({ book }) => {
  return (
    <Card className="my-3 p-3 rounded">
      {/* <a href={`/${book.isbn}`}>
        <Card.Img src={book.image} variant="top" />
      </a> */}

      <Card.Body>
        <a href={`/${book.cover_id}`}>
          <Card.Title as="div">
            <strong>{book.title}</strong>
          </Card.Title>
        </a>

        <Card.Text as="div">
          <div className="my-3">
            <span></span>
          </div>
        </Card.Text>

        {/* <Card.Text as="h3">${book.price}</Card.Text> */}
      </Card.Body>
    </Card>
  );
};

export default Book;
