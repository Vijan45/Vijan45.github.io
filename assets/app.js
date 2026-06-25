'use strict';

const PROFILE = {
  scholar: 'https://scholar.google.com/citations?user=R-Six5gAAAAJ&hl=en',
  researchGate: 'https://www.researchgate.net/profile/Bhijan-Neupane',
  hackerNoon: 'https://hackernoon.com/u/induction?tab=stories',
  email: 'info@bnmaterial.com'
};

const translations = {
  ne: {
    accessibility: { skip: 'मुख्य सामग्रीमा जानुहोस्' },
    nav: { about: 'परिचय', research: 'अनुसन्धान', expertise: 'दक्षता', writing: 'लेखन', contact: 'सम्पर्क' },
    hero: { eyebrow: 'नेपालबाट विश्वस्तरीय अनुसन्धानतर्फ', nameKicker: 'औपचारिक अनुसन्धान पोर्टफोलियो', name: 'Bhijan Neupane', roles: 'सामग्री वैज्ञानिक <span>|</span> सफ्टवेयर इन्जिनियर <span>|</span> क्वान्टम उत्साही', statement: 'पदार्थको संरचनादेखि <em>प्रविधिको सम्भावना</em> सम्म।', description: 'Bhijan Neupane सामग्री विज्ञान, न्यानोप्रविधि र कम्प्युटेशनल मोडेलिङको संगममा समाधानमुखी अनुसन्धान गर्छन्।', primaryCta: 'प्रकाशनहरू हेर्नुहोस्', secondaryCta: 'सम्पर्क गर्नुहोस्', scroll: 'अन्वेषण सुरु गर्नुहोस्' },
    identity: { affiliationLabel: 'सम्बद्धता', affiliation: 'नेपाल विज्ञान तथा प्रविधि प्रतिष्ठान (NAST)', roleLabel: 'भूमिका', role: 'अनुसन्धानकर्ता तथा पीएचडी आकांक्षी', focusLabel: 'केन्द्रित क्षेत्र', focus: 'कार्यात्मक सामग्री र कम्प्युटेशनल रसायन' },
    about: { eyebrow: 'परिचय', title: 'जटिल वैज्ञानिक प्रश्नलाई <em>मापनयोग्य अन्तर्दृष्टिमा</em> रूपान्तरण गर्दै।', p1: 'म भिजन न्यौपाने, नेपाल विज्ञान तथा प्रविधि प्रतिष्ठान (NAST) सँग आबद्ध अनुसन्धानकर्ता तथा पीएचडी आकांक्षी हुँ। मेरो अनुसन्धानले संरचना–गुण सम्बन्ध, ऊर्जा तथा आवेश स्थानान्तरण, र स्पेक्ट्रोस्कोपी-समर्थित सैद्धान्तिक व्याख्यालाई एकीकृत गर्छ।', p2: 'मुख्य रूपमा कार्यात्मक न्यानोमटेरियल, हेटरोजङ्क्सन-आधारित फोटोक्याटालिस्ट, हरित संश्लेषण, र DFT-सहायित आणविक मोडेलिङमा केन्द्रित छु। मेरो उद्देश्य प्रयोगात्मक प्रमाण र कम्प्युटेशनल पूर्वानुमानलाई जोडेर वातावरणीय तथा औषधीय चुनौतीका लागि विश्वसनीय समाधान निर्माण गर्नु हो।', link: 'मेरो ResearchGate प्रोफाइल हेर्नुहोस्' },
    stats: { domains: 'अन्तर्विषयक अनुसन्धान क्षेत्र', publications: 'मुख्य प्रकाशन र प्रिप्रिन्ट', methods: 'पूरक विश्लेषणात्मक विधि' },
    research: { eyebrow: 'चयनित अनुसन्धान', title: 'प्रमाणमा आधारित, <em>आगामी सम्भावनाप्रति</em> उन्मुख।', all: 'Google Scholar मा सबै हेर्नुहोस्', loading: 'प्रकाशनहरू लोड हुँदैछन्…', synced: 'Google Scholar स्रोतसँग समक्रमित प्रकाशन सूची', fallback: 'सुरक्षित प्रकाशन सूची प्रदर्शन गरिँदैछ', read: 'प्रकाशन खोल्नुहोस्', originalTitle: 'मूल प्रकाशन शीर्षक', citations: 'उद्धरण' },
    expertise: { eyebrow: 'अनुसन्धान क्षमता', title: 'विज्ञान, गणना र <em>डिजिटल निर्माण</em> को संयोजन।', cards: { materials: { title: 'सामग्री विज्ञान', text: 'न्यानोमटेरियल, क्रिस्टल इन्जिनियरिङ, हेटरोजङ्क्सन र हरित संश्लेषण।' }, quantum: { title: 'कम्प्युटेशनल रसायन', text: 'DFT गणना, इलेक्ट्रोनिक संरचना, टोपोलोजिकल र आणविक रिएक्टिभिटी विश्लेषण।' }, characterisation: { title: 'विश्लेषण तथा विशेषता निर्धारण', text: 'XRD, FT-IR, UV–Vis, FESEM–EDX र डेटा-आधारित संरचनात्मक व्याख्या।' }, software: { title: 'सफ्टवेयर तथा एआई', text: 'Python, वेब प्रविधि, एआई/एमएल र अनुसन्धानका लागि स्वचालित कार्यप्रवाह।' } } },
    writing: { eyebrow: 'वैज्ञानिक सञ्चार', title: 'अनुसन्धानलाई <em>स्पष्ट, उपयोगी र पहुँचयोग्य</em> बनाउँदै।', description: 'म HackerNoon मा विज्ञान, ब्लकचेन, विकेन्द्रीकृत प्रविधि, एआई र भविष्यका डिजिटल प्रणालीबारे प्राविधिक लेखहरू प्रकाशित गर्छु।', cta: 'HackerNoon मा लेखहरू पढ्नुहोस्', items: { one: 'विकेन्द्रीकृत इन्टरनेट र डिजिटल समावेशिता', two: 'Web3, ब्लकचेन र वित्तीय पहुँच', three: 'एआई, कम्प्युटिङ र उदीयमान विज्ञान' } },
    contact: { eyebrow: 'सम्पर्क तथा सहकार्य', title: 'एउटा सार्थक <em>अनुसन्धान संवाद</em> सुरु गरौँ।', description: 'अनुसन्धान सहकार्य, कम्प्युटेशनल विश्लेषण, सामग्री विशेषता निर्धारण वा वैज्ञानिक सञ्चारका लागि सम्पर्क गर्नुहोस्।' },
    footer: { description: 'सामग्री, मोडेल र विचारलाई प्रमाण-आधारित नवप्रवर्तनमा रूपान्तरण गर्दै।', rights: 'सर्वाधिकार सुरक्षित।' }
  },
  en: {
    accessibility: { skip: 'Skip to main content' },
    nav: { about: 'About', research: 'Research', expertise: 'Expertise', writing: 'Writing', contact: 'Contact' },
    hero: { eyebrow: 'Research from Nepal, with global relevance', nameKicker: 'Official research portfolio', name: 'Bhijan Neupane', roles: 'Materials Scientist <span>|</span> Software Engineer <span>|</span> Quantum Enthusiast', statement: 'From material structure to <em>technological possibility</em>.', description: 'Bhijan Neupane works at the intersection of materials science, nanotechnology, and computational modelling to develop evidence-led solutions.', primaryCta: 'Explore publications', secondaryCta: 'Start a conversation', scroll: 'Start exploring' },
    identity: { affiliationLabel: 'Affiliation', affiliation: 'Nepal Academy of Science and Technology (NAST)', roleLabel: 'Role', role: 'Researcher & PhD Aspirant', focusLabel: 'Research focus', focus: 'Functional materials & computational chemistry' },
    about: { eyebrow: 'About', title: 'Turning complex scientific questions into <em>measurable insight</em>.', p1: 'I am Bhijan Neupane, a researcher and PhD aspirant affiliated with the Nepal Academy of Science and Technology (NAST). My work integrates structure–property relationships, energy and charge-transfer phenomena, and spectroscopy-supported theoretical interpretation.', p2: 'I focus on functional nanomaterials, heterojunction-based photocatalysts, green synthesis, and DFT-assisted molecular modelling. My objective is to connect experimental evidence with computational prediction and develop reliable responses to environmental and pharmaceutical challenges.', link: 'View my ResearchGate profile' },
    stats: { domains: 'interdisciplinary research domains', publications: 'key publications & preprints', methods: 'complementary analytical methods' },
    research: { eyebrow: 'Selected research', title: 'Evidence-led work, <em>oriented toward what is next</em>.', all: 'View all on Google Scholar', loading: 'Loading publications…', synced: 'Publication list synchronised with the Google Scholar source', fallback: 'Displaying the secure publication snapshot', read: 'Open publication', originalTitle: 'Original publication title', citations: 'citations' },
    expertise: { eyebrow: 'Research capability', title: 'Bringing together science, computation and <em>digital making</em>.', cards: { materials: { title: 'Materials science', text: 'Nanomaterials, crystal engineering, heterojunctions, and green synthesis.' }, quantum: { title: 'Computational chemistry', text: 'DFT calculations, electronic structure, topological analysis, and molecular reactivity.' }, characterisation: { title: 'Characterisation', text: 'XRD, FT-IR, UV–Vis, FESEM–EDX, and evidence-led structural interpretation.' }, software: { title: 'Software & AI', text: 'Python, web technologies, AI/ML, and automated research workflows.' } } },
    writing: { eyebrow: 'Scientific communication', title: 'Making research <em>clear, useful, and accessible</em>.', description: 'I publish technical writing on science, blockchain, decentralised technology, AI, and future digital systems through HackerNoon.', cta: 'Read on HackerNoon', items: { one: 'Decentralised internet & digital inclusion', two: 'Web3, blockchain & financial access', three: 'AI, computing & emerging science' } },
    contact: { eyebrow: 'Contact & collaboration', title: 'Let’s begin a meaningful <em>research conversation</em>.', description: 'Reach out for research collaboration, computational analysis, materials characterisation, or scientific communication.' },
    footer: { description: 'Transforming materials, models, and ideas into evidence-based innovation.', rights: 'All rights reserved.' }
  }
};

