import React from 'react';

const WelcomePage = ({ onStart }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h1 className="card-title">ADHD Self-Test</h1>
        <p className="card-description">A confidential self-assessment tool.</p>
      </div>
      <div className="card-content">
        <div className="space-y-4">
          <p className="text-sm text-muted">
            This tool is designed to help you screen for potential ADHD symptoms based on clinical principles. It is
            inspired by established assessments like CAARS and ASRS.
          </p>
          <div>
            <p className="font-semibold">Important Notes:</p>
            <ul className="list-disc text-sm">
              <li>This is NOT a diagnostic tool. Only a qualified healthcare professional can diagnose ADHD.</li>
              <li>Your responses are anonymous and not stored without your explicit consent.</li>
              <li>The test consists of 30 questions across Inattention, Impulsivity, and Hyperactivity categories.</li>
              <li>Please answer honestly based on how often you experience each statement.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary" onClick={onStart}>
          Start Test
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;