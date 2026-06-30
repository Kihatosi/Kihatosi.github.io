/* ============================================================
   PERPUSTAKAAN UIN JAKARTA - LOGIN LOGIC SCRIPT
   ============================================================ */

// Storage keys matching script.js
const USERS_KEY = 'uin_users';
const CURRENT_USER_KEY = 'uin_current_user';
const LANG_KEY = 'uin_lang';
const THEME_KEY = 'uin_theme';

let currentLang = localStorage.getItem(LANG_KEY) || 'id';
let currentTheme = localStorage.getItem(THEME_KEY) || 'light';

// Translations Dictionary
const translations = {
    id: {
        title_login: 'Masuk - Perpustakaan UIN Jakarta',
        sidebar_brand_sub: 'Perpustakaan Utama',
        sidebar_title: 'Temukan Dunia Lewat Lembaran Ilmu',
        sidebar_desc: 'Selamat datang di sistem manajemen perpustakaan terpadu UIN Syarif Hidayatullah Jakarta. Akses koleksi e-Journal, buku fisik, dan OPAC kami dengan mudah di mana saja dan kapan saja.',
        sidebar_quote: '"Membaca adalah alat paling mendasar untuk membangun peradaban dan memperluas cakrawala berpikir."',
        auth_tab_login: 'Masuk',
        auth_tab_register: 'Daftar',
        auth_label_email: 'Alamat Email *',
        auth_label_password: 'Kata Sandi *',
        auth_forgot_password: 'Lupa Kata Sandi?',
        auth_login_button: 'Masuk ke Akun',
        auth_cancel_button: 'Batal',
        form_name: 'Nama Lengkap *',
        register_email_help: 'Gunakan email kampus (contoh: mhs@uinjkt.ac.id atau dosen@uinjkt.ac.id)',
        form_role: 'Peran *',
        role_student: 'Mahasiswa',
        role_lecturer: 'Dosen',
        form_nim: 'NIM *',
        form_nip: 'NIP *',
        register_nim_help: 'Masukkan 14 digit NIM Mahasiswa',
        register_nip_help: 'Masukkan 18 digit NIP Dosen',
        form_prodi: 'Program Studi *',
        form_select_prodi: '-- Pilih Program Studi --',
        form_phone: 'No. Telepon *',
        form_confirm_password: 'Konfirmasi Sandi *',
        forgot_title: 'Pulihkan Kata Sandi',
        forgot_desc: 'Masukkan email kampus Anda. Jika terdaftar, sistem akan menampilkan kata sandi Anda untuk pemulihan cepat.',
        forgot_button: 'Cari Kata Sandi',
        auth_back_to_login: 'Kembali ke Login',
        alert_invalid_email_domain: 'Harap gunakan email dengan domain @uinjkt.ac.id!',
        alert_nim_length: 'NIM Mahasiswa harus tepat 14 digit angka!',
        alert_nip_length: 'NIP Dosen harus tepat 18 digit angka!',
        alert_prodi_required: 'Silakan pilih Program Studi Anda!',
        alert_password_match: 'Konfirmasi sandi tidak cocok!',
        alert_email_registered: 'Email sudah terdaftar! Gunakan email lain.',
        alert_login_success: 'Masuk berhasil! Selamat datang kembali.',
        alert_register_success: 'Pendaftaran berhasil! Akun Anda telah siap.',
        alert_auth_failed: 'Email atau kata sandi salah!',
        alert_forgot_not_found: 'Email tidak ditemukan di sistem!',
        alert_forgot_success: (pass) => `Kata sandi Anda adalah: <strong>${pass}</strong>`
    },
    en: {
        title_login: 'Login - UIN Jakarta Library',
        sidebar_brand_sub: 'Main Library',
        sidebar_title: 'Discover the World Through Pages of Knowledge',
        sidebar_desc: 'Welcome to the integrated library management system of UIN Syarif Hidayatullah Jakarta. Access our e-Journal, physical books, and OPAC collections easily anywhere and anytime.',
        sidebar_quote: '"Reading is the most fundamental tool to build civilizations and expand horizons of thought."',
        auth_tab_login: 'Login',
        auth_tab_register: 'Register',
        auth_label_email: 'Email Address *',
        auth_label_password: 'Password *',
        auth_forgot_password: 'Forgot Password?',
        auth_login_button: 'Log In to Account',
        auth_cancel_button: 'Cancel',
        form_name: 'Full Name *',
        register_email_help: 'Use campus email (e.g., mhs@uinjkt.ac.id or dosen@uinjkt.ac.id)',
        form_role: 'Role *',
        role_student: 'Student',
        role_lecturer: 'Lecturer',
        form_nim: 'Student ID (NIM) *',
        form_nip: 'Staff ID (NIP) *',
        register_nim_help: 'Enter 14-digit Student ID',
        register_nip_help: 'Enter 18-digit Staff ID',
        form_prodi: 'Study Program *',
        form_select_prodi: '-- Select Study Program --',
        form_phone: 'Phone Number *',
        form_confirm_password: 'Confirm Password *',
        forgot_title: 'Recover Password',
        forgot_desc: 'Enter your campus email. If registered, the system will display your password for quick recovery.',
        forgot_button: 'Find Password',
        auth_back_to_login: 'Back to Login',
        alert_invalid_email_domain: 'Please use an email with @uinjkt.ac.id domain!',
        alert_nim_length: 'Student ID (NIM) must be exactly 14 digits!',
        alert_nip_length: 'Staff ID (NIP) must be exactly 18 digits!',
        alert_prodi_required: 'Please select your Study Program!',
        alert_password_match: 'Confirm password does not match!',
        alert_email_registered: 'Email already registered! Use another email.',
        alert_login_success: 'Login successful! Welcome back.',
        alert_register_success: 'Registration successful! Your account is ready.',
        alert_auth_failed: 'Invalid email or password!',
        alert_forgot_not_found: 'Email not found in the system!',
        alert_forgot_success: (pass) => `Your password is: <strong>${pass}</strong>`
    }
};

