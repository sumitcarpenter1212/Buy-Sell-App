import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useApp } from '../store';

type OrderStatus = 'pending' | 'submitted' | 'success' | 'timeout' | 'all';

interface SellOrder {
  id: string;
  status: OrderStatus;
  amount: number;
  date: string;
}

export function Withdrawal() {
  const { setView } = useApp();
  const [activeTab, setActiveTab] = useState<OrderStatus>('all');
  
  // Empty data for now since image says "No orders"
  const [orders] = useState<SellOrder[]>([]);

  const filteredOrders = activeTab === 'all' 
    ? orders 
    : orders.filter(order => order.status === activeTab);

  const tabs: { id: OrderStatus; label: string }[] = [
    { id: 'pending', label: 'Pending' },
    { id: 'submitted', label: 'Submitted' },
    { id: 'success', label: 'Success' },
    { id: 'timeout', label: 'Timeout' },
    { id: 'all', label: 'All' },
  ];

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
        <h1 className="text-[20px] font-bold text-primary">Sell Orders</h1>
      </div>

      <div className="bg-white border-b border-border-light pt-2 overflow-x-auto scx">
        <div className="flex px-4 min-w-max gap-2 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-1.5 rounded-[8px] text-[14px] font-medium border transition-colors whitespace-nowrap
                ${activeTab === tab.id 
                  ? 'border-primary/20 bg-[#EAF5F0] text-primary' 
                  : 'border-border-light bg-white text-text-grey hover:bg-gray-50'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 flex-1">
        <AnimatePresence mode="wait">
          {filteredOrders.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-[12px] p-6 text-center font-bold text-[16px] text-text-dark shadow-sm border border-border-light"
            >
              No orders
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-3"
            >
              {filteredOrders.map(order => (
                <div key={order.id} className="bg-white p-4 rounded-[12px] shadow-sm border border-border-light flex justify-between items-center">
                  <div>
                    <div className="font-bold text-text-dark">₹{order.amount}</div>
                    <div className="text-[12px] text-text-grey mt-1">{order.date}</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-[12px] font-bold uppercase
                    ${order.status === 'success' ? 'bg-success/10 text-success' : ''}
                    ${order.status === 'pending' || order.status === 'submitted' ? 'bg-accent-yellow/10 text-accent-yellow' : ''}
                    ${order.status === 'timeout' ? 'bg-error/10 text-error' : ''}
                  `}>
                    {order.status}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Basic styles for hiding scrollbar if needed */}
      <style>{`
        .scx::-webkit-scrollbar {
          display: none;
        }
        .scx {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </motion.div>
  );
}
