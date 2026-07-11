// 1. Słownik Tłumaczeń
// 1. Słownik Tłumaczeń
const translations = {
    en: {
        nav_about: "About me",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        about_title: "About me",
        about_text: "I am a second-year Computer Science student with a background as an Electronics Technician. Unlike many peers who focus on high-level web development, I am passionate about what happens 'under the hood.' My focus is on C, C++, and Operating Systems because they offer total control over hardware and performance. I approach programming with an analytical mindset. Currently, I am deepening my knowledge of Linux environments and network protocols to combine low-level programming with cybersecurity.",
        skills_title: "My Skills",
        cat_programming: "Programming",
        cat_os: "Operating Systems",
        cat_vcs: "Version Control",
        cat_languages: "Languages",
        lang_en: "English B2",
        lang_de: "German B1",
        lang_pl: "Polish (Native)",

        projects_title: "My Projects",
        
        proj_c_title: "Cross-Platform Black Box Game",
        proj_c_desc: "A logic puzzle game running in the terminal. Implemented custom 'raw mode' to enable real-time interaction on both Linux and Windows.",
        
        proj_java_title: "Smart Parking REST API",
        proj_java_desc: "Backend system for parking management. Features include dynamic pricing algorithms, VIP/Blacklist access control, and emergency protocols, backed by an H2 database and Spring Boot.",        
        
        proj_web_title: "Café Landing Page",
        proj_web_desc: "Responsive website for a local business. Focused on modern UI/UX design and SEO optimization.",

        // NOWE PROJEKTY - EN
        proj_mirrorc_title: "MirrorC - Multi-Threaded File Mover",
        proj_mirrorc_desc: "A high-performance, cross-platform file traversal and copying tool written in C11. Utilizes a Thread Pool architecture and Zero-Copy I/O to maximize hardware throughput.",
        
        proj_llm_title: "Aegis-LLM DAST Scanner",
        proj_llm_desc: "An advanced, asynchronous DAST scanner for auditing LLM-based applications. Built to meet the rigorous requirements of the NIS2 Directive and OWASP Top 10 for LLMs 2026.",
        
        btn_code: "Check Code",
        contact_title: "Contact & Feedback",
        form_email: "Your Email:",
        form_message: "Message:",
        form_send: "Send"
    },
    
    pl: {
        nav_about: "O mnie",
        nav_skills: "Umiejętności",
        nav_projects: "Projekty",
        nav_contact: "Kontakt",
        about_title: "O mnie",
        about_text: "Jestem studentem drugiego roku informatyki z tytułem Technika Elektronika. W przeciwieństwie do wielu rówieśników skupiających się na tworzeniu stron www, mnie pasjonuje to, co dzieje się „pod maską”. Specjalizuję się w C, C++ i systemach operacyjnych, ponieważ dają pełną kontrolę nad sprzętem i wydajnością. Do programowania podchodzę analitycznie. Obecnie zgłębiam środowiska Linux i protokoły sieciowe, aby w przyszłości połączyć programowanie niskopoziomowe z cyberbezpieczeństwem.",
        skills_title: "Umiejętności",
        cat_programming: "Programowanie",
        cat_os: "Systemy Operacyjne",
        cat_vcs: "Kontrola Wersji",
        cat_languages: "Języki",
        lang_en: "Angielski B2",
        lang_de: "Niemiecki B1",
        lang_pl: "Polski (Ojczysty)",

        projects_title: "Moje Projekty",
        
        proj_c_title: "Gra Logiczna Black Box",
        proj_c_desc: "Gra logiczna działająca w terminalu. Zaimplementowałem własną obsługę 'raw mode', aby umożliwić interakcję w czasie rzeczywistym na Linuxie i Windowsie.",
        
        proj_java_title: "System Parkingowy REST API",
        proj_java_desc: "System backendowy do zarządzania parkingiem. Zawiera algorytmy dynamicznego cennika, kontrolę dostępu (VIP/Czarna Lista) oraz protokoły awaryjne. Całość oparta na bazie H2 i Spring Boot.",        
        
        proj_web_title: "Strona WWW Kawiarni",
        proj_web_desc: "Responsywna strona wizytówka dla lokalnego biznesu. Skupiona na nowoczesnym designie i optymalizacji SEO.",

        // NOWE PROJEKTY - PL
        proj_mirrorc_title: "MirrorC - Wielowątkowy Menedżer Plików",
        proj_mirrorc_desc: "Wydajne, wieloplatformowe narzędzie do kopiowania plików napisane w C11. Wykorzystuje architekturę Thread Pool oraz Zero-Copy I/O w celu maksymalizacji przepustowości sprzętowej.",
        
        proj_llm_title: "Aegis-LLM Skaner DAST",
        proj_llm_desc: "Zaawansowany, asynchroniczny skaner DAST do audytu bezpieczeństwa aplikacji opartych na LLM. Zbudowany zgodnie z rygorystycznymi wymogami dyrektywy NIS2 i standardami OWASP Top 10 dla LLM 2026.",
        
        btn_code: "Zobacz Kod",
        contact_title: "Kontakt i Opinie",
        form_email: "Twój Email:",
        form_message: "Wiadomość:",
        form_send: "Wyślij"
    },

    de: {
        nav_about: "Über mich",
        nav_skills: "Fähigkeiten",
        nav_projects: "Projekte",
        nav_contact: "Kontakt",
        about_title: "Über mich",
        about_text: "Ich bin Informatikstudent im zweiten Jahr und habe auch Erfahrung als Elektroniker. Anders als viele andere interessiere ich mich nicht für Webentwicklung, sondern für die Technik im Hintergrund. Ich konzentriere mich auf C, C++ und Betriebssysteme, weil ich dort die Hardware direkt kontrollieren kann. Ich arbeite gerne logisch und analytisch. Zurzeit lerne ich mehr über Linux und Netzwerke. Mein Ziel ist es, Systemprogrammierung mit Cybersicherheit zu verbinden.",
        skills_title: "Fähigkeiten",
        cat_programming: "Programmierung",
        cat_os: "Betriebssysteme",
        cat_vcs: "Versionskontrolle",
        cat_languages: "Sprachen",
        lang_en: "Englisch B2",
        lang_de: "Deutsch B1",
        lang_pl: "Polnisch (Muttersprache)",
        
        projects_title: "Meine Projekte",
        
        proj_c_title: "Black Box Logikspiel",
        proj_c_desc: "Ein Logikspiel für das Terminal. Ich habe einen eigenen 'Raw Mode' programmiert, damit es auf Linux und Windows funktioniert.",
        
        proj_java_title: "Smart Parking System",
        proj_java_desc: "Ein Backend-System für die Parkplatzverwaltung. Zu den Funktionen gehören dynamische Preise, Zugangskontrolle (VIP/Blacklist) und Notfallprotokolle. Basierend auf H2-Datenbank und Spring Boot.",        
        
        proj_web_title: "Café Webseite",
        proj_web_desc: "Eine moderne Webseite für ein lokales Café. Optimiert für Handys und Suchmaschinen (SEO).",

        // NOWE PROJEKTY - DE
        proj_mirrorc_title: "MirrorC - Multi-Thread-Dateimanager",
        proj_mirrorc_desc: "Ein leistungsstarkes, plattformübergreifendes Tool zum Kopieren von Dateien, geschrieben in C11. Nutzt eine Thread-Pool-Architektur und Zero-Copy-I/O, um die Hardwareleistung zu maximieren.",
        
        proj_llm_title: "Aegis-LLM DAST-Scanner",
        proj_llm_desc: "Ein fortschrittlicher, asynchroner DAST-Scanner zur Überprüfung von LLM-basierten Anwendungen. Entwickelt, um die strengen Anforderungen der NIS2-Richtlinie und der OWASP Top 10 für LLMs 2026 zu erfüllen.",
        
        btn_code: "Code ansehen",
        contact_title: "Kontakt & Feedback",
        form_email: "Ihre E-Mail:",
        form_message: "Nachricht:",
        form_send: "Senden"
    }
};

