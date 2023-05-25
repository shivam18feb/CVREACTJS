/**
 * The function returns a React component for a navbar with links and a message.
 * @returns A functional component for a navbar in React.
 */
import React from "react";
import { Routes , Route , useNavigate} from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const navigateToExperience =() =>{
    navigate('/experience');
  };
  const navigateToProjects =() =>{
    navigate('/projects');
  };
  const navigateToEducation =() =>{
    navigate('/education');
  };
  const navigateToSkills =() =>{
    navigate('/skills');
  };
  const navigateToContact =() =>{
    navigate('/contact');
  };
  const navigateToAbout =() =>{
    navigate('/about');
  };
  return (
   
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        id="fitnav"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Shivam Curriculum vitae
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="navbarCenter">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={navigateToExperience}>
                  Experience
                </a>
                <Routes>
                  <Route path="/experience" element={<experience/>} />
                </Routes>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={navigateToProjects}>
                  Projects
                </a>
                <Routes>
                  <Route path="/" element={<projects/>}/>
                </Routes>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={navigateToEducation}>
                  Education
                </a>
                <Routes>
                  <Route path="/" element={<education/>}/>
                </Routes>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={navigateToSkills}>
                  Skills
                </a>
                <Routes>
                  <Route path="/" element={<skills/>}/>
                </Routes>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={navigateToAbout}>
                  About Us
                </a>
                <Routes>
                  <Route path="/" element={<about/>}/>
                </Routes>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={navigateToContact}>
                  Contact Us
                </a>
                <Routes>
                  <Route path="/" element={<contact/>}/>
                </Routes>
              </li>
            </ul>
            <span className="navbar-text">
              My All Skills and Projects are show here!!
            </span>
          </div>
        </div>
      </nav>
    </div>

  );
}
