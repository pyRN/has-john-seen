import { useRef } from "react";

const Navbar = ({ fnSetSearchMovie }) => {
  const oSearchInput = useRef(null);

  const fnOnSubmit = (event) => {
    event.preventDefault();
    if (oSearchInput.current.value.length) {
      //TODO: Call movieDB and return results into fnSetSearchMovie
      //   fnSetSearchMovie(oSearchInput.current.value);
    }
  };
  return (
    <div className="flex-row center sticky w-100">
      <form className="flex-row center navbar-form" onSubmit={fnOnSubmit}>
        <input
          ref={oSearchInput}
          placeholder="Search Movies"
          className="navbar-input"
        />
        <button className="btn navbar-btn" onClick={fnOnSubmit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Navbar;
