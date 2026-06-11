/* render.js — builds the page from the data in projects.js.
   You normally don't need to touch this file; edit projects.js instead. */
(function () {
  "use strict";

  // Small helper so titles/descriptions with <, &, etc. render safely.
  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function el(tag, className, html) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (html != null) node.innerHTML = html;
    return node;
  }

  // --- Intro header ---------------------------------------------------------
  function renderIntro() {
    document.getElementById("introName").textContent = SITE.name;
    document.getElementById("introRole").textContent = SITE.role;
    document.getElementById("introBlurb").textContent = SITE.blurb;
    document.getElementById("navBrand").textContent = SITE.name;
    if (SITE.name) document.title = SITE.name + " — " + SITE.role;

    var contacts = document.getElementById("introContacts");
    var links = [];
    if (SITE.email)    links.push({ label: "Email",    href: "mailto:" + SITE.email });
    if (SITE.github)   links.push({ label: "GitHub",   href: SITE.github });
    if (SITE.linkedin) links.push({ label: "LinkedIn", href: SITE.linkedin });
    if (SITE.location) {
      contacts.appendChild(el("span", "intro__location", esc(SITE.location)));
    }
    links.forEach(function (l) {
      var a = el("a", "intro__contact", esc(l.label));
      a.href = l.href;
      if (l.href.indexOf("mailto:") !== 0) { a.target = "_blank"; a.rel = "noopener"; }
      contacts.appendChild(a);
    });
  }

  // --- Navigation -----------------------------------------------------------
  function renderNav() {
    var nav = document.getElementById("navLinks");
    SECTIONS.forEach(function (section) {
      var a = el("a", "nav__link", esc(section.title));
      a.href = "#" + section.id;
      a.dataset.target = section.id;
      nav.appendChild(a);
    });
  }

  // --- Project sections -----------------------------------------------------
  function renderSections() {
    var container = document.getElementById("sections");

    SECTIONS.forEach(function (section) {
      var projects = (PROJECTS && PROJECTS[section.id]) || [];

      var sec = el("section", "section");
      sec.id = section.id;

      var head = el("div", "section__head");
      head.appendChild(el("h2", "section__title", esc(section.title)));
      if (section.blurb) head.appendChild(el("p", "section__blurb", esc(section.blurb)));
      sec.appendChild(head);

      if (projects.length === 0) {
        sec.appendChild(el("p", "section__empty", "Projects coming soon."));
      } else {
        var grid = el("div", "grid");
        projects.forEach(function (p) { grid.appendChild(renderCard(p)); });
        sec.appendChild(grid);
      }

      container.appendChild(sec);
    });
  }

  function renderCard(p) {
    var card = el("article", "card");
    card.appendChild(el("h3", "card__title", esc(p.title)));
    card.appendChild(el("p", "card__desc", esc(p.description)));

    if (p.tags && p.tags.length) {
      var tags = el("ul", "card__tags");
      p.tags.forEach(function (t) {
        tags.appendChild(el("li", "tag", esc(t)));
      });
      card.appendChild(tags);
    }

    if (p.repo) {
      var a = el("a", "card__link", "View repo &rarr;");
      a.href = p.repo;
      a.target = "_blank";
      a.rel = "noopener";
      card.appendChild(a);
    }
    return card;
  }

  // --- Scrollspy: highlight the nav link for the section in view -------------
  function setupScrollSpy() {
    var links = {};
    document.querySelectorAll(".nav__link").forEach(function (a) {
      links[a.dataset.target] = a;
    });
    var sections = document.querySelectorAll(".section");
    if (!("IntersectionObserver" in window) || !sections.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          Object.keys(links).forEach(function (id) {
            links[id].classList.toggle("is-active", id === entry.target.id);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    sections.forEach(function (s) { observer.observe(s); });
  }

  // --- Footer ---------------------------------------------------------------
  function renderFooter() {
    var name = SITE.name || "";
    document.getElementById("footerText").textContent =
      "© " + new Date().getFullYear() + " " + name;
  }

  // --- Boot -----------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", function () {
    renderIntro();
    renderNav();
    renderSections();
    renderFooter();
    setupScrollSpy();
  });
})();
