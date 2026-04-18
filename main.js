const projects = [
  {
    tag: 'Team Project 1',
    title: 'Microhydro Powerplant',
    desc: 'A sustainable energy solution utilizing micro-hydroelectric power generation in rural areas. Located in Tuban Regency.',
    detail: 'A comprehensive design and analysis of a micro-hydro power plant, including site assessment, hydraulic modeling, turbine selection, and economic feasibility.I taken care of the Hydraulics Aspect, such as flow measurement, head loss calculation, and penstock design, as well as some of the economic analysis to evaluate the projects viability and return on investment.',
    tools: ['Excel', 'ArcGIS', 'Global Mapper']
  },
  {
    tag: 'Team Project 2',
    title: 'Seawater Abrasion Control',
    desc: 'An innovative approach to offshore engineering challenges, focusing on sustainable solutions for coastal environments. Study case in Maluriwu Island',
    detail: 'A project addressing the unique challenges of offshore engineering, including wave dynamics, coastal erosion, and Breakwater Design. I contributed to the hydrodynamic modeling of wave interactions with coastal structures. This involved using Delft3D to simulate wave patterns and assess the effectiveness of proposed breakwater designs.',
    tools: ['Excel', 'Global Mapper', 'Delft3D', 'AutoCAD']
  },
  {
    tag: 'Final Project',
    title: 'Flood Mitigation',
    desc: 'Development of a comprehensive flood mitigation strategy, located in Lamongan regency.',
    detail: 'A final project focused on developing a comprehensive flood mitigation strategy for a flood-prone area. The project involved hydrological modeling to predict flood events, hydraulic analysis to design effective mitigation structures. Including the hydraulic analysis, utilizing HEC-RAS to model river flow and design flood control measures such as levees and detention basins.',
    tools: ['Excel', 'ArcGIS', 'Global Mapper', 'Hec-RAS', 'GeoStudio']
  }
];

