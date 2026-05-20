import { AnimatePresence } from 'motion/react';
import React from 'react';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { MainLayout } from './components/MainLayout';
import { MyAsset } from './components/MyAsset';
import { Payment } from './components/Payment';
import { Register } from './components/Register';
import { ForgotPassword } from './components/ForgotPassword';
import { Splash } from './components/Splash';
import { Statistics } from './components/Statistics';
import { Tool } from './components/Tool';
import { Integral } from './components/Integral';
import { PinCode } from './components/PinCode';
import { Service } from './components/Service';
import { Message } from './components/Message';
import { USDT } from './components/USDT';
import { Task } from './components/Task';
import { Team } from './components/Team';
import { Order } from './components/Order';
import { Withdrawal } from './components/Withdrawal';
import { Deposit } from './components/Deposit';
import { Notifications } from './components/Notifications';
import { AppProvider, useApp } from './store';

function AppContent() {
  const { view } = useApp();

  return (
    <AnimatePresence mode="wait">
      {view === 'splash' && <Splash key="splash" />}
      {view === 'login' && <Login key="login" />}
      {view === 'register' && <Register key="register" />}
      {view === 'forgot_password' && <ForgotPassword key="forgot_password" />}
      {view === 'integral' && <Integral key="integral" />}
      {view === 'pin' && <PinCode key="pin" />}
      {view === 'service' && <Service key="service" />}
      {view === 'message' && <Message key="message" />}
      {view === 'usdt' && <USDT key="usdt" />}
      {view === 'task' && <Task key="task" />}
      {view === 'team' && <Team key="team" />}
      {view === 'order' && <Order key="order" />}
      {view === 'withdrawal' && <Withdrawal key="withdrawal" />}
      {view === 'deposit' && <Deposit key="deposit" />}
      {view === 'notifications' && <Notifications key="notifications" />}
      
      {(view === 'home' || view === 'payment' || view === 'tool' || view === 'statistics' || view === 'my') && (
        <MainLayout>
          {view === 'home' && <Home />}
          {view === 'payment' && <Payment />}
          {view === 'tool' && <Tool />}
          {view === 'statistics' && <Statistics />}
          {view === 'my' && <MyAsset />}
        </MainLayout>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
