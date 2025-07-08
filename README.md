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
</html>// style.css

body { margin: 0; font-family: 'Inter', sans-serif; background-color: #f4f6f8; color: #333; }

h1, h2, h3, p { margin: 0 0 10px 0; }

.container { max-width: 800px; margin: 0 auto; padding: 20px; text-align: center; }

.center-column { display: flex; flex-direction: column; align-items: center; justify-content: center; }

.landing-img, .dashboard-img { max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); animation: zoomIn 0.6s ease; }

.btn-primary, .btn-secondary { padding: 10px 20px; font-size: 16px; margin: 10px; border: none; border-radius: 8px; cursor: pointer; transition: background 0.3s; }

.btn-primary { background-color: #0d6efd; color: #fff; }

.btn-secondary { background-color: #6c757d; color: #fff; }

.btn-primary:hover, .btn-secondary:hover { opacity: 0.9; }

#auth, #dashboard, .content-section, .popup { display: none; }

.active-section { display: block; }

.auth-container { max-width: 400px; margin: auto; padding: 20px; background: white; border-radius: 12px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }

.auth-tabs { display: flex; justify-content: center; margin-bottom: 20px; }

.tab-btn { padding: 10px; cursor: pointer; border: none; background: transparent; font-weight: bold; transition: color 0.3s; }

.tab-btn.active { color: #0d6efd; border-bottom: 2px solid #0d6efd; }

.form-group { margin-bottom: 15px; text-align: left; }

input, select { width: 100%; padding: 8px; border-radius: 6px; border: 1px solid #ccc; }

aside#sidebar { width: 220px; background: #0d6efd; color: white; height: 100vh; position: fixed; padding: 20px; box-shadow: 2px 0 5px rgba(0,0,0,0.1); animation: slideInLeft 0.5s; }

#content-area { margin-left: 220px; padding: 20px; }

.sidebar-btn { display: block; width: 100%; background: transparent; color: white; text-align: left; border: none; padding: 10px; font-size: 16px; cursor: pointer; }

.content-section { animation: fadeIn 0.5s ease; }

.popup { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 30px; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }

@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

@keyframes zoomIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }

@keyframes slideInLeft { from { transform: translateX(-100%); } to { transform: translateX(0); } }

/* --- JS (script.js) --- */

// script.js

document.addEventListener("DOMContentLoaded", () => { const startBtn = document.getElementById("startEarnBtn"); const landing = document.getElementById("landing"); const auth = document.getElementById("auth"); const loginTab = document.querySelector('[data-tab="login"]'); const registerTab = document.querySelector('[data-tab="register"]'); const loginForm = document.getElementById("loginForm"); const registerForm = document.getElementById("registerForm"); const dashboard = document.getElementById("dashboard"); const logoutBtn = document.getElementById("logoutBtn");

startBtn.addEventListener("click", () => { landing.classList.remove("active-section"); auth.classList.add("active-section"); });

loginTab.addEventListener("click", () => { loginTab.classList.add("active"); registerTab.classList.remove("active"); loginForm.classList.add("active"); registerForm.classList.remove("active"); });

registerTab.addEventListener("click", () => { registerTab.classList.add("active"); loginTab.classList.remove("active"); registerForm.classList.add("active"); loginForm.classList.remove("active"); });

loginForm.addEventListener("submit", (e) => { e.preventDefault(); const username = document.getElementById("loginUsername").value; document.getElementById("userDisplayName").textContent = username; document.getElementById("accUsername").textContent = username; auth.classList.remove("active-section"); dashboard.classList.add("active-section"); });

registerForm.addEventListener("submit", (e) => { e.preventDefault(); const username = document.getElementById("regUsername").value; const phone = document.getElementById("regPhone").value; document.getElementById("userDisplayName").textContent = username; document.getElementById("accUsername").textContent = username; document.getElementById("accPhone").textContent = phone; auth.classList.remove("active-section"); dashboard.classList.add("active-section"); });

logoutBtn.addEventListener("click", () => { dashboard.classList.remove("active-section"); landing.classList.add("active-section"); });

// Sidebar Navigation const sidebarBtns = document.querySelectorAll(".sidebar-btn"); const contentSections = document.querySelectorAll(".content-section");

sidebarBtns.forEach(btn => { btn.addEventListener("click", () => { const target = btn.dataset.section;

contentSections.forEach(section => {
    section.classList.remove("active");
  });

  document.getElementById(target).classList.add("active");
});

});

// E-Wallet Save document.getElementById("saveEwalletBtn").addEventListener("click", () => { const number = document.getElementById("ewalletNumber").value; const bank = document.getElementById("ewalletBank").value; if (number && bank) { document.getElementById("ewalletSavedMsg").textContent = Saved: ${bank} - ${number}; } }); });

// script.js

// Page Navigation const startBtn = document.getElementById("startEarnBtn"); const landing = document.getElementById("landing"); const auth = document.getElementById("auth"); const dashboard = document.getElementById("dashboard");

const loginForm = document.getElementById("loginForm"); const registerForm = document.getElementById("registerForm");

const authTabs = document.querySelectorAll(".tab-btn"); const authContents = document.querySelectorAll(".tab-content");

const sidebarButtons = document.querySelectorAll(".sidebar-btn"); const contentSections = document.querySelectorAll(".content-section");

// Show Auth Page startBtn.addEventListener("click", () => { landing.classList.add("hidden"); auth.classList.remove("hidden"); });

// Auth Tabs Switch authTabs.forEach((tab) => { tab.addEventListener("click", () => { authTabs.forEach((t) => t.classList.remove("active")); tab.classList.add("active");

const selected = tab.getAttribute("data-tab");
authContents.forEach((form) => {
  form.classList.add("hidden");
  if (form.id === selected + "Form") {
    form.classList.remove("hidden");
  }
});

}); });

// Login Logic (Dummy Example) loginForm.addEventListener("submit", (e) => { e.preventDefault(); const username = document.getElementById("loginUsername").value; document.getElementById("userDisplayName").innerText = username; document.getElementById("accUsername").innerText = username; document.getElementById("accUID").innerText = "ID" + Math.floor(Math.random() * 1000000); document.getElementById("accPhone").innerText = "+8801XXXXXXXXX"; auth.classList.add("hidden"); dashboard.classList.remove("hidden"); });

// Sidebar Navigation sidebarButtons.forEach((btn) => { btn.addEventListener("click", () => { sidebarButtons.forEach((b) => b.classList.remove("active")); btn.classList.add("active");

const section = btn.getAttribute("data-section");
contentSections.forEach((sec) => {
  sec.classList.remove("active");
});
document.getElementById(section).classList.add("active");

}); });

