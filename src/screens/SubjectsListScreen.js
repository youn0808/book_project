import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
const SubjectListScreen = () => {
  const location = useLocation();
  const { subjects } = location.state;

  return (
    <>
      <h3>List of Subjects</h3>
      <div>
        {subjects.map((subject) => (
          <li>{subject}</li>
        ))}
      </div>
    </>
  );
};

export default SubjectListScreen;
