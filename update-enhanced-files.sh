#!/bin/bash

# Copy enhanced files to their respective locations
cp src/App.enhanced.jsx src/App.jsx
cp src/index.enhanced.css src/index.css

# Make sure the data directory exists
mkdir -p src/data

echo "Files updated successfully!"
echo "Starting the development server..."

# Start the development server
npm run dev