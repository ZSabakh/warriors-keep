import React from "react";
import "./FaqQuestion.css";

const FaqQuestion = ({ faq }) => {
  return (
    <div className="question_container">
      <h3>{faq.question}</h3>
      <p>{faq.paragraph}</p>
      <ul>{faq.list ? faq.list.map((item) => <li>{item}</li>) : null}</ul>
      <hr />
    </div>
  );
};

export default FaqQuestion;
