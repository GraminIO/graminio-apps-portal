import axios from "axios";
import { useState } from "react";

const GetStarted = () => {
  const[loading , setLoading] = useState(false);
  const [error , setError] = useState("");
  const [success , setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    email: "",
    phone: "",
    country: "",
    productInterest:""
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateField = (name: string, value: string): string | null => {
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "Invalid email format";
      }
    } else if (name === "phone") {
      const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Basic international format
      if (!phoneRegex.test(value)) {
        return "Invalid phone number";
      }
    } else if (!value.trim()) {
      return "This field is required";
    }else if(name === "firstName"){
      if(formData.firstName.length < 4){
      return "first Name should contain at least 4 letters"
    }
      
    } else if(name === "lastName"){
      if(formData.lastName.length < 3){
      return "Last name  should contain at least 3 letters"
      }
    } else if(name === "jobTitle"){
      if(formData.jobTitle.length < 4){
         return "job title should contain at least 4 letters"
      }
    }
    
    return null;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: any = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) {
        newErrors[key] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
 
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
      const res = await axios.post("https://fi43a757rxhxcythjqatbbd67i0zzyuo.lambda-url.ap-south-1.on.aws/" , {message:"Test" , email: "vijay@graminio.com" , subject:formData});
      console.log(res);
      if(res.status == 200){
        setSuccess(true);
        alert("form filled success");
        setTimeout(() => setSuccess(false));
      }
      } catch (error:any) {
        setLoading(false);
        setSuccess(false);
        setError(error.message);
        setTimeout(() => setError("") , 3000);
        console.error(error.message);
      }
    } else {
      alert("Please fix the errors in the form.");
    }
  };


  return (
    <div className="container">
      <h1>How would you like to contact us?</h1>
      <div className="contact-container">
        <div className="request-call">
          <h2>Request a call.</h2>
          <p>Give us some info so the right person can get back to you.</p>
          <form onSubmit={handleSubmit} data-hs-cf-bound="true">
            <input
              name="firstName"
              onChange={handleInputChange}
              onBlur={handleBlur}
              value={formData.firstName}
              type="text"
              placeholder="First name"
            />
            {errors.firstName && <span style={{color:"red"}} className="error-text">{errors.firstName}</span>}
            
            <input
              name="lastName"
              onChange={handleInputChange}
              onBlur={handleBlur}
              value={formData.lastName}
              type="text"
              placeholder="Last name"
            />
            {errors.lastName && <span style={{color:"red"}} className="error-text">{errors.lastName}</span>}
            
            <input
              name="jobTitle"
              onChange={handleInputChange}
              onBlur={handleBlur}
              value={formData.jobTitle}
              type="text"
              placeholder="Job title"
            />
            {errors.jobTitle && <span style={{color:"red"}} className="error-text">{errors.jobTitle}</span>}
            
            <input
              name="email"
              onChange={handleInputChange}
              onBlur={handleBlur}
              value={formData.email}
              type="email"
              placeholder="Email"
            />
            {errors.email && <span style={{color:"red"}} className="error-text">{errors.email}</span>}
            
            <input
              
              name="phone"
              onChange={handleInputChange}
              onBlur={handleBlur}
              value={formData.phone}
              type="tel"
              placeholder="+918750XXXX22"
            />
            {errors.phone && <span style={{color:"red"}} className="error-text">{errors.phone}</span>}
            
            <select value={formData.country} title=".." name="country" onChange={handleInputChange}>
              <option value="">Country/Region</option>
              <option value="us">United States</option>
              <option value="in">India</option>
              <option value="uk">United Kingdom</option>
            </select>
            
            <select value={formData.productInterest} title=".." name="productInterest" onChange={handleInputChange}>
              <option value="">Product Interest</option>
              <option value="FinWorkbook">FinWorkbook</option>
              <option value="Web Application Development">
                Web Application Development
              </option>
              <option value="AI Tailored Solution">AI Tailored Solution</option>
              <option value="Cloud Integration">
                Cloud Integration
              </option>
            </select>
            
            <button type="submit">{loading? <p>Loading...</p>:"Contact Me"}</button>
          </form>
          {error && <p style={{color: "red"}}>{error}</p>}
          {success && <p style={{color: "green"}}>We will connect you soon</p>}
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
