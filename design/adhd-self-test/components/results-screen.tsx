"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { getScoreInterpretation, cn } from "@/lib/utils"

interface ResultsScreenProps {
  inattentionScore: number
  impulsivityScore: number
  hyperactivityScore: number
  overallScore: number
  onRetakeTest: () => void
}

export default function ResultsScreen({
  inattentionScore,
  impulsivityScore,
  hyperactivityScore,
  overallScore,
  onRetakeTest,
}: ResultsScreenProps) {
  const inattentionInterpretation = getScoreInterpretation(inattentionScore)
  const impulsivityInterpretation = getScoreInterpretation(impulsivityScore)
  const hyperactivityInterpretation = getScoreInterpretation(hyperactivityScore)
  const overallInterpretation = getScoreInterpretation(overallScore / 3) // Overall score is out of 90, so divide by 3 to fit 0-30 scale

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Your Self-Test Results</CardTitle>
        <CardDescription>Below is a breakdown of your scores across different symptom clusters.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4">
          <h3 className="text-lg font-semibold">Category Scores (Max 30 per category)</h3>
          <div className={cn("p-4 rounded-lg border", inattentionInterpretation.color)}>
            <div className="flex justify-between items-center">
              <span className="font-medium">Inattention:</span>
              <span className="font-bold text-lg">{inattentionScore}</span>
            </div>
            <p className="text-sm">{inattentionInterpretation.label}</p>
          </div>
          <div className={cn("p-4 rounded-lg border", impulsivityInterpretation.color)}>
            <div className="flex justify-between items-center">
              <span className="font-medium">Impulsivity:</span>
              <span className="font-bold text-lg">{impulsivityScore}</span>
            </div>
            <p className="text-sm">{impulsivityInterpretation.label}</p>
          </div>
          <div className={cn("p-4 rounded-lg border", hyperactivityInterpretation.color)}>
            <div className="flex justify-between items-center">
              <span className="font-medium">Hyperactivity:</span>
              <span className="font-bold text-lg">{hyperactivityScore}</span>
            </div>
            <p className="text-sm">{hyperactivityInterpretation.label}</p>
          </div>
        </div>

        <Separator />

        <div className="grid gap-4">
          <h3 className="text-lg font-semibold">Overall Score (Max 90)</h3>
          <div className={cn("p-4 rounded-lg border", overallInterpretation.color)}>
            <div className="flex justify-between items-center">
              <span className="font-medium">Total Score:</span>
              <span className="font-bold text-xl">{overallScore}</span>
            </div>
            <p className="text-sm">{overallInterpretation.label}</p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          Remember, this test is for screening purposes only and does not constitute a diagnosis. Consult a healthcare
          professional for a comprehensive evaluation.
        </p>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button onClick={() => alert("Export functionality not implemented in this UI.")} className="w-full">
          Export/Share Results (PDF/Email)
        </Button>
        <Button onClick={onRetakeTest} variant="outline" className="w-full">
          Retake Test
        </Button>
      </CardFooter>
    </Card>
  )
}
