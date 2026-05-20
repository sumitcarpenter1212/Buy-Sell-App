import React from 'react';
import { motion } from 'motion/react';
import { useApp } from '../store';
import { Bell, Copy, ArrowUp, ArrowDown, Banknote, ClipboardList, Users, Zap } from 'lucide-react';

export function Home() {
  const { user, setView } = useApp();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-[44px] pb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-full border-2 border-white shadow-sm flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
              {user?.name?.[0]?.toUpperCase()}
            </div>
          </div>
          <div>
            <div className="text-[18px] font-semibold text-text-dark leading-tight">{user?.name}</div>
            <div className="flex items-center gap-1 text-[13px] text-text-grey mt-0.5">
              <span>ID: {user?.id}</span>
              <button className="text-primary hover:text-primary-dark">
                <Copy size={12} />
              </button>
            </div>
          </div>
        </div>
        <button onClick={() => setView('notifications')} className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-border-light text-text-dark">
          <Bell size={20} />
          <div className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></div>
        </button>
      </div>

      {/* Balance Card */}
      <div className="px-4 mt-2">
        {/* Main Balance Card */}
        <div className="relative bg-primary rounded-[16px] overflow-hidden p-5 shadow-sm h-[130px] flex flex-col justify-between mb-3">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-[140px] h-[140px] bg-[#F1C453] rounded-bl-full translate-x-4 -translate-y-4"></div>
          <div className="absolute bottom-0 right-0 w-[140px] h-[140px] bg-[#4D88E3] rounded-tl-full translate-x-8 translate-y-8 z-0"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary-dark/30 rounded-full z-0"></div>
          
          <div className="relative z-10 flex flex-col items-start pt-1">
            <p className="text-white font-medium text-[15px] mb-1 tracking-wide">Available Balance</p>
            <h2 className="text-[34px] font-bold text-white leading-none tracking-tight">₹ 0</h2>
          </div>
          
          <button onClick={() => setView('integral')} className="absolute bottom-5 right-5 z-10 bg-white text-text-dark px-6 py-1.5 rounded-full text-[14px] font-bold shadow-sm hover:scale-105 transition-transform active:scale-95">
            Detail
          </button>
        </div>

        {/* Deposit / Withdrawal Card */}
        <div className="relative bg-primary rounded-[16px] overflow-hidden flex shadow-sm h-[70px] mb-6 border border-white/10 items-center justify-center">
          {/* Decorative Left/Right */}
          <div className="absolute top-0 left-0 w-16 h-16 bg-[#3B82F6] rounded-br-[40px] opacity-90 -translate-x-2 -translate-y-2"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#F1C453] rounded-tl-[40px] opacity-90 translate-x-2 translate-y-2"></div>

          <div className="flex w-full items-center z-10">
            <div onClick={() => setView('deposit')} className="flex-1 flex flex-col pl-16 cursor-pointer hover:bg-white/5 h-full justify-center transition-colors">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-white text-[15px] font-medium tracking-wide">Deposit</span>
              </div>
              <span className="text-white font-bold text-[16px]">₹ 0</span>
              {/* Arrow Decoration */}
              <ArrowUp size={14} className="text-[#A5E1A8] absolute left-[45px] top-[26px]" strokeWidth={3} />
            </div>

            <div className="w-[1px] h-10 bg-white/20"></div>

            <div onClick={() => setView('withdrawal')} className="flex-1 flex flex-col pl-[30px] cursor-pointer hover:bg-white/5 h-full justify-center transition-colors">
              <div className="flex items-center gap-1.5 mb-0.5 relative">
                <ArrowDown size={14} className="text-[#FF6B6B] absolute -left-5 top-1" strokeWidth={3} />
                <span className="text-white text-[15px] font-medium tracking-wide">Withdrawal</span>
              </div>
              <span className="text-white font-bold text-[16px]">₹ 0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-4 gap-3">
          
          <div onClick={() => setView('usdt')} className="flex flex-col items-center gap-2 cursor-pointer group active:scale-95 transition-transform">
            <div className="relative w-[60px] h-[60px] bg-white rounded-[16px] flex items-center justify-center text-text-dark shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-border-light group-hover:border-primary/20 transition-colors">
              <Banknote size={26} strokeWidth={1.5} className="opacity-80" />
              {/* Badge */}
              <div className="absolute -top-2.5 right-1/2 translate-x-1/2 bg-success text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-white whitespace-nowrap shadow-sm z-10 scale-90">
                105INR
              </div>
            </div>
            <span className="text-[14px] font-medium text-text-dark tracking-wide">USDT</span>
          </div>

          <div onClick={() => setView('task')} className="flex flex-col items-center gap-2 cursor-pointer group active:scale-95 transition-transform">
            <div className="relative w-[60px] h-[60px] bg-white rounded-[16px] flex items-center justify-center text-text-dark shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-border-light group-hover:border-primary/20 transition-colors">
              <ClipboardList size={26} strokeWidth={1.5} className="opacity-80" />
            </div>
            <span className="text-[14px] font-medium text-text-dark tracking-wide">Task</span>
          </div>

          <div onClick={() => setView('team')} className="flex flex-col items-center gap-2 cursor-pointer group active:scale-95 transition-transform">
            <div className="relative w-[60px] h-[60px] bg-white rounded-[16px] flex items-center justify-center text-text-dark shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-border-light group-hover:border-primary/20 transition-colors">
              <Users size={26} strokeWidth={1.5} className="opacity-80" />
            </div>
            <span className="text-[14px] font-medium text-text-dark tracking-wide">Team</span>
          </div>

          <div onClick={() => setView('order')} className="flex flex-col items-center gap-2 cursor-pointer group active:scale-95 transition-transform">
            <div className="relative w-[60px] h-[60px] bg-white rounded-[16px] flex items-center justify-center text-text-dark shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-border-light group-hover:border-primary/20 transition-colors">
              <Zap size={26} strokeWidth={1.5} className="opacity-80" />
            </div>
            <span className="text-[14px] font-medium text-text-dark tracking-wide">Order</span>
          </div>

        </div>
      </div>

      {/* Transactions Section */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[16px] font-bold text-text-dark">Transactions</h2>
          <button className="text-[13px] font-medium text-accent-blue">See All</button>
        </div>

        <div className="bg-white rounded-[24px] border border-dashed border-text-grey/30 p-8 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-bg-app rounded-full flex justify-center items-center mb-4 text-text-grey/40">
            {/* Empty state SVG illustration */}
            <svg viewBox="0 0 100 100" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
              <rect x="25" y="30" width="50" height="40" rx="4" stroke="currentColor" strokeWidth="6"/>
              <line x1="35" y1="45" x2="65" y2="45" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
              <line x1="35" y1="55" x2="50" y2="55" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
              <circle cx="70" cy="70" r="15" fill="white" stroke="currentColor" strokeWidth="6"/>
              <path d="M70 63V77M63 70H77" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
            </svg>
          </div>
          <h3 className="text-[18px] font-bold text-text-dark">No top-up orders yet</h3>
          <p className="text-[14px] text-text-grey mt-1 mb-6">Top up now and start the game!</p>
          <button className="bg-success text-white font-bold text-[14px] py-3 px-10 rounded-full shadow-md hover:scale-105 transition-transform">
            Top up now
          </button>
        </div>
      </div>
      
    </motion.div>
  );
}
