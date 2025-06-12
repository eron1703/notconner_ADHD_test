import React from 'react';
import './ResultsScreen.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ResultsScreen = ({ results, onReset }) => {
  const exportToPDF = async () => {
    const element = document.getElementById('results-content');
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    
    const pdf = new jsPDF();
    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    
    let position = 0;
    
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
    
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    
    pdf.save('adhd-assessment-results.pdf');
  };

  const shareResults = () => {
    const text = `ADHD Self-Assessment Results:\n
Inattention: ${results.Inattention.score}/30 - ${results.Inattention.label}\n
Impulsivity: ${results.Impulsivity.score}/30 - ${results.Impulsivity.label}\n
Hyperactivity: ${results.Hyperactivity.score}/30 - ${results.Hyperactivity.label}\n
Overall: ${results.total.score}/90`;
    
    if (navigator.share) {
      navigator.share({
        title: 'ADHD Self-Assessment Results',
        text: text
      });
    } else {
      navigator.clipboard.writeText(text);
      alert('Results copied to clipboard!');
    }
  };

  return (
    <div className="results-container container">
      <div id="results-content">
        <h1>Your Assessment Results</h1>
        
        <div className="results-grid">
          {Object.entries(results).filter(([key]) => key !== 'total').map(([category, data]) => (
            <div key={category} className="result-card">
              <h3>{category}</h3>
              <div className="score-circle" style={{ borderColor: data.color }}>
                <span className="score-value" style={{ color: data.color }}>{data.score}</span>
                <span className="score-max">/ {data.maxScore}</span>
              </div>
              <p className="score-label" style={{ color: data.color }}>{data.label}</p>
            </div>
          ))}
        </div>

        <div className="overall-result">
          <h2>Overall Score</h2>
          <div className="overall-score">
            <span style={{ color: results.total.color }}>{results.total.score}</span> / {results.total.maxScore}
          </div>
          <p className="overall-label" style={{ color: results.total.color }}>
            {results.total.label}
          </p>
        </div>

        <div className="results-interpretation">
          <h3>What do these results mean?</h3>
          <p>These results provide an indication of ADHD-related symptoms across three main areas:</p>
          <ul>
            <li><strong>Inattention:</strong> Difficulty focusing, organizing, and completing tasks</li>
            <li><strong>Impulsivity:</strong> Acting without thinking, interrupting, difficulty waiting</li>
            <li><strong>Hyperactivity:</strong> Restlessness, excessive talking, difficulty sitting still</li>
          </ul>
          <p className="disclaimer">
            <strong>Important:</strong> This is a screening tool only. If you scored in the "Moderate" or "Strong concern" 
            range in any category, consider discussing these results with a healthcare professional for proper evaluation.
          </p>
        </div>
      </div>

      <div className="action-buttons">
        <button onClick={exportToPDF} className="export-button">
          Download PDF
        </button>
        <button onClick={shareResults} className="share-button">
          Share Results
        </button>
        <button onClick={onReset} className="reset-button">
          Take Test Again
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;