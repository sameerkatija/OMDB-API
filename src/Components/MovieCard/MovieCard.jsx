import { Link } from "react-router-dom";
import "./MovieCard.css";
const MovieCard = ({ id, title, image }) => (
  <div className="movie-card">
    <img src={image} alt="movie-card" />
    <h2 className="title">
      <Link to={`/${id}`} className="movie-details">
        {title}
      </Link>
    </h2>
  </div>
);
export default MovieCard;
