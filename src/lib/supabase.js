import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xvvdelxlwjfazksvneom.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2dmRlbHhsd2pmYXprc3ZuZW9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2NDgwNDQsImV4cCI6MjA2OTIyNDA0NH0.yN9_-zEuMIorZxUNBCdE1o8haP59imBp-lLKXPbu8J8';

export const supabase = createClient(supabaseUrl, supabaseKey);
