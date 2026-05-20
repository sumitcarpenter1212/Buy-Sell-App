import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useApp } from '../store';

export function Integral() {
  const { setView } = useApp();
  const [activeTab, setActiveTab] = useState<'into' | 'rollout'>('into');

  return (
    <motion.div 
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="min-h-screen bg-bg-app flex flex-col relative z-50 overflow-y-auto"
    >
      <div className="h-[60px] flex items-center justify-center relative bg-transparent px-4 sticky top-0 z-10 transition-colors">
        <button 
          onClick={() => setView('my')}
          className="absolute left-4 p-2 text-primary active:bg-primary/10 rounded-full transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-[20px] font-bold text-primary">Score</h1>
      </div>

      <div className="p-4">
        <div className="bg-white rounded-[16px] shadow-sm p-4 border border-border-light mb-4">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-[14px] text-text-dark mb-1">You have Score</p>
              <p className="text-[32px] font-bold text-primary leading-tight">0.00</p>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[14px] text-primary font-medium mb-1 tracking-wide">Change</span>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#D4C69C] flex items-center justify-center text-[10px] font-bold text-white border border-white -mr-1 z-10 shadow-sm opacity-90">¥</div>
                <div className="w-6 h-6 rounded-full bg-[#8E7E55] flex items-center justify-center text-[10px] font-bold text-white border border-white shadow-sm opacity-90">¥</div>
              </div>
            </div>
          </div>

          <div className="flex p-1 bg-[#27AE60] rounded-[12px]">
            <button 
              onClick={() => setActiveTab('into')}
              className={`flex-1 py-1.5 text-center rounded-[8px] text-[15px] font-bold transition-all ${activeTab === 'into' ? 'bg-[#166B48] text-white shadow-sm' : 'text-white/80 hover:bg-white/10'}`}
            >
              Into
            </button>
            <button 
              onClick={() => setActiveTab('rollout')}
              className={`flex-1 py-1.5 text-center rounded-[8px] text-[15px] font-bold transition-all ${activeTab === 'rollout' ? 'bg-[#166B48] text-white shadow-sm' : 'text-white/80 hover:bg-white/10'}`}
            >
              Roll out
            </button>
          </div>
        </div>

        <div className="bg-white rounded-[16px] shadow-sm p-12 border border-border-light flex flex-col items-center justify-center min-h-[160px]">
          <p className="text-[#E0E5ED] text-[16px] font-medium tracking-wide">No data</p>
        </div>
      </div>
    </motion.div>
  );
}
