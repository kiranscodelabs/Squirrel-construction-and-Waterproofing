/* ===== ORIGINAL INLINE SCRIPT 1 ===== */
// Scroll reveal
    const revealItems = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => revealObserver.observe(item));

    // Back-to-top
    const backTop = document.getElementById('back-top');
    window.addEventListener('scroll', () => {
      backTop.classList.toggle('show', window.scrollY > 500);
    }, { passive: true });

    backTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

/* ===== ORIGINAL INLINE SCRIPT 2 ===== */
const topButton = document.getElementById('back-top');

    window.addEventListener('scroll', () => {
      const visible = window.scrollY > 600;
      topButton.classList.toggle('opacity-0', !visible);
      topButton.classList.toggle('pointer-events-none', !visible);
      topButton.classList.toggle('translate-y-3', !visible);
      topButton.classList.toggle('opacity-100', visible);
      topButton.classList.toggle('translate-y-0', visible);
    }, { passive: true });

    topButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

/* ===== ORIGINAL INLINE SCRIPT 3 ===== */
const navTargets = [
      { link: 'a[href="#about"]', section: '#about' },
      { link: 'a[href="#services"]', section: '#services' },
      { link: 'a[href="#portfolio"]', section: '#portfolio' },
      { link: 'a[href="#contact"]', section: '#contact' }
    ];

    const navSections = navTargets
      .map(item => ({
        link: document.querySelector(item.link),
        section: document.querySelector(item.section)
      }))
      .filter(item => item.link && item.section);

    navSections.forEach(({ link, section }) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navSections.forEach(({ link }) => {
          link.classList.remove('nav-link-active');
        });

        const current = navSections.find(
          ({ section }) => section === entry.target
        );

        if (current) {
          current.link.classList.add('nav-link-active');
        }
      });
    }, {
      rootMargin: '-35% 0px -55% 0px',
      threshold: 0
    });

    navSections.forEach(({ section }) => navObserver.observe(section));

/* ===== ORIGINAL INLINE SCRIPT 4 ===== */
(function () {
  /*
    Mouse drag support for desktop/tablet trackpads and testing.
    Touch scrolling remains native on mobile.
  */
  function enableDragScroll(selector) {
    document.querySelectorAll(selector).forEach(function (el) {
      let isDown = false;
      let startX = 0;
      let startScroll = 0;

      el.addEventListener('pointerdown', function (e) {
        if (e.pointerType === 'touch') return;
        isDown = true;
        startX = e.clientX;
        startScroll = el.scrollLeft;
        el.setPointerCapture?.(e.pointerId);
      });

      el.addEventListener('pointermove', function (e) {
        if (!isDown) return;
        el.scrollLeft = startScroll - (e.clientX - startX);
      });

      ['pointerup', 'pointercancel', 'pointerleave'].forEach(function (name) {
        el.addEventListener(name, function () {
          isDown = false;
        });
      });
    });
  }

  function initCarousels() {
    enableDragScroll('section#services > div:nth-child(2)');
    enableDragScroll('section.section-shell .grid');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousels);
  } else {
    initCarousels();
  }
})();

/* ===== ORIGINAL INLINE SCRIPT 5 ===== */
(function () {
  'use strict';

  const form = document.getElementById('contact-form');
  if (!form) return;

  const whatsappNumber = '918197437647';

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const getValue = (selector) => {
      const field = form.querySelector(selector);
      return field ? field.value.trim() : '';
    };

    const name = getValue('[name="name"]');
    const email = getValue('[name="email"]');
    const phone = getValue('[name="phone"]');
    const service = getValue('[name="service"]');
    const message = getValue('[name="message"]');

    const text = [
      'Hello Squirrel Construction & Waterproofing,',
      '',
      '*New Project Enquiry*',
      '',
      '*Name:* ' + (name || 'Not provided'),
      '*Email:* ' + (email || 'Not provided'),
      '*Phone:* ' + (phone || 'Not provided'),
      '*Service:* ' + (service || 'Not selected'),
      '',
      '*Project Details:*',
      message || 'Not provided'
    ].join('\n');

    const url = 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(text);
    const popup = window.open(url, '_blank', 'noopener,noreferrer');

    if (!popup) {
      window.location.href = url;
    }
  });
})();

/* ===== ORIGINAL INLINE SCRIPT 6 ===== */
(function(){
  const components=[["navbar-placeholder","components/navbar.html"],["services-placeholder","components/services.html"],["about-placeholder","components/about.html"],["projects-placeholder","components/projects.html"],["footer-placeholder","components/footer.html"]];
  async function load(id,url){const el=document.getElementById(id);if(!el)return;const r=await fetch(url,{cache:"no-cache"});if(!r.ok)throw new Error("Failed to load "+url);el.outerHTML=await r.text();}
  document.addEventListener("DOMContentLoaded",async()=>{try{for(const [id,url] of components)await load(id,url)}catch(e){console.error("Component loading failed:",e)}});
})();


/* ============================================================
   MOBILE NAVIGATION
   Delegated handler: works with dynamically injected navbar.
   ============================================================ */
(function () {
  "use strict";

  function closeMenu() {
    const button = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");
    if (!button || !menu) return;

    menu.classList.add("hidden");
    button.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Open navigation menu");
  }

  document.addEventListener("click", function (event) {
    const button = event.target.closest("#mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");

    if (button && menu) {
      event.preventDefault();
      event.stopPropagation();

      const open = !menu.classList.contains("hidden");
      if (open) {
        closeMenu();
      } else {
        menu.classList.remove("hidden");
        button.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
        button.setAttribute("aria-label", "Close navigation menu");
      }
      return;
    }

    const mobileLink = event.target.closest("#mobile-menu a");
    if (mobileLink) {
      closeMenu();
      return;
    }

    if (menu && !menu.classList.contains("hidden") &&
        !event.target.closest("#mobile-menu")) {
      closeMenu();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) closeMenu();
  });
})();
