/**
 * MAISON. — ARCHITECTURAL FURNITURE & SPACES
 * Powered by Motion.dev (animate, scroll, inView, stagger, spring)
 */

const MAISON_OBJECTS = [
  {
    index: "01",
    formId: "Form No. 01",
    name: "LB CHAIR",
    category: "Lounge",
    filterGroup: "seating",
    bullets: [
      "Sculptural form.",
      "Everyday function.",
      "A bolder home."
    ],
    exactImg: "assets/images/lb-chair-exact.png",
    studioImg: "assets/images/lb-chair.jpg",
    price: "€ 1,480",
    designer: "Studio Maison Paris",
    dimensions: "W 84cm × D 78cm × H 72cm",
    cadW: "W 840 MM",
    cadH: "H 720 MM",
    shortDim: "84 × 78 × 72 cm • Veneto",
    materials: "Electric Cobalt Kvadrat Wool Velvet, High-Density Core, Steel Skeleton",
    weight: "22.5 kg",
    provenance: "Veneto, Italy",
    status: "In Stock • Veneto",
    tagline: "Volumetric comfort carved into an indelible tubular silhouette.",
    swatches: [
      { label: "Klein Cobalt Velvet", color: "#0a26e8", imageSrc: "assets/images/lb-chair-exact.png" },
      { label: "Alpine Moss Green", color: "#1f6e58", imageSrc: "assets/images/lb-chair-moss.png" },
      { label: "Burnt Sienna Terracotta", color: "#8c2d19", imageSrc: "assets/images/lb-chair-sienna.png" },
      { label: "Anthracite Wool", color: "#222222", imageSrc: "assets/images/lb-chair-anthracite.png" }
    ]
  },
  {
    index: "02",
    formId: "Form No. 07",
    name: "PLIN SIDE TABLE",
    category: "Living",
    filterGroup: "architecture",
    bullets: [
      "Polished presence.",
      "Functional sculpture.",
      "Made to belong."
    ],
    exactImg: "assets/images/plin-table-exact.png",
    studioImg: "assets/images/plin-table.jpg",
    price: "€ 790",
    designer: "Studio Maison Berlin",
    dimensions: "Ø 52cm × H 58–74cm (Adjustable)",
    cadW: "Ø 520 MM",
    cadH: "H 580–740 MM",
    shortDim: "Ø 52 × H 74 cm • Solingen",
    materials: "Mirror-Polished AISI 304 Stainless Steel, 10mm Tempered Float Glass",
    weight: "14.2 kg",
    provenance: "Solingen, Germany",
    status: "In Stock • Solingen",
    tagline: "Eileen Gray cantilevered heritage reinterpreted in surgical steel.",
    swatches: [
      { label: "Mirror Chrome Steel", color: "#d4d4d8", imageSrc: "assets/images/plin-table-exact.png" },
      { label: "Warm Champagne Brass", color: "#c5a869", imageSrc: "assets/images/plin-table-brass.png" },
      { label: "Smoked Gunmetal", color: "#3f3f46", imageSrc: "assets/images/plin-table-obsidian.png" }
    ]
  },
  {
    index: "03",
    formId: "Form No. 03",
    name: "RIVE SOFA",
    category: "Seating",
    filterGroup: "seating",
    bullets: [
      "Curvilinear presence.",
      "Tactile bouclé comfort.",
      "Low-profile living."
    ],
    exactImg: "assets/images/rive-sofa.jpg",
    studioImg: "assets/images/rive-sofa.jpg",
    price: "€ 3,850",
    designer: "Studio Maison Copenhagen",
    dimensions: "W 240cm × D 105cm × H 68cm",
    cadW: "W 2400 MM",
    cadH: "H 680 MM",
    shortDim: "240 × 105 × 68 cm • Småland",
    materials: "Heavyweight French Wool Bouclé, Kiln-Dried Beech Frame, Goose Down",
    weight: "68.0 kg",
    provenance: "Småland, Sweden",
    status: "Made to Order • 3 Wks",
    tagline: "Gentle sweeping contours designed for effortless architectural gathering.",
    swatches: [
      { label: "Raw Chalk Bouclé", color: "#edeae2", imageSrc: "assets/images/rive-sofa.jpg" },
      { label: "Warm Espresso Mohair", color: "#4a3728", imageSrc: "assets/images/rive-sofa.jpg" },
      { label: "Terracotta Rust Velvet", color: "#b33827", imageSrc: "assets/images/rive-sofa.jpg" },
      { label: "Charcoal Slate Bouclé", color: "#2c2c2f", imageSrc: "assets/images/rive-sofa.jpg" }
    ]
  },
  {
    index: "04",
    formId: "Form No. 04",
    name: "ATLAS SHELF",
    category: "Storage",
    filterGroup: "architecture",
    bullets: [
      "Modular rhythm.",
      "Brushed aluminum frame.",
      "Smoked oak planes."
    ],
    exactImg: "assets/images/atlas-shelf.jpg",
    studioImg: "assets/images/atlas-shelf.jpg",
    price: "€ 2,150",
    designer: "Studio Maison Zürich",
    dimensions: "W 160cm × D 38cm × H 182cm",
    cadW: "W 1600 MM",
    cadH: "H 1820 MM",
    shortDim: "160 × 38 × 182 cm • Basel",
    materials: "Anodized Brushed Aluminum Uprights, Dark Smoked French Oak Shelves",
    weight: "46.0 kg",
    provenance: "Basel, Switzerland",
    status: "In Stock • Basel",
    tagline: "Architectural poise balancing vertical tension with floating horizontal mass.",
    swatches: [
      { label: "Smoked Oak & Alu", color: "#443224", imageSrc: "assets/images/atlas-shelf.jpg" },
      { label: "Natural Ash & Silver", color: "#c8b396", imageSrc: "assets/images/atlas-shelf.jpg" },
      { label: "Ebonized Oak", color: "#1c1917", imageSrc: "assets/images/atlas-shelf.jpg" }
    ]
  },
  {
    index: "05",
    formId: "Form No. 05",
    name: "COLUMN LAMP",
    category: "Lighting",
    filterGroup: "atmosphere",
    bullets: [
      "Fluted glass diffusion.",
      "Warm ambient glow.",
      "Solid nickel base."
    ],
    exactImg: "assets/images/column-lamp.jpg",
    studioImg: "assets/images/column-lamp.jpg",
    price: "€ 680",
    designer: "Studio Maison Milan",
    dimensions: "Ø 22cm × H 145cm",
    cadW: "Ø 220 MM",
    cadH: "H 1450 MM",
    shortDim: "Ø 22 × H 145 cm • Murano",
    materials: "Mouth-Blown Fluted Borosilicate Glass, Brushed Nickel, 2700K Warm LED",
    weight: "9.8 kg",
    provenance: "Murano, Italy",
    status: "In Stock • Murano",
    tagline: "A fluted architectural totem casting diffused warmth and calm.",
    swatches: [
      { label: "Warm 2700K Amber", color: "#f59e0b", imageSrc: "assets/images/column-lamp.jpg" },
      { label: "Daylight 4000K Ice", color: "#e0f2fe", imageSrc: "assets/images/column-lamp-ice.jpg" },
      { label: "Sunset Dichroic", color: "#ea580c", imageSrc: "assets/images/column-lamp-sunset.jpg" }
    ]
  },
  {
    index: "06",
    formId: "Form No. 06",
    name: "DUNE RUG",
    category: "Accessories",
    filterGroup: "atmosphere",
    bullets: [
      "High-low relief waves.",
      "Pure New Zealand wool.",
      "Tactile sanctuary."
    ],
    exactImg: "assets/images/dune-rug.jpg",
    studioImg: "assets/images/dune-rug.jpg",
    price: "€ 1,120",
    designer: "Studio Maison Kyoto",
    dimensions: "200cm × 300cm (Pile 18mm)",
    cadW: "W 2000 MM",
    cadH: "L 3000 MM",
    shortDim: "200 × 300 cm • Hand-Tufted",
    materials: "100% Unbleached High-Twist New Zealand Wool, Organic Cotton Canvas",
    weight: "18.5 kg",
    provenance: "Kyoto / Bhadohi",
    status: "In Stock • Ready",
    tagline: "Sculpted terrain underfoot inspired by windswept coastal dunes.",
    swatches: [
      { label: "Unbleached Raw Wool", color: "#dfd9ce", imageSrc: "assets/images/dune-rug.jpg" },
      { label: "Warm Terracotta Clay", color: "#b4654a", imageSrc: "assets/images/dune-rug.jpg" },
      { label: "Nordic Slate Grey", color: "#64748b", imageSrc: "assets/images/dune-rug.jpg" }
    ]
  }
];

