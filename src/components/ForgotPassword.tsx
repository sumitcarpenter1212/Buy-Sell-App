import React, { useState } from 'react';
import { Mail, ArrowLeft } from 'lucide-react';
import { useApp } from '../store';
import { motion } from 'motion/react';

export function ForgotPassword() {
  const { setView } = useApp();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && newPassword) {
      const usersStr = localStorage.getItem('sathipay_users');
      let registeredUsers = [];
      if (usersStr) {
        registeredUsers = JSON.parse(usersStr);
      }

      const userIndex = registeredUsers.findIndex((u: any) => u.email === email);
      
      if (userIndex !== -1) {
         registeredUsers[userIndex].password = newPassword;
         localStorage.setItem('sathipay_users', JSON.stringify(registeredUsers));
         setIsSubmitted(true);
         setError('');
      } else {
         setError('User with this email not found.');
      }
    }
  };

  return (
    <motion.div 
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      className="min-h-screen bg-bg-app flex flex-col pb-10"
    >
      {/* Header */}
      <div className="h-[60px] flex items-center justify-center relative bg-bg-app z-10 px-4 mt-8">
        <button 
          onClick={() => setView('login')}
          className="absolute left-4 p-2 text-primary active:bg-primary/10 rounded-full"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-[20px] font-semibold text-primary">Reset Password</h1>
      </div>

      {/* Form Section */}
      <div className="flex-1 px-6 pt-10 flex flex-col items-center">
        {isSubmitted ? (
          <div className="text-center bg-white p-6 rounded-[20px] shadow-sm border border-border-light w-full max-w-sm">
             <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center text-primary mx-auto mb-4">
               <Mail size={32} />
             </div>
             <h2 className="text-[20px] font-bold text-text-dark mb-2">Password Reset Successful</h2>
             <p className="text-[14px] text-text-grey mb-6">
                Your password has been successfully updated. You can now login.
             </p>
             <button 
                onClick={() => setView('login')}
                className="w-full py-3 bg-primary rounded-full text-white font-bold text-[16px] shadow-[0_4px_10px_rgba(30,139,94,0.3)] active:scale-[0.98] transition-transform"
             >
               Back to Login
             </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col space-y-6">
            
            <p className="text-[14px] text-text-grey text-center mb-2 px-4">
               Enter your registered email address and a new password to reset it.
            </p>

            {error && (
              <div className="text-red-500 text-[14px] text-center font-medium bg-red-50 p-2 rounded-md">
                {error}
              </div>
            )}

            {/* Email Input */}
            <div className="flex flex-col space-y-4">
              <div className="relative flex items-center">
                <div className="absolute left-4 text-primary">
                  <Mail size={20} />
                </div>
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full h-[56px] pl-12 pr-4 bg-white border border-border-light rounded-[14px] outline-none focus:border-primary text-[16px] shadow-sm"
                />
              </div>

               <div className="relative flex items-center">
                <div className="absolute left-4 text-primary">
                  <Mail size={20} />
                </div>
                <input 
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="New Password"
                  className="w-full h-[56px] pl-12 pr-4 bg-white border border-border-light rounded-[14px] outline-none focus:border-primary text-[16px] shadow-sm"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full h-[54px] bg-primary rounded-full text-white font-bold text-[16px] shadow-[0_8px_16px_rgba(30,139,94,0.3)] active:scale-[0.98] transition-transform flex items-center justify-center"
            >
              Update Password
            </button>
            
          </form>
        )}
      </div>
    </motion.div>
  );
}
