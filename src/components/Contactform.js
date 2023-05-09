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
          class="form-control"
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
          rows="8"
        ></textarea>
      </div>
    </div>
  );
}
