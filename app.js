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
      'tab.itinerary': 'היומן', 'tab.overview': 'מבט־על', 'tab.guide': 'מדריך', 'tab.food': 'אוכל', 'tab.restaurants': 'מסעדות', 'tab.prep': 'הכנות', 'tab.places': 'המלצות',
      placesIntro: '📍 741 מקומות מומלצים בטוקיו לפי קטגוריה. סננו לפי סוג או חפשו בשם, ולחצו על נקודה לפרטים וניווט.',
      placesOpen: 'פתח ב-Google Maps', placesSearch: 'חיפוש מקום…', placesShown: 'מציג', placesAll: 'הכול',
      placesNote: 'מבוסס על מפת "פתיתים — מדריך טוקיו" · 741 מקומות מוטמעים מקומית באפליקציה (עובד גם לא-מקוון, פרט לרקע המפה). תמיד אמתו שעות ב-Google Maps.',
      'toolbar.addEvent': '＋ הוסף פעילות ליום הזה', 'toolbar.backup': '⬇️ גיבוי', 'toolbar.restore': '⬆️ שחזור', 'toolbar.petals': '🌸 פרחים', 'toolbar.reset': '↺ אפס תכנון', 'toolbar.printDay': '🖨️ הדפס יום',
      'tab.luggage': 'תיקים', spotsAnime: '🎮 אנימה', spotsLgbt: '🏳️‍🌈 חיי לילה גאים', wxTypical: 'ממוצע עונתי', wxForecast: 'תחזית', wxRain: 'גשם', wxWind: 'רוח', wxTyphoon: '🌀 סוף ספטמבר = שיא עונת הטייפונים — עקבו אחרי התחזית ושקלו ביטוח גמיש.', wxLoading: 'טוען מזג אוויר…', wxNA: 'מזג אוויר לא זמין',
      lugTitle: '🧳 שרשרת התיקים (takkyubin)', lugIntro: 'המזוודה הראשית נשלחת קדימה כדי לטייל קל בהאקונה ובקיסו. הימים ב-🎒 = תיק-לילה בלבד, בלי המזוודה.', lugHave: 'איתכם', lugNight: 'תיק-לילה בלבד', lugSend: 'שליחה', lugPickup: 'איסוף', lugCardTitle: '📇 כרטיס בקשה לדלפק המלון (יפנית)', lugCardHint: 'הראו את זה בקבלה כדי לשלוח מזוודה למלון הבא:', lugCopy: 'העתק', lugCopied: '✓ הועתק',
      'overview.title': '🗾 כל הטיול במבט אחד', 'restaurants.title': '🍣 מקומות מיוחדים לאכול',
      'foot': 'נבנה באהבה עבורכם ❤️ · תכנון גמיש — שנו, הוסיפו וסמנו ✓ · いってらっしゃい',
      'f.start': 'משעה', 'f.end': 'עד שעה', 'f.title': 'כותרת', 'f.type': 'סוג', 'f.area': 'אזור / מיקום', 'f.desc': 'תיאור', 'f.tips': 'טיפ', 'f.cost': 'עלות', 'f.booking': 'הזמנה מראש', 'f.note': 'הערה אישית שלכם', 'f.delete': '🗑️ מחק', 'f.cancel': 'ביטול', 'f.save': 'שמירה',
      langToggle: '🇦🇷 Español', day: 'יום', night: 'לינה', bday: 'יום ההולדת!', tipsLabel: 'טיפים ליום', wisdomLabel: 'חוכמה יפנית להיום', addTitle: 'פעילות חדשה', editTitle: 'עריכת פעילות',
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
      trFrom: 'תחנת מוצא', trTo: 'תחנת הגעה', trDate: 'תאריך', trTime: 'שעה מומלצת', trSystem: 'אתר הזמנה', trTrain: 'רכבת', trCost: 'מחיר לאדם', trCopyHint: '✅ שמות התחנות תואמים בדיוק לאתר ההזמנה — אפשר להקליד/להעתיק כמו שהם.',
      trVerdict: '💰 כרטיס-כרטיס או פס? — כרטיסים בודדים משתלמים בבירור', trVerdictBody: 'סה"כ כל הרכבות ≈ ¥43,700 לאדם (~₪810) · ¥87,300 לזוג (~₪1,620). פס JR ארצי ל-7 ימים עולה ¥50,000 לאדם ומכסה לכל היותר ~¥24,000 מהנסיעות (הנסיעות פרוסות על 15 יום, 18.9→2.10 — חלון של 7 יום לא תופס גם את קיסו וגם את אוסקה→טוקיו), לא מכסה את ה-Romancecar (רכבת פרטית) ולא Nozomi. שום פס אזורי לא מתאים ללולאה הזו. היחיד ששווה: כרטיס ה-N\'EX הלוך-חזור ¥5,000.',
      hSelected: '✓ נבחר', hChoose: 'בחרו מלון זה', hPerNight: 'ללילה', hPerCouple: 'לזוג · חצי פנסיון', hBook: 'להזמנה ↗', hNights: (n) => n === 1 ? 'לילה אחד' : n + ' לילות', hStayHotel: 'המלון שנבחר', hPickHint: 'בחרו מלון בטאב ״מלונות״',
      mapsDay: '🗺️ מסלול היום במפות', mapsOpen: 'פתח במפות ↗',
      'tab.routes': 'מסלולים', routesTitle: '🚶 מסלולי הליכה מפורטים', routesIntro: 'מסלול הליכה לכל אזור — לאן להתחיל, איפה ללכת, מה לראות ולמה זה מיוחד, עם תזמונים. לחצו על יום כדי לפתוח את המסלול שלו.', routeStartLabel: 'התחלה', routeGetThereLabel: 'איך מגיעים', routeEndLabel: 'סיום', routeStopsLabel: 'התחנות', routeSpecialLabel: '✨ דברים מיוחדים ומעניינים', routeTipLabel: 'טיפ', routeOpenMaps: '🗺️ כל המסלול במפות (הליכה)', routeStopMap: 'פתח נקודה במפות', dayRouteLink: '🚶 מסלול הליכה מפורט', routesEmpty: 'עדיין אין מסלול מפורט ליום הזה — בקרוב.', routeCostLabel: '💴 עלויות', routeLuggageLabel: '🧳 מזוודות', routeMealLabel: '🍽️ אוכל מומלץ',
      'tab.costs': 'עלויות', costsTitle: '💴 עלויות הטיול', costsGrandTotal: 'סה״כ מוערך (זוג)', costsPerPerson: 'לאדם', costsPaid: 'שולם / נסגר', costsEst: 'הערכה', costEst: 'הערכה — עוד לא נסגר', costPaid: 'שולם / נסגר', costsBreakdown: 'חלוקה לפי קבוצות', costsCategory: 'קטגוריה', costsTotal: 'סה״כ',
      'tab.experiences': 'חוויות', 'experiences.title': '✨ עוד חוויות מיוחדות',
      'tab.map': 'מפה', 'map.title': '🗺️ מפת כל הימים', 'map.hint': 'כל יום במסלול צבע משלו — לחצו על יום במקרא כדי להציג/להסתיר אותו. לחצו על נקודה לפרטים.', mapAll: 'הצג הכל', mapNone: 'נקה',
      'tab.tickets': 'הכרטיסים שלי', ticketsTitle: '🎫 הכרטיסים שלי', ticketsHint: 'הרכבות והכרטיסים שכבר נסגרו — עם מושב, מס\' הזמנה והנחיית רציף. הדביקו קישור לכרטיס (Google Drive וכו\') — נשמר במכשיר שלכם בלבד, לא נדחף לקוד.',
      ticketsNone: 'עדיין לא נסגרו רכבות. סמנו רכבות כ"נסגר" בטאב "לסגור" והן יופיעו כאן.', ticketsTrains: '🚄 רכבות', ticketsEvents: '🎟️ כרטיסים לאירועים',
      ticketsPlatform: '🚉 רציף', ticketsLinkPh: '🔗 הדביקו קישור לכרטיס (Google Drive)…', ticketsOpenLink: '🎫 פתח כרטיס', ticketsManage: '🔧 ניהול ההזמנה ↗',
      ticketsResNo: 'מס׳ הזמנה', ticketsEmail: '📧 מייל ההזמנה', ticketsVaultHint: '🔐 ה-QR/PDF הרגישים אינם בדף הזה — הם בכספת Google Drive המשותפת רק לך ולעוד אחד. הדביקו בכל כרטיס את הקישור לקובץ שלו ב-Drive; הקישור נשמר במכשיר שלכם בלבד.',
      ptMust: '🖨️ חובה לאסוף כרטיס נייר', ptQr: '📱 QR — הצג בטלפון (או הדפס)', ptDigital: '✅ דיגיטלי — אין צורך להדפיס',
      plfShinkansen: 'שער/רציפי שינקנסן נפרדים (שילוט 新幹線 כתום). הרציף המדויק מוצג על לוח התחנה ביום הנסיעה. עמדו ליד סימון הקרון הצבוע על הרצפה.',
      plfLtdexp: 'רציף רכבות רגיל (לא שינקנסן). בדקו את מספר הרציף על לוח היציאות לפי שם הרכבת והשעה. בנגויה — המעבר מרציפי השינקנסן לרציפי ה-Ltd.Exp לוקח כמה דקות.',
      plfRomance: 'הרומאנסקאר יוצא מרציפי אודקיו (Odakyu) בשינג\'וקו — צד מערב, לא רציפי JR. עקבו אחרי שילוט Odakyu / ロマンスカー.',
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
      'tab.itinerary': 'Itinerario', 'tab.overview': 'Vista general', 'tab.guide': 'Guía', 'tab.food': 'Comida', 'tab.restaurants': 'Restaurantes', 'tab.prep': 'Preparativos', 'tab.places': 'Recomendados',
      placesIntro: '📍 741 lugares recomendados en Tokio por categoría. Filtrá por tipo o buscá por nombre, y tocá un punto para ver detalles y navegación.',
      placesOpen: 'Abrir en Google Maps', placesSearch: 'Buscar lugar…', placesShown: 'Mostrando', placesAll: 'Todo',
      placesNote: 'Basado en el mapa "Ptitim — guía de Tokio" · 741 lugares integrados localmente en la app (funciona sin conexión, salvo el fondo del mapa). Verificá siempre los horarios en Google Maps.',
      'toolbar.addEvent': '＋ Agregar actividad a este día', 'toolbar.backup': '⬇️ Respaldo', 'toolbar.restore': '⬆️ Restaurar', 'toolbar.petals': '🌸 Pétalos', 'toolbar.reset': '↺ Reiniciar plan', 'toolbar.printDay': '🖨️ Imprimir día',
      'tab.luggage': 'Equipaje', spotsAnime: '🎮 Anime', spotsLgbt: '🏳️‍🌈 Vida gay', wxTypical: 'promedio de estación', wxForecast: 'pronóstico', wxRain: 'lluvia', wxWind: 'viento', wxTyphoon: '🌀 Fin de septiembre = pico de temporada de tifones — seguí el pronóstico y considerá un seguro flexible.', wxLoading: 'cargando clima…', wxNA: 'clima no disponible',
      lugTitle: '🧳 Cadena de equipaje (takkyubin)', lugIntro: 'La valija principal se despacha por adelantado para viajar liviano por Hakone y Kiso. Los días con 🎒 = solo bolso de una noche, sin la valija.', lugHave: 'con ustedes', lugNight: 'solo bolso de una noche', lugSend: 'despacho', lugPickup: 'retiro', lugCardTitle: '📇 Tarjeta para la recepción del hotel (japonés)', lugCardHint: 'Mostrá esto en recepción para enviar la valija al próximo hotel:', lugCopy: 'Copiar', lugCopied: '✓ Copiado',
      'overview.title': '🗾 Todo el viaje de un vistazo', 'restaurants.title': '🍣 Lugares especiales para comer',
      'foot': 'Hecho con amor para ustedes ❤️ · plan flexible — cambiá, agregá y marcá ✓ · いってらっしゃい',
      'f.start': 'Desde', 'f.end': 'Hasta', 'f.title': 'Título', 'f.type': 'Tipo', 'f.area': 'Zona / lugar', 'f.desc': 'Descripción', 'f.tips': 'Tip', 'f.cost': 'Costo', 'f.booking': 'Reserva previa', 'f.note': 'Nota personal', 'f.delete': '🗑️ Borrar', 'f.cancel': 'Cancelar', 'f.save': 'Guardar',
      langToggle: '🇮🇱 עברית', day: 'Día', night: 'Alojamiento', bday: '¡el cumpleaños!', tipsLabel: 'Tips del día', wisdomLabel: 'Sabiduría japonesa para hoy', addTitle: 'Nueva actividad', editTitle: 'Editar actividad',
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
      trFrom: 'Estación de salida', trTo: 'Estación de llegada', trDate: 'Fecha', trTime: 'Hora sugerida', trSystem: 'Sitio de reserva', trTrain: 'Tren', trCost: 'Precio por persona', trCopyHint: '✅ Los nombres de las estaciones coinciden con el sitio de reserva — podés escribirlos/copiarlos tal cual.',
      trVerdict: '💰 ¿Boleto por boleto o pase? — conviene comprar boletos sueltos', trVerdictBody: 'Total de todos los trenes ≈ ¥43.700 por persona (~₪810) · ¥87.300 por pareja (~₪1.620). El JR Pass nacional de 7 días cuesta ¥50.000 por persona y cubre como mucho ~¥24.000 de los viajes (están repartidos en 15 días, 18/9→2/10 — una ventana de 7 días no agarra Kiso y Osaka→Tokio a la vez), no cubre el Romancecar (tren privado) ni el Nozomi. Ningún pase regional sirve para este circuito. El único que vale la pena: el boleto N\'EX ida y vuelta de ¥5.000.',
      hSelected: '✓ Elegido', hChoose: 'Elegir este hotel', hPerNight: 'por noche', hPerCouple: 'por pareja · media pensión', hBook: 'Reservar ↗', hNights: (n) => n === 1 ? '1 noche' : n + ' noches', hStayHotel: 'Hotel elegido', hPickHint: 'Elegí un hotel en la pestaña "Hoteles"',
      mapsDay: '🗺️ Recorrido del día en Maps', mapsOpen: 'Abrir en Maps ↗',
      'tab.routes': 'Recorridos', routesTitle: '🚶 Recorridos a pie detallados', routesIntro: 'Un recorrido a pie por cada zona — dónde empezar, por dónde ir, qué ver y por qué es especial, con horarios. Tocá un día para abrir su recorrido.', routeStartLabel: 'Inicio', routeGetThereLabel: 'Cómo llegar', routeEndLabel: 'Fin', routeStopsLabel: 'Las paradas', routeSpecialLabel: '✨ Cosas especiales e interesantes', routeTipLabel: 'Tip', routeOpenMaps: '🗺️ Todo el recorrido en Maps (a pie)', routeStopMap: 'Abrir punto en Maps', dayRouteLink: '🚶 Recorrido a pie detallado', routesEmpty: 'Todavía no hay recorrido detallado para este día — pronto.', routeCostLabel: '💴 Costos', routeLuggageLabel: '🧳 Equipaje', routeMealLabel: '🍽️ Comida recomendada',
      'tab.costs': 'Costos', costsTitle: '💴 Costos del viaje', costsGrandTotal: 'Total estimado (pareja)', costsPerPerson: 'Por persona', costsPaid: 'Pagado / reservado', costsEst: 'Estimado', costEst: 'Estimado — todavía sin reservar', costPaid: 'Pagado / reservado', costsBreakdown: 'Desglose por grupo', costsCategory: 'Categoría', costsTotal: 'Total',
      'tab.experiences': 'Experiencias', 'experiences.title': '✨ Más experiencias especiales',
      'tab.map': 'Mapa', 'map.title': '🗺️ Mapa de todos los días', 'map.hint': 'Cada día tiene su propio color — tocá un día en la leyenda para mostrarlo/ocultarlo. Tocá un punto para ver detalles.', mapAll: 'Mostrar todo', mapNone: 'Limpiar',
      'tab.tickets': 'Mis boletos', ticketsTitle: '🎫 Mis boletos', ticketsHint: 'Los trenes y boletos ya reservados — con asiento, N.º de reserva e indicación de andén. Pegá el enlace al boleto (Google Drive, etc.) — se guarda solo en tu dispositivo, no en el código.',
      ticketsNone: 'Todavía no reservaste trenes. Marcá trenes como "Reservado" en la pestaña "Por reservar" y aparecerán acá.', ticketsTrains: '🚄 Trenes', ticketsEvents: '🎟️ Entradas a eventos',
      ticketsPlatform: '🚉 Andén', ticketsLinkPh: '🔗 Pegá el enlace al boleto (Google Drive)…', ticketsOpenLink: '🎫 Abrir boleto', ticketsManage: '🔧 Gestionar reserva ↗',
      ticketsResNo: 'N.º de reserva', ticketsEmail: '📧 Email de la reserva', ticketsVaultHint: '🔐 Los QR/PDF sensibles no están en esta página — están en una bóveda de Google Drive compartida solo con vos y una persona más. Pegá en cada boleto el enlace a su archivo en Drive; el enlace se guarda solo en tu dispositivo.',
      ptMust: '🖨️ Retirar boleto en papel', ptQr: '📱 QR — mostralo en el cel (o imprimí)', ptDigital: '✅ Digital — no imprimir',
      plfShinkansen: 'Los andenes del Shinkansen tienen acceso propio (cartel 新幹線 naranja). El andén exacto aparece en el tablero el día del viaje. Ubicate junto a la marca del vagón pintada en el piso.',
      plfLtdexp: 'Andén de tren común (no Shinkansen). Fijate el número de andén en el tablero de salidas según el nombre del tren y la hora. En Nagoya el trasbordo del Shinkansen a los andenes del Ltd.Exp lleva unos minutos.',
      plfRomance: 'El Romancecar sale de los andenes de Odakyu en Shinjuku — lado oeste, no los de JR. Seguí el cartel Odakyu / ロマンスカー.',
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
  // חוכמה יפנית להיום — מושג רוחני/פילוסופי אחד לכל יום, תואם לרוח היום (מפתח לפי תאריך)
  const WISDOM = {
    '2026-09-18': { c: '初心 · Shoshin — תודעת המתחיל',
      he: 'ברגע הראשון ביפן, לפני שההרגל והידע מכסים הכול, החושים פתוחים לרווחה. שוֹשִׁין הוא לשמר את המבט הזה גם אחרי שנעשים מומחים: להיכנס לכל סמטה, טעם וריח כאילו זו הפעם הראשונה. הלילה — פשוט תנו לעצמכם להתפעל.',
      es: 'En el primer instante en Japón, antes de que el hábito y el saber lo cubran todo, los sentidos están abiertos de par en par. Shoshin es conservar esa mirada aun cuando ya sepamos: entrar a cada callejón, sabor y aroma como si fuera la primera vez. Esta noche, simplemente déjense asombrar.' },
    '2026-09-19': { c: '浮世 · Ukiyo — העולם הצף',
      he: 'במקור מונח בודהיסטי לעולם החולף, שבאדו הפך לחגיגה: אם ממילא הכול בן-חלוף, נצוף עליו בהנאה. מהשוק של הבוקר ועד הניאון של הלילה — היום הזה הוא ציור אוקיו-אה חי. אל תיאחזו; זרמו עם הזרם המנצנץ.',
      es: 'Al principio un término budista sobre lo efímero, que en Edo se volvió celebración: si todo es pasajero, flotemos sobre ello con placer. Del mercado de la mañana al neón de la noche, este día es un ukiyo-e vivo. No se aferren; déjense llevar por la corriente que brilla.' },
    '2026-09-20': { c: 'こだわり · Kodawari — מסירות לפרט',
      he: 'אותה אש שמובילה שף סושי ללטש חתך אחד במשך עשור, מובילה גם את פסל הפיגורות, את מאייר האנימה ואת האספן. היום, בין הקומות של נאקאנו ואקיהברה, תראו קודאווארי בכל מדף: לא "אובססיה", אלא אהבה שאין בה קיצורי דרך.',
      es: 'El mismo fuego que lleva a un maestro de sushi a perfeccionar un corte durante una década guía también al escultor de figuras, al dibujante de anime y al coleccionista. Hoy, entre los pisos de Nakano y Akihabara, verán kodawari en cada estante: no "obsesión", sino un amor sin atajos.' },
    '2026-09-21': { c: '守破離 · Shu-ha-ri — שלוש מדרגות הלמידה',
      he: 'שוּ (לשמור) — חַקו את המורה בדבקות; הָא (לשבור) — פִרצו את הכללים ברגע שהבנתם אותם; רִי (לעזוב) — צרו חופשי, כי הצורה כבר בתוככם. בסדנה היום תהיו ב"שוּ": ידיים שלומדות צורה. כך מתחיל כל אמן.',
      es: 'Shu (guardar) — imitá al maestro con fidelidad; Ha (romper) — quebrá las reglas una vez que las entendiste; Ri (soltar) — creá libremente, porque la forma ya vive en vos. Hoy, en el taller, estarán en "Shu": manos que aprenden una forma. Así empieza todo artista.' },
    '2026-09-22': { c: '和み · Nagomi — רוגע והרמוניה',
      he: 'הרוגע שבו הגוף והרוח חוזרים לאיזון — לא ריקנות אלא חמימות: מים חמים, יוקאטה, ארוחת קייסקי לאט לאט. האקונה כולה מזמינה נאגומי, הרשות להאט עד שהכתפיים יורדות. היום המשימה היחידה היא לא למהר.',
      es: 'La calma en que cuerpo y espíritu vuelven al equilibrio — no vacío, sino calidez: agua caliente, yukata, un kaiseki sin apuro. Todo Hakone invita al nagomi, el permiso de ir despacio hasta que los hombros bajan. Hoy la única tarea es no apurarse.' },
    '2026-09-23': { c: '物の哀れ · Mono no aware — יופיו של החולף',
      he: 'הרגישות הענוגה לכך שהכול חולף, ודווקא בכך יופיו. הסתיו הראשון על דרך הנאקאסֶנדו ויום הולדת 40 — שניהם מסמנים זמן שזורם. מונו נו אַוַארֶה אינו עצב אלא הודיה: שהרגע הזה, בגיל הזה, עם האדם הזה, קיים עכשיו — ולכן יקר מפז.',
      es: 'La tierna sensibilidad ante lo que pasa, y que precisamente en eso reside su belleza. El primer otoño sobre el Nakasendo y los 40 años marcan, ambos, un tiempo que fluye. Mono no aware no es tristeza sino gratitud: que este instante, a esta edad, con esta persona, exista ahora — y por eso valga más que el oro.' },
    '2026-09-24': { c: '道 · Dō — הדרך',
      he: 'ביפן כל אמנות היא "דרך" (סָדוֹ – דרך התה, קֶנדוֹ – דרך החרב), משום שהמסע עצמו הוא התרגול, לא רק היעד. היום אתם הולכים בדרך ממש — הנאקאסֶנדו העתיקה. אל תמדדו רק כמה נשאר; כל צעד על אבני המדרכה הוא כבר ההגעה.',
      es: 'En Japón cada arte es un "camino" (Sadō, la vía del té; Kendō, la vía de la espada), porque el trayecto mismo es la práctica, no solo el destino. Hoy caminan un camino de verdad — el antiguo Nakasendo. No midan solo cuánto falta; cada paso sobre los adoquines ya es la llegada.' },
    '2026-09-25': { c: '幽玄 · Yūgen — יופי מרומז',
      he: 'יופי עמוק שנרמז ואינו נחשף. לא הפריחה המלאה אלא הניצן; לא הגיישה במלואה אלא הבזק הקימונו בקצה הסמטה. גיון בין-הערביים היא יוגן טהורה: פנסים, צללים, רמזים. הלכו לאט הערב — היופי כאן מתגלה רק למי שמאט.',
      es: 'Belleza profunda, insinuada más que revelada. No la flor abierta sino el capullo; no la geisha entera sino el destello de un kimono al fondo del callejón. Gion al anochecer es yūgen puro: faroles, sombras, indicios. Caminen despacio esta noche — aquí la belleza solo se muestra a quien aminora.' },
    '2026-09-26': { c: '森林浴 · Shinrin-yoku — רחצה ביער',
      he: 'לספוג את היער דרך כל החושים — לא כספורט אלא כריפוי. בין אלפי הטוריי של פושימי ובחורשת הבמבוק של ארשיאמה, עצרו לנשום. היפנים יודעים שהיער מרפא את מה שהעיר מותחת. תנו לירוק להיכנס פנימה.',
      es: 'Absorber el bosque por todos los sentidos — no como deporte sino como cura. Entre los miles de torii de Fushimi y el bosque de bambú de Arashiyama, deténganse a respirar. Los japoneses saben que el bosque sana lo que la ciudad tensa. Dejen que el verde entre.' },
    '2026-09-27': { c: '一期一会 · Ichigo ichie — פעם אחת, מפגש אחד',
      he: 'עיקרון מטקס התה: המפגש הזה — האנשים, האור, טעם המאצ׳ה — לא יחזור לעולם בדיוק כך, ולכן ראוי לכל הלב. בטקס התה ובערב המאיקו היום, היו נוכחים לגמרי. אין "עוד פעם"; יש רק הפעם הזאת.',
      es: 'Un principio de la ceremonia del té: este encuentro — las personas, la luz, el sabor del matcha — no volverá jamás exactamente así, y por eso merece todo el corazón. En la ceremonia del té y en la velada con la maiko de hoy, estén del todo presentes. No hay "otra vez"; solo esta vez.' },
    '2026-09-28': { c: '無心 · Mushin — לב ריק',
      he: 'לפעול מתוך שקט פנימי, בלי פטפוט המחשבות ובלי אגו. זהו סודו של מתאבק הסומו — רגע לפני ההתנגשות המוח דומם והגוף יודע. אוסקה תציף אתכם בניאון, ריחות וקולות; מוּשִׁין הוא להיות כולכם בתוך הרגע, בלי לנתח אותו.',
      es: 'Actuar desde una quietud interior, sin la cháchara del pensamiento ni el ego. Es el secreto del luchador en el dohyō de sumo — un instante antes del choque, la mente calla y el cuerpo sabe. Osaka los inundará de neón, aromas y ruido; mushin es estar enteros dentro del momento, sin analizarlo.' },
    '2026-09-29': { c: '共生 · Kyōsei — לחיות יחד',
      he: 'בנארה, הצבאים הקדושים משתחווים ומהלכים בין בני האדם כאילו הגבול נמחק; בטודאיג׳י, הבודהה הענק מזכיר שכל היצורים ארוגים ברשת אחת. קְיוֹסֵיי הוא לזכור שאיננו מעל הטבע ולא מחוץ לזולת — אלא חלק מרקמה אחת חיה. גם הלילה, היו מי שאתם, בלב פתוח.',
      es: 'En Nara los ciervos sagrados se inclinan y caminan entre las personas como si el límite se borrara; en Todai-ji, el Gran Buda recuerda que todos los seres están tejidos en una misma red. Kyōsei es recordar que no estamos por encima de la naturaleza ni fuera del otro — sino parte de un mismo tejido vivo. Esta noche también, sean quienes son, con el corazón abierto.' },
    '2026-09-30': { c: '脱俗 · Datsuzoku — פריצה מן השגרה',
      he: 'החופש וההפתעה שמשחררים מן המוסכמות. יאנאקה עוצרת את הזמן, ו-teamLab ממיס את הגבול בין הצופה ליצירה עד שלא ברור איפה אתם נגמרים והאור מתחיל. דָאטְסוּזוֹקוּ הוא הרגע שבו העולם הרגיל נופל ונשארת רק פליאה. הרשו לעצמכם ללכת לאיבוד בתוכו.',
      es: 'La libertad y la sorpresa que liberan de lo convencional. Yanaka detiene el tiempo, y teamLab disuelve el límite entre quien mira y la obra hasta que ya no se sabe dónde terminan ustedes y empieza la luz. Datsuzoku es el instante en que el mundo ordinario cae y solo queda el asombro. Permítanse perderse dentro.' },
    '2026-10-01': { c: '懐かしい · Natsukashii — געגוע חם',
      he: 'הגעגוע החמים שבו זיכרון עולה ומחמם, בלי עצב. מוזיאון ג׳יבלי מעיר את הילד שבכם, וגם המסע כולו כבר מתחיל להפוך לזיכרון שתתגעגעו אליו. נָאטְסוּקָאשִׁי מלמד שאהבה לרגע אינה חייבת לחכות שיחלוף. הערב, בארוחת הפרידה, החזיקו את היום הזה בחום.',
      es: 'La nostalgia cálida en que un recuerdo aflora y reconforta, sin tristeza. El Museo Ghibli despierta al niño que llevan dentro, y el viaje entero ya empieza a volverse un recuerdo que van a extrañar. Natsukashii enseña que el amor por un momento no tiene que esperar a que pase. Esta noche, en la cena de despedida, abracen este día con calidez.' },
    '2026-10-02': { c: '余韻 · Yoin — התהודה שנשארת',
      he: 'ההד שנשאר אחרי שהצליל כבר נדם: תהודת הפעמון, האור שאחרי השקיעה. הטיסה ממריאה, אבל יפן לא נגמרת בשער העלייה — היא ממשיכה להדהד בכם, בטעמים, בשקט, בדרך שבה תסתכלו על העולם. קחו את היוֹאִין הביתה. זה לא סוף — זה מה שממשיך לצלצל.',
      es: 'El eco que queda cuando el sonido ya calló: la resonancia de la campana, la luz después del ocaso. El avión despega, pero Japón no termina en la puerta de embarque — sigue resonando en ustedes, en los sabores, en el silencio, en cómo mirarán el mundo. Llévense el yoin a casa. No es el final — es lo que sigue sonando.' },
  };

  function renderDay() {
    const d = state.days[curDay]; if (!d) return;
    const hotelName = d.hotel || '';
    const hotelUrl = hotelName ? placeUrl(hotelName + ' ' + cityLatin(d.city)) : null;
    const routeUrl = dayRouteUrl(d);
    const dayRoutes = routesFor(d.date);
    const routeBtns = dayRoutes.map(r => `<button class="btn btn-ghost btn-sm dh-route-btn" data-route="${escapeAttr(r.id)}">${r.emoji || '🚶'} ${t('dayRouteLink')}: ${escapeHtml(r.area || '')}</button>`).join('');
    $('#dayHead').innerHTML =
      `<div><div class="dh-city">${cityEmoji(d.city)} ${escapeHtml(d.city || '')} · ${dowT(d.dow)} ${fmtDate(d.date)}${d.birthday ? ' · 🎂 ' + t('bday') : ''}<span class="dh-weather" id="dhWeather" title="${escapeAttr(t('wxTyphoon'))}"></span></div>` +
      `<div class="dh-title">${escapeHtml(d.title || '')}</div>` +
      (d.summary ? `<div class="dh-sum">${escapeHtml(d.summary)}</div>` : '') +
      (hotelName ? `<div class="dh-hotel">🛏️ ${t('night')}: <b dir="auto">${escapeHtml(hotelName)}</b>${hotelUrl ? ` <a class="dh-maplink" href="${hotelUrl}" target="_blank" rel="noopener">🗺️</a>` : ''}</div>` : '') +
      (d.logistics ? `<div class="dh-logistics" dir="auto">📦 ${escapeHtml(d.logistics[lang] || d.logistics.he)}</div>` : '') +
      (d.cultural ? `<div class="dh-culture" dir="auto"><span class="dh-culture-ic">🏮</span><span>${escapeHtml(d.cultural)}</span></div>` : '') +
      (d.tips && d.tips.length ? `<div class="dh-tips"><div class="dh-tips-h">💡 ${t('tipsLabel')}</div><ul class="dh-tips-list">${d.tips.map(x => `<li dir="auto">${escapeHtml(x)}</li>`).join('')}</ul></div>` : '') +
      ((routeUrl || routeBtns) ? `<div class="dh-actions">${routeBtns}${routeUrl ? `<a class="btn btn-ghost btn-sm" href="${routeUrl}" target="_blank" rel="noopener">${t('mapsDay')}</a>` : ''}</div>` : '') +
      `</div>`;
    $$('#dayHead .dh-route-btn').forEach(b => b.onclick = () => openRoute(b.dataset.route));
    fillWeather(d);
    const tl = $('#timeline'); tl.innerHTML = '<div class="tl-line"></div>';
    const evs = sortEvents(d.events || []);
    if (!evs.length) { const e = document.createElement('div'); e.style.cssText = 'padding:20px 0 6px;color:var(--cream-faint);padding-inline-start:88px'; e.textContent = t('empty'); tl.appendChild(e); }
    evs.forEach(e => tl.appendChild(eventEl(e)));
    const wz = WISDOM[d.date];
    if (wz) {
      const el = document.createElement('div'); el.className = 'wz';
      el.innerHTML = `<div class="wz-h">🎐 ${t('wisdomLabel')}</div>` +
        `<div class="wz-concept" dir="auto">${escapeHtml(wz.c)}</div>` +
        `<div class="wz-text" dir="auto">${escapeHtml(wz[lang] || wz.he)}</div>`;
      tl.appendChild(el);
    }
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

  // ---------- detailed walking routes ----------
  const routesData = () => (data().routes || []);
  const routesFor = (date) => routesData().filter(r => r.date === date || (Array.isArray(r.days) && r.days.includes(date)));
  const stopMapUrl = (m) => m ? (/^-?\d/.test(m.trim()) ? placeUrl(m.trim()) : placeUrl(m + ', Japan')) : null;
  function routeMapUrl(r) {
    const pts = (r.stops || []).map(s => (s.map || '').trim()).filter(Boolean);
    if (!pts.length) return null;
    if (pts.length === 1) return stopMapUrl(pts[0]);
    const stops = pts.slice(0, 10), origin = stops.shift(), destination = stops.pop();
    let u = 'https://www.google.com/maps/dir/?api=1&travelmode=walking&origin=' + encodeURIComponent(origin) + '&destination=' + encodeURIComponent(destination);
    const wp = stops.slice(0, 8).map(encodeURIComponent).join('%7C'); if (wp) u += '&waypoints=' + wp;
    return u;
  }
  function routeCard(r, di) {
    const det = document.createElement('details'); det.className = 'route'; det.id = 'route-' + r.id;
    const meta = r.meta || {};
    const chips = [];
    if (meta.duration) chips.push(`<span class="chip dur">⏱ ${escapeHtml(meta.duration)}</span>`);
    if (meta.distance) chips.push(`<span class="chip">📏 ${escapeHtml(meta.distance)}</span>`);
    const mapUrl = routeMapUrl(r);
    const stops = (r.stops || []).map((s, i) => {
      const mu = stopMapUrl(s.map);
      return `<div class="rstop">` +
        `<div class="rstop-n">${i + 1}</div>` +
        `<div class="rstop-body">` +
        `<div class="rstop-h">${s.time ? `<span class="rstop-time">${escapeHtml(s.time)}</span>` : ''}<span class="rstop-name" dir="auto">${escapeHtml(s.name || '')}</span>${mu ? ` <a class="rstop-map" href="${mu}" target="_blank" rel="noopener" title="${escapeAttr(t('routeStopMap'))}">🗺️</a>` : ''}</div>` +
        (s.walk ? `<div class="rstop-walk" dir="auto">🚶 ${escapeHtml(s.walk)}</div>` : '') +
        (s.see ? `<div class="rstop-see" dir="auto">${escapeHtml(s.see)}</div>` : '') +
        (s.why ? `<div class="rstop-why" dir="auto"><b>${escapeHtml(t('routeWhyLabel'))}:</b> ${escapeHtml(s.why)}</div>` : '') +
        (s.tip ? `<div class="rstop-tip" dir="auto">💡 ${escapeHtml(t('routeTipLabel'))}: ${escapeHtml(s.tip)}</div>` : '') +
        `</div></div>`;
    }).join('');
    const special = (r.special && r.special.length) ? `<div class="rspecial"><div class="rspecial-h">${escapeHtml(t('routeSpecialLabel'))}</div><ul>${r.special.map(x => `<li dir="auto">${escapeHtml(x)}</li>`).join('')}</ul></div>` : '';
    const firstMap = stopMapUrl(((r.stops || [])[0] || {}).map);
    const lastMap = stopMapUrl(((r.stops || [])[(r.stops || []).length - 1] || {}).map);
    const mapPin = (u) => u ? ` <a class="rstop-map" href="${u}" target="_blank" rel="noopener" title="${escapeAttr(t('routeStopMap'))}">🗺️</a>` : '';
    const metaRows = [
      meta.start ? `<div class="rmeta-row"><span class="rmeta-k">${escapeHtml(t('routeStartLabel'))}</span><span dir="auto">${escapeHtml(meta.start)}${mapPin(firstMap)}</span></div>` : '',
      meta.getThere ? `<div class="rmeta-row"><span class="rmeta-k">${escapeHtml(t('routeGetThereLabel'))}</span><span dir="auto">${escapeHtml(meta.getThere)}</span></div>` : '',
      meta.end ? `<div class="rmeta-row"><span class="rmeta-k">${escapeHtml(t('routeEndLabel'))}</span><span dir="auto">${escapeHtml(meta.end)}${mapPin(lastMap)}</span></div>` : '',
      meta.cost ? `<div class="rmeta-row"><span class="rmeta-k">${escapeHtml(t('routeCostLabel'))}</span><span dir="auto">${escapeHtml(meta.cost)}</span></div>` : '',
      meta.luggage ? `<div class="rmeta-row"><span class="rmeta-k">${escapeHtml(t('routeLuggageLabel'))}</span><span dir="auto">${escapeHtml(meta.luggage)}</span></div>` : '',
      meta.meal ? `<div class="rmeta-row"><span class="rmeta-k">${escapeHtml(t('routeMealLabel'))}</span><span dir="auto">${escapeHtml(meta.meal)}</span></div>` : ''
    ].join('');
    det.innerHTML =
      `<summary><span class="route-ic">${r.emoji || '🚶'}</span>` +
      `<span class="route-sum"><span class="route-title" dir="auto">${escapeHtml(r.title || r.area || '')}</span>` +
      (r.subtitle ? `<span class="route-subtitle" dir="auto">${escapeHtml(r.subtitle)}</span>` : '') +
      (chips.length ? `<span class="route-chips">${chips.join('')}</span>` : '') +
      `</span></summary>` +
      `<div class="route-body">` +
      (r.intro ? `<p class="route-intro" dir="auto">${escapeHtml(r.intro)}</p>` : '') +
      (metaRows ? `<div class="rmeta">${metaRows}</div>` : '') +
      (mapUrl ? `<div class="route-actions"><a class="btn btn-ghost btn-sm" href="${mapUrl}" target="_blank" rel="noopener">${t('routeOpenMaps')}</a></div>` : '') +
      (stops ? `<div class="rstops-h">${escapeHtml(t('routeStopsLabel'))}</div><div class="rstops">${stops}</div>` : '') +
      special +
      `</div>`;
    return det;
  }
  function renderRoutes() {
    const box = $('#routesBody'); if (!box) return;
    box.innerHTML = `<h2 class="section-h">${escapeHtml(t('routesTitle'))}</h2><div class="routes-intro" dir="auto">${escapeHtml(t('routesIntro'))}</div>`;
    const all = routesData();
    if (!all.length) { box.innerHTML += `<div class="panel" dir="auto">${escapeHtml(t('routesEmpty'))}</div>`; return; }
    // group by day, in itinerary order; a route with extra days shows once under its primary date
    state.days.forEach((d, di) => {
      const rs = all.filter(r => r.date === d.date);
      if (!rs.length) return;
      const grp = document.createElement('div'); grp.className = 'routes-day';
      grp.innerHTML = `<div class="routes-day-h">${cityEmoji(d.city)} ${t('day')} ${di + 1} · ${dowT(d.dow)} ${fmtDate(d.date)} · <span dir="auto">${escapeHtml(d.city || '')}</span></div>`;
      rs.forEach(r => grp.appendChild(routeCard(r, di)));
      box.appendChild(grp);
    });
  }
  function openRoute(id) {
    showView('routes');
    setTimeout(() => {
      const el = document.getElementById('route-' + id); if (!el) return;
      $$('#routesBody details.route').forEach(x => { if (x !== el) x.open = false; });
      el.open = true;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  }

  // ---------- trip costs ----------
  const costsData = () => (window.TRIP_DATA && window.TRIP_DATA.costs) || null;
  function renderCosts() {
    const box = $('#costsBody'); if (!box) return;
    const c = costsData();
    if (!c) { box.innerHTML = `<div class="panel">${t('loading')}</div>`; return; }
    const R = c.rates;
    const yn = (n) => '¥' + Math.round(n).toLocaleString('en-US');
    const usd = (n) => '$' + Math.round(n / R.jpyPerUsd).toLocaleString('en-US');
    const ils = (n) => '₪' + Math.round(n / R.jpyPerIls).toLocaleString('en-US');
    const rng = (lo, hi, f) => lo === hi ? f(lo) : f(lo) + '–' + f(hi);
    const badge = (s) => s === 'est' ? '🔓' : '✅';
    let gLow = 0, gHigh = 0;
    const subs = [], groupHtml = [];
    (c.groups || []).forEach(g => {
      let sLow = 0, sHigh = 0;
      const rows = (g.items || []).map(it => {
        sLow += it.low; sHigh += it.high;
        return `<div class="cost-row"><span class="cost-st" title="${it.st === 'est' ? escapeAttr(t('costEst')) : escapeAttr(t('costPaid'))}">${badge(it.st)}</span>` +
          `<span class="cost-l" dir="auto">${escapeHtml(it.l[lang] || it.l.he)}</span>` +
          `<span class="cost-y" dir="auto">${rng(it.low, it.high, yn)}</span></div>`;
      }).join('');
      gLow += sLow; gHigh += sHigh;
      subs.push({ icon: g.icon, title: g.title[lang] || g.title.he, low: sLow, high: sHigh });
      groupHtml.push(`<div class="panel cost-group"><div class="cost-gh"><span>${g.icon} ${escapeHtml(g.title[lang] || g.title.he)}</span>` +
        `<span class="cost-sub" dir="auto">${rng(sLow, sHigh, yn)}</span></div>${rows}</div>`);
    });
    // summary breakdown table — per group in ¥ / $ / ₪
    const tRows = subs.map(s => `<tr><td class="ct-cat" dir="auto">${s.icon} ${escapeHtml(s.title)}</td>` +
      `<td dir="auto">${rng(s.low, s.high, yn)}</td><td dir="auto">${rng(s.low, s.high, usd)}</td><td dir="auto">${rng(s.low, s.high, ils)}</td></tr>`).join('');
    const table = `<div class="panel cost-summary"><div class="cost-gh"><span>📊 ${escapeHtml(t('costsBreakdown'))}</span></div>` +
      `<div class="cost-table-wrap"><table class="cost-table"><thead><tr><th>${escapeHtml(t('costsCategory'))}</th><th>¥</th><th>$</th><th>₪</th></tr></thead><tbody>${tRows}` +
      `<tr class="ct-total"><td dir="auto">${escapeHtml(t('costsTotal'))}</td><td dir="auto">${rng(gLow, gHigh, yn)}</td><td dir="auto">${rng(gLow, gHigh, usd)}</td><td dir="auto">${rng(gLow, gHigh, ils)}</td></tr></tbody></table></div></div>`;
    let html = `<h2 class="section-h">${escapeHtml(t('costsTitle'))}</h2>` +
      `<div class="costs-note" dir="auto">${escapeHtml((c.note[lang] || c.note.he))}</div>` +
      table + groupHtml.join('');
    html += `<div class="panel cost-total"><div class="cost-total-h">${escapeHtml(t('costsGrandTotal'))}</div>` +
      `<div class="cost-total-y" dir="auto">${rng(gLow, gHigh, yn)}</div>` +
      `<div class="cost-total-conv" dir="auto">${rng(gLow, gHigh, usd)} &nbsp;·&nbsp; ${rng(gLow, gHigh, ils)}</div>` +
      `<div class="cost-total-pp" dir="auto">${escapeHtml(t('costsPerPerson'))}: ${rng(gLow / 2, gHigh / 2, yn)} · ${rng(gLow / 2, gHigh / 2, usd)} · ${rng(gLow / 2, gHigh / 2, ils)}</div>` +
      `<div class="cost-total-fx" dir="auto">${escapeHtml(R.asOf[lang] || R.asOf.he)}</div></div>`;
    box.innerHTML = html;
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
  // ---------- places (741 curated Tokyo recommendations — imported locally, native map) ----------
  const PLACES_OPEN = 'https://www.google.com/maps/d/viewer?mid=1I0o12hoecmBorcEsinQqw4nhTDG7adU';
  const PLACES_COLORS = ['#607d8b', '#e53935', '#fb8c00', '#8e24aa', '#6d4c41', '#00897b', '#d81b60', '#43a047', '#f9a825', '#3949ab'];
  let _placesInit = false, _placesMap = null;
  function renderPlaces() {
    const box = $('#placesBody'); if (!box) return;
    const P = window.TRIP_PLACES;
    if (!P || !P.pts) { box.innerHTML = `<div class="agent-note" dir="auto">${t('placesNote')}</div>`; return; }
    if (_placesInit) { setTimeout(() => _placesMap && _placesMap.invalidateSize(), 60); return; }
    _placesInit = true;
    box.innerHTML =
      `<div class="pl-intro" dir="auto">${t('placesIntro')}</div>` +
      `<div class="pl-controls"><input id="plSearch" class="pl-search" type="search" placeholder="${escapeAttr(t('placesSearch'))}">` +
      `<span class="pl-shown">${t('placesShown')} <b id="plShown">${P.pts.length}</b>/${P.pts.length}</span></div>` +
      `<div class="pl-cats" id="plCats"></div>` +
      `<div id="placesMap" class="pl-map"></div>` +
      `<div class="agent-note" dir="auto">ℹ️ ${t('placesNote')} · <a href="${PLACES_OPEN}" target="_blank" rel="noopener">${t('placesOpen')} ↗</a></div>`;
    const active = new Set(P.cats.map((_, i) => i));
    $('#plCats').innerHTML = P.cats.map((c, i) =>
      `<button class="pl-cat" data-i="${i}" style="--cc:${PLACES_COLORS[i]}"><span class="pl-dot"></span>${escapeHtml(c)} <span class="pl-cnt">${P.pts.filter(p => p.c === i).length}</span></button>`).join('');
    const map = L.map('placesMap', { scrollWheelZoom: true }).setView([35.68, 139.76], 11);
    _placesMap = map;
    L.tileLayer('https://mt1.google.com/vt/lyrs=m&hl=' + (lang === 'he' ? 'iw' : 'en') + '&x={x}&y={y}&z={z}',
      { maxZoom: 19, subdomains: ['mt0', 'mt1', 'mt2', 'mt3'], attribution: '© Google' }).addTo(map);
    const layer = L.layerGroup().addTo(map);
    const markers = P.pts.map(p => {
      const m = L.circleMarker([p.lat, p.lng], { radius: 5, color: '#fff', weight: 1, fillColor: PLACES_COLORS[p.c] || '#e53935', fillOpacity: .92 });
      m._p = p;
      m.bindPopup(`<b dir="auto">${escapeHtml(p.n)}</b><br><span style="color:${PLACES_COLORS[p.c]};font-weight:600">${escapeHtml(P.cats[p.c])}</span>` +
        (p.d ? `<br><span dir="auto">${escapeHtml(p.d)}</span>` : '') +
        `<br><a href="https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}" target="_blank" rel="noopener">🗺️ ${t('mapsOpen')}</a>`);
      return m;
    });
    const apply = () => {
      const q = ($('#plSearch').value || '').trim().toLowerCase();
      layer.clearLayers(); let shown = 0;
      markers.forEach(m => { const p = m._p;
        if (active.has(p.c) && (!q || p.n.toLowerCase().includes(q) || (p.d && p.d.toLowerCase().includes(q)))) { layer.addLayer(m); shown++; } });
      $('#plShown').textContent = shown;
    };
    $('#plCats').querySelectorAll('.pl-cat').forEach(btn => btn.onclick = () => {
      const i = +btn.dataset.i;
      if (active.has(i)) { active.delete(i); btn.classList.add('off'); } else { active.add(i); btn.classList.remove('off'); }
      apply();
    });
    $('#plSearch').addEventListener('input', apply);
    apply();
    setTimeout(() => map.invalidateSize(), 60);
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
      'צומת שיבויה · שוק צוקיג\'י · מוזיאון ג\'יבלי · יאנקה · נקאנו · מונג\'ה · חוויית קימונו',
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
      'Cruce de Shibuya · mercado Tsukiji · Museo Ghibli · Yanaka · Nakano · Monja · experiencia de kimono',
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
    { id: 't-nex-in', date: '2026-09-18', salesOpen: '2026-08-18', done: true, from: 'Narita Airport Terminal 1', to: 'Shinjuku', url: 'https://www.eki-net.com/en/jr-east-train-reservation/top',
      system: 'JR-EAST Train Reservation (Ekinet)', train: "✓ Narita Express 52 (N'EX)", depTime: '✓ נסגר · 20:44 → 22:09',
      print: 'must', resNo: 'E42575', emailQuery: 'from:reservation@eki-net.com 09/18',
      cost: { he: '¥6,660 · מושב שמור · 2 מבוגרים · לכיוון', es: '¥6.660 · asiento reservado · 2 adultos · un trayecto' },
      title: { he: "N'EX: נריטה → שינג'וקו", es: "N'EX: Narita → Shinjuku" },
      note: { he: "✓ נסגר · 18.9 · N'EX 52 · נריטה T1 20:44 → שינג'וקו 22:09 · קרון 7, מושבים 4C+4D · 2 מבוגרים · הזמנה E42575 · ¥6,660. ⚠️ חובה לאסוף כרטיס נייר במכונה (QR/קוד-איסוף) לפני העלייה — הקוד בכספת ה-Drive.", es: "✓ Reservado · 18/9 · N'EX 52 · Narita T1 20:44 → Shinjuku 22:09 · vagón 7, asientos 4C+4D · 2 adultos · reserva E42575 · ¥6.660. ⚠️ Hay que retirar el boleto de papel en la máquina (QR/código) antes de subir — el código está en la bóveda de Drive." } },
    { id: 't-romancecar', date: '2026-09-22', salesOpen: '2026-08-22', done: true, from: 'Shinjuku', to: 'Hakone-Yumoto', url: 'https://www.web-odakyu.com/e-romancecar/?language=en',
      system: 'e-Romancecar (Odakyu / EMot)', train: '✓ SuperHakone 5 (EXE10)', depTime: '✓ נסגר · 9:00 → 10:15',
      print: 'digital', resNo: '00018', emailQuery: 'e-Romancecar purchase completion',
      cost: { he: '¥2,300 · דיגיטלי · 2 מבוגרים', es: '¥2.300 · digital · 2 adultos' },
      title: { he: "Romancecar: שינג'וקו → Hakone-Yumoto", es: "Romancecar: Shinjuku → Hakone-Yumoto" },
      note: { he: "✓ נסגר · 22.9 · SuperHakone 5 (EXE10) · שינג'וקו 9:00 → Hakone-Yumoto 10:15 · קרון 06, מושבים 6C+6D · Standard · אישור 00018 · ¥2,300. דיגיטלי — לא צריך להדפיס, אבל צריך כרטיס בסיס/Suica בנוסף.", es: "✓ Reservado · 22/9 · SuperHakone 5 (EXE10) · Shinjuku 9:00 → Hakone-Yumoto 10:15 · vagón 06, asientos 6C+6D · Standard · confirmación 00018 · ¥2.300. Digital — no hay que imprimir, pero se necesita boleto base/Suica aparte." } },
    { id: 't-tokaido-kiso', date: '2026-09-23', salesOpen: '2026-08-23', done: true, from: 'Odawara', to: 'Nagoya', url: 'https://smart-ex.jp/en/',
      system: 'SmartEX (Tokaido Shinkansen)', train: '✓ HIKARI 637 · N700 (16 קרונות)', depTime: '✓ נסגר · 10:11 → 11:19',
      print: 'qr', resNo: '2000', emailQuery: 'from:yoyaku@expy.jp Reservation Confirmation',
      cost: { he: '¥18,600 · מושב שמור (Ordinary) · 2 מבוגרים', es: '¥18.600 · asiento reservado (Ordinary) · 2 adultos' },
      title: { he: "שינקנסן: Odawara → Nagoya", es: "Shinkansen: Odawara → Nagoya" },
      note: { he: "✓ נסגר (smartEX) · 23.9 · HIKARI 637 · אודוארה 10:11 → נגויה 11:19 · קרון 14, מושבים 14D+14E · 2 מבוגרים · הזמנה 2000 · ¥18,600. מעבר בנגויה ל-SHINANO 11 (יוצא 12:00) — 41 דק' באפר, נוח.", es: "✓ Reservado (smartEX) · 23/9 · HIKARI 637 · Odawara 10:11 → Nagoya 11:19 · vagón 14, asientos 14D+14E · 2 adultos · reserva 2000 · ¥18.600. Trasbordo en Nagoya al SHINANO 11 (sale 12:00) — 41 min de margen, cómodo." } },
    { id: 't-shinano-in', date: '2026-09-23', salesOpen: '2026-08-23', done: true, from: 'Nagoya', to: 'Nakatsugawa', url: 'https://japantravel.navitime.com/en/booking/jr/mypage/login/',
      system: 'Japan Bullet Train (Navitime)', train: '✓ SHINANO 11 (Ltd.Exp.)', depTime: '✓ נסגר · 12:00 → 12:48',
      print: 'must', resNo: 'SH000002016751', emailQuery: 'Japan Bullet Train SH000002016751',
      cost: { he: '¥12,585 · מושב שמור · 2 מבוגרים', es: '¥12.585 · asiento reservado · 2 adultos' },
      title: { he: "Ltd.Exp. Shinano: Nagoya → Nakatsugawa", es: "Ltd.Exp. Shinano: Nagoya → Nakatsugawa" },
      note: { he: "✓ נסגר · 23.9 · SHINANO 11 · נגויה 12:00 → נקאטסוגאווה 12:48 · מושב שמור · 2 מבוגרים · ¥12,585. ⚠️ חובה לאסוף נייר במכונה עם QR — והמושב עדיין לא סופי, ה-QR מגיע במייל נפרד. מעבר מה-HIKARI 637 (מגיע 11:19) — 41 דק' באפר, ואז אוטובוס Kita-Ena למאגומה (~30 דק').", es: "✓ Reservado · 23/9 · SHINANO 11 · Nagoya 12:00 → Nakatsugawa 12:48 · asiento reservado · 2 adultos · ¥12.585. ⚠️ Hay que retirar el papel en la máquina con QR — y el asiento aún no es final, el QR llega en un email aparte. Trasbordo desde el HIKARI 637 (llega 11:19) — 41 min de margen, después bus Kita-Ena a Magome (~30 min)." } },
    { id: 't-shinano-out', date: '2026-09-25', salesOpen: '2026-08-25', done: true, from: 'Nagiso', to: 'Nagoya', url: 'https://www.jr-odekake.net/goyoyaku/',
      system: 'JR-WEST Online (e5489)', train: '✓ SHINANO 2 (Ltd.Exp.)', depTime: '✓ נסגר · 08:09 → 09:18',
      print: 'must', resNo: '46424', emailQuery: 'from:westjr@jr-odekake.net Reservation Complete',
      cost: { he: '¥19,020 לזוג (כולל Nozomi 61 עד קיוטו) · מושב שמור · 2 מבוגרים', es: '¥19.020 la pareja (incluye Nozomi 61 hasta Kioto) · asiento reservado · 2 adultos' },
      title: { he: "Ltd.Exp. Shinano 2: Nagiso → Nagoya", es: "Ltd.Exp. Shinano 2: Nagiso → Nagoya" },
      note: { he: "✓ נסגר (JR-WEST Online) · 25.9 · SHINANO 2 · נאגיסו 08:09 → נגויה 09:18 · קרון 4, מושבים 2C+2D · 2 מבוגרים · הזמנה 46424 · Receipt AEE0512M · כרטיס רציף אחד עד קיוטו (¥19,020 לזוג). ⚠️ אי אפשר לאסוף את הכרטיס בתחנת נאגיסו! אספו את הנייר מראש בקופת תחנה (למשל בנגויה ב-23.9) — צריך את כרטיס האשראי וקוד 4 ספרות. מעבר בנגויה 23 דקות ל-Nozomi 61.", es: "✓ Reservado (JR-WEST Online) · 25/9 · SHINANO 2 · Nagiso 08:09 → Nagoya 09:18 · vagón 4, asientos 2C+2D · 2 adultos · reserva 46424 · Receipt AEE0512M · un boleto continuo hasta Kioto (¥19.020 la pareja). ⚠️ El boleto NO se puede retirar en la estación Nagiso. Retirá el papel antes en una boletería (ej. Nagoya el 23/9) — se necesita la tarjeta y el código de 4 dígitos. Trasbordo en Nagoya 23 min al Nozomi 61." } },
    { id: 't-tokaido-kyoto', date: '2026-09-25', salesOpen: '2026-08-25', done: true, from: 'Nagoya', to: 'Kyoto', url: 'https://www.jr-odekake.net/goyoyaku/',
      system: 'JR-WEST Online (e5489)', train: '✓ NOZOMI 61 (Tokaido Shinkansen)', depTime: '✓ נסגר · 09:41 → 10:15',
      print: 'must', resNo: '46424', emailQuery: 'from:westjr@jr-odekake.net Reservation Complete',
      cost: { he: 'כלול ב-¥19,020 של Nagiso→Kyoto · מושב שמור · 2 מבוגרים', es: 'incluido en los ¥19.020 de Nagiso→Kioto · asiento reservado · 2 adultos' },
      title: { he: "שינקנסן Nozomi 61: Nagoya → Kyoto", es: "Shinkansen Nozomi 61: Nagoya → Kioto" },
      note: { he: "✓ נסגר (JR-WEST Online) · 25.9 · NOZOMI 61 · נגויה 09:41 → קיוטו 10:15 · קרון 14, מושבים 19D+19E · 2 מבוגרים · אותה הזמנה 46424 (כרטיס רציף מנאגיסו). מגיעים לקיוטו 10:15 — יום מלא בעיר. ⚠️ פלטפורמות השינקנסן רחוקות מ-Shinano — 23 דקות מעבר מספיקות. אי אפשר לאסוף בנאגיסו — אספו נייר מראש.", es: "✓ Reservado (JR-WEST Online) · 25/9 · NOZOMI 61 · Nagoya 09:41 → Kioto 10:15 · vagón 14, asientos 19D+19E · 2 adultos · misma reserva 46424 (boleto continuo desde Nagiso). Llegan a Kioto 10:15 — día completo en la ciudad. ⚠️ Los andenes del Shinkansen están lejos del Shinano — 23 min de trasbordo alcanzan. No se puede retirar en Nagiso — retirá el papel antes." } },
    { id: 't-osaka-tokyo', date: '2026-09-30', salesOpen: '2026-08-30', done: true, from: 'Shin-Osaka', to: 'Tokyo', url: 'https://smart-ex.jp/en/',
      system: 'SmartEX (Tokaido Shinkansen)', train: '✓ NOZOMI 358 · N700 (16 קרונות)', depTime: '✓ נסגר · 10:39 → 13:06',
      print: 'qr', resNo: '2002', emailQuery: 'from:yoyaku@expy.jp Reservation Confirmation',
      cost: { he: '¥33,120 · מושב שמור (Hayatoku-3) · 2 מבוגרים', es: '¥33.120 · asiento reservado (Hayatoku-3) · 2 adultos' },
      title: { he: "שינקנסן: Shin-Osaka → Tokyo", es: "Shinkansen: Shin-Osaka → Tokio" },
      note: { he: "✓ נסגר (smartEX) · 30.9 · NOZOMI 358 · שין-אוסקה 10:39 → טוקיו 13:06 · קרון 9, מושבים 1C+1D · Seat with Oversized Baggage Area (מקום למזוודה גדולה מובטח) · תעריף Hayatoku-3 · 2 מבוגרים · הזמנה 2002 · ¥33,120. עלייה: סריקת QR-Ticket, איסוף כרטיס במכונה, או שיוך כרטיס IC למושבים (\"Designate IC Card\") ואז פשוט מקרבים את הסויקה בשער. ⚠️ 1C ו-1D הם שני מושבי מעבר משני צידי המעבר (הטור 3+2) — לא צמודים זה לזה. 🗻 פוג'י בכיוון אוסקה→טוקיו נראה בצד שמאל (טור A/B/C, כלומר צד 1C) אחרי Shin-Fuji, בערך 11:45.", es: "✓ Reservado (smartEX) · 30/9 · NOZOMI 358 · Shin-Osaka 10:39 → Tokio 13:06 · vagón 9, asientos 1C+1D · Seat with Oversized Baggage Area (espacio garantizado para valija grande) · tarifa Hayatoku-3 · 2 adultos · reserva 2002 · ¥33.120. Para subir: escanear el QR-Ticket, retirar el boleto en la máquina, o asociar la tarjeta IC a los asientos (\"Designate IC Card\") y pasar la Suica por el molinete. ⚠️ 1C y 1D son dos asientos de pasillo a cada lado del corredor (fila 3+2) — no están juntos. 🗻 El Fuji en sentido Osaka→Tokio se ve del lado izquierdo (fila A/B/C, o sea el lado del 1C) después de Shin-Fuji, cerca de las 11:45." } },
    { id: 't-nex-out', date: '2026-10-02', salesOpen: '2026-09-02', from: 'Shinjuku', to: 'Narita Airport Terminal 1', url: 'https://www.eki-net.com/en/jr-east-train-reservation/top',
      system: 'JR-EAST Train Reservation (Ekinet)', train: "Narita Express (N'EX)", depTime: '≈07:30–08:00 → הגעה ~09:00 (טיסה 12:00)',
      cost: { he: '~¥3,330 מושב שמור · לכיוון (הכניסה נסגרה בנפרד ¥6,660)', es: '~¥3.330 asiento reservado · un trayecto (la ida se reservó aparte ¥6.660)' },
      title: { he: "N'EX: שינג'וקו → נריטה", es: "N'EX: Shinjuku → Narita" },
      note: { he: "⚠️ עדיין לא נסגר — הכניסה (18.9) נסגרה ככיוון-אחד ¥6,660, לא הלוך-חזור. יש לשריין את החזרה בנפרד ב-Ekinet. לצאת מוקדם — 3 שעות לפני הטיסה (12:00).", es: "⚠️ Todavía sin reservar — la ida (18/9) se compró como un solo trayecto ¥6.660, no ida y vuelta. Hay que reservar la vuelta aparte en Ekinet. Salí temprano — 3 horas antes del vuelo (12:00)." } },
  ];
  // כרטיסים לאירועים לסגור
  const EVENTS = [
    { id: 'e-sumo', date: '2026-09-28', done: true, url: 'https://www.google.com/search?q=The+Sumo+Hall+Hirakuza+Osaka',
      title: { he: "🥋 מופע סומו — Sumo Hall Hirakuza (Osaka)", es: "🥋 Show de sumo — Sumo Hall Hirakuza (Osaka)" },
      note: { he: "✓ נסגר · 28.9 בשעה 17:00 · מושב סטנדרט + בנטו + משקה · 2 מבוגרים · הזמנה PFB554612.", es: "✓ Reservado · 28/9 a las 17:00 · asiento estándar + bento + bebida · 2 adultos · reserva PFB554612." } },
    { id: 'e-shinsekai', date: '2026-09-29', done: true, url: 'https://www.klook.com/en-US/activity/89990-osaka-city-backstreets-shinsekai-half-day-walking-tour-10-dishes-5-hidden-eateries/',
      title: { he: "🍢 סיור אוכל לילי בשינסקאי (Osaka)", es: "🍢 Tour gastronómico nocturno Shinsekai (Osaka)" },
      note: { he: "✓ נסגר (Klook) · 29.9 בשעה 17:30 · 2 אנשים · ~3 שעות · 5 מסעדות נסתרות/~10 מנות. מפגש: תחנת Dobutsuen-mae · סיום בדוטונבורי. זו ארוחת הערב.", es: "✓ Reservado (Klook) · 29/9 a las 17:30 · 2 personas · ~3 h · 5 comedores/~10 platos. Encuentro: estación Dobutsuen-mae · termina en Dotonbori. Es la cena." } },
    { id: 'e-juugo', date: '2026-09-27', done: true, url: 'https://www.google.com/maps/search/Juu-go+soba+Jodoji+Sakyo-ku+Kyoto',
      title: { he: "🍜 מסעדת סובה — Juu-go (十五) · Kyoto", es: "🍜 Restaurante de soba — Juu-go (十五) · Kioto" },
      note: { he: "✓ נסגר (TableCheck) · 27.9 בשעה 16:00 · 2 אנשים · קורס סובה · ¥7,000 שולם מראש (¥3,500 ×2). כתובת: Kamiminamida-cho, Jodoji, Sakyo-ku, Kyoto 606-8405 · טל' 075-708-5367.", es: "✓ Reservado (TableCheck) · 27/9 a las 16:00 · 2 personas · menú de soba · ¥7.000 prepago (¥3.500 ×2). Dirección: Kamiminamida-cho, Jodoji, Sakyo-ku, Kioto 606-8405 · tel. 075-708-5367." } },
    { id: 'e-ghibli', date: '2026-10-01', salesOpen: '2026-09-10', salesTime: true, url: 'https://l-tike.com/ghibli/',
      title: { he: "🎬 מוזיאון ג'יבלי (Mitaka)", es: "🎬 Museo Ghibli (Mitaka)" },
      note: { he: "ה-10 לחודש הקודם בדיוק, ב-10:00 שעון יפן, ב-Lawson — נחטף בדקות.", es: "El día 10 del mes anterior exacto, 10:00 hora Japón, en Lawson — se agota en minutos." } },
    { id: 'e-teamlab', date: '2026-09-30', done: true, url: 'https://www.teamlab.art/e/planets/',
      title: { he: "🌀 teamLab Planets (Toyosu)", es: "🌀 teamLab Planets (Toyosu)" },
      note: { he: "✓ נסגר · 30.9 · Entrance Pass · כניסה 18:30–19:00 (שעון יפן) · 2 מבוגרים.", es: "✓ Reservado · 30/9 · Entrance Pass · entrada 18:30–19:00 (hora Japón) · 2 adultos." } },
    { id: 'e-maiko', date: '2026-09-27', salesOpen: null, url: 'https://www.thehatanaka.co.jp/en/maiko/',
      title: { he: "🎎 ערב מאיקו / גייקו (Kyoto)", es: "🎎 Velada maiko / geiko (Kioto)" },
      note: { he: "בערב (מ-~18:30) — אחרי הסובה ב-Juu-go. להזמין 2–3 חודשים מראש — אין walk-in.", es: "A la noche (desde ~18:30) — después de la soba en Juu-go. Reservá 2–3 meses antes — no hay walk-in." } },
    { id: 'e-teakimono', date: '2026-09-27', salesOpen: null, url: 'https://mai-ko.com/',
      title: { he: "🍵 טקס תה + קימונו (Kyoto)", es: "🍵 Ceremonia de té + kimono (Kioto)" },
      note: { he: "⚠️ קבעו מוקדם (~13:30–15:30) — לפני הסובה ב-Juu-go ב-16:00. סדנת זוגות — להזמין מראש.", es: "⚠️ Reservá temprano (~13:30–15:30) — antes de la soba en Juu-go a las 16:00. Taller para parejas — reservá con anticipación." } },
    { id: 'e-workshop', date: '2026-09-21', done: true, url: 'https://www.google.com/maps/search/Baba+Ramen+Cooking+School+Minami-Aoyama+Tokyo',
      title: { he: "🍜 סדנת ראמן — Baba Ramen Cooking School (Tokyo)", es: "🍜 Taller de ramen — Baba Ramen Cooking School (Tokio)" },
      note: { he: "✓ נסגר · 21.9 בשעה 09:00 (4 שעות) · 2 משתתפים · ¥46,000 (שולם) · הזמנה 14166 · Baba Ramen Cooking School, Minami-Aoyama 3-2-7, Minato. הראמן שתכינו הוא ארוחת הצהריים; הגיעו ~08:45.", es: "✓ Reservado · 21/9 a las 09:00 (4 horas) · 2 participantes · ¥46.000 (pagado) · reserva 14166 · Baba Ramen Cooking School, Minami-Aoyama 3-2-7, Minato. El ramen que hagan es el almuerzo; lleguen ~08:45." } },
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
      const sheet = item.from ? (
        `<div class="tr-sheet" dir="ltr">` +
        `<div class="tr-row"><span class="tr-lbl">${t('trFrom')}</span><b class="tr-stn">${escapeHtml(item.from)}</b></div>` +
        `<div class="tr-row"><span class="tr-lbl">${t('trTo')}</span><b class="tr-stn">${escapeHtml(item.to)}</b></div>` +
        `<div class="tr-row"><span class="tr-lbl">${t('trDate')}</span><b>${fmtDate(item.date)}</b></div>` +
        (item.depTime ? `<div class="tr-row"><span class="tr-lbl">${t('trTime')}</span><b dir="auto">${escapeHtml(item.depTime)}</b></div>` : '') +
        (item.train ? `<div class="tr-row"><span class="tr-lbl">${t('trTrain')}</span><b>${escapeHtml(item.train)}</b></div>` : '') +
        (item.system ? `<div class="tr-row"><span class="tr-lbl">${t('trSystem')}</span><b>${escapeHtml(item.system)}</b></div>` : '') +
        (item.cost ? `<div class="tr-row"><span class="tr-lbl">${t('trCost')}</span><b dir="auto">${escapeHtml(item.cost[lang] || item.cost.he)}</b></div>` : '') +
        `<div class="tr-copyhint" dir="auto">${t('trCopyHint')}</div>` +
        `</div>`) : '';
      const urgent = (item.urgent && !done) ? `<div class="bi-urgent" dir="auto">${escapeHtml(item.urgent[lang] || item.urgent.he)}</div>` : '';
      const card = document.createElement('div'); card.className = 'panel bkitem' + (done ? ' bkdone' : '') + ((item.urgent && !done) ? ' bkurgent' : '');
      card.innerHTML =
        `<label class="bk-check bi-check"><input type="checkbox" ${done ? 'checked' : ''}></label>` +
        `<div class="bi-main"><div class="bi-title" dir="auto">${escapeHtml(item.title[lang] || item.title.he)}` +
        (item.date ? ` <span class="bi-date">${fmtDate(item.date)}</span>` : '') +
        (item.from ? ` <span class="bi-pax">👥 ${t('bookedPax')}</span>` : '') + `</div>` +
        urgent +
        sheet +
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
      if (key === 'bookedTrains') {
        const vv = document.createElement('div'); vv.className = 'tr-verdict';
        vv.innerHTML = `<div class="tr-verdict-h" dir="auto">${t('trVerdict')}</div><div class="tr-verdict-b" dir="auto">${t('trVerdictBody')}</div>`;
        box.appendChild(vv);
      }
      items.forEach(i => box.appendChild(itemCard(i)));
    });
    updateBookedProg();
  }

  // ---------- my tickets ----------
  function renderTickets() {
    const box = $('#ticketsBody'); box.innerHTML = '';
    const intro = document.createElement('div'); intro.className = 'panel';
    intro.innerHTML = `<h2>${t('ticketsTitle')}</h2><div class="booked-hint">${t('ticketsHint')}</div><div class="tk-vault" dir="auto">${t('ticketsVaultHint')}</div>`;
    box.appendChild(intro);
    const isDone = (item) => { const lb = loadBooked()[item.id] || {}; return lb.done !== undefined ? lb.done : !!item.done; };
    const PRINT_TAG = { must: { txt: t('ptMust'), cls: 'pt-must' }, qr: { txt: t('ptQr'), cls: 'pt-qr' }, digital: { txt: t('ptDigital'), cls: 'pt-digital' } };
    const gmailLink = (q) => 'https://mail.google.com/mail/u/0/#search/' + encodeURIComponent(q);
    const platformHint = (item) => {
      const s = (item.system || '') + (item.train || '');
      if (/Shinkansen|SmartEX/i.test(s)) return t('plfShinkansen');
      if (/Romancecar/i.test(s)) return t('plfRomance');
      return t('plfLtdexp');
    };
    const cleanTime = (s) => s.replace(/^✓\s*(נסגר|Reservado)\s*·\s*/, '');
    const ticketCard = (item) => {
      const lb = loadBooked()[item.id] || {};
      const url = lb.ticketUrl || '';
      const route = (item.from && item.to) ? `${escapeHtml(item.from)} → ${escapeHtml(item.to)}` : '';
      const card = document.createElement('div'); card.className = 'panel bkitem tkitem';
      card.innerHTML =
        `<div class="bi-main">` +
        `<div class="bi-title" dir="auto">${escapeHtml(item.title[lang] || item.title.he)}` +
        (item.date ? ` <span class="bi-date">${fmtDate(item.date)}</span>` : '') + `</div>` +
        (route ? `<div class="tk-route" dir="ltr">🚆 ${route}${item.depTime ? ' · ' + escapeHtml(cleanTime(item.depTime)) : ''}</div>` : '') +
        (item.print && PRINT_TAG[item.print] ? `<div class="tk-print ${PRINT_TAG[item.print].cls}" dir="auto">${PRINT_TAG[item.print].txt}</div>` : '') +
        (item.note ? `<div class="bi-note" dir="auto">${escapeHtml(item.note[lang] || item.note.he)}</div>` : '') +
        (item.resNo ? `<div class="tk-resno" dir="auto">${t('ticketsResNo')}: <b dir="ltr">${escapeHtml(item.resNo)}</b></div>` : '') +
        (item.from ? `<div class="bi-note tk-plf" dir="auto">${t('ticketsPlatform')}: ${platformHint(item)}</div>` : '') +
        `<input class="bi-note-in tk-link-in" type="url" inputmode="url" placeholder="${escapeAttr(t('ticketsLinkPh'))}" value="${escapeAttr(url)}">` +
        `<div class="bi-meta tk-actions">` +
        (url ? `<a class="bi-link tk-open" href="${escapeAttr(url)}" target="_blank" rel="noopener">${t('ticketsOpenLink')} ↗</a>` : '') +
        (item.emailQuery ? `<a class="bi-link ghost" href="${escapeAttr(gmailLink(item.emailQuery))}" target="_blank" rel="noopener">${t('ticketsEmail')} ↗</a>` : '') +
        (item.url ? `<a class="bi-link ghost" href="${item.url}" target="_blank" rel="noopener">${t('ticketsManage')}</a>` : '') +
        `</div></div>`;
      const inp = card.querySelector('.tk-link-in');
      const meta = card.querySelector('.tk-actions');
      inp.addEventListener('input', (e) => {
        const v = e.target.value.trim();
        const b = loadBooked(); b[item.id] = Object.assign({}, b[item.id], { ticketUrl: v }); saveBooked(b);
        let open = card.querySelector('.tk-open');
        if (v) {
          if (!open) { open = document.createElement('a'); open.className = 'bi-link tk-open'; open.target = '_blank'; open.rel = 'noopener'; open.textContent = t('ticketsOpenLink') + ' ↗'; meta.insertBefore(open, meta.firstChild); }
          open.href = v;
        } else if (open) { open.remove(); }
      });
      return card;
    };
    let any = false;
    [['ticketsTrains', TRAINS], ['ticketsEvents', EVENTS]].forEach(([key, items]) => {
      const done = items.filter(isDone);
      if (!done.length) return;
      any = true;
      const h = document.createElement('div'); h.className = 'bk-section';
      h.innerHTML = `<h3 class="bk-sec-title">${t(key)} <span class="bk-sec-count">${done.length}</span></h3>`;
      box.appendChild(h);
      done.forEach(i => box.appendChild(ticketCard(i)));
    });
    if (!any) { const p = document.createElement('div'); p.className = 'panel'; p.innerHTML = `<div class="booked-hint">${t('ticketsNone')}</div>`; box.appendChild(p); }
  }

  // ---------- prep ----------
  const DEFAULT_CHECK = {
    he: {
      'הזמנות דחופות (עכשיו!)': [
        '✓ כל 7 המלונות + מופע הסומו (Osaka Hirakuza, 28.9) — נסגרו',
        'Romancecar שינג׳וקו→האקונה (22.9) — Silver Week, לשריין',
        'מוזיאון ג׳יבלי — 10.9 בשעה 10:00 (שעון יפן) ב-Lawson',
        "✓ מושבי שינקנסן נסגרו — כולל NOZOMI 358 שין-אוסקה→טוקיו (30.9, ¥33,120). נשאר רק N'EX חזרה לנריטה (2.10)",
        'חוויית מאיקו, סדנת תה+קימונו, סדנת סושי',
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
        "✓ Asientos de shinkansen reservados — incluido el NOZOMI 358 Shin-Osaka→Tokio (30/9, ¥33.120). Falta solo el N'EX de vuelta a Narita (2/10)",
        'experiencia maiko, taller de té+kimono, clase de sushi',
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
  const VIEWS = ['itinerary', 'routes', 'overview', 'costs', 'map', 'booked', 'tickets', 'luggage', 'guide', 'places', 'food', 'restaurants', 'experiences', 'prep'];
  function showView(v) {
    if (!VIEWS.includes(v)) v = 'itinerary';
    VIEWS.forEach(x => $('#view-' + x).classList.toggle('hidden', x !== v));
    $$('.tab').forEach(tb => tb.classList.toggle('active', tb.dataset.view === v));
    if (v === 'routes') renderRoutes();
    if (v === 'costs') renderCosts();
    if (v === 'map') renderMap();
    if (v === 'booked') renderBooked();
    if (v === 'tickets') renderTickets();
    if (v === 'luggage') renderLuggage();
    if (v === 'overview') renderOverview();
    if (v === 'guide') renderGuide();
    if (v === 'places') renderPlaces();
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
