// Real-time legislative tracking service
class LegislativeTrackerAPI {
  constructor() {
    this.baseURL = 'https://api.legiscan.com';
    this.apiKey = import.meta.env.VITE_LEGISCAN_API_KEY || 'demo_key';
    this.webhookURL = import.meta.env.VITE_WEBHOOK_URL || '';
  }

  // Get current bills by state
  async getBillsByState(state, session = '2025') {
    try {
      const response = await fetch(`${this.baseURL}/?key=${this.apiKey}&op=getMasterList&state=${state}&session=${session}`);
      const data = await response.json();
      return this.filterCivilRightsBills(data);
    } catch (error) {
      console.error('Error fetching bills:', error);
      return [];
    }
  }

  // Filter bills related to civil rights
  filterCivilRightsBills(data) {
    if (!data.masterlist) return [];
    
    const civilRightsKeywords = [
      'civil rights', 'discrimination', 'equality', 'voting rights', 'police reform',
      'criminal justice', 'marijuana', 'cannabis', 'drug policy', 'sentencing reform',
      'racial justice', 'LGBTQ', 'transgender', 'reproductive rights', 'privacy rights'
    ];

    return Object.values(data.masterlist).filter(bill => {
      const title = (bill.title || '').toLowerCase();
      const description = (bill.description || '').toLowerCase();
      return civilRightsKeywords.some(keyword => 
        title.includes(keyword) || description.includes(keyword)
      );
    });
  }

  // Get bill details
  async getBillDetails(billId) {
    try {
      const response = await fetch(`${this.baseURL}/?key=${this.apiKey}&op=getBill&id=${billId}`);
      const data = await response.json();
      return data.bill;
    } catch (error) {
      console.error('Error fetching bill details:', error);
      return null;
    }
  }

  // Subscribe to bill updates
  async subscribeToBillUpdates(billId, callback) {
    // Real-time bill tracking would require webhook or WebSocket setup
    // This functionality requires a valid API key and proper backend configuration
    console.log(`Bill updates subscription ready for bill ${billId} (requires API configuration)`);
  }
}

export default new LegislativeTrackerAPI();