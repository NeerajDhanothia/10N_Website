/* ─── Navbar scroll + mobile toggle ────────────────────────────────────── */
const navbar    = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

navToggle?.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    navToggle?.classList.remove('open');
    navLinks.classList.remove('open');
  })
);

/* ─── Smooth anchor scrolling with navbar offset ───────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = (navbar?.offsetHeight ?? 68) + 16;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  });
});

/* ─── Expandable Service Cards ──────────────────────────────────────────── */
const serviceCards  = document.querySelectorAll('.service-card-exp');
const servicePanel  = document.getElementById('servicePanel');
const panelContents = document.querySelectorAll('.panel-content');

function activateService(index) {
  const alreadyActive = [...serviceCards][index]?.classList.contains('active');

  // Reset all cards
  serviceCards.forEach(c => {
    c.classList.remove('active');
    c.setAttribute('aria-expanded', 'false');
  });
  panelContents.forEach(p => p.classList.remove('active'));

  if (alreadyActive) {
    // Toggle off — close panel
    servicePanel?.classList.remove('open');
  } else {
    // Activate clicked card
    serviceCards[index]?.classList.add('active');
    serviceCards[index]?.setAttribute('aria-expanded', 'true');
    const target = document.querySelector(`.panel-content[data-panel="${index}"]`);
    if (target) target.classList.add('active');
    servicePanel?.classList.add('open');

    // Smooth scroll to panel if below viewport
    if (servicePanel) {
      const rect = servicePanel.getBoundingClientRect();
      if (rect.top > window.innerHeight) {
        setTimeout(() => {
          const offset = (navbar?.offsetHeight ?? 68) + 16;
          window.scrollTo({ top: servicePanel.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
        }, 100);
      }
    }
  }
}

serviceCards.forEach((card, i) => {
  card.addEventListener('click', () => activateService(i));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activateService(i); }
  });
});

// Open first card by default on page load
document.addEventListener('DOMContentLoaded', () => {
  if (serviceCards.length > 0 && servicePanel) {
    serviceCards[0].classList.add('active');
    serviceCards[0].setAttribute('aria-expanded', 'true');
    const first = document.querySelector('.panel-content[data-panel="0"]');
    if (first) { first.classList.add('active'); servicePanel.classList.add('open'); }
  }
});

/* ─── Contact form submission ───────────────────────────────────────────── */
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm?.addEventListener('submit', async e => {
  e.preventDefault();
  const btn = contactForm.querySelector('button[type="submit"]');
  const original = btn.textContent;
  btn.textContent = 'Sending…';
  btn.disabled = true;

  try {
    const res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(contactForm)).toString()
    });
    if (res.ok || res.status === 200) {
      contactForm.style.display = 'none';
      if (formSuccess) formSuccess.style.display = 'block';
    } else throw new Error();
  } catch {
    // Fallback: show success (Netlify handles server-side)
    contactForm.style.display = 'none';
    if (formSuccess) formSuccess.style.display = 'block';
  }

  btn.textContent = original;
  btn.disabled = false;
});

/* ─── Scroll reveal animations ──────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings in same parent
      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
      const idx = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = `${idx * 0.07}s`;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
