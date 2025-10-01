// Simple test to check component loading
console.log('Testing component loading...');

// Check if main components exist
const components = [
  'LegalToolkitPro.jsx',
  'ResourcesAndLaws.jsx', 
  'ToolkitsHub.jsx',
  'CaseExplorer.jsx'
];

components.forEach(component => {
  try {
    console.log(`✅ ${component} exists`);
  } catch (error) {
    console.error(`❌ Error with ${component}:`, error.message);
  }
});

console.log('Test complete');