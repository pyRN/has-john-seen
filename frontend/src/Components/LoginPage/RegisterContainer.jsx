import { NavLink, useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { register, reset } from "../../features/auth/authSlice";
import "./LoginContainer.css";

//Components
import Spinner from "../Spinner";

const RegisterContainer = () => {
  const oEmail = useRef(null);
  const oUsername = useRef(null);
  const oPassword = useRef(null);
  const oConfirmPassword = useRef(null);
  const fnNavigate = useNavigate();
  const fnDispatch = useDispatch();
  const { oUserData, bIsSuccess, bIsLoading, bIsError, sMessage } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (bIsError) {
      toast.error(sMessage, {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 3000,
      });
    } else if (bIsSuccess || oUserData) {
      fnNavigate("/dashboard");
    }

    fnDispatch(reset());
  }, [
    oUserData,
    bIsSuccess,
    bIsLoading,
    bIsError,
    sMessage,
    fnNavigate,
    fnDispatch,
  ]);

  const fnOnSubmit = (event) => {
    event.preventDefault();

    if (
      oUsername.current.value.length &&
      oEmail.current.value.length &&
      oPassword.current.value.length &&
      oConfirmPassword.current.value.length
    ) {
      //Check if passwords match
      if (oPassword.current.value !== oConfirmPassword.current.value) {
        toast.error("Passwords do not match");
      } else {
        fnDispatch(
          register({
            sUsername: oUsername.current.value,
            sEmail: oEmail.current.value,
            sPassword: oPassword.current.value,
          })
        );
      }
    } else {
      toast.error("All fields are required for registration");
    }
  };

  if (bIsLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex-column center form-container">
      <div className="flex-column form-card center">
        <h1 className="form-card-header">Register</h1>
        <form
          onSubmit={fnOnSubmit}
          className="flex-column center form-card-form"
        >
          <div className="flex-column form-card-input-container">
            <label>Username:</label>
            <input
              placeholder="Username"
              type="text"
              ref={oUsername}
              className="form-card-input"
              required
            ></input>
          </div>
          <div className="flex-column form-card-input-container">
            <label>Email:</label>
            <input
              placeholder="Email"
              type="email"
              ref={oEmail}
              className="form-card-input"
              required
            ></input>
          </div>
          <div className="flex-column form-card-input-container">
            <label>Password:</label>
            <input
              placeholder="Password"
              type="password"
              ref={oPassword}
              className="form-card-input"
              required
            ></input>
          </div>
          <div className="flex-column form-card-input-container">
            <label>Confirm Password:</label>
            <input
              placeholder="Confirm Password"
              type="password"
              ref={oConfirmPassword}
              className="form-card-input"
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
  );
};

export default RegisterContainer;
