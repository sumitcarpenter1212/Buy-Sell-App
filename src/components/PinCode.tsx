import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Settings } from 'lucide-react';
import { useApp } from '../store';

export function PinCode() {
  const { setView } = useApp();

  return (
    <motion.div 
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="min-h-screen bg-bg-app flex flex-col relative z-50 overflow-y-auto pb-8"
    >
      <div className="h-[60px] flex items-center justify-center relative bg-transparent px-4 sticky top-0 z-10 transition-colors">
        <button 
          onClick={() => setView('my')}
          className="absolute left-4 p-2 text-primary active:bg-primary/10 rounded-full transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-[20px] font-bold text-primary">Pin Code</h1>
      </div>

      <div className="px-5 flex flex-col items-center pt-8">
        <div className="text-primary mb-8 opacity-80">
           <Settings size={90} strokeWidth={1} />
        </div>
        
        <h2 className="text-[22px] font-bold text-primary mb-10">Enter Your Pin</h2>

        <div className="w-full max-w-sm mb-6">
          <p className="text-primary font-semibold text-[15px] mb-3 px-1">Old Pin (If You Set)</p>
          <div className="flex justify-between gap-1 w-full">
            {[1,2,3,4,5,6].map((i) => (
              <input key={i} type="password" maxLength={1} className="w-12 h-14 rounded-[12px] border border-primary/20 bg-white text-center text-xl font-bold text-text-dark focus:border-primary outline-none shadow-sm flex-1 max-w-[3.5rem] transition-colors" />
            ))}
          </div>
        </div>

        <div className="w-full max-w-sm mb-6">
          <p className="text-primary font-semibold text-[15px] mb-3 px-1">New Pin</p>
          <div className="flex justify-between gap-1 w-full">
            {[1,2,3,4,5,6].map((i) => (
              <input key={i} type="password" maxLength={1} className="w-12 h-14 rounded-[12px] border border-primary/20 bg-white text-center text-xl font-bold text-text-dark focus:border-primary outline-none shadow-sm flex-1 max-w-[3.5rem] transition-colors" />
            ))}
          </div>
        </div>

        <div className="w-full max-w-sm mb-12">
          <p className="text-primary font-semibold text-[15px] mb-3 px-1">Confirm New Pin</p>
          <div className="flex justify-between gap-1 w-full">
            {[1,2,3,4,5,6].map((i) => (
              <input key={i} type="password" maxLength={1} className="w-12 h-14 rounded-[12px] border border-primary/20 bg-white text-center text-xl font-bold text-text-dark focus:border-primary outline-none shadow-sm flex-1 max-w-[3.5rem] transition-colors" />
            ))}
          </div>
        </div>

        <div className="w-full max-w-sm flex gap-4">
          <button 
            onClick={() => setView('my')}
            className="flex-1 py-3.5 bg-[#EEF2F6] text-text-grey rounded-[14px] font-bold text-[16px] active:scale-95 transition-transform"
          >
            Cancel
          </button>
          <button 
            onClick={() => setView('my')}
            className="flex-1 py-3.5 bg-[#87D0A1] text-white rounded-[14px] font-bold text-[16px] shadow-sm active:scale-95 transition-transform hover:bg-[#7bc093]"
          >
            Confirm
          </button>
        </div>

      </div>
    </motion.div>
  );
}