// Global UI State
let currentPrimaryIndex = 0;
let currentSecondaryIndex = 1;
let isStudioRenderMode = false;
let currentDrawerIndex = 0;
let bagCount = 2;
let autoCycleTimer = null;
let isHeroHovered = false;

// Safely extract Motion.dev primitives
const MotionLib = window.Motion || {};
const motionAnimate = MotionLib.animate || ((el, kf) => {});
const motionScroll = MotionLib.scroll || null;
const motionInView = MotionLib.inView || null;
const motionStagger = MotionLib.stagger || ((d) => d);
const motionSpring = MotionLib.spring || null;

document.addEventListener("DOMContentLoaded", () => {
  initSplitCharactersAndHeroEntrance();
  initStudioModeButtons();
  initTickerAndHeroCards();
  initHeroSwatches();
  init3DTiltAndMagnetic();
  initCatalogSection();
  initScrollScenesAndReveals();
  initDrawerModal();
  initBagAndToast();
  initClocks();
  initHotspots();
});

/**
 * 1. Split Hero Headlines into Interactive Character Spans & Run Motion.dev Wave + Load
 */
function initSplitCharactersAndHeroEntrance() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const splitTargets = document.querySelectorAll("[data-split-chars]");

  splitTargets.forEach((heading) => {
    const text = heading.textContent.trim();
    heading.setAttribute("aria-label", text);
    heading.innerHTML = "";

    [...text].forEach((ch) => {
      if (ch === " ") {
        const space = document.createElement("span");
        space.innerHTML = "&nbsp;";
        space.style.display = "inline-block";
        heading.appendChild(space);
        return;
      }
      const mask = document.createElement("span");
      mask.className = "char-mask";
      const inner = document.createElement("span");
      inner.className = "char-inner";
      inner.textContent = ch;
      mask.appendChild(inner);
      heading.appendChild(mask);

      // Interactive character spring wave on pointer enter
      inner.addEventListener("pointerenter", () => {
        if (reduced) return;
        motionAnimate(
          inner,
          { transform: ["translateY(0%) scaleY(1)", "translateY(-8%) scaleY(1.07)", "translateY(0%) scaleY(1)"] },
          { duration: 0.42, easing: [0.22, 1, 0.36, 1] }
        );
      });
    });
  });

  if (reduced) return;

  // Motion.dev Staggered Character Entrance (Always visible on Frame 1, settles with spring precision)
  const allChars = document.querySelectorAll(".hero-header .char-inner");
  if (allChars.length) {
    motionAnimate(
      allChars,
      { transform: ["translateY(14px) scaleY(0.94)", "translateY(0px) scaleY(1)"] },
      {
        duration: 0.65,
        delay: motionStagger(0.022),
        easing: [0.16, 1, 0.3, 1]
      }
    );
  }

  // Statement card lines entrance
  const statementWords = document.querySelectorAll(".card-statement .word-reveal");
  if (statementWords.length) {
    motionAnimate(
      statementWords,
      { transform: ["translateY(12px)", "translateY(0px)"] },
      {
        duration: 0.6,
        delay: motionStagger(0.075, { start: 0.08 }),
        easing: [0.16, 1, 0.3, 1]
      }
    );
  }

  // Hero product images settle
  const heroImgs = document.querySelectorAll(".editorial-grid .card-product-img");
  if (heroImgs.length) {
    motionAnimate(
      heroImgs,
      { transform: ["scale(1.06) translateY(8px)", "scale(1) translateY(0px)"] },
      {
        duration: 0.85,
        delay: motionStagger(0.1),
        easing: [0.16, 1, 0.3, 1]
      }
    );
  }
}

