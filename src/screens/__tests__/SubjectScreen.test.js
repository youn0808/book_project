import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import SubjectScreen from "../SubjectScreen";
import { MemoryRouter as Router } from "react-router-dom";

describe("Render SubjectScreen Component ", () => {
  test("Should render SubjectScreen component ", async () => {
    render(
      <Router>
        <SubjectScreen />
      </Router>
    );
    const headingElement = screen.getByRole("heading", { level: 2 });
    expect(headingElement).toBeInTheDocument();
  });
});
