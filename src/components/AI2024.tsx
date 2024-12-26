import { useState } from "react";
import { Link } from "react-router-dom"; // Make sure to import Link from react-router-dom

const AI2024 = () => {
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
          <h1 className="title">10 Most Important AI Trends for 2024</h1>
          <p className="description">
            As we move into 2024, the landscape of Artificial Intelligence
            continues to evolve at a breakneck pace. Here are the top 10 AI
            trends to watch:
          </p>
        </section>

        {/* Content Section with Images and Key Components */}
        <section className="content-section">
          <div className="image-container">
            <img
              src="/img/10_Most_Important_AI_Trends_for_2024.png"
              alt="AI Image 1"
              className="main-image"
            />
          </div>

          <div className="key-components-section">
            <div className="key-components-header">
              <h2>10 Most Important AI Trends for 2024</h2>
            </div>
            <ul className="key-components-list">
              <li>
                <strong></strong>Generative AI: From text to images to music,
                generative models like GPT-4 and DALL-E are pushing the
                boundaries of creativity and productivity.
              </li>
              <li>
                <strong></strong>1. AI Ethics and Regulation: As AI's influence
                grows, so does the focus on ethical AI practices and regulatory
                frameworks to ensure fairness, transparency, and accountability.
              </li>
              <li>
                <strong></strong>2. AI in Healthcare: AI-driven diagnostics,
                personalized treatment plans, and drug discovery are
                transforming healthcare delivery and patient outcomes.
              </li>
              <li>
                <strong></strong>3. Edge AI: Processing data locally on devices
                (edge computing) enhances privacy, reduces latency, and enables
                real-time decision-making.
              </li>
              <li>
                <strong></strong>4. Edge AI: Processing data locally on devices
                (edge computing) enhances privacy, reduces latency, and enables
                real-time decision-making.
              </li>
              <li>
                <strong></strong>5. Explainable AI (XAI): Ensuring AI models are
                transparent and understandable is crucial for trust and adoption
                across critical sectors.
              </li>
              <li>
                <strong></strong>6. AI for Climate Action: AI is playing a
                pivotal role in climate modeling, renewable energy management,
                and sustainability efforts.
              </li>
              <li>
                <strong></strong>7. Natural Language Processing (NLP) Advances:
                More sophisticated NLP models are improving human-computer
                interactions, enabling better understanding and generation of
                human language.
              </li>
              <li>
                <strong></strong>8. AI in Cybersecurity: AI-driven threat
                detection and response systems are becoming essential to counter
                increasingly sophisticated cyberattacks.
              </li>
              <li>
                <strong></strong>9. Automated Machine Learning (AutoML):
                Simplifying the AI model development process, AutoML is making
                AI accessible to non-experts and accelerating innovation.
              </li>
              <li>
                <strong></strong>10. Human-AI Collaboration: Augmenting human
                capabilities with AI is enhancing productivity and enabling new
                forms of creative and strategic work.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AI2024;
