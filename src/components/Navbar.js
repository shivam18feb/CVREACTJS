/**
 * The function returns a React component for a navbar with links and a message.
 * @returns A functional component for a navbar in React.
 */

import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="fitnav">
        <div className="container-fluid">
          <a className="navbar-brand" onClick={() => navigate("/")}>
            Shivam Curriculum vitae
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="navbarCenter">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" onClick={() => navigate("/")}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate("/experience")}>
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate("/projects")}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate("/education")}>
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate("/skills")}>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate("/about")}>
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate("/contact")}>
                Contact Us
              </a>
            </li>
          </ul>
          <span className="navbar-text">
            My All Skills and Projects are show here!!
          </span>
        </div>
      </nav>
    </div>
  );
}