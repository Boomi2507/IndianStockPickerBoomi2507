import React from 'react';
import { Activity, TrendingUp, Volume2 } from 'lucide-react';

interface MarketStats {
  nifty: number;
  niftyChange: number;
  totalVolume: number;
  advanceDecline: string;
}

export const MarketOverview: React.FC<{ stats: MarketStats }> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Activity className="h-6 w-6" />
          <h3 className="text-lg font-semibold">NIFTY 50</h3>
        </div>
        <p className="text-3xl font-bold mb-2">{stats.nifty.toLocaleString('en-IN')}</p>
        <p className={`text-sm ${stats.niftyChange >= 0 ? 'text-green-200' : 'text-red-200'}`}>
          {stats.niftyChange >= 0 ? '↑' : '↓'} {Math.abs(stats.niftyChange).toFixed(2)}%
        </p>
      </div>

      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Volume2 className="h-6 w-6" />
          <h3 className="text-lg font-semibold">Market Volume</h3>
        </div>
        <p className="text-3xl font-bold mb-2">{(stats.totalVolume / 10000000).toFixed(2)}Cr</p>
        <p className="text-sm text-green-200">Daily Trading Volume</p>
      </div>

      <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="h-6 w-6" />
          <h3 className="text-lg font-semibold">Market Breadth</h3>
        </div>
        <p className="text-3xl font-bold mb-2">{stats.advanceDecline}</p>
        <p className="text-sm text-purple-200">Advances : Declines</p>
      </div>
    </div>
  );
};