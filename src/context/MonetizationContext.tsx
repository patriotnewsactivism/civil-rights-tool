import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MonetizationContextType {
  monetizationModel: string;
  setMonetizationModel: (model: string) => void;
  isSubscribed: boolean;
  setIsSubscribed: (subscribed: boolean) => void;
  adPreferences: Record<string, boolean>;
  toggleAdPreference: (placement: string) => void;
}

const MonetizationContext = createContext<MonetizationContextType | undefined>(undefined);

export const MonetizationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [monetizationModel, setMonetizationModel] = useState('advertising');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [adPreferences, setAdPreferences] = useState<Record<string, boolean>>({
    sidebar: true,
    header: false,
    footer: false,
    'case-results': true,
    'resource-directory': true
  });

  const toggleAdPreference = (placement: string) => {
    setAdPreferences(prev => ({
      ...prev,
      [placement]: !prev[placement]
    }));
  };

  return (
    <MonetizationContext.Provider
      value={{
        monetizationModel,
        setMonetizationModel,
        isSubscribed,
        setIsSubscribed,
        adPreferences,
        toggleAdPreference
      }}
    >
      {children}
    </MonetizationContext.Provider>
  );
};

export const useMonetization = (): MonetizationContextType => {
  const context = useContext(MonetizationContext);
  if (!context) {
    throw new Error('useMonetization must be used within a MonetizationProvider');
  }
  return context;
};