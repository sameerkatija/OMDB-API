import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./Pages/MainPage/MainPage";
import MovieDetailPage from "./Pages/MovieDetailPage/MovieDetailPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<MovieDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
