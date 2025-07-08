<!DOCTYPE html><html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ClickBuzz - Earn Online</title>
  <link rel="stylesheet" href="style.css" />
  <script defer src="script.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
</head>
<body>
  <!-- Landing Page -->
  <section id="landing" class="active-section">
    <div class="container">
      <img src="https://img.freepik.com/free-vector/online-money-making-concept-illustration_114360-1195.jpg" class="landing-img" alt="Earn" />
      <h1>ClickBuzz</h1>
      <p>Earn money by watching ads, buying VIP plans, and more!</p>
      <button id="getStartedBtn" class="btn-primary">Get Started</button>
    </div>
  </section>  <!-- Auth Section -->  <section id="auth" class="hidden">
    <div class="auth-container">
      <div class="tabs">
        <button class="tab active" data-tab="login">Login</button>
        <button class="tab" data-tab="register">Register</button>
      </div>
      <div class="tab-content" id="loginTab">
        <h2>Login</h2>
        <input type="text" id="loginUsername" placeholder="Username" />
        <input type="password" id="loginPassword" placeholder="Password" />
        <button id="loginBtn">Login</button>
      </div>
      <div class="tab-content hidden" id="registerTab">
        <h2>Register</h2>
        <input type="text" id="regName" placeholder="Full Name" />
        <input type="text" id="regPhone" placeholder="Phone" />
        <input type="text" id="regUsername" placeholder="Username" />
        <input type="password" id="regPassword" placeholder="Password" />
        <button id="registerBtn">Register</button>
      </div>
    </div>
  </section>  <!-- Dashboard -->  <section id="dashboard" class="hidden">
    <aside id="sidebar">
      <div class="logo">💰 ClickBuzz</div>
      <nav>
        <button class="menu-btn" data-section="home">🏠 Home</button>
        <button class="menu-btn" data-section="earn">📺 Watch & Earn</button>
        <button class="menu-btn" data-section="vip">💎 VIP Plans</button>
        <button class="menu-btn" data-section="wallet">💼 Wallet</button>
        <button class="menu-btn" data-section="account">👤 Account</button>
        <button class="menu-btn" data-section="settings">⚙️ Settings</button>
      </nav>
    </aside>
    <main id="mainContent">
      <section class="content-section" id="homeSection">
        <h2>Welcome to ClickBuzz</h2>
        <p>Start earning by watching ads and more.</p>
      </section>
      <section class="content-section hidden" id="earnSection">
        <h2>Watch Ads & Earn</h2>
        <p>Click the button below to watch an ad and earn.</p>
        <button id="watchAdBtn">Watch Ad</button>
      </section>
      <section class="content-section hidden" id="vipSection">
        <h2>VIP Plans</h2>
        <ul>
          <li>৳100 = 10 ads</li>
          <li>৳500 = 25 ads</li>
          <li>৳1000 = 50 ads</li>
        </ul>
      </section>
      <section class="content-section hidden" id="walletSection">
        <h2>Wallet</h2>
        <p>Balance: ৳<span id="balance">0</span></p>
        <button id="depositBtn">Deposit</button>
        <button id="withdrawBtn">Withdraw</button>
      </section>
      <section class="content-section hidden" id="accountSection">
        <h2>Account Info</h2>
        <p>Username: <span id="accUsername">demo</span></p>
        <p>Phone: <span id="accPhone">+8801XXXXXXXXX</span></p>
      </section>
      <section class="content-section hidden" id="settingsSection">
        <h2>Settings</h2>
        <button id="logoutBtn">Logout</button>
      </section>
    </main>
  </section>
</body>
// Show Auth from Landing
document.getElementById("getStartedBtn").addEventListener("click", () => {
  document.getElementById("landing").classList.remove("active-section");
  document.getElementById("landing").classList.add("hidden");
  document.getElementById("auth").classList.remove("hidden");
});

// Tab Switch
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.add("hidden"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab + "Tab").classList.remove("hidden");
  });
});

// Login Button → Show Dashboard
document.getElementById("loginBtn").addEventListener("click", () => {
  document.getElementById("auth").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
});

// Sidebar Menu Navigation
document.querySelectorAll(".menu-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".content-section").forEach(sec => sec.classList.add("hidden"));
    document.getElementById(btn.dataset.section + "Section").classList.remove("hidden");
  });
});

// Logout → Back to Login
document.getElementById("logoutBtn").addEventListener("click", () => {
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("auth").classList.remove("hidden");
});body {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  background: #f4f4f4;
}

.hidden {
  display: none;
}

.active-section {
  display: block;
}

.container {
  text-align: center;
  padding: 30px;
}

.landing-img {
  width: 100%;
  max-width: 400px;
  border-radius: 20px;
}

.btn-primary {
  background: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
}

.auth-container {
  max-width: 400px;
  margin: 50px auto;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.auth-container input {
  width: 100%;
  margin: 10px 0;
  padding: 10px;
}

.tab {
  padding: 10px;
  margin-right: 10px;
  background: #ddd;
  border: none;
  border-radius: 5px;
}

.tab.active {
  background: #4caf50;
  color: white;
}

#sidebar {
  width: 200px;
  background: #222;
  color: white;
  height: 100vh;
  float: left;
  padding: 20px;
}

#mainContent {
  margin-left: 220px;
  padding: 20px;
}

