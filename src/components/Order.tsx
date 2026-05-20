import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useApp } from '../store';

type TabType = 'receive' | 'purchase';
type CurrencyType = 'INR' | 'USTD';

export function Order() {
  const { setView } = useApp();
  const [activeTab, setActiveTab] = useState<TabType>('receive');
  const [activeCurrency, setActiveCurrency] = useState<CurrencyType>('INR');

  return (
    <motion.div 
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="min-h-screen bg-[#F8FAFC] flex flex-col relative z-50 overflow-y-auto pb-8"
    >
      <div className="h-[60px] flex items-center justify-center relative bg-[#F8FAFC] sticky top-0 z-20">
        <button 
          onClick={() => setView('home')}
          className="absolute left-4 p-2 text-primary active:bg-primary/10 rounded-full transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-[20px] font-bold text-primary">Payment History</h1>
      </div>

      <div className="px-4 py-2 flex flex-col items-center">
        {/* Main Tabs */}
        <div className="w-full bg-[#EAF5F0] rounded-full p-1 flex mb-4 border border-primary/10">
          <TabButton 
            label="Receive" 
            isActive={activeTab === 'receive'} 
            onClick={() => setActiveTab('receive')} 
          />
          <TabButton 
            label="Purchase" 
            isActive={activeTab === 'purchase'} 
            onClick={() => setActiveTab('purchase')} 
          />
        </div>

        {/* Content based on Tab */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            {activeTab === 'receive' && (
              <motion.div
                key="receive"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="w-full"
              >
                {/* Green Card */}
                <div className="w-full rounded-[12px] p-5 shadow-sm relative overflow-hidden mb-4" style={{ backgroundColor: '#10a36e' }}>
                  {/* Background Accents */}
                  <div className="absolute top-0 right-0 w-[140px] h-[140px] bg-[#F1C453] rounded-bl-full translate-x-4 -translate-y-4"></div>
                  <div className="absolute bottom-0 right-0 w-[100px] h-[100px] bg-[#618BEC] rounded-tl-full translate-x-2 translate-y-6"></div>
                  
                  <div className="relative z-10 flex text-white">
                    <div className="flex-1">
                      <p className="text-[15px] font-normal opacity-90 mb-1">Balance:</p>
                      <p className="text-[34px] font-bold leading-none tracking-tight">∫0</p>
                    </div>
                    <div className="flex-1 flex flex-col justify-center gap-2 pt-1 pl-4">
                      <div className="flex justify-between items-center pr-2">
                        <span className="text-[14px] font-normal opacity-90">Reward:</span>
                        <span className="text-[18px] font-bold">∫0</span>
                      </div>
                      <div className="flex justify-between items-center pr-2">
                        <span className="text-[14px] font-normal opacity-90">Pending:</span>
                        <span className="text-[18px] font-bold">∫0</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub Tabs */}
                <div className="w-full flex gap-3 mb-6">
                  <button 
                    onClick={() => setActiveCurrency('INR')}
                    className={`flex-1 py-2 rounded-full border border-primary text-[14px] font-bold transition-colors
                      ${activeCurrency === 'INR' ? 'bg-[#EAF5F0] text-primary' : 'bg-transparent text-primary/80'}`}
                  >
                    INR
                  </button>
                  <button 
                    onClick={() => setActiveCurrency('USTD')}
                    className={`flex-1 py-2 rounded-full border border-primary text-[14px] font-bold transition-colors
                      ${activeCurrency === 'USTD' ? 'bg-[#EAF5F0] text-primary' : 'bg-transparent text-primary/80'}`}
                  >
                    USTD
                  </button>
                </div>

                <div className="text-center text-text-grey text-[13px] mt-4 font-medium">
                  No more data
                </div>
              </motion.div>
            )}

            {activeTab === 'purchase' && (
              <motion.div
                key="purchase"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="w-full pt-4"
              >
                <div className="text-center text-text-grey text-[13px] font-medium">
                  No more data
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

function TabButton({ label, isActive, onClick }: { label: string, isActive: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-2 text-[15px] font-bold rounded-full transition-all duration-300
        ${isActive 
          ? 'bg-primary text-white shadow-sm' 
          : 'text-primary/70 hover:text-primary'}`}
    >
      {label}
    </button>
  );
}