const tools = {
  autocad: {
    name: 'AutoCAD',
    category: 'Drafting & Design',
    icon: `<img src="autocad.png" alt="AutoCAD Icon" style="width:48px;height:48px;vertical-align:middle"/>`,
    desc: 'AutoCAD is the industry-standard 2D and 3D computer-aided design (CAD) software developed by Autodesk. It is widely used in civil and structural engineering for producing precise technical drawings, site plans, cross-sections, and construction documents.',
    use: 'I use AutoCAD to draft hydraulic structure layouts, irrigation channel cross-sections, and site plan drawings, ensuring my designs meet dimensional accuracy and engineering standards.'
  },
  arcgis: {
    name: 'ArcGIS',
    category: 'Geographic Information System',
    icon: `<img src="arcgis.png" alt="ArcGIS Icon" style="width:48px;height:48px;vertical-align:middle"/>`,
    desc: 'ArcGIS is a powerful geographic information system (GIS) platform by Esri used to create, manage, analyze, and visualize spatial data. It is essential in water resources and environmental engineering for watershed delineation, flood mapping, and land use analysis.',
    use: 'I apply ArcGIS for catchment area analysis, DEM (Digital Elevation Model) processing, and generating flood inundation maps to support hydraulic modeling and planning decisions.'
  },
  hecras: {
    name: 'HEC-RAS',
    category: 'Hydraulic Modeling',
    icon: `<img src="HecRAS.png" alt="HEC-RAS Icon" style="width:48px;height:48px;vertical-align:middle"/>`,
    desc: 'HEC-RAS (Hydrologic Engineering Center River Analysis System) is a free software by the US Army Corps of Engineers for 1D and 2D hydraulic modeling of rivers and floodplains. It is the global standard for flood routing, bridge analysis, and channel design.',
    use: 'I use HEC-RAS for steady and unsteady flow analysis in river channels, flood frequency modeling, and evaluating the hydraulic performance of structures like weirs, culverts, and detention basins.'
  },
  globalmapper: {
    name: 'Global Mapper',
    category: 'Terrain Analysis',
    icon: `<img src="gmapper.png" alt="Global Mapper Icon" style="width:48px;height:48px;vertical-align:middle"/>`,
    desc: 'Global Mapper is a versatile GIS application used for loading, editing, and analyzing a wide variety of spatial data formats. It excels at terrain analysis, contour generation, LiDAR point cloud processing, and coordinate transformation — tasks common in civil and environmental engineering fieldwork.',
    use: 'I use Global Mapper to process DEM data for watershed analysis, generate topographic contour maps, and extract cross-sectional data for input into hydraulic models like HEC-RAS.'
  },
  delft3d: {
    name: 'Delft3D',
    category: 'Hydrodynamic Modeling',
    icon: `<img src="Delft3D.png" alt="Delft3D Icon" style="width:48px;height:48px;vertical-align:middle"/>`,
    desc: 'Delft3D is an advanced open-source software suite developed by Deltares for 2D and 3D hydrodynamic, water quality, and morphological modeling of rivers, estuaries, and coastal areas. It is widely used in research and large-scale engineering projects worldwide.',
    use: 'I use Delft3D for simulating complex 2D flow patterns in river systems and coastal environments, particularly for flood simulation, sediment transport analysis, and tidal flow modeling.'
  },
  geostudio: {
    name: 'GeoStudio',
    category: 'Geotechnical Analysis',
    icon: `<img src="GeoStudio.png" alt="GeoStudio Icon" style="width:48px;height:48px;vertical-align:middle"/>`,
    desc: 'GeoStudio (by Seequent) is a geotechnical engineering suite that includes SLOPE/W for slope stability analysis, SEEP/W for seepage and groundwater flow, and QUAKE/W for dynamic analysis. It is widely used in dam engineering, embankment design, and foundation analysis.',
    use: 'I apply GeoStudio — particularly SLOPE/W and SEEP/W — for analyzing the stability of embankment dams, computing seepage through earth structures, and assessing groundwater behavior under varying hydraulic conditions.'
  },
  excel: {
    name: 'Microsoft Excel',
    category: 'Data Analysis & Computation',
    icon: `<img src="Excel.png" alt="Excel Icon" style="width:48px;height:48px;vertical-align:middle"/>
    </svg>`,
    desc: 'Microsoft Excel is a spreadsheet application that, in engineering contexts, becomes a powerful computation engine. Civil engineers use it extensively for hydrology calculations, flood frequency analysis, rating curves, design tables, and structured reporting.',
    use: 'I use Excel to perform hydrological calculations such as rational method runoff estimation, log-Pearson III flood frequency analysis, and irrigation water balance computations — often with custom formulas and VBA macros for automation.'
  }
};

const cursorEl  = document.getElementById('cursor');
const cursorDot = document.getElementById('cursor-dot');

const isTouchDevice = () =>
  window.matchMedia('(hover: none)').matches || navigator.maxTouchPoints > 0;

let idleTimer = null;
const IDLE_MS = 2500;

function showCursor() {
  cursorEl.style.opacity  = '1';
  cursorDot.style.opacity = '1';
}
function hideCursor() {
  cursorEl.style.opacity  = '0';
  cursorDot.style.opacity = '0';
}

if (!isTouchDevice()) {
  cursorEl.style.transition  = 'transform 0.12s ease, background 0.12s ease, opacity 0.4s ease';
  cursorDot.style.transition = 'opacity 0.4s ease';

  document.addEventListener('mousemove', (e) => {
    cursorEl.style.left  = e.clientX + 'px';
    cursorEl.style.top   = e.clientY + 'px';
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top  = e.clientY + 'px';
    showCursor();
    clearTimeout(idleTimer);
    idleTimer = setTimeout(hideCursor, IDLE_MS);
  }, { passive: true });

  document.addEventListener('mouseleave', hideCursor);

  hideCursor();
} else {
  cursorEl.style.display  = 'none';
  cursorDot.style.display = 'none';
  const styleEl = document.createElement('style');
  styleEl.textContent = '* { cursor: auto !important; }';
  document.head.appendChild(styleEl);
}

