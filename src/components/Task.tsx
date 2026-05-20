import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Star, Info } from 'lucide-react';
import { useApp } from '../store';

type TabType = 'newbie' | 'team' | 'daily';

export function Task() {
  const { setView } = useApp();
  const [activeTab, setActiveTab] = useState<TabType>('daily');

  return (
    <motion.div 
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="min-h-screen bg-bg-app flex flex-col relative z-50 overflow-y-auto pb-8"
    >
      <div className="h-[60px] flex items-center justify-center relative bg-transparent sticky top-0 z-10 transition-colors">
        <button 
          onClick={() => setView('home')}
          className="absolute left-4 p-2 text-primary active:bg-primary/10 rounded-full transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-[20px] font-bold text-primary">Task Rewards</h1>
      </div>

      <div className="flex flex-col items-center px-4 pt-2 w-full">
        <p className="text-text-grey text-[14px] mb-6">Earn tokens by completing tasks</p>
        
        {/* Tabs */}
        <div className="w-full bg-[#EAF5F0] rounded-full p-1 flex mb-6 border border-primary/10">
          <TabButton 
            label="Newbie Tasks" 
            isActive={activeTab === 'newbie'} 
            onClick={() => setActiveTab('newbie')} 
          />
          <TabButton 
            label="Team Growth" 
            isActive={activeTab === 'team'} 
            onClick={() => setActiveTab('team')} 
          />
          <TabButton 
            label="Daily Tasks" 
            isActive={activeTab === 'daily'} 
            onClick={() => setActiveTab('daily')} 
          />
        </div>

        {/* Tab Content */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            {activeTab === 'newbie' && (
              <motion.div
                key="newbie"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="w-full"
              >
                <div className="flex-1 flex flex-col items-center justify-center py-12 text-center">
                  <p className="text-[14px] text-text-grey">No newbie tasks available.</p>
                </div>
              </motion.div>
            )}
            
            {activeTab === 'team' && (
              <motion.div
                key="team"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="w-full space-y-4"
              >
                <TeamCard />
              </motion.div>
            )}

            {activeTab === 'daily' && (
              <motion.div
                key="daily"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="w-full space-y-4"
              >
                <DailyCard 
                  tag="•YESTERDAY" 
                  date="2026-05-19" 
                  status="Unfinished" 
                />
                <DailyCard 
                  tag="•TODAY" 
                  date="2026-05-20" 
                  status="In Progress" 
                />
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
      className={`flex-1 py-2 text-[13px] font-bold rounded-full transition-all duration-300
        ${isActive 
          ? 'bg-white text-primary shadow-sm' 
          : 'text-primary/70 hover:text-primary'}`}
    >
      {label}
    </button>
  );
}

function DailyCard({ tag, date, status }: { tag: string, date: string, status: 'Unfinished' | 'In Progress' }) {
  const isToday = status === 'In Progress';
  return (
    <div className="bg-white rounded-[16px] p-5 shadow-sm border border-border-light relative overflow-hidden">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[11px] font-bold tracking-wider text-accent-yellow">{tag}</span>
        <div className="flex items-center gap-2">
           <div className="w-24 h-1.5 bg-[#EAF5F0] rounded-full overflow-hidden">
              <div className="h-full bg-[#EAF5F0] w-0"></div>
           </div>
           <span className="text-[12px] text-text-grey">0 / 100000</span>
        </div>
      </div>
      
      <h3 className="text-[16px] font-bold text-text-dark mb-2">Daily Incentive Bonus {date}</h3>
      <p className="text-[13px] text-text-grey/90 leading-snug mb-6">
        Participate in daily trading activities. Depending on your total daily trading amount, you can claim rewards the next day according to the configured rules.
      </p>

      <div className="flex justify-between items-end mt-4">
        <div className="flex items-center gap-1.5 bg-white">
          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white">
             <Star size={12} fill="currentColor" />
          </div>
          <span className="font-bold text-text-dark text-[15px]">0</span>
        </div>
        
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1 text-primary cursor-pointer hover:opacity-80">
          <span className="text-[12px] font-bold">Check Task Rules</span>
          <div className="border border-primary/30 rounded-sm p-[1px]">
             <Info size={10} className="text-primary/70" />
          </div>
        </div>

        <button 
          className={`px-5 py-1.5 rounded-full text-[13px] font-bold transition-all
            ${isToday 
              ? 'bg-primary text-white shadow-sm hover:scale-105 active:scale-95' 
              : 'bg-[#95D4B2] text-white/90 scale-95'}`}
        >
          {status}
        </button>
      </div>
    </div>
  );
}

function TeamCard() {
  return (
    <div className="bg-white rounded-[16px] p-5 shadow-sm border border-border-light relative overflow-hidden">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[11px] font-bold tracking-wider text-[#A5A0CE]">•INVITE</span>
        <span className="text-[12px] text-text-grey">0 invited</span>
      </div>
      
      <p className="text-[13px] text-text-grey/90 leading-snug mb-8 mt-4">
        Invite friends to complete the newbie task and get rewarded automatically.
      </p>

      <div className="flex justify-between items-end mt-4">
        <div className="flex items-center gap-1.5 bg-white">
          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white">
             <Star size={12} fill="currentColor" />
          </div>
          <span className="font-bold text-text-dark text-[15px]">0</span>
        </div>

        <button className="px-6 py-1.5 bg-primary text-white rounded-full text-[13px] font-bold shadow-sm hover:scale-105 active:scale-95 transition-transform">
          Invite
        </button>
      </div>
    </div>
  );
}
