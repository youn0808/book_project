import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import SubjectScreen from "./screens/SubjectScreen";
import BookDetailScreen from "./screens/BookDetailScreen";

function App() {
  return (
    <Router>
      <Header />

      <main>
        <Container className="py-5">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/subjects/:id" element={<SubjectScreen />} />
            <Route path="/:olid" element={<BookDetailScreen />} />
          </Routes>
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
