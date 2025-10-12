import React, { useState, useEffect } from 'react';
import { Users, DollarSign, TrendingUp, Copy, Share2, BarChart3, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AffiliateDashboard = ({ userId }) => {
  const [affiliateData, setAffiliateData] = useState({
    referralCode: '',
    totalReferrals: 0,
    activeReferrals: 0,
    totalEarnings: 0,
    monthlyRecurring: 0,
    conversionRate: 0,
    referrals: []
  });

  const [shareUrl, setShareUrl] = useState(`https://civilrightslegal.com?ref=${affiliateData.referralCode}`);
  const [copied, setCopied] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');

  const earningsData = [];

  const commissionTiers = [
    { plan: 'Starter', price: '$10/month', commission: '$2.50/month', description: 'Perfect for individual activists' },
    { plan: 'Pro', price: '$50/month', commission: '$12.50/month', description: 'Ideal for small organizations' },
    { plan: 'Ultimate', price: '$100/month', commission: '$25.00/month', description: 'Complete toolkit for large teams' }
  ];

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const generateSocialPost = () => {
    const posts = [
      "🚀 Revolutionize your civil rights activism! Get access to 50+ legal tools, case databases, and real-time court data. Start your free trial today! #CivilRights #LegalTech",
      "⚖️ Empower your activism with professional-grade legal tools. Case law search, document generation, state law databases &amp; more. Try it free! #Activism #LegalResources",
      "📊 Stop guessing about legal requirements. Get accurate, up-to-date civil rights law information for all 50 states. Start your 7-day free trial! #LegalResearch #CivilRights"
    ];
    return posts[Math.floor(Math.random() * posts.length)];
  };

  const activeReferrals = affiliateData.referrals.filter(r => r.status === 'active');
  const churnedReferrals = affiliateData.referrals.filter(r => r.status === 'churned');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Affiliate Dashboard</h1>
          <p className="text-gray-600">Earn 25% recurring commission on every referral</p>
        </div>
        <Badge variant="success" className="text-lg">
          25% Commission Rate
        </Badge>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${affiliateData.totalEarnings.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Recurring</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${affiliateData.monthlyRecurring.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">Active referrals</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Referrals</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{affiliateData.activeReferrals}</div>
            <p className="text-xs text-muted-foreground">Currently paying</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{affiliateData.conversionRate}%</div>
            <p className="text-xs text-muted-foreground">Visitor to signup</p>
          </CardContent>
        </Card>
      </div>

      {/* Commission Structure */}
      <Card>
        <CardHeader>
          <CardTitle>Commission Structure</CardTitle>
          <CardDescription>25% recurring commission on all plans</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {commissionTiers.map((tier, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-2">
                <div className="font-semibold text-lg">{tier.plan}</div>
                <div className="text-2xl font-bold text-green-600">{tier.commission}</div>
                <div className="text-sm text-gray-600">{tier.price}</div>
                <div className="text-sm text-gray-500">{tier.description}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="promote" className="space-y-4">
        <TabsList>
          <TabsTrigger value="promote">Promote</TabsTrigger>
          <TabsTrigger value="referrals">Referrals</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="promote" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Referral Link</CardTitle>
              <CardDescription>Share this link to earn commissions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-2">
                <Input value={shareUrl} readOnly className="flex-1" />
                <Button onClick={() => copyToClipboard(shareUrl)} variant="outline">
                  {copied ? <Copy className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? 'Copied!' : 'Copy'}
                </Button>
              </div>
              
              <Alert>
                <AlertDescription>
                  <strong>Pro tip:</strong> Share your link in legal forums, activist groups, 
                  social media, and with organizations that need civil rights tools.
                </AlertDescription>
              </Alert>

              <div className="space-y-2">
                <h4 className="font-semibold">Social Media Content</h4>
                <div className="p-3 bg-gray-50 rounded-md">
                  <p className="text-sm">{generateSocialPost()}</p>
                </div>
                <Button onClick={() => copyToClipboard(generateSocialPost())} variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Copy Post
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="referrals" className="space-y-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Active Referrals ({activeReferrals.length})</h3>
            <div className="space-y-2">
              {activeReferrals.map(referral => (
                <Card key={referral.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold">{referral.name}</div>
                        <div className="text-sm text-gray-600">{referral.email}</div>
                        <div className="text-sm text-gray-500">Joined {new Date(referral.date).toLocaleDateString()}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600">${referral.commission}/month</div>
                        <Badge variant="outline">{referral.plan} Plan</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {churnedReferrals.length > 0 &amp;&amp; (
              <>
                <h3 className="text-lg font-semibold">Inactive Referrals ({churnedReferrals.length})</h3>
                <div className="space-y-2">
                  {churnedReferrals.map(referral => (
                    <Card key={referral.id} className="opacity-60">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-semibold">{referral.name}</div>
                            <div className="text-sm text-gray-600">Cancelled {new Date(referral.churnDate).toLocaleDateString()}</div>
                          </div>
                          <Badge variant="destructive">Inactive</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Earnings Over Time</CardTitle>
              <CardDescription>Track your commission growth</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={earningsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="earnings" fill="#10b981" name="Earnings ($)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AffiliateDashboard;