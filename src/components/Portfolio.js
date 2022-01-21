import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import CardVideo from "../Gifs/Video/Card.webm";
import DecidrVideo from "../Gifs/Video/Decidr.webm";
import HauntedHouse from "../Gifs/Video/HauntedHouse.webm";
import Ashe from "../Gifs/Video/Ashe.webm";
import Marvel from "../Gifs/Video/Marvel.webm";
import Guitarists from "../Gifs/Video/Guitarists.webm";
import DragonBattle from "../Gifs/Video/DragonBattle.webm";
import DragonBodyguard from "../Gifs/Video/DragonBodyguard.webm";
import Sisters from "../Gifs/Video/Sisters.webm";

function Portfolio() {
  return (
    <div>
      <div className="w-75 mx-auto mt-5 mb-0 pb-0">
        <div
          id="carouselExampleControls"
          className="carousel slide w-50 mx-auto"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <video width="340" height="270" autoPlay muted loop>
                <source src={CardVideo} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="carousel-item">
              <video width="340" height="270" autoPlay muted loop>
                <source src={DecidrVideo} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="carousel-item">
              <video width="340" height="270" autoPlay muted loop>
                <source src={HauntedHouse} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="carousel-item">
              <video width="340" height="270" autoPlay muted loop>
                <source src={Marvel} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="carousel-item">
              <video width="340" height="270" autoPlay muted loop>
                <source src={Guitarists} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="carousel-item">
              <video width="340" height="270" autoPlay muted loop>
                <source src={Ashe} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="carousel-item">
              <video width="340" height="270" autoPlay muted loop>
                <source src={Sisters} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="carousel-item">
              <video width="340" height="270" autoPlay muted loop>
                <source src={DragonBodyguard} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="carousel-item">
              <video width="340" height="270" autoPlay muted loop>
                <source src={DragonBattle} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <h2
        className="my-3 fs-1 text-center"
        style={{ color: "#082c45a8", fontFamily: "PT Serif" }}
      >
        Portfolio
      </h2>
      <div className="row mx-auto text-center">
        <div className="col-6">
          <video width="340" height="340" autoPlay muted loop>
            <source src={CardVideo} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <p
            className="fs-5 fw-bold"
            style={{
              lineHeight: "1.4",
              color: "#082c45d7",
              fontFamily: "raleway",
            }}
          >
            <strong className="fw-bolder fs-4" style={{ color: "#082c45" }}>
              <a
                className=""
                style={{ color: "#082c45" }}
                href="https://srosenberg74.github.io/ecard/"
                target="_blank"
                rel="noreferrer"
              >
                Holiday Greeting Card
              </a>
            </strong>
            <br />A Reshareable Greeting Card
          </p>
        </div>
        <div className="col-6">
          <video width="340" height="340" autoPlay muted loop>
            <source src={DecidrVideo} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <p
            className="fs-5 fw-bold"
            style={{
              lineHeight: "1.4",
              color: "#082c45d7",
              fontFamily: "raleway",
            }}
          >
            <strong className="fw-bolder fs-4" style={{ color: "#082c45" }}>
              <a
                className="text-decoration-none"
                style={{ color: "#082c45" }}
                href="https://srosenberg74.github.io/decidr/"
                target="_blank"
                rel="noreferrer"
              >
                Decidr App
              </a>
            </strong>
            <br />
            An app that helps you make decisions!
          </p>
        </div>
        <div className="col-6">
          <video width="340" height="340" autoPlay muted loop>
            <source src={HauntedHouse} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <p
            className="fs-5 fw-bold"
            style={{
              lineHeight: "1.4",
              color: "#082c45d7",
              fontFamily: "raleway",
            }}
          >
            <strong className="fw-bolder fs-4" style={{ color: "#082c45" }}>
              <a
                className="text-decoration-none"
                style={{ color: "#082c45" }}
                href="https://luceroweb.github.io/haunted-house-game/#/"
                target="_blank"
                rel="noreferrer"
              >
                Haunted House Game
              </a>
            </strong>
            <br />
            Our Apprentice Group created a fun and interactive Halloween App
            (Group Project)
          </p>
        </div>
        <div className="col-6">
          <video width="340" height="340" autoPlay muted loop>
            <source src={Marvel} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <p
            className="fs-5 fw-bold"
            style={{
              lineHeight: "1.4",
              color: "#082c45d7",
              fontFamily: "raleway",
            }}
          >
            <strong className="fw-bolder fs-4" style={{ color: "#082c45" }}>
              <a
                className="text-decoration-none"
                style={{ color: "#082c45" }}
                href="https://eyobel7k.github.io/team-black-panther/"
                target="_blank"
                rel="noreferrer"
              >
                Marvel Space
              </a>
            </strong>
            <br />
            Our Apprentice Group created a social networking site for
            superheroes (Group Project)
            <a
              className="text-decoration-none"
              style={{ color: "#082c45" }}
              href="https://expo.dev/@eyobel7k/team-black-panther"
              target="_blank"
              rel="noreferrer"
            >
              <em>link to qr code for expo version for mobile</em>
            </a>
          </p>
          <p
            className="fs-5 fw-bold"
            style={{
              lineHeight: "1.4",
              color: "#082c45d7",
              fontFamily: "raleway",
            }}
          >
            <strong className="fw-bolder fs-4" style={{ color: "#082c45" }}>
              <a
                className="text-decoration-none"
                style={{ color: "#082c45" }}
                href="https://www.bridgegood.com/dragonpanda"
                target="_blank"
                rel="noreferrer"
              >
                Bridgegood Portfolio
              </a>
            </strong>
            <br />
            My page on Bridgegood.com, featuring several of my other projects
            spanning web design and video games
          </p>
          <p
            className="fs-5 fw-bold"
            style={{
              lineHeight: "1.4",
              color: "#082c45d7",
              fontFamily: "raleway",
            }}
          >
            <strong className="fw-bolder fs-4" style={{ color: "#082c45" }}>
              <a
                className="text-decoration-none"
                style={{ color: "#082c45" }}
                href="https://github.com/srosenberg74"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