// Initialize theme and language on load
document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    applyLanguage();
    initDemoAccounts(); // Ensure demo accounts match script.js
});

// Theme Management
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem(THEME_KEY, currentTheme);
    applyTheme();
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    const btn = document.getElementById('themeBtnText');
    if (btn) {
        btn.textContent = currentTheme === 'light' ? '🌙' : '☀️';
    }
}

// Language Management
function toggleLangDropdown() {
    const dropdown = document.getElementById('langDropdown');
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
}

function changeLang(lang) {
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    document.getElementById('langDropdown').style.display = 'none';
    applyLanguage();
}

function applyLanguage() {
    document.getElementById('currentLangText').textContent = currentLang.toUpperCase();
    
    // Set Document Title
    document.title = translations[currentLang].title_login;
    
    // Update elements with data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });

    // Update Input Placeholders
    const loginEmail = document.getElementById('loginEmail');
    if (loginEmail) loginEmail.placeholder = currentLang === 'id' ? 'Masukkan email kampus' : 'Enter campus email';

    const loginPass = document.getElementById('loginPassword');
    if (loginPass) loginPass.placeholder = '••••••';

    const regNama = document.getElementById('regNama');
    if (regNama) regNama.placeholder = currentLang === 'id' ? 'Nama lengkap Anda' : 'Your full name';

    const regEmail = document.getElementById('regEmail');
    if (regEmail) regEmail.placeholder = 'contoh@uinjkt.ac.id';

    const regTelp = document.getElementById('regTelp');
    if (regTelp) regTelp.placeholder = '0812xxxxxx';

    const regPass = document.getElementById('regPass');
    if (regPass) regPass.placeholder = currentLang === 'id' ? 'Min. 6 karakter' : 'Min. 6 characters';

    const regConfirmPass = document.getElementById('regConfirmPass');
    if (regConfirmPass) regConfirmPass.placeholder = currentLang === 'id' ? 'Ulangi sandi' : 'Repeat password';

    const forgotEmail = document.getElementById('forgotEmail');
    if (forgotEmail) forgotEmail.placeholder = 'contoh@uinjkt.ac.id';

    // Update conditional role labels
    const roleValue = document.getElementById('regRole').value;
    handleRoleChange(roleValue);
}

// Tab Switcher
function switchAuthTab(tab) {
    document.querySelectorAll('.form-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.auth-card-tab').forEach(t => t.classList.remove('active'));

    const tabBtnLogin = document.getElementById('tabBtnLogin');
    const tabBtnRegister = document.getElementById('tabBtnRegister');

    if (tab === 'login') {
        document.getElementById('loginSection').classList.add('active');
        tabBtnLogin.classList.add('active');
    } else if (tab === 'register') {
        document.getElementById('registerSection').classList.add('active');
        tabBtnRegister.classList.add('active');
    } else if (tab === 'forgot') {
        document.getElementById('forgotSection').classList.add('active');
    }
}

// Dynamic Register Form Updates (Role-based)
function handleRoleChange(role) {
    const regNimLabel = document.getElementById('regNimLabel');
    const regNimHelp = document.getElementById('regNimHelp');
    const regNim = document.getElementById('regNim');
    const regProdiGroup = document.getElementById('regProdiGroup');

    if (role === 'dosen') {
        regNimLabel.textContent = translations[currentLang].form_nip;
        regNimHelp.textContent = translations[currentLang].register_nip_help;
        regNim.placeholder = currentLang === 'id' ? 'Masukkan 18 digit NIP' : 'Enter 18-digit Staff ID';
        regProdiGroup.style.display = 'none';
        document.getElementById('regProdi').removeAttribute('required');
    } else {
        regNimLabel.textContent = translations[currentLang].form_nim;
        regNimHelp.textContent = translations[currentLang].register_nim_help;
        regNim.placeholder = currentLang === 'id' ? 'Masukkan 14 digit NIM' : 'Enter 14-digit Student ID';
        regProdiGroup.style.display = 'block';
        document.getElementById('regProdi').setAttribute('required', 'required');
    }
}

