import React, { createContext, useContext, useMemo, useState } from 'react';

const SubscriptionContext = createContext(undefined);

export const SubscriptionProvider = ({ children }) => {
  const [plan, setPlan] = useState(null);
  
  const value = useMemo(() => ({
    plan,
    setPlan,
    isPro: plan === "pro" || plan === "ultimate",
    isUltimate: plan === "ultimate"
  }), [plan]);

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export function useSubscription() {
  const ctx = useContext(SubscriptionContext);
  if (!ctx) {
    throw new Error("useSubscription must be used within SubscriptionProvider");
  }
  return ctx;
}