import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <div className="header">
        <div className="header-title">
          <h4>{title}</h4>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
          {isOpen && <p>{info}</p>}
      </div>
    </section>
  );
};

export default Question;
