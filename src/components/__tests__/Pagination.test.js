import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Pagination from "../Pagination";
import { MemoryRouter as Router } from "react-router-dom";

describe("Render Pagination Component", () => {
  test("Should render Page numbers in Pagination components ", async () => {
    render(
      <Router>
        <Pagination
          books={[
            {
              id: "0",
              title: "Roughing It",
              olid: "OL6970936M",
            },
          ]}
          loading={false}
        />
      </Router>
    );
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("Should render book list in Pagination components ", async () => {
    render(
      <Router>
        <Pagination
          books={[
            {
              id: "0",
              title: "Roughing It",
              olid: "OL6970936M",
            },
          ]}
          loading={false}
        />
      </Router>
    );
    const booklistElement = screen.getByTestId("booklist");
    expect(booklistElement).toBeInTheDocument();
  });
});