function addCursorHover(selector) {
  if (isTouchDevice()) return;
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener('mouseenter', () => cursorEl.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursorEl.classList.remove('hover'));
  });
}
addCursorHover('a, button, .project-card, input, textarea, .tag, .tech-tag, .tool-tag, .cv-btn');

const dateEl = document.getElementById('date-display');
if (dateEl) {
  dateEl.textContent = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  }).toUpperCase();
}
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

function dismissLoader() {
  const loader = document.getElementById('loader');
  const fill   = document.getElementById('loader-fill');
  const page   = document.getElementById('page');
  if (!loader || loader.dataset.dismissed) return;
  loader.dataset.dismissed = '1';
  if (fill) fill.style.width = '100%';
  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.pointerEvents = 'none';
    setTimeout(() => {
      loader.style.display = 'none';
      if (page) page.classList.add('visible');
      setTimeout(() => {
        checkFadeIns();
        animateSkills();
        animateCounters();
      }, 150);
    }, 700);
  }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
  const fill = document.getElementById('loader-fill');
  if (fill) fill.style.width = '0%';
  setTimeout(dismissLoader, 3000);
});
window.addEventListener('load', dismissLoader);

window.addEventListener('scroll', () => {
  const progress = document.getElementById('scroll-progress');
  const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  if (progress) progress.style.width = (scrolled * 100) + '%';
  checkFadeIns();
  updateActiveNav();
});

function checkFadeIns() {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) el.classList.add('visible');
  });
}

const navSections = ['about', 'work', 'skills', 'timeline', 'contact'];

function updateActiveNav() {
  navSections.forEach(id => {
    const section = document.getElementById(id);
    if (!section) return;
    const rect = section.getBoundingClientRect();
    if (rect.top <= 160 && rect.bottom >= 160) {
      document.querySelectorAll('#main-nav a').forEach(a => a.classList.remove('active'));
      const link = document.querySelector(`#main-nav a[data-section="${id}"]`);
      if (link) link.classList.add('active');
    }
  });
}

document.querySelectorAll('#main-nav a').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

let skillsAnimated = false;
function animateSkills() {
  if (skillsAnimated) return;
  const section = document.getElementById('skills');
  if (!section) return;
  if (section.getBoundingClientRect().top < window.innerHeight) {
    skillsAnimated = true;
    document.querySelectorAll('.skill-fill').forEach((fill, i) => {
      setTimeout(() => { fill.style.width = fill.dataset.w + '%'; }, i * 90);
    });
  }
}
window.addEventListener('scroll', animateSkills);

let countersRun = false;

function animateCounters() {
  if (countersRun) return;
  const statGrid = document.querySelector('.stat-grid');
  if (!statGrid) return;
  if (statGrid.getBoundingClientRect().top < window.innerHeight) {
    countersRun = true;
    document.querySelectorAll('[data-target]').forEach(el => {
      const target  = parseInt(el.dataset.target, 10);
      const decimal = parseInt(el.dataset.decimal || '0', 10);
      const divisor = Math.pow(10, decimal);
      let count = 0;
      const step = Math.ceil(target / 50);

      const timer = setInterval(() => {
        count = Math.min(count + step, target);
        el.textContent = (count / divisor).toFixed(decimal);
        if (count >= target) clearInterval(timer);
      }, 35);
    });
  }
}
window.addEventListener('scroll', animateCounters);

const modal       = document.getElementById('modal');
const modalClose  = document.getElementById('modal-close');
const modalTag    = document.getElementById('modal-tag');
const modalTitle  = document.getElementById('modal-title');
const modalDesc   = document.getElementById('modal-desc');
const modalDetail = document.getElementById('modal-detail');
const modalTags   = document.getElementById('modal-tags');

