import React, { useState } from 'react';
import { User as UserIcon, Lock, Phone, Mail, Link as LinkIcon, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { useApp } from '../store';
import { motion } from 'motion/react';

export function Register() {
  const { setView, login } = useApp();
  const [showPassword, setShowPassword] = useState(false);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inviteCode, setInviteCode] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to local storage
    const usersStr = localStorage.getItem('sathipay_users');
    let registeredUsers = [];
    if (usersStr) {
      registeredUsers = JSON.parse(usersStr);
    }

    const newUser = {
      id: Math.floor(100000 + Math.random() * 900000).toString(),
      name,
      email,
      password,
      inviteCode
    };

    registeredUsers.push(newUser);
    localStorage.setItem('sathipay_users', JSON.stringify(registeredUsers));

    // Instead of redirecting to login, just login right away!
    login({ id: newUser.id, email: newUser.email, name: newUser.name, balance: 0 });
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
        <h1 className="text-[20px] font-semibold text-primary">Register</h1>
      </div>

      {/* Form Section */}
      <div className="flex-1 px-6 pt-6 flex flex-col items-center">
        <form onSubmit={handleRegister} className="w-full max-w-sm flex flex-col space-y-4">
          
          {/* Username Input */}
          <div className="relative flex items-center">
            <div className="absolute left-4 text-primary">
              <UserIcon size={20} />
            </div>
            <input 
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="User Name"
              className="w-full h-[56px] pl-12 pr-4 bg-white border border-border-light rounded-[14px] outline-none focus:border-primary text-[16px]"
            />
          </div>

          {/* Email Input */}
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
              required
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

          {/* Invite Code Input */}
          <div className="relative flex items-center">
            <div className="absolute left-4 text-primary">
              <LinkIcon size={20} />
            </div>
            <input 
              type="text"
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value)}
              placeholder="Invite Code (Optional)"
              className="w-full h-[56px] pl-12 pr-4 bg-white border border-border-light rounded-[14px] outline-none focus:border-primary text-[16px]"
            />
          </div>

          {/* Spacer */}
          <div className="h-4"></div>

          {/* Sign Up Button */}
          <button 
            type="submit"
            className="w-full h-[52px] bg-primary rounded-full text-white font-semibold text-[16px] shadow-[0_8px_16px_rgba(30,139,94,0.3)] active:scale-[0.98] transition-transform"
          >
            Sign Up
          </button>

        </form>
      </div>
    </motion.div>
  );
}
