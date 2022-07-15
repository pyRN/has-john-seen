import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./LandingContainer.css";

//Icons
import { MdOutlineLogin, MdAccountCircle } from "react-icons/md";

//Images
import TheatreImage from "./Theatre_1.jpg";

const LandingContainer = () => {
  const { oUserData } = useSelector((state) => state.auth);
  const fnNavigate = useNavigate();

  //https://api.themoviedb.org/3/movie/550?api_key={process.env.REACT_APP_API_KEY}
  //api.themoviedb.org/3/search/movie?api_key={process.env.REACT_APP_API_KEY}&query=Jack+Reacher
  //https://image.tmdb.org/t/p/w500/1gDV0Lm9y8ufIKzyf0h0GBgb9Zj.jpg
  //https://api.themoviedb.org/3/search/movie/109428?api_key=ebe2fa9714bfb5cd9e70e4472da747d0

  //If user is already logged in, navigate to dashboard
  useEffect(() => {
    if (oUserData) {
      fnNavigate("/dashboard");
    }
  }, [fnNavigate]);

  return (
    <main className="flex-row center flex-wrap centered-container">
      <img src={TheatreImage} alt="Theatre" className="theatre-img" />
      <div className="content">
        <h1 className="landing-heading">Have You Seen?</h1>
        <div className="flex-row center">
          <button
            className="flex-row center btn"
            onClick={() => fnNavigate("/login")}
          >
            <MdOutlineLogin className="btn-icon" />
            Log In
          </button>
          <button
            className="flex-row center btn"
            onClick={() => fnNavigate("/register")}
          >
            <MdAccountCircle className="btn-icon" />
            Register
          </button>
        </div>
      </div>
      <div className="flex-column center hidden-container">
        <h1 className="landing-heading">Have You Seen?</h1>
        <div className="flex-row center">
          <button
            className="flex-row center btn"
            onClick={() => fnNavigate("/login")}
          >
            <MdOutlineLogin className="btn-icon" />
            Log In
          </button>
          <button
            className="flex-row center btn"
            onClick={() => fnNavigate("/register")}
          >
            <MdAccountCircle className="btn-icon" />
            Register
          </button>
        </div>
      </div>
    </main>
  );
};

export default LandingContainer;
