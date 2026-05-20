import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, HeadphonesIcon, HelpCircle, Mail } from 'lucide-react';
import { useApp } from '../store';

export function Service() {
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
        <h1 className="text-[20px] font-bold text-primary">Customer Service</h1>
      </div>

      <div className="p-4 flex flex-col gap-4">
        <div className="bg-white p-6 rounded-[20px] border border-border-light shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center text-primary mb-4">
                <HeadphonesIcon size={32} />
            </div>
            <h2 className="text-lg font-bold text-text-dark">Live Chat Support</h2>
            <p className="text-text-grey text-sm mt-2 mb-6 tracking-wide">Our support team is available 24/7 to help you with any issues.</p>
            <button className="w-full bg-primary text-white font-bold py-3.5 rounded-full shadow-sm hover:scale-105 active:scale-95 transition-transform">
                Start Chat
            </button>
        </div>

        <div className="bg-white p-6 rounded-[20px] border border-border-light shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#EAF2FF] rounded-full flex items-center justify-center text-accent-blue mb-4">
                <Mail size={32} />
            </div>
            <h2 className="text-lg font-bold text-text-dark">Email Support</h2>
            <p className="text-text-grey text-sm mt-2 mb-6 tracking-wide">Send us an email and we'll get back to you within 24 hours.</p>
            <button className="w-full bg-accent-blue text-white font-bold py-3.5 rounded-full shadow-sm hover:scale-105 active:scale-95 transition-transform">
                Email Us
            </button>
        </div>
      </div>
    </motion.div>
  );
}
