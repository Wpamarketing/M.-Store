// ============================================
// TEMPLATE DATA — 40+ slots
// ============================================
const templates = [
  // RESUME
  { id: 1, cat: "resume", title: "MBA Resume Website", desc: "Clean professional layout for MBA graduates & business professionals.", price: "₹399", img: "", icon: "📄" },
  { id: 2, cat: "resume", title: "Engineering Resume Website", desc: "Tech-focused layout for engineers. Skills, projects & experience.", price: "₹399", img: "", icon: "⚙️" },
  { id: 3, cat: "resume", title: "Medical Professional Resume", desc: "Elegant resume site for doctors, nurses & healthcare professionals.", price: "₹399", img: "", icon: "🩺" },
  { id: 4, cat: "resume", title: "CA / Finance Resume Website", desc: "Formal, structured layout for chartered accountants & finance experts.", price: "₹399", img: "", icon: "💼" },
  { id: 5, cat: "resume", title: "Law Professional Resume", desc: "Authoritative & polished website for lawyers and legal consultants.", price: "₹399", img: "", icon: "⚖️" },
  { id: 6, cat: "resume", title: "Fresher Resume Website", desc: "Smart, modern resume site for fresh graduates entering the job market.", price: "₹149", img: "", icon: "🎓" },
  { id: 7, cat: "resume", title: "Degree Resume Website", desc: "Simple clean resume site for degree holders. Fast delivery.", price: "₹149", img: "", icon: "📜" },
  { id: 8, cat: "resume", title: "Job Level Resume Website", desc: "Advanced resume website for mid to senior level professionals.", price: "₹499", img: "", icon: "🏆" },
  { id: 9, cat: "resume", title: "Marketing Resume Website", desc: "Bold, creative resume site for marketing & brand professionals.", price: "₹399", img: "", icon: "📢" },
  { id: 10, cat: "resume", title: "HR Manager Resume Website", desc: "Professional resume site for HR & talent acquisition specialists.", price: "₹399", img: "", icon: "👥" },
  { id: 11, cat: "resume", title: "Sales Executive Resume", desc: "Persuasive, results-focused resume site for sales professionals.", price: "₹399", img: "", icon: "📈" },
  { id: 12, cat: "resume", title: "Data Analyst Resume Website", desc: "Clean, data-driven resume for analysts with skills & project sections.", price: "₹399", img: "", icon: "📊" },
  { id: 13, cat: "resume", title: "IT Professional Resume", desc: "Tech-oriented resume site highlighting skills, certs & experience.", price: "₹399", img: "", icon: "💻" },
  { id: 14, cat: "resume", title: "Teacher Resume Website", desc: "Warm, professional resume site for educators & academic professionals.", price: "₹399", img: "", icon: "📚" },

  // PORTFOLIO
  { id: 15, cat: "portfolio", title: "Creative Artist Portfolio", desc: "Bold, artistic portfolio for painters, illustrators & visual artists.", price: "₹499", img: "", icon: "🎨" },
  { id: 16, cat: "portfolio", title: "Photographer Portfolio", desc: "Full-screen gallery portfolio to showcase stunning photography work.", price: "₹499", img: "", icon: "📷" },
  { id: 17, cat: "portfolio", title: "UI/UX Designer Portfolio", desc: "Case-study driven portfolio for product designers & UI/UX professionals.", price: "₹499", img: "", icon: "🖌️" },
  { id: 18, cat: "portfolio", title: "Web Developer Portfolio", desc: "Developer portfolio with project cards, skills, GitHub & contact links.", price: "₹499", img: "", icon: "🌐" },
  { id: 19, cat: "portfolio", title: "Freelancer Portfolio", desc: "Versatile portfolio for multi-skilled freelancers & independent creators.", price: "₹499", img: "", icon: "🧩" },
  { id: 20, cat: "portfolio", title: "Video Editor Portfolio", desc: "Dynamic, visually rich portfolio for video editors & motion designers.", price: "₹499", img: "", icon: "🎬" },
  { id: 21, cat: "portfolio", title: "Content Writer Portfolio", desc: "Elegant portfolio with writing samples, niche expertise & testimonials.", price: "₹399", img: "", icon: "✍️" },
  { id: 22, cat: "portfolio", title: "Architect Portfolio", desc: "Minimal, gallery-style portfolio for architects & interior designers.", price: "₹499", img: "", icon: "🏛️" },
  { id: 23, cat: "portfolio", title: "Fashion Designer Portfolio", desc: "Trendy, visual-first portfolio for fashion & textile designers.", price: "₹499", img: "", icon: "👗" },
  { id: 24, cat: "portfolio", title: "Social Media Manager Portfolio", "desc": "Niche portfolio for SMM professionals with analytics & brand results.", price: "₹499", img: "", icon: "📱" },
  { id: 25, cat: "portfolio", title: "Music Producer Portfolio", desc: "Dark, premium portfolio for music producers, DJs & audio engineers.", price: "₹499", img: "", icon: "🎵" },
  { id: 26, cat: "portfolio", title: "Graphic Designer Portfolio", desc: "Grid-based portfolio for graphic designers to showcase brand work.", price: "₹499", img: "", icon: "🎯" },
  { id: 27, cat: "portfolio", title: "3D Artist Portfolio", desc: "Immersive portfolio for 3D artists, animators & product visualizers.", price: "₹499", img: "", icon: "🧊" },
  { id: 28, cat: "portfolio", title: "Actor / Model Portfolio", desc: "Clean look-book style portfolio for actors, models & talent agencies.", price: "₹499", img: "", icon: "🎭" },

  // BUSINESS
  { id: 29, cat: "business", title: "Startup Landing Page", desc: "High-converting startup landing page with hero, features & CTA sections.", price: "₹599", img: "", icon: "🚀" },
  { id: 30, cat: "business", title: "Coaching Business Page", desc: "Professional landing page for life, career & business coaches.", price: "₹599", img: "", icon: "🧠" },
  { id: 31, cat: "business", title: "Salon & Beauty Page", desc: "Elegant business landing page for salons, spas & beauty studios.", price: "₹599", img: "", icon: "💅" },
  { id: 32, cat: "business", title: "Restaurant Landing Page", desc: "Appetizing landing page for restaurants, cafes & cloud kitchens.", price: "₹599", img: "", icon: "🍽️" },
  { id: 33, cat: "business", title: "Real Estate Landing Page", desc: "Property showcase page for real estate agents & housing projects.", price: "₹699", img: "", icon: "🏠" },
  { id: 34, cat: "business", title: "Tutor / Coaching Page", desc: "Trust-building landing page for tutors, teachers & coaching centers.", price: "₹599", img: "", icon: "📖" },
  { id: 35, cat: "business", title: "Digital Agency Landing Page", desc: "Bold, modern page for digital marketing & creative agencies.", price: "₹699", img: "", icon: "📣" },
  { id: 36, cat: "business", title: "Medical Clinic Page", desc: "Clean, trustworthy landing page for clinics, hospitals & health centres.", price: "₹699", img: "", icon: "🏥" },
  { id: 37, cat: "business", title: "Law Firm Landing Page", desc: "Authoritative law firm page with service areas & consultation CTA.", price: "₹699", img: "", icon: "🔏" },
  { id: 38, cat: "business", title: "Fitness Trainer Page", desc: "Energetic landing page for personal trainers & fitness brands.", price: "₹599", img: "", icon: "💪" },
  { id: 39, cat: "business", title: "Event Management Page", desc: "Festive & professional page for event planners & wedding organizers.", price: "₹599", img: "", icon: "🎉" },
  { id: 40, cat: "business", title: "E-commerce Store Landing", desc: "Product-focused landing page for online stores & D2C brands.", price: "₹699", img: "", icon: "🛍️" },
  { id: 41, cat: "business", title: "Photographer Business Page", desc: "Premium business page for wedding & commercial photographers.", price: "₹599", img: "", icon: "📸" },
  { id: 42, cat: "business", title: "Consulting Business Page", desc: "Credibility-driven page for consultants, advisors & strategists.", price: "₹649", img: "", icon: "📋" },
  { id: 43, cat: "resume", title: "Executive Director Resume", desc: "Power executive resume site for CXO, VP & director-level professionals.", price: "₹499", img: "", icon: "👔" },
  { id: 44, cat: "portfolio", title: "Illustrator Portfolio", desc: "Playful, expressive portfolio for illustrators & visual storytellers.", price: "₹499", img: "", icon: "🖍️" },
  { id: 45, cat: "business", title: "NGO / Non-Profit Page", desc: "Mission-driven landing page for NGOs, charities & social enterprises.", price: "₹599", img: "", icon: "🤝" },
];

