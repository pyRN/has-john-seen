import { NavLink, useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { resetPassword, reset } from "../../features/auth/authSlice";
import "./LoginContainer.css";

//Components
import Spinner from "../Spinner";
const ForgotContainer = () => {
  const oEmail = useRef(null);
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

    if (oEmail.current.value.length) {
      fnDispatch(
        resetPassword({
          sEmail: oEmail.current.value,
        })
      );
    } else {
      toast.error("Email required");
    }
  };

  if (bIsLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex-column center form-container">
      <div className="flex-column form-card center">
        <h1 className="form-card-header">Reset Password</h1>
        <form
          onSubmit={fnOnSubmit}
          className="flex-column center form-card-form"
        >
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
  );
};

export default ForgotContainer;
