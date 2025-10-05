import React, { useMonetization } from '@/context/MonetizationContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';

const MonetizationDashboard: React.FC = () => {
  const {
    monetizationModel,
    setMonetizationModel,
    isSubscribed,
    setIsSubscribed,
    adPreferences,
    toggleAdPreference
  } = useMonetization();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Monetization Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Configure monetization options for the Legal Toolkit platform.</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Revenue Model Selection</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="monetizationModel">Select Monetization Model</Label>
            <Select 
              value={monetizationModel} 
              onValueChange={setMonetizationModel}
              options={[
                { value: 'advertising', label: 'Advertising Revenue' },
                { value: 'subscriptions', label: 'Subscription Model' },
                { value: 'affiliates', label: 'Affiliate Programs' },
                { value: 'hybrid', label: 'Hybrid Model (Multiple)' }
              ]}
            />
          </div>
          
          <div className="space-y-2">
            <Label>Current Status</Label>
            <p>{isSubscribed ? 'Monetization is active' : 'Monetization is not configured'}</p>
          </div>
          
          <Button onClick={() => setIsSubscribed(!isSubscribed)}>
            {isSubscribed ? 'Disable Monetization' : 'Activate Monetization'}
          </Button>
        </CardContent>
      </Card>
      
      {monetizationModel === 'advertising' && (
        <Card>
          <CardHeader>
            <CardTitle>Ad Placement Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(adPreferences).map(([placement, enabled]) => (
                <div key={placement} className="flex items-center justify-between">
                  <Label>{placement.replace('-', ' ')}</Label>
                  <Button 
                    variant={enabled ? 'default' : 'outline'}
                    onClick={() => toggleAdPreference(placement)}
                  >
                    {enabled ? 'Enabled' : 'Disabled'}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MonetizationDashboard;