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

