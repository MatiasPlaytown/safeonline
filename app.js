// ============================================================
// SAFEONLINE — app.js
// Todo el JS del sitio: íconos, utils, estado local, capa de contenido
// (WordPress, o content-seed.js mientras no exista), motores diarios,
// Puntuación de seguridad, renderers, init de cada página y validación de ANI.
// ============================================================

// ───────────────────────── ICONS ─────────────────────────

const svg = (body, extra = '') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${extra}>${body}</svg>`;

const ICONS = {
  home: svg('<path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-9.5z"/>'),
  shield: svg('<path d="M12 2.8l8 3v6c0 5-3.4 8.6-8 9.9-4.6-1.3-8-4.9-8-9.9v-6l8-3z"/>'),
  shieldCheck: svg('<path d="M12 2.8l8 3v6c0 5-3.4 8.6-8 9.9-4.6-1.3-8-4.9-8-9.9v-6l8-3z"/><path d="M8.6 12.2l2.4 2.4 4.6-4.8"/>'),
  user: svg('<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.5-7 8-7s8 3 8 7"/>'),
  users: svg('<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6.3 6.5-6.3s6.5 2.7 6.5 6.3"/><circle cx="17" cy="7.5" r="2.7"/><path d="M16.5 13.4c3 .1 5.2 2.6 5.2 5.8"/>'),
  bell: svg('<path d="M6 8a6 6 0 0 1 12 0c0 5 2 6.5 2 6.5H4S6 13 6 8"/><path d="M10 19a2 2 0 0 0 4 0"/>'),
  search: svg('<circle cx="11" cy="11" r="7"/><path d="M20.5 20.5L16 16"/>'),
  back: svg('<path d="M15 18l-6-6 6-6"/>', ' stroke-width="2.2"'),
  chevron: svg('<path d="M9 6l6 6-6 6"/>', ' stroke-width="2.2"'),
  star: svg('<path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8L12 3z"/>'),
  starFill: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8L12 3z"/></svg>',
  check: svg('<path d="M4.5 12.5l4.5 4.5L19.5 6.5"/>', ' stroke-width="2.6"'),
  checkCircle: svg('<circle cx="12" cy="12" r="9.5"/><path d="M8 12.3l2.7 2.7L16.2 9.4"/>'),
  close: svg('<path d="M6 6l12 12M18 6L6 18"/>', ' stroke-width="2.4"'),
  x: svg('<path d="M7 7l10 10M17 7L7 17"/>', ' stroke-width="2.8"'),
  alert: svg('<path d="M12 3.5L2.5 20h19L12 3.5z"/><path d="M12 10v4.5"/><path d="M12 17.3h.01"/>', ' stroke-width="2.2"'),
  info: svg('<circle cx="12" cy="12" r="9.5"/><path d="M12 11v5.5"/><path d="M12 7.6h.01"/>'),
  clock: svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  edit: svg('<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>'),
  trash: svg('<path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>'),
  history: svg('<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 7.5V12l3 2"/>'),
  moon: svg('<path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/>'),
  database: svg('<ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>'),
  sparkle: svg('<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z"/>'),
  arrow: svg('<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>'),
  phoneCall: svg('<path d="M21 16.5v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.1 3.7 2 2 0 0 1 3.1 1.5h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L7 9.4a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>'),
  link: svg('<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>'),
  // Íconos de consejos / temas
  key: svg('<circle cx="7.5" cy="15.5" r="4.5"/><path d="M10.7 12.3L20 3"/><path d="M16 7l3 3"/><path d="M18.5 4.5l2 2"/>'),
  fingerprint: svg('<path d="M12 11v3.5a8 8 0 0 1-1.5 4.7"/><path d="M8.5 9.5a3.5 3.5 0 0 1 7 0v3a12 12 0 0 1-.8 4.5"/><path d="M5.5 13V9.5a6.5 6.5 0 0 1 11.6-4"/><path d="M18.5 9v2.5c0 3-.6 5.6-1.6 7.7"/><path d="M5.6 16.5a10 10 0 0 0 1.4 3"/>'),
  lock: svg('<rect x="4.5" y="10.5" width="15" height="10.5" rx="2.2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/><path d="M12 14.5v2.5"/>'),
  eye: svg('<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'),
  mail: svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/>'),
  phone: svg('<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M11 18.5h2"/>'),
  wifi: svg('<path d="M2 8.8a15 15 0 0 1 20 0"/><path d="M5 12.3a10.5 10.5 0 0 1 14 0"/><path d="M8.5 15.8a5.5 5.5 0 0 1 7 0"/><path d="M12 19.5h.01"/>'),
  broom: svg('<path d="M19.5 3l-7.3 7.3"/><path d="M10.6 9.6l3.8 3.8"/><path d="M9.3 10.9C6.2 11.6 4 13.5 3 17l3.6 3.9c3.5-1 5.4-3.2 6.1-6.3"/><path d="M6.5 15.5l2 2"/>'),
  card: svg('<rect x="2.5" y="5" width="19" height="14" rx="2.2"/><path d="M2.5 10h19"/><path d="M6.5 15h3"/>'),
  gamepad: svg('<path d="M6.5 7h11a4.5 4.5 0 0 1 4.4 5.5l-1 4.5a2.7 2.7 0 0 1-4.6 1.2L14 16h-4l-2.3 2.2A2.7 2.7 0 0 1 3.1 17l-1-4.5A4.5 4.5 0 0 1 6.5 7z"/><path d="M7.5 10.5v3M6 12h3"/><path d="M15.5 11h.01M17.5 13h.01"/>'),
  chat: svg('<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4h0A1.5 1.5 0 0 1 4 14.5v-9z"/><path d="M8.5 8.5h7M8.5 11.5h4.5"/>'),
  coin: svg('<ellipse cx="12" cy="7" rx="7.5" ry="3.5"/><path d="M4.5 7v5c0 1.9 3.4 3.5 7.5 3.5s7.5-1.6 7.5-3.5V7"/><path d="M4.5 12v5c0 1.9 3.4 3.5 7.5 3.5s7.5-1.6 7.5-3.5v-5"/>'),
  download: svg('<path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17"/>'),
  qr: svg('<rect x="3.5" y="3.5" width="6.5" height="6.5" rx="1"/><rect x="14" y="3.5" width="6.5" height="6.5" rx="1"/><rect x="3.5" y="14" width="6.5" height="6.5" rx="1"/><path d="M14 14h2.5v2.5H14zM18 18h2.5v2.5H18zM14 18.5v2M18.5 14h2"/>'),
  globe: svg('<circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19"/><path d="M12 2.5c2.7 2.8 4 6 4 9.5s-1.3 6.7-4 9.5c-2.7-2.8-4-6-4-9.5s1.3-6.7 4-9.5z"/>'),
};

// ───────────────────────── UTILS ─────────────────────────

function escapeHtml(str) {
  return String(str ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function pad2(n) { return String(n).padStart(2, '0'); }

function dateKey(d = new Date()) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

function parseKey(key) {
  const d = new Date(String(key) + 'T00:00:00');
  return isNaN(d.getTime()) ? null : d;
}

function addDays(d, n) {
  const out = new Date(d);
  out.setDate(out.getDate() + n);
  return out;
}

// Días calendario entre dos claves 'YYYY-MM-DD' (b - a).
function daysBetween(a, b) {
  const da = parseKey(a);
  const db = parseKey(b);
  if (!da || !db) return 0;
  return Math.round((db - da) / 86400000);
}

const MONTHS = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

function fmtShortDate(key) {
  const d = parseKey(key);
  return d ? `${d.getDate()} ${MONTHS[d.getMonth()]}` : '';
}

function fmtAgo(key) {
  const n = daysBetween(key, dateKey());
  if (n <= 0) return 'Hoy';
  if (n === 1) return 'Ayer';
  if (n < 30) return `Hace ${n} días`;
  return fmtShortDate(key);
}

function greetingByHour() {
  const h = new Date().getHours();
  if (h < 6) return 'Buenas noches';
  if (h < 13) return 'Buenos días';
  if (h < 20) return 'Buenas tardes';
  return 'Buenas noches';
}

function qs(name) {
  return new URLSearchParams(location.search).get(name);
}

// Para buscar sin importar tildes ni mayúsculas.
function fold(s) {
  return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

let toastTimer;
function showToast(msg) {
  let el = document.querySelector('.toast');
  if (!el) {
    el = document.createElement('div');
    el.className = 'toast';
    el.setAttribute('role', 'status');
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}

// ───────────────────────── LOCAL STORAGE ─────────────────────────
// Toda la data del USUARIO vive acá — sin backend, sin cuenta. Se pierde si
// el usuario borra el caché o cambia de dispositivo (asumido por ahora).

const STORAGE_KEYS = {
  profile: 'so_profile',
  checks: 'so_checks',
  alertsRead: 'so_alerts_read',
  notes: 'so_notes',
  favorites: 'so_favorites',
  quiz: 'so_quiz',
  theme: 'so_theme',
  ani: 'so_ani',
};
const DEFAULT_PROFILE = { name: '', hasKids: true };

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function writeJson(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* modo privado / cuota */ }
}

function getProfile() { return Object.assign({}, DEFAULT_PROFILE, readJson(STORAGE_KEYS.profile, {})); }
function saveProfile(p) { writeJson(STORAGE_KEYS.profile, p); }

// Microchecks hechos: { [id]: 'YYYY-MM-DD' (día en que se marcó) }.
function getChecksLog() { return readJson(STORAGE_KEYS.checks, {}); }
function setCheckDone(id, done) {
  const log = getChecksLog();
  if (done) log[id] = dateKey(); else delete log[id];
  writeJson(STORAGE_KEYS.checks, log);
}

function getAlertsRead() { return readJson(STORAGE_KEYS.alertsRead, []); }
function markAlertRead(id) {
  const read = getAlertsRead();
  if (!read.includes(id)) { read.push(id); writeJson(STORAGE_KEYS.alertsRead, read); }
}

// Notas: { [id]: { openedAt: ISO, doneOn?: 'YYYY-MM-DD' } }.
function getNotesState() { return readJson(STORAGE_KEYS.notes, {}); }
function markNoteOpened(id) {
  const all = getNotesState();
  all[id] = Object.assign({}, all[id], { openedAt: new Date().toISOString() });
  writeJson(STORAGE_KEYS.notes, all);
}
function markNoteDone(id) {
  const all = getNotesState();
  all[id] = Object.assign({ openedAt: new Date().toISOString() }, all[id], { doneOn: dateKey() });
  writeJson(STORAGE_KEYS.notes, all);
}

function getFavorites() { return readJson(STORAGE_KEYS.favorites, []); }
function isFavorite(id) { return getFavorites().includes(id); }
function toggleFavorite(id) {
  const favs = getFavorites();
  const i = favs.indexOf(id);
  if (i >= 0) favs.splice(i, 1); else favs.unshift(id);
  writeJson(STORAGE_KEYS.favorites, favs);
  return i < 0;
}

// "¿Estafa o no?": { [día]: { caseId, correct } }.
function getQuizLog() { return readJson(STORAGE_KEYS.quiz, {}); }
function saveQuizAnswer(caseId, correct) {
  const log = getQuizLog();
  log[dateKey()] = { caseId, correct };
  writeJson(STORAGE_KEYS.quiz, log);
}

function resetLocalData() {
  Object.entries(STORAGE_KEYS).forEach(([k, key]) => { if (k !== 'ani') localStorage.removeItem(key); });
}

// ───────────────────────── TEMA (claro / oscuro) ─────────────────────────
// Por defecto sigue al sistema. El override manual se guarda como string
// plano en so_theme y lo aplica un script inline en el <head> (sin flash).

function systemPrefersDark() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function isDarkTheme() {
  const t = document.documentElement.dataset.theme;
  return t ? t === 'dark' : systemPrefersDark();
}

function setTheme(mode) {
  try { localStorage.setItem(STORAGE_KEYS.theme, mode); } catch (e) { /* sin storage */ }
  document.documentElement.dataset.theme = mode;
  syncThemeColor();
}

function syncThemeColor() {
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim() || '#f3f5f9';
}

// ───────────────────────── CONTENIDO ─────────────────────────
// Todo el contenido editorial va a vivir en WordPress y se trae por REST,
// igual que en Mis Gastos en Orden e Historias del Mundo: el JSON de cada post
// viaja en `mobile_content` y alcanza UNA llamada por categoría. Mientras el
// WordPress no exista, WP_ENABLED = false y se lee de content-seed.js, que
// tiene exactamente la misma forma.

const WP_ENABLED = false;
const API_BASE = 'https://contenidos.vip/safeonline/wp-json/api/v3/articles';
const WP_CATEGORY = {
  plataformas: 'plataformas',
  microchecks: 'microchecks',
  consejos: 'consejos',
  alertas: 'alertas',
  notas: 'notas',
  casos: 'casos-estafa',
  canales: 'canales-denuncia',
};
const API_PAGE_SIZE = 100;

async function apiFetchCategory(slug) {
  const out = [];
  for (let page = 1; page <= 10; page++) {
    const res = await fetch(`${API_BASE}/fulldata/category/${encodeURIComponent(slug)}?limit=${API_PAGE_SIZE}&page=${page}`);
    if (!res.ok) throw new Error(`HTTP ${res.status} al pedir "${slug}"`);
    const json = await res.json();
    const data = Array.isArray(json.data) ? json.data : [];
    out.push(...data);
    if (data.length < API_PAGE_SIZE) break;
  }
  return out;
}

// El JSON viaja en el cuerpo del post: puede llegar con una coma colgando o
// con comillas tipográficas si se pegó desde un procesador de texto.
function parseMobileContent(item) {
  let raw = (item && item.mobile_content) || '';
  if (raw.includes('<script')) raw = raw.replace(/^[\s\S]*?<script[^>]*>/i, '').replace(/<\/script>[\s\S]*$/i, '');
  const tries = [raw, raw.replace(/,(\s*[}\]])/g, '$1')];
  if (!raw.includes('"')) tries.push(raw.replace(/[“”]/g, '"').replace(/,(\s*[}\]])/g, '$1'));
  for (const t of tries) {
    try {
      const parsed = JSON.parse(t);
      if (parsed && typeof parsed === 'object') return parsed;
    } catch (e) { /* probamos la siguiente reparación */ }
  }
  console.warn('[contenido] No pude leer el JSON de la nota', item && item.id, item && item.title);
  return null;
}

// El plugin nunca manda `thumbnail` vacío: si no hay destacada, manda su
// placeholder, que hay que descartar para que se use el `image` del JSON.
function wpThumbnail(item) {
  const url = (item && item.thumbnail) || '';
  return /\/default_image\.(png|jpe?g)$/i.test(url) ? '' : url;
}

function toOrder(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : Number.MAX_SAFE_INTEGER;
}

// Devuelve [{ mc, item }] venga de donde venga, sin JSON roto ni ids repetidos.
async function fetchCollection(key) {
  let pairs;
  if (WP_ENABLED) {
    const raw = await apiFetchCategory(WP_CATEGORY[key]);
    pairs = raw.map((item) => ({ mc: parseMobileContent(item), item }));
  } else {
    pairs = (typeof CONTENT_SEED !== 'undefined' && CONTENT_SEED[key] || []).map((mc) => ({ mc, item: {} }));
  }
  const seen = new Set();
  return pairs.filter(({ mc }) => {
    if (!mc || !mc.id || seen.has(mc.id)) return false;
    seen.add(mc.id);
    return true;
  });
}

const strList = (v) => (Array.isArray(v) ? v.filter((s) => typeof s === 'string' && s.trim()) : []);
const areaOf = (v) => (v === 'familia' ? 'familia' : 'adultos');
const numOrNull = (v) => (v === null || v === undefined || v === '' || !Number.isFinite(Number(v)) ? null : Number(v));

const MAPPERS = {
  plataformas: ({ mc, item }) => ({
    id: mc.id,
    name: mc.name || item.title || '',
    kind: ['juego', 'red', 'dispositivo'].includes(mc.kind) ? mc.kind : 'juego',
    image: wpThumbnail(item) || mc.image || '',
    light: APP_DATA.lights[mc.light] ? mc.light : null,
    ageSuggested: numOrNull(mc.ageSuggested),
    minAge: numOrNull(mc.minAge),
    rating: { pegi: (mc.rating && mc.rating.pegi) || null, esrb: (mc.rating && mc.rating.esrb) || null },
    tagline: mc.tagline || '',
    risks: strList(mc.risks),
    checkIds: strList(mc.checkIds),
    order: toOrder(mc.order),
  }),
  microchecks: ({ mc, item }) => ({
    id: mc.id,
    area: areaOf(mc.area),
    topicId: mc.topicId || '',
    platformId: mc.platformId || null,
    title: mc.title || item.title || '',
    why: mc.why || '',
    steps: strList(mc.steps),
    minutes: Number(mc.minutes) || 2,
    points: Number(mc.points) || 10,
    renewDays: numOrNull(mc.renewDays),
    order: toOrder(mc.order),
  }),
  consejos: ({ mc, item }) => ({
    id: mc.id,
    area: areaOf(mc.area),
    icon: ICONS[mc.icon] ? mc.icon : 'shield',
    title: mc.title || item.title || '',
    text: mc.text || '',
    noteId: mc.noteId || null,
    order: toOrder(mc.order),
  }),
  alertas: ({ mc, item }) => ({
    id: mc.id,
    date: mc.date || '',
    expires: mc.expires || null,
    severity: mc.severity === 'urgente' ? 'urgente' : 'aviso',
    area: areaOf(mc.area),
    platformId: mc.platformId || null,
    title: mc.title || item.title || '',
    text: mc.text || '',
    noteId: mc.noteId || null,
    order: toOrder(mc.order),
  }),
  notas: ({ mc, item }) => ({
    id: mc.id,
    area: areaOf(mc.area),
    topicId: mc.topicId || '',
    platformId: mc.platformId || null,
    title: mc.title || item.title || '',
    excerpt: mc.excerpt || '',
    readMin: Number(mc.readMin) || 2,
    situation: mc.situation || '',
    steps: strList(mc.steps),
    why: mc.why || '',
    kids: mc.kids || '',
    checkIds: strList(mc.checkIds),
    order: toOrder(mc.order),
  }),
  casos: ({ mc }) => ({
    id: mc.id,
    channel: ['sms', 'whatsapp', 'mail'].includes(mc.channel) ? mc.channel : 'sms',
    sender: mc.sender || '',
    body: mc.body || '',
    isScam: mc.isScam === true,
    clues: strList(mc.clues),
    explanation: mc.explanation || '',
    order: toOrder(mc.order),
  }),
  canales: ({ mc }) => ({
    id: mc.id,
    country: String(mc.country || ''),
    name: mc.name || '',
    detail: mc.detail || '',
    phone: mc.phone || null,
    url: mc.url || null,
    order: toOrder(mc.order),
  }),
};

// Una sola pasada por categoría y por carga de página.
const CONTENT_CACHE = {};
function loadContent(key) {
  if (!CONTENT_CACHE[key]) {
    CONTENT_CACHE[key] = fetchCollection(key)
      .then((pairs) => pairs.map(MAPPERS[key]).sort((a, b) => a.order - b.order))
      .catch((e) => { delete CONTENT_CACHE[key]; throw e; });
  }
  return CONTENT_CACHE[key];
}

async function loadAll() {
  const keys = ['plataformas', 'microchecks', 'consejos', 'alertas', 'notas', 'casos', 'canales'];
  const [platforms, checks, tips, alerts, notes, cases, channels] = await Promise.all(keys.map(loadContent));
  const byId = (list) => Object.fromEntries(list.map((x) => [x.id, x]));
  return {
    platforms, checks, tips, alerts, notes, cases, channels,
    platformById: byId(platforms), checkById: byId(checks), noteById: byId(notes),
  };
}

function topicById(id) {
  return APP_DATA.topics.find((t) => t.id === id) || null;
}

// ───────────────────────── MOTORES DIARIOS ─────────────────────────
// Sin timers ni cron: lo del día es función pura de (pool, hoy). Todos los
// usuarios ven lo mismo el mismo día y recargar nunca lo cambia. `order`
// fija la rotación. Math.round() porque con el cambio de horario la resta no
// da un múltiplo exacto de 24 h.

const DAILY_EPOCH = new Date(2024, 0, 1);

function dayIndex(d = new Date()) {
  const local = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  return Math.round((local - DAILY_EPOCH) / 86400000);
}

function dailyPick(pool, d = new Date()) {
  if (!pool.length) return null;
  const n = pool.length;
  return pool[((dayIndex(d) % n) + n) % n];
}

function rotateFrom(list, first) {
  const i = Math.max(0, list.indexOf(first));
  return list.slice(i).concat(list.slice(0, i));
}

// Alertas: NO rotan. Son novedades con fecha: se muestra la más nueva sin
// leer. Una alerta con `expires` vencido deja de mostrarse.
function activeAlerts(alerts) {
  const today = dateKey();
  return alerts
    .filter((a) => (!a.expires || a.expires >= today) && (!a.date || a.date <= today))
    .sort((a, b) => (b.date || '').localeCompare(a.date || '') || a.order - b.order);
}

function unreadAlerts(alerts) {
  const read = getAlertsRead();
  return activeAlerts(alerts).filter((a) => !read.includes(a.id));
}

// Racha de aciertos en "¿Estafa o no?": días seguidos respondiendo bien.
// Si hoy todavía no respondió, la racha de ayer sigue viva.
function quizStreak() {
  const log = getQuizLog();
  let d = new Date();
  if (!log[dateKey(d)]) d = addDays(d, -1);
  let n = 0;
  while (log[dateKey(d)] && log[dateKey(d)].correct) { n++; d = addDays(d, -1); }
  return n;
}

// ───────────────────────── PUNTUACIÓN DE SEGURIDAD ─────────────────────────
// Pieza de identidad. Nada se guarda como contador: el puntaje se recalcula en
// cada carga desde so_checks + `renewDays` de cada microcheck. Los que vencen
// vuelven a pendiente y bajan el puntaje (mismo motor de recurrentes que los
// vencimientos de Mis Gastos en Orden).

// Estado de un microcheck: pending | done | soon (vence pronto) | expired.
function checkStatus(c, log = getChecksLog()) {
  const doneOn = log[c.id];
  if (!doneOn) return { state: 'pending' };
  if (!c.renewDays) return { state: 'done', doneOn };
  const due = dateKey(addDays(parseKey(doneOn), c.renewDays));
  const left = daysBetween(dateKey(), due);
  if (left <= 0) return { state: 'expired', doneOn, due };
  if (left <= APP_DATA.renewWarnDays) return { state: 'soon', doneOn, due, left };
  return { state: 'done', doneOn, due, left };
}

const isValid = (st) => st.state === 'done' || st.state === 'soon';

function areaScore(checks, area) {
  const own = checks.filter((c) => c.area === area);
  const log = getChecksLog();
  const total = own.reduce((s, c) => s + c.points, 0);
  const got = own.filter((c) => isValid(checkStatus(c, log))).reduce((s, c) => s + c.points, 0);
  const done = own.filter((c) => isValid(checkStatus(c, log))).length;
  return { score: total ? Math.round((got / total) * 100) : 0, done, total: own.length };
}

function scoreInfo(checks) {
  const hasKids = getProfile().hasKids;
  const adultos = areaScore(checks, 'adultos');
  const familia = areaScore(checks, 'familia');
  const score = hasKids ? Math.round((adultos.score + familia.score) / 2) : adultos.score;
  const state = APP_DATA.scoreStates.filter((s) => score >= s.from).pop();
  return { score, state, adultos, familia, hasKids };
}

// Próximo paso: el pendiente o vencido con más puntos; si empatan, el del
// área con menos puntaje. Sin chicos a cargo no se proponen los de Familia.
function nextStep(checks) {
  const info = scoreInfo(checks);
  const log = getChecksLog();
  const pool = checks.filter((c) => (info.hasKids || c.area === 'adultos') && !isValid(checkStatus(c, log)));
  if (!pool.length) return null;
  return pool.slice().sort((a, b) => (b.points - a.points) || (info[a.area].score - info[b.area].score) || (a.order - b.order))[0];
}

// Anillo con el escudo del logo adentro. `size`: '' | 'sm' | 'lg'.
function renderScoreRing(score, stateId, size = '') {
  const r = 44;
  const c = 2 * Math.PI * r;
  const off = c * (1 - Math.max(0, Math.min(100, score)) / 100);
  return `
    <div class="ring ${size} st-${stateId}" role="img" aria-label="Puntuación de seguridad: ${score} de 100">
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <circle class="ring-track" cx="50" cy="50" r="${r}"/>
        <circle class="ring-fill" cx="50" cy="50" r="${r}" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${off.toFixed(1)}" style="--c:${c.toFixed(1)}"/>
      </svg>
      <img class="ring-logo" src="assets/brand/logo-mark.png" alt="">
    </div>`;
}

// Cuenta animada del número (respeta reduced motion).
function animateNumber(el, from, to) {
  if (!el) return;
  if (from === to || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = to; return; }
  const start = performance.now();
  const dur = 700;
  const step = (t) => {
    const p = Math.min(1, (t - start) / dur);
    el.textContent = Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// ───────────────────────── RENDERERS ─────────────────────────

function emptyState(title, text) {
  return `<div class="empty"><strong>${escapeHtml(title)}</strong>${escapeHtml(text)}</div>`;
}

const LOAD_ERROR = () => emptyState('No pudimos cargar el contenido', 'Revisa tu conexión y vuelve a intentarlo en un momento.');

function lightBadge(p, cls = '') {
  if (!p.light) return '';
  const l = APP_DATA.lights[p.light];
  const label = p.light === 'rojo' && p.minAge ? `Solo +${p.minAge}` : (p.light === 'verde' && p.ageSuggested ? `Apto +${p.ageSuggested}` : l.name);
  return `<span class="light light-${p.light} ${cls}"><i aria-hidden="true"></i>${escapeHtml(label)}</span>`;
}

function lightLong(p) {
  if (!p.light) return '';
  return APP_DATA.lights[p.light].long.replace('{age}', p.minAge || p.ageSuggested || '');
}

function renderPlatformTile(p, ctx) {
  const kind = APP_DATA.kinds.find((k) => k.id === p.kind);
  const nAlerts = activeAlerts(ctx.alerts).filter((a) => a.platformId === p.id).length;
  return `
    <a class="plat-tile" href="plataforma.html?id=${encodeURIComponent(p.id)}">
      <img src="${escapeHtml(p.image)}" alt="" loading="lazy">
      ${lightBadge(p, 'on-dark')}
      <span class="plat-ic" aria-hidden="true">${ICONS[kind ? kind.icon : 'shield']}</span>
      <span class="plat-name">${escapeHtml(p.name)}</span>
      <span class="plat-sub">${nAlerts ? `${nAlerts} ${nAlerts === 1 ? 'alerta' : 'alertas'}` : 'Ver guía'}</span>
    </a>`;
}

function renderAlertCard(a, ctx, opts = {}) {
  const p = a.platformId ? ctx.platformById[a.platformId] : null;
  const urgent = a.severity === 'urgente';
  return `
    <article class="alert-card ${urgent ? 'urgent' : 'notice'}" data-alert="${escapeHtml(a.id)}">
      <div class="alert-top">
        <span class="alert-ic" aria-hidden="true">${ICONS.alert}</span>
        <p class="alert-eyebrow">${urgent ? 'Alerta de seguridad urgente' : 'Aviso de seguridad'}${p ? ` · ${escapeHtml(p.name)}` : ''}</p>
        <span class="alert-when">${escapeHtml(fmtAgo(a.date))}</span>
      </div>
      <h3 class="alert-title">${escapeHtml(a.title)}</h3>
      <p class="alert-text">${escapeHtml(a.text)}</p>
      ${opts.actions ? `
      <div class="alert-actions">
        ${a.noteId && ctx.noteById[a.noteId] ? `<a class="btn btn-alert" href="nota.html?id=${encodeURIComponent(a.noteId)}" data-read>Cómo protegerme</a>` : ''}
        <button class="btn btn-quiet" type="button" data-dismiss>Ya lo revisé</button>
      </div>` : ''}
    </article>`;
}

function renderTipCard(t, today) {
  const inner = `
      ${today ? '<span class="tip-today">Hoy</span>' : ''}
      <span class="tip-ic area-${t.area}" aria-hidden="true">${ICONS[t.icon]}</span>
      <h3 class="tip-title">${escapeHtml(t.title)}</h3>
      <p class="tip-text">${escapeHtml(t.text)}</p>
      ${t.noteId ? `<span class="tip-more">Leer más${ICONS.chevron}</span>` : ''}`;
  return t.noteId
    ? `<a class="tip-card" href="nota.html?id=${encodeURIComponent(t.noteId)}">${inner}</a>`
    : `<article class="tip-card">${inner}</article>`;
}

function renderNoteCard(n) {
  const topic = topicById(n.topicId);
  const st = getNotesState()[n.id];
  return `
    <a class="note-card" href="nota.html?id=${encodeURIComponent(n.id)}">
      <span class="note-ic tone-${topic ? topic.tone : 'blue'}" aria-hidden="true">${ICONS[topic ? topic.icon : 'shield']}</span>
      <span class="note-info">
        <span class="note-meta">${escapeHtml(APP_DATA.areas[n.area].short)}${topic ? ` · ${escapeHtml(topic.name)}` : ''} · ${n.readMin} min</span>
        <span class="note-title">${escapeHtml(n.title)}</span>
        ${n.excerpt ? `<span class="note-excerpt">${escapeHtml(n.excerpt)}</span>` : ''}
      </span>
      ${st && st.doneOn ? `<span class="note-done" title="Leída">${ICONS.check}</span>` : `<span class="note-chev">${ICONS.chevron}</span>`}
    </a>`;
}

function checkPill(st) {
  if (st.state === 'done') return `<span class="pill ok">${ICONS.check}Hecho</span>`;
  if (st.state === 'soon') return `<span class="pill warn">Vence ${st.left === 1 ? 'mañana' : `en ${st.left} días`}</span>`;
  if (st.state === 'expired') return '<span class="pill bad">Vencido</span>';
  return '';
}

function renderCheckRow(c, opts = {}) {
  const st = checkStatus(c);
  const on = isValid(st);
  return `
    <button class="check-row ${on ? 'is-on' : ''} st-${st.state}" type="button" data-check="${escapeHtml(c.id)}">
      <span class="check-box" aria-hidden="true">${on ? ICONS.check : ''}</span>
      <span class="check-info">
        <span class="check-title">${escapeHtml(c.title)}</span>
        <span class="check-meta">${c.minutes} min · +${c.points} pts${c.renewDays ? ` · se renueva cada ${c.renewDays} días` : ''}${opts.area ? ` · ${escapeHtml(APP_DATA.areas[c.area].short)}` : ''}</span>
      </span>
      ${checkPill(st)}
    </button>`;
}

// Bottom sheet genérico.
function openSheet(title, bodyHtml, onMount) {
  closeSheet();
  const backdrop = document.createElement('div');
  backdrop.className = 'sheet-backdrop';
  const sheet = document.createElement('div');
  sheet.className = 'sheet';
  sheet.setAttribute('role', 'dialog');
  sheet.setAttribute('aria-modal', 'true');
  sheet.setAttribute('aria-label', title);
  sheet.innerHTML = `
    <div class="sheet-head"><h2 class="sheet-title">${escapeHtml(title)}</h2><button class="icon-btn" type="button" aria-label="Cerrar" data-close>${ICONS.close}</button></div>
    <div class="sheet-body">${bodyHtml}</div>`;
  document.body.append(backdrop, sheet);
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => { backdrop.classList.add('open'); sheet.classList.add('open'); });
  backdrop.addEventListener('click', closeSheet);
  sheet.querySelector('.sheet-head [data-close]').addEventListener('click', closeSheet);
  const onKey = (e) => { if (e.key === 'Escape') closeSheet(); };
  document.addEventListener('keydown', onKey);
  sheet._onKey = onKey;
  if (onMount) onMount(sheet);
  return sheet;
}

function closeSheet() {
  document.querySelectorAll('.sheet').forEach((s) => { if (s._onKey) document.removeEventListener('keydown', s._onKey); });
  document.querySelectorAll('.sheet, .sheet-backdrop').forEach((el) => el.remove());
  if (!document.getElementById('ani-gate')) document.body.style.overflow = '';
}

// Detalle de un microcheck: por qué, pasos y el botón que suma puntos.
// `onChange` redibuja la página que lo abrió.
function openCheckSheet(c, ctx, onChange) {
  const draw = (sheet) => {
    const st = checkStatus(c);
    const on = isValid(st);
    const p = c.platformId ? ctx.platformById[c.platformId] : null;
    sheet.querySelector('.sheet-body').innerHTML = `
      <p class="cs-meta"><span class="area-dot area-${c.area}"></span>${escapeHtml(APP_DATA.areas[c.area].short)}${p ? ` · ${escapeHtml(p.name)}` : ''} · ${c.minutes} min · <b>+${c.points} pts</b></p>
      <h3 class="cs-title">${escapeHtml(c.title)}</h3>
      ${c.why ? `<p class="cs-why">${escapeHtml(c.why)}</p>` : ''}
      ${c.steps.length ? `<ol class="cs-steps">${c.steps.map((s) => `<li>${escapeHtml(s)}</li>`).join('')}</ol>` : ''}
      ${st.state === 'expired' ? `<p class="cs-status bad">Lo hiciste el ${escapeHtml(fmtShortDate(st.doneOn))} y ya venció: conviene repetirlo.</p>` : ''}
      ${on ? `<p class="cs-status ok">${ICONS.checkCircle}Hecho el ${escapeHtml(fmtShortDate(st.doneOn))}${st.due ? ` · se renueva el ${escapeHtml(fmtShortDate(st.due))}` : ''}</p>` : ''}
      <div class="cs-actions">
        ${on
          ? '<button class="btn btn-ghost block" type="button" data-undo>Desmarcar</button>'
          : `<button class="btn btn-primary block" type="button" data-do>${ICONS.check}${st.state === 'expired' ? 'Lo hice de nuevo' : 'Ya lo hice'}</button>`}
      </div>`;
    const doBtn = sheet.querySelector('[data-do]');
    if (doBtn) doBtn.addEventListener('click', () => {
      const before = scoreInfo(ctx.checks);
      setCheckDone(c.id, true);
      const after = scoreInfo(ctx.checks);
      closeSheet();
      if (onChange) onChange(before.score);
      if (after.state.from > before.state.from && after.state.id !== 'exposed') celebrateScore(after);
      else showToast(`+${c.points} pts · Tu puntuación: ${after.score}`);
    });
    const undo = sheet.querySelector('[data-undo]');
    if (undo) undo.addEventListener('click', () => {
      if (!confirm('¿Desmarcar este paso? Tu puntuación va a bajar.')) return;
      const before = scoreInfo(ctx.checks).score;
      setCheckDone(c.id, false);
      closeSheet();
      if (onChange) onChange(before);
    });
  };
  openSheet('Microcheck', '', draw);
}

// Celebración al subir de estado (ej. llegar a "Buen estado" o "Blindado").
function celebrateScore(info) {
  const el = document.createElement('div');
  el.className = 'celebrate';
  el.innerHTML = `
    <div class="celebrate-card" role="dialog" aria-modal="true" aria-labelledby="cel-title">
      ${renderScoreRing(info.score, info.state.id, 'lg')}
      <p class="eyebrow">Nuevo nivel de protección</p>
      <h2 id="cel-title">¡Estás en “${escapeHtml(info.state.name)}”!</h2>
      <p>${info.state.id === 'shield' ? 'Tu vida digital está muy bien protegida. Mantén los chequeos al día.' : `Tu puntuación subió a ${info.score}. Cada paso te cuida un poco más.`}</p>
      <button class="btn btn-primary block" type="button" data-close>Seguir</button>
    </div>`;
  document.body.appendChild(el);
  const close = () => el.remove();
  el.querySelector('[data-close]').addEventListener('click', close);
  el.addEventListener('click', (e) => { if (e.target === el) close(); });
}

// Alertas en bottom sheet (campanita).
function openAlertsSheet(ctx, onChange) {
  const list = activeAlerts(ctx.alerts);
  const read = getAlertsRead();
  openSheet('Alertas', list.length ? `
    <div class="alert-list">${list.map((a) => `
      <a class="alert-row ${read.includes(a.id) ? '' : 'unread'} sev-${a.severity}" href="${a.noteId && ctx.noteById[a.noteId] ? `nota.html?id=${encodeURIComponent(a.noteId)}` : 'seguridad.html#alertas'}" data-id="${escapeHtml(a.id)}">
        <span class="alert-row-ic" aria-hidden="true">${ICONS.alert}</span>
        <span><span class="alert-row-when">${escapeHtml(fmtAgo(a.date))}${a.severity === 'urgente' ? ' · Urgente' : ''}</span><span class="alert-row-title">${escapeHtml(a.title)}</span></span>
      </a>`).join('')}
    </div>
    ${unreadAlerts(ctx.alerts).length ? '<button class="btn btn-ghost block" type="button" id="mark-all" style="margin-top:14px">Marcar todas como revisadas</button>' : ''}`
    : emptyState('Sin alertas', 'Cuando aparezca una amenaza nueva la vas a ver acá.'),
  (sheet) => {
    sheet.querySelectorAll('.alert-row').forEach((r) => r.addEventListener('click', () => markAlertRead(r.dataset.id)));
    const all = sheet.querySelector('#mark-all');
    if (all) all.addEventListener('click', () => {
      list.forEach((a) => markAlertRead(a.id));
      closeSheet();
      showToast('Estás al día con las alertas');
      if (onChange) onChange();
    });
  });
}

// Buscador (lupa del header): todo el contenido ya está cargado local.
function openSearch(ctx) {
  openSheet('Buscar', `
    <div class="search-wrap">${ICONS.search}<input class="search-input" id="search-input" type="search" placeholder="Phishing, Roblox, contraseñas…" autocomplete="off" enterkeyhint="search"></div>
    <div id="search-results" class="search-results"></div>`,
  (sheet) => {
    const input = sheet.querySelector('#search-input');
    const out = sheet.querySelector('#search-results');
    const index = [
      ...ctx.platforms.map((p) => ({ kind: 'Plataforma', title: p.name, sub: p.tagline, href: `plataforma.html?id=${encodeURIComponent(p.id)}`, text: [p.name, p.tagline, ...p.risks].join(' ') })),
      ...ctx.notes.map((n) => ({ kind: 'Guía', title: n.title, sub: n.excerpt, href: `nota.html?id=${encodeURIComponent(n.id)}`, text: [n.title, n.excerpt, n.situation, ...n.steps, n.why].join(' ') })),
      ...ctx.checks.map((c) => ({ kind: 'Microcheck', title: c.title, sub: c.why, check: c.id, text: [c.title, c.why, ...c.steps].join(' ') })),
      ...activeAlerts(ctx.alerts).map((a) => ({ kind: 'Alerta', title: a.title, sub: a.text, href: a.noteId ? `nota.html?id=${encodeURIComponent(a.noteId)}` : 'seguridad.html#alertas', text: [a.title, a.text].join(' ') })),
    ].map((r) => ({ ...r, hay: fold(r.text) }));
    const draw = () => {
      const terms = fold(input.value).split(/\s+/).filter(Boolean);
      if (!terms.length) {
        out.innerHTML = `<p class="search-hint">Prueba con: ${['phishing', 'Roblox', 'contraseña', 'grooming', 'WhatsApp'].map((t) => `<button class="chip sm" type="button" data-q="${t}">${t}</button>`).join(' ')}</p>`;
        return;
      }
      const hits = index.filter((r) => terms.every((t) => r.hay.includes(t))).slice(0, 30);
      out.innerHTML = hits.length ? hits.map((r) => r.check
        ? `<button class="search-hit" type="button" data-check="${escapeHtml(r.check)}"><span class="search-kind">${r.kind}</span><span class="search-title">${escapeHtml(r.title)}</span><span class="search-sub">${escapeHtml(r.sub)}</span></button>`
        : `<a class="search-hit" href="${r.href}"><span class="search-kind">${r.kind}</span><span class="search-title">${escapeHtml(r.title)}</span><span class="search-sub">${escapeHtml(r.sub)}</span></a>`).join('')
        : emptyState('Sin resultados', 'Prueba con otra palabra, más corta o más general.');
    };
    let t;
    input.addEventListener('input', () => { clearTimeout(t); t = setTimeout(draw, 120); });
    out.addEventListener('click', (e) => {
      const q = e.target.closest('[data-q]');
      if (q) { input.value = q.dataset.q; draw(); return; }
      const c = e.target.closest('[data-check]');
      if (c) openCheckSheet(ctx.checkById[c.dataset.check], ctx, () => location.reload());
    });
    draw();
    setTimeout(() => input.focus(), 250);
  });
}

// ───────────────────────── NAV / HEADER ─────────────────────────

function initNav(activeId) {
  document.querySelectorAll('.nav-item').forEach((a) => {
    const on = a.id === activeId;
    a.classList.toggle('active', on);
    if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });
  const header = document.querySelector('.app-header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 4);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
  const name = getProfile().name;
  document.querySelectorAll('.js-avatar').forEach((el) => { el.textContent = (name || 'S').charAt(0).toUpperCase(); });
  document.querySelectorAll('.js-user-name').forEach((el) => { el.textContent = name || 'Mi cuenta'; });
  syncThemeColor();
}

function bindBack() {
  document.querySelectorAll('.js-back').forEach((b) => b.addEventListener('click', () => {
    if (history.length > 1 && document.referrer && new URL(document.referrer).origin === location.origin) history.back();
    else location.href = b.dataset.fallback || 'index.html';
  }));
}

// Lupa y campanita: existen en las páginas principales.
function bindHeaderTools(ctx, onAlertsChange) {
  const search = document.getElementById('search-btn');
  if (search) search.addEventListener('click', () => openSearch(ctx));
  const bell = document.getElementById('bell-btn');
  if (bell) {
    const sync = () => {
      const n = unreadAlerts(ctx.alerts).length;
      bell.querySelector('.dot').hidden = !n;
      bell.setAttribute('aria-label', n ? `Alertas: ${n} sin revisar` : 'Alertas');
    };
    sync();
    bell.addEventListener('click', () => openAlertsSheet(ctx, () => { sync(); if (onAlertsChange) onAlertsChange(); }));
    return sync;
  }
  return () => {};
}

// ───────────────────────── PÁGINA: INICIO ─────────────────────────

async function initHome() {
  initNav('nav-home');
  const profile = getProfile();
  document.getElementById('home-greeting').innerHTML = `
    <p class="greeting-sub">${escapeHtml(greetingByHour())}${profile.name ? `, ${escapeHtml(profile.name)}` : ''}</p>
    <h1 class="greeting-title">Tu seguridad de hoy</h1>`;

  const main = document.getElementById('home-main');
  main.innerHTML = '<div class="sk" style="height:190px"></div><div class="sk" style="height:200px;margin-top:14px"></div><div class="sk sk-card" style="margin-top:14px"></div>';

  let ctx;
  try {
    ctx = await loadAll();
  } catch (e) {
    console.error(e);
    main.innerHTML = LOAD_ERROR();
    return;
  }

  main.innerHTML = `
    <div id="home-alert"></div>
    <div id="home-score"></div>
    ${ctx.tips.length ? `
    <section class="section">
      <div class="section-head"><h2 class="section-title">Consejos diarios</h2><button class="section-link" type="button" id="tips-all">Ver todo</button></div>
      <div class="rail" id="home-tips"></div>
    </section>` : ''}
    <div id="home-quiz"></div>
    <section class="section">
      <div class="section-head"><h2 class="section-title">Centro de Seguridad</h2></div>
      <div class="center-cards" id="home-centers"></div>
    </section>`;

  const syncBell = bindHeaderTools(ctx, () => drawAlert());

  const drawAlert = () => {
    const slot = document.getElementById('home-alert');
    const a = unreadAlerts(ctx.alerts)[0];
    if (!a) {
      slot.innerHTML = activeAlerts(ctx.alerts).length ? `
        <a class="alert-clear" href="seguridad.html#alertas">${ICONS.shieldCheck}<span><b>Estás al día con las alertas</b><small>Te avisamos acá cuando aparezca una amenaza nueva.</small></span>${ICONS.chevron}</a>` : '';
      return;
    }
    slot.innerHTML = renderAlertCard(a, ctx, { actions: true });
    const card = slot.querySelector('.alert-card');
    const read = () => { markAlertRead(a.id); syncBell(); };
    card.querySelector('[data-read]')?.addEventListener('click', read);
    card.querySelector('[data-dismiss]').addEventListener('click', () => {
      read();
      card.classList.add('leaving');
      setTimeout(drawAlert, 220);
    });
  };

  const drawScore = (fromScore) => {
    const info = scoreInfo(ctx.checks);
    const next = nextStep(ctx.checks);
    const slot = document.getElementById('home-score');
    const bar = (label, s, area) => `
      <div class="sub-score">
        <div class="sub-score-top"><span><span class="area-dot area-${area}"></span>${label}</span><b>${s.score}</b></div>
        <div class="track"><div class="fill area-${area}" style="width:${s.score}%"></div></div>
      </div>`;
    slot.innerHTML = `
      <section class="score-card" aria-labelledby="score-title">
        <div class="score-main">
          ${renderScoreRing(info.score, info.state.id)}
          <div>
            <p class="eyebrow" id="score-title">Tu puntuación de seguridad</p>
            <p class="score-num"><span id="score-num">${fromScore ?? info.score}</span><small>/100</small></p>
            <p class="score-state st-${info.state.id}">${escapeHtml(info.state.name)}</p>
          </div>
        </div>
        <div class="sub-scores">
          ${bar('Adultos', info.adultos, 'adultos')}
          ${info.hasKids ? bar('Familia', info.familia, 'familia') : ''}
        </div>
        ${next ? `
        <button class="next-step" type="button" data-check="${escapeHtml(next.id)}">
          <span class="next-label">Tu próximo paso · ${next.minutes} min</span>
          <span class="next-title">${escapeHtml(next.title)}</span>
          <span class="next-pts">+${next.points}</span>
        </button>` : `<p class="score-done">${ICONS.shieldCheck}Hiciste todos los chequeos. Vuelve cuando alguno se renueve.</p>`}
      </section>`;
    if (fromScore !== undefined) {
      animateNumber(document.getElementById('score-num'), fromScore, info.score);
      slot.querySelector('.ring').classList.add('pulse');
    }
    const btn = slot.querySelector('[data-check]');
    if (btn) btn.addEventListener('click', () => openCheckSheet(ctx.checkById[btn.dataset.check], ctx, (before) => { drawScore(before); drawCenters(); }));
  };

  const drawCenters = () => {
    const info = scoreInfo(ctx.checks);
    const tags = (area) => APP_DATA.topics.filter((t) => t.area === area).slice(0, 3).map((t) => `<span class="center-tag">${escapeHtml(t.name)}</span>`).join('');
    document.getElementById('home-centers').innerHTML = ['adultos', 'familia'].map((id) => {
      const a = APP_DATA.areas[id];
      const s = info[id];
      return `
        <a class="center-card area-${id}" href="centro.html?area=${id}">
          <img src="${escapeHtml(a.image)}" alt="" loading="lazy">
          <span class="center-body">
            <span class="center-eyebrow">${escapeHtml(a.eyebrow)}</span>
            <span class="center-name">${escapeHtml(a.name)}</span>
            <span class="center-desc">${escapeHtml(a.desc)}</span>
            <span class="center-tags">${tags(id)}</span>
            <span class="center-foot"><span class="center-progress"><i style="width:${s.score}%"></i></span>${s.done} de ${s.total} chequeos</span>
          </span>
        </a>`;
    }).join('');
  };

  drawAlert();
  drawScore();
  drawCenters();

  // Consejos: el del día primero, después los siguientes de la rotación.
  if (ctx.tips.length) {
    const today = dailyPick(ctx.tips);
    document.getElementById('home-tips').innerHTML = rotateFrom(ctx.tips, today).slice(0, 8).map((t, i) => renderTipCard(t, i === 0)).join('');
    document.getElementById('tips-all').addEventListener('click', () => openSheet('Consejos', `<div class="tip-list">${ctx.tips.map((t) => renderTipCard(t, t === today)).join('')}</div>`));
  }

  renderQuiz(ctx);
}

function streakLabel() {
  const n = quizStreak();
  if (!n) return 'Un caso por día';
  return n === 1 ? '1 acierto' : `${n} aciertos seguidos`;
}

// "¿Estafa o no?": un caso por día, misma rotación para todos.
function renderQuiz(ctx) {
  const slot = document.getElementById('home-quiz');
  const c = dailyPick(ctx.cases);
  if (!slot || !c) return;
  const answered = getQuizLog()[dateKey()];
  const channelName = { sms: 'SMS', whatsapp: 'WhatsApp', mail: 'Correo' }[c.channel];
  slot.innerHTML = `
    <section class="section">
      <div class="section-head"><h2 class="section-title">¿Estafa o no?</h2><span class="quiz-streak">${streakLabel()}</span></div>
      <div class="quiz-card">
        <div class="msg msg-${c.channel}">
          <p class="msg-head"><span class="msg-channel">${channelName}</span><span class="msg-sender">${escapeHtml(c.sender)}</span></p>
          <p class="msg-body">${escapeHtml(c.body)}</p>
        </div>
        <div class="quiz-actions">
          <button class="quiz-btn" type="button" data-answer="scam">${ICONS.alert}Es estafa</button>
          <button class="quiz-btn" type="button" data-answer="real">${ICONS.checkCircle}Es real</button>
        </div>
        <div class="quiz-result" hidden></div>
      </div>
    </section>`;
  const card = slot.querySelector('.quiz-card');
  const reveal = (pickedScam, correct) => {
    card.classList.add('answered');
    card.querySelectorAll('.quiz-btn').forEach((b) => {
      b.disabled = true;
      const isScamBtn = b.dataset.answer === 'scam';
      if (isScamBtn === c.isScam) b.classList.add('correct');
      else if (isScamBtn === pickedScam) b.classList.add('wrong');
    });
    const res = card.querySelector('.quiz-result');
    res.hidden = false;
    res.innerHTML = `
      <p class="quiz-verdict ${correct ? 'ok' : 'bad'}">${correct ? '¡Bien visto!' : 'Esta vez no.'} ${c.isScam ? 'Es una estafa.' : 'Es un mensaje real.'}</p>
      ${c.clues.length ? `<ul class="quiz-clues ${c.isScam ? 'scam' : 'real'}">${c.clues.map((s) => `<li>${c.isScam ? ICONS.alert : ICONS.checkCircle}<span>${escapeHtml(s)}</span></li>`).join('')}</ul>` : ''}
      ${c.explanation ? `<p class="quiz-expl">${escapeHtml(c.explanation)}</p>` : ''}
      <p class="quiz-next">Mañana hay un caso nuevo.</p>`;
  };
  if (answered && answered.caseId === c.id) {
    // Se infiere qué eligió a partir de si acertó.
    reveal(answered.correct ? c.isScam : !c.isScam, answered.correct);
    return;
  }
  card.querySelectorAll('.quiz-btn').forEach((btn) => btn.addEventListener('click', () => {
    const pickedScam = btn.dataset.answer === 'scam';
    const correct = pickedScam === c.isScam;
    saveQuizAnswer(c.id, correct);
    reveal(pickedScam, correct);
    const head = slot.querySelector('.quiz-streak');
    if (head) head.textContent = streakLabel();
  }));
}

// ───────────────────────── PÁGINA: SEGURIDAD ─────────────────────────

async function initSeguridad() {
  initNav('nav-seguridad');
  const grid = document.getElementById('plat-grid');
  const chips = document.getElementById('plat-chips');
  const guides = document.getElementById('guide-list');
  const alerts = document.getElementById('alert-list');
  grid.innerHTML = Array.from({ length: 4 }, () => '<div class="sk" style="aspect-ratio:1/1.08"></div>').join('');
  guides.innerHTML = '<div class="sk sk-card"></div><div class="sk sk-card"></div>';

  let ctx;
  try {
    ctx = await loadAll();
  } catch (e) {
    console.error(e);
    grid.innerHTML = '';
    guides.innerHTML = LOAD_ERROR();
    return;
  }
  const syncBell = bindHeaderTools(ctx, () => drawAlerts());

  const kinds = APP_DATA.kinds.filter((k) => ctx.platforms.some((p) => p.kind === k.id));
  let current = kinds.some((k) => k.id === qs('tipo')) ? qs('tipo') : 'all';
  const drawGrid = () => {
    chips.innerHTML = [{ id: 'all', name: 'Todas' }, ...kinds].map((k) =>
      `<button class="chip ${current === k.id ? 'active' : ''}" type="button" data-kind="${k.id}" aria-pressed="${current === k.id}">${escapeHtml(k.name)}</button>`).join('');
    const list = current === 'all' ? ctx.platforms : ctx.platforms.filter((p) => p.kind === current);
    grid.innerHTML = list.map((p) => renderPlatformTile(p, ctx)).join('') || emptyState('Sin plataformas', 'Muy pronto sumamos más.');
  };
  chips.addEventListener('click', (e) => {
    const b = e.target.closest('[data-kind]');
    if (!b) return;
    current = b.dataset.kind;
    const url = new URL(location.href);
    if (current === 'all') url.searchParams.delete('tipo'); else url.searchParams.set('tipo', current);
    history.replaceState(null, '', url.toString());
    drawGrid();
  });
  drawGrid();

  // Guías agrupadas por área.
  guides.innerHTML = ['familia', 'adultos'].map((area) => {
    const list = ctx.notes.filter((n) => n.area === area);
    return list.length ? `<h3 class="group-title"><span class="area-dot area-${area}"></span>${escapeHtml(APP_DATA.areas[area].name)}</h3><div class="note-list">${list.map(renderNoteCard).join('')}</div>` : '';
  }).join('') || emptyState('Muy pronto', 'Estamos preparando las guías.');

  const drawAlerts = () => {
    const list = activeAlerts(ctx.alerts);
    const read = getAlertsRead();
    alerts.innerHTML = list.length ? list.map((a) => `
      <div class="alert-wrap ${read.includes(a.id) ? 'is-read' : ''}">
        ${renderAlertCard(a, ctx)}
        <div class="alert-foot">
          ${a.noteId && ctx.noteById[a.noteId] ? `<a href="nota.html?id=${encodeURIComponent(a.noteId)}" data-read="${escapeHtml(a.id)}">Cómo protegerme${ICONS.chevron}</a>` : '<span></span>'}
          ${read.includes(a.id) ? `<span class="alert-read">${ICONS.check}Revisada</span>` : `<button type="button" data-dismiss="${escapeHtml(a.id)}">Marcar revisada</button>`}
        </div>
      </div>`).join('') : emptyState('Sin alertas', 'Cuando aparezca una amenaza nueva la vas a ver acá.');
  };
  alerts.addEventListener('click', (e) => {
    const d = e.target.closest('[data-dismiss]');
    const r = e.target.closest('[data-read]');
    if (d) { markAlertRead(d.dataset.dismiss); drawAlerts(); syncBell(); }
    if (r) markAlertRead(r.dataset.read);
  });
  drawAlerts();

  if (location.hash) setTimeout(() => document.querySelector(location.hash)?.scrollIntoView({ block: 'start' }), 50);
}

// ───────────────────────── PÁGINA: PLATAFORMA ─────────────────────────

async function initPlataforma() {
  initNav('nav-seguridad');
  bindBack();
  const root = document.getElementById('plataforma-main');
  root.innerHTML = '<div class="sk" style="height:280px;margin:0 -16px;border-radius:0"></div><div class="sk sk-card" style="margin-top:16px"></div>';

  let ctx;
  try {
    ctx = await loadAll();
  } catch (e) {
    console.error(e);
    root.innerHTML = LOAD_ERROR();
    return;
  }
  const p = ctx.platformById[qs('id')];
  if (!p) {
    root.innerHTML = emptyState('Plataforma no encontrada', 'Puede que ya no esté disponible.') + '<p style="text-align:center"><a class="btn btn-primary" href="seguridad.html">Ir a Seguridad</a></p>';
    return;
  }
  document.title = `${p.name} — SafeOnline`;
  const kind = APP_DATA.kinds.find((k) => k.id === p.kind);
  const checks = p.checkIds.map((id) => ctx.checkById[id]).filter(Boolean);
  const alerts = activeAlerts(ctx.alerts).filter((a) => a.platformId === p.id);
  // Primero la guía propia de la plataforma, después las que comparten microchecks.
  const notes = ctx.notes.filter((n) => n.platformId === p.id)
    .concat(ctx.notes.filter((n) => n.platformId !== p.id && n.checkIds.some((id) => p.checkIds.includes(id))));
  const ratings = [p.rating.pegi ? `PEGI ${p.rating.pegi}` : '', p.rating.esrb ? `ESRB ${p.rating.esrb}` : '', p.minAge ? `Edad mínima ${p.minAge}` : ''].filter(Boolean);

  root.innerHTML = `
    <header class="plat-hero">
      <img src="${escapeHtml(p.image)}" alt="">
      <div class="plat-hero-body">
        <p class="eyebrow on-dark">${escapeHtml(kind ? kind.name.replace(/s$/, '') : '')}</p>
        <h1 class="plat-hero-name">${escapeHtml(p.name)}</h1>
        ${p.tagline ? `<p class="plat-hero-tag">${escapeHtml(p.tagline)}</p>` : ''}
      </div>
    </header>

    ${p.light || ratings.length ? `
    <div class="verdict light-box-${p.light || 'none'}">
      ${p.light ? `<div class="verdict-light">${lightBadge(p)}<p>${escapeHtml(lightLong(p))}${p.ageSuggested && p.light !== 'rojo' ? `. Edad sugerida: ${p.ageSuggested}+` : ''}</p></div>` : ''}
      ${ratings.length ? `<div class="verdict-ratings">${ratings.map((r) => `<span>${escapeHtml(r)}</span>`).join('')}</div>` : ''}
    </div>` : ''}

    ${p.risks.length ? `
    <section class="section">
      <div class="section-head"><h2 class="section-title">Riesgos conocidos</h2></div>
      <ul class="risk-list">${p.risks.map((r) => `<li>${ICONS.alert}<span>${escapeHtml(r)}</span></li>`).join('')}</ul>
    </section>` : ''}

    ${checks.length ? `
    <section class="section">
      <div class="section-head"><h2 class="section-title">Configúrala segura</h2><span class="section-count" id="plat-count"></span></div>
      <div class="track lg"><div class="fill" id="plat-progress"></div></div>
      <div class="check-list" id="plat-checks"></div>
    </section>` : ''}

    ${alerts.length ? `
    <section class="section">
      <div class="section-head"><h2 class="section-title">Alertas</h2></div>
      <div class="stack">${alerts.map((a) => renderAlertCard(a, ctx)).join('')}</div>
    </section>` : ''}

    ${notes.length ? `
    <section class="section">
      <div class="section-head"><h2 class="section-title">Guías relacionadas</h2></div>
      <div class="note-list">${notes.slice(0, 4).map(renderNoteCard).join('')}</div>
    </section>` : ''}
  `;

  const drawChecks = () => {
    const box = document.getElementById('plat-checks');
    if (!box) return;
    box.innerHTML = checks.map((c) => renderCheckRow(c)).join('');
    const done = checks.filter((c) => isValid(checkStatus(c))).length;
    document.getElementById('plat-count').textContent = `${done} de ${checks.length} hechos`;
    document.getElementById('plat-progress').style.width = `${Math.round((done / checks.length) * 100)}%`;
  };
  const box = document.getElementById('plat-checks');
  if (box) box.addEventListener('click', (e) => {
    const b = e.target.closest('[data-check]');
    if (b) openCheckSheet(ctx.checkById[b.dataset.check], ctx, drawChecks);
  });
  drawChecks();
}

// ───────────────────────── PÁGINA: CENTRO (Adultos / Familia) ─────────────────────────

// País de los canales de denuncia: el del ANI validado; si no, Chile.
function userCountryPrefix() {
  const saved = readJson(STORAGE_KEYS.ani, null);
  const ani = saved && saved.ani ? String(saved.ani) : '';
  const hit = ANI_COUNTRIES.slice().sort((a, b) => b.prefix.length - a.prefix.length).find((c) => ani.startsWith(c.prefix));
  return (hit || ANI_COUNTRIES[0]).prefix;
}

function renderChannels(channels, prefix) {
  const countries = ANI_COUNTRIES.filter((c) => channels.some((ch) => ch.country === c.prefix));
  const list = channels.filter((ch) => ch.country === prefix);
  return `
    ${countries.length > 1 ? `<div class="chips" role="group" aria-label="País">${countries.map((c) => `<button class="chip sm ${c.prefix === prefix ? 'active' : ''}" type="button" data-country="${c.prefix}" aria-pressed="${c.prefix === prefix}">${c.flag} ${escapeHtml(c.name)}</button>`).join('')}</div>` : ''}
    <div class="channel-list">${list.map((ch) => `
      <div class="channel">
        <p class="channel-name">${escapeHtml(ch.name)}</p>
        ${ch.detail ? `<p class="channel-detail">${escapeHtml(ch.detail)}</p>` : ''}
        <div class="channel-actions">
          ${ch.phone ? `<a class="btn btn-small" href="tel:${escapeHtml(ch.phone.replace(/[^\d+]/g, ''))}">${ICONS.phoneCall}${escapeHtml(ch.phone)}</a>` : ''}
          ${ch.url ? `<a class="btn btn-small ghost" href="${escapeHtml(ch.url)}" target="_blank" rel="noopener">${ICONS.link}Sitio oficial</a>` : ''}
        </div>
      </div>`).join('') || emptyState('Sin canales cargados', 'Acércate a la policía o fiscalía de tu ciudad.')}
    </div>`;
}

const CHECKS_PREVIEW = 5;

async function initCentro() {
  initNav('nav-home');
  bindBack();
  const areaId = qs('area') === 'familia' ? 'familia' : 'adultos';
  const area = APP_DATA.areas[areaId];
  document.title = `${area.name} — SafeOnline`;
  document.body.classList.add(`theme-${areaId}`);
  const root = document.getElementById('centro-main');
  root.innerHTML = '<div class="sk" style="height:230px;margin:0 -16px;border-radius:0"></div><div class="sk sk-card" style="margin-top:16px"></div>';

  let ctx;
  try {
    ctx = await loadAll();
  } catch (e) {
    console.error(e);
    root.innerHTML = LOAD_ERROR();
    return;
  }

  const topics = APP_DATA.topics.filter((t) => t.area === areaId);
  const checks = ctx.checks.filter((c) => c.area === areaId);
  let topic = topics.some((t) => t.id === qs('tema')) ? qs('tema') : 'all';

  root.innerHTML = `
    <header class="centro-hero area-${areaId}">
      <img src="${escapeHtml(area.image)}" alt="">
      <div class="centro-hero-body">
        <p class="eyebrow on-dark">${escapeHtml(area.eyebrow)}</p>
        <h1 class="centro-name">${escapeHtml(area.name)}</h1>
        <p class="centro-desc">${escapeHtml(area.desc)}</p>
      </div>
    </header>
    <div id="centro-score"></div>
    ${areaId === 'familia' ? `<a class="sos-link" href="#paso-algo">${ICONS.alert}<span><b>¿Pasó algo?</b> Qué hacer y dónde denunciar</span>${ICONS.chevron}</a>` : ''}
    ${areaId === 'familia' && !getProfile().hasKids ? '<p class="note-inline">Marcaste que no tienes chicos a cargo: estos chequeos no cuentan en tu puntuación. Puedes cambiarlo en Mi cuenta.</p>' : ''}

    ${checks.length ? `
    <section class="section" id="chequeos">
      <div class="section-head"><h2 class="section-title">Microchecks</h2><span class="section-count" id="centro-count"></span></div>
      <p class="section-sub">Acciones de 1 a 5 minutos. Cada una suma a tu puntuación.</p>
      <div class="check-list" id="centro-checks"></div>
    </section>` : ''}

    <section class="section" id="guias">
      <div class="section-head"><h2 class="section-title">Temas</h2></div>
      <div class="topics-grid" id="centro-topics"></div>
      <div class="note-list" id="centro-notes" style="margin-top:14px"></div>
    </section>

    ${areaId === 'familia' ? `
    <section class="section" id="paso-algo">
      <div class="help-card">
        <p class="eyebrow">¿Pasó algo?</p>
        <h2 class="help-title">Si tu hijo recibió algo raro o un adulto lo contactó</h2>
        <ol class="help-steps">
          <li><b>Mantén la calma</b> y agradécele que te lo contó. No lo retes ni le saques el celular como castigo.</li>
          <li><b>No borres el chat.</b> Saca capturas de pantalla con el nombre de usuario, la fecha y los mensajes.</li>
          <li><b>No confrontes al adulto</b> ni te hagas pasar por tu hijo.</li>
          <li><b>Bloquea y denuncia</b> la cuenta dentro del juego o la app.</li>
          <li><b>Haz la denuncia</b> en un canal oficial de tu país:</li>
        </ol>
        <div id="centro-channels"></div>
      </div>
    </section>` : ''}
  `;

  const drawScore = (from) => {
    const s = areaScore(ctx.checks, areaId);
    const info = scoreInfo(ctx.checks);
    const state = APP_DATA.scoreStates.filter((x) => s.score >= x.from).pop();
    document.getElementById('centro-score').innerHTML = `
      <div class="score-strip">
        ${renderScoreRing(s.score, state.id, 'sm')}
        <div><p class="score-strip-num"><span id="centro-num">${from ?? s.score}</span>/100 · ${escapeHtml(state.name)}</p><p class="score-strip-sub">Puntaje de ${escapeHtml(area.short)} · tu puntuación general es ${info.score}</p></div>
      </div>`;
    if (from !== undefined) animateNumber(document.getElementById('centro-num'), from, s.score);
    const box = document.getElementById('centro-checks');
    if (box) {
      // Lo que pide acción arriba: vencidos, por vencer, pendientes; lo hecho al final.
      const rank = { expired: 0, soon: 1, pending: 2, done: 3 };
      const log = getChecksLog();
      const sorted = checks.slice().sort((a, b) => (rank[checkStatus(a, log).state] - rank[checkStatus(b, log).state]) || (a.order - b.order));
      const shown = expanded ? sorted : sorted.slice(0, CHECKS_PREVIEW);
      box.innerHTML = shown.map((c) => renderCheckRow(c)).join('')
        + (sorted.length > CHECKS_PREVIEW ? `<button class="more-btn" type="button" data-more>${expanded ? 'Ver menos' : `Ver los ${sorted.length}`}</button>` : '');
      document.getElementById('centro-count').textContent = `${s.done} de ${s.total}`;
    }
  };
  let expanded = false;
  const box = document.getElementById('centro-checks');
  if (box) box.addEventListener('click', (e) => {
    if (e.target.closest('[data-more]')) { expanded = !expanded; drawScore(); return; }
    const b = e.target.closest('[data-check]');
    if (!b) return;
    const before = areaScore(ctx.checks, areaId).score;
    openCheckSheet(ctx.checkById[b.dataset.check], ctx, () => drawScore(before));
  });
  drawScore();

  const drawTopics = () => {
    document.getElementById('centro-topics').innerHTML = topics.map((t) => {
      const n = ctx.notes.filter((x) => x.topicId === t.id).length;
      return `
        <button class="topic-tile tone-${t.tone} ${topic === t.id ? 'active' : ''}" type="button" data-topic="${t.id}" aria-pressed="${topic === t.id}">
          <span class="topic-icon" aria-hidden="true">${ICONS[t.icon] || ''}</span>
          <span><span class="topic-name">${escapeHtml(t.name)}</span><span class="topic-count">${n} ${n === 1 ? 'guía' : 'guías'}</span></span>
        </button>`;
    }).join('');
    const list = ctx.notes.filter((x) => x.area === areaId && (topic === 'all' || x.topicId === topic));
    document.getElementById('centro-notes').innerHTML = list.length ? list.map(renderNoteCard).join('') : emptyState('Muy pronto', 'Estamos preparando guías de este tema.');
  };
  document.getElementById('centro-topics').addEventListener('click', (e) => {
    const b = e.target.closest('[data-topic]');
    if (!b) return;
    topic = topic === b.dataset.topic ? 'all' : b.dataset.topic;
    const url = new URL(location.href);
    if (topic === 'all') url.searchParams.delete('tema'); else url.searchParams.set('tema', topic);
    history.replaceState(null, '', url.toString());
    drawTopics();
  });
  drawTopics();

  const chBox = document.getElementById('centro-channels');
  if (chBox) {
    let prefix = userCountryPrefix();
    const drawCh = () => { chBox.innerHTML = renderChannels(ctx.channels, prefix); };
    chBox.addEventListener('click', (e) => { const b = e.target.closest('[data-country]'); if (b) { prefix = b.dataset.country; drawCh(); } });
    drawCh();
  }

  if (location.hash) setTimeout(() => document.querySelector(location.hash)?.scrollIntoView({ block: 'start' }), 50);
}

// ───────────────────────── PÁGINA: NOTA ─────────────────────────

async function initNota() {
  bindBack();
  const root = document.getElementById('nota-main');
  root.innerHTML = '<div class="sk" style="height:220px"></div><div class="sk sk-card" style="margin-top:16px"></div>';

  let ctx;
  try {
    ctx = await loadAll();
  } catch (e) {
    console.error(e);
    initNav('nav-home');
    root.innerHTML = LOAD_ERROR();
    return;
  }
  const n = ctx.noteById[qs('id')];
  initNav(n && n.platformId ? 'nav-seguridad' : 'nav-home');
  if (!n) {
    root.innerHTML = emptyState('Guía no encontrada', 'Puede que ya no esté disponible.') + '<p style="text-align:center"><a class="btn btn-primary" href="index.html">Ir al inicio</a></p>';
    return;
  }
  document.title = `${n.title} — SafeOnline`;
  markNoteOpened(n.id);
  // Abrir la guía de una alerta cuenta como revisarla.
  ctx.alerts.filter((a) => a.noteId === n.id).forEach((a) => markAlertRead(a.id));

  const topic = topicById(n.topicId);
  const p = n.platformId ? ctx.platformById[n.platformId] : null;
  const checks = n.checkIds.map((id) => ctx.checkById[id]).filter(Boolean);
  const related = ctx.notes.filter((x) => x.id !== n.id && x.topicId === n.topicId)
    .concat(ctx.notes.filter((x) => x.id !== n.id && x.topicId !== n.topicId && x.area === n.area))
    .slice(0, 3);
  let num = 0;

  root.innerHTML = `
    <header class="nd-head area-${n.area}">
      <span class="nd-ic tone-${topic ? topic.tone : 'blue'}" aria-hidden="true">${ICONS[topic ? topic.icon : 'shield']}</span>
      <p class="nd-meta">
        <a href="centro.html?area=${n.area}">${escapeHtml(APP_DATA.areas[n.area].short)}</a><span class="sep"></span>
        ${topic ? `<a href="centro.html?area=${n.area}&tema=${encodeURIComponent(topic.id)}#guias">${escapeHtml(topic.name)}</a><span class="sep"></span>` : ''}
        ${p ? `<a href="plataforma.html?id=${encodeURIComponent(p.id)}">${escapeHtml(p.name)}</a><span class="sep"></span>` : ''}
        <span>${n.readMin} min de lectura</span>
      </p>
      <h1 class="nd-title">${escapeHtml(n.title)}</h1>
      ${n.situation ? `<p class="nd-situation"><b>Qué está pasando.</b> ${escapeHtml(n.situation)}</p>` : ''}
    </header>

    ${n.steps.length ? `
    <section class="nd-block">
      <h2 class="nd-block-title"><span class="num">${++num}</span>Qué hacer</h2>
      <ol class="nd-steps">${n.steps.map((s) => `<li><span>${escapeHtml(s)}</span></li>`).join('')}</ol>
    </section>` : ''}

    ${n.why ? `
    <section class="nd-block">
      <h2 class="nd-block-title"><span class="num">${++num}</span>Por qué funciona</h2>
      <p class="nd-why">${escapeHtml(n.why)}</p>
    </section>` : ''}

    ${n.kids ? `
    <section class="nd-block">
      <div class="nd-kids"><p class="eyebrow">Si tienes hijos</p><p>${escapeHtml(n.kids)}</p></div>
    </section>` : ''}

    ${checks.length ? `
    <section class="nd-block">
      <h2 class="nd-block-title"><span class="num">${++num}</span>Hazlo ahora</h2>
      <div class="check-list" id="nd-checks"></div>
    </section>` : ''}

    <div class="nd-done" id="nd-done"></div>

    ${related.length ? `
    <section class="section">
      <div class="section-head"><h2 class="section-title">Sigue leyendo</h2></div>
      <div class="note-list">${related.map(renderNoteCard).join('')}</div>
    </section>` : ''}
  `;

  const drawChecks = () => {
    const box = document.getElementById('nd-checks');
    if (box) box.innerHTML = checks.map((c) => renderCheckRow(c)).join('');
  };
  const cbox = document.getElementById('nd-checks');
  if (cbox) cbox.addEventListener('click', (e) => {
    const b = e.target.closest('[data-check]');
    if (b) openCheckSheet(ctx.checkById[b.dataset.check], ctx, drawChecks);
  });
  drawChecks();

  const drawDone = () => {
    const box = document.getElementById('nd-done');
    const done = !!(getNotesState()[n.id] || {}).doneOn;
    box.classList.toggle('is-done', done);
    box.innerHTML = done
      ? `<p>${ICONS.checkCircle}Guía leída</p>`
      : '<p>¿Te quedó claro?</p><button class="btn btn-primary block" type="button" id="nd-done-btn">Entendido</button>';
    const btn = document.getElementById('nd-done-btn');
    if (btn) btn.addEventListener('click', () => { markNoteDone(n.id); drawDone(); showToast('¡Bien! Guía marcada como leída'); });
  };
  drawDone();

  const fav = document.getElementById('fav-btn');
  const drawFav = () => {
    const on = isFavorite(n.id);
    fav.classList.toggle('on', on);
    fav.innerHTML = on ? ICONS.starFill : ICONS.star;
    fav.setAttribute('aria-pressed', on);
    fav.setAttribute('aria-label', on ? 'Quitar de guardados' : 'Guardar');
  };
  fav.hidden = false;
  drawFav();
  fav.addEventListener('click', () => { const on = toggleFavorite(n.id); drawFav(); showToast(on ? 'Guardada' : 'Quitada de guardados'); });
}

// ───────────────────────── PÁGINA: MI CUENTA ─────────────────────────

async function initPerfil() {
  initNav('nav-perfil');
  const root = document.getElementById('perfil-main');
  root.innerHTML = '<div class="sk" style="height:180px"></div><div class="sk sk-card" style="margin-top:16px"></div>';

  let ctx;
  try {
    ctx = await loadAll();
  } catch (e) {
    console.error(e);
    root.innerHTML = LOAD_ERROR();
    return;
  }
  bindHeaderTools(ctx);

  const editName = () => {
    openSheet('Tu nombre', `
      <p class="sheet-note">Solo se usa para saludarte. Queda guardado en este teléfono.</p>
      <label class="field-label" for="name-input">Nombre</label>
      <input class="field" id="name-input" maxlength="30" autocomplete="given-name" value="${escapeHtml(getProfile().name)}">
      <div class="sheet-actions"><button class="btn btn-ghost" type="button" data-cancel>Cancelar</button><button class="btn btn-primary" type="button" id="name-save">Guardar</button></div>`,
    (sheet) => {
      const input = sheet.querySelector('#name-input');
      setTimeout(() => input.focus(), 250);
      const save = () => { saveProfile({ ...getProfile(), name: input.value.trim() }); closeSheet(); draw(); showToast('Nombre guardado'); };
      sheet.querySelector('#name-save').addEventListener('click', save);
      sheet.querySelector('[data-cancel]').addEventListener('click', closeSheet);
      input.addEventListener('keydown', (e) => { if (e.key === 'Enter') save(); });
    });
  };

  const draw = () => {
    const p = getProfile();
    const info = scoreInfo(ctx.checks);
    const log = getChecksLog();
    const doneChecks = ctx.checks.filter((c) => isValid(checkStatus(c, log))).length;
    const quiz = Object.values(getQuizLog());
    const hits = quiz.filter((q) => q.correct).length;
    const favs = getFavorites().filter((id) => ctx.noteById[id]);
    const opened = Object.keys(getNotesState()).filter((id) => ctx.noteById[id]);
    initNav('nav-perfil');

    root.innerHTML = `
      <div class="profile-head">
        <div class="avatar">${escapeHtml((p.name || 'S').charAt(0).toUpperCase())}</div>
        <div style="min-width:0">
          <div class="profile-name-row"><h1 class="profile-name">${escapeHtml(p.name || 'Mi cuenta')}</h1><button class="icon-btn" type="button" id="edit-name" aria-label="Editar nombre">${ICONS.edit}</button></div>
          <p class="profile-sub">Miembro SafeOnline · Playtown</p>
        </div>
      </div>

      <section class="score-card compact">
        <div class="score-main">
          ${renderScoreRing(info.score, info.state.id)}
          <div>
            <p class="eyebrow">Puntuación de seguridad</p>
            <p class="score-num">${info.score}<small>/100</small></p>
            <p class="score-state st-${info.state.id}">${escapeHtml(info.state.name)}</p>
          </div>
        </div>
        <div class="sub-scores two">
          <a class="sub-link" href="centro.html?area=adultos#chequeos"><span class="area-dot area-adultos"></span>Adultos <b>${info.adultos.score}</b></a>
          <a class="sub-link ${info.hasKids ? '' : 'off'}" href="centro.html?area=familia#chequeos"><span class="area-dot area-familia"></span>Familia <b>${info.hasKids ? info.familia.score : '—'}</b></a>
        </div>
      </section>

      <div class="stats-row">
        <div class="stat"><p class="stat-num">${doneChecks}</p><p class="stat-label">Chequeos al día</p></div>
        <div class="stat"><p class="stat-num">${getAlertsRead().length}</p><p class="stat-label">Alertas revisadas</p></div>
        <div class="stat"><p class="stat-num">${hits}<small>/${quiz.length}</small></p><p class="stat-label">Estafas detectadas</p></div>
      </div>

      <p class="list-label">Configuración</p>
      <div class="menu-list">
        <label class="menu-item toggle-item"><span class="mi-ic">${ICONS.moon}</span>Modo oscuro<input class="switch" type="checkbox" id="tg-dark" ${isDarkTheme() ? 'checked' : ''}></label>
        <label class="menu-item toggle-item"><span class="mi-ic">${ICONS.users}</span><span>Tengo chicos a cargo<small>Suma el área Familia a tu puntuación</small></span><input class="switch" type="checkbox" id="tg-kids" ${p.hasKids ? 'checked' : ''}></label>
      </div>

      <p class="list-label">Privacidad y datos</p>
      <div class="menu-list">
        <button class="menu-item" type="button" id="mi-favs"><span class="mi-ic">${ICONS.star}</span>Mis guardados<span class="mi-count">${favs.length}</span><span class="mi-chev">${ICONS.chevron}</span></button>
        <button class="menu-item" type="button" id="mi-hist"><span class="mi-ic">${ICONS.history}</span>Historial de guías<span class="mi-count">${opened.length}</span><span class="mi-chev">${ICONS.chevron}</span></button>
        <button class="menu-item danger" type="button" id="mi-reset"><span class="mi-ic">${ICONS.trash}</span>Borrar datos locales<span class="mi-chev">${ICONS.chevron}</span></button>
      </div>
      <p class="privacy-note">${ICONS.lock}Todo lo que marcas queda solo en este teléfono. No tenemos cuentas ni guardamos tus datos.</p>
    `;

    document.getElementById('edit-name').addEventListener('click', editName);
    document.getElementById('tg-dark').addEventListener('change', (e) => setTheme(e.target.checked ? 'dark' : 'light'));
    document.getElementById('tg-kids').addEventListener('change', (e) => {
      saveProfile({ ...getProfile(), hasKids: e.target.checked });
      draw();
      showToast(e.target.checked ? 'Familia suma a tu puntuación' : 'Familia ya no suma a tu puntuación');
    });
    document.getElementById('mi-favs').addEventListener('click', () => {
      const list = getFavorites().map((id) => ctx.noteById[id]).filter(Boolean);
      openSheet('Mis guardados', list.length ? `<div class="note-list">${list.map(renderNoteCard).join('')}</div>`
        : emptyState('Aún no guardaste guías', 'Toca la estrella en cualquier guía para tenerla a mano.'));
    });
    document.getElementById('mi-hist').addEventListener('click', () => {
      const st = getNotesState();
      const list = Object.keys(st).filter((id) => ctx.noteById[id])
        .sort((a, b) => (st[b].openedAt || '').localeCompare(st[a].openedAt || '')).map((id) => ctx.noteById[id]);
      openSheet('Historial de guías', list.length ? `<div class="note-list">${list.map(renderNoteCard).join('')}</div>`
        : emptyState('Todavía no abriste guías', 'Empieza por los consejos de Inicio.'));
    });
    document.getElementById('mi-reset').addEventListener('click', () => {
      if (!confirm('Se borrarán tu puntuación, chequeos, guardados y nombre de este teléfono. ¿Continuar?')) return;
      resetLocalData();
      showToast('Datos borrados');
      setTimeout(() => location.reload(), 600);
    });
  };

  draw();
}

// ───────────────────────── VALIDACIÓN DE ANI ─────────────────────────
// Mismo sistema que Retofit, MindMusic, Mis Gastos en Orden e Historias del
// Mundo. Sin login: lo único que habilita la app es que el ANI esté suscripto
// al club.
//   1. La operadora redirige con ?ani=... → ya viene validado, se guarda.
//   2. Sin ANI válido → pantalla bloqueante para cargarlo a mano.
// La validación se renueva por mes calendario (el ciclo de facturación).

const ANI_KEY = STORAGE_KEYS.ani;
const ANI_VALIDATE_BASE = 'https://restito.playtown.com.ar:3000/club/checkClubSubscription/playar';
// TODO: club ID de SafeOnline en el sistema de Playtown (Retofit = 35).
// Con 'TODO' la API responde "no suscripto" y nadie entra por el camino manual.
const ANI_CLUB_ID = 'TODO';
const ANI_BEARER = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.pwI0ElRICzc-j85krDiV5nUkz_lZLwmiuJ3m790JNBQ';
// Chile es el mercado de lanzamiento (va primero y por defecto); sumar un país
// es agregar una fila acá (y sus canales de denuncia en el contenido).
const ANI_COUNTRIES = [
  { prefix: '56', name: 'Chile', flag: '🇨🇱', placeholder: '9 1234 5678' },
  { prefix: '54', name: 'Argentina', flag: '🇦🇷', placeholder: '11 1234 5678' },
  { prefix: '595', name: 'Paraguay', flag: '🇵🇾', placeholder: '961 123456' },
];

function isAniValidThisMonth() {
  const saved = readJson(ANI_KEY, null);
  if (!saved || !saved.ani || !saved.validatedAt) return false;
  const d = new Date(saved.validatedAt);
  const now = new Date();
  return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth();
}

function saveAni(ani) {
  writeJson(ANI_KEY, { ani, validatedAt: new Date().toISOString() });
}

async function validateAniWithApi(fullAni) {
  const res = await fetch(`${ANI_VALIDATE_BASE}/${encodeURIComponent(fullAni)}/${ANI_CLUB_ID}`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${ANI_BEARER}` },
    // La API tarda varios segundos; sin corte, una red caída deja el botón
    // en "VERIFICANDO..." para siempre.
    signal: AbortSignal.timeout(20000),
  });
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const data = await res.json();
  return typeof data.result === 'object' && !!data.result?.ANI;
}