/**
 * 2. Hero Studio Mode Switcher (1:1 Reference / 8K Studio / CAD Wireframe)
 */
function initStudioModeButtons() {
  const chips = document.querySelectorAll(".ambient-chip[data-studio-mode]");
  const heroGrid = document.getElementById("hero-grid");

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const mode = chip.getAttribute("data-studio-mode");
      chips.forEach((c) => c.classList.toggle("active", c === chip));

      if (mode === "blueprint") {
        heroGrid.classList.toggle("blueprint-active");
      } else {
        heroGrid.classList.remove("blueprint-active");
        isStudioRenderMode = mode === "hd";
        refreshHeroImagesWithMotion();
      }
    });
  });
}

function refreshHeroImagesWithMotion() {
  const pObj = MAISON_OBJECTS[currentPrimaryIndex];
  const sObj = MAISON_OBJECTS[currentSecondaryIndex];
  const pImg = document.getElementById("primary-prod-img");
  const sImg = document.getElementById("secondary-prod-img");

  if (pImg) {
    pImg.src = isStudioRenderMode ? pObj.studioImg : pObj.exactImg;
    motionAnimate(pImg, { transform: ["scale(0.94)", "scale(1)"] }, { duration: 0.42, easing: [0.16, 1, 0.3, 1] });
  }
  if (sImg) {
    sImg.src = isStudioRenderMode ? sObj.studioImg : sObj.exactImg;
    motionAnimate(sImg, { transform: ["scale(0.94)", "scale(1)"] }, { duration: 0.42, easing: [0.16, 1, 0.3, 1] });
  }
}

