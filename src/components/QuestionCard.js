import React, { useState } from 'react';
import './QuestionCard.css';

const QuestionCard = ({ question, onAnswer, currentIndex, totalQuestions }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const options = [
    { value: 0, label: 'Never' },
    { value: 1, label: 'Occasionally' },
    { value: 2, label: 'Often' },
    { value: 3, label: 'Very Frequently' }
  ];

  const handleSelect = (value) => {
    setSelectedAnswer(value);
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      onAnswer(question.id, selectedAnswer);
      setSelectedAnswer(null);
    }
  };

  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div className="question-container container">
      <div className="question-header">
        <h2>Question {currentIndex + 1} of {totalQuestions}</h2>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="question-content">
        <p className="question-text">{question.text}</p>
        
        <div className="options-grid">
          {options.map((option) => (
            <button
              key={option.value}
              className={`option-button ${selectedAnswer === option.value ? 'selected' : ''}`}
              onClick={() => handleSelect(option.value)}
            >
              <span className="option-value">{option.value}</span>
              <span className="option-label">{option.label}</span>
            </button>
          ))}
        </div>

        <button 
          className="next-button" 
          onClick={handleSubmit}
          disabled={selectedAnswer === null}
        >
          {currentIndex === totalQuestions - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;