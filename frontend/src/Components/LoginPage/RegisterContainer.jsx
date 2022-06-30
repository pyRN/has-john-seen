import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
const RegisterContainer = () => {
  const oEmail = useRef(null);
  const oUsername = useRef(null);
  const oPassword = useRef(null);
  const oConfirmPassword = useRef(null);
  const [sWarningMessage, fnSetWarningMessage] = useState(null);
  const fnOnSubmit = (event) => {
    event.preventDefault();

    if (
      oUsername.current.value.length &&
      oEmail.current.value.length &&
      oPassword.current.value.length &&
      oConfirmPassword.current.value.length
    ) {
      console.log("Register User");
    } else {
      fnSetWarningMessage("Register Warning");
    }
  };
  return (
    <div className="flex-column center container">
      <div className="flex-column card center">
        <div className="card-content">
          <h1 className="card-text">Register</h1>
          {sWarningMessage ? (
            <h2 className="warning-message">{sWarningMessage}</h2>
          ) : null}
          <form onSubmit={fnOnSubmit}>
            <div className="flex-column input-container">
              <label className="w-100">Username:</label>
              <input
                placeholder="Username"
                type="text"
                ref={oUsername}
                className="w-100"
                required
              ></input>
            </div>
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
            <div className="flex-column input-container">
              <label className="w-100">Confirm Password:</label>
              <input
                placeholder="Confirm Password"
                type="password"
                ref={oConfirmPassword}
                className="w-100"
                required
              ></input>
            </div>
            <button className="btn" onClick={fnOnSubmit}>
              Register
            </button>
          </form>
          <div className="flex-row center">
            <NavLink to="/forgot" className="navlink">
              Forgot Password
            </NavLink>
            <NavLink to="/login" className="navlink">
              Log In
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterContainer;
