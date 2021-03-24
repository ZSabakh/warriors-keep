import React from "react";
import FaqQuestion from "../../components/faqQuestion/FaqQuestion";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="faq_container">
      {faqs.map((faq) => (
        <FaqQuestion faq={faq} />
      ))}
    </div>
  );
};

const faqs = [
  {
    question: "What exactly does Warriors Keep do?",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta sapien sit amet arcu aliquet sollicitudin. Nulla commodo tristique lacinia. Nam non euismod lectus, vel egestas nisi. Nunc convallis, metus in fringilla placerat, neque lacus volutpat nisi, at gravida turpis velit at dui. Our work includes:",
    list: [
      "Assisting veterans whose medical condition has been affected by their service.",
      "Helping traumatized warriors reintegrate into society.",
    ],
  },
  {
    question: "What exactly does Warriors Keep do second question?",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta sapien sit amet arcu aliquet sollicitudin. Nulla commodo tristique lacinia. Nam non euismod lectus, vel egestas nisi. Nunc convallis, metus in fringilla placerat, neque lacus volutpat nisi, at gravida turpis velit at dui. Our work includes:",
    list: [
      "Assisting veterans whose medical condition has been affected by their service.",
      "Helping traumatized warriors reintegrate into society.",
    ],
  },
];

export default Faq;
