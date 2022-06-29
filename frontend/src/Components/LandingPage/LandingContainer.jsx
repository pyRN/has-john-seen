import { useNavigate } from "react-router-dom";
const LandingContainer = () => {
  const fnNavigate = useNavigate();

  //https://api.themoviedb.org/3/movie/550?api_key={process.env.REACT_APP_API_KEY}
  //api.themoviedb.org/3/search/movie?api_key={process.env.REACT_APP_API_KEY}&query=Jack+Reacher
  //https://image.tmdb.org/t/p/w500/1gDV0Lm9y8ufIKzyf0h0GBgb9Zj.jpg
  //https://api.themoviedb.org/3/search/movie/109428?api_key=ebe2fa9714bfb5cd9e70e4472da747d0
  return (
    <div className="flex-column center container">
      <div className="flex-column landing-card w-80">
        <div className="hero-content">
          <h1 className="hero-text">Has John Seen?</h1>
          <div className="flex-row center">
            <button className="btn" onClick={() => fnNavigate("/login")}>
              Log In
            </button>
            <button className="btn" onClick={() => fnNavigate("/register")}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingContainer;
