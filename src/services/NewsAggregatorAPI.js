// Real-time news aggregation service for civil rights issues
class NewsAggregatorAPI {
  constructor() {
    this.newsAPIKey = process.env.NEWS_API_KEY || 'demo_key';
    this.baseURL = 'https://newsapi.org/v2';
    this.sources = [
      'cnn', 'bbc-news', 'the-new-york-times', 'washington-post', 'npr',
      'reuters', 'associated-press', 'usa-today', 'abc-news', 'cbs-news'
    ];
  }

  // Get latest civil rights news
  async getLatestCivilRightsNews(limit = 20) {
    try {
      const response = await fetch(`${this.baseURL}/everything?q=civil+rights+OR+discrimination+OR+police+reform&apiKey=${this.newsAPIKey}&sortBy=publishedAt&pageSize=${limit}`);
      const data = await response.json();
      return data.articles || this.getMockNews();
    } catch (error) {
      console.error('Error fetching news:', error);
      return this.getMockNews();
    }
  }

  // Get state-specific civil rights news
  async getStateNews(state, limit = 10) {
    try {
      const response = await fetch(`${this.baseURL}/everything?q=${state}+civil+rights+OR+${state}+discrimination&apiKey=${this.newsAPIKey}&sortBy=publishedAt&pageSize=${limit}`);
      const data = await response.json();
      return data.articles || this.getMockStateNews(state);
    } catch (error) {
      console.error('Error fetching state news:', error);
      return this.getMockStateNews(state);
    }
  }

  // Get breaking news alerts
  async getBreakingAlerts(limit = 5) {
    try {
      const response = await fetch(`${this.baseURL}/top-headlines?q=civil+rights&apiKey=${this.newsAPIKey}&pageSize=${limit}`);
      const data = await response.json();
      return data.articles || this.getMockBreakingNews();
    } catch (error) {
      console.error('Error fetching breaking news:', error);
      return this.getMockBreakingNews();
    }
  }

  // Get mock news for development
  getMockNews() {
    return [
      {
        title: "Supreme Court Rules on Police Immunity Case",
        description: "The Supreme Court issued a landmark ruling on qualified immunity for law enforcement officers.",
        url: "https://example.com/supreme-court-ruling",
        urlToImage: "https://example.com/images/supreme-court.jpg",
        publishedAt: new Date().toISOString(),
        source: { name: "CNN" }
      },
      {
        title: "New Civil Rights Legislation Introduced in Congress",
        description: "Bipartisan bill aims to strengthen federal civil rights protections.",
        url: "https://example.com/congress-bill",
        urlToImage: "https://example.com/images/congress.jpg",
        publishedAt: new Date(Date.now() - 3600000).toISOString(),
        source: { name: "The New York Times" }
      },
      {
        title: "State Passes Comprehensive Police Reform Package",
        description: "Governor signs sweeping reforms including body camera mandates and use-of-force restrictions.",
        url: "https://example.com/state-reform",
        urlToImage: "https://example.com/images/governor.jpg",
        publishedAt: new Date(Date.now() - 7200000).toISOString(),
        source: { name: "Reuters" }
      }
    ];
  }

  getMockStateNews(state) {
    return [
      {
        title: `${state} Legislature Debates Civil Rights Bill`,
        description: `The ${state} legislature is considering new civil rights legislation that would expand protections.`,
        url: `https://example.com/${state.toLowerCase()}-news`,
        urlToImage: `https://example.com/images/${state.toLowerCase()}-capitol.jpg`,
        publishedAt: new Date().toISOString(),
        source: { name: `${state} News Network` }
      }
    ];
  }

  getMockBreakingNews() {
    return [
      {
        title: "BREAKING: Major Civil Rights Settlement Reached",
        description: "Historic settlement in discrimination case sets new precedent.",
        url: "https://example.com/breaking-settlement",
        urlToImage: "https://example.com/images/breaking-news.jpg",
        publishedAt: new Date().toISOString(),
        source: { name: "Breaking News" }
      }
    ];
  }

  // Subscribe to news updates
  subscribeToNewsUpdates(callback) {
    // In a real implementation, this would use WebSockets or SSE
    console.log('Subscribed to news updates');
    
    // Mock real-time updates
    setInterval(() => {
      const mockUpdate = {
        title: `NEW: ${['Major', 'Historic', 'Breaking'][Math.floor(Math.random() * 3)]} Civil Rights Development`,
        description: `Latest update on ${['discrimination', 'police reform', 'voting rights', 'marijuana legalization'][Math.floor(Math.random() * 4)]}`,
        url: `https://example.com/news-${Date.now()}`,
        publishedAt: new Date().toISOString(),
        source: { name: 'Real-Time News' }
      };
      callback(mockUpdate);
    }, 60000); // Update every minute
  }
}

export default new NewsAggregatorAPI();