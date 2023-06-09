/**
 * The function returns a React component that displays information about three different projects.
 * @returns A React component that renders a project box with three cards displaying information about
 * different projects. The first card is about an Employee Management System, the second card is about
 * an Age Calculator, and the third card is about making a CV using Django and hosting it on
 * Pythonanywhere.com.
 */
import React from "react";

export default function Project() {
  return (
    <div className="projectbox">
      <div className="card-group">
        <div className="card">
          <div></div>

          <div className="card-body">
            <h4 className="card-title">Empolyee Management System</h4>
            <h6>About the Project</h6>
            <p className="card-text">
              In this Project Admin can easily Add New Employee / Remove / Edit
              & Delete the employee data.{" "}
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                Start:-0000000 End:-0000000
              </small>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Age Calculator</h2>
            <p className="card-text">Please Enter Your Date of Birth</p>
            <main id="root"></main>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">
              Make CV by Django and host by PythonanyWhere.com
            </h4>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
