export const Navigation = () => {
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
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Services
              </a>
              <div className="dropdown-menu bg-light m-0">
                <a href="/computer-vision" className="dropdown-item">
                  Computer Vision
                </a>
                <a href="/document-transformation" className="dropdown-item">
                  Document Tranformation & Translation
                </a>
                <a href="/tailored-ai-solution" className="dropdown-item">
                  Tailored AI Solution
                </a>
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
