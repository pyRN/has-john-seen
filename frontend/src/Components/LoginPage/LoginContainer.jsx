import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
const LoginContainer = () => {
  const oEmail = useRef(null);
  const oPassword = useRef(null);
  const [sWarningMessage, fnSetWarningMessage] = useState(null);
  const fnOnSubmit = (event) => {
    event.preventDefault();

    if (oEmail.current.value.length && oPassword.current.value.length) {
      console.log("Log In user");
    } else {
      fnSetWarningMessage("Email and Password Required");
    }
  };
  return (
    <div className="flex-column center container">
      <div className="flex-column card center">
        <div className="card-content">
          <h1 className="card-text">Log In</h1>
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
            <div className="flex-column input-container">
              <label className="w-100">Password:</label>
              <input
                placeholder="Password"
                type="password"
                ref={oPassword}
                className="w-100"
                required
              ></input>
            </div>
            <button className="btn" onClick={fnOnSubmit}>
              Log In
            </button>
          </form>
          <div className="flex-row center">
            <NavLink to="/forgot" className="navlink">
              Forgot Password
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

export default LoginContainer;