let activeLanguage = localStorage.getItem('bn-portfolio-language-v2') || 'en';
let publicationData = null;

const getNested = (object, path) => path.split('.').reduce((value, key) => value?.[key], object);
const escapeHtml = (value = '') => String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[char]));

function applyLanguage(language) {
  activeLanguage = language;
  localStorage.setItem('bn-portfolio-language-v2', language);
  document.documentElement.lang = language;
  document.documentElement.dataset.language = language;
  document.title = language === 'ne' ? 'भिजन न्यौपाने | अनुसन्धान पोर्टफोलियो' : 'Bhijan Neupane | Research Portfolio';
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const value = getNested(translations[language], element.dataset.i18n);
    if (value) element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(element => {
    const value = getNested(translations[language], element.dataset.i18nHtml);
    if (value) element.innerHTML = value;
  });
  const toggle = document.querySelector('.language-switch');
  toggle?.setAttribute('aria-label', language === 'ne' ? 'Switch to English' : 'Switch to Nepali');
  toggle?.querySelector('.language-target')?.replaceChildren(document.createTextNode(language === 'ne' ? 'English' : 'नेपाली'));
  toggle?.querySelector('.language-current')?.replaceChildren(document.createTextNode(language === 'ne' ? 'ने' : 'EN'));
  renderPublications();
}

