import React, { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [invalidMessage, setInvalidMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = () => {
    if (!email.includes("@")) {
      setInvalidMessage("Please provide a valid email");
    } else {
      setInvalidMessage("");
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  };

  return (
    <section className="home-section-header">
      <div className="px-lg-5">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="logo my-4">
                  <img src="https://baseapparelcomingsoonmaster.netlify.app/Assest/images/logo.svg" alt="logo" />
                </div>
                <ul className="d-flex list-unstyled nav-list my-3">
                  <li onClick={() => (window.location.href = "about.html")}>About</li>
                  <li onClick={() => (window.location.href = "services.html")}>Services</li>
                </ul>
              </div>

              <div className="d-lg-none" >
                <img src="https://baseapparelcomingsoonmaster.netlify.app/Assest/images/hero-desktop.jpg" alt="" className="mobile-image"/>
              </div>

              <div className="content d-flex justify-content-between align-items-center text-center">
                <div>
                  <p className="display-4 my-0 weare">WE'RE</p>
                  <p className="word-one display-4 my-0 fw-bold">COMING</p>
                  <p className="word-two display-4 my-0 fw-bold">SOON</p>
                  <p id="desc">
                    Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
                  </p>
                  <div>
                    <div className="d-flex px-0 py-2">
                      <div className="input-div py-2 border d-flex">
                        <input
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="email-input border-0 py-1 px-3"
                          placeholder="Enter email address..."
                        />
                        <span className="danger-icon">
                          {invalidMessage && (
                            <i className="text-danger ri-error-warning-fill"></i>
                          )}
                        </span>
                      </div>
                      <div>
                        <button
                          className="btn submit-btn text-white"
                          title="submit email"
                          onClick={handleSubmit}
                        >
                          <i className="fas fa-angle-right"></i>
                        </button>
                      </div>
                    </div>
                    <div>
                      <p
                        className="mx-3 text-danger fw-bold"
                        style={{ fontSize: "13px" }}
                      >
                        {invalidMessage}
                      </p>
                    </div>
                    {showSuccess && (
                      <div
                        className="position-fixed d-block bg-white rounded bottom-0 end-0 p-3 my-2 mx-2"
                        style={{ zIndex: 11 }}
                      >
                        <div id="liveToast">
                          <div className="toast-header">
                            <img
                              src="https://baseapparelcomingsoonmaster.netlify.app/Assest/images/logo.svg"
                              className="rounded me-2"
                              alt="..."
                            />
                          </div>
                          <div className="toast-body">
                            Your email has been submitted.
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="her-sec-img d-none d-lg-flex">
              <img
                src="https://baseapparelcomingsoonmaster.netlify.app/Assest/images/hero-desktop.jpg"
                alt="a smiling young lady"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
