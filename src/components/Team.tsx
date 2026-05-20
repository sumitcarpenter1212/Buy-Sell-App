import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Copy, Send, Facebook, MessageCircle, Link2 } from 'lucide-react';
import { useApp } from '../store';

export function Team() {
  const { setView } = useApp();
  const inviteCode = "lbc3Pr";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(inviteCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLink = `https://binpay.app/invite?code=${inviteCode}`;

  const handleShare = (platform: string) => {
    switch (platform) {
      case 'telegram':
        window.open(`https://t.me/share/url?url=${encodeURIComponent(shareLink)}&text=${encodeURIComponent('Join me on Binpay!')}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent('Join me on Binpay! ' + shareLink)}`, '_blank');
        break;
      case 'link':
        navigator.clipboard.writeText(shareLink);
        alert('Invite link copied to clipboard!');
        break;
    }
  };

  return (
    <motion.div 
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="min-h-screen bg-[#F7F9FC] flex flex-col relative z-50 overflow-y-auto"
    >
      <div className="h-[60px] flex items-center justify-center relative bg-[#F7F9FC] sticky top-0 z-20">
        <button 
          onClick={() => setView('home')}
          className="absolute left-4 p-2 text-primary active:bg-primary/10 rounded-full transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-[20px] font-bold text-primary">Team</h1>
      </div>

      <div className="p-4 flex flex-col gap-4 pb-8">
        
        {/* Top Green Box */}
        <div className="bg-primary rounded-[20px] p-4 text-white text-center shadow-md">
          <p className="text-[14px] text-white/90 font-medium mb-1 tracking-wide">My Total Commissions:</p>
          <p className="text-[34px] font-bold mb-4 tracking-tight">+0.00</p>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white text-text-dark rounded-[12px] py-3 flex flex-col items-center">
              <span className="text-[11px] text-text-grey mb-1">Commissions Yesterday</span>
              <span className="font-bold text-primary text-[15px]">+0.00</span>
            </div>
            <div className="bg-white text-text-dark rounded-[12px] py-3 flex flex-col items-center">
              <span className="text-[11px] text-text-grey mb-1">Total Team Members</span>
              <span className="font-bold text-primary text-[15px]">+0</span>
            </div>
            <div className="bg-white text-text-dark rounded-[12px] py-3 flex flex-col items-center">
              <span className="text-[11px] text-text-grey mb-1">Commissions Today</span>
              <span className="font-bold text-primary text-[15px]">+0.00</span>
            </div>
            <div className="bg-white text-text-dark rounded-[12px] py-3 flex flex-col items-center">
              <span className="text-[11px] text-text-grey mb-1">Total Team Deposit</span>
              <span className="font-bold text-primary text-[15px]">+0.00</span>
            </div>
          </div>
        </div>

        {/* Invitation Section */}
        <div className="mt-2">
          <div className="bg-primary inline-block px-5 py-2 rounded-t-[12px] text-white font-bold text-[15px] -mb-1 relative z-10" style={{ clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0 100%)', paddingRight: '2.5rem' }}>
            Invitation
          </div>
          <div className="bg-primary rounded-[16px] rounded-tl-none pt-0 shadow-sm relative z-0 flex flex-col pt-[2px]">
            <div className="px-5 py-3 flex justify-between items-center text-white">
              <span className="text-[20px] font-bold tracking-wide">Link</span>
              <div className="flex items-center gap-2 cursor-pointer active:opacity-70 transition-opacity bg-primary/20 p-1.5 rounded-lg border border-white/10" onClick={handleCopy}>
                <span className="text-[16px]">{copied ? 'Copied' : inviteCode}</span>
                <Copy size={16} />
              </div>
            </div>
            <div className="bg-white rounded-[14px] p-5 m-[2px] mt-0">
              <p className="font-bold text-text-dark text-[15px] mb-4 text-center">New Team Members:</p>
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-primary/5 rounded-[12px] p-3 md:p-4 border border-primary/20 shadow-[inset_0_2px_10px_rgba(36,156,115,0.02)]">
                   <h3 className="text-primary font-bold text-[18px] mb-3 text-center tracking-wide">Level.B</h3>
                   <div className="flex justify-between text-[12px] text-text-dark mb-1.5">
                     <span className="text-text-grey">Today:</span>
                     <span className="font-bold">0</span>
                   </div>
                   <div className="flex justify-between text-[12px] text-text-dark">
                     <span className="text-text-grey">Yesterday:</span>
                     <span className="font-bold">0</span>
                   </div>
                 </div>
                 <div className="bg-primary/5 rounded-[12px] p-3 md:p-4 border border-primary/20 shadow-[inset_0_2px_10px_rgba(36,156,115,0.02)]">
                   <h3 className="text-primary font-bold text-[18px] mb-3 text-center tracking-wide">Level.C</h3>
                   <div className="flex justify-between text-[12px] text-text-dark mb-1.5">
                     <span className="text-text-grey">Today:</span>
                     <span className="font-bold">0</span>
                   </div>
                   <div className="flex justify-between text-[12px] text-text-dark">
                     <span className="text-text-grey">Yesterday:</span>
                     <span className="font-bold">0</span>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Share APP to */}
        <div className="bg-white rounded-[16px] p-5 shadow-sm border border-border-light mt-1">
          <h3 className="font-bold text-text-dark text-[18px] mb-5 tracking-tight">Share APP to</h3>
          <div className="flex justify-around items-center">
            <ShareItem onClick={() => handleShare('telegram')} icon={<Send className="text-white translate-x-[-1px] translate-y-[1px]" size={24} />} label="Telegram" bg="bg-[#2AABEE]" />
            <ShareItem onClick={() => handleShare('facebook')} icon={<Facebook className="text-white" fill="white" strokeWidth={0} size={28} />} label="Facebook" bg="bg-[#1877F2]" />
            <ShareItem onClick={() => handleShare('whatsapp')} icon={<MessageCircle className="text-white" size={26} fill="currentColor" />} label="Whatsapp" bg="bg-[#25D366]" />
            <ShareItem onClick={() => handleShare('link')} icon={<Link2 className="text-white" strokeWidth={2.5} size={22} />} label="Copy link" bg="bg-[#9B51E0]" />
          </div>
        </div>
        
        {/* Commissions / Deposit */}
        <div className="mt-1">
          <div className="bg-primary inline-block px-5 py-2 rounded-t-[12px] text-white font-bold text-[15px] -mb-1 relative z-10" style={{ clipPath: 'polygon(0 0, 93% 0, 100% 100%, 0 100%)', paddingRight: '2.5rem' }}>
            Commissions / Deposit
          </div>
          <div className="bg-primary rounded-[16px] rounded-tl-none shadow-sm relative z-0 flex flex-col">
            <div className="bg-white rounded-[14px] p-5 m-[2px] mt-0 border-t-0 shadow-[0_4px_10px_rgba(0,0,0,0.02)]">
              <div className="flex justify-between items-center mb-4">
                <span className="text-primary font-bold text-[17px] tracking-wide">Level.B</span>
                <span className="text-text-grey font-medium text-[15px]">0.00/0.00</span>
              </div>
              <div className="flex justify-between items-center mb-5">
                <span className="text-primary font-bold text-[17px] tracking-wide">Level.C</span>
                <span className="text-text-grey font-medium text-[15px]">0.00/0.00</span>
              </div>
              <button className="text-[#3B82F6] text-[13px] underline hover:opacity-80 decoration-[1.5px] underline-offset-2">View details&gt;</button>
            </div>
          </div>
        </div>

        {/* Performance */}
        <div className="bg-white rounded-[16px] p-5 shadow-sm border border-border-light relative mb-6 mt-1">
           <div className="flex justify-between items-center mb-8">
             <h3 className="font-bold text-[18px] text-text-dark tracking-tight">Performance</h3>
             <div className="flex bg-[#F3F5F7] rounded-full p-1 text-[12px]">
                <button className="px-4 py-1.5 rounded-full text-text-grey font-medium hover:text-text-dark transition-colors">Day</button>
                <button className="px-4 py-1.5 rounded-full text-text-grey font-medium hover:text-text-dark transition-colors">Week</button>
                <button className="px-4 py-1.5 rounded-full bg-white text-primary font-bold shadow-sm">Month</button>
             </div>
           </div>
           
           {/* Chart Placeholder */}
           <div className="relative pt-2 pr-2 pb-2">
             {[4,3,2,1,0].map((num) => (
               <div key={num} className="flex items-center text-text-grey text-[12px] h-[36px]">
                 <span className="w-4 font-medium opacity-80">{num}</span>
                 <div className="flex-1 h-[1px] bg-border-light ml-3"></div>
               </div>
             ))}
           </div>
        </div>

      </div>
    </motion.div>
  );
}

function ShareItem({ icon, label, bg, onClick }: { icon: React.ReactNode, label: string, bg: string, onClick?: () => void }) {
  return (
    <div onClick={onClick} className="flex flex-col items-center justify-center gap-2 cursor-pointer group active:scale-95 transition-transform">
      <div className={`w-[60px] h-[60px] ${bg} rounded-[20px] flex items-center justify-center shadow-sm border border-black/5 group-hover:scale-105 transition-transform`}>
        {icon}
      </div>
      <span className="text-[12px] text-text-dark font-medium">{label}</span>
    </div>
  );
}

