// Simple "backend" using localStorage
// users: { email: {username, phone, email, password} }

const loginTab = document.getElementById("login-tab");
const registerTab = document.getElementById("register-tab");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const authSection = document.getElementById("auth-section");
const studentSection = document.getElementById("student-section");
const welcomeText = document.getElementById("welcome-text");
const logoutBtn = document.getElementById("logout-btn");
const submitMessage = document.getElementById("submit-message");
const studentForm = document.getElementById("student-form");

// Load users from localStorage
function loadUsers() {
  const data = localStorage.getItem("users");
  return data ? JSON.parse(data) : {};
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// Helpers
function showLogin() {
  loginTab.classList.add("active");
  registerTab.classList.remove("active");
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
}

function showRegister() {
  registerTab.classList.add("active");
  loginTab.classList.remove("active");
  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
}

// Tab switching
loginTab.addEventListener("click", showLogin);
registerTab.addEventListener("click", showRegister);

// Register
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("reg-username").value.trim();
  const phone = document.getElementById("reg-phone").value.trim();
  const email = document.getElementById("reg-email").value.trim();
  const password = document.getElementById("reg-password").value;
  const confirmPassword = document.getElementById("reg-confirm-password").value;

  if (!username || !phone || !email || !password || !confirmPassword) {
    alert("Please fill all register fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // Email must be Gmail
  const gmailPattern = /^[A-Za-z0-9._%+-]+@gmail\.com$/;
  if (!gmailPattern.test(email)) {
    alert("Email must be a valid Gmail address (example@gmail.com).");
    return;
  }

  // Phone must be exactly 10 digits
  if (!/^\d{10}$/.test(phone)) {
    alert("Phone number must be exactly 10 digits.");
    return;
  }

  const users = loadUsers();
  if (users[email]) {
    alert("Email already registered. Please use another email.");
    return;
  }

  users[email] = { username, phone, email, password };
  saveUsers(users);

  alert("Registration successful! You can now login.");
  registerForm.reset();
  showLogin();
});

// Login
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;

  if (!email || !password) {
    alert("Please enter email and password.");
    return;
  }

  const users = loadUsers();
  const user = users[email];
  if (!user || user.password !== password) {
    alert("Invalid email or password.");
    return;
  }

  // "Log in"
  localStorage.setItem("currentUserEmail", email);
  welcomeText.textContent = `Welcome, ${user.username} (${user.email})`;

  authSection.classList.add("hidden");
  studentSection.classList.remove("hidden");
  submitMessage.classList.add("hidden");
  studentForm.reset();
});

// Logout
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("currentUserEmail");
  studentSection.classList.add("hidden");
  authSection.classList.remove("hidden");
  showLogin();
});

// Submit student details
studentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const studentName = document.getElementById("student-name").value.trim();
  const fatherName = document.getElementById("father-name").value.trim();
  const motherName = document.getElementById("mother-name").value.trim();
  const studentPhone = document.getElementById("student-phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const course = document.getElementById("course").value.trim();
  const otherInfo = document.getElementById("other-info").value.trim();

  if (!studentName || !fatherName || !motherName || !studentPhone) {
    alert("Please fill required fields (Student, Father, Mother, Phone).");
    return;
  }

  if (!/^\d{10}$/.test(studentPhone)) {
    alert("Student phone number must be exactly 10 digits.");
    return;
  }

  console.log("Student details submitted:", {
    studentName,
    fatherName,
    motherName,
    studentPhone,
    address,
    course,
    otherInfo,
  });

  submitMessage.classList.remove("hidden");
  studentForm.reset();
});

// On initial load
showLogin();
