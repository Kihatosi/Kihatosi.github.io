 const STORAGE_KEY = 'uin_library_data';
        const USERS_KEY = 'uin_users';
        const CURRENT_USER_KEY = 'uin_current_user';
        const CURRENT_LANG_KEY = 'uin_current_lang'; // Kunci baru untuk bahasa

        // --- KAMUS BAHASA (LANGUAGE DICTIONARY) ---
        const translations = {
            id: {
                // Top Bar
                top_phone: '📱 021 7494136',
                top_email: '📧 Perpustakaan@apps.uinjkt.ac.id',
                top_schedule: 'Senin-Kamis: 09.00-19.30 | Jumat: 09.00-16.00',

                // Header & Nav
                header_subtitle: 'Perpustakaan',
                nav_services: 'Layanan',
                nav_profile: 'Profile',
                nav_eresources: 'E-Resources',
                nav_event: 'Event',
                nav_contact: 'Kontak',
                nav_login: 'Login',

                // Hero
                hero_title: 'Selamat Datang di Perpustakaan UIN Syarif Hidayatullah Jakarta',
                hero_subtitle: 'Gerbang Ilmu Pengetahuan dan Inovasi untuk Masa Depan',

                // Search Tabs & Form
                tab_journal: '📚 e-Journal',
                tab_book: '📖 BOOK',
                tab_opac: '🔍 OPAC',
                tab_manage: '⚙️ Kelola Data',
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
                manage_add_journal: '➕ Tambah Jurnal',
                manage_add_book: '➕ Tambah Buku',
                manage_add_opac: '➕ Tambah OPAC',
                manage_current_data: '📊 Data Saat Ini',
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
                button_export: '💾 Ekspor JSON',
                button_load_demo: '🔄 Muat Demo',
                button_clear_all: '🗑️ Hapus Semua',

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
                profile_vision: '🎯 Visi',
                profile_mission: '🎯 Misi',
                profile_vision_content: 'Menjadi pusat informasi dan pembelajaran yang unggul dalam mendukung Tri Dharma Perguruan Tinggi, mengintegrasikan nilai-nilai Islam dengan ilmu pengetahuan dan teknologi untuk menghasilkan lulusan yang kompeten, berakhlak mulia, dan berdaya saing global.',
                profile_mission_content: [
                    'Menyediakan koleksi perpustakaan yang berkualitas, relevan, dan up-to-date dalam berbagai bidang keilmuan dengan perspektif Islam',
                    'Mengembangkan layanan perpustakaan berbasis teknologi informasi untuk meningkatkan aksesibilitas dan kualitas layanan',
                    'Membangun budaya literasi dan pembelajaran berkelanjutan bagi civitas akademika',
                    'Menyelenggarakan program pengembangan kompetensi informasi dan literasi digital',
                    'Membangun kerjasama dengan berbagai pihak untuk pengembangan perpustakaan',
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
                alert_login_success: (name) => `✓ Login berhasil! Selamat datang, ${name}`,
                alert_login_fail: '❌ Email atau password salah! Coba demo@uinjkt.ac.id / password',
                alert_logout_confirm: 'Apakah Anda yakin ingin logout?',
                alert_logout_success: '✓ Anda telah logout',
                alert_no_query: 'Silakan masukkan kata kunci pencarian',
                alert_not_found: (query) => `Tidak ada hasil untuk "<strong>${escapeHtml(query)}</strong>"`,
                alert_not_logged_in: 'Anda harus login terlebih dahulu untuk mengakses layanan ini.',
            },
            en: {
                // Top Bar
                top_phone: '📱 +62 21 7494136',
                top_email: '📧 Perpustakaan@apps.uinjkt.ac.id',
                top_schedule: 'Monday-Thursday: 09.00-19.30 | Friday: 09.00-16.00',

                // Header & Nav
                header_subtitle: 'Library',
                nav_services: 'Services',
                nav_profile: 'Profile',
                nav_eresources: 'E-Resources',
                nav_event: 'Events',
                nav_contact: 'Contact',
                nav_login: 'Login',

                // Hero
                hero_title: 'Welcome to UIN Syarif Hidayatullah Jakarta Library',
                hero_subtitle: 'The Gateway of Knowledge and Innovation for the Future',

                // Search Tabs & Form
                tab_journal: '📚 e-Journal',
                tab_book: '📖 BOOK',
                tab_opac: '🔍 OPAC',
                tab_manage: '⚙️ Manage Data',
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
                manage_add_journal: '➕ Add Journal',
                manage_add_book: '➕ Add Book',
                manage_add_opac: '➕ Add OPAC',
                manage_current_data: '📊 Current Data',
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
                button_export: '💾 Export JSON',
                button_load_demo: '🔄 Load Demo',
                button_clear_all: '🗑️ Clear All',
                
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
                profile_vision: '🎯 Vision',
                profile_mission: '🎯 Mission',
                profile_vision_content: 'To be a center of excellence in information and learning supporting the Tri Dharma of Higher Education, integrating Islamic values with science and technology to produce competent, noble-character, and globally competitive graduates.',
                profile_mission_content: [
                    'Providing quality, relevant, and up-to-date library collections in various fields of science with an Islamic perspective',
                    'Developing technology-based library services to enhance accessibility and quality of service',
                    'Building a culture of literacy and continuous learning for the academic community',
                    'Organizing programs for developing information competency and digital literacy',
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
                alert_login_success: (name) => `✓ Login successful! Welcome, ${name}`,
                alert_login_fail: '❌ Wrong email or password! Try demo@uinjkt.ac.id / password',
                alert_logout_confirm: 'Are you sure you want to log out?',
                alert_logout_success: '✓ You have logged out',
                alert_no_query: 'Please enter a search keyword',
                alert_not_found: (query) => `No results found for "<strong>${escapeHtml(query)}</strong>"`,
                alert_not_logged_in: 'You must log in first to access this service.',
            }
        };

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
                    currentLangIcon.textContent = '🇮🇩';
                } else {
                    currentLangText.textContent = 'EN';
                    currentLangIcon.textContent = '🇬🇧';
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
            dropdown.classList.toggle('show');
        }

        function closeLangDropdown() {
            document.getElementById('langDropdown').classList.remove('show');
        }

        document.addEventListener('click', (e) => {
            const langSwitcher = document.querySelector('.language-switcher');
            if (langSwitcher && !langSwitcher.contains(e.target)) {
                closeLangDropdown();
            }
        });
        // --- AKHIR FUNGSI ALIH BAHASA ---
        
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
            if (saved) {
                try {
                    return JSON.parse(saved);
                } catch (e) {
                    return [];
                }
            }
            // Add a demo user for easier testing
            return [{
                id: 'u-demo-1',
                nama: 'Pengguna Demo',
                email: 'demo@uinjkt.ac.id',
                nim: '1234567890',
                prodi: 'Ilmu Komunikasi',
                telp: '081234567890',
                password: 'password', // Demo password
                tanggal_daftar: new Date().toISOString()
            }]; 
        }

        function saveUsers(users) {
            localStorage.setItem(USERS_KEY, JSON.stringify(users));
        }

        function updateAuthButton() {
            const authButton = document.getElementById('authButton');
            if (!authButton) return;
            const langDict = translations[currentLang];

            if (currentUser) {
                authButton.innerHTML = `
                    <div class="user-menu">
                        <div class="user-avatar" onclick="toggleUserDropdown()">
                            ${currentUser.nama.charAt(0).toUpperCase()}
                        </div>
                        <div class="user-dropdown" id="userDropdown">
                            <div class="user-dropdown-item" onclick="openModal('user-profile')">
                                <strong>${currentUser.nama}</strong><br>
                                <small class="muted">${currentUser.email}</small>
                            </div>
                            <div class="user-dropdown-item" onclick="logout()">
                                🚪 ${currentLang === 'id' ? 'Logout' : 'Logout'}
                            </div>
                        </div>
                    </div>
                `;
            } else {
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
                alert(langDict.alert_logout_success);
                closeModal();
            }
        }

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

        function switchTab(index) {
            const tabs = document.querySelectorAll('.tab-btn');
            const contents = document.querySelectorAll('.tab-content');
            
            tabs.forEach((tab, i) => {
                tab.classList.toggle('active', i === index);
                contents[i].classList.toggle('active', i === index);
            });
            
            // Clear search results when switching tabs
            document.querySelectorAll('.search-results').forEach(res => res.classList.remove('show'));
        }

        function updateTabCounts() {
            const tabs = document.querySelectorAll('.tab-btn');
            const langDict = translations[currentLang];

            if (tabs[0]) tabs[0].textContent = `${langDict.tab_journal} (${libraryData.journal.length})`;
            if (tabs[1]) tabs[1].textContent = `${langDict.tab_book} (${libraryData.book.length})`;
            if (tabs[2]) tabs[2].textContent = `${langDict.tab_opac} (${libraryData.opac.length})`;
            if (tabs[3]) tabs[3].textContent = `${langDict.tab_manage}`; // Kelola data tidak perlu count
        }

        document.querySelectorAll('.tab-btn').forEach((btn, index) => {
            btn.addEventListener('click', () => switchTab(index));
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
                    alert(langDict.alert_no_query);
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
                    const titleKey = type === 'journal' ? 'Jurnal' : type === 'book' ? 'Buku' : 'OPAC';
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
                edit_data: currentLang === 'id' ? 'Edit Data (Demo)' : 'Edit Data (Demo)',
                delete_data: currentLang === 'id' ? 'Hapus (Demo)' : 'Delete (Demo)',
                not_available_desc: currentLang === 'id' ? 'Tidak ada deskripsi' : 'No description',
                available_status: currentLang === 'id' ? 'Tersedia' : 'Available',
                borrowed_status: currentLang === 'id' ? 'Dipinjam' : 'Borrowed',
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

            html += `
                    <button class="btn-secondary" onclick="editItem('${type}', '${item.id}')" style="margin: 0;">${labels.edit_data}</button>
                    <button class="btn-danger" onclick="deleteItem('${type}', '${item.id}')">${labels.delete_data}</button>
                </div>
            `;

            body.innerHTML = html;
            modal.classList.add('show');
            lastOpenedModalType = 'showDetail'; // Update last opened modal type
        }

        function checkAuthAndOpenPeminjaman(bookTitle) {
            const langDict = translations[currentLang];
            if (currentUser) {
                openModal('peminjaman', bookTitle);
            } else {
                alert(langDict.alert_not_logged_in);
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
                            </div>
                            <div class="form-group">
                                <label data-lang-key="form_nim">${currentLang === 'id' ? 'NIM/NIP *' : 'Student ID/Staff ID *'}</label>
                                <input type="text" name="nim" required placeholder="${currentLang === 'id' ? 'Masukkan NIM/NIP' : 'Enter ID'}">
                            </div>
                            <div class="form-group">
                                <label data-lang-key="form_study_program">${currentLang === 'id' ? 'Program Studi' : 'Study Program'}</label>
                                <select name="prodi">
                                    <option value="" data-lang-key="form_select_program">${currentLang === 'id' ? '-- Pilih Program Studi --' : '-- Select Study Program --'}</option>
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
            } else if (type === 'forgot-password') { // RESET PASSWORD 23
                title.textContent = langDict.modal_forgot_password_title;
                body.innerHTML = `
                    <div class="alert alert-info">
                        <strong>${currentLang === 'id' ? 'Lupa kata sandi?' : 'Forgot your password?'}</strong> ${currentLang === 'id' ? 'Masukkan email akun Anda untuk memulai proses reset. (Simulasi)' : 'Enter your account email to start the reset process. (Simulation)'}
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
                if (!currentUser) {
                    openModal('login');
                    return;
                }
                title.textContent = langDict.modal_profile_title;
                body.innerHTML = `
                    <div class="profile-section">
                        <div class="profile-header">
                            <div class="profile-avatar-large">${currentUser.nama.charAt(0).toUpperCase()}</div>
                            <div class="profile-info">
                                <h3>${escapeHtml(currentUser.nama)}</h3>
                                <p class="muted">${escapeHtml(currentUser.nim)}</p>
                            </div>
                        </div>
                        <div class="info-grid">
                            <div class="info-label">${currentLang === 'id' ? 'Email:' : 'Email:'}</div>
                            <div>${escapeHtml(currentUser.email)}</div>
                            
                            <div class="info-label">${currentLang === 'id' ? 'NIM/NIP:' : 'ID:'}</div>
                            <div>${escapeHtml(currentUser.nim)}</div>
                            
                            <div class="info-label">${currentLang === 'id' ? 'Program Studi:' : 'Study Program:'}</div>
                            <div>${escapeHtml(currentUser.prodi || '-')}</div>
                            
                            <div class="info-label">${currentLang === 'id' ? 'No. Telepon:' : 'Phone No.:'}</div>
                            <div>${escapeHtml(currentUser.telp)}</div>
                            
                            <div class="info-label">${currentLang === 'id' ? 'Bergabung:' : 'Joined:'}</div>
                            <div>${new Date(currentUser.tanggal_daftar).toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
                        </div>
                    </div>
                    <button class="btn-primary" onclick="closeModal()">${currentLang === 'id' ? 'Tutup' : 'Close'}</button>
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
                            <p style="line-height: 1.8; margin-bottom: 30px; text-align: justify;" data-lang-key="profile_vision_content">
                                ${langDict.profile_vision_content}
                            </p>
                            
                            <h3 style="color: var(--primary-blue); margin-bottom: 20px; font-weight: 700;" data-lang-key="profile_mission">${langDict.profile_mission}</h3>
                            <ul style="line-height: 2; margin-left: 20px;">
                                ${missionList}
                            </ul>
                        </div>
                    </div>
                    
                    <div class="auth-content" id="pustakawan-content">
                        <div class="staff-grid">
                            <div class="staff-card">
                                <div class="staff-avatar">RN</div>
                                <h4>Rusmin Nuryadin</h4>
                                <p>${currentLang === 'id' ? 'Kepala Perpustakaan' : 'Head of Library'}</p>
                                <p class="muted">NIM : 12409011050120</p>
                            </div>
                            <div class="staff-card">
                                <div class="staff-avatar">AL</div>
                                <h4>ALya Nur Sedyaningsih.</h4>
                                <p>${currentLang === 'id' ? 'Pustakawan Ahli Madya' : 'Senior Expert Librarian'}</p>
                                <p class="muted">NIP: 198203152005012002</p>
                            </div>
                                                     
                        </div>
                    </div>
                    
                    <div class="auth-content" id="staff-content">
                        <div class="staff-grid">
                            <div class="staff-card">
                                <div class="staff-avatar">RN</div>
                                <h4>Rusmin Nuryadin</h4>
                                <p>${currentLang === 'id' ? 'Kepala Tata Usaha' : 'Head of Administration'}</p>
                                <p class="muted">NIP: 198104122006041001</p>
                            </div>
                            <div class="staff-card">
                                <div class="staff-avatar">AL</div>
                                <h4>Alya Nur Sedyaningsih.</h4>
                                <p>${currentLang === 'id' ? 'Staf Layanan Sirkulasi' : 'Circulation Service Staff'}</p>
                                <p class="muted">NIP: 198607252010012002</p>
                            </div>
                           
                        </div>
                    </div>
                `;
            } else if (type === 'peminjaman') {
                if (!currentUser) {
                    alert(langDict.alert_not_logged_in);
                    openModal('login');
                    return;
                }
                title.textContent = langDict.modal_peminjaman_title;
                body.innerHTML = `
                    <div class="alert alert-info">
                        <strong>${currentLang === 'id' ? 'Ketentuan Peminjaman:' : 'Borrowing Policy:'}</strong>
                        <ul style="margin: 10px 0 0 20px;">
                            <li>${currentLang === 'id' ? 'Maksimal 3 buku per peminjam' : 'Maximum 3 books per borrower'}</li>
                            <li>${currentLang === 'id' ? 'Durasi peminjaman: 7 hari' : 'Borrowing duration: 7 days'}</li>
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
                            <input type="text" name="judul" value="${data || ''}" required>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label data-lang-key="form_borrow_date">${currentLang === 'id' ? 'Tanggal Pinjam *' : 'Borrow Date *'}</label>
                                <input type="date" name="tgl_pinjam" required>
                            </div>
                            <div class="form-group">
                                <label data-lang-key="form_return_date">${currentLang === 'id' ? 'Tanggal Kembali *' : 'Return Date *'}</label>
                                <input type="date" name="tgl_kembali" required>
                            </div>
                        </div>
                        <div style="margin-top: 20px;">
                            <button type="submit" class="btn-primary">${currentLang === 'id' ? 'Ajukan Peminjaman' : 'Submit Borrow Request'}</button>
                            <button type="button" class="btn-secondary" onclick="closeModal()">${labels.cancel}</button>
                        </div>
                    </form>
                `;
            } else if (type === 'bebas-pinjam') {
                if (!currentUser) {
                    alert(langDict.alert_not_logged_in);
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
                    alert(langDict.alert_not_logged_in);
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
                            <h4>📚 ${currentLang === 'id' ? 'E-Journals Database' : 'E-Journals Database'}</h4>
                            <p>${currentLang === 'id' ? 'Koleksi jurnal elektronik dari berbagai penerbit internasional dan nasional' : 'Electronic journal collection from various international and national publishers'}</p>
                        </div>
                        <div class="result-item" style="cursor: default;">
                            <h4>📖 ${currentLang === 'id' ? 'E-Books Collection' : 'E-Books Collection'}</h4>
                            <p>${currentLang === 'id' ? 'Ribuan buku elektronik dalam berbagai bidang ilmu pengetahuan' : 'Thousands of electronic books across various fields of knowledge'}</p>
                        </div>
                        <div class="result-item" style="cursor: default;">
                            <h4>🔬 ${currentLang === 'id' ? 'Research Database' : 'Research Database'}</h4>
                            <p>${currentLang === 'id' ? 'Database penelitian: Scopus, ProQuest, JSTOR' : 'Research databases: Scopus, ProQuest, JSTOR'}</p>
                        </div>
                        <div class="result-item" style="cursor: default;">
                            <h4>📝 ${currentLang === 'id' ? 'Institutional Repository' : 'Institutional Repository'}</h4>
                            <p>${currentLang === 'id' ? 'Karya ilmiah civitas akademika UIN Jakarta' : 'Scholarly works of UIN Jakarta academic community'}</p>
                        </div>
                    </div>
                `;
            }

            modal.classList.add('show');
        }

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
                alert(langDict.alert_login_success(user.nama));
                closeModal();
            } else {
                alert(langDict.alert_login_fail);
            }
        }

        function handleRegister(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            const langDict = translations[currentLang];
            
            const alertPasswordMismatch = currentLang === 'id' ? '❌ Password tidak cocok!' : '❌ Passwords do not match!';
            const alertEmailExists = currentLang === 'id' ? '❌ Email sudah terdaftar!' : '❌ Email is already registered!';
            const alertNIMExists = currentLang === 'id' ? '❌ NIM/NIP sudah terdaftar!' : '❌ Student ID/Staff ID is already registered!';
            const alertSuccess = currentLang === 'id' ? '✓ Pendaftaran berhasil! Silakan login dengan akun Anda.' : '✓ Registration successful! Please log in with your account.';

            if (data.password !== data.confirm_password) {
                alert(alertPasswordMismatch);
                return;
            }
            
            const users = loadUsers();
            
            if (users.some(u => u.email === data.email)) {
                alert(alertEmailExists);
                return;
            }
            
            if (users.some(u => u.nim === data.nim)) {
                alert(alertNIMExists);
                return;
            }
            
            const newUser = {
                id: generateId(),
                nama: data.nama,
                email: data.email,
                nim: data.nim,
                prodi: data.prodi || '',
                telp: data.telp,
                password: data.password,
                tanggal_daftar: new Date().toISOString()
            };
            
            users.push(newUser);
            saveUsers(users);
            
            alert(alertSuccess);
            switchAuthTab('login', document.querySelector('#loginContent').previousElementSibling.querySelector('.auth-tab:first-child'));
        }

        // ⭐ FUNGSI BARU UNTUK RESET PASSWORD
        function handleForgotPassword(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            let users = loadUsers();
            const modalBody = document.getElementById('modalBody');

            const alertEmailNotFound = currentLang === 'id' ? '❌ Email tidak terdaftar! Silakan periksa kembali.' : '❌ Email not found! Please check again.';
            const alertResetSent = (email) => currentLang === 'id' ? `✓ Link reset password telah dikirim ke ${email}. (Simulasi: Silakan lanjutkan ganti password)` : `✓ Password reset link has been sent to ${email}. (Simulation: Please proceed to change password)`;
            const step2Title = currentLang === 'id' ? 'Langkah 2 dari 2.' : 'Step 2 of 2.';
            const step2Instruction = (email) => currentLang === 'id' ? `Masukkan kata sandi baru untuk ${escapeHtml(email)}.` : `Enter new password for ${escapeHtml(email)}.`;
            const labelNewPassword = currentLang === 'id' ? 'Password Baru *' : 'New Password *';
            const labelConfirmNewPassword = currentLang === 'id' ? 'Konfirmasi Password Baru *' : 'Confirm New Password *';
            const placeholderMin6 = currentLang === 'id' ? 'Minimal 6 karakter' : 'Minimum 6 characters';
            const placeholderRepeat = currentLang === 'id' ? 'Ulangi password baru' : 'Repeat new password';
            const buttonChangePassword = currentLang === 'id' ? 'Ganti Password' : 'Change Password';
            const alertPasswordMismatch = currentLang === 'id' ? '❌ Password baru tidak cocok!' : '❌ New passwords do not match!';
            const alertMinLength = currentLang === 'id' ? '❌ Password minimal 6 karakter!' : '❌ Password must be at least 6 characters!';
            const alertUserNotFound = currentLang === 'id' ? '❌ Terjadi kesalahan. Pengguna tidak ditemukan.' : '❌ An error occurred. User not found.';
            const alertSuccessTitle = currentLang === 'id' ? '✓ Password Berhasil Diubah!' : '✓ Password Successfully Changed!';
            const alertSuccessBody = currentLang === 'id' ? 'Anda sekarang dapat login menggunakan kata sandi yang baru.' : 'You can now log in using your new password.';
            const buttonLoginNow = currentLang === 'id' ? 'Login Sekarang' : 'Login Now';


            if (data.step === 'request') {
                const user = users.find(u => u.email === data.email);
                
                if (!user) {
                    alert(alertEmailNotFound);
                    return;
                }
                
                alert(alertResetSent(user.email));
                
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
                    alert(alertPasswordMismatch);
                    return;
                }

                if (data.new_password.length < 6) {
                     alert(alertMinLength);
                    return;
                }

                const userIndex = users.findIndex(u => u.email === data.email);
                
                if (userIndex === -1) {
                    alert(alertUserNotFound);
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
        // ⭐ AKHIR FUNGSI RESET PASSWORD BARU


        function handlePeminjaman(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            const kode = 'PJM-' + Date.now();
            const langDict = translations[currentLang];
            
            const peminjaman = JSON.parse(localStorage.getItem('uin_peminjaman') || '[]');
            peminjaman.push({ ...data, kode, tanggal: new Date().toISOString() });
            localStorage.setItem('uin_peminjaman', JSON.stringify(peminjaman));
            
            const body = document.getElementById('modalBody');
            body.innerHTML = `
                <div class="alert alert-success">
                    <strong>${currentLang === 'id' ? '✓ Pengajuan Berhasil!' : '✓ Submission Successful!'}</strong><br>
                    ${currentLang === 'id' ? 'Kode Peminjaman' : 'Borrowing Code'}: <strong>${kode}</strong><br><br>
                    ${currentLang === 'id' ? 'Silakan datang ke perpustakaan dalam 2 hari untuk mengambil buku. (Ini adalah demo, data disimpan di browser Anda.)' : 'Please come to the library within 2 days to pick up the book. (This is a demo, data is stored in your browser.)'}
                </div>
                <button class="btn-primary" onclick="closeModal()">${currentLang === 'id' ? 'Tutup' : 'Close'}</button>
            `;
        }

        function handleBebasPinjam(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            const nomor = 'SBP-' + Date.now();
            
            const bebas = JSON.parse(localStorage.getItem('uin_bebas_pinjam') || '[]');
            bebas.push({ ...data, nomor, tanggal: new Date().toISOString() });
            localStorage.setItem('uin_bebas_pinjam', JSON.stringify(bebas));
            
            const body = document.getElementById('modalBody');
            body.innerHTML = `
                <div class="alert alert-success">
                    <strong>${currentLang === 'id' ? '✓ Pengajuan Berhasil!' : '✓ Submission Successful!'}</strong><br>
                    ${currentLang === 'id' ? 'Nomor Pengajuan' : 'Request Number'}: <strong>${nomor}</strong><br><br>
                    ${currentLang === 'id' ? 'Surat akan diproses dalam 1-2 hari kerja. Anda akan menerima notifikasi via email. (Ini adalah demo, data disimpan di browser Anda.)' : 'The letter will be processed within 1-2 working days. You will receive an email notification. (This is a demo, data is stored in your browser.)'}
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
            penerbitan.push({ ...data, nomor, tanggal: new Date().toISOString() });
            localStorage.setItem('uin_penerbitan', JSON.stringify(penerbitan));
            
            const body = document.getElementById('modalBody');
            body.innerHTML = `
                <div class="alert alert-success">
                    <strong>${currentLang === 'id' ? '✓ Pengajuan Berhasil!' : '✓ Submission Successful!'}</strong><br>
                    ${currentLang === 'id' ? 'Nomor Registrasi' : 'Registration Number'}: <strong>${nomor}</strong><br><br>
                    ${currentLang === 'id' ? 'Tim editorial akan meninjau naskah Anda dalam 7-14 hari kerja.' : 'The editorial team will review your manuscript within 7-14 working days.'}
                </div>
                <button class="btn-primary" onclick="closeModal()">${currentLang === 'id' ? 'Tutup' : 'Close'}</button>
            `;
        }

        function handleSurvey(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            
            const survey = JSON.parse(localStorage.getItem('uin_survey') || '[]');
            survey.push({ ...data, tanggal: new Date().toISOString() });
            localStorage.setItem('uin_survey', JSON.stringify(survey));
            
            const body = document.getElementById('modalBody');
            body.innerHTML = `
                <div class="alert alert-success">
                    <strong>${currentLang === 'id' ? '✓ Terima Kasih!' : '✓ Thank You!'}</strong><br>
                    ${currentLang === 'id' ? 'Survey Anda telah berhasil dikirim. Masukan Anda sangat berharga untuk kami. (Ini adalah demo, data disimpan di browser Anda.)' : 'Your survey has been submitted successfully. Your feedback is highly valuable to us. (This is a demo, data is stored in your browser.)'}
                </div>
                <button class="btn-primary" onclick="closeModal()">${currentLang === 'id' ? 'Tutup' : 'Close'}</button>
            `;
        }

        document.getElementById('formAddJournal').addEventListener('submit', (e) => {
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
            alert(currentLang === 'id' ? '✓ Jurnal berhasil ditambahkan!' : '✓ Journal successfully added!');
        });

        document.getElementById('formAddBook').addEventListener('submit', (e) => {
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
            alert(currentLang === 'id' ? '✓ Buku berhasil ditambahkan! ' : '✓ Book successfully added! ');
        });

        document.getElementById('formAddOpac').addEventListener('submit', (e) => {
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
            alert(currentLang === 'id' ? '✓ OPAC berhasil ditambahkan! ' : '✓ OPAC successfully added! ');
        });

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

        function editItem(type, id) {
            const item = libraryData[type].find(i => i.id === id);
            if (!item) return;

            const modal = document.getElementById('modal');
            const title = document.getElementById('modalTitle');
            const body = document.getElementById('modalBody');

            const itemTypeLabel = currentLang === 'id' ? (type === 'journal' ? 'Jurnal' : type === 'book' ? 'Buku' : 'OPAC') : (type === 'journal' ? 'Journal' : type === 'book' ? 'Book' : 'OPAC');
            title.textContent = `${currentLang === 'id' ? 'Edit' : 'Edit'} ${itemTypeLabel}`;

            // Re-generate modal content with translated fields
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
                    <div class="form-group">
                        <label>${labels.title}</label>
                        <input type="text" name="title" value="${escapeHtml(item.title)}" required>
                    </div>
                    <div class="form-group">
                        <label>${labels.author}</label>
                        <input type="text" name="author" value="${escapeHtml(item.author)}" required>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>${labels.year}</label>
                            <input type="number" name="year" value="${item.year || ''}">
                        </div>
                        <div class="form-group">
                            <label>${labels.issn}</label>
                            <input type="text" name="issn" value="${escapeHtml(item.issn || '')}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>${labels.description}</label>
                        <textarea name="description">${escapeHtml(item.description || '')}</textarea>
                    </div>
                `;
            } else if (type === 'book') {
                formHtml += `
                    <div class="form-group">
                        <label>${labels.title}</label>
                        <input type="text" name="title" value="${escapeHtml(item.title)}" required>
                    </div>
                    <div class="form-group">
                        <label>${labels.author}</label>
                        <input type="text" name="author" value="${escapeHtml(item.author)}" required>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>${labels.year}</label>
                            <input type="number" name="year" value="${item.year || ''}">
                        </div>
                        <div class="form-group">
                            <label>${labels.isbn}</label>
                            <input type="text" name="isbn" value="${escapeHtml(item.isbn || '')}">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>${currentLang === 'id' ? 'Halaman' : 'Pages'}</label>
                            <input type="number" name="pages" value="${item.pages || ''}">
                        </div>
                        <div class="form-group">
                            <label>${labels.available}</label>
                            <input type="number" name="available" min="0" value="${item.available || 0}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>${labels.description}</label>
                        <textarea name="description">${escapeHtml(item.description || '')}</textarea>
                    </div>
                `;
            } else if (type === 'opac') {
                formHtml += `
                    <div class="form-group">
                        <label>${labels.title}</label>
                        <input type="text" name="title" value="${escapeHtml(item.title)}" required>
                    </div>
                    <div class="form-group">
                        <label>${labels.author}</label>
                        <input type="text" name="author" value="${escapeHtml(item.author)}" required>
                    </div>
                    <div class="form-group">
                        <label>${labels.call_number}</label>
                        <input type="text" name="call_number" value="${escapeHtml(item.call_number || '')}">
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>${labels.year}</label>
                            <input type="number" name="year" value="${item.year || ''}">
                        </div>
                        <div class="form-group">
                            <label>${labels.copies}</label>
                            <input type="number" name="copies" min="0" value="${item.copies || 0}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>${labels.status}</label>
                        <select name="status">
                            <option value="Tersedia" ${item.status === 'Tersedia' ? 'selected' : ''}>${labels.status_available}</option>
                            <option value="Dipinjam" ${item.status === 'Dipinjam' ? 'selected' : ''}>${labels.status_borrowed}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>${labels.description}</label>
                        <textarea name="description">${escapeHtml(item.description || '')}</textarea>
                    </div>
                `;
            }

            formHtml += `
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
                    libraryData[type][index] = {
                        ...libraryData[type][index],
                        title: data.title,
                        author: data.author,
                        year: data.year ? parseInt(data.year) : null,
                        description: data.description || '',
                        ...(type === 'journal' && { issn: data.issn || '' }),
                        ...(type === 'book' && { 
                            isbn: data.isbn || '', 
                            pages: data.pages ? parseInt(data.pages) : null,
                            available: data.available ? parseInt(data.available) : 0
                        }),
                        ...(type === 'opac' && { 
                            call_number: data.call_number || '',
                            copies: data.copies ? parseInt(data.copies) : 0,
                            status: data.status || 'Tersedia'
                        })
                    };
                    
                    saveData();
                    alert(currentLang === 'id' ? '✓ Data berhasil diperbarui!' : '✓ Data successfully updated!');
                    closeModal();
                }
            });

            modal.classList.add('show');
            lastOpenedModalType = 'editItem';
        }

        function deleteItem(type, id) {
            const confirmMsg = currentLang === 'id' ? 'Apakah Anda yakin ingin menghapus item ini?' : 'Are you sure you want to delete this item?';
            const alertMsg = currentLang === 'id' ? '✓ Item berhasil dihapus! (Data disimpan di browser Anda)' : '✓ Item successfully deleted! (Data stored in your browser)';

            if (!confirm(confirmMsg)) return;
            
            libraryData[type] = libraryData[type].filter(i => i.id !== id);
            saveData();
            alert(alertMsg);
            closeModal();
        }

        function exportData() {
            const dataStr = JSON.stringify(libraryData, null, 2);
            const blob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'perpustakaan_data_' + Date.now() + '.json';
            a.click();
            URL.revokeObjectURL(url);
            alert(currentLang === 'id' ? '✓ Data berhasil diekspor sebagai JSON.' : '✓ Data successfully exported as JSON.');
        }

        function loadDemoData() {
            const confirmMsg = currentLang === 'id' ? 'Muat data demo? Ini akan menimpa data saat ini.' : 'Load demo data? This will overwrite current data.';
            const alertMsg = currentLang === 'id' ? '✓ Data demo berhasil dimuat!' : '✓ Demo data successfully loaded!';

            if (!confirm(confirmMsg)) return;
            libraryData = structuredClone(demoData);
            saveData();
            alert(alertMsg);
        }

        function clearAllData() {
            const confirmMsg = currentLang === 'id' ? 'Hapus semua data? Tindakan ini tidak dapat dibatalkan!' : 'Delete all data? This action cannot be undone!';
            const alertMsg = currentLang === 'id' ? '✓ Semua data berhasil dihapus!' : '✓ All data successfully deleted!';
            
            if (!confirm(confirmMsg)) return;
            
            localStorage.removeItem(STORAGE_KEY);
            localStorage.removeItem('uin_peminjaman');
            localStorage.removeItem('uin_bebas_pinjam');
            localStorage.removeItem('uin_penerbitan');
            localStorage.removeItem('uin_survey');
            
            libraryData = structuredClone(demoData); // Reload demo data structure
            saveData();
            alert(alertMsg);
        }

        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('click', () => {
                const service = card.dataset.service;
                const langDict = translations[currentLang];
                // Check if the service requires login
                if (['peminjaman', 'bebas-pinjam', 'penerbitan'].includes(service) && !currentUser) {
                     alert(langDict.alert_not_logged_in);
                     openModal('login');
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
                            <div class="news-icon" style="width: 100%; height: 250px; margin-bottom: 20px;">📰</div>
                            <p style="color: var(--secondary-blue); font-weight: 600; margin-bottom: 15px;">📅 20 Agustus 2025</p>
                            <p style="line-height: 1.8; margin-bottom: 15px;">UPT Perpustakaan menyelenggarakan program pelatihan **Systematic Literature Review (SLR)** untuk mahasiswa baru pascasarjana angkatan 2025. Pelatihan ini bertujuan untuk membekali mahasiswa dengan kemampuan melakukan tinjauan literatur sistematis yang sangat penting dalam penelitian akademik.</p>
                            <p style="line-height: 1.8; margin-bottom: 15px;">Materi yang diberikan meliputi strategi pencarian literatur, evaluasi kualitas sumber, dan teknik sintesis informasi. Para mahasiswa juga diajarkan cara menggunakan berbagai database akademik dan tools manajemen referensi.</p>
                            <p style="line-height: 1.8;">Kegiatan ini mendapat sambutan positif dari peserta karena sangat relevan dengan kebutuhan penelitian mereka di tingkat pascasarjana.</p>
                        ` : `
                            <div class="news-icon" style="width: 100%; height: 250px; margin-bottom: 20px;">📰</div>
                            <p style="color: var(--secondary-blue); font-weight: 600; margin-bottom: 15px;">📅 August 20, 2025</p>
                            <p style="line-height: 1.8; margin-bottom: 15px;">The Library Unit organized a **Systematic Literature Review (SLR)** training program for new postgraduate students of the 2025 cohort. This training aims to equip students with the ability to conduct systematic literature reviews, which is crucial in academic research.</p>
                            <p style="line-height: 1.8; margin-bottom: 15px;">The material provided includes literature search strategies, source quality evaluation, and information synthesis techniques. Students were also taught how to use various academic databases and reference management tools.</p>
                            <p style="line-height: 1.8;">The activity received positive feedback from participants as it is highly relevant to their research needs at the postgraduate level.</p>
                        `
                    },
                    'news-2': {
                        title: translations[currentLang].news_2_title,
                        content: currentLang === 'id' ? `
                            <div class="news-icon" style="width: 100%; height: 250px; margin-bottom: 20px;">🎉</div>
                            <p style="color: var(--secondary-blue); font-weight: 600; margin-bottom: 15px;">📅 19 Agustus 2025</p>
                            <p style="line-height: 1.8; margin-bottom: 15px;">UPT Perpustakaan turut memeriahkan acara **Pengenalan Kehidupan Kampus bagi Mahasiswa Baru (PKKMB)** tahun 2025.</p>
                            <p style="line-height: 1.8; margin-bottom: 15px;">Dalam kegiatan ini, perpustakaan memperkenalkan berbagai layanan dan fasilitas yang tersedia untuk mendukung kegiatan akademik mahasiswa baru, termasuk cara mengakses e-resources, peminjaman buku, dan layanan referensi.</p>
                            <p style="line-height: 1.8;">Mahasiswa juga diberikan panduan cara mengakses koleksi digital perpustakaan dan tips efektif dalam mencari sumber referensi untuk tugas kuliah dan penelitian.</p>
                        ` : `
                            <div class="news-icon" style="width: 100%; height: 250px; margin-bottom: 20px;">🎉</div>
                            <p style="color: var(--secondary-blue); font-weight: 600; margin-bottom: 15px;">📅 August 19, 2025</p>
                            <p style="line-height: 1.8; margin-bottom: 15px;">The Library Unit participated in the **Introduction to Campus Life for New Students (PKKMB)** event in 2025.</p>
                            <p style="line-height: 1.8; margin-bottom: 15px;">In this activity, the library introduced various services and facilities available to support the academic activities of new students, including how to access e-resources, book borrowing, and reference services.</p>
                            <p style="line-height: 1.8;">Students were also given a guide on how to access the library's digital collection and effective tips for finding reference sources for college assignments and research.</p>
                        `
                    },
                    'news-3': {
                        title: translations[currentLang].news_3_title,
                        content: currentLang === 'id' ? `
                            <div class="news-icon" style="width: 100%; height: 250px; margin-bottom: 20px;">📚</div>
                            <p style="color: var(--secondary-blue); font-weight: 600; margin-bottom: 15px;">📅 19 Agustus 2025</p>
                            <p style="line-height: 1.8; margin-bottom: 15px;">Workshop **literasi digital** diselenggarakan untuk meningkatkan kemampuan riset dan penggunaan sumber digital bagi civitas akademika UIN Syarif Hidayatullah Jakarta.</p>
                            <p style="line-height: 1.8; margin-bottom: 15px;">Peserta dilatih untuk mengevaluasi kredibilitas sumber online, menggunakan database akademik dengan efektif, mengelola referensi digital, dan menghindari plagiarisme dalam karya ilmiah.</p>
                            <p style="line-height: 1.8;">Workshop ini mendapat respon positif dari peserta dan akan dilanjutkan secara berkala setiap semester untuk memastikan seluruh civitas akademika memiliki kompetensi literasi digital yang memadai.</p>
                        ` : `
                            <div class="news-icon" style="width: 100%; height: 250px; margin-bottom: 20px;">📚</div>
                            <p style="color: var(--secondary-blue); font-weight: 600; margin-bottom: 15px;">📅 August 19, 2025</p>
                            <p style="line-height: 1.8; margin-bottom: 15px;">A **digital literacy** workshop was held to enhance the research and digital resource usage skills of the academic community of UIN Syarif Hidayatullah Jakarta.</p>
                            <p style="line-height: 1.8; margin-bottom: 15px;">Participants were trained to evaluate the credibility of online sources, effectively use academic databases, manage digital references, and avoid plagiarism in scholarly works.</p>
                            <p style="line-height: 1.8;">The workshop received positive response from participants and will be continued periodically every semester to ensure all academic community members have adequate digital literacy competence.</p>
                        `
                    }
                };

                title.textContent = newsData[news].title;
                body.innerHTML = newsData[news].content;
                modal.classList.add('show');
                lastOpenedModalType = 'news';
            });
        });

        document.querySelectorAll('a[data-social]').forEach(link => {
        link.addEventListener('click', (e) => {
        // Hapus: e.preventDefault();
        
        const platform = link.dataset.social;
        const currentLang = 'id';
        
        // Pilihan: Anda bisa mempertahankan alert sebagai notifikasi
        alert(`${currentLang === 'id' ? 'Membuka' : 'Opening'} ${platform}...`); 
        
        // Karena e.preventDefault() dihapus, tautan sekarang akan berfungsi
        // dan mengarahkan pengguna ke URL di atribut href.
    });
});

        // Initial calls
        applyTranslations(); // Panggil applyTranslations pertama kali
        renderDataLists();
        updateAuthButton();
