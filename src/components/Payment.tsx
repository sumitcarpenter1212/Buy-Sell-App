import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AlertTriangle } from 'lucide-react';

const TASKS = [
  { id: 1, amount: 291, income: 8.73, code: 'Jd94Hm' },
  { id: 2, amount: 970, income: 29.10, code: 'NtD8zg' },
  { id: 3, amount: 2450, income: 73.50, code: 'vVIlen' },
];

export function Payment() {
  const [activeTab, setActiveTab] = useState('Top Picks');
  const tabs = ['Top Picks', '100-499', '500-999', '1000-2999', '3000+'];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-6 pt-[44px]"
    >
      {/* Header */}
      <div className="flex items-center justify-center px-4 pb-4">
        <h1 className="text-[22px] font-bold text-primary">Payment</h1>
      </div>

      {/* Summary Card */}
      <div className="px-4 mb-4">
        <div className="relative bg-gradient-to-r from-primary to-primary-dark rounded-[20px] p-5 shadow-sm overflow-hidden">
          {/* Background graphics */}
          <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-accent-yellow rounded-full opacity-90 blur-[2px]"></div>
          <div className="absolute top-[40px] right-[-40px] w-40 h-40 bg-accent-blue rounded-full opacity-80 blur-[2px] mix-blend-multiply"></div>
          
          {/* Bar Chart Illustration */}
          <div className="absolute bottom-5 right-5 flex items-end gap-2 opacity-40">
            <div className="w-4 bg-white/60 h-10 rounded-t-sm"></div>
            <div className="w-4 bg-white h-16 rounded-t-sm shadow-lg"></div>
            <div className="w-4 bg-white/80 h-12 rounded-t-sm"></div>
          </div>
          
          {/* Top Row */}
          <div className="relative z-10 mb-6">
            <div className="text-white/90 text-[14px]">Cashback</div>
            <div className="text-white font-bold text-[40px] leading-tight tracking-tight">3%</div>
          </div>

          {/* Bottom Grid */}
          <div className="relative z-10 flex gap-3 h-[90px]">
             {/* Left Panel */}
             <div className="flex-1 border border-white/20 bg-white/5 rounded-[12px] p-3 flex flex-col backdrop-blur-sm">
                <span className="text-white/80 text-[12px] mb-auto">Balance</span>
                <span className="text-white font-bold text-[24px]">₹0</span>
             </div>
             
             {/* Right Column */}
             <div className="flex-[0.8] flex flex-col gap-3">
                <div className="flex-1 border border-white/20 bg-white/5 rounded-[12px] px-3 py-1 flex items-center justify-between backdrop-blur-sm">
                  <span className="text-white/80 text-[11px]">Reward</span>
                  <span className="text-white font-bold text-[14px]">₹0</span>
                </div>
                <div className="flex-1 border border-white/20 bg-white/5 rounded-[12px] px-3 py-1 flex items-center justify-between backdrop-blur-sm">
                  <span className="text-white/80 text-[11px]">Pending</span>
                  <span className="text-white font-bold text-[14px]">₹0</span>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Warning */}
      <div className="px-6 mb-6">
        <div className="bg-primary-light border border-primary/20 p-4 rounded-2xl flex items-center gap-3">
          <span className="text-primary text-xl font-bold">⚠</span>
          <p className="text-primary text-[11px] leading-tight font-medium">
            Please use Freecharge or Mobikwik wallet for payment!
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="pl-4 mb-6 relative">
        <div className="flex space-x-2 overflow-x-auto hide-scrollbar pr-4 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-[14px] font-medium transition-all
                ${activeTab === tab 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white text-text-grey border border-border-light hover:bg-gray-50'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Task List */}
      <div className="px-4 flex flex-col space-y-4">
        {TASKS.map((task) => (
          <div key={task.id} className="bg-white rounded-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.04)] p-4 relative border border-border-light/50">
            
            <div className="flex justify-between items-start mb-2">
              <span className="text-[16px] font-bold text-primary">INR</span>
              <div className="flex items-center gap-2">
                <span className="text-[12px] text-primary bg-primary-light px-2 py-0.5 rounded font-medium">Code</span>
                <span className="text-[12px] font-bold text-text-dark bg-gray-100 px-2.5 py-0.5 rounded-full">{task.code}</span>
              </div>
            </div>

            <div className="flex flex-col gap-1 w-2/3">
              <div className="text-[13px] text-text-grey flex items-center gap-1">
                Amount:<span className="text-[16px] font-bold text-primary">₹{task.amount}</span>
              </div>
              <div className="text-[13px] text-text-dark flex items-center gap-1">
                Income:<span className="text-[13px] font-bold text-success">+{task.income}</span>
              </div>
            </div>

            <button className="absolute bottom-4 right-4 bg-primary text-white font-medium text-[14px] py-1.5 px-6 rounded-full shadow-sm hover:scale-105 transition-transform active:scale-95">
              Claim
            </button>
            
          </div>
        ))}
      </div>
    </motion.div>
  );
}
