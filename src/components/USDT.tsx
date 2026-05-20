import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { useApp } from '../store';

export function USDT() {
  const { setView } = useApp();
  const [amount, setAmount] = useState('');
  const [selectedChain, setSelectedChain] = useState('TRC20');

  const ratio = 105;
  const numAmount = parseFloat(amount) || 0;
  const receivedScore = (numAmount * ratio).toFixed(2);
  const bonus = (0).toFixed(2); // Assuming 0 for now as per design

  return (
    <motion.div 
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="min-h-screen bg-bg-app flex flex-col relative z-50 overflow-y-auto pb-8"
    >
      <div className="h-[60px] flex items-center justify-center relative bg-white sticky top-0 z-10 transition-colors">
        <button 
          onClick={() => setView('home')}
          className="absolute left-4 p-2 text-primary active:bg-primary/10 rounded-full transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-[20px] font-bold text-primary">Deposit</h1>
      </div>

      <div className="p-4 pt-6">
        {/* Instructions */}
        <div className="bg-primary-light p-4 rounded-t-[20px] mb-[-16px] pb-8">
          <ol className="text-text-dark text-[13px] leading-[1.6]">
            <li><strong className="text-primary mr-1">1.</strong>Please enter the amount of USDT you would like to use to recharge your integrals.</li>
            <li><strong className="text-primary mr-1">2.</strong>Then click the 'Deposit' button at the bottom.</li>
            <li><strong className="text-primary mr-1">3.</strong>Follow the payment instructions on the order page to complete the payment.</li>
          </ol>
        </div>

        {/* Input & Chains Card */}
        <div className="bg-white rounded-[20px] p-4 shadow-sm border border-border-light relative z-10">
          
          {/* Calculator Section */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[14px] font-bold text-text-dark">Calculator</span>
              <span className="text-[12px] text-primary">Ratio: 1 USDT={ratio} INR</span>
            </div>
            
            <div className="flex items-center border border-border-light rounded-[12px] p-1.5 focus-within:border-primary transition-colors">
              <div className="bg-primary text-white font-bold text-[14px] px-4 py-2 rounded-[8px]">
                USDT
              </div>
              <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Please Enter A Number"
                className="flex-1 bg-transparent border-none outline-none px-3 text-[15px] font-medium placeholder:text-text-grey/60"
              />
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="border border-border-light rounded-[12px] p-3 flex flex-col items-center justify-center text-center">
              <span className="text-[12px] text-text-dark font-semibold mb-1">Estimated bonus:</span>
              <span className="text-[14px] font-bold text-primary">{bonus} Score</span>
            </div>
            <div className="border border-border-light rounded-[12px] p-3 flex flex-col items-center justify-center text-center">
              <span className="text-[12px] text-text-dark font-semibold mb-1">You will receive:</span>
              <span className="text-[14px] font-bold text-primary">{receivedScore} Score</span>
            </div>
          </div>

          {/* Chain Selection */}
          <h3 className="text-[15px] font-bold text-text-dark mb-3">Select Chain Type</h3>
          
          <div className="flex flex-col gap-3">
            {/* TRC20 */}
            <div 
              onClick={() => setSelectedChain('TRC20')}
              className={`flex items-center justify-between p-3 border rounded-[14px] cursor-pointer transition-all
                ${selectedChain === 'TRC20' ? 'border-primary shadow-sm bg-primary/5' : 'border-border-light bg-white hover:border-text-grey/30'}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1AA181] flex items-center justify-center text-white font-bold relative">
                   {/* Tether icon approximation */}
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 14.5c-4.14 0-7.5-1.56-7.5-3.5S7.86 9.5 12 9.5s7.5 1.56 7.5 3.5-3.36 3.5-7.5 3.5zm4.5-3.5c0 1.25-2.01 2.25-4.5 2.25S7.5 14.25 7.5 13s2.01-2.25 4.5-2.25 4.5 1 4.5 2.25zM11 6h2v3h-2z"/></svg>
                </div>
                <div>
                  <div className="text-[15px] font-bold text-text-dark leading-tight">TRC20</div>
                  <div className="text-[11px] text-text-grey">USDT-TRON Network</div>
                </div>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors
                ${selectedChain === 'TRC20' ? 'border-primary' : 'border-text-grey/40'}`}
              >
                {selectedChain === 'TRC20' && <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>}
              </div>
            </div>

            {/* BSC */}
            <div 
              onClick={() => setSelectedChain('BSC')}
              className={`flex items-center justify-between p-3 border rounded-[14px] cursor-pointer transition-all
                ${selectedChain === 'BSC' ? 'border-primary shadow-sm bg-primary/5' : 'border-border-light bg-white hover:border-text-grey/30'}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F3BA2F] flex items-center justify-center text-white font-bold">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 12l10 10 10-10L12 2zm0 3.3L18.7 12 12 18.7 5.3 12 12 5.3zm0 3.5L8.8 12 12 15.2 15.2 12 12 8.8z"/></svg>
                </div>
                <div>
                  <div className="text-[15px] font-bold text-text-dark leading-tight">BSC(BEP20)</div>
                  <div className="text-[11px] text-text-grey">USDT-BNB Smart Chain</div>
                </div>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors
                ${selectedChain === 'BSC' ? 'border-primary' : 'border-text-grey/40'}`}
              >
                {selectedChain === 'BSC' && <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>}
              </div>
            </div>
          </div>
        </div>

        {/* Notice */}
        <div className="flex items-start gap-1.5 mt-8 mb-6 px-2">
          <AlertTriangle size={14} className="text-primary mt-0.5 flex-shrink-0" />
          <p className="text-[13px] text-primary/80 leading-relaxed">
            After the recharge is completed, please wait 3-5 minutes for the deposit to arrive.
          </p>
        </div>

        {/* Submit */}
        <button 
          onClick={() => setView('home')}
          className="w-full bg-[#87D0A1] text-white font-bold py-3.5 rounded-[20px] shadow-sm hover:scale-[1.02] active:scale-95 transition-transform text-[16px]">
          Deposit
        </button>

      </div>

    </motion.div>
  );
}
