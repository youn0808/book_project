import React from "react";

import { ListGroup } from "react-bootstrap";
const HomeScreen = () => {
  const common_subjects = [
    "animals",
    "arts",
    "business",
    "biography",
    "fiction",
    "history",
    "sciencemathematics",
    "social_sciences",
    "travel",
    "juvenile_fiction",
    "health",
  ];

  return (
    <>
      <h3>List of Subjects</h3>
      <ListGroup variant="flush">
        {common_subjects.map((subject) => {
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