function checkAniInUrl() {
  const ani = qs('ani');
  if (!ani || !ani.trim()) return false;
  saveAni(ani.trim());
  const url = new URL(location.href);
  url.searchParams.delete('ani');
  history.replaceState(null, '', url.toString());
  return true;
}

// Saca todo lo que no sea dígito, los 0 iniciales y el prefijo si lo escribió.
function normalizeAniInput(value, prefix) {
  let digits = String(value).replace(/\D/g, '').replace(/^0+/, '');
  if (digits.startsWith(prefix) && digits.length > 9) digits = digits.slice(prefix.length);
  return digits;
}

function showAniGate() {
  if (document.getElementById('ani-gate')) return;
  const first = ANI_COUNTRIES[0];
  const gate = document.createElement('div');
  gate.id = 'ani-gate';
  gate.className = 'ani-gate';
  gate.innerHTML = `
    <div class="ani-card" role="dialog" aria-modal="true" aria-labelledby="ani-title">
      <div class="ani-brand"><img src="assets/brand/logo-mark.png" alt=""><span>SafeOnline<small>Digital Guardian</small></span></div>
      <h2 class="ani-title" id="ani-title">Verifica tu suscripción</h2>
      <p class="ani-sub">Para entrar a SafeOnline necesitas una suscripción activa. Ingresa el número de tu línea para verificarla.</p>
      <label class="ani-label" for="ani-country">País</label>
      <select class="field ani-select" id="ani-country">
        ${ANI_COUNTRIES.map((c) => `<option value="${c.prefix}">${c.flag} ${c.name} (+${c.prefix})</option>`).join('')}
      </select>
      <label class="ani-label" for="ani-input">Número de celular</label>
      <div class="ani-input-wrap">
        <span class="ani-cc" id="ani-cc">+${first.prefix}</span>
        <input class="ani-input" type="tel" id="ani-input" placeholder="${first.placeholder}" inputmode="numeric" maxlength="16" autocomplete="tel-national">
      </div>
      <p class="ani-error" id="ani-error" role="alert"></p>
      <button class="ani-btn" id="ani-btn" type="button">VERIFICAR</button>
      <p class="ani-foot">Sin registro ni contraseña: solo validamos que tu línea tenga el servicio activo.</p>
    </div>`;
  document.body.appendChild(gate);
  document.body.style.overflow = 'hidden';

  const input = gate.querySelector('#ani-input');
  const sel = gate.querySelector('#ani-country');
  sel.addEventListener('change', () => {
    const c = ANI_COUNTRIES.find((x) => x.prefix === sel.value) || first;
    gate.querySelector('#ani-cc').textContent = `+${c.prefix}`;
    input.placeholder = c.placeholder;
  });
  gate.querySelector('#ani-btn').addEventListener('click', handleAniValidate);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleAniValidate(); });
}