function publicationCopy(publication, key) {
  const value = publication?.[key];
  if (typeof value === 'object' && value !== null) return value[activeLanguage] || value.en || value.ne || '';
  return value || '';
}

function formatDate(value) {
  if (!value) return '';
  const parsed = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return value;
  return new Intl.DateTimeFormat(activeLanguage === 'ne' ? 'ne-NP' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(parsed);
}

function renderPublications() {
  const list = document.getElementById('publications-list');
  const status = document.getElementById('publication-status');
  if (!list || !publicationData) return;
  const researchText = translations[activeLanguage].research;
  const publications = (publicationData.publications || []).slice(0, 8);
  if (!publications.length) {
    list.innerHTML = `<p class="publication-empty">${escapeHtml(activeLanguage === 'ne' ? 'अहिलेसम्म प्रदर्शन गर्न प्रकाशन उपलब्ध छैन।' : 'No publications are available to display yet.')}</p>`;
    return;
  }
  list.innerHTML = publications.map((publication, index) => {
    const title = publicationCopy(publication, 'title');
    const originalTitle = publication.title?.en || publication.title || title;
    const description = publicationCopy(publication, 'description');
    const venue = publication.venue || publication.source || '';
    const citations = Number.isFinite(Number(publication.citations)) ? Number(publication.citations) : null;
    const isTranslated = activeLanguage === 'ne' && title && title !== originalTitle;
    const url = publication.url || PROFILE.scholar;
    return `<a class="publication-card reveal is-visible" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(researchText.read)}: ${escapeHtml(title)}">
      <div class="publication-top"><span>${escapeHtml(publication.type || 'Publication')}</span><span class="publication-year">${escapeHtml(publication.year || '')}</span></div>
      <h3>${escapeHtml(title)}</h3>
      ${isTranslated ? `<p><strong>${escapeHtml(researchText.originalTitle)}:</strong> ${escapeHtml(originalTitle)}</p>` : (description ? `<p>${escapeHtml(description)}</p>` : '')}
      <div class="publication-bottom"><span class="publication-venue">${escapeHtml(venue)}${citations !== null ? ` · ${citations} ${escapeHtml(researchText.citations)}` : ''}</span><span class="publication-arrow"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"/></svg></span></div>
    </a>`;
  }).join('');
  const updatedAt = formatDate(publicationData.updatedAt);
  status.classList.remove('is-error');
  status.textContent = `${researchText.synced}${updatedAt ? ` · ${updatedAt}` : ''}`;
}

async function loadPublications() {
  const status = document.getElementById('publication-status');
  try {
    const response = await fetch('data/publications.json', { cache: 'no-store' });
    if (!response.ok) throw new Error(`Publication feed error: ${response.status}`);
    publicationData = await response.json();
    renderPublications();
  } catch (error) {
    if (status) {
      status.classList.add('is-error');
      status.textContent = translations[activeLanguage].research.fallback;
    }
    console.warn('Unable to load publication feed:', error);
  }
}

function setupNavigation() {
  const header = document.getElementById('site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const navPanel = document.querySelector('.nav-panel');
  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 20);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
  navToggle?.addEventListener('click', () => {
    const open = navPanel.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('no-scroll', open);
  });
  navPanel?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navPanel.classList.remove('is-open'); navToggle?.classList.remove('is-open'); navToggle?.setAttribute('aria-expanded', 'false'); document.body.classList.remove('no-scroll');
  }));
}