/**
 * 3. Hero Cards & Bottom Ticker Navigation
 * Keeps LB Chair permanently featured on Card 1 (no slide cycling),
 * and ticker cells link cleanly to corresponding objects in the collection.
 */
function initTickerAndHeroCards() {
  const tickerCells = document.querySelectorAll(".ticker-cell[data-index]");

  tickerCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      const idx = parseInt(cell.getAttribute("data-index"), 10);
      tickerCells.forEach((c) => c.classList.remove("active"));
      cell.classList.add("active");

      // Scroll smoothly to collection and highlight the selected object
      const coll = document.getElementById("collection");
      if (coll) {
        coll.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => {
          const targetCard = document.querySelector(`.catalog-item-card[data-obj-index="${idx}"]`);
          if (targetCard) {
            targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
            motionAnimate(
              targetCard,
              { transform: ["scale(0.98)", "scale(1.02)", "scale(1)"] },
              { duration: 0.5, easing: [0.22, 1, 0.36, 1] }
            );
          }
        }, 400);
      }
    });
  });

  // Image clicks on hero cards open technical details or scroll to collection
  const pImg = document.getElementById("primary-prod-img");
  const sImg = document.getElementById("secondary-prod-img");
  if (pImg) pImg.addEventListener("click", () => openDrawerWithObject(0));
  if (sImg) sImg.addEventListener("click", () => openDrawerWithObject(1));
}

/**
 * Choreographed Motion.dev Transition for Primary Hero Card
 */
function updatePrimaryCard(newIndex) {
  if (newIndex === currentPrimaryIndex) return;

  const obj = MAISON_OBJECTS[newIndex];
  const formIdEl = document.getElementById("primary-form-id");
  const nameEl = document.getElementById("primary-name");
  const priceEl = document.getElementById("primary-price");
  const bulletsEl = document.getElementById("primary-bullets");
  const imgEl = document.getElementById("primary-prod-img");
  const counterEl = document.getElementById("primary-counter");
  const cadW = document.getElementById("primary-cad-w");
  const cadH = document.getElementById("primary-cad-h");
  const dimTag = document.getElementById("primary-dim-tag");

  document.querySelectorAll(".ticker-cell[data-index]").forEach((cell) => {
    const cellIdx = parseInt(cell.getAttribute("data-index"), 10);
    cell.classList.toggle("active", cellIdx === newIndex);
  });

  formIdEl.textContent = obj.formId;
  nameEl.textContent = obj.name;
  if (priceEl) priceEl.textContent = obj.price;
  bulletsEl.innerHTML = obj.bullets.map((b) => `<li>${b}</li>`).join("");
  counterEl.textContent = `${obj.index} / 06`;
  if (cadW) cadW.textContent = obj.cadW;
  if (cadH) cadH.textContent = obj.cadH;
  if (dimTag) dimTag.textContent = obj.shortDim;

  imgEl.style.filter = "none";
  imgEl.src = isStudioRenderMode ? obj.studioImg : obj.exactImg;
  imgEl.alt = obj.name;

  const swatches = document.querySelectorAll("#primary-swatches .swatch-dot");
  swatches.forEach((s, i) => s.classList.toggle("active", i === 0));

  motionAnimate(
    imgEl,
    { transform: ["scale(0.92) translateY(14px)", "scale(1) translateY(0px)"] },
    { duration: 0.52, easing: [0.16, 1, 0.3, 1] }
  );

  motionAnimate(
    [formIdEl, nameEl, ...bulletsEl.querySelectorAll("li")],
    { transform: ["translateY(10px)", "translateY(0px)"] },
    { duration: 0.42, delay: motionStagger(0.04), easing: [0.22, 1, 0.36, 1] }
  );

  currentPrimaryIndex = newIndex;
}

