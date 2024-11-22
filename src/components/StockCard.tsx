import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StockCardProps {
  symbol: string;
  name: string;
  price: number;
  change: number;
  volume: number;
}

export const StockCard: React.FC<StockCardProps> = ({
  symbol,
  name,
  price,
  change,
  volume,
}) => {
  const isPositive = change >= 0;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{symbol}</h3>
          <p className="text-sm text-gray-500">{name}</p>
        </div>
        {isPositive ? (
          <TrendingUp className="text-green-500" size={24} />
        ) : (
          <TrendingDown className="text-red-500" size={24} />
        )}
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Price</span>
          <span className="text-xl font-semibold">₹{price.toLocaleString('en-IN', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
          })}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Change</span>
          <span className={`font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? '+' : ''}{change.toFixed(2)}%
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Volume</span>
          <span className="text-gray-900">{(volume / 100000).toFixed(2)}L</span>
        </div>
      </div>
    </div>
  );
};