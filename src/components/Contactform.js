import React from "react";

export default function Contactform() {
  return (
    <div className="formsec">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label mb-3">
          Enter your Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@gmail.com"
        />
      </div>
      <div className="mb-8">
        <label for="exampleFormControlTextarea1" className="form-label">
          Write Message here
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder="Please write your message here......"
          rows="8"
        ></textarea>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end" id="btn1">
          <button class="btn btn-primary me-md-2" type="button">
            Button
          </button>
          <button class="btn btn-primary" type="button">
            Button
          </button>
        </div>
      </div>
    </div>
  );
}
