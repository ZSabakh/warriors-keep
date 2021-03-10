import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
import "./Contact.css";
init(process.env.REACT_APP_EMAILJS_USER_ID);

const Contact = () => {
  const [captchaPassed, setCaptchaPassed] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function onFormSubmit() {
    var templateParams = {
      subject: subject,
      email: senderEmail,
      from_name: senderName,
      message: message,
      phone_number: phoneNumber,
    };
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams
      )
      .then(
        function (response) {
          alert("Message has been sent sucessfully!");
          console.log(
            "Successfully sent message!",
            response.status,
            response.text
          );
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  }

  return (
    <div className="contact_container">
      <div className="contact_box_container">
        <form
          id="contact"
          // action="" method="post"
          onSubmit={(event) => {
            event.preventDefault();
            onFormSubmit();
          }}
          noValidate
        >
          <h3>Contact Form</h3>
          <h4>We typically reply within 24 hours!</h4>
          <fieldset>
            <input
              onChange={(event) => {
                setSenderName(event.target.value);
              }}
              placeholder="Your Name"
              type="text"
              tabIndex="1"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <input
              onChange={(event) => {
                setSenderEmail(event.target.value);
              }}
              placeholder="Your Email Address"
              type="email"
              tabIndex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
              placeholder="Your Phone Number (Optional)"
              type="tel"
              tabIndex="3"
            />
          </fieldset>
          <fieldset>
            <input
              onChange={(event) => {
                setSubject(event.target.value);
              }}
              placeholder="Subject"
              type="subject"
              tabIndex="4"
              required
            />
          </fieldset>
          <fieldset>
            <textarea
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              placeholder="Type your Message body here."
              tabIndex="5"
              required
            ></textarea>
          </fieldset>
          <fieldset>
            <ReCAPTCHA
              className="captcha"
              sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY}
              onChange={() => setCaptchaPassed(true)}
            />

            <button
              disabled={captchaPassed ? false : true}
              name="submit"
              type={captchaPassed ? "submit" : "submit-disabled"}
              id="contact-submit"
              data-submit="Sending"
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
