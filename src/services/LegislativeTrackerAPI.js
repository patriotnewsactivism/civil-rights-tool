// Real-time legislative tracking service
class LegislativeTrackerAPI {
  constructor() {
    this.baseURL = 'https://api.legiscan.com';
    this.apiKey = process.env.LEGISCAN_API_KEY || 'demo_key';
    this.webhookURL = process.env.WEBHOOK_URL || '';
  }

  // Get current bills by state
  async getBillsByState(state, session = '2025') {
    try {
      const response = await fetch(`${this.baseURL}/?key=${this.apiKey}&op=getMasterList&state=${state}&session=${session}`);
      const data = await response.json();
      return this.filterCivilRightsBills(data);
    } catch (error) {
      console.error('Error fetching bills:', error);
      return this.getMockBills();
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
      return this.getMockBillDetails(billId);
    }
  }

  // Get mock data for development
  getMockBills() {
    return [
      {
        bill_id: 12345,
        number: 'SB 1234',
        title: 'Civil Rights Protection Act - Enhanced penalties for discrimination',
        status: 'In Committee',
        status_date: '2025-10-01',
        sponsor: 'Senator Smith',
        state: 'CA'
      },
      {
        bill_id: 12346,
        number: 'HB 5678',
        title: 'Marijuana Decriminalization Act - Remove criminal penalties',
        status: 'Passed House',
        status_date: '2025-09-15',
        sponsor: 'Representative Johnson',
        state: 'NY'
      },
      {
        bill_id: 12347,
        number: 'AB 9012',
        title: 'Police Reform and Accountability Act - Body camera requirements',
        status: 'Signed into Law',
        status_date: '2025-08-20',
        sponsor: 'Assemblymember Davis',
        state: 'CA'
      }
    ];
  }

  getMockBillDetails(billId) {
    const bills = {
      12345: {
        bill_id: 12345,
        number: 'SB 1234',
        title: 'Civil Rights Protection Act',
        description: 'This bill enhances penalties for discrimination in housing, employment, and public accommodations.',
        status: 'In Committee',
        status_date: '2025-10-01',
        sponsor: 'Senator Smith',
        state: 'CA',
        history: [
          { date: '2025-09-01', action: 'Introduced' },
          { date: '2025-09-15', action: 'Referred to Committee' },
          { date: '2025-10-01', action: 'Committee Hearing Scheduled' }
        ],
        votes: {
          for: 5,
          against: 2,
          abstain: 0
        }
      }
    };
    return bills[billId] || bills[12345];
  }

  // Subscribe to bill updates
  async subscribeToBillUpdates(billId, callback) {
    // In a real implementation, this would set up a webhook or WebSocket
    console.log(`Subscribed to updates for bill ${billId}`);
    
    // Mock real-time updates
    setInterval(() => {
      const mockUpdate = {
        bill_id: billId,
        status: ['In Committee', 'Passed Committee', 'On Floor', 'Passed', 'Signed into Law'][Math.floor(Math.random() * 5)],
        status_date: new Date().toISOString().split('T')[0],
        action: 'Status updated'
      };
      callback(mockUpdate);
    }, 30000); // Update every 30 seconds
  }
}

export default new LegislativeTrackerAPI();