// Save E-Wallet const saveEwalletBtn = document.getElementById("saveEwalletBtn"); const ewalletMsg = document.getElementById("ewalletSavedMsg"); saveEwalletBtn.addEventListener("click", () => { const num = document.getElementById("ewalletNumber").value; const bank = document.getElementById("ewalletBank").value; ewalletMsg.textContent = Saved: ${num} (${bank}); });

// Watch Ads Logic const adBtn = document.getElementById("watchAdBtn"); const adPopup = document.getElementById("adPopup"); const adTimer = document.getElementById("adTimer"); const closePopupBtns = document.querySelectorAll(".closePopupBtn");

adBtn.addEventListener("click", () => { adPopup.classList.remove("hidden"); let seconds = 5; adTimer.textContent = seconds; const interval = setInterval(() => { seconds--; adTimer.textContent = seconds; if (seconds <= 0) { clearInterval(interval); } }, 1000); });

closePopupBtns.forEach((btn) => { btn.addEventListener("click", () => { btn.parentElement.classList.add("hidden"); }); });

// Deposit/Withdraw Buttons const depositBtns = document.querySelectorAll('[data-method]'); const depositPopup = document.getElementById("depositPopup"); const withdrawPopup = document.getElementById("withdrawPopup");

const depositMethodText = document.getElementById("depositMethod"); const withdrawMethodText = document.getElementById("withdrawMethod");

depositBtns.forEach((btn) => { btn.addEventListener("click", () => { const method = btn.getAttribute("data-method"); if (btn.textContent.includes("📥")) { depositMethodText.textContent = method; depositPopup.classList.remove("hidden"); } else if (btn.textContent.includes("📤")) { withdrawMethodText.textContent = method; withdrawPopup.classList.remove("hidden"); } }); });

// Logout const logoutBtn = document.getElementById("logoutBtn"); logoutBtn.addEventListener("click", () => { dashboard.classList.add("hidden"); landing.classList.remove("hidden"); });

