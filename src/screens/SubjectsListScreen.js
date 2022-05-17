import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
const SubjectListScreen = () => {
  const location = useLocation();
  const { subjects } = location.state;
  let navigate = useNavigate();
  return (
    <>
      <Row>
        <Col md={8}>
          <h3>List of Subjects</h3>
        </Col>
        <Col md={4}>
          {" "}
          <Button onClick={() => navigate(-1)} className=" btn-light my-3">
            Go Back
          </Button>
        </Col>
      </Row>

      <div data-testid="subjects">
        {subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </div>
    </>
  );
};

export default SubjectListScreen;
