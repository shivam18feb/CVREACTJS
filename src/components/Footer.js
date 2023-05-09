import React from 'react'

export default function footer() {
  return (
<div className="container my-5" id="fitfooter">
          <footer className="text-center text-lg-start text-white " id="color">
            <div className="container p-4 pb-0">
              <section>
                <div className="row">
                  <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold">
                      Shivam Pandey
                    </h5>
                    <p>
                      This CV show the skills of Reactjs with HTML CSS JAVASCRIPT BOOTSTARP
                    </p>
                  </div>

                  <hr className="w-100 clearfix d-md-none" />

                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">
                      Products
                    </h6>
                    <p>
                      <a className="text-white" href="/">
                        MDBootstrap
                      </a>
                    </p>
                    <p>
                      <a className="text-white" href="/">
                        MDWordPress
                      </a>
                    </p>
                    <p>
                      <a className="text-white" href="/">
                        BrandFlow
                      </a>
                    </p>
                    <p>
                      <a className="text-white" href="/">
                        Bootstrap Angular
                      </a>
                    </p>
                  </div>

                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">
                      Contact
                    </h6>
                    <p>
                      <i className="fas fa-home mr-3"></i> Praygraj, Uttar Pradesh
                      US
                    </p>
                    <p>
                      <i className="fas fa-envelope mr-3"></i> Shivam18feb@gmail.com
                    </p>
                    <p>
                      <i className="fas fa-phone mr-3"></i> + 91 8299576922
                    </p>
                    <p>
                      <i className="fas fa-print mr-3"></i> + 91 8542944471
                    </p>
                  </div>

                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3" id="follow">
                    <h6 className="text-uppercase mb-4 font-weight-bold">
                      Follow us
                    </h6>

                    <a
                      className="btn btn-primary btn-floating m-1"
                      id="btncolor"
                      href="/"
                      role="button"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>

                    <a
                      className="btn btn-primary btn-floating m-1"
                      href="/"
                      role="button"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>

                    <a
                      className="btn btn-primary btn-floating m-1"
                      href="/"
                      role="button"
                    >
                      <i className="fab fa-google"></i>
                    </a>

                    <a
                      class="btn btn-primary btn-floating m-1"
                      href="/"
                      role="button"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>

                    <a
                      className="btn btn-primary btn-floating m-1"
                      href="/"
                      role="button"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>

                    <a
                      className="btn btn-primary btn-floating m-1"
                      href="/"
                      role="button"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </section>
            </div>

            <div className="text-center p-3" id="date">
              © 2023 Copyright:
              <a className="text-white" href="/">
                ShivamCumulativevita
              </a>
            </div>
          </footer>
        </div>
  )
}