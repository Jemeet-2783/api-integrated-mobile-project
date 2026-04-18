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
  LogOut
} from 'lucide-react';

const MobileFrame = ({ children, title }) => (
  <div className="mobile-frame">
    <div className="status-bar">
      <span>9:41</span>
      <div className="notch"></div>
      <div style={{ display: 'flex', gap: '6px' }}>
        <div style={{ width: '16px', height: '10px', border: '1px solid currentColor' }}></div>
      </div>
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

const LoginScreen = () => (
  <MobileFrame>
    <div style={{ marginTop: '60px' }}>
      <h1>Welcome Back</h1>
      <p className="subtitle">Sign in to continue your journey</p>
      
      <div className="input-group">
        <label>Email Address</label>
        <div style={{ position: 'relative' }}>
          <Mail size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
          <input type="text" placeholder="name@example.com" style={{ paddingLeft: '48px' }} />
        </div>
      </div>

      <div className="input-group">
        <label>Password</label>
        <div style={{ position: 'relative' }}>
          <Lock size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
          <input type="password" placeholder="••••••••" style={{ paddingLeft: '48px' }} />
        </div>
      </div>

      <p style={{ textAlign: 'right', fontSize: '14px', color: '#6366f1', fontWeight: '500' }}>Forgot Password?</p>

      <button className="btn-primary">Sign In</button>

      <div className="login-footer">
        Don't have an account? <span>Sign Up</span>
      </div>
    </div>
  </MobileFrame>
);

const RegistrationScreen = () => (
  <MobileFrame>
    <div style={{ marginTop: '40px' }}>
      <h1>Create Account</h1>
      <p className="subtitle">Join our community of travelers</p>
      
      <div className="input-group">
        <label>Full Name</label>
        <div style={{ position: 'relative' }}>
          <User size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
          <input type="text" placeholder="John Doe" style={{ paddingLeft: '48px' }} />
        </div>
      </div>

      <div className="input-group">
        <label>Email Address</label>
        <div style={{ position: 'relative' }}>
          <Mail size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
          <input type="text" placeholder="name@example.com" style={{ paddingLeft: '48px' }} />
        </div>
      </div>

      <div className="input-group">
        <label>Password</label>
        <div style={{ position: 'relative' }}>
          <Lock size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
          <input type="password" placeholder="••••••••" style={{ paddingLeft: '48px' }} />
        </div>
      </div>

      <button className="btn-primary">Register Now</button>

      <div className="login-footer">
        Already have an account? <span>Sign In</span>
      </div>
    </div>
  </MobileFrame>
);

const HomeScreen = () => (
  <MobileFrame>
    <div className="home-header">
      <div>
        <p style={{ fontSize: '14px', color: '#64748b' }}>Explore</p>
        <h2 style={{ fontSize: '24px' }}>Bali, Indonesia</h2>
      </div>
      <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#fff', boxShadow: 'var(--shadow)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Bell size={20} />
      </div>
    </div>

    <div className="search-bar">
      <Search size={18} />
      <span>Search destinations...</span>
    </div>

    <div className="section-title">
      <h2>Popular Now</h2>
      <span>See All</span>
    </div>

    <div className="featured-card" style={{ backgroundImage: 'url("/bali.png")' }}>
      <div className="info">
        <h3>Ayana Resort</h3>
        <p style={{ fontSize: '12px', opacity: 0.9 }}>Jimbaran, Bali</p>
      </div>
    </div>

    <div className="section-title">
      <h2>Categories</h2>
    </div>

    <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '16px' }}>
      {['Beach', 'Mountain', 'Forest', 'City'].map(cat => (
        <div key={cat} style={{ padding: '8px 20px', background: cat === 'Beach' ? '#6366f1' : '#fff', color: cat === 'Beach' ? '#fff' : '#0f172a', borderRadius: '100px', fontSize: '14px', fontWeight: '500', boxShadow: 'var(--shadow)', whiteSpace: 'nowrap' }}>
          {cat}
        </div>
      ))}
    </div>

    <div style={{ marginTop: 'auto' }}>
      <BottomNav active="home" />
    </div>
  </MobileFrame>
);

