/* ============================================================
   SECTION 1: STORAGE KEYS & CONFIGURATION
   ============================================================ */
const STORAGE_KEY = 'uin_library_data';
const USERS_KEY = 'uin_users';
const CURRENT_USER_KEY = 'uin_current_user';
const CURRENT_LANG_KEY = 'uin_current_lang'; // Kunci baru untuk bahasa

/* ============================================================
   SECTION 2: TRANSLATIONS DICTIONARY (ID & EN)
   ============================================================ */
        // --- KAMUS BAHASA (LANGUAGE DICTIONARY) ---
        const translations = {
            id: {
                nav_collections: 'Koleksi',
                modal_collections_title: 'Seluruh Koleksi Perpustakaan',
                collection_all: 'Semua',
                collection_journal: 'Jurnal',
                collection_book: 'Buku',
                collection_opac: 'OPAC',

                // Top Bar
                top_phone: '021 7494136',
                top_email: 'Perpustakaan@apps.uinjkt.ac.id',
                top_schedule: 'Senin-Kamis: 09.00-19.30 | Jumat: 09.00-16.00',

                // Header & Nav
                header_subtitle: 'Perpustakaan',
                nav_services: 'Layanan',
                nav_profile: 'Profile',
                nav_eresources: 'E-Resources',
                nav_event: 'Event',
                nav_faq: 'FAQ',
                nav_contact: 'Kontak',
                nav_login: 'Login',
                nav_admin: 'Pustakawan',
                

                // Hero
                hero_title: 'Selamat Datang di Perpustakaan UIN Syarif Hidayatullah Jakarta',
                hero_subtitle: 'Gerbang Ilmu Pengetahuan dan Inovasi untuk Masa Depan',

                // Search Tabs & Form
                tab_journal: 'e-Journal',
                tab_book: 'Buku',
                tab_opac: 'OPAC',
                tab_manage: 'Kelola Data',
                tab_members: 'Kelola Anggota',
                search_journal_title: 'Pencarian Koleksi Jurnal',
                search_journal_placeholder: 'Cari jurnal berdasarkan judul atau penulis...',
                search_book_title: 'Pencarian Buku',
                search_book_placeholder: 'Cari buku berdasarkan judul atau penulis...',
                search_opac_title: 'Pencarian Koleksi OPAC',
                search_opac_placeholder: 'Cari koleksi berdasarkan judul, penulis, atau nomor panggil...',
                search_button: 'Cari',

                // Manage Data (Tab 3)
                manage_title: 'Kelola Data Perpustakaan',
                manage_subtitle: 'Tambah, edit, atau hapus data jurnal, buku, dan OPAC. Data disimpan di browser Anda.',
                manage_add_journal: 'Tambah Jurnal',
                manage_add_book: 'Tambah Buku',
                manage_add_opac: 'Tambah OPAC',
                manage_current_data: 'Data Saat Ini',
                manage_users_title: 'Manajemen Pengguna',
                manage_users_subtitle: 'Kelola akses Admin untuk pengguna lain.',
                form_title: 'Judul *',
                form_author: 'Penulis *',
                form_year: 'Tahun',
                form_description: 'Deskripsi',
                form_pages: 'Halaman',
                form_available: 'Ketersediaan',
                form_call_number: 'Nomor Panggil',
                form_copies: 'Eksemplar',
                form_status: 'Status',
                status_available: 'Tersedia',
                status_borrowed: 'Dipinjam',
                button_save_journal: 'Simpan Jurnal',
                button_save_book: 'Simpan Buku',
                button_save_opac: 'Simpan OPAC',
                button_export: 'Ekspor JSON',
                button_load_demo: 'Muat Demo',
                button_clear_all: 'Hapus Semua',

                // Quick Access (Services)
                services_title: 'Layanan Kami',
                service_bebas_pinjam_title: 'Surat Bebas Pinjam',
                service_bebas_pinjam_desc: 'Layanan pembuatan surat bebas pinjam untuk mahasiswa',
                service_peminjaman_title: 'Peminjaman Buku',
                service_peminjaman_desc: 'Pinjam buku koleksi perpustakaan',
                service_penerbitan_title: 'Penerbitan Buku',
                service_penerbitan_desc: 'Layanan penerbitan melalui UIN Book',
                service_survey_title: 'Survey Kepuasan',
                service_survey_desc: 'Berikan feedback untuk layanan kami',

                // News & Events
                news_title: 'Berita & Event Terkini',
                news_1_title: 'Perpustakaan Bekali Mahasiswa Pascasarjana 2025',
                news_1_desc: 'Program pelatihan SLR untuk mahasiswa baru pascasarjana...',
                news_2_title: 'Meriahkan PKKMB UIN 2025',
                news_2_desc: 'UPT Perpustakaan turut memeriahkan acara penerimaan mahasiswa baru...',
                news_3_title: 'Workshop Literasi Digital',
                news_3_desc: 'Pelatihan literasi digital untuk meningkatkan kemampuan riset mahasiswa...',
                
                // Footer
                footer_library: 'Perpustakaan',
                footer_address: 'Jl. Ir Haji Juanda Ciputat<br>No. 95, Cempaka Putih<br>Kec. Ciputat Timur, Banten 15412',
                footer_service_hours: 'Jam Layanan',
                footer_schedule_mon_thu: 'Senin-Kamis: 09.00 - 19.30',
                footer_schedule_fri: 'Jumat: 09.00 - 16.00',
                footer_schedule_weekend: 'Sabtu-Minggu: Tutup',
                footer_quick_links: 'Link Cepat',
                footer_quick_eresources: 'E-Resources',
                footer_quick_uin_book: 'UIN Book',
                footer_social_media: 'Media Sosial',
                footer_copyright: '© 2025 UIN Syarif Hidayatullah Jakarta. All Rights Reserved.',

                // MODAL Titles (Partial, rest are dynamic)
                modal_login_title: 'Login / Daftar Akun',
                modal_forgot_password_title: 'Reset Password',
                modal_profile_title: 'Profile Pengguna',
                modal_library_profile_title: 'Profile Perpustakaan',
                modal_peminjaman_title: 'Formulir Peminjaman Buku',
                modal_bebas_pinjam_title: 'Pengajuan Surat Bebas Pinjam',
                modal_penerbitan_title: 'Layanan Penerbitan UIN Book',
                modal_survey_title: 'Survey Kepuasan Layanan',
                modal_eresources_title: 'E-Resources Perpustakaan',

                // MODAL Profile
                profile_tab_vision_mission: 'Visi & Misi',
                profile_tab_librarian: 'Pustakawan',
                profile_tab_staff: 'Staff',
                profile_vision: 'Visi',
                profile_mission: 'Misi',
                profile_vision_content: 'Menjadi pusat informasi dan pembelajaran yang unggul dalam mendukung Tri Dharma Perguruan Tinggi, mengintegrasikan nilai-nilai Islam dengan ilmu pengetahuan dan teknologi untuk menghasilkan lulusan yang kompeten, berakhlak mulia, dan berdaya saing global.',
                profile_mission_content: [
                    'Menyediakan koleksi perpustakaan yang berkualitas, relevan, dan up-to-date dalam berbagai bidang keilmuan dengan perspektif Islam',
                    'Mengembangkan layanan perpustakaan berbasis teknologi informasi untuk meningkatkan aksesibilitas dan kualitas layanan',
                    'Mangun budaya literasi dan pembelajaran berkelanjutan bagi civitas akademika',
                    'Menyelenggarakan program pengembangan kompetensi informasi dan literasi digital',
                    'Mangun kerjasama dengan berbagai pihak untuk pengembangan perpustakaan',
                    'Menciptakan lingkungan perpustakaan yang kondusif untuk belajar dan penelitian'
                ],
                
                // MODAL Auth
                auth_tab_login: 'Login',
                auth_tab_register: 'Daftar Akun',
                auth_forgot_password: 'Lupa Password?',
                auth_label_email: 'Email *',
                auth_label_password: 'Password *',
                auth_placeholder_email: 'Masukkan email',
                auth_placeholder_password: 'Masukkan password',
                auth_login_button: 'Login',
                auth_cancel_button: 'Batal',

                // ALERTS (JS)
                alert_login_success: (name) => `Login berhasil! Selamat datang, ${name}`,
                // --- PERBAIKAN: PERINGATAN LOGIN UNTUK DEMO ---
                alert_login_fail: 'Email atau password salah! User: demo@uinjkt.ac.id / password',
                alert_logout_confirm: 'Apakah Anda yakin ingin logout?',
                alert_logout_success: 'Anda telah logout',
                alert_no_query: 'Silakan masukkan kata kunci pencarian',
                alert_not_found: (query) => `Tidak ada hasil untuk "<strong>${escapeHtml(query)}</strong>"`,
                alert_not_logged_in: 'Anda harus login terlebih dahulu untuk mengakses layanan ini.',
                alert_admin_only: 'Akses Ditolak! Fitur ini hanya untuk Admin.',
                alert_role_updated: 'Peran pengguna berhasil diperbarui!'
            },
            en: {
                nav_collections: 'Collections',
                modal_collections_title: 'All Library Collections',
                collection_all: 'All',
                collection_journal: 'Journals',
                collection_book: 'Books',
                collection_opac: 'OPAC',

                // Top Bar
                top_phone: '+62 21 7494136',
                top_email: 'Perpustakaan@apps.uinjkt.ac.id',
                top_schedule: 'Monday-Thursday: 09.00-19.30 | Friday: 09.00-16.00',

                // Header & Nav
                header_subtitle: 'Library',
                nav_services: 'Services',
                nav_profile: 'Profile',
                nav_eresources: 'E-Resources',
                nav_event: 'Events',
                nav_faq: 'FAQ',
                nav_contact: 'Contact',
                nav_login: 'Login',
                nav_admin: 'Librarian',

                // Hero
                hero_title: 'Welcome to UIN Syarif Hidayatullah Jakarta Library',
                hero_subtitle: 'The Gateway of Knowledge and Innovation for the Future',

                // Search Tabs & Form
                tab_journal: 'e-Journal',
                tab_book: 'Book',
                tab_opac: 'OPAC',
                tab_manage: 'Manage Data',
                tab_members: 'Manage Members',
                search_journal_title: 'Journal Collection Search',
                search_journal_placeholder: 'Search journal by title or author...',
                search_book_title: 'Book Search',
                search_book_placeholder: 'Search book by title or author...',
                search_opac_title: 'OPAC Collection Search',
                search_opac_placeholder: 'Search collection by title, author, or call number...',
                search_button: 'Search',

                // Manage Data (Tab 3)
                manage_title: 'Library Data Management',
                manage_subtitle: 'Add, edit, or delete journal, book, and OPAC data. Data is stored in your browser.',
                manage_add_journal: 'Add Journal',
                manage_add_book: 'Add Book',
                manage_add_opac: 'Add OPAC',
                manage_current_data: 'Current Data',
                manage_users_title: 'User Management',
                manage_users_subtitle: 'Manage Admin access for other users.',
                form_title: 'Title *',
                form_author: 'Author *',
                form_year: 'Year',
                form_description: 'Description',
                form_pages: 'Pages',
                form_available: 'Availability',
                form_call_number: 'Call Number',
                form_copies: 'Copies',
                form_status: 'Status',
                status_available: 'Available',
                status_borrowed: 'Borrowed',
                button_save_journal: 'Save Journal',
                button_save_book: 'Save Book',
                button_save_opac: 'Save OPAC',
                button_export: 'Export JSON',
                button_load_demo: 'Load Demo',
                button_clear_all: 'Clear All',
                
                // Quick Access (Services)
                services_title: 'Our Services',
                service_bebas_pinjam_title: 'Loan Clearance Letter',
                service_bebas_pinjam_desc: 'Service for loan clearance letter for students',
                service_peminjaman_title: 'Book Borrowing',
                service_peminjaman_desc: 'Borrow books from the library collection',
                service_penerbitan_title: 'Book Publishing',
                service_penerbitan_desc: 'Publishing services through UIN Book',
                service_survey_title: 'Satisfaction Survey',
                service_survey_desc: 'Provide feedback for our services',
                
                // News & Events
                news_title: 'Latest News & Events',
                news_1_title: 'Library Equips Postgraduate Students 2025',
                news_1_desc: 'SLR training program for new postgraduate students...',
                news_2_title: 'Enlivening UIN PKKMB 2025',
                news_2_desc: 'The Library Unit participated in the new student acceptance event...',
                news_3_title: 'Digital Literacy Workshop',
                news_3_desc: 'Digital literacy training to enhance student research skills...',

                // Footer
                footer_library: 'Library',
                footer_address: 'Jl. Ir Haji Juanda Ciputat<br>No. 95, Cempaka Putih<br>East Ciputat District, Banten 15412',
                footer_service_hours: 'Service Hours',
                footer_schedule_mon_thu: 'Monday-Thursday: 09.00 - 19.30',
                footer_schedule_fri: 'Friday: 09.00 - 16.00',
                footer_schedule_weekend: 'Saturday-Sunday: Closed',
                footer_quick_links: 'Quick Links',
                footer_quick_eresources: 'E-Resources',
                footer_quick_uin_book: 'UIN Book',
                footer_social_media: 'Social Media',
                footer_copyright: '© 2025 UIN Syarif Hidayatullah Jakarta. All Rights Reserved.',

                // MODAL Titles (Partial, rest are dynamic)
                modal_login_title: 'Login / Register Account',
                modal_forgot_password_title: 'Password Reset',
                modal_profile_title: 'User Profile',
                modal_library_profile_title: 'Library Profile',
                modal_peminjaman_title: 'Book Borrowing Form',
                modal_bebas_pinjam_title: 'Loan Clearance Letter Request',
                modal_penerbitan_title: 'UIN Book Publishing Service',
                modal_survey_title: 'Service Satisfaction Survey',
                modal_eresources_title: 'Library E-Resources',

                // MODAL Profile
                profile_tab_vision_mission: 'Vision & Mission',
                profile_tab_librarian: 'Librarians',
                profile_tab_staff: 'Staff',
                profile_vision: 'Vision',
                profile_mission: 'Mission',
                profile_vision_content: 'To be a center of excellence in information and learning supporting the Tri Dharma of Higher Education, integrating Islamic values with science and technology to produce competent, noble-character, and globally competitive graduates.',
                profile_mission_content: [
                    'Providing quality, relevant, and up-to-date library collections in various fields of science with an Islamic perspective',
                    'Developing technology-based library services to enhance accessibility and quality of service',
                    'Building a culture of literacy and continuous learning for the academic community',
                    'Organizing programs for developing information competence and digital literacy',
                    'Building collaborations with various parties for library development',
                    'Creating a conducive library environment for learning and research'
                ],

                // MODAL Auth
                auth_tab_login: 'Login',
                auth_tab_register: 'Register Account',
                auth_forgot_password: 'Forgot Password?',
                auth_label_email: 'Email *',
                auth_label_password: 'Password *',
                auth_placeholder_email: 'Enter email',
                auth_placeholder_password: 'Enter password',
                auth_login_button: 'Login',
                auth_cancel_button: 'Cancel',

                // ALERTS (JS)
                alert_login_success: (name) => `Login successful! Welcome, ${name}`,
                alert_login_fail: 'Wrong email or password! User: demo@uinjkt.ac.id / password',
                alert_logout_confirm: 'Are you sure you want to log out?',
                alert_logout_success: 'You have logged out',
                alert_no_query: 'Please enter a search keyword',
                alert_not_found: (query) => `No results found for "<strong>${escapeHtml(query)}</strong>"`,
                alert_not_logged_in: 'You must log in first to access this service.',
                alert_admin_only: 'Access Denied! This feature is for Admin only.',
                alert_role_updated: 'User role updated successfully!'
                
            }
            
        };

/* ============================================================
   SECTION 3: LOCALIZATION & LANGUAGE SWITCHER
   ============================================================ */
        let currentLang = localStorage.getItem(CURRENT_LANG_KEY) || 'id'; // Muat bahasa saat ini
        
        // --- FUNGSI BARU UNTUK ALIH BAHASA ---
        function applyTranslations() {
            const langDict = translations[currentLang];
            document.querySelectorAll('[data-lang-key]').forEach(element => {
                const key = element.getAttribute('data-lang-key');
                if (langDict[key] && typeof langDict[key] === 'string') {
                    element.textContent = langDict[key];
                }
            });
            document.querySelectorAll('[data-lang-key-placeholder]').forEach(element => {
                const key = element.getAttribute('data-lang-key-placeholder');
                if (langDict[key] && typeof langDict[key] === 'string') {
                    element.placeholder = langDict[key];
                }
            });

            // Update language selector UI
            const currentLangText = document.getElementById('currentLangText');
            const currentLangIcon = document.getElementById('currentLangIcon');
            if (currentLangText && currentLangIcon) {
                if (currentLang === 'id') {
                    currentLangText.textContent = 'ID';
                    currentLangIcon.textContent = 'ID';
                } else {
                    currentLangText.textContent = 'EN';
                    currentLangIcon.textContent = 'EN';
                }
            }

            // Update dropdown active state
            document.querySelectorAll('.lang-item').forEach(item => {
                item.classList.remove('active');
                if (item.dataset.lang === currentLang) {
                    item.classList.add('active');
                }
            });
            
            // Re-render dynamic elements if needed (like tab counts which rely on data)
            updateTabCounts(); 

            // Re-render current modal content if open (for dynamic content)
            const modal = document.getElementById('modal');
            if (modal.classList.contains('show')) {
                // Get the type of the currently open modal (this requires a global var or similar to store last opened modal type)
                // Since there is no such variable, we rely on the modal content being re-generated when opened.
                // For a robust solution, you would need to store the `type` of the modal globally.
                // Let's re-open the last known modal type (if available from previous call)
                // For now, we will just rely on the next call to openModal() to refresh the content.
            }
        }

        function setLanguage(lang, element) {
            currentLang = lang;
            localStorage.setItem(CURRENT_LANG_KEY, lang);
            applyTranslations();
            closeLangDropdown();
        }

        function toggleLangDropdown() {
            const dropdown = document.getElementById('langDropdown');
            if (dropdown) dropdown.classList.toggle('show');
        }

        function closeLangDropdown() {
            const dropdown = document.getElementById('langDropdown');
            if (dropdown) dropdown.classList.remove('show');
        }

        // Theme toggle functionality
        function toggleTheme() {
            const html = document.documentElement;
            const current = html.getAttribute('data-theme') || 'light';
            const newTheme = current === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', newTheme);
            // Also toggle body class for legacy CSS
            document.body.classList.toggle('dark-theme', newTheme === 'dark');
            localStorage.setItem('theme', newTheme);
        }

        // Initialize theme on load
        (function initTheme() {
            const saved = localStorage.getItem('theme');
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            const theme = saved || (prefersDark ? 'dark' : 'light');
            document.documentElement.setAttribute('data-theme', theme);
            document.body.classList.toggle('dark-theme', theme === 'dark');
        })();

        // Accessibility font-size adjustment functionality
        function changeFontSize(size, btn) {
            const html = document.documentElement;
            const body = document.body;
            
            html.classList.remove('font-small', 'font-medium', 'font-large');
            if (body) body.classList.remove('font-small', 'font-medium', 'font-large');
            
            html.classList.add('font-' + size);
            if (body) body.classList.add('font-' + size);
            
            document.querySelectorAll('.access-btn').forEach(el => {
                el.classList.remove('active');
            });
            
            if (btn) {
                btn.classList.add('active');
            } else {
                const accessBtn = document.querySelector(`.access-btn[data-size="${size}"]`);
                if (accessBtn) {
                    accessBtn.classList.add('active');
                }
            }
            localStorage.setItem('uin_font_size', size);
        }

        // Initialize font size on load
        (function initFontSize() {
            const savedSize = localStorage.getItem('uin_font_size') || 'medium';
            if (document.body) {
                changeFontSize(savedSize);
            } else {
                document.addEventListener('DOMContentLoaded', () => {
                    changeFontSize(savedSize);
                });
            }
        })();



