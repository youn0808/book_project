import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import SubjectScreen from "./screens/SubjectScreen";
import BookDetailScreen from "./screens/BookDetailScreen";
import SubjectListScreen from "./screens/SubjectsListScreen";

function App() {
  return (
    <Router>
      <Header />

      <main>
        <Container className="py-5">
          <Routes>
            <Route path="/subjects/:id" element={<SubjectScreen />} />
            <Route path="/:id/subject/" element={<SubjectListScreen />} />
            <Route path="/:olid" element={<BookDetailScreen />} />
            <Route path="/subjects" element={<HomeScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
