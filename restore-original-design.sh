#!/bin/bash

echo "Restoring original beautiful design while keeping enhanced functionality..."

# Backup current App.jsx
cp src/App.jsx src/App.backup.jsx

# Replace with restored version that maintains original aesthetic
cp src/App.restored.jsx src/App.jsx

# Update imports in main.jsx to use the restored App
sed -i 's/import App from '\''\.\/App\.jsx'\''/import App from '\''\.\/App\.jsx'\''/' src/main.jsx

echo "Original design restored with enhanced functionality preserved!"
echo ""
echo "Key improvements maintained:"
echo "- All interactive components (ActivistToolkit, JournalistToolkit, StateProfile)"
echo "- Data visualization (CircuitMap, CircuitAnalysisChart)"
echo "- Case explorer functionality"
echo "- Enhanced navigation with tabs"
echo "- Original beautiful gradient background and styling"
echo "- Sophisticated color scheme with proper contrast"