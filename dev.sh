#!/bin/bash

echo "Starting ADHD Test App in development mode..."
echo "The app will be available at http://localhost:3001"
echo "Hot-reloading is enabled - changes will be reflected automatically"
echo "Press Ctrl+C to stop"

# Run the development container
docker-compose up adhd-test-dev