function updateSecondaryCard(newIndex) {
  const obj = MAISON_OBJECTS[newIndex];
  const formIdEl = document.getElementById("secondary-form-id");
  const nameEl = document.getElementById("secondary-name");
  const priceEl = document.getElementById("secondary-price");
  const bulletsEl = document.getElementById("secondary-bullets");
  const imgEl = document.getElementById("secondary-prod-img");
  const counterEl = document.getElementById("secondary-counter");
  const cadW = document.getElementById("secondary-cad-w");
  const cadH = document.getElementById("secondary-cad-h");
  const dimTag = document.getElementById("secondary-dim-tag");

  formIdEl.textContent = obj.formId;
  nameEl.textContent = obj.name;
  if (priceEl) priceEl.textContent = obj.price;
  bulletsEl.innerHTML = obj.bullets.map((b) => `<li>${b}</li>`).join("");
  counterEl.textContent = `${obj.index} / 06`;
  if (cadW) cadW.textContent = obj.cadW;
  if (cadH) cadH.textContent = obj.cadH;
  if (dimTag) dimTag.textContent = obj.shortDim;

  imgEl.src = isStudioRenderMode ? obj.studioImg : obj.exactImg;
  imgEl.alt = obj.name;

  motionAnimate(
    imgEl,
    { transform: ["scale(0.92) translateY(12px)", "scale(1) translateY(0px)"] },
    { duration: 0.5, easing: [0.16, 1, 0.3, 1] }
  );

  motionAnimate(
    [formIdEl, nameEl, ...bulletsEl.querySelectorAll("li")],
    { transform: ["translateY(8px)", "translateY(0px)"] },
    { duration: 0.4, delay: motionStagger(0.04), easing: [0.22, 1, 0.36, 1] }
  );

  currentSecondaryIndex = newIndex;
}

/**
 * 4. Interactive Colorway Swatches on Hero Card
 */
function initHeroSwatches() {
  const swatchDots = document.querySelectorAll("#primary-swatches .swatch-dot");
  const imgEl = document.getElementById("primary-prod-img");

  swatchDots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      e.stopPropagation();
      swatchDots.forEach((d) => d.classList.remove("active"));
      dot.classList.add("active");

      const imgSrc = dot.getAttribute("data-img");
      if (!imgEl || !imgSrc) return;

      imgEl.style.filter = "none";
      imgEl.src = imgSrc;

      motionAnimate(
        imgEl,
        { transform: ["scale(0.96)", "scale(1.02)", "scale(1)"], opacity: [0.8, 1] },
        { duration: 0.35, easing: [0.22, 1, 0.36, 1] }
      );
    });
  });
}

/**
 * 5. 3D Perspective Tilt + Motion.dev Magnetic Buttons
 */
function init3DTiltAndMagnetic() {
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!finePointer) return;

  // 3D Tilt on Hero Visual Stages
  const stages = document.querySelectorAll(".card-visual-wrapper");
  stages.forEach((stage) => {
    const img = stage.querySelector(".card-product-img");
    if (!img) return;

    stage.addEventListener("pointermove", (e) => {
      const rect = stage.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;

      const rotX = ny * -10;
      const rotY = nx * 10;

      img.style.transform = `perspective(900px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale(1.04) translateY(-3px)`;
    });

    stage.addEventListener("pointerleave", () => {
      motionAnimate(
        img,
        { transform: "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0px)" },
        { duration: 0.55, easing: [0.16, 1, 0.3, 1] }
      );
    });
  });

  // Magnetic Buttons & Nav Links
  const magnetics = document.querySelectorAll("[data-magnetic]");
  magnetics.forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const rect = el.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.22;
      const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.22;
      el.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
    });

    el.addEventListener("pointerleave", () => {
      motionAnimate(
        el,
        { transform: "translate(0px, 0px)" },
        { duration: 0.5, easing: motionSpring ? motionSpring({ stiffness: 280, damping: 18 }) : [0.22, 1, 0.36, 1] }
      );
    });
  });
}

/**
 * 6. Upgraded Card Section ("The Complete System" — Objects 01–06)
 */
