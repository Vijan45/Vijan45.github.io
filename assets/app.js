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
    hero: { eyebrow: 'नेपालबाट विश्वस्तरीय अनुसन्धानतर्फ', title: 'पदार्थको संरचनादेखि <em>प्रविधिको सम्भावना</em> सम्म।', description: 'भिजन न्यौपाने सामग्री विज्ञान, न्यानोप्रविधि र कम्प्युटेशनल मोडेलिङको संगममा समाधानमुखी अनुसन्धान गर्छन्।', primaryCta: 'प्रकाशनहरू हेर्नुहोस्', secondaryCta: 'सम्पर्क गर्नुहोस्', scroll: 'अन्वेषण सुरु गर्नुहोस्' },
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
    hero: { eyebrow: 'Research from Nepal, with global relevance', title: 'From material structure to <em>technological possibility</em>.', description: 'Bhijan Neupane works at the intersection of materials science, nanotechnology, and computational modelling to develop evidence-led solutions.', primaryCta: 'Explore publications', secondaryCta: 'Start a conversation', scroll: 'Start exploring' },
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

let activeLanguage = localStorage.getItem('bn-language') || 'ne';
let publicationData = null;

const getNested = (object, path) => path.split('.').reduce((value, key) => value?.[key], object);
const escapeHtml = (value = '') => String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[char]));

function applyLanguage(language) {
  activeLanguage = language;
  localStorage.setItem('bn-language', language);
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
  toggle?.setAttribute('aria-label', language === 'ne' ? 'Switch to English' : 'नेपालीमा परिवर्तन गर्नुहोस्');
  toggle?.querySelector('.language-label')?.replaceChildren(document.createTextNode(language === 'ne' ? 'EN' : 'ने'));
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
  const canvas = document.getElementById('quantum-canvas'); if (!canvas) return;
  const context = canvas.getContext('2d'); const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let width = 0; let height = 0; let points = [];
  function resize() { const ratio = Math.min(window.devicePixelRatio || 1, 1.5); width = canvas.width = Math.floor(window.innerWidth * ratio); height = canvas.height = Math.floor(window.innerHeight * ratio); canvas.style.width = `${window.innerWidth}px`; canvas.style.height = `${window.innerHeight}px`; context.setTransform(ratio, 0, 0, ratio, 0, 0); const count = Math.min(Math.round(window.innerWidth / 18), 75); points = Array.from({ length: count }, () => ({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, vx: (Math.random() - .5) * .18, vy: (Math.random() - .5) * .18, r: Math.random() * 1.2 + .4 })); }
  function draw() { const viewportWidth = window.innerWidth; const viewportHeight = window.innerHeight; context.clearRect(0, 0, viewportWidth, viewportHeight); context.fillStyle = 'rgba(144, 216, 255, .43)'; points.forEach((point, index) => { if (!reducedMotion) { point.x += point.vx; point.y += point.vy; if (point.x < 0 || point.x > viewportWidth) point.vx *= -1; if (point.y < 0 || point.y > viewportHeight) point.vy *= -1; } context.beginPath(); context.arc(point.x, point.y, point.r, 0, Math.PI * 2); context.fill(); for (let j = index + 1; j < points.length; j += 1) { const other = points[j]; const distance = Math.hypot(point.x - other.x, point.y - other.y); if (distance < 114) { context.beginPath(); context.strokeStyle = `rgba(113, 190, 255, ${(1 - distance / 114) * .13})`; context.lineWidth = .6; context.moveTo(point.x, point.y); context.lineTo(other.x, other.y); context.stroke(); } } }); if (!reducedMotion) requestAnimationFrame(draw); }
  resize(); draw(); window.addEventListener('resize', resize, { passive: true });
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
