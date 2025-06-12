import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array]
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }
  return shuffledArray
}

export function getScoreInterpretation(score: number) {
  if (score >= 0 && score <= 9) {
    return { label: "Within normal range", color: "text-green-600 bg-green-50 border-green-200" }
  } else if (score >= 10 && score <= 17) {
    return { label: "Mild concern", color: "text-yellow-600 bg-yellow-50 border-yellow-200" }
  } else if (score >= 18 && score <= 24) {
    return { label: "Moderate concern", color: "text-orange-600 bg-orange-50 border-orange-200" }
  } else if (score >= 25 && score <= 30) {
    return { label: "Strong concern", color: "text-red-600 bg-red-50 border-red-200" }
  }
  return { label: "N/A", color: "text-gray-500 bg-gray-50 border-gray-200" }
}
