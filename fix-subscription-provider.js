const fs = require('fs');

// Read the current main.jsx file
let content = fs.readFileSync('src/main.jsx', 'utf8');

// Replace the AuthProvider section to include SubscriptionProvider
content = content.replace(
  /<AuthProvider>\s*<Suspense fallback=\{<LoadingFallback \/>\}>\s*<App \/>\s*<\/Suspense>\s*<\/AuthProvider>/,
  `<AuthProvider>
               <SubscriptionProvider>
                 <Suspense fallback={<LoadingFallback />}>
                   <App />
                 </Suspense>
               </SubscriptionProvider>
             </AuthProvider>`
);

// Write the updated content back
fs.writeFileSync('src/main.jsx', content);
console.log('Successfully added SubscriptionProvider wrapper');