import React from "react";
import { ListGroup } from "react-bootstrap";
const HomeScreen = ({ subjects }) => {
  return (
    <>
      <h3>List of Subjects</h3>
      <ListGroup variant="flush">
        {subjects.map((subject) => {
          return (
            <ListGroup.Item key={subject}>
              <a
                style={{ textDecoration: "none" }}
                href={`/subjects/${subject}`}
              >
                {subject}
              </a>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
};

export default HomeScreen;
