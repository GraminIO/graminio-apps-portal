const GetStarted = () => {
  return (
    <div>
      {/* Contact Container */}
      <div className="contact-container">
        <h2>How would you like to contact us?</h2>
        <div className="row">
          {/* Left Side: Request a call form */}
          <div className="col-md-8">
            <div className="card p-4">
              <h3>Request a call.</h3>
              <p>Give us some info so the right person can get back to you.</p>
              <form>
                <div className="form-group">
                  <label>First name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                  />
                </div>
                <div className="form-group">
                  <label>Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                  />
                </div>
                <div className="form-group">
                  <label>Job title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Job title"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <div className="form-group">
                  <label>Country/Region</label>
                  <select className="form-control">
                    <option>Select country</option>
                    <option>India</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Product Interest</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Product Interest"
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Contact Me
                </button>
              </form>
            </div>
          </div>

          {/* Right Side: Information blocks */}
          <div className="col-md-4">
            <div className="card mb-3 p-3">
              <h4>Give us a call.</h4>
              <p>+91 90047 57685</p>
            </div>
            <div className="card mb-3 p-3">
              <h4>Chat with us.</h4>
              <p>Get product info, login help, and live chat with an agent.</p>
              <button className="btn btn-primary">Let's Chat</button>
            </div>
            <div className="card p-3">
              <h4>Leave us some feedback.</h4>
              <p>Good or bad, we’d love to hear it all.</p>
              <button className="btn btn-primary">Send Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
