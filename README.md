:root {
  font-family: 'Inter', sans-serif;
  color: #f4f4ff;
  background: linear-gradient(180deg, #111827 0%, #0d1022 100%);
  line-height: 1.5;
  font-weight: 400;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

html, body, #root {
  margin: 0;
  min-height: 100%;
  min-width: 100%;
}

body {
  min-height: 100vh;
  background: radial-gradient(circle at top, rgba(126, 92, 255, 0.35), rgba(23, 22, 44, 0.92) 28%, #090d1f 60%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

button {
  font: inherit;
}

.app-shell {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0 20px;
}

.ambient {
  position: absolute;
  width: 650px;
  height: 760px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.45;
  z-index: 0;
}

.ambient-left {
  left: -180px;
  top: 40px;
  background: rgba(93, 94, 255, 0.38);
}

.ambient-right {
  right: -220px;
  bottom: -110px;
  background: rgba(164, 133, 255, 0.25);
}

.phone-stack {
  position: absolute;
  left: 50%;
  transform: translateX(-118%);
  top: 90px;
  display: flex;
  align-items: center;
  gap: 22px;
  z-index: 1;
}

.mini-phone {
  width: 180px;
  height: 760px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.95), rgba(9, 11, 24, 0.98));
  border-radius: 42px;
  border: 2px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 30px 70px rgba(5, 6, 15, 0.82);
  padding: 10px;
  position: relative;
}

.mini-phone::before {
  content: "";
  position: absolute;
  inset: 10px 8px auto 8px;
  height: 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.04);
}

.mini-screen {
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background: linear-gradient(180deg, rgba(17, 15, 28, 0.98), rgba(19, 19, 42, 0.96));
  position: relative;
  overflow: hidden;
}

.mini-avatar {
  position: absolute;
  left: 22px;
  top: 108px;
  width: 74px;
  height: 74px;
  border-radius: 50%;
  background: linear-gradient(135deg, #82a6ff, #c69bff);
  box-shadow: inset 0 0 0 3px rgba(255,255,255,0.18);
}

.mini-content {
  position: absolute;
  right: 18px;
  left: 18px;
  top: 230px;
  bottom: 30px;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
}

.phone-frame {
  position: relative;
  z-index: 2;
  width: 438px;
  height: 875px;
  border-radius: 58px;
  background: linear-gradient(180deg, #090d1a 0%, #050a17 100%);
  border: 2px solid rgba(143, 148, 179, 0.18);
  box-shadow: 0 28px 80px rgba(1, 2, 12, 0.75), inset 0 0 0 1px rgba(255,255,255,0.06);
  padding: 18px 18px 12px;
}

.phone-screen {
  height: 100%;
  border-radius: 42px;
  background: linear-gradient(180deg, rgba(10, 12, 25, 0.92), rgba(8, 10, 23, 0.98));
  position: relative;
  overflow: hidden;
  padding: 18px 18px 0;
}

.phone-screen::before {
  content: "";
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 118px;
  height: 22px;
  border-radius: 18px;
  background: rgba(255,255,255,0.02);
}

.status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 10px 12px;
  color: rgba(255, 255, 255, 0.95);
  font-size: 0.82rem;
  font-weight: 600;
}

.status-icons {
  display: flex;
  align-items: center;
  gap: 8px;
}

.signal, .wifi, .battery {
  display: inline-block;
  border-radius: 999px;
  background: rgba(255,255,255,0.88);
}

.signal {
  width: 18px;
  height: 10px;
  clip-path: polygon(0 100%, 16% 100%, 16% 62%, 32% 62%, 32% 34%, 48% 34%, 48% 14%, 64% 14%, 64% 0, 100% 0, 100% 100%);
}

.wifi {
  width: 13px;
  height: 13px;
  border: 2px solid rgba(255,255,255,0.88);
  border-color: rgba(255,255,255,0.88) transparent transparent transparent;
  border-radius: 50%;
  transform: rotate(180deg);
}

.battery {
  width: 26px;
  height: 12px;
  position: relative;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.9);
  border-radius: 4px;
}

.battery::after {
  content: "";
  position: absolute;
  right: -4px;
  top: 2px;
  width: 2px;
  height: 6px;
  border-radius: 2px;
  background: rgba(255,255,255,0.8);
}

.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 8px 16px;
}

