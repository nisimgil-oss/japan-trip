/* ============================================================
   יפן 2026 · חגיגות 40 — bilingual (he / es-AR) planner engine
   ============================================================ */
(function () {
  'use strict';

  const LANGS = ['he', 'es'];
  const LS_LANG = 'japanTrip.lang';
  const tripKey = (lang) => 'japanTrip.v3.' + lang;
  const LS_CHECK = 'japanTrip.checklist.v3';
  const LS_PREFS = 'japanTrip.prefs.v3';
  const LS_HOTELS = 'japanTrip.hotels.v1';

  let lang = localStorage.getItem(LS_LANG) || 'he';
  if (LANGS.indexOf(lang) < 0) lang = 'he';
  let state = null, curDay = 0, editing = { day: null, id: null };

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const uid = () => 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  const safeParse = (s) => { try { return JSON.parse(s); } catch (_) { return null; } };
  const escapeHtml = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const escapeAttr = (s) => escapeHtml(s).replace(/'/g, '&#39;');

  const TYPE_ICON = { transport: '🚄', food: '🍜', sightseeing: '⛩️', experience: '✨', culture: '🎎', anime: '🎮', onsen: '♨️', nightlife: '🌈', shopping: '🛍️', rest: '☕', checkin: '🛎️', birthday: '🎂' };
  const TYPES = ['sightseeing', 'food', 'experience', 'culture', 'anime', 'onsen', 'nightlife', 'shopping', 'transport', 'rest', 'checkin', 'birthday'];
  const CITY_EMOJI = [['tokyo', '🗼'], ['טוקיו', '🗼'], ['tokio', '🗼'], ['hakone', '♨️'], ['האקונה', '♨️'], ['kyoto', '⛩️'], ['kioto', '⛩️'], ['קיוטו', '⛩️'], ['osaka', '🍢'], ['אוסקה', '🍢'], ['nara', '🦌'], ['נארה', '🦌']];
  const CITY_LATIN = [['tokyo', 'Tokyo'], ['טוקיו', 'Tokyo'], ['tokio', 'Tokyo'], ['hakone', 'Hakone'], ['האקונה', 'Hakone'], ['kyoto', 'Kyoto'], ['kioto', 'Kyoto'], ['קיוטו', 'Kyoto'], ['osaka', 'Osaka'], ['אוסקה', 'Osaka'], ['nara', 'Nara'], ['נארה', 'Nara']];

  // ---------- i18n ----------
  const T = {
    he: {
      _title: 'יפן 2026 · חגיגות 40', dir: 'rtl',
      'hero.japan': 'יפן', 'hero.sub': '🏮 חגיגות 40 · מסע אהבה, אוכל ותרבות 🌸',
      'hero.arrive': 'נחיתה בטוקיו 18:25', 'hero.depart': 'המראה 12:00', 'hero.cities': '🗾 טוקיו · האקונה · קיוטו · אוסקה · נארה',
      'tab.itinerary': 'היומן', 'tab.overview': 'מבט־על', 'tab.guide': 'מדריך', 'tab.food': 'אוכל', 'tab.restaurants': 'מסעדות', 'tab.prep': 'הכנות',
      'toolbar.addEvent': '＋ הוסף פעילות ליום הזה', 'toolbar.backup': '⬇️ גיבוי', 'toolbar.restore': '⬆️ שחזור', 'toolbar.petals': '🌸 פרחים', 'toolbar.reset': '↺ אפס תכנון',
      'overview.title': '🗾 כל הטיול במבט אחד', 'restaurants.title': '🍣 מקומות מיוחדים לאכול',
      'foot': 'נבנה באהבה עבורכם ❤️ · תכנון גמיש — שנו, הוסיפו וסמנו ✓ · いってらっしゃい',
      'f.start': 'משעה', 'f.end': 'עד שעה', 'f.title': 'כותרת', 'f.type': 'סוג', 'f.area': 'אזור / מיקום', 'f.desc': 'תיאור', 'f.tips': 'טיפ', 'f.cost': 'עלות', 'f.booking': 'הזמנה מראש', 'f.note': 'הערה אישית שלכם', 'f.delete': '🗑️ מחק', 'f.cancel': 'ביטול', 'f.save': 'שמירה',
      langToggle: '🇦🇷 Español', day: 'יום', night: 'לינה', bday: 'יום ההולדת!', addTitle: 'פעילות חדשה', editTitle: 'עריכת פעילות',
      highlight: 'מומלץ במיוחד', empty: 'אין עדיין פעילויות ליום הזה — הוסיפו אחת ↓',
      saved: 'נשמר ✓', deleted: 'נמחק', resetDone: 'אופס לתכנון המקורי', backedup: 'גובה ✓', restored: 'שוחזר ✓', badfile: 'קובץ לא תקין', verChanged: 'התכנון עודכן לגרסה חדשה ✨',
      confirmDel: (t) => 'למחוק את "' + t + '"?', confirmReset: 'לאפס את כל השינויים ולחזור לתכנון המקורי?',
      cdBefore: (n) => '✈️ עוד <b>' + n + '</b> ימים', cdDuring: (n) => '🎌 יום <b>' + n + '</b> בטיול!', cdAfter: '🌸 <b>おかえり</b>',
      flights: '✈️ הטיסות שלכם', outbound: 'הלוך', ret: 'חזור', seat: 'מושב', airline: 'חברת תעופה', baggage: 'כבודה', passenger: 'נוסע',
      restAll: 'הכל', rWhy: 'למה מיוחד', rDish: 'לא לפספס', rPrice: 'מחיר', rBook: 'הזמנה', rReserve: 'צריך להזמין', jump: 'לפרטים ביום ↗',
      loading: 'נטען…',
      'tab.hotels': 'מלונות', 'hotels.title': '🏨 בחירת מלונות',
      hSelected: '✓ נבחר', hChoose: 'בחרו מלון זה', hPerNight: 'ללילה', hPerCouple: 'לזוג · חצי פנסיון', hBook: 'להזמנה ↗', hNights: (n) => n === 1 ? 'לילה אחד' : n + ' לילות', hStayHotel: 'המלון שנבחר', hPickHint: 'בחרו מלון בטאב ״מלונות״',
      mapsDay: '🗺️ מסלול היום במפות', mapsOpen: 'פתח במפות ↗',
      'tab.experiences': 'חוויות', 'experiences.title': '✨ עוד חוויות מיוחדות',
      budgetTitle: '💴 כמה יעלה הטיול (בערך)', budgetTotal: 'סה״כ מוערך לזוג', budgetPerPerson: 'לאדם', budgetNote: 'הערכה בלבד — לא כולל קניות גדולות/בלת״מ. הטיסות כבר שולמו.',
      tags: { mid: 'מחיר בינוני', value: 'תמורה מעולה', splurge: 'פינוק', gayfriendly: 'גיי-פרנדלי', laundry: 'כביסה בחדר', anime: 'לחובבי אנימה', birthday: 'ליומולדת', privateonsen: 'אונסן פרטי', rooftopbath: 'אמבט על הגג', central: 'מרכזי', views: 'נוף' },
      types: { sightseeing: 'אתר / תצפית', food: 'אוכל', experience: 'חוויה', culture: 'תרבות', anime: 'אנימה/מנגה', onsen: 'אונסן', nightlife: 'חיי לילה', shopping: 'קניות', transport: 'נסיעה', rest: 'מנוחה', checkin: 'צ׳ק-אין', birthday: 'יומולדת' },
      dow: { Fri: 'שישי', Sat: 'שבת', Sun: 'ראשון', Mon: 'שני', Tue: 'שלישי', Wed: 'רביעי', Thu: 'חמישי' },
    },
    es: {
      _title: 'Japón 2026 · Cumple 40', dir: 'ltr',
      'hero.japan': 'Japón', 'hero.sub': '🏮 Cumpleaños 40 · un viaje de amor, comida y cultura 🌸',
      'hero.arrive': 'Llegada a Tokio 18:25', 'hero.depart': 'Despegue 12:00', 'hero.cities': '🗾 Tokio · Hakone · Kioto · Osaka · Nara',
      'tab.itinerary': 'Itinerario', 'tab.overview': 'Vista general', 'tab.guide': 'Guía', 'tab.food': 'Comida', 'tab.restaurants': 'Restaurantes', 'tab.prep': 'Preparativos',
      'toolbar.addEvent': '＋ Agregar actividad a este día', 'toolbar.backup': '⬇️ Respaldo', 'toolbar.restore': '⬆️ Restaurar', 'toolbar.petals': '🌸 Pétalos', 'toolbar.reset': '↺ Reiniciar plan',
      'overview.title': '🗾 Todo el viaje de un vistazo', 'restaurants.title': '🍣 Lugares especiales para comer',
      'foot': 'Hecho con amor para ustedes ❤️ · plan flexible — cambiá, agregá y marcá ✓ · いってらっしゃい',
      'f.start': 'Desde', 'f.end': 'Hasta', 'f.title': 'Título', 'f.type': 'Tipo', 'f.area': 'Zona / lugar', 'f.desc': 'Descripción', 'f.tips': 'Tip', 'f.cost': 'Costo', 'f.booking': 'Reserva previa', 'f.note': 'Nota personal', 'f.delete': '🗑️ Borrar', 'f.cancel': 'Cancelar', 'f.save': 'Guardar',
      langToggle: '🇮🇱 עברית', day: 'Día', night: 'Alojamiento', bday: '¡el cumpleaños!', addTitle: 'Nueva actividad', editTitle: 'Editar actividad',
      highlight: 'Muy recomendado', empty: 'Todavía no hay actividades este día — agregá una ↓',
      saved: 'Guardado ✓', deleted: 'Borrado', resetDone: 'Plan reiniciado', backedup: 'Respaldo listo ✓', restored: 'Restaurado ✓', badfile: 'Archivo inválido', verChanged: 'El plan se actualizó ✨',
      confirmDel: (t) => '¿Borrar "' + t + '"?', confirmReset: '¿Reiniciar todos los cambios y volver al plan original?',
      cdBefore: (n) => '✈️ faltan <b>' + n + '</b> días', cdDuring: (n) => '🎌 ¡día <b>' + n + '</b> del viaje!', cdAfter: '🌸 <b>¡bienvenidos!</b>',
      flights: '✈️ Sus vuelos', outbound: 'Ida', ret: 'Vuelta', seat: 'Asiento', airline: 'Aerolínea', baggage: 'Equipaje', passenger: 'Pasajero',
      restAll: 'Todos', rWhy: 'Por qué es especial', rDish: 'No te pierdas', rPrice: 'Precio', rBook: 'Reserva', rReserve: 'Hay que reservar', jump: 'Ver en el día ↗',
      loading: 'Cargando…',
      'tab.hotels': 'Hoteles', 'hotels.title': '🏨 Elegí tu hotel',
      hSelected: '✓ Elegido', hChoose: 'Elegir este hotel', hPerNight: 'por noche', hPerCouple: 'por pareja · media pensión', hBook: 'Reservar ↗', hNights: (n) => n === 1 ? '1 noche' : n + ' noches', hStayHotel: 'Hotel elegido', hPickHint: 'Elegí un hotel en la pestaña "Hoteles"',
      mapsDay: '🗺️ Recorrido del día en Maps', mapsOpen: 'Abrir en Maps ↗',
      'tab.experiences': 'Experiencias', 'experiences.title': '✨ Más experiencias especiales',
      budgetTitle: '💴 Cuánto sale el viaje (aprox.)', budgetTotal: 'Total estimado (pareja)', budgetPerPerson: 'por persona', budgetNote: 'Solo una estimación — sin compras grandes/imprevistos. Los vuelos ya están pagos.',
      tags: { mid: 'gama media', value: 'buen precio', splurge: 'lujo', gayfriendly: 'gay-friendly', laundry: 'lavarropas', anime: 'para fans del anime', birthday: 'para el cumple', privateonsen: 'onsen privado', rooftopbath: 'baño en la terraza', central: 'céntrico', views: 'con vista' },
      types: { sightseeing: 'Lugar / mirador', food: 'Comida', experience: 'Experiencia', culture: 'Cultura', anime: 'Anime/manga', onsen: 'Onsen', nightlife: 'Vida nocturna', shopping: 'Compras', transport: 'Traslado', rest: 'Descanso', checkin: 'Check-in', birthday: 'Cumpleaños' },
      dow: { Fri: 'vie', Sat: 'sáb', Sun: 'dom', Mon: 'lun', Tue: 'mar', Wed: 'mié', Thu: 'jue' },
    },
  };
  const t = (k) => (T[lang] && T[lang][k] != null) ? T[lang][k] : k;
  const data = () => (window.TRIP_DATA && window.TRIP_DATA[lang]) || { days: [], guide: { sections: [] }, restaurants: [] };
  const flights = () => (window.TRIP_DATA && window.TRIP_DATA.flights) || null;

  // ---------- state ----------
  function seedFromDefault(def) {
    return { version: 3, dataV: (window.TRIP_DATA && window.TRIP_DATA.v) || 'x',
      days: (def.days || []).map((d, di) => ({ ...d, events: (d.events || []).map((e, ei) => ({ id: 'd' + di + '-' + ei, done: false, note: '', ...e })) })) };
  }
  function initState() {
    const def = data(); const dv = (window.TRIP_DATA && window.TRIP_DATA.v) || 'x';
    const saved = safeParse(localStorage.getItem(tripKey(lang)));
    if (saved && saved.days && saved.days.length && saved.dataV === dv) state = saved;
    else { state = seedFromDefault(def); if (saved && saved.dataV && saved.dataV !== dv) toast(t('verChanged')); }
  }
  const save = () => localStorage.setItem(tripKey(lang), JSON.stringify(state));

  // ---------- helpers ----------
  function cityEmoji(city) { if (!city) return '📍'; const k = city.toLowerCase(); for (const [key, e] of CITY_EMOJI) if (k.includes(key)) return e; return '📍'; }
  const fmtDate = (iso) => { const p = iso.split('-'); return parseInt(p[2], 10) + '.' + parseInt(p[1], 10); };
  const sortEvents = (evs) => evs.slice().sort((a, b) => (a.start || '').localeCompare(b.start || ''));
  function toast(msg) { const el = $('#toast'); el.innerHTML = msg; el.classList.add('show'); clearTimeout(toast._t); toast._t = setTimeout(() => el.classList.remove('show'), 1900); }
  const dowT = (d) => (T[lang].dow[d] || d);

  // ---------- day rail ----------
  function renderRail() {
    const rail = $('#dayRail'); rail.innerHTML = '';
    state.days.forEach((d, i) => {
      const el = document.createElement('button');
      el.className = 'daychip' + (i === curDay ? ' active' : '') + (d.birthday ? ' bday' : '');
      el.innerHTML = `<div class="dnum">${t('day')} ${i + 1}</div><div class="ddate">${fmtDate(d.date)}</div><div class="dcity"><span class="demoji">${cityEmoji(d.city)}</span> ${escapeHtml(d.city || '')}</div>`;
      el.onclick = () => { curDay = i; renderRail(); renderDay(); savePrefs(); };
      rail.appendChild(el);
    });
    if (rail.children[curDay]) rail.children[curDay].scrollIntoView({ inline: 'center', block: 'nearest' });
  }

  // ---------- day view ----------
  function renderDay() {
    const d = state.days[curDay]; if (!d) return;
    const stay = stayForDate(d.date); const selOpt = selectedOption(stay);
    const hotelName = selOpt ? selOpt.name : (d.hotel || '');
    const hotelArea = selOpt && selOpt[lang] && selOpt[lang].area ? ' · ' + selOpt[lang].area : '';
    const hotelUrl = hotelName ? placeUrl(hotelName + ' ' + cityLatin(d.city)) : null;
    const routeUrl = dayRouteUrl(d);
    $('#dayHead').innerHTML =
      `<div><div class="dh-city">${cityEmoji(d.city)} ${escapeHtml(d.city || '')} · ${dowT(d.dow)} ${fmtDate(d.date)}${d.birthday ? ' · 🎂 ' + t('bday') : ''}</div>` +
      `<div class="dh-title">${escapeHtml(d.title || '')}</div>` +
      (d.summary ? `<div class="dh-sum">${escapeHtml(d.summary)}</div>` : '') +
      (hotelName ? `<div class="dh-hotel">🛏️ ${t('night')}: <b dir="auto">${escapeHtml(hotelName)}</b>${escapeHtml(hotelArea)}${hotelUrl ? ` <a class="dh-maplink" href="${hotelUrl}" target="_blank" rel="noopener">🗺️</a>` : ''}${selOpt ? ` <span class="dh-picked">${t('hSelected')}</span>` : ''}</div>` : '') +
      (routeUrl ? `<div class="dh-actions"><a class="btn btn-ghost btn-sm" href="${routeUrl}" target="_blank" rel="noopener">${t('mapsDay')}</a></div>` : '') +
      `</div>`;
    const tl = $('#timeline'); tl.innerHTML = '<div class="tl-line"></div>';
    const evs = sortEvents(d.events || []);
    if (!evs.length) { const e = document.createElement('div'); e.style.cssText = 'padding:20px 0 6px;color:var(--cream-faint);padding-inline-start:88px'; e.textContent = t('empty'); tl.appendChild(e); }
    evs.forEach(e => tl.appendChild(eventEl(e)));
  }

  function eventEl(e) {
    const wrap = document.createElement('div'); wrap.className = 'ev t-' + (e.type || 'sightseeing');
    const city = (state.days[curDay] || {}).city;
    const meta = [];
    if (e.highlight) meta.push(`<span class="chip hl">${t('highlight')}</span>`);
    if (e.cost) meta.push('<span class="chip cost">' + escapeHtml(e.cost) + '</span>');
    if (e.booking) meta.push('<span class="chip book">' + escapeHtml(e.booking) + '</span>');
    wrap.innerHTML =
      `<div class="ev-time">${escapeHtml(e.start || '')}${e.end ? `<span class="end">${escapeHtml(e.end)}</span>` : ''}</div><div class="ev-node"></div>` +
      `<div class="ev-card${e.done ? ' done' : ''}"><div class="ev-actions"><button class="iconbtn" data-act="edit">✎</button><button class="iconbtn" data-act="del">🗑</button></div>` +
      `<div class="ev-top"><span class="ev-ic">${TYPE_ICON[e.type] || '📍'}</span><span class="ev-title">${escapeHtml(e.title || '')}</span></div>` +
      (e.area ? `<a class="ev-area" href="${placeUrl(placeQuery(e, city))}" target="_blank" rel="noopener" title="${t('mapsOpen')}">${escapeHtml(e.area)}</a>` : '') +
      (e.desc ? `<div class="ev-desc">${escapeHtml(e.desc)}</div>` : '') +
      (e.tips ? `<div class="ev-tip">${escapeHtml(e.tips)}</div>` : '') +
      (e.note ? `<div class="ev-note">${escapeHtml(e.note)}</div>` : '') +
      (meta.length ? `<div class="ev-meta">${meta.join('')}</div>` : '') +
      `<label class="ev-check"><input type="checkbox" ${e.done ? 'checked' : ''}></label></div>`;
    wrap.querySelector('[data-act=edit]').onclick = () => openModal(curDay, e.id);
    wrap.querySelector('[data-act=del]').onclick = () => { if (confirm(t('confirmDel')(e.title || ''))) deleteEvent(curDay, e.id); };
    wrap.querySelector('.ev-check input').onchange = (ev) => { e.done = ev.target.checked; save(); renderDay(); };
    return wrap;
  }

  // ---------- CRUD ----------
  const findEvent = (day, id) => (state.days[day].events || []).find(x => x.id === id);
  function deleteEvent(day, id) { state.days[day].events = state.days[day].events.filter(x => x.id !== id); save(); renderDay(); toast(t('deleted')); }
  function typeOptions(sel) { return TYPES.map(ty => `<option value="${ty}"${ty === sel ? ' selected' : ''}>${TYPE_ICON[ty]} ${T[lang].types[ty]}</option>`).join(''); }
  function openModal(day, id) {
    editing = { day, id };
    const e = id ? findEvent(day, id) : { start: '10:00', end: '', title: '', type: 'sightseeing', area: '', desc: '', tips: '', cost: '', booking: '', note: '' };
    $('#modalTitle').textContent = id ? t('editTitle') : t('addTitle');
    $('#f-type').innerHTML = typeOptions(e.type || 'sightseeing');
    $('#f-start').value = e.start || ''; $('#f-end').value = e.end || ''; $('#f-title').value = e.title || '';
    $('#f-area').value = e.area || ''; $('#f-desc').value = e.desc || ''; $('#f-tips').value = e.tips || '';
    $('#f-cost').value = e.cost || ''; $('#f-booking').value = e.booking || ''; $('#f-note').value = e.note || '';
    $('#modalDelete').style.display = id ? '' : 'none';
    $('#modal').classList.add('open');
  }
  const closeModal = () => { $('#modal').classList.remove('open'); editing = { day: null, id: null }; };
  function saveModal() {
    const { day, id } = editing; if (day === null) return;
    const dta = { start: $('#f-start').value || '00:00', end: $('#f-end').value, title: $('#f-title').value.trim() || '—', type: $('#f-type').value, area: $('#f-area').value.trim(), desc: $('#f-desc').value.trim(), tips: $('#f-tips').value.trim(), cost: $('#f-cost').value.trim(), booking: $('#f-booking').value.trim(), note: $('#f-note').value.trim() };
    if (id) Object.assign(findEvent(day, id), dta); else state.days[day].events.push({ id: uid(), done: false, ...dta });
    save(); closeModal(); renderDay(); toast(t('saved'));
  }

  // ---------- markdown ----------
  function md(src) {
    if (!src) return '';
    const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const inline = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/(^|[^*])\*(?!\s)([^*]+?)\*/g, '$1<em>$2</em>').replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    const out = []; let inList = false; const closeList = () => { if (inList) { out.push('</ul>'); inList = false; } };
    src.replace(/\r/g, '').split('\n').forEach(raw => {
      const line = raw.trim();
      if (!line) { closeList(); return; }
      if (/^---+$/.test(line)) { closeList(); out.push('<hr>'); return; }
      let m;
      if ((m = line.match(/^###?\s+(.*)/))) { closeList(); out.push('<h3 dir="auto">' + inline(m[1]) + '</h3>'); return; }
      if ((m = line.match(/^[-*]\s+(.*)/))) { if (!inList) { out.push('<ul>'); inList = true; } out.push('<li dir="auto">' + inline(m[1]) + '</li>'); return; }
      closeList(); out.push('<p dir="auto">' + inline(line) + '</p>');
    });
    closeList(); return out.join('');
  }

  // ---------- guide ----------
  const FOOD_RE = /food|eat|street|market|dish|cuisine|drink|izakaya|אוכל|קולינר|מסעד|רחוב|שוק|מנ|טעימ|comida|comer|calle|mercado|plato|gastro/i;
  const isFood = (s) => FOOD_RE.test((s.id || '') + ' ' + (s.title || ''));
  const guideSections = () => (data().guide && data().guide.sections) || [];
  function sectionEl(sec, open) {
    const det = document.createElement('details'); det.className = 'gsec'; det.id = 'sec-' + (sec.id || Math.random().toString(36).slice(2)); if (open) det.open = true;
    let cards = '';
    if (sec.cards && sec.cards.length) cards = '<div class="cards">' + sec.cards.map(c => `<div class="card"><div class="cn" dir="auto">${escapeHtml(c.name)}</div>${c.sub ? `<div class="cs" dir="auto">${escapeHtml(c.sub)}</div>` : ''}<div class="cd" dir="auto">${escapeHtml(c.desc)}</div></div>`).join('') + '</div>';
    det.innerHTML = `<summary><span class="gic">${sec.icon || '📌'}</span><span><span dir="auto">${escapeHtml(sec.title)}</span>${sec.intro ? `<span class="gintro" dir="auto">${escapeHtml(sec.intro)}</span>` : ''}</span></summary><div class="gbody">${md(sec.body)}${cards}</div>`;
    return det;
  }
  function renderGuide() {
    const secs = guideSections().filter(s => !isFood(s)); const body = $('#guideBody'), nav = $('#guideNav'); body.innerHTML = ''; nav.innerHTML = '';
    secs.forEach((s, i) => {
      body.appendChild(sectionEl(s, i === 0));
      const b = document.createElement('button'); b.className = 'gnav'; b.innerHTML = (s.icon || '') + ' ' + escapeHtml(s.title);
      b.onclick = () => { const el = body.children[i]; if (el) { el.open = true; el.scrollIntoView({ behavior: 'smooth', block: 'start' }); } };
      nav.appendChild(b);
    });
    if (!secs.length) body.innerHTML = `<div class="panel">${t('loading')}</div>`;
  }
  function renderFood() { const secs = guideSections().filter(isFood); const body = $('#foodBody'); body.innerHTML = ''; secs.forEach(s => body.appendChild(sectionEl(s, true))); if (!secs.length) body.innerHTML = `<div class="panel">${t('loading')}</div>`; }

  // ---------- overview (flights + agenda) ----------
  function renderFlights() {
    const f = flights(); const box = $('#flightsPanel'); if (!f) { box.innerHTML = ''; return; }
    const leg = (l) => `<div class="fl-leg"><div class="fl-code">${escapeHtml(l.flight)}</div><div class="fl-route"><b>${escapeHtml(l.from)}</b> → <b>${escapeHtml(l.to)}</b><div class="fl-times">🛫 ${escapeHtml(l.dep)} · 🛬 ${escapeHtml(l.arr)}${l.seat ? ' · ' + t('seat') + ' ' + escapeHtml(l.seat) : ''}</div>${l.note ? `<div class="fl-note">${escapeHtml(l.note)}</div>` : ''}</div></div>`;
    box.innerHTML = `<div class="panel flights"><h2>${t('flights')}</h2>` +
      `<div class="fl-meta">✈️ ${escapeHtml(f.airline)} · 👤 ${t('passenger')}: ${escapeHtml(f.passenger)} · 🧳 ${escapeHtml(f.baggage)}</div>` +
      `<div class="fl-group"><div class="fl-dir">🛫 ${t('outbound')}</div>${f.outbound.map(leg).join('')}</div>` +
      `<div class="fl-group"><div class="fl-dir">🛬 ${t('ret')}</div>${f.ret.map(leg).join('')}</div></div>`;
  }
  function renderAgenda() {
    const box = $('#agenda'); box.innerHTML = '';
    state.days.forEach((d, i) => {
      const evs = sortEvents(d.events || []);
      const card = document.createElement('div'); card.className = 'ag-day' + (d.birthday ? ' bday' : '');
      card.innerHTML = `<div class="ag-head"><span class="ag-n">${t('day')} ${i + 1}</span><span class="ag-date">${cityEmoji(d.city)} ${fmtDate(d.date)} · ${dowT(d.dow)}</span><span class="ag-city">${escapeHtml(d.city || '')}${d.birthday ? ' 🎂' : ''}</span><span class="ag-title">${escapeHtml(d.title || '')}</span></div>` +
        `<ul class="ag-list">${evs.map(e => `<li class="t-${e.type || 'sightseeing'}"><span class="ag-t">${escapeHtml(e.start || '')}</span><span class="ag-ic">${TYPE_ICON[e.type] || '📍'}</span><span class="ag-name${e.done ? ' done' : ''}" dir="auto">${escapeHtml(e.title || '')}</span></li>`).join('')}</ul>` +
        `<button class="ag-jump" data-i="${i}">${t('jump')}</button>`;
      card.querySelector('.ag-jump').onclick = () => { curDay = i; showView('itinerary'); renderRail(); renderDay(); };
      card.querySelector('.ag-head').onclick = () => { curDay = i; showView('itinerary'); renderRail(); renderDay(); };
      box.appendChild(card);
    });
  }
  function renderOverview() { renderFlights(); renderAgenda(); renderBudget(); }

  // ---------- restaurants ----------
  let restCity = 'all';
  function renderRestaurants() {
    const list = data().restaurants || []; const filt = $('#restFilter'), body = $('#restBody');
    const cities = []; list.forEach(r => { if (r.city && cities.indexOf(r.city) < 0) cities.push(r.city); });
    filt.innerHTML = [`<button class="rchip${restCity === 'all' ? ' active' : ''}" data-c="all">${t('restAll')}</button>`].concat(cities.map(c => `<button class="rchip${restCity === c ? ' active' : ''}" data-c="${escapeAttr(c)}">${cityEmoji(c)} ${escapeHtml(c)}</button>`)).join('');
    $$('.rchip', filt).forEach(b => b.onclick = () => { restCity = b.dataset.c; renderRestaurants(); });
    const shown = list.filter(r => restCity === 'all' || r.city === restCity);
    body.innerHTML = shown.map(r => {
      const bday = /birthday|cumple|יומולד|יום הולדת/i.test((r.vibe || '') + (r.why || ''));
      return `<div class="rcard${bday ? ' rbday' : ''}"><div class="rc-top"><span class="rc-name" dir="auto">${escapeHtml(r.name)}</span>${bday ? '<span class="rc-bday">🎂</span>' : ''}</div>` +
        `<div class="rc-sub">${cityEmoji(r.city)} ${escapeHtml(r.city || '')}${r.area ? ' · ' + escapeHtml(r.area) : ''}</div>` +
        `<div class="rc-cuisine" dir="auto">🍽️ ${escapeHtml(r.cuisine || '')}${r.vibe ? ' · ' + escapeHtml(r.vibe) : ''}</div>` +
        (r.why ? `<div class="rc-why" dir="auto">${escapeHtml(r.why)}</div>` : '') +
        (r.signatureDish ? `<div class="rc-dish" dir="auto"><b>${t('rDish')}:</b> ${escapeHtml(r.signatureDish)}</div>` : '') +
        `<div class="rc-meta">${r.price ? `<span class="chip cost">${escapeHtml(r.price)}</span>` : ''}${r.reservation ? `<span class="chip book" dir="auto">${escapeHtml(r.reservation)}</span>` : ''}</div></div>`;
    }).join('');
    if (!shown.length) body.innerHTML = `<div class="panel">${t('loading')}</div>`;
  }

  // ---------- experiences (attractions) ----------
  const attractions = () => (data().attractions) || [];
  let expCity = 'all';
  function broadCity(c) { const cl = cityLatin(c); return ['Tokyo', 'Kyoto', 'Osaka', 'Nara', 'Hakone'].indexOf(cl) >= 0 ? cl : (lang === 'he' ? 'טיולי יום' : 'Excursiones'); }
  function renderExperiences() {
    const list = attractions(); const filt = $('#expFilter'), body = $('#expBody');
    const cities = []; list.forEach(r => { const b = broadCity(r.city); if (cities.indexOf(b) < 0) cities.push(b); });
    filt.innerHTML = [`<button class="rchip${expCity === 'all' ? ' active' : ''}" data-c="all">${t('restAll')}</button>`].concat(cities.map(c => `<button class="rchip${expCity === c ? ' active' : ''}" data-c="${escapeAttr(c)}">${cityEmoji(c)} ${escapeHtml(c)}</button>`)).join('');
    $$('.rchip', filt).forEach(b => b.onclick = () => { expCity = b.dataset.c; renderExperiences(); });
    const shown = list.filter(r => expCity === 'all' || broadCity(r.city) === expCity);
    body.innerHTML = shown.map(r => {
      const tags = (r.tags || []).map(tg => `<span class="chip">${escapeHtml(tg)}</span>`).join('');
      return `<div class="rcard"><div class="rc-top"><span class="rc-name" dir="auto">${escapeHtml(r.name)}</span></div>` +
        `<div class="rc-sub">${cityEmoji(r.city)} ${escapeHtml(r.city || '')}${r.area ? ' · ' + escapeHtml(r.area) : ''}</div>` +
        `<div class="rc-cuisine" dir="auto">✨ ${escapeHtml(r.category || '')}</div>` +
        (r.why ? `<div class="rc-why" dir="auto">${escapeHtml(r.why)}</div>` : '') +
        `<div class="rc-meta">${r.cost ? `<span class="chip cost">${escapeHtml(r.cost)}</span>` : ''}${r.duration ? `<span class="chip">⏱️ ${escapeHtml(r.duration)}</span>` : ''}${r.booking ? `<span class="chip book" dir="auto">${escapeHtml(r.booking)}</span>` : ''}</div>` +
        (tags ? `<div class="rc-meta">${tags}</div>` : '') + `</div>`;
    }).join('');
    if (!shown.length) body.innerHTML = `<div class="panel">${t('loading')}</div>`;
  }

  // ---------- budget ----------
  const budgetData = () => (window.TRIP_DATA && window.TRIP_DATA.budget) || null;
  const pick = (x) => (x && typeof x === 'object') ? (x[lang] != null ? x[lang] : (x.he || '')) : (x == null ? '' : x);
  const fmtNum = (n) => (n == null ? '' : Number(n).toLocaleString('en-US'));
  function renderBudget() {
    const b = budgetData(); const box = $('#budgetPanel'); if (!box) return;
    if (!b || !b.lines) { box.innerHTML = ''; return; }
    const rows = b.lines.map(l => `<tr><td class="bl-cat" dir="auto">${escapeHtml(pick(l.cat))}${l.note ? `<span class="bl-note" dir="auto"> · ${escapeHtml(pick(l.note))}</span>` : ''}</td><td class="bl-amt">¥${fmtNum(l.low)}–${fmtNum(l.high)}</td></tr>`).join('');
    box.innerHTML = `<div class="panel budget"><h2>${t('budgetTitle')}</h2><table class="btable"><tbody>${rows}` +
      `<tr class="bl-total"><td>${t('budgetTotal')}</td><td>¥${fmtNum(b.totalLow)}–${fmtNum(b.totalHigh)}${(b.totalUSDLow != null) ? `<br><span class="bl-usd">≈ US$${fmtNum(b.totalUSDLow)}–${fmtNum(b.totalUSDHigh)}</span>` : ''}</td></tr></tbody></table>` +
      `${b.perPerson ? `<div class="budget-pp">${t('budgetPerPerson')}: ${escapeHtml(pick(b.perPerson))}</div>` : ''}` +
      `${b.summary ? `<div class="budget-sum" dir="auto">${escapeHtml(pick(b.summary))}</div>` : ''}` +
      `<div class="budget-note">${t('budgetNote')}${b.fx ? ` · ${escapeHtml(pick(b.fx))}` : ''}</div></div>`;
  }

  // ---------- google maps ----------
  function cityLatin(city) { if (!city) return ''; const k = city.toLowerCase(); for (const [key, v] of CITY_LATIN) if (k.includes(key)) return v; return city; }
  function placeQuery(e, city) {
    let s = (e.area || e.title || '').trim();
    const m = s.match(/\(([^)]+)\)/); if (m) s = m[1];
    s = s.replace(/\s*(→|->|—| to )\s*/g, '|');
    if (s.indexOf('|') >= 0) { const p = s.split('|'); s = (e.type === 'transport' ? p[p.length - 1] : p[0]); }
    s = s.replace(/\s*\/\s*/g, ' ').replace(/[!?.]$/, '').trim();
    const cl = cityLatin(city);
    if (cl && s.toLowerCase().indexOf(cl.toLowerCase()) < 0) s += ', ' + cl;
    return (s + ', Japan').replace(/^,\s*/, '');
  }
  const placeUrl = (q) => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
  function dayRouteUrl(d) {
    const qs = []; sortEvents(d.events || []).forEach(e => { const q = placeQuery(e, d.city); if (q && q.length > 8 && qs[qs.length - 1] !== q) qs.push(q); });
    if (!qs.length) return null;
    if (qs.length === 1) return placeUrl(qs[0]);
    const stops = qs.slice(0, 10); const origin = stops.shift(), destination = stops.pop();
    let u = 'https://www.google.com/maps/dir/?api=1&travelmode=transit&origin=' + encodeURIComponent(origin) + '&destination=' + encodeURIComponent(destination);
    const wp = stops.slice(0, 8).map(encodeURIComponent).join('%7C'); if (wp) u += '&waypoints=' + wp;
    return u;
  }

  // ---------- hotels ----------
  const stays = () => (window.TRIP_DATA && window.TRIP_DATA.stays) || [];
  const loadHotels = () => safeParse(localStorage.getItem(LS_HOTELS)) || {};
  const saveHotels = (h) => localStorage.setItem(LS_HOTELS, JSON.stringify(h));
  const stayForDate = (iso) => stays().find(s => (s.dates || []).indexOf(iso) >= 0);
  const selectedOption = (stay) => { if (!stay) return null; const i = loadHotels()[stay.id]; return (i != null && stay.options[i]) ? stay.options[i] : null; };
  function renderHotels() {
    const box = $('#hotelsBody'); box.innerHTML = ''; const sel = loadHotels();
    stays().forEach(s => {
      const city = s['city' + (lang === 'he' ? 'He' : 'Es')];
      const opts = s.options.map((o, i) => {
        const chosen = sel[s.id] === i; const loc = o[lang] || {};
        const tags = (o.tags || []).map(tg => `<span class="htag">${T[lang].tags[tg] || tg}</span>`).join('');
        const unit = s.priceUnit === 'couple' ? t('hPerCouple') : t('hPerNight');
        return `<div class="hcard${chosen ? ' chosen' : ''}">` +
          `<div class="hc-top"><span class="hc-name" dir="auto">${escapeHtml(o.name)}</span>${chosen ? `<span class="hc-badge">${t('hSelected')}</span>` : ''}</div>` +
          `<div class="hc-sub">📍 ${escapeHtml(loc.area || '')} · <b>${escapeHtml(o.price)}</b> <span class="hc-unit">${unit}</span></div>` +
          (loc.why ? `<div class="hc-why" dir="auto">${escapeHtml(loc.why)}</div>` : '') +
          (tags ? `<div class="hc-tags">${tags}</div>` : '') +
          `<div class="hc-actions"><button class="btn btn-sm hpick ${chosen ? 'hpick-on' : 'btn-primary'}" data-s="${s.id}" data-i="${i}">${chosen ? t('hSelected') : t('hChoose')}</button>` +
          `<a class="hc-link" href="${o.url}" target="_blank" rel="noopener">${t('hBook')}</a>` +
          `<a class="hc-link" href="${placeUrl(o.name + ' ' + (loc.area || '') + ' ' + cityLatin(city))}" target="_blank" rel="noopener">${t('mapsOpen')}</a></div></div>`;
      }).join('');
      const wrap = document.createElement('div'); wrap.className = 'stay' + (s.birthday ? ' bday' : '');
      wrap.innerHTML = `<div class="stay-head"><span class="stay-cover">${s.cover}</span><span class="stay-city">${escapeHtml(city)} · ${escapeHtml(s.area)}</span><span class="stay-dates">${escapeHtml(s.datesLabel)} · ${t('hNights')(s.nights)}${s.birthday ? ' · 🎂' : ''}</span></div>` +
        (s.note && s.note[lang] ? `<div class="stay-note" dir="auto">${escapeHtml(s.note[lang])}</div>` : '') + `<div class="hcards">${opts}</div>`;
      box.appendChild(wrap);
    });
    $$('.hpick', box).forEach(b => b.onclick = () => { const h = loadHotels(); const id = b.dataset.s, i = +b.dataset.i; if (h[id] === i) delete h[id]; else h[id] = i; saveHotels(h); renderHotels(); if (state) renderDay(); toast(t('saved')); });
  }

  // ---------- trains (booking countdown) ----------
  // Reservations open 1 month before the ride date at 10:00 JST (= 01:00 UTC).
  const TRAIN_LEGS = [
    { id: 'hakone', from: 'Shinjuku', to: 'Hakone-Yumoto', icon: '🚞',
      service: { he: 'רומאנסקאר (אודקיו)', es: 'Romancecar (Odakyu)' },
      dateLabel: { he: '24.9 · יום ההולדת 🎂', es: '24/9 · cumpleaños 🎂' },
      dep: { he: 'יציאה ~10:00', es: 'salida ~10:00' },
      bookUrl: 'https://www.odakyu.jp/english/romancecar/', bookName: 'Odakyu (EN)',
      open: { y: 2026, m: 8, d: 24 }, maps: ['Shinjuku Station, Tokyo', 'Hakone-Yumoto Station'] },
    { id: 'kyoto', from: 'Odawara', to: 'Kyoto', icon: '🚄',
      service: { he: 'שינקנסן טוקאידו (Hikari)', es: 'Shinkansen Tokaido (Hikari)' },
      dateLabel: { he: '25.9', es: '25/9' },
      dep: { he: 'יציאה ~11:00', es: 'salida ~11:00' },
      bookUrl: 'https://smart-ex.jp/en/', bookName: 'SmartEX (EN)',
      open: { y: 2026, m: 8, d: 25 }, maps: ['Odawara Station', 'Kyoto Station'] },
    { id: 'tokyo', from: 'Shin-Osaka', to: 'Tokyo', icon: '🚄',
      service: { he: 'שינקנסן טוקאידו', es: 'Shinkansen Tokaido' },
      dateLabel: { he: '30.9', es: '30/9' },
      dep: { he: '', es: '' },
      bookUrl: 'https://smart-ex.jp/en/', bookName: 'SmartEX (EN)',
      open: { y: 2026, m: 8, d: 30 }, maps: ['Shin-Osaka Station', 'Tokyo Station'] },
    { id: 'narita', from: 'Tokyo', to: 'Narita Airport T1', icon: '✈️',
      service: { he: 'נאריטה אקספרס (N\'EX)', es: 'Narita Express (N\'EX)' },
      dateLabel: { he: '2.10 · טיסה 12:00', es: '2/10 · vuelo 12:00' },
      dep: { he: 'יציאה ~08:00', es: 'salida ~08:00' },
      bookUrl: 'https://www.eki-net.com/en/jreast-train-reservation/', bookName: 'JR-EAST (EN)',
      open: { y: 2026, m: 9, d: 2 }, maps: ['Tokyo Station', 'Narita Airport Terminal 1'] },
  ];
  const TRAIN_STR = {
    he: { title: 'הזמנת רכבות', intro: 'ההזמנה נפתחת חודש לפני הנסיעה, בשעה 10:00 שעון יפן. שעון ספירה לכל קטע:',
      times: 'בדוק זמנים', enter: 'להקליד באתר', pre: '⏳ נפתח בעוד', open: '🟢 פתוח להזמנה — אפשר לרכוש עכשיו!',
      d: ' ימ׳', h: ' שע׳', m: ' דק׳', s: ' שנ׳' },
    es: { title: 'Reservar trenes', intro: 'La reserva abre 1 mes antes del viaje, a las 10:00 JST. Cuenta regresiva por tramo:',
      times: 'Ver horarios', enter: 'Cargar en el sitio', pre: '⏳ Abre en', open: '🟢 ¡Abierto — ya podés reservar!',
      d: 'd', h: 'h', m: 'm', s: 's' },
  };
  let trainTimer = null;
  const openTs = (leg) => Date.UTC(leg.open.y, leg.open.m - 1, leg.open.d, 1, 0, 0); // 10:00 JST
  const transitUrl = (o, d) => 'https://www.google.com/maps/dir/?api=1&travelmode=transit&origin=' + encodeURIComponent(o) + '&destination=' + encodeURIComponent(d);
  function renderTrains(body) {
    const S = TRAIN_STR[lang];
    const panel = document.createElement('div'); panel.className = 'panel trains';
    panel.innerHTML = `<h2>🚄 ${S.title}</h2><div class="trains-intro" dir="auto">${escapeHtml(S.intro)}</div>` +
      TRAIN_LEGS.map(leg => `<div class="tcard" id="leg-${leg.id}">` +
        `<div class="tc-route" dir="ltr"><b>${escapeHtml(leg.from)}</b> <span class="tc-arrow">→</span> <b>${escapeHtml(leg.to)}</b></div>` +
        `<div class="tc-meta" dir="auto">${leg.icon} ${escapeHtml(leg.service[lang])} · ${escapeHtml(leg.dateLabel[lang])}${leg.dep[lang] ? ' · ' + escapeHtml(leg.dep[lang]) : ''}</div>` +
        `<div class="tc-cd" id="cd-${leg.id}"></div>` +
        `<div class="tc-actions">` +
          `<a class="tc-link tc-book" href="${leg.bookUrl}" target="_blank" rel="noopener">🎫 ${escapeHtml(leg.bookName)}</a>` +
          `<a class="tc-link" href="${transitUrl(leg.maps[0], leg.maps[1])}" target="_blank" rel="noopener">🕐 ${escapeHtml(S.times)}</a>` +
        `</div>` +
        `<div class="tc-enter" dir="auto">${escapeHtml(S.enter)}: <span dir="ltr">${escapeHtml(leg.from)} → ${escapeHtml(leg.to)}</span> · ${escapeHtml(leg.dateLabel[lang])}</div>` +
      `</div>`).join('');
    body.appendChild(panel);
    tickTrains();
    if (trainTimer) clearInterval(trainTimer);
    trainTimer = setInterval(tickTrains, 1000);
  }
  function tickTrains() {
    const S = TRAIN_STR[lang]; const now = Date.now(); let any = false;
    TRAIN_LEGS.forEach(leg => {
      const el = document.getElementById('cd-' + leg.id); if (!el) return; any = true;
      const card = document.getElementById('leg-' + leg.id);
      const diff = openTs(leg) - now;
      if (diff <= 0) { el.innerHTML = `<span class="cd-open">${S.open}</span>`; if (card) card.classList.add('open'); }
      else {
        const s = Math.floor(diff / 1000), d = Math.floor(s / 86400), h = Math.floor((s % 86400) / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
        el.innerHTML = `<span class="cd-pre">${S.pre} <b>${d}${S.d} ${h}${S.h} ${m}${S.m} ${sec}${S.s}</b></span>`;
      }
    });
    if (!any && trainTimer) { clearInterval(trainTimer); trainTimer = null; }
  }

  // ---------- prep ----------
  const DEFAULT_CHECK = {
    he: {
      'הזמנות דחופות (עכשיו!)': ['כרטיסי סומו (21.9) — המכירה נפתחה ~8.8', 'ריוקאן + Romancecar להאקונה (23.9, שבוע הזהב)', 'מושבי שינקנסן (אודוארה→קיוטו, אוסקה→טוקיו) ב-SmartEX', 'מוזיאון גיבלי — 10.9 בשעה 10:00 יפן ב-Lawson', 'teamLab, Shibuya Sky (שקיעה), ארוחת מאיקו, מסעדות טובות'],
      'כרטיסים ותחבורה': ['Suica/Pasmo בארנק הדיגיטלי', 'להחליט: JR Pass מול כרטיסים נקודתיים', 'Hakone Free Pass', 'eSIM לשני הטלפונים', 'N\'EX הלוך-חזור (כולל חזרה לנאריטה ב-2.10)'],
      'לארוז': ['נעליים נוחות להליכה (הרבה!)', 'שכבות + מטרייה מתקפלת (סוף ספטמבר לח, סיכון טייפון)', 'מדבקות כיסוי לקעקועים (לאונסן)', 'מטען נייד + מתאם (תקע A, 100V)', 'מזומן ¥'],
    },
    es: {
      'Reservas urgentes (¡ya!)': ['Entradas de sumo (21/9) — venta abrió ~8/8', 'Ryokan + Romancecar a Hakone (23/9, Silver Week)', 'Asientos de shinkansen (Odawara→Kioto, Osaka→Tokio) en SmartEX', 'Museo Ghibli — 10/9 a las 10:00 JST en Lawson', 'teamLab, Shibuya Sky (atardecer), cena con maiko, buenos restaurantes'],
      'Pasajes y transporte': ['Suica/Pasmo en la billetera del celular', 'Decidir: JR Pass vs. pasajes sueltos', 'Hakone Free Pass', 'eSIM para los dos celulares', 'N\'EX ida y vuelta (incluye la vuelta a Narita el 2/10)'],
      'Para la valija': ['Zapatillas cómodas para caminar (¡mucho!)', 'Capas + paraguas plegable (fin de septiembre húmedo, riesgo de tifón)', 'Stickers para tapar tatuajes (para el onsen)', 'Batería portátil + adaptador (enchufe tipo A, 100V)', 'Efectivo en ¥'],
    },
  };
  const loadCheck = () => safeParse(localStorage.getItem(LS_CHECK)) || { done: {}, custom: {} };
  const saveCheck = (c) => localStorage.setItem(LS_CHECK, JSON.stringify(c));
  function renderPrep() {
    const c = loadCheck(); const body = $('#prepBody'); body.innerHTML = '';
    renderTrains(body);
    const groups = JSON.parse(JSON.stringify(DEFAULT_CHECK[lang]));
    const myLabel = lang === 'he' ? 'הרשימה שלי' : 'Mi lista';
    (c.custom[lang] || []).forEach(it => { (groups[myLabel] = groups[myLabel] || []).push(it); });
    Object.keys(groups).forEach(g => {
      const panel = document.createElement('div'); panel.className = 'panel';
      const icon = /דחוף|urgent/i.test(g) ? '⏰' : /כרטיס|Pasaj/i.test(g) ? '🚄' : /לארוז|valija/i.test(g) ? '🎒' : '⭐';
      panel.innerHTML = `<h2>${icon} ${escapeHtml(g)}</h2><ul class="check-list">${groups[g].map(txt => { const key = lang + '::' + g + '::' + txt; const done = !!c.done[key]; return `<li class="${done ? 'done' : ''}"><input type="checkbox" data-k="${escapeAttr(key)}" ${done ? 'checked' : ''}><span class="ct" dir="auto">${escapeHtml(txt)}</span></li>`; }).join('')}</ul>`;
      body.appendChild(panel);
    });
    const add = document.createElement('div'); add.className = 'panel';
    add.innerHTML = `<h2>➕ ${lang === 'he' ? 'הוסיפו לרשימה' : 'Agregar a la lista'}</h2><div class="addrow"><input id="newCheck" placeholder="${lang === 'he' ? 'פריט חדש...' : 'Ítem nuevo...'}"><button class="btn btn-primary btn-sm" id="addCheckBtn">${lang === 'he' ? 'הוסף' : 'Agregar'}</button></div>`;
    body.appendChild(add);
    $$('.check-list input', body).forEach(inp => inp.onchange = () => { const cc = loadCheck(); cc.done[inp.dataset.k] = inp.checked; saveCheck(cc); inp.closest('li').classList.toggle('done', inp.checked); });
    $('#addCheckBtn').onclick = () => { const v = $('#newCheck').value.trim(); if (!v) return; const cc = loadCheck(); cc.custom[lang] = cc.custom[lang] || []; cc.custom[lang].push(v); saveCheck(cc); renderPrep(); };
    $('#newCheck').addEventListener('keydown', e => { if (e.key === 'Enter') $('#addCheckBtn').click(); });
  }

  // ---------- views ----------
  const VIEWS = ['itinerary', 'overview', 'hotels', 'guide', 'food', 'restaurants', 'experiences', 'prep'];
  function showView(v) {
    VIEWS.forEach(x => $('#view-' + x).classList.toggle('hidden', x !== v));
    $$('.tab').forEach(tb => tb.classList.toggle('active', tb.dataset.view === v));
    if (v === 'hotels') renderHotels();
    if (v === 'overview') renderOverview();
    if (v === 'guide') renderGuide();
    if (v === 'food') renderFood();
    if (v === 'restaurants') renderRestaurants();
    if (v === 'experiences') renderExperiences();
    if (v === 'prep') renderPrep();
    window.scrollTo({ top: 0, behavior: 'smooth' }); savePrefs(v);
  }

  // ---------- prefs ----------
  function savePrefs(view) { const p = safeParse(localStorage.getItem(LS_PREFS)) || {}; if (view) p.view = view; p.day = curDay; localStorage.setItem(LS_PREFS, JSON.stringify(p)); }
  const loadPrefs = () => safeParse(localStorage.getItem(LS_PREFS)) || {};

  // ---------- countdown ----------
  function renderCountdown() {
    const start = new Date(2026, 8, 18), end = new Date(2026, 9, 2), now = new Date(), day = 864e5, el = $('#countdown');
    if (now < start) el.innerHTML = t('cdBefore')(Math.ceil((start - now) / day));
    else if (now <= end) el.innerHTML = t('cdDuring')(Math.floor((now - start) / day) + 1);
    else el.innerHTML = t('cdAfter');
  }

  // ---------- petals / export / import ----------
  function buildPetals(on) { const box = $('#petals'); box.innerHTML = ''; if (!on) return; for (let i = 0; i < 14; i++) { const p = document.createElement('div'); p.className = 'petal'; p.style.insetInlineStart = (Math.random() * 100) + '%'; p.style.animationDuration = (7 + Math.random() * 8) + 's'; p.style.animationDelay = (-Math.random() * 12) + 's'; const s = 8 + Math.random() * 10; p.style.width = p.style.height = s + 'px'; box.appendChild(p); } }
  function exportJSON() { const blob = new Blob([JSON.stringify({ lang, state }, null, 2)], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'japan-2026-' + lang + '.json'; a.click(); URL.revokeObjectURL(a.href); toast(t('backedup')); }
  function importJSON(file) { const r = new FileReader(); r.onload = () => { const d = safeParse(r.result); const st = d && d.state ? d.state : d; if (st && st.days) { state = st; save(); curDay = 0; renderRail(); renderDay(); toast(t('restored')); } else alert(t('badfile')); }; r.readAsText(file); }

  // ---------- i18n apply ----------
  function applyI18n() {
    document.documentElement.lang = lang; document.documentElement.dir = T[lang].dir; document.title = T[lang]._title;
    $$('[data-i18n]').forEach(el => { const k = el.getAttribute('data-i18n'); const v = t(k); if (v != null && typeof v === 'string') el.textContent = v; });
    $('#langToggle').textContent = t('langToggle');
  }
  function switchLang() {
    if (state) save();
    lang = lang === 'he' ? 'es' : 'he'; localStorage.setItem(LS_LANG, lang);
    applyI18n(); initState();
    curDay = Math.min(curDay, state.days.length - 1); if (curDay < 0) curDay = 0;
    renderCountdown(); renderRail(); renderDay();
    const cur = VIEWS.find(v => !$('#view-' + v).classList.contains('hidden')) || 'itinerary';
    showView(cur);
  }

  // ---------- boot ----------
  function bind() {
    $('#tabs').addEventListener('click', e => { const tb = e.target.closest('.tab'); if (tb) showView(tb.dataset.view); });
    $('#langToggle').onclick = switchLang;
    $('#addEventBtn').onclick = () => openModal(curDay, null);
    $('#modalSave').onclick = saveModal; $('#modalCancel').onclick = closeModal;
    $('#modalDelete').onclick = () => { if (editing.id && confirm(t('confirmDel')(''))) { deleteEvent(editing.day, editing.id); closeModal(); } };
    $('#modal').addEventListener('click', e => { if (e.target.id === 'modal') closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
    $('#resetBtn').onclick = () => { if (confirm(t('confirmReset'))) { localStorage.removeItem(tripKey(lang)); initState(); curDay = 0; renderRail(); renderDay(); toast(t('resetDone')); } };
    $('#exportBtn').onclick = exportJSON; $('#importBtn').onclick = () => $('#importFile').click();
    $('#importFile').onchange = e => { if (e.target.files[0]) importJSON(e.target.files[0]); };
    let petalsOn = loadPrefs().petals !== false; buildPetals(petalsOn);
    $('#petalsBtn').onclick = () => { petalsOn = !petalsOn; buildPetals(petalsOn); const p = loadPrefs(); p.petals = petalsOn; localStorage.setItem(LS_PREFS, JSON.stringify(p)); };
  }
  function boot() {
    applyI18n(); initState();
    const prefs = loadPrefs(); curDay = Math.min(prefs.day || 0, state.days.length - 1); if (curDay < 0) curDay = 0;
    bind(); renderCountdown(); renderRail(); renderDay();
    if (prefs.view && prefs.view !== 'itinerary') showView(prefs.view);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
