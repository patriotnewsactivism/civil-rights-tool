// Real-time news aggregation service for civil rights issues (via backend proxy)
class NewsAggregatorAPI {
  constructor() {
    // Use backend proxy to avoid exposing API keys
    this.baseURL = '/api/news';
  }

  // Get latest civil rights news
  async getLatestCivilRightsNews(limit = 20) {
    try {
      const query = 'civil+rights+OR+discrimination+OR+police+reform';
      const response = await fetch(`${this.baseURL}/everything?q=${query}&limit=${limit}`);
      
      if (!response.ok) {
        if (response.status === 503) {
          console.warn('NewsAPI not configured');
          return [];
        }
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      return data.articles || [];
    } catch (error) {
      console.error('Error fetching news:', error);
      return [];
    }
  }

  // Get state-specific civil rights news
  async getStateNews(state, limit = 10) {
    try {
      const query = `${state}+civil+rights+OR+${state}+discrimination`;
      const response = await fetch(`${this.baseURL}/everything?q=${encodeURIComponent(query)}&limit=${limit}`);
      
      if (!response.ok) {
        if (response.status === 503) {
          console.warn('NewsAPI not configured');
          return [];
        }
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      return data.articles || [];
    } catch (error) {
      console.error('Error fetching state news:', error);
      return [];
    }
  }

  // Get breaking news alerts
  async getBreakingAlerts(limit = 5) {
    try {
      const response = await fetch(`${this.baseURL}/top-headlines?q=civil+rights&limit=${limit}`);
      
      if (!response.ok) {
        if (response.status === 503) {
          console.warn('NewsAPI not configured');
          return [];
        }
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      return data.articles || [];
    } catch (error) {
      console.error('Error fetching breaking news:', error);
      return [];
    }
  }

  // Subscribe to news updates
  subscribeToNewsUpdates(callback) {
    // Real-time updates would require WebSockets or Server-Sent Events
    // This functionality requires a valid API key and proper backend setup
    console.log('News updates subscription ready (requires API configuration)');
  }
}

export default new NewsAggregatorAPI();