function hideAniGate() {
  document.getElementById('ani-gate')?.remove();
  document.body.style.overflow = '';
}

async function handleAniValidate() {
  const btn = document.getElementById('ani-btn');
  const errEl = document.getElementById('ani-error');
  const input = document.getElementById('ani-input');
  const prefix = document.getElementById('ani-country')?.value || ANI_COUNTRIES[0].prefix;
  if (!btn || !errEl || !input) return;

  errEl.textContent = '';
  const digits = normalizeAniInput(input.value, prefix);
  if (digits.length < 8) {
    errEl.textContent = 'Ingresa un número válido, sin el 0 inicial.';
    return;
  }

  btn.disabled = true;
  btn.textContent = 'VERIFICANDO...';
  try {
    if (await validateAniWithApi(prefix + digits)) {
      saveAni(prefix + digits);
      hideAniGate();
    } else {
      errEl.textContent = 'Número no suscripto. Contacta a tu operadora para activar el servicio.';
    }
  } catch (e) {
    errEl.textContent = 'No pudimos verificar. Revisa tu conexión e intenta de nuevo.';
  } finally {
    btn.disabled = false;
    btn.textContent = 'VERIFICAR';
  }
}

// La página se arma igual detrás del velo, así queda lista al validar.
function initAniGuard() {
  checkAniInUrl();
  if (ANI_CLUB_ID === 'TODO') console.warn('[ANI] ANI_CLUB_ID sin configurar en app.js — ninguna validación manual va a pasar.');
  if (!isAniValidThisMonth()) showAniGate();
}

// ───────────────────────── ROUTER ─────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initAniGuard();
  if (document.getElementById('home-container')) { initHome(); return; }
  if (document.getElementById('seguridad-container')) { initSeguridad(); return; }
  if (document.getElementById('plataforma-container')) { initPlataforma(); return; }
  if (document.getElementById('centro-container')) { initCentro(); return; }
  if (document.getElementById('nota-container')) { initNota(); return; }
  if (document.getElementById('perfil-container')) { initPerfil(); return; }
});
