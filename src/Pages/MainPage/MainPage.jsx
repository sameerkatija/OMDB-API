import { useEffect, useState } from "react";
import MovieList from "../../Components/MovieList/MovieList";
import "./MainPage.css";

const MainPage = () => {
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [searchVal, setSearchVal] = useState("");
  useEffect(() => {
    setTimeout(
      fetch(`http://www.omdbapi.com/?apikey=15c3b393&s=${searchVal}`)
        .then((res) => res.json())
        .then((data) => setSearchedMovies(data["Search"])),
      2000
    );
  }, [searchVal]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchVal(e.target.value);
    // setSearchedMovies(e);
  };
  return (
    <div className="main-page">
      <div className="Header">
        <input
          type="text"
          id="searchbox"
          placeholder="Search Movie"
          value={searchVal}
          onChange={handleChange}
        />
      </div>
      <div className="body">
        <MovieList movies={searchedMovies} />
      </div>
    </div>
  );
};

export default MainPage;
