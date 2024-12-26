import { Navigation } from "./navigation";
import { Footer } from "./footer";

export const ComputerVision = () => {
  return (
    <>
      <Navigation />
      <div className="for_main_Section">
        <div className="container-xxl py-6">
          <div className="container">
            <div className="row">
              <h6 className="text-primary text-uppercase mb-2">
                AI computer vision
              </h6>
              <h4>
                {" "}
                Services utilize machine learning and deep learning algorithms
                to enable computers to interpret and make decisions based on
                visual data.
              </h4>
              <p className="mb-5">
                {" "}
                These services can perform a wide range of tasks, including
                object detection, facial recognition, image classNameification,
                and scene understanding. Here are some key components and
                examples of AI computer vision services.
              </p>
            </div>
            <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <div
                  className="position-relative overflow-hidden pe-5 pt-5 h-100"
                  style={{ minHeight: "400px" }}
                >
                  <img
                    className="position-absolute w-100 h-100 mobile_relative"
                    src="img/computerai-1.jpg"
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                  <img
                    className="position-absolute top-0 end-0 bg-white ps-3 pb-3 mobile_mission_1"
                    src="img/computerai-2.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="row gy-5 gx-4">
                  <div className="col-sm-12 wow fadeIn" data-wow-delay="0.1s">
                    <div className="d-flex align-items-center mb-3">
                      <div className="flex-shrink-0 btn-square bg-primary me-3">
                        <i className="fa fa-check text-white"></i>
                      </div>
                      <h5 className="mb-0">Key Components</h5>
                    </div>
                    <ul className="services_listing">
                      <li>
                        <b>Image classNameification:</b> Categorizing images
                        into predefined classNamees. Example: Recognizing
                        animals in photos.
                      </li>
                      <li>
                        <b>Object Detection: </b>Identifying and locating
                        objects within an image. Example: Detecting pedestrians
                        in traffic surveillance footage.
                      </li>
                      <li>
                        <b>Facial Recognition:</b> Identifying or verifying
                        individuals based on facial features. Example: Unlocking
                        smartphones with face ID.
                      </li>
                      <li>
                        <b>Image Segmentation:</b> Dividing an image into
                        segments to simplify analysis. Example: Isolating
                        different organs in medical imaging.
                      </li>
                      <li>
                        <b>Optical Character Recognition (OCR):</b> Converting
                        different types of documents, such as scanned paper
                        documents or PDFs, into editable and searchable data.
                        Example: Extracting text from invoices.
                      </li>
                      <li>
                        <b>Pose Estimation: </b>Determining the position and
                        orientation of a person or object. Example: Analyzing
                        athletes' movements for performance improve.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ComputerVision;
