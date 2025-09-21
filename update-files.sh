#!/bin/bash

# Copy enhanced files to replace originals
cp src/App.enhanced.js src/App.js
cp src/index.enhanced.js src/index.js

# Create directories if they don't exist
mkdir -p src/components/ui
mkdir -p src/components/charts
mkdir -p src/components/maps
mkdir -p src/components/dashboard
mkdir -p src/components/auth
mkdir -p src/context

echo "Files updated successfully!"