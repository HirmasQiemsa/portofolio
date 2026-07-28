/**
 * ============================================================
 *  PORTFOLIO APPLICATION LOGIC
 * ============================================================
 *  Reads PORTFOLIO_DATA from data.js and renders all sections.
 *  Handles: typing animation, scroll effects, theme toggle,
 *           mobile menu, form handling, nav highlighting.
 * ============================================================
 */

(function () {
  'use strict';

  const D = PORTFOLIO_DATA;

  /* ── SVG Icon Library ───────────────────────────────────── */
  const ICONS = {
    code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    tool: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    graduation: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
    whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`,
    mapPin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    externalLink: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
    moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
    download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`
  };

  /* ═══════════════════════════════════════════════════════════
     RENDER FUNCTIONS
     ═══════════════════════════════════════════════════════════ */

  /** Render Navigation */
  function renderNav() {
    const logo = document.getElementById('navLogo');
    const links = document.getElementById('navLinks');

    logo.innerHTML = `${D.personal.firstName}<span>.dev</span>`;

    links.innerHTML = D.navigation
      .map(n => `<a class="navbar__link" href="${n.href}">${n.label}</a>`)
      .join('');
  }

  /** Render Hero Section */
  function renderHero() {
    document.getElementById('heroName').textContent = D.personal.fullName;
    document.getElementById('heroDescription').textContent = D.personal.summary;
    document.getElementById('heroPhoto').src = D.personal.photo;
    document.getElementById('heroPhoto').alt = `Photo of ${D.personal.fullName}`;

    const cta = document.getElementById('heroCta');
    cta.innerHTML = `
      <a href="#contact" class="btn btn--primary">
        ${ICONS.mail}
        Contact Me
      </a>
      <a href="${D.personal.resumeUrl}" class="btn btn--outline" target="_blank" rel="noopener">
        ${ICONS.download}
        Resume
      </a>
    `;
  }

  /** Render About Section */
  function renderAbout() {
    document.getElementById('aboutDescription').textContent = D.personal.summary;

    const stats = document.getElementById('aboutStats');
    const statData = [
      { number: D.skills.reduce((a, c) => a + c.items.length, 0) + '+', label: 'Technical Skills' },
      { number: D.projects.length + '+', label: 'Projects Built' },
      { number: D.experience.length + '+', label: 'Experiences' },
      { number: D.education[0]?.gpa || '—', label: 'GPA' }
    ];

    stats.innerHTML = statData
      .map(s => `
        <div class="stat-card">
          <span class="stat-card__number">${s.number}</span>
          <span class="stat-card__label">${s.label}</span>
        </div>
      `).join('');
  }

  /** Render Skills Section */
  function renderSkills() {
    const grid = document.getElementById('skillsGrid');

    grid.innerHTML = D.skills
      .map(cat => `
        <div class="skill-category">
          <div class="skill-category__icon">${ICONS[cat.icon] || ICONS.code}</div>
          <h3 class="skill-category__title">${cat.category}</h3>
          ${cat.items.map(item => `
            <div class="skill-item">
              <div class="skill-item__header">
                <span class="skill-item__name">${item.name}</span>
                <span class="skill-item__level">${item.level}%</span>
              </div>
              <div class="skill-item__bar">
                <div class="skill-item__fill" data-level="${item.level}"></div>
              </div>
            </div>
          `).join('')}
        </div>
      `).join('');
  }

  /** Render Experience Timeline */
  function renderExperience() {
    const timeline = document.getElementById('timeline');

    timeline.innerHTML = D.experience
      .map(exp => `
        <div class="timeline__item reveal">
          <div class="timeline__dot"></div>
          <div class="timeline__card">
            <p class="timeline__period">${exp.period}</p>
            <h3 class="timeline__title">${exp.title}</h3>
            <p class="timeline__company">${exp.company}</p>
            <ul class="timeline__list">
              ${exp.description.map(d => `<li>${d}</li>`).join('')}
            </ul>
          </div>
        </div>
      `).join('');
  }

  /** Render Projects */
  function renderProjects() {
    const grid = document.getElementById('projectsGrid');

    grid.innerHTML = D.projects
      .map(p => `
        <article class="project-card">
          <div class="project-card__image-wrapper">
            <img class="project-card__image" src="${p.image}" alt="${p.name}" loading="lazy" />
            <div class="project-card__overlay">
              ${p.github && p.github !== '#' ? `
                <a href="${p.github}" class="project-card__overlay-btn" target="_blank" rel="noopener">
                  ${ICONS.github} View Repository
                </a>` : ''}
              ${p.demo && p.demo !== '#' ? `
                <a href="${p.demo}" class="project-card__overlay-btn" target="_blank" rel="noopener">
                  ${ICONS.externalLink} Demo
                </a>` : ''}
              ${(!p.github || p.github === '#') && (!p.demo || p.demo === '#') ? `
                <span class="project-card__overlay-btn">
                  ${ICONS.externalLink} View Project
                </span>` : ''}
            </div>
          </div>
          <div class="project-card__body">
            <h3 class="project-card__name">${p.name}</h3>
            <p class="project-card__subtitle">${p.subtitle}</p>
            <p class="project-card__description">${p.description}</p>
            <div class="project-card__tags">
              ${p.techStack.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
          </div>
        </article>
      `).join('');
  }

  /** Render Education */
  function renderEducation() {
    const container = document.getElementById('educationContent');

    container.innerHTML = D.education
      .map(edu => `
        <div class="education__card reveal">
          <div class="education__icon">${ICONS.graduation}</div>
          <h3 class="education__school">${edu.school}</h3>
          <p class="education__location">${edu.location}</p>
          <div class="education__details">
            <div class="education__detail">
              <span class="education__detail-label">Degree</span>
              <span class="education__detail-value">${edu.degree}</span>
            </div>
            <div class="education__detail">
              <span class="education__detail-label">GPA</span>
              <span class="education__detail-value">${edu.gpa} / 4.00</span>
            </div>
            <div class="education__detail">
              <span class="education__detail-label">Credits</span>
              <span class="education__detail-value">${edu.credits} SKS</span>
            </div>
            <div class="education__detail">
              <span class="education__detail-label">Period</span>
              <span class="education__detail-value">${edu.period}</span>
            </div>
          </div>
          <p class="education__coursework-label">Relevant Coursework</p>
          <div class="education__coursework">
            ${edu.coursework.map(c => `<span class="tag">${c}</span>`).join('')}
          </div>
        </div>
      `).join('');
  }

  /** Render Contact Links */
  function renderContact() {
    const links = document.getElementById('contactLinks');

    const contactItems = [
      { icon: 'mail', label: 'Email', value: D.personal.email, href: `mailto:${D.personal.email}` },
      { icon: 'phone', label: 'Phone', value: D.personal.phone, href: `tel:${D.personal.phone}` },
      { icon: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/hirmas-nafi', href: D.personal.socials.linkedin },
      { icon: 'mapPin', label: 'Location', value: D.personal.location, href: '#' }
    ];

    links.innerHTML = contactItems
      .map(c => `
        <a class="contact-link" href="${c.href}" ${c.href.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>
          <div class="contact-link__icon">${ICONS[c.icon]}</div>
          <div>
            <div class="contact-link__label">${c.label}</div>
            <div class="contact-link__value">${c.value}</div>
          </div>
        </a>
      `).join('');
  }

  /** Render Footer */
  function renderFooter() {
    const socials = document.getElementById('footerSocials');
    const text = document.getElementById('footerText');

    const socialLinks = [
      { icon: 'github', href: D.personal.socials.github, label: 'GitHub' },
      { icon: 'linkedin', href: D.personal.socials.linkedin, label: 'LinkedIn' },
      { icon: 'whatsapp', href: D.personal.socials.whatsapp, label: 'WhatsApp' }
    ];

    socials.innerHTML = socialLinks
      .map(s => `
        <a class="footer__social-link" href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}">
          ${ICONS[s.icon]}
        </a>
      `).join('');

    const year = new Date().getFullYear();
    text.innerHTML = `&copy; ${year} <a href="#hero">${D.personal.fullName}</a>. All rights reserved.`;
  }

  /* ═══════════════════════════════════════════════════════════
     INTERACTIVE FEATURES
     ═══════════════════════════════════════════════════════════ */

  /** Typing Animation */
  function initTypingAnimation() {
    const el = document.getElementById('typingText');
    const titles = D.personal.titles;
    let titleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    const typeSpeed = 80;
    const deleteSpeed = 40;
    const pauseTime = 2000;

    function type() {
      const current = titles[titleIdx];

      if (isDeleting) {
        el.textContent = current.substring(0, charIdx - 1);
        charIdx--;
      } else {
        el.textContent = current.substring(0, charIdx + 1);
        charIdx++;
      }

      let delay = isDeleting ? deleteSpeed : typeSpeed;

      if (!isDeleting && charIdx === current.length) {
        delay = pauseTime;
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        titleIdx = (titleIdx + 1) % titles.length;
        delay = 400;
      }

      setTimeout(type, delay);
    }

    type();
  }

  /** Scroll-based Navbar */
  function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          navbar.classList.toggle('scrolled', window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  /** Active Nav Highlighting */
  function initActiveNav() {
    const sections = document.querySelectorAll('.section[id]');
    const navLinks = document.querySelectorAll('.navbar__link');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
              link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    sections.forEach(s => observer.observe(s));
  }

  /** Scroll Reveal Animations */
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-children');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Animate skill bars within this element
            const bars = entry.target.querySelectorAll('.skill-item__fill');
            bars.forEach(bar => {
              bar.style.width = bar.dataset.level + '%';
            });
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    reveals.forEach(el => observer.observe(el));

    // Also observe skill categories for bar animation
    document.querySelectorAll('.skill-category').forEach(el => {
      observer.observe(el);
    });
  }

  /** Mobile Menu Toggle */
  function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const overlay = document.getElementById('mobileOverlay');

    function toggleMenu() {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
      overlay.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    function closeMenu() {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
      overlay.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);

    // Close on nav link click
    navLinks.addEventListener('click', (e) => {
      if (e.target.classList.contains('navbar__link')) {
        closeMenu();
      }
    });
  }

  /** Dark/Light Theme Toggle */
  function initThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    const icon = document.getElementById('themeIcon');
    const html = document.documentElement;

    // Load saved theme
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) {
      html.setAttribute('data-theme', saved);
    }

    const knob = icon.parentElement; // the .theme-toggle__knob div

    function updateIcon() {
      const isDark = html.getAttribute('data-theme') !== 'light';
      const svgStr = isDark ? ICONS.sun : ICONS.moon;
      knob.innerHTML = svgStr.replace('<svg', '<svg class="theme-toggle__icon"');
    }

    updateIcon();

    toggle.addEventListener('click', () => {
      const isDark = html.getAttribute('data-theme') !== 'light';
      const newTheme = isDark ? 'light' : 'dark';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
      updateIcon();
    });
  }

  /** Contact Form — mailto fallback */
  function initContactForm() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contactName').value;
      const email = document.getElementById('contactEmail').value;
      const subject = document.getElementById('contactSubject').value || 'Portfolio Contact';
      const message = document.getElementById('contactMessage').value;

      const body = `Hi ${D.personal.firstName},\n\nMy name is ${name} (${email}).\n\n${message}`;
      const mailtoUrl = `mailto:${D.personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoUrl;
    });
  }

  /** Smooth Scroll for anchor links */
  function initSmoothScroll() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  /* ═══════════════════════════════════════════════════════════
     INITIALIZATION
     ═══════════════════════════════════════════════════════════ */

  function init() {
    // Render all content from data
    renderNav();
    renderHero();
    renderAbout();
    renderSkills();
    renderExperience();
    renderProjects();
    renderEducation();
    renderContact();
    renderFooter();

    // Initialize interactive features
    initTypingAnimation();
    initNavbarScroll();
    initActiveNav();
    initScrollReveal();
    initMobileMenu();
    initThemeToggle();
    initContactForm();
    initSmoothScroll();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
