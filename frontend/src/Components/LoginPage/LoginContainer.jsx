import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
const LoginContainer = () => {
  const oEmail = useRef(null);
  const oPassword = useRef(null);
  const [sWarningMessage, fnSetWarningMessage] = useState(null);
  const fnOnSubmit = (event) => {
    event.preventDefault();

    if (oEmail.current.value.length && oPassword.current.value.length) {
      console.log("Log IN user");
    } else {
      fnSetWarningMessage("Email and Password Required");
    }
  };
  return (
    <div className="flex-column center container">
      <div className="flex-column landing-card w-80">
        <div className="hero-content">
          <h1 className="hero-text">Log In</h1>
          <form onSubmit={fnOnSubmit}>
            <div className="flex-column input-container">
              <label>Email:</label>
              <input
                placeholder="Email"
                type="email"
                ref={oEmail}
                required
              ></input>
            </div>
            <div className="flex-column input-container">
              <label>Password:</label>
              <input
                placeholder="Password"
                type="password"
                ref={oPassword}
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
