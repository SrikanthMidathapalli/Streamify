import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({ movies, setFilteredMovies }) => {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({ genre: "", language: "", rating: "" });
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    let filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );

    if (filters.genre) {
      filtered = filtered.filter((movie) => movie.genre.toLowerCase() === filters.genre.toLowerCase());
    }

    if (filters.language) {
      filtered = filtered.filter((movie) => movie.language.toLowerCase() === filters.language.toLowerCase());
    }

    if (filters.rating) {
      filtered = filtered.filter((movie) => Number(movie.rating) >= Number(filters.rating));
    }

    if (sortOption === "rating") {
      filtered = [...filtered].sort((a, b) => Number(b.rating) - Number(a.rating));
    } else if (sortOption === "releaseDate") {
      filtered = [...filtered].sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    }

    setFilteredMovies(filtered);
  }, [query, filters, sortOption, movies, setFilteredMovies]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <div className="container">
        <Link className="navbar-brand" to="/">🎬 Streamify</Link>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search movies..."
          className="form-control w-25 mx-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* Genre Filter */}
        <select
          className="form-select w-25 mx-2"
          value={filters.genre}
          onChange={(e) => setFilters((prev) => ({ ...prev, genre: e.target.value }))}
        >
          <option value="">All Genres</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Thriller">Thriller</option>
          <option value="Romance">Romance</option>
          <option value="Animation">Animation</option>


    </select>

        {/* Language Filter */}
        <select
          className="form-select w-25 mx-2"
          value={filters.language}
          onChange={(e) => setFilters((prev) => ({ ...prev, language: e.target.value }))}
        >
          <option value="">All Languages</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Spanish">Spanish</option>
          <option value="Telugu">Telugu</option>
          <option value="Tamil">Tamil</option>

        </select>

        {/* Rating Filter */}
        <select
          className="form-select w-25 mx-2"
          value={filters.rating}
          onChange={(e) => setFilters((prev) => ({ ...prev, rating: e.target.value }))}
        >
          <option value="">Min Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="4">5</option>

        </select>

        {/* Sorting Dropdown */}
        <select
          className="form-select w-25 mx-2"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="rating">Rating</option>
          <option value="releaseDate">Release Date</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
