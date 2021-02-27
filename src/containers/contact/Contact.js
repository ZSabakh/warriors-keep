import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact_container">
      <div className="contact_box_container">
        <form id="contact" action="" method="post">
          <h3>Contact Form</h3>
          <h4>We typically reply within 24 hours!</h4>
          <fieldset>
            <input
              placeholder="Your Name"
              type="text"
              tabIndex="1"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Email Address"
              type="email"
              tabIndex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Phone Number (Optional)"
              type="tel"
              tabIndex="3"
              required
            />
          </fieldset>
          <fieldset>
            <input placeholder="Subject" type="subject" tabIndex="4" required />
          </fieldset>
          <fieldset>
            <textarea
              placeholder="Type your Message body here."
              tabIndex="5"
              required
            ></textarea>
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Contact;
