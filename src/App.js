import React, { useState } from "react";
import data from "./data";
import Question from "./Question";
// import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <div className="title">
          <h2>Questions And Answers About Login</h2>
        </div>
        <div className="body">
          {questions.map((question)=>{
            return (
              <Question key={question.id} {...question}/>
            )
          })}
          <Question/>
        </div>
      </div>
    </main>
  );
}

export default App;
