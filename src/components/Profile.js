import React from "react";
import Sam from "../images/Sam.jpg";

function Profile() {
  return (
    <div className="profile">
      <div>
        <img
          src={Sam}
          alt={""}
          className="img-fluid d-md-none border rounded-1 me-4 mt-2"
        />
        <img
          src={Sam}
          alt={""}
          className="w-50 float-md-start d-none d-md-block mb-2 me-4 mt-2"
        />
      </div>
      <div className="mb-2">
        <h1
          className="my-3 fs-1"
          style={{color: "#082c45a8", fontFamily: "PT Serif", scrollPadding: "70px"}}
        >
          Profile
        </h1>
        <p
          className="fs-5 fw-bold"
          style={{lineHeight: 1.4, color: "#082c45d7", fontFamily: "raleway"}}
        >
          I am a React Apprentice at Alphaworks (a subsidiary of Bitwise
          Industries). I am incredibly curious and have a huge thirst for
          knowledge. I am on a mission to gather as many tech skills as I can to
          create the things I dream up, and to become a valuable member of any
          team.
        </p>
      </div>
    </div>
  );
}

export default Profile;
