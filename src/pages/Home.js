import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = ({ movies }) => {
  // Function to render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const starsArray = Array(fullStars).fill("⭐");
    return starsArray.join(" ");
  };

  return (
    <div className="container mt-4">
      {/* Movie List */}
      <div className="row">
        {movies?.length > 0 ? (
          movies.map((movie, index) => (
            <div key={`${movie.id || movie.title}-${index}`} className="col-md-4 col-sm-6 mb-3">
              <div className="card h-100">
                <img
                  src={movie.poster || "https://via.placeholder.com/300x450"}
                  className="card-img-top"
                  alt={movie.title || "Movie Poster"}
                  loading="lazy"
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title || "Untitled Movie"}</h5>
                  <p className="card-text">
                    <strong>Genre:</strong> {movie.genre || "Unknown"}
                  </p>
                  <p className="card-text">
                    <strong>Rating:</strong> {renderStars(movie.rating)} ({movie.rating || "N/A"}/5)
                  </p>
                  <p className="card-text">
                    <strong>Cast:</strong> {movie.cast?.length > 0 ? movie.cast.join(", ") : "Not Available"}
                  </p>
                  <p className="card-text">
                    <strong>Description:</strong> {movie.description || "No description available."}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h4 className="text-center w-100">No movies found</h4>
        )}
      </div>
    </div>
  );
};

export default Home;
