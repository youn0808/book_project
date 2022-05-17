import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HomeScreen from "../HomeScreen";

test("Should render HomeScreen component ", async () => {
  render(<HomeScreen subjects={["animals", "history"]} />);
  const headingElement = screen.getByRole("heading", { level: 3 });
  expect(headingElement).toBeInTheDocument();
});

test("Should render same list of subjects passed into subjects prop ", async () => {
  render(<HomeScreen subjects={["animals", "history"]} />);
  const subject_animal = screen.getByText(/animals/i);
  const subject_history = screen.getByText(/history/i);
  expect(subject_animal).toBeInTheDocument();
  expect(subject_history).toBeInTheDocument();
});
