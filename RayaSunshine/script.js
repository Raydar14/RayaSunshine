/* ============================================================
   Raya Sunshine — shared site script
   Injects the header + footer on every page, then wires up
   the sticky nav, mobile menu, and scroll reveals.
   To reuse on a new page: add <div id="site-header"></div> at
   the top, <div id="site-footer"></div> at the bottom, link
   this file, and you're done.
   ============================================================ */

/* ---- Edit your links in ONE place ---- */
const SITE = {
  youtube:   "#YOUR_YOUTUBE_URL",
  instagram: "#YOUR_INSTAGRAM_URL",
  tiktok:    "#YOUR_TIKTOK_URL",
  pinterest: "#YOUR_PINTEREST_URL",
  logo:      "assets/raya-sunshine-logo.png"
};

/* ---- Shared header ---- */
const HEADER = `<nav class="nav" id="nav">
  <a class="brand" href="#top" aria-label="Raya Sunshine home">
    <img src="${SITE.logo}" alt="Raya Sunshine logo" />
    <span class="brand-name">Raya<small>Sunshine</small></span>
  </a>
  <div class="nav-links" id="navLinks">
    <a href="#realms">Realms</a>
    <a href="#watch">Watch</a>
    <a href="#about">About</a>
    <a class="btn btn--gold" href="${SITE.youtube}">Subscribe</a>
  </div>
  <button class="nav-toggle" id="navToggle" aria-label="Open menu">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
  </button>
</nav>`;

/* ---- Shared footer ---- */
const FOOTER = `<footer class="site-footer">
  <div class="wrap">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="brand">
          <img src="${SITE.logo}" alt="Raya Sunshine logo" />
          <span class="brand-name">Raya<small>Sunshine</small></span>
        </div>
        <p>Yoga, witchcraft, photography &amp; travel — for seekers, wanderers, and the quietly magic.</p>
        <div class="socials">
          <a href="${SITE.youtube}" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 4.8 12 4.8 12 4.8s-7 0-8.9.6A3 3 0 0 0 1 7.5 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1c1.9.6 8.9.6 8.9.6s7 0 8.9-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.5 12 31 31 0 0 0 23 7.5zM9.8 15.3V8.7l5.7 3.3z"/></svg></a>
          <a href="${SITE.instagram}" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
          <a href="${SITE.tiktok}" aria-label="TikTok"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 3c.3 2.3 1.8 4 4 4.3v3c-1.5 0-2.9-.5-4-1.3V15a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.1v3.1a2.5 2.5 0 1 0 1.6 2.3V3z"/></svg></a>
          <a href="${SITE.pinterest}" aria-label="Pinterest"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.6 1.3 1.5l-.8 3.3c-.2.8.4 1.5 1.2 1.5 1.5 0 2.6-1.6 2.6-3.8 0-2-1.4-3.4-3.5-3.4a3.6 3.6 0 0 0-3.8 3.6c0 .7.3 1.5.6 1.9l-.3 1c0 .2-.2.2-.4.1-1.2-.5-1.9-2.2-1.9-3.5 0-2.9 2.1-5.5 6-5.5 3.2 0 5.6 2.2 5.6 5.2 0 3.1-2 5.6-4.7 5.6-.9 0-1.8-.5-2.1-1l-.6 2.2c-.2.8-.8 1.9-1.2 2.5A10 10 0 1 0 12 2z"/></svg></a>
        </div>
      </div>
      <div class="foot-col">
        <h5>Explore</h5>
        <a href="#realms">The realms</a>
        <a href="#watch">Latest videos</a>
        <a href="#about">About Raya</a>
        <a href="#letter">The Moonletter</a>
      </div>
      <div class="foot-col">
        <h5>Follow</h5>
        <a href="${SITE.youtube}">YouTube</a>
        <a href="${SITE.instagram}">Instagram</a>
        <a href="${SITE.tiktok}">TikTok</a>
        <a href="${SITE.pinterest}">Pinterest</a>
      </div>
    </div>
    <div class="foot-base">
      <p>© <span id="year">2026</span> Raya Sunshine. All rights reserved.</p>
      <p class="salt">Made with sun &amp; salt.</p>
    </div>
  </div>
</footer>`;

/* ---- Inject chrome, then initialise behaviour ---- */
function mount(id, html){ const el = document.getElementById(id); if (el) el.innerHTML = html; }
mount('site-header', HEADER);
mount('site-footer', FOOTER);
init();

function init(){
  // sticky nav background on scroll
  const nav = document.getElementById('nav');
  if (nav){
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});
  }

  // mobile menu
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (toggle && links){
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('open')));
  }

  // scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting){
        e.target.style.transitionDelay = ((i % 4) * 90) + 'ms';
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
}
