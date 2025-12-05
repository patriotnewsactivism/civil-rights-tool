import { updatedMarijuanaLaws } from './src/data/updatedMarijuanaLaws.js';

// Test the data structure
console.log('Total states covered:', Object.keys(updatedMarijuanaLaws).length);

// Check a few random states for completeness
const testStates = ['CA', 'TX', 'NY', 'FL', 'AK'];
console.log('\nTesting data completeness for sample states:');

testStates.forEach(state => {
  const law = updatedMarijuanaLaws[state];
  console.log(`\n${state}:`);
  console.log(`  Status: ${law.status}`);
  console.log(`  Possession: ${law.possession}`);
  console.log(`  Cultivation: ${law.cultivation}`);
  console.log(`  Medical Program: ${law.medicalProgram}`);
  console.log(`  Recreational: ${law.recreational}`);
  console.log(`  THC Limit: ${law.thcLimit}`);
  console.log(`  Qualifying Conditions: ${law.qualifyingConditions.length} conditions`);
  console.log(`  Dispensaries: ${law.dispensaries}`);
  console.log(`  Free Card Info: ${law.freeCardInfo}`);
  console.log(`  Key Regulations: ${law.keyRegulations.length} regulations`);
  console.log(`  Recent Changes: ${law.recentChanges}`);
});

// Check for required fields in all states
console.log('\nValidating data structure for all states:');
let missingFields = [];

Object.keys(updatedMarijuanaLaws).forEach(state => {
  const law = updatedMarijuanaLaws[state];
  const requiredFields = [
    'status', 'possession', 'cultivation', 'medicalProgram', 
    'recreational', 'thcLimit', 'qualifyingConditions', 
    'freeCardInfo', 'dispensaries', 'details', 'recentChanges',
    'decriminalization', 'expungement', 'keyRegulations'
  ];
  
  requiredFields.forEach(field => {
    if (law[field] === undefined) {
      missingFields.push(`${state}.${field}`);
    }
  });
});

if (missingFields.length === 0) {
  console.log('✓ All required fields present for all states');
} else {
  console.log('✗ Missing fields:', missingFields);
}

// Check for consistency in status values
console.log('\nValidating status values:');
const statusValues = new Set();
Object.keys(updatedMarijuanaLaws).forEach(state => {
  statusValues.add(updatedMarijuanaLaws[state].status);
});
console.log('Status categories:', Array.from(statusValues));

console.log('\nMarijuana law data validation complete.');