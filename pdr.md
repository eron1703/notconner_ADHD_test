# Product Design Requirements (PDR) – ADHD Self-Test App

## 1. Product Overview
A web/mobile ADHD self-assessment tool based on clinical principles (inspired by CAARS and ASRS) designed for user-friendly screening. The tool is not diagnostic but provides directional feedback across three symptom clusters: Inattention, Impulsivity, and Hyperactivity.

## 2. Target Platform
- Primary: Web app (React, Vue, or similar)
- Optional: Mobile wrapper (e.g., React Native, Capacitor)

## 3. Key Functional Requirements
| Feature | Description |
|--------|-------------|
| Questionnaire Engine | Renders 30 questions, collects responses on a 0–3 Likert scale |
| Randomization | Questions appear in randomized order but retain internal subscale tags |
| Scoring Engine | Computes subscale scores and overall score |
| Feedback Display | Results shown with color-coded feedback (Green/Yellow/Red) |
| Data Privacy | No user data stored without consent |
| Export | Option to download/share PDF or email result summary |

## 4. Question Model
```json
{
  "id": 1,
  "text": "I start tasks but get distracted before finishing them.",
  "category": "Inattention",
  "score": null
}
```

## 5. Rating Scale
| Score | Label |
|-------|-------|
| 0     | Never |
| 1     | Occasionally |
| 2     | Often |
| 3     | Very Frequently |

## 6. Scoring
Each subscale (Inattention, Impulsivity, Hyperactivity) has 10 questions. Max subscale score = 30.

### Score Bands
| Range     | Interpretation         |
|-----------|------------------------|
| 0–9       | Within normal range    |
| 10–17     | Mild concern           |
| 18–24     | Moderate concern       |
| 25–30     | Strong concern         |

## 7. UI Components
| Component           | Purpose |
|---------------------|---------|
| Welcome Page        | Instructions |
| Question Card       | Displays question and options |
| Progress Bar        | Shows % complete |
| Results Screen      | Breakdown of results |
| Export Button       | Save/download results |

## 8. Tech Notes
- Store questions in JSON
- Render in browser
- Scoring logic can run client-side
