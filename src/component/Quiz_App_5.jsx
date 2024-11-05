import React, { useState } from "react";

const questions = [
  {
    question: "HTML Stands for?",
    options: ["Hyper Text Markup Language", "Op2", "Op3", "Op4"],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    question: "CSS Stands for?",
    options: ["Cascading Style Sheet", "Op2", "Op3", "Op4"],
    correctAnswer: "Cascading Style Sheet",
  },
];

const Quiz_App_5 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showscore, setShowScore] = useState(false);

  const handleAns = (selectAnswer) => {
    if (selectAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const restart = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };
  return (
    <>
      <div className="quiz-app">
        {showscore ? (
          <div className="score-section">
            <h2>
              Your Score:{score} out of {questions.length}
            </h2>
            <button onClick={restart}>Restart Quiz</button>
          </div>
        ) : (
          <div className="question-section">
            <h2>
              Question:{currentQuestion + 1}/{questions.length}
            </h2>
            <div className="question-text">
              {questions[currentQuestion].question}
            </div>

            <div className="answer-option">
              {questions[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleAns(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz_App_5;
