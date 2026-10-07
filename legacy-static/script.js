// ---------- Business settings ----------
const WHATSAPP_NUMBER = "919380958852"; // country code + number, no "+" or spaces

const IMG = (id, w = 700) => `https://images.unsplash.com/photo-${id}?w=${w}&q=70&auto=format&fit=crop`;

// ---------- Fleet data (real inventory & rates) ----------
// price: per-km rate in ₹. bata: driver allowance per day in ₹. qty: vehicles of this type owned.
const FLEET = [
  { name: "Maruti Suzuki Swift", type: "sedan", tag: "Sedan", desc: "Perfect for city driving and light highway trips", seats: 4, qty: 1, price: 13, bata: 400, img: "1619767886558-efdc259cde1a" },
  { name: "Toyota Etios", type: "sedan", tag: "Sedan", desc: "Best suited for long-distance highway travel, with generous interior and cargo space", seats: 4, qty: 1, price: 13, bata: 400, img: "1621007947382-bb3c3994e3fb" },
  { name: "Toyota Innova", type: "suv", tag: "MUV", desc: "A dependable, comfortable ride for family and group journeys", seats: 7, qty: 1, price: 18, bata: 500, img: "1533473359331-0135ef1b58bf" },
  { name: "Toyota Innova Crysta", type: "suv", tag: "Premium MUV", desc: "Our premium multi-utility vehicle, for a more comfortable journey", seats: 7, qty: 1, price: 20, bata: 500, img: "1533473359331-0135ef1b58bf" },
  { name: "21 Seater Bus", type: "bus", tag: "Bus", desc: "A luxurious AC bus with spacious storage and pushback seats", seats: 21, qty: 3, price: 37, bata: 800, img: "1570125909232-eb263c188f7e" },
  { name: "25 Seater Bus", type: "bus", tag: "Bus", desc: "Seating comfort, ample storage capacity and individual AC vents", seats: 25, qty: 2, price: 38, bata: 800, img: "1544620347-c4fd4a3d5957" },
];

// This file is shared across pages — only index.html has the fleet
// scroller, so every block below guards for the elements it needs.
const scroller = document.getElementById("fleet-scroller");

function fleetCard(v) {
  const price = `<small>From</small><strong>₹${v.price}<span> / km</span></strong><div class="min">Min 300 km/day · ₹${v.bata} driver bata</div><div class="min">+ toll, parking &amp; permit at actuals</div>`;
  return `
    <article class="fleet-card" data-type="${v.type}">
      <div class="fleet-media">
        <img src="${IMG(v.img)}" alt="${v.name}" loading="lazy">
        <span class="fleet-tag">${v.tag}</span>
      </div>
      <div class="fleet-body">
        <h3>${v.name}</h3>
        <p>${v.desc}</p>
        <div class="specs">
          <span class="spec"><svg><use href="#i-seat"/></svg>${v.seats} Seats</span>
          <span class="spec"><svg><use href="#i-snow"/></svg>AC</span>
          ${v.qty > 1 ? `<span class="spec">${v.qty} in fleet</span>` : ""}
        </div>
        <div class="fleet-foot">
          <div class="price">${price}</div>
          <a class="btn btn-forest" href="${waLink(`Hi Somu Holidays, I'd like a quote for the ${v.name}.`)}" target="_blank" rel="noopener">Book Now</a>
        </div>
      </div>
    </article>`;
}

function waLink(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

if (scroller) {
  scroller.innerHTML = FLEET.map(fleetCard).join("");

  // Fleet filters
  document.querySelectorAll(".chip[data-filter]").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".chip[data-filter]").forEach((c) => c.classList.toggle("active", c === chip));
      const f = chip.dataset.filter;
      scroller.querySelectorAll(".fleet-card").forEach((card) => {
        card.hidden = f !== "all" && card.dataset.type !== f;
      });
      scroller.scrollTo({ left: 0, behavior: "smooth" });
    });
  });

  // Fleet prev/next
  document.querySelectorAll("[data-scroll]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = scroller.querySelector(".fleet-card:not([hidden])");
      const step = card ? card.getBoundingClientRect().width + 20 : 320;
      scroller.scrollBy({ left: step * Number(btn.dataset.scroll), behavior: "smooth" });
    });
  });
}

// ---------- Header background on scroll ----------
// Pages without a full-bleed hero (.hero) keep the solid header at all times.
const header = document.querySelector(".site-header");
if (header && document.querySelector(".hero")) {
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

// ---------- Mobile drawer ----------
const drawer = document.getElementById("drawer");
const openBtn = document.querySelector(".nav .menu-toggle");
if (drawer && openBtn) {
  const setDrawer = (open) => {
    drawer.classList.toggle("open", open);
    drawer.setAttribute("aria-hidden", String(!open));
    openBtn.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  };
  openBtn.addEventListener("click", () => setDrawer(true));
  drawer.querySelector("[data-close]").addEventListener("click", () => setDrawer(false));
  drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setDrawer(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setDrawer(false); });
}

// ---------- Reveal on scroll ----------
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 70}ms`;
  revealObs.observe(el);
});

// ---------- Animated counters ----------
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const countObs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseFloat(el.dataset.count);
    const decimals = Number(el.dataset.decimals || 0);
    const fmt = (n) => n.toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    countObs.unobserve(el);
    if (reduceMotion) { el.textContent = fmt(target); return; }
    const start = performance.now();
    const dur = 1600;
    const tick = (now) => {
      const t = Math.min((now - start) / dur, 1);
      el.textContent = fmt(target * (1 - Math.pow(1 - t, 3)));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}, { threshold: 0.5 });
document.querySelectorAll("[data-count]").forEach((el) => countObs.observe(el));

// ---------- Booking form → WhatsApp ----------
const form = document.getElementById("booking-form");
if (form) {
  const dateInput = document.getElementById("f-date");
  dateInput.min = new Date().toISOString().split("T")[0];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const msg = [
      "Hi Somu Holidays, I'd like to book a trip.",
      `Trip type: ${data.get("trip")}`,
      `Pickup: ${data.get("from")}`,
      data.get("to") ? `Destination: ${data.get("to")}` : null,
      `Date: ${data.get("date")}`,
      `Passengers: ${data.get("pax")}`,
    ].filter(Boolean).join("\n");
    window.open(waLink(msg), "_blank", "noopener");
  });
}

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
