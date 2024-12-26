export const Footer = () => {
  return (
    <footer className="border-top footer text-muted">
      <div
        className="container-fluid bg-dark text-light footer py-6 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Get In Touch</h4>
              <img
                src="/img/Graminio_white_logo.png"
                className="img-fluid home_logo mb-2"
                alt="GraminIO Logo"
              />

              <p className="mb-2">
                <i className="fab fa-whatsapp me-3"></i>+91 90047 57685
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3"></i>business@graminio.com
              </p>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i> Navi Mumbai,
                Maharashtra 410206
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Quick Links</h4>
              <a className="btn btn-link" href="/about">
                About Us
              </a>
              <a className="btn btn-link" href="contact.html">
                Contact Us
              </a>
            </div>
            <div className="social-icons">
              <h6 className="text-white mt-4 mb-3">Follow Us</h6>
              <div className="d-flex pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div
        className="container-fluid copyright text-light py-4 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="mb-0">
                &copy; 2024{" "}
                <a className="text-white border-bottom" href="#">
                  GraminIO
                </a>
                . All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