function setupReveal() {
  const items = document.querySelectorAll('.reveal:not(.is-visible)');
  if (!('IntersectionObserver' in window)) { items.forEach(item => item.classList.add('is-visible')); return; }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: .14 });
  items.forEach(item => observer.observe(item));
}

function setupCounters() {
  const counters = document.querySelectorAll('.stat-number');
  const animate = element => {
    const target = Number(element.dataset.count || 0); const duration = 850; const start = performance.now();
    const tick = now => { const progress = Math.min((now - start) / duration, 1); element.textContent = Math.floor(target * (1 - Math.pow(1 - progress, 3))); if (progress < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  };
  if (!('IntersectionObserver' in window)) { counters.forEach(animate); return; }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { animate(entry.target); observer.unobserve(entry.target); } }), { threshold: .6 });
  counters.forEach(counter => observer.observe(counter));
}

function setupTilt() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('pointermove', event => {
      const box = card.getBoundingClientRect(); const x = (event.clientX - box.left) / box.width - .5; const y = (event.clientY - box.top) / box.height - .5;
      card.style.transform = `perspective(700px) rotateX(${-y * 6}deg) rotateY(${x * 7}deg) translateY(-4px)`;
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });
}

function setupMagnetic() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('(pointer: coarse)').matches) return;
  document.querySelectorAll('.magnetic').forEach(item => {
    item.addEventListener('pointermove', event => { const rect = item.getBoundingClientRect(); const x = event.clientX - rect.left - rect.width / 2; const y = event.clientY - rect.top - rect.height / 2; item.style.transform = `translate(${x * .08}px, ${y * .08}px)`; });
    item.addEventListener('pointerleave', () => { item.style.transform = ''; });
  });
}