function initCatalogSection() {
  const container = document.getElementById("catalog-grid-container");
  if (!container) return;

  renderCatalogCards("all", false);

  // Category Filter Tabs
  const filterBtns = document.querySelectorAll(".filter-chip[data-filter]");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filterVal = btn.getAttribute("data-filter");
      renderCatalogCards(filterVal, true);
    });
  });

  // Layout View Switcher (Bento vs Runway 2-Col)
  const layoutBtns = document.querySelectorAll(".layout-btn[data-layout]");
  layoutBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      layoutBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const mode = btn.getAttribute("data-layout");
      container.classList.toggle("runway-mode", mode === "runway");
      container.classList.toggle("bento-mode", mode === "bento");

      const cards = container.querySelectorAll(".catalog-item-card");
      motionAnimate(
        cards,
        { transform: ["scale(0.97) translateY(10px)", "scale(1) translateY(0px)"] },
        { duration: 0.45, delay: motionStagger(0.05), easing: [0.16, 1, 0.3, 1] }
      );
    });
  });
}

function renderCatalogCards(filterGroup, animateTransition = false) {
  const container = document.getElementById("catalog-grid-container");
  if (!container) return;

  const filtered = MAISON_OBJECTS.map((obj, idx) => ({ ...obj, originalIndex: idx })).filter(
    (item) => filterGroup === "all" || item.filterGroup === filterGroup
  );

  container.innerHTML = filtered
    .map(
      (obj, i) => `
    <article class="catalog-item-card ${i === 0 ? "is-hero-bento" : ""}" data-obj-index="${obj.originalIndex}">
      <!-- Top Architectural Header -->
      <div class="item-header">
        <div class="item-index-pill">
          <span class="item-num-badge">${obj.index}</span>
          <span class="item-cat-label">${obj.category} &bull; ${obj.formId}</span>
        </div>
        <span class="item-status-tag">${obj.status}</span>
      </div>

      <!-- Visual Stage with Blueprint Hover HUD -->
      <div class="catalog-img-box">
        <img src="${obj.studioImg}" alt="${obj.name}" class="catalog-card-img" loading="lazy" />

        <div class="card-blueprint-hud" aria-hidden="true">
          <div class="hud-spec-col">
            <span class="hud-label">Dimensions</span>
            <span class="hud-val">${obj.cadW} &times; ${obj.cadH}</span>
          </div>
          <div class="hud-spec-col">
            <span class="hud-label">Mass</span>
            <span class="hud-val">${obj.weight}</span>
          </div>
          <div class="hud-spec-col">
            <span class="hud-label">Origin</span>
            <span class="hud-val accent">${obj.provenance}</span>
          </div>
        </div>
      </div>

      <!-- Body Details & Interactive Finish Swatches -->
      <div class="item-body-info">
        <div class="item-title-row">
          <h3 class="item-title-bold">${obj.name}</h3>
          <span class="item-price">${obj.price}</span>
        </div>
        <p class="item-tagline-copy">${obj.tagline}</p>

        <div class="card-finish-row">
          <span class="finish-name-label" data-finish-label>${obj.swatches[0].label}</span>
          <div class="card-swatches" role="group" aria-label="Select Finish">
            ${obj.swatches
              .map(
                (sw, sIdx) => `
              <button class="card-swatch-btn ${sIdx === 0 ? "active" : ""}"
                      style="--sw: ${sw.color};"
                      data-img-src="${sw.imageSrc || obj.exactImg}"
                      data-swatch-name="${sw.label}"
                      title="${sw.label}"
                      aria-label="${sw.label}"></button>
            `
              )
              .join("")}
          </div>
        </div>
      </div>

      <!-- Dual Action Footer -->
      <div class="item-footer-actions">
        <button class="card-inspect-btn" data-inspect-btn="${obj.originalIndex}">
          <span>Technical Specs &amp; CAD</span>
          <span>&nearr;</span>
        </button>
        <button class="card-add-bag-btn" data-add-bag="${obj.originalIndex}">
          <span>Add</span>
          <span>+</span>
        </button>
      </div>
    </article>
  `
    )
    .join("");

  // Bind Swatch Clicks inside each Card
  container.querySelectorAll(".catalog-item-card").forEach((card) => {
    const cardImg = card.querySelector(".catalog-card-img");
    const finishLabel = card.querySelector("[data-finish-label]");
    const swatchBtns = card.querySelectorAll(".card-swatch-btn");

    swatchBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        swatchBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const imgSrc = btn.getAttribute("data-img-src");
        const labelText = btn.getAttribute("data-swatch-name") || "";
        if (finishLabel) finishLabel.textContent = labelText;
        if (cardImg && imgSrc) {
          cardImg.style.filter = "none";
          cardImg.src = imgSrc;
          motionAnimate(
            cardImg,
            { transform: ["scale(0.96)", "scale(1.03)", "scale(1)"], opacity: [0.8, 1] },
            { duration: 0.38, easing: [0.22, 1, 0.36, 1] }
          );
        }
      });
    });

    // Inspect button & image click -> Open CAD Drawer
    const inspectBtn = card.querySelector("[data-inspect-btn]");
    const objIdx = parseInt(card.getAttribute("data-obj-index"), 10);
    if (inspectBtn) {
      inspectBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        openDrawerWithObject(objIdx);
      });
    }
    if (cardImg) {
      cardImg.addEventListener("click", () => openDrawerWithObject(objIdx));
    }

    // Add to Bag button
    const addBtn = card.querySelector("[data-add-bag]");
    if (addBtn) {
      addBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        addToBag(objIdx, addBtn);
      });
    }
  });

  if (animateTransition) {
    const renderedCards = container.querySelectorAll(".catalog-item-card");
    motionAnimate(
      renderedCards,
      { transform: ["translateY(16px)", "translateY(0px)"] },
      { duration: 0.5, delay: motionStagger(0.055), easing: [0.16, 1, 0.3, 1] }
    );
  }
}

