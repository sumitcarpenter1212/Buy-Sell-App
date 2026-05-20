import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../store';

export function Splash() {
  const { setView } = useApp();
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 1500); // 1.5s: Switch background & move logo into card
    const t2 = setTimeout(() => setStage(2), 3000); // 3s: Show Loading popup
    const t3 = setTimeout(() => {
      if (localStorage.getItem('sathipay_user')) {
        setView('home');
      } else {
        setView('login');
      }
    }, 5000); // 5s: Go to correct screen

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [setView]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <AnimatePresence>
        {stage === 0 && (
          <motion.div 
            key="stage0"
            className="absolute inset-0 bg-[#F7F9FC] flex flex-col items-center justify-center z-20"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/logo.png" alt="Binpay" className="w-32 h-32 object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {stage >= 1 && (
          <motion.div 
            key="stage1"
            className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-br from-[#E2EAF4] via-[#D1DEED] to-[#A3BBD8] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Abstract Background Waves */}
            <div className="absolute inset-0 z-0">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M-10,50 Q20,20 50,50 T110,60" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" fill="none" />
                 <path d="M-10,70 Q30,40 60,60 T110,80" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none" />
                 <path d="M-10,30 Q40,10 70,30 T110,40" stroke="rgba(255,255,255,0.5)" strokeWidth="0.2" fill="none" />
                 
                 <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#glass-grad)" />
                 
                 <defs>
                   <linearGradient id="glass-grad" x1="0" y1="0" x2="1" y2="1">
                     <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                     <stop offset="100%" stopColor="#4A7AB5" stopOpacity="0.2" />
                   </linearGradient>
                 </defs>
              </svg>
              {/* Some geometric floating shapes to imply waves */}
              <div className="absolute top-[-10%] right-[-20%] w-[80%] h-[60%] rounded-full bg-white blur-[80px] opacity-20"></div>
              <div className="absolute bottom-[-10%] left-[-20%] w-[60%] h-[50%] rounded-full bg-[#4A7AB5] blur-[100px] opacity-30"></div>
            </div>

            {/* Tilted White Card */}
            <motion.div 
              initial={{ y: 150, opacity: 0, rotate: -3 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: 'spring', damping: 20, stiffness: 100 }}
              className="relative z-10 w-[240px] h-[340px] bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center"
            >
               <img src="/logo.png" alt="Binpay" className="w-32 h-32 object-contain rounded-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading Modal Popup */}
      <AnimatePresence>
        {stage >= 2 && (
          <motion.div
            key="stage2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 20, stiffness: 250 }}
            className="absolute z-30 flex flex-col items-center justify-center bg-[#363636] text-white px-8 py-5 rounded-[16px] shadow-2xl"
          >
             <div className="flex items-center justify-center gap-3 mb-2">
               <div className="w-10 h-10 flex items-center justify-center rounded-md overflow-hidden">
                 <img src="/logo.png" alt="Binpay" className="w-full h-full object-contain" />
               </div>
               <span className="font-bold text-[16px] tracking-wide">Binpay</span>
             </div>
             <div className="text-[14px] text-white/80 font-medium tracking-wider">
               Loading
               <motion.span 
                 animate={{ opacity: [0, 1, 0] }} 
                 transition={{ repeat: Infinity, duration: 1.5, times: [0, 0.5, 1] }}
               >...</motion.span>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

