/**
 * The function returns a React component that displays the author's education qualifications in a
 * formatted manner.
 * @returns A React component called "Education" is being returned. It contains HTML elements that
 * display information about the author's education qualifications, including the name of the school,
 * degree, and passing year.
 */
import React from "react";

export default function Education() {
  return (
    <div className="educationbox">
      <div className="edubox">
        <h2>Our Education Qualification</h2>
      </div>
      <div className="container">
        <div className="edubox">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body-0">
                <h5 className="card-title">HighSchool</h5>
                <h4 className="card-text">Maharishi Vidya Mandir</h4>
                <p className="card-text">Passing Year in 2011.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="edubox">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body-0">
                <h5 className="card-title">Intermediate</h5>
                <h4 className="card-text">Maharishi Vidya Mandir</h4>
                <p className="card-text">Passing Year in 2013.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="edubox">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body-0">
                <h5 className="card-title">Graduation</h5>
                <h5 className="card-text">
                  <p>Bachelor in Computer Application(BCA)</p>
                  <p>
                    Sam Higginbottom University of Agriculture, Technology and
                    Sciences ( SHUATS ),
                  </p>
                  <p>
                    formerly Allahabad Agricultural Institute, is a
                    government-aided university in Prayagraj,
                  </p>
                  <p>Uttar Pradesh</p>{" "}
                </h5>
                <p className="card-text">Passing Year in 2016.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="textitem">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body-0">
              <h5 className="card-title">Post Graduation</h5>
              <h5 className="card-text">
                <p>Master in Computer Application(MCA)</p>
                <p>Inegral University</p>
                <p>Lucknow ,Uttar Pradesh</p>
              </h5>
              <p className="card-text">Passing Year in 2021.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
