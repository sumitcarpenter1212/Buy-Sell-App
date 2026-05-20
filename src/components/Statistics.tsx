import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Wallet, TrendingUp, HandCoins, Repeat, Clock } from 'lucide-react';

export function Statistics() {
  const [sellingOpen, setSellingOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-6 pt-[44px]"
    >
      <div className="flex items-center justify-center px-4 pb-4">
        <h1 className="text-[22px] font-bold text-primary">Statistics</h1>
      </div>

      <div className="px-4 mb-8">
        <div className="bg-white rounded-[24px] shadow-sm p-6">
          
          {/* Header */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-5 bg-primary rounded-full"></div>
            <h2 className="text-[16px] font-bold text-text-dark">Statistics</h2>
            <span className="text-[12px] text-text-grey ml-auto">(20/05/2026)</span>
          </div>

          {/* 4-Grid Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-3 bg-bg-app rounded-xl">
              <p className="text-[10px] text-text-grey uppercase font-bold tracking-wider">Balance</p>
              <p className="font-bold text-primary mt-1">₹ 0.00</p>
            </div>
            <div className="p-3 bg-bg-app rounded-xl">
              <p className="text-[10px] text-text-grey uppercase font-bold tracking-wider">Sell</p>
              <p className="font-bold text-accent-yellow mt-1">₹ 0.00</p>
            </div>
            <div className="p-3 bg-bg-app rounded-xl">
              <p className="text-[10px] text-text-grey uppercase font-bold tracking-wider">Deposit</p>
              <p className="font-bold text-success mt-1">₹ 0.00</p>
            </div>
            <div className="p-3 bg-bg-app rounded-xl">
              <p className="text-[10px] text-text-grey uppercase font-bold tracking-wider">Comm.</p>
              <p className="font-bold text-accent-blue mt-1">₹ 0.00</p>
            </div>
          </div>

          {/* Exchange Rates and details */}
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-border-light">
              <span className="text-[14px] text-text-grey">Exchange Rate (USDT)</span>
              <span className="font-bold text-success">105 INR</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-border-light">
              <span className="text-[14px] text-text-grey">In Process Orders</span>
              <span className="font-bold">0</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-[14px] text-text-grey">Comm. Rate</span>
              <span className="font-bold">3.00 %</span>
            </div>
          </div>

        </div>
      </div>

      {/* Action Button */}
      <div className="px-6">
        <button 
          onClick={() => setSellingOpen(!sellingOpen)}
          className={`w-full h-[52px] rounded-full text-white font-bold text-[16px] shadow-md active:scale-95 transition-all
            ${sellingOpen ? 'bg-primary' : 'bg-accent-yellow'}`}
        >
          {sellingOpen ? 'Open Selling' : 'Closed Selling'}
        </button>
      </div>

    </motion.div>
  );
}

function StatItem({ icon, iconBg, label, value }: { icon: React.ReactNode, iconBg: string, label: string, value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-[36px] h-[36px] rounded-[10px] flex items-center justify-center flex-shrink-0 ${iconBg}`}>
        {icon}
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <span className="text-[12px] text-text-grey truncate">{label}</span>
        <span className="text-[15px] font-bold text-text-dark leading-tight mt-0.5">{value}</span>
      </div>
    </div>
  );
}

function PaymentStatItem({ label, value }: { label: string, value: string }) {
  return (
    <div className="bg-white border border-border-light rounded-[12px] p-3 shadow-sm flex flex-col items-center justify-center gap-1.5 min-h-[76px]">
      <div className="flex items-center gap-1.5 w-full justify-center">
        <Clock size={12} className="text-accent-yellow flex-shrink-0" />
        <span className="text-[11px] text-text-grey truncate line-clamp-1">{label}</span>
      </div>
      <span className="text-[14px] font-bold text-text-dark">{value}</span>
    </div>
  );
}
