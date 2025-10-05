import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SubscriptionProvider } from './context/SubscriptionContext';
import { MonetizationProvider } from './context/MonetizationContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SubscriptionProvider>
      <MonetizationProvider>
        <App />
      </MonetizationProvider>
    </SubscriptionProvider>
  </React.StrictMode>,
);