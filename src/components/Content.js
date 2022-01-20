import React from "react";
import Career from "./Career";
import Profile from "./Profile";
import Study from "./Study";
import Education from "./Education";
import Portfolio from "./Portfolio";

function Content() {
  return (
    <div>
      <div className="pt-4 mt-5"></div>
      <div
        className="container p-2 px-4 border border-secondary rounded-2 mx-auto w-75 my-3"
        style={{ width: "80vw", backgroundColor: "#dfdddd" }}
      ></div>
      <Profile />
      <Study />
      <Career />
      <Education />
      <Portfolio />
    </div>
  );
}

export default Content;
