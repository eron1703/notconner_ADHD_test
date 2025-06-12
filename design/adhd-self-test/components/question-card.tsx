"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import type { Question } from "@/lib/questions"
import { cn } from "@/lib/utils"

interface QuestionCardProps {
  question: Question
  currentQuestionNumber: number
  totalQuestions: number
  selectedScore: number | null
  onAnswer: (score: number) => void
  onNext: () => void
  onPrevious: () => void
  isLastQuestion: boolean
}

const ratingScale = [
  { score: 0, label: "Never" },
  { score: 1, label: "Occasionally" },
  { score: 2, label: "Often" },
  { score: 3, label: "Very Frequently" },
]

export default function QuestionCard({
  question,
  currentQuestionNumber,
  totalQuestions,
  selectedScore,
  onAnswer,
  onNext,
  onPrevious,
  isLastQuestion,
}: QuestionCardProps) {
  const progress = (currentQuestionNumber / totalQuestions) * 100

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">
            Question {currentQuestionNumber} of {totalQuestions}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
        <CardTitle className="mt-4 text-lg font-semibold">{question.text}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <RadioGroup
          value={selectedScore !== null ? String(selectedScore) : undefined}
          onValueChange={(value) => onAnswer(Number(value))}
          className="grid gap-2"
        >
          {ratingScale.map((option) => (
            <div
              key={option.score}
              onClick={() => onAnswer(option.score)}
              className={cn(
                "flex items-center rounded-lg border p-4 transition-colors duration-200 cursor-pointer",
                selectedScore === option.score ? "bg-primary-foreground border-primary text-primary" : "hover:bg-muted",
              )}
            >
              <RadioGroupItem value={String(option.score)} id={`option-${option.score}`} className="sr-only" />
              <Label htmlFor={`option-${option.score}`} className="w-full cursor-pointer text-base">
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-between gap-2 pt-4">
        <Button onClick={onPrevious} disabled={currentQuestionNumber === 1} variant="outline" className="w-full">
          Previous
        </Button>
        <Button onClick={onNext} disabled={selectedScore === null} className="w-full">
          {isLastQuestion ? "View Results" : "Next"}
        </Button>
      </CardFooter>
    </Card>
  )
}
