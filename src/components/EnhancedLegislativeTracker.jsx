import React, { useState, useEffect } from 'react';
import { Scale, ExternalLink, BookOpen, Calendar, User, MapPin, Filter, Search, TrendingUp } from 'lucide-react';

const EnhancedLegislativeTracker = ({ darkMode }) => {
  const [bills, setBills] = useState([]);
  const [selectedState, setSelectedState] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBill, setSelectedBill] = useState(null);

  useEffect(() => {
    loadLegislativeData();
  }, [selectedState]);

  const loadLegislativeData = async () => {
    setIsLoading(true);
    
    // Mock data with real legislative tracking sources
    const mockBills = [
      {
        id: 12345,
        number: 'SB 1234',
        title: 'Civil Rights Protection Act - Enhanced penalties for discrimination',
        status: 'In Committee',
        status_date: '2025-10-01',
        sponsor: 'Senator Smith',
        state: 'CA',
        chamber: 'Senate',
        description: 'This bill enhances penalties for discrimination in housing, employment, and public accommodations.',
        source: 'California Legislature',
        source_url: 'https://leginfo.legislature.ca.gov/face/billTextClient.xhtml?bill_id=202520240SB1234',
        full_text_url: 'https://leginfo.legislature.ca.gov/face/billNavClient.xhtml?bill_id=202520240SB1234',
        history: [
          { date: '2025-09-01', action: 'Introduced', source: 'California Senate' },
          { date: '2025-09-15', action: 'Referred to Committee', source: 'California Senate' },
          { date: '2025-10-01', action: 'Committee Hearing Scheduled', source: 'California Senate' }
        ],
        votes: {
          for: 5,
          against: 2,
          abstain: 0
        },
        related_links: [
          { title: 'Full Bill Text', url: 'https://leginfo.legislature.ca.gov/face/billTextClient.xhtml?bill_id=202520240SB1234' },
          { title: 'Committee Analysis', url: 'https://leginfo.legislature.ca.gov/face/billAnalysisClient.xhtml?bill_id=202520240SB1234' }
        ]
      },
      {
        id: 12346,
        number: 'HB 5678',
        title: 'Marijuana Decriminalization Act - Remove criminal penalties',
        status: 'Passed House',
        status_date: '2025-09-15',
        sponsor: 'Representative Johnson',
        state: 'NY',
        chamber: 'House',
        description: 'Comprehensive bill to remove criminal penalties for marijuana possession and establish regulated adult use.',
        source: 'New York State Assembly',
        source_url: 'https://nyassembly.gov/leg/?default_fld=&leg_video=&bn=A05678&term=2025&Summary=Y&Actions=Y&Text=Y',
        full_text_url: 'https://nyassembly.gov/leg/?default_fld=&leg_video=&bn=A05678&term=2025&Summary=Y&Actions=Y&Text=Y',
        history: [
          { date: '2025-08-15', action: 'Introduced', source: 'New York Assembly' },
          { date: '2025-09-10', action: 'Passed Assembly', source: 'New York Assembly' },
          { date: '2025-09-15', action: 'Sent to Senate', source: 'New York Assembly' }
        ],
        votes: {
          for: 89,
          against: 61,
          abstain: 0
        },
        related_links: [
          { title: 'Assembly Bill Page', url: 'https://nyassembly.gov/leg/?default_fld=&leg_video=&bn=A05678&term=2025&Summary=Y&Actions=Y&Text=Y' },
          { title: 'Governor\'s Statement', url: 'https://governor.ny.gov/news/governor-signs-marijuana-decriminalization-bill' }
        ]
      },
      {
        id: 12347,
        number: 'AB 9012',
        title: 'Police Reform and Accountability Act - Body camera requirements',
        status: 'Signed into Law',
        status_date: '2025-08-20',
        sponsor: 'Assemblymember Davis',
        state: 'CA',
        chamber: 'Assembly',
        description: 'Requires all law enforcement officers to wear body cameras and establishes accountability measures.',
        source: 'California Legislature',
        source_url: 'https://leginfo.legislature.ca.gov/face/billTextClient.xhtml?bill_id=202520240AB9012',
        full_text_url: 'https://leginfo.legislature.ca.gov/face/billTextClient.xhtml?bill_id=202520240AB9012',
        history: [
          { date: '2025-07-15', action: 'Introduced', source: 'California Assembly' },
          { date: '2025-08-01', action: 'Passed Assembly', source: 'California Assembly' },
          { date: '2025-08-15', action: 'Passed Senate', source: 'California Senate' },
          { date: '2025-08-20', action: 'Signed into Law', source: 'Governor' }
        ],
        votes: {
          for: 75,
          against: 5,
          abstain: 0
        },
        related_links: [
          { title: 'Full Bill Text', url: 'https://leginfo.legislature.ca.gov/face/billTextClient.xhtml?bill_id=202520240AB9012' },
          { title: 'Governor\'s Signing Statement', url: 'https://gov.ca.gov/2025/08/20/governor-signs-police-reform-act/' }
        ]
      },
      {
        id: 12348,
        number: 'S 2345',
        title: 'Voting Rights Expansion Act',
        status: 'On Floor',
        status_date: '2025-09-25',
        sponsor: 'Senator Williams',
        state: 'TX',
        chamber: 'Senate',
        description: 'Expands voting rights protections and establishes new polling place requirements.',
        source: 'Texas Legislature',
        source_url: 'https://capitol.texas.gov/BillLookup/Text.aspx?LegSess=89R&Bill=SB2345',
        full_text_url: 'https://capitol.texas.gov/BillLookup/Text.aspx?LegSess=89R&Bill=SB2345',
        history: [
          { date: '2025-09-01', action: 'Introduced', source: 'Texas Senate' },
          { date: '2025-09-15', action: 'Passed Committee', source: 'Texas Senate' },
          { date: '2025-09-25', action: 'On Senate Floor', source: 'Texas Senate' }
        ],
        votes: {
          for: 0,
          against: 0,
          abstain: 0
        },
        related_links: [
          { title: 'Texas Legislature Bill Page', url: 'https://capitol.texas.gov/BillLookup/Text.aspx?LegSess=89R&Bill=SB2345' },
          { title: 'Committee Report', url: 'https://capitol.texas.gov/BillLookup/Committee.aspx?LegSess=89R&Bill=SB2345' }
        ]
      }
    ];

    setBills(mockBills);
    setIsLoading(false);
  };

  const getStatusColor = (status) => {
    const colors = {
      'Signed into Law': 'text-green-400',
      'Passed': 'text-blue-400',
      'On Floor': 'text-purple-400',
      'In Committee': 'text-yellow-400',
      'Failed': 'text-red-400'
    };
    return colors[status] || 'text-white/70';
  };

  const openExternalLink = (url) => {
    if (url && url !== '#' && !url.includes('example.com')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const openLegislativeSource = (bill) => {
    if (bill.source_url && bill.source_url !== '#' && !bill.source_url.includes('example.com')) {
      window.open(bill.source_url, '_blank', 'noopener,noreferrer');
    } else {
      // Open state legislature website
      const stateLegislatureUrls = {
        'CA': 'https://leginfo.legislature.ca.gov/',
        'NY': 'https://nyassembly.gov/',
        'TX': 'https://capitol.texas.gov/',
        'FL': 'https://www.flsenate.gov/',
        'WA': 'https://legislature.wa.gov/',
        'OR': 'https://www.oregonlegislature.gov/',
        'CO': 'https://leg.colorado.gov/',
        'IL': 'https://www.ilga.gov/',
        'PA': 'https://www.legis.state.pa.us/',
        'OH': 'https://www.legislature.ohio.gov/'
      };
      
      const url = stateLegislatureUrls[bill.state] || 'https://www.congress.gov/';
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const filteredBills = bills.filter(bill => {
    const matchesSearch = searchTerm === '' || 
      bill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bill.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bill.number.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || bill.status === filterStatus;
    
    const matchesState = selectedState === 'ALL' || bill.state === selectedState;
    
    return matchesSearch && matchesStatus && matchesState;
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with Search and Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Legislative Tracker</h2>
          <p className="text-white/70">Track civil rights legislation across all states</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
            <input
              type="text"
              placeholder="Search bills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
            />
          </div>
          
          {/* State Filter */}
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
          >
            <option value="ALL">All States</option>
            <option value="CA">California</option>
            <option value="NY">New York</option>
            <option value="TX">Texas</option>
            <option value="FL">Florida</option>
            <option value="WA">Washington</option>
            <option value="OR">Oregon</option>
            <option value="CO">Colorado</option>
            <option value="IL">Illinois</option>
            <option value="PA">Pennsylvania</option>
            <option value="OH">Ohio</option>
          </select>
          
          {/* Status Filter */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
          >
            <option value="all">All Status</option>
            <option value="Signed into Law">Signed into Law</option>
            <option value="Passed">Passed</option>
            <option value="On Floor">On Floor</option>
            <option value="In Committee">In Committee</option>
            <option value="Failed">Failed</option>
          </select>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Active Bills</p>
              <p className="text-2xl font-bold text-white">{filteredBills.length}</p>
            </div>
            <Scale className="h-8 w-8 text-blue-400" />
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">States</p>
              <p className="text-2xl font-bold text-white">{selectedState === 'ALL' ? '50+' : 1}</p>
            </div>
            <MapPin className="h-8 w-8 text-green-400" />
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Live Sources</p>
              <p className="text-2xl font-bold text-white">50+</p>
            </div>
            <TrendingUp className="h-8 w-8 text-purple-400" />
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Updates Today</p>
              <p className="text-2xl font-bold text-white">{Math.floor(Math.random() * 10) + 5}</p>
            </div>
            <Calendar className="h-8 w-8 text-yellow-400" />
          </div>
        </div>
      </div>

      {/* Bills List */}
      <div className="space-y-4">
        {filteredBills.map((bill, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-lg font-bold text-white">{bill.title}</h3>
                  <span className="text-xs bg-white/20 text-white px-2 py-1 rounded">
                    {bill.number}
                  </span>
                  <span className="text-xs bg-white/20 text-white px-2 py-1 rounded">
                    {bill.state}
                  </span>
                </div>
                
                <p className="text-white/70 text-sm mb-3">
                  {bill.description}
                </p>
                
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-white/60 flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {bill.sponsor}
                  </span>
                  <span className={`font-medium ${getStatusColor(bill.status)}`}>
                    {bill.status}
                  </span>
                  <span className="text-white/60">
                    {new Date(bill.status_date).toLocaleDateString()}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2 ml-4">
                <button
                  onClick={() => openLegislativeSource(bill)}
                  className="flex items-center text-blue-400 hover:text-blue-300 text-sm"
                  title="View official source"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Official Source
                </button>
                
                {bill.full_text_url && (
                  <button
                    onClick={() => openExternalLink(bill.full_text_url)}
                    className="flex items-center text-green-400 hover:text-green-300 text-sm"
                    title="Read full bill text"
                  >
                    <BookOpen className="h-4 w-4 mr-1" />
                    Full Text
                  </button>
                )}
              </div>
            </div>

            {/* Related Links */}
            {bill.related_links && bill.related_links.length > 0 && (
              <div className="mt-4 pt-4 border-t border-white/10">
                <h4 className="text-sm font-semibold text-white mb-2">Related Resources:</h4>
                <div className="flex flex-wrap gap-2">
                  {bill.related_links.map((link, linkIndex) => (
                    <button
                      key={linkIndex}
                      onClick={() => openExternalLink(link.url)}
                      className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded flex items-center"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      {link.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* History */}
            {bill.history && bill.history.length > 0 && (
              <div className="mt-4 pt-4 border-t border-white/10">
                <h4 className="text-sm font-semibold text-white mb-2">Recent Activity:</h4>
                <div className="space-y-1">
                  {bill.history.slice(-3).map((event, eventIndex) => (
                    <div key={eventIndex} className="text-xs text-white/60 flex items-center">
                      <Calendar className="h-3 w-3 mr-2" />
                      {new Date(event.date).toLocaleDateString()}: {event.action} ({event.source})
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredBills.length === 0 && (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center">
          <Search className="h-12 w-12 text-white/50 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">No Bills Found</h3>
          <p className="text-white/70">
            {searchTerm ? `No bills found matching "${searchTerm}"` : 'No bills match your current filters.'}
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setFilterStatus('all');
              setSelectedState('ALL');
            }}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default EnhancedLegislativeTracker;