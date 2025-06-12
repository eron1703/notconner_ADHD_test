# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ADHD Self-Assessment Test App - A web-based tool for ADHD screening based on clinical principles (CAARS and ASRS).

## Development Commands

### Docker Commands (Preferred - No local installation required)
- `./build.sh` - Build the Docker containers
- `./run.sh` - Run the production app (http://localhost:3000)
- `./dev.sh` - Run in development mode with hot-reloading (http://localhost:3001)
- `docker-compose down` - Stop all containers

### Direct Commands (Requires Node.js installed)
- `npm install` - Install dependencies
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

## Architecture

### Tech Stack
- React 18 for the frontend
- Docker for containerization
- Nginx for production serving
- html2canvas & jsPDF for PDF export

### Project Structure
```
/
├── src/
│   ├── components/        # React components
│   │   ├── WelcomePage.js # Landing page
│   │   ├── QuestionCard.js # Question display
│   │   └── ResultsScreen.js # Results & export
│   ├── questions.json     # 30 ADHD assessment questions
│   └── App.js            # Main app logic & state
├── public/               # Static assets
├── Dockerfile           # Production build
├── Dockerfile.dev       # Development with hot-reload
└── docker-compose.yml   # Container orchestration
```

### Key Features
1. **Question Randomization**: Questions are shuffled but maintain category tags
2. **Scoring System**: 3 subscales (Inattention, Impulsivity, Hyperactivity), 0-3 Likert scale
3. **Results Export**: PDF download and sharing capabilities
4. **No Backend**: All logic runs client-side, no data storage
5. **Mobile Responsive**: Works on all devices

### Scoring Logic
- Each subscale: 10 questions, max 30 points
- Interpretation bands:
  - 0-9: Within normal range (Green)
  - 10-17: Mild concern (Yellow)
  - 18-24: Moderate concern (Orange)  
  - 25-30: Strong concern (Red)