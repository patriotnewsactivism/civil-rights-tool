import React from 'react';
import { Database, AlertCircle, RefreshCw, Wifi, WifiOff } from 'lucide-react';

const DatabaseUnavailableBanner = () => {
  return (
    <div className="bg-yellow-500/20 border border-yellow-500/40 rounded-lg p-4 mb-4">
      <div className="flex items-center">
        <WifiOff className="h-6 w-6 text-yellow-300 mr-3" />
        <div className="flex-1">
          <h3 className="text-lg font-bold text-yellow-100">Database Connection Status</h3>
          <p className="text-base text-yellow-200 mt-1">
            Enhanced database features are temporarily unavailable. All core functionality remains active.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Wifi className="h-5 w-5 text-yellow-300" />
          <span className="text-yellow-200 font-medium">Offline</span>
        </div>
      </div>
    </div>
  );
};

export default DatabaseUnavailableBanner;