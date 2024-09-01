import React from "react";
import { Helmet } from "react-helmet";
import "./index.css";

const SearchPage = () => {
  return (
    <>
      <div className="main-box">
        <video autoPlay loop muted playsInline className="back-video">
          <source src="/utils/cyborg.mp4" type="video/mp4" />
        </video>
        <h1 className="heading">STAY INFORMED ON CYBER INCIDENTS.</h1>
        <div className="scrollable-content">
          
          <div className="search-box">
            <Helmet>
              <script async src="https://cse.google.com/cse.js?cx=84f0c017e5e7c4519"></script>
            </Helmet>
            <div className="gcse-search"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
