import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MonetizationCard from '@/components/ui/monetization-card';

const SubscriptionPlans: React.FC = () => {
  const handleSubscribe = (plan: string) => {
    console.log(`Subscribing to ${plan} plan`);
    // In a real implementation, this would connect to a payment processor
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Subscription Plans</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Choose a subscription plan to unlock premium features and support the platform's development.</p>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MonetizationCard
          title="Basic Plan"
          description="Perfect for individuals exploring legal resources"
          features={[
            "Access to all free resources",
            "Basic case law search",
            "Email support"
          ]}
          price="$9.99/month"
          buttonText="Subscribe"
          onButtonClick={() => handleSubscribe('basic')}
        />
        
        <MonetizationCard
          title="Professional Plan"
          description="Ideal for legal professionals and researchers"
          features={[
            "Advanced case law search filters",
            "Priority access to new legal resources",
            "Custom legal document generation",
            "Standard support"
          ]}
          price="$29.99/month"
          buttonText="Subscribe"
          onButtonClick={() => handleSubscribe('professional')}
        />
        
        <MonetizationCard
          title="Enterprise Plan"
          description="For law firms and organizations with extensive legal research needs"
          features={[
            "All Professional features",
            "API access for custom integrations",
            "Exclusive webinars and training materials",
            "Priority support",
            "Team management tools"
          ]}
          price="$99.99/month"
          buttonText="Subscribe"
          onButtonClick={() => handleSubscribe('enterprise')}
        />
      </div>
    </div>
  );
};

export default SubscriptionPlans;