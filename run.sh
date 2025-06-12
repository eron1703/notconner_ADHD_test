#!/bin/bash

echo "Starting ADHD Test App..."
echo "The app will be available at http://localhost:8802"
echo "Press Ctrl+C to stop"

# Run the production container
docker-compose up adhd-test-app