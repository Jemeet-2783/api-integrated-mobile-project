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

const APIDataScreen = () => {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch data');
        return res.json();
      })
      .then(data => {
        setUsers(data.slice(0, 5)); // Just take first 5
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <MobileFrame>
      <div className="home-header">
        <h1>Users API</h1>
        <div className="icon" style={{ background: '#eef2ff', padding: '10px', borderRadius: '12px' }}>
          <User size={24} color="#6366f1" />
        </div>
      </div>
      <p className="subtitle">Live data from JSONPlaceholder</p>
      
      {loading ? (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          <div style={{ width: '40px', height: '40px', border: '4px solid #f3f3f3', borderTop: '4px solid #6366f1', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
          <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
          <p style={{ color: '#64748b', fontSize: '14px' }}>Fetching from API...</p>
        </div>
      ) : error ? (
        <div style={{ padding: '20px', background: '#fef2f2', borderRadius: '16px', color: '#b91c1c', textAlign: 'center' }}>
          <p>Error: {error}</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {users.map(user => (
            <div className="api-card" key={user.id}>
              <div className="api-icon" style={{ borderRadius: '50%' }}>
                <div style={{ fontWeight: '700', fontSize: '18px' }}>{user.name.charAt(0)}</div>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '15px' }}>{user.name}</h3>
                <p style={{ fontSize: '12px', color: '#64748b' }}>{user.email}</p>
              </div>
              <ArrowRight size={16} color="#cbd5e1" />
            </div>
          ))}
        </div>
      )}
      
      <div style={{ marginTop: 'auto' }}><BottomNav active="home" /></div>
    </MobileFrame>
  );
};

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
