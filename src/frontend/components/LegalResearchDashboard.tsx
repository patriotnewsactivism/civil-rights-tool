import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CaseLawSearch from './CaseLawSearch';
import FinancialDisclosureSearch from './FinancialDisclosureSearch';
import OralArgumentSearch from './OralArgumentSearch';

const LegalResearchDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Legal Research Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Welcome to the Legal Research Dashboard. Use the tabs below to search different types of legal information.</p>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="cases" className="w-full">
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="cases">Case Law</TabsTrigger>
          <TabsTrigger value="financial">Financial Disclosures</TabsTrigger>
          <TabsTrigger value="oral">Oral Arguments</TabsTrigger>
        </TabsList>
        
        <TabsContent value="cases">
          <CaseLawSearch />
        </TabsContent>
        
        <TabsContent value="financial">
          <FinancialDisclosureSearch />
        </TabsContent>
        
        <TabsContent value="oral">
          <OralArgumentSearch />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LegalResearchDashboard;