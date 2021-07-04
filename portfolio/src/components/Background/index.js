import React from "react";
import "./style.css";
import spider from "../../img/spider-bg.jpg";

function Background() {
  // set variable to change with page
  const img = spider;
  return (
    <div
      id="background"
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></div>
  );
}

export default Background;
