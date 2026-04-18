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

const LoginScreen = () => {
  const [formData, setFormData] = React.useState({ email: '', password: '' });
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleLogin = () => {
    setError('');
    if (!formData.email || !formData.password) { setError('Please fill in all fields'); return; }
    setLoading(true);
    setTimeout(() => {
      if (formData.email !== 'admin@test.com' || formData.password !== '1234') {
        setError('Invalid email or password.');
        setLoading(false);
      } else { alert('Login Successful!'); setLoading(false); }
    }, 1000);
  };

  return (
    <MobileFrame>
      <div style={{ marginTop: '60px' }}>
        <h1>Welcome Back</h1>
        <p className="subtitle">Sign in to continue</p>
        {error && <div style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', padding: '12px', borderRadius: '12px', fontSize: '13px', marginBottom: '20px' }}>{error}</div>}
        <div className="input-group"><label>Email</label><input type="text" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="name@example.com" /></div>
        <div className="input-group"><label>Password</label><input type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} placeholder="••••••••" /></div>
        <button className="btn-primary" onClick={handleLogin}>{loading ? 'Authenticating...' : 'Sign In'}</button>
        <div className="login-footer">Don't have an account? <span>Sign Up</span></div>
      </div>
    </MobileFrame>
  );
};

const RegistrationScreen = () => {
  const [formData, setFormData] = React.useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = React.useState({});
  const [success, setSuccess] = React.useState(false);

  const handleSignup = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <MobileFrame>
      <div style={{ marginTop: '40px' }}>
        <h1>Create Account</h1>
        <p className="subtitle">Join our community</p>
        <div className="input-group">
          <label>Username</label>
          <input type="text" value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})} style={{ borderColor: errors.username ? '#ef4444' : '#e2e8f0' }} placeholder="johndoe123" />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="text" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ borderColor: errors.email ? '#ef4444' : '#e2e8f0' }} placeholder="name@example.com" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} style={{ borderColor: errors.password ? '#ef4444' : '#e2e8f0' }} placeholder="••••••••" />
        </div>
        <button className="btn-primary" onClick={handleSignup}>{success ? 'Account Created!' : 'Register Now'}</button>
        <div className="login-footer">Already have an account? <span>Sign In</span></div>
      </div>
    </MobileFrame>
  );
};

const HomeScreen = () => {
  const [favorites, setFavorites] = React.useState(() => JSON.parse(localStorage.getItem('favorites') || '[]'));
  const products = [
    { id: 1, name: 'Smart Watch', price: '$199', category: 'Gadgets', img: '/watch.png' },
    { id: 2, name: 'Headphones', price: '$299', category: 'Audio', img: '/bali.png' }
  ];
  const toggleFav = (e, id) => {
    e.stopPropagation();
    const newFavs = favorites.includes(id) ? favorites.filter(f => f !== id) : [...favorites, id];
    setFavorites(newFavs);
    localStorage.setItem('favorites', JSON.stringify(newFavs));
  };
  return (
    <MobileFrame>
      <div className="home-header">
        <h2 style={{ fontSize: '20px', fontWeight: '800' }}>ShopGo</h2>
        <Bell size={20} />
      </div>
      <div className="search-bar"><Search size={18} /><span>Search products...</span></div>
      <div className="section-title"><h2>Items ({favorites.length} Saved)</h2></div>
      {products.map(item => (
        <div className="api-card" key={item.id} onClick={() => alert('View Details')}>
          <div className="item-img" style={{ width: '60px', height: '60px', borderRadius: '12px', backgroundImage: `url(${item.img})` }}></div>
          <div style={{ flex: 1 }}><h3>{item.name}</h3><p style={{ color: '#6366f1' }}>{item.price}</p></div>
          <Heart size={20} fill={favorites.includes(item.id) ? '#ef4444' : 'none'} color={favorites.includes(item.id) ? '#ef4444' : '#cbd5e1'} onClick={(e) => toggleFav(e, item.id)} />
        </div>
      ))}
      <div style={{ marginTop: 'auto' }}><BottomNav active="home" /></div>
    </MobileFrame>
  );
};

