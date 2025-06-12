import React from 'react';
import './WelcomePage.css';

const WelcomePage = ({ onStart }) => {
  return (
    <div className="welcome-container container">
      <h1>ADHD Self-Assessment Test</h1>
      <div className="welcome-content">
        <p>Welcome to this ADHD self-assessment tool. This test is designed to help you understand if you might be experiencing symptoms commonly associated with ADHD.</p>
        
        <div className="instructions">
          <h3>Instructions:</h3>
          <ul>
            <li>Answer 30 questions about your daily experiences</li>
            <li>Rate each statement from "Never" to "Very Frequently"</li>
            <li>Be honest with your responses</li>
            <li>The test takes about 5-10 minutes to complete</li>
          </ul>
        </div>

        <div className="disclaimer">
          <h3>Important Note:</h3>
          <p>This is a screening tool, not a diagnostic test. Only a qualified healthcare professional can diagnose ADHD. If you have concerns about ADHD, please consult with a healthcare provider.</p>
        </div>

        <button className="start-button" onClick={onStart}>
          Start Assessment
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;