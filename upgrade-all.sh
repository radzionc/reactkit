#!/bin/bash

# Script to upgrade pnpm and all dependencies in the monorepo

echo "🚀 Starting upgrade process..."

# Update pnpm to the latest version
echo "📦 Updating pnpm to the latest version..."
npm install -g pnpm@latest

# Get the new pnpm version
PNPM_VERSION=$(pnpm --version)
echo "✅ pnpm updated to version $PNPM_VERSION"

# Update the packageManager field in package.json
echo "📝 Updating packageManager field in package.json..."
if [[ "$OSTYPE" == "darwin"* ]]; then
  # macOS requires an empty string for the -i parameter
  sed -i '' "s/\"packageManager\": \"pnpm@.*\"/\"packageManager\": \"pnpm@$PNPM_VERSION\"/" package.json
else
  # Linux and other systems
  sed -i "s/\"packageManager\": \"pnpm@.*\"/\"packageManager\": \"pnpm@$PNPM_VERSION\"/" package.json
fi

# Update all dependencies in all workspaces
echo "📦 Updating all dependencies in all workspaces..."
pnpm -r update --latest

echo "✨ All done! pnpm and all dependencies have been updated to their latest versions." 