import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const AdvertisingOptions: React.FC = () => {
  const [adSpacePrice, setAdSpacePrice] = useState('');
  const [selectedPlacement, setSelectedPlacement] = useState('sidebar');
  
  const placements = [
    { id: 'sidebar', name: 'Sidebar Banner Ads' },
    { id: 'header', name: 'Header Banner Ads' },
    { id: 'footer', name: 'Footer Banner Ads' },
    { id: 'case-results', name: 'Sponsored Case Results' },
    { id: 'resource-directory', name: 'Resource Directory Listings' }
  ];

  const handleSetupAdvertising = () => {
    console.log(`Setting up advertising with price: ${adSpacePrice} and placement: ${selectedPlacement}`);
    // In a real implementation, this would connect to an ad network or ad server
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Advertising Options</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Monetize your platform by selling ad space to legal service providers and related businesses.</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Ad Space Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="adSpacePrice">Price per 1000 Impressions (CPM)</Label>
            <Input
              id="adSpacePrice"
              value={adSpacePrice}
              onChange={(e) => setAdSpacePrice(e.target.value)}
              placeholder="Enter CPM price (e.g., $5.00)..."
            />
          </div>
          
          <div className="space-y-2">
            <Label>Ad Placement Options</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {placements.map((placement) => (
                <div key={placement.id} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id={placement.id}
                    name="placement"
                    value={placement.id}
                    checked={selectedPlacement === placement.id}
                    onChange={(e) => setSelectedPlacement(e.target.value)}
                    className="h-4 w-4 text-blue-600"
                  />
                  <Label htmlFor={placement.id}>{placement.name}</Label>
                </div>
              ))}
            </div>
          </div>
          
          <Button onClick={handleSetupAdvertising}>Setup Advertising</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdvertisingOptions;