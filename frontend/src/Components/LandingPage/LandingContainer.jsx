import TheatreImage from "../../Multimedia/Images/Theatre_1.jpg";
const LandingContainer = () => {
  const fnOnSubmit = (event) => {
    event.preventDefault();
    console.log("get movie");
  };

  // console.log(process.env.REACT_APP_API_KEY);

  //https://api.themoviedb.org/3/movie/550?api_key={process.env.REACT_APP_API_KEY}
  //api.themoviedb.org/3/search/movie?api_key={process.env.REACT_APP_API_KEY}&query=Jack+Reacher
  //https://image.tmdb.org/t/p/w500/1gDV0Lm9y8ufIKzyf0h0GBgb9Zj.jpg
  //https://api.themoviedb.org/3/search/movie/109428?api_key=ebe2fa9714bfb5cd9e70e4472da747d0
  return (
    <div
      className="flex-column landing-card w-100"
      style={{
        background: `no-repeat url('${TheatreImage}') center`,
      }}
    >
      <h1>Has John Seen. . .</h1>
      <div className="flex-row center">
        <button className="btn">Log In</button>
        <button className="btn">Register</button>
      </div>
    </div>
    // <div className="flex-row center main-card">
    //   <div className="flex-column center">
    //     <div className="card flex-column center">
    //       <h1 className="main-heading">Has John seen...?</h1>
    //     </div>
    //     <div className="flex-row center">
    //       <button className="btn">Log In</button>
    //       <button className="btn">Register</button>
    //     </div>
    //   </div>

    //   <div className="flex-column center">
    //     <img
    //       src="https://image.tmdb.org/t/p/w400/1gDV0Lm9y8ufIKzyf0h0GBgb9Zj.jpg"
    //       className="move-image"
    //       alt="Place Holder"
    //       height="750px"
    //       width="500px"
    //     />
    //     <form onSubmit={fnOnSubmit}>
    //       <input placeholder="Search Movie" />
    //       <button type="submit" className="btn" onClick={fnOnSubmit}>
    //         Search
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
};

export default LandingContainer;
