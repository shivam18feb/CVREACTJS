import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Education from "./components/Education";
import Project from "./components/Project";
import Contactform from "./components/Contactform";
import Footer from "./components/Footer";
import img1 from "./images/profilepic.jpg";
function App() {
  return (
    <>
      <body>
        <div className="navcolor">
          <Navbar />
        </div>
        <div className="mainpostion">
          <div className="postion">
            <img src={img1} alt="" />
          </div>
          <div className="postion2">
            <Intro />
          </div>
        </div>
        <div className="container">
          <Education />
        </div>
        <div className="container-mb-3">
          <div className="projecthead">
            <h1>Our Projects And Discription ... </h1>
          </div>
          <Project />

        </div>
        <div className="container" id="adjust">
          <Contactform/>
        </div>
        <div>
          <Footer/>
        </div>
      </body>
    </>
  );
}

export default App;