// ============================================
// STATE
// ============================================
let activeFilter = "all";

// ============================================
// RENDER TEMPLATES
// ============================================
function renderTemplates(filter = "all") {
  const grid = document.getElementById("templatesGrid");
  if (!grid) return;

  const filtered = filter === "all" ? templates : templates.filter(t => t.cat === filter);

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="no-results">No templates found in this category.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(t => {
    const badgeClass = `badge-${t.cat}`;
    const badgeText = t.cat.charAt(0).toUpperCase() + t.cat.slice(1);

    const imgHTML = t.img
      ? `<img src="${t.img}" alt="${t.title}" loading="lazy">`
      : `<div class="template-preview-placeholder">
           <span class="preview-icon">${t.icon}</span>
           <span>${badgeText} Template</span>
         </div>`;

    // Show starting price on card — exact price revealed in preview modal
    const startingPrice = `Starting ${t.price}`;

    return `
      <div class="template-card reveal" data-cat="${t.cat}" onclick="openPreview(${t.id})" style="cursor:pointer;">
        <div class="template-preview cat-${t.cat}">
          ${imgHTML}
          <span class="template-badge ${badgeClass}">${badgeText}</span>
          <div class="template-overlay">
            <span class="overlay-text">👁️ Preview</span>
          </div>
        </div>
        <div class="template-body">
          <h3 class="template-title">${t.title}</h3>
          <p class="template-desc">${t.desc}</p>
        </div>
        <div class="template-footer">
          <span class="tpl-price">${startingPrice}</span>
          <span class="btn-contact">👁️ View Details</span>
        </div>
      </div>
    `;
  }).join('');

  // Trigger reveal animations
  setTimeout(() => {
    document.querySelectorAll('.template-card.reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 50);
    });
  }, 50);
}

