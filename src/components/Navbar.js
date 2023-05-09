import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id='fitnav'>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Shivam Curriculum vitae</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="navbarCenter">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contact Us</a>
              </li>
            </ul>
            <span className="navbar-text">
             My All Skills and Projects are show here!!
            </span>
          </div>
        </div>
      </nav>
      
    </div>
  )
}
