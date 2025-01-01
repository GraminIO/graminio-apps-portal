import { useState, useEffect } from "react";
import { TechStack } from "./TechStack";

export const Dashboard = () => {
  const images = ["/img/carousel-3.jpg", "/img/carousel-4.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="for_main_Section">
        <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
          <div id="header-carousel" className="carousel slide">
            {/* Carousel Items */}
            <div className="carousel-inner">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-item ${
                    index === currentImageIndex ? "active" : ""
                  }`}
                >
                  <img className="w-100" src={image} alt={`Slide ${index}`} />
                  <div className="carousel-caption">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-lg-7">
                          {index === 0 && (
                            <>
                              <p>Innovation at Your Fingertips</p>
                              <h1 className="display-6 text-light mb-5 animated slideInDown">
                                Transforming Ideas into Reality with
                                Cutting-Edge AI Software Solutions
                              </h1>
                            </>
                          )}
                          {index === 1 && (
                            <>
                              <p>Your Vision, Our Code</p>
                              <h1 className="display-6 text-light mb-5 animated slideInDown">
                                Tailored AI Software Solutions to Elevate Your
                                Business
                              </h1>
                            </>
                          )}
                          <a
                            href="/about"
                            className="btn btn-primary py-sm-3 px-sm-5"
                          >
                            Learn More
                          </a>
                          <a
                            href="/contactus"
                            className="btn btn-light py-sm-3 px-sm-5 ms-3"
                          >
                            Contact
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              className="carousel-control-prev"
              type="button"
              onClick={() =>
                setCurrentImageIndex(
                  currentImageIndex === 0
                    ? images.length - 1
                    : currentImageIndex - 1
                )
              }
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              onClick={() =>
                setCurrentImageIndex(
                  currentImageIndex === images.length - 1
                    ? 0
                    : currentImageIndex + 1
                )
              }
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid facts py-5 pt-lg-0">
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div className="bg-white shadow d-flex align-items-center h-100 p-4">
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square bg-primary">
                    <i className="fa fa-car text-white"></i>
                  </div>
                  <div className="ps-4">
                    <h5>Diverse Expertise </h5>
                    <span>
                      Wide range of expertise, from web and mobile app
                      development to custom software solutions.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
              <div className="bg-white shadow d-flex align-items-center h-100 p-4">
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square bg-primary">
                    <i className="fa fa-users text-white"></i>
                  </div>
                  <div className="ps-4">
                    <h5>Results-Driven</h5>
                    <span>
                      Believe in measurable results. Perform exceptionally and
                      drive real business outcomes.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <div className="bg-white shadow d-flex align-items-center h-100 p-4">
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square bg-primary">
                    <i className="fa fa-file text-white"></i>
                  </div>
                  <div className="ps-4">
                    <h5>Client Collaboration</h5>
                    <span>
                      Valuing input throughout the project lifecycle to ensure
                      the final product exceeds expectations
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-6">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="position-relative overflow-hidden ps-5 pt-5 h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src="img/about-1.jpg"
                  alt=""
                />
                <img
                  className="position-absolute top-0 start-0 bg-white pe-3 pb-3"
                  src="img/about-2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h6 className="text-primary text-uppercase mb-2">About Us</h6>
                <h1 className="display-6 mb-4">
                  The Best IT Solution - Transforming Ideas into Innovative
                  Software Solutions
                </h1>
                <p>
                  Welcome to GraminIO! We are a dynamic and forward-thinking
                  software company with a passion for creating cutting-edge
                  solutions that drive business growth.
                </p>
                <p className="mb-4">
                  With a dedicated team of experienced developers, designers,
                  and project managers, we specialize in delivering top-notch
                  software development and design services tailored to our
                  clients' unique needs.
                </p>
                <div className="row g-2 mb-4 pb-2">
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>Diverse
                    Expertise
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>24/7
                    Support
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>
                    Professional Staff
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>Fair Prices
                  </div>
                </div>
                <div className="row g-4">
                  <div className="col-sm-6">
                    <a className="btn btn-primary py-3 px-5" href="/about">
                      Read More
                    </a>
                  </div>
                  <div className="col-sm-6">
                    <a
                      className="d-inline-flex align-items-center btn btn-outline-primary border-2 p-2"
                      href="tel:+919004757685"
                    >
                      <span className="flex-shrink-0 btn-square bg-primary">
                        <i className="fab fa-whatsapp text-white"></i>
                      </span>
                      <span className="px-3">+91 90047 57685</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl courses my-6 py-6 pb-0">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h6 className="text-primary text-uppercase mb-2">WHY CHOOSE US</h6>
            <h1 className="display-6 mb-4">Unleash the Power of Innovation</h1>
            <p>
              In a fast-paced digital landscape where innovation is the key to
              success, choosing the right software partner is crucial.
            </p>
            <p>
              At GraminIO, we understand that your technology needs are unique,
              and we are committed to being the catalyst that propels your
              business towards unmatched success. Here's why you should choose
              us as your trusted software solutions provider:{" "}
            </p>
          </div>
          <div className="row g-4 justify-content-center" id="appoinment_form">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                <div className="text-center p-4">
                  <h5 className="mb-3">Expertise that Counts</h5>
                  <p>
                    With a team of seasoned professionals who are at the
                    forefront of technology trends, we bring years of experience
                    and unparalleled expertise to the table. We don't just
                    follow industry standards; we set them.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                <div className="text-center p-4">
                  <h5 className="mb-3">Tailored Solutions</h5>
                  <p>
                    We believe in the power of customization. Our solutions are
                    tailor-made to suit your specific requirements. Whether you
                    need a robust enterprise software or a user-friendly mobile
                    app, we've got you covered
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                <div className="text-center p-4">
                  <h5 className="mb-3">Client-Centric Approach</h5>
                  <p>
                    Your success is our success. We value our clients' input and
                    actively involve them in the development process. We are
                    committed to delivering solutions that not only meet but
                    exceed your expectations.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                <div className="text-center p-4">
                  <h5 className="mb-3">Innovative Approach</h5>
                  <p>
                    Innovation is in our DNA. We thrive on pushing the
                    boundaries of what's possible. When you partner with us, you
                    gain access to cutting-edge technologies and fresh ideas
                    that will set you apart from the competition..
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                <div className="text-center p-4">
                  <h5 className="mb-3">Quality Assurance</h5>
                  <p>
                    We take pride in delivering nothing but the best. Our
                    rigorous quality assurance processes ensure that every
                    product we develop is of the highest quality, free from
                    glitches or errors.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                <div className="text-center p-4">
                  <h5 className="mb-3">Cost-Efficiency</h5>
                  <p>
                    We understand the importance of maximizing your ROI. Our
                    cost-effective solutions ensure that you get the most value
                    for your investment, without compromising on quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-6">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="text-primary text-uppercase mb-2">OUR SERVICES</h6>
              <h1 className="display-6 mb-4">
                Custom IT Solutions for Your Successful Business
              </h1>
              <div className="row gy-5 gx-4">
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0 btn-square bg-primary me-3">
                      <i className="fa fa-check text-white"></i>
                    </div>
                    <h5 className="mb-0">Mobile App Development</h5>
                  </div>
                  <span>
                    From iOS to Android, we create intuitive and feature-rich
                    mobile apps that engage users and elevate brands.
                  </span>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0 btn-square bg-primary me-3">
                      <i className="fa fa-check text-white"></i>
                    </div>
                    <h5 className="mb-0">Web Development</h5>
                  </div>
                  <span>
                    We craft responsive, user-friendly websites that deliver
                    seamless experiences across devices.
                  </span>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0 btn-square bg-primary me-3">
                      <i className="fa fa-check text-white"></i>
                    </div>
                    <h5 className="mb-0">Custom Software</h5>
                  </div>
                  <span>
                    Our team specializes in developing tailored software
                    solutions to address your unique challenges and
                    opportunities.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="position-relative overflow-hidden pe-5 pt-5 h-100">
                <img
                  className="position-relative w-100 h-100"
                  src="img/service.jpg"
                />
                <img
                  className="position-absolute top-0 end-0 bg-white ps-3 pb-3"
                  src="img/service-2.jpg"
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <TechStack />
    </>
  );
};
