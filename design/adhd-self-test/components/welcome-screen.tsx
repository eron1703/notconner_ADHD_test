"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface WelcomeScreenProps {
  onStartTest: () => void
}

export default function WelcomeScreen({ onStartTest }: WelcomeScreenProps) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">ADHD Self-Test</CardTitle>
        <CardDescription>A confidential self-assessment tool.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-muted-foreground">
        <p>
          This tool is designed to help you screen for potential ADHD symptoms based on clinical principles. It is
          inspired by established assessments like CAARS and ASRS.
        </p>
        <p className="font-semibold text-foreground">Important Notes:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>This is NOT a diagnostic tool. Only a qualified healthcare professional can diagnose ADHD.</li>
          <li>Your responses are anonymous and not stored without your explicit consent.</li>
          <li>The test consists of 30 questions across Inattention, Impulsivity, and Hyperactivity categories.</li>
          <li>Please answer honestly based on how often you experience each statement.</li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button onClick={onStartTest} className="w-full">
          Start Test
        </Button>
      </CardFooter>
    </Card>
  )
}
