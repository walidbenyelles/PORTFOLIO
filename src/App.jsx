import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUp,
  BookOpen,
  Braces,
  BrainCircuit,
  Check,
  ChevronDown,
  ChevronRight,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  Globe2,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Network,
  Send,
  ShieldCheck,
  Sparkles,
  Sun,
  Terminal,
  X,
} from 'lucide-react';
import { profile } from './config';

const projectPhotos = {
  'AI-NIDS': [
    '/images/projets/ai-nids/1.png',
    '/images/projets/ai-nids/2.png',
    '/images/projets/ai-nids/3.png',
  ],
  EduPlan: [
    '/images/projets/eduplan/1.png',
    '/images/projets/eduplan/2.png',
    '/images/projets/eduplan/3.png',
    '/images/projets/eduplan/4.png',
    '/images/projets/eduplan/5.png',
    '/images/projets/eduplan/6.png',
  ],
  EtuNav: [
    '/images/projets/etunav/dashboard.png',
     '/images/projets/etunav/dashboardAdmin.png',
     '/images/projets/etunav/GestionAdmin.png',
     '/images/projets/etunav/chatbot.png',
     '/images/projets/etunav/alertes.png',
     '/images/projets/etunav/messagerie.png',
     '/images/projets/etunav/Inscription.png',
     '/images/projets/etunav/connexion.png',
     '/images/projets/etunav/connexionAdmin.png'
  ],
  'Bac Quiz': [
        '/images/projets/bac quiz/1.png',

  ],
  Portfolio: [
  '/images/projets/portfolio/1.png',
  '/images/projets/portfolio/2.png',
  '/images/projets/portfolio/3.png'
],
};

