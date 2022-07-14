import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

//Icons
import { IoIosCloseCircle, IoIosMenu, IoMdSearch } from "react-icons/io";

const Navbar = () => {
  const { oUserData } = useSelector((state) => state.auth);
  const oHamburgerMenu = useRef(null);
  const oSearchInput = useRef(null);

  const fnOnSearch = (e) => {
    e.preventDefault();
    console.log("Search For: ", oSearchInput.current.value);
  };

  return (
    <nav className="flex-row navbar">
      <div className="flex-row nav-links">
        {oUserData ? (
          <NavLink to="/dashboard" className="nav-link">
            Dashboard
          </NavLink>
        ) : null}

        <NavLink to="/movies" className="nav-link">
          Movies
        </NavLink>
        <NavLink to="login" className="nav-link">
          Log In
        </NavLink>
      </div>
      <form className="flex-row center" onSubmit={fnOnSearch}>
        <div className="input-wrapper">
          <IoMdSearch className="search-icon" />
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            ref={oSearchInput}
          ></input>
        </div>
        <button className="btn search-btn" onSubmit={fnOnSearch} type="submit">
          Search
        </button>
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
            {oUserData ? (
              <NavLink to="/dashboard" className="mobile-nav-link">
                Dashboard
              </NavLink>
            ) : null}

            <NavLink to="/movies" className="mobile-nav-link">
              Movies
            </NavLink>
            <NavLink to="login" className="mobile-nav-link">
              Log In
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
