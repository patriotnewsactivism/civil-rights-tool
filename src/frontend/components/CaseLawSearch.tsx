import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface Case {
  id: number;
  case_name: string;
  court: string;
  date_filed: string;
  status: string;
  citations: string[];
}

const CaseLawSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Fetch cases
  const { data: cases, isLoading, error, refetch } = useQuery({
    queryKey: ['cases', searchTerm],
    queryFn: async () => {
      if (!searchTerm) return [];
      
      const response = await fetch(`/api/courtlistener/cases/search?q=${encodeURIComponent(searchTerm)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch cases');
      }
      return response.json();
    },
    enabled: false // We'll manually trigger the search
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    refetch();
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Case Law Search</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="caseSearch">Search Term</Label>
              <Input
                id="caseSearch"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter case name, citation, or keywords..."
              />
            </div>
            
            <Button type="submit">Search Cases</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Case Results</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading && <p>Loading cases...</p>}
          {error && <p className="text-red-500">Error: {(error as Error).message}</p>}
          
          {cases && cases.length > 0 && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Case Name</TableHead>
                  <TableHead>Court</TableHead>
                  <TableHead>Date Filed</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Citations</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cases.map((c: Case) => (
                  <TableRow key={c.id}>
                    <TableCell>{c.case_name}</TableCell>
                    <TableCell>{c.court}</TableCell>
                    <TableCell>{new Date(c.date_filed).toLocaleDateString()}</TableCell>
                    <TableCell>{c.status}</TableCell>
                    <TableCell>{c.citations.join(', ')}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
          
          {cases && cases.length === 0 && searchTerm && (
            <p>No cases found for "{searchTerm}".</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CaseLawSearch;