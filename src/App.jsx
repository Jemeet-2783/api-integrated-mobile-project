import React from 'react';
import { 
  User, 
  Mail, 
  Lock, 
  Search, 
  Home as HomeIcon, 
  Heart, 
  Bell, 
  Settings, 
  ChevronLeft, 
  Star,
  MapPin,
  Clock,
  ArrowRight,
  TrendingUp,
  CreditCard,
  LogOut,
  Cloud,
  Thermometer,
  Wind,
  Smartphone,
  Info,
  HelpCircle
} from 'lucide-react';

const MobileFrame = ({ children }) => (
  <div className="mobile-frame">
    <div className="status-bar">
      <span>9:41</span>
      <div className="notch"></div>
    </div>
    <div className="screen-content">
      {children}
    </div>
  </div>
);

const BottomNav = ({ active }) => (
  <div className="bottom-nav">
    <HomeIcon size={24} color={active === 'home' ? '#6366f1' : '#64748b'} />
    <Heart size={24} color={active === 'fav' ? '#6366f1' : '#64748b'} />
    <Bell size={24} color={active === 'notif' ? '#6366f1' : '#64748b'} />
    <User size={24} color={active === 'profile' ? '#6366f1' : '#64748b'} />
  </div>
);

const APIDataScreen = () => (
  <MobileFrame>
    <div className="home-header">
      <h1>Weather API</h1>
      <Cloud size={24} color="#6366f1" />
    </div>
    {[
      { city: 'London', temp: '15°C', status: 'Cloudy', icon: Cloud },
      { city: 'New York', temp: '22°C', status: 'Sunny', icon: Thermometer },
      { city: 'Tokyo', temp: '18°C', status: 'Windy', icon: Wind }
    ].map(item => (
      <div className="api-card" key={item.city}>
        <div className="api-icon"><item.icon size={24} /></div>
        <div style={{ flex: 1 }}><h3>{item.city}</h3><p>{item.status}</p></div>
        <div>{item.temp}</div>
      </div>
    ))}
  </MobileFrame>
);

const SettingsMenuScreen = () => (
  <MobileFrame>
    <h1>Settings</h1>
    <div className="settings-list">
      {[
        { icon: User, label: 'Account', sub: 'Privacy, Security' },
        { icon: Lock, label: 'Privacy', sub: 'Control who sees profile' },
        { icon: Bell, label: 'Notifications', sub: 'Alert tones' }
      ].map((item, index) => (
        <div className="settings-item" key={index}>
          <div className="api-icon" style={{ width: '40px', height: '40px' }}><item.icon size={20} /></div>
          <div style={{ flex: 1 }}><b>{item.label}</b><p>{item.sub}</p></div>
          <ArrowRight size={18} />
        </div>
      ))}
    </div>
  </MobileFrame>
);

const NotificationScreen = () => (
  <MobileFrame>
    <h1>Notifications</h1>
    {[
      { title: 'New Trip Alert', msg: 'Someone liked your photo!', time: '2m ago' },
      { title: 'System Update', msg: 'Version 2.4 is out', time: '1h ago' }
    ].map((item, i) => (
      <div className="notif-item" key={i}>
        <div className="notif-content"><b>{item.title}</b><p>{item.msg}</p><span>{item.time}</span></div>
      </div>
    ))}
  </MobileFrame>
);

function App() {
  return (
    <div className="showcase-grid">
      <APIDataScreen />
      <SettingsMenuScreen />
      <NotificationScreen />
    </div>
  );
}

export default App;