/* ============================================================
   SECTION 4: DEMO DATA & INITIAL STATE
   ============================================================ */
        const demoData = {
            journal: [
                { id: 'j1', title: 'Jurnal Ilmu Sosial dan Humaniora', author: 'Tim Peneliti UIN', year: 2024, issn: '2580-1234', description: 'Jurnal yang membahas tentang ilmu sosial dan humaniora dari perspektif Islam' },
                { id: 'j2', title: 'Jurnal Studi Islam Kontemporer', author: 'Dr. Ahmad Hidayat', year: 2024, issn: '2580-5678', description: 'Kajian mendalam tentang Islam dalam konteks modern' },
                { id: 'j3', title: 'Jurnal Ekonomi Syariah', author: 'Prof. Siti Nurhaliza', year: 2023, issn: '2580-9012', description: 'Penelitian dan pengembangan ekonomi berbasis syariah' }
            ],
            book: [
                { id: 'b1', title: 'Pengantar Studi Islam', author: 'Dr. Abdullah Rahman', year: 2024, isbn: '978-602-1234-56-7', pages: 350, description: 'Buku komprehensif tentang dasar-dasar studi Islam', available: 5 },
                { id: 'b2', title: 'Ekonomi Islam Modern', author: 'Prof. Muhammad Ali', year: 2023, isbn: '978-602-2345-67-8', pages: 420, description: 'Pembahasan lengkap tentang sistem ekonomi Islam', available: 3 },
                { id: 'b3', title: 'Sejarah Peradaban Islam', author: 'Dr. Fatimah Zahra', year: 2024, isbn: '978-602-3456-78-9', pages: 500, description: 'Perjalanan sejarah peradaban Islam dari masa ke masa', available: 0 }
            ],
            opac: [
                { id: 'o1', title: 'Metodologi Penelitian Kualitatif', author: 'Prof. Budi Santoso', year: 2023, call_number: '001.42 BUD m', status: 'Tersedia', copies: 3, description: 'Panduan lengkap penelitian kualitatif' },
                { id: 'o2', title: 'Filsafat Ilmu Pengetahuan', author: 'Dr. Rina Wijaya', year: 2024, call_number: '101 RIN f', status: 'Dipinjam', copies: 5, description: 'Dasar-dasar filsafat ilmu' },
                { id: 'o3', title: 'Psikologi Pendidikan Islam', author: 'Dr. Andi Setiawan', year: 2023, call_number: '297.07 AND p', status: 'Tersedia', copies: 4, description: 'Psikologi dalam perspektif pendidikan Islam' }
            ]
        };

/* ============================================================
   SECTION 5: DATA MANAGEMENT (LOAD & SAVE)
   ============================================================ */
        let libraryData = loadData();
        let currentUser = loadCurrentUser();
        let lastOpenedModalType = null; // Tambahkan variabel global untuk melacak jenis modal

        function generateId() {
            return 'id_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        }

        function loadData() {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                try {
                    return JSON.parse(saved);
                } catch (e) {
                    return structuredClone(demoData);
                }
            }
            return structuredClone(demoData);
        }

        function saveData() {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(libraryData));
            renderDataLists();
            updateTabCounts();
        }

/* ============================================================
   SECTION 6: AUTHENTICATION & USER SESSION
   ============================================================ */
        function loadCurrentUser() {
            const saved = localStorage.getItem(CURRENT_USER_KEY);
            if (saved) {
                try {
                    return JSON.parse(saved);
                } catch (e) {
                    return null;
                }
            }
            return null;
        }

        function saveCurrentUser(user) {
            if (user) {
                localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
            } else {
                localStorage.removeItem(CURRENT_USER_KEY);
            }
            currentUser = user;
            updateAuthButton();
        }

        function loadUsers() {
            const saved = localStorage.getItem(USERS_KEY);
            let users = [];
            
            if (saved) {
                try {
                    users = JSON.parse(saved);
                } catch (e) {
                    users = [];
                }
            }

            // --- MEMASTIKAN ADMIN & USER DEMO SELALU TERSEDIA ---
            const adminEmail = 'admin@uinjkt.ac.id';
            const demoUserEmail = 'demo@uinjkt.ac.id';

            if (!users.some(u => u.email === adminEmail)) {
                users.push({
                    id: 'u-admin-1',
                    nama: 'Admin Perpustakaan',
                    email: adminEmail,
                    nim: '1234567890',
                    prodi: 'Staff IT',
                    telp: '081234567890',
                    password: 'admin123', 
                    role: 'admin',
                    tanggal_daftar: new Date().toISOString()
                });
            }

            if (!users.some(u => u.email === demoUserEmail)) {
                users.push({
                    id: 'u-demo-1',
                    nama: 'Pengguna Demo',
                    email: demoUserEmail,
                    nim: '12409011050128',
                    prodi: 'Teknik Informasi',
                    telp: '081122334455',
                    password: 'password', 
                    role: 'user',
                    tanggal_daftar: new Date().toISOString()
                });
            }

            // Demo Dosen account
            const demoDosenEmail = 'dosen@uinjkt.ac.id';
            if (!users.some(u => u.email === demoDosenEmail)) {
                users.push({
                    id: 'u-demo-dosen',
                    nama: 'Dr. Ahmad Hidayat',
                    email: demoDosenEmail,
                    nim: '197001012000031001',
                    prodi: '',
                    telp: '081299887766',
                    password: 'password', 
                    role: 'dosen',
                    tanggal_daftar: new Date().toISOString()
                });
            }

            localStorage.setItem(USERS_KEY, JSON.stringify(users));
            return users; 
        }

        function saveUsers(users) {
            localStorage.setItem(USERS_KEY, JSON.stringify(users));
            if (typeof renderUserList === 'function') renderUserList();
        }

       function updateAuthButton() {
    const authButton = document.getElementById('authButton');
    const adminButton = document.getElementById('adminButton'); 
    const collectionTab = document.getElementById('collectionTab');
    const adminDataTab = document.getElementById('adminDataTab');
    const adminUsersTab = document.getElementById('adminUsersTab');
    
    if (!authButton) return;
    const langDict = translations[currentLang];

    if (currentUser) {
        if (collectionTab) collectionTab.style.display = 'block';

        if (adminButton) {
            adminButton.style.display = (currentUser.role === 'admin') ? 'block' : 'none';
        }
        
        if (adminDataTab) {
            adminDataTab.style.display = (currentUser.role === 'admin') ? 'block' : 'none';
        }
        if (adminUsersTab) {
            adminUsersTab.style.display = (currentUser.role === 'admin') ? 'block' : 'none';
        }

        // CEK APAKAH USER PUNYA FOTO
        const avatarContent = currentUser.photo 
            ? `<img src="${currentUser.photo}" alt="Profile" style="width: 100%; height: 100%; object-fit: cover;">` 
            : currentUser.nama.charAt(0).toUpperCase();

        const avatarStyle = currentUser.photo 
            ? 'background: transparent; padding: 0;' 
            : 'background: var(--accent-orange);';

        authButton.innerHTML = `
            <div class="user-menu">
                <div class="user-avatar" onclick="toggleUserDropdown()" style="${avatarStyle} color: white; cursor: pointer;">
                    ${avatarContent}
                </div>
                <div class="user-dropdown" id="userDropdown">
                    <div class="user-dropdown-item" onclick="openModal('user-profile')">
                        <strong>${currentUser.nama}</strong> <span class="muted" style="font-size:12px;">(${currentUser.role === 'admin' ? 'Admin' : currentUser.role === 'dosen' ? 'Dosen' : 'Mahasiswa'})</span><br>
                        <small class="muted">${currentUser.email}</small>
                    </div>
                    ${currentUser.role === 'admin' ? `
                    <div class="user-dropdown-item" onclick="openAdminDashboard()" style="color: var(--secondary-blue); font-weight: bold;">
                        ${currentLang === 'id' ? 'Dashboard Admin' : 'Admin Dashboard'}
                    </div>
                    ` : ''}
                    <div class="user-dropdown-item" onclick="logout()" style="color: var(--danger); font-weight: bold;">
                        ${currentLang === 'id' ? 'Logout' : 'Logout'}
                    </div>
                </div>
            </div>
        `;
    } else {
        if (adminButton) adminButton.style.display = 'none';
        if (collectionTab) collectionTab.style.display = 'none';
        if (adminDataTab) adminDataTab.style.display = 'none';
        if (adminUsersTab) adminUsersTab.style.display = 'none';

        authButton.innerHTML = `<button class="btn-login" onclick="openModal('login')" data-lang-key="nav_login">${langDict.nav_login}</button>`;
    }
}

function toggleUserDropdown() {
    const dropdown = document.getElementById('userDropdown');
    if (dropdown) dropdown.classList.toggle('show');
}

document.addEventListener('click', (e) => {
    const userMenu = document.querySelector('.user-menu');
    if (userMenu && !userMenu.contains(e.target)) {
        const dropdown = document.getElementById('userDropdown');
        if (dropdown) dropdown.classList.remove('show');
    }
});

function logout() {
    const langDict = translations[currentLang];
    if (confirm(langDict.alert_logout_confirm)) {
        saveCurrentUser(null);
        showToast(langDict.alert_logout_success);
        
        const activeTab = document.querySelector('.tab-btn.active');
        if (activeTab) {
            const tabIdx = activeTab.getAttribute('data-tab');
            if (tabIdx === "3" || tabIdx === "4" || tabIdx === "5") {
                switchTab(0);
            }
        }

        closeModal();
    }
}

