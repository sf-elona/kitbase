// Kitbase — small progressive enhancements

const SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
const MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
const BARS = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
const CLOSE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';

const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

function prefersDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}
function isDark() {
  const t = root.getAttribute('data-theme');
  if (t === 'dark') return true;
  if (t === 'light') return false;
  return prefersDark();
}
function paintThemeIcon() {
  if (themeToggle) themeToggle.innerHTML = isDark() ? SUN : MOON;
}
function applyTheme(t) {
  if (t === 'light' || t === 'dark') root.setAttribute('data-theme', t);
  else root.removeAttribute('data-theme');
  paintThemeIcon();
}

try {
  const saved = localStorage.getItem('kitbase-theme');
  if (saved) root.setAttribute('data-theme', saved);
} catch (e) {}
paintThemeIcon();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('kitbase-theme', next); } catch (e) {}
  });
}

if (navToggle && navLinks) {
  navToggle.innerHTML = BARS;
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    navToggle.innerHTML = open ? CLOSE : BARS;
  });
}

// Demo forms (no backend yet)
document.querySelectorAll('form[data-demo]').forEach((f) => {
  f.addEventListener('submit', (e) => {
    e.preventDefault();
    let note = f.querySelector('.form-note');
    if (!note) {
      note = document.createElement('p');
      note.className = 'form-note notice';
      f.appendChild(note);
    }
    note.textContent = 'Thanks! This form is a demo — connect Formspree or a newsletter tool to make it live.';
    f.reset();
  });
});
