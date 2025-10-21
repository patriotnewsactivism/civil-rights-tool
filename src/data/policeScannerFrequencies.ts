// Police Scanner Frequencies by State and Major City
// Frequencies from public radio reference databases
// Listen online at Broadcastify.com or use a scanner radio

export interface ScannerFrequency {
  id: string;
  state: string;
  city: string;
  agency: string;
  frequency: string;
  type: string; // 'Police', 'Fire', 'EMS', 'Sheriff', 'Highway Patrol'
  mode: string; // 'FM', 'Digital', 'P25', 'DMR'
  description: string;
  broadcastifyFeed?: string;
}

export const policeScannerFrequencies: ScannerFrequency[] = [
  // Alabama
  { id: 'al-001', state: 'AL', city: 'Birmingham', agency: 'Birmingham Police', frequency: '460.275 MHz', type: 'Police', mode: 'Digital P25', description: 'Primary dispatch channel', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/2730' },
  { id: 'al-002', state: 'AL', city: 'Montgomery', agency: 'Montgomery Police', frequency: '460.350 MHz', type: 'Police', mode: 'Digital P25', description: 'Main dispatch', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/24935' },
  { id: 'al-003', state: 'AL', city: 'Mobile', agency: 'Mobile Police', frequency: '460.400 MHz', type: 'Police', mode: 'Digital', description: 'Dispatch and operations' },
  
  // Alaska
  { id: 'ak-001', state: 'AK', city: 'Anchorage', agency: 'Anchorage Police', frequency: '155.370 MHz', type: 'Police', mode: 'FM', description: 'North sector dispatch', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/19683' },
  { id: 'ak-002', state: 'AK', city: 'Fairbanks', agency: 'Fairbanks Police', frequency: '154.800 MHz', type: 'Police', mode: 'FM', description: 'Main channel' },
  
  // Arizona
  { id: 'az-001', state: 'AZ', city: 'Phoenix', agency: 'Phoenix Police', frequency: '866.5125 MHz', type: 'Police', mode: 'Digital P25', description: 'Central precinct', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/2425' },
  { id: 'az-002', state: 'AZ', city: 'Tucson', agency: 'Tucson Police', frequency: '857.2625 MHz', type: 'Police', mode: 'Digital P25', description: 'Dispatch channel 1' },
  { id: 'az-003', state: 'AZ', city: 'Mesa', agency: 'Mesa Police', frequency: '866.1125 MHz', type: 'Police', mode: 'Digital P25', description: 'Primary operations' },
  
  // Arkansas
  { id: 'ar-001', state: 'AR', city: 'Little Rock', agency: 'Little Rock Police', frequency: '460.275 MHz', type: 'Police', mode: 'Digital', description: 'Dispatch 1', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/23858' },
  { id: 'ar-002', state: 'AR', city: 'Fort Smith', agency: 'Fort Smith Police', frequency: '155.640 MHz', type: 'Police', mode: 'FM', description: 'Main channel' },
  
  // California
  { id: 'ca-001', state: 'CA', city: 'Los Angeles', agency: 'LAPD', frequency: '460.350 MHz', type: 'Police', mode: 'Digital P25', description: 'Metro Division', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/6427' },
  { id: 'ca-002', state: 'CA', city: 'San Francisco', agency: 'SFPD', frequency: '460.225 MHz', type: 'Police', mode: 'Digital', description: 'Central dispatch', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/13321' },
  { id: 'ca-003', state: 'CA', city: 'San Diego', agency: 'San Diego Police', frequency: '460.575 MHz', type: 'Police', mode: 'Digital P25', description: 'Citywide 1' },
  { id: 'ca-004', state: 'CA', city: 'Sacramento', agency: 'Sacramento Police', frequency: '460.250 MHz', type: 'Police', mode: 'Digital', description: 'North area dispatch' },
  { id: 'ca-005', state: 'CA', city: 'Oakland', agency: 'Oakland Police', frequency: '460.425 MHz', type: 'Police', mode: 'Digital', description: 'Dispatch operations' },
  
  // Colorado
  { id: 'co-001', state: 'CO', city: 'Denver', agency: 'Denver Police', frequency: '460.375 MHz', type: 'Police', mode: 'Digital P25', description: 'District 1', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/2260' },
  { id: 'co-002', state: 'CO', city: 'Colorado Springs', agency: 'CSPD', frequency: '460.300 MHz', type: 'Police', mode: 'Digital P25', description: 'Main dispatch' },
  { id: 'co-003', state: 'CO', city: 'Aurora', agency: 'Aurora Police', frequency: '460.450 MHz', type: 'Police', mode: 'Digital', description: 'Patrol dispatch' },
  
  // Connecticut
  { id: 'ct-001', state: 'CT', city: 'Hartford', agency: 'Hartford Police', frequency: '460.375 MHz', type: 'Police', mode: 'Digital', description: 'Zone 1', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/22186' },
  { id: 'ct-002', state: 'CT', city: 'New Haven', agency: 'New Haven Police', frequency: '460.325 MHz', type: 'Police', mode: 'Digital', description: 'Dispatch channel' },
  
  // Delaware
  { id: 'de-001', state: 'DE', city: 'Wilmington', agency: 'Wilmington Police', frequency: '460.450 MHz', type: 'Police', mode: 'Digital', description: 'Main dispatch', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/23699' },
  
  // Florida
  { id: 'fl-001', state: 'FL', city: 'Miami', agency: 'Miami Police', frequency: '460.200 MHz', type: 'Police', mode: 'Digital P25', description: 'Zone 1', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/3935' },
  { id: 'fl-002', state: 'FL', city: 'Tampa', agency: 'Tampa Police', frequency: '460.350 MHz', type: 'Police', mode: 'Digital', description: 'District 1' },
  { id: 'fl-003', state: 'FL', city: 'Orlando', agency: 'Orlando Police', frequency: '460.425 MHz', type: 'Police', mode: 'Digital', description: 'North sector' },
  { id: 'fl-004', state: 'FL', city: 'Jacksonville', agency: 'Jacksonville Sheriff', frequency: '460.500 MHz', type: 'Sheriff', mode: 'Digital', description: 'Zone 1' },
  
  // Georgia
  { id: 'ga-001', state: 'GA', city: 'Atlanta', agency: 'Atlanta Police', frequency: '460.225 MHz', type: 'Police', mode: 'Digital P25', description: 'Zone 1', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/14154' },
  { id: 'ga-002', state: 'GA', city: 'Savannah', agency: 'Savannah Police', frequency: '460.375 MHz', type: 'Police', mode: 'Digital', description: 'Main channel' },
  
  // Hawaii
  { id: 'hi-001', state: 'HI', city: 'Honolulu', agency: 'Honolulu Police', frequency: '460.275 MHz', type: 'Police', mode: 'Digital P25', description: 'District 1', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/21882' },
  
  // Idaho
  { id: 'id-001', state: 'ID', city: 'Boise', agency: 'Boise Police', frequency: '154.905 MHz', type: 'Police', mode: 'FM', description: 'Dispatch', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/18912' },
  
  // Illinois
  { id: 'il-001', state: 'IL', city: 'Chicago', agency: 'Chicago Police', frequency: '460.425 MHz', type: 'Police', mode: 'Digital P25', description: 'Zone 1', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/17062' },
  { id: 'il-002', state: 'IL', city: 'Springfield', agency: 'Springfield Police', frequency: '155.850 MHz', type: 'Police', mode: 'FM', description: 'Main dispatch' },
  
  // Indiana
  { id: 'in-001', state: 'IN', city: 'Indianapolis', agency: 'IMPD', frequency: '460.250 MHz', type: 'Police', mode: 'Digital P25', description: 'North district', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/2548' },
  { id: 'in-002', state: 'IN', city: 'Fort Wayne', agency: 'Fort Wayne Police', frequency: '154.860 MHz', type: 'Police', mode: 'FM', description: 'Dispatch' },
  
  // Iowa
  { id: 'ia-001', state: 'IA', city: 'Des Moines', agency: 'Des Moines Police', frequency: '460.375 MHz', type: 'Police', mode: 'Digital', description: 'Citywide', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/2245' },
  
  // Kansas
  { id: 'ks-001', state: 'KS', city: 'Wichita', agency: 'Wichita Police', frequency: '460.300 MHz', type: 'Police', mode: 'Digital', description: 'Main dispatch', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/18868' },
  
  // Kentucky
  { id: 'ky-001', state: 'KY', city: 'Louisville', agency: 'Louisville Metro Police', frequency: '460.350 MHz', type: 'Police', mode: 'Digital P25', description: 'Division 1', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/2586' },
  
  // Louisiana
  { id: 'la-001', state: 'LA', city: 'New Orleans', agency: 'NOPD', frequency: '460.375 MHz', type: 'Police', mode: 'Digital', description: 'First district', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/8867' },
  { id: 'la-002', state: 'LA', city: 'Baton Rouge', agency: 'Baton Rouge Police', frequency: '460.300 MHz', type: 'Police', mode: 'Digital', description: 'North dispatch' },
  
  // Maine
  { id: 'me-001', state: 'ME', city: 'Portland', agency: 'Portland Police', frequency: '155.790 MHz', type: 'Police', mode: 'FM', description: 'Dispatch', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/23751' },
  
  // Maryland
  { id: 'md-001', state: 'MD', city: 'Baltimore', agency: 'Baltimore Police', frequency: '460.425 MHz', type: 'Police', mode: 'Digital P25', description: 'Central district', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/2549' },
  
  // Massachusetts
  { id: 'ma-001', state: 'MA', city: 'Boston', agency: 'Boston Police', frequency: '460.300 MHz', type: 'Police', mode: 'Digital P25', description: 'Zone 1', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/12586' },
  
  // Michigan
  { id: 'mi-001', state: 'MI', city: 'Detroit', agency: 'Detroit Police', frequency: '860.2375 MHz', type: 'Police', mode: 'Digital P25', description: 'Precinct 1', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/2550' },
  { id: 'mi-002', state: 'MI', city: 'Grand Rapids', agency: 'Grand Rapids Police', frequency: '154.905 MHz', type: 'Police', mode: 'FM', description: 'Main dispatch' },
  
  // Minnesota
  { id: 'mn-001', state: 'MN', city: 'Minneapolis', agency: 'Minneapolis Police', frequency: '460.425 MHz', type: 'Police', mode: 'Digital P25', description: 'Precinct 1', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/12580' },
  { id: 'mn-002', state: 'MN', city: 'St Paul', agency: 'St Paul Police', frequency: '460.375 MHz', type: 'Police', mode: 'Digital', description: 'Western district' },
  
  // Mississippi
  { id: 'ms-001', state: 'MS', city: 'Jackson', agency: 'Jackson Police', frequency: '460.350 MHz', type: 'Police', mode: 'Digital', description: 'Precinct 1', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/3156' },
  
  // Missouri
  { id: 'mo-001', state: 'MO', city: 'Kansas City', agency: 'Kansas City Police', frequency: '460.475 MHz', type: 'Police', mode: 'Digital P25', description: 'Central patrol', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/2390' },
  { id: 'mo-002', state: 'MO', city: 'St Louis', agency: 'St Louis Police', frequency: '460.250 MHz', type: 'Police', mode: 'Digital', description: 'District 1' },
  
  // Montana
  { id: 'mt-001', state: 'MT', city: 'Billings', agency: 'Billings Police', frequency: '154.815 MHz', type: 'Police', mode: 'FM', description: 'Main dispatch', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/6024' },
  
  // Nebraska
  { id: 'ne-001', state: 'NE', city: 'Omaha', agency: 'Omaha Police', frequency: '460.350 MHz', type: 'Police', mode: 'Digital', description: 'Precinct 1', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/2399' },
  
  // Nevada
  { id: 'nv-001', state: 'NV', city: 'Las Vegas', agency: 'Las Vegas Metro Police', frequency: '860.7625 MHz', type: 'Police', mode: 'Digital P25', description: 'Area command', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/2654' },
  { id: 'nv-002', state: 'NV', city: 'Reno', agency: 'Reno Police', frequency: '460.425 MHz', type: 'Police', mode: 'Digital', description: 'Main dispatch' },
  
  // New Hampshire
  { id: 'nh-001', state: 'NH', city: 'Manchester', agency: 'Manchester Police', frequency: '155.070 MHz', type: 'Police', mode: 'FM', description: 'Dispatch', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/22192' },
  
  // New Jersey
  { id: 'nj-001', state: 'NJ', city: 'Newark', agency: 'Newark Police', frequency: '460.275 MHz', type: 'Police', mode: 'Digital', description: 'North district', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/9841' },
  { id: 'nj-002', state: 'NJ', city: 'Jersey City', agency: 'Jersey City Police', frequency: '460.325 MHz', type: 'Police', mode: 'Digital', description: 'Main channel' },
  
  // New Mexico
  { id: 'nm-001', state: 'NM', city: 'Albuquerque', agency: 'Albuquerque Police', frequency: '460.425 MHz', type: 'Police', mode: 'Digital P25', description: 'Area command 1', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/14522' },
  
  // New York
  { id: 'ny-001', state: 'NY', city: 'New York', agency: 'NYPD', frequency: '460.450 MHz', type: 'Police', mode: 'Digital P25', description: 'Manhattan South', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/11385' },
  { id: 'ny-002', state: 'NY', city: 'Buffalo', agency: 'Buffalo Police', frequency: '460.375 MHz', type: 'Police', mode: 'Digital', description: 'District A' },
  { id: 'ny-003', state: 'NY', city: 'Rochester', agency: 'Rochester Police', frequency: '460.300 MHz', type: 'Police', mode: 'Digital', description: 'Section 1' },
  
  // North Carolina
  { id: 'nc-001', state: 'NC', city: 'Charlotte', agency: 'Charlotte-Mecklenburg Police', frequency: '460.300 MHz', type: 'Police', mode: 'Digital P25', description: 'North division', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/1227' },
  { id: 'nc-002', state: 'NC', city: 'Raleigh', agency: 'Raleigh Police', frequency: '460.425 MHz', type: 'Police', mode: 'Digital', description: 'District 1' },
  
  // North Dakota
  { id: 'nd-001', state: 'ND', city: 'Fargo', agency: 'Fargo Police', frequency: '155.640 MHz', type: 'Police', mode: 'FM', description: 'Dispatch', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/6085' },
  
  // Ohio
  { id: 'oh-001', state: 'OH', city: 'Columbus', agency: 'Columbus Police', frequency: '460.350 MHz', type: 'Police', mode: 'Digital P25', description: 'Zone 1', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/2640' },
  { id: 'oh-002', state: 'OH', city: 'Cleveland', agency: 'Cleveland Police', frequency: '460.275 MHz', type: 'Police', mode: 'Digital', description: 'District 1' },
  { id: 'oh-003', state: 'OH', city: 'Cincinnati', agency: 'Cincinnati Police', frequency: '460.400 MHz', type: 'Police', mode: 'Digital', description: 'District 1' },
  
  // Oklahoma
  { id: 'ok-001', state: 'OK', city: 'Oklahoma City', agency: 'Oklahoma City Police', frequency: '460.375 MHz', type: 'Police', mode: 'Digital', description: 'Patrol 1', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/14527' },
  { id: 'ok-002', state: 'OK', city: 'Tulsa', agency: 'Tulsa Police', frequency: '460.300 MHz', type: 'Police', mode: 'Digital', description: 'Uniform division' },
  
  // Oregon
  { id: 'or-001', state: 'OR', city: 'Portland', agency: 'Portland Police', frequency: '460.475 MHz', type: 'Police', mode: 'Digital P25', description: 'Central precinct', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/4525' },
  { id: 'or-002', state: 'OR', city: 'Eugene', agency: 'Eugene Police', frequency: '155.040 MHz', type: 'Police', mode: 'FM', description: 'Main dispatch' },
  
  // Pennsylvania
  { id: 'pa-001', state: 'PA', city: 'Philadelphia', agency: 'Philadelphia Police', frequency: '460.325 MHz', type: 'Police', mode: 'Digital P25', description: 'District 1', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/4521' },
  { id: 'pa-002', state: 'PA', city: 'Pittsburgh', agency: 'Pittsburgh Police', frequency: '460.400 MHz', type: 'Police', mode: 'Digital', description: 'Zone 1' },
  
  // Rhode Island
  { id: 'ri-001', state: 'RI', city: 'Providence', agency: 'Providence Police', frequency: '460.350 MHz', type: 'Police', mode: 'Digital', description: 'Main dispatch', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/23722' },
  
  // South Carolina
  { id: 'sc-001', state: 'SC', city: 'Charleston', agency: 'Charleston Police', frequency: '460.275 MHz', type: 'Police', mode: 'Digital', description: 'Team 1', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/2730' },
  { id: 'sc-002', state: 'SC', city: 'Columbia', agency: 'Columbia Police', frequency: '460.325 MHz', type: 'Police', mode: 'Digital', description: 'Main channel' },
  
  // South Dakota
  { id: 'sd-001', state: 'SD', city: 'Sioux Falls', agency: 'Sioux Falls Police', frequency: '154.875 MHz', type: 'Police', mode: 'FM', description: 'Dispatch', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/6100' },
  
  // Tennessee
  { id: 'tn-001', state: 'TN', city: 'Nashville', agency: 'Nashville Police', frequency: '460.375 MHz', type: 'Police', mode: 'Digital P25', description: 'Central precinct', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/14533' },
  { id: 'tn-002', state: 'TN', city: 'Memphis', agency: 'Memphis Police', frequency: '460.300 MHz', type: 'Police', mode: 'Digital', description: 'Appling station' },
  
  // Texas
  { id: 'tx-001', state: 'TX', city: 'Houston', agency: 'Houston Police', frequency: '460.425 MHz', type: 'Police', mode: 'Digital P25', description: 'North patrol', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/14536' },
  { id: 'tx-002', state: 'TX', city: 'Dallas', agency: 'Dallas Police', frequency: '460.350 MHz', type: 'Police', mode: 'Digital P25', description: 'Northeast division' },
  { id: 'tx-003', state: 'TX', city: 'San Antonio', agency: 'San Antonio Police', frequency: '460.275 MHz', type: 'Police', mode: 'Digital', description: 'Central patrol' },
  { id: 'tx-004', state: 'TX', city: 'Austin', agency: 'Austin Police', frequency: '460.300 MHz', type: 'Police', mode: 'Digital P25', description: 'Baker sector' },
  
  // Utah
  { id: 'ut-001', state: 'UT', city: 'Salt Lake City', agency: 'Salt Lake City Police', frequency: '154.785 MHz', type: 'Police', mode: 'FM', description: 'Main dispatch', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/2657' },
  
  // Vermont
  { id: 'vt-001', state: 'VT', city: 'Burlington', agency: 'Burlington Police', frequency: '155.430 MHz', type: 'Police', mode: 'FM', description: 'Dispatch', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/20467' },
  
  // Virginia
  { id: 'va-001', state: 'VA', city: 'Virginia Beach', agency: 'Virginia Beach Police', frequency: '460.375 MHz', type: 'Police', mode: 'Digital P25', description: 'North precinct', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/4598' },
  { id: 'va-002', state: 'VA', city: 'Richmond', agency: 'Richmond Police', frequency: '460.300 MHz', type: 'Police', mode: 'Digital', description: 'Sector 1' },
  
  // Washington
  { id: 'wa-001', state: 'WA', city: 'Seattle', agency: 'Seattle Police', frequency: '460.450 MHz', type: 'Police', mode: 'Digital P25', description: 'North precinct', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/4528' },
  { id: 'wa-002', state: 'WA', city: 'Spokane', agency: 'Spokane Police', frequency: '154.905 MHz', type: 'Police', mode: 'FM', description: 'Main dispatch' },
  
  // West Virginia
  { id: 'wv-001', state: 'WV', city: 'Charleston', agency: 'Charleston Police', frequency: '155.850 MHz', type: 'Police', mode: 'FM', description: 'Dispatch', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/6152' },
  
  // Wisconsin
  { id: 'wi-001', state: 'WI', city: 'Milwaukee', agency: 'Milwaukee Police', frequency: '460.375 MHz', type: 'Police', mode: 'Digital P25', description: 'District 1', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/2658' },
  { id: 'wi-002', state: 'WI', city: 'Madison', agency: 'Madison Police', frequency: '154.785 MHz', type: 'Police', mode: 'FM', description: 'Central dispatch' },
  
  // Wyoming
  { id: 'wy-001', state: 'WY', city: 'Cheyenne', agency: 'Cheyenne Police', frequency: '155.310 MHz', type: 'Police', mode: 'FM', description: 'Dispatch', broadcastifyFeed: 'https://www.broadcastify.com/listen/feed/6168' }
];

export function getScannersByState(stateCode: string): ScannerFrequency[] {
  return policeScannerFrequencies.filter(scanner => scanner.state === stateCode);
}

export function getScannersByCity(city: string): ScannerFrequency[] {
  return policeScannerFrequencies.filter(scanner => 
    scanner.city.toLowerCase().includes(city.toLowerCase())
  );
}
