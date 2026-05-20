import React from 'react';
import { motion } from 'motion/react';
import { useApp } from '../store';
import { CreditCard, Banknote, Repeat, Wallet, Gift, HeadphonesIcon, MessageSquare, ShieldCheck } from 'lucide-react';

export function MyAsset() {
  const { logout, setView } = useApp();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-6 pt-[44px]"
    >
      <div className="flex items-center justify-center px-4 pb-4">
        <h1 className="text-[22px] font-bold text-primary">My Asset</h1>
      </div>

      <div className="px-4 mb-8">
        <div className="bg-white rounded-[24px] shadow-sm border border-border-light p-6 relative pb-10">
          
          {/* Top 3 Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-bg-app rounded-[14px] p-3 flex flex-col items-center text-center">
              <div className="text-success mb-1"><CreditCard size={20}/></div>
              <span className="text-[10px] text-text-grey uppercase font-bold tracking-wider">Deposit</span>
              <span className="text-[16px] font-bold mt-1 text-primary">₹ 0</span>
            </div>
            
            <div className="bg-bg-app rounded-[14px] p-3 flex flex-col items-center text-center">
               <div className="text-accent-yellow mb-1"><Banknote size={20}/></div>
               <span className="text-[10px] text-text-grey uppercase font-bold tracking-wider">Withdraw</span>
               <span className="text-[16px] font-bold mt-1 text-primary">₹ 0</span>
            </div>

            <div className="bg-bg-app rounded-[14px] p-3 flex flex-col items-center text-center">
              <div className="text-accent-blue mb-1"><Repeat size={20}/></div>
              <span className="text-[10px] text-text-grey uppercase font-bold tracking-wider">Commission</span>
              <span className="text-[16px] font-bold mt-1 text-primary">₹ 0</span>
            </div>
          </div>

          {/* Grid Links */}
          <div className="grid grid-cols-3 gap-y-6 pt-2">
            <LinkItem icon={<Wallet size={24} />} label="Wallet" onClick={() => setView('tool')} />
            <LinkItem icon={<Gift size={24} />} label="Integral" onClick={() => setView('integral')} />
            <LinkItem icon={<HeadphonesIcon size={24} />} label="Service" onClick={() => setView('service')} />
            <LinkItem icon={<MessageSquare size={24} />} label="Message" onClick={() => setView('message')} />
            <LinkItem icon={<ShieldCheck size={24} />} label="Pin" onClick={() => setView('pin')} />
          </div>

          {/* Version */}
          <div className="absolute bottom-4 right-4 text-[11px] text-text-grey">
            v1.0.4
          </div>
        </div>
      </div>

      {/* Logout */}
      <div className="px-6">
        <button 
          onClick={logout}
          className="w-full h-[50px] bg-primary rounded-full text-white font-semibold text-[16px] active:scale-[0.98] transition-transform"
        >
          Logout
        </button>
      </div>
    </motion.div>
  );
}

function LinkItem({ icon, label, onClick }: { icon: React.ReactNode, label: string, onClick?: () => void }) {
  return (
    <div onClick={onClick} className="flex flex-col items-center justify-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
      <div className="w-14 h-14 bg-bg-app rounded-[16px] flex items-center justify-center text-primary">
        {icon}
      </div>
      <span className="text-[13px] font-medium text-text-dark">{label}</span>
    </div>
  );
}
