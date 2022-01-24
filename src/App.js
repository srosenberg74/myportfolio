import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Career from "./components/Career";
import Profile from "./components/Profile";
import Study from "./components/Study";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import Content from "./components/Content";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="main pb-5">
      <div className="pt-4 mt-5"></div>
      <div
        className="container pb-3 rounded-2 mx-auto my-3 clearfix main-container"
        style={{ }}
      >
        <HashRouter>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Profile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/study" element={<Study />} />
            <Route path="/career" element={<Career />} />
            <Route path="/education" element={<Education />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
