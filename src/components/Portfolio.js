import React from "react";
import "../App.css";
import PortfolioPiece from "./PortfolioPiece";
import Data from "./Data";

function Portfolio() {

  const generateItems = Data.map((piece, index) => {
    return (
      <PortfolioPiece
      videoURL={piece.videoURL}
      title={piece.title}
      description={piece.description}
      siteAddress={piece.siteAddress}
      githubAddress={piece.githubAddress}
      playbackRate={piece.playbackRate}
      currentTime={piece.currentTime}
      />
    )
  }
  )
  return (
    <div>
      <h1
        className="mb-2 mt-4 text-center portfolio-header"
        style={{ color: "#082c45a8", fontFamily: "PT Serif", fontSize: "60px" }}
      >
        Portfolio
      </h1>
      <div className="row mx-auto text-center">
        {generateItems}
        <p
          className="fs-5 fw-bold mt-3 pt-3 touchable"
          style={{
            lineHeight: "1.4",
            color: "#082c45d7",
            fontFamily: "raleway",
            minHeight: "150px",
            padding: "10px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <strong className="fw-bolder fs-1" style={{ color: "#082c45" }}>
            <a
              className=""
              style={{ color: "#082c45" }}
              href="https://github.com/srosenberg74"
              target="_blank"
              rel="noreferrer"
            >
              My Github
              <i className="fab fa-github fa-2x icon"></i>
            </a>
          </strong>
        </p>
      </div>
    </div>
  );
}

export default Portfolio;