// Cancel Auth Flow (Redirect to Home)
function cancelAuth() {
    window.location.href = 'index.html';
}

// Helper: Escape HTML
function escapeHtml(str) {
    if (!str) return '';
    return str.toString()
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Helper: Toast Notifications
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    // Style toast matching style.css dynamically
    toast.style.background = type === 'success' ? '#10b981' : '#ef4444';
    toast.style.color = '#fff';
    toast.style.padding = '14px 20px';
    toast.style.borderRadius = '10px';
    toast.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
    toast.style.display = 'flex';
    toast.style.alignItems = 'center';
    toast.style.gap = '10px';
    toast.style.fontSize = '14px';
    toast.style.fontWeight = '600';
    toast.style.minWidth = '280px';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-20px)';
    toast.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

    const icon = type === 'success' ? '✓' : '✗';
    toast.innerHTML = `<span>${icon}</span><div>${message}</div>`;
    container.appendChild(toast);

    // Trigger animation
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 50);

    // Remove toast
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// Initialize Demo Accounts if Not Exists
function initDemoAccounts() {
    let users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    let updated = false;

    const demoAccounts = [
        {
            id: 'u-admin-1',
            nama: 'Admin Perpustakaan',
            email: 'admin@uinjkt.ac.id',
            nim: '1234567890',
            prodi: 'Staff IT',
            telp: '081234567890',
            password: 'admin123',
            role: 'admin',
            tanggal_daftar: new Date().toISOString()
        },
        {
            id: 'u-demo-1',
            nama: 'Pengguna Demo',
            email: 'demo@uinjkt.ac.id',
            nim: '12409011050128',
            prodi: 'Teknik Informatika',
            telp: '081122334455',
            password: 'password',
            role: 'user',
            tanggal_daftar: new Date().toISOString()
        },
        {
            id: 'u-demo-dosen',
            nama: 'Dr. Ahmad Hidayat',
            email: 'dosen@uinjkt.ac.id',
            nim: '197001012000031001',
            prodi: '',
            telp: '081299887766',
            password: 'password',
            role: 'dosen',
            tanggal_daftar: new Date().toISOString()
        }
    ];

    demoAccounts.forEach(demo => {
        if (!users.some(u => u.email === demo.email)) {
            users.push(demo);
            updated = true;
        }
    });

    if (updated) {
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
    }
}

// Authentication Handlers
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const pass = document.getElementById('loginPassword').value;
    const langDict = translations[currentLang];

    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === pass);

    if (user) {
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
        showToast(langDict.alert_login_success, 'success');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 800);
    } else {
        showToast(langDict.alert_auth_failed, 'error');
    }
}

function handleRegister(e) {
    e.preventDefault();
    const langDict = translations[currentLang];
    
    const nama = document.getElementById('regNama').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const role = document.getElementById('regRole').value;
    const nimVal = document.getElementById('regNim').value.trim();
    const prodi = document.getElementById('regProdi').value;
    const telp = document.getElementById('regTelp').value.trim();
    const pass = document.getElementById('regPass').value;
    const confirmPass = document.getElementById('regConfirmPass').value;

    // 1. Validasi Domain Email
    if (!email.toLowerCase().endsWith('@uinjkt.ac.id')) {
        showToast(langDict.alert_invalid_email_domain, 'error');
        return;
    }

    // 2. Validasi NIM/NIP digit
    const numericRegex = /^\d+$/;
    if (role === 'dosen') {
        if (nimVal.length !== 18 || !numericRegex.test(nimVal)) {
            showToast(langDict.alert_nip_length, 'error');
            return;
        }
    } else {
        if (nimVal.length !== 14 || !numericRegex.test(nimVal)) {
            showToast(langDict.alert_nim_length, 'error');
            return;
        }
        if (!prodi) {
            showToast(langDict.alert_prodi_required, 'error');
            return;
        }
    }

    // 3. Validasi Password Match
    if (pass !== confirmPass) {
        showToast(langDict.alert_password_match, 'error');
        return;
    }

    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    
    // 4. Validasi Email Registered
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
        showToast(langDict.alert_email_registered, 'error');
        return;
    }

    // Save New User
    const newUser = {
        id: 'u-' + Date.now(),
        nama,
        email,
        nim: nimVal,
        prodi: role === 'dosen' ? '' : prodi,
        telp,
        password: pass,
        role: role,
        tanggal_daftar: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));

    showToast(langDict.alert_register_success, 'success');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

function handleForgotPassword(e) {
    e.preventDefault();
    const email = document.getElementById('forgotEmail').value.trim();
    const langDict = translations[currentLang];

    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (user) {
        showToast(langDict.alert_forgot_success(escapeHtml(user.password)), 'success');
        setTimeout(() => {
            switchAuthTab('login');
            document.getElementById('loginEmail').value = user.email;
            document.getElementById('loginPassword').value = user.password;
        }, 3000);
    } else {
        showToast(langDict.alert_forgot_not_found, 'error');
    }
}
