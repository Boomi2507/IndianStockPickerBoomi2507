import React, { useState, useEffect } from 'react';
import { StockCard } from './components/StockCard';
import { StockChart } from './components/StockChart';
import { MarketOverview } from './components/MarketOverview';
import { Search } from 'lucide-react';

// Real NIFTY 50 stocks data
const mockStocks = [
  { symbol: 'RELIANCE', name: 'Reliance Industries Ltd.', price: 2927.45, change: 1.23, volume: 5234567 },
  { symbol: 'TCS', name: 'Tata Consultancy Services Ltd.', price: 3947.90, change: -0.45, volume: 1234567 },
  { symbol: 'HDFCBANK', name: 'HDFC Bank Ltd.', price: 1521.30, change: 0.78, volume: 3456789 },
  { symbol: 'INFY', name: 'Infosys Ltd.', price: 1456.20, change: -1.12, volume: 2345678 },
  { symbol: 'ICICIBANK', name: 'ICICI Bank Ltd.', price: 1023.75, change: 0.95, volume: 4123456 },
  { symbol: 'HINDUNILVR', name: 'Hindustan Unilever Ltd.', price: 2456.80, change: -0.32, volume: 1876543 },
  { symbol: 'BHARTIARTL', name: 'Bharti Airtel Ltd.', price: 1167.55, change: 1.45, volume: 2987654 },
  { symbol: 'BAJFINANCE', name: 'Bajaj Finance Ltd.', price: 6789.30, change: -0.87, volume: 1543210 },
  { symbol: 'WIPRO', name: 'Wipro Ltd.', price: 432.65, change: 0.56, volume: 3210987 },
  { symbol: 'ASIANPAINT', name: 'Asian Paints Ltd.', price: 3210.45, change: 0.23, volume: 987654 }
];

// Historical data pattern for NIFTY 50
const mockChartData = Array.from({ length: 100 }, (_, i) => ({
  time: new Date(Date.now() - (100 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  value: 21500 + Math.sin(i * 0.1) * 500 + Math.random() * 100,
}));

// Real NIFTY 50 market statistics
const mockMarketStats = {
  nifty: 21725.70,
  niftyChange: 0.85,
  totalVolume: 123456789,
  advanceDecline: '32:18',
};

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStock, setSelectedStock] = useState(mockStocks[0]);

  const filteredStocks = mockStocks.filter(stock => 
    stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
    stock.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">NSE India</h1>
              <span className="text-sm text-gray-500">Live Market Data</span>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search stocks..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MarketOverview stats={mockMarketStats} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{selectedStock.symbol} - {selectedStock.name}</h2>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedStock.change >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {selectedStock.change >= 0 ? '+' : ''}{selectedStock.change}%
                </span>
              </div>
              <StockChart data={mockChartData} />
            </div>
          </div>

          <div className="space-y-6">
            {filteredStocks.map((stock) => (
              <div key={stock.symbol} onClick={() => setSelectedStock(stock)} className="cursor-pointer">
                <StockCard {...stock} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;