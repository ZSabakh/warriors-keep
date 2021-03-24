import React from "react";
import { Link } from "react-router-dom";
import "./TransparencyPlead.css";

const TransparencyPlead = () => {
  return (
    <>
      <div className="transparency_container">
        <div>
          <h3>Financial Transparency</h3>
          <p>
            Our Financial Transparency Plead which I should test for multiple
            lines of text and I think this works. maybe . maybe not. will have
            to fix
          </p>
        </div>
        <div>
          <img src="https://blog.mynextcompany.eu/hubfs/scaleup-fundraiser.jpg" />
        </div>
        <div>
          <p>Visit our dedicated documentations page</p>
          <Link to="/about/faq">
            <button>Go to FAQ</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TransparencyPlead;