// 2. Obsługa Zmiany Języka
const langSelector = document.getElementById('language-selector');

langSelector.addEventListener('change', (e) => {
    const language = e.target.value; // 'en', 'pl' lub 'de'
    updateContent(language);
});

function updateContent(lang) {
    // Pobieramy wszystkie elementy, które mają atrybut data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        // Jeśli mamy tłumaczenie dla tego klucza, podmieniamy tekst
        if (translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });
}

// 3. Obsługa Dark Mode
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Sprawdź, czy użytkownik miał wcześniej ustawiony tryb
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Zapisz preferencję w przeglądarce
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// --- OBSŁUGA HAMBURGER MENU ---
// --- OBSŁUGA MENU ---
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');
const closeBtn = document.getElementById('close-btn');
const navLinks = document.querySelectorAll('.nav-link-item');

// Otwieranie
hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.add('active');
});

// Zamykanie (Krzyżyk)
closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
});

// Zamykanie po kliknięciu w link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Zamykanie po kliknięciu poza menu
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
});

// --- OBSŁUGA PŁYWAJĄCYCH SOCIAL MEDIÓW (Intersection Observer) ---
const mainFooter = document.querySelector('footer');
const floatingSocials = document.getElementById('floating-socials');

if (mainFooter && floatingSocials) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Gdy duża stopka wjeżdża na ekran -> ukrywamy mały pasek
                floatingSocials.classList.add('hidden');
            } else {
                // Gdy duża stopka znika z ekranu (scroll do góry) -> pokazujemy mały pasek
                floatingSocials.classList.remove('hidden');
            }
        });
    }, {
        root: null,
        threshold: 0.1 // Wystarczy, że 10% dużej stopki się pokaże, by ukryć pasek
    });

    observer.observe(mainFooter);
}