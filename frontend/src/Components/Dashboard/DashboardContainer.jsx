import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./DashboardContainer.css";

//Icons
import { AiOutlineUser } from "react-icons/ai";

const DashboardContainer = () => {
  const { oUserData } = useSelector((state) => state.auth);
  const fnNavigate = useNavigate();

  //If user isnt already logged in, navigate to login page
  useEffect(() => {
    if (!oUserData) {
      fnNavigate("/login");
    }
  }, [fnNavigate]);

  return (
    <>
      {/* If no user, redirect to login page */}
      {oUserData ? (
        <div className="flex-row center card">
          <div className="flex-column center profile-container">
            <AiOutlineUser className="avatar-img" />
            <h2 className="dashboard-text">{oUserData.sUsername}</h2>
          </div>
          <div className="flex-column center movies-container">
            <h2 className="card-text">Recommendations:</h2>
            <div className="flex-row center flex-wrap">
              <img src="https://via.placeholder.com/150" className="movie" />
              <img src="https://via.placeholder.com/150" className="movie" />
              <img src="https://via.placeholder.com/150" className="movie" />
            </div>
            <h2 className="card-text">Watched:</h2>
            <div className="flex-row center flex-wrap">
              <img src="https://via.placeholder.com/150" className="movie" />
              <img src="https://via.placeholder.com/150" className="movie" />
              <img src="https://via.placeholder.com/150" className="movie" />
              <img src="https://via.placeholder.com/150" className="movie" />
              <img src="https://via.placeholder.com/150" className="movie" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DashboardContainer;
