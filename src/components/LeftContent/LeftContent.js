import React from "react";
import PointsContainer from "../PointsContainer/PointsContainer";

const LeftContent = () => (
  <div className="left-content">
    <h2>
      Access curated courses worth{" "}
      <span style={{ fontFamily: "sansarif" }}>
        &#8377;{" "}
        <span id="actual-price-line-through">
          <span id="actual-price">18,500</span>
        </span>{" "}
      </span>
      at just <span id="current-price">&#8377; 99</span> per year!
    </h2>
    <PointsContainer />
  </div>
);

export default LeftContent;
