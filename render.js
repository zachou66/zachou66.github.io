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

    if (SITE.location) {
      contacts.appendChild(el("span", "intro__location", esc(SITE.location)));
    }
    if (SITE.resume) {
      var resume = el("a", "intro__contact intro__contact--primary", "Download résumé");
      resume.href = SITE.resume;
      resume.setAttribute("download", "");
      contacts.appendChild(resume);
    }

    var links = [];
    if (SITE.email)    links.push({ label: "Email",    href: "mailto:" + SITE.email });
    if (SITE.github)   links.push({ label: "GitHub",   href: SITE.github });
    if (SITE.linkedin) links.push({ label: "LinkedIn", href: SITE.linkedin });
    links.forEach(function (l) {
      var a = el("a", "intro__contact", esc(l.label));
      a.href = l.href;
      if (l.href.indexOf("mailto:") !== 0) { a.target = "_blank"; a.rel = "noopener"; }
      contacts.appendChild(a);
    });

    renderCerts();
  }

  // --- Certifications (row under the header) --------------------------------
  function renderCerts() {
    var mount = document.getElementById("introCerts");
    if (!mount || typeof CERTS === "undefined" || !CERTS.length) return;
    mount.appendChild(el("span", "certs__label", "Certifications"));
    CERTS.forEach(function (c) {
      var item = el("span", "cert");
      item.appendChild(el("span", "cert__name", esc(c.name)));
      if (c.status) item.appendChild(el("span", "cert__status", esc(c.status)));
      mount.appendChild(item);
    });
  }

  // --- Skills grid ----------------------------------------------------------
  function renderSkills() {
    var mount = document.getElementById("skillsMount");
    if (!mount || typeof SKILLS === "undefined" || !SKILLS.length) return;

    var sec = el("section", "section skills");
    sec.id = "skills";

    var head = el("div", "section__head");
    head.appendChild(el("h2", "section__title", "Skills"));
    sec.appendChild(head);

    var grid = el("div", "skills__grid");
    SKILLS.forEach(function (g) {
      var col = el("div", "skills__group");
      col.appendChild(el("h3", "skills__group-title", esc(g.group)));
      var list = el("ul", "skills__list");
      (g.items || []).forEach(function (it) {
        list.appendChild(el("li", "skills__item", esc(it)));
      });
      col.appendChild(list);
      grid.appendChild(col);
    });
    sec.appendChild(grid);
    mount.appendChild(sec);
  }

  // --- Navigation -----------------------------------------------------------
  function renderNav() {
    var nav = document.getElementById("navLinks");
    var items = [];
    if (typeof SKILLS !== "undefined" && SKILLS.length) {
      items.push({ id: "skills", title: "Skills" });
    }
    SECTIONS.forEach(function (section) {
      items.push({ id: section.id, title: section.title });
    });
    items.forEach(function (item) {
      var a = el("a", "nav__link", esc(item.title));
      a.href = "#" + item.id;
      a.dataset.target = item.id;
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
    renderSkills();
    renderSections();
    renderFooter();
    setupScrollSpy();
  });
})();
