import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { MemoryRouter as Router } from "react-router-dom";

describe("Render Header Component", () => {
  test("Should render Header component ", async () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    //   const headerElement = screen.getByTestId("headerBar");
    const headerElement = screen.getByTitle("Header");
    expect(headerElement).toBeInTheDocument();
  });
});