function setupCanvas() {
  const canvas = document.getElementById('quantum-canvas');
  if (!canvas) return;
  const context = canvas.getContext('2d');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
  let width = 0;
  let height = 0;
  let stars = [];
  let galaxies = [];
  let shootingStars = [];
  let cursor = { x: .5, y: .5 };
  let lastShotAt = 0;
  let frame = 0;

  const palette = [
    [0, 245, 255],
    [255, 0, 255],
    [255, 215, 0],
    [176, 196, 255],
    [255, 255, 255]
  ];

  function makeGalaxy(x, y, radius, direction, hue) {
    const points = [];
    const arms = 4;
    const pointCount = Math.max(72, Math.round(radius * .72));
    for (let index = 0; index < pointCount; index += 1) {
      const progress = Math.pow(Math.random(), .72);
      const arm = Math.floor(Math.random() * arms);
      const angle = arm * (Math.PI * 2 / arms) + progress * 5.8 + (Math.random() - .5) * .52;
      const distance = progress * radius * (0.18 + Math.random() * .92);
      points.push({
        angle,
        distance,
        radius: Math.random() * 1.15 + .22,
        alpha: .07 + (1 - progress) * .44,
        phase: Math.random() * Math.PI * 2,
        color: palette[(index + hue) % palette.length]
      });
    }
    return { x, y, radius, direction, hue, rotation: Math.random() * Math.PI * 2, points };
  }

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 1.65);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    const starCount = Math.max(95, Math.min(Math.round((width * height) / 9000), 220));
    stars = Array.from({ length: starCount }, (_, index) => {
      const color = palette[index % palette.length];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.45 + .18,
        twinkle: Math.random() * Math.PI * 2,
        speed: Math.random() * .012 + .004,
        driftX: (Math.random() - .5) * .028,
        driftY: (Math.random() - .5) * .028,
        color,
        baseAlpha: Math.random() * .55 + .2
      };
    });
    const largeRadius = Math.max(150, Math.min(width, height) * .27);
    galaxies = [
      makeGalaxy(width * .14, height * .22, largeRadius, 1, 0),
      makeGalaxy(width * .88, height * .70, largeRadius * .72, -1, 2)
    ];
  }

  function drawNebula(x, y, radius, rgb, alpha) {
    const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`);
    gradient.addColorStop(.34, `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha * .26})`);
    gradient.addColorStop(1, `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0)`);
    context.fillStyle = gradient;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
  }

  function drawGalaxy(galaxy, elapsed) {
    context.save();
    const parallaxX = (cursor.x - .5) * galaxy.radius * .08;
    const parallaxY = (cursor.y - .5) * galaxy.radius * .06;
    context.translate(galaxy.x + parallaxX, galaxy.y + parallaxY);
    context.rotate(galaxy.rotation + elapsed * .000025 * galaxy.direction);
    context.globalCompositeOperation = 'lighter';

    const cloud = context.createRadialGradient(0, 0, 1, 0, 0, galaxy.radius * .92);
    const cloudColor = palette[galaxy.hue % palette.length];
    cloud.addColorStop(0, `rgba(${cloudColor[0]}, ${cloudColor[1]}, ${cloudColor[2]}, .12)`);
    cloud.addColorStop(.34, `rgba(${cloudColor[0]}, ${cloudColor[1]}, ${cloudColor[2]}, .035)`);
    cloud.addColorStop(1, `rgba(${cloudColor[0]}, ${cloudColor[1]}, ${cloudColor[2]}, 0)`);
    context.fillStyle = cloud;
    context.beginPath();
    context.ellipse(0, 0, galaxy.radius, galaxy.radius * .52, 0, 0, Math.PI * 2);
    context.fill();

    galaxy.points.forEach(point => {
      const rotation = elapsed * .000035 * galaxy.direction * (1 - point.distance / galaxy.radius);
      const angle = point.angle + rotation;
      const x = Math.cos(angle) * point.distance;
      const y = Math.sin(angle) * point.distance * .48;
      const shimmer = Math.sin(elapsed * .0012 + point.phase) * .18 + .82;
      const [r, g, b] = point.color;
      context.fillStyle = `rgba(${r}, ${g}, ${b}, ${point.alpha * shimmer})`;
      context.beginPath();
      context.arc(x, y, point.radius, 0, Math.PI * 2);
      context.fill();
    });

    const core = context.createRadialGradient(-galaxy.radius * .08, -galaxy.radius * .1, 0, 0, 0, galaxy.radius * .19);
    core.addColorStop(0, 'rgba(255, 255, 255, .92)');
    core.addColorStop(.2, 'rgba(255, 215, 0, .72)');
    core.addColorStop(.56, 'rgba(255, 0, 255, .18)');
    core.addColorStop(1, 'rgba(0, 245, 255, 0)');
    context.fillStyle = core;
    context.beginPath();
    context.arc(0, 0, galaxy.radius * .2, 0, Math.PI * 2);
    context.fill();
    context.restore();
  }

  function drawStars(elapsed) {
    context.globalCompositeOperation = 'lighter';
    stars.forEach(star => {
      if (!reducedMotion) {
        star.x += star.driftX;
        star.y += star.driftY;
        if (star.x < -2) star.x = width + 2;
        if (star.x > width + 2) star.x = -2;
        if (star.y < -2) star.y = height + 2;
        if (star.y > height + 2) star.y = -2;
      }
      const twinkle = .68 + Math.sin(elapsed * star.speed + star.twinkle) * .32;
      const [r, g, b] = star.color;
      context.fillStyle = `rgba(${r}, ${g}, ${b}, ${star.baseAlpha * twinkle})`;
      context.beginPath();
      context.arc(star.x, star.y, star.radius * twinkle, 0, Math.PI * 2);
      context.fill();
      if (star.radius > 1.23 && twinkle > .91) {
        context.strokeStyle = `rgba(${r}, ${g}, ${b}, ${star.baseAlpha * .38})`;
        context.lineWidth = .45;
        context.beginPath();
        context.moveTo(star.x - star.radius * 2.2, star.y);
        context.lineTo(star.x + star.radius * 2.2, star.y);
        context.moveTo(star.x, star.y - star.radius * 2.2);
        context.lineTo(star.x, star.y + star.radius * 2.2);
        context.stroke();
      }
    });
  }

  function drawShootingStars(elapsed) {
    if (!reducedMotion && elapsed - lastShotAt > 4500 + Math.random() * 5000 && shootingStars.length < 2) {
      shootingStars.push({ x: Math.random() * width * .72, y: Math.random() * height * .48, life: 0, duration: 850 + Math.random() * 700, length: 80 + Math.random() * 105 });
      lastShotAt = elapsed;
    }
    shootingStars = shootingStars.filter(star => {
      star.life += 16.7;
      const progress = Math.min(star.life / star.duration, 1);
      const x = star.x + progress * star.length * .74;
      const y = star.y + progress * star.length * .42;
      const gradient = context.createLinearGradient(x - star.length, y - star.length * .57, x, y);
      gradient.addColorStop(0, 'rgba(0,245,255,0)');
      gradient.addColorStop(.6, 'rgba(255,0,255,.06)');
      gradient.addColorStop(1, `rgba(255,215,0,${(1 - progress) * .9})`);
      context.strokeStyle = gradient;
      context.lineWidth = 1.2;
      context.beginPath();
      context.moveTo(x - star.length, y - star.length * .57);
      context.lineTo(x, y);
      context.stroke();
      return progress < 1;
    });
  }

  function draw(elapsed = 0) {
    context.clearRect(0, 0, width, height);
    context.globalCompositeOperation = 'source-over';
    drawNebula(width * .19, height * .33, Math.max(width, height) * .52, [0, 245, 255], .055);
    drawNebula(width * .80, height * .62, Math.max(width, height) * .46, [255, 0, 255], .052);
    drawNebula(width * .57, height * .08, Math.max(width, height) * .32, [255, 215, 0], .03);
    galaxies.forEach(galaxy => drawGalaxy(galaxy, elapsed));
    drawStars(elapsed);
    drawShootingStars(elapsed);
    frame = requestAnimationFrame(draw);
  }

  resize();
  if (reducedMotion) draw(0); else frame = requestAnimationFrame(draw);
  window.addEventListener('resize', () => {
    window.cancelAnimationFrame(frame);
    resize();
    if (reducedMotion) draw(0); else frame = requestAnimationFrame(draw);
  }, { passive: true });
  if (!coarsePointer) window.addEventListener('pointermove', event => {
    cursor = { x: event.clientX / Math.max(width, 1), y: event.clientY / Math.max(height, 1) };
  }, { passive: true });
}
function setupProgress() {
  const progress = document.querySelector('.scroll-progress span');
  const update = () => { const scrollable = document.documentElement.scrollHeight - window.innerHeight; const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0; if (progress) progress.style.width = `${Math.min(100, percent)}%`; };
  update(); window.addEventListener('scroll', update, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('current-year').textContent = new Date().getFullYear();
  applyLanguage(activeLanguage);
  document.querySelector('.language-switch')?.addEventListener('click', () => applyLanguage(activeLanguage === 'ne' ? 'en' : 'ne'));
  setupNavigation(); setupReveal(); setupCounters(); setupTilt(); setupMagnetic(); setupCanvas(); setupProgress(); loadPublications();
  window.setTimeout(() => document.querySelector('.site-loader')?.classList.add('is-hidden'), 420);
});
