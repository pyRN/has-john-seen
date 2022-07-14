import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

//Components
import LandingContainer from "./Components/LandingPage/LandingContainer";
import MovieComponent from "./Components/MoviePage/MovieComponent";
import MoviesContainer from "./Components/MoviePage/MoviesContainer";
import Navbar from "./Components/Navbar/Navbar";
import LoginContainer from "./Components/LoginPage/LoginContainer";
import RegisterContainer from "./Components/LoginPage/RegisterContainer";
import ForgotContainer from "./Components/LoginPage/ForgotContainer";
import DashboardContainer from "./Components/Dashboard/DashboardContainer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingContainer />} />
          <Route path="/movies" element={<MoviesContainer />} />
          <Route path="/movie" element={<MovieComponent />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/register" element={<RegisterContainer />} />
          <Route path="/forgot" element={<ForgotContainer />} />
          <Route path="/dashboard" element={<DashboardContainer />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
