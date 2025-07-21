import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Search, Scale } from 'lucide-react';
import './App.css';

import {
  federalCircuits,
  stopAndIdStates,
  firstAmendmentLandmarks,
  circuitAnalysis,
  stateConstitutionalProtections,
  states
} from './data';

const CivilRightsLegalTool = () => {
  const [selectedState, setSelectedState] = useState('');
  const [results, setResults] = useState(null);

  const memoFederalCircuits = useMemo(() => federalCircuits, []);
  const memoStopAndIdStates = useMemo(() => stopAndIdStates, []);
  const memoFirstAmendmentLandmarks = useMemo(() => firstAmendmentLandmarks, []);
  const memoCircuitAnalysis = useMemo(() => circuitAnalysis, []);
  const memoStateConstitutionalProtections = useMemo(() => stateConstitutionalProtections, []);
  const memoStates = useMemo(() => states, []);

  const getTacticalGuidance = useCallback((state, circuit) => {
    const baseGuidance = {
      universalPrinciples: [
        '"Officer, are you detaining me or am I free to leave?"',
        'If detained: "What specific facts give you reasonable suspicion?"',
        'Document badge numbers, patrol car numbers, time, location',
        '"I am exercising my right to remain silent."'
      ]
    };

    if (circuit?.hostility === 'EXTREMELY HOSTILE') {
      return {
        ...baseGuidance,
        circuitSpecific: [
          'CRITICAL WARNING: This circuit is extremely hostile to civil rights',
          'Avoid filing protest organizer cases in this jurisdiction',
          'Document everything - expect judicial skepticism',
          'Consider removal to different circuit if possible'
        ]
      };
    }

    if (circuit?.hostility === 'Protective') {
      return {
        ...baseGuidance,
        circuitSpecific: [
          'This circuit provides stronger constitutional protections',
          'Leverage favorable precedents for broader challenges',
          'Consider this jurisdiction for impact litigation',
          'Strong reasonable suspicion requirements work in your favor'
        ]
      };
    }

    return {
      ...baseGuidance,
      circuitSpecific: [
        'Standard constitutional analysis applies',
        'Focus on specific articulable facts requirement',
        'Document all interactions for potential challenges'
      ]
    };
  }, []);

  const getImmediateActions = useCallback((state) => {
    const stopAndId = memoStopAndIdStates[state];

    if (!stopAndId?.hasLaw) {
      return [
        'REFUSE identification unless under arrest',
        'Assert Fourth Amendment protections',
        'State: "I do not consent to any search"',
        'Ask: "Am I being detained or am I free to leave?"'
      ];
    }

    return [
      'Challenge reasonable suspicion: "What specific facts support suspicion?"',
      'Document officer responses and badge numbers',
      'Limit compliance to statutory minimum only',
      'Assert: "I exercise my right to remain silent beyond identification"'
    ];
  }, [memoStopAndIdStates]);

  const getWarningColor = useCallback((warningLevel) => {
    if (warningLevel?.includes('EXTREME DANGER')) return 'border-red-600 bg-red-900/30';
    if (warningLevel?.includes('Moderate Risk')) return 'border-yellow-600 bg-yellow-900/30';
    if (warningLevel?.includes('Low Risk') || warningLevel?.includes('Minimal Risk')) return 'border-green-600 bg-green-900/30';
    return 'border-gray-600 bg-gray-900/30';
  }, []);

  useEffect(() => {
    if (selectedState) {
      try {
        const circuit = memoFederalCircuits[selectedState];
        const stopAndId = memoStopAndIdStates[selectedState];
        const firstAmendmentLandmark = memoFirstAmendmentLandmarks[selectedState];
        const circuitInfo = circuit ? memoCircuitAnalysis[circuit.circuit] : null;
        const stateConstitutionalInfo = memoStateConstitutionalProtections[selectedState];

        if (!circuit || !stopAndId) return;

        const newResults = {
          state: memoStates.find(s => s.code === selectedState)?.name,
          circuit,
          stopAndId,
          firstAmendmentLandmark,
          circuitInfo,
          stateConstitutionalInfo,
          tacticalGuidance: getTacticalGuidance(selectedState, circuit),
          immediateActions: getImmediateActions(selectedState)
        };

        setResults(newResults);
      } catch (error) {
        setResults(null);
      }
    } else {
      setResults(null);
    }
  }, [selectedState, memoFederalCircuits, memoStopAndIdStates, memoFirstAmendmentLandmarks, memoCircuitAnalysis, memoStateConstitutionalProtections, memoStates, getTacticalGuidance, getImmediateActions]);

  return (
    <div className="container">
      <h1 className="main-title">
        <span className="title-line">Constitutional Rights</span>
        <br className="mobile-break" />
        <span className="title-line">Research Platform</span>
      </h1>

      <div className="scale-header">
        <Scale size={18} color="yellow" />
        <span className="scale-text">Select a jurisdiction to begin constitutional analysis</span>
      </div>

      <select
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
        className="dropdown"
      >
        <option value="">Choose jurisdiction for investigation...</option>
        {memoStates.map(state => (
          <option key={state.code} value={state.code}>{state.name}</option>
        ))}
      </select>

      <p className="white-subtext">
        This investigative platform documents systematic patterns of constitutional circumvention through jurisdictional manipulation, revealing how identical citizen conduct faces dramatically different legal consequences across America’s fragmented constitutional landscape.
      </p>

      <p className="tiny-yellow-text">
        Forensic analysis of systematic constitutional violations through jurisdictional manipulation, documenting patterns of institutional circumvention of citizen rights across America’s legal landscape.
      </p>

      {results && (
        <div>
          {/* Insert full JSX rendering of results here (unchanged from original) */}
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <CivilRightsLegalTool />
    </div>
  );
}

export default App;