const content = {
  fr: {
    nav: ['À propos', 'Compétences', 'Projets', 'Parcours', 'Contact'],
    contactMe: 'Me contacter',
    available: 'Disponible pour un stage',
    hello: 'Salut, je suis',
    roles: [
      'passionné par le développement web.',
      'intéressé par l’IA et la cybersécurité.',
      'prêt à concrétiser des idées.',
    ],
    intro: 'Étudiant en 3ᵉ année d’informatique à l’Université Paris-Saclay, je conçois des applications web et explore l’intelligence artificielle et la cybersécurité.',
    discover: 'Découvrir mes projets',
    learnMore: 'En savoir plus',
    scroll: 'Défiler pour explorer',
    stat1: 'Année de licence', stat2: 'Projets présentés', stat3: 'Domaines de prédilection',
    aboutEyebrow: '01 / À PROPOS',
    aboutTitle1: 'Du code, des idées', aboutTitle2: 'et de la curiosité.',
    aboutP1: 'Je suis étudiant en informatique à l’Université Paris-Saclay. J’aime transformer un problème concret en une application utile, claire et agréable à utiliser.',
    aboutP2: 'Mon parcours m’a permis de pratiquer le développement full-stack, les algorithmes et les systèmes. Aujourd’hui, je développe aussi mes compétences en intelligence artificielle et en sécurité informatique.',
    currently: 'En ce moment', currentlyText: 'À la recherche d’un stage en informatique pour l’été 2027.',
    focus: 'Ce qui m’anime', focusText: 'Apprendre, construire et améliorer chaque projet.',
    skillsEyebrow: '02 / COMPÉTENCES', skillsTitle1: 'Mes outils pour', skillsTitle2: 'donner vie aux idées.',
    skillsIntro: 'Un socle polyvalent pour passer de l’idée à un produit fonctionnel.',
    skills: [
      { title: 'Développement web', description: 'Interfaces responsives et applications full-stack.', items: ['React', 'JavaScript', 'HTML / CSS', 'Flask', 'Bootstrap', 'TailWindCSS'] },
      { title: 'Programmation', description: 'Conception, algorithmique et résolution de problèmes.', items: ['Python', 'Java', 'C', 'OCaml', 'Git'] },
      { title: 'IA & Data', description: 'Apprentissage supervisé, analyse et visualisation de données.', items: ['scikit-learn', 'Pandas', 'Random Forest', 'Streamlit'] },
      { title: 'Systèmes & données', description: 'Fondations logicielles, réseaux et bases de données.', items: ['Linux', 'SQL', 'SQLAlchemy', 'Réseaux'] },
    ],
    projectsEyebrow: '03 / PROJETS', projectsTitle1: 'Quelques projets', projectsTitle2: 'dont je suis fier.',
    projectsIntro: 'Des expérimentations en IA aux applications web conçues pour des besoins concrets.',
    selected: 'SÉLECTION DE PROJETS', open: 'Mon GitHub', code: 'Voir GitHub', open2: 'ouvrir dans le play store',
    showMoreProjects: 'Voir plus de projets', showLessProjects: 'Voir moins',
    projects: [
      {
        no: '01', title: 'AI-NIDS', type: 'IA & Cybersécurité',
        desc: 'Système de détection d’intrusions réseau basé sur l’apprentissage supervisé. Entraînement d’un modèle Random Forest sur UNSW-NB15 et interface de démonstration Streamlit.',
        tags: ['Python', 'scikit-learn', 'Streamlit'], art: 'security', url:'https://github.com/walidbenyelles/AI-NIDS'
      },
      {
        no: '02', title: 'EduPlan', type: 'Application full-stack',
        desc: 'Plateforme web de gestion et d’organisation des activités pédagogiques, avec une application complète et une base de données.',
        tags: ['Flask', 'SQLAlchemy', 'HTML / CSS'], art: 'planner', url:'https://github.com/walidbenyelles/EduPlan'
      },
      {
        no: '03', title: 'EtuNav', type: 'Projet universitaire en équipe',
        desc: 'Projet logiciel collaboratif réalisé en équipe, avec une organisation en sprints et un suivi du code sur GitLab.',
        tags: ['Travail d’équipe', 'GitLab', 'Agile'], art: 'navigation', url:'https://github.com/walidbenyelles/ETUNAV'
      },
      {
        no: '04', title: 'Bac Quiz', type: 'Application éducative',
        desc: 'Application de quiz avec plusieurs matières et niveaux, pensée pour apprendre et s’entraîner de manière interactive.',
        tags: ['Web', 'Quiz', 'Éducation'], art: 'quiz', featured: true ,url:'https://play.google.com/store/apps/details?id=com.abdennour.quiz&hl=fr'
      },
      {
        no: '05', title: 'Portfolio', type: 'Site web personnel',
        desc: 'Portfolio personnel responsive développé avec React, Vite et Framer Motion. Présentation de mes projets, compétences et parcours, avec un mode sombre, deux langues et des galeries de captures interactives.',
        tags: ['React', 'Vite', 'Framer Motion'], art: 'portfolio', isPortfolio: true, url: 'https://github.com/walidbenyelles/PORTFOLIO'
      },
    ],
    journeyEyebrow: '04 / PARCOURS', journeyTitle1: 'Mon parcours,', journeyTitle2: 'étape par étape.',
    journeyIntro: 'Un parcours universitaire construit autour de la pratique et de la découverte.',
    current: 'En cours',
    schools: [
      { date: '2026 — 2027', level: 'L3 Informatique', place: 'Université Paris-Saclay', detail: 'Orsay, France', desc: 'Approfondissement en informatique : systèmes, réseaux, algorithmique et génie logiciel.' },
      { date: '2025 — 2026', level: 'L2 Informatique', place: 'Aix-Marseille Université', detail: 'Marseille, France', desc: 'Développement logiciel, programmation, bases de données et mathématiques pour l’informatique.' },
      { date: '2023 — 2025', level: 'L1/L2 Informatique', place: 'Université Abou Bekr Belkaïd', detail: 'Tlemcen, Algérie', desc: 'Acquisition des bases de l’algorithmique, de la programmation, des réseaux et des mathématiques.' },
    ],
    contactEyebrow: '05 / CONTACT', contactTitle1: 'Construisons quelque chose', contactTitle2: 'ensemble.',
    contactText: 'Une opportunité de stage, une idée de projet ou simplement envie d’échanger ? Écris-moi !',
    name: 'Ton nom', yourEmail: 'Ton email', subject: 'Sujet', message: 'Ton message',
    placeholderName: 'Comment tu t’appelles ?', placeholderEmail: 'nom@exemple.com',
    placeholderSubject: 'À propos de...', placeholderMessage: 'Parle-moi de ton idée...',
    send: 'Préparer le message',
    sent: 'Ton application mail va s’ouvrir pour envoyer ce message.',
    copied: 'Message copié ! Ajoute ton email dans src/config.js pour activer l’envoi direct.',
    copyError: 'Ajoute ton email dans src/config.js pour activer l’envoi.',
    connect: 'Retrouve-moi aussi ici',
    footer: 'Développé avec soin et curiosité.', top: 'Retour en haut',
    cv: 'Télécharger mon CV', cvFrench: 'Télécharger en français', cvEnglish: 'Télécharger en anglais', cvMissing: 'Dépose tes CV dans public/ pour activer les téléchargements.',
  },
  en: {
    nav: ['About', 'Skills', 'Projects', 'Education', 'Contact'],
    contactMe: 'Get in touch',
    available: 'Open to internships',
    hello: "Hi, I'm",
    roles: [
      'passionate about web development.',
      'exploring AI and cybersecurity.',
      'ready to bring ideas to life.',
    ],
    intro: 'Third-year computer science student at Université Paris-Saclay. I build web applications and explore artificial intelligence and cybersecurity.',
    discover: 'Explore my projects', learnMore: 'Learn more', scroll: 'Scroll to explore',
    stat1: 'Undergraduate year', stat2: 'Featured projects', stat3: 'Areas of interest',
    aboutEyebrow: '01 / ABOUT', aboutTitle1: 'Code, ideas', aboutTitle2: 'and curiosity.',
    aboutP1: "I'm a computer science student at Université Paris-Saclay. I enjoy turning real-life problems into useful, intuitive applications.",
    aboutP2: 'My background includes full-stack development, algorithms and systems. I am now expanding my skills in artificial intelligence and cybersecurity.',
    currently: 'Currently', currentlyText: 'Looking for a computer science internship for summer 2027.',
    focus: 'What drives me', focusText: 'Learning, building and improving with every project.',
    skillsEyebrow: '02 / SKILLS', skillsTitle1: 'The tools I use', skillsTitle2: 'to make things happen.',
    skillsIntro: 'A versatile toolkit to turn an idea into a working product.',
    skills: [
      { title: 'Web development', description: 'Responsive interfaces and full-stack web applications.', items: ['React', 'JavaScript', 'HTML / CSS', 'Flask', 'Bootstrap'] },
      { title: 'Programming', description: 'Design, algorithms and problem-solving.', items: ['Python', 'Java', 'C', 'OCaml', 'Git'] },
      { title: 'AI & Data', description: 'Supervised learning, data analysis and visualization.', items: ['scikit-learn', 'Pandas', 'Random Forest', 'Streamlit'] },
      { title: 'Systems & Data', description: 'Software foundations, networking and databases.', items: ['Linux', 'SQL', 'SQLAlchemy', 'Networking'] },
    ],
    projectsEyebrow: '03 / PROJECTS', projectsTitle1: 'Some projects', projectsTitle2: "I'm proud of.",
    projectsIntro: 'From machine learning experiments to web apps solving real problems.',
    selected: 'FEATURED WORK', open: 'My GitHub', code: 'See GitHub', open2: 'open in play store',
    showMoreProjects: 'Show more projects', showLessProjects: 'Show less',
    projects: [
      { no: '01', title: 'AI-NIDS', type: 'AI & Cybersecurity', desc: 'Network intrusion detection system powered by supervised machine learning. A Random Forest trained on UNSW-NB15 with an interactive Streamlit demo.', tags: ['Python', 'scikit-learn', 'Streamlit'], art: 'security', url:'https://github.com/walidbenyelles/AI-NIDS' },
      { no: '02', title: 'EduPlan', type: 'Full-stack application', desc: 'Web platform for managing and organizing educational activities, built as a complete database-backed application.', tags: ['Flask', 'SQLAlchemy', 'HTML / CSS'], art: 'planner', url:'https://github.com/walidbenyelles/EduPlan' },
      { no: '03', title: 'EtuNav', type: 'Team university project', desc: 'Collaborative software project organized around sprints with version control and tracking on GitLab.', tags: ['Teamwork', 'GitLab', 'Agile'], art: 'navigation' , url:'https://github.com/walidbenyelles/ETUNAV' },
      { no: '04', title: 'Bac Quiz', type: 'Educational application', desc: 'Interactive quiz app covering several subjects and levels, designed to make learning more engaging.', tags: ['Web', 'Quiz', 'Education'], art: 'quiz', featured: true ,url:'https://play.google.com/store/apps/details?id=com.abdennour.quiz&hl=fr'},
      { no: '05', title: 'Portfolio', type: 'Personal website', desc: 'Responsive personal portfolio built with React, Vite and Framer Motion. Showcases my projects, skills and education, with dark mode, two languages and interactive screenshot galleries.', tags: ['React', 'Vite', 'Framer Motion'], art: 'portfolio', isPortfolio: true, url: '#home' },
    ],
    journeyEyebrow: '04 / EDUCATION', journeyTitle1: 'My journey,', journeyTitle2: 'one step at a time.',
    journeyIntro: 'An academic path focused on hands-on experience and continuous discovery.', current: 'Current',
    schools: [
      { date: '2026 — 2027', level: '3rd year, Computer Science', place: 'Université Paris-Saclay', detail: 'Orsay, France', desc: 'Advanced coursework in systems, networking, algorithms and software engineering.' },
      { date: '2025 — 2026', level: '2nd year, Computer Science', place: 'Aix-Marseille Université', detail: 'Marseille, France', desc: 'Software development, programming, databases and mathematics for computer science.' },
      { date: '2023 — 2025', level: '1st and 2nd year, Computer Science', place: 'Université Abou Bekr Belkaïd', detail: 'Tlemcen, Algeria', desc: 'Core foundations in algorithms, networking, programming and mathematics.' },
    ],
    contactEyebrow: '05 / CONTACT', contactTitle1: "Let's build something", contactTitle2: 'together.',
    contactText: 'An internship opportunity, a project idea or just want to connect? Drop me a message!',
    name: 'Your name', yourEmail: 'Your email', subject: 'Subject', message: 'Your message',
    placeholderName: "What's your name?", placeholderEmail: 'name@example.com',
    placeholderSubject: 'About...', placeholderMessage: 'Tell me about your idea...',
    send: 'Prepare message', sent: 'Your mail app will open with the message ready to send.',
    copied: 'Message copied! Add your email to src/config.js to enable direct sending.',
    copyError: 'Add your email to src/config.js to enable sending.',
    connect: 'Find me online', footer: 'Made with care and curiosity.', top: 'Back to top',
    cv: 'Download my CV', cvFrench: 'Download in French', cvEnglish: 'Download in English', cvMissing: 'Place your CV files in public/ to enable downloads.',
  },
};

