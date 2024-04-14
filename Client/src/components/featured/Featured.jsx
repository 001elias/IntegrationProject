import React from "react";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
           Explore the <span>offerme</span> services
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="/src/img/search.png" alt="" />
              <input type="text" placeholder='Try "Logo Designing"' />
            </div>
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;