/* ============================================================
   SECTION 7: UI UTILITIES & SCROLLING
   ============================================================ */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`; 
    toast.textContent = message;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/* ============================================================
   SECTION 7B: MOBILE Hamburger MENU TOGGLE
   ============================================================ */
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('show');
    }
}

function closeMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.remove('show');
    }
}

// Auto close mobile menu on links or button clicks and setup scroll lock
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.addEventListener('click', (e) => {
            if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.user-dropdown-item')) {
                closeMobileMenu();
            }
        });
    }

    // Modal Scroll-Lock MutationObserver
    const modal = document.getElementById('modal');
    if (modal) {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    if (modal.classList.contains('show')) {
                        document.body.style.overflow = 'hidden';
                    } else {
                        document.body.style.overflow = '';
                    }
                }
            });
        });
        observer.observe(modal, { attributes: true });
    }
});


/* ============================================================
   SECTION 8: SEARCH & TABS LOGIC
   ============================================================ */
        function switchTab(index) {
            // Proteksi Tambahan: cegah bypass tab admin via console/manipulasi
            if (index === 4 || index === 5) {
                if (!currentUser || currentUser.role !== 'admin') {
                    switchTab(0);
                    return;
                }
            }

            const tabs = document.querySelectorAll('.tab-btn');
            const contents = document.querySelectorAll('.tab-content');
            
            tabs.forEach((tab, i) => {
                tab.classList.toggle('active', i === index);
            });
            contents.forEach((content, i) => {
                content.classList.toggle('active', i === index);
            });
            
            // Clear search results when switching tabs
            document.querySelectorAll('.search-results').forEach(res => res.classList.remove('show'));

            // Render list if admin kelola tab is active
            if (index === 4 && typeof renderDataLists === 'function') {
                renderDataLists();
            }
            if (index === 5 && typeof renderUserList === 'function') {
                renderUserList();
            }
        }

        function switchSubTab(subTabId, btnElement) {
            const parentTab = btnElement.closest('.tab-content');
            if (!parentTab) return;
            
            parentTab.querySelectorAll('.sub-tab-content').forEach(content => {
                content.classList.remove('active');
            });
            parentTab.querySelectorAll('.sub-tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            const activeContent = document.getElementById('subTab-' + subTabId);
            if (activeContent) {
                activeContent.classList.add('active');
            }
            btnElement.classList.add('active');
        }

        function updateTabCounts() {
            const tabs = document.querySelectorAll('.tab-btn');
            const langDict = translations[currentLang];

            if (tabs[0]) tabs[0].textContent = `${langDict.tab_journal} (${libraryData.journal.length})`;
            if (tabs[1]) tabs[1].textContent = `${langDict.tab_book} (${libraryData.book.length})`;
            if (tabs[2]) tabs[2].textContent = `${langDict.tab_opac} (${libraryData.opac.length})`;
            
            // TAMBAHAN: Update Tab Koleksi (Index 3)
            if (tabs[3]) {
                const total = libraryData.journal.length + libraryData.book.length + libraryData.opac.length;
                const collLabel = currentLang === 'id' ? 'Koleksi' : 'Collections';
                tabs[3].textContent = `${collLabel} (${total})`;
            }
            
            // GESER: Tab Kelola Data sekarang di Index 4
            if (tabs[4]) tabs[4].textContent = `${langDict.tab_manage}`; 
            // BARU: Tab Kelola Anggota di Index 5
            if (tabs[5]) tabs[5].textContent = `${langDict.tab_members}`; 
        }

        // --- UPDATE LISTENER TAB DENGAN PROTEKSI LOGIN & ADMIN ---
        document.querySelectorAll('.tab-btn').forEach((btn, index) => {
            btn.addEventListener('click', () => {
                const langDict = translations[currentLang];
                
                // TAMBAHAN: Proteksi Tab Index 3 (Koleksi) - Harus Login
                if (index === 3) {
                    if (!currentUser) {
                        showToast(langDict.alert_not_logged_in, 'error');
                        openModal('login');
                        return;
                    }
                    if (typeof filterCollection === 'function') filterCollection('all');
                }

                // GESER: Proteksi Tab Index 4 (Kelola Data) - Harus Admin
                if (index === 4) {
                    if (!currentUser) {
                        showToast(langDict.alert_not_logged_in, 'error');
                        openModal('login');
                        return;
                    }
                    if (currentUser.role !== 'admin') {
                        showToast(langDict.alert_admin_only, 'error');
                        return;
                    }
                    if (typeof renderDataLists === 'function') renderDataLists();
                }

                // BARU: Proteksi Tab Index 5 (Kelola Anggota) - Harus Admin
                if (index === 5) {
                    if (!currentUser) {
                        showToast(langDict.alert_not_logged_in, 'error');
                        openModal('login');
                        return;
                    }
                    if (currentUser.role !== 'admin') {
                        showToast(langDict.alert_admin_only, 'error');
                        return;
                    }
                    if (typeof renderUserList === 'function') renderUserList();
                }
                switchTab(index);
            });
        });

        document.querySelectorAll('.search-form').forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const type = form.dataset.type;
                const input = form.querySelector('input');
                const query = input.value.trim().toLowerCase();
                const resultsDiv = document.getElementById(`${type}Results`);
                const langDict = translations[currentLang];
                
                if (!query) {
                    showToast(langDict.alert_no_query, 'error');
                    return;
                }

                const results = libraryData[type].filter(item => 
                    item.title.toLowerCase().includes(query) ||
                    item.author.toLowerCase().includes(query) ||
                    (item.call_number && item.call_number.toLowerCase().includes(query))
                );

                if (results.length === 0) {
                    resultsDiv.innerHTML = `<p class="muted">${langDict.alert_not_found(query)}</p>`;
                } else {
                    const resultTitle = currentLang === 'id' ? `Hasil Pencarian (${results.length})` : `Search Results (${results.length})`;

                    let html = `<h4 style="color: var(--primary-blue); margin-bottom: 12px; font-weight: 700;">${resultTitle}</h4>`;
                    results.forEach(item => {
                        const statusText = item.status || (type === 'book' ? (item.available > 0 ? langDict.status_available : langDict.status_borrowed) : '');
                        const statusDisplay = statusText ? ` • ${statusText}` : '';

                        html += `
                            <div class="result-item" onclick="showDetail('${type}', '${item.id}')">
                                <h4>${escapeHtml(item.title)}</h4>
                                <p>${escapeHtml(item.author)} • ${item.year || '-'}${statusDisplay}</p>
                            </div>
                        `;
                    });
                    resultsDiv.innerHTML = html;
                }
                
                resultsDiv.classList.add('show');
            });
        });
/* ============================================================
   SECTION 9: MODAL SYSTEM & ITEM DETAILS
   ============================================================ */
        function showDetail(type, id) {
            const item = libraryData[type].find(i => i.id === id);
            if (!item) return;

            const modal = document.getElementById('modal');
            const title = document.getElementById('modalTitle');
            const body = document.getElementById('modalBody');
            const langDict = translations[currentLang];

            title.textContent = item.title;

            const labels = {
                title: currentLang === 'id' ? 'Judul' : 'Title',
                author: currentLang === 'id' ? 'Penulis' : 'Author',
                year: currentLang === 'id' ? 'Tahun' : 'Year',
                issn: 'ISSN',
                isbn: 'ISBN',
                pages: currentLang === 'id' ? 'Halaman' : 'Pages',
                available: currentLang === 'id' ? 'Ketersediaan' : 'Availability',
                call_number: currentLang === 'id' ? 'Nomor Panggil' : 'Call Number',
                status: 'Status',
                copies: currentLang === 'id' ? 'Eksemplar' : 'Copies',
                description: currentLang === 'id' ? 'Deskripsi' : 'Description',
                not_available: currentLang === 'id' ? 'Tidak tersedia' : 'Not available',
                available_copies: currentLang === 'id' ? 'eksemplar tersedia' : 'copies available',
                borrow_this: currentLang === 'id' ? 'Pinjam Buku Ini' : 'Borrow This Book',
                edit_data: currentLang === 'id' ? 'Edit Data' : 'Edit Data',
                delete_data: currentLang === 'id' ? 'Hapus' : 'Delete',
                not_available_desc: currentLang === 'id' ? 'Tidak ada deskripsi' : 'No description',
            };

            let html = `
                <div style="display: grid; gap: 15px;">
                    <div style="display: grid; grid-template-columns: 150px 1fr; gap: 10px; padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                        <strong style="color: var(--primary-blue);">${labels.title}:</strong>
                        <span>${escapeHtml(item.title)}</span>
                    </div>
                    <div style="display: grid; grid-template-columns: 150px 1fr; gap: 10px; padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                        <strong style="color: var(--primary-blue);">${labels.author}:</strong>
                        <span>${escapeHtml(item.author)}</span>
                    </div>
                    <div style="display: grid; grid-template-columns: 150px 1fr; gap: 10px; padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                        <strong style="color: var(--primary-blue);">${labels.year}:</strong>
                        <span>${item.year || '-'}</span>
                    </div>
            `;

            if (type === 'journal') {
                html += `
                    <div style="display: grid; grid-template-columns: 150px 1fr; gap: 10px; padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                        <strong style="color: var(--primary-blue);">${labels.issn}:</strong>
                        <span>${escapeHtml(item.issn || '-')}</span>
                    </div>
                `;
            } else if (type === 'book') {
                html += `
                    <div style="display: grid; grid-template-columns: 150px 1fr; gap: 10px; padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                        <strong style="color: var(--primary-blue);">${labels.isbn}:</strong>
                        <span>${escapeHtml(item.isbn || '-')}</span>
                    </div>
                    <div style="display: grid; grid-template-columns: 150px 1fr; gap: 10px; padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                        <strong style="color: var(--primary-blue);">${labels.pages}:</strong>
                        <span>${item.pages || '-'}</span>
                    </div>
                    <div style="display: grid; grid-template-columns: 150px 1fr; gap: 10px; padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                        <strong style="color: var(--primary-blue);">${labels.available}:</strong>
                        <span style="color: ${item.available > 0 ? 'var(--success)' : 'var(--danger)'}; font-weight: 700;">
                            ${item.available > 0 ? item.available + ' ' + labels.available_copies : labels.not_available}
                        </span>
                    </div>
                `;
            } else if (type === 'opac') {
                const status = currentLang === 'id' ? item.status : (item.status === 'Tersedia' ? 'Available' : 'Borrowed');
                html += `
                    <div style="display: grid; grid-template-columns: 150px 1fr; gap: 10px; padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                        <strong style="color: var(--primary-blue);">${labels.call_number}:</strong>
                        <span>${escapeHtml(item.call_number || '-')}</span>
                    </div>
                    <div style="display: grid; grid-template-columns: 150px 1fr; gap: 10px; padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                        <strong style="color: var(--primary-blue);">${labels.status}:</strong>
                        <span style="color: ${item.status === 'Tersedia' ? 'var(--success)' : 'var(--danger)'}; font-weight: 700;">${status}</span>
                    </div>
                    <div style="display: grid; grid-template-columns: 150px 1fr; gap: 10px; padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                        <strong style="color: var(--primary-blue);">${labels.copies}:</strong>
                        <span>${item.copies || 0}</span>
                    </div>
                `;
            }

            html += `
                    <div style="display: grid; grid-template-columns: 150px 1fr; gap: 10px; padding: 12px 0;">
                        <strong style="color: var(--primary-blue);">${labels.description}:</strong>
                        <span class="muted">${escapeHtml(item.description || labels.not_available_desc)}</span>
                    </div>
                </div>
                <div style="margin-top: 25px; display: flex; gap: 10px; flex-wrap: wrap;">
            `;

            if ((type === 'book' && item.available > 0) || (type === 'opac' && item.status === 'Tersedia')) {
                html += `<button class="btn-primary" onclick="checkAuthAndOpenPeminjaman('${escapeHtml(item.title)}')" style="margin-right: 10px;">${labels.borrow_this}</button>`;
            }

            // --- MODIFIKASI: PROTEKSI ADMIN (DETAIL TOMBOL) ---
            if (currentUser && currentUser.role === 'admin') {
                html += `
                    <button class="btn-secondary" onclick="editItem('${type}', '${item.id}')" style="margin: 0;">${labels.edit_data}</button>
                    <button class="btn-danger" onclick="deleteItem('${type}', '${item.id}')">${labels.delete_data}</button>
                `;
            }

            html += `</div>`;

            body.innerHTML = html;
            modal.classList.add('show');
            lastOpenedModalType = 'showDetail'; 
        }

        function checkAuthAndOpenPeminjaman(bookTitle) {
            const langDict = translations[currentLang];
            if (currentUser) {
                openModal('peminjaman', bookTitle);
            } else {
                // UPDATE: Menggunakan showToast alih-alih alert
                showToast(langDict.alert_not_logged_in, 'error');
                openModal('login');
            }
        }

        function openModal(type, data = null) {
            lastOpenedModalType = type; // Update last opened modal type
            const modal = document.getElementById('modal');
            const title = document.getElementById('modalTitle');
            const body = document.getElementById('modalBody');
            const langDict = translations[currentLang];

            // Common labels
            const labels = {
                title: langDict.form_title,
                author: langDict.form_author,
                year: langDict.form_year,
                description: langDict.form_description,
                email: langDict.auth_label_email,
                password: langDict.auth_label_password,
                cancel: langDict.auth_cancel_button
            };

            if (type === 'login') {
                title.textContent = langDict.modal_login_title;
                body.innerHTML = `
                    <div class="auth-tabs">
                        <button class="auth-tab active" onclick="switchAuthTab('login', this)" data-lang-key="auth_tab_login">${langDict.auth_tab_login}</button>
                        <button class="auth-tab" onclick="switchAuthTab('register', this)" data-lang-key="auth_tab_register">${langDict.auth_tab_register}</button>
                    </div>
                    
                    <div class="auth-content active" id="loginContent">
                        <form onsubmit="handleLogin(event)">
                            <div class="form-group">
                                <label>${labels.email}</label>
                                <input type="email" name="email" required placeholder="${langDict.auth_placeholder_email}">
                            </div>
                            <div class="form-group">
                                <label>${labels.password}</label>
                                <input type="password" name="password" required placeholder="${langDict.auth_placeholder_password}">
                            </div>
                            <div class="form-group" style="text-align: right; margin-top: -10px;">
                                <a href="#" onclick="openModal('forgot-password'); return false;" style="font-size: 14px; color: var(--secondary-blue); text-decoration: none; font-weight: 600;" data-lang-key="auth_forgot_password">${langDict.auth_forgot_password}</a>
                            </div>
                            <div style="margin-top: 20px;">
                                <button type="submit" class="btn-primary">${langDict.auth_login_button}</button>
                                <button type="button" class="btn-secondary" onclick="closeModal()">${labels.cancel}</button>
                            </div>
                        </form>
                    </div>
                    
                    <div class="auth-content" id="registerContent">
                        <form onsubmit="handleRegister(event)">
                            <div class="form-group">
                                <label data-lang-key="form_name">${currentLang === 'id' ? 'Nama Lengkap *' : 'Full Name *'}</label>
                                <input type="text" name="nama" required placeholder="${currentLang === 'id' ? 'Masukkan nama lengkap' : 'Enter full name'}">
                            </div>
                            <div class="form-group">
                                <label>${labels.email}</label>
                                <input type="email" name="email" required placeholder="${currentLang === 'id' ? 'Masukkan email' : 'Enter email'}">
                                <small class="form-help" style="display: block; margin-top: 4px; font-size: 12px; color: var(--muted);">${currentLang === 'id' ? 'Gunakan email kampus (contoh: mhs@uinjkt.ac.id)' : 'Use campus email (e.g., mhs@uinjkt.ac.id)'}</small>
                            </div>
                            <div class="form-group">
                                <label>${currentLang === 'id' ? 'Peran *' : 'Role *'}</label>
                                <select name="role_type" required onchange="
                                    var nimLabel = this.form.querySelector('.nim-label');
                                    var nimInput = this.form.querySelector('[name=nim]');
                                    var nimHelp = this.form.querySelector('.nim-help');
                                    var prodiGroup = this.form.querySelector('.prodi-group');
                                    if (this.value === 'dosen') {
                                        nimLabel.textContent = '${currentLang === 'id' ? 'NIP *' : 'Staff ID *'}';
                                        nimInput.placeholder = '${currentLang === 'id' ? 'Masukkan NIP' : 'Enter Staff ID'}';
                                        nimHelp.textContent = '${currentLang === 'id' ? 'Masukkan 18 digit NIP Dosen' : 'Enter 18-digit Staff ID'}';
                                        prodiGroup.style.display = 'none';
                                    } else {
                                        nimLabel.textContent = '${currentLang === 'id' ? 'NIM *' : 'Student ID *'}';
                                        nimInput.placeholder = '${currentLang === 'id' ? 'Masukkan NIM' : 'Enter Student ID'}';
                                        nimHelp.textContent = '${currentLang === 'id' ? 'Masukkan 14 digit NIM Mahasiswa' : 'Enter 14-digit Student ID'}';
                                        prodiGroup.style.display = 'block';
                                    }
                                ">
                                    <option value="user">${currentLang === 'id' ? 'Mahasiswa' : 'Student'}</option>
                                    <option value="dosen">${currentLang === 'id' ? 'Dosen' : 'Lecturer'}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="nim-label">${currentLang === 'id' ? 'NIM *' : 'Student ID *'}</label>
                                <input type="text" name="nim" required placeholder="${currentLang === 'id' ? 'Masukkan NIM' : 'Enter Student ID'}">
                                <small class="form-help nim-help" style="display: block; margin-top: 4px; font-size: 12px; color: var(--muted);">${currentLang === 'id' ? 'Masukkan 14 digit NIM Mahasiswa' : 'Enter 14-digit Student ID'}</small>
                            </div>
                            <div class="form-group prodi-group">
                                <label>${currentLang === 'id' ? 'Program Studi' : 'Study Program'}</label>
                                <select name="prodi">
                                    <option value="">${currentLang === 'id' ? '-- Pilih Program Studi --' : '-- Select Study Program --'}</option>
                                    <option>${currentLang === 'id' ? 'Ilmu Al-Quran dan Tafsir' : 'Qur\'an and Tafsir Studies'}</option>
                                    <option>${currentLang === 'id' ? 'Hukum Keluarga Islam' : 'Islamic Family Law'}</option>
                                    <option>${currentLang === 'id' ? 'Ekonomi Syariah' : 'Sharia Economics'}</option>
                                    <option>${currentLang === 'id' ? 'Pendidikan Agama Islam' : 'Islamic Religious Education'}</option>
                                    <option>${currentLang === 'id' ? 'Ilmu Komunikasi' : 'Communication Science'}</option>
                                    <option>${currentLang === 'id' ? 'Psikologi' : 'Psychology'}</option>
                                    <option>${currentLang === 'id' ? 'Teknik Informasi' : 'Computer Science'}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label data-lang-key="form_phone">${currentLang === 'id' ? 'No. Telepon *' : 'Phone No. *'}</label>
                                <input type="tel" name="telp" required placeholder="${currentLang === 'id' ? 'Masukkan no. telepon' : 'Enter phone number'}">
                            </div>
                            <div class="form-group">
                                <label>${labels.password}</label>
                                <input type="password" name="password" required placeholder="${currentLang === 'id' ? 'Minimal 6 karakter' : 'Minimum 6 characters'}" minlength="6">
                            </div>
                            <div class="form-group">
                                <label data-lang-key="form_confirm_password">${currentLang === 'id' ? 'Konfirmasi Password *' : 'Confirm Password *'}</label>
                                <input type="password" name="confirm_password" required placeholder="${currentLang === 'id' ? 'Ulangi password' : 'Repeat password'}">
                            </div>
                            <div style="margin-top: 20px;">
                                <button type="submit" class="btn-primary" data-lang-key="button_register">${currentLang === 'id' ? 'Daftar' : 'Register'}</button>
                                <button type="button" class="btn-secondary" onclick="closeModal()">${labels.cancel}</button>
                            </div>
                        </form>
                    </div>
                `;
                
                // Attach real-time validation glow highlights
                setTimeout(() => {
                    const regForm = body.querySelector('#registerContent form');
                    if (regForm) {
                        const passwordInput = regForm.querySelector('input[name="password"]');
                        const confirmInput = regForm.querySelector('input[name="confirm_password"]');
                        const emailInput = regForm.querySelector('input[name="email"]');
                        const nimInput = regForm.querySelector('input[name="nim"]');
                        const roleSelect = regForm.querySelector('select[name="role_type"]');

                        const validateRegFields = () => {
                            // Password length check
                            if (passwordInput.value.length > 0) {
                                if (passwordInput.value.length < 6) {
                                    passwordInput.style.borderColor = 'var(--danger)';
                                } else {
                                    passwordInput.style.borderColor = '#10b981';
                                }
                            } else {
                                passwordInput.style.borderColor = '';
                            }

                            // Password confirmation check
                            if (confirmInput.value.length > 0) {
                                if (confirmInput.value !== passwordInput.value) {
                                    confirmInput.style.borderColor = 'var(--danger)';
                                } else {
                                    confirmInput.style.borderColor = '#10b981';
                                }
                            } else {
                                confirmInput.style.borderColor = '';
                            }

                            // Email domain check
                            if (emailInput.value.length > 0) {
                                if (!emailInput.value.toLowerCase().endsWith('uinjkt.ac.id')) {
                                    emailInput.style.borderColor = 'var(--danger)';
                                } else {
                                    emailInput.style.borderColor = '#10b981';
                                }
                            } else {
                                emailInput.style.borderColor = '';
                            }

                            // NIM/NIP digits check
                            const val = nimInput.value.trim();
                            const numRegex = /^\d+$/;
                            if (val.length > 0) {
                                const reqLen = roleSelect.value === 'dosen' ? 18 : 14;
                                if (val.length !== reqLen || !numRegex.test(val)) {
                                    nimInput.style.borderColor = 'var(--danger)';
                                } else {
                                    nimInput.style.borderColor = '#10b981';
                                }
                            } else {
                                nimInput.style.borderColor = '';
                            }
                        };

                        passwordInput.addEventListener('input', validateRegFields);
                        confirmInput.addEventListener('input', validateRegFields);
                        emailInput.addEventListener('input', validateRegFields);
                        nimInput.addEventListener('input', validateRegFields);
                        roleSelect.addEventListener('change', validateRegFields);
                    }
                }, 50);
            } else if (type === 'forgot-password') {
                title.textContent = langDict.modal_forgot_password_title;
                body.innerHTML = `
                    <div class="alert alert-info">
                        <strong>${currentLang === 'id' ? 'Lupa kata sandi?' : 'Forgot your password?'}</strong> ${currentLang === 'id' ? 'Masukkan email akun Anda untuk memulai proses reset. ' : 'Enter your account email to start the reset process. (Simulation)'}
                    </div>
                    <form onsubmit="handleForgotPassword(event)">
                        <input type="hidden" name="step" value="request">
                        <div class="form-group">
                            <label>${currentLang === 'id' ? 'Email Akun *' : 'Account Email *'}</label>
                            <input type="email" name="email" required placeholder="${currentLang === 'id' ? 'Masukkan email akun Anda' : 'Enter your account email'}">
                        </div>
                        <div style="margin-top: 20px;">
                            <button type="submit" class="btn-primary">${currentLang === 'id' ? 'Kirim Link Reset' : 'Send Reset Link'}</button>
                            <button type="button" class="btn-secondary" onclick="openModal('login')">${currentLang === 'id' ? 'Kembali ke Login' : 'Back to Login'}</button>
                        </div>
                    </form>
                `;
            } else if (type === 'user-profile') {
                if (!currentUser) { openModal('login'); return; }
                title.textContent = langDict.modal_profile_title;

                // Ambil data peminjaman dan pengajuan user
                const allLoans = JSON.parse(localStorage.getItem('uin_peminjaman') || '[]');
                const myLoans = allLoans.filter(p => p.userEmail === currentUser.email);
                const activeLoans = myLoans.filter(p => p.status === 'active');
                const returnedLoans = myLoans.filter(p => p.status === 'returned');

                const allBebas = JSON.parse(localStorage.getItem('uin_bebas_pinjam') || '[]');
                const myBebas = allBebas.filter(b => b.userEmail === currentUser.email);

                const allPenerbitan = JSON.parse(localStorage.getItem('uin_penerbitan') || '[]');
                const myPenerbitan = allPenerbitan.filter(p => p.userEmail === currentUser.email);

                // Render daftar peminjaman
                let loansHtml = '';
                if (myLoans.length === 0) {
                    loansHtml = `<p class="muted" style="text-align:center;padding:24px;">${currentLang === 'id' ? 'Belum ada riwayat peminjaman.' : 'No borrowing history yet.'}</p>`;
                } else {
                    myLoans.forEach(loan => {
                        const isOverdue = loan.status === 'active' && new Date(loan.tgl_kembali) < new Date();
                        const statusLabel = loan.status === 'returned'
                            ? (currentLang === 'id' ? 'Dikembalikan' : 'Returned')
                            : isOverdue
                                ? (currentLang === 'id' ? 'Terlambat!' : 'Overdue!')
                                : (currentLang === 'id' ? 'Dipinjam' : 'Borrowed');
                        const statusClass = loan.status === 'returned' ? 'returned' : isOverdue ? 'rejected' : 'active';

                        loansHtml += `
                            <div class="loan-card ${isOverdue ? 'overdue' : ''}">
                                <div class="loan-card-header">
                                    <span class="loan-card-title">${escapeHtml(loan.judul)}</span>
                                    <span class="status-badge ${statusClass}">${statusLabel}</span>
                                </div>
                                <div class="loan-card-meta">
                                    ${currentLang === 'id' ? 'Kode' : 'Code'}: ${loan.kode}<br>
                                    ${currentLang === 'id' ? 'Tgl Pinjam' : 'Borrow Date'}: ${loan.tgl_pinjam || '-'} &nbsp;|&nbsp;
                                    ${currentLang === 'id' ? 'Tenggat' : 'Due'}: ${loan.tgl_kembali || '-'}
                                </div>
                                ${loan.status === 'active' ? `
                                    <div class="loan-card-actions">
                                        <button class="btn-primary" onclick="returnBook('${loan.kode}')" style="font-size:13px;padding:8px 16px;">
                                            ${currentLang === 'id' ? 'Kembalikan Buku' : 'Return Book'}
                                        </button>
                                    </div>
                                ` : ''}
                            </div>
                        `;
                    });
                }

                // Render daftar pengajuan
                let requestsHtml = '';
                if (myBebas.length === 0 && myPenerbitan.length === 0) {
                    requestsHtml = `<p class="muted" style="text-align:center;padding:24px;">${currentLang === 'id' ? 'Belum ada pengajuan.' : 'No requests yet.'}</p>`;
                } else {
                    // Surat Bebas Pinjam
                    myBebas.forEach(b => {
                        const statusLabel = b.status === 'approved'
                            ? (currentLang === 'id' ? 'Disetujui' : 'Approved')
                            : b.status === 'rejected'
                                ? (currentLang === 'id' ? 'Ditolak' : 'Rejected')
                                : (currentLang === 'id' ? 'Menunggu' : 'Pending');
                        requestsHtml += `
                            <div class="loan-card">
                                <div class="loan-card-header">
                                    <span class="loan-card-title">${currentLang === 'id' ? 'Surat Bebas Pinjam' : 'No-Loan Certificate'}</span>
                                    <span class="status-badge ${b.status}">${statusLabel}</span>
                                </div>
                                <div class="loan-card-meta">
                                    ${currentLang === 'id' ? 'Nomor' : 'Number'}: ${b.nomor}<br>
                                    ${currentLang === 'id' ? 'Tanggal' : 'Date'}: ${new Date(b.tanggal).toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US')}
                                    ${b.alasan_tolak ? `<br><span style="color:var(--danger)">${currentLang === 'id' ? 'Alasan' : 'Reason'}: ${escapeHtml(b.alasan_tolak)}</span>` : ''}
                                </div>
                                ${b.status === 'approved' ? `
                                    <div class="loan-card-actions">
                                        <button class="btn-primary" onclick="printSuratBebasPinjam('${b.nomor}')" style="font-size:13px;padding:8px 16px;">
                                            ${currentLang === 'id' ? 'Cetak Surat' : 'Print Letter'}
                                        </button>
                                    </div>
                                ` : ''}
                            </div>
                        `;
                    });
                    // Penerbitan
                    myPenerbitan.forEach(p => {
                        const statusLabel = p.status === 'approved'
                            ? (currentLang === 'id' ? 'Diterima' : 'Accepted')
                            : p.status === 'rejected'
                                ? (currentLang === 'id' ? 'Ditolak' : 'Rejected')
                                : (currentLang === 'id' ? 'Review' : 'In Review');
                        requestsHtml += `
                            <div class="loan-card">
                                <div class="loan-card-header">
                                    <span class="loan-card-title">${currentLang === 'id' ? 'Pengajuan Penerbitan' : 'Publication Request'}</span>
                                    <span class="status-badge ${p.status === 'review' ? 'pending' : p.status}">${statusLabel}</span>
                                </div>
                                <div class="loan-card-meta">
                                    ${currentLang === 'id' ? 'Nomor' : 'Number'}: ${p.nomor}<br>
                                    ${currentLang === 'id' ? 'Judul' : 'Title'}: ${escapeHtml(p.judul || '-')}<br>
                                    ${currentLang === 'id' ? 'Tanggal' : 'Date'}: ${new Date(p.tanggal).toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US')}
                                </div>
                            </div>
                        `;
                    });
                }

                body.innerHTML = `
                    <div class="modal-tabs">
                        <button class="modal-tab-btn active" onclick="switchUserTab('akun', this)">
                            ${currentLang === 'id' ? 'Detail Akun' : 'Account'}
                        </button>
                        <button class="modal-tab-btn" onclick="switchUserTab('pinjaman', this)">
                            ${currentLang === 'id' ? 'Peminjaman' : 'Loans'} (${activeLoans.length})
                        </button>
                        <button class="modal-tab-btn" onclick="switchUserTab('pengajuan', this)">
                            ${currentLang === 'id' ? 'Pengajuan' : 'Requests'} (${myBebas.length + myPenerbitan.length})
                        </button>
                    </div>
                    <div id="userTab-akun" class="modal-tab-content active">
                        <div class="profile-section">
                            <div class="profile-header">
                                <div class="profile-avatar-large">${currentUser.nama.charAt(0).toUpperCase()}</div>
                                <div class="profile-info">
                                    <h3>${escapeHtml(currentUser.nama)}</h3>
                                    <p class="muted">${escapeHtml(currentUser.nim)}</p>
                                </div>
                            </div>
                            <div class="info-grid">
                                <div class="info-label">Email:</div>
                                <div>${escapeHtml(currentUser.email)}</div>
                                <div class="info-label">${currentLang === 'id' ? (currentUser.role === 'dosen' ? 'NIP:' : 'NIM:') : 'ID:'}</div>
                                <div>${escapeHtml(currentUser.nim)}</div>
                                <div class="info-label">${currentLang === 'id' ? 'Peran:' : 'Role:'}</div>
                                <div>${currentUser.role === 'admin' ? 'Pustakawan (Admin)' : currentUser.role === 'dosen' ? 'Dosen' : 'Mahasiswa'}</div>
                                ${currentUser.role !== 'dosen' ? `<div class="info-label">${currentLang === 'id' ? 'Program Studi:' : 'Study Program:'}</div>
                                <div>${escapeHtml(currentUser.prodi || '-')}</div>` : ''}
                                <div class="info-label">${currentLang === 'id' ? 'No. Telepon:' : 'Phone No.:'}</div>
                                <div>${escapeHtml(currentUser.telp)}</div>
                                <div class="info-label">${currentLang === 'id' ? 'Pinjaman Aktif:' : 'Active Loans:'}</div>
                                <div><strong>${activeLoans.length} / ${currentUser.role === 'dosen' ? 5 : 3}</strong></div>
                                <div class="info-label">${currentLang === 'id' ? 'Bergabung:' : 'Joined:'}</div>
                                <div>${new Date(currentUser.tanggal_daftar).toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
                            </div>
                        </div>
                    </div>
                    <div id="userTab-pinjaman" class="modal-tab-content">
                        ${loansHtml}
                    </div>
                    <div id="userTab-pengajuan" class="modal-tab-content">
                        ${requestsHtml}
                    </div>
                    <div style="margin-top:16px;">
                        <button class="btn-primary" onclick="closeModal()">${currentLang === 'id' ? 'Tutup' : 'Close'}</button>
                    </div>
                `;
            } else if (type === 'profile') {
                title.textContent = langDict.modal_library_profile_title;
                const missionList = langDict.profile_mission_content.map(item => `<li>${item}</li>`).join('');
                body.innerHTML = `
                    <div class="auth-tabs">
                        <button class="auth-tab active" onclick="switchProfileTab('visi-misi', this)" data-lang-key="profile_tab_vision_mission">${langDict.profile_tab_vision_mission}</button>
                        <button class="auth-tab" onclick="switchProfileTab('pustakawan', this)" data-lang-key="profile_tab_librarian">${langDict.profile_tab_librarian}</button>
                        <button class="auth-tab" onclick="switchProfileTab('staff', this)" data-lang-key="profile_tab_staff">${langDict.profile_tab_staff}</button>
                    </div>
                    <div class="auth-content active" id="visi-misi-content">
                        <div class="profile-section">
                            <h3 style="color: var(--primary-blue); margin-bottom: 20px; font-weight: 700;" data-lang-key="profile_vision">${langDict.profile_vision}</h3>
                            <p style="line-height: 1.8; margin-bottom: 30px; text-align: justify;" data-lang-key="profile_vision_content">${langDict.profile_vision_content}</p>
                            <h3 style="color: var(--primary-blue); margin-bottom: 20px; font-weight: 700;" data-lang-key="profile_mission">${langDict.profile_mission}</h3>
                            <ul style="line-height: 2; margin-left: 20px;">${missionList}</ul>
                        </div>
                    </div>
                    <div class="auth-content" id="pustakawan-content">
                        <div class="staff-grid">
                            <div class="staff-card"><div class="staff-avatar">RN</div><h4>Rusmin Nuryadin</h4><p>${currentLang === 'id' ? 'Kepala Perpustakaan' : 'Head of Library'}</p><p class="muted">NIM : 12409011050120</p></div>
                            <div class="staff-card"><div class="staff-avatar">ZB</div><h4>M. Zaidan Zuhdi Basuri</h4><p>${currentLang === 'id' ? 'Pustakawan Ahli Madya' : 'Associate Expert Librarian'}</p><p class="muted">NIM: 12409011050128</p></div>
                            <div class="staff-card"><div class="staff-avatar">ZM</div><h4>M. Zain Muttaqin</h4><p>${currentLang === 'id' ? 'Pustakawan Ahli Madya' : 'Associate Expert Librarian'}</p><p class="muted">NIM: 12409011050131</p></div>
                        </div>
                    </div>
                    <div class="auth-content" id="staff-content">
                        <div class="staff-grid">
                            <div class="staff-card"><div class="staff-avatar">RN</div><h4>Rusmin Nuryadin</h4><p>${currentLang === 'id' ? 'Kepala Tata Usaha' : 'Head of Administration'}</p><p class="muted">NIM : 12409011050120</p></div>
                            <div class="staff-card"><div class="staff-avatar">ZB</div><h4>M. Zaidan Zuhdi Basuri</h4><p>${currentLang === 'id' ? 'Pustakawan Ahli Madya' : 'Associate Expert Librarian'}</p><p class="muted">NIM: 12409011050128</p></div>
                            <div class="staff-card"><div class="staff-avatar">ZM</div><h4>M. Zain Muttaqin</h4><p>${currentLang === 'id' ? 'Pustakawan Ahli Madya' : 'Associate Expert Librarian'}</p><p class="muted">NIM: 12409011050131</p></div>
                        </div>
                    </div>
                `;
            } else if (type === 'peminjaman') {
                if (!currentUser) {
                    showToast(langDict.alert_not_logged_in, 'error');
                    openModal('login');
                    return;
                }
                title.textContent = langDict.modal_peminjaman_title;
                body.innerHTML = `
                    <div class="alert alert-info">
                        <strong>${currentLang === 'id' ? 'Ketentuan Peminjaman:' : 'Borrowing Policy:'}</strong>
                        <ul style="margin: 10px 0 0 20px;">
                            <li>${currentLang === 'id' 
                                ? (currentUser.role === 'dosen' ? 'Maksimal 5 buku per dosen' : 'Maksimal 3 buku per mahasiswa') 
                                : (currentUser.role === 'dosen' ? 'Maximum 5 books per lecturer' : 'Maximum 3 books per student')}</li>
                            <li>${currentLang === 'id' 
                                ? (currentUser.role === 'dosen' ? 'Durasi peminjaman: 14 hari' : 'Durasi peminjaman: 7 hari') 
                                : (currentUser.role === 'dosen' ? 'Borrowing duration: 14 days' : 'Borrowing duration: 7 days')}</li>
                            <li>${currentLang === 'id' ? 'Denda keterlambatan: Rp 1.000/hari per buku' : 'Late fee: Rp 1,000/day per book'}</li>
                        </ul>
                    </div>
                    <form onsubmit="handlePeminjaman(event)">
                        <div class="form-group">
                            <label data-lang-key="form_name">${currentLang === 'id' ? 'Nama Lengkap *' : 'Full Name *'}</label>
                            <input type="text" name="nama" required value="${currentUser ? escapeHtml(currentUser.nama) : ''}">
                        </div>
                        <div class="form-group">
                            <label data-lang-key="form_nim">${currentLang === 'id' ? 'NIM/NIP *' : 'Student ID/Staff ID *'}</label>
                            <input type="text" name="nim" required value="${currentUser ? escapeHtml(currentUser.nim) : ''}">
                        </div>
                        <div class="form-group">
                            <label>${labels.email}</label>
                            <input type="email" name="email" required value="${currentUser ? escapeHtml(currentUser.email) : ''}">
                        </div>
                        <div class="form-group">
                            <label data-lang-key="form_phone">${currentLang === 'id' ? 'No. Telepon *' : 'Phone No. *'}</label>
                            <input type="tel" name="telp" required value="${currentUser ? escapeHtml(currentUser.telp) : ''}">
                        </div>
                        <div class="form-group">
                            <label data-lang-key="form_book_title">${currentLang === 'id' ? 'Judul Buku *' : 'Book Title *'}</label>
                            <input type="text" name="judul" value="${data || ''}" required readonly style="background:var(--accent-blue-light); cursor:not-allowed;">
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label data-lang-key="form_borrow_date">${currentLang === 'id' ? 'Tanggal Pinjam *' : 'Borrow Date *'}</label>
                                <input type="date" name="tgl_pinjam" required value="${new Date().toISOString().split('T')[0]}">
                            </div>
                            <div class="form-group">
                                <label data-lang-key="form_return_date">${currentLang === 'id' ? 'Tanggal Kembali *' : 'Return Date *'}</label>
                                <input type="date" name="tgl_kembali" required readonly value="${(() => {
                                    const dur = currentUser.role === 'dosen' ? 14 : 7;
                                    const rDate = new Date();
                                    rDate.setDate(rDate.getDate() + dur);
                                    return rDate.toISOString().split('T')[0];
                                })()}" style="background:var(--accent-blue-light); cursor:not-allowed;">
                            </div>
                        </div>
                        <div style="margin-top: 20px;">
                            <button type="submit" class="btn-primary">${currentLang === 'id' ? 'Ajukan Peminjaman' : 'Submit Borrow Request'}</button>
                            <button type="button" class="btn-secondary" onclick="closeModal()">${labels.cancel}</button>
                        </div>
                    </form>
                `;

                // Reactive updates for borrow return date selection
                setTimeout(() => {
                    const pinjamInput = body.querySelector('input[name="tgl_pinjam"]');
                    const kembaliInput = body.querySelector('input[name="tgl_kembali"]');
                    if (pinjamInput && kembaliInput) {
                        pinjamInput.addEventListener('change', () => {
                            const pinjamDate = new Date(pinjamInput.value);
                            if (!isNaN(pinjamDate.getTime())) {
                                const returnDate = new Date(pinjamDate);
                                returnDate.setDate(returnDate.getDate() + (currentUser.role === 'dosen' ? 14 : 7));
                                kembaliInput.value = returnDate.toISOString().split('T')[0];
                            }
                        });
                    }
                }, 50);
            } else if (type === 'bebas-pinjam') {
                if (!currentUser) {
                    showToast(langDict.alert_not_logged_in, 'error');
                    openModal('login');
                    return;
                }
                title.textContent = langDict.modal_bebas_pinjam_title;
                body.innerHTML = `
                    <div class="alert alert-info">
                        <strong>${currentLang === 'id' ? 'Informasi:' : 'Information:'}</strong> ${currentLang === 'id' ? 'Surat bebas pinjam diperlukan untuk keperluan administrasi akademik.' : 'Loan clearance letter is required for academic administration purposes.'}
                    </div>
                    <form onsubmit="handleBebasPinjam(event)">
                        <div class="form-group">
                            <label data-lang-key="form_name">${currentLang === 'id' ? 'Nama Lengkap *' : 'Full Name *'}</label>
                            <input type="text" name="nama" required value="${currentUser ? escapeHtml(currentUser.nama) : ''}">
                        </div>
                        <div class="form-group">
                            <label data-lang-key="form_nim">${currentLang === 'id' ? 'NIM *' : 'Student ID *'}</label>
                            <input type="text" name="nim" required value="${currentUser ? escapeHtml(currentUser.nim) : ''}">
                        </div>
                        <div class="form-group">
                            <label data-lang-key="form_study_program">${currentLang === 'id' ? 'Program Studi *' : 'Study Program *'}</label>
                            <select name="prodi" required>
                                <option value="" data-lang-key="form_select_program">${currentLang === 'id' ? '-- Pilih Program Studi --' : '-- Select Study Program --'}</option>
                                <option ${currentUser && currentUser.prodi === 'Ilmu Al-Quran dan Tafsir' ? 'selected' : ''}>${currentLang === 'id' ? 'Ilmu Al-Quran dan Tafsir' : 'Qur\'an and Tafsir Studies'}</option>
                                <option ${currentUser && currentUser.prodi === 'Hukum Keluarga Islam' ? 'selected' : ''}>${currentLang === 'id' ? 'Hukum Keluarga Islam' : 'Islamic Family Law'}</option>
                                <option ${currentUser && currentUser.prodi === 'Ekonomi Syariah' ? 'selected' : ''}>${currentLang === 'id' ? 'Ekonomi Syariah' : 'Sharia Economics'}</option>
                                <option ${currentUser && currentUser.prodi === 'Pendidikan Agama Islam' ? 'selected' : ''}>${currentLang === 'id' ? 'Pendidikan Agama Islam' : 'Islamic Religious Education'}</option>
                                <option ${currentUser && currentUser.prodi === 'Ilmu Komunikasi' ? 'selected' : ''}>${currentLang === 'id' ? 'Ilmu Komunikasi' : 'Communication Science'}</option>
                                <option ${currentUser && currentUser.prodi=== 'Psikologi' ? 'selected' : ''}>${currentLang === 'id' ? 'Psikologi' : 'Psychology'}</option>
                                <option ${currentUser && currentUser.prodi === 'Teknik Informatika' ? 'selected' : ''}>${currentLang === 'id' ? 'Teknik Informatika' : 'Computer Science'}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>${labels.email}</label>
                            <input type="email" name="email" required value="${currentUser ? escapeHtml(currentUser.email) : ''}">
                        </div>
                        <div class="form-group">
                            <label data-lang-key="form_purpose">${currentLang === 'id' ? 'Keperluan *' : 'Purpose *'}</label>
                            <select name="keperluan" required>
                                <option value="" data-lang-key="form_select_purpose">${currentLang === 'id' ? '-- Pilih Keperluan --' : '-- Select Purpose --'}</option>
                                <option>${currentLang === 'id' ? 'Wisuda' : 'Graduation'}</option>
                                <option>${currentLang === 'id' ? 'Yudisium' : 'Judicium'}</option>
                                <option>${currentLang === 'id' ? 'Pindah Kampus' : 'Transfer Campus'}</option>
                                <option>${currentLang === 'id' ? 'Cuti Akademik' : 'Academic Leave'}</option>
                                <option>${currentLang === 'id' ? 'Lainnya' : 'Other'}</option>
                            </select>
                        </div>
                        <div style="margin-top: 20px;">
                            <button type="submit" class="btn-primary">${currentLang === 'id' ? 'Ajukan Surat' : 'Submit Request'}</button>
                            <button type="button" class="btn-secondary" onclick="closeModal()">${labels.cancel}</button>
                        </div>
                    </form>
                `;
            } else if (type === 'penerbitan') {
                if (!currentUser) {
                    showToast(langDict.alert_not_logged_in, 'error');
                    openModal('login');
                    return;
                }
                title.textContent = langDict.modal_penerbitan_title;
                body.innerHTML = `
                    <p style="margin-bottom: 20px;">${currentLang === 'id' ? 'UIN melayani penerbitan karya ilmiah dan menerima donasi buku.' : 'UIN provides services for the publication of scientific works and accepts book donations.'}</p>
                    <form onsubmit="handlePenerbitan(event)">
                        <div class="form-group">
                            <label data-lang-key="form_author_name">${currentLang === 'id' ? 'Nama Penulis *' : 'Author Name *'}</label>
                            <input type="text" name="penulis" required value="${currentUser ? escapeHtml(currentUser.nama) : ''}">
                        </div>
                        <div class="form-group">
                            <label>${labels.email}</label>
                            <input type="email" name="email" required value="${currentUser ? escapeHtml(currentUser.email) : ''}">
                        </div>
                        <div class="form-group">
                            <label data-lang-key="form_manuscript_title">${currentLang === 'id' ? 'Judul Naskah *' : 'Manuscript Title *'}</label>
                            <input type="text" name="judul" required>
                        </div>
                        <div class="form-group">
                            <label data-lang-key="form_publication_type">${currentLang === 'id' ? 'Jenis Penerbitan *' : 'Publication Type *'}</label>
                            <select name="jenis" required>
                                <option value="" data-lang-key="form_select_type">${currentLang === 'id' ? '-- Pilih Jenis --' : '-- Select Type --'}</option>
                                <option>${currentLang === 'id' ? 'Buku Teks' : 'Textbook'}</option>
                                <option>${currentLang === 'id' ? 'Monograf Penelitian' : 'Research Monograph'}</option>
                                <option>${currentLang === 'id' ? 'Prosiding' : 'Proceeding'}</option>
                                <option>${currentLang === 'id' ? 'Jurnal Ilmiah' : 'Scholarly Journal'}</option>
                                <option>${currentLang === 'id' ? 'Buku Ajar' : 'Teaching Material'}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label data-lang-key="form_manuscript_desc">${currentLang === 'id' ? 'Deskripsi Naskah *' : 'Manuscript Description *'}</label>
                            <textarea name="deskripsi" required></textarea>
                        </div>
                        <div style="margin-top: 20px;">
                            <button type="submit" class="btn-primary">${currentLang === 'id' ? 'Kirim Pengajuan' : 'Submit Request'}</button>
                            <button type="button" class="btn-secondary" onclick="closeModal()">${labels.cancel}</button>
                        </div>
                    </form>
                `;
            } else if (type === 'survey') {
                title.textContent = langDict.modal_survey_title;
                body.innerHTML = `
                    <form onsubmit="handleSurvey(event)">
                        <div class="form-group">
                            <label data-lang-key="form_name_optional">${currentLang === 'id' ? 'Nama (Opsional)' : 'Name (Optional)'}</label>
                            <input type="text" name="nama" value="${currentUser ? escapeHtml(currentUser.nama) : ''}">
                        </div>
                        <div class="form-group">
                            <label data-lang-key="form_status">${currentLang === 'id' ? 'Status *' : 'Status *'}</label>
                            <select name="status" required>
                                <option value="" data-lang-key="form_select_status">${currentLang === 'id' ? '-- Pilih Status --' : '-- Select Status --'}</option>
                                <option>${currentLang === 'id' ? 'Mahasiswa' : 'Student'}</option>
                                <option>${currentLang === 'id' ? 'Dosen' : 'Lecturer'}</option>
                                <option>${currentLang === 'id' ? 'Tenaga Kependidikan' : 'Educational Staff'}</option>
                                <option>${currentLang === 'id' ? 'Alumni' : 'Alumni'}</option>
                                <option>${currentLang === 'id' ? 'Umum' : 'General'}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label data-lang-key="form_service_rating">${currentLang === 'id' ? 'Penilaian Layanan *' : 'Service Rating *'}</label>
                            <select name="rating" required>
                                <option value="" data-lang-key="form_select_rating">${currentLang === 'id' ? '-- Pilih Penilaian --' : '-- Select Rating --'}</option>
                                <option value="5">⭐⭐⭐⭐⭐ ${currentLang === 'id' ? 'Sangat Baik' : 'Excellent'}</option>
                                <option value="4">⭐⭐⭐⭐ ${currentLang === 'id' ? 'Baik' : 'Good'}</option>
                                <option value="3">⭐⭐⭐ ${currentLang === 'id' ? 'Cukup' : 'Fair'}</option>
                                <option value="2">⭐⭐ ${currentLang === 'id' ? 'Kurang' : 'Poor'}</option>
                                <option value="1">⭐ ${currentLang === 'id' ? 'Buruk' : 'Bad'}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label data-lang-key="form_suggestions">${currentLang === 'id' ? 'Saran dan Kritik' : 'Suggestions and Criticism'}</label>
                            <textarea name="saran"></textarea>
                        </div>
                        <div style="margin-top: 20px;">
                            <button type="submit" class="btn-primary">${currentLang === 'id' ? 'Kirim Survey' : 'Submit Survey'}</button>
                            <button type="button" class="btn-secondary" onclick="closeModal()">${labels.cancel}</button>
                        </div>
                    </form>
                `;
            } else if (type === 'e-resources') {
                title.textContent = langDict.modal_eresources_title;
                body.innerHTML = `
                    <p style="margin-bottom: 20px;">${currentLang === 'id' ? 'Akses berbagai sumber elektronik untuk mendukung penelitian dan pembelajaran:' : 'Access various electronic resources to support research and learning:'}</p>
                    <div style="display: grid; gap: 15px;">
                        <div class="result-item" style="cursor: default;">
                            <h4>${currentLang === 'id' ? 'E-Journals Database' : 'E-Journals Database'}</h4>
                            <p>${currentLang === 'id' ? 'Koleksi jurnal elektronik dari berbagai penerbit internasional dan nasional' : 'Electronic journal collection from various international and national publishers'}</p>
                        </div>
                        <div class="result-item" style="cursor: default;">
                            <h4>${currentLang === 'id' ? 'E-Books Collection' : 'E-Books Collection'}</h4>
                            <p>${currentLang === 'id' ? 'Ribuan buku elektronik dalam berbagai bidang ilmu pengetahuan' : 'Thousands of electronic books across various fields of knowledge'}</p>
                        </div>
                    </div>
                `;
            } else if (type === 'all-collections') {
                title.textContent = langDict.modal_collections_title;
                let html = `
                    <div class="auth-tabs" style="margin-bottom: 20px;">
                        <button class="auth-tab active" onclick="filterCollection('all', this)">${langDict.collection_all}</button>
                        <button class="auth-tab" onclick="filterCollection('journal', this)">${langDict.collection_journal}</button>
                        <button class="auth-tab" onclick="filterCollection('book', this)">${langDict.collection_book}</button>
                        <button class="auth-tab" onclick="filterCollection('opac', this)">${langDict.collection_opac}</button>
                    </div>
                    <div id="collectionListContainer" class="manage-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
                    </div>
                `;
                body.innerHTML = html;
                setTimeout(() => filterCollection('all'), 50); 
            }

            modal.classList.add('show');
        }
/* ============================================================
   SECTION 10: AUTHENTICATION HANDLERS
   ============================================================ */
        function switchAuthTab(tab, element) {
            const tabs = document.querySelectorAll('.auth-tabs .auth-tab');
            const contents = document.querySelectorAll('.auth-content');
            
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            element.classList.add('active');
            document.getElementById(tab + 'Content').classList.add('active');
        }

        function switchProfileTab(tab, element) {
            const tabs = document.querySelectorAll('.auth-tabs .auth-tab');
            const contents = document.querySelectorAll('.auth-content');
            
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            element.classList.add('active');
            document.getElementById(tab + '-content').classList.add('active');
        }

        function closeModal() {
            document.getElementById('modal').classList.remove('show');
            document.body.style.overflow = ''; // Release scroll lock
            lastOpenedModalType = null;
        }

        document.getElementById('closeModalBtn').addEventListener('click', closeModal);
        document.getElementById('modal').addEventListener('click', (e) => {
            if (e.target.id === 'modal') closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });

        function handleLogin(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            const email = formData.get('email');
            const password = formData.get('password');
            const langDict = translations[currentLang];
            
            const users = loadUsers();
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                saveCurrentUser(user);
                const successMsg = currentLang === 'id' ? `Selamat datang kembali, ${user.nama}!` : `Welcome back, ${user.nama}!`;
                showToast(successMsg);
                closeModal();
            } else {
                const failMsg = currentLang === 'id' ? 'Email atau password salah!' : 'Invalid email or password!';
                showToast(failMsg, 'error');
            }
        }

        function handleRegister(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            
            const alertPasswordMismatch = currentLang === 'id' ? 'Password tidak cocok!' : 'Passwords do not match!';
            const alertEmailExists = currentLang === 'id' ? 'Email sudah terdaftar!' : 'Email is already registered!';
            const alertNIMExists = currentLang === 'id' ? 'NIM/NIP sudah terdaftar!' : 'Student ID/Staff ID is already registered!';
            const alertSuccess = currentLang === 'id' ? 'Pendaftaran berhasil! Silakan login dengan akun Anda.' : 'Registration successful! Please log in with your account.';

            if (data.password !== data.confirm_password) {
                showToast(alertPasswordMismatch, 'error');
                return;
            }
            
            // Pengetatan Validasi Email Domain UIN
            if (!data.email.toLowerCase().endsWith('uinjkt.ac.id')) {
                showToast(currentLang === 'id' 
                    ? 'Pendaftaran wajib menggunakan email resmi UIN Jakarta (@uinjkt.ac.id / @apps.uinjkt.ac.id)!' 
                    : 'Registration must use official UIN Jakarta email (@uinjkt.ac.id / @apps.uinjkt.ac.id)!', 'error');
                return;
            }

            // Validasi Karakter NIM/NIP
            const nimVal = data.nim.trim();
            const numericRegex = /^\d+$/;
            if (data.role_type === 'dosen') {
                if (nimVal.length !== 18 || !numericRegex.test(nimVal)) {
                    showToast(currentLang === 'id' 
                        ? 'NIP Dosen harus berupa 18 digit angka!' 
                        : 'Lecturer NIP must be exactly 18 digits of numbers!', 'error');
                    return;
                }
            } else {
                if (nimVal.length !== 14 || !numericRegex.test(nimVal)) {
                    showToast(currentLang === 'id' 
                        ? 'NIM Mahasiswa harus berupa 14 digit angka!' 
                        : 'Student NIM must be exactly 14 digits of numbers!', 'error');
                    return;
                }
            }
            
            const users = loadUsers();
            
            if (users.some(u => u.email === data.email)) {
                showToast(alertEmailExists, 'error');
                return;
            }
            
            if (users.some(u => u.nim === data.nim)) {
                showToast(alertNIMExists, 'error');
                return;
            }
            
            const newUser = {
                id: 'u-' + Date.now(),
                nama: data.nama,
                email: data.email,
                nim: data.nim,
                prodi: data.prodi || '',
                telp: data.telp,
                password: data.password,
                role: data.role_type || 'user', 
                tanggal_daftar: new Date().toISOString()
            };
            
            users.push(newUser);
            saveUsers(users);
            
            showToast(alertSuccess);
            
            // Berpindah otomatis ke tab login setelah daftar
            const loginTabBtn = document.querySelector('.auth-tab');
            if (loginTabBtn) switchAuthTab('login', loginTabBtn);
        }

        // ⭐ FUNGSI RESET PASSWORD (2 LANGKAH)
        function handleForgotPassword(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData);
            let users = loadUsers();
            const modalBody = document.getElementById('modalBody');

            const alertEmailNotFound = currentLang === 'id' ? 'Email tidak terdaftar! Silakan periksa kembali.' : 'Email not found! Please check again.';
            const alertResetSent = (email) => currentLang === 'id' ? `Link reset password telah dikirim ke ${email}. (Simulasi: Silakan lanjutkan ganti password)` : `Password reset link has been sent to ${email}. (Simulation: Please proceed to change password)`;
            const step2Title = currentLang === 'id' ? 'Langkah 2 dari 2.' : 'Step 2 of 2.';
            const step2Instruction = (email) => currentLang === 'id' ? `Masukkan kata sandi baru untuk ${escapeHtml(email)}.` : `Enter new password for ${escapeHtml(email)}.`;
            const labelNewPassword = currentLang === 'id' ? 'Password Baru *' : 'New Password *';
            const labelConfirmNewPassword = currentLang === 'id' ? 'Konfirmasi Password Baru *' : 'Confirm New Password *';
            const placeholderMin6 = currentLang === 'id' ? 'Minimal 6 karakter' : 'Minimum 6 characters';
            const placeholderRepeat = currentLang === 'id' ? 'Ulangi password baru' : 'Repeat new password';
            const buttonChangePassword = currentLang === 'id' ? 'Ganti Password' : 'Change Password';
            const alertPasswordMismatch = currentLang === 'id' ? 'Password baru tidak cocok!' : 'New passwords do not match!';
            const alertMinLength = currentLang === 'id' ? 'Password minimal 6 karakter!' : 'Password must be at least 6 characters!';
            const alertUserNotFound = currentLang === 'id' ? 'Terjadi kesalahan. Pengguna tidak ditemukan.' : 'An error occurred. User not found.';
            const alertSuccessTitle = currentLang === 'id' ? 'Password Berhasil Diubah!' : 'Password Successfully Changed!';
            const alertSuccessBody = currentLang === 'id' ? 'Anda sekarang dapat login menggunakan kata sandi yang baru.' : 'You can now log in using your new password.';
            const buttonLoginNow = currentLang === 'id' ? 'Login Sekarang' : 'Login Now';

            if (data.step === 'request') {
                const user = users.find(u => u.email === data.email);
                
                if (!user) {
                    showToast(alertEmailNotFound, 'error');
                    return;
                }
                
                showToast(alertResetSent(user.email));
                
                modalBody.innerHTML = `
                    <div class="alert alert-info">
                        <strong>${step2Title}</strong> ${step2Instruction(user.email)}
                    </div>
                    <form onsubmit="handleForgotPassword(event)">
                        <input type="hidden" name="step" value="change">
                        <input type="hidden" name="email" value="${escapeHtml(user.email)}">
                        <div class="form-group">
                            <label>${labelNewPassword}</label>
                            <input type="password" name="new_password" required placeholder="${placeholderMin6}" minlength="6">
                        </div>
                        <div class="form-group">
                            <label>${labelConfirmNewPassword}</label>
                            <input type="password" name="confirm_password" required placeholder="${placeholderRepeat}">
                        </div>
                        <div style="margin-top: 20px;">
                            <button type="submit" class="btn-primary">${buttonChangePassword}</button>
                        </div>
                    </form>
                `;

            } else if (data.step === 'change') {
                if (data.new_password !== data.confirm_password) {
                    showToast(alertPasswordMismatch, 'error');
                    return;
                }

                if (data.new_password.length < 6) {
                     showToast(alertMinLength, 'error');
                    return;
                }

                const userIndex = users.findIndex(u => u.email === data.email);
                
                if (userIndex === -1) {
                    showToast(alertUserNotFound, 'error');
                    return;
                }
                
                users[userIndex].password = data.new_password;
                saveUsers(users);

                modalBody.innerHTML = `
                    <div class="alert alert-success">
                        <strong>${alertSuccessTitle}</strong><br><br>
                        ${alertSuccessBody}
                    </div>
                    <button class="btn-primary" onclick="openModal('login')">${buttonLoginNow}</button>
                `;
            }
        }
/* ============================================================
   SECTION 11: SERVICE REQUEST HANDLERS
   ============================================================ */
        function handlePeminjaman(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            const kode = 'PJM-' + Date.now();

            // Batas peminjaman berdasarkan peran: Mahasiswa=3, Dosen=5
            const peminjaman = JSON.parse(localStorage.getItem('uin_peminjaman') || '[]');
            const activeLoanCount = peminjaman.filter(p => p.userEmail === currentUser.email && p.status !== 'returned').length;
            const maxLoan = currentUser.role === 'dosen' ? 5 : 3;
            if (activeLoanCount >= maxLoan) {
                showToast(currentLang === 'id' ? `Gagal! Anda sudah meminjam ${maxLoan} buku (batas maksimal).` : `Failed! You already have ${maxLoan} active loans (maximum limit).`, 'error');
                return;
            }

            // Cari buku di katalog dan kurangi stok
            const bookTitle = data.judul;
            let bookFound = null;
            let bookType = null;

            // Cari di koleksi buku
            bookFound = libraryData.book.find(b => b.title === bookTitle && b.available > 0);
            if (bookFound) {
                bookType = 'book';
                bookFound.available--;
            } else {
                // Cari di koleksi OPAC
                const opacItem = libraryData.opac.find(o => o.title === bookTitle && o.status === 'Tersedia');
                if (opacItem) {
                    bookType = 'opac';
                    bookFound = opacItem;
                    if (opacItem.copies > 1) {
                        opacItem.copies--;
                    } else {
                        opacItem.status = 'Dipinjam';
                    }
                }
            }

            if (bookFound) {
                saveData(); // Simpan perubahan stok ke localStorage
            }

            // Simpan data peminjaman dengan info lengkap
            // Durasi pinjam: Mahasiswa=7 hari, Dosen=14 hari
            const today = new Date();
            const loanDuration = currentUser.role === 'dosen' ? 14 : 7;
            const returnDate = new Date(today);
            returnDate.setDate(returnDate.getDate() + loanDuration);

            peminjaman.push({
                ...data,
                kode,
                bookId: bookFound ? bookFound.id : null,
                bookType: bookType,
                userEmail: currentUser.email,
                userName: currentUser.nama,
                userNim: currentUser.nim,
                status: 'active',
                tgl_pinjam: data.tgl_pinjam || today.toISOString().split('T')[0],
                tgl_kembali: data.tgl_kembali || returnDate.toISOString().split('T')[0],
                tanggal: new Date().toISOString()
            });
            localStorage.setItem('uin_peminjaman', JSON.stringify(peminjaman));

            showToast(currentLang === 'id' ? 'Peminjaman berhasil! Stok buku diperbarui.' : 'Borrowing successful! Book stock updated.');

            const body = document.getElementById('modalBody');
            body.innerHTML = `
                <div class="alert alert-success">
                    <strong>${currentLang === 'id' ? 'Peminjaman Berhasil!' : 'Borrowing Successful!'}</strong><br>
                    ${currentLang === 'id' ? 'Kode Peminjaman' : 'Borrowing Code'}: <strong>${kode}</strong><br>
                    ${currentLang === 'id' ? 'Buku' : 'Book'}: <strong>${escapeHtml(bookTitle)}</strong><br>
                    ${currentLang === 'id' ? 'Tenggat Pengembalian' : 'Due Date'}: <strong>${data.tgl_kembali || returnDate.toISOString().split('T')[0]}</strong><br><br>
                    ${currentLang === 'id' ? 'Silakan datang ke perpustakaan untuk mengambil buku.' : 'Please come to the library to pick up the book.'}
                </div>
                <button class="btn-primary" onclick="closeModal()">${currentLang === 'id' ? 'Tutup' : 'Close'}</button>
            `;
        }

        function handleBebasPinjam(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            const nomor = 'SBP-' + Date.now();

            // VALIDASI: Cek apakah user masih memiliki peminjaman aktif
            const peminjaman = JSON.parse(localStorage.getItem('uin_peminjaman') || '[]');
            const activeLoans = peminjaman.filter(p => p.userEmail === currentUser.email && p.status === 'active');
            if (activeLoans.length > 0) {
                const bookTitles = activeLoans.map(l => `"${l.judul}"`).join(', ');
                showToast(currentLang === 'id'
                    ? `Gagal! Anda masih meminjam ${activeLoans.length} buku: ${bookTitles}. Kembalikan terlebih dahulu.`
                    : `Failed! You still have ${activeLoans.length} active loan(s): ${bookTitles}. Return them first.`, 'error');
                return;
            }

            const bebas = JSON.parse(localStorage.getItem('uin_bebas_pinjam') || '[]');
            
            // VALIDASI DUPLIKAT: Cek apakah user sudah memiliki pengajuan pending/approved
            const existingBebas = bebas.filter(b => b.userEmail === currentUser.email && (b.status === 'pending' || b.status === 'approved'));
            if (existingBebas.length > 0) {
                const statusLabel = existingBebas[0].status === 'approved'
                    ? (currentLang === 'id' ? 'DISETUJUI' : 'APPROVED')
                    : (currentLang === 'id' ? 'MENUNGGU PERSETUJUAN' : 'PENDING APPROVAL');
                showToast(currentLang === 'id'
                    ? `Gagal! Anda sudah memiliki pengajuan aktif dengan status: ${statusLabel}.`
                    : `Failed! You already have an active clearance request with status: ${statusLabel}.`, 'error');
                return;
            }
            bebas.push({
                ...data,
                nomor,
                userEmail: currentUser.email,
                userName: currentUser.nama,
                userNim: currentUser.nim,
                status: 'pending', // Menunggu persetujuan admin
                tanggal: new Date().toISOString()
            });
            localStorage.setItem('uin_bebas_pinjam', JSON.stringify(bebas));

            showToast(currentLang === 'id' ? 'Pengajuan surat dikirim! Menunggu persetujuan pustakawan.' : 'Letter request sent! Waiting for librarian approval.');

            const body = document.getElementById('modalBody');
            body.innerHTML = `
                <div class="alert alert-success">
                    <strong>${currentLang === 'id' ? 'Pengajuan Dikirim!' : 'Request Submitted!'}</strong><br>
                    ${currentLang === 'id' ? 'Nomor Pengajuan' : 'Request Number'}: <strong>${nomor}</strong><br><br>
                    ${currentLang === 'id' ? 'Pengajuan Anda akan diverifikasi oleh pustakawan. Cek status di menu profil Anda.' : 'Your request will be verified by the librarian. Check status in your profile menu.'}
                </div>
                <button class="btn-primary" onclick="closeModal()">${currentLang === 'id' ? 'Tutup' : 'Close'}</button>
            `;
        }

        function handlePenerbitan(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            const nomor = 'UINP-' + Date.now();
            
            const penerbitan = JSON.parse(localStorage.getItem('uin_penerbitan') || '[]');
            penerbitan.push({
                ...data,
                nomor,
                userEmail: currentUser.email,
                userName: currentUser.nama,
                status: 'review', // Dalam peninjauan
                tanggal: new Date().toISOString()
            });
            localStorage.setItem('uin_penerbitan', JSON.stringify(penerbitan));
            
            showToast(currentLang === 'id' ? 'Pengajuan penerbitan dikirim!' : 'Publication request sent!');

            const body = document.getElementById('modalBody');
            body.innerHTML = `
                <div class="alert alert-success">
                    <strong>${currentLang === 'id' ? 'Pengajuan Berhasil!' : 'Submission Successful!'}</strong><br>
                    ${currentLang === 'id' ? 'Nomor Registrasi' : 'Registration Number'}: <strong>${nomor}</strong><br><br>
                    ${currentLang === 'id' ? 'Tim editorial akan meninjau naskah Anda dalam 7-14 hari kerja. Cek status di menu profil Anda.' : 'The editorial team will review your manuscript within 7-14 working days. Check status in your profile menu.'}
                </div>
                <button class="btn-primary" onclick="closeModal()">${currentLang === 'id' ? 'Tutup' : 'Close'}</button>
            `;
        }

        function handleSurvey(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            
            const survey = JSON.parse(localStorage.getItem('uin_survey') || '[]');
            survey.push({
                ...data,
                userEmail: currentUser ? currentUser.email : 'anonymous',
                tanggal: new Date().toISOString()
            });
            localStorage.setItem('uin_survey', JSON.stringify(survey));
            
            showToast(currentLang === 'id' ? 'Terima kasih atas saran Anda!' : 'Thank you for your feedback!');

            const body = document.getElementById('modalBody');
            body.innerHTML = `
                <div class="alert alert-success">
                    <strong>${currentLang === 'id' ? 'Terima Kasih!' : 'Thank You!'}</strong><br>
                    ${currentLang === 'id' ? 'Survey Anda telah berhasil dikirim. Masukan Anda sangat berharga untuk peningkatan layanan perpustakaan.' : 'Your survey has been submitted successfully. Your feedback is highly valuable for improving library services.'}
                </div>
                <button class="btn-primary" onclick="closeModal()">${currentLang === 'id' ? 'Tutup' : 'Close'}</button>
            `;
        }


/* ============================================================
   SECTION 12: CRUD FORM HANDLERS (ADMIN)
   ============================================================ */
        function handleAddJournal(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            
            libraryData.journal.push({
                id: generateId(),
                title: data.title,
                author: data.author,
                year: data.year ? parseInt(data.year) : null,
                issn: data.issn || '',
                description: data.description || ''
            });
            
            saveData();
            e.target.reset();
            showToast(currentLang === 'id' ? 'Jurnal berhasil ditambahkan!' : 'Journal successfully added!');
            renderDataLists();
            const subTabBtn = document.querySelector('.sub-tab-btn[onclick*="daftar"]');
            if (subTabBtn) {
                switchSubTab('daftar', subTabBtn);
            }
        }

        function handleAddBook(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            
            libraryData.book.push({
                id: generateId(),
                title: data.title,
                author: data.author,
                year: data.year ? parseInt(data.year) : null,
                isbn: data.isbn || '',
                pages: data.pages ? parseInt(data.pages) : null,
                available: data.available ? parseInt(data.available) : 0,
                description: data.description || ''
            });
            
            saveData();
            e.target.reset();
            showToast(currentLang === 'id' ? 'Buku berhasil ditambahkan!' : 'Book successfully added!');
            renderDataLists();
            const subTabBtn = document.querySelector('.sub-tab-btn[onclick*="daftar"]');
            if (subTabBtn) {
                switchSubTab('daftar', subTabBtn);
            }
        }

        function handleAddOpac(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            
            libraryData.opac.push({
                id: generateId(),
                title: data.title,
                author: data.author,
                call_number: data.call_number || '',
                year: data.year ? parseInt(data.year) : null,
                copies: data.copies ? parseInt(data.copies) : 0,
                status: data.status || 'Tersedia',
                description: data.description || ''
            });
            
            saveData();
            e.target.reset();
            showToast(currentLang === 'id' ? 'OPAC berhasil ditambahkan!' : 'OPAC successfully added!');
            renderDataLists();
            const subTabBtn = document.querySelector('.sub-tab-btn[onclick*="daftar"]');
            if (subTabBtn) {
                switchSubTab('daftar', subTabBtn);
            }
        }

/* ============================================================
   SECTION 13: DATA RENDERING & CRUD UTILITIES
   ============================================================ */
        function renderDataLists() {
            const container = document.getElementById('dataLists');
            if (!container) return;
            
            container.innerHTML = '';
            
            ['journal', 'book', 'opac'].forEach(type => {
                const items = libraryData[type];
                const typeLabel = currentLang === 'id' ? (type === 'journal' ? 'JURNAL' : type === 'book' ? 'BUKU' : 'OPAC') : (type === 'journal' ? 'JOURNAL' : type === 'book' ? 'BOOK' : 'OPAC');
                
                const section = document.createElement('div');
                section.style.marginBottom = '15px';
                
                const header = document.createElement('div');
                header.style.fontWeight = '700';
                header.style.color = 'var(--primary-blue)';
                header.style.marginBottom = '10px';
                header.textContent = `${typeLabel} (${items.length})`;
                section.appendChild(header);
                
                const buttonLabels = {
                    view: currentLang === 'id' ? 'Lihat' : 'View',
                    edit: currentLang === 'id' ? 'Edit' : 'Edit',
                    delete: currentLang === 'id' ? 'Hapus' : 'Delete',
                };

                items.forEach(item => {
                    const itemDiv = document.createElement('div');
                    itemDiv.className = 'data-item';
                    itemDiv.innerHTML = `
                        <div class="data-item-header">
                            <div style="flex: 1; min-width: 0;">
                                <div class="data-item-title">${escapeHtml(item.title)}</div>
                                <div class="muted" style="font-size: 12px; margin-top: 4px;">${escapeHtml(item.author)} • ${item.year || '-'}</div>
                            </div>
                            <div class="data-item-actions">
                                <button class="btn-small" onclick="showDetail('${type}', '${item.id}')">${buttonLabels.view}</button>
                                <button class="btn-small" onclick="editItem('${type}', '${item.id}')">${buttonLabels.edit}</button>
                                <button class="btn-small" onclick="deleteItem('${type}', '${item.id}')" style="color: var(--danger);">${buttonLabels.delete}</button>
                            </div>
                        </div>
                    `;
                    section.appendChild(itemDiv);
                });
                
                container.appendChild(section);
            });
        }

        // --- FUNGSI BARU: RENDER DAFTAR USER UNTUK ADMIN ---
        function renderUserList() {
            const container = document.getElementById('userListContainer');
            if (!container || !currentUser || currentUser.role !== 'admin') return;

            const users = loadUsers();
            container.innerHTML = '';

            users.forEach(user => {
                const isSelf = user.email === currentUser.email;
                const itemDiv = document.createElement('div');
                itemDiv.className = 'data-item';
                itemDiv.innerHTML = `
                    <div class="data-item-header" style="align-items: center;">
                        <div style="flex: 1;">
                            <div class="data-item-title">${escapeHtml(user.nama)} ${isSelf ? '(Anda)' : ''}</div>
                            <div class="muted" style="font-size: 12px;">${user.email} • Peran: <strong>${user.role === 'admin' ? 'Pustakawan (Admin)' : user.role === 'dosen' ? 'Dosen' : 'Mahasiswa'}</strong></div>
                        </div>
                        ${!isSelf ? `
                        <div class="data-item-actions" style="margin: 0;">
                            <select class="role-select" onchange="changeUserRole('${user.id}', this.value)" style="padding: 8px 12px; border-radius: var(--radius-sm); font-size: 13px; font-family: inherit; border: 1px solid var(--border-color); background: var(--card); color: var(--text-dark); cursor: pointer; font-weight: 600;">
                                <option value="user" ${user.role === 'user' ? 'selected' : ''}>${currentLang === 'id' ? 'Mahasiswa' : 'Student'}</option>
                                <option value="dosen" ${user.role === 'dosen' ? 'selected' : ''}>${currentLang === 'id' ? 'Dosen' : 'Lecturer'}</option>
                                <option value="admin" ${user.role === 'admin' ? 'selected' : ''}>${currentLang === 'id' ? 'Pustakawan (Admin)' : 'Librarian (Admin)'}</option>
                            </select>
                        </div>` : ''}
                    </div>
                `;
                container.appendChild(itemDiv);
            });
        }

        function changeUserRole(userId, newRole) {
            let users = loadUsers();
            const index = users.findIndex(u => u.id === userId);
            if (index !== -1) {
                users[index].role = newRole;
                saveUsers(users);
                showToast(currentLang === 'id' ? 'Peran pengguna berhasil diperbarui!' : 'User role updated successfully!');
            }
        }

        function editItem(type, id) {
            const item = libraryData[type].find(i => i.id === id);
            if (!item) return;

            const modal = document.getElementById('modal');
            const title = document.getElementById('modalTitle');
            const body = document.getElementById('modalBody');

            const itemTypeLabel = currentLang === 'id' ? (type === 'journal' ? 'Jurnal' : type === 'book' ? 'Buku' : 'OPAC') : (type === 'journal' ? 'Journal' : type === 'book' ? 'Book' : 'OPAC');
            title.textContent = `${currentLang === 'id' ? 'Edit' : 'Edit'} ${itemTypeLabel}`;

            const labels = {
                title: currentLang === 'id' ? 'Judul *' : 'Title *',
                author: currentLang === 'id' ? 'Penulis *' : 'Author *',
                year: currentLang === 'id' ? 'Tahun' : 'Year',
                issn: 'ISSN',
                description: currentLang === 'id' ? 'Deskripsi' : 'Description',
                isbn: 'ISBN',
                pages: currentLang === 'id' ? 'Halaman' : 'Pages',
                available: currentLang === 'id' ? 'Ketersediaan' : 'Availability',
                call_number: currentLang === 'id' ? 'Nomor Panggil' : 'Call Number',
                copies: currentLang === 'id' ? 'Eksemplar' : 'Copies',
                status: currentLang === 'id' ? 'Status' : 'Status',
                status_available: currentLang === 'id' ? 'Tersedia' : 'Available',
                status_borrowed: currentLang === 'id' ? 'Dipinjam' : 'Borrowed',
                save_changes: currentLang === 'id' ? 'Simpan Perubahan' : 'Save Changes',
                cancel: currentLang === 'id' ? 'Batal' : 'Cancel',
            };

            let formHtml = '<form id="editForm">';

            if (type === 'journal') {
                formHtml += `
                    <div class="form-group"><label>${labels.title}</label><input type="text" name="title" value="${escapeHtml(item.title)}" required></div>
                    <div class="form-group"><label>${labels.author}</label><input type="text" name="author" value="${escapeHtml(item.author)}" required></div>
                    <div class="form-row">
                        <div class="form-group"><label>${labels.year}</label><input type="number" name="year" value="${item.year || ''}"></div>
                        <div class="form-group"><label>${labels.issn}</label><input type="text" name="issn" value="${escapeHtml(item.issn || '')}"></div>
                    </div>
                `;
            } else if (type === 'book') {
                formHtml += `
                    <div class="form-group"><label>${labels.title}</label><input type="text" name="title" value="${escapeHtml(item.title)}" required></div>
                    <div class="form-group"><label>${labels.author}</label><input type="text" name="author" value="${escapeHtml(item.author)}" required></div>
                    <div class="form-row">
                        <div class="form-group"><label>${labels.year}</label><input type="number" name="year" value="${item.year || ''}"></div>
                        <div class="form-group"><label>${labels.isbn}</label><input type="text" name="isbn" value="${escapeHtml(item.isbn || '')}"></div>
                    </div>
                    <div class="form-row">
                        <div class="form-group"><label>${labels.pages}</label><input type="number" name="pages" value="${item.pages || ''}"></div>
                        <div class="form-group"><label>${labels.available}</label><input type="number" name="available" value="${item.available || 0}"></div>
                    </div>
                `;
            } else if (type === 'opac') {
                formHtml += `
                    <div class="form-group"><label>${labels.title}</label><input type="text" name="title" value="${escapeHtml(item.title)}" required></div>
                    <div class="form-group"><label>${labels.author}</label><input type="text" name="author" value="${escapeHtml(item.author)}" required></div>
                    <div class="form-group"><label>${labels.call_number}</label><input type="text" name="call_number" value="${escapeHtml(item.call_number || '')}"></div>
                    <div class="form-row">
                        <div class="form-group"><label>${labels.year}</label><input type="number" name="year" value="${item.year || ''}"></div>
                        <div class="form-group"><label>${labels.copies}</label><input type="number" name="copies" value="${item.copies || 0}"></div>
                    </div>
                    <div class="form-group">
                        <label>${labels.status}</label>
                        <select name="status">
                            <option value="Tersedia" ${item.status === 'Tersedia' ? 'selected' : ''}>${labels.status_available}</option>
                            <option value="Dipinjam" ${item.status === 'Dipinjam' ? 'selected' : ''}>${labels.status_borrowed}</option>
                        </select>
                    </div>
                `;
            }

            formHtml += `
                    <div class="form-group"><label>${labels.description}</label><textarea name="description">${escapeHtml(item.description || '')}</textarea></div>
                    <div style="margin-top: 20px;">
                        <button type="submit" class="btn-primary">${labels.save_changes}</button>
                        <button type="button" class="btn-secondary" onclick="closeModal()">${labels.cancel}</button>
                    </div>
                </form>`;

            body.innerHTML = formHtml;

            document.getElementById('editForm').addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const data = Object.fromEntries(formData);
                const index = libraryData[type].findIndex(i => i.id === id);
                if (index !== -1) {
                    libraryData[type][index] = { ...libraryData[type][index], ...data };
                    if (data.year) libraryData[type][index].year = parseInt(data.year);
                    if (data.pages) libraryData[type][index].pages = parseInt(data.pages);
                    if (data.available) libraryData[type][index].available = parseInt(data.available);
                    if (data.copies) libraryData[type][index].copies = parseInt(data.copies);
                    saveData();
                    showToast(currentLang === 'id' ? 'Perubahan disimpan!' : 'Changes saved!');
                    closeModal();
                }
            });
            modal.classList.add('show');
        }

        function deleteItem(type, id) {
            if (confirm(currentLang === 'id' ? 'Hapus data ini?' : 'Delete this data?')) {
                libraryData[type] = libraryData[type].filter(i => i.id !== id);
                saveData();
                showToast(currentLang === 'id' ? 'Terhapus!' : 'Deleted!');
                closeModal();
            }
        }

        function saveData() {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(libraryData));
            renderDataLists();
            // UPDATE: Menambahkan sinkronisasi angka di Tab Koleksi secara real-time
            if (typeof updateTabCounts === 'function') updateTabCounts();
        }
        function renderPeminjamanAdmin() {
    const container = document.getElementById('peminjamanListAdmin');
    if (!container) return;

    // Ambil data peminjaman dari localStorage
    const dataPeminjaman = JSON.parse(localStorage.getItem('uin_peminjaman') || '[]');
    
    if (dataPeminjaman.length === 0) {
        container.innerHTML = '<p class="muted" style="text-align:center; padding:10px;">Belum ada peminjaman.</p>';
        return;
    }

    container.innerHTML = '';
    
    // Tampilkan dari yang terbaru
    dataPeminjaman.reverse().forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'data-item';
        div.style.borderLeft = '4px solid var(--accent-orange)';
        div.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 3px;">
                <div style="font-weight: 800; color: var(--primary-blue); font-size: 13px;">${item.kode}</div>
                <div style="font-weight: 700;">${escapeHtml(item.judul)}</div>
                <div class="muted" style="font-size: 11px;">
                    ${escapeHtml(item.nama)} (${escapeHtml(item.nim)})<br>
                    Pinjam: ${item.tgl_pinjam} | Kembali: ${item.tgl_kembali}
                </div>
            </div>
            <button class="btn-small" onclick="hapusPeminjaman(${index})" style="color: var(--danger); margin-top:5px;">Selesai/Hapus</button>
        `;
        container.appendChild(div);
    });
}

