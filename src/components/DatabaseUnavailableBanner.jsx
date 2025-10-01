import React from 'react';
import { Database, AlertCircle, RefreshCw } from 'lucide-react';

const DatabaseUnavailableBanner = () => {
  return (
    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-4">
      <div className="flex items-center">
        <AlertCircle className="h-5 w-5 text-yellow-400 mr-2" />
        <div>
          <h3 className="text-sm font-medium text-yellow-300">Database Connection Status</h3>
          <p className="text-sm text-yellow-200 mt-1">
            Enhanced database features are temporarily unavailable. All core functionality remains active.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DatabaseUnavailableBanner;