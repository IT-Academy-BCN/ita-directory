#!/bin/bash
source utils.sh
ENV_FILE=/env/.env.dev.frontend
loadEnv "$ENV_FILE"

echo "Current directory"
echo "$PWD"

# Copy the .env file to the frontend
cp ENV_FILE /frontend/.env

# Build the frontend
cd frontend
echo "$PWD"
npm install
npm run build
echo "$PWD"
