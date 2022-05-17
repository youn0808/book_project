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

// describe("Render booklist from the api  ", () => {
//   test("Should get booklist from the api ", async () => {
//     api.getBooksFromApi.mockResolvedValue({
//       works: [{ title: "Bible" }],
//     });
//     render(
//       <Router>
//         <SubjectScreen />
//       </Router>
//     );
//     await waitFor(() => {
//       screen.getByText("Bible");
//     });
//   });
// });
