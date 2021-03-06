import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import SubjectScreen from "./screens/SubjectScreen";
import BookDetailScreen from "./screens/BookDetailScreen";
import SubjectListScreen from "./screens/SubjectsListScreen";
import SearchBookScreen from "./screens/SearchBookScreen";

function App() {
  const subjects = [
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
    <Router>
      <Header />
      <main>
        <Container className="py-5">
          <Routes>
            <Route
              path="/subjects"
              element={<HomeScreen subjects={subjects} />}
            />
            <Route path="/subjects/:id" element={<SubjectScreen />} />

            <Route path="/search/:search/" element={<SearchBookScreen />} />
            {/* <Route
              path="/search/:search/:olid"
              element={<BookDetailScreen />}
            /> */}

            <Route path="/detail/:olid" element={<BookDetailScreen />} />
            <Route path="/:id/subject/" element={<SubjectListScreen />} />
            <Route path="/" element={<HomeScreen subjects={subjects} />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
