const fs = require('fs');

// Read the current App.jsx file
let appContent = fs.readFileSync('src/App.jsx', 'utf8');

// Add the new tab button after the Case Explorer button
const tabButtonToAdd = `               <button
                 className={\`px-4 py-3 flex items-center font-medium text-sm \${activeTab === 'toolkit' ? 
                   (darkMode ? 'text-white border-b-2 border-blue-500' : 'text-blue-900 border-b-2 border-blue-500') : 
                   (darkMode ? 'text-white/70 hover:text-white' : 'text-slate-600 hover:text-blue-900')}\`}
                 onClick={() => setActiveTab('toolkit')}
               >
                 <FileText className="h-4 w-4 mr-2" />
                 Legal Toolkit Pro
               </button>`;

// Find the Case Explorer button and add the new tab after it
const caseExplorerPattern = /(<button[\s\S]*?Case Explorer[\s\S]*?<\/button>)/;
const match = appContent.match(caseExplorerPattern);

if (match) {
  const caseExplorerButton = match[1];
  appContent = appContent.replace(caseExplorerButton, caseExplorerButton + '\n' + tabButtonToAdd);
}

// Add the new tab content before the closing ErrorBoundary
const tabContentToAdd = `
             {activeTab === 'toolkit' && (
               <ErrorBoundary>
                 <Suspense fallback={<ComponentLoading />}>
                   <SafeLegalToolkitPro />
                 </Suspense>
               </ErrorBoundary>
             )}`;

// Find the last tab content (cases) and add the new content after it
const casesTabPattern = /{activeTab === 'cases' && \([\s\S]*?<\/ErrorBoundary>\s*\)}/;
const casesMatch = appContent.match(casesTabPattern);

if (casesMatch) {
  const casesTabContent = casesMatch[0];
  appContent = appContent.replace(casesTabContent, casesTabContent + tabContentToAdd);
}

// Write the updated content back to the file
fs.writeFileSync('src/App.jsx', appContent);

console.log('Successfully integrated Legal Toolkit Pro into App.jsx');