import React, { useState } from 'react';

const QuestionCard = ({ question, onAnswer, currentIndex, totalQuestions }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const ratingScale = [
    { value: 0, label: 'Never' },
    { value: 1, label: 'Occasionally' },
    { value: 2, label: 'Often' },
    { value: 3, label: 'Very Frequently' }
  ];

  const handleSelect = (value) => {
    setSelectedAnswer(value);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      onAnswer(question.id, selectedAnswer);
      setSelectedAnswer(null);
    }
  };

  const handlePrevious = () => {
    // For simplicity, we'll just go back without changing answers
    // In a real app, you'd want to navigate to previous question
  };

  const progress = ((currentIndex + 1) / totalQuestions) * 100;
  const isLastQuestion = currentIndex === totalQuestions - 1;

  return (
    <div className="card">
      <div className="card-header question-header">
        <div className="question-info">
          <span className="question-number">
            Question {currentIndex + 1} of {totalQuestions}
          </span>
        </div>
        <div className="progress">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <h2 className="question-text">{question.text}</h2>
      </div>
      <div className="card-content">
        <div className="radio-group">
          {ratingScale.map((option) => (
            <div
              key={option.value}
              className={`radio-item ${selectedAnswer === option.value ? 'selected' : ''}`}
              onClick={() => handleSelect(option.value)}
            >
              <input
                type="radio"
                id={`option-${option.value}`}
                name="rating"
                value={option.value}
                checked={selectedAnswer === option.value}
                onChange={() => handleSelect(option.value)}
                className="radio-input sr-only"
              />
              <label htmlFor={`option-${option.value}`} className="radio-label">
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="card-footer">
        <div className="button-group">
          <button
            className="btn btn-outline"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            Previous
          </button>
          <button
            className="btn btn-primary"
            onClick={handleNext}
            disabled={selectedAnswer === null}
          >
            {isLastQuestion ? 'View Results' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;