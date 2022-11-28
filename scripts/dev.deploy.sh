#!/bin/bash
set -e
source utils.sh
ENV_FILE=/env/.env.dev.frontend
loadEnv "$ENV_FILE"

# Copy the .env file to the frontend
cp $ENV_FILE $(git_root)/frontend/.env

# Build the frontend
cd $(git_root)/frontend
npm install
npm run build

# Deploy
rm -rf $PATH_FRONT_DEV
mkdir -p $PATH_FRONT_DEV
cp $(git_root)/frontend/dist $PATH_FRONT_DEV -r
