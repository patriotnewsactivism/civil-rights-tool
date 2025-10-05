import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MonetizationOptions: React.FC = () => {
  const [activeTab, setActiveTab] = useState('advertising');
  const [adSpacePrice, setAdSpacePrice] = useState('');
  const [subscriptionPrice, setSubscriptionPrice] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('basic');

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Monetization Options</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Explore different ways to generate residual income from the Legal Toolkit platform.</p>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="advertising" className="w-full">
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="advertising">Advertising Revenue</TabsTrigger>
          <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
          <TabsTrigger value="affiliates">Affiliate Programs</TabsTrigger>
        </TabsList>
        
        <TabsContent value="advertising">
          <Card>
            <CardHeader>
              <CardTitle>Advertising Revenue Model</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Sell ad space within your platform to generate revenue. This model works well for platforms with consistent traffic.</p>
              
              <div className="space-y-2">
                <Label htmlFor="adSpacePrice">Ad Space Pricing</Label>
                <Input
                  id="adSpacePrice"
                  value={adSpacePrice}
                  onChange={(e) => setAdSpacePrice(e.target.value)}
                  placeholder="Enter price per 1000 impressions..."
                />
              </div>
              
              <div className="space-y-2">
                <Label>Ad Placement Options</Label>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Banner ads in sidebar</li>
                  <li>Sponsored case recommendations</li>
                  <li>Legal resource directory listings</li>
                  <li>Featured toolkit placements</li>
                </ul>
              </div>
              
              <Button>Setup Advertising</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="subscriptions">
          <Card>
            <CardHeader>
              <CardTitle>Subscription Revenue Model</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Offer premium features through subscription plans to generate recurring revenue.</p>
              
              <div className="space-y-2">
                <Label htmlFor="subscriptionPrice">Subscription Price</Label>
                <Input
                  id="subscriptionPrice"
                  value={subscriptionPrice}
                  onChange={(e) => setSubscriptionPrice(e.target.value)}
                  placeholder="Enter subscription price..."
                />
              </div>
              
              <div className="space-y-2">
                <Label>Select Plan</Label>
                <Select 
                  value={selectedPlan} 
                  onValueChange={setSelectedPlan}
                  options={[
                    { value: 'basic', label: 'Basic Plan ($9.99/month)' },
                    { value: 'professional', label: 'Professional Plan ($29.99/month)' },
                    { value: 'enterprise', label: 'Enterprise Plan ($99.99/month)' }
                  ]}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Premium Features</Label>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Advanced case law search filters</li>
                  <li>Priority access to new legal resources</li>
                  <li>Custom legal document generation</li>
                  <li>Exclusive webinars and training materials</li>
                </ul>
              </div>
              
              <Button>Configure Subscriptions</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="affiliates">
          <Card>
            <CardHeader>
              <CardTitle>Affiliate Revenue Model</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Partner with legal service providers and earn commissions on referrals.</p>
              
              <div className="space-y-2">
                <Label>Affiliate Partnership Options</Label>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Legal software providers (Westlaw, LexisNexis)</li>
                  <li>Legal continuing education courses</li>
                  <li>Legal book publishers</li>
                  <li>Paralegal certification programs</li>
                </ul>
              </div>
              
              <Button>Setup Affiliate Programs</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MonetizationOptions;