const sectionIds = ['about', 'skills', 'projects', 'journey', 'contact'];
const skillIcons = [Code2, Braces, BrainCircuit, Database];
const projectIcons = { security: ShieldCheck, planner: Layers3, navigation: Network, quiz: BookOpen, portfolio: Globe2 };

function Reveal({ children, className = '', delay = 0 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay, ease: [0.2, 0.7, 0.2, 1] }}
      viewport={{ once: true, amount: 0.12 }}
    >{children}</motion.div>
  );
}

function Typewriter({ phrases }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [letters, setLetters] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const current = phrases[phraseIndex % phrases.length];

  useEffect(() => {
    setPhraseIndex(0);
    setLetters(0);
    setDeleting(false);
  }, [phrases]);

  useEffect(() => {
    const full = letters >= current.length;
    const empty = letters <= 0;
    const delay = full && !deleting ? 1900 : deleting ? 32 : 55;
    const id = setTimeout(() => {
      if (full && !deleting) setDeleting(true);
      else if (empty && deleting) {
        setDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else setLetters((n) => n + (deleting ? -1 : 1));
    }, delay);
    return () => clearTimeout(id);
  }, [current, deleting, letters, phrases.length]);

  return <span className="typewriter" aria-label={current}>{current.slice(0, letters)}<span className="cursor" aria-hidden="true" /></span>;
}

function Header({ lang, setLang, theme, setTheme, t }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    if (!mobileOpen) return;
    const fn = (event) => { if (event.key === 'Escape') setMobileOpen(false); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [mobileOpen]);

  return (
    <header className="site-header">
      <div className="header-inner container-wide">
        <a
          className="logo"
          href="#home"
          aria-label="Ben-Yelles — accueil"
          onClick={() => setMobileOpen(false)}
          style={{ flex: '0 0 auto', width: 'clamp(75px, 9vw, 115px)' }}
        >
          <span className="logo-word" style={{ display: 'block', width: '100%' }}>
            <img
              src={theme === 'dark' ? '/svg/W_light.svg' : '/svg/W_dark.svg'}
              alt="Logo Walid"
              style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {t.nav.map((label, i) => <a key={sectionIds[i]} href={`#${sectionIds[i]}`}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <div className="language-toggle" role="group" aria-label="Language / Langue">
            <button className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')} aria-pressed={lang === 'fr'}>FR</button>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')} aria-pressed={lang === 'en'}>EN</button>
          </div>
          <button className="theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label={theme === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'}>
            {theme === 'light' ? <Moon size={20} strokeWidth={2} /> : <Sun size={20} strokeWidth={2} />}
          </button>
          <a className="gradient-button header-contact" href="#contact">{t.contactMe} <ArrowUp size={17} className="tilt-arrow" /></a>
          <button className="mobile-menu-button" onClick={() => setMobileOpen((open) => !open)} aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={mobileOpen}>
            {mobileOpen ? <X size={25}/> : <Menu size={25}/>}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} aria-label="Navigation mobile">
            {t.nav.map((label, i) => <a key={sectionIds[i]} href={`#${sectionIds[i]}`} onClick={() => setMobileOpen(false)}>{label}<ArrowUp size={17} className="tilt-arrow" /></a>)}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero({ t }) {
  return (
    <section className="hero" id="home">
      <div className="hero-ambient" aria-hidden="true" />
      <div className="container-wide hero-inner">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="availability-badge"><span className="online-dot" />{t.available}</div>
        </motion.div>
        <motion.h1 className="hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.1 }}>
          <span>{t.hello}</span>
          <span className="hero-name">{profile.firstName.toUpperCase()}</span>
          <span className="gradient-text">{profile.lastName}</span>
        </motion.h1>
        <motion.div className="hero-dynamic" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}>
          <span className="serif-italic">{t === content.fr ? 'Je suis' : 'I am'}</span>{' '}<Typewriter phrases={t.roles} />
        </motion.div>
        <motion.p className="hero-description" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.38 }}>
          {t.intro}
        </motion.p>
        <motion.div className="hero-ctas" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.48 }}>
          <a className="gradient-button cta-large" href="#projects">{t.discover}<ArrowUp className="tilt-arrow" size={20} /></a>
          <a className="outline-button cta-large" href="#about">{t.learnMore}<ArrowDown size={18} /></a>
        </motion.div>
        <motion.div className="scroll-hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}><span className="scroll-line" />{t.scroll}</motion.div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, first, second, desc }) {
  return (
    <Reveal className="section-heading">
      <div className="section-eyebrow"><span className="eyebrow-line" />{eyebrow}</div>
      <h2>{first}<br /><span className="gradient-text">{second}</span></h2>
      {desc && <p>{desc}</p>}
    </Reveal>
  );
}

