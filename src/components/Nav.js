import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const style1 = {
    backgroundColor: "#082c45",
    fontFamily: "licorice",
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top px-3"
        style={style1}
      >
        <div className="container-fluid">
          <Link className="navbar-brand fs-2 nav-item" to={"/"}>
            Sam Rosenberg
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/profile"}
                >
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/study"}>
                  Areas of Study
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/career"}>
                  Career Development
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/education"}>
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/portfolio"}>
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
