import React, { useState } from 'react';
import { Users, DollarSign, TrendingUp, Gift, CheckCircle, ArrowRight, Copy, Share2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';

const AffiliateProgram = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [referralCode, setReferralCode] = useState('LEGAL25');
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const commissionStructure = [
    {
      plan: 'Starter',
      price: '$10/month',
      commission: '$2.50/month',
      features: ['Basic case search', 'Document templates', 'State law database'],
      icon: <Users className="h-6 w-6" />
    },
    {
      plan: 'Pro',
      price: '$50/month',
      commission: '$12.50/month',
      features: ['Advanced search', 'Judge lookup', 'Citation verifier', 'Priority support'],
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      plan: 'Ultimate',
      price: '$100/month',
      commission: '$25.00/month',
      features: ['All Pro features', 'Oral argument search', 'Financial disclosures', 'API access'],
      icon: <DollarSign className="h-6 w-6" />
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
      title: '25% Recurring Commission',
      description: 'Earn every month for as long as your referrals remain customers. Build true passive income.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: 'High Conversion Rates',
      description: 'Legal professionals and activists need these tools. Our platform converts at 3.2% on average.'
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: 'Large Target Market',
      description: 'Millions of activists, lawyers, journalists, and organizations need civil rights legal tools.'
    },
    {
      icon: <Gift className="h-8 w-8 text-orange-600" />,
      title: 'Marketing Materials',
      description: 'Get access to banners, social media content, email templates, and promotional materials.'
    }
  ];

  const targetAudience = [
    'Civil rights organizations',
    'Legal aid societies',
    'Activist groups',
    'Law firms',
    'Journalists',
    'Non-profit organizations',
    'Community organizers',
    'Policy advocates',
    'Immigration services',
    'Criminal justice reform groups'
  ];

  const marketingIdeas = [
    'Share in legal and activist Facebook groups',
    'Post on LinkedIn targeting legal professionals',
    'Create YouTube reviews of the platform',
    'Write blog posts about civil rights legal tools',
    'Email legal organizations and NGOs',
    'Share at conferences and events',
    'Partner with law schools and clinics',
    'Create comparison content vs expensive alternatives'
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <Badge variant="success" className="text-lg">
          Partner Program
        </Badge>
        <h1 className="text-4xl font-bold">
          Earn 25% Recurring Commission
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Promote the most comprehensive civil rights legal toolkit and earn passive income every month. 
          Help activists and legal professionals access the tools they need while building your own revenue stream.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" onClick={() => setShowSignup(true)}>
            Join Affiliate Program
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" onClick={() => copyToClipboard(`https://civilrightslegal.com?ref=${referralCode}`)}>
            <Copy className="mr-2 h-4 w-4" />
            Copy Referral Link
          </Button>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                {benefit.icon}
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{benefit.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Commission Structure */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Commission Structure</CardTitle>
          <CardDescription>25% recurring commission on every plan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commissionStructure.map((tier, index) => (
              <div key={index} className="border rounded-lg p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  {tier.icon}
                  <div className="font-semibold text-xl">{tier.plan}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-green-600">{tier.commission}</div>
                  <div className="text-lg text-gray-600">{tier.price}</div>
                </div>
                <ul className="space-y-1">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Target Audience */}
      <Card>
        <CardHeader>
          <CardTitle>Perfect For Promoting To</CardTitle>
          <CardDescription>These audiences desperately need these legal tools</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {targetAudience.map((audience, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2">
                {audience}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Marketing Ideas */}
      <Card>
        <CardHeader>
          <CardTitle>Marketing Ideas</CardTitle>
          <CardDescription>Proven strategies to maximize your earnings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {marketingIdeas.map((idea, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Share2 className="h-5 w-5 text-blue-600 mt-0.5" />
                <span className="text-sm">{idea}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Success Stories */}
      <Card>
        <CardHeader>
          <CardTitle>Success Stories</CardTitle>
          <CardDescription>Real affiliates earning real money</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <div className="font-semibold">Sarah M. - Legal Blogger</div>
              <div className="text-sm text-gray-600 mb-2">"I earned $1,200 in my first 3 months just by mentioning the toolkit in my blog posts about civil rights law."</div>
              <Badge variant="success">$400/month recurring</Badge>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="font-semibold">Marcus T. - Community Organizer</div>
              <div className="text-sm text-gray-600 mb-2">"My network of activists loves these tools. I have 23 active referrals paying me $287.50 every month."</div>
              <Badge variant="success">$287.50/month recurring</Badge>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <div className="font-semibold">Jennifer L. - Law Student</div>
              <div className="text-sm text-gray-600 mb-2">"I share this with my clinic and classmates. The 25% commission is amazing for a student budget."</div>
              <Badge variant="success">$125/month recurring</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">How does the 25% commission work?</h4>
            <p className="text-sm text-gray-600">
              You earn 25% of whatever plan your referral chooses, every month they stay subscribed. 
              If they choose the $100/month Ultimate plan, you get $25 every month. If they downgrade, 
              your commission adjusts accordingly.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">When do I get paid?</h4>
            <p className="text-sm text-gray-600">
              Commissions are paid monthly via PayPal or bank transfer, 30 days after the referral's payment 
              to account for refunds. Minimum payout is $50.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">How long do commissions last?</h4>
            <p className="text-sm text-gray-600">
              As long as your referral keeps their subscription active. This creates true passive income - 
              one successful referral could pay you for years.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Can I promote this internationally?</h4>
            <p className="text-sm text-gray-600">
              Absolutely! While our tools focus on US civil rights law, many international organizations, 
              researchers, and activists need access to US legal information.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <div className="text-center space-y-4 bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold">Ready to Start Earning?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join hundreds of affiliates earning passive income by helping legal professionals 
          and activists access the tools they need. No cost to join, no minimum requirements.
        </p>
        <Button size="lg" onClick={() => setShowSignup(true)}>
          Join Affiliate Program Now
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <div className="text-sm text-gray-500">
          Join today and get your unique referral link in minutes
        </div>
      </div>
    </div>
  );
};

export default AffiliateProgram;