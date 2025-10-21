// FBI Crime Data API Service
// Free access to real crime statistics nationwide
// Note: This is historical/aggregated data, not real-time incidents

interface CrimeIncident {
  data_year: number;
  offense: string;
  state_abbr: string;
  actual: number;
  cleared: number;
  city_name?: string;
}

interface CrimeStats {
  state: string;
  incidents: CrimeIncident[];
  totalCrimes: number;
}

const FBI_API_BASE = 'https://api.usa.gov/crime/fbi/sapi';
// Using no key for demo - users should get their own from api.data.gov
const API_KEY = import.meta.env.VITE_FBI_API_KEY || 'DEMO_KEY';

export class CrimeDataAPI {
  /**
   * Get crime statistics for a specific state
   */
  static async getCrimeByState(stateAbbr: string, year: number = 2023): Promise<CrimeStats | null> {
    try {
      const response = await fetch(
        `${FBI_API_BASE}/api/summarized/state/${stateAbbr}/offense?api_key=${API_KEY}`
      );
      
      if (!response.ok) {
        console.warn(`FBI API returned ${response.status} for state ${stateAbbr}`);
        return null;
      }
      
      const data = await response.json();
      const incidents = data.results || [];
      const totalCrimes = incidents.reduce((sum: number, inc: CrimeIncident) => sum + (inc.actual || 0), 0);
      
      return {
        state: stateAbbr,
        incidents,
        totalCrimes
      };
    } catch (error) {
      console.error(`Error fetching crime data for ${stateAbbr}:`, error);
      return null;
    }
  }

  /**
   * Get recent crime trends
   */
  static async getNationalCrimeStats(): Promise<any> {
    try {
      const response = await fetch(
        `${FBI_API_BASE}/api/estimates/national?api_key=${API_KEY}`
      );
      
      if (!response.ok) {
        console.warn(`FBI API returned ${response.status} for national stats`);
        return null;
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching national crime stats:', error);
      return null;
    }
  }
}
