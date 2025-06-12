#!/bin/bash

echo "Building ADHD Test App Docker containers..."

# Build the production container
docker-compose build adhd-test-app

echo "Build complete! Run ./run.sh to start the application."