const DetailScreen = () => (
  <div className="mobile-frame">
     <div className="status-bar" style={{ color: 'white' }}>
      <span>9:41</span>
      <div className="notch"></div>
      <div style={{ display: 'flex', gap: '6px' }}>
        <div style={{ width: '16px', height: '10px', border: '1px solid currentColor' }}></div>
      </div>
    </div>
    
    <div className="detail-hero" style={{ backgroundImage: 'url("/bali.png")' }}>
      <div className="back-btn">
        <ChevronLeft size={20} />
      </div>
    </div>

    <div className="detail-content">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1>Ayana Resort</h1>
          <div className="rating">
            <Star size={16} fill="#fbbf24" stroke="none" />
            <Star size={16} fill="#fbbf24" stroke="none" />
            <Star size={16} fill="#fbbf24" stroke="none" />
            <Star size={16} fill="#fbbf24" stroke="none" />
            <Star size={16} fill="#fbbf24" stroke="none" />
            <span style={{ color: '#64748b', marginLeft: '4px' }}>(4.8)</span>
          </div>
        </div>
        <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '12px', color: '#ef4444' }}>
          <Heart size={20} fill="#ef4444" stroke="none" />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', margin: '24px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#64748b' }}>
          <MapPin size={16} /> Jimbaran
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#64748b' }}>
          <Clock size={16} /> 20 min drive
        </div>
      </div>

      <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '15px' }}>
        Experience the ultimate luxury at Ayana Resort. Overlooking the turquoise waters of the Indian Ocean, this paradise offers world-class amenities...
      </p>

      <div style={{ marginTop: '24px' }}>
        <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Amenities</h3>
        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{ padding: '10px', background: '#f1f5f9', borderRadius: '10px', fontSize: '12px' }}>Free WiFi</div>
          <div style={{ padding: '10px', background: '#f1f5f9', borderRadius: '10px', fontSize: '12px' }}>Pool</div>
          <div style={{ padding: '10px', background: '#f1f5f9', borderRadius: '10px', fontSize: '12px' }}>Spa</div>
        </div>
      </div>
    </div>

    <div className="detail-footer">
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: '12px', color: '#64748b' }}>Price</p>
        <p style={{ fontSize: '20px', fontWeight: '700', color: '#6366f1' }}>$450/night</p>
      </div>
      <button className="btn-primary" style={{ flex: 2, marginTop: 0 }}>Book Now</button>
    </div>
  </div>
);

const ProfileScreen = () => (
  <MobileFrame>
    <div className="profile-header">
      <div className="profile-img" style={{ backgroundImage: 'url("/profile.png")' }}></div>
      <h2>Alex Johnson</h2>
      <p style={{ color: '#64748b', fontSize: '14px' }}>Professional Adventurer</p>

      <div className="stats">
        <div className="stat-item">
          <span className="stat-num">24</span>
          <span className="stat-label">Trips</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">1.2k</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">48</span>
          <span className="stat-label">Reviews</span>
        </div>
      </div>
    </div>

    <div style={{ flex: 1 }}>
      <div className="nav-item">
        <div className="icon"><Heart size={20} /></div>
        <div style={{ flex: 1, fontWeight: '500' }}>Favorites</div>
        <ChevronLeft size={20} style={{ transform: 'rotate(180deg)', color: '#cbd5e1' }} />
      </div>
      <div className="nav-item">
        <div className="icon"><CreditCard size={20} /></div>
        <div style={{ flex: 1, fontWeight: '500' }}>Payment Methods</div>
        <ChevronLeft size={20} style={{ transform: 'rotate(180deg)', color: '#cbd5e1' }} />
      </div>
      <div className="nav-item">
        <div className="icon"><Settings size={20} /></div>
        <div style={{ flex: 1, fontWeight: '500' }}>Settings</div>
        <ChevronLeft size={20} style={{ transform: 'rotate(180deg)', color: '#cbd5e1' }} />
      </div>
      <div className="nav-item">
        <div className="icon"><LogOut size={20} /></div>
        <div style={{ flex: 1, fontWeight: '500' }}>Logout</div>
        <ChevronLeft size={20} style={{ transform: 'rotate(180deg)', color: '#cbd5e1' }} />
      </div>
    </div>

    <BottomNav active="profile" />
  </MobileFrame>
);

function App() {
  return (
    <div className="showcase-container">
      <LoginScreen />
      <RegistrationScreen />
      <HomeScreen />
      <DetailScreen />
      <ProfileScreen />
    </div>
  );
}

export default App;
