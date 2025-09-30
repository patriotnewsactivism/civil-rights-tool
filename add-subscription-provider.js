const fs = require('fs');

// Read the current main.jsx file
let mainContent = fs.readFileSync('src/main.jsx', 'utf8');

// Add the import
if (!mainContent.includes('SubscriptionProvider')) {
  mainContent = mainContent.replace(
    "import { AuthProvider } from './context/AuthContext.jsx';",
    "import { AuthProvider } from './context/AuthContext.jsx';\nimport { SubscriptionProvider } from './context/SubscriptionContext.jsx';"
  );

  // Add the provider wrapper
  mainContent = mainContent.replace(
    '<AuthProvider>',
    '<AuthProvider>\n               <SubscriptionProvider>'
  );

  mainContent = mainContent.replace(
    '</AuthProvider>',
    '</SubscriptionProvider>\n             </AuthProvider>'
  );

  // Write the updated content back to the file
  fs.writeFileSync('src/main.jsx', mainContent);
  console.log('Successfully added SubscriptionProvider to main.jsx');
} else {
  console.log('SubscriptionProvider already exists in main.jsx');
}