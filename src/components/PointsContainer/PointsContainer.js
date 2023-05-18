import React from "react";
import Point from "../point/point";
import Courses from "../../assets/courses.svg";
import Live from "../../assets/live.svg";
import Scholar from "../../assets/scholar.svg";
import Ads from "../../assets/ads.svg";
import Timer from "../../assets/timer.svg";

const PointsContainer = () => (
  <ul>
    <li>
      <Point
        icon={Courses}
        content={
          <>
            <span className="highlight-word">100+</span> Job relevant courses
          </>
        }
      />
    </li>

    <li>
      <Point
        icon={Timer}
        content={
          <>
            <span className="highlight-word">20,000+</span> Hours of content
          </>
        }
      />
    </li>

    <li>
      <Point
        icon={Live}
        content={
          <>
            <span className="highlight-word">Exclusive</span> webinar access
          </>
        }
      />
    </li>

    <li>
      <Point
        icon={Scholar}
        content={
          <>
            Scholarship worth{" "}
            <span className="highlight-word">&#8377;94,500</span>
          </>
        }
      />
    </li>

    <li>
      <Point
        icon={Ads}
        content={
          <>
            <span className="highlight-word">Ad Free</span> learning experience
          </>
        }
      />
    </li>
  </ul>
);

export default PointsContainer;
