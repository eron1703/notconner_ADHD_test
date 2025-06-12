# ADHD Self-Assessment Test

A web-based ADHD self-assessment tool designed to help individuals screen for potential ADHD symptoms. This tool is based on clinical principles inspired by established assessments like CAARS and ASRS.

**Important:** This is a screening tool only and does not constitute a medical diagnosis. Please consult with a healthcare professional for proper evaluation.

## Features

- 30 evidence-based questions across three categories:
  - Inattention (10 questions)
  - Impulsivity (10 questions)
  - Hyperactivity (10 questions)
- Randomized question order to prevent bias
- Real-time progress tracking
- Color-coded results with clinical interpretation
- PDF export functionality
- Mobile-responsive design
- No data storage - completely anonymous

## Running Locally with Docker

The app is fully Dockerized. No local installation required!

### Quick Start

1. Clone the repository:
```bash
git clone https://github.com/eron1703/notconner_ADHD_test.git
cd notconner_ADHD_test
```

2. Build and run:
```bash
./build.sh
./run.sh
```

The app will be available at http://localhost:8802

### Docker Commands

- Build: `./build.sh` or `docker-compose build adhd-test-app`
- Run: `./run.sh` or `docker-compose up adhd-test-app`
- Stop: `docker-compose down`
- Development mode: `./dev.sh` (with hot-reloading on port 3001)

## Scoring Interpretation

Each category is scored on a scale of 0-30:
- **0-9**: Within normal range (Green)
- **10-17**: Mild concern (Yellow)
- **18-24**: Moderate concern (Orange)
- **25-30**: Strong concern (Red)

## Technology Stack

- React 18
- Docker & Docker Compose
- Nginx (production server)
- PDF export with jsPDF & html2canvas

## License

This project is intended for educational and self-assessment purposes only.

---

🤖 Built with [Claude Code](https://claude.ai/code)