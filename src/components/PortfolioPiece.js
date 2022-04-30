import React from 'react'

function PortfolioPiece({videoURL,siteAddress, githubAddress, description, title, playbackRate, currentTime}) {
  return (
    <div className="col-md-6 col-xl-4">
          <div className="portfolio-piece mx-auto my-5 px-3">
            <video
              width="180"
              height="105"
              onMouseOver={(event) => {
                event.target.play();
                event.target.playbackRate = {playbackRate};
                event.target.currentTime = {currentTime}
              }}
              onMouseOut={(event) => event.target.pause()}
              muted
            >
              <source src={videoURL} type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <p
              className="fs-5 fw-bold card-text"
            >
              <strong className="fw-bolder fs-4" style={{ color: "#082c45" }}>
                <a
                  className=""
                  style={{ color: "#082c45" }}
                  href={siteAddress}
                  target="_blank"
                  rel="noreferrer"
                >
                  {title}
                </a>
              </strong>
              <br />{description}
              {githubAddress &&
              <a
                href={githubAddress}
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className="fab fa-github fa-lg icon"
                  style={{ color: "#082c45" }}
                ></i>
              </a>
}
            </p>
          </div>
        </div>
  )
}

export default PortfolioPiece