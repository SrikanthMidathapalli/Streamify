import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";



function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setFilteredMovies(data);
      });
  }, []);

  return (
    <Router>
      <>
        <Navbar movies={movies} setFilteredMovies={setFilteredMovies} />
        <Routes>
          <Route path="/" element={<Home movies={filteredMovies} />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