// ============================================
// FILTER LOGIC
// ============================================
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderTemplates(activeFilter);
    });
  });
}

// ============================================
// PREVIEW MODAL
// ============================================
let currentSlide = 0;
let totalSlides = 3;

// Category color palettes for slides
const slideThemes = {
  resume: ['#2d1f6e', '#3d2b8c', '#1a1040'],
  portfolio: ['#6e1f3d', '#8c2b52', '#401018'],
  business: ['#1f5a4a', '#2b8c6e', '#103028'],
};

function openPreview(id) {
  const t = templates.find(x => x.id === id);
  if (!t) return;

  const overlay = document.getElementById('previewModal');
  const catColor = slideThemes[t.cat] || slideThemes.resume;
  const badgeClass = `badge-${t.cat}`;
  const badgeText = t.cat.charAt(0).toUpperCase() + t.cat.slice(1);

  // Build 3 slides
  const slides = [
    { label: '✨ Overview', sub: 'Full template view', lines: ['accent', 'full', 'medium', 'short'] },
    { label: '🎨 Design', sub: 'Style & typography', lines: ['medium', 'full', 'short', 'accent', 'full'] },
    { label: '📐 Layout', sub: 'Section breakdown', lines: ['short', 'accent', 'full', 'medium', 'short'] },
  ];

  document.getElementById('previewSlides').innerHTML = slides.map((s, i) => `
    <div class="preview-slide" style="background: linear-gradient(145deg, ${catColor[0]}, ${catColor[1] || catColor[0]});">
      <div class="slide-icon">${t.icon}</div>
      <div class="slide-label">${s.label}</div>
      <div class="slide-mock">
        ${s.lines.map(l => `<div class="mock-line ${l}"></div>`).join('')}
      </div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-top:4px;">${s.sub}</div>
    </div>
  `).join('');

  // Dots
  totalSlides = slides.length;
  currentSlide = 0;
  updateDots();

  // Badge colors reuse existing badge CSS class colour
  const badge = document.getElementById('previewBadge');
  badge.textContent = badgeText;
  badge.className = `preview-badge ${badgeClass}`;

  document.getElementById('previewTitle').textContent = t.title;
  document.getElementById('previewDesc').textContent = t.desc;
  document.getElementById('previewPrice').textContent = t.price;
  document.getElementById('previewCTA').href =
    `mailto:manishroy.contact@gmail.com?subject=Order%3A%20${encodeURIComponent(t.title)}`;

  // Reset slide position
  document.getElementById('previewSlides').style.transform = 'translateX(0)';

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePreview(e) {
  if (e && e.target !== document.getElementById('previewModal')) return;
  document.getElementById('previewModal').classList.remove('open');
  document.body.style.overflow = '';
}

function slidePreview(dir) {
  currentSlide = (currentSlide + dir + totalSlides) % totalSlides;
  document.getElementById('previewSlides').style.transform = `translateX(-${currentSlide * 100}%)`;
  updateDots();
}

function updateDots() {
  const dotsEl = document.getElementById('previewDots');
  if (!dotsEl) return;
  dotsEl.innerHTML = Array.from({ length: totalSlides }, (_, i) =>
    `<div class="preview-dot${i === currentSlide ? ' active' : ''}" onclick="slidePreview(${i - currentSlide})"></div>`
  ).join('');
}

// Close modal on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('previewModal')?.classList.remove('open');
    document.body.style.overflow = '';
  }
});



