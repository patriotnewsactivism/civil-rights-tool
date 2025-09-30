import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';

const PricingPlans = ({ onSubscribe }) => {
  const subscribe = (plan) => {
    if (onSubscribe) return onSubscribe(plan);
    // Replace with your backend checkout route (Stripe/PayPal/etc)
    const url = `/api/checkout?plan=${plan}`; // placeholder
    try { 
      window.location.href = url; 
    } catch { 
      console.log(`Would subscribe to ${plan} plan`);
    }
  };

  const PlanCard = ({ id, title, price, blurb, features, cta = "Subscribe", highlight }) => (
    <Card className={`relative border ${highlight ? "border-blue-500 shadow-lg" : ""}`}>
      {highlight && (
        <div className="absolute -top-3 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <CardHeader>
        <CardTitle className="flex items-baseline justify-between">
          <span>{title}</span>
          <span className="text-2xl font-bold">
            {price}
            <span className="text-sm font-normal">/mo</span>
          </span>
        </CardTitle>
        <p className="text-sm text-muted-foreground">{blurb}</p>
      </CardHeader>
      <CardContent>
        <ul className="mb-4 list-disc pl-6 text-sm space-y-1">
          {features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <Button className="w-full" onClick={() => subscribe(id)}>
          {cta}
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <PlanCard
        id="basic"
        title="Basic"
        price="$29"
        blurb="Individuals and activists starting out."
        features={[
          "FOIA & State PRR generator",
          "Know‑Your‑Rights ID card",
          "PDF/PNG exports",
          "Email support"
        ]}
      />
      <PlanCard
        id="pro"
        title="Professional"
        price="$79"
        blurb="Power users, journalists, and solo attorneys."
        features={[
          "Everything in Basic",
          "Cease & Desist, Claims, Discovery",
          "Bulk doc generation limits",
          "Priority support"
        ]}
        highlight
      />
      <PlanCard
        id="ultimate"
        title="Ultimate Bundle"
        price="$149"
        blurb="Full toolkit + Civil Rights Tool access."
        features={[
          "Everything in Pro",
          "Civil Rights Tool bundle",
          "Org/team workspace",
          "SSO-ready branding"
        ]}
        cta="Subscribe & Bundle"
      />
    </div>
  );
};

export default PricingPlans;