// Fungsi untuk menghapus riwayat peminjaman jika sudah selesai
function hapusPeminjaman(index) {
    if (confirm('Tandai peminjaman ini sebagai selesai dan hapus dari daftar?')) {
        let data = JSON.parse(localStorage.getItem('uin_peminjaman') || '[]');
        data.reverse(); // Sesuaikan index karena tadi di-reverse saat render
        data.splice(index, 1);
        data.reverse(); // Balikkan lagi ke urutan asal
        localStorage.setItem('uin_peminjaman', JSON.stringify(data));
        renderPeminjamanAdmin();
        showToast('Data peminjaman diperbarui');
    }
}
/* ============================================================
   SECTION 14: DATA UTILITIES (EXPORT & DEMO)
   ============================================================ */
        function exportData() {
            const dataStr = JSON.stringify(libraryData, null, 2);
            const blob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'perpustakaan_data_' + Date.now() + '.json';
            a.click();
            URL.revokeObjectURL(url);
            // Diganti ke showToast
            showToast(currentLang === 'id' ? 'Data berhasil diekspor sebagai JSON.' : 'Data successfully exported as JSON.');
        }

        function loadDemoData() {
            const confirmMsg = currentLang === 'id' ? 'Muat data demo? Ini akan menimpa data saat ini.' : 'Load demo data? This will overwrite current data.';
            const alertMsg = currentLang === 'id' ? 'Data demo berhasil dimuat!' : 'Demo data successfully loaded!';

            if (!confirm(confirmMsg)) return;
            libraryData = structuredClone(demoData);
            saveData();
            // Diganti ke showToast
            showToast(alertMsg);
        }

        function clearAllData() {
            const confirmMsg = currentLang === 'id' ? 'Hapus semua data? Tindakan ini tidak dapat dibatalkan!' : 'Delete all data? This action cannot be undone!';
            const alertMsg = currentLang === 'id' ? 'Semua data berhasil dihapus!' : 'All data successfully deleted!';
            
            if (!confirm(confirmMsg)) return;
            
            localStorage.removeItem(STORAGE_KEY);
            localStorage.removeItem('uin_peminjaman');
            localStorage.removeItem('uin_bebas_pinjam');
            localStorage.removeItem('uin_penerbitan');
            localStorage.removeItem('uin_survey');
            
            libraryData = structuredClone(demoData); 
            saveData();
            // Diganti ke showToast
            showToast(alertMsg);
        }
