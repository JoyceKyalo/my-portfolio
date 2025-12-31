import React, { useState } from "react";

const Contact = () => {
  // State to store form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to show success message
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form submitted:", formData);

    // Simulate sending form (you can add API call here later)
    setTimeout(() => {
      setSuccess(true);          // Show success message
      setFormData({ name: "", email: "", message: "" }); // Clear form
    }, 500);
  };

  return (
    <section id="contact" className="contact py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <textarea
              name="message"
              placeholder="Your Message"
              className="form-control"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>

        {/* Success message */}
        {success && (
          <div className="alert alert-success mt-3">
            Thank you! Your message has been sent.
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