.brand-block h1 {
  margin: 0;
  font-size: clamp(2.1rem, 4vw, 3.2rem);
  font-weight: 900;
  letter-spacing: -0.08em;
  line-height: 1;
  background: linear-gradient(90deg, #a889ff 0%, #d08cff 25%, #b67af9 52%, #8db8ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.header-icons {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 14px;
}

.icon-button {
  width: 34px;
  height: 34px;
  border: none;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: transparent;
  color: rgba(255,255,255,0.9);
  font-size: 1.15rem;
  cursor: pointer;
}

.search-btn {
  opacity: 0.9;
}

.notification-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.notification-badge {
  position: absolute;
  top: -5px;
  right: -3px;
  min-width: 17px;
  height: 17px;
  display: grid;
  place-items: center;
  padding: 0 5px;
  font-size: 0.62rem;
  font-weight: 700;
  background: #8d6bf4;
  color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 2px rgba(8, 10, 22, 0.85);
}

.profile-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(242, 187, 109, 0.9), rgba(229, 108, 169, 0.9));
  box-shadow: inset 0 0 0 2px rgba(255,255,255,0.22);
}

.chip-row {
  display: flex;
  gap: 10px;
  padding: 2px 8px 18px;
  overflow-x: auto;
  scrollbar-width: none;
}

.chip-row::-webkit-scrollbar {
  display: none;
}

.chip {
  border: 1px solid rgba(255,255,255,0.18);
  background: rgba(255,255,255,0.03);
  color: rgba(245,245,255,0.95);
  border-radius: 999px;
  padding: 10px 16px;
  font-size: 0.8rem;
  line-height: 1;
  flex-shrink: 0;
  cursor: pointer;
}

.chip.active {
  background: linear-gradient(135deg, rgba(164, 132, 255, 0.3), rgba(123, 187, 255, 0.18));
  border-color: rgba(155, 127, 255, 0.6);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08);
}

.feed {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 12px;
  padding: 14px 8px 12px;
}

.video-card {
  min-width: 0;
}

.video-thumb {
  position: relative;
  height: 180px;
  border-radius: 18px;
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.12);
}

.image-one {
  background-image: url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80');
}

.image-two {
  background-image: url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80');
}

.image-three {
  background-image: url('https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80');
}

.image-four {
  background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80');
}

.duration {
  position: absolute;
  right: 10px;
  bottom: 10px;
  border-radius: 999px;
  background: rgba(11, 13, 21, 0.72);
  border: 1px solid rgba(255,255,255,0.08);
  padding: 4px 7px;
  font-size: 0.7rem;
  color: #f7f7ff;
  font-weight: 700;
}

.video-info {
  padding: 10px 2px 0;
}

.video-info h2 {
  margin: 0;
  font-size: 0.97rem;
  line-height: 1.3;
  color: rgba(247,245,255,0.96);
  font-weight: 700;
}

.video-info p {
  margin: 4px 0 0;
  font-size: 0.75rem;
  color: rgba(204, 209, 231, 0.8);
}

.bottom-nav {
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 8px;
  height: 88px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  background: rgba(8, 10, 20, 0.72);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 28px;
  padding: 12px 12px 10px;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.03);
}

.nav-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: rgba(192, 201, 232, 0.8);
  font-size: 0.66rem;
  font-weight: 500;
}

.nav-item.active {
  color: #f6f1ff;
}

.nav-icon {
  font-size: 1.45rem;
  line-height: 1;
}

.create-button {
  width: 52px;
  height: 52px;
  border-radius: 18px;
  background: linear-gradient(135deg, #6f88ff 0%, #8d6bf4 40%, #a879ff 100%);
  box-shadow: 0 18px 30px rgba(119, 101, 255, 0.38);
  color: white;
  font-size: 2rem;
  display: grid;
  place-items: center;
  margin-top: -35px;
  font-weight: 300;
}

.nav-badge {
  position: absolute;
  top: -3px;
  right: 18px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 50%;
  background: #8a6ef9;
  color: white;
  font-size: 0.55rem;
  font-weight: 700;
  display: grid;
  place-items: center;
}

@media (max-width: 980px) {
  body {
    overflow: auto;
  }

  .app-shell {
    padding-top: 30px;
    padding-bottom: 40px;
    min-height: auto;
  }

  .phone-stack {
    display: none;
  }

  .phone-frame {
    transform: scale(0.8);
  }
}

@media (max-width: 560px) {
  .app-shell {
    padding-top: 16px;
  }

  .phone-frame {
    width: min(92vw, 420px);
    height: 820px;
    transform: none;
  }

  .brand-block h1 {
    font-size: 2.5rem;
  }

  .bottom-nav {
    left: 8px;
    right: 8px;
  }
}
