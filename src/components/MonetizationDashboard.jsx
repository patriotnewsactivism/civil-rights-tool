import React, { useState } from 'react';
import { DollarSign, Users, TrendingUp, Target, CreditCard, Megaphone, Users as UsersIcon, BarChart3 } from 'lucide-react';
import SubscriptionPlans from './SubscriptionPlans';
import AdvertisingOptions from './AdvertisingOptions';
import AffiliateDashboard from './ui/AffiliateDashboard';
import AffiliateProgram from './ui/AffiliateProgram';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';

const MonetizationDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Monetization Dashboard</h2>
          <p className="text-gray-600">Revenue generation and affiliate program management</p>
        </div>
        <Badge variant="success" className="text-lg">
          25% Commission Program
        </Badge>
      </div>

      {/* Revenue Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,450</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Subscribers</CardTitle>
            <Users className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">+18 new this month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+23%</div>
            <p className="text-xs text-muted-foreground">Year over year</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <Target className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <p className="text-xs text-muted-foreground">Visitor to customer</p>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Affiliate Program Section */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">🚀 Enhanced Affiliate Program</h3>
            <p className="text-gray-700">Earn 25% recurring commission - $2.50 to $25.00 per referral per month!</p>
          </div>
          <Badge variant="success" className="text-lg">
            New: 25% Commission
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">$2.50</div>
            <div className="text-sm text-gray-600">Starter Plan Commission</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">$12.50</div>
            <div className="text-sm text-gray-600">Pro Plan Commission</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">$25.00</div>
            <div className="text-sm text-gray-600">Ultimate Plan Commission</div>
          </div>
        </div>

        <Alert>
          <AlertDescription>
            <strong>💡 Revenue Example:</strong> Refer just 10 Ultimate plan users and earn $250/month in passive income. 
            With our 25% recurring commission, you continue earning as long as they stay subscribed!
          </AlertDescription>
        </Alert>
      </div>

      {/* Monetization Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="overview" className="flex items-center space-x-2">
            <BarChart3 className="h-4 w-4" />
            <span>Overview</span>
          </TabsTrigger>
          <TabsTrigger value="subscriptions" className="flex items-center space-x-2">
            <CreditCard className="h-4 w-4" />
            <span>Subscriptions</span>
          </TabsTrigger>
          <TabsTrigger value="advertising" className="flex items-center space-x-2">
            <Megaphone className="h-4 w-4" />
            <span>Advertising</span>
          </TabsTrigger>
          <TabsTrigger value="affiliates" className="flex items-center space-x-2">
            <UsersIcon className="h-4 w-4" />
            <span>Affiliates</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <SubscriptionPlans />
            <AdvertisingOptions />
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-3">Affiliate Program Highlights</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Commission Rate:</span>
                    <Badge variant="success">25%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Active Affiliates:</span>
                    <Badge>127</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Payouts:</span>
                    <Badge variant="outline">$3,245</Badge>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Affiliate Signups</span>
                    <Badge variant="success">+45 this month</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Referral Conversion</span>
                    <Badge>3.2%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Avg Commission</span>
                    <Badge variant="outline">$13.75</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="subscriptions" className="space-y-4">
          <SubscriptionPlans />
        </TabsContent>

        <TabsContent value="advertising" className="space-y-4">
          <AdvertisingOptions />
        </TabsContent>

        <TabsContent value="affiliates" className="space-y-4">
          <AffiliateProgram />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MonetizationDashboard;