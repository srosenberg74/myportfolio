import React from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div>
      <h2
        className="my-3 fs-1"
        style={{ color: "#082c45a8", fontFamily: "PT Serif" }}
      >
        Portfolio
      </h2>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
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
      <p
        className="fs-5 fw-bold"
        style={{ lineHeight: "1.4", color: "#082c45d7", fontFamily: "raleway" }}
      >
        <strong className="fw-bolder fs-4" style={{ color: "#082c45" }}>
          <Link
            className="text-decoration-none"
            style={{ color: "#082c45" }}
            to="https://srosenberg74.github.io/ecard/"
            target="_blank"
          >
            Holiday Greeting Card
          </Link>
        </strong>
        <br />A Reshareable Greeting Card
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
          <Link
            className="text-decoration-none"
            style={{ color: "#082c45" }}
            to={"https://srosenberg74.github.io/decidr/"}
            target="_blank"
          >
            Decidr App
          </Link>
        </strong>
        <br />
        An app that helps you make decisions!
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
          <Link
            className="text-decoration-none"
            style={{ color: "#082c45" }}
            to={"https://luceroweb.github.io/haunted-house-game/#/"}
            target="_blank"
          >
            Haunted House Game
          </Link>
        </strong>
        <br />
        Our Apprentice Group created a fun and interactive Halloween App (Group
        Project)
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
          <Link
            className="text-decoration-none"
            style={{ color: "#082c45" }}
            to={"https://eyobel7k.github.io/team-black-panther/"}
            target="_blank"
          >
            Marvel Space
          </Link>
        </strong>
        <br />
        Our Apprentice Group created a social networking site for superheroes
        (Group Project)
        <Link
          className="text-decoration-none"
          style={{ color: "#082c45" }}
          to={"https://expo.dev/@eyobel7k/team-black-panther"}
          target="_blank"
        >
          <em>link to qr code for expo version for mobile</em>
        </Link>
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
          <Link
            className="text-decoration-none"
            style={{ color: "#082c45" }}
            to={"https://www.bridgegood.com/dragonpanda"}
            target="_blank"
          >
            Bridgegood Portfolio
          </Link>
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
          <Link
            className="text-decoration-none"
            style={{ color: "#082c45" }}
            to={"https://github.com/srosenberg74"}
            target="_blank"
          >
            Github
          </Link>
        </strong>
      </p>
    </div>
  );
}

export default Portfolio;
