import React from "react";

const Point = (props) => {
  const { icon, content } = props;
  return (
    <div className="points">
      <img src={icon} />
      <div>{content}</div>
    </div>
  );
};

export default Point;
