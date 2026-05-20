import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Bell } from 'lucide-react';
import { useApp } from '../store';

export function Message() {
  const { setView } = useApp();

  return (
    <motion.div 
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="min-h-screen bg-bg-app flex flex-col relative z-50 overflow-y-auto"
    >
      <div className="h-[60px] flex items-center justify-center relative bg-white border-b border-border-light px-4 sticky top-0 z-10 transition-colors">
        <button 
          onClick={() => setView('my')}
          className="absolute left-4 p-2 text-primary active:bg-primary/10 rounded-full transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-[20px] font-bold text-primary">Messages</h1>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center mt-[-60px]">
        <div className="w-24 h-24 bg-primary-light rounded-full flex items-center justify-center text-primary mb-6">
            <Bell size={40} className="opacity-80" />
        </div>
        <h2 className="text-[20px] font-bold text-text-dark mb-2">No New Messages</h2>
        <p className="text-[14px] text-text-grey tracking-wide">You don't have any notifications or messages at the moment.</p>
      </div>
    </motion.div>
  );
}
