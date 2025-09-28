import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = 'https://xvvdelxlwjfazksvneom.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2dmRlbHhsd2pmYXprc3ZuZW9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2NDgwNDQsImV4cCI6MjA2OTIyNDA0NH0.yN9_-zEuMIorZxUNBCdE1o8haP59imBp-lLKXPbu8J8';

// Create the Supabase client
const supabaseClient = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  },
  global: {
    // Set longer timeout for requests
    fetch: (url, options) => {
      return fetch(url, { ...options, timeout: 30000 });
    }
  }
});

// Enhanced Supabase client with retry logic and better error handling
class EnhancedSupabaseClient {
  constructor(client) {
    this.client = client;
    this.maxRetries = 3;
    this.isAvailable = true;
    this.lastError = null;
    
    // Check if Supabase is available on initialization
    this.checkAvailability();
  }
  
  // Method to check if Supabase is available
  async checkAvailability() {
    try {
      // Simple ping to check if Supabase is available
      const { error } = await this.client.from('test').select('count').limit(1);
      
      if (error) {
        console.warn('Supabase availability check failed:', error);
        this.isAvailable = false;
        this.lastError = error;
        return false;
      }
      
      this.isAvailable = true;
      this.lastError = null;
      return true;
    } catch (error) {
      console.error('Error checking Supabase availability:', error);
      this.isAvailable = false;
      this.lastError = error;
      return false;
    }
  }
  
  // Method to execute a Supabase query with retry logic
  async executeQuery(queryFn, retries = 0) {
    try {
      // If Supabase is not available and we've already tried the max number of retries,
      // throw an error immediately
      if (!this.isAvailable && retries >= this.maxRetries) {
        throw new Error('Supabase is not available');
      }
      
      // Execute the query
      const result = await queryFn(this.client);
      
      // If there's an error, handle it
      if (result.error) {
        // If it's a network error or server error, retry
        if (
          result.error.message?.includes('fetch failed') ||
          result.error.message?.includes('network') ||
          result.error.code === 'PGRST301' ||
          result.error.code === '500'
        ) {
          if (retries < this.maxRetries) {
            console.warn(`Retrying Supabase query (${retries + 1}/${this.maxRetries})...`);
            // Wait a bit before retrying (exponential backoff)
            await new Promise(resolve => setTimeout(resolve, Math.pow(2, retries) * 1000));
            return this.executeQuery(queryFn, retries + 1);
          }
          
          // If we've reached the max retries, mark Supabase as unavailable
          this.isAvailable = false;
          this.lastError = result.error;
        }
        
        throw result.error;
      }
      
      // If we get here, Supabase is available
      this.isAvailable = true;
      this.lastError = null;
      
      return result;
    } catch (error) {
      // If it's a network error, mark Supabase as unavailable
      if (
        error.message?.includes('fetch failed') ||
        error.message?.includes('network')
      ) {
        this.isAvailable = false;
        this.lastError = error;
      }
      
      throw error;
    }
  }
  
  // Proxy all Supabase methods
  get auth() {
    return this.client.auth;
  }
  
  from(table) {
    const originalFrom = this.client.from(table);
    
    // Wrap all methods with retry logic
    const wrappedFrom = {
      select: (columns) => {
        const query = originalFrom.select(columns);
        
        // Wrap all query methods
        const wrappedQuery = {
          ...query,
          // Override execution methods
          then: (resolve, reject) => {
            return this.executeQuery(() => query).then(resolve, reject);
          },
          catch: (reject) => {
            return this.executeQuery(() => query).catch(reject);
          },
          // Override other methods that execute the query
          single: () => {
            const singleQuery = query.single();
            return this.executeQuery(() => singleQuery);
          },
          maybeSingle: () => {
            const maybeSingleQuery = query.maybeSingle();
            return this.executeQuery(() => maybeSingleQuery);
          },
          limit: (count) => {
            const limitQuery = query.limit(count);
            return wrappedQuery; // Return the wrapped query for chaining
          },
          order: (column, options) => {
            query.order(column, options);
            return wrappedQuery; // Return the wrapped query for chaining
          },
          range: (from, to) => {
            query.range(from, to);
            return wrappedQuery; // Return the wrapped query for chaining
          },
          eq: (column, value) => {
            query.eq(column, value);
            return wrappedQuery; // Return the wrapped query for chaining
          },
          neq: (column, value) => {
            query.neq(column, value);
            return wrappedQuery; // Return the wrapped query for chaining
          },
          gt: (column, value) => {
            query.gt(column, value);
            return wrappedQuery; // Return the wrapped query for chaining
          },
          lt: (column, value) => {
            query.lt(column, value);
            return wrappedQuery; // Return the wrapped query for chaining
          },
          gte: (column, value) => {
            query.gte(column, value);
            return wrappedQuery; // Return the wrapped query for chaining
          },
          lte: (column, value) => {
            query.lte(column, value);
            return wrappedQuery; // Return the wrapped query for chaining
          },
          like: (column, value) => {
            query.like(column, value);
            return wrappedQuery; // Return the wrapped query for chaining
          },
          ilike: (column, value) => {
            query.ilike(column, value);
            return wrappedQuery; // Return the wrapped query for chaining
          },
          in: (column, values) => {
            query.in(column, values);
            return wrappedQuery; // Return the wrapped query for chaining
          },
          contains: (column, value) => {
            query.contains(column, value);
            return wrappedQuery; // Return the wrapped query for chaining
          },
          containedBy: (column, value) => {
            query.containedBy(column, value);
            return wrappedQuery; // Return the wrapped query for chaining
          },
          filter: (column, operator, value) => {
            query.filter(column, operator, value);
            return wrappedQuery; // Return the wrapped query for chaining
          },
          match: (query) => {
            query.match(query);
            return wrappedQuery; // Return the wrapped query for chaining
          },
        };
        
        return wrappedQuery;
      },
      insert: (values) => {
        const query = originalFrom.insert(values);
        return this.executeQuery(() => query);
      },
      update: (values) => {
        const query = originalFrom.update(values);
        return this.executeQuery(() => query);
      },
      delete: () => {
        const query = originalFrom.delete();
        return this.executeQuery(() => query);
      },
      upsert: (values) => {
        const query = originalFrom.upsert(values);
        return this.executeQuery(() => query);
      },
    };
    
    return wrappedFrom;
  }
  
  // Add other Supabase methods as needed
  storage() {
    return this.client.storage;
  }
  
  rpc(fn, params) {
    const query = this.client.rpc(fn, params);
    return this.executeQuery(() => query);
  }
}

// Export the enhanced Supabase client
export const supabase = new EnhancedSupabaseClient(supabaseClient);

// Export the original client for direct access if needed
export const supabaseOriginal = supabaseClient;