function About({ t }) {
  return (
    <section className="section about-section" id="about">
      <div className="container-wide about-layout">
        <div>
          <SectionHeading eyebrow={t.aboutEyebrow} first={t.aboutTitle1} second={t.aboutTitle2} />
          <Reveal delay={0.1} className="about-copy"><p>{t.aboutP1}</p><p>{t.aboutP2}</p></Reveal>
          {/* Menu de téléchargement CV : les deux PDF doivent être dans public/ */}
          <Reveal className="about-cv" delay={0.14}>
            <details className="cv-dropdown">
              <summary className="gradient-button cv-trigger">
                <Download size={19} aria-hidden="true" />
                {t.cv}
                <ChevronDown size={17} className="cv-chevron" aria-hidden="true" />
              </summary>
              <div className="cv-options">
                <a
                  href="/CV.pdf"
                  download="CV_Mohammed_Walid_Ben-Yelles_FR.pdf"
                >
                  <span>{t.cvFrench}</span>
                  <Download size={16} aria-hidden="true" />
                </a>
                <a
                  href="/CV_English.pdf"
                  download="CV_Mohammed_Walid_Ben-Yelles_EN.pdf"
                >
                  <span>{t.cvEnglish}</span>
                  <Download size={16} aria-hidden="true" />
                </a>
              </div>
            </details>
          </Reveal>
          <Reveal className="about-info" delay={0.17}>
            <div><span className="mini-icon"><Sparkles size={19}/></span><div><strong>{t.currently}</strong><p>{t.currentlyText}</p></div></div>
            <div><span className="mini-icon"><Terminal size={19}/></span><div><strong>{t.focus}</strong><p>{t.focusText}</p></div></div>
          </Reveal>
        </div>
        <Reveal className="about-visual" delay={0.15}>
          <div className="visual-grid" aria-hidden="true" />
          <div className="terminal-window">
            <div className="terminal-top"><span /><span /><span /><small>what do you think about my personal website?</small></div>
            <div className="terminal-content">
              <span className="terminal-comment">// hello_world.py</span>
              <p><span className="terminal-purple">class</span> <span className="terminal-blue">Developer</span>:</p>
              <p className="indent"><span className="terminal-purple">name</span> = <span className="terminal-green">"Walid"</span></p>
              <p className="indent"><span className="terminal-purple">interests</span> = [</p>
              <p className="indent double"><span className="terminal-green">"AI"</span>, <span className="terminal-green">"Cybersecurity"</span>,</p>
              <p className="indent double"><span className="terminal-green">"Web Development"</span></p>
              <p className="indent">]</p>
              <p className="terminal-output">&gt; always_learning = True <span className="cursor-static">▍</span></p>
              <p className="terminal-output">&gt; isLookingForIntership = <span style={{ color: 'red' }}>True!</span> <span className="cursor-static">▍</span></p>
            </div>
          </div>
          <div className="floating-chip chip-top"><BrainCircuit size={17} /> AI </div>
          <div className="floating-chip chip-bottom"><Code2 size={17}/> Full-stack</div>
          <div className="floating-chip chip-botton-right"><Code2 size={17}/> systems</div>

        </Reveal>
      </div>
      <div className="container-wide stats-bar">
        <div><strong>3<span>e</span></strong><small>{t.stat1}</small></div>
        <div><strong>{String(t.projects.length).padStart(2, '0')}</strong><small>{t.stat2}</small></div>
        <div><strong>03</strong><small>{t.stat3}</small></div>
      </div>
    </section>
  );
}

