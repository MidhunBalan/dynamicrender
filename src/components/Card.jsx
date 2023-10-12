import React from "react";

function Card({ children }) {
  return (
    <React.Fragment>
      <div>Main</div>
      <div>{children}</div>
    </React.Fragment>
  );
}

export default Card;
