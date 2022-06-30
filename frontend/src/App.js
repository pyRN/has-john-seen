import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

//Components
import LandingContainer from "./Components/LandingPage/LandingContainer";
import MovieComponent from "./Components/MoviePage/MovieComponent";
import MoviesContainer from "./Components/MoviePage/MoviesContainer";
import LoginContainer from "./Components/LoginPage/LoginContainer";
import RegisterContainer from "./Components/LoginPage/RegisterContainer";
import ForgotContainer from "./Components/LoginPage/ForgotContainer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingContainer />} />
        <Route path="/movies" element={<MoviesContainer />} />
        <Route path="/movie" element={<MovieComponent />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/register" element={<RegisterContainer />} />
        <Route path="/forgot" element={<ForgotContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