function Skills({ t }) {
  return (
    <section className="section section-tinted" id="skills">
      <div className="container-wide">
        <SectionHeading eyebrow={t.skillsEyebrow} first={t.skillsTitle1} second={t.skillsTitle2} desc={t.skillsIntro}/>
        <div className="skills-grid">
          {t.skills.map((skill, i) => {
            const Icon = skillIcons[i];
            return <Reveal key={skill.title} delay={i * 0.07} className="skill-card">
              <div className="skill-icon"><Icon size={27} strokeWidth={1.8}/></div>
              <span className="skill-number">0{i+1}</span>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="tag-list">{skill.items.map((tag) => <span className="tech-tag" key={tag}>{tag}</span>)}</div>
            </Reveal>;
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectArt({ type, title, images = [] }) {
  const Icon = projectIcons[type];
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const photos = Array.isArray(images) ? images.filter(Boolean) : [];

  function goTo(index) {
    if (photos.length === 0) return;
    const nextIndex = (index + photos.length) % photos.length;
    const track = trackRef.current;
    if (track) {
      track.scrollTo({
        left: nextIndex * track.clientWidth,
        behavior: 'smooth',
      });
    }
    setActiveIndex(nextIndex);
  }

  function handleScroll(event) {
    const track = event.currentTarget;
    if (!track.clientWidth) return;
    const position = Math.round(track.scrollLeft / track.clientWidth);
    setActiveIndex(Math.max(0, Math.min(position, photos.length - 1)));
  }

  // Sans photo, on laisse exactement l'illustration originale.
  if (photos.length === 0) {
    return (
      <div className={`project-art art-${type}`} aria-hidden="true">
        <div className="art-glow" />
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />
        <span className="art-center">
          {Icon && <Icon size={64} strokeWidth={1.4} />}
        </span>
        <div className="art-label"><span className="art-label-dot" />{type === 'security' ? 'SECURE SYSTEM' : type === 'planner' ? 'SMART PLANNING' : type === 'navigation' ? 'TEAM PROJECT' : 'LEARN & PLAY'}</div>
      </div>
    );
  }

  return (
    <div className={`project-art art-${type} project-gallery`}>
      <div
        className="project-gallery-track"
        ref={trackRef}
        onScroll={handleScroll}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') {
            event.preventDefault();
            goTo(activeIndex - 1);
          } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            goTo(activeIndex + 1);
          }
        }}
        role="region"
        aria-roledescription="carrousel"
        aria-label={`Captures du projet ${title}`}
        tabIndex={photos.length > 1 ? 0 : undefined}
      >
        {photos.map((src, index) => (
          <img
            key={`${src}-${index}`}
            className="project-gallery-image"
            src={src}
            alt={`${title} — capture ${index + 1} sur ${photos.length}`}
            loading="lazy"
            decoding="async"
            draggable="false"
          />
        ))}
      </div>

      {photos.length > 1 && (
        <>
          <button
            type="button"
            className="gallery-control gallery-prev"
            onClick={() => goTo(activeIndex - 1)}
            aria-label={`Photo précédente de ${title}`}
          >
            <ChevronRight size={21} />
          </button>
          <button
            type="button"
            className="gallery-control gallery-next"
            onClick={() => goTo(activeIndex + 1)}
            aria-label={`Photo suivante de ${title}`}
          >
            <ChevronRight size={21} />
          </button>
          <div className="gallery-dots" aria-label={`Navigation des photos de ${title}`}>
            {photos.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`gallery-dot ${activeIndex === index ? 'active' : ''}`}
                onClick={() => goTo(index)}
                aria-label={`Afficher la photo ${index + 1} de ${title}`}
                aria-current={activeIndex === index ? 'true' : undefined}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Projects({ t }) {
  // Les 4 premiers projets sont visibles par défaut.
  const [showAll, setShowAll] = useState(false);
  const hasMore = t.projects.length > 4;
  const visibleProjects = showAll ? t.projects : t.projects.slice(0, 4);

  return (
    <section className="section projects-section" id="projects">
      <div className="container-wide">
        <SectionHeading eyebrow={t.projectsEyebrow} first={t.projectsTitle1} second={t.projectsTitle2} desc={t.projectsIntro}/>
        <div className="featured-label"><span>{t.selected}</span><span>2023 — 2026</span></div>

        <div className="projects-grid" id="projects-list">
          {visibleProjects.map((project, i) => (
            <Reveal delay={(i % 2) * 0.08} key={project.title} className="project-card">
              <ProjectArt type={project.art} title={project.title} images={projectPhotos[project.title] || []} />
              <div className="project-body">
                <div className="project-meta"><span>{project.no} / {project.type}</span><ArrowUp size={18} className="tilt-arrow" /></div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="tag-list">{project.tags.map((tag) => <span className="tech-tag" key={tag}>{tag}</span>)}</div>
                <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                  {project.featured ? t.open2 : t.code} <ArrowUp size={17} className="tilt-arrow" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Ne montrer le bouton que lorsqu'il existe un 5e projet. */}
        {hasMore && (
          <div className="all-projects-row">
            <button
              type="button"
              className="outline-button"
              onClick={() => setShowAll((previous) => !previous)}
              aria-expanded={showAll}
              aria-controls="projects-list"
            >
              {showAll ? t.showLessProjects : t.showMoreProjects}
              {showAll ? <ArrowUp size={18} /> : <ArrowDown size={18} />}
            </button>
          </div>
        )}

        <Reveal className="all-projects-row">
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={21} /> {t.open} <ArrowRight size={20} /></a>
        </Reveal>
      </div>
    </section>
  );
}

function Journey({ t }) {
  return (
    <section className="section section-tinted journey-section" id="journey">
      <div className="container-wide journey-layout">
        <div className="journey-sticky"><SectionHeading eyebrow={t.journeyEyebrow} first={t.journeyTitle1} second={t.journeyTitle2} desc={t.journeyIntro}/></div>
        <div className="timeline">
          {t.schools.map((school, i) => <Reveal key={school.place} delay={i * 0.08} className="timeline-item">
            <div className="timeline-node"><GraduationCap size={18}/></div>
            <div className="timeline-date">{school.date}{i === 0 && <span className="current-chip">{t.current}</span>}</div>
            <h3>{school.level}</h3>
            <h4>{school.place}</h4>
            <p className="school-place"><Globe2 size={15}/>{school.detail}</p>
            <p className="school-description">{school.desc}</p>
          </Reveal>)}
        </div>
      </div>
    </section>
  );
}

function Contact({ t, lang }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [notice, setNotice] = useState('');
  const socials = [{ name: 'GitHub', url: profile.github, Icon: Github }, ...(profile.linkedin ? [{ name: 'LinkedIn', url: profile.linkedin, Icon: Linkedin }] : [])];

  async function handleSend(e) {
    e.preventDefault();
    setNotice('');
    const body = `${lang === 'fr' ? 'De' : 'From'}: ${form.name} <${form.email}>\n\n${form.message}`;
    if (profile.email) {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
      setNotice(t.sent);
    } else {
      try {
        await navigator.clipboard.writeText(`${form.subject}\n\n${body}`);
        setNotice(t.copied);
      } catch {
        setNotice(t.copyError);
      }
    }
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container-wide contact-layout">
        <div className="contact-left">
          <SectionHeading eyebrow={t.contactEyebrow} first={t.contactTitle1} second={t.contactTitle2} desc={t.contactText}/>
          <Reveal className="social-links" delay={0.1}>
            <p>{t.connect}</p>
            <div>{socials.map(({ name, url, Icon }) => <a key={name} href={url} target="_blank" rel="noreferrer"><Icon size={21}/>{name}<ArrowUp className="tilt-arrow" size={15}/></a>)}</div>
          </Reveal>
        </div>
        <Reveal delay={0.12} className="form-card">
          <form onSubmit={handleSend}>
            <div className="form-row">
              <label>{t.name}<input required type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} placeholder={t.placeholderName}/></label>
              <label>{t.yourEmail}<input required type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder={t.placeholderEmail}/></label>
            </div>
            <label>{t.subject}<input required type="text" value={form.subject} onChange={(e) => setForm({...form, subject: e.target.value})} placeholder={t.placeholderSubject}/></label>
            <label>{t.message}<textarea required rows={5} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} placeholder={t.placeholderMessage}/></label>
            <button className="gradient-button send-button" type="submit">{t.send}<Send size={18}/></button>
            {notice && <p className="form-notice" role="status"><Check size={17}/>{notice}</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer({ t, theme }) {
  return (
    <footer className="site-footer">
      <div className="container-wide footer-inner">
        <a href="#home" className="footer-brand" aria-label="Retour à l’accueil">
          <img
            src={theme === 'dark' ? '/svg/W_light.svg' : '/svg/W_dark.svg'}
            alt="Logo Walid"
            style={{
              display: 'block',
              width: 'clamp(70px, 8vw, 100px)',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </a>

        <p>© {new Date().getFullYear()} Mohammed Walid Ben-Yelles. {t.footer}</p>

        <a href="#home">
          {t.top} <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  const [lang, setLang] = useState(() => (typeof window !== 'undefined' && localStorage.getItem('portfolio-lang')) || 'fr');
  const [theme, setTheme] = useState(() => (typeof window !== 'undefined' && localStorage.getItem('portfolio-theme')) || 'light');
  const t = useMemo(() => content[lang] || content.fr, [lang]);

  useEffect(() => { document.documentElement.setAttribute('data-theme', theme); localStorage.setItem('portfolio-theme', theme); }, [theme]);
  useEffect(() => { document.documentElement.lang = lang; localStorage.setItem('portfolio-lang', lang); }, [lang]);

  return (
    <>
      <Header lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t}/>
      <main>
        <Hero t={t}/>
        <About t={t}/>
        <Skills t={t}/>
        <Projects t={t}/>
        <Journey t={t}/>
        <Contact t={t} lang={lang}/>
      </main>
      <Footer t={t} theme={theme} />
    </>
  );
}