// ============================================
// PAGE NAVIGATION (SPA)
// ============================================
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.querySelectorAll('.mobile-nav-link').forEach(l => l.classList.remove('active'));

  const target = document.getElementById(`page-${page}`);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.querySelectorAll(`[data-page="${page}"]`).forEach(el => el.classList.add('active'));

  // Close mobile menu
  document.getElementById('mobileMenu').classList.remove('open');
  document.querySelector('.hamburger').classList.remove('open');

  // Init store when navigating to it
  if (page === 'store') {
    renderTemplates(activeFilter);
    initFilters();
  }

  // Trigger reveal animations for new page
  setTimeout(initReveal, 100);
}

// ============================================
// DARK/LIGHT MODE
// ============================================
function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
function initNavScroll() {
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}

// ============================================
// MOBILE MENU
// ============================================
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  menu.classList.toggle('open');
  hamburger.classList.toggle('open');
}

// ============================================
// SCROLL REVEAL
// ============================================
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

// ============================================
// COUNTER ANIMATION
// ============================================
function animateCounters() {
  document.querySelectorAll('.counter').forEach(el => {
    const target = +el.dataset.target;
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = el.dataset.suffix ? target + el.dataset.suffix : target + '+';
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current) + (el.dataset.suffix || '+');
      }
    }, 25);
  });
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavScroll();
  showPage('home');
  initReveal();
  initHeroCanvas();   // ← space-warp animation

  // Counters on intersection
  const counterSection = document.querySelector('.stats-grid');
  if (counterSection) {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        animateCounters();
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    obs.observe(counterSection);
  }
});

