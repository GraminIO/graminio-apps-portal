const GetStarted = () => {
  return (
    <div className="container">
      <h1>How would you like to contact us?</h1>
      <div className="contact-container">
        <div className="request-call">
          <h2>Request a call.</h2>
          <p>Give us some info so the right person can get back to you.</p>
          <form action="#" data-hs-cf-bound="true">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
            <input type="text" placeholder="Job title" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone" />
            <select>
              <option value="">Country/Region</option>
              <option value="us">United States</option>
              <option value="in">India</option>
              <option value="uk">United Kingdom</option>
            </select>
            <select>
              <option value="">Product Interest</option>
              <option value="FinWorkbook">FinWorkbook</option>
              <option value="Web Application Development">
                Web Application Development
              </option>
              <option value="AI Tailored Solution">AI Tailored Solution</option>
              <option value="Cloud&nbsp;Integration">
                Cloud&nbsp;Integration
              </option>
            </select>
            <button type="submit">Contact Me</button>
          </form>
        </div>

        <div className="right-side">
          <div className="section">
            <h2>Give us a call.</h2>
            <p>+91 90047 57685</p>
          </div>

          <div className="section">
            <h2>Chat with us.</h2>
            <p>Get product info, login help, and live chat with an agent.</p>
            <button>Let's Chat</button>
          </div>

          <div className="section">
            <h2>Leave us some feedback.</h2>
            <p>Good or bad, we’d love to hear it all.</p>
            <button>Send Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