/**
 * 7. Scroll-Linked Scenes & Viewport Reveals (Motion.scroll & Motion.inView)
 */
function initScrollScenesAndReveals() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // A. Top Scroll Progress Bar
  const progressBar = document.getElementById("scroll-progress-bar");
  if (motionScroll && progressBar && !reduced) {
    motionScroll(motionAnimate(progressBar, { transform: ["scaleX(0)", "scaleX(1)"] }));
  }

  // B. Opening Window Scene on #opening-window-stage
  const windowStage = document.getElementById("opening-window-stage");
  const windowImg = document.getElementById("opening-window-img");
  if (motionScroll && windowStage && windowImg && !reduced) {
    motionScroll(
      motionAnimate(windowImg, {
        transform: ["scale(1.12)", "scale(1)"]
      }),
      {
        target: windowStage,
        offset: ["start end", "end start"]
      }
    );
  }

  // C. Ink-Fill Statement on #ink-fill-statement
  const statementEl = document.getElementById("ink-fill-statement");
  if (statementEl) {
    const words = statementEl.textContent.trim().split(/\s+/);
    statementEl.innerHTML = words
      .map((w) => `<span class="ink-word" style="color: rgba(0,0,0,0.32);">${w}</span>`)
      .join(" ");

    const wordSpans = [...statementEl.querySelectorAll(".ink-word")];
    const updateInkFill = () => {
      const rect = statementEl.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (vh * 0.85 - rect.top) / (vh * 0.6)));
      const litCount = Math.floor(progress * wordSpans.length);
      wordSpans.forEach((span, idx) => {
        span.style.color = idx <= litCount ? "#000000" : "rgba(0,0,0,0.32)";
      });
    };
    window.addEventListener("scroll", updateInkFill, { passive: true });
    updateInkFill();
  }

  // D. InView Section Entrances
  if (motionInView && !reduced) {
    motionInView(".material-card", (info) => {
      const target = info.target || info;
      motionAnimate(
        target,
        { transform: ["translateY(20px)", "translateY(0px)"] },
        { duration: 0.6, easing: [0.16, 1, 0.3, 1] }
      );
    });
  }
}

/**
 * 8. Quick Spec Slide-Out Drawer Modal
 */
function initDrawerModal() {
  const backdrop = document.getElementById("spec-drawer-backdrop");
  const closeBtn = document.getElementById("drawer-close-btn");
  const drawerAddBtn = document.getElementById("drawer-add-bag-btn");

  if (closeBtn && backdrop) {
    closeBtn.addEventListener("click", closeDrawer);
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeDrawer();
    });
  }

  if (drawerAddBtn) {
    drawerAddBtn.addEventListener("click", () => {
      addToBag(currentDrawerIndex, drawerAddBtn);
    });
  }

  document.querySelectorAll("[data-open-spec]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const idx = parseInt(link.getAttribute("data-open-spec"), 10);
      openDrawerWithObject(idx);
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDrawer();
  });
}

