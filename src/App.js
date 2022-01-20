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
    <div className="container">
      <div className="row g-lg-0">
        <div className="col-lg-8 mx-auto">
          <div className="bg-white m-3 p-3 border rounded-3 clearfix">
            <HashRouter>
              <Nav />
              <div className="main">
                <Routes>
                  <Route exact path="/" element={<Profile />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/study" element={<Study />} />
                  <Route path="/career" element={<Career />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                </Routes>
              </div>
            </HashRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
