#!/bin/bash
set -e
source utils.sh
ENV_FILE=/env/.env.dev.backend
loadEnv "$ENV_FILE"

# Copy the .env file to the backend
cp $ENV_FILE $(git_root)/backend/.env

# Build the backend
cd $(git_root)/backend
npm install
npx prisma generate
npx prisma migrate dev
npm run build

# Deploy
rm -rf ${PATH_FRONT_DEV}/
mkdir -p ${PATH_FRONT_DEV}/
cp $(git_root)/backend/dist/. $PATH_FRONT_DEV -r
