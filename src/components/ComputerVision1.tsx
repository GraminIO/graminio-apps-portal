import { useState } from "react";
import { Link } from "react-router-dom"; // Make sure to import Link from react-router-dom

const ComputerVision1 = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown
  const handleDropdownClick = () => setDropdownOpen(!dropdownOpen); // Toggle dropdown
  const handleGetStarted = () => {
    // Define what happens when "Get Started" is clicked
  };

  return (
    <div className="main-container">
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="contact-info">
            <span className="email">
              <i className="fa fa-envelop"></i> business@graminio.com
            </span>
            <span className="phone">
              <i className="fa fa-whatsapp"></i> +91 90047 57685
            </span>
          </div>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <span className="separator"></span>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <span className="separator"></span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <span className="separator"></span>
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
      <nav id="menu" className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              <img
                src="/img/logo_H.png"
                alt="Brand Logo"
                className="logo-img"
              />
            </a>
          </div>

          <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#home" className="page-scroll">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  About
                </a>
              </li>
              <li className="dropdown">
                <a
                  href="#services"
                  className="page-scroll dropdown-toggle"
                  onClick={handleDropdownClick}
                  style={{ cursor: "pointer" }}
                >
                  Services <b className="caret"></b>
                </a>
                {dropdownOpen && (
                  <ol className="dropdown-menu dropdown-right">
                    <li>
                      <Link to="/computer-vision" className="page-scroll">
                        Computer Vision
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/document-transformation"
                        className="page-scroll"
                      >
                        Document Transformation & Translation
                      </Link>
                    </li>
                    <li>
                      <Link to="/tailored-ai-solution" className="page-scroll">
                        Tailored AI Solution
                      </Link>
                    </li>
                  </ol>
                )}
              </li>
              <li>
                <Link to="/blog" className="page-scroll">
                  Blog
                </Link>
              </li>
              <li>
                <button className="get-started" onClick={handleGetStarted}>
                  Get Started
                  <i className="fa fa-arrowright"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Computer Vision Section */}
      <div className="computer-vision-container">
        {/* Header Section */}
        <section className="header-section">
          <h1 className="title">
            The Future of Computer Vision: Transforming Possibilities into
            Reality
          </h1>
          <p className="description">
            Computer vision, a cornerstone of artificial intelligence, is
            revolutionizing how machines interpret and interact with the visual
            world. As we look ahead, the potential applications and advancements
            in this field are truly exciting.
          </p>
        </section>

        {/* Content Section with Images and Key Components */}
        <section className="content-section">
          <div className="image-container">
            <img
              src="/img/The_Future_of_Computer_Vision.png"
              alt="AI Image 1"
              className="main-image"
            />
          </div>

          <div className="key-components-section">
            <div className="key-components-header">
              <h2>Key Trends and Future Directions:</h2>
            </div>
            <ul className="key-components-list">
              <li>
                <strong></strong>1. Enhanced Image Recognition: From medical
                imaging to security systems, computer vision will continue to
                refine its accuracy and speed in identifying objects and
                patterns.
              </li>
              <li>
                <strong></strong>2. Augmented Reality (AR): Integrating computer
                vision with AR will offer immersive experiences in gaming ,
                education, retail, and more. Autonomous Vehicles: Advancements
                in computer vision are crucial for the development of safe and
                efficient self-driving cars, enabling them to better understand
                and navigate their surroundings.
              </li>
              <li>
                <strong></strong>3. Smart Cities: Computer vision will play a
                vital role in urban planning, traffic management, and public
                safety, creating smarter and more sustainable cities.
              </li>
              <li>
                <strong></strong>4.Industry 4.0: In manufacturing, computer
                vision will enhance quality control, predictive maintenance, and
                overall operational efficiency.
              </li>
              <div className="key-components-header">
                <h2>Why It Matters:</h2>
              </div>
              <li>
                <strong></strong>1. Innovation: Unlocking new technological
                capabilities and business models.
              </li>
              <li>
                <strong></strong>2.Efficiency: Streamlining processes and
                reducing human error.
              </li>
              <li>
                <strong></strong>3.Safety: Enhancing security and improving
                safety across various sectors.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ComputerVision1;
