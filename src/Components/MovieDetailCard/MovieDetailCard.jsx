import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MovieDetailItem from "../MovieDetailItem/MovieDetailItem";
import "./MovieDetailCard.css";
const MovieDetailCard = (props, { image }) => {
  const location = useLocation().pathname.split("/")[1];
  const [movieDetail, setMovieDetail] = useState(null);
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=15c3b393&i=${location}`)
      .then((res) => res.json())
      .then((data) => setMovieDetail(data));
  }, [location]);
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>go back</button>
      {movieDetail ? (
        <div className="movie-detail-card">
          <div className="main-body">
            <div className="left-div">
              <div className="image-div">
                <img
                  className="movie-image"
                  src={movieDetail["Poster"]}
                  alt="img poster"
                />
              </div>
              <div className="ratings">
                {movieDetail["Ratings"] ? (
                  <>
                    <h1>Ratings:</h1>
                    {movieDetail["Ratings"].map((data) => (
                      <div key={data["Source"]}>
                        <span className="span-underline">{data["Source"]}</span>
                        : {data["Value"]}
                      </div>
                    ))}
                  </>
                ) : (
                  <h1>no ratings</h1>
                )}
              </div>
            </div>
            <div className="detail-div">
              {Object.entries(movieDetail)
                .filter(
                  (data) => typeof data[1] === "string" && data[0] !== "Poster"
                )
                .map((data) => (
                  <MovieDetailItem
                    key={data[0]}
                    name={data[0]}
                    value={data[1]}
                  />
                ))}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default MovieDetailCard;