function openProject(index) {
  const p = projects[index];
  if (!p) return;
  modalTag.textContent    = p.tag;
  modalTitle.textContent  = p.title;
  modalDesc.textContent   = p.desc;
  modalDetail.textContent = p.detail;
  modalTags.innerHTML = p.tools.map(t => `<span class="tech-tag">${t}</span>`).join('');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeModal(); closeToolModal(); } });

window.openProject = openProject;

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const idx = parseInt(card.dataset.proj);
    if (!isNaN(idx)) openProject(idx);
  });
});

const toolModal         = document.getElementById('tool-modal');
const toolModalClose    = document.getElementById('tool-modal-close');
const toolModalIcon     = document.getElementById('tool-modal-icon');
const toolModalCategory = document.getElementById('tool-modal-category');
const toolModalTitle    = document.getElementById('tool-modal-title');
const toolModalDesc     = document.getElementById('tool-modal-desc');
const toolModalUse      = document.getElementById('tool-modal-use');

function openTool(key) {
  const t = tools[key];
  if (!t) return;
  toolModalIcon.innerHTML     = t.icon;
  toolModalCategory.textContent = t.category;
  toolModalTitle.textContent  = t.name;
  toolModalDesc.textContent   = t.desc;
  toolModalUse.textContent    = '▸ How I use it: ' + t.use;
  toolModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeToolModal() {
  if (toolModal) toolModal.classList.remove('open');
  document.body.style.overflow = '';
}

if (toolModalClose) toolModalClose.addEventListener('click', closeToolModal);
if (toolModal) toolModal.addEventListener('click', (e) => { if (e.target === toolModal) closeToolModal(); });

document.querySelectorAll('.tool-tag').forEach(tag => {
  tag.addEventListener('click', () => {
    const key = tag.dataset.tool;
    if (key) openTool(key);
  });
});

const EMAILJS_PUBLIC_KEY  = 'wGJDdLNCFi6gqGMbg';   
const EMAILJS_SERVICE_ID  = 'service_33s5gl3';   
const EMAILJS_TEMPLATE_ID = 'template_8ln1gsm';  

if (typeof emailjs !== 'undefined') {
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}

const contactForm = document.getElementById('contact-form');
const sendBtn     = document.getElementById('send-btn');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      showToast('⚠ EmailJS keys not configured yet — see main.js comments.');
      return;
    }

    if (sendBtn) {
      sendBtn.textContent = '⏳ Sending...';
      sendBtn.disabled = true;
    }

    try {
      const nameVal    = contactForm.querySelector('[name="from_name"]').value;
      const emailVal   = contactForm.querySelector('[name="reply_to"]').value;
      const subjectVal = contactForm.querySelector('[name="subject"]').value || '(No subject)';
      const msgVal     = contactForm.querySelector('[name="message"]').value || '(No message)';
      const timeVal    = new Date().toLocaleString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long',
        day: 'numeric', hour: '2-digit', minute: '2-digit'
      });

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name:     `${nameVal} <${emailVal}>`,   
        time:     `${timeVal} — Subject: ${subjectVal}`,
        message:  msgVal,
        reply_to: emailVal,                     
      });
      showToast('✦ Message dispatched! I\'ll reply soon.');
      contactForm.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      showToast('✕ Send failed — please email me directly.');
    } finally {
      if (sendBtn) {
        sendBtn.textContent = '✦ Send Dispatch';
        sendBtn.disabled = false;
      }
    }
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3800);
}

const themeBtn = document.getElementById('theme-btn');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    showToast(isDark ? 'Night mode engaged.' : 'Daylight mode restored.');
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  });
}

(function () {
  if (localStorage.getItem('portfolio-theme') === 'dark') {
    document.body.classList.add('dark-theme');
  }
})();

setTimeout(() => {
  checkFadeIns();
  animateSkills();
  animateCounters();
}, 3000);
