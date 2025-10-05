import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MonetizationCard from '@/components/ui/monetization-card';

const AffiliatePrograms: React.FC = () => {
  const handleJoinProgram = (program: string) => {
    console.log(`Joining affiliate program: ${program}`);
    // In a real implementation, this would connect to affiliate networks
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Affiliate Programs</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Earn commissions by partnering with legal service providers and educational institutions.</p>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MonetizationCard
          title="Legal Research Services"
          description="Partner with premium legal research platforms"
          features={[
            "Westlaw affiliate program",
            "LexisNexis affiliate program",
            "Bloomberg Law partnerships",
            "CourtListener Pro subscriptions"
          ]}
          price="10-30% commission"
          buttonText="Join Program"
          onButtonClick={() => handleJoinProgram('legal-research')}
        />
        
        <MonetizationCard
          title="Legal Education"
          description="Earn from continuing legal education courses"
          features={[
            "Law school course referrals",
            "Bar prep course commissions",
            "Legal certificate programs",
            "Webinar sponsorships"
          ]}
          price="$50-200 per referral"
          buttonText="Join Program"
          onButtonClick={() => handleJoinProgram('legal-education')}
        />
        
        <MonetizationCard
          title="Legal Software"
          description="Commission from legal tech tools"
          features={[
            "Practice management software",
            "Document automation tools",
            "Legal billing software",
            "Case management systems"
          ]}
          price="15-40% commission"
          buttonText="Join Program"
          onButtonClick={() => handleJoinProgram('legal-software')}
        />
        
        <MonetizationCard
          title="Legal Resources"
          description="Affiliate with legal book publishers"
          features={[
            "Legal book sales commissions",
            "Legal journal subscriptions",
            "Legal form providers",
            "Legal template marketplaces"
          ]}
          price="5-25% commission"
          buttonText="Join Program"
          onButtonClick={() => handleJoinProgram('legal-resources')}
        />
      </div>
    </div>
  );
};

export default AffiliatePrograms;