import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Me</h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="contact-form"
        >
          {/* Netlify form hidden input */}
          <input type="hidden" name="form-name" value="contact" />

          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <textarea
              name="message"
              placeholder="Your Message"
              className="form-control"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
