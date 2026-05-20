import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../store';
import { ArrowLeft, Wallet } from 'lucide-react';

const WALLET_OPTIONS = [
  { id: 'freecharge', name: 'Freecharge', color: '#F26722', icon: 'F' },
  { id: 'phonepe', name: 'Phonepe', color: '#5F259F', icon: 'P' },
  { id: 'mobikwik', name: 'Mobikwik', color: '#005CE6', icon: 'M' },
  { id: 'paytm', name: 'Paytm', color: '#00BAF2', icon: 'Pt' },
  { id: 'paytm_biz', name: 'Paytm Business', color: '#00BAF2', icon: 'Pt' },
  { id: 'phonepe_biz', name: 'Phonepe Business', color: '#5F259F', icon: 'P' },
  { id: 'induspay', name: 'IndusPay', color: '#881F27', icon: 'I' },
];

export function Tool() {
  const [showAdd, setShowAdd] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState('freecharge');

  if (showAdd) {
    return (
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="min-h-screen bg-bg-app flex flex-col absolute top-0 left-0 right-0 z-50 overflow-y-auto pb-24"
      >
        <div className="h-[60px] flex items-center justify-center relative bg-white border-b border-border-light px-4 mt-8 sticky top-0 z-10">
          <button 
            onClick={() => setShowAdd(false)}
            className="absolute left-4 p-2 text-primary active:bg-primary/10 rounded-full transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-[20px] font-semibold text-primary">Add Tool</h1>
        </div>

        <div className="flex-1 px-4 pt-6 flex flex-col items-center max-w-md mx-auto w-full">
          <h2 className="text-[20px] font-bold text-primary mb-6">Choose your payment</h2>
          
          <div className="w-full flex flex-col space-y-3 mb-8">
            {WALLET_OPTIONS.map((wallet) => (
              <div 
                key={wallet.id}
                onClick={() => setSelectedWallet(wallet.id)}
                className={`flex items-center p-4 rounded-[20px] shadow-sm border cursor-pointer transition-all
                  ${selectedWallet === wallet.id ? 'bg-primary-light border-primary' : 'bg-white border-border-light hover:bg-gray-50'}`}
              >
                <div className="w-6 h-6 rounded-full border border-border-light bg-white flex items-center justify-center mr-4 flex-shrink-0">
                  {selectedWallet === wallet.id && (
                     <div className="w-full h-full rounded-full bg-primary flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                     </div>
                  )}
                </div>
                
                <div 
                  className="w-10 h-10 rounded-md flex justify-center items-center text-white font-bold text-[18px] mr-4 flex-shrink-0"
                  style={{ backgroundColor: wallet.color }}
                >
                  {wallet.icon}
                </div>
                
                <span className="text-[16px] font-medium text-text-dark">{wallet.name}</span>
              </div>
            ))}
          </div>

          <button 
            onClick={() => setShowAdd(false)}
            className="w-full h-[52px] bg-primary rounded-full text-white font-semibold text-[16px] shadow-[0_8px_16px_rgba(30,139,94,0.3)] active:scale-[0.98] transition-transform mb-8"
          >
            Sure
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-6 pt-[44px] min-h-[calc(100vh-80px)] flex flex-col"
    >
      <div className="flex items-center justify-center px-4 pb-8">
        <h1 className="text-[22px] font-bold text-primary">Tool</h1>
      </div>

      <div className="flex-1 flex flex-col items-center pt-8 px-8">
        <div className="text-[15px] text-primary mb-6">No wallets yet</div>
        <button 
          onClick={() => setShowAdd(true)}
          className="w-full max-w-[240px] h-[48px] bg-primary rounded-full text-white font-medium text-[16px] hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-md"
        >
          Add
        </button>
      </div>

    </motion.div>
  );
}
