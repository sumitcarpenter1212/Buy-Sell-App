import React, { useState } from 'react';
import { Home as HomeIcon, CreditCard, PieChart, Smile, Wallet, X, Send } from 'lucide-react';
import { useApp } from '../store';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: LayoutProps) {
  const { view, setView } = useApp();
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-app flex flex-col">
      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto pb-24 hide-scrollbar">
        {children}
      </div>

      {/* Floating Chat Bot */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-[96px] right-6 w-14 h-14 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center justify-center z-40 border-2 border-primary/10"
      >
        <span className="text-[28px] relative">
          🤖
           <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
        </span>
      </motion.button>

      {/* Chat Bot Modal */}
      <AnimatePresence>
        {isChatOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-[55] md:hidden"
              onClick={() => setIsChatOpen(false)}
            />
            <motion.div
              initial={{ y: 200, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 200, opacity: 0, scale: 0.9 }}
              className="fixed bottom-[96px] right-4 left-4 md:left-auto md:w-96 bg-white rounded-[24px] shadow-2xl border border-border-light flex flex-col z-[60] overflow-hidden"
              style={{ height: '450px', maxHeight: 'calc(100vh - 120px)' }}
            >
              <div className="bg-gradient-to-r from-primary to-[#166B48] text-white px-5 py-4 flex justify-between items-center">
                <div className="font-bold flex items-center gap-2 text-[16px]">
                  <span className="text-xl">🤖</span> AI Assistant
                </div>
                <button onClick={() => setIsChatOpen(false)} className="hover:bg-white/20 p-1.5 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>
              <div className="flex-1 p-5 overflow-y-auto bg-bg-app flex flex-col gap-4">
                <div className="bg-white p-4 rounded-2xl rounded-tl-sm border border-border-light shadow-sm self-start max-w-[85%] text-[14px] text-text-dark">
                  Hello! I am your Binpay AI assistant. How can I help you today?
                </div>
              </div>
              <div className="p-4 bg-white border-t border-border-light flex gap-3">
                <input type="text" placeholder="Type your message..." className="flex-1 bg-bg-app border border-border-light rounded-full px-5 outline-none focus:border-primary focus:ring-1 focus:ring-primary text-[14px]" />
                <button className="w-11 h-11 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0 hover:scale-105 active:scale-95 transition-transform shadow-md">
                  <Send size={18} className="translate-x-[-1px] translate-y-[1px]" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 h-[80px] bg-white rounded-t-[24px] shadow-[0_-4px_24px_rgba(0,0,0,0.06)] border-t border-border-light flex justify-between items-center px-4 z-50">
        
        <NavItem 
          icon={<HomeIcon size={24} />} 
          label="Home" 
          isActive={view === 'home'} 
          onClick={() => setView('home')} 
        />
        
        <NavItem 
          icon={<CreditCard size={24} />} 
          label="Payment" 
          isActive={view === 'payment'} 
          onClick={() => setView('payment')} 
        />

        {/* Center FAB (Tool / Wallet) */}
        <div className="relative -top-6 flex items-center justify-center w-[72px] h-[72px] px-2 outline-none tap-highlight-transparent" onClick={() => setView('tool')}>
            <motion.div 
              whileTap={{ scale: 0.9 }}
              className={`w-[64px] h-[64px] rounded-full flex items-center justify-center text-white cursor-pointer shadow-[0_8px_16px_rgba(245,166,35,0.4)] transition-colors
                ${view === 'tool' ? 'bg-primary' : 'bg-accent-yellow'}`}
            >
              <Wallet size={28} />
            </motion.div>
        </div>

        <NavItem 
          icon={<PieChart size={24} />} 
          label="Statistics" 
          isActive={view === 'statistics'} 
          onClick={() => setView('statistics')} 
        />
        
        <NavItem 
          icon={<Smile size={24} />} 
          label="My" 
          isActive={view === 'my'} 
          onClick={() => setView('my')} 
        />

      </div>
    </div>
  );
}

function NavItem({ icon, label, isActive, onClick }: { icon: React.ReactNode, label: string, isActive: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-16 h-full gap-1 transition-colors
        ${isActive ? 'text-primary opacity-100' : 'text-text-grey opacity-50 hover:text-text-dark/70 hover:opacity-80'}`}
    >
      <div className={`transition-transform duration-200 ${isActive ? 'scale-110' : ''}`}>
        {icon}
      </div>
      <span className={`text-[10px] font-bold`}>
        {label}
      </span>
    </button>
  );
}
