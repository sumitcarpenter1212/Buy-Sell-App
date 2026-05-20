import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Bell } from 'lucide-react';
import { useApp } from '../store';

export function Notifications() {
  const { setView } = useApp();

  return (
    <motion.div 
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="min-h-screen bg-[#F8FAFC] flex flex-col relative z-50 pb-8"
    >
      <div className="h-[60px] flex items-center justify-center relative bg-white sticky top-0 z-20 shadow-sm">
        <button 
          onClick={() => setView('home')}
          className="absolute left-4 p-2 text-primary active:bg-primary/10 rounded-full transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-[20px] font-bold text-primary">Notifications</h1>
      </div>

      <div className="p-4 flex-1 flex flex-col items-center justify-center">
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm shadow-black/5 text-primary">
            <Bell size={40} className="opacity-80" />
         </div>
         <h2 className="text-[18px] font-bold text-text-dark mb-2">No new notifications</h2>
         <p className="text-[14px] text-text-grey text-center max-w-[250px]">
            We will notify you when there's something new to check.
         </p>
      </div>
    </motion.div>
  );
}
