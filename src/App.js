import React, { useState } from 'react';
import './App.css';
import WelcomePage from './components/WelcomePage';
import QuestionCard from './components/QuestionCard';
import ResultsScreen from './components/ResultsScreen';
import questionsData from './questions.json';

const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);

  const startTest = () => {
    const shuffledQuestions = shuffleArray(questionsData);
    setQuestions(shuffledQuestions);
    setCurrentScreen('questions');
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const handleAnswer = (questionId, score) => {
    const newAnswers = { ...answers, [questionId]: score };
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (allAnswers) => {
    const categories = {
      Inattention: { score: 0, count: 0 },
      Impulsivity: { score: 0, count: 0 },
      Hyperactivity: { score: 0, count: 0 }
    };

    questionsData.forEach(question => {
      if (allAnswers[question.id] !== undefined) {
        categories[question.category].score += allAnswers[question.id];
        categories[question.category].count += 1;
      }
    });

    const getInterpretation = (score) => {
      if (score <= 9) return { level: 'normal', label: 'Within normal range', color: '#4CAF50' };
      if (score <= 17) return { level: 'mild', label: 'Mild concern', color: '#FFC107' };
      if (score <= 24) return { level: 'moderate', label: 'Moderate concern', color: '#FF9800' };
      return { level: 'strong', label: 'Strong concern', color: '#F44336' };
    };

    const resultsData = {};
    let totalScore = 0;

    Object.keys(categories).forEach(category => {
      const categoryScore = categories[category].score;
      resultsData[category] = {
        score: categoryScore,
        maxScore: 30,
        ...getInterpretation(categoryScore)
      };
      totalScore += categoryScore;
    });

    resultsData.total = {
      score: totalScore,
      maxScore: 90,
      ...getInterpretation(totalScore / 3)
    };

    setResults(resultsData);
    setCurrentScreen('results');
  };

  const resetTest = () => {
    setCurrentScreen('welcome');
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setResults(null);
  };

  return (
    <div className="App">
      {currentScreen === 'welcome' && (
        <WelcomePage onStart={startTest} />
      )}
      {currentScreen === 'questions' && questions.length > 0 && (
        <QuestionCard
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          currentIndex={currentQuestionIndex}
          totalQuestions={questions.length}
        />
      )}
      {currentScreen === 'results' && results && (
        <ResultsScreen results={results} onReset={resetTest} />
      )}
    </div>
  );
}

export default App;