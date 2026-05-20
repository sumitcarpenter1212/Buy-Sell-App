import React, { useState } from 'react';
import { User as UserIcon, Lock, Eye, EyeOff } from 'lucide-react';
import { useApp } from '../store';
import { motion } from 'motion/react';

export function Login() {
  const { setView, login } = useApp();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (agreeTerms) {
      // Find registered users from localStorage
      const usersStr = localStorage.getItem('sathipay_users');
      let registeredUsers = [];
      if (usersStr) {
        registeredUsers = JSON.parse(usersStr);
      }

      const foundUser = registeredUsers.find((u: any) => u.email === email && u.password === password);
      
      if (foundUser || (email === 'user@example.com' && password === 'password123')) {
        // Successful login
        setError('');
        login({ id: foundUser?.id || '148645', email, name: foundUser?.name || 'Sumit1212', balance: 0 });
      } else {
        setError('Invalid Email or Password');
      }
    }
  };

  return (
    <motion.div 
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      className="min-h-screen bg-bg-app flex flex-col items-center pt-24 px-6 relative"
    >
      {/* Top Section */}
      <div className="flex flex-col items-center mb-10 w-full">
        {/* Logo Card */}
        <div className="flex items-center justify-center mb-6">
          <img src="/logo.png" alt="Binpay" className="w-28 h-28 object-contain rounded-full shadow-md" />
        </div>
        
        {/* App Name */}
        <p className="text-text-grey text-xs uppercase tracking-widest font-semibold">Your Smart Payment Companion</p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleLogin} className="w-full max-w-sm flex flex-col space-y-4">
        
        {error && (
          <div className="text-red-500 text-[14px] text-center mb-2 font-medium bg-red-50 p-2 rounded-md">
            {error}
          </div>
        )}

        {/* Email Input */}
        <div className="relative flex items-center">
          <div className="absolute left-4 text-primary">
            <UserIcon size={20} />
          </div>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full h-[56px] pl-12 pr-4 bg-white border border-border-light rounded-[14px] outline-none focus:border-primary text-[16px]"
          />
        </div>

        {/* Password Input */}
        <div className="relative flex items-center">
          <div className="absolute left-4 text-primary">
            <Lock size={20} />
          </div>
          <input 
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full h-[56px] pl-12 pr-12 bg-white border border-border-light rounded-[14px] outline-none focus:border-primary text-[16px]"
          />
          <button 
            type="button" 
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 text-primary/70"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Remember Me & Register Row */}
        <div className="flex justify-between items-center py-2 text-[14px]">
          <button 
            type="button" 
            onClick={() => setView('register')}
            className="text-primary underline decoration-primary font-medium"
          >
            Register
          </button>
          <label className="flex items-center gap-2 cursor-pointer text-text-dark/80">
            <div 
              className={`w-5 h-5 rounded-full border flex items-center justify-center box-border
                ${rememberMe ? 'border-primary' : 'border-border-light bg-white'}`}
              onClick={() => setRememberMe(!rememberMe)}
            >
              {rememberMe && <div className="w-3 h-3 bg-primary rounded-full" />}
            </div>
            Remember Me
          </label>
        </div>

        {/* Checkbox Row */}
        <div className="flex items-center gap-2 pt-2 pb-4 text-[13px] text-text-dark/80">
          <div 
            className={`w-5 h-5 rounded-[4px] border flex items-center justify-center flex-shrink-0 cursor-pointer
              ${agreeTerms ? 'bg-primary border-primary' : 'border-border-light bg-white'}`}
            onClick={() => setAgreeTerms(!agreeTerms)}
          >
            {agreeTerms && (
               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            )}
          </div>
          <span>
            Agree <a href="#" className="text-primary underline">"User Privacy Agreement"</a>
          </span>
        </div>

        {/* Sign In Button */}
        <button 
          type="submit"
          className="w-full py-4 bg-primary rounded-full text-white font-bold text-[16px] shadow-[0_8px_16px_rgba(30,139,94,0.3)] active:scale-[0.98] transition-transform flex items-center justify-center disabled:opacity-50 disabled:active:scale-100"
          disabled={!agreeTerms}
        >
          Sign In
        </button>

        {/* Forget Password */}
        <button 
          type="button" 
          onClick={() => setView('forgot_password')}
          className="text-primary underline decoration-primary font-medium text-[14px] mt-6 self-center"
        >
          Forget Password
        </button>

      </form>

      {/* Version Tag */}
      <div className="absolute bottom-6 right-6 text-[12px] text-text-grey">
        v1.0.0
      </div>
    </motion.div>
  );
}
