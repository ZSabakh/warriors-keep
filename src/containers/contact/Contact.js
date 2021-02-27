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
              tabindex="1"
              required
              autofocus
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Email Address"
              type="email"
              tabindex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Phone Number (Optional)"
              type="tel"
              tabindex="3"
              required
            />
          </fieldset>
          <fieldset>
            <input placeholder="Subject" type="subject" tabindex="4" required />
          </fieldset>
          <fieldset>
            <textarea
              placeholder="Type your Message body here."
              tabindex="5"
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
