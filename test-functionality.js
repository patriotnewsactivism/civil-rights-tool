// Test script to verify all components load correctly
import CourtListenerAPI from './src/services/CourtListenerAPI.js';

async function testAPI() {
  console.log('🔍 Testing CourtListener API functionality...\n');
  
  try {
    // Test 1: Basic civil rights search
    console.log('1. Testing basic civil rights search...');
    const civilRightsResults = await CourtListenerAPI.searchCivilRightsCases({ page_size: 2 });
    console.log(`✅ Found ${civilRightsResults.count} civil rights cases`);
    if (civilRightsResults.results && civilRightsResults.results.length > 0) {
      console.log(`   First case: ${civilRightsResults.results[0].case_name}`);
    }
    
    // Test 2: Search by legal area
    console.log('\n2. Testing search by legal area (Police Misconduct)...');
    const policeResults = await CourtListenerAPI.searchByLegalArea('Police Misconduct', { page_size: 2 });
    console.log(`✅ Found ${policeResults.count} police misconduct cases`);
    if (policeResults.results && policeResults.results.length > 0) {
      console.log(`   First case: ${policeResults.results[0].case_name}`);
    }
    
    // Test 3: Search by court
    console.log('\n3. Testing search by court (Supreme Court)...');
    const scotusResults = await CourtListenerAPI.getCasesByCourt('scotus', { page_size: 2 });
    console.log(`✅ Found ${scotusResults.count} Supreme Court cases`);
    if (scotusResults.results && scotusResults.results.length > 0) {
      console.log(`   First case: ${scotusResults.results[0].case_name}`);
    }
    
    // Test 4: General search with term
    console.log('\n4. Testing general search with term...');
    const searchResults = await CourtListenerAPI.searchCases({ q: 'voting rights', page_size: 2 });
    console.log(`✅ Found ${searchResults.count} cases for "voting rights"`);
    if (searchResults.results && searchResults.results.length > 0) {
      console.log(`   First case: ${searchResults.results[0].case_name}`);
    }
    
    console.log('\n🎉 All API tests passed! The Case Explorer should work correctly.');
    
  } catch (error) {
    console.error('❌ API test failed:', error.message);
  }
}

testAPI();