/* ============================================================
   SECTION 15: CARD INTERACTIVITY & NEWS
   ============================================================ */
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('click', () => {
                const service = card.dataset.service;
                const langDict = translations[currentLang];
                // Check if the service requires login
                if (['peminjaman', 'bebas-pinjam', 'penerbitan'].includes(service) && !currentUser) {
                     showToast(langDict.alert_not_logged_in, 'error');
                     openModal('login');
                } else if (service === 'bebas-pinjam' && currentUser && currentUser.role === 'dosen') {
                    // Dosen tidak bisa mengajukan Surat Bebas Pinjam
                    showToast(currentLang === 'id' 
                        ? 'Layanan Surat Bebas Pinjam hanya untuk Mahasiswa. Silakan gunakan layanan Penerbitan Buku.' 
                        : 'Loan Clearance Letter is only for students. Please use the Book Publishing service.', 'error');
                    openModal('penerbitan');
                } else if (service === 'penerbitan' && currentUser && currentUser.role === 'user') {
                    // Mahasiswa tidak bisa mengajukan Penerbitan
                    showToast(currentLang === 'id' 
                        ? 'Layanan Penerbitan Buku hanya untuk Dosen.' 
                        : 'Book Publishing service is only for lecturers.', 'error');
                } else {
                    openModal(service);
                }
            });
        });

        document.querySelectorAll('.news-card').forEach(card => {
            card.addEventListener('click', () => {
                const news = card.dataset.news;
                const title = document.getElementById('modalTitle');
                const body = document.getElementById('modalBody');
                const modal = document.getElementById('modal');

                const newsData = {
                    'news-1': {
                        title: translations[currentLang].news_1_title,
                        content: currentLang === 'id' ? `
                            <div class="news-icon" style="width: 100%; height: 250px; margin-bottom: 20px;"></div>
                            <p style="color: var(--secondary-blue); font-weight: 600; margin-bottom: 15px;">20 Agustus 2025</p>
                            <p style="line-height: 1.8; margin-bottom: 15px;">UPT Perpustakaan menyelenggarakan program pelatihan **Systematic Literature Review (SLR)** untuk mahasiswa baru pascasarjana angkatan 2025. Pelatihan ini bertujuan untuk membekali mahasiswa dengan kemampuan melakukan tinjauan literatur sistematis yang sangat penting dalam penelitian akademik.</p>
                            <p style="line-height: 1.8; margin-bottom: 15px;">Materi yang diberikan meliputi strategi pencarian literatur, evaluasi kualitas sumber, dan teknik sintesis informasi. Para mahasiswa juga diajarkan cara menggunakan berbagai database akademik dan tools manajemen referensi.</p>
                            <p style="line-height: 1.8;">Kegiatan ini mendapat sambutan positif dari peserta karena sangat relevan dengan kebutuhan penelitian mereka di tingkat pascasarjana.</p>
                        ` : `
                            <div class="news-icon" style="width: 100%; height: 250px; margin-bottom: 20px;"></div>
                            <p style="color: var(--secondary-blue); font-weight: 600; margin-bottom: 15px;">August 20, 2025</p>
                            <p style="line-height: 1.8; margin-bottom: 15px;">The Library Unit organized a **Systematic Literature Review (SLR)** training program for new postgraduate students of the 2025 cohort. This training aims to equip students with the ability to conduct systematic literature reviews, which is crucial in academic research.</p>
                            <p style="line-height: 1.8; margin-bottom: 15px;">The material provided includes literature search strategies, source quality evaluation, and information synthesis techniques. Students were also taught how to use various academic databases and reference management tools.</p>
                            <p style="line-height: 1.8;">The activity received positive feedback from participants as it is highly relevant to their research needs at the postgraduate level.</p>
                        `
                    },
                    'news-2': {
                        title: translations[currentLang].news_2_title,
                        content: currentLang === 'id' ? `
                            <div class="news-icon" style="width: 100%; height: 250px; margin-bottom: 20px;"></div>
                            <p style="color: var(--secondary-blue); font-weight: 600; margin-bottom: 15px;">19 Agustus 2025</p>
                            <p style="line-height: 1.8; margin-bottom: 15px;">UPT Perpustakaan turut memeriahkan acara **Pengenalan Kehidupan Kampus bagi Mahasiswa Baru (PKKMB)** tahun 2025.</p>
                            <p style="line-height: 1.8; margin-bottom: 15px;">Dalam kegiatan ini, perpustakaan memperkenalkan berbagai layanan dan fasilitas yang tersedia untuk mendukung kegiatan akademik mahasiswa baru, termasuk cara mengakses e-resources, peminjaman buku, dan layanan referensi.</p>
                            <p style="line-height: 1.8;">Mahasiswa juga diberikan panduan cara mengakses koleksi digital perpustakaan dan tips efektif dalam mencari sumber referensi untuk tugas kuliah dan penelitian.</p>
                        ` : `
                            <div class="news-icon" style="width: 100%; height: 250px; margin-bottom: 20px;"></div>
                            <p style="color: var(--secondary-blue); font-weight: 600; margin-bottom: 15px;">August 19, 2025</p>
                            <p style="line-height: 1.8; margin-bottom: 15px;">The Library Unit participated in the **Introduction to Campus Life for New Students (PKKMB)** event in 2025.</p>
                            <p style="line-height: 1.8; margin-bottom: 15px;">In this activity, the library introduced various services and facilities available to support the academic activities of new students, including how to access e-resources, book borrowing, and reference services.</p>
                            <p style="line-height: 1.8;">Students were also given a guide on how to access the library's digital collection and effective tips for finding reference sources for college assignments and research.</p>
                        `
                    },
                    'news-3': {
                        title: translations[currentLang].news_3_title,
                        content: currentLang === 'id' ? `
                            <div class="news-icon" style="width: 100%; height: 250px; margin-bottom: 20px;"></div>
                            <p style="color: var(--secondary-blue); font-weight: 600; margin-bottom: 15px;">19 Agustus 2025</p>
                            <p style="line-height: 1.8; margin-bottom: 15px;">Workshop **literasi digital** diselenggarakan untuk meningkatkan kemampuan riset dan penggunaan sumber digital bagi civitas akademika UIN Syarif Hidayatullah Jakarta.</p>
                            <p style="line-height: 1.8; margin-bottom: 15px;">Peserta dilatih untuk mengevaluasi kredibilitas sumber online, menggunakan database akademik dengan efektif, mengelola referensi digital, dan menghindari plagiarisme dalam karya ilmiah.</p>
                            <p style="line-height: 1.8;">Workshop ini mendapat respon positif dari peserta dan akan dilanjutkan secara berkala setiap semester untuk memastikan seluruh civitas akademika memiliki kompetensi literasi digital yang memadai.</p>
                        ` : `
                            <div class="news-icon" style="width: 100%; height: 250px; margin-bottom: 20px;"></div>
                            <p style="color: var(--secondary-blue); font-weight: 600; margin-bottom: 15px;">August 19, 2025</p>
                            <p style="line-height: 1.8; margin-bottom: 15px;">A **digital literacy** workshop was held to enhance the research and digital resource usage skills of the academic community of UIN Syarif Hidayatullah Jakarta.</p>
                            <p style="line-height: 1.8; margin-bottom: 15px;">Participants were trained to evaluate the credibility of online sources, effectively use academic databases, manage digital references, and avoid plagiarism in scholarly works.</p>
                            <p style="line-height: 1.8;">The workshop received positive response from participants and will be continued periodically every semester to ensure all academic community members have adequate digital literacy competence.</p>
                        `
                    }
                };

                if (newsData[news]) {
                    title.textContent = newsData[news].title;
                    body.innerHTML = newsData[news].content;
                    modal.classList.add('show');
                    lastOpenedModalType = 'news';
                }
            });
        });
/* ============================================================
   SECTION 16: COLLECTIONS LIST (USER FEATURE)
   ============================================================ */
function filterCollection(category, element = null) {
    const container = document.getElementById('collectionListContainer');
    if (!container) return;

    // Update state tombol tab (mengubah warna tombol yang aktif)
    if (element) {
        const tabs = element.parentElement.querySelectorAll('.auth-tab');
        tabs.forEach(t => t.classList.remove('active'));
        element.classList.add('active');
    }

    container.innerHTML = '';
    let itemsToDisplay = [];

    // Menggabungkan data dari libraryData
    if (category === 'all') {
        itemsToDisplay = [
            ...libraryData.journal.map(i => ({...i, type: 'journal'})),
            ...libraryData.book.map(i => ({...i, type: 'book'})),
            ...libraryData.opac.map(i => ({...i, type: 'opac'}))
        ];
    } else {
        itemsToDisplay = libraryData[category].map(i => ({...i, type: category}));
    }

    if (itemsToDisplay.length === 0) {
        const noDataMsg = currentLang === 'id' ? 'Tidak ada koleksi ditemukan.' : 'No collections found.';
        container.innerHTML = `<p class="muted" style="grid-column: 1/-1; text-align: center; padding: 20px;">${noDataMsg}</p>`;
        return;
    }

    itemsToDisplay.forEach(item => {
        const card = document.createElement('div');
        card.className = 'result-item'; 
        card.style.margin = '0';
        card.innerHTML = `
            <div onclick="showDetail('${item.type}', '${item.id}')">
                <small style="text-transform: uppercase; color: var(--secondary-blue); font-weight: bold; font-size: 10px;">${item.type}</small>
                <h4 style="margin-top: 5px; font-size: 14px;">${escapeHtml(item.title)}</h4>
                <p style="font-size: 12px;">${escapeHtml(item.author)}</p>
            </div>
        `;
        container.appendChild(card);
    });
}


/* ============================================================
   SECTION 17: USER DASHBOARD HELPERS
   ============================================================ */
function switchUserTab(tabId, btn) {
    document.querySelectorAll('.modal-tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.modal-tab-btn').forEach(el => el.classList.remove('active'));
    document.getElementById('userTab-' + tabId).classList.add('active');
    btn.classList.add('active');
}

function returnBook(kode) {
    const peminjaman = JSON.parse(localStorage.getItem('uin_peminjaman') || '[]');
    const loan = peminjaman.find(p => p.kode === kode);
    if (!loan || loan.status === 'returned') return;

    // Kembalikan stok buku ke katalog
    if (loan.bookId && loan.bookType) {
        const item = libraryData[loan.bookType].find(b => b.id === loan.bookId);
        if (item) {
            if (loan.bookType === 'book') {
                item.available++;
            } else if (loan.bookType === 'opac') {
                item.status = 'Tersedia';
                if (item.copies !== undefined) item.copies++;
            }
            saveData();
        }
    }

    // Update status peminjaman
    loan.status = 'returned';
    loan.tgl_dikembalikan = new Date().toISOString().split('T')[0];
    localStorage.setItem('uin_peminjaman', JSON.stringify(peminjaman));

    showToast(currentLang === 'id' ? 'Buku berhasil dikembalikan!' : 'Book returned successfully!');
    openModal('user-profile'); // Refresh dashboard
}

