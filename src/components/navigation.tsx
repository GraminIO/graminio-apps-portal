import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export const Navigation = () => {
  const [webDevDropdown, setWebDevDropdown] = useState(false);
  const [aiDropdown, setAIDropdown] = useState(false);
  const [dataScienceDropdown, setDataScienceDropdown] = useState(false);

  return (
    <header>
    {/* Top bar */}
    <div className="container-fluid bg-dark text-light p-0">
      <div className="row gx-0 d-none d-lg-flex">
        <div className="col-lg-7 px-5 text-start"></div>
        <div className="col-lg-5 px-5 text-end">
          <div className="h-100 d-inline-flex align-items-center me-2">
            <small className="far fa-envelope  text-primary me-2"></small>
            <small>business@graminio.com</small>
          </div>
          <div className="h-100 d-inline-flex align-items-center me-4">
            <small className="fab fa-whatsapp text-primary me-2"></small>
            <small>+91 90047 57685</small>
          </div>
          <div className="h-100 d-inline-flex align-items-center mx-n2">
            <a
              className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" target="_blank"
              href="https://www.facebook.com/GraminIOTech/"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" target="_blank"
              href="https://twitter.com/graminiotech"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" target="_blank"
              href="https://www.linkedin.com/company/graminio-technologies-pvt-ltd/"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="btn btn-square btn-link rounded-0" target="_blank"
              href="https://www.instagram.com/graminiotechnologies/"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a
          href="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
<img src="/img/logo_H.png" className="img-fluid home_logo" alt="Logo" />

        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="/" className="nav-item nav-link active">
              Home
            </a>
            <a href="/about" className="nav-item nav-link">
              About
            </a>

            {/* Services Dropdown */}
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
              <div className="dropdown-menu bg-light m-0">
                
                {/* Web Development Dropdown */}
                <div className="dropdown-item position-relative" style={{ cursor: "pointer" }} onClick={() => setWebDevDropdown(!webDevDropdown)}>
                  Web Development ▾
                  {webDevDropdown && (
                    <div className="dropdown-menu bg-light position-absolute start-100 top-0 mt-0 ms-2 show">
                      <Link to="/frontend" className="dropdown-item">Web App Development</Link>
                      <Link to="/backend" className="dropdown-item"> Android Development</Link>
                    </div>
                  )}
                </div>

                {/* Artificial Intelligence Dropdown */}
                <div className="dropdown-item position-relative" style={{ cursor: "pointer" }} onClick={() => setAIDropdown(!aiDropdown)}>
                  Artificial Intelligence ▾
                  {aiDropdown && (
                    <div className="dropdown-menu bg-light position-absolute start-100 top-0 mt-0 ms-2 show">
                      <Link to="/document-transformation" className="dropdown-item">Machine Learning</Link>
                      <Link to="/tailored-ai-solution" className="dropdown-item">Computer Vision</Link>
                      <Link to="/tailored-ai-solution" className="dropdown-item">AI-Powered Automation</Link>

                    </div>
                  )}
                </div>

                {/* Data Science Dropdown */}
                <div className="dropdown-item position-relative" style={{ cursor: "pointer" }} onClick={() => setDataScienceDropdown(!dataScienceDropdown)}>
                  Data Solution ▾
                  {dataScienceDropdown && (
                    <div className="dropdown-menu bg-light position-absolute start-100 top-0 mt-0 ms-2 show">
                      <Link to="/data-analysis" className="dropdown-item">Data Management</Link>
                      <Link to="/machine-learning" className="dropdown-item">Data Analytics</Link>
                      <Link to="/predictive-modeling" className="dropdown-item">Data Science</Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <a href="/blog" className="nav-item nav-link">
              Blog
            </a>
          </div>
          <a
            href="/contactus"
            className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
          >
            Get Started<i className="fa fa-arrow-right ms-3"></i>
          </a>
        </div>
      </nav>
    </header>
  );
};
