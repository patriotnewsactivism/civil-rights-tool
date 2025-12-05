import { createClient } from '@supabase/supabase-js';

// Supabase configuration from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create a mock Supabase client that doesn't make any network requests
class MockSupabaseClient {
  constructor() {
    this.isAvailable = false;
    this.lastError = new Error('Supabase is not configured or unavailable');
  }
  
  async checkAvailability() {
    return false;
  }
  
  get auth() {
    return {
      getSession: async () => ({ data: { session: null }, error: null }),
      signUp: async () => ({ data: null, error: new Error('Authentication is not available') }),
      signInWithPassword: async () => ({ data: null, error: new Error('Authentication is not available') }),
      signOut: async () => ({ error: null }),
      resetPasswordForEmail: async () => ({ data: null, error: new Error('Authentication is not available') }),
      updateUser: async () => ({ data: null, error: new Error('Authentication is not available') }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
    };
  }
  
  from(table) {
    return {
      select: () => ({
        then: (resolve) => resolve({ data: [], error: null }),
        catch: (reject) => reject(new Error('Database is not available')),
        single: async () => ({ data: null, error: null }),
        maybeSingle: async () => ({ data: null, error: null }),
        limit: () => this.from(table).select(),
        order: () => this.from(table).select(),
        range: () => this.from(table).select(),
        eq: () => this.from(table).select(),
        neq: () => this.from(table).select(),
        gt: () => this.from(table).select(),
        lt: () => this.from(table).select(),
        gte: () => this.from(table).select(),
        lte: () => this.from(table).select(),
        like: () => this.from(table).select(),
        ilike: () => this.from(table).select(),
        in: () => this.from(table).select(),
        contains: () => this.from(table).select(),
        containedBy: () => this.from(table).select(),
        filter: () => this.from(table).select(),
        match: () => this.from(table).select()
      }),
      insert: async () => ({ data: null, error: new Error('Database is not available') }),
      update: async () => ({ data: null, error: new Error('Database is not available') }),
      delete: async () => ({ data: null, error: new Error('Database is not available') }),
      upsert: async () => ({ data: null, error: new Error('Database is not available') })
    };
  }
  
  storage() {
    return {
      from: () => ({
        upload: async () => ({ data: null, error: new Error('Storage is not available') }),
        download: async () => ({ data: null, error: new Error('Storage is not available') }),
        list: async () => ({ data: [], error: null }),
        remove: async () => ({ data: null, error: new Error('Storage is not available') })
      })
    };
  }
  
  rpc(fn, params) {
    return Promise.resolve({ data: null, error: new Error('Database is not available') });
  }
  
  channel(channelName) {
    return {
      on: () => this.channel(channelName),
      subscribe: () => ({
        unsubscribe: () => {}
      })
    };
  }
  
  removeChannel(channel) {
    return;
  }
  
  async executeQuery(queryFn, retries = 0) {
    return { data: null, error: new Error('Database is not available') };
  }
}

// Try to create a real Supabase client, but fall back to mock if it fails
let supabaseClient;
let useMockClient = false;

try {
  // Check if the URL is valid
  if (!supabaseUrl || supabaseUrl === '' || !supabaseUrl.includes('supabase.co')) {
    console.warn('Invalid Supabase URL, using mock client');
    useMockClient = true;
  } else {
    supabaseClient = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    });
  }
} catch (error) {
  console.error('Error creating Supabase client:', error);
  useMockClient = true;
}

// Enhanced Supabase client with retry logic and better error handling
class EnhancedSupabaseClient {
  constructor(client, isMock = false) {
    this.client = client || new MockSupabaseClient();
    this.isMock = isMock;
    this.maxRetries = 3;
    this.isAvailable = !isMock;
    this.lastError = null;
    
    // Don't check availability if using mock client
    if (!isMock) {
      this.checkAvailability();
    }
  }
  
  // Method to check if Supabase is available
  async checkAvailability() {
    if (this.isMock) {
      this.isAvailable = false;
      return false;
    }
    
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
      console.warn('Error checking Supabase availability:', error);
      this.isAvailable = false;
      this.lastError = error;
      return false;
    }
  }
  
  // Method to execute a Supabase query with retry logic
  async executeQuery(queryFn, retries = 0) {
    if (this.isMock) {
      return { data: null, error: new Error('Database is not available') };
    }
    
    try {
      // If Supabase is not available and we've already tried the max number of retries,
      // return an error immediately
      if (!this.isAvailable && retries >= this.maxRetries) {
        return { data: null, error: new Error('Supabase is not available') };
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
        
        return result;
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
      
      return { data: null, error };
    }
  }
  
  // Proxy all Supabase methods
  get auth() {
    return this.client.auth;
  }
  
  from(table) {
    if (this.isMock) {
      return this.client.from(table);
    }
    
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
            query.limit(count);
            return wrappedQuery;
          },
          order: (column, options) => {
            query.order(column, options);
            return wrappedQuery;
          },
          range: (from, to) => {
            query.range(from, to);
            return wrappedQuery;
          },
          eq: (column, value) => {
            query.eq(column, value);
            return wrappedQuery;
          },
          neq: (column, value) => {
            query.neq(column, value);
            return wrappedQuery;
          },
          gt: (column, value) => {
            query.gt(column, value);
            return wrappedQuery;
          },
          lt: (column, value) => {
            query.lt(column, value);
            return wrappedQuery;
          },
          gte: (column, value) => {
            query.gte(column, value);
            return wrappedQuery;
          },
          lte: (column, value) => {
            query.lte(column, value);
            return wrappedQuery;
          },
          like: (column, value) => {
            query.like(column, value);
            return wrappedQuery;
          },
          ilike: (column, value) => {
            query.ilike(column, value);
            return wrappedQuery;
          },
          in: (column, values) => {
            query.in(column, values);
            return wrappedQuery;
          },
          contains: (column, value) => {
            query.contains(column, value);
            return wrappedQuery;
          },
          containedBy: (column, value) => {
            query.containedBy(column, value);
            return wrappedQuery;
          },
          filter: (column, operator, value) => {
            query.filter(column, operator, value);
            return wrappedQuery;
          },
          match: (matchQuery) => {
            query.match(matchQuery);
            return wrappedQuery;
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
    return this.client.storage();
  }
  
  rpc(fn, params) {
    if (this.isMock) {
      return this.client.rpc(fn, params);
    }
    
    const query = this.client.rpc(fn, params);
    return this.executeQuery(() => query);
  }
  
  channel(channelName) {
    return this.client.channel(channelName);
  }
  
  removeChannel(channel) {
    return this.client.removeChannel(channel);
  }
}

// Export the enhanced Supabase client (using mock if necessary)
export const supabase = new EnhancedSupabaseClient(
  useMockClient ? new MockSupabaseClient() : supabaseClient,
  useMockClient
);

// Export the original client for direct access if needed
export const supabaseOriginal = useMockClient ? new MockSupabaseClient() : supabaseClient;

// Export a flag to indicate if we're using the mock client
export const isUsingMockClient = useMockClient;