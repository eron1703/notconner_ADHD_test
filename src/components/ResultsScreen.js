import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ResultsScreen = ({ results, onReset }) => {
  const getColorClass = (score) => {
    if (score <= 9) return 'result-green';
    if (score <= 17) return 'result-yellow';
    if (score <= 24) return 'result-orange';
    return 'result-red';
  };

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

  return (
    <div className="card">
      <div id="results-content">
        <div className="card-header">
          <h1 className="card-title">Your Self-Test Results</h1>
          <p className="card-description">Below is a breakdown of your scores across different symptom clusters.</p>
        </div>
        <div className="card-content">
          <div className="space-y-6">
            <div>
              <h3 className="section-header">Category Scores (Max 30 per category)</h3>
              <div className="results-grid">
                <div className={`result-item ${getColorClass(results.Inattention.score)}`}>
                  <div className="result-header">
                    <span className="result-label">Inattention:</span>
                    <span className="result-score">{results.Inattention.score}</span>
                  </div>
                  <p className="result-interpretation">{results.Inattention.label}</p>
                </div>
                <div className={`result-item ${getColorClass(results.Impulsivity.score)}`}>
                  <div className="result-header">
                    <span className="result-label">Impulsivity:</span>
                    <span className="result-score">{results.Impulsivity.score}</span>
                  </div>
                  <p className="result-interpretation">{results.Impulsivity.label}</p>
                </div>
                <div className={`result-item ${getColorClass(results.Hyperactivity.score)}`}>
                  <div className="result-header">
                    <span className="result-label">Hyperactivity:</span>
                    <span className="result-score">{results.Hyperactivity.score}</span>
                  </div>
                  <p className="result-interpretation">{results.Hyperactivity.label}</p>
                </div>
              </div>
            </div>

            <div className="separator"></div>

            <div>
              <h3 className="section-header">Overall Score (Max 90)</h3>
              <div className={`result-item ${getColorClass(results.total.score / 3)}`}>
                <div className="result-header">
                  <span className="result-label">Total Score:</span>
                  <span className="result-score">{results.total.score}</span>
                </div>
                <p className="result-interpretation">{results.total.label}</p>
              </div>
            </div>

            <p className="text-sm text-muted">
              Remember, this test is for screening purposes only and does not constitute a diagnosis. Consult a healthcare
              professional for a comprehensive evaluation.
            </p>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <button onClick={exportToPDF} className="btn btn-primary" style={{ marginBottom: '0.5rem' }}>
          Export/Share Results (PDF)
        </button>
        <button onClick={onReset} className="btn btn-outline">
          Retake Test
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;