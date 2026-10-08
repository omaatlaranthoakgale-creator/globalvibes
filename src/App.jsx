const categories = ['All', 'Trending', 'Music', 'Gaming', 'Travel', 'Live'];

const navItems = [
  { label: 'Home', active: true, icon: '⌂' },
  { label: 'Search', icon: '⌕' },
  { label: 'Create', icon: '+' },
  { label: 'Inbox', icon: '◫', badge: 3 },
  { label: 'Profile', icon: '◉' }
];

function App() {
  return (
    <div className="app-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <div className="brand-hero">
        <div className="back-arrow">←</div>
        <div className="brand-wordmark" aria-label="GlobalVibes brand">
          <span className="brand-global">Global</span>
          <span className="brand-vibes">Vibes</span>
        </div>
        <div className="brand-subtitle">Beautiful • Modern • Connected</div>
      </div>

      <div className="phone-stack">
        <div className="mini-phone phone-left">
          <div className="mini-screen">
            <div className="mini-avatar" />
            <div className="mini-content" />
          </div>
        </div>

        <div className="mini-phone phone-right">
          <div className="mini-screen">
            <div className="mini-avatar" />
            <div className="mini-content" />
          </div>
        </div>
      </div>

      <div className="phone-frame">
        <div className="phone-screen">
          <div className="status-bar">
            <span>9:41</span>
            <div className="status-icons">
              <span className="signal" />
              <span className="wifi" />
              <span className="battery" />
            </div>
          </div>

          <header className="app-header">
            <div className="brand-block">
              <h1>GlobalVibes</h1>
            </div>
            <div className="header-icons">
              <button className="icon-button search-btn" aria-label="Search">
                <span>⌕</span>
              </button>
              <div className="notification-wrap">
                <button className="icon-button bell-btn" aria-label="Notifications">
                  <span>◔</span>
                </button>
                <span className="notification-badge">3</span>
              </div>
              <div className="profile-avatar" aria-label="Profile" />
            </div>
          </header>

          <nav className="chip-row" aria-label="Categories">
            {categories.map((item, index) => (
              <button key={item} className={index === 0 ? 'chip active' : 'chip'}>
                {item}
              </button>
            ))}
          </nav>

          <main className="feed">
            <div className="video-card">
              <div className="video-thumb image-one">
                <span className="duration">19:55</span>
              </div>
              <div className="video-info">
                <h2>Kgosi | School Days Vlog</h2>
                <p>Kgosi • 1.4M views • 1 day ago</p>
              </div>
            </div>

            <div className="video-card">
              <div className="video-thumb image-two">
                <span className="duration">09:55</span>
              </div>
              <div className="video-info">
                <h2>Jaden | Road Trip &amp; Beats</h2>
                <p>Jaden • 876K views • 4 hours ago</p>
              </div>
            </div>

            <div className="video-card compact">
              <div className="video-thumb image-three">
                <span className="duration">15:45</span>
              </div>
              <div className="video-info">
                <h2>Best Wireless Earbuds 2024 Review</h2>
                <p>TechLoop • 540K views • 3 days ago</p>
              </div>
            </div>

            <div className="video-card compact">
              <div className="video-thumb image-four">
                <span className="duration">22:10</span>
              </div>
              <div className="video-info">
                <h2>Relaxing Forest Sounds &amp; Birds</h2>
                <p>NatureCalm • 210K views • 5 days ago</p>
              </div>
            </div>
          </main>

          <footer className="bottom-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <div
                key={item.label}
                className={item.active ? 'nav-item active' : 'nav-item'}
              >
                {item.label === 'Create' ? (
                  <div className="create-button">+</div>
                ) : (
                  <span className="nav-icon">{item.icon}</span>
                )}
                {item.label === 'Create' ? null : <span>{item.label}</span>}
                {item.badge ? <span className="nav-badge">{item.badge}</span> : null}
              </div>
            ))}
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
