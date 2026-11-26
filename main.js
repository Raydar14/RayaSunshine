/* Raya Sun shared header and footer.
   Edit your social links in ONE place below.
   A link left as null is hidden on the site until you fill it in. */

const SITE = {
  youtube: null,   // e.g. "https://www.youtube.com/@yourhandle"
  instagram: null, // e.g. "https://www.instagram.com/yourhandle"
  facebook: null,  // e.g. "https://www.facebook.com/yourpage"
  tiktok: null     // e.g. "https://www.tiktok.com/@yourhandle"
};

const PAGES = [
  ["index.html", "Home"],
  ["sunshine.html", "Sunshine"],
  ["darkness.html", "Darkness"],
  ["photography.html", "Photography"],
  ["free.html", "Free Library"],
  ["shop.html", "Shop"],
  ["about.html", "About"]
];

(function () {
  const here = location.pathname.split("/").pop() || "index.html";

  const navItems = PAGES.map(([href, label]) =>
    `<li><a href="${href}"${href === here ? ' aria-current="page"' : ""}>${label}</a></li>`
  ).join("");

  const header = document.getElementById("site-header");
  if (header) {
    header.outerHTML = `<nav class="nav">
  <a class="brand" href="index.html"><img src="assets/raya-sun-logo.png" alt="Raya Sun logo"><span>RAYA SUN</span></a>
  <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-list">Menu</button>
  <ul id="nav-list">${navItems}</ul>
</nav>`;
    const toggle = document.querySelector(".nav-toggle");
    const list = document.getElementById("nav-list");
    toggle.addEventListener("click", () => {
      const open = list.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const socials = [
    ["YouTube", SITE.youtube],
    ["Instagram", SITE.instagram],
    ["Facebook", SITE.facebook],
    ["TikTok", SITE.tiktok]
  ].filter(([, url]) => url)
   .map(([name, url]) => `<a href="${url}" rel="noopener">${name}</a>`)
   .join("");

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.outerHTML = `<footer class="site-footer"><div class="wrap">
  <div><strong>Raya Sun</strong><br>Sunshine and Darkness.</div>
  <div class="links">${socials}<a href="links.html">All links</a></div>
  <p class="disclaimer">Everything on this site is for education and inspiration. It is not medical, mental health, or other clinical advice. Check with your doctor before starting any new movement practice.</p>
</div></footer>`;
  }

  // Fill any element marked data-social with the matching link, or hide it.
  document.querySelectorAll("[data-social]").forEach(el => {
    const url = SITE[el.dataset.social];
    if (url) { el.href = url; } else { el.hidden = true; }
  });
})();
