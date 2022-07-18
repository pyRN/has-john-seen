//Icons
import { AiOutlineUser } from "react-icons/ai";

const Profile = ({ oUserData }) => {
  return (
    <div className="flex-row profile-container">
      <div className="flex-column">
        <AiOutlineUser className="avatar-img flex-column center" />
        <h2 className="dashboard-text">{oUserData.sUsername}</h2>
      </div>
      <div className="flex-column">
        <h3 className="dashboard-text">
          Movies Watched: {oUserData.aMoviesWatched.length}
        </h3>
        <h3 className="dashboard-text">
          Recommendations: {oUserData.aRecommendations.length}
        </h3>
      </div>
      <div className="flex-column"></div>
    </div>
  );
};

export default Profile;
