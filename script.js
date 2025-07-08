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
});
