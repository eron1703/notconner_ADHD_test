"use client"

import { useState, useEffect, useMemo } from "react"
import WelcomeScreen from "@/components/welcome-screen"
import QuestionCard from "@/components/question-card"
import ResultsScreen from "@/components/results-screen"
import { questions, type Question } from "@/lib/questions"
import { shuffleArray } from "@/lib/utils"

type Answer = {
  questionId: number
  score: number
  category: Question["category"]
}

export default function Home() {
  const [currentStep, setCurrentStep] = useState<"welcome" | "questionnaire" | "results">("welcome")
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])

  useEffect(() => {
    // Shuffle questions only once when the component mounts or when starting a new test
    if (currentStep === "welcome") {
      setShuffledQuestions(shuffleArray(questions))
      setAnswers([])
      setCurrentQuestionIndex(0)
    }
  }, [currentStep])

  const handleStartTest = () => {
    setCurrentStep("questionnaire")
  }

  const handleAnswer = (questionId: number, category: Question["category"], score: number) => {
    setAnswers((prevAnswers) => {
      const existingAnswerIndex = prevAnswers.findIndex((ans) => ans.questionId === questionId)
      if (existingAnswerIndex > -1) {
        const newAnswers = [...prevAnswers]
        newAnswers[existingAnswerIndex] = { questionId, score, category }
        return newAnswers
      }
      return [...prevAnswers, { questionId, score, category }]
    })
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
    } else {
      setCurrentStep("results")
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1)
    }
  }

  const handleRetakeTest = () => {
    setCurrentStep("welcome")
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex]
  const selectedScoreForCurrentQuestion = answers.find((ans) => ans.questionId === currentQuestion?.id)?.score ?? null

  const { inattentionScore, impulsivityScore, hyperactivityScore, overallScore } = useMemo(() => {
    let inattention = 0
    let impulsivity = 0
    let hyperactivity = 0

    answers.forEach((answer) => {
      if (answer.category === "Inattention") {
        inattention += answer.score
      } else if (answer.category === "Impulsivity") {
        impulsivity += answer.score
      } else if (answer.category === "Hyperactivity") {
        hyperactivity += answer.score
      }
    })

    const overall = inattention + impulsivity + hyperactivity
    return {
      inattentionScore: inattention,
      impulsivityScore: impulsivity,
      hyperactivityScore: hyperactivity,
      overallScore: overall,
    }
  }, [answers])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {currentStep === "welcome" && <WelcomeScreen onStartTest={handleStartTest} />}
      {currentStep === "questionnaire" && currentQuestion && (
        <QuestionCard
          question={currentQuestion}
          currentQuestionNumber={currentQuestionIndex + 1}
          totalQuestions={shuffledQuestions.length}
          selectedScore={selectedScoreForCurrentQuestion}
          onAnswer={(score) => handleAnswer(currentQuestion.id, currentQuestion.category, score)}
          onNext={handleNextQuestion}
          onPrevious={handlePreviousQuestion}
          isLastQuestion={currentQuestionIndex === shuffledQuestions.length - 1}
        />
      )}
      {currentStep === "results" && (
        <ResultsScreen
          inattentionScore={inattentionScore}
          impulsivityScore={impulsivityScore}
          hyperactivityScore={hyperactivityScore}
          overallScore={overallScore}
          onRetakeTest={handleRetakeTest}
        />
      )}
    </div>
  )
}
