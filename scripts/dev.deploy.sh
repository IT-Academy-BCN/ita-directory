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
echo "PATH_FRONTEND_DEV"
echo $PATH_FRONTEND_DEV
rm -rf $(PATH_FRONTEND_DEV)
mkdir -p $(PATH_FRONTEND_DEV)
cp $(git_root)/frontend/dist $(PATH_FRONTEND_DEV) -r
