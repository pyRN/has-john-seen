import { NavLink, useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login, reset } from "../../features/auth/authSlice";
import "./LoginContainer.css";

//Components
import Spinner from "../Spinner";
const LoginContainer = () => {
  const oEmail = useRef(null);
  const oPassword = useRef(null);
  const fnNavigate = useNavigate();
  const fnDispatch = useDispatch();
  const { oUserData, bIsSuccess, bIsLoading, bIsError, sMessage } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (bIsError) {
      toast.error(sMessage);
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

    if (oEmail.current.value.length && oPassword.current.value.length) {
      fnDispatch(
        login({
          sEmail: oEmail.current.value,
          sPassword: oPassword.current.value,
        })
      );
    } else {
      toast.error("All fields are required for login");
    }
  };

  if (bIsLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex-column center form-container">
      <div className="flex-column form-card center">
        <h1 className="form-card-header">Log In</h1>
        <form
          onSubmit={fnOnSubmit}
          className="flex-column center form-card-form"
        >
          <div className="fflex-column form-card-input-container">
            <label className="w-100">Email:</label>
            <input
              placeholder="Email"
              type="email"
              ref={oEmail}
              className="form-card-input"
              required
            ></input>
          </div>
          <div className="flex-column form-card-input-container">
            <label className="w-100">Password:</label>
            <input
              placeholder="Password"
              type="password"
              ref={oPassword}
              className="form-card-input"
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
  );
};

export default LoginContainer;