const DetailScreen = () => (
  <div className="mobile-frame">
    <div className="detail-hero" style={{ backgroundImage: 'url("/watch.png")', height: '350px' }}>
      <div className="back-btn" onClick={() => alert('Back')}><ChevronLeft size={20} /></div>
    </div>
    <div className="detail-content">
      <h1 style={{ fontSize: '24px' }}>Smart Watch v4</h1>
      <p style={{ color: '#64748b', marginTop: '12px' }}>Next-gen wearable tech with a vibrant Always-On display.</p>
    </div>
    <div className="detail-footer"><p style={{ fontSize: '20px', fontWeight: '800', color: '#6366f1' }}>$199.00</p><button className="btn-primary" style={{ marginTop: 0 }}>Buy Now</button></div>
  </div>
);

const ProfileScreen = () => {
  const [userName, setUserName] = React.useState(() => localStorage.getItem('user_name') || 'Alex Johnson');
  const favCount = JSON.parse(localStorage.getItem('favorites') || '[]').length;
  return (
    <MobileFrame>
      <div className="profile-header">
        <div className="profile-img" style={{ backgroundImage: 'url("/profile.png")' }}></div>
        <h2 onClick={() => { const n = prompt('New Name:', userName); if(n){setUserName(n); localStorage.setItem('user_name', n);}}}>{userName}</h2>
        <p style={{ color: '#64748b', fontSize: '14px' }}>Tap name to edit</p>
      </div>
      <div className="nav-item"><div className="icon"><Heart size={20} /></div><div style={{ flex: 1 }}>My Favorites ({favCount})</div></div>
      <div style={{ marginTop: 'auto' }}><BottomNav active="profile" /></div>
    </MobileFrame>
  );
};

const APIDataScreen = () => {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json()).then(d => { setUsers(d.slice(0, 3)); setLoading(false); });
  }, []);
  return (
    <MobileFrame>
      <h1>Users API</h1>
      {loading ? <p>Loading...</p> : users.map(u => (
        <div className="api-card" key={u.id}><h3>{u.name}</h3></div>
      ))}
    </MobileFrame>
  );
};

const SettingsMenuScreen = () => (
  <MobileFrame>
    <h1>Settings</h1>
    <div className="settings-list">
      {[{ icon: User, label: 'Profile' }, { icon: Smartphone, label: 'Theme' }, { icon: LogOut, label: 'Logout' }].map((item, i) => (
        <div className="settings-item" key={i}><item.icon size={20} /><span>{item.label}</span><ArrowRight size={18} /></div>
      ))}
    </div>
  </MobileFrame>
);

const SettingsDetailScreen = () => {
  const [isSaving, setIsSaving] = React.useState(false);
  const [notif, setNotif] = React.useState(true);
  return (
    <MobileFrame>
      <h1>Preferences</h1>
      <div className="settings-item"><span>Notifications</span><div className={`switch ${notif ? 'active' : ''}`} onClick={() => setNotif(!notif)}></div></div>
      <button className="btn-primary" onClick={() => { setIsSaving(true); setTimeout(() => { setIsSaving(false); alert('Saved!'); }, 1000); }}>
        {isSaving ? 'Saving...' : 'Save Settings'}
      </button>
    </MobileFrame>
  );
};

const NotificationScreen = () => {
  const [notifs, setNotifs] = React.useState([
    { title: 'New Alert', msg: 'Trip liked!', time: '2m ago' }
  ]);

  const triggerTest = () => {
    alert('🔔 New Notification Received!');
    const newNotif = { 
      title: 'Demo Notification', 
      msg: 'This is a test notification trigger.', 
      time: 'Just now' 
    };
    setNotifs([newNotif, ...notifs]);
  };

  return (
    <MobileFrame>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1>Notifications</h1>
        <button onClick={triggerTest} style={{ fontSize: '10px', padding: '6px 12px', background: '#6366f1', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Test Trigger</button>
      </div>
      
      {notifs.map((item, i) => (
        <div className="notif-item" key={i} style={{ marginBottom: '16px' }}>
          <div>
            <b style={{ display: 'block' }}>{item.title}</b>
            <p style={{ margin: '4px 0', color: '#64748b' }}>{item.msg}</p>
            <span style={{ fontSize: '12px', color: '#94a3b8' }}>{item.time}</span>
          </div>
        </div>
      ))}
    </MobileFrame>
  );
};

function App() {
  return (
    <div className="showcase-grid">
      <LoginScreen /><RegistrationScreen /><HomeScreen /><DetailScreen /><ProfileScreen /><APIDataScreen /><SettingsMenuScreen /><SettingsDetailScreen /><NotificationScreen />
    </div>
  );
}

export default App;
