// CourtListener API service
const API_BASE_URL = 'https://www.courtlistener.com/api/rest/v4';

// Your API token - in a real application, this should be stored securely
const API_TOKEN = '868e4ddf04497269550c58f0bd6c92242af7e34b';

// Function to make authenticated requests to CourtListener API
const makeRequest = async (endpoint: string, params: Record<string, string> = {}) => {
  const url = new URL(`${API_BASE_URL}${endpoint}`);
  
  // Add query parameters
  Object.keys(params).forEach(key => {
    url.searchParams.append(key, params[key]);
  });
  
  const response = await fetch(url.toString(), {
    headers: {
      'Authorization': `Token ${API_TOKEN}`
    }
  });
  
  if (!response.ok) {
    throw new Error(`CourtListener API error: ${response.status} ${response.statusText}`);
  }
  
  return response.json();
};

// Case law search
export const searchCases = async (query: string) => {
  return makeRequest('/search/', { q: query, type: 'o' });
};

// Get case details
export const getCaseDetails = async (clusterId: number) => {
  return makeRequest(`/clusters/${clusterId}/`);
};

// Financial disclosure search
export const searchFinancialDisclosures = async (query: string) => {
  return makeRequest('/financial-disclosures/', { q: query });
};

// Investment search
export const searchInvestments = async (query: string) => {
  return makeRequest('/investments/', { q: query });
};

// Oral argument search
export const searchOralArguments = async (query: string) => {
  return makeRequest('/audio/', { q: query });
};