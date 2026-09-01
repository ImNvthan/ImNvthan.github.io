// Portfolio "édition Atlas" — rendu piloté par data.js, animations GSAP/ScrollTrigger.

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasGsap = typeof gsap !== "undefined";
if (hasGsap && typeof ScrollTrigger !== "undefined") gsap.registerPlugin(ScrollTrigger);

function el(tag, opts = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(opts).forEach(([key, val]) => {
    if (val == null) return;
    if (key === "class") node.className = val;
    else if (key === "html") node.innerHTML = val;
    else if (key === "text") node.textContent = val;
    else if (key.startsWith("on") && typeof val === "function") node.addEventListener(key.slice(2), val);
    else node.setAttribute(key, val);
  });
  children.forEach(c => c && node.appendChild(c));
  return node;
}

/* ---------------- Render content ---------------- */
function renderContent() {
  const p = DATA.profile;
  document.getElementById("heroKicker").textContent = p.title;
  document.getElementById("heroTagline").textContent = p.tagline;
  document.getElementById("heroStatus").appendChild(document.createTextNode(p.status));
  document.getElementById("heroCv").setAttribute("href", p.cvPdf);
  document.getElementById("contactMail").setAttribute("href", "mailto:" + p.email);
  document.getElementById("linkedinLink").setAttribute("href", p.linkedin);
  document.getElementById("githubLink").setAttribute("href", p.github);
  document.getElementById("locationText").textContent = p.location;
  document.getElementById("year").textContent = new Date().getFullYear();

  const statsInner = document.getElementById("statsInner");
  DATA.stats.forEach(s => {
    statsInner.appendChild(el("div", { class: "stat" }, [
      el("div", { class: "stat-value" }, [
        el("span", { class: "stat-num", "data-target": s.value, text: "0" }),
        el("span", { text: s.suffix }),
      ]),
      el("div", { class: "stat-label", text: s.label }),
    ]));
  });

  const prose = document.getElementById("aboutProse");
  DATA.about.forEach(t => prose.appendChild(el("p", { html: t, class: "reveal" })));

  const timeline = document.getElementById("timeline");
  DATA.experience.forEach(job => {
    const tasks = el("ul", { class: "task-list" });
    job.tasks.forEach(t => tasks.appendChild(el("li", { html: t })));
    timeline.appendChild(el("article", { class: "timeline-item reveal" }, [
      el("div", { class: "timeline-top" }, [
        el("h3", { text: job.role }),
        el("span", { class: "timeline-date", text: job.date + " · " + job.duration }),
      ]),
      el("p", { class: "timeline-company", text: job.company }),
      tasks,
    ]));
  });

  const skillRows = document.getElementById("skillRows");
  DATA.skills.forEach(s => {
    skillRows.appendChild(el("div", { class: "skill-row reveal" }, [
      el("span", { class: "skill-label", text: s.label }),
      el("div", { class: "skill-bar" }, [el("div", { class: "skill-fill", "data-level": s.level })]),
      el("span", { class: "skill-num", text: s.level + "%" }),
    ]));
  });

  const grid = document.getElementById("projectGrid");
  DATA.projects.forEach(pr => {
    const tags = el("div", { class: "tag-row" });
    pr.tags.forEach(t => tags.appendChild(el("span", { class: "tag", text: t })));
    grid.appendChild(el("article", { class: "project-card reveal" }, [
      el("div", { class: "project-top" }, [
        el("span", { class: "project-icon", "aria-hidden": "true", text: pr.icon }),
        el("span", { class: "project-category", text: pr.category }),
      ]),
      el("h3", { text: pr.title }),
      el("p", { text: pr.desc }),
      tags,
      el("div", { class: "project-foot" }, [
        el("span", { class: "project-org", text: pr.org }),
        pr.link ? el("a", { class: "project-link", href: pr.link, target: "_blank", rel: "noopener noreferrer", text: "Voir le projet →" }) : null,
      ]),
    ]));
  });

  const eduList = document.getElementById("eduList");
  DATA.education.forEach(e => eduList.appendChild(el("li", { class: "reveal" }, [
    el("span", { class: "edu-date", text: e.date }),
    el("div", {}, [el("strong", { text: e.diploma }), el("span", { class: "edu-school", text: e.school })]),
  ])));

  const certList = document.getElementById("certList");
  DATA.certifications.forEach(c => certList.appendChild(el("li", { class: "reveal", text: c })));

  const hl = DATA.homelab;
  if (hl) {
    document.getElementById("homelabIntro").textContent = hl.intro;

    const specs = document.getElementById("homelabSpecs");
    hl.hardware.forEach(([k, v]) => specs.appendChild(el("div", { class: "spec-item" }, [
      el("dt", { text: k }),
      el("dd", { text: v }),
    ])));

    const stack = document.getElementById("homelabStack");
    hl.stack.forEach(g => {
      const chips = el("div", { class: "stack-chips" });
      g.items.forEach(it => chips.appendChild(el("span", { text: it })));
      stack.appendChild(el("div", { class: "stack-group reveal" }, [
        el("h3", { text: g.group }),
        chips,
      ]));
    });
  }
}

/* ---------------- Nav ---------------- */
function initNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    links.classList.remove("open"); toggle.setAttribute("aria-expanded", "false");
  }));

  const nav = document.getElementById("nav");
  const sections = [...document.querySelectorAll("main section[id]")];
  const anchors = [...links.querySelectorAll("a[href^='#']")];
  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 10);
    let current = "";
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 160) current = s.id; });
    anchors.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------------- Magnetic buttons ---------------- */
function initMagnetic() {
  if (reducedMotion || !window.matchMedia("(pointer: fine)").matches) return;
  document.querySelectorAll("[data-magnetic]").forEach(elm => {
    elm.addEventListener("mousemove", (e) => {
      const r = elm.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2;
      elm.style.transform = `translate(${x * 0.22}px, ${y * 0.28}px)`;
    });
    elm.addEventListener("mouseleave", () => { elm.style.transform = ""; });
  });
}

/* ---------------- GSAP animations (with plain-CSS fallback) ---------------- */
function initAnimations() {
  if (!hasGsap || reducedMotion) {
    document.querySelectorAll(".hero-kicker, .hero-sub, .hero-status, .hero-actions, .scroll-cue")
      .forEach(elm => { elm.style.opacity = "1"; elm.style.transform = "none"; });
    document.querySelectorAll(".reveal").forEach(elm => elm.classList.add("in-view"));
    document.querySelectorAll(".skill-fill").forEach(f => { f.style.width = f.dataset.level + "%"; });
    document.querySelectorAll(".stat-num").forEach(n => { n.textContent = n.dataset.target; });
    return;
  }

  // Hero entrance
  gsap.set(".hero-title .word", { yPercent: 110, opacity: 0 });
  gsap.timeline({ delay: 0.2 })
    .to(".hero-kicker", { opacity: 1, y: 0, duration: 0.5 })
    .to(".hero-title .word", { yPercent: 0, opacity: 1, duration: 0.9, ease: "power4.out", stagger: 0.06 }, "-=0.2")
    .to([".hero-sub", ".hero-status", ".hero-actions", ".scroll-cue"], { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }, "-=0.4");

  // Generic reveal-on-scroll
  gsap.utils.toArray(".reveal").forEach(elm => {
    gsap.fromTo(elm, { opacity: 0, y: 26 }, {
      opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
      scrollTrigger: { trigger: elm, start: "top 85%" },
    });
  });

  // Timeline items stagger
  gsap.utils.toArray(".timeline-item").forEach((item, i) => {
    gsap.fromTo(item, { opacity: 0, x: -24 }, {
      opacity: 1, x: 0, duration: 0.7, ease: "power3.out",
      scrollTrigger: { trigger: item, start: "top 85%" },
    });
  });

  // Skill bars fill on scroll
  gsap.utils.toArray(".skill-fill").forEach(fill => {
    gsap.to(fill, {
      width: fill.dataset.level + "%", duration: 1.1, ease: "power2.out",
      scrollTrigger: { trigger: fill, start: "top 90%" },
    });
  });

  // Animated counters
  gsap.utils.toArray(".stat-num").forEach(n => {
    const target = { v: 0 };
    gsap.to(target, {
      v: Number(n.dataset.target), duration: 1.4, ease: "power2.out",
      scrollTrigger: { trigger: n, start: "top 90%" },
      onUpdate: () => { n.textContent = Math.round(target.v); },
    });
  });

  window.addEventListener("load", () => ScrollTrigger.refresh());

  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => ScrollTrigger.refresh(), 200);
  });
}

renderContent();
initNav();
initMagnetic();
initAnimations();
