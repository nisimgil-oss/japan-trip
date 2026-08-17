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
      'hero.arrive': 'נחיתה בטוקיו 18:25', 'hero.depart': 'המראה 12:00', 'hero.cities': '🗾 טוקיו · האקונה · קיסו · קיוטו · אוסקה · נארה',
      'tab.itinerary': 'היומן', 'tab.overview': 'מבט־על', 'tab.guide': 'מדריך', 'tab.food': 'אוכל', 'tab.restaurants': 'מסעדות', 'tab.prep': 'הכנות',
      'toolbar.addEvent': '＋ הוסף פעילות ליום הזה', 'toolbar.backup': '⬇️ גיבוי', 'toolbar.restore': '⬆️ שחזור', 'toolbar.petals': '🌸 פרחים', 'toolbar.reset': '↺ אפס תכנון', 'toolbar.printDay': '🖨️ הדפס יום',
      'tab.luggage': 'תיקים', spotsAnime: '🎮 אנימה', spotsLgbt: '🏳️‍🌈 חיי לילה גאים', wxTypical: 'ממוצע עונתי', wxForecast: 'תחזית', wxRain: 'גשם', wxWind: 'רוח', wxTyphoon: '🌀 סוף ספטמבר = שיא עונת הטייפונים — עקבו אחרי התחזית ושקלו ביטוח גמיש.', wxLoading: 'טוען מזג אוויר…', wxNA: 'מזג אוויר לא זמין',
      lugTitle: '🧳 שרשרת התיקים (takkyubin)', lugIntro: 'המזוודה הראשית נשלחת קדימה כדי לטייל קל בהאקונה ובקיסו. הימים ב-🎒 = תיק-לילה בלבד, בלי המזוודה.', lugHave: 'איתכם', lugNight: 'תיק-לילה בלבד', lugSend: 'שליחה', lugPickup: 'איסוף', lugCardTitle: '📇 כרטיס בקשה לדלפק המלון (יפנית)', lugCardHint: 'הראו את זה בקבלה כדי לשלוח מזוודה למלון הבא:', lugCopy: 'העתק', lugCopied: '✓ הועתק',
      'overview.title': '🗾 כל הטיול במבט אחד', 'restaurants.title': '🍣 מקומות מיוחדים לאכול',
      'foot': 'נבנה באהבה עבורכם ❤️ · תכנון גמיש — שנו, הוסיפו וסמנו ✓ · いってらっしゃい',
      'f.start': 'משעה', 'f.end': 'עד שעה', 'f.title': 'כותרת', 'f.type': 'סוג', 'f.area': 'אזור / מיקום', 'f.desc': 'תיאור', 'f.tips': 'טיפ', 'f.cost': 'עלות', 'f.booking': 'הזמנה מראש', 'f.note': 'הערה אישית שלכם', 'f.delete': '🗑️ מחק', 'f.cancel': 'ביטול', 'f.save': 'שמירה',
      langToggle: '🇦🇷 Español', day: 'יום', night: 'לינה', bday: 'יום ההולדת!', tipsLabel: 'טיפים ליום', addTitle: 'פעילות חדשה', editTitle: 'עריכת פעילות',
      langWarnMsg: '✏️ שינויים ביומן (סימוני ✓, שעות, הוספה/מחיקה ועריכות) נשמרים בנפרד לעברית ולספרדית. הטאב "לסגור" (מלונות/רכבות/כרטיסים) כן משותף בין השפות.',
      langWarnShort: '💡 השינוי נשמר בגרסה העברית בלבד — לא יופיע בספרדית.',
      highlight: 'מומלץ במיוחד', empty: 'אין עדיין פעילויות ליום הזה — הוסיפו אחת ↓',
      saved: 'נשמר ✓', deleted: 'נמחק', resetDone: 'אופס לתכנון המקורי', backedup: 'גובה ✓', restored: 'שוחזר ✓', badfile: 'קובץ לא תקין', verChanged: 'התכנון עודכן לגרסה חדשה ✨',
      confirmDel: (t) => 'למחוק את "' + t + '"?', confirmReset: 'לאפס את כל השינויים ולחזור לתכנון המקורי?',
      cdBefore: (n) => '✈️ עוד <b>' + n + '</b> ימים', cdDuring: (n) => '🎌 יום <b>' + n + '</b> בטיול!', cdAfter: '🌸 <b>おかえり</b>',
      flights: '✈️ הטיסות שלכם', outbound: 'הלוך', ret: 'חזור', seat: 'מושב', airline: 'חברת תעופה', baggage: 'כבודה', passenger: 'נוסע',
      restAll: 'הכל', rWhy: 'למה מיוחד', rDish: 'לא לפספס', rPrice: 'מחיר', rBook: 'הזמנה', rReserve: 'צריך להזמין', jump: 'לפרטים ביום ↗',
      loading: 'נטען…',
      'tab.hotels': 'מלונות', 'hotels.title': '🏨 בחירת מלונות',
      'tab.booked': 'לסגור', bookedTitle: '🔖 מלונות לסגור', bookedHint: 'לכל לילה — התאריכים והמקום. כתבו את המלון שסגרתם וסמנו ✓. נשמר במכשיר שלכם.',
      bookedSug: 'ההצעה שבחרתם', bookedHotelPh: 'המלון שסגרתי…', bookedRefPh: 'מס\' הזמנה / הערה (אופציונלי)', bookedDone: 'נסגר ✓',
      bookedProgress: (n, m) => `${n}/${m} נסגרו`, bookedStay: 'כניסה → יציאה', bookedCostPh: 'עלות (¥/₪)', bookedCancelLabel: 'ביטול חינם עד',
      bookedTrains: '🚄 רכבות לסגור', bookedEvents: '🎟️ כרטיסים לאירועים', bookedSalesOpen: 'מכירה נפתחת', bookedSalesOpenNow: '✓ פתוח למכירה', bookedBook: 'הזמנה',
      bookedOpensToday: 'נפתח היום!', bookedOpensTomorrow: 'נפתח מחר', bookedOpensIn: (n) => `נפתח בעוד ${n} ימים`, bookedPax: '2 בוגרים', bookedMapLink: 'מסלול וזמנים', bookedItemNotePh: 'הערה חופשית…', bookedSalesTime: 'ב-10:00 שעון יפן (04:00 בישראל)', bookedManage: 'פתח ב-Booking.com',
      hSelected: '✓ נבחר', hChoose: 'בחרו מלון זה', hPerNight: 'ללילה', hPerCouple: 'לזוג · חצי פנסיון', hBook: 'להזמנה ↗', hNights: (n) => n === 1 ? 'לילה אחד' : n + ' לילות', hStayHotel: 'המלון שנבחר', hPickHint: 'בחרו מלון בטאב ״מלונות״',
      mapsDay: '🗺️ מסלול היום במפות', mapsOpen: 'פתח במפות ↗',
      'tab.experiences': 'חוויות', 'experiences.title': '✨ עוד חוויות מיוחדות',
      'tab.map': 'מפה', 'map.title': '🗺️ מפת כל הימים', 'map.hint': 'כל יום במסלול צבע משלו — לחצו על יום במקרא כדי להציג/להסתיר אותו. לחצו על נקודה לפרטים.', mapAll: 'הצג הכל', mapNone: 'נקה',
      'tab.compare': 'השוואה',
      budgetTitle: '💴 כמה יעלה הטיול (בערך)', budgetTotal: 'סה״כ מוערך לזוג', budgetPerPerson: 'לאדם', budgetNote: 'הערכה בלבד — לא כולל קניות גדולות/בלת״מ. הטיסות כבר שולמו.',
      tags: { mid: 'מחיר בינוני', value: 'תמורה מעולה', splurge: 'פינוק', gayfriendly: 'גיי-פרנדלי', laundry: 'כביסה בחדר', anime: 'לחובבי אנימה', birthday: 'ליומולדת', privateonsen: 'אונסן פרטי', rooftopbath: 'אמבט על הגג', central: 'מרכזי', views: 'נוף' },
      types: { sightseeing: 'אתר / תצפית', food: 'אוכל', experience: 'חוויה', culture: 'תרבות', anime: 'אנימה/מנגה', onsen: 'אונסן', nightlife: 'חיי לילה', shopping: 'קניות', transport: 'נסיעה', rest: 'מנוחה', checkin: 'צ׳ק-אין', birthday: 'יומולדת' },
      dow: { Fri: 'שישי', Sat: 'שבת', Sun: 'ראשון', Mon: 'שני', Tue: 'שלישי', Wed: 'רביעי', Thu: 'חמישי' },
    },
    es: {
      _title: 'Japón 2026 · Cumple 40', dir: 'ltr',
      'hero.japan': 'Japón', 'hero.sub': '🏮 Cumpleaños 40 · un viaje de amor, comida y cultura 🌸',
      'hero.arrive': 'Llegada a Tokio 18:25', 'hero.depart': 'Despegue 12:00', 'hero.cities': '🗾 Tokio · Hakone · Kiso · Kioto · Osaka · Nara',
      'tab.itinerary': 'Itinerario', 'tab.overview': 'Vista general', 'tab.guide': 'Guía', 'tab.food': 'Comida', 'tab.restaurants': 'Restaurantes', 'tab.prep': 'Preparativos',
      'toolbar.addEvent': '＋ Agregar actividad a este día', 'toolbar.backup': '⬇️ Respaldo', 'toolbar.restore': '⬆️ Restaurar', 'toolbar.petals': '🌸 Pétalos', 'toolbar.reset': '↺ Reiniciar plan', 'toolbar.printDay': '🖨️ Imprimir día',
      'tab.luggage': 'Equipaje', spotsAnime: '🎮 Anime', spotsLgbt: '🏳️‍🌈 Vida gay', wxTypical: 'promedio de estación', wxForecast: 'pronóstico', wxRain: 'lluvia', wxWind: 'viento', wxTyphoon: '🌀 Fin de septiembre = pico de temporada de tifones — seguí el pronóstico y considerá un seguro flexible.', wxLoading: 'cargando clima…', wxNA: 'clima no disponible',
      lugTitle: '🧳 Cadena de equipaje (takkyubin)', lugIntro: 'La valija principal se despacha por adelantado para viajar liviano por Hakone y Kiso. Los días con 🎒 = solo bolso de una noche, sin la valija.', lugHave: 'con ustedes', lugNight: 'solo bolso de una noche', lugSend: 'despacho', lugPickup: 'retiro', lugCardTitle: '📇 Tarjeta para la recepción del hotel (japonés)', lugCardHint: 'Mostrá esto en recepción para enviar la valija al próximo hotel:', lugCopy: 'Copiar', lugCopied: '✓ Copiado',
      'overview.title': '🗾 Todo el viaje de un vistazo', 'restaurants.title': '🍣 Lugares especiales para comer',
      'foot': 'Hecho con amor para ustedes ❤️ · plan flexible — cambiá, agregá y marcá ✓ · いってらっしゃい',
      'f.start': 'Desde', 'f.end': 'Hasta', 'f.title': 'Título', 'f.type': 'Tipo', 'f.area': 'Zona / lugar', 'f.desc': 'Descripción', 'f.tips': 'Tip', 'f.cost': 'Costo', 'f.booking': 'Reserva previa', 'f.note': 'Nota personal', 'f.delete': '🗑️ Borrar', 'f.cancel': 'Cancelar', 'f.save': 'Guardar',
      langToggle: '🇮🇱 עברית', day: 'Día', night: 'Alojamiento', bday: '¡el cumpleaños!', tipsLabel: 'Tips del día', addTitle: 'Nueva actividad', editTitle: 'Editar actividad',
      langWarnMsg: '✏️ Los cambios del itinerario (✓, horarios, agregar/borrar y ediciones) se guardan por separado en hebreo y español. La pestaña "Por reservar" (hoteles/trenes/entradas) sí se comparte entre idiomas.',
      langWarnShort: '💡 El cambio se guarda solo en la versión en español — no aparece en hebreo.',
      highlight: 'Muy recomendado', empty: 'Todavía no hay actividades este día — agregá una ↓',
      saved: 'Guardado ✓', deleted: 'Borrado', resetDone: 'Plan reiniciado', backedup: 'Respaldo listo ✓', restored: 'Restaurado ✓', badfile: 'Archivo inválido', verChanged: 'El plan se actualizó ✨',
      confirmDel: (t) => '¿Borrar "' + t + '"?', confirmReset: '¿Reiniciar todos los cambios y volver al plan original?',
      cdBefore: (n) => '✈️ faltan <b>' + n + '</b> días', cdDuring: (n) => '🎌 ¡día <b>' + n + '</b> del viaje!', cdAfter: '🌸 <b>¡bienvenidos!</b>',
      flights: '✈️ Sus vuelos', outbound: 'Ida', ret: 'Vuelta', seat: 'Asiento', airline: 'Aerolínea', baggage: 'Equipaje', passenger: 'Pasajero',
      restAll: 'Todos', rWhy: 'Por qué es especial', rDish: 'No te pierdas', rPrice: 'Precio', rBook: 'Reserva', rReserve: 'Hay que reservar', jump: 'Ver en el día ↗',
      loading: 'Cargando…',
      'tab.hotels': 'Hoteles', 'hotels.title': '🏨 Elegí tu hotel',
      'tab.booked': 'Por reservar', bookedTitle: '🔖 Hoteles por reservar', bookedHint: 'Para cada noche — las fechas y el lugar. Escribí el hotel que reservaste y marcá ✓. Se guarda en tu dispositivo.',
      bookedSug: 'La opción que elegiste', bookedHotelPh: 'El hotel que reservé…', bookedRefPh: 'N.º de reserva / nota (opcional)', bookedDone: 'Reservado ✓',
      bookedProgress: (n, m) => `${n}/${m} reservados`, bookedStay: 'Entrada → salida', bookedCostPh: 'Costo (¥/₪)', bookedCancelLabel: 'Cancelación gratis hasta',
      bookedTrains: '🚄 Trenes por reservar', bookedEvents: '🎟️ Entradas a eventos', bookedSalesOpen: 'Venta abre', bookedSalesOpenNow: '✓ Ya a la venta', bookedBook: 'Reservar',
      bookedOpensToday: '¡Abre hoy!', bookedOpensTomorrow: 'Abre mañana', bookedOpensIn: (n) => `Abre en ${n} días`, bookedPax: '2 adultos', bookedMapLink: 'Ruta y horarios', bookedItemNotePh: 'Nota libre…', bookedSalesTime: 'a las 10:00 hora Japón (22:00 del día anterior en Argentina)', bookedManage: 'Abrir en Booking.com',
      hSelected: '✓ Elegido', hChoose: 'Elegir este hotel', hPerNight: 'por noche', hPerCouple: 'por pareja · media pensión', hBook: 'Reservar ↗', hNights: (n) => n === 1 ? '1 noche' : n + ' noches', hStayHotel: 'Hotel elegido', hPickHint: 'Elegí un hotel en la pestaña "Hoteles"',
      mapsDay: '🗺️ Recorrido del día en Maps', mapsOpen: 'Abrir en Maps ↗',
      'tab.experiences': 'Experiencias', 'experiences.title': '✨ Más experiencias especiales',
      'tab.map': 'Mapa', 'map.title': '🗺️ Mapa de todos los días', 'map.hint': 'Cada día tiene su propio color — tocá un día en la leyenda para mostrarlo/ocultarlo. Tocá un punto para ver detalles.', mapAll: 'Mostrar todo', mapNone: 'Limpiar',
      'tab.compare': 'Comparación',
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
  const isoPlusDays = (iso, n) => { const d = new Date(iso + 'T00:00:00'); d.setDate(d.getDate() + n); const p = x => String(x).padStart(2, '0'); return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()); };
  const salesState = (iso) => { if (!iso) return null; const td = new Date(); td.setHours(0, 0, 0, 0); return new Date(iso + 'T00:00:00') <= td ? 'open' : 'soon'; };
  // ספירה לאחור לפתיחת המכירה (~10:00 שעון יפן = 01:00 UTC)
  const salesInfo = (iso) => {
    if (!iso) return null;
    const now = new Date();
    if (now >= new Date(iso + 'T01:00:00Z')) return { state: 'open' };
    const t0 = new Date(iso + 'T00:00:00'); const today = new Date(); today.setHours(0, 0, 0, 0);
    return { state: 'soon', days: Math.max(0, Math.round((t0 - today) / 86400000)) };
  };
  const transitMapUrl = (from, to) => 'https://www.google.com/maps/dir/?api=1&travelmode=transit&origin=' +
    encodeURIComponent(from + ', Japan') + '&destination=' + encodeURIComponent(to + ', Japan');
  const sortEvents = (evs) => evs.slice().sort((a, b) => (a.start || '').localeCompare(b.start || ''));
  function toast(msg) { const el = $('#toast'); el.innerHTML = msg; el.classList.add('show'); clearTimeout(toast._t); toast._t = setTimeout(() => el.classList.remove('show'), 1900); }
  const dowT = (d) => (T[lang].dow[d] || d);

  // ── אזהרת שפות: עריכות ביומן נשמרות בנפרד לעברית/ספרדית ──
  const LS_LANGWARN = 'japanTrip.langWarn.dismissed';
  let _langWarned = false;
  function renderLangWarn() {
    const el = $('#langWarn'); if (!el) return;
    el.hidden = localStorage.getItem(LS_LANGWARN) === '1';
    const txt = $('#langWarnTxt'); if (txt) txt.textContent = t('langWarnMsg');
  }
  function warnLangOnce() {
    if (_langWarned || localStorage.getItem(LS_LANGWARN) === '1') return;
    _langWarned = true; toast(t('langWarnShort'));
  }

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
    const hotelName = d.hotel || '';
    const hotelUrl = hotelName ? placeUrl(hotelName + ' ' + cityLatin(d.city)) : null;
    const routeUrl = dayRouteUrl(d);
    $('#dayHead').innerHTML =
      `<div><div class="dh-city">${cityEmoji(d.city)} ${escapeHtml(d.city || '')} · ${dowT(d.dow)} ${fmtDate(d.date)}${d.birthday ? ' · 🎂 ' + t('bday') : ''}<span class="dh-weather" id="dhWeather" title="${escapeAttr(t('wxTyphoon'))}"></span></div>` +
      `<div class="dh-title">${escapeHtml(d.title || '')}</div>` +
      (d.summary ? `<div class="dh-sum">${escapeHtml(d.summary)}</div>` : '') +
      (hotelName ? `<div class="dh-hotel">🛏️ ${t('night')}: <b dir="auto">${escapeHtml(hotelName)}</b>${hotelUrl ? ` <a class="dh-maplink" href="${hotelUrl}" target="_blank" rel="noopener">🗺️</a>` : ''}</div>` : '') +
      (d.logistics ? `<div class="dh-logistics" dir="auto">📦 ${escapeHtml(d.logistics[lang] || d.logistics.he)}</div>` : '') +
      (d.cultural ? `<div class="dh-culture" dir="auto"><span class="dh-culture-ic">🏮</span><span>${escapeHtml(d.cultural)}</span></div>` : '') +
      (d.tips && d.tips.length ? `<div class="dh-tips"><div class="dh-tips-h">💡 ${t('tipsLabel')}</div><ul class="dh-tips-list">${d.tips.map(x => `<li dir="auto">${escapeHtml(x)}</li>`).join('')}</ul></div>` : '') +
      (routeUrl ? `<div class="dh-actions"><a class="btn btn-ghost btn-sm" href="${routeUrl}" target="_blank" rel="noopener">${t('mapsDay')}</a></div>` : '') +
      `</div>`;
    fillWeather(d);
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
    if (e.dur) meta.push('<span class="chip dur">🚆 ' + escapeHtml(e.dur) + '</span>');
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
    wrap.querySelector('.ev-check input').onchange = (ev) => { e.done = ev.target.checked; save(); renderDay(); warnLangOnce(); };
    return wrap;
  }

  // ---------- CRUD ----------
  const findEvent = (day, id) => (state.days[day].events || []).find(x => x.id === id);
  function deleteEvent(day, id) { state.days[day].events = state.days[day].events.filter(x => x.id !== id); save(); renderDay(); toast(t('deleted')); warnLangOnce(); }
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
    save(); closeModal(); renderDay(); toast(t('saved')); warnLangOnce();
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

  // ---------- trip map (all days on one map) ----------
  // Gazetteer: neighborhood / landmark keyword → [lat, lng]. Ordered specific → general
  // (first match wins), so "Kyoto (Gion)" resolves to Gion, not Kyoto centre.
  const CITY_GEO = { Tokyo: [35.6812, 139.7671], Hakone: [35.232, 139.106], Kyoto: [34.9858, 135.7588], Osaka: [34.6937, 135.5023], Nara: [34.6851, 135.843] };
  const GEO = [
    // — Tokyo & day-trips —
    ['omoide', [35.6931, 139.6994]], ['kabukicho', [35.6938, 139.7034]],
    ['ni-chome', [35.6913, 139.7085]], ['nichome', [35.6913, 139.7085]], ['sanchome', [35.6906, 139.7057]],
    ['shinjuku', [35.6896, 139.7006]],
    ['shibuya sky', [35.6580, 139.7016]], ['scramble', [35.6595, 139.7005]], ['parco', [35.6626, 139.6982]], ['shibuya', [35.6595, 139.7005]],
    ['harajuku', [35.6702, 139.7027]], ['tsukiji', [35.6655, 139.7707]],
    ['toyosu', [35.6553, 139.7959]], ['teamlab', [35.6553, 139.7959]],
    ['asakusa', [35.7148, 139.7967]], ['senso', [35.7148, 139.7967]], ['nakamise', [35.7135, 139.7960]],
    ['akihabara', [35.6984, 139.7731]], ['nakano', [35.7076, 139.6657]],
    ['ryogoku', [35.6967, 139.7933]], ['skytree', [35.7101, 139.8107]], ['oshiage', [35.7101, 139.8107]], ['sumida', [35.7100, 139.8010]],
    ['tsukishima', [35.6647, 139.7841]], ['yurakucho', [35.6749, 139.7630]], ['forum', [35.6772, 139.7630]], ['ginza', [35.6717, 139.7650]],
    ['yanaka', [35.7278, 139.7660]], ['nippori', [35.7281, 139.7708]], ['shimokita', [35.6613, 139.6680]],
    ['mitaka', [35.6962, 139.5704]], ['ghibli', [35.6962, 139.5704]],
    ['narita', [35.7647, 140.3863]], ['nrt', [35.7647, 140.3863]],
    ['kamakura', [35.3192, 139.5468]], ['hase', [35.3169, 139.5355]], ['komachi', [35.3210, 139.5510]], ['enoshima', [35.2996, 139.4802]],
    // — Hakone —
    ['hakone-yumoto', [35.2328, 139.1069]], ['yumoto', [35.2328, 139.1069]], ['gora', [35.2470, 139.0490]],
    ['motohakone', [35.2005, 139.0256]], ['ninotaira', [35.2418, 139.0399]], ['odawara', [35.2564, 139.1553]], ['hakone', [35.232, 139.106]],
    // — Kyoto —
    ['fushimi', [34.9671, 135.7727]], ['inari', [34.9671, 135.7727]], ['arashiyama', [35.0094, 135.6737]], ['nishiki', [35.0050, 135.7649]],
    ['pontocho', [35.0048, 135.7706]], ['kiyamachi', [35.0036, 135.7690]], ['kamogawa', [35.0036, 135.7690]],
    ['gion', [35.0037, 135.7752]], ['higashiyama', [34.9948, 135.7850]], ['kiyomizu', [34.9948, 135.7850]],
    ['kinkaku', [35.0394, 135.7292]], ['golden pavilion', [35.0394, 135.7292]], ['northwest', [35.0394, 135.7292]], ['kyoto', [34.9858, 135.7588]],
    // — Osaka —
    ['dotonbori', [34.6687, 135.5013]], ['namba', [34.6659, 135.5010]], ['shinsaibashi', [34.6723, 135.5007]],
    ['kuromon', [34.6656, 135.5061]], ['den den', [34.6624, 135.5069]], ['nipponbashi', [34.6624, 135.5069]],
    ['doyama', [34.7048, 135.5010]], ['shinsekai', [34.6524, 135.5062]], ['umeda', [34.7025, 135.4959]],
    ['osakajo', [34.6873, 135.5259]], ['osaka castle', [34.6873, 135.5259]], ['shin-osaka', [34.7333, 135.5003]], ['osaka', [34.6937, 135.5023]],
    // — Nara —
    ['naramachi', [34.6790, 135.8290]], ['sanjo', [34.6810, 135.8260]], ['nara', [34.6851, 135.8430]],
    // — Kiso Valley (Nakasendo) + transit + extra Tokyo/Osaka spots —
    ['nakasendo', [35.5770, 137.5850]], ['magome', [35.5769, 137.5717]], ['tsumago', [35.5772, 137.5953]],
    ['nagiso', [35.5936, 137.6069]], ['nakatsugawa', [35.4972, 137.5006]], ['nagoya', [35.1706, 136.8816]], ['kiso', [35.5770, 137.5900]],
    ['makuhari', [35.6480, 140.0347]], ['ebisu', [35.6467, 139.7101]], ['kichijoji', [35.7030, 139.5800]], ['inokashira', [35.7000, 139.5700]],
    // — general fallback —
    ['tokyo', [35.6812, 139.7671]],
  ];
  const DAY_COLORS = ['#e6194B', '#f58231', '#ffe119', '#3cb44b', '#42d4f4', '#4363d8', '#911eb4', '#f032e6',
    '#bfa100', '#469990', '#9A6324', '#800000', '#008080', '#e05fa0', '#000075'];

  function geoFor(e, city) {
    const area = e.area || '', title = e.title || '';
    const scan = (str) => { const s = str.toLowerCase(); for (const [k, ll] of GEO) if (s.indexOf(k) >= 0) return ll; return null; };
    // split "A → B" / "A עד B" / "A ל-B"; for transport prefer the destination side
    const segs = area.split(/→|->|—|\s+to\s+|עד|ל-/i).map(s => s.trim()).filter(Boolean);
    const ordered = (e.type === 'transport' && segs.length > 1) ? segs.slice().reverse() : segs;
    for (const seg of ordered) { const hit = scan(seg); if (hit) return hit; }
    const hit = scan(area + ' ' + title); if (hit) return hit;
    return CITY_GEO[cityLatin(city)] || null;
  }

  let _map = null, _dayLayers = [], _visible = null;
  function ensureMap() {
    if (_map) return _map;
    _map = L.map('tripMap', { scrollWheelZoom: true }).setView([35.0, 137.3], 6);
    // English labels (hl=en) — Google road & satellite tiles, like the site's aerial maps
    const gOpts = { subdomains: ['0', '1', '2', '3'], maxZoom: 20, attribution: '© Google' };
    const gRoad = L.tileLayer('https://mt{s}.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', gOpts).addTo(_map);
    const gSat = L.tileLayer('https://mt{s}.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', gOpts);
    const overlays = buildSpotLayers();
    L.control.layers({ 'מפה · Mapa': gRoad, 'לוויין · Satélite': gSat }, overlays, { position: 'topright', collapsed: false }).addTo(_map);
    return _map;
  }
  // curated interest layers filtered to the cities actually on the route
  function buildSpotLayers() {
    const cities = new Set(state.days.map(d => cityLatin(d.city)));
    const mk = (list, emoji, hex) => {
      const g = L.layerGroup();
      list.filter(s => cities.has(s.city)).forEach(s => {
        L.marker(s.ll, { icon: L.divIcon({ className: 'spot-pin', html: `<span style="background:${hex}">${emoji}</span>`, iconSize: [26, 26], iconAnchor: [13, 13] }) })
          .bindPopup(`<b dir="auto">${escapeHtml(s.name)}</b><br><span dir="auto" style="color:#555">${escapeHtml(s[lang] || s.he || '')}</span><br><a href="https://www.google.com/maps/search/?api=1&query=${s.ll[0]},${s.ll[1]}" target="_blank" rel="noopener">🗺️ ${escapeHtml(t('mapsOpen'))}</a>`, { autoPan: false })
          .addTo(g);
      });
      return g;
    };
    const out = {};
    out[t('spotsAnime')] = mk(SPOTS.anime, '🎮', '#7a3ff2');
    out[t('spotsLgbt')] = mk(SPOTS.lgbt, '🏳️‍🌈', '#e0409a');
    return out;
  }
  function buildDayLayer(d, di) {
    const evs = sortEvents(d.events || []);
    const pts = [], seen = {};
    evs.forEach(e => {
      let ll = geoFor(e, d.city); if (!ll) return;
      const key = ll[0] + ',' + ll[1];
      if (seen[key] != null) { const n = ++seen[key]; ll = [ll[0] + 0.0006 * n, ll[1] + 0.0007 * n]; } else seen[key] = 0;
      pts.push({ ll, e });
    });
    if (!pts.length) return null;
    const color = DAY_COLORS[di % DAY_COLORS.length];
    const group = L.layerGroup();
    if (pts.length > 1) L.polyline(pts.map(p => p.ll), { color, weight: 3, opacity: .82 }).addTo(group);
    pts.forEach((p, idx) => {
      L.circleMarker(p.ll, { radius: 7, color: '#fff', weight: 2, fillColor: color, fillOpacity: 1 })
        .bindPopup(`<b>${t('day')} ${di + 1} · ${escapeHtml(d.city || '')} · ${fmtDate(d.date)}</b><br>` +
          `${escapeHtml(p.e.start || '')} <b dir="auto">${escapeHtml(p.e.title || '')}</b>` +
          (p.e.area ? `<br><span style="color:#666" dir="auto">📍 ${escapeHtml(p.e.area)}</span>` : ''), { autoPan: false })
        .addTo(group);
    });
    return { group, color, bounds: L.latLngBounds(pts.map(p => p.ll)) };
  }
  function applyMapVisibility() {
    const map = ensureMap(), b = L.latLngBounds([]);
    _dayLayers.forEach((ly, di) => {
      if (!ly) return;
      if (_visible.has(di)) { ly.group.addTo(map); if (ly.bounds.isValid()) b.extend(ly.bounds); }
      else map.removeLayer(ly.group);
    });
    if (b.isValid()) map.fitBounds(b.pad(0.12));
  }
  function renderMapLegend() {
    const box = $('#mapLegend'); if (!box) return;
    const ctrl = `<span class="mlchip mlctrl" data-act="all">${t('mapAll')}</span><span class="mlchip mlctrl" data-act="none">${t('mapNone')}</span>`;
    box.innerHTML = ctrl + state.days.map((d, i) => {
      if (!_dayLayers[i]) return '';
      const off = _visible.has(i) ? '' : ' off';
      return `<span class="mlchip${off}" data-day="${i}"><span class="mldot" style="background:${DAY_COLORS[i % DAY_COLORS.length]}"></span>${t('day')} ${i + 1} · ${cityEmoji(d.city)} ${escapeHtml(d.city || '')}</span>`;
    }).join('');
    $$('.mlchip[data-day]', box).forEach(c => c.onclick = () => {
      const i = +c.dataset.day; if (_visible.has(i)) _visible.delete(i); else _visible.add(i);
      renderMapLegend(); applyMapVisibility();
    });
    $$('.mlctrl', box).forEach(c => c.onclick = () => {
      _visible = c.dataset.act === 'all' ? new Set(state.days.map((_, i) => i)) : new Set();
      renderMapLegend(); applyMapVisibility();
    });
  }
  function renderMap() {
    if (typeof L === 'undefined') { $('#tripMap').innerHTML = '<div class="panel">🗺️ ' + t('loading') + '</div>'; return; }
    const map = ensureMap();
    _dayLayers.forEach(ly => ly && map.removeLayer(ly.group));
    _dayLayers = state.days.map((d, di) => buildDayLayer(d, di));
    if (_visible == null) _visible = new Set(state.days.map((_, i) => i));
    renderMapLegend();
    applyMapVisibility();
    setTimeout(() => { map.invalidateSize(); applyMapVisibility(); }, 80);
  }

  // ---------- compare (itinerary vs Excel) ----------
  const CMP_HE = {
    dir: 'rtl', tag: '🇮🇱 עברית',
    title: '⚖️ השוואת מסלולים — האתר מול קובץ האקסל',
    note: '<b>✅ עודכן:</b> המסלול באתר נבנה מחדש לאופציה A — משלב עכשיו את <b>עמק קיסו</b> (מאגומה/צומאגו + הליכת נקאסֶנדו), מופע <b>סומו</b> באוסקה, ויום ההולדת עבר לצומאגו. ההשוואה שלהלן משקפת את השיקולים המקוריים (אתר מול אקסל).<br><br><b>יישור תאריכים:</b> האקסל הוא 16 ימים (17.9–2.10) ומניח נחיתה כבר ב-17.9, אבל לפי הטיסות נוחתים ב-NRT רק ב-18.9 בערב — כך שיום 1 של האקסל אינו אפשרי. האתר תואם לטיסות: 15 ימים, 18.9–2.10.',
    hPhil: 'הבדל התפיסה', colSite: 'האתר (שבנינו)', colXls: 'האקסל',
    rows: [
      ['גישה', 'פחות בסיסים, לעומק ורגוע', '"סיבוב גדול" — לראות את כל יפן'],
      ['בסיסים', 'טוקיו · האקונה · קיוטו · אוסקה · טוקיו', '+ עמק קיסו · מיאג\'ימה · הירושימה'],
      ['קצב', 'מתון, רומנטי, הרבה מנוחה', 'עמוס, הרבה שינקנסן, לינות של לילה בודד'],
      ['טיולי יום', 'קמאקורה + נארה', 'אין (במקום — יעדים מרוחקים)'],
    ],
    hXls: 'רק באקסל (חסר באתר)',
    onlyXls: [
      '<b>עמק קיסו — מסלול נקאסֶנדו</b> (הליכה 8–9 ק"מ מגומה↔צומאגו, 2 לינות בעיירות אֶדו)',
      '<b>מיאג\'ימה</b> (השער הצף איטסוקושימה) + <b>הירושימה</b> (פארק השלום)',
      'אוג\'י (תרבות המאצ\'ה) · נגויה (עצירת אוכל)',
      'מייג\'י ג\'ינגו · קיומיזו-דרה + מדרונות נִינֶנזָקָה',
    ],
    hSite: 'רק באתר (חסר באקסל)',
    onlySite: [
      '<b>נארה</b> (פארק הצבאים) · <b>קמאקורה</b> (הבודהה הגדול, אנושימה)',
      'Shibuya Sky בשקיעה · שוק צוקיג\'י · מוזיאון ג\'יבלי · יאנקה · נקאנו · מונג\'ה · חוויית קימונו',
    ],
    hAgree: 'מוסכם על שניהם',
    agree: 'אסקוסה/סנסו-ג\'י · אקיהברה · <b>סומו</b> · <b>Ni-chome</b> · <b>ריוקאן אונסן בהאקונה</b> · פושימי אינארי (שחר) · ארשיאמה · מאיקו/גיישה · ארוחת מישלן · דוטונבורי · דויאמה-צ\'ו · teamLab · <b>יום הולדת 40 ב-24.9</b> · חזרה לטוקיו לטיסה.',
    hConcl: 'מסקנות',
    concl: [
      '<b>יום ההולדת — אותו תאריך (24.9), מיקום שונה:</b> אצלנו בריוקאן אונסן בהאקונה (אינטימי, מפנק); באקסל בקיוטו (מאיקו + מישלן, תרבותי-מפואר).',
      '<b>האתר ריאלי ותואם-טיסות; האקסל שאפתני מדי לזמן הנתון</b> — קשת ענקית עם המון נסיעות, ועם יום פתיחה שלא קיים.',
      'אפשר לשלב <b>יעד מרכזי אחד</b> מהאקסל (הירושימה+מיאג\'ימה <b>או</b> טרק נקאסֶנדו) תמורת ויתור על יום — לא את שניהם.',
      'האקסל מפספס שתי פנינות קלות שכבר יש באתר: <b>נארה</b> ו<b>קמאקורה</b>.',
      '<b>בשורה תחתונה:</b> שלד האתר קוהרנטי יותר לטיול יום-הולדת זוגי; האקסל הוא "תפריט" מצוין של תוספות.',
    ],
  };
  const CMP_ES = {
    dir: 'ltr', tag: '🇦🇷 Español',
    title: '⚖️ Comparación de itinerarios — el sitio vs. el Excel',
    note: '<b>✅ Actualizado:</b> el itinerario del sitio se rehízo en la Opción A — ahora integra el <b>Valle de Kiso</b> (Magome/Tsumago + caminata Nakasendo), el <b>sumo</b> en Osaka, y el cumpleaños pasó a Tsumago. La comparación de abajo refleja el análisis original (sitio vs Excel).<br><br><b>Alineación de fechas:</b> el Excel son 16 días (17/9–2/10) y asume llegada el 17/9, pero según los vuelos recién aterrizan en NRT el 18/9 a la noche — así que el Día 1 del Excel no es posible. El sitio coincide con los vuelos: 15 días, 18/9–2/10.',
    hPhil: 'La diferencia de enfoque', colSite: 'El sitio (que armamos)', colXls: 'El Excel',
    rows: [
      ['Enfoque', 'Menos bases, más profundo y relajado', '"Gran tour" — ver toda Japón'],
      ['Bases', 'Tokio · Hakone · Kioto · Osaka · Tokio', '+ Valle de Kiso · Miyajima · Hiroshima'],
      ['Ritmo', 'Tranquilo, romántico, con descanso', 'Cargado, mucho shinkansen, noches sueltas'],
      ['Excursiones', 'Kamakura + Nara', 'Ninguna (en su lugar, destinos lejanos)'],
    ],
    hXls: 'Solo en el Excel (falta en el sitio)',
    onlyXls: [
      '<b>Valle de Kiso — sendero Nakasendo</b> (caminata 8–9 km Magome↔Tsumago, 2 noches en pueblos Edo)',
      '<b>Miyajima</b> (torii flotante de Itsukushima) + <b>Hiroshima</b> (Parque de la Paz)',
      'Uji (cultura del matcha) · Nagoya (parada gastronómica)',
      'Meiji Jingu · Kiyomizu-dera + cuestas Ninenzaka',
    ],
    hSite: 'Solo en el sitio (falta en el Excel)',
    onlySite: [
      '<b>Nara</b> (parque de los ciervos) · <b>Kamakura</b> (Gran Buda, Enoshima)',
      'Shibuya Sky al atardecer · mercado Tsukiji · Museo Ghibli · Yanaka · Nakano · Monja · experiencia de kimono',
    ],
    hAgree: 'En lo que coinciden',
    agree: 'Asakusa/Senso-ji · Akihabara · <b>sumo</b> · <b>Ni-chome</b> · <b>ryokan onsen en Hakone</b> · Fushimi Inari (al amanecer) · Arashiyama · maiko/geisha · cena Michelin · Dotonbori · Doyama-cho · teamLab · <b>cumpleaños 40 el 24/9</b> · regreso a Tokio para el vuelo.',
    hConcl: 'Conclusiones',
    concl: [
      '<b>El cumpleaños — misma fecha (24/9), lugar distinto:</b> en el sitio, ryokan onsen en Hakone (íntimo, mimoso); en el Excel, Kioto (maiko + Michelin, cultural y lujoso).',
      '<b>El sitio es realista y coincide con los vuelos; el Excel es demasiado ambicioso</b> para el tiempo — un arco enorme con muchísimos traslados y un "día 1 fantasma".',
      'Se puede sumar <b>UN destino estrella</b> del Excel (Hiroshima+Miyajima <b>o</b> el trekking Nakasendo) resignando un día — no los dos.',
      'El Excel se pierde dos joyas fáciles que el sitio ya tiene: <b>Nara</b> y <b>Kamakura</b>.',
      '<b>En resumen:</b> la estructura del sitio es más coherente para un viaje de cumpleaños en pareja; el Excel es un excelente "menú" de extras.',
    ],
  };
  function compareBlock(L) {
    return `<div class="panel cmp" dir="${L.dir}"><span class="cmp-lang">${L.tag}</span><h2>${L.title}</h2>` +
      `<p class="cmp-note">${L.note}</p>` +
      `<h3>${L.hPhil}</h3><table class="cmp-table"><thead><tr><th></th><th>${L.colSite}</th><th>${L.colXls}</th></tr></thead><tbody>` +
      L.rows.map(r => `<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('') + `</tbody></table>` +
      `<h3>${L.hXls}</h3><ul>${L.onlyXls.map(x => `<li>${x}</li>`).join('')}</ul>` +
      `<h3>${L.hSite}</h3><ul>${L.onlySite.map(x => `<li>${x}</li>`).join('')}</ul>` +
      `<h3>${L.hAgree}</h3><p>${L.agree}</p>` +
      `<h3>${L.hConcl}</h3><ol>${L.concl.map(x => `<li>${x}</li>`).join('')}</ol></div>`;
  }
  function renderCompare() {
    const box = $('#compareBody'); if (!box) return;
    box.innerHTML = compareBlock(CMP_HE) + '<div class="cmp-divider"></div>' + compareBlock(CMP_ES);
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

  // ---------- booked (hotels to close) ----------
  const LS_BOOKED = 'japanTrip.booked.v1';
  const loadBooked = () => safeParse(localStorage.getItem(LS_BOOKED)) || {};
  const saveBooked = (b) => localStorage.setItem(LS_BOOKED, JSON.stringify(b));
  // מלונות שכבר נסגרו — baseline בקוד. מספרי אישור/PIN לא נשמרים כאן (repo ציבורי):
  // מזינים אותם בשדה "אסמכתא" בטאב "לסגור" → נשמרים מקומית בדפדפן בלבד (localStorage).
  const BOOKED = {
    'tokyo-shinjuku': { hotel: 'HOTEL AMANEK Shinjuku Kabukicho', ref: '', cost: '¥153,115 · ~₪2,845', checkin: '2026-09-18', checkout: '2026-09-22', cancelBy: '2026-09-10', done: true,
      note: { he: '✓ 4 לילות (18→22) · Standard Queen · ביטול חינם עד 10.9.', es: '✓ 4 noches (18→22) · Standard Queen · cancelación gratis hasta 10/9.' } },
    'hakone-gora': { hotel: 'Hakone Onsen Ryokan Yaeikan', ref: '', cost: '', checkin: '2026-09-22', checkout: '2026-09-23', cancelBy: '', done: true,
      note: { he: 'אונסן ריוקאן בהאקונה · מלאו עלות ותאריך ביטול מאישור ההזמנה.', es: 'Onsen ryokan en Hakone · completá costo y fecha de cancelación desde la confirmación.' } },
    'magome-kiso': { hotel: 'Yanagiya Iri (柳屋入) — Magome', ref: '', cost: '¥53,600 · ~₪998', checkin: '2026-09-23', checkout: '2026-09-24', cancelBy: '2026-09-17', done: true,
      note: { he: '🎂 לילה יום ההולדת ה-40 במאגומה — וילה עם מטבח, בלי ארוחות. לתכנן ארוחת יום הולדת (מסעדה במאגומה או בישול בווילה).', es: '🎂 Noche del cumpleaños 40 en Magome — villa con cocina, sin comidas. Planear la cena de cumpleaños (restaurante en Magome o cocinar en la villa).' } },
    'tsumago-kiso': { hotel: 'AKARI — Nagiso (ליד צומאגו)', ref: '', cost: '¥44,000 · ~₪819', checkin: '2026-09-24', checkout: '2026-09-25', cancelBy: '2026-09-18', done: true,
      note: { he: 'לילה בנאגיסו (~10 דק׳ מצומאגו) — וילה עם מטבח, בלי ארוחות. ארוחת ערב במסעדה מקומית או בישול בווילה.', es: 'Noche en Nagiso (~10 min de Tsumago) — villa con cocina, sin comidas. Cena en un restaurante local o cocinar en la villa.' } },
    'osaka': { hotel: 'Onyado Nono Namba (御宿 野乃 なんば)', ref: '', cost: '¥51,699 · ~₪962', checkin: '2026-09-28', checkout: '2026-09-30', cancelBy: '2026-09-26', done: true,
      note: { he: 'אונסן טבעי בבית המלון · ⚠️ אסורה כניסה עם קעקועים גלויים למרחצאות (מדבקות כיסוי).', es: 'Onsen natural en el hotel · ⚠️ prohibido tatuajes visibles en los baños (usar stickers).' } },
    'kyoto': { hotel: 'Candeo Hotels Kyoto Karasuma Rokkaku', ref: '', cost: '¥74,593 · ~US$469', checkin: '2026-09-25', checkout: '2026-09-28', cancelBy: '2026-09-24', done: true,
      note: { he: 'מלון 4★ במרכז קיוטו (Karasuma/Rokkaku) · בלי ארוחות · עבודות בנייה בצד מזרח 08:30–18:00 (ייתכן רעש).', es: 'Hotel 4★ en el centro de Kioto (Karasuma/Rokkaku) · sin comidas · obras en el lado este 08:30–18:00 (posible ruido).' } },
    'tokyo-return': { hotel: 'Tokyu Stay Shinjuku', ref: '', cost: '¥77,648 · ~US$488', checkin: '2026-09-30', checkout: '2026-10-02', cancelBy: '2026-09-28', done: true,
      note: { he: "שינג'וקו · חדר Superior עם מכונת כביסה-מייבש ו-Netflix · תשלום מלא בצ'ק-אין · אין ניקיון יומי (עד 6 לילות).", es: 'Shinjuku · habitación Superior con lavarropas-secarropas y Netflix · pago total al check-in · sin limpieza diaria (hasta 6 noches).' } },
  };
  const bookedFor = (id) => Object.assign({}, BOOKED[id] || {}, loadBooked()[id] || {});
  // רכבות לסגור (מושבים שמורים / כרטיסים) — לפי תאריכי המסלול. salesOpen ≈ חודש לפני הנסיעה.
  const TRAINS = [
    { id: 't-nex-in', date: '2026-09-18', salesOpen: '2026-08-18', from: 'Narita Airport Terminal 1', to: 'Shinjuku Station', url: 'https://www.jreast.co.jp/multi/en/ticket/',
      title: { he: "N'EX: נריטה → שינג'וקו", es: "N'EX: Narita → Shinjuku" },
      note: { he: "כרטיס הלוך-חזור (¥5,000, כולל את החזרה לנריטה ב-2.10) + שמירת מקום.", es: "Boleto ida y vuelta (¥5.000, incluye la vuelta a Narita el 2/10) + asiento reservado." } },
    { id: 't-romancecar', date: '2026-09-21', salesOpen: '2026-08-21', from: 'Shinjuku Station', to: 'Hakone-Yumoto Station', url: 'https://www.odakyu.jp/english/romancecar/',
      title: { he: "Romancecar: שינג'וקו → Hakone-Yumoto", es: "Romancecar: Shinjuku → Hakone-Yumoto" },
      note: { he: "21–22.9 לפי המסלול הסופי · מושב שמור · Silver Week — לשריין מיד.", es: "21–22/9 según el itinerario final · asiento reservado · Silver Week — reservá ya." } },
    { id: 't-tokaido-kiso', date: '2026-09-23', salesOpen: '2026-08-23', from: 'Odawara Station', to: 'Nagoya Station', url: 'https://smart-ex.jp/en/',
      title: { he: "שינקנסן: Odawara → Nagoya", es: "Shinkansen: Odawara → Nagoya" },
      note: { he: "בדרך לעמק קיסו (קו Tokaido) · SmartEX.", es: "Rumbo al Valle de Kiso (línea Tokaido) · SmartEX." } },
    { id: 't-shinano-in', date: '2026-09-23', salesOpen: '2026-08-23', from: 'Nagoya Station', to: 'Nakatsugawa Station', url: 'https://www.jr-odekake.net/en/',
      title: { he: "Ltd.Exp. Shinano: Nagoya → Nakatsugawa", es: "Ltd.Exp. Shinano: Nagoya → Nakatsugawa" },
      note: { he: "ואז אוטובוס למאגומה (~30 דק').", es: "Y después bus a Magome (~30 min)." } },
    { id: 't-shinano-out', date: '2026-09-25', salesOpen: '2026-08-25', from: 'Nagiso Station', to: 'Nagoya Station', url: 'https://www.jr-odekake.net/en/',
      title: { he: "Ltd.Exp. Shinano: Nagiso → Nagoya", es: "Ltd.Exp. Shinano: Nagiso → Nagoya" },
      note: { he: "מהקיסו חזרה לנגויה (אוטובוס מצומאגו ל-Nagiso).", es: "Del Kiso de vuelta a Nagoya (bus de Tsumago a Nagiso)." } },
    { id: 't-tokaido-kyoto', date: '2026-09-25', salesOpen: '2026-08-25', from: 'Nagoya Station', to: 'Kyoto Station', url: 'https://smart-ex.jp/en/',
      title: { he: "שינקנסן: Nagoya → Kyoto", es: "Shinkansen: Nagoya → Kioto" },
      note: { he: "קו Tokaido · SmartEX.", es: "Línea Tokaido · SmartEX." } },
    { id: 't-osaka-tokyo', date: '2026-09-30', salesOpen: '2026-08-30', from: 'Shin-Osaka Station', to: 'Tokyo Station', url: 'https://smart-ex.jp/en/',
      title: { he: "שינקנסן: Shin-Osaka → Tokyo", es: "Shinkansen: Shin-Osaka → Tokio" },
      note: { he: "חזרה לטוקיו (Nozomi/Hikari) · SmartEX.", es: "Vuelta a Tokio (Nozomi/Hikari) · SmartEX." } },
    { id: 't-nex-out', date: '2026-10-02', salesOpen: '2026-09-02', from: 'Shinjuku Station', to: 'Narita Airport Terminal 1', url: 'https://www.jreast.co.jp/multi/en/ticket/',
      title: { he: "N'EX: שינג'וקו → נריטה", es: "N'EX: Shinjuku → Narita" },
      note: { he: "הרגל השנייה של כרטיס ההלוך-חזור · לשמור מקום לטיסה 12:00.", es: "La segunda pierna del ida y vuelta · reservá asiento para el vuelo de las 12:00." } },
  ];
  // כרטיסים לאירועים לסגור
  const EVENTS = [
    { id: 'e-sumo', date: '2026-09-28', done: true, url: 'https://www.google.com/search?q=The+Sumo+Hall+Hirakuza+Osaka',
      title: { he: "🥋 מופע סומו — Sumo Hall Hirakuza (Osaka)", es: "🥋 Show de sumo — Sumo Hall Hirakuza (Osaka)" },
      note: { he: "✓ נסגר · 28.9 בשעה 17:00 · מושב סטנדרט + בנטו + משקה · 2 מבוגרים · הזמנה PFB554612.", es: "✓ Reservado · 28/9 a las 17:00 · asiento estándar + bento + bebida · 2 adultos · reserva PFB554612." } },
    { id: 'e-shibuyasky', date: '2026-09-19', salesOpen: '2026-08-22', url: 'https://www.shibuya-scramble-square.com/sky/',
      title: { he: "🌇 Shibuya Sky — סלוט שקיעה", es: "🌇 Shibuya Sky — slot atardecer" },
      note: { he: "סלוט השקיעה נחטף — נפתח ~4 שבועות מראש.", es: "El slot del atardecer se agota — abre ~4 semanas antes." } },
    { id: 'e-ghibli', date: '2026-10-01', salesOpen: '2026-09-10', salesTime: true, url: 'https://l-tike.com/ghibli/',
      title: { he: "🎬 מוזיאון ג'יבלי (Mitaka)", es: "🎬 Museo Ghibli (Mitaka)" },
      note: { he: "ה-10 לחודש הקודם בדיוק, ב-10:00 שעון יפן, ב-Lawson — נחטף בדקות.", es: "El día 10 del mes anterior exacto, 10:00 hora Japón, en Lawson — se agota en minutos." } },
    { id: 'e-teamlab', date: '2026-10-01', salesOpen: '2026-08-01', url: 'https://www.teamlab.art/e/planets/',
      title: { he: "🌀 teamLab Planets (Toyosu)", es: "🌀 teamLab Planets (Toyosu)" },
      note: { he: "כרטיס עם שעת כניסה — לקנות מראש.", es: "Entrada con horario — comprá con anticipación." } },
    { id: 'e-maiko', date: '2026-09-27', salesOpen: null, url: 'https://www.thehatanaka.co.jp/en/maiko/',
      title: { he: "🎎 ערב מאיקו / גייקו (Kyoto)", es: "🎎 Velada maiko / geiko (Kioto)" },
      note: { he: "להזמין 2–3 חודשים מראש — אין walk-in.", es: "Reservá 2–3 meses antes — no hay walk-in." } },
    { id: 'e-teakimono', date: '2026-09-27', salesOpen: null, url: 'https://mai-ko.com/',
      title: { he: "🍵 טקס תה + קימונו (Kyoto)", es: "🍵 Ceremonia de té + kimono (Kioto)" },
      note: { he: "סדנת זוגות — להזמין מראש.", es: "Taller para parejas — reservá con anticipación." } },
    { id: 'e-workshop', date: '2026-09-21', salesOpen: null, url: 'https://www.cookly.me/tokyo/',
      title: { he: "🍣 סדנת סושי / וואגאשי (Tokyo)", es: "🍣 Taller de sushi / wagashi (Tokio)" },
      note: { he: "להזמין מראש (Airbnb Experiences / Cookly).", es: "Reservá con anticipación (Airbnb Experiences / Cookly)." } },
  ];
  function updateBookedProg() {
    const el = $('#bookedProg'); if (!el) return;
    const list = stays();
    el.textContent = t('bookedProgress')(list.filter(s => bookedFor(s.id).done).length, list.length);
  }
  function renderBooked() {
    const box = $('#bookedBody'); box.innerHTML = ''; const saved = loadBooked();
    const intro = document.createElement('div'); intro.className = 'panel';
    intro.innerHTML = `<h2>${t('bookedTitle')}</h2><div class="booked-hint">${t('bookedHint')}</div><div class="booked-prog" id="bookedProg"></div>`;
    box.appendChild(intro);
    stays().forEach(s => {
      const city = s['city' + (lang === 'he' ? 'He' : 'Es')];
      const rec = bookedFor(s.id);
      const ci = rec.checkin || s.dates[0];
      const co = rec.checkout || isoPlusDays(s.dates[s.dates.length - 1], 1);
      const nights = rec.checkin ? Math.max(1, Math.round((new Date(co) - new Date(ci)) / 864e5)) : s.nights;
      const note = rec.note ? (rec.note[lang] || rec.note.he || '') : '';
      const card = document.createElement('div'); card.className = 'panel bkcard' + (rec.done ? ' bkdone' : '');
      card.innerHTML =
        `<div class="bk-head"><span class="bk-cover">${s.cover || '🏨'}</span>` +
        `<span class="bk-city" dir="auto">${escapeHtml(city)}${s.area ? ' · ' + escapeHtml(s.area) : ''}</span>` +
        `<span class="bk-dates"><span class="bk-cio">${t('bookedStay')}</span> <b>${fmtDate(ci)} → ${fmtDate(co)}</b> · ${t('hNights')(nights)}${s.birthday ? ' 🎂' : ''}</span></div>` +
        (note ? `<div class="bk-note" dir="auto">ℹ️ ${escapeHtml(note)}</div>` : '') +
        `<div class="bk-fields">` +
        `<input class="bk-hotel" type="text" placeholder="${escapeAttr(t('bookedHotelPh'))}" value="${escapeAttr(rec.hotel || '')}">` +
        `<input class="bk-cost" type="text" placeholder="${escapeAttr(t('bookedCostPh'))}" value="${escapeAttr(rec.cost || '')}">` +
        `<label class="bk-datewrap"><span>${t('bookedCancelLabel')}</span><input class="bk-cancel-in" type="date" value="${escapeAttr(rec.cancelBy || '')}"></label>` +
        `<input class="bk-ref" type="text" placeholder="${escapeAttr(t('bookedRefPh'))}" value="${escapeAttr(rec.ref || '')}">` +
        `<label class="bk-check"><input type="checkbox" ${rec.done ? 'checked' : ''}> ${t('bookedDone')}</label></div>` +
        (rec.done ? `<a class="bk-manage" href="https://www.booking.com/mytrips" target="_blank" rel="noopener">📄 ${t('bookedManage')} ↗</a>` : '');
      const persist = () => {
        const b = loadBooked();
        b[s.id] = Object.assign({}, BOOKED[s.id] || {}, {
          hotel: card.querySelector('.bk-hotel').value, cost: card.querySelector('.bk-cost').value,
          cancelBy: card.querySelector('.bk-cancel-in').value, ref: card.querySelector('.bk-ref').value,
          done: card.querySelector('.bk-check input').checked,
        });
        saveBooked(b); card.classList.toggle('bkdone', b[s.id].done); updateBookedProg();
      };
      ['.bk-hotel', '.bk-cost', '.bk-cancel-in', '.bk-ref'].forEach(sel => card.querySelector(sel).addEventListener('input', persist));
      card.querySelector('.bk-check input').addEventListener('change', () => { persist(); toast(t('saved')); });
      box.appendChild(card);
    });

    // ── רכבות + כרטיסים לאירועים ──
    const secCount = (items) => items.filter(i => (loadBooked()[i.id] || {}).done).length + '/' + items.length;
    const itemCard = (item) => {
      const _lb = loadBooked()[item.id] || {};
      const done = _lb.done !== undefined ? _lb.done : !!item.done;
      const info = salesInfo(item.salesOpen);
      let chip = '';
      if (info) {
        if (info.state === 'open') chip = `<span class="bi-sales open">${t('bookedSalesOpenNow')}</span>`;
        else { const lbl = info.days <= 0 ? t('bookedOpensToday') : info.days === 1 ? t('bookedOpensTomorrow') : t('bookedOpensIn')(info.days);
          const tm = (item.from || item.salesTime) ? ' ' + t('bookedSalesTime') : '';
          chip = `<span class="bi-sales soon">🔔 ${lbl} · ${fmtDate(item.salesOpen)}${tm}</span>`; }
      }
      const mapUrl = (item.from && item.to) ? transitMapUrl(item.from, item.to) : '';
      const card = document.createElement('div'); card.className = 'panel bkitem' + (done ? ' bkdone' : '');
      card.innerHTML =
        `<label class="bk-check bi-check"><input type="checkbox" ${done ? 'checked' : ''}></label>` +
        `<div class="bi-main"><div class="bi-title" dir="auto">${escapeHtml(item.title[lang] || item.title.he)}` +
        (item.date ? ` <span class="bi-date">${fmtDate(item.date)}</span>` : '') +
        (item.from ? ` <span class="bi-pax">👥 ${t('bookedPax')}</span>` : '') + `</div>` +
        (item.note ? `<div class="bi-note" dir="auto">${escapeHtml(item.note[lang] || item.note.he)}</div>` : '') +
        `<div class="bi-meta">` + chip +
        (mapUrl ? `<a class="bi-link ghost" href="${mapUrl}" target="_blank" rel="noopener">🗺️ ${t('bookedMapLink')}</a>` : '') +
        (item.url ? `<a class="bi-link" href="${item.url}" target="_blank" rel="noopener">${t('bookedBook')} ↗</a>` : '') +
        `</div>` +
        `<input class="bi-note-in" type="text" placeholder="${escapeAttr(t('bookedItemNotePh'))}" value="${escapeAttr((loadBooked()[item.id] || {}).userNote || '')}">` +
        `</div>`;
      card.querySelector('.bi-note-in').addEventListener('input', (e) => {
        const b = loadBooked(); b[item.id] = Object.assign({}, b[item.id], { userNote: e.target.value }); saveBooked(b);
      });
      card.querySelector('.bi-check input').addEventListener('change', (e) => {
        const b = loadBooked(); b[item.id] = Object.assign({}, b[item.id], { done: e.target.checked }); saveBooked(b);
        card.classList.toggle('bkdone', e.target.checked);
        const isTrain = item.id.slice(0, 2) === 't-';
        const cnt = box.querySelector(`.bk-sec-count[data-key="${isTrain ? 'bookedTrains' : 'bookedEvents'}"]`);
        if (cnt) cnt.textContent = secCount(isTrain ? TRAINS : EVENTS);
        toast(t('saved'));
      });
      return card;
    };
    [['bookedTrains', TRAINS], ['bookedEvents', EVENTS]].forEach(([key, items]) => {
      const h = document.createElement('div'); h.className = 'bk-section';
      h.innerHTML = `<h3 class="bk-sec-title">${t(key)} <span class="bk-sec-count" data-key="${key}">${secCount(items)}</span></h3>`;
      box.appendChild(h);
      items.forEach(i => box.appendChild(itemCard(i)));
    });
    updateBookedProg();
  }

  // ---------- prep ----------
  const DEFAULT_CHECK = {
    he: {
      'הזמנות דחופות (עכשיו!)': [
        '✓ כל 7 המלונות + מופע הסומו (Osaka Hirakuza, 28.9) — נסגרו',
        'Romancecar שינג׳וקו→האקונה (22.9) — Silver Week, לשריין',
        'מוזיאון ג׳יבלי — 10.9 בשעה 10:00 (שעון יפן) ב-Lawson',
        'מושבי שינקנסן (נגויה↔קיוטו, שין-אוסקה→טוקיו) ב-SmartEX — שבוע חג',
        'Shibuya Sky (סלוט שקיעה), teamLab Planets, חוויית מאיקו, סדנת תה+קימונו, סדנת סושי',
        'מסעדות: ארוחת יום ההולדת בצומאגו, ארוחת הפרידה (אומקסה/קאיסקי)',
      ],
      'כרטיסים ותחבורה': [
        'Suica/Pasmo בארנק הדיגיטלי (טעינה ~¥3,000)',
        'N\'EX הלוך-חזור (כולל חזרה לנאריטה ב-2.10)',
        'העברת מזוודות (takkyubin): טוקיו→קיוטו, קיוטו→אוסקה',
        'העברת כבודה מאגומה↔צומאגו לפני הליכת נקאסֶנדו',
        'Hakone Free Pass · eSIM לשני הטלפונים',
      ],
      'לארוז': [
        'נעליים נוחות + נעלי הליכה לטרק נקאסֶנדו (~8 ק"מ)',
        'תיק לילה קטן (להאקונה ולקיסו — המזוודות נשלחות קדימה)',
        'שכבות + מטרייה מתקפלת (סוף ספטמבר לח, סיכון טייפון)',
        'מדבקות כיסוי לקעקועים (לאונסן)',
        'מטען נייד + מתאם (תקע A, 100V) · מזומן ¥',
      ],
      'טוב לדעת': [
        'Silver Week 21–23.9 — חופשה לאומית, האקונה/שינקנסן/קיסו עמוסים; להזמין הכל מראש',
        'יום ההולדת 24.9 בצומאגו — הליכת נקאסֶנדו + ריוקאן מסורתי',
        'לילות גאים: Ni-chome (טוקיו) · Doyama-cho (אוסקה)',
      ],
    },
    es: {
      'Reservas urgentes (¡ya!)': [
        '✓ Los 7 hoteles + el show de sumo (Osaka Hirakuza, 28/9) — reservados',
        'Romancecar Shinjuku→Hakone (22/9) — Silver Week, reservá',
        'Museo Ghibli — 10/9 a las 10:00 (hora Japón) en Lawson',
        'Asientos de shinkansen (Nagoya↔Kioto, Shin-Osaka→Tokio) en SmartEX — feriado',
        'Shibuya Sky (slot atardecer), teamLab Planets, experiencia maiko, taller de té+kimono, clase de sushi',
        'Restaurantes: cena de cumpleaños en Tsumago, cena de despedida (omakase/kaiseki)',
      ],
      'Pasajes y transporte': [
        'Suica/Pasmo en la billetera del celular (cargar ~¥3.000)',
        'N\'EX ida y vuelta (incluye la vuelta a Narita el 2/10)',
        'Envío de valijas (takkyubin): Tokio→Kioto, Kioto→Osaka',
        'Envío de equipaje Magome↔Tsumago antes de la caminata Nakasendo',
        'Hakone Free Pass · eSIM para los dos celulares',
      ],
      'Para la valija': [
        'Zapatillas cómodas + calzado para el trekking Nakasendo (~8 km)',
        'Bolso de una noche (para Hakone y Kiso — las valijas van por delante)',
        'Capas + paraguas plegable (fin de septiembre húmedo, riesgo de tifón)',
        'Stickers para tapar tatuajes (para el onsen)',
        'Batería portátil + adaptador (tipo A, 100V) · efectivo en ¥',
      ],
      'Bueno saber': [
        'Silver Week 21–23/9 — feriado nacional; Hakone/shinkansen/Kiso llenos: reservá todo',
        'El cumpleaños 24/9 en Tsumago — caminata Nakasendo + ryokan tradicional',
        'Noches gay: Ni-chome (Tokio) · Doyama-cho (Osaka)',
      ],
    },
  };
  const loadCheck = () => safeParse(localStorage.getItem(LS_CHECK)) || { done: {}, custom: {} };
  const saveCheck = (c) => localStorage.setItem(LS_CHECK, JSON.stringify(c));
  function renderPrep() {
    const c = loadCheck(); const body = $('#prepBody'); body.innerHTML = '';
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
  const VIEWS = ['itinerary', 'overview', 'map', 'booked', 'luggage', 'guide', 'food', 'restaurants', 'experiences', 'prep'];
  function showView(v) {
    if (!VIEWS.includes(v)) v = 'itinerary';
    VIEWS.forEach(x => $('#view-' + x).classList.toggle('hidden', x !== v));
    $$('.tab').forEach(tb => tb.classList.toggle('active', tb.dataset.view === v));
    if (v === 'map') renderMap();
    if (v === 'booked') renderBooked();
    if (v === 'luggage') renderLuggage();
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
    renderCountdown(); renderRail(); renderDay(); renderLangWarn();
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
    const pb = $('#printDayBtn'); if (pb) pb.onclick = () => window.print();
    if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
    $('#langWarnX').onclick = () => { localStorage.setItem(LS_LANGWARN, '1'); $('#langWarn').hidden = true; };
    let petalsOn = loadPrefs().petals !== false; buildPetals(petalsOn);
    $('#petalsBtn').onclick = () => { petalsOn = !petalsOn; buildPetals(petalsOn); const p = loadPrefs(); p.petals = petalsOn; localStorage.setItem(LS_PREFS, JSON.stringify(p)); };
  }
  function boot() {
    applyI18n(); initState();
    const prefs = loadPrefs(); curDay = Math.min(prefs.day || 0, state.days.length - 1); if (curDay < 0) curDay = 0;
    bind(); renderCountdown(); renderRail(); renderDay(); renderLangWarn();
    if (prefs.view && prefs.view !== 'itinerary') showView(prefs.view);
  }
  // ================= FEATURES: weather · spots · luggage =================
  const SPOTS = {
    anime: [
      { name: 'Akihabara Electric Town', city: 'Tokyo', ll: [35.6984, 139.7731], he: 'ארקייד, גאצ׳פון, Mandarake ופיגורות', es: 'Arcades, gachapon, Mandarake y figuras' },
      { name: 'Nakano Broadway', city: 'Tokyo', ll: [35.7076, 139.6657], he: 'קומות של אנימה נדירה ואספנות', es: 'Pisos de anime raro y coleccionismo' },
      { name: 'Ghibli Museum (Mitaka)', city: 'Tokyo', ll: [35.6962, 139.5704], he: 'עולם מיאזאקי — כרטיסים ב-10 לחודש הקודם', es: 'El mundo de Miyazaki — entradas el 10 del mes previo' },
      { name: 'Ikebukuro Otome Road', city: 'Tokyo', ll: [35.7295, 139.7169], he: 'מרכז אנימה/מנגה (דוג׳ין, קוספליי)', es: 'Meca anime/manga (doujin, cosplay)' },
      { name: 'Pokémon Center Shibuya', city: 'Tokyo', ll: [35.6580, 139.7016], he: 'חנות הדגל של פוקימון', es: 'Tienda insignia de Pokémon' },
      { name: 'teamLab Planets (Toyosu)', city: 'Tokyo', ll: [35.6497, 139.7906], he: 'אמנות דיגיטלית סוחפת', es: 'Arte digital inmersivo' },
      { name: 'Den Den Town (Nipponbashi)', city: 'Osaka', ll: [34.6592, 135.5060], he: 'האקיהברה של אוסקה — גיימינג ואנימה', es: 'La Akihabara de Osaka — gaming y anime' },
      { name: "Kyoto Int'l Manga Museum", city: 'Kyoto', ll: [35.0116, 135.7590], he: '300,000 כרכי מנגה בבית ספר לשעבר', es: '300.000 tomos de manga en una vieja escuela' },
    ],
    lgbt: [
      { name: 'Shinjuku Ni-chome', city: 'Tokyo', ll: [35.6931, 139.7085], he: 'רובע הלהט״ב הגדול בטוקיו — Arty Farty, Advocates, Gold Finger, Dragon Men, Eagle', es: 'El gran barrio LGBT de Tokio — Arty Farty, Advocates, Gold Finger, Dragon Men, Eagle' },
      { name: 'Doyama-cho', city: 'Osaka', ll: [34.7048, 135.5010], he: 'לב חיי הלילה הגאים באוסקה — FrenZy, Grand Slam', es: 'El corazón gay de Osaka — FrenZy, Grand Slam' },
      { name: 'Kyoto — Kiyamachi scene', city: 'Kyoto', ll: [35.0040, 135.7690], he: 'סצנה קטנה סביב קיאמאצ׳י/פונטוצ׳ו (למשל Apple, Azure)', es: 'Escena chica cerca de Kiyamachi/Pontocho (Apple, Azure)' },
    ],
  };

  // ---- weather / typhoon (Open-Meteo, no key; forecast when ≤15d, else same-date last-year as seasonal proxy) ----
  const WX_CACHE = 'japanTrip.wx.v1';
  const dayCoords = (d) => CITY_GEO[cityLatin(d.city)] || (d.events && d.events[0] ? geoFor(d.events[0], d.city) : null) || null;
  async function fillWeather(d) {
    const el = document.getElementById('dhWeather'); if (!el) return;
    const ll = dayCoords(d); if (!ll) { el.textContent = ''; return; }
    const key = d.date + '@' + ll[0].toFixed(2) + ',' + ll[1].toFixed(2);
    const cache = safeParse(localStorage.getItem(WX_CACHE)) || {};
    const paint = (w) => {
      if (!w) { el.textContent = ''; return; }
      el.className = 'dh-weather wx-' + w.risk;
      el.innerHTML = `${w.icon} ${Math.round(w.tmax)}°/${Math.round(w.tmin)}° · ☔${w.rain}% · 💨${Math.round(w.wind)} <span class="wx-src">${w.typical ? t('wxTypical') : t('wxForecast')}</span>`;
    };
    if (cache[key]) { paint(cache[key]); return; }
    el.className = 'dh-weather'; el.textContent = '· ' + t('wxLoading');
    try {
      const today = new Date(); today.setHours(0, 0, 0, 0);
      const target = new Date(d.date + 'T00:00:00');
      const daysUntil = Math.round((target - today) / 864e5);
      let url, typical = false;
      if (daysUntil >= 0 && daysUntil <= 15) {
        url = `https://api.open-meteo.com/v1/forecast?latitude=${ll[0]}&longitude=${ll[1]}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max&timezone=Asia%2FTokyo&start_date=${d.date}&end_date=${d.date}`;
      } else {
        typical = true;
        const ds = (target.getFullYear() - 1) + '-' + d.date.slice(5);
        url = `https://archive-api.open-meteo.com/v1/archive?latitude=${ll[0]}&longitude=${ll[1]}&start_date=${ds}&end_date=${ds}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max&timezone=Asia%2FTokyo`;
      }
      const j = await (await fetch(url)).json(); const dd = j.daily;
      if (!dd || !dd.temperature_2m_max || dd.temperature_2m_max[0] == null) { el.textContent = ''; return; }
      const tmax = dd.temperature_2m_max[0], tmin = dd.temperature_2m_min[0];
      const rain = typical ? Math.min(100, Math.round((dd.precipitation_sum[0] || 0) * 8)) : (dd.precipitation_probability_max ? dd.precipitation_probability_max[0] : 0);
      const wind = dd.wind_speed_10m_max ? dd.wind_speed_10m_max[0] : 0;
      let risk = 'ok', icon = '☀️';
      if (rain >= 60 || wind >= 45) { risk = 'bad'; icon = '🌧️'; }
      else if (rain >= 35 || wind >= 32) { risk = 'warn'; icon = '🌥️'; }
      else if (rain >= 15) { icon = '⛅'; }
      const w = { tmax, tmin, rain, wind, risk, icon, typical };
      cache[key] = w; localStorage.setItem(WX_CACHE, JSON.stringify(cache)); paint(w);
    } catch (e) { el.textContent = ''; }
  }

  // ---- luggage forwarding chain view ----
  const LUG_NIGHT = new Set([4, 5, 6]); // Hakone, Magome, Nagiso — overnight bag only
  const LUG_SEND = { 3: { he: 'שליחה: המזוודה הראשית → Candeo קיוטו (מגיע עד 25.9)', es: 'Despacho: valija principal → Candeo Kioto (llega para el 25/9)' },
    9: { he: 'שליחה (ערב): המזוודה → Onyado Nono אוסקה (מגיע 28.9 אחה״צ)', es: 'Despacho (noche): valija → Onyado Nono Osaka (llega el 28/9 a la tarde)' } };
  const LUG_PICK = { 7: { he: 'איסוף: המזוודה מחכה ב-Candeo קיוטו', es: 'Retiro: la valija espera en Candeo Kioto' },
    10: { he: 'איסוף: המזוודה מגיעה ל-Onyado Nono', es: 'Retiro: la valija llega a Onyado Nono' } };
  const LUG_CARRY = { 12: { he: 'נושאים בשינקנסן → הזמינו מושב "מטען גדול" מראש', es: 'Se lleva en el shinkansen → reservá el asiento de "equipaje grande"' } };
  const JA_CARDS = [
    { when: '21.9', to: 'Candeo Hotels Kyoto Karasuma Rokkaku', arrive: '9月25日', he: 'שליחה מטוקיו (AMANEK) לקיוטו', es: 'Envío de Tokio (AMANEK) a Kioto' },
    { when: '27.9', to: 'Onyado Nono Namba, Osaka', arrive: '9月28日', he: 'שליחה מקיוטו (Candeo) לאוסקה', es: 'Envío de Kioto (Candeo) a Osaka' },
  ];
  function jaText(c) {
    return '恐れ入りますが、この荷物を宅配便（ヤマト運輸）で下記のホテルへ送っていただけますか。\n宛先ホテル: ' + c.to + '\n到着希望日: ' + c.arrive + '\n宿泊者名: ____________';
  }
  function renderLuggage() {
    const box = $('#luggageBody'); if (!box) return;
    const rows = state.days.map((d, i) => {
      const night = LUG_NIGHT.has(i);
      const bits = [];
      if (LUG_SEND[i]) bits.push(`<span class="lug-badge send">📤 ${escapeHtml(LUG_SEND[i][lang] || LUG_SEND[i].he)}</span>`);
      if (LUG_PICK[i]) bits.push(`<span class="lug-badge pick">📥 ${escapeHtml(LUG_PICK[i][lang] || LUG_PICK[i].he)}</span>`);
      if (LUG_CARRY[i]) bits.push(`<span class="lug-badge carry">🚄 ${escapeHtml(LUG_CARRY[i][lang] || LUG_CARRY[i].he)}</span>`);
      return `<div class="lug-row${night ? ' night' : ''}"><div class="lug-ic">${night ? '🎒' : '🧳'}</div>` +
        `<div class="lug-main"><div class="lug-day">${t('day')} ${i + 1} · ${cityEmoji(d.city)} ${escapeHtml(d.city || '')} · ${fmtDate(d.date)} ${night ? `<span class="lug-tag">${t('lugNight')}</span>` : ''}</div>` +
        (bits.length ? `<div class="lug-badges">${bits.join('')}</div>` : '') + `</div></div>`;
    }).join('');
    const cards = JA_CARDS.map((c, i) => `<div class="lug-card"><div class="lug-card-h">${c.when} · ${escapeHtml(c[lang] || c.he)}</div>` +
      `<pre class="lug-ja" id="ja${i}">${escapeHtml(jaText(c))}</pre>` +
      `<button class="btn btn-sm btn-ghost lug-copy" data-ja="${i}">${t('lugCopy')}</button></div>`).join('');
    box.innerHTML = `<h2 class="section-h">${t('lugTitle')}</h2>` +
      `<div class="lug-intro">${t('lugIntro')}</div>` +
      `<div class="lug-list">${rows}</div>` +
      `<h3 class="lug-card-title">${t('lugCardTitle')}</h3><div class="lug-card-hint">${t('lugCardHint')}</div>` +
      `<div class="lug-cards">${cards}</div>`;
    $$('.lug-copy', box).forEach(b => b.onclick = () => {
      const txt = $('#ja' + b.dataset.ja).textContent;
      navigator.clipboard && navigator.clipboard.writeText(txt);
      b.textContent = t('lugCopied'); setTimeout(() => b.textContent = t('lugCopy'), 1600);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
