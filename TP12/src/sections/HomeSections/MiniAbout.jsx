import React from "react";

function MiniAbout() {
  return (
    <div className="best-features">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>About Us</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="left-content">
              <h4>Looking for the best cars?</h4>
              <p>
                <a
                  rel="nofollow"
                  href="https://templatemo.com/tm-546-sixteen-clothing"
                  target="_parent"
                >
                 Exotic Cars
                </a>{" "}
                is the perfect e-commerce for you. This company has the perfect combination between love and passion.{" "}
              
              </p>
              <ul className="featured-list">
                <li>
                  <a href="#">Best price</a>
                </li>
                <li>
                  <a href="#">Best cars</a>
                </li>
                <li>
                  <a href="#">Best attention</a>
                </li>
                <li>
                  <a href="#">Best sellers</a>
                </li>
                <li>
                  <a href="#">Best clients</a>
                </li>
              </ul>
              <a href="about.html" className="filled-button">
                Read More
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-image">
              <img src="assets/images/feature-image.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniAbout;