// ============================================
// HERO CANVAS — SPACE WARP / COSMIC FLOW
// ============================================
function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // ── Config ──────────────────────────────────
  const STAR_COUNT = 260;
  const SPEED_MIN = 0.18;
  const SPEED_MAX = 0.55;
  const TAIL_LEN = 22;
  const WARP_FACTOR = 1.018;   // acceleration multiplier

  let W, H, cx, cy;
  let stars = [];
  let raf;
  let active = true;

  // ── Resize ──────────────────────────────────
  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    cx = W / 2;
    cy = H / 2;
  }

  // ── Star factory ────────────────────────────
  function mkStar() {
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * 2 + 0.5;
    const speed = SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN);
    const size = Math.random() * 1.4 + 0.3;
    return {
      x: cx + Math.cos(angle) * dist,
      y: cy + Math.sin(angle) * dist,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size,
      alpha: 0,
      tail: [],
    };
  }

  function initStars() {
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      const s = mkStar();
      // Scatter existing stars across screen so it doesn't start empty
      s.x = Math.random() * W;
      s.y = Math.random() * H;
      s.vx = (s.x - cx) * 0.003 * (SPEED_MIN + Math.random() * SPEED_MAX);
      s.vy = (s.y - cy) * 0.003 * (SPEED_MIN + Math.random() * SPEED_MAX);
      s.alpha = Math.random();
      stars.push(s);
    }
  }

  // ── Color palette (theme aware) ─────────────
  function getColors() {
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    return dark
      ? { bg1: '#05060f', bg2: '#0a0b1a', star: '180,170,255', glow: '100,90,255', nebula: ['rgba(80,50,180,0.12)', 'rgba(20,10,80,0.08)', 'rgba(0,180,200,0.06)'] }
      : { bg1: '#eceaff', bg2: '#f2eeff', star: '100,90,200', glow: '108,99,255', nebula: ['rgba(108,99,255,0.10)', 'rgba(155,89,182,0.08)', 'rgba(60,130,255,0.06)'] };
  }

  // Slow-moving nebula blobs
  const blobs = [
    { x: 0.25, y: 0.35, rx: 0.5, ry: 0.4, t: 0, speed: 0.00018 },
    { x: 0.72, y: 0.60, rx: 0.4, ry: 0.5, t: 1.2, speed: 0.00025 },
    { x: 0.50, y: 0.15, rx: 0.6, ry: 0.3, t: 2.5, speed: 0.00015 },
  ];

  // ── Draw loop ───────────────────────────────
  function draw(ts) {
    if (!active) return;
    raf = requestAnimationFrame(draw);

    const c = getColors();

    // Background gradient
    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, c.bg1);
    bg.addColorStop(1, c.bg2);
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // Nebula blobs
    blobs.forEach((b, i) => {
      b.t += b.speed;
      const bx = W * (b.x + Math.sin(b.t) * 0.08);
      const by = H * (b.y + Math.cos(b.t * 1.3) * 0.06);
      const grad = ctx.createRadialGradient(bx, by, 0, bx, by, Math.max(W, H) * 0.38);
      grad.addColorStop(0, c.nebula[i % c.nebula.length]);
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);
    });

    // Stars / warp lines
    stars.forEach((s, i) => {
      // Warp acceleration
      s.vx *= WARP_FACTOR;
      s.vy *= WARP_FACTOR;
      s.x += s.vx;
      s.y += s.vy;
      s.alpha = Math.min(1, s.alpha + 0.025);

      // Tail history
      s.tail.push({ x: s.x, y: s.y });
      if (s.tail.length > TAIL_LEN) s.tail.shift();

      // Off screen → reset
      if (s.x < -20 || s.x > W + 20 || s.y < -20 || s.y > H + 20) {
        stars[i] = mkStar();
        return;
      }

      const speed = Math.hypot(s.vx, s.vy);
      const baseAlpha = Math.min(1, s.alpha) * Math.min(1, speed * 1.4);

      // Draw tail (warp streak)
      if (s.tail.length > 1) {
        ctx.beginPath();
        ctx.moveTo(s.tail[0].x, s.tail[0].y);
        for (let t = 1; t < s.tail.length; t++) {
          ctx.lineTo(s.tail[t].x, s.tail[t].y);
        }
        const tailGrad = ctx.createLinearGradient(
          s.tail[0].x, s.tail[0].y, s.x, s.y
        );
        tailGrad.addColorStop(0, `rgba(${c.star},0)`);
        tailGrad.addColorStop(1, `rgba(${c.star},${baseAlpha * 0.7})`);
        ctx.strokeStyle = tailGrad;
        ctx.lineWidth = s.size * Math.min(2, speed * 0.6);
        ctx.stroke();
      }

      // Star head dot
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size * Math.min(1.8, speed * 0.5), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${c.star},${baseAlpha})`;
      ctx.fill();

      // Glow halo on fast stars
      if (speed > 5) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c.glow},${baseAlpha * 0.15})`;
        ctx.fill();
      }
    });
  }

  // ── Visibility API — pause off-screen ───────
  const observer = new IntersectionObserver(entries => {
    active = entries[0].isIntersecting;
    if (active) raf = requestAnimationFrame(draw);
    else cancelAnimationFrame(raf);
  }, { threshold: 0.01 });
  observer.observe(canvas.parentElement);

  // ── Init ────────────────────────────────────
  window.addEventListener('resize', () => { resize(); initStars(); });
  resize();
  initStars();
  raf = requestAnimationFrame(draw);
}

