import React from "react";
import "./head.css"
function Head() {
  return (
    <div className="conatiner Header grid text-center">
      <div className="logo g-col-6">
        <img id= "im1" src={require("../Images/bn.png")} alt="Breaking news" />
        <img id="im2" src={require("../Images/ns.png")} alt="news" />
      </div>
    </div>
  );
}

export default Head;
