import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./DashboardContainer.css";

//Components
import MovieCarousel from "./MovieCarousel";
import Profile from "./Profile";

const DashboardContainer = () => {
  const { oUserData } = useSelector((state) => state.auth);
  const fnNavigate = useNavigate();

  //If user isnt logged in, navigate to login page
  useEffect(() => {
    if (!oUserData) {
      fnNavigate("/login");
    }
  }, [fnNavigate]);

  return (
    <>
      {/* If no user, redirect to login page */}
      {oUserData ? (
        <div className="flex-column dashboard">
          <Profile oUserData={oUserData} />
          <MovieCarousel
            aMovies={oUserData.aRecommendations}
            sTitle={"Recommended Movies"}
          />
          <MovieCarousel aMovies={oUserData.aWatchList} sTitle={"Watch List"} />
          <MovieCarousel
            aMovies={oUserData.aMoviesWatched}
            sTitle={"Movies Watched"}
          />
        </div>
      ) : null}
    </>
  );
};

export default DashboardContainer;
