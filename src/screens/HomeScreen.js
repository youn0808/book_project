import React from "react";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
const HomeScreen = () => {
  const [data, setData] = useState("");
  const common_subjects = [
    "arts",
    "animals",
    "fiction",
    "sciencemathematics",
    "business",
    "juvenile_fiction",
    "history",
    "biography",
    "social_sciences",
  ];

  return (
    <>
      <h3>List of Subjects</h3>
      <ListGroup variant="flush">
        {common_subjects.map((subject) => {
          return (
            <ListGroup.Item key={subject}>
              <a href={`/subjects/${subject}`}>{subject}</a>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
};

export default HomeScreen;

// useEffect(() => {
//     setInterval(() => {
//       getData();
//     }, 1000);
//   }, []);

//   const getData = async () => {
//     const res = await fetch(
//       "http://openlibrary.org/search.json?author=tolkien"
//     );
//     const data = await res.json();
//     setData(data);
//   };

//   console.log(data);
