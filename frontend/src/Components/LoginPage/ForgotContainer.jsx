import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
const ForgotContainer = () => {
  const oEmail = useRef(null);
  const [sWarningMessage, fnSetWarningMessage] = useState(null);
  const fnOnSubmit = (event) => {
    event.preventDefault();

    if (oEmail.current.value.length) {
      console.log("Reset Password");
      fnSetWarningMessage("Password reset has been sent to email provided");
    } else {
      fnSetWarningMessage("Email required");
    }
  };
  return (
    <div className="flex-column center container">
      <div className="flex-column card center">
        <div className="card-content">
          <h1 className="card-text">Reset Password</h1>
          {sWarningMessage ? (
            <h2 className="warning-message">{sWarningMessage}</h2>
          ) : null}
          <form onSubmit={fnOnSubmit}>
            <div className="flex-column input-container">
              <label className="w-100">Email:</label>
              <input
                placeholder="Email"
                type="email"
                ref={oEmail}
                className="w-100"
                required
              ></input>
            </div>

            <button className="btn" onClick={fnOnSubmit}>
              Reset
            </button>
          </form>
          <div className="flex-row center">
            <NavLink to="/login" className="navlink">
              Log In
            </NavLink>
            <NavLink to="/register" className="navlink">
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotContainer;
