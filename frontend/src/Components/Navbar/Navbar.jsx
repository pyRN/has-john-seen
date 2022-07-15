import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout, reset } from "../../features/auth/authSlice";
import "./Navbar.css";

//Icons
import { IoIosCloseCircle, IoIosMenu, IoMdSearch } from "react-icons/io";

const Navbar = () => {
  const oHamburgerMenu = useRef(null);
  const oSearchInput = useRef(null);
  const fnNavigate = useNavigate();
  const fnDispatch = useDispatch();
  const { oUserData } = useSelector((state) => state.auth);

  const fnOnSearch = (e) => {
    e.preventDefault();
    console.log("Search For: ", oSearchInput.current.value);
  };

  const fnOnLogOut = (e) => {
    e.preventDefault();
    fnDispatch(logout());
    fnDispatch(reset());
    oHamburgerMenu.current.classList.toggle("open");
    fnNavigate("/login");
  };

  return (
    <nav className="flex-row navbar">
      <div className="flex-row nav-links">
        <NavLink to="/movies" className="flex-row center nav-link">
          Movies
        </NavLink>
        {oUserData ? (
          <NavLink to="dashboard" className="nav-link">
            Dashboard
          </NavLink>
        ) : null}
        {oUserData ? (
          <button className="nav-link log-out-btn" onClick={fnOnLogOut}>
            Log Out
          </button>
        ) : (
          <NavLink to="login" className="nav-link">
            Log In
          </NavLink>
        )}
      </div>
      <form className="flex-row center" onSubmit={fnOnSearch}>
        <div className="input-wrapper">
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            ref={oSearchInput}
          ></input>
          <IoMdSearch className="search-icon" onClick={fnOnSearch} />
        </div>
      </form>

      <div className="hamburger-menu close" ref={oHamburgerMenu}>
        <IoIosCloseCircle
          className="close-icon close"
          alt="=IoIosCloseCircle"
          width="50px"
          height="50px"
          onClick={() => {
            oHamburgerMenu.current.classList.toggle("open");
          }}
        />
        <IoIosMenu
          className="hamburger-icon close"
          alt="IoIosMenu"
          width="50px"
          height="50px"
          onClick={() => {
            oHamburgerMenu.current.classList.toggle("open");
          }}
        />
        <div className="mobile-menu">
          <div className="flex-column mobile-nav-links close">
            <NavLink
              to="/movies"
              className="mobile-nav-link"
              onClick={() => oHamburgerMenu.current.classList.toggle("open")}
            >
              Movies
            </NavLink>
            {oUserData ? (
              <NavLink
                to="dashboard"
                className="mobile-nav-link"
                onClick={() => oHamburgerMenu.current.classList.toggle("open")}
              >
                Dashboard
              </NavLink>
            ) : null}
            {oUserData ? (
              <button
                className="mobile-nav-link log-out-btn"
                onClick={fnOnLogOut}
              >
                Log Out
              </button>
            ) : (
              <NavLink
                to="login"
                className="mobile-nav-link"
                onClick={() => oHamburgerMenu.current.classList.toggle("open")}
              >
                Log In
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
