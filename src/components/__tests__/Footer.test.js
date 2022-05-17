import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import { MemoryRouter as Router } from "react-router-dom";

describe("Render Footer Component", () => {
  test("Should render Footer component ", async () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    //   const headerElement = screen.getByTestId("headerBar");
    const FooterElement = screen.getByTitle("Footer");
    expect(FooterElement).toBeInTheDocument();
  });
});
