export type ViewState = 
  | 'splash' 
  | 'login' 
  | 'register'
  | 'forgot_password'
  | 'home' 
  | 'payment' 
  | 'tool' 
  | 'statistics' 
  | 'my'
  | 'integral'
  | 'pin'
  | 'service'
  | 'message'
  | 'usdt'
  | 'task'
  | 'team'
  | 'order'
  | 'withdrawal'
  | 'deposit'
  | 'notifications';

export interface User {
  id: string;
  email: string;
  name: string;
  balance: number;
}
