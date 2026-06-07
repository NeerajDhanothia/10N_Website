/* ─── Navbar scroll shadow ──────────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ─── Smooth anchor scrolling with navbar offset ───────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
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
  const already = serviceCards[index]?.classList.contains('active');
  serviceCards.forEach(c => { c.classList.remove('active'); c.setAttribute('aria-expanded','false'); });
  panelContents.forEach(p => p.classList.remove('active'));
  if (already) {
    servicePanel?.classList.remove('open');
  } else {
    serviceCards[index]?.classList.add('active');
    serviceCards[index]?.setAttribute('aria-expanded','true');
    document.querySelector(`.panel-content[data-panel="${index}"]`)?.classList.add('active');
    servicePanel?.classList.add('open');
    // scroll panel into view on mobile
    if (window.innerWidth < 768 && servicePanel) {
      setTimeout(() => {
        const top = servicePanel.getBoundingClientRect().top + window.scrollY - (navbar?.offsetHeight ?? 68) - 12;
        window.scrollTo({ top, behavior: 'smooth' });
      }, 120);
    }
  }
}

serviceCards.forEach((card, i) => {
  card.addEventListener('click', () => activateService(i));
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activateService(i); } });
});

// Open first card on load
document.addEventListener('DOMContentLoaded', () => {
  if (serviceCards.length && servicePanel) {
    serviceCards[0].classList.add('active');
    serviceCards[0].setAttribute('aria-expanded','true');
    document.querySelector('.panel-content[data-panel="0"]')?.classList.add('active');
    servicePanel.classList.add('open');
  }
});

/* ─── Contact form ──────────────────────────────────────────────────────── */
const form    = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');
form?.addEventListener('submit', async e => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  const txt = btn.innerHTML;
  btn.innerHTML = 'Sending…'; btn.disabled = true;
  try {
    const r = await fetch('/', { method:'POST', headers:{'Content-Type':'application/x-www-form-urlencoded'}, body: new URLSearchParams(new FormData(form)).toString() });
    if (r.ok) { form.style.display='none'; success && (success.style.display='block'); }
    else throw 0;
  } catch { form.style.display='none'; success && (success.style.display='block'); }
  btn.innerHTML = txt; btn.disabled = false;
});

/* ─── Scroll reveal ─────────────────────────────────────────────────────── */
const ro = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
    entry.target.style.transitionDelay = `${siblings.indexOf(entry.target) * 0.07}s`;
    entry.target.classList.add('visible');
    ro.unobserve(entry.target);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));