/* ============================================================
   SECTION 18: CETAK SURAT BEBAS PINJAM
   ============================================================ */
function printSuratBebasPinjam(nomor) {
    const allBebas = JSON.parse(localStorage.getItem('uin_bebas_pinjam') || '[]');
    const surat = allBebas.find(b => b.nomor === nomor);
    if (!surat) return;

    const today = new Date();
    const tanggalCetak = today.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

    const modal = document.getElementById('modal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');

    title.textContent = currentLang === 'id' ? 'Surat Keterangan Bebas Pinjam' : 'No-Loan Certificate';
    body.innerHTML = `
        <div class="surat-container" id="suratCetak">
            <div class="surat-kop">
                <h3>KEMENTERIAN AGAMA REPUBLIK INDONESIA</h3>
                <h2>UIN SYARIF HIDAYATULLAH JAKARTA</h2>
                <h3>PERPUSTAKAAN</h3>
                <p>Jl. Ir. H. Juanda No. 95, Ciputat 15412, Tangerang Selatan</p>
                <p>Telp. (021) 7401925 | Email: perpustakaan@uinjkt.ac.id</p>
            </div>
            <div class="surat-body">
                <p style="text-align:center;font-weight:700;text-decoration:underline;font-size:16px;margin-bottom:4px;">
                    SURAT KETERANGAN BEBAS PINJAM
                </p>
                <p style="text-align:center;margin-bottom:24px;">
                    Nomor: ${surat.nomor}
                </p>
                <p>Yang bertanda tangan di bawah ini, Kepala Perpustakaan UIN Syarif Hidayatullah Jakarta, menerangkan bahwa:</p>
                <table>
                    <tr><td>Nama</td><td>: ${escapeHtml(surat.userName || surat.nama || '-')}</td></tr>
                    <tr><td>NIM/NIP</td><td>: ${escapeHtml(surat.userNim || surat.nim || '-')}</td></tr>
                    <tr><td>Program Studi</td><td>: ${escapeHtml(surat.prodi || surat.fakultas || '-')}</td></tr>
                    <tr><td>Tanggal Pengajuan</td><td>: ${new Date(surat.tanggal).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</td></tr>
                </table>
                <p>Berdasarkan pengecekan data peminjaman perpustakaan, yang bersangkutan dinyatakan <strong>BEBAS dari tanggungan peminjaman buku</strong> di Perpustakaan UIN Syarif Hidayatullah Jakarta.</p>
                <p>Demikian surat keterangan ini dibuat untuk dapat dipergunakan sebagaimana mestinya.</p>
            </div>
            <div class="surat-ttd">
                <div>
                    <p>Jakarta, ${tanggalCetak}</p>
                    <p>Kepala Perpustakaan</p>
                    <p class="nama">Dr. H. Abdul Hamid, M.Ag.</p>
                    <p class="jabatan">NIP. 197001011995031001</p>
                </div>
            </div>
        </div>
        <div style="margin-top:16px;display:flex;gap:10px;">
            <button class="btn-primary" onclick="window.print()">${currentLang === 'id' ? 'Cetak / Print' : 'Print'}</button>
            <button class="btn-secondary" onclick="openModal('user-profile')">${currentLang === 'id' ? '← Kembali' : '← Back'}</button>
        </div>
    `;
    modal.classList.add('show');
    lastOpenedModalType = 'surat';
}

/* ============================================================
   SECTION 19: ADMIN DASHBOARD TERPADU
   ============================================================ */
function switchAdminTab(tabId, btn) {
    document.querySelectorAll('.admin-tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.admin-tab-btn').forEach(el => el.classList.remove('active'));
    document.getElementById('adminTab-' + tabId).classList.add('active');
    btn.classList.add('active');
}

function openAdminDashboard() {
    if (!currentUser || currentUser.role !== 'admin') return;

    const modal = document.getElementById('modal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');

    title.textContent = currentLang === 'id' ? 'Dashboard Admin' : 'Admin Dashboard';

    // Data
    const peminjaman = JSON.parse(localStorage.getItem('uin_peminjaman') || '[]');
    const bebasPinjam = JSON.parse(localStorage.getItem('uin_bebas_pinjam') || '[]');
    const penerbitan = JSON.parse(localStorage.getItem('uin_penerbitan') || '[]');
    const surveyData = JSON.parse(localStorage.getItem('uin_survey') || '[]');

    // === TAB 1: Transaksi Peminjaman ===
    let transaksiHtml = '';
    if (peminjaman.length === 0) {
        transaksiHtml = `<p class="muted" style="text-align:center;padding:24px;">Belum ada transaksi.</p>`;
    } else {
        peminjaman.slice().reverse().forEach(loan => {
            const isOverdue = loan.status === 'active' && new Date(loan.tgl_kembali) < new Date();
            const statusLabel = loan.status === 'returned' ? 'Dikembalikan' : isOverdue ? 'Terlambat' : 'Dipinjam';
            const statusClass = loan.status === 'returned' ? 'returned' : isOverdue ? 'rejected' : 'active';
            transaksiHtml += `
                <div class="loan-card ${isOverdue ? 'overdue' : ''}">
                    <div class="loan-card-header">
                        <span class="loan-card-title">${escapeHtml(loan.judul)}</span>
                        <span class="status-badge ${statusClass}">${statusLabel}</span>
                    </div>
                    <div class="loan-card-meta">
                        ${escapeHtml(loan.userName || loan.nama || '-')} (${escapeHtml(loan.userNim || loan.nim || '-')})<br>
                        Kode: ${loan.kode} | Pinjam: ${loan.tgl_pinjam || '-'} | Tenggat: ${loan.tgl_kembali || '-'}
                        ${loan.tgl_dikembalikan ? `<br>Dikembalikan: ${loan.tgl_dikembalikan}` : ''}
                    </div>
                    ${loan.status === 'active' ? `
                        <div class="loan-card-actions">
                            <button class="btn-primary" onclick="adminReturnBook('${loan.kode}')" style="font-size:13px;padding:8px 14px;">
                                Proses Pengembalian
                            </button>
                        </div>
                    ` : ''}
                </div>
            `;
        });
    }

    // === TAB 2: Pengajuan Bebas Pinjam ===
    let bebasHtml = '';
    if (bebasPinjam.length === 0) {
        bebasHtml = `<p class="muted" style="text-align:center;padding:24px;">Belum ada pengajuan.</p>`;
    } else {
        bebasPinjam.slice().reverse().forEach(b => {
            const statusLabel = b.status === 'approved' ? 'Disetujui' : b.status === 'rejected' ? 'Ditolak' : 'Menunggu';
            const statusClass = b.status;

            // Cek apakah user masih punya pinjaman aktif
            const userActiveLoans = peminjaman.filter(p => p.userEmail === b.userEmail && p.status === 'active');

            bebasHtml += `
                <div class="loan-card">
                    <div class="loan-card-header">
                        <span class="loan-card-title">${escapeHtml(b.userName || b.nama || '-')}</span>
                        <span class="status-badge ${statusClass}">${statusLabel}</span>
                    </div>
                    <div class="loan-card-meta">
                        NIM: ${escapeHtml(b.userNim || b.nim || '-')} | No: ${b.nomor}<br>
                        Tanggal: ${new Date(b.tanggal).toLocaleDateString('id-ID')}
                        ${userActiveLoans.length > 0 ? `<br><span style="color:var(--danger);font-weight:700;">Masih meminjam ${userActiveLoans.length} buku!</span>` : '<br><span style="color:#065f46;font-weight:700;">Tidak ada pinjaman aktif</span>'}
                    </div>
                    ${b.status === 'pending' ? `
                        <div class="loan-card-actions">
                            <button class="btn-primary" onclick="approveBebasPinjam('${b.nomor}')" style="font-size:13px;padding:8px 14px;">Setujui</button>
                            <button class="btn-danger" onclick="rejectBebasPinjam('${b.nomor}')" style="font-size:13px;padding:8px 14px;">Tolak</button>
                        </div>
                    ` : ''}
                </div>
            `;
        });
    }

    // === TAB 3: Pengajuan Penerbitan ===
    let penerbitanHtml = '';
    if (penerbitan.length === 0) {
        penerbitanHtml = `<p class="muted" style="text-align:center;padding:24px;">Belum ada pengajuan.</p>`;
    } else {
        penerbitan.slice().reverse().forEach(p => {
            const statusLabel = p.status === 'approved' ? 'Diterima' : p.status === 'rejected' ? 'Ditolak' : 'Review';
            penerbitanHtml += `
                <div class="loan-card">
                    <div class="loan-card-header">
                        <span class="loan-card-title">${escapeHtml(p.judul || '-')}</span>
                        <span class="status-badge ${p.status === 'review' ? 'pending' : p.status}">${statusLabel}</span>
                    </div>
                    <div class="loan-card-meta">
                        ${escapeHtml(p.userName || p.nama || '-')} | No: ${p.nomor}<br>
                        Tanggal: ${new Date(p.tanggal).toLocaleDateString('id-ID')}
                    </div>
                    ${p.status === 'review' ? `
                        <div class="loan-card-actions">
                            <button class="btn-primary" onclick="approvePenerbitan('${p.nomor}')" style="font-size:13px;padding:8px 14px;">Terima</button>
                            <button class="btn-danger" onclick="rejectPenerbitan('${p.nomor}')" style="font-size:13px;padding:8px 14px;">Tolak</button>
                        </div>
                    ` : ''}
                </div>
            `;
        });
    }

    // === TAB 4: Statistik Survey ===
    let surveyHtml = '';
    if (surveyData.length === 0) {
        surveyHtml = `<p class="muted" style="text-align:center;padding:24px;">Belum ada data survey.</p>`;
    } else {
        // Hitung rata-rata rating
        const ratings = surveyData.map(s => parseInt(s.rating || s.kepuasan || 0)).filter(r => r > 0);
        const avgRating = ratings.length > 0 ? (ratings.reduce((a, b) => a + b, 0) / ratings.length) : 0;

        // Hitung distribusi rating (1-5)
        const ratingDist = [0, 0, 0, 0, 0];
        ratings.forEach(r => { if (r >= 1 && r <= 5) ratingDist[r - 1]++; });

        surveyHtml += `
            <div class="stat-overview">
                <div class="stat-box">
                    <div class="stat-box-value">${surveyData.length}</div>
                    <div class="stat-box-label">Total Responden</div>
                </div>
                <div class="stat-box">
                    <div class="stat-box-value">${avgRating.toFixed(1)}</div>
                    <div class="stat-box-label">Rata-rata Rating</div>
                </div>
                <div class="stat-box">
                    <div class="stat-box-value">⭐ ${Math.round(avgRating)}/5</div>
                    <div class="stat-box-label">Skor Kepuasan</div>
                </div>
            </div>
            <h4 style="margin-bottom:12px;">Distribusi Rating</h4>
        `;
        for (let i = 5; i >= 1; i--) {
            const count = ratingDist[i - 1];
            const percent = ratings.length > 0 ? Math.round(count / ratings.length * 100) : 0;
            surveyHtml += `
                <div class="rating-bar-row">
                    <span class="rating-bar-label">${'⭐'.repeat(i)}</span>
                    <div class="rating-bar-track"><div class="rating-bar-fill" style="width:${percent}%"></div></div>
                    <span class="rating-bar-percent">${count} (${percent}%)</span>
                </div>
            `;
        }

        // Daftar saran/masukan
        const suggestions = surveyData.filter(s => s.saran && s.saran.trim() !== '');
        if (suggestions.length > 0) {
            surveyHtml += `<h4 style="margin-top:24px;margin-bottom:12px;">Saran & Masukan (${suggestions.length})</h4>`;
            suggestions.slice().reverse().forEach(s => {
                surveyHtml += `
                    <div class="loan-card">
                        <div class="loan-card-meta">
                            "${escapeHtml(s.saran)}"<br>
                            <small style="color:var(--muted);">— ${new Date(s.tanggal).toLocaleDateString('id-ID')}</small>
                        </div>
                    </div>
                `;
            });
        }
    }

    // Summary counts
    const pendingBebas = bebasPinjam.filter(b => b.status === 'pending').length;
    const pendingPenerbitan = penerbitan.filter(p => p.status === 'review').length;
    const activeLoansCount = peminjaman.filter(p => p.status === 'active').length;

    body.innerHTML = `
        <div class="admin-tabs">
            <button class="admin-tab-btn active" onclick="switchAdminTab('transaksi', this)">
                Transaksi (${activeLoansCount})
            </button>
            <button class="admin-tab-btn" onclick="switchAdminTab('bebas', this)">
                Bebas Pinjam ${pendingBebas > 0 ? `<span style="background:var(--danger);color:#fff;padding:2px 6px;border-radius:50px;font-size:11px;margin-left:4px;">${pendingBebas}</span>` : ''}
            </button>
            <button class="admin-tab-btn" onclick="switchAdminTab('penerbitan', this)">
                Penerbitan ${pendingPenerbitan > 0 ? `<span style="background:var(--danger);color:#fff;padding:2px 6px;border-radius:50px;font-size:11px;margin-left:4px;">${pendingPenerbitan}</span>` : ''}
            </button>
            <button class="admin-tab-btn" onclick="switchAdminTab('survey', this)">
                Survey (${surveyData.length})
            </button>
        </div>
        <div id="adminTab-transaksi" class="admin-tab-content active">
            ${transaksiHtml}
        </div>
        <div id="adminTab-bebas" class="admin-tab-content">
            ${bebasHtml}
        </div>
        <div id="adminTab-penerbitan" class="admin-tab-content">
            ${penerbitanHtml}
        </div>
        <div id="adminTab-survey" class="admin-tab-content">
            ${surveyHtml}
        </div>
        <div style="margin-top:16px;">
            <button class="btn-primary" onclick="closeModal()">${currentLang === 'id' ? 'Tutup' : 'Close'}</button>
        </div>
    `;

    modal.classList.add('show');
    lastOpenedModalType = 'admin-dashboard';
}

function adminReturnBook(kode) {
    returnBook(kode);
    openAdminDashboard(); // Refresh admin dashboard
}

function approveBebasPinjam(nomor) {
    const data = JSON.parse(localStorage.getItem('uin_bebas_pinjam') || '[]');
    const item = data.find(b => b.nomor === nomor);
    if (!item) return;

    // Cek pinjaman aktif user
    const peminjaman = JSON.parse(localStorage.getItem('uin_peminjaman') || '[]');
    const activeLoans = peminjaman.filter(p => p.userEmail === item.userEmail && p.status === 'active');
    if (activeLoans.length > 0) {
        showToast(`Tidak bisa menyetujui! ${item.userName} masih meminjam ${activeLoans.length} buku.`, 'error');
        return;
    }

    item.status = 'approved';
    item.tgl_disetujui = new Date().toISOString();
    localStorage.setItem('uin_bebas_pinjam', JSON.stringify(data));
    showToast('Pengajuan bebas pinjam disetujui!');
    openAdminDashboard();
}

function rejectBebasPinjam(nomor) {
    const alasan = prompt(currentLang === 'id' ? 'Masukkan alasan penolakan:' : 'Enter rejection reason:');
    if (alasan === null) return;

    const data = JSON.parse(localStorage.getItem('uin_bebas_pinjam') || '[]');
    const item = data.find(b => b.nomor === nomor);
    if (!item) return;

    item.status = 'rejected';
    item.alasan_tolak = alasan || 'Tidak memenuhi syarat';
    localStorage.setItem('uin_bebas_pinjam', JSON.stringify(data));
    showToast('Pengajuan bebas pinjam ditolak.');
    openAdminDashboard();
}

function approvePenerbitan(nomor) {
    const data = JSON.parse(localStorage.getItem('uin_penerbitan') || '[]');
    const item = data.find(p => p.nomor === nomor);
    if (!item) return;

    item.status = 'approved';
    localStorage.setItem('uin_penerbitan', JSON.stringify(data));
    showToast('Pengajuan penerbitan diterima!');
    openAdminDashboard();
}

function rejectPenerbitan(nomor) {
    const data = JSON.parse(localStorage.getItem('uin_penerbitan') || '[]');
    const item = data.find(p => p.nomor === nomor);
    if (!item) return;

    item.status = 'rejected';
    localStorage.setItem('uin_penerbitan', JSON.stringify(data));
    showToast('Pengajuan penerbitan ditolak.');
    openAdminDashboard();
}

applyTranslations(); 
renderDataLists();
updateAuthButton();

// Event listener click outside dropdown
document.addEventListener('click', (e) => {
    const langSwitcher = document.querySelector('.language-switcher');
    if (langSwitcher && !langSwitcher.contains(e.target)) {
        closeLangDropdown();
    }
});

// FAQ accordion functionality (single init with guard to prevent double-binding)
function initFAQ() {
    document.querySelectorAll('.faq-item').forEach(function(item) {
        if (item.dataset.faqInitialized) return; // Prevent double-binding
        item.dataset.faqInitialized = 'true';
        item.addEventListener('click', function() {
            const expanded = item.getAttribute('aria-expanded') === 'true';
            // Close all other FAQ items first
            document.querySelectorAll('.faq-item').forEach(function(other) {
                if (other !== item) {
                    other.setAttribute('aria-expanded', 'false');
                    const otherAnswer = other.querySelector('.faq-answer');
                    if (otherAnswer) otherAnswer.hidden = true;
                }
            });
            item.setAttribute('aria-expanded', !expanded);
            const answer = item.querySelector('.faq-answer');
            if (answer) answer.hidden = expanded;
        });
    });
}
// Run on DOMContentLoaded or immediately if already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFAQ);
} else {
    initFAQ();
}