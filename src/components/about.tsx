import { Navigation } from "./navigation";
import { Footer } from "./footer";

export const About = () => {
  return (
    <>
      {/* <Navigation /> */}
      <div className="for_main_Section">
        <div className="container-xxl py-6">
          <div className="container">
            <div className="row g-5 mb-4">
              <div className="h-100">
                <h6 className="text-primary text-uppercase mb-2">About Us</h6>
                <h6>
                  Welcome to GraminIO, a leading AI-enabled software company
                  dedicated to transforming businesses with cutting-edge
                  technology solutions. Our mission is to empower organizations
                  with innovative AI-driven software that enhances efficiency,
                  drives growth, and fosters innovation.
                </h6>
              </div>
            </div>
            <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div
                  className="position-relative overflow-hidden ps-5 pt-5 h-100"
                  style={{ minHeight: "400px" }}
                >
                  <img
                    className="position-absolute w-100 h-100 mobile_relative"
                    src="img/mission-1.jpg"
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                  <img
                    className="position-absolute top-0 start-0 bg-white pe-3 pb-3  mobile_mission_1"
                    src="img/mission-4.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="h-100">
                  <h6 className="text-primary text-uppercase mb-2">
                    Who We Are
                  </h6>
                  <p className="mb-4">
                    At GraminIO, we are a team of passionate technologists,
                    engineers, and visionaries committed to leveraging
                    artificial intelligence to solve complex business
                    challenges. With a rich history in the software industry and
                    a relentless pursuit of excellence, we strive to deliver
                    solutions that not only meet but exceed our clients'
                    expectations.
                  </p>
                  <h6 className="text-primary text-uppercase mb-2">
                    Our Mission
                  </h6>
                  <p className="mb-4">
                    To create innovative AI-enabled software solutions that
                    empower businesses to optimize their operations, improve
                    decision-making, and achieve sustainable growth. We are
                    committed to delivering exceptional value to our clients
                    through continuous innovation, quality, and
                    customer-centricity.
                  </p>
                  <h6 className="text-primary text-uppercase mb-2">
                    What We Do
                  </h6>
                  <ul className="mb-4">
                    <li>
                      <b>AI Solutions:</b> Our AI solutions are designed to
                      automate processes, enhance data analytics, and provide
                      actionable insights. From machine learning models to
                      natural language processing, we harness the power of AI to
                      solve real-world problems.
                    </li>

                    <li>
                      <b>Custom Software Development:</b> We offer tailored
                      software development services to meet the unique needs of
                      our clients. Our team works closely with you to understand
                      your business objectives and develop solutions that drive
                      success.
                    </li>

                    <li>
                      <b>Data Analytics:</b> Unlock the power of your data with
                      our advanced analytics services. We help you make
                      data-driven decisions by providing deep insights and
                      predictive analytics.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row g-5 mt-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="h-100">
                  <h6 className="text-primary text-uppercase mb-2">
                    Our Values
                  </h6>
                  <ul className="mb-4">
                    <li>
                      <b>Innovation:</b> We are driven by innovation and
                      continuously explore new technologies to stay ahead in the
                      industry.
                    </li>

                    <li>
                      <b>Excellence:</b> We strive for excellence in everything
                      we do, ensuring the highest quality in our products and
                      services.
                    </li>

                    <li>
                      {" "}
                      <b>Customer Focus:</b> Our clients are at the heart of our
                      business. We prioritize their needs and work diligently to
                      exceed their expectations.
                    </li>

                    <li>
                      <b>Integrity: </b>We conduct our business with the utmost
                      integrity, building trust and maintaining transparency
                      with our clients.
                    </li>
                  </ul>
                  <h6 className="text-primary text-uppercase mb-2">
                    {" "}
                    Why Choose GraminIO?
                  </h6>
                  <ul className="mb-4">
                    <li>
                      <b>Expertise:</b> Our team of experts brings extensive
                      experience and knowledge in AI and software development.
                    </li>

                    <li>
                      <b>Customization:</b> We understand that every business is
                      unique. Our solutions are customized to fit your specific
                      requirements.
                    </li>

                    <li>
                      <b>Support: </b>We offer comprehensive support and
                      maintenance services to ensure your systems run smoothly.
                    </li>

                    <li>
                      <b>Results-Oriented:</b> We focus on delivering measurable
                      results that drive growth and efficiency for your
                      business.
                    </li>
                  </ul>
                  <p>
                    Join us on a journey of innovation and growth. Let GraminIO
                    be your trusted partner in navigating the complexities of
                    the digital world with AI-enabled solutions. Contact us
                    today to learn more about how we can help your business
                    thrive.
                  </p>

                  <div className="row g-4">
                    <div className="col-sm-6">
                      <a
                        className="d-inline-flex align-items-center btn btn-outline-primary border-2 p-2"
                        href="tel:+0123456789"
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
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div
                  className="position-relative overflow-hidden ps-5 pt-5 h-100"
                  style={{ minHeight: "400px" }}
                >
                  <img
                    className="position-absolute w-100 h-100 mobile_relative"
                    src="img/mission-3.jpg"
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                  <img
                    className="position-absolute top-0 start-0 bg-white pe-3 pb-3 mobile_mission_1"
                    src="img/mission-2.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
