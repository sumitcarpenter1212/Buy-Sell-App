import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { useApp } from '../store';

type DateFilter = '7 Days' | '30 Days' | '90 Days' | 'All';
type StatusFilter = 'All statuses' | 'Processing' | 'Submit' | 'Success' | 'Close';

export function Deposit() {
  const { setView } = useApp();
  const [dateFilter, setDateFilter] = useState<DateFilter>('30 Days');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('All statuses');
  
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);

  const dates: DateFilter[] = ['7 Days', '30 Days', '90 Days', 'All'];
  const statuses: StatusFilter[] = ['All statuses', 'Processing', 'Submit', 'Success', 'Close'];

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
        <h1 className="text-[20px] font-bold text-primary">Buy Orders</h1>
      </div>

      <div className="p-4">
        {/* Dropdowns Row */}
        <div className="flex gap-2 mb-4 relative z-30">
          {/* Date Dropdown */}
          <div className="flex-1 relative">
            <button 
              onClick={() => {
                setIsDateOpen(!isDateOpen);
                if (isStatusOpen) setIsStatusOpen(false);
              }}
              className="w-full bg-white border border-border-light rounded-[8px] h-10 px-3 flex items-center justify-center gap-1 shadow-sm text-[14px]"
            >
              <span className={isDateOpen ? 'text-primary' : 'text-text-dark'}>{dateFilter}</span>
              {isDateOpen ? <ChevronUp size={16} className="text-primary" /> : <ChevronDown size={16} className="text-text-grey" />}
            </button>
            
            {/* Date Popup */}
            <AnimatePresence>
              {isDateOpen && (
                <>
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setIsDateOpen(false)}
                    style={{ top: '60px' }}
                  />
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-transparent z-50 rounded-[8px]"
                  >
                    <div className="flex flex-col gap-2">
                       {dates.map(d => (
                         <div 
                           key={d} 
                           onClick={() => { setDateFilter(d); setIsDateOpen(false); }}
                           className="bg-white rounded-[8px] p-4 flex justify-between items-center shadow-sm"
                         >
                           <span className="text-[15px]">{d}</span>
                           {dateFilter === d && <Check size={20} className="text-primary" />}
                         </div>
                       ))}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Status Dropdown */}
          <div className="flex-1 relative">
            <button 
              onClick={() => {
                setIsStatusOpen(!isStatusOpen);
                if (isDateOpen) setIsDateOpen(false);
              }}
              className="w-full bg-white border border-border-light rounded-[8px] h-10 px-3 flex items-center justify-center gap-1 shadow-sm text-[14px]"
            >
              <span className={isStatusOpen ? 'text-primary' : 'text-text-dark'}>{statusFilter}</span>
              {isStatusOpen ? <ChevronUp size={16} className="text-primary" /> : <ChevronDown size={16} className="text-text-grey" />}
            </button>
            
            {/* Status Popup */}
            <AnimatePresence>
              {isStatusOpen && (
                <>
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setIsStatusOpen(false)}
                    style={{ top: '60px' }}
                  />
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-transparent z-50 rounded-[8px]"
                  >
                    <div className="flex flex-col gap-2">
                       {statuses.map(s => (
                         <div 
                           key={s} 
                           onClick={() => { setStatusFilter(s); setIsStatusOpen(false); }}
                           className="bg-white rounded-[8px] p-4 flex justify-between items-center shadow-sm"
                         >
                           <span className="text-[15px]">{s}</span>
                           {statusFilter === s && <Check size={20} className="text-primary" />}
                         </div>
                       ))}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Empty State */}
        <div className="mt-8 text-center text-text-grey text-[14px]">
          No data, pull down to refresh.
        </div>
      </div>
    </motion.div>
  );
}
