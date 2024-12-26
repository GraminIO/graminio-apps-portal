import { useState, useEffect } from "react";

export const Header = () => {
  const images = [
    "/img/carousel-3.jpg",
    "/img/carousel-4.jpg",
    "/img/carousel-3.jpg",
  ];
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
    <div className="for_main_Section">
      <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide-to="1"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/carousel-3.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7">
                      <p>Innovation at Your Fingertips</p>
                      <h1 className="display-6 text-light mb-5 animated slideInDown">
                        Transforming Ideas into Reality with Cutting-Edge AI
                        Software Solutions
                      </h1>
                      <a
                        asp-area=""
                        asp-page="/about"
                        className="btn btn-primary py-sm-3 px-sm-5"
                      >
                        Learn More
                      </a>
                      <a
                        asp-area=""
                        asp-page="/contact"
                        className="btn btn-light py-sm-3 px-sm-5 ms-3"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-4.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7">
                      <p>Your Vision, Our Code</p>
                      <h1 className="display-6 text-light mb-5 animated slideInDown">
                        Tailored AI Software Solutions to Elevate Your Business
                      </h1>
                      <a
                        asp-area=""
                        asp-page="/about"
                        className="btn btn-primary py-sm-3 px-sm-5"
                      >
                        Learn More
                      </a>
                      <a
                        asp-area=""
                        asp-page="/contact"
                        className="btn btn-light py-sm-3 px-sm-5 ms-3"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
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
            data-bs-target="#header-carousel"
            data-bs-slide="next"
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
  );
};
