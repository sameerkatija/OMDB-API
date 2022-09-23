import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";
const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies ? (
        movies.map(({ Title, imdbID, Poster }) => (
          <MovieCard key={imdbID} id={imdbID} title={Title} image={Poster} />
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default MovieList;