function openDrawerWithObject(index) {
  const obj = MAISON_OBJECTS[index];
  const backdrop = document.getElementById("spec-drawer-backdrop");
  const drawer = document.getElementById("spec-drawer");
  if (!backdrop || !obj) return;

  currentDrawerIndex = index;

  document.getElementById("drawer-title").textContent = obj.name;
  document.getElementById("drawer-form-id").textContent = `${obj.formId} • ${obj.category}`;
  document.getElementById("drawer-img").src = obj.studioImg;
  document.getElementById("drawer-img").alt = obj.name;
  document.getElementById("drawer-tagline").textContent = obj.tagline;
  document.getElementById("drawer-price").textContent = obj.price;
  document.getElementById("drawer-dimensions").textContent = obj.dimensions;
  document.getElementById("drawer-materials").textContent = obj.materials;
  document.getElementById("drawer-weight").textContent = obj.weight;
  document.getElementById("drawer-provenance").textContent = obj.provenance;

  backdrop.classList.add("active");
  document.body.style.overflow = "hidden";

  if (drawer) {
    motionAnimate(
      drawer.querySelectorAll(".drawer-img-view, .drawer-spec-table tr, .drawer-actions"),
      { transform: ["translateY(14px)", "translateY(0px)"] },
      { duration: 0.45, delay: motionStagger(0.04, { start: 0.08 }), easing: [0.16, 1, 0.3, 1] }
    );
  }
}

function closeDrawer() {
  const backdrop = document.getElementById("spec-drawer-backdrop");
  if (backdrop) {
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
  }
}

/**
 * 9. Bag Counter & Toast Feedback
 */
function initBagAndToast() {
  const previewBadge = document.getElementById("preview-badge");
  const headerBagBtn = document.getElementById("header-bag-btn");
  const newsletterForm = document.getElementById("newsletter-form");

  if (previewBadge) {
    previewBadge.addEventListener("click", () => {
      const catalogSection = document.getElementById("collection");
      if (catalogSection) catalogSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (headerBagBtn) {
    headerBagBtn.addEventListener("click", () => {
      openDrawerWithObject(currentPrimaryIndex);
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Subscribed to Studio Maison Architectural Dispatches");
      newsletterForm.reset();
    });
  }
}

function addToBag(objIndex, triggerBtn) {
  const obj = MAISON_OBJECTS[objIndex];
  if (!obj) return;

  bagCount += 1;
  const badge = document.getElementById("bag-badge-count");
  if (badge) {
    badge.textContent = bagCount;
    badge.classList.add("is-visible");
    motionAnimate(
      badge,
      { transform: ["scale(1.45)", "scale(1)"] },
      { duration: 0.4, easing: [0.22, 1, 0.36, 1] }
    );
  }

  if (triggerBtn) {
    motionAnimate(
      triggerBtn,
      { transform: ["scale(0.92)", "scale(1.04)", "scale(1)"] },
      { duration: 0.35, easing: [0.22, 1, 0.36, 1] }
    );
  }

  showToast(`Added ${obj.name} (${obj.price}) to Atelier Bag`);
}

let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById("toast-notification");
  const msgEl = document.getElementById("toast-message");
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add("is-shown");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("is-shown");
  }, 3200);
}

/**
 * 10. Live Clocks for Global Design Studios
 */
function initClocks() {
  function updateTime() {
    const now = new Date();
    const optionsParis = { timeZone: "Europe/Paris", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false };
    const parisTime = new Intl.DateTimeFormat("en-GB", optionsParis).format(now);

    const parisEl = document.getElementById("clock-paris");
    if (parisEl) parisEl.textContent = parisTime;

    const cphEl = document.getElementById("clock-copenhagen");
    if (cphEl) cphEl.textContent = parisTime;

    const optionsNY = { timeZone: "America/New_York", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false };
    const nyTime = new Intl.DateTimeFormat("en-GB", optionsNY).format(now);
    const nyEl = document.getElementById("clock-ny");
    if (nyEl) nyEl.textContent = nyTime;
  }

  updateTime();
  setInterval(updateTime, 1000);
}

/**
 * 11. Interactive Hotspots in Habitation Room
 */
function initHotspots() {
  const hotspots = document.querySelectorAll(".room-hotspot");
  hotspots.forEach((spot) => {
    spot.addEventListener("click", () => {
      const objIndex = parseInt(spot.getAttribute("data-target-obj"), 10);
      if (!isNaN(objIndex)) {
        openDrawerWithObject(objIndex);
      }
    });
  });
}
