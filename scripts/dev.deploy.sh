#!/bin/bash
source utils.sh
ENV_FILE=/env/.env.dev.frontend
loadEnv "$ENV_FILE"

# Copy the .env file to the frontend
cp ENV_FILE /frontend/.env

# Build the frontend
cd frontend
pwd
npm install
npm run build
pwd
