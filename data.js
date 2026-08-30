/* data.js — Option A · booked hotels + luggage logistics per day. bilingual he/es. */
window.TRIP_DATA = {
 "v": "bi-optA-19",
 "flights": {
  "airline": "LOT Polish Airlines",
  "passenger": "Ezequiel",
  "baggage": "1 checked bag each, per segment",
  "outbound": [
   {
    "flight": "LO156",
    "from": "Tel Aviv · TLV (T3)",
    "to": "Warsaw · WAW",
    "dep": "2026-09-17 10:45",
    "arr": "2026-09-17 13:45",
    "seat": "",
    "note": "operated by Electra Airways · 4h00"
   },
   {
    "flight": "LO79",
    "from": "Warsaw · WAW",
    "to": "Tokyo · NRT Narita (T1)",
    "dep": "2026-09-17 22:50",
    "arr": "2026-09-18 18:25",
    "seat": "08H",
    "note": "12h35 · 1 bag"
   }
  ],
  "ret": [
   {
    "flight": "LO1080",
    "from": "Tokyo · NRT Narita (T1)",
    "to": "Warsaw · WAW",
    "dep": "2026-10-02 12:00",
    "arr": "2026-10-02 19:15",
    "seat": "11H",
    "note": "14h15 · 1 bag"
   },
   {
    "flight": "LO151",
    "from": "Warsaw · WAW",
    "to": "Tel Aviv · TLV (T3)",
    "dep": "2026-10-02 23:00",
    "arr": "2026-10-03 03:50",
    "seat": "",
    "note": "3h50"
   }
  ]
 },
 "stays": [
  {
   "id": "tokyo-shinjuku",
   "cover": "🗼",
   "cityHe": "טוקיו — שינג'וקו",
   "cityEs": "Tokio — Shinjuku",
   "area": "Shinjuku / Ni-chome",
   "datesLabel": "18–21 ספטמבר / 18–21 sept",
   "nights": 4,
   "priceUnit": "night",
   "dates": [
    "2026-09-18",
    "2026-09-19",
    "2026-09-20",
    "2026-09-21"
   ],
   "note": {
    "he": "4 לילות בלב שינג'וקו, צעד אחד מ-Ni-chome — מרכז הקהילה הגאה של טוקיו. בסיס מושלם לאנימה, גיימינג ואוכל.",
    "es": "4 noches en el corazón de Shinjuku, a pasos de Ni-chome — el epicentro gay de Tokio. Base perfecta para anime, gaming y gastronomía."
   },
   "options": [
    {
     "name": "The Millennials Shinjuku",
     "price": "¥12,000–18,000",
     "url": "https://www.google.com/search?q=The+Millennials+Shinjuku+hotel+booking",
     "tags": [
      "mid",
      "central",
      "gayfriendly"
     ],
     "he": {
      "area": "שינג'וקו מרכז, 8 דקות הליכה מ-Ni-chome",
      "why": "עיצוב קפסולה חכם עם כורסאות חשמליות — חוויה יפנית מודרנית במחיר נגיש."
     },
     "es": {
      "area": "Centro de Shinjuku, 8 min caminando de Ni-chome",
      "why": "Diseño cápsula inteligente con sillones eléctricos — experiencia japonesa moderna a precio accesible."
     }
    },
    {
     "name": "Shinjuku Granbell Hotel",
     "price": "¥22,000–35,000",
     "url": "https://www.google.com/search?q=Shinjuku+Granbell+Hotel+booking",
     "tags": [
      "splurge",
      "gayfriendly",
      "central",
      "rooftopbath"
     ],
     "he": {
      "area": "שינג'וקו, 5 דקות מ-Ni-chome",
      "why": "מלון בוטיק גאה-ידידותי ידוע עם עיצוב אומנותי ונוף גג לעיר — הבחירה הרומנטית."
     },
     "es": {
      "area": "Shinjuku, 5 min de Ni-chome",
      "why": "Boutique hotel gay-friendly reconocido con diseño artístico y vista al skyline desde la azotea — la elección romántica."
     }
    },
    {
     "name": "Hotel Gracery Shinjuku",
     "price": "¥18,000–28,000",
     "url": "https://www.google.com/search?q=Hotel+Gracery+Shinjuku+booking",
     "tags": [
      "mid",
      "central",
      "anime",
      "gayfriendly"
     ],
     "he": {
      "area": "Kabukicho, שינג'וקו — ישר מתחת לראש Godzilla",
      "why": "חדרי תמה של Godzilla וחדרי אנימה מיוחדים — חובה לאוהבי תרבות פופ יפנית."
     },
     "es": {
      "area": "Kabukicho, Shinjuku — justo bajo la cabeza de Godzilla",
      "why": "Habitaciones temáticas de Godzilla y cuartos de anime — imprescindible para amantes de la cultura pop japonesa."
     }
    }
   ]
  },
  {
   "id": "hakone-gora",
   "cover": "♨️",
   "cityHe": "האקונה",
   "cityEs": "Hakone",
   "area": "Hakone-Yumoto / Tonosawa",
   "datesLabel": "22 ספטמבר / 22 sept",
   "nights": 1,
   "priceUnit": "couple",
   "dates": [
    "2026-09-22"
   ],
   "note": {
    "he": "לילה אחד (22.9) · נסגר: Hakone Onsen Ryokan Yaeikan.",
    "es": "Una noche (22/9) · reservado: Hakone Onsen Ryokan Yaeikan."
   },
   "options": [
    {
     "name": "Hakone Ginyu",
     "price": "¥80,000–130,000",
     "url": "https://www.google.com/search?q=Hakone+Ginyu+ryokan+booking",
     "tags": [
      "splurge",
      "privateonsen",
      "views",
      "gayfriendly"
     ],
     "he": {
      "area": "גורה, האקונה — נוף להר פוג'י ולעמק",
      "why": "חדר עם אונסן פרטי בחוץ ונוף ישיר להר פוג'י — חוויה רומנטית מושלמת לזוג."
     },
     "es": {
      "area": "Gora, Hakone — vista al Monte Fuji y al valle",
      "why": "Habitación con onsen privado al aire libre y vista directa al Monte Fuji — experiencia romántica perfecta para la pareja."
     }
    },
    {
     "name": "Gora Kadan",
     "price": "¥120,000–200,000",
     "url": "https://www.google.com/search?q=Gora+Kadan+ryokan+Hakone+booking",
     "tags": [
      "splurge",
      "privateonsen",
      "views"
     ],
     "he": {
      "area": "גורה — לשעבר ביתה של משפחת הקיסר",
      "why": "ריוקאן אגדי בגן ג'פנאי שטוף עצי אדמה — הביוטי של יפן המלכותית."
     },
     "es": {
      "area": "Gora — ex residencia de la familia imperial",
      "why": "Ryokan legendario en jardín japonés con árboles centenarios — la belleza del Japón imperial."
     }
    },
    {
     "name": "Hakone Tent",
     "price": "¥45,000–70,000",
     "url": "https://www.google.com/search?q=Hakone+Tent+guesthouse+booking",
     "tags": [
      "mid",
      "gayfriendly",
      "value"
     ],
     "he": {
      "area": "גורה, האקונה",
      "why": "אכסניה גאה-ידידותית עם אווירה חברתית ואונסן משותף — מתאים לזוגות שמחפשים חוויה אותנטית בתקציב בינוני."
     },
     "es": {
      "area": "Gora, Hakone",
      "why": "Guesthouse gay-friendly con ambiente social y onsen compartido — ideal para parejas que buscan autenticidad sin gastar de más."
     }
    }
   ]
  },
  {
   "id": "magome-kiso",
   "cover": "🏡",
   "cityHe": "מאגומה — קיסו",
   "cityEs": "Magome — Kiso",
   "area": "Magome-juku",
   "datesLabel": "23 ספטמבר / 23 sept",
   "nights": 1,
   "priceUnit": "night",
   "dates": [
    "2026-09-23"
   ],
   "note": {
    "he": "לילה אחד במינשוקו מסורתי בכפר פוסט-שלב אדו — שקט, ארוחת ערב ביתית ומפגש אמיתי עם יפן הכפרית.",
    "es": "Una noche en minshuku tradicional en la aldea postal de la era Edo — tranquilidad, cena casera y encuentro auténtico con el Japón rural."
   },
   "options": [
    {
     "name": "Magome Chaya",
     "price": "¥16,000–22,000",
     "url": "https://www.google.com/search?q=Magome+Chaya+minshuku+booking",
     "tags": [
      "value",
      "mid"
     ],
     "he": {
      "area": "Magome-juku — לאורך שביל נקסו",
      "why": "מינשוקו משפחתי עם ארוחות שדה ביתיות ואווירת אדו — פשטות יפנית אמיתית."
     },
     "es": {
      "area": "Magome-juku — a lo largo del sendero Nakasendo",
      "why": "Minshuku familiar con comidas caseras del campo y ambiente de la era Edo — simplicidad japonesa genuina."
     }
    },
    {
     "name": "Tajimaya",
     "price": "¥18,000–26,000",
     "url": "https://www.google.com/search?q=Tajimaya+Magome+minshuku+booking",
     "tags": [
      "mid",
      "value"
     ],
     "he": {
      "area": "Magome-juku מרכז",
      "why": "אחת הפנסיות הוותיקות והמוערכות בכפר — גלובטרוטרים רבים בחרו בה לפני הליכת נקסו."
     },
     "es": {
      "area": "Centro de Magome-juku",
      "why": "Uno de los minshuku más veteranos y valorados del pueblo — elegido por trekkers del Nakasendo de todo el mundo."
     }
    },
    {
     "name": "Magome Waki Honjin Hatago Tsutaya",
     "price": "¥20,000–30,000",
     "url": "https://www.google.com/search?q=Magome+Waki+Honjin+Hatago+Tsutaya+booking",
     "tags": [
      "splurge",
      "mid"
     ],
     "he": {
      "area": "Magome-juku — בניין מסורתי שמור",
      "why": "אכסניית דרכים היסטורית משוחזרת עם חדרים מרווחים וארוחת ערב מקומית מעולה."
     },
     "es": {
      "area": "Magome-juku — edificio tradicional preservado",
      "why": "Posada histórica restaurada con habitaciones amplias y cena local de excelente nivel."
     }
    }
   ]
  },
  {
   "id": "tsumago-kiso",
   "cover": "🎂",
   "cityHe": "צומאגו — קיסו",
   "cityEs": "Tsumago — Kiso",
   "area": "Tsumago-juku",
   "datesLabel": "24 ספטמבר / 24 sept",
   "nights": 1,
   "priceUnit": "couple",
   "dates": [
    "2026-09-24"
   ],
   "birthday": true,
   "note": {
    "he": "לילת יום-הולדת 40! לילה אחד בריוקאן רומנטי בכפר פוסט-שלב שנשמר בשלמותו — ארוחת קייסקי חגיגית וטבילה בשקט.",
    "es": "¡Noche de cumpleaños 40! Una noche en ryokan romántico en el pueblo postal más preservado de Japón — cena kaiseki festiva y baño tranquilo."
   },
   "options": [
    {
     "name": "Fujioto",
     "price": "¥50,000–80,000",
     "url": "https://www.google.com/search?q=Fujioto+Tsumago+ryokan+booking",
     "tags": [
      "splurge",
      "birthday",
      "privateonsen"
     ],
     "he": {
      "area": "Tsumago-juku — לב הכפר ההיסטורי",
      "why": "ריוקאן בוטיק אלגנטי עם ארוחת קייסקי יוצאת דופן — הבחירה הרומנטית ביותר ללילת יום-ההולדת."
     },
     "es": {
      "area": "Tsumago-juku — corazón del pueblo histórico",
      "why": "Ryokan boutique elegante con cena kaiseki excepcional — la elección más romántica para la noche de cumpleaños."
     }
    },
    {
     "name": "Matsushiroya",
     "price": "¥35,000–55,000",
     "url": "https://www.google.com/search?q=Matsushiroya+Tsumago+ryokan+booking",
     "tags": [
      "mid",
      "birthday"
     ],
     "he": {
      "area": "Tsumago-juku",
      "why": "ריוקאן מסורתי ומקסים עם חדרים בסגנון אדו וארוחות מקומיות מעולות — חוויה אותנטית לחגיגה."
     },
     "es": {
      "area": "Tsumago-juku",
      "why": "Ryokan tradicional encantador con habitaciones estilo Edo y excelentes comidas locales — experiencia auténtica para celebrar."
     }
    },
    {
     "name": "Okuya",
     "price": "¥30,000–48,000",
     "url": "https://www.google.com/search?q=Okuya+Tsumago+ryokan+booking",
     "tags": [
      "value",
      "birthday"
     ],
     "he": {
      "area": "Tsumago-juku",
      "why": "ריוקאן ותיק ומחובר לכפר, עם אווירה חמה ומכנסת — אפשרות בינונית-נגישה ליום-הולדת מיוחד."
     },
     "es": {
      "area": "Tsumago-juku",
      "why": "Ryokan veterano con alma aldeana y ambiente cálido y acogedor — opción accesible para un cumpleaños especial."
     }
    }
   ]
  },
  {
   "id": "kyoto",
   "cover": "⛩️",
   "cityHe": "קיוטו",
   "cityEs": "Kioto",
   "area": "Gion / Kawaramachi / Kyoto-eki",
   "datesLabel": "25–27 ספטמבר / 25–27 sept",
   "nights": 3,
   "priceUnit": "night",
   "dates": [
    "2026-09-25",
    "2026-09-26",
    "2026-09-27"
   ],
   "note": {
    "he": "3 לילות בעיר המקדשים, הגיישות והאוכל הקלאסי — בסיס אידאלי גם לביקור ביום ב-Fushimi Inari ו-Arashiyama.",
    "es": "3 noches en la ciudad de los templos, las geishas y la gastronomía clásica — base ideal para visitar Fushimi Inari y Arashiyama."
   },
   "options": [
    {
     "name": "The Millennials Kyoto",
     "price": "¥12,000–18,000",
     "url": "https://www.google.com/search?q=The+Millennials+Kyoto+hotel+booking",
     "tags": [
      "value",
      "central",
      "gayfriendly"
     ],
     "he": {
      "area": "Kawaramachi — מרכז קיוטו, ליד הרחוב המסחרי",
      "why": "קפסולות-פרמיום עיצוביות עם אזורים משותפים חיים ומיקום צמוד לתחבורה ולחיי הלילה."
     },
     "es": {
      "area": "Kawaramachi — centro de Kioto, cerca de la calle comercial",
      "why": "Cápsulas premium de diseño con áreas comunes animadas y ubicación junto al transporte y la vida nocturna."
     }
    },
    {
     "name": "Hotel Kanra Kyoto",
     "price": "¥28,000–45,000",
     "url": "https://www.google.com/search?q=Hotel+Kanra+Kyoto+booking",
     "tags": [
      "splurge",
      "central",
      "gayfriendly"
     ],
     "he": {
      "area": "Karasuma — מרכז, ליד מקדש Nishi Honganji",
      "why": "מלון בוטיק קיוטאי עם פריסת חדרים מסורתית ועיצוב עכשווי — רומנטי ומרוחק מהמולה."
     },
     "es": {
      "area": "Karasuma — centro, cerca del templo Nishi Honganji",
      "why": "Boutique hotel kyotano con planta de habitaciones tradicional y diseño contemporáneo — romántico y alejado del bullicio."
     }
    },
    {
     "name": "Len Kyoto Kawaramachi",
     "price": "¥15,000–22,000",
     "url": "https://www.google.com/search?q=Len+Kyoto+Kawaramachi+hostel+booking",
     "tags": [
      "mid",
      "central",
      "gayfriendly",
      "laundry"
     ],
     "he": {
      "area": "Kawaramachi — ליד גיון ורובע הגיישות",
      "why": "אכסניה-בוטיק עיצובית עם חדרים פרטיים, בר תחתון וכביסה — אווירת נוסעים צעירה עם כבוד לפרטיות."
     },
     "es": {
      "area": "Kawaramachi — cerca de Gion y el barrio de las geishas",
      "why": "Hostel-boutique de diseño con habitaciones privadas, bar abajo y lavandería — ambiente de viajeros jóvenes con respeto a la privacidad."
     }
    }
   ]
  },
  {
   "id": "osaka",
   "cover": "🎡",
   "cityHe": "אוסקה — נאמבה / שינסאיבאשי",
   "cityEs": "Osaka — Namba / Shinsaibashi",
   "area": "Namba / Shinsaibashi / Dotonbori",
   "datesLabel": "28–29 ספטמבר / 28–29 sept",
   "nights": 2,
   "priceUnit": "night",
   "dates": [
    "2026-09-28",
    "2026-09-29"
   ],
   "note": {
    "he": "2 לילות במרכז אוסקה — עיר האוכל, הפאצ'ינקו ובעלי-החיים הרחוב. Namba ב-10 דקות הליכה.",
    "es": "2 noches en el centro de Osaka — la ciudad de la comida, el pachinko y el ambiente callejero. Namba a 10 minutos caminando."
   },
   "options": [
    {
     "name": "Cross Hotel Osaka",
     "price": "¥14,000–22,000",
     "url": "https://www.google.com/search?q=Cross+Hotel+Osaka+booking",
     "tags": [
      "mid",
      "central",
      "gayfriendly"
     ],
     "he": {
      "area": "שינסאיבאשי — ישיר ל-Dotonbori",
      "why": "מלון עיצובי-עירוני ליד כל הפעולה, ידוע כידידותי לקהילה — מיקום מנצח לאוסקה מלאה."
     },
     "es": {
      "area": "Shinsaibashi — directo a Dotonbori",
      "why": "Hotel urbano de diseño junto a toda la acción, conocido por ser amigable a la comunidad — ubicación imbatible para un Osaka completo."
     }
    },
    {
     "name": "Dormy Inn Premium Namba",
     "price": "¥16,000–24,000",
     "url": "https://www.google.com/search?q=Dormy+Inn+Premium+Namba+Osaka+booking",
     "tags": [
      "mid",
      "value",
      "rooftopbath",
      "laundry"
     ],
     "he": {
      "area": "נאמבה — שורה ראשונה לאוסקה",
      "why": "רשת יפנית אמינה עם אמבט-יפני גדול בגג, כביסה ומיקום מעולה — ערך מצוין לכסף."
     },
     "es": {
      "area": "Namba — primera línea de Osaka",
      "why": "Cadena japonesa confiable con gran baño japonés en la azotea, lavandería y ubicación inmejorable — excelente relación precio-calidad."
     }
    },
    {
     "name": "Osaka Marriott Miyako Hotel",
     "price": "¥45,000–80,000",
     "url": "https://www.google.com/search?q=Osaka+Marriott+Miyako+Hotel+booking",
     "tags": [
      "splurge",
      "views",
      "central"
     ],
     "he": {
      "area": "Abeno Harukas — פסגת הבניין הגבוה ביפן",
      "why": "חדרים מקומה 38 ומעלה עם נוף פנורמי על אוסקה — הגרסה הדרמטית-חגיגית לסוף הטיול."
     },
     "es": {
      "area": "Abeno Harukas — cima del edificio más alto de Japón",
      "why": "Habitaciones desde el piso 38 con vista panorámica de Osaka — la versión dramática y festiva para el cierre del viaje."
     }
    }
   ]
  },
  {
   "id": "tokyo-return",
   "cover": "✈️",
   "cityHe": "טוקיו — חזרה",
   "cityEs": "Tokio — regreso",
   "area": "Shinjuku / Shibuya / Akihabara",
   "datesLabel": "30 ספטמבר–1 אוקטובר / 30 sept–1 oct",
   "nights": 2,
   "priceUnit": "night",
   "dates": [
    "2026-09-30",
    "2026-10-01"
   ],
   "note": {
    "he": "2 לילות אחרונים בטוקיו — זמן לקניות אחרונות ב-Akihabara, תערוכה או קונסרט, ובילוי אחרון ב-Ni-chome.",
    "es": "Las 2 últimas noches en Tokio — tiempo para las últimas compras en Akihabara, una expo o concierto, y la despedida en Ni-chome."
   },
   "options": [
    {
     "name": "Shinjuku Granbell Hotel",
     "price": "¥22,000–35,000",
     "url": "https://www.google.com/search?q=Shinjuku+Granbell+Hotel+booking",
     "tags": [
      "splurge",
      "gayfriendly",
      "central",
      "rooftopbath"
     ],
     "he": {
      "area": "שינג'וקו, 5 דקות מ-Ni-chome",
      "why": "סיום הטיול במלון הבוטיק הגאה-ידידותי שיתכן שפספסתם בתחילה — מושלם לסגירת מעגל."
     },
     "es": {
      "area": "Shinjuku, 5 min de Ni-chome",
      "why": "Cerrar el viaje en el boutique gay-friendly que quizás no eligieron al principio — perfecto para cerrar el círculo."
     }
    },
    {
     "name": "Keio Plaza Hotel Tokyo",
     "price": "¥28,000–45,000",
     "url": "https://www.google.com/search?q=Keio+Plaza+Hotel+Tokyo+Shinjuku+booking",
     "tags": [
      "mid",
      "central",
      "views"
     ],
     "he": {
      "area": "שינג'וקו מרכז — מגדל עם נוף לעיר",
      "why": "מלון מלא-שירותים עם בריכה ומסעדות מגוונות — נוחות וסגנון לימים האחרונים."
     },
     "es": {
      "area": "Centro de Shinjuku — torre con vista a la ciudad",
      "why": "Hotel de servicio completo con pileta y variedad de restaurantes — comodidad y estilo para los últimos días."
     }
    },
    {
     "name": "Nui. Hostel & Bar Lounge",
     "price": "¥10,000–16,000",
     "url": "https://www.google.com/search?q=Nui+Hostel+Bar+Lounge+Tokyo+Asakusa+booking",
     "tags": [
      "value",
      "gayfriendly",
      "anime"
     ],
     "he": {
      "area": "אסאקוסה — שכונה וינטג' ליד Akihabara",
      "why": "אכסניה-בוטיק היפסטרית עם בר תחתון ואווירה חברתית מצוינת לימים האחרונים ו-Akihabara ב-20 דקות."
     },
     "es": {
      "area": "Asakusa — barrio vintage cerca de Akihabara",
      "why": "Hostel-boutique hipster con bar abajo y excelente ambiente social para los últimos días — Akihabara a 20 minutos."
     }
    }
   ]
  }
 ],
 "budget": {
  "fx": {
   "he": "שער משוער ~¥150 = $1",
   "es": "cambio aprox. ~¥150 = US$1"
  },
  "lines": [
   {
    "cat": {
     "he": "טיסות בינלאומיות",
     "es": "Vuelos internacionales"
    },
    "low": 681300,
    "high": 681300,
    "note": {
     "he": "כבר שולם (LOT)",
     "es": "ya pagado (LOT)"
    }
   },
   {
    "cat": {
     "he": "מלונות (13 לילות)",
     "es": "Hoteles (13 noches)"
    },
    "low": 278000,
    "high": 390000,
    "note": {
     "he": "טוקיו · קיוטו · אוסקה",
     "es": "Tokio · Kioto · Osaka"
    }
   },
   {
    "cat": {
     "he": "ריוקאן האקונה (יומולדת) 🎂",
     "es": "Ryokan Hakone (cumple) 🎂"
    },
    "low": 90000,
    "high": 150000,
    "note": {
     "he": "אונסן פרטי + קייסקי",
     "es": "onsen privado + kaiseki"
    }
   },
   {
    "cat": {
     "he": "רכבות בין-עירוניות",
     "es": "Trenes interurbanos"
    },
    "low": 80160,
    "high": 80160,
    "note": {
     "he": "שינקנסן + Hakone Pass + N׳EX",
     "es": "shinkansen + Hakone Pass + N’EX"
    }
   },
   {
    "cat": {
     "he": "תחבורה מקומית (Suica)",
     "es": "Transporte local (Suica)"
    },
    "low": 33600,
    "high": 56000,
    "note": null
   },
   {
    "cat": {
     "he": "אוכל ושתייה",
     "es": "Comida y bebida"
    },
    "low": 144800,
    "high": 307000,
    "note": null
   },
   {
    "cat": {
     "he": "חיי לילה (ברים גייז)",
     "es": "Vida nocturna (bares gay)"
    },
    "low": 26000,
    "high": 50000,
    "note": null
   },
   {
    "cat": {
     "he": "אטרקציות וחוויות",
     "es": "Atracciones y experiencias"
    },
    "low": 151400,
    "high": 286000,
    "note": null
   },
   {
    "cat": {
     "he": "קניות ומזכרות",
     "es": "Compras y souvenirs"
    },
    "low": 40000,
    "high": 120000,
    "note": null
   },
   {
    "cat": {
     "he": "משלוח מזוודות",
     "es": "Envío de valijas"
    },
    "low": 9220,
    "high": 10060,
    "note": null
   },
   {
    "cat": {
     "he": "eSIM / דאטה",
     "es": "eSIM / datos"
    },
    "low": 4000,
    "high": 7000,
    "note": null
   },
   {
    "cat": {
     "he": "שונות / רזרבה",
     "es": "Varios / imprevistos"
    },
    "low": 10000,
    "high": 25000,
    "note": null
   }
  ],
  "totalLow": 1548480,
  "totalHigh": 2162520,
  "totalUSDLow": 10323,
  "totalUSDHigh": 14417,
  "perPerson": {
   "he": "≈ $5,160–$7,210 לאדם (כולל טיסות)",
   "es": "≈ US$5.160–7.210 por persona (con vuelos)"
  },
  "summary": {
   "he": "סה״כ מוערך לזוג ל-14 לילות, כולל הטיסות ששולמו. הטווח תלוי בעיקר במסעדות, בחוויות ובריוקאן — אפשר להוזיל עם יותר אוכל רחוב ופחות ספלרג׳ים.",
   "es": "Total estimado para la pareja por 14 noches, con los vuelos ya pagos. El rango depende sobre todo de restaurantes, experiencias y el ryokan — se puede bajar con más comida callejera y menos lujos."
  }
 },
 "costs": {
  "rates": { "jpyPerUsd": 159, "jpyPerIls": 53.5, "asOf": { "he": "שערים ~אוגוסט 2026 · ¥159≈$1 · ¥1,000≈₪18.7 (משתנים)", "es": "cambio ~agosto 2026 · ¥159≈US$1 · ¥1.000≈₪18,7 (fluctúa)" } },
  "note": { "he": "כל העלויות לזוג (2 מבוגרים), ביֶן. ✅ שולם/נסגר · 🔓 הערכה. הטווח תלוי בעיקר במסעדות, חוויות והריוקאן.", "es": "Todos los costos para la pareja (2 adultos), en yenes. ✅ pagado/reservado · 🔓 estimado. El rango depende sobre todo de restaurantes, experiencias y el ryokan." },
  "groups": [
   {
    "icon": "✈️", "title": { "he": "טיסות בינלאומיות", "es": "Vuelos internacionales" },
    "items": [
     { "l": { "he": "LOT הלוך-חזור · 2 מבוגרים (שולם)", "es": "LOT ida y vuelta · 2 adultos (pagado)" }, "low": 681300, "high": 681300, "st": "paid" }
    ]
   },
   {
    "icon": "🏨", "title": { "he": "מלונות (13 לילות)", "es": "Hoteles (13 noches)" },
    "items": [
     { "l": { "he": "AMANEK טוקיו · 18→22 (4 ל')", "es": "AMANEK Tokio · 18→22 (4 n.)" }, "low": 153115, "high": 153115, "st": "booked" },
     { "l": { "he": "Yaeikan האקונה · 22→23 (קייסקי+אונסן)", "es": "Yaeikan Hakone · 22→23 (kaiseki+onsen)" }, "low": 90000, "high": 150000, "st": "est" },
     { "l": { "he": "Yanagiya מגומה 🎂 · 23→24", "es": "Yanagiya Magome 🎂 · 23→24" }, "low": 53600, "high": 53600, "st": "booked" },
     { "l": { "he": "AKARI נאגיסו · 24→25", "es": "AKARI Nagiso · 24→25" }, "low": 44000, "high": 44000, "st": "booked" },
     { "l": { "he": "Candeo קיוטו · 25→28 (3 ל')", "es": "Candeo Kioto · 25→28 (3 n.)" }, "low": 74593, "high": 74593, "st": "booked" },
     { "l": { "he": "Onyado Nono אוסקה · 28→30", "es": "Onyado Nono Osaka · 28→30" }, "low": 51699, "high": 51699, "st": "booked" },
     { "l": { "he": "Tokyu Stay טוקיו · 30→2.10", "es": "Tokyu Stay Tokio · 30→2.10" }, "low": 77648, "high": 77648, "st": "booked" }
    ]
   },
   {
    "icon": "🚄", "title": { "he": "רכבות ופאסים", "es": "Trenes y pases" },
    "items": [
     { "l": { "he": "N'EX נריטה→שינג'וקו (18.9)", "es": "N'EX Narita→Shinjuku (18.9)" }, "low": 6660, "high": 6660, "st": "booked" },
     { "l": { "he": "Romancecar שינג'וקו→האקונה (22.9)", "es": "Romancecar Shinjuku→Hakone (22.9)" }, "low": 2300, "high": 2300, "st": "booked" },
     { "l": { "he": "HIKARI 637 אודוארה→נגויה (23.9)", "es": "HIKARI 637 Odawara→Nagoya (23.9)" }, "low": 18600, "high": 18600, "st": "booked" },
     { "l": { "he": "SHINANO 11 נגויה→נקאטסוגאווה (23.9)", "es": "SHINANO 11 Nagoya→Nakatsugawa (23.9)" }, "low": 12585, "high": 12585, "st": "booked" },
     { "l": { "he": "SHINANO 2 + Nozomi נאגיסו→קיוטו (25.9)", "es": "SHINANO 2 + Nozomi Nagiso→Kioto (25.9)" }, "low": 19020, "high": 19020, "st": "booked" },
     { "l": { "he": "Hakone Free Pass · 2 מבוגרים (22.9)", "es": "Hakone Free Pass · 2 adultos (22.9)" }, "low": 14200, "high": 14200, "st": "est" },
     { "l": { "he": "NOZOMI 358 Shin-Osaka→טוקיו (30.9)", "es": "NOZOMI 358 Shin-Osaka→Tokio (30.9)" }, "low": 33120, "high": 33120, "st": "booked" },
     { "l": { "he": "N'EX שינג'וקו→נריטה (2.10)", "es": "N'EX Shinjuku→Narita (2.10)" }, "low": 6660, "high": 6660, "st": "est" }
    ]
   },
   {
    "icon": "🎟️", "title": { "he": "חוויות וכרטיסים", "es": "Experiencias y entradas" },
    "items": [
     { "l": { "he": "מופע סומו Hirakuza אוסקה (28.9)", "es": "Show de sumo Hirakuza Osaka (28.9)" }, "low": 26400, "high": 26400, "st": "booked" },
     { "l": { "he": "סיור אוכל שינסקאי (29.9, ארוחת ערב)", "es": "Tour gastronómico Shinsekai (29.9, cena)" }, "low": 26000, "high": 26000, "st": "booked" },
     { "l": { "he": "teamLab Planets (30.9)", "es": "teamLab Planets (30.9)" }, "low": 7200, "high": 7200, "st": "booked" },
     { "l": { "he": "סובה Juu-go קיוטו (27.9, שולם מראש)", "es": "Soba Juu-go Kioto (27.9, prepago)" }, "low": 7000, "high": 7000, "st": "paid" },
     { "l": { "he": "מוזיאון ג'יבלי (1.10)", "es": "Museo Ghibli (1.10)" }, "low": 2000, "high": 2000, "st": "est" },
     { "l": { "he": "ערב מאיקו/גייקו קיוטו (27.9)", "es": "Velada maiko/geiko Kioto (27.9)" }, "low": 40000, "high": 50000, "st": "est" },
     { "l": { "he": "טקס תה + קימונו MAIKOYA (27.9)", "es": "Ceremonia de té + kimono MAIKOYA (27.9)" }, "low": 14000, "high": 16800, "st": "est" },
     { "l": { "he": "סדנת ראמן — Baba Ramen טוקיו (21.9, שולם)", "es": "Taller de ramen — Baba Ramen Tokio (21.9, pagado)" }, "low": 46000, "high": 46000, "st": "paid" },
     { "l": { "he": "השכרת קימונו ליום בקיוטו (27.9)", "es": "Alquiler de kimono por un día en Kioto (27.9)" }, "low": 6600, "high": 11000, "st": "est" },
     { "l": { "he": "Owakudani צהריים + ביצה שחורה (22.9)", "es": "Owakudani almuerzo + huevo negro (22.9)" }, "low": 4000, "high": 5000, "st": "est" },
     { "l": { "he": "Tenzan Onsen · 2 מבוגרים (22.9)", "es": "Tenzan Onsen · 2 adultos (22.9)" }, "low": 2900, "high": 2900, "st": "est" }
    ]
   },
   {
    "icon": "🍜", "title": { "he": "אוכל ושתייה (הערכה)", "es": "Comida y bebida (estimado)" },
    "items": [
     { "l": { "he": "~¥7,000–9,000 לאדם ליום × 2 × ~13 ימים (מלבד הארוחות המיוחדות שלמעלה)", "es": "~¥7.000–9.000 por persona por día × 2 × ~13 días (aparte de las comidas especiales de arriba)" }, "low": 182000, "high": 252000, "st": "est" }
    ]
   },
   {
    "icon": "🎉", "title": { "he": "חיי לילה, קניות ושונות", "es": "Vida nocturna, compras y varios" },
    "items": [
     { "l": { "he": "חיי לילה (Ni-chome ×2 + Doyama)", "es": "Vida nocturna (Ni-chome ×2 + Doyama)" }, "low": 26000, "high": 50000, "st": "est" },
     { "l": { "he": "תחבורה מקומית (Suica/ICOCA) · 2", "es": "Transporte local (Suica/ICOCA) · 2" }, "low": 20000, "high": 24000, "st": "est" },
     { "l": { "he": "משלוח מזוודות (takkyubin)", "es": "Envío de valijas (takkyubin)" }, "low": 4000, "high": 10000, "st": "est" },
     { "l": { "he": "eSIM / דאטה · 2", "es": "eSIM / datos · 2" }, "low": 4000, "high": 7000, "st": "est" },
     { "l": { "he": "קניות ומזכרות", "es": "Compras y souvenirs" }, "low": 40000, "high": 120000, "st": "est" },
     { "l": { "he": "שונות / רזרבה", "es": "Varios / imprevistos" }, "low": 10000, "high": 25000, "st": "est" }
    ]
   }
  ]
 },
 "he": {
  "days": [
   {
    "date": "2026-09-18",
    "dow": "Fri",
    "city": "Tokyo",
    "title": "יום 1 — נאון בטוקיו",
    "summary": "נחיתה בנריטה, רכבת-הבזק לשינג'וקו, וצלילה ישירה לחום הרחובות המוארים. הלילה הראשון ביפן נחגג עם שיפוד ועשן ואורות שלא נכבים.",
    "hotel": "🏨 HOTEL AMANEK Shinjuku Kabukicho · Kabukicho (✓ נסגר · 18→22, 4 לילות)",
    "events": [
     {
      "start": "18:25",
      "end": "19:45",
      "type": "transport",
      "area": "Narita Airport T1",
      "title": "נחיתה וכניסה לארץ",
      "desc": "נוחתים ב-Narita T1 בשעה 18:25, עוברים הגירה, שולפים מזוודות ומגדירים Mobile Suica ב-Apple Wallet לתשלום חלק בכל הנסיעות. כדאי לוודא שה-eSIM פעיל ברגע שנוגעים על האדמה.",
      "tips": "הכינו מראש את ה-QR של Visit Japan Web כדי לקצר את תור ההגירה. אם ה-eSIM לא עולה מייד — הפעילו מצב טיסה ל-10 שניות.",
      "cost": "חינם",
      "booking": "מלאו את קוד ה-QR של Visit Japan Web לפני הנחיתה"
     },
     {
      "start": "19:45",
      "end": "21:15",
      "type": "transport",
      "area": "Narita עד Shinjuku",
      "title": "N'EX לשינג'וקו",
      "desc": "הנריטה אקספרס (N'EX) לוקח כ-80 דקות ומשחרר אתכם ישירות בשינג'וקו — זרקו את המזוודות בחדר ותצאו.",
      "tips": "קנו כרטיס הלוך-חזור (round-trip) — הוא כולל גם את החזרה לנריטה ביום 15 וחוסך כסף.",
      "cost": "¥3,000–4,000 לאדם",
      "booking": "כרטיס הלוך-חזור N'EX — כדאי לרכוש מראש אונליין או בדלפק JR בנמל התעופה",
      "dur": "~80 דק׳"
     },
     {
      "start": "21:45",
      "end": "23:00",
      "type": "food",
      "area": "Shinjuku (Omoide Yokocho)",
      "title": "יקיטורי ב-Omoide Yokocho",
      "desc": "\"סמטת הזיכרונות\" — שורה של דוכנים זעירים מוארים בפנסים, עשן, שיפודי עוף מקורמלים ובירה קרה. האזור ידוע בפתיחות ובאווירה הכי אנושית שיש לטוקיו להציע בלילה הראשון — וסופרמרקט הנוחות הכי קרוב ל-11 בלילה הוא הדסרט המושלם.",
      "tips": "הדוכנים קטנים — שבו בכל מקום שיש בו שני כיסאות פנויים, וחייכו; זה עובד. הכינסט גם לקונביני סמוך לנשנוש לפני השינה.",
      "cost": "¥1,500–3,000 לאדם",
      "booking": "",
      "highlight": true
     },
     {
      "start": "23:00",
      "end": "23:59",
      "type": "sightseeing",
      "area": "Shinjuku (Kabukicho)",
      "title": "טיול נאון בקבוקי-צ'ו",
      "desc": "לולאה קצרה ברחובות הנאון של Kabukicho, עם עצירת חובה מתחת לראש הגודזילה שבולט ממלון Hotel Gracery — ברוכים הבאים לטוקיו. קצר, קסום, וחוזרים לישון.",
      "tips": "זה רגלית מ-Omoide Yokocho — 10 דקות הלוך ובלי צורך ברכבת. אל תיכנסו ל-Kabukicho Tower בלילה הראשון — זה נושא לערב אחר.",
      "cost": "חינם",
      "booking": ""
     },
     {
      "start": "21:15",
      "end": "21:45",
      "type": "checkin",
      "area": "Shinjuku (Kabukicho)",
      "title": "צ׳ק-אין ב-AMANEK והנחת מזוודות",
      "desc": "הנחת המזוודות ורענון קצר אחרי הטיסה, ואז יציאה רגלית לסמטת היקיטורי (5 דק׳ מהמלון)."
     }
    ],
    "cultural": "קבוקיצ'ו שמה לוקחת מקבוקי — אמנות ה-kabuki הייתה אמורה לקום כאן בשנות ה-40, אך התיאטרון מעולם לא נבנה, והשם נשאר כרוח של משהו שלא היה. בתרבות השינטו, לילה ועשן הם לא סתם אווירה — הם ממד ניתוק מה-hare (היומיומי) אל ה-ke (הקדוש-חגיגי), מעבר שמסמן פתיחת זמן אחר. שיפוד יקיטורי שנצלה על פחם בינקו נחשב בסדר היום היפני לא רק לאוכל אלא להתכנסות — omakase של חברות. האורות הניאוניים אינם זיהום אור: הם קשורים לאסתטיקה של משא ('kawaii') ול-'matsuri' — הרוח החגיגית שמכה כל פעם שהיפנים יוצאים ממסגרת הרגיל.",
    "tips": [
     "קנו כרטיס N'EX מראש אונליין (JR East או Klook) — שורות המכונות בנמל התעופה בשעת ערב יכולות לעכב 15 דקות. עם כרטיס דיגיטלי פשוט עוברים בשער.",
     "ב-Omoide Yokocho הכסאות הם ממש 6–8 במקום — אם הדוכן הראשון מלא תעברו לבא בתור; כל השיפודים ברמה דומה. בקשו 'tori kawa' (עור עוף) ו-'tsukune' (כדורי עוף) — אלה הקלאסיקות.",
     "בדקו מראש שמירה על צ'ק-אין מאוחר: AMANEK Kabukicho מקבל עד 02:00, אבל ודאו שמוצרי הפנים שלכם נגישים מהתיק — המזוודות הגדולות לא ילכו לשום מקום עד בוקר."
    ]
   },
   {
    "date": "2026-09-19",
    "dow": "Sat",
    "city": "Tokyo",
    "title": "טוקיו מהשוק ועד השמיים",
    "summary": "יום של חושים וצבעים: שוק טסוקיג'י, מקדש אסאקוסה, טיול ערב בלב שיבויה ולילה רועש ב-Ni-chome. ביום הזה טוקיו מתגלה בשלמותה.",
    "hotel": "🏨 HOTEL AMANEK Shinjuku Kabukicho · Kabukicho (✓ נסגר · 18→22, 4 לילות)",
    "events": [
     {
      "start": "08:00",
      "end": "10:15",
      "type": "food",
      "area": "Tsukiji",
      "title": "סיור אוכל בטסוקיג'י",
      "desc": "שוק טסוקיג'י החיצוני הוא ארוחת בוקר בתחפושת הרפתקה — טמאגויאקי טרי מהמחבת, אוני שנמס על הלשון, ניגירי ואגיו ומאצ'ה סופט-סרב לסיום מתוק. תנו לאחד לנהוג ולשני לאכול, ואז תחליפו.",
      "tips": "הגיעו לפני 8:30 לפני שהאנשים מגיעים בהמוניהם. אם תזמינו סיור מודרך תקבלו הסברים ותחנות שאיש לא מוצא לבד.",
      "cost": "¥3,000–6,000 לאדם",
      "booking": "כדאי להזמין מראש סיור מודרך בטסוקיג'י",
      "highlight": true
     },
     {
      "start": "10:45",
      "end": "12:30",
      "type": "culture",
      "area": "Asakusa",
      "title": "סנסו-ג'י ונקאמיסה-דורי",
      "desc": "שער קמינארימון עם הפנס הענק הוא הצילום הראשון של הטיול, ואחריו מסדרון נקאמיסה-דורי עמוס ניאן-יאקי חמים ומלון-פן. מגשר אזומאבאשי יש תצלום קלאסי של Skytree מוקף שמיים.",
      "tips": "בית המקדש עצמו חינמי — הכסף הולך לאומות-השמע (אומיקוג'י). קנו ושנו כשאתם הולכים — הכי כיף ככה.",
      "cost": "¥500–1,500 לאדם (חטיפים)",
      "booking": ""
     },
     {
      "start": "12:30",
      "end": "16:00",
      "type": "rest",
      "area": "Shinjuku",
      "title": "מנוחת הצהריים בשינג'וקו",
      "desc": "אין בושה להודות שהגוף עוד בשעון בואנוס איירס — שנת צהריים אמיתית עכשיו תהפוך את הלילה לבלתי נשכח. אפשר גם לשוטט לאט בשינג'וקו ולחוש את הקצב.",
      "tips": "אל תישנו יותר מדי — הערב בשיבויה וב-Ni-chome מחכה.",
      "cost": "חינם",
      "booking": ""
     },
     {
      "start": "16:45",
      "end": "18:15",
      "type": "sightseeing",
      "area": "Shibuya",
      "title": "שיבויה — הצומת, האצ'יקו וטיול ערב",
      "desc": "צלילה אל לב שיבויה: חציית הצומת המפורסמת בעולם, פסל האצ'יקו, Center Gai הזוהר וגג Miyashita Park לנוף שקט של השכונה בין ערביים. אנרגיה טוקיואית טהורה לפני ארוחת הערב.",
      "tips": "לצילום הכי טוב של הצומת — הקומה השנייה של תחנת שיבויה או Mag's Park על גג Magnet by Shibuya109. הכול חינם, בלי הזמנה.",
      "cost": "חינם",
      "booking": ""
     },
     {
      "start": "18:30",
      "end": "20:00",
      "type": "food",
      "area": "Shibuya",
      "title": "איזאקאיה בשיבויה",
      "desc": "ארוחת ערב ראשונה ישראית-יפנית: צלחות קטנות, עשן, בירה נאמה קרה מהברז ואנשי שיבויה מסביב. פשוט ומשמח.",
      "tips": "הגידו לבאר-טנדר \"נאמה פוטאטסו\" (שתי בירות טריות) ותרגישו מיד מקומיים.",
      "cost": "¥2,500–4,500 לאדם",
      "booking": ""
     },
     {
      "start": "21:00",
      "end": "23:59",
      "type": "nightlife",
      "area": "Shinjuku Ni-chome",
      "title": "שינג'וקו Ni-chome — שיא השבת",
      "desc": "Ni-chome בשבת בלילה היא הפסגה של הסצנה הגאה של טוקיו — מאות ברים קטנים, אנרגיה שפוצצת ושמחה שמדבקת. AiiRO Cafe הוא הנקודה הפתוחה והידידותית למתחילים, Eagle Tokyo לחובבי הווייב הגברי, Dragon Men לאווירה הכי קלאסית של הרחוב.",
      "tips": "הברים קטנים — אל תתביישו להיכנס, לשתות כוס ולזוז הלאה. אין טעם לתכנן, פשוט זרמו.",
      "cost": "¥500–1,500 לכניסה/בר",
      "booking": "",
      "highlight": true
     }
    ],
    "cultural": "סנסו-ג'י אינו רק מקדש — הוא הלב הפועם של אסאקוסה מאז המאה השביעית. האגדה מספרת שדייגים מצאו בשנת 628 פסלון קטנטן של קאנון, אלת החמלה, ברשתותיהם בנהר סומידה. הפסלון נעלם ולא נראה מאז, אך המקדש נבנה סביב ּהיעדרו — עקרון יפאני עמוק שבו הדבר הקדוש ביותר הוא זה שאינו נראה לעין. עשן הקטורת מהאגן הגדול (jokoro) נחשב מרפא: יפאנים מפנפנים אותו לעבר הגוף — אל הראש לחוכמה, אל הידיים לכישרון. גם אתם — פנפנו.",
    "tips": [
     "שיבויה בערב: חציית הצומת מרשימה ביותר אחרי רדת החשכה כשכל המסכים נדלקים. תצפית חינמית ומצוינת מגג Miyashita Park או מ-Mag's Park (Shibuya109). שקיעה ב-19 בספטמבר ~18:00 — תזמון מושלם לצאת מטסוקיג'י/אסאקוסה ולהגיע לשיבויה בין ערביים.",
     "ב-Ni-chome בשבת לילה: רוב הברים גובים 'טייבל-צ'ארג' של ¥1,000–¥1,500 הכולל שתייה ראשונה — שלמו בשמחה, זה המנהג. Advocates Bar (חוץ-בר פתוח) הוא נקודת הכינוס הבינלאומית; משם תגלו לאן ממשיכים לפי מצב רוח. אין צורך להגיע לפני 22:30.",
     "בצוקיג'י: הדוכנים הכי שווים — פרוסות טונה טרייה, טמאגויאקי על שיפוד, ויסטרייה קרם-מייל קונכייה. כרטיסי IC (Suica/Pasmo) חוסכים תור לכרטיסים בכל הנסיעות. שימו לב: רוב הדוכנים סוגרים בין 13:00–14:00, כך שהיציאה ב-10:15 בטוחה."
    ]
   },
   {
    "date": "2026-09-20",
    "dow": "Sun",
    "city": "Tokyo",
    "title": "טוקיו — יום אנימה: Nakano ו-Akihabara",
    "summary": "יום שלם באנימה: קומות Mandarake ב-Nakano, ארקייד וגאצ׳פון ב-Akihabara, ופיגורות עד מאוחר.",
    "hotel": "🏨 HOTEL AMANEK Shinjuku Kabukicho · Kabukicho (✓ נסגר · 18→22, 4 לילות)",
    "events": [
     {
      "start": "12:00",
      "end": "14:00",
      "type": "anime",
      "area": "Nakano",
      "title": "Nakano Broadway — מכה לאספני אנימה",
      "desc": "קומות של Mandarake: מנגה יד-שנייה, פיגורות נדירות, משחקי רטרו, שעונים ואספנות. גן עדן לחובבים, פחות תיירי ובמחירים הוגנים.",
      "tips": "הקומות 2–4 הכי שוות; קחו מזומן. אל תפספסו את דוכני הרטרו-גיים.",
      "cost": "חינם (קניות לפי טעם)",
      "booking": "",
      "highlight": true
     },
     {
      "start": "14:00",
      "end": "15:00",
      "type": "food",
      "area": "Nakano",
      "title": "צהריים ב-Nakano",
      "desc": "ראמן או קארי בסמטאות שמסביב ל-Broadway.",
      "tips": "",
      "cost": "כ-¥900–1,600 לאדם",
      "booking": ""
     },
     {
      "start": "15:30",
      "end": "18:45",
      "type": "anime",
      "area": "Akihabara",
      "title": "Akihabara — ארקייד, גאצ׳פון ופיגורות",
      "desc": "קומות ארקייד (GiGO/Taito), קירות מכונות גאצ׳פון, חנויות פיגורות ומנגה, ואולי בית קפה נושאתי. הלב הפועם של תרבות האנימה.",
      "tips": "קחו מזומן ל-UFO catchers ולחנויות הישנות; Super Potato לרטרו-גיים.",
      "cost": "כ-¥1,000–3,000 לאדם",
      "booking": "",
      "highlight": true
     },
     {
      "start": "19:00",
      "end": "20:30",
      "type": "food",
      "area": "Akihabara",
      "title": "ארוחת ערב ב-Akihabara",
      "desc": "קארי יפני קלאסי, ראמן, או בית קפה נושאתי (להזמין מראש).",
      "tips": "",
      "cost": "כ-¥1,200–2,500 לאדם",
      "booking": ""
     },
     {
      "start": "20:30",
      "end": "22:30",
      "type": "anime",
      "area": "Akihabara",
      "title": "ערב ב-Akihabara — עוד ארקייד",
      "desc": "סיבוב אחרון בקומות המשחקים המוארות, ואולי בר קטן לסיום.",
      "tips": "",
      "cost": "",
      "booking": ""
     },
     {
      "start": "09:30",
      "end": "11:30",
      "type": "rest",
      "area": "Shinjuku",
      "title": "בוקר רגוע בשינג׳וקו",
      "desc": "ארוחת בוקר מאוחרת וקפה — Mandarake ב-Nakano נפתחת רק ב-12:00, אז אין למה למהר אחרי ליל שבת."
     }
    ],
    "cultural": "אקיהברה — שמה המלא '秋葉原', שדה עלי הסתיו — הפכה מרובע מכשירי חשמל לאחר-מלחמה למרכז תרבות ה-אוטאקו הגדול בעולם. בלב הרעיון הזה נמצאת תפיסת ה-מו מוי (萌え, Moe) — רגש חמים של חיבה ואמפתיה כלפי דמויות דמיוניות שיש בהן חוסר-אונים ורוך. זו לא רק תרבות קנייה: חובבים רואים בכך צורת אסתטיקה רגשית שמאתגרת את הגבול בין הממשי לדמיוני. גאצ'פון — מכונות הקפסולות — הן ביטוי של 'ichi-go ichi-e' (一期一会), המושג הבודהיסטי של 'פגישה אחת בחיים': אינך יודע מה תקבל, ורגע ההפתעה הוא בלתי-ניתן-לחזרה.",
    "tips": [
     "חנויות Mandarake ב-Nakano Broadway נפתחות ב-12:00 — אל תבואו לפני כן. תכננו בוקר רגוע עם ארוחת בוקר מאוחרת ב-Shinjuku ואז נסעו לנאקאנו.",
     "ב-Nakano Broadway, קחו מעלית לקומה 4 ואז עבדו דרך למטה — חנויות האוסף הנדיר ביותר (כולל ה-Mandarake Cosmos) נמצאות בקומות העליונות ופחות צפופות בשעות הפתיחה.",
     "ה-Gachapon Kaikan באקיהברה סוגר ב-19:00 בימי ראשון — אל תשמרו אותו לסוף הערב. לכו לשם בין 16:30–18:30 לפני ארוחת הערב.",
     "⏰ מחר (21.9) סדנת הראמן מתחילה ב-09:00 במינאמי-אאויאמה — אל תישארו הלילה עד מאוחר מדי בארקיידים, וכוונו שעון ל-~07:30. לפני היציאה מסרו את המזוודה הראשית בקבלה למשלוח לקיוטו."
    ]
   },
   {
    "date": "2026-09-21",
    "dow": "Mon",
    "city": "Tokyo",
    "title": "טוקיו — סדנה, Harajuku ו-Shibuya",
    "summary": "בוקר של סדנת ראמן (✓ נסגר, 09:00–13:00), אחה״צ הראג׳וקו ומייג׳י ג׳ינגו, וקניות בשיבויה — יום טוקיו אחרון לפני האקונה.",
    "hotel": "🏨 HOTEL AMANEK Shinjuku Kabukicho · Kabukicho (✓ נסגר · 18→22, 4 לילות)",
    "events": [
     {
      "start": "09:00",
      "end": "13:00",
      "type": "experience",
      "area": "Minami-Aoyama, Minato",
      "title": "✓ סדנת ראמן — Baba Ramen Cooking School",
      "desc": "✓ נסגר · הזמנה 14166 · 09:00–13:00 (4 שעות) · 2 משתתפים · ¥46,000 (שולם). סדנת ראמן ידנית עם שפים ב-Baba Ramen Cooking School, Minami-Aoyama 3-2-7 (ליד תחנת Omotesando). מכינים נודלס, מרק ותוספות — ואוכלים את הקערה שהכנתם. זו ארוחת הצהריים.",
      "tips": "בואו רעבים ובזמן (~08:45). מהמלון: JR Yamanote עד Harajuku + ~12 דק׳ הליכה, או מטרו עד Omotesando (יציאות A4/A5). סינרים מסופקים.",
      "cost": "✓ ¥46,000 לזוג (שולם · הזמנה 14166)",
      "booking": "✓ נסגר · הזמנה 14166",
      "highlight": true
     },
     {
      "start": "13:15",
      "end": "14:05",
      "type": "sightseeing",
      "area": "Omotesando / Aoyama",
      "title": "אומוטסאנדו ואאויאמה (יוצאים מהסדנה)",
      "desc": "בית הספר צמוד לאומוטסאנדו — מתחילים בשדרת האדריכלות (Prada ו-Miu Miu באאויאמה ממש ליד, Omotesando Hills של אנדו), ואולי מוזיאון Nezu השקט. משם עולים צפונה להראג׳וקו.",
      "tips": "אחרי הראמן אין צורך בצהריים — רק קפה/קרפ קליל אם בא לכם.",
      "cost": "חינם (Nezu אופציונלי ~¥1,400)",
      "booking": ""
     },
     {
      "start": "14:05",
      "end": "16:00",
      "type": "sightseeing",
      "area": "Harajuku / Meiji Jingu",
      "title": "Takeshita-dori ו-Meiji Jingu",
      "desc": "רחוב Takeshita הצבעוני (קרפים, קוואיי), ואז רוגע ביער המקדש Meiji Jingu — קיר חביות הסאקה מול היין הצרפתי, Temizuya והאולם הראשי.",
      "tips": "⚠️ בגלל הסדנה בבוקר, מייג׳י ג׳ינגו עכשיו אחה״צ — בחג צפוף יותר, אבל 70 הקטאר של היער בולעים את הקהל. Temizuya: שמאל, ימין, פה, ידית.",
      "cost": "חינם (Gyoen ¥500 אופציונלי)",
      "booking": "",
      "highlight": true
     },
     {
      "start": "16:00",
      "end": "18:00",
      "type": "shopping",
      "area": "Shibuya",
      "title": "Shibuya — קניות וצומת מפורסמת",
      "desc": "חנויות הדגל של Shibuya, מעבר החציה Scramble, ואווירת העיר הגדולה.",
      "tips": "",
      "cost": "",
      "booking": ""
     },
     {
      "start": "18:00",
      "end": "19:30",
      "type": "food",
      "area": "Shibuya",
      "title": "ארוחת ערב ב-Shibuya",
      "desc": "איזאקאיה של מנות קטנות או יאקיטורי לפני הלילה.",
      "tips": "",
      "cost": "כ-¥2,500–4,000 לאדם",
      "booking": ""
     },
     {
      "start": "20:00",
      "end": "23:00",
      "type": "nightlife",
      "area": "Shinjuku Ni-chome",
      "title": "לילה אחרון בטוקיו — Ni-chome",
      "desc": "סיבוב ברים ברובע הגאה לפני שממשיכים מחר להאקונה, ואז אורזים תיק-לילה.",
      "tips": "זכרו: מחר בבוקר שולחים את המזוודה הראשית לקיוטו.",
      "cost": "",
      "booking": ""
     }
    ],
    "cultural": "מייג'י ג'ינגו אינו מקום-תיירות — הוא אחת מנשמות המדינה. המקדש הוקדש ב-1920 לזכר הקיסר מייג'י ורעייתו שוקן, מי שהוביל את יפן מתקופת הסמוראים אל העידן המודרני. 365 עצי קמפור שתולים ידנית מכסים 70 הקטארים של היער — מתנה מ-100,000 מתנדבים מכל מחוזות יפן. בכניסה לחצר הפנימית תמצאו את ה-Temizuya: כיור אבן ובו תמריצים דמויי-ברז. הרגל זה נקרא 'misogi-harae', טהרה שמקורה באמונה השינטואיסטית שמים שוטפים לא רק לכלוך גשמי אלא גם 'kegare' — טומאה רוחנית שמצטברת מחיי היומיום. שיטוף שלוש פעמים, פה כלול — ורק אז מותר לעמוד בפני האלוהות.",
    "tips": [
     "✓ סדנת הראמן נסגרה — Baba Ramen Cooking School, Minami-Aoyama 3-2-7 (ליד Omotesando), 09:00–13:00, הזמנה 14166, ¥46,000 לזוג. הגיעו ~08:45; זו גם ארוחת הצהריים (הראמן שתכינו).",
     "מייג'י ג'ינגו עכשיו אחה״צ (כי הסדנה בבוקר): בחג הצפיפות בשיא ב-12:00–15:00, אבל 70 הקטאר של היער בולעים את הקהל — פשוט זרמו. ב-Temizuya שטפו ידיים בנחת — שמאל, ימין, פה, ידית — לפני הכניסה לחצר.",
     "Takeshita Street: כניסה מצד תחנת JR Harajuku (לא מהצד של אומוטסאנדו) חוסכת את הצפיפות הגרועה ביותר. הפתיחה ~10:00-11:00; צהריים ב-Harajuku = אנגוס רסטורנט (burgers), Kawaii Monster Café, או קריפ מאחד הדוכנים המקוריים ברחוב."
    ],
    "logistics": {
     "he": "בוקר אחרון בטוקיו: לפני סדנת הראמן (09:00) מסרו את המזוודה הראשית בקבלת AMANEK למשלוח ל-Candeo קיוטו (Yamato takkyubin) — שליחה ב-21.9 נותנת מרווח לעיכובי שבוע הכסף; מגיעה לפני הצ׳ק-אין (25.9). ממשיכים להאקונה+קיסו עם תיק-לילה בלבד.",
     "es": "Última mañana en Tokio: antes del taller de ramen (09:00) dejen la valija principal en recepción del AMANEK para despacharla al Candeo Kioto (takkyubin de Yamato) — mandarla el 21/9 da margen ante las demoras de Silver Week; llega antes del check-in (25/9). Siguen a Hakone+Kiso solo con bolso de una noche."
    }
   },
   {
    "date": "2026-09-22",
    "dow": "Tue",
    "city": "Hakone",
    "title": "הקונה — עונת כסף, אמבט הרים",
    "summary": "יום המעבר הגדול: מזוודות ליוטו, שניכם רכבת הרומנסקאר הציורית אל עמק ההרים, ואחר הצהריים שוקעים לתוך רייוקאן עם אונסן פרטי, יוקאטה ורוטב של ירק הרי לקראת ערב קייסקי חגיגי.",
    "hotel": "🏨 Hakone Onsen Ryokan Yaeikan (✓ נסגר · 22→23) · אונסן",
    "events": [
     {
      "start": "07:30",
      "end": "09:00",
      "type": "transport",
      "area": "Tokyo",
      "title": "צ׳ק-אאוט ותחילת הדרך להאקונה",
      "desc": "ארוחת בוקר וצ׳ק-אאוט. המזוודה הראשית כבר בדרך לקיוטו (נשלחה אתמול) — יוצאים עם תיק-לילה בלבד.",
      "tips": "מצאו דוכן TA-Q-BIN (Yamato) בשדה תעופה הנארידה, בבתי מלון גדולים בטוקיו, או ב-7-Eleven שליד המלון. שלחו עד 10:00 כדי להבטיח מסירה למחרת.",
      "cost": "¥2,000–2,500 לאדם",
      "booking": ""
     },
     {
      "start": "09:00",
      "end": "10:15",
      "type": "transport",
      "area": "Shinjuku עד Hakone-Yumoto",
      "title": "✓ רומנסקאר — הרכבת הרומנטית של הקונה",
      "desc": "✓ נסגר · יציאה 9:00 → הגעה 10:15 · מושב 6D (קרון 06) · אישור 00018. רכבת הרומנסקאר של אודקיו מסינג'וקו ישירות אל Hakone-Yumoto, חלונות פנורמיים ונוף מדהים. עדיין צריך לקנות Hakone Free Pass לתחבורה המקומית היום ומחר.",
      "tips": "המושב שמור (6D). קנו Hakone Free Pass (2 ימים) — מכסה Tozan, כבלית, רכבל, שייט ואוטובוסים.",
      "cost": "✓ ¥2,420 רומנסקאר (שולם) + ¥6,500–7,000 Hakone Free Pass לאדם",
      "booking": "✓ נסגר — e-Romancecar · מושב 6D · אישור 00018",
      "dur": "~75 דק׳"
     },
     {
      "start": "10:30",
      "end": "15:00",
      "type": "sightseeing",
      "area": "Owakudani · אגם Ashi · מקדש Hakone",
      "title": "לולאת האקונה — געש, שיט ומקדש",
      "desc": "מניחים תיק-לילה ב-Yaeikan (2 דק' מהתחנה) ויוצאים ללולאה על ה-Free Pass: רכבת Tozan→Gora, כבלית ל-Sounzan, רכבל אל עמק הגעש Owakudani (ביצה שחורה + צהריים ב-Owakudani Kitchen), רכבל ל-Togendai, ספינת פיראטים על אגם Ashi ל-Moto-Hakone, ומקדש Hakone עם הטוריאי האדום על המים. פרטים מלאים בטאב 🚶 מסלולים.",
      "tips": "⚠️ הרכבל סוגר ~17:00 — עשו אותו בבוקר. תור הטוריאי במקדש יכול להיות 1–3 שעות בשבוע הכסף — דלגו על התור או צלמו מהצד. עזבו את המקדש עד ~15:00 (עומסי אוטובוס בחג).",
      "cost": "כלול ב-Hakone Free Pass · ביצה שחורה ¥500/5 · צהריים ~¥1,200",
      "booking": ""
     },
     {
      "start": "17:20",
      "end": "18:00",
      "type": "onsen",
      "area": "Hakone-Yumoto",
      "title": "הגעה לרייוקאן — הרגע הזה מגיע (לפני 19:00!)",
      "desc": "צ'ק-אין ברייוקאן ביומוטו: קבלת פנים עם תה ירוק ומתוקים יפניים, החלפה ליוקאטה, וטבילה ראשונה במי האונסן עם נוף ההרים. הרגישו את הלחץ מתפוגג.",
      "tips": "השאירו את הנעליים בכניסה ועברו לסנדלי הרייוקאן (גֶּטה) — זה חלק מהחוויה. צלמו זה את זה ביוקאטה לפני שהאונסן מאדים את הפנים.",
      "cost": "כלול בלינה",
      "booking": ""
     },
     {
      "start": "20:00",
      "end": "21:00",
      "type": "onsen",
      "area": "Hakone-Yumoto",
      "title": "אונסן פרטי לזוגות (כּשיקירי)",
      "desc": "שעה שלמה של אונסן פרטי לשניכם בלבד — מים חמים מן המעיינות הטבעיים, נרות, ושקט מוחלט. רגע אינטימי ומיוחד לחגיגת יום ההולדת ה-40.",
      "tips": "הזמינו את החדר מיד עם הצ'ק-אין כי הסלוטים מתמלאים מהר בשבוע הכסף. בדקו מול הרייוקאן אם מדובר באונסן מרוטב גופרית (סולפור) — חלק מהאנשים רגישים לריח.",
      "cost": "¥1,500–3,000 לזוג (משתנה לפי רייוקאן)",
      "booking": "הזמינו את הסלוט באונסן הפרטי בזמן הצ'ק-אין",
      "highlight": true
     },
     {
      "start": "18:00",
      "end": "20:00",
      "type": "food",
      "area": "Hakone-Yumoto",
      "title": "ארוחת קייסקי — חגיגה עונתית",
      "desc": "ארוחת ערב קייסקי מסורתית מוגשת בחדרכם: מנות עונתיות קטנות ומושקעות שמספרות את סיפור הסתיו היפני — דגים, ירקות הרים, טופו ועוד. ארוחה שהיא חוויה בפני עצמה.",
      "tips": "ספרו לרייוקאן מראש על העדפות תזונה (צמחונות/אלרגיות) בזמן ההזמנה. שתו sake מקומי — המלצר בדרך כלל שמח להמליץ על בחירה עונתית.",
      "cost": "¥15,000–25,000 לאדם (כלול בדרך כלל בחבילת הלינה)",
      "booking": "",
      "highlight": true
     },
     {
      "start": "16:00",
      "end": "17:15",
      "type": "onsen",
      "area": "Tenzan Onsen · Oku-Yumoto",
      "title": "♨️ Tenzan Onsen — רוֹטֶנבּוּרוֹ בטבע",
      "desc": "אחרי הלולאה, שעה–שעה וחצי של אמבט חם בעירום ביער וליד נחל ב-Tenzan (Oku-Yumoto): 4 רוֹטֶנבּוּרוֹ, אמבטיות פנים ומרחצאות אדים. מ-Yumoto מונית ~¥1,000–1,300 / שאטל ~¥100, ואז מונית קצרה ל-Yaeikan.",
      "tips": "⚠️ קעקועים: Tenzan ידידותי-קעקוע אבל רק אדם אחד מקועקע בקבוצה — אם לשניכם יש, יסרבו. פתוח 09:00–23:00, מזומן בלבד. אמבטיות מופרדות מגדר; יש חדרי אמבט פרטיים בתשלום.",
      "cost": "¥1,450 לאדם (מזומן, לא ב-Free Pass)",
      "booking": ""
     }
    ],
    "logistics": {
     "he": "המזוודה הראשית כבר בדרך לקיוטו (נשלחה ב-21.9). נוסעים להאקונה ולעמק קיסו עם תיק-לילה בלבד — 2 לילות. אשרו עם Yaeikan הזמנת אמבט פרטי (kashikiriburo) בצ׳ק-אין.",
     "es": "La valija principal ya va camino a Kioto (despachada el 21/9). Van a Hakone y al Valle de Kiso solo con bolso de una noche — 2 noches. Confirmá con Yaeikan la reserva del baño privado (kashikiriburo) al hacer el check-in."
    },
    "cultural": "המעיינות החמים של האקונה נובעים מהר הגעש פוג'י-האקונה הפעיל, ובמסורת השינטו המים הגועשים נחשבים לתוצאה של כוח אלוהי (מוסובי) הזורם מן האדמה. מיסוגי — טהרה במים — הוא אחד מריטואלי השינטו העתיקים ביותר: הכניסה לאמבט האונסן איננה רק היגיינה, אלא שטיפה רוחנית של הזיהום הנפשי (קגארה) שאספתם בחיי היומיום. לכן שוטפים את הגוף לגמרי לפני הכניסה לבריכה — לא מנימוס גרידא, אלא כי המים עצמם נשמרים טהורים לכולם. כשתשקעו בנוף ההרים דרך קיטורי המעיין, זכרו שאתם חלק מטקס שאנשים עורכים כאן מזה אלף שנה.",
    "tips": [
     "הזמינו רומנסקאר בדיוק ביום שהמכירה נפתחת (כ-30 יום מראש, דרך EMot Online Tickets של Odakyu). ב-Silver Week הכרטיסים נגמרים בדקות. מומלץ להזמין את הנסיעה ל-09:00 — הכי מוקדם שניתן ועדיין נינוח אחרי שמספיקים לשלוח מזוודה.",
     "הורידו את Hakone Freepass (2 יום) מ-Odakyu — מכסה רומנסקאר (הנחה), רכבת Tozan, כבלית, רכבל, שייט באגם אשי, ואוטובוסים. ל-2 אנשים, הוא מחזיר את עצמו כבר ביום הראשון. קנו אותו אונליין מראש.",
     "ב-Yaeikan: לבשו את היוקאטה שבחדר מיד אחרי צ'ק-אין ולכו לאמבט הפרטי (kashikiriburo) — האמבטיות הפרטיות עשויות לדרוש הזמנה מראש עם הקבלה. שאלו ברגע שמגיעים. ב-Silver Week כולם רוצים את אותה השעה."
    ]
   },
   {
    "date": "2026-09-23",
    "dow": "Wed",
    "city": "Magome",
    "title": "🎂 יום ההולדת ה-40 — מגומה (עמק קיסו)",
    "summary": "מסע מהאקונה לעמק קיסו, ערב בעיירת אֶדו מגומה, וארוחת יום הולדת בווילה/מסעדה מקומית.",
    "hotel": "🏨 Yanagiya Iri — וילה במגומה (✓ נסגר) · מטבח, בלי ארוחות · 🎂",
    "events": [
     {
      "start": "08:00",
      "end": "09:00",
      "type": "food",
      "area": "Hakone-Yumoto",
      "title": "ארוחת בוקר וטבילה אחרונה בהאקונה",
      "desc": "ארוחת בוקר יפנית וטבילת אונסן אחרונה לפני היציאה.",
      "tips": "",
      "cost": "",
      "booking": ""
     },
     {
      "start": "09:30",
      "end": "13:20",
      "type": "transport",
      "area": "Hakone-Yumoto עד Nagoya עד Magome",
      "title": "מסע לעמק קיסו — האקונה → מגומה",
      "desc": "האקונה→אודוארה (~15 דק׳) · שינקנסן HIKARI 637 אודוארה 10:11→נגויה 11:19 (לא Nozomi — עוצר ב-Odawara) · מעבר בנגויה 41 דק׳ · Ltd.Exp SHINANO 11 נגויה 12:00→נקאטסוגאווה 12:48 · אוטובוס Kita-Ena→מגומה (~30 דק׳). ירידה נופית אל יפן הכפרית.",
      "tips": "המזוודה הראשית כבר בדרך לקיוטו — נוסעים עם תיק-לילה. בדקו מראש את שעת ה-Shinano ואת לוח אוטובוס Kita-Ena מנקאטסוגאווה — האוטובוס דליל; תנו באפר במעבר בנגויה.",
      "cost": "",
      "booking": "✓ נסגר: שינקנסן HIKARI 637 · אודוארה 10:11→נגויה 11:19 · קרון 14 מושבים 14D/14E · הזמנה 2000 · ¥18,600 || ✓ נסגר: Ltd.Exp SHINANO 11 · נגויה 12:00→נקאטסוגאווה 12:48 · מושב שמור · ¥12,585",
      "dur": "~3–3.5 שעות · 4 קטעים"
     },
     {
      "start": "13:30",
      "end": "14:15",
      "type": "food",
      "area": "Magome",
      "title": "צהריים במגומה — סובה וגוהיי-מוצ׳י",
      "desc": "סובה שינשו וגוהיי-מוצ׳י (אורז צלוי ברוטב מיסו-אגוז) — הטעם של הנקאסֶנדו. מגיעים למגומה רק ~13:20 (אחרי ה-Shinano + אוטובוס Kita-Ena), אז זו הארוחה הראשונה עם ההגעה.",
      "tips": "אכלו מיד עם ההגעה — מסעדות הצהריים במגומה נגמרות מהר בשבוע הכסף. Mikazukian (סובה) או Nakaizutuya ברחוב הראשי.",
      "cost": "כ-¥1,000–1,800 לאדם",
      "booking": ""
     },
     {
      "start": "14:15",
      "end": "15:45",
      "type": "sightseeing",
      "area": "Magome",
      "title": "מגומה — עיירת אֶדו על מדרון ההר",
      "desc": "המדרון המרוצף, גלגלי-מים ונקודות תצפית על עמק Ena. אווירת אֶדו משומרת.",
      "tips": "",
      "cost": "חינם",
      "booking": "",
      "highlight": true
     },
     {
      "start": "16:30",
      "end": "17:00",
      "type": "checkin",
      "area": "Magome",
      "title": "צ׳ק-אין בווילה Yanagiya Iri",
      "desc": "וילה עם מטבח וטאטמי בלב מגומה (בלי ארוחות).",
      "tips": "",
      "cost": "¥53,600 · נסגר",
      "booking": ""
     },
     {
      "start": "19:45",
      "end": "21:00",
      "type": "sightseeing",
      "area": "Magome",
      "title": "מגומה בין-הערביים",
      "desc": "כשתיירי-היום עוזבים, המדרון לאור פנסים נרגע — רגע יפה.",
      "tips": "",
      "cost": "חינם",
      "booking": ""
     },
     {
      "start": "17:30",
      "end": "19:30",
      "type": "birthday",
      "area": "Magome",
      "title": "🎂 ארוחת יום ההולדת ה-40",
      "desc": "הווילה בלי ארוחות — הזמינו מראש שולחן ב-Haginoya (הפונדק היחיד במגומה שמגיש ערב, ~17:30, סגירה ~20:00), או ארוחה חגיגית במטבח הווילה עם sake מקומי. ציינו יום הולדת 40 — לפעמים מפתיעים במחווה.",
      "tips": "להזמין מסעדה מראש, או לקנות מצרכים + sake בנקאטסוגאווה/מגומה.",
      "cost": "לפי הבחירה",
      "booking": "Haginoya — להזמין מראש (0573-69-2738)",
      "highlight": true
     },
     {
      "start": "15:45",
      "end": "16:30",
      "type": "shopping",
      "area": "Magome",
      "title": "קניית sake וחטיפים לחגיגה",
      "desc": "⚠️ חנויות מגומה סוגרות ~17:00 — לכן הקניות לפני הצ׳ק-אין: sake מקומי (קיסו), ממתקים (gohei-mochi) ואולי עוגה קטנה לחגיגה בווילה."
     }
    ],
    "birthday": true,
    "cultural": "לאורך שביל הנקאסנדו — אחד מחמשת הדרכים הגדולות של תקופת אֶדו שחיבר את אדו (טוקיו) לקיוטו — פזורים אלפי פסלוני ג'יזו קטנים, עטופי בדים אדומים. ג'יזו הוא בודהיסטווה שוויתר על כניסתו לנירוונה כדי להישאר בעולם ולהגן על הנוסעים, הילדים, וכל מי שנמצא בין שני עולמות. בתקופת אֶדו, עוברי אורח בשביל השוממי השאירו בפניו אבן קטנה כתודה על כך שהגיעו בשלום — מנהג שנמשך עד היום. כשתלכו ברחוב הסלול של מגומה ותראו פסל ג'יזו בצדו, זכרו שאתם צועדים על אותה האדמה שדרכה עליה סמוראים, סוחרים ומשוררים במשך מאות שנים.",
    "tips": [
     "מסעדות הצהריים במגומה נגמרות מהר בשבוע הכסף — יש לאכול מיד עם הגעה (לפני 13:00 אם אפשר). תעדפו Mikazukian (סובה) או Nakaizutuya שניהם ברחוב הראשי.",
     "לארוחת יום ההולדת: להזמין טלפונית את Haginoya (טל' 0573-69-2738) עוד לפני הנסיעה — חובה הזמנה מראש, ולפעמים נגמר למרות הזמנה בשיא. ציינו שזה יום הולדת 40 — לפעמים מפתיעים עם מחווה קטנה.",
     "לווילה Yanagiya Iri: בדקו מראש עם המארח אם אפשר להשאיר ב-check-in מוקדם (drop bag before 16:30) — מאפשר לבוא בידיים חופשיות לסיור."
    ]
   },
   {
    "date": "2026-09-24",
    "dow": "Thu",
    "city": "Tsumago",
    "title": "עמק קיסו — הליכת הנקאסֶנדו וצומאגו",
    "summary": "הליכת הנקאסֶנדו מגומה→צומאגו, ערב קסום בכפר אֶדו, ולינה בווילה בנאגיסו.",
    "hotel": "🏨 AKARI — וילה בנאגיסו (✓ נסגר · ~10 דק׳ מצומאגו) · מטבח, בלי ארוחות",
    "events": [
     {
      "start": "08:00",
      "end": "09:00",
      "type": "food",
      "area": "Magome",
      "title": "ארוחת בוקר בווילה במגומה",
      "desc": "קפה וארוחה קלה במטבח הווילה לפני היציאה לשביל.",
      "tips": "",
      "cost": "",
      "booking": ""
     },
     {
      "start": "09:00",
      "end": "12:30",
      "type": "experience",
      "area": "Nakasendo Trail (Magome->Tsumago)",
      "title": "הליכת הנקאסֶנדו — מגומה → צומאגו",
      "desc": "~8 ק\"מ בשביל אֶדו עתיק דרך יער, מפלים ובית-תה.",
      "tips": "מסרו את תיק-הלילה במגומה עד ~11:30 → מחכה בצומאגו.",
      "cost": "חינם",
      "booking": "",
      "highlight": true
     },
     {
      "start": "12:30",
      "end": "14:00",
      "type": "food",
      "area": "Tsumago",
      "title": "צהריים בצומאגו — סובה",
      "desc": "סובה כוסמת הרים אחרי ההליכה.",
      "tips": "",
      "cost": "כ-¥1,200–2,000 לאדם",
      "booking": ""
     },
     {
      "start": "14:00",
      "end": "16:00",
      "type": "sightseeing",
      "area": "Tsumago",
      "title": "צומאגו — הרחוב, המפלים והסמטאות",
      "desc": "24.9 הוא החמישי הרביעי בחודש → מוזיאון וואקי-הונג׳ין ומוזיאון נאגיסו סגורים. אבל הכפר עצמו, אבני המדרכה ומפלי Odaki/Medaki פתוחים תמיד וחינם — יום של אוויר פתוח.",
      "tips": "אספו את תיק-הלילה במרכז המידע של צומאגו.",
      "cost": "חינם",
      "booking": "",
      "highlight": true
     },
     {
      "start": "16:00",
      "end": "16:45",
      "type": "sightseeing",
      "area": "Tsumago",
      "title": "צומאגו בשעת בין-הערביים",
      "desc": "כשתיירי-היום עוזבים, הכפר נרגע לגמרי — הרגע הכי קסום, לאור פנסים.",
      "tips": "",
      "cost": "חינם",
      "booking": ""
     },
     {
      "start": "17:30",
      "end": "18:15",
      "type": "checkin",
      "area": "Nagiso",
      "title": "אוטובוס לנאגיסו + צ׳ק-אין ב-AKARI",
      "desc": "~10 דק׳ מצומאגו לנאגיסו; וילה עם מטבח וטאטמי (בלי ארוחות).",
      "tips": "",
      "cost": "¥44,000 · נסגר",
      "booking": ""
     },
     {
      "start": "19:00",
      "end": "20:30",
      "type": "food",
      "area": "Nagiso",
      "title": "ארוחת ערב בנאגיסו",
      "desc": "הווילה בלי ארוחות ונאגיסו כמעט בלי מסעדות ערב — קנו bento/מצרכים בצומאגו או בסופר ליד תחנת נאגיסו לפני האוטובוס האחרון, לארוחה נינוחה בווילה.",
      "tips": "לבדוק שעות מסעדה מראש (כפר קטן).",
      "cost": "לפי הבחירה",
      "booking": ""
     }
    ],
    "logistics": {
     "he": "בבוקר: מסרו את תיק-הלילה במרכז המידע במגומה עד ~11:30 להעברה לצומאגו (¥1,000/תיק). אספו בצומאגו לפני ההמשך לנאגיסו (10 דק׳).",
     "es": "A la mañana: dejen el bolso en la oficina de turismo de Magome antes de las ~11:30 para enviarlo a Tsumago (¥1.000/bolso). Retírenlo en Tsumago antes de seguir a Nagiso (10 min)."
    },
    "cultural": "הנקאסֶנדו — 'הדרך המרכזית דרך ההרים' — היה אחד משני כבישי-המלך הגדולים של תקופת אֶדו, שחיבר אֶדו (טוקיו) עם קיוטו דרך הרים וגאיות. לאורך הדרך ניצבו עמדות-דואר (שוקו), ובכל אחת מהן בלטו שני מוסדות: ה-הוֹנְג'ין — בית המלון הרשמי לדאימיו ושליחים, שמרכיביו היו חדר פורמלי, גן ושיתוף-כבוד; וה-וואקי-הוֹנג'ין — אכסנייה משנית שפתחה את שעריה לסוחרים אמידים ולנוסעים בעלי-מעמד. בצומאגו ניתן לראות את שלושת הבניינים מהתקופה המקורית, דבר נדיר ביותר — רוב שוקות אחרות נשרפו או נהרסו. הנהר הקטן, גדרות הבמבוק, ואבני המדרכה שנשחקו בידי מיליוני צועדים לאורך מאות שנים — כולם עדים שקטים לכלל יפני עמוק: מה שנטפל בזהירות ובאהבה אינו בלה אלא מקבל עוד שכבת נשמה.",
    "tips": [
     "ה-Wakihonjin Okuya ומוזיאון ההיסטוריה של נאגיסו סגורים בכל יום חמישי ה-2 וה-4 של החודש — ה-24.9 הוא בדיוק יום חמישי ה-4 של ספטמבר. אל תסמכו על הכניסה פנימה; הכפר עצמו וסמטאות האבן תמיד פתוחים וחינמיים.",
     "מסרו את התיקים במרכז המידע במגומה עד ~11:30 (הפתיחה 08:30, המסירה לצומאגו עד 13:00). איסוף בצומאגו בין 13:00–17:00 — אל תחמיצו את חלון האיסוף אחרת תישאו את התיקים על גב.",
     "ארוחת הערב בנאגיסו היא נקודה עיוורת: העיירה קטנה מאוד ואין מסעדות ערב ביתיות שמובטח שיהיו פתוחות. האפשרות הבטוחה ביותר היא ארוחת צהריים/מוקדמת-ערב בצומאגו עצמה (Kongoya — סובה + גוהיי-מוצ'י בבית עץ עתיק), ורכישת מצרכים בסופרמרקט ליד תחנת נאגיסו לארוחה קלה בווילה AKARI."
    ]
   },
   {
    "date": "2026-09-25",
    "dow": "Fri",
    "city": "Kyoto",
    "title": "מנאגיסו לקיוטו: רכבת הבוקר ויום קיוטו מלא",
    "summary": "יציאה מוקדמת מנאגיסו ברכבות שסגרנו (08:09) — מגיעים לקיוטו כבר ב-10:15, יום שלם בעיר הגיישות. הערב: פנסי גיון ושדרות פונטוצ'ו שמחממות את הלב.",
    "hotel": "🏨 Candeo Hotels Kyoto Karasuma Rokkaku (✓ נסגר · 25→28) · מרכז קיוטו, 4★",
    "events": [
     {
      "start": "07:00",
      "end": "07:55",
      "type": "food",
      "area": "Nagiso",
      "title": "ארוחת בוקר מוקדמת בווילה ויציאה לתחנת נאגיסו",
      "desc": "מתעוררים בווילה AKARI בנאגיסו — ארוחת בוקר קלה ומהירה במטבח, ואז ~10 דק׳ לתחנת נאגיסו. הרכבת שסגרנו יוצאת מוקדם (SHINANO 2 בשעה 08:09), אז אין הפעם סיבוב פרידה מצומאגו — הכפר כבר מאחורינו.",
      "tips": "ארזו הערב מראש — הבוקר קצר. ⚠️ אי אפשר לאסוף כרטיסים בתחנת נאגיסו; ודאו שהכרטיסים כבר בידיכם (נאספו מראש, למשל בנגויה ב-23.9).",
      "cost": "",
      "booking": ""
     },
     {
      "start": "08:09",
      "end": "10:15",
      "type": "transport",
      "area": "Nagiso עד Kyoto",
      "title": "✓ מסע לקיוטו: נאגיסו → קיוטו (נסגר)",
      "desc": "✓ נסגר (JR-WEST Online · הזמנה 46424) · Ltd.Exp SHINANO 2 נאגיסו 08:09→נגויה 09:18 (קרון 4, מושבים 2C+2D) · מעבר 23 דק׳ · שינקנסן NOZOMI 61 נגויה 09:41→קיוטו 10:15 (קרון 14, מושבים 19D+19E). כרטיס רציף אחד עד קיוטו, ¥19,020 לזוג. המזוודה הראשית כבר מחכה ב-Candeo מאז 23.9.",
      "tips": "⚠️ אי אפשר לאסוף כרטיסים בתחנת נאגיסו — חובה לאסוף את הנייר מראש בקופת תחנה (למשל בנגויה ב-23.9) עם כרטיס האשראי וקוד 4 ספרות. במעבר בנגויה פלטפורמות השינקנסן רחוקות — 23 דק׳ מספיקות אם לא מתמהמהים.",
      "cost": "¥19,020 לזוג (נסגר)",
      "booking": "✓ נסגר — JR-WEST Online · הזמנה 46424 · Receipt AEE0512M",
      "dur": "~2 שעות · 2 רכבות (מעבר בנגויה)"
     },
     {
      "start": "15:00",
      "end": "16:00",
      "type": "rest",
      "area": "Kyoto",
      "title": "צ׳ק-אין ורגע מנוחה במלון",
      "desc": "הצ׳ק-אין ב-Candeo נפתח ב-15:00 — נכנסים לחדר, מתרעננים ונחים קצת אחרי היום המוקדם, לפני ערב גיון.",
      "tips": "שמרו אנרגיה — הערב ארוך ויפה.",
      "cost": "חינם",
      "booking": ""
     },
     {
      "start": "16:30",
      "end": "18:30",
      "type": "sightseeing",
      "area": "Kyoto (Gion)",
      "title": "גיון ופונטוצ'ו: אלומות הפנסים",
      "desc": "שוטטו ברחובות הדייקן המרוצפים של גיון ולאורך שדרת פונטוצ'ו הצרה על גדות נהר קאמו — מקום שנוצר לרגעים זוגיים. פנסים אדומים, צלילי שמלות קימונו, ריח סאקה עולה מהדלתות הפתוחות.",
      "tips": "בין 16:30 ל-18:00 האור הכי קסום לצילום; לאחר 18:00 הפנסים נדלקים ואווירת הלילה מתחילה.",
      "cost": "חינם",
      "booking": "",
      "highlight": true
     },
     {
      "start": "18:30",
      "end": "21:00",
      "type": "food",
      "area": "Kyoto (Pontocho)",
      "title": "ארוחת ערב קיוטואית ראשונה — אובנזאי או ואגיו",
      "desc": "ברכו ברוך הבא לקיוטו עם ארוחת אובנזאי — מנות קטנות מסורתיות עונתיות שמספרות את סיפור המטבח הבודהיסטי — או בחרו ב-wagyu קיוטואי רך כחמאה עם גביע יין יפני. פונטוצ'ו מציעה מסעדות נהדרות לאורך כולה.",
      "tips": "הציצו בתפריטים שמוצגים בחלונות לפני שנכנסים — רוב המקומות עם מושבים ליד הנהר דורשים הזמנה מראש לסוף השבוע.",
      "cost": "¥4,000–9,000 לאדם",
      "booking": ""
     },
     {
      "start": "10:45",
      "end": "12:00",
      "type": "food",
      "area": "Kyoto",
      "title": "הגעה לקיוטו, השארת תיקים ב-Candeo וצהריים מוקדם",
      "desc": "מגיעים לקיוטו כבר ב-10:15 — יורדים לתחנת קיוטו, נוסעים למלון Candeo (קרסומה-רוקאקו), משאירים את תיק-הלילה בקבלה (המזוודה הראשית כבר שם מ-23.9), וצהריים קל בשכונת קרסומה/ניישיקי.",
      "tips": "הצ׳ק-אין הרשמי מ-15:00, אבל אפשר להשאיר תיקים ולצאת חופשי לעיר.",
      "cost": "¥1,000–2,500 לאדם",
      "booking": ""
     },
     {
      "start": "12:15",
      "end": "14:45",
      "type": "sightseeing",
      "area": "Kyoto",
      "title": "היכרות ראשונה עם קיוטו — קרסומה וגדות נהר קאמו",
      "desc": "היום המוקדם מעניק לכם אחר-צהריים פנוי: טיול נינוח מרכז קיוטו — סמטאות קרסומה, גדות נהר קאמו, וחנויות מאצ'ה קטנות. קצב רגוע להתאקלם בעיר לפני ערב גיון.",
      "tips": "שומרים את שוק ניישיקי ופושימי אינארי/אראשיימה למחר (26.9) — היום רק טועמים את האווירה.",
      "cost": "חינם",
      "booking": ""
     }
    ],
    "logistics": {
     "he": "אספו במלון בקיוטו את המזוודה הראשית שנשלחה מטוקיו.",
     "es": "Retiren en el hotel de Kioto la valija principal enviada desde Tokio."
    },
    "cultural": "גיון ופונטוצ'ו הן שתי מ-חמשת ה'האנאמאצ'י' — שכונות הפרחים — של קיוטו, שבהן עדיין שורדת מסורת הגיישה (הנקראת בקיוטו 'גיאיקו', ובמשמעות 'אישה של אמנות'). האוֹצ'איה — בית התה — אינו מקום לשתות תה: הוא מועדון פרטי בלעדי שבו אורח מוזמן בלבד רשאי להיכנס לשמוע שמיסן, לצפות בריקוד, ולהתענג על אובנזאי. הדלת הסגורה והמסך הבמבוקי הן לא עיצוב — הן גבול חברתי של מאות שנים. ביסוד האסתטיקה הזאת עומד מושג ה'מָה' (間) — הרֶווַח, ההפסקה, מה שאינו אמור. גיישה שזה עתה עברה מולכם ולא הסתכלה לעיניכם לא הייתה גסה — היא שמרה על ה'מא' בינה לביניכם.",
    "tips": [
     "המושבים שמורים לרכבות ספציפיות (SHINANO 2 ב-08:09 ו-NOZOMI 61 ב-09:41) — אל תפספסו את היציאה המוקדמת מנאגיסו. במעבר בנגויה יש 23 דקות: פלטפורמות ה-Shinkansen רחוקות מ-Shinano, אז נועו ישר. ⚠️ אי אפשר לאסוף כרטיסים בתחנת נאגיסו — אספו את הנייר מראש בקופת תחנה (למשל בנגויה ב-23.9) עם כרטיס האשראי וקוד 4 הספרות.",
     "המזוודה הגדולה מחכה אתכם ב-Candeo מאז 23.9 — ברגע שמגיעים, בקשו אותה מהקבלה גם לפני כניסה לחדר, ותוכלו להחליף בגדים בלובי לקראת ערב גיון.",
     "בגיון (רחוב הנאמיקוג'י): אין לצלם גיישות/מאיקות מקרוב, לחסום את דרכן, או לגעת בהן — קיים איסור עירוני פורמלי. צלמו מרחק מכובד."
    ]
   },
   {
    "date": "2026-09-26",
    "dow": "Sat",
    "city": "Kyoto",
    "title": "שחר בין הטוריי — יום 9",
    "summary": "יום שלם של קיוטו במיטבה: עלייה לפנות בוקר בין אלפי שערי הטוריי הארגמניים של פושימי אינארי, ואחר כך יערות הבמבוק ואמהות הוואבי-סאבי של אראשיימה — והכל נחתם בארוחת ערב טעימות בשוק ניישיקי.",
    "hotel": "🏨 Candeo Hotels Kyoto Karasuma Rokkaku (✓ נסגר · 25→28) · מרכז קיוטו, 4★",
    "events": [
     {
      "start": "06:45",
      "end": "09:00",
      "type": "sightseeing",
      "area": "Fushimi Inari",
      "title": "עלייה לפנות בוקר — פושימי אינארי",
      "desc": "בשעת שחר, לפני כל תייר, אתם מטפסים בין אלפי שערי טוריי ורמיליון על הר אינארי. האור המוזהב חודר בין הקשתות הצפופות ויוצר מנהרת אש של ממש. זו אחת החוויות הרומנטיות והסוריאליסטיות ביותר שיפן מציעה לזוג.",
      "tips": "הגיעו בדיוק לפני הזריחה — חצי שעה בלבד אחריה מתחילים הקבוצות לזרום. נעלו ספורט נוחות; הנתיב המלא לפסגה 4 ק\"מ.",
      "cost": "חינם",
      "booking": "",
      "highlight": true
     },
     {
      "start": "09:30",
      "end": "10:15",
      "type": "food",
      "area": "Fushimi",
      "title": "ארוחת בוקר ליד התחנה — פושימי",
      "desc": "בתי קפה ומסעדות קטנות סמוך לתחנת פושימי אינארי מציעות אונימוסובי, טוסט יפני קלאסי או קרואסון מאפייה. נוח לעצור לפני הרכבת לאראשיימה.",
      "tips": "חפשו את Vermilion Coffee הקטן ממש ליד שער המקדש — לאטה שומשום שחור + מאפה שמגיש אווירה מקומית אמיתית.",
      "cost": "¥600–1,200 לאדם",
      "booking": ""
     },
     {
      "start": "11:15",
      "end": "13:15",
      "type": "nature",
      "area": "Arashiyama",
      "title": "חורשת הבמבוק וגן טנריו-ג'י",
      "desc": "חורשת הבמבוק של אראשיימה היא אחד הנופים האיקוניים של יפן — גבעולים ענקיים מתנדנדים בשמיים ומפיקים רחש מרגיע ומסתורי. מיד לאחר מכן, גן הזן של מקדש טנריו-ג'י (UNESCO) פורש שלווה מוחלטת עם אגם בשיקוף ההרים.",
      "tips": "⚠️ המעבר מפושימי לאראשיימה חוצה את כל קיוטו — ~50–60 דק' (JR דרך תחנת קיוטו). צאו מפושימי מיד אחרי ארוחת הבוקר. הכנסו לגן טנריו-ג'י ישר אחרי הבמבוק — המנות המשולבות הכי כדאיות.",
      "cost": "¥500–1,000 לאדם (גן בלבד)",
      "booking": "",
      "highlight": true
     },
     {
      "start": "13:15",
      "end": "14:30",
      "type": "food",
      "area": "Arashiyama",
      "title": "צהריים לצד נהר הוזו — יודופו או אודון קיוטואי",
      "desc": "מסעדות לאורך גדת נהר הוזו מגישות יודופו (טופו ברוטב קומבו עדין) — המנה הקיוטואית הגדולה — ואודון ביתי רחב ונוח. ישיבה עם נוף לנהר ולהרים הירוקים.",
      "tips": "בקשו מקום ישיבה בחוץ אם מזג האוויר מרשה — הנוף לנהר שווה את הכול. המסעדה Hakobune ליד גשר טוגצוקיו ידועה ביודופו שלה.",
      "cost": "¥1,500–3,000 לאדם",
      "booking": ""
     },
     {
      "start": "15:00",
      "end": "16:30",
      "type": "experience",
      "area": "Arashiyama",
      "title": "רכבת הנוף סאגאנו או פארק הקופים איוואטאיאמה",
      "desc": "רכבת הנוף הרומנטית של סאגאנו חוצה את עמק הוזו (25 דקות כל כיוון) בין סלעים ויערות — חוויה איטית ומרגיעה לשניים. לחלופין, פארק הקופים על ההר מציע מפגש ידידותי עם מקאק יפניים וקיוטו פרוסה לרגליכם.",
      "tips": "לרכבת — קנו כרטיסים בבוקר באראשיימה כשתגיעו, הם נגמרים. לפארק הקופים — עלייה 20 דקות, הביאו מים.",
      "cost": "¥880–1,200 לאדם",
      "booking": "לרכבת סאגאנו: קנו כרטיסים בבוקר בתחנת טרוקו-סאגא; בעונת שיא נמכרים מהר."
     },
     {
      "start": "17:15",
      "end": "18:45",
      "type": "food",
      "area": "Kyoto (Nishiki)",
      "title": "ארוחת ערב טעימות בשוק ניישיקי",
      "desc": "\"מטבחה של קיוטו\" — רחוב מקורה ורועש של 400 שנה עם דוכנים של כבישים, טופו מעושן, דגי קיוטו, ממתקים וצלחות קטנות. זו ארוחת הערב של היום: אכלו בהליכה, מדוכן לדוכן, וצברו ארוחה שלמה — יאקיטורי, טמפורה, סשימי טרי, דאשימאקי (חביתה), ומתוק לסיום.",
      "tips": "⚠️ דוכני השוק סוגרים ~18:00 — הגיעו עד ~17:15 כדי לתפוס אותם פתוחים. אל תגיעו רעבים מדי מהצהריים. חפשו את הדוכן של Aritsugu לסכיני מטבח. את זנב הערב אפשר להמשיך בפונטוצ'ו הצמודה (2 דק' מזרחה) — יש שם מסעדות ובארים שפתוחים עד מאוחר.",
      "cost": "¥2,500–4,000 לאדם (ארוחה מטעימות)",
      "booking": ""
     },
     {
      "start": "19:00",
      "end": "20:30",
      "type": "sightseeing",
      "area": "Kyoto (Pontocho / Kamogawa)",
      "title": "ערב שקט על גדת נהר קאמו — פונטוצ'ו",
      "desc": "סגירת יום מוקדם ורגועה (התחלתם ב-06:45!): טיול לאור פנסים בסמטת פונטוצ'ו הצרה ולאורך גדות נהר קאמו, ועצירה לקינוח — מאצ'ה, גלידה, וואראבי-מוצ'י או כוס סאקה מקומית על שפת הנהר. לא ארוחה נוספת, אלא רגע זוגי שקט לפני חזרה למלון.",
      "tips": "בתחילת הסתיו עדיין פתוחות ה'קאוואיוקה' — מרפסות עץ מעל הנהר; אפשר לשבת לקינוח או משקה עם נוף. יום מחר (27.9) מתחיל מוקדם בקינקאקו-ג'י — לילה מוקדם עוזר.",
      "cost": "¥800–2,000 לזוג (קינוח/משקה)",
      "booking": ""
     }
    ],
    "cultural": "שערי הטוריי האדומים של פושימי אינארי אינם עיטור — כל אחד מהם תרומה של עסק או משפחה לאינארי אוקמי, אלת השפע, האורז והמסחר. שם התורם והתאריך חרוטים על גב כל שער, כך שאפילו בשעת השחר, כשאתם עוברים בתוך הנהר האדום-כתום אל תוך ההר, אתם בעצם צועדים דרך אלפי תפילות של בני אדם שביקשו הצלחה. שועלים — kitsune — הם שליחיו של האל: תמצאו אותם בכל פינה, לפעמים אוחזים מפתח (למחסן האורז), גלגל (לחוק הבודהיסטי) או ירקות. אם אתם רוצים לבקש משהו מאינארי, כירכרו פעמיים, מחאו כפיים פעמיים, ואז שמרו את הבקשה שקטה בלב.",
    "tips": [
     "פושימי אינארי ב-06:45: עלו לפחות עד ה-Yotsutsuji (ה-intersection הראשי, כ-30 דקות עלייה) — משם הנוף על קיוטו בעלות השחר הוא אחד הדברים הכי יפים ביפן. חייבים לקחת פנס-ראש קטן (מכרו בחנויות נוחות).",
     "רכבת סאגאנו: הזמינו כרטיסים ברגע שנפתחת המכירה — אפשר דרך האתר הרשמי או בדלפק Torokko Saga (מגיעים 30 דק' לפני). בחרו צד שמאל של הרכבת (ישיבה מצד נהר הוזו) לנוף הטוב ביותר.",
     "שוק ניישיקי: הדוכנים הכי טובים הם אמצע השוק — חפשו את המלוחים (tsukemono) של Ueno ואת הדגים של Daiyasu. הביאו שטרות קטנים — רוב המוכרים לא אוהבים להחזיר עודף על 1,000¥."
    ]
   },
   {
    "date": "2026-09-27",
    "dow": "Sun",
    "city": "Kyoto",
    "title": "יום 10 — ציפוי זהב וטקס תה בקיוטו",
    "summary": "יום שלם של קיוטו בצורתה הטהורה ביותר: ביקור בביתן הזהוב עם שחר, טיול בין אבני המדרכה ההיסטוריות של הייגשימה, סדנת תה וקימונו לשניים, קורס סובה חגיגי ב-Juu-go (✓ נסגר) ליד גינקאקו-ג'י, וערב מלכותי עם מאיקו.",
    "hotel": "🏨 Candeo Hotels Kyoto Karasuma Rokkaku (✓ נסגר · 25→28) · מרכז קיוטו, 4★",
    "events": [
     {
      "start": "09:00",
      "end": "10:00",
      "type": "sightseeing",
      "area": "Kyoto (Northwest)",
      "title": "ביתן הזהב — קינקאקו-ג'י",
      "desc": "הגעה בדיוק עם פתיחת השערים (09:00) מאפשרת לכם ליהנות מהבבואה המושלמת של הביתן בבריכה לפני שההמון מגיע. אוויר הבוקר הצלול של ספטמבר הופך את הזהב לחי ומרטיט. הביתן הוא מסלול הליכה קצר — שעה מספיקה בנחת.",
      "tips": "הגיעו ממש ל-09:00 (שעת הפתיחה) — המוני התיירים מגיעים רק אחרי כן. צאו מיד ב-10:00: המעבר לקיומיזו הוא בקצה הנגדי של העיר (ראו טיפ המונית באירוע הבא).",
      "cost": "¥500 לאדם",
      "booking": ""
     },
     {
      "start": "10:45",
      "end": "12:30",
      "type": "sightseeing",
      "area": "Kyoto (Higashiyama)",
      "title": "קיומיזו-דרה + שבילי ניינזקה וסאנינזקה",
      "desc": "קיומיזו-דרה עומדת על גבי מדרגות עץ מרהיבות עם נוף פנורמי על קיוטו — ספטמבר מתחיל לגעת בצמחייה בגוונים חמים ראשונים. מהמקדש, גלשו במורד הסמטאות המרוצפות של ניינזקה וסאנינזקה — שמורות לפלא, עם חנויות פוריות ובתי תה ישנים. זו קיוטו כפי שחלמתם עליה.",
      "tips": "⚠️ המעבר מקינקאקו-ג'י (צפון-מערב) לקיומיזו (דרום-מזרח) חוצה את כל העיר — קחו מונית (~30–40 דק', ~¥2,500). באוטובוס זה 50–60 דק' ולא נכנס בחלון. עם יציאה ב-10:00 מקינקאקו-ג'י יש ~45 דק' באפר נוח. הדרך בין ניינזקה לסאנינזקה קצרה ומקסימה — אל תחפזו.",
      "cost": "¥400 לאדם (כניסה לקיומיזו-דרה)",
      "booking": ""
     },
     {
      "start": "12:45",
      "end": "13:30",
      "type": "food",
      "area": "Kyoto (Higashiyama)",
      "title": "ארוחת צהריים קלה",
      "desc": "ביס קליל בהיגאשיימה — הארוחה הגדולה של היום היא קורס הסובה ב-Juu-go ב-16:00, אז שמרו תיאבון. יודופו קטן, אונירי או מאפה מתוק עם מאצ'ה מספיקים בול.",
      "tips": "אל תעמיסו — קורס הסובה ב-16:00 משביע. מסעדות עם עיצוב אנגלי בולט בחלון בדרך כלל למטיילים בלבד.",
      "cost": "¥800–1,500 לאדם",
      "booking": ""
     },
     {
      "start": "13:30",
      "end": "15:30",
      "type": "experience",
      "area": "Kyoto (Gion)",
      "title": "סדנת קימונו + טקס תה — MAIKOYA גיון",
      "desc": "קימונו מלא לשניים וטקס תה אותנטי בבית תה עתיק (נכס תרבות רשום) בגיון. הוקדם לצהריים כדי להתחבר לסובה ב-16:00 בג'ודוג'י. בחרו באופציה הפרטית לזוג. הזמינו מראש — סופי שבוע נחטפים.",
      "tips": "הזמינו מראש חבילה לזוג; בדקו שהסדנה מתנהלת גם באנגלית. ⚠️ בקשו מ-MAIKOYA לסיים את החלק הפעיל עד ~15:15 כדי שיישאר זמן להתפרק מהקימונו ולצאת עד 15:30. הזמינו מונית מראש לג'ודוג'י (~15 דק', ~¥1,800) — האוטובוס לוקח 25–35 דק' ואין מרווח לכיסא הסובה ששולם מראש ב-16:00.",
      "cost": "¥5,000–10,000 לאדם",
      "booking": "mai-ko.com — MAIKOYA Gion",
      "highlight": true
     },
     {
      "start": "16:00",
      "end": "17:30",
      "type": "food",
      "area": "Kyoto (Jodoji / Ginkakuji)",
      "title": "✓ קורס סובה חגיגי — Juu-go (十五)",
      "desc": "נסגר ושולם מראש (TableCheck) · 2 אנשים · קורס סובה ב-¥3,500 לאדם (¥7,000 סה\"כ). מסעדת סובה אינטימית בג'ודוג'י, ליד גינקאקו-ג'י (הביתן הכסוף) ושביל הפילוסוף — סובה בעבודת יד באווירה שקטה. אחרי הארוחה שווה טיול קצר בשביל הפילוסוף באור שקיעה.",
      "tips": "כתובת: Kamiminamida-cho, Jodoji, Sakyo-ku, Kyoto 606-8405 · טל' 075-708-5367. הגיעו כמה דקות לפני 16:00 — ההזמנה מדויקת. תשלום כבר בוצע מראש.",
      "cost": "¥7,000 לזוג (שולם מראש ✓)",
      "booking": "TableCheck — ✓ מאושר",
      "highlight": true
     },
     {
      "start": "18:30",
      "end": "20:30",
      "type": "culture",
      "area": "Kyoto (Gion)",
      "title": "חוויית מאיקו/גייקו — אוזשיקי בגיון",
      "desc": "ערב מאיקו אמיתית — למשל ב-Gion Hatanaka: קאיסקי, ריקוד, משחקי אוזאשיקי וצילומים. כולל ארוחת ערב, אז זו ארוחת הערב של היום (הסובה ב-16:00 קלה ומרווחת מספיק). לא מתקיים כל ערב — אשרו תאריך והזמינו מראש.",
      "tips": "הזמינו הרבה מראש — חוויות אותנטיות ממש (לא \"הצגה לתיירים\") נחטפות. ניתן לבקש שמאיקו תלמד אתכם משחק מסורתי אחד מעומק.",
      "cost": "¥15,000–25,000 לאדם",
      "booking": "gionhatanaka.jp",
      "highlight": true
     }
    ],
    "cultural": "הביתן המוזהב — קינקאקו-ג'י — נבנה ב-1397 כווילת פרישה לשוגון אשיקאגה יושימיצו, אך הפך לאחר מותו למקדש זן בודהיסטי. שלוש קומותיו עטויות זהב אמיתי (עלי זהב על לכה), אך כל קומה משלבת סגנון אדריכלי אחר: האחת — ארמון שוין, השנייה — ביתן לוחמים, השלישייה — מקדש זן. זהו מיזוג מכוון בין מעמדות ועולמות — אחדות ביפנית שנקראת 'יוגו' (融合). מרכזי לא פחות: בריכת קיוקוצ'י שמשקפת את הביתן קוראת לעיקרון הזן של 'יוגן' — יופי עמוק שמתגלה רק בהצצה, לא בגילוי מלא.",
    "tips": [
     "קינקאקו-ג'י גובה רק ¥500 — אחד האתרים הזולים ביפן לשמו. שמרו את הכרטיס: הוא גוהו (ofuda) — קמע נייר מודפס עם חותמת האתר, לא סתם כרטיס.",
     "בניינזקה ובסאנינזקה בהיגאשיימה — אל תכנסו לחנויות הסמוכות לשלטי 'צילום אסור' עם קימונו שכור; הרחוב עצמו פתוח לצילום. שתייה ואכילה תוך כדי הליכה (aruki-gui) אינה מקובלת ביפן — אכלו ליד הדוכן.",
     "סדנת טקס התה: בעת שתיית המאצ'ה, סובבו את הקערה שתיים-שלוש פעמים בכיוון השעון לפני שתייה — כבוד לקדרן. אחרי שתייה, סובבו חזרה ומחו את שפתיכם מהצד שממנו שתיתם (לא להחזיר את 'פנים' הקערה אליכם)."
    ]
   },
   {
    "date": "2026-09-28",
    "dow": "Mon",
    "city": "Osaka",
    "title": "אוסקה — טירה, סומו ודוטונבורי",
    "summary": "עוברים לאוסקה — עיר של אנרגיה, ניאון ורחובות שמריחים כמו גן עדן. יום שמשלב היסטוריה מרהיבה, שכונת האנימה האגדית ולילה של אכילה בלתי נשכחת לאורך הדוטונבורי.",
    "hotel": "🏨 Onyado Nono Namba (✓ נסגר) · אונסן טבעי · אסור קעקועים גלויים במרחצאות",
    "events": [
     {
      "start": "09:00",
      "end": "10:30",
      "type": "transport",
      "area": "Kyoto עד Osaka",
      "title": "מעבר מקיוטו לאוסקה",
      "desc": "רכבת מהירה ונוחה לאוסקה — המרחק קטן והמעבר חלק. שולחים מזוודות קדימה למלון ומנצלים את שעות הבוקר ביעילות. הצ'ק-אין מחכה בסיום.",
      "tips": "שירות Forward Luggage דרך ה-Airporter או הקונסיירז' של המלון — מסירים עומס מהכתפיים ומהראש. ורייקאן ורוב מלונות ה-Business מקבלים מזוודות גם בבוקר.",
      "cost": "¥1,400–1,800 לאדם (Shinkansen/JR Express)",
      "booking": "",
      "dur": "~15–30 דק׳"
     },
     {
      "start": "10:30",
      "end": "12:00",
      "type": "sightseeing",
      "area": "Osaka (Osakajokoen)",
      "title": "טירת אוסקה — פארק ומצודה",
      "desc": "Osakajo היא אחת הטירות המרשימות ביפן, ניצבת בין חפיר ועצי דובדבן (בספטמבר — ירוק עסיס). מסתובבים בפארק הרחב ומצלמים את המגדל האיקוני על רקע השמיים. הכניסה לפארק עצמו חינמית — הפנים של הטירה אופציונלי.",
      "tips": "הפארק גדול ומוצל — נעלי ספורט חובה. אם עולים למגדל, קומה 8 מציעה נוף פנורמי יפהפה על אוסקה.",
      "cost": "חינם (פארק) / ¥600 לאדם (פנים הטירה)",
      "booking": ""
     },
     {
      "start": "12:45",
      "end": "13:45",
      "type": "food",
      "area": "Osaka (Kuromon)",
      "title": "שוק קורומון — סשימי, וואגיו ועוד",
      "desc": "Kuromon Ichiba הוא \"המטבח של אוסקה\" — שוק קמרוני ענקי עם דוכנים של פירות ים טריים, שיפודי וואגיו וצדפות צלויות על הספוט. אוכלים תוך כדי הליכה, מדפנות לדפנות, כמו שצריך להיות. האווירה חיה ומרגשת.",
      "tips": "בואו רעבים אך לא לאכול יתר — עוד לילה ארוך של אוכל לפניכם. הדוכנים מוכנים לסמן מה לא חריף.",
      "cost": "¥1,500–3,500 לאדם",
      "booking": ""
     },
     {
      "start": "14:00",
      "end": "16:30",
      "type": "anime",
      "area": "Osaka (Nipponbashi / Den Den Town)",
      "title": "דן דן טאון — גן עדן לאוהבי אנימה וגיימינג",
      "desc": "Nipponbashi הוא הגרסה של אוסקה לאקיהאברה — רחובות צפופים עם חנויות פיגורות, מנגה, רטרו-גיימינג, קוספליי ואלקטרוניקה משומשת מהחלומות. הזוג יכול להיפרד לשעה ולהתכנס מחדש עם שלל. יש כאן ממכר אמיתי.",
      "tips": "Super Potato ו-Mandarake הן עצירות חובה לאוהבי רטרו. אם מחפשים פיגורות מוגבלות — כדאי לבוא עם רשימה ולא רק לסייר.",
      "cost": "חינם (כניסה) / קניות לפי מצב הארנק",
      "booking": ""
     },
     {
      "start": "17:00",
      "end": "20:00",
      "type": "experience",
      "area": "Osaka (Namba)",
      "title": "🥋 מופע סומו — Sumo Hall Hirakuza",
      "desc": "פתיחת דלתות 17:00, בנטו וישיבה סביב הדוהיו; המופע עצמו ~18:00–20:00. הזמנתם מראש — בקשו שורה ראשונה. 10 דק׳ הליכה מדן דן טאון.",
      "tips": "להגיע ~15 דק׳ לפני. אחרי המופע — ישר לדוטונבורי.",
      "cost": "✓ שולם (₪537.90 לזוג)",
      "booking": "✓ נסגר — הזמנה PFB554612",
      "highlight": true
     },
     {
      "start": "20:15",
      "end": "23:00",
      "type": "food",
      "area": "Osaka (Dotonbori)",
      "title": "לילה אוסקאי — דוטונבורי ונמבה מוארים",
      "desc": "הדוטונבורי בלילה הוא אחד מהמחזות הכי אייקוניים ביפן: שלטי ניאון ענקיים, ריח של טאקויאקי מכל פינה, ופסל ה-Glico הרץ המאיר את התעלה. עוברים דוכן דוכן — טאקויאקי (כדורי תמנון), קושיקצו (שיפודים מטוגנים), אוקונומיאקי (פנקייק ירקות-בשר) ובירה קרה. לילה שלם של חגיגה לשניים.",
      "tips": "חוק הקושיקצו: אסור לטבול שוב שיפוד שנגסתם בו — מגישים לכם רוטב נפרד. קריסטאל נגיו היא שרשרת מקומית מצוינת לקושיקצו בלי תור.",
      "cost": "¥3,000–6,000 לאדם",
      "booking": "",
      "highlight": true
     }
    ],
    "logistics": {
     "he": "שלחו את המזוודה מ-Candeo כבר בערב 27.9 (takkyubin) כדי שתגיע ל-Onyado Nono ב-28.9 אחה״צ. אם שולחים בבוקר ה-28 — תגיע רק ב-29.9, אז קחו תיק-לילה ללילה הראשון.",
     "es": "Despachen la valija desde Candeo ya la noche del 27/9 (takkyubin) para que llegue a Onyado Nono el 28/9 a la tarde. Si la mandan la mañana del 28, llega recién el 29 — lleven un bolso de una noche para la primera noche."
    },
    "cultural": "הסומו הוא לא רק ספורט — הוא טקס שינטואיסטי מלא. לפני כל מאבק, המתאבקים מפזרים מלח על הדוהיו (טבעת הקרב) כדי לטהר אותו מרוחות רעות; ההתרוממות הגבוהה של הרגל ושמיעת הרעם על הקרקע נועדו לגרש שדים. המחוות, הזריקת המלח, האיטיות — הכל נגזר מ-1,500 שנה של ריטואל בפני האלים. כשתגיעו ל-Hirakuza, הביטו בגלימות המתאבקים (מאוואשי) ובהבעות הפנים הנוקשות: זו לא תנוחת גאווה, אלא מצב של ריכוז דתי הנקרא ״האקי״ — נוכחות שלמה, גוף ונשמה, ברגע לפני המגע.",
    "tips": [
     "טירת אוסקה ביום שני — גן Nishinomaru סגור, אך מגדל הטירה עצמו פתוח 9:00-17:00 (כניסה אחרונה 16:30). הצילום הקלאסי של הטירה מבחוץ תמיד זמין — כוונו לגשר Gokuraku-bashi בבוקר מוקדם לאור הטוב.",
     "Hirakuza — הזמינו מראש! המופע ב-17:00 (פתיחת דלתות) + 18:00 (תחילת מופע) כולל בנטו וישיבה מסביב לדוהיו. בקשו ישיבה בשורה הראשונה — קרוב יותר למתאבקים ולחוויה.",
     "מהלן דן טאון ל-Namba Parks (Hirakuza) יש כ-10-12 דקות הליכה מזרחה דרך רחוב Sennichimae — נוחה ואין צורך בתחבורה. צאו מדן דן טאון ב-16:40 להגיע ברווח."
    ]
   },
   {
    "date": "2026-09-29",
    "dow": "Tue",
    "city": "Osaka",
    "title": "צבאים, בודהה ענק, ולילה קשת",
    "summary": "יום טיול יומי לנארה — מפגש עם צבאים מקודשים ובודהה ענק — ובערב סיור אוכל לילי בשינסקאי (✓ נסגר) לפני חגיגת לילה גאה בדויאמה-צ'ו.",
    "hotel": "🏨 Onyado Nono Namba (✓ נסגר) · אונסן טבעי · אסור קעקועים גלויים במרחצאות",
    "events": [
     {
      "start": "08:15",
      "end": "09:15",
      "type": "transport",
      "area": "Osaka עד Nara",
      "title": "נסיעה לנארה",
      "desc": "מסע נוח ברכבת מאוסקה ישירות לנארה — כ-45 דקות בקינטטסו או JR. הבוקר רענן ויפה, מושלם לצאת בשעה טובה.",
      "tips": "קחו את קינטטסו מ-Namba — מהיר יותר ונוח יותר מ-JR. שמרו את כרטיסי ה-JR Pass ל-JR בלבד.",
      "cost": "¥1,000–1,200 לאדם",
      "booking": "",
      "dur": "~45 דק׳"
     },
     {
      "start": "09:15",
      "end": "13:00",
      "type": "sightseeing",
      "area": "Nara (Nara Park)",
      "title": "פארק נארה ובודהה הגדול של Todai-ji",
      "desc": "אלפי צבאים חופשיים מסתובבים בפארק ומשתחווים בפניכם — ניסים קטנים של טבע ותרבות. בתוך מקדש Todai-ji מחכה אחד הפסלים המרשימים בעולם: בודהה ברונזה ענק בן 15 מטר ששולט בחלל העצום. רגע של יופי ורוממות שייזכר לאורך חיים.",
      "tips": "קנו בצ'יקות (עוגיות צבי) מהדוכנים — חוויית הסינה עם הצבאים שווה כל ין. הגיעו לטודאי-ג'י עד 10:00 לפני עומס הקבוצות הגדולות.",
      "cost": "¥600 לאדם (כניסה לטודאי-ג'י) + ¥200 לעוגיות",
      "booking": "",
      "highlight": true
     },
     {
      "start": "13:00",
      "end": "14:00",
      "type": "food",
      "area": "Nara (Naramachi)",
      "title": "ארוחת צהריים בנאראמאצ'י",
      "desc": "Naramachi היא שכונת סוחרים עתיקה עם מסעדות קטנות ומסורתיות. חפשו kakinoha-zushi — סושי עלוי בעלי אדר, מיוחדות המקום — או קיר-טופו (豆腐) ברמה שלא תמצאו בשום מקום אחר.",
      "tips": "המסעדות הטובות קטנות ומלאות — אל תחכו אחרי 13:00 להיכנס. רחוב Higashi-muki Shotengai הוא נקודת פתיחה טובה.",
      "cost": "¥1,200–2,500 לאדם",
      "booking": ""
     },
     {
      "start": "14:00",
      "end": "15:30",
      "type": "sightseeing",
      "area": "Nara (Naramachi)",
      "title": "טיול בסמטאות נאראמאצ'י",
      "desc": "מוזיאון נאראמאצ׳י סגור בשלישי — היום הוא יום של סמטאות: מקדש גנגו-ג׳י, מוזיאון צעצועי הקאראקורי (פתוח) ובתי הסוחרים העתיקים.",
      "tips": "חפשו את ה-Naramachi Koshi-no-ie (בית מסורתי פתוח לציבור, כניסה חינם) לצצייה לחיי הסוחרים של פעם.",
      "cost": "חינם (קניות לפי רצון)",
      "booking": ""
     },
     {
      "start": "15:45",
      "end": "17:00",
      "type": "transport",
      "area": "Nara עד Osaka (Shinsekai)",
      "title": "חזרה לאוסקה + רענון קצר",
      "desc": "נסיעה חזרה מנארה לאוסקה (~45 דק') ורענון קצר לפני סיור האוכל. כוונו לתחנת Dobutsuen-mae (שינסקאי) — נקודת המפגש של הסיור.",
      "tips": "מ-Namba לשינסקאי ~10 דק' (קו מידוסוג'י ל-Dobutsuen-mae). הגיעו לנקודת המפגש 10 דק' לפני 17:30.",
      "cost": "¥1,000–1,200 לאדם (נסיעה חזרה)",
      "booking": ""
     },
     {
      "start": "17:30",
      "end": "20:30",
      "type": "food",
      "area": "Osaka (Shinsekai)",
      "title": "✓ סיור אוכל לילי בשינסקאי — עם מדריך מקומי",
      "desc": "✓ נסגר · 29.9 בשעה 17:30 · 2 אנשים · סיור בן ~3 שעות. מסלול בסמטאות האחוריות של שינסקאי — 5 מסעדות נסתרות ו-~10 מנות, ליד מגדל Tsutenkaku ופסל Billiken. נקודת מפגש: תחנת Dobutsuen-mae; הסיור מסתיים בדוטונבורי. זו ארוחת הערב של היום — בואו רעבים!",
      "tips": "מפגש ב-Dobutsuen-mae (בדקו את היציאה המדויקת בשובר Klook — בדרך כלל יציאה 1 / ליד Mega Donki). המדריך מחזיק שלט. סיום בדוטונבורי — נוח להמשך ללילה.",
      "cost": "✓ שולם · 2 אנשים",
      "booking": "✓ נסגר — Klook · Osaka Shinsekai Night Food Tour",
      "highlight": true
     },
     {
      "start": "21:00",
      "end": "23:00",
      "type": "nightlife",
      "area": "Osaka (Doyama-cho)",
      "title": "לילה גאה בדויאמה-צ'ו — FrenZy ו-Grand Slam",
      "desc": "Doyama-cho הוא הרובע הגאה המרכזי של אוסקה — בניין ורחובות צפופים בברים ידידותיים, כולם קטנים ואינטימיים. FrenZy ידוע באנרגיה שלו ובאירוחים ועל מגרש כולל, Grand Slam הוא מקלט קלאסי לגברים עם וייב נינוח. ביום הזה — חגגו בגאון ובאהבה.",
      "tips": "דויאמה-צ'ו מתחיל להתעורר אחרי 21:00 — אל תגיעו מוקדם מדי. רוב הברים גובים דמי כניסה קטנים (¥500–1,000) הכוללים משקה ראשון.",
      "cost": "¥2,000–5,000 לאדם (כניסות + שתייה)",
      "booking": "",
      "highlight": true
     }
    ],
    "cultural": "בפארק נארה הצבאים אינם קישוט — הם חיות קדושות (神鹿, שינרוקו) של אל המקדש קאסוגה טאישה, שאלת האל פוצ'יגאמי מסוניגוו על גבי אייל לבן בבואו לנארה לפני 1,300 שנה. כל צבי המסתובב בפארק נחשב שליחו של האל, ולכן הריגת צבי בנארה הייתה עוון שבמשך מאות שנים נענש במוות. גם כיום הצבאים נהנים ממעמד מוגן רשמי, אך הקשר הטקסי נשמר: פעמוני קאסוגה נשמעים עם שחר כ'קריאה' לאספות האל, ובטקס Shika-no-Tsunokiri הסתווי גוזמות קרני הצבאים בטקס שמצרף את הקהל כעדים לחוזה בין עולם האדם לעולם הקדוש.",
    "tips": [
     "הכניסה לאולם הבודהה הגדול (דאיבוצודן) עולה ¥800 לאדם ומשלמים במזומן בלבד בקופה. קנו קומבו ¥1,200 (אולם + מוזיאון) אם מעניין אתכם גם המוזיאון שממול — שווה את הכסף.",
     "קחו את קטארה Kintetsu מנמבה ישירות לנארה (36 דקות, ¥680) — הרבה יותר קרוב ומהיר מ-JR ויוצא ממש ליד המלון. אין כיסוי ל-JR Pass בקינטטסו, אבל הפרש המחיר זניח.",
     "דויאמה-צ'ו נמצא ברובע קיטה (אומדה) ולא בנמבה — קחו את הרכבת התחתית קו מידוסוג'י צפונה (7 דקות, ¥240) מתחנת נמבה לאומדה, ואז הלוך רגלי 5 דקות. FrenZy פותח ב-20:00 בלילות שלישי, ו-Grand Slam פותח ב-21:00."
    ]
   },
   {
    "date": "2026-09-30",
    "dow": "Wed",
    "city": "Tokyo",
    "title": "יום 13 — שוב טוקיו: יאנאקה הרומנטית",
    "summary": "נפרדים מאוסקה בארוחת בוקר אחרונה ויוצאים בשינקנסן לטוקיו. אחר הצהריים — שוטטות רכה בין חתולים ומקדשים ביאנאקה, בערב צלילה אל האמנות הדיגיטלית של teamLab Planets בטויוסו, ואז ארוחת ערב מפנקת לציון ה-40.",
    "hotel": "🏨 Tokyu Stay Shinjuku (✓ נסגר · 30→2.10) · שינג'וקו · מכונת כביסה בחדר",
    "events": [
     {
      "start": "08:30",
      "end": "09:30",
      "type": "food",
      "area": "Osaka",
      "title": "ארוחת בוקר אחרונה באוסקה",
      "desc": "צאו לסיבוב אחרון בשכונה לפני עזיבה — קפה יפני, טוסט עם חמאה ורוטב סויה, או takoyaki מוקדם לדרך. תנו לאוסקה לסגור בטוב.",
      "tips": "⚠️ הרכבת יוצאת מ-Shin-Osaka ב-10:39 — סיימו את הבוקר בנחת עד 09:30 ואל תגררו את הארוחה.",
      "cost": "¥800–1,500 לאדם",
      "booking": ""
     },
     {
      "start": "09:30",
      "end": "10:25",
      "type": "transport",
      "area": "Namba עד Shin-Osaka",
      "title": "צ׳ק-אאוט ומעבר לתחנת Shin-Osaka",
      "desc": "צ׳ק-אאוט מ-Onyado Nono עם המזוודות, ואז קו Midosuji מ-Namba ל-Shin-Osaka (~12 דק׳, ישיר). מגיעים לתחנה ~10:25 — מספיק זמן לבנטו לרכבת ולמצוא את רציף הטוקאידו.",
      "tips": "קנו אקיבן (בנטו של רכבת) ומשקה בתחנה לפני העלייה — יש דוכנים מצוינים בקומת השערים של השינקנסן. עם מזוודות, קו Midosuji בשעה הזאת סביר.",
      "cost": "¥290 לאדם (Midosuji, IC)",
      "booking": "",
      "dur": "~55 דק׳ כולל באפר"
     },
     {
      "start": "10:39",
      "end": "13:06",
      "type": "transport",
      "area": "Shin-Osaka עד Tokyo",
      "title": "✓ NOZOMI 358 לטוקיו (נסגר)",
      "desc": "✓ נסגר · NOZOMI 358 (N700, 16 קרונות) · שין-אוסקה 10:39 → טוקיו 13:06 · קרון 9, מושבים 1C+1D · Seat with Oversized Baggage Area (מקום מובטח למזוודה גדולה) · תעריף Hayatoku-3 · הזמנה 2002 · ¥33,120 לזוג. 2.5 שעות של מעבר חלק בין שתי מטרופולינים.",
      "tips": "⚠️ 1C ו-1D הם שני מושבי מעבר משני צידי המעבר (טור 3+2) — לא צמודים. 🗻 בכיוון אוסקה→טוקיו פוג'י נראה בצד שמאל (טור A/B/C, כלומר הצד של 1C) בערך 11:45, אחרי Shin-Fuji. עלייה: סריקת QR-Ticket, איסוף כרטיס במכונה, או שיוך כרטיס IC למושבים ואז מקרבים את הסויקה בשער.",
      "cost": "✓ ¥33,120 לזוג (שולם · הזמנה 2002)",
      "booking": "✓ נסגר — smartEX · NOZOMI 358 · קרון 9, מושבים 1C+1D · הזמנה 2002",
      "dur": "~2:27 שעות"
     },
     {
      "start": "14:45",
      "end": "16:15",
      "type": "sightseeing",
      "area": "Yanaka (Nippori)",
      "title": "יאנאקה — שכונה בזמן עצור",
      "desc": "Yanaka היא אחת השכונות הטוקיואיות המעטות שניצלו מהפצצות ומהרס הפיתוח — קמנו Yanaka Ginza הרטרו, מקדשים שקטים וחתולים שמסתובבים כאילו העיר שלהם. הלכו לאט, צלמו, ונגעו במרקם האמיתי של טוקיו.",
      "tips": "כניסה לבית הקברות Yanaka Cemetery חינם ושווה — עצים ענקיים, קבר Tokugawa ושקט מוחלט.",
      "cost": "חינם (קניות לפי בחירה)",
      "booking": "",
      "highlight": true
     },
     {
      "start": "18:30",
      "end": "20:00",
      "type": "experience",
      "area": "Toyosu (teamLab Planets)",
      "title": "✓ teamLab Planets, Toyosu (נסגר)",
      "desc": "✓ נסגר · כניסה 18:30–19:00 · 2 מבוגרים. חווית האמנות הדיגיטלית הנסחטת ביותר ביפן — יורדים יחפים לתוך מים, שוכבים מתחת לפרחים אינסופיים, שוקעים בין אורות שמגיבים לנגיעה. הביקור ~1.5 שעות (עד ~20:00).",
      "tips": "הגיעו בחלון הכניסה 18:30–19:00 (מאוחר מזה לא נכנסים). לבשו בגדים שאפשר לגלול מעלה (רגליים וקרסוליים נרטבים). מטויוסו ~15 דק' לגינזה או ~10 דק' לצוקיג'י לארוחת הערב.",
      "cost": "¥3,200–3,600 לאדם (שולם)",
      "booking": "✓ נסגר — teamLab Planets · כניסה 18:30–19:00 · 2 מבוגרים",
      "highlight": true
     },
     {
      "start": "20:30",
      "end": "22:00",
      "type": "food",
      "area": "Tokyo (Ginza / Tsukiji)",
      "title": "ארוחת ערב חגיגית — גינזה/צוקיג'י",
      "desc": "אחרי teamLab (יציאה ~20:00) — מטויוסו ~15 דק' לגינזה (קו יוראקוצ'ו) או ~10 דק' לצוקיג'י, מסלול נקי בלי זיגזג. ערב חגיגי לציון ה-40: סושי משובח, קאיסקי או ביסטרו יפני אינטימי. טיפ: אם לא בא לכם שתי ארוחות בגינזה ברצף (ה-1.10 היא ארוחת הפרידה בגינזה) — צוקיג'י ליד המים קרובה עוד יותר ומצוינת.",
      "tips": "חפשו מקומות עם מושבים בבר המטבח — לראות את השף עובד זה חלק מהחוויה; הזמינו בהצגת עצמכם כצמד חוגג.",
      "cost": "¥5,000–9,000 לאדם",
      "booking": "",
      "highlight": true
     }
    ],
    "logistics": {
     "he": "✓ לוקחים את המזוודות בשינקנסן לטוקיו — המושבים שנסגרו (NOZOMI 358, קרון 9, 1C+1D) הם Seat with Oversized Baggage Area, כלומר מקום מובטח למזוודה גדולה מאחורי הכיסא. אין צורך ב-takkyubin (שליחה מאוסקה מגיעה רק למחרת). בטוקיו: משאירים את המזוודות ב-Tokyu Stay שינג'וקו לפני היציאה ליאנאקה.",
     "es": "✓ Llevan las valijas en el shinkansen a Tokio — los asientos reservados (NOZOMI 358, vagón 9, 1C+1D) son Seat with Oversized Baggage Area, o sea espacio garantizado para la valija grande detrás del asiento. No hace falta takkyubin (desde Osaka llegaría recién al día siguiente). En Tokio: dejan las valijas en el Tokyu Stay Shinjuku antes de salir para Yanaka."
    },
    "cultural": "יאנאקה שורדת את הדורות לא בזכות שיקום — אלא בזכות שלא נשרפה. בעוד שטוקיו האחרת נמחתה פעמיים, בהרעידת הקרקע של 1923 ובהפצצות של 1945, יאנאקה נותרה על כנה — בתי העץ, בתי-הקברות הבודהיסטים, ורחובות הסמטאות שלה שרדו. הרעיון שעומד מאחורי שמירה זו נקרא בפי היפנים 'שיטאמאצ'י' — העיר התחתונה, מקום מגורי הסוחרים, האומנים, ואנשי העם בתקופת אדו. בניגוד לחצרות הגבוהות על הגבעות, שיטאמאצ'י שמרה על אדנות אחרת: אנושית, חמה ורועשת, שבה רוח השכונה עצמה נחשבת לדבר שצריך לשמרו.",
    "tips": [
     "✓ NOZOMI 358, קרון 9, מושבים 1C+1D (הזמנה 2002). בכיוון אוסקה→טוקיו הר פוג'י נראה בצד שמאל — טור A/B/C, כלומר הצד של מושב 1C — בערך 11:45, מיד אחרי Shin-Fuji. שימו לב ש-1C ו-1D הם משני צידי המעבר, אז מי שיושב ב-1D יצטרך לחצות לצד השני לצילום. הגיעו לרציף 10 דקות לפני היציאה — הרכבות יוצאות בדייקנות של שנייה.",
     "ביאנאקה: קנו מנצ'י-קטסו (כדורי בשר מטוגנים) חמים ישר מהמאפייה ברחוב Yanaka Ginza — אוכלים עומדים תוך כדי הליכה (תכונה מקומית שמכנים אחילוי, 'אוכל הלוך'). אל תחמיצו את מדרגות Yuyake Dandan לתמונה של הרחוב מלמעלה.",
     "בשיבויה: Loft (7 קומות) ו-Tokyu Hands הם כתובת לציודי נסיעה, קוסמטיקה, וסובנירים ייחודיים לא מיוצאים. אם קניות האחרונות כוללות מוצרי ניגון/אנימה — ה-Village Vanguard בשיבויה מצויין."
    ]
   },
   {
    "date": "2026-10-01",
    "dow": "Thu",
    "city": "Tokyo",
    "title": "יום 14 — גיבלי, אור ופרידה בטוקיו",
    "summary": "יום הפרידה הגדול: בוקר של פלאים בגיבלי, אחר צהריים רגוע בקיצ'יג'וג'י ופארק אינוקאשירה עם קניות אחרונות בשיבויה, וערב חגיגי עם אומאקאסה שמסכם עשרים שנה ויום הולדת 40 עם כוסית פרידה ב-Ni-chome. טוקיו נפרדת מכם בגדול.",
    "hotel": "🏨 Tokyu Stay Shinjuku (✓ נסגר · 30→2.10) · שינג'וקו · מכונת כביסה בחדר",
    "events": [
     {
      "start": "09:30",
      "end": "12:30",
      "type": "experience",
      "area": "Tokyo (Mitaka)",
      "title": "מוזיאון גיבלי, Mitaka",
      "desc": "ממלכת הפנטזיה של Miyazaki מחכה לכם: חדרים סודיים, הרובוט הענק על הגג, סרטים קצרים בלעדיים שלא תראו בשום מקום אחר. זה לא מוזיאון — זה ביקור בתוך חלום מונים.",
      "tips": "הגיעו בדיוק בשעת הכניסה שהוזמנה — לא מאפשרים כניסה מוקדמת. קנו את חבילת הדפס-הסרט (film strip) בכניסה — מזכרת מיוחדת.",
      "cost": "¥1,000 לאדם",
      "booking": "Lawson Ticket — 10.9 10:00 שעון יפן",
      "highlight": true
     },
     {
      "start": "13:00",
      "end": "14:00",
      "type": "food",
      "area": "Tokyo (Kichijoji)",
      "title": "צהריים ב-Kichijoji ליד Inokashira Park",
      "desc": "השכונה החמודה של טוקיו מלאה בברים קטנים, אוכל רחוב ומסעדות בוטיק לאורך הפארק. נסו את כדורי הקוצ'י (kushi-katsu) ברחובות האחוריים, או שבו בבית קפה עם נוף לאגם.",
      "tips": "הרחובות הקטנים מסביב לתחנה (Harmonica Yokocho) מלאי מסעדות שוות. אל תחמיצו גלידת שומשום שחור אם פתוח.",
      "cost": "¥1,200–2,500 לאדם",
      "booking": ""
     },
     {
      "start": "15:00",
      "end": "17:30",
      "type": "shopping",
      "area": "Shibuya / Harajuku",
      "title": "קניות אחרונות — שיבויה והרג'וקו",
      "desc": "מקיצ'יג'וג'י ישר בקו Inokashira לשיבויה (~15 דק'). Takeshita Street להייפ, Omotesando לעיצוב, ו-Cat Street לגאצ'ות. זמן מושלם לציד מתנות אחרון לפני ארוחת הפרידה.",
      "tips": "Tokyu Hands ו-Loft בשיבויה, Village Vanguard ב-Harajuku — אנימה, גאדג'טים ומתנות מוזרות שלא תמצאו בשדה התעופה. שמרו מקום במזוודה.",
      "cost": "¥2,000–10,000 לאדם (לפי פיתוי)",
      "booking": ""
     },
     {
      "start": "19:00",
      "end": "21:30",
      "type": "food",
      "area": "Tokyo (Ginza)",
      "title": "ארוחת פרידה — אומאקאסה סושי או קאיסקי, Ginza",
      "desc": "הלילה האחרון מחייב הוקרה: שפים שמכינים בפניכם פיסת-דג מושלמת אחרי פיסת-דג, או ארוחת קאיסקי ששולחת אתכם בסגנון ממש יפני. Ginza היא הכתובת הנכונה לשנות את מה שחשבתם שאתם יודעים על סושי.",
      "tips": "הזמינו לפחות חודש מראש — מסעדות אומאקאסה ב-Ginza מתמלאות. בקשו ב-MailConcierge של המלון לעזור עם השפה.",
      "cost": "¥15,000–30,000 לאדם",
      "booking": "הזמינו את ארוחת הפרידה מראש — חובה",
      "highlight": true
     },
     {
      "start": "22:00",
      "end": "23:59",
      "type": "nightlife",
      "area": "Shinjuku Ni-chome",
      "title": "כוסית פרידה ב-Shinjuku Ni-chome",
      "desc": "Ni-chome — שכונת הגאווה של טוקיו — נפרדת מכם בחמימות. Campy! Bar מציע קיצ' ווקאל חוקר ואהבה ללא תנאים, ו-Eagle Tokyo Blue הוא ציר מקצועי יותר עם קהל מגוון. שתו לחיים ל-40, ליפן ולכם.",
      "tips": "Ni-chome קטנה — גם רק להסתובב ברחוב בשעת לילה מרגיש כמו חגיגה. ל-Campy! לא צריך הזמנה, פשוט הגיעו.",
      "cost": "¥800–2,000 לאדם (שתייה)",
      "booking": ""
     }
    ],
    "cultural": "מוזיאון גיבלי אינו מוזיאון קולנוע — הוא מקדש ל-*ma* (間), מושג האסתטיקה היפנית של החלל הריק, ההפסקה, הנשימה שבין הדברים. מיאזאקי עיצב אותו כך שאין נתיב קבוע: כל מבקר נודד לפי תחושתו, ומגלה פרטים שכנו לא גילה. זה לא מקרה — ב-ma, הדרך היא התוכן. גם ה-Totoro הענק שמסתיר בצל הסיבה לחייכם כל הדרך החוצה הוא דמות שורש: קמי של היער, שומר על הגבול בין עולם הילדים לעולם הרוחות. ב-1 באוקטובר, עם רוח הסתיו הראשונה שמגיעה למיטאקה, כדאי לעצור רגע ולהרגיש אותה.",
    "tips": [
     "כרטיסי גיבלי — Lawson Ticket: הגדירו התראה לשעה 9:55 JST ב-10.9.2026. פתחו את האתר מבעוד מועד, כי מקומות נגמרים לפעמים תוך 3–5 דקות. כל רכישה מוגבלת ל-4 כרטיסים, תאריך ושעה ספציפיים — בחרו חלון 09:30 לחופשה מקסימלית.",
     "teamLab Planets — הביאו בגדים שניתן לקפל את השרוולים והרגליים: חלק מהמיצגים כוללים רצפת מים עמוקה לקרסול. שמרו טלפון בכיס עמיד או כיס חזה — מרבית הבגדים מתרוממים כשמרימים ידיים.",
     "מסעדת אומאקאסה בגינזה — הזמינה לפחות 2–3 חודשים מראש דרך Tableall, byFood או Omakase.in. חפשו מסעדות עם 'English menu' או שף דובר אנגלית; ציינו בהזמנה שמדובר בארוחת פרידה — שפים יפנים אוהבים להוסיף מנה מיוחדת."
    ]
   },
   {
    "date": "2026-10-02",
    "dow": "Fri",
    "city": "Tokyo",
    "title": "יום 15 — להתראות, יפן",
    "summary": "הבוקר האחרון בטוקיו מגיע עם תיקים ארוזים ולב שמח. ארוחת בוקר מהירה, רכבת שחר ל-Narita, ועוד מבט אחד על שלטי הניאון לפני שהמטוס נושא אתכם חזרה הביתה עם 40 שנה שמחים ואגרת אהבה שלמה מיפן.",
    "hotel": "✈️ יום עזיבה — אין לינה",
    "events": [
     {
      "start": "05:45",
      "end": "06:10",
      "type": "food",
      "area": "Tokyo",
      "title": "ארוחת בוקר מהירה ואריזה אחרונה",
      "desc": "קפה חם, onigiri או לחמנייה מהקונבייניאנס הקרוב, ובדיקה אחרונה שהסוברינירים בטוחים בתוך הבגדים הלא-מקופלים. רגע שקט לפני הריצה.",
      "tips": "סדרו את הטעינה של חשבון מי Suica שנשאר — אפשר להחזיר מזומן בדלפק JR במסוף.",
      "cost": "¥600–1,200 לאדם",
      "booking": ""
     },
     {
      "start": "06:30",
      "end": "08:45",
      "type": "transport",
      "area": "Shinjuku עד Narita T1",
      "title": "N'EX לנמל Narita — הפרדה מ-Shinjuku",
      "desc": "ה-Narita Express מ-Shinjuku מגיע ל-Narita T1 בכ-90 דקות (יציאה ~06:30 → הגעה ~08:45, ~3ש15 לפני הטיסה) — ישיבות שמורות, מרווח לכבודה גדולה, ונוף עירוני שמפנה מקום לשדות. סיום שיפן ראויה לו: מסודר, בזמן, ויפה.",
      "tips": "⚠️ שריינו N'EX מוקדם — היעד ~06:30 (07:00 נותן רק ~2ש50, פחות מ-3 שעות). ה-N'EX מ-Shinjuku יוצא ~כל שעה, אז החמצה מתעכבת. גיבוי: Yamanote ל-Nippori/Ueno ואז Keisei Skyliner, או ל-Tokyo Station ואז N'EX.",
      "cost": "¥3,070 לאדם (Shinjuku→Narita T1)",
      "booking": "לשריין מושב N'EX ~06:30 מ-Shinjuku (הרגל השנייה של כרטיס ההלוך-חזור)",
      "dur": "~90 דק׳"
     },
     {
      "start": "09:00",
      "end": "12:00",
      "type": "transport",
      "area": "Narita Airport T1",
      "title": "צ'ק-אין, שופינג אחרון, ועלייה למטוס",
      "desc": "ב-Narita T1 מחכים לכם פינות Duty-Free מלאות: ויסקי יפני, קיט-קאט בטעמים, קוסמטיקה — הזדמנות לסגור כל פינה שפספסתם. אחרי ביטחון, עלייה ל-LO1080 ב-12:00 ופרידה מיפן.",
      "tips": "הקצו לפחות שעתיים לפני סגירת שערים לתהליך צ'ק-אין + ביטחון + טופסי החזר מס; בדוק תור ספציפי לטפסי מס (tax-refund counter) לפני הביטחון.",
      "cost": "חינם (קניות לפי בחירה)",
      "booking": "",
      "highlight": true
     }
    ],
    "cultural": "בתרבות היפנית, הרגע של הפרידה — oseparē (お別れ) — מלווה לעיתים קרובות בנימוס עמוק של הקשבה: הנוסעים מתחייבים במחווה קלה אפילו מחלון הרכבת, ומלווים המשיכו לנופף עד שהרכב נעלם לגמרי. במסופי האוויר היפניים נשמר עד היום מנהג דומה: צוות שדה התעופה פונה לכיוון המטוס היוצא ומנופף בשניהם הידיים — לא לנוסעים דרך החלון, אלא למטוס עצמו, כמחווה של כבוד לכלי-הרכב ולנוסעים שבתוכו. זוהי ביטוי לקוטדמה (言霊) — האמונה ש-מחוות ומילים נושאות כוח רוחני — ולמנטליות האוֹמוֹטנאשי (おもてなし): שירות שאינו מסתיים כשהלקוח עוד רואה אתכם.",
    "tips": [
     "לארוז לגמרי ב-1.10 בלילה ולהשאיר רק מה שצריך לבוקר (מברשת שיניים, טעינה). בבוקר יום עזיבה — כל דקה עולה.",
     "Check-in מקוון ב-LOT.com נפתח 24 שעות לפני ההמראה — כלומר ב-1.10 בשעה 12:00. כדאי לסמן מקומות נוחים (מסדרון, שורות אחוריות) ולהדפיס/לשמור boarding pass.",
     "ה-N'EX מ-Shinjuku אינו יוצא בכל שעה — לבדוק מראש את הרכבת הספציפית ב-JR East ולהזמין כרטיס מראש (אפשר גם עם IC card / Suica). ב-Shinjuku יש כניסה ייעודית ל-N'EX בקומת B1 — לא להתבלבל עם הרציפים הרגילים."
    ]
   }
  ],
  "guide": {
   "sections": [
    {
     "id": "japanese-food-101",
     "icon": "🍜",
     "title": "Japanese Food 101",
     "intro": "מפת הדרכים של חובבי האוכל שלכם ל-14 ימים בלתי נשכחים. Osaka היא בירת האוכל הרחוב, Kyoto מייצגת את המסורת המעודנת, Tokyo היא עיר-הכול, ו-Hakone היא חוויית ה-kaiseki המרכזית שלכם ב-onsen-ryokan. תאכלו בלי פחד.",
     "body": "יפן מתגמלת את האמיצים כמו שום מקום אחר בעולם. תוכלו לשאוב קערת ramen של ¥900 ממכונת כרטיסים בחצות הלילה, ולמחרת בלילה לפנק את עצמכם ב-omakase sushi עם לחיצת יד אינטימית, או בסעודת kaiseki של קורסים רבים. זה מפת ה**מנות שחייבים לנסות** לאורך כל המסלול, מסודרת כך שתתקדמו בהדרגה לדברים הפראיים באמת.\n\n**אסטרטגיית האכילה, עיר אחר עיר**\n- **Tokyo** — עיר-הכול: אוכל Michelin זול (16 פינות Bib Gourmand חדשות ל-2026), Edomae sushi במקום הולדתה, אולמות אוכל depachika, מציאות konbini, והספיישלים הכי מטורפים (shirako, כל מיני מוזרויות בסגנון fugu).\n- **Kyoto** — עידון מסורתי: kaiseki, tofu/yuba, matcha ו-wagashi, ועוד נשנושים מוזרים בשוק Nishiki Market.\n- **Osaka** — בירת אוכל הרחוב (\"kuidaore\" = לאכול עד שנופלים): takoyaki, okonomiyaki, kushikatsu, ובנוסף fugu.\n- **Hakone** — ארוחת ה-kaiseki של יום ההולדת ב-ryokan, וביצים שחורות שבושלו בגפרית ב-Owakudani.\n- **Nara** — הצגת הטחינה המהירה המפורסמת של mochi ברחוב, ב-Nakatanidou.\n\n**כללי הזהב של אכילה כמו מקומיים**\n- **לשאוב** ramen ו-soba בקול — זה מקרר את האטריות, מאוורר את הציר, ומסמן הנאה.\n- לאכול nigiri **בנגיסה אחת**, כשצד הדג פונה למטה אל הלשון; אל תטביעו אותו ברוטב סויה ואל תמרחו wasabi בצלחת.\n- אמרו **\"itadakimasu\"** לפני האכילה ו-**\"gochisousama\"** אחריה.\n- **לעולם לא** תוקעים מקלות אכילה זקופים בתוך אורז ולא מעבירים אוכל ממקל למקל (שניהם קשורים לטקסי אבל).\n- **אין תשר**, בשום פנים. השירות מצוין כי כך מצפים ממנו.\n\n**הסלמה לחיך האמיץ שלכם:** התחילו עם **natto** (זול, בכל ארוחת בוקר) ← **basashi** (סוס נא מיינסטרים ב-izakaya) ← **fugu** (קורס מלא אצל שף מורשה ב-Osaka) ← **shirako** (חלב דגים בעונה, סתיו — תזמון מושלם לסוף ספטמבר). Osaka היא העיר הכי טובה לדברים הפראיים; Kyoto היא לעידון.",
     "cards": [
      {
       "name": "Edomae Sushi (Omakase)",
       "sub": "Tokyo — Toyosu / Ginza / Tsukiji Outer Market",
       "desc": "nigiri לחוץ ביד על דלפק, תוך כדי צפייה ב-itamae עובד — זה פסגת תיאטרון האוכל. טיפ: ארוחת צהריים omakase זולה בהרבה מהערב אצל אותו שף. הזמינו דלפקות ברמה גבוהה דרך Pocket Concierge או אפליקציית OMAKASE חודש-חודשיים מראש."
      },
      {
       "name": "Ramen (5 סגנונות)",
       "sub": "Tokyo shoyu/tsukemen · Kyoto kotteri · tonkotsu בכל מקום",
       "desc": "זול, מהיר, ומגוון לאין קץ — נסו סגנון שונה בכל עיר. טיפ: שאיבה בקול היא הדרך הנכונה; הזמינו 'kae-dama' (אטריות נוספות, ~¥150) בחנויות tonkotsu. ל-Ichiran יש תאים יחידניים עם טופס נייר — פתיחה נוחה וללא לחץ."
      },
      {
       "name": "Takoyaki",
       "sub": "Osaka — Dotonbori (מקום הולדתו)",
       "desc": "כדורי תמנון נוזלים מבפנים, פריכים מבחוץ, מכוסים בפתיתי בוניטו רוקדים. הנשנוש הכי אייקוני ל'אחוז ולאכול תוך כדי הליכה'. טיפ: תנו להם להתקרר 30-60 שניות — המרכז הוא לבה. כדאי לנסות את Wanaka או Kukuru (ה-takoyaki 'bikkuri' עם זרוע תמנון בולטת = תמונה מנצחת)."
      },
      {
       "name": "Okonomiyaki",
       "sub": "Osaka — Dotonbori ו-Namba",
       "desc": "פנקייק מלוח עם בצל כרוב על מנגל שולחני, שטוף ברוטב מתוק, מיונז ובוניטו. טיפ: Mizuno (Michelin Bib Gourmand) הוא הבחירה של המבינים — נסו את ה-yamaimo yaki. 'Modan-yaki' מוסיף בפנים אטריות yakisoba."
      },
      {
       "name": "Kushikatsu",
       "sub": "Osaka — Shinsekai, מתחת למגדל Tsutenkaku Tower",
       "desc": "שיפודים מטוגנים של בשר, פירות ים וירקות, רטרו ואפשר להזמין ולהזמין. טיפ: כלל הקודש — אסור בתכלית האיסור לטבול פעמיים ברוטב המשותף. טבילה אחת לפני הנגיסה הראשונה; השתמשו בכרוב החינמי לאסוף עוד רוטב. Daruma הוא המייסד מ-1929."
      },
      {
       "name": "Yakitori",
       "sub": "Tokyo — Omoide Yokocho ו-Yurakucho tracks",
       "desc": "שיפודי עוף על פחמים בסמטה מוארת בפנסים = הערב הטוקיואי המושלם. חצו מעבר לירך: עור (kawa), לב (hatsu), קורקבן (zuri), סחוס (nankotsu). טיפ: בחרו 'tare' (ציפוי מתוק) או 'shio' (מלח); אמרו 'omakase' ותנו לשף לבחור."
      },
      {
       "name": "Kaiseki",
       "sub": "Kyoto (בית הרוח שלו) + ה-ryokan שלכם ב-Hakone",
       "desc": "מחרוזת קורסים קטנים עונתית ומלאכותית — הארוחה המעודנת ביותר ביפן ולב ליבה של חגיגת יום ההולדת שלכם. טיפ: ארוחת הערב ב-ryokan ב-Hakone היא kaiseki; הגיעו רעבים אחרי שהשרייה ב-onsen. ארוחת צהריים kaiseki בKyoto היא דרך זולה יותר לטעום אותו."
      },
      {
       "name": "Wagyu (A5)",
       "sub": "Kobe/Omi ליד Osaka; מוגש ב-Osaka/Kyoto/Tokyo",
       "desc": "בשר בקר עם שיוש אינטנסיבי וטעם חמאתי — בדיוק הבזבוז הנכון לגיל 40. טיפ: 100-150 גרם מספיק; teppanyaki (שף שמבשל לידכם על הגריל) הוא הכי תיאטרלי. יש הרבה A5 מעולה שאינו Kobe ועולה פחות. בקשו medium-rare."
      },
      {
       "name": "Tonkatsu",
       "sub": "Tokyo (עיר הולדתו; הרבה פינות Bib Gourmand)",
       "desc": "קציצת חזיר בציפוי panko פריך ביותר — נוחות זולה במיטבה. טיפ: טחנו את גרעיני השומשום ואז ערבבו עם הרוטב המתוק-חמצמץ. 'Hire' = פילה רזה, 'rosu' = מותן שמנמן יותר. מילוי כרוב ואורז בלי הגבלה."
      },
      {
       "name": "Matcha & Wagashi",
       "sub": "Kyoto — Uji, בתי תה ב-Gion",
       "desc": "גלידה רכה, פרפה, warabi-mochi, וטקס תה פורמלי שמשלב matcha מר עם ממתק עונתי. טיפ: אכלו את ה-wagashi לפני שתגמאו matcha — זה מאזן את המרירות. wagashi של סתיו מעוצבים כעלי מייפל וערמונים."
      },
      {
       "name": "Fugu (Pufferfish)",
       "sub": "Osaka — בירת ה-fugu (חפשו את הפנסים)",
       "desc": "הדג שרק שף מורשה יכול להכין — ה-bucket list מושלם: sashimi 'tessa' בפרוסות דקיקות כנייר, karaage, ו-'tecchiri' hot pot. טיפ: אכלו רק במסעדה מורשית בלבד. ספטמבר הוא חוץ-עונה (חורף הוא השיא), אז ודאו זמינות מראש. הנימול הקל הוא נורמלי לחלוטין."
      },
      {
       "name": "Shirako",
       "sub": "בתי izakaya ודלפקות סושי, הכי טוב ב-Tokyo",
       "desc": "חלב בקלה (שקי זרע) — קרמי, מרקם קאסטרד, עם טעם ים עמוק. הדליקטסה ה'מוזרה' בעלת המוניטין, וסוף ספטמבר הוא תחילת עונתה. טיפ: נסו אותו נא עם ponzu (עדין) או מוקפד/טמפורה קלה (כמו קאסטרד). מה שמזעזע זה המרקם, לא הטעם."
      }
     ]
    },
    {
     "id": "street-food-markets",
     "icon": "🏮",
     "title": "אוכל רחוב ושווקים",
     "intro": "דוכנים, שווקים מקורים, אולמות מזון מפוארים בבתי הכלבו, אוצרות הקונבייני, ובארי עמידה. כאן אתם שניים נודדים לאט, הידיים מלאות, ואוכלים את דרככם דרך יפן.",
     "body": "לזוג שחי בשביל אוכל רחוב — זה לב הטיול. הנה איך עובדים כל סוג של מקום אוכל, ואילו שווקים ושכונות חייבים להיות ברשימה.\n\n**השווקים הגדולים (מסלולי הטיול שלכם)**\n- **Nishiki Market, Kyoto** — בן 400 שנה, כ-100 דוכנים מקורים עם אוכל קיוטאי יוצא דופן: tako-tamago (תמנון תינוק מסוכר עם ביצת שלו בפנים), yuba טרי, שיפודים צלויים, סופגניות חלב סויה, חמוצים וטעימות סאקה. בואו רעבים בין 10:00-15:00; עמידה ואכילה ליד הדוכן היא הנורמה המקובלת. הרחוב ממשיך מזרחה אל קמרונות ה-Teramachi/Shinkyogoku לטיול וקניות אחרי.\n- **Kuromon Ichiba, Osaka** — \"המטבח של Osaka,\" 150+ דוכנים עם פירות ים צלויים לפי הזמנה: טונה שמנה, uni, צלופחים, שיפודי wagyu, סרטנים ונגיף הכדורים. בואו עד 9:30-10:00 בבוקר לבחירה הכי טובה. **אוכלים ליד הדוכן שממנו קונים** (נימוסים). מזומן בכיס.\n- **Ameyoko, Tokyo (Ueno)** — שוק פתוח ועממי מתחת למסילת הרכבת: אוכל זול, חטיפים, נעלי ספורט, עסקאות וizakaya עמידה. הכי חי בשעות אחר הצהריים המאוחרות.\n- **Tsukiji Outer Market, Tokyo** — הבוקר האולטימטיבי של אוכל רחוב: tamagoyaki על שיפוד, uni צלוי, צדפות, wagyu nigiri, גלידת מאצ'ה רכה. בואו 8:00-10:00; **סגור בראשון ורוב ימי רביעי**.\n\n**Dotonbori, Osaka** — לא שוק, אלא מסלול אוכל הרחוב: שלטי הסרטן והתמנון הענקיים המונפשים, Glico running-man, ניאון מעל התעלה. זה מסלול הנדודים שלכם ל-takoyaki/okonomiyaki/kushikatsu. הכי טוב אחרי חשכה; צלמו את שלט Glico מהצד של גשר Ebisubashi כדי להימנע מהדחיפות.\n\n**Depachika (אולמות מזון בקומת המרתף של בתי כלבו)** — אולם נוצץ של bento פרמיום, wagashi, tempura, wagyu, סושי וקינוחים. Isetan Shinjuku ו-Takashimaya הם האגדיים בTokyo; Daimaru/Takashimaya ב-Kyoto/Osaka. **מהלך חכם:** לכו כשעה לפני סגירה להנחות על מנות מוכנות — מושלם להרכבת פיקניק מפנק לערב לפני הlryokan. דוגמיות חינם בכל מקום.\n\n**אוצרות הקונבייני (7-Eleven, Lawson, FamilyMart)** — יעד אוכל אמיתי, זול בטירוף, ומושלם לערב ההגעה שלכם ביום שישי, לימי הרכבות ולנשנושים אחרי הלילה. חובה לנסות: **karaage-kun** של Lawson (עוף מטוגן), ה-**egg-salad sando (tamago)** האגדי, onigiri (הצוות יחמם לכם), **Famichiki** של FamilyMart, **oden** בסתיו, והקינוחים ב-¥150. ל-7-Eleven יש הקפה הכי טוב, וכספומטי הקונבייני מקבלים כרטיסי אשראי זרים כשאחרים מסרבים.\n\n**Tachinomi (בארי עמידה)** — עמדות שתייה זולות, מהירות ופשוטות; משלמים לפי פריט, ידידותי למזומן, תחלופה גבוהה, בדרך כלל ללא דמי כיסא. לצוד: **Nonbei Yokocho (Shibuya)** ו-**Yurakucho/Shinbashi** מתחת לפסי הרכבת בTokyo; **Shinsekai/Tenma** ב-Osaka.\n\n**לאכול לפני סיור Ni-chome:** רוב הבארים הגייז מגישים רק משקאות, אז אכלו קודם ב-**Omoide Yokocho** (סמטת הזיכרון) — סמטת yakitori עשנה ליד Shinjuku, שיפודים ווייב שוא רטרו, ואז 10 דקות הליכה לפינת AiiRO להתחיל את הלילה.",
     "cards": [
      {
       "name": "Nishiki Market",
       "sub": "Kyoto — מרכז (Shijo/Kawaramachi)",
       "desc": "\"המטבח של Kyoto\": 100 דוכנים מקורים עם הדברים המוזרים — tako-tamago, yuba, סופגניות חלב סויה, חמוצים, סאקה. הכי טוב 10:00-15:00, בוקרי חול הכי שקטים. אוכלים עמידה ליד הדוכן; מקורה לחלוטין = תוכנית מצוינת ליום גשום."
      },
      {
       "name": "Kuromon Ichiba",
       "sub": "Osaka — Nipponbashi, 5 דקות מ-Namba",
       "desc": "150+ דוכנים צולים פירות ים לפי הזמנה: צלופח עם uni, sashimi otoro, wagyu על שיפוד, סופגניות חלב סויה טריות. בואו עד 9:30-10:00. אוכלים איפה שקונים; הביאו מזומן."
      },
      {
       "name": "Ameyoko Market",
       "sub": "Tokyo — Ueno / Okachimachi",
       "desc": "שוק פתוח ועממי מתחת למסילה: אוכל רחוב זול (¥300-800), חטיפים, נעלי ספורט ובארי עמידה שמתחממים בשקיעה. הכי חי בשעות אחר הצהריים המאוחרות; משתלב עם Ueno Park."
      },
      {
       "name": "Dotonbori",
       "sub": "Osaka — Namba",
       "desc": "מסלול אוכל הרחוב הניאוני — שלט Glico, התעלה, השלטים הענקיים. מסלול הנדודים שלכם ל-takoyaki, okonomiyaki, kushikatsu. הכי טוב אחרי חשכה; צלמו את ה-Glico מהצד של Ebisubashi."
      },
      {
       "name": "Tsukiji Outer Market",
       "sub": "Tokyo — Tsukiji",
       "desc": "הבוקר האולטימטיבי של אוכל: tamagoyaki על שיפוד, uni צלוי, צדפות, wagyu nigiri, גלידת מאצ'ה רכה. לנדוד חופשי 8:00-10:00. סגור בראשון ורוב ימי רביעי — בדקו את הלוח."
      },
      {
       "name": "Depachika",
       "sub": "Isetan/Takashimaya Tokyo; Daimaru Kyoto/Osaka",
       "desc": "אולמות מזון מרתפיים נוצצים: bento פרמיום, wagashi, tempura, wagyu, קינוחים ודוגמיות חינם. בואו כשעה לפני סגירה להנחות — מושלם לפיקניק מפנק לערב לפני הlryokan."
      },
      {
       "name": "Konbini Crawl",
       "sub": "7-Eleven · Lawson · FamilyMart (בכל מקום)",
       "desc": "יעד אוכל אמיתי ב-¥120-600: karaage-kun של Lawson, egg-salad sando, onigiri (בקשו לחמם), Famichiki, oden בסתיו, קינוחים ב-¥150. ל-7-Eleven הקפה הכי טוב; כספומטים מקבלים כרטיסים זרים."
      },
      {
       "name": "Tachinomi",
       "sub": "Nonbei Yokocho & Yurakucho (Tokyo); Shinsekai (Osaka)",
       "desc": "בארי עמידה זולים, מהירים ופשוטים, תשלום לפי פריט, בדרך כלל ללא דמי כיסא. מצוין בין פעילויות או כתחנה בסיבוב הברים. ידידותי למזומן, תחלופה גבוהה."
      },
      {
       "name": "Omoide Yokocho",
       "sub": "Tokyo — Shinjuku (ליד התחנה)",
       "desc": "סמטת yakitori עשנה ומוארת פנסים ('סמטת הזיכרון') — שיפודים צלויים (נסו קצה וביצת שלו) ובירה בסמטאות שוא רטרו. דלפקים קטנים וידידותיים למזומן. אידיאלי לשתייה לפני Ni-chome."
      },
      {
       "name": "Nakatanidou",
       "sub": "Nara — Sanjo-dori arcade",
       "desc": "אלופי ריסוק המוצ'י מנחיתים yomogi mochi במהירות מסחררת כמעט מסוכנת בתצוגה חיה על המדרכה, ואז מגישים לכם mochi חם עם שעועית אדומה (~¥200). הצפייה חינם; ריסוק כל ~30 דקות. מזומן בלבד."
      },
      {
       "name": "Owakudani Black Eggs",
       "sub": "Hakone — תחנת האמצע של הרכבל",
       "desc": "ביצים שנרתחות במעיינות גופרית וולקניים מתכהות לשחור; לפי האגדה כל ביצה מוסיפה 7 שנים לחיים. ~¥500 ל-4-5 ביצים, נאכלות בין שאיבות הקיטור. תמונת יום הולדת כיפית ואחרת. ריח הגופרית חזק."
      }
     ]
    },
    {
     "id": "eat-like-a-local",
     "icon": "🥢",
     "title": "איך לאכול כמו מקומיים",
     "intro": "המכניקה: מכונות כרטיסים, נימוסים ב-izakaya, הזמנות מראש, ביטויים להזמנת אוכל, תשלום, ומציאות תזונתית. שלטו בכל אלה ותאכלו בביטחון בכל פינה מוסתרת.",
     "body": "האוכל פשוט ברגע שמבינים את המערכות. הנה כל מה שצריך כדי להיכנס בביטחון לכל דוכן ramen או izakaya.\n\n**מכונות כרטיסים (shokken-ki)** — בחנויות ramen, gyudon ו-soba קונים כרטיס ארוחה ממכונת מכירה **לפני** הישיבה. מכניסים מזומן (רבות מקבלות מטבעות + שטרות ¥1,000; דגמים חדשים יותר מקבלים כרטיסי IC), לוחצים על כפתור המנה הרצויה (**כפתורי שמאל-עליון הם בדרך כלל חתימת החנות**), לוקחים את הכרטיס המודפס, יושבים ומוסרים אותו לצוות. רבות מהן כוללות כפתורי אנגלית/תמונות או החלפת שפה. רוצים תוספת אטריות ל-ramen? אמרו **\"kae-dama\"** בקול.\n\n**נימוסי izakaya (הפאב היפני)** — החלון הטוב ביותר לתרבות האוכל היומיומית, וארוחת ערב נינוחה ורב-מנות לשניים.\n- תקבלו **otoshi** (מנת פתיחה קטנה, ¥300-600) כדמי כיסא. **זה נורמלי, לא הונאה.**\n- **שפכו לשתות זה לזה, לא לעצמכם**, ופתחו בקריאה משותפת **\"kanpai!\"** (אמרו את זה הרבה ביום ה-40).\n- הזמינו **בסבבים**, לא הכל בבת אחת. מקומות עמוסים מגבילים לפרק זמן של 90-120 דקות.\n- התחילו עם **\"toriaezu nama\"** — בירה טרייה מהברז לפתיחה.\n- המגבת הרטובה (**oshibori**) מיועדת לידיים בלבד.\n\n**ביטויים להזמנה**\n- **Sumimasen** — סליחה / לקרוא לגרסון (המילה השימושית ביותר ביפן).\n- **Omakase de** — בחירת השף.\n- **Osusume wa?** — מה אתם ממליצים?\n- **Kore o kudasai** — את זה, בבקשה (הצביעו על התפריט או על דגמי המזון מפלסטיק בחלון).\n- **Eigo no menu wa arimasu ka?** — יש לכם תפריט באנגלית?\n- **O-kaikei / o-kanjo kudasai** — את החשבון, בבקשה (לרוב משלמים בקופה בכניסה, לא ליד השולחן).\n\n**הזמנות מראש** — ramen ואוכל רחוב הם walk-in; מתייצבים בתור. אבל כדאי להזמין מראש: **omakase sushi איכותי** (Pocket Concierge / OMAKASE app, חודש-שניים מראש), **Kyoto kaiseki**, דוכני **yakiniku** ו-**teppanyaki wagyu** פופולריים, מסעדת **fugu** מורשית, וכל **בית קפה ממוין** (Pokemon Cafe ב-Nihonbashi, Kirby Cafe ב-Skytree — הזמינו כחודש מראש; חוויית \"אוכל חריג\" מצוינת לאוהב אנימה). **kaiseki** ב-ryokan ב-Hakone כלול בחדר — רק אשרו אם אוכלים בחדר או בפרטי, ו**אמרו להם שמדובר ביום הולדת 40** (רבים מוסיפים עוגה או sake).\n\n**תשלום** — החזיקו מזומן. חנויות ramen רבות, tachinomi, דוכני רחוב ו-izakaya קטנות הן **מזומן בלבד**. משכו ין מכספומטים של 7-Eleven (7-Bank) או Japan Post, שמקבלים כרטיסים זרים 24/7. **Suica/PASMO** בארנק הנייד מתאים גם ל-konbini ולהרבה מסעדות. ושוב: **אין טיפים** — החזרת עודף עלולה לגרום למישהו לרוץ אחריכם ברחוב כדי להחזיר אותו לכם.\n\n**הערות תזונתיות** — היו ריאליסטיים:\n- **צמחוני/טבעוני אמיתי קשה מאוד** — dashi (ציר בוניטו/דגים) מסתתר כמעט בכל דבר, כולל מנות \"ירקות\", מרק miso ו-soba tsuyu. אמרו **\"katsuo dashi nashi\"** (ללא ציר בוניטו) אך אל תסמכו על כך לבד. לאוכל טבעוני אמיתי, הזמינו **shojin-ryori** (מטבח מקדש בודהיסטי, בעיקר ב-Kyoto).\n- **ללא גלוטן — קשה** — רוטב סויה מכיל חיטה; tempura ו-tonkatsu מצופים בפירורים; גם soba מכיל לעיתים חיטה (שאלו). הביאו כרטיס אלרגיה מודפס ביפנית לאלרגיות אמיתיות.\n- **אפשרויות Halal/כשר** מוגבלות מחוץ למקומות מיוחדים בערים הגדולות.\n\n**טקס מקומי אחרון שכדאי להכיר:** אחרי zaru soba קר, מזגו את ה-**sobayu** החם (מי הבישול) לתוך רוטב הטבילה שנותר ושתו. ולאיתור ארוחות חכמות, זולות ומצוינות — השתמשו באפליקציית Michelin Guide החינמית עם פילטר **Bib Gourmand** (16 מקומות חדשים בTokyo ל-2026).",
     "cards": [
      {
       "name": "Ticket Machine",
       "sub": "Ramen · gyudon · soba shops",
       "desc": "קונים כרטיס ארוחה לפני הישיבה: מכניסים מזומן, לוחצים על המנה (שמאל-עליון = חתימת החנות), מוסרים את הכרטיס לצוות. אמרו 'kae-dama' לתוספת אטריות. לרבות יש החלפה לאנגלית/תמונות."
      },
      {
       "name": "The Otoshi",
       "sub": "Izakaya seat charge",
       "desc": "מנת פתיחה קטנה (¥300-600) המוגשת אוטומטית כדמי כיסא. נורמלי לגמרי, לא הונאה. שפכו לשתות זה לזה, פתחו עם 'kanpai!', הזמינו בסבבים, שימו לב למגבלת 90-120 הדקות."
      },
      {
       "name": "Key Phrases",
       "sub": "Say these everywhere",
       "desc": "Sumimasen (סליחה), Omakase de (בחירת השף), Osusume wa? (מה ממליצים?), Kore o kudasai (את זה בבקשה), O-kanjo kudasai (החשבון). הצביעו על דגמי מזון מפלסטיק אם תקועים."
      },
      {
       "name": "Book Ahead",
       "sub": "What actually needs reservations",
       "desc": "Omakase sushi (Pocket Concierge/OMAKASE, חודש-שניים מראש), Kyoto kaiseki, wagyu teppanyaki, fugu מורשה, בתי קפה ממוינים (כחודש מראש). Ramen/אוכל רחוב = walk-in. ספרו ל-Hakone ryokan שמדובר ביום הולדת 40."
      },
      {
       "name": "Payment & Cash",
       "sub": "Cash is still king",
       "desc": "izakaya קטנות רבות, tachinomi ודוכנים הם מזומן בלבד. משכו ין ב-ATM של 7-Eleven/Japan Post (כרטיסים זרים, 24/7). Suica בנייד מתאים גם ל-konbini. לעולם אל תשאירו טיפ."
      },
      {
       "name": "Dietary Reality",
       "sub": "Dashi hides everywhere",
       "desc": "צמחוני/טבעוני קשה — dציר דגים מסתתר ב'מנות ירק' ו-soba tsuyu; אמרו 'katsuo dashi nashi' אבל הזמינו shojin-ryori לטבעוני אמיתי. ללא גלוטן — קשה (רוטב סויה = חיטה). הביאו כרטיס אלרגיה."
      }
     ]
    },
    {
     "id": "nutshell",
     "icon": "🗾",
     "title": "יפן בקצרה",
     "intro": "סקירת אוריינטציה מהירה על המדינה שאתם נוחתים אליה לרגל הרפתקת יום-הולדת 40 — מה מניע אותה, איך היא מרגישה, ואותם דברים בודדים שמפתיעים כל מי שמגיע לראשונה.",
     "body": "יפן היא אחת המדינות **הבטוחות, הנקיות והנוחות ביותר לטיול בעולם כולו** — ארנקים אבודים מוחזרים, רכבות מגיעות בדייקנות של שניות, ושני גברים שחולקים חדר זה דבר שאף אחד לא מרים עליו גבה. אבל יש לה הגיון שקט משלה, וכשמכירים אותו מראש אפשר להירגע לתוך הטיול במקום לפענח אותו תוך כדי תנועה.\n\n**התמונה הגדולה של המסלול שלכם:**\n- **Tokyo** — עיר-הכל: ניאון, אוכל ברמה עולמית בכל מחיר, שכונות אוטאקו, וסצנת הגאווה של Ni-chome. נקודת ההגעה שלכם (18–22 בספטמבר) ונקודת הפרידה (30 בספטמבר–1 באוקטובר).\n- **Hakone** — עיירת נופש עם מעיינות חמים וולקניים, 85 דקות מ-Tokyo; לב-לבו של חגיגת יום-ההולדת שלכם ב-onsen-ryokan (23 בספטמבר).\n- **Kyoto** — הלב התרבותי: מקדשים, גישות, תה, ואמנויות מסורתיות (24–27 בספטמבר).\n- **Osaka** — בירת אוכל-הרחוב הרועשת והאוהבת, בתוספת יום-טיול ל-Nara לפגוש איילים שמשתחווים (28–29 בספטמבר).\n\n**דברים שמפתיעים כל מי שמגיע לראשונה:**\n- **עדיין מבוססת יחסית על מזומן.** למרות המעבר לתשלומים ללא מגע, אוכל-רחוב, izakaya קטנים וחנויות ווינטאג' פועלים לרוב במזומן בלבד. קחו איתכם ¥15,000–20,000.\n- **הרכבות שקטות כמעט לחלוטין** — שיחות טלפון אסורות, ומנהלים שיחות בקול נמוך.\n- **אפס טיפים, בשום מקום, אף פעם.** השירות מצוין כי כך מצפים — לא כי יש בונוס.\n- **נועלים נעליים בחוץ** הרבה יותר פעמים ממה שתצפו (חיוני ב-ryokan שלכם).\n- **פחי אשפה ציבוריים נדירים** — אתם נושאים את הפסולת שלכם עד שמוצאים אחד.\n\n**התזמון שלכם הוא גם מזל וגם עומס:** אתם מגיעים בזמן **Silver Week** (19–23 בספטמבר, אשכול חגים של 5 ימים) — צפוף ויקר, אז הזמינו את Hakone ואת מושבי ה-Shinkansen מוקדם. אבל אתם גם חופפים לטורניר **Grand Sumo** של ספטמבר, ל-**Tokyo Game Show**, ול-**Tsukimi** (ליל ירח-הקציר, 25 בספטמבר, בזמן שאתם ב-Kyoto). מזג-האוויר בסוף ספטמבר חם ולח בתחילה, ומתעדן לסביבות 20 מעלות נעימות, עם סיכון לטייפון — אמיתי אך ניתן לניהול — אז קחו ג'קט גשם, לא רק מטרייה.\n\n**הערה אחת על קניות פטורות ממס:** התאריכים שלכם חלים *לפני* שינוי המערכת של 1 בנובמבר 2026, כך שנהנים מהשיטה הפשוטה — המס מנוכה מיד בקופה, ללא תור החזר בשדה-התעופה. פשוט קחו את **הדרכון הפיזי** שלכם כל פעם שאתם מוציאים ¥5,000 ומעלה."
    },
    {
     "id": "etiquette",
     "icon": "🙇",
     "title": "נימוסים ומנהגים",
     "intro": "קומץ הכללים החברתיים שבאמת חשובים. אף אחד מהם לא קשה, והיפנים סלחניים כלפי תיירים — אבל לדעת אותם הופך אתכם לאורחים מכובדים וגורם לכל אינטראקציה להתנהל בחלקות.",
     "body": "**👟 נעליים החוצה — דעו מתי.** חולצים נעליים ב-*genkan* (אזור הכניסה המוגבה כלפי מטה) ועולים **למעלה** לרצפה המוגבהת בגרביים או בנעלי הבית שסופקו. אסור שרגליים בגרביים ייגעו בריצפת ה-genkan. זה לא נתון למשא ומתן בבית מלון הריוקאן שלכם **ב-Hakone**, בחדרי טטאמי, בחלק מהמקדשים ובמסעדות מסורתיות.\n- **נעלי בית לשירותים** הן נפרדות: מחליפים אותן בכניסה לשירותים, ומחליפים **בחזרה** ביציאה — לחזור לחדר עם נעלי בית של השירותים זה הטעות התיירותית הקלאסית.\n- **אסור** להיכנס לטטאמי עם שום נעל בית — גרביים בלבד.\n- *כדאי לנסוע עם נעליים שנכנסות ויוצאות בקלות, ולארוז גרביים נקיות ללא חורים — תעשו את זה כל הזמן.*\n\n**🤫 רכבות שקטות.** העבירו את הטלפון ל\"מצב נימוסים\" (שקט), אל תענו לשיחות ושמרו על שיחה בלחש. אל תאכלו ברכבות נוסעים או במטרו — אבל *ekiben* (קופסת בנטו מהתחנה) ב-**Shinkansen הוא פולחן נהדר**. עמדו בתור על הקווים המסומנים ברצפה, תנו לאנשים לרדת לפני שאתם עולים, והורידו את התרמיל מהגב. על האסקלטורים: עמדו **משמאל בTokyo**, **מימין ב-Osaka/Kyoto** (הפוך ממש — הסתכלו על המקומיים).\n\n**💴 אסור לתת טיפ — בשום מקום, אף פעם.** אל תיתנו טיפ לנהגי מונית, מסעדות, מלונות, מדריכים או צוות הריוקאן. תשאירו עודף על השולחן והצוות עשוי לרדוף אחריכם ברחוב כדי להחזיר אותו. כדי להודות למדריך פרטי, *'arigatou gozaimashita'* כנה — או מתנה קטנה ועטופה מהבית — הוא המחווה המתאימה. דמי שירות אוטומטיים של 10–15% במקומות יוקרתיים הם נורמה, לא טיפ.\n\n**🥢 כללי מקלות אכילה.** שתי פעולות הן טאבו אמיתי (שתיהן קשורות לאבל): **אסור לתקוע מקלות אכילה זקופים בתוך אורז**, ו**אסור להעביר אוכל ממקלות למקלות** — השתמשו בצלחת ההגשה במקום זאת. אל תשפשפו מקלות חד פעמיים זה בזה (זה נראה כאילו אתם חושבים שהם זולים), ואל תצביעו עם המקלות או תניפו אותם. ובהחלט **שאבו** את הרמן והסובה בקול — זה סימן להנאה. אמרו *'itadakimasu'* לפני האכילה ו-*'gochisousama'* אחריה.\n\n**🙇 קידות.** לא צריך להיות מומחים — הנהון קל של הראש יחד עם *'arigatou gozaimasu'* מכסה כמעט הכל כתיירים. קידה מחליפה לחיצת יד ומביעה תודה, התנצלות ודרישת שלום בבת אחת; פשוט חקו את העומק שמציעים לכם ויהיה בסדר גמור.\n\n**🗑️ אשפה — שאו אותה בעצמכם.** פחי האשפה הציבוריים הוסרו לפני עשורים, אך הרחובות נקיים ממש כי כולם מוליכים את האשפה הביתה. שמרו שקית קטנה בתיק היום שלכם. מותר לזרוק ב**פחי konbini** (רצוי אם קניתם שם), בפחי **מכונות המשקאות** (אותה בקבוק/פחית בלבד), ובפחי התחנות. אכלו אוכל רחוב **ליד הדוכן**, ואז זרקו שם — הליכה תוך כדי אכילה נתפסת כחוסר נימוס קל.\n\n**🎨 קעקועים.** יפן קשרה היסטורית קעקועים לפשע מאורגן, ולכן **רבים מה-onsen הציבוריים, ה-sento, חדרי הכושר והבריכות עדיין אוסרים קעקועים גלויים** — ללא יוצאי דופן, והצוות יבקש מכם לעזוב אם ישימו לב. לטיול שלכם זה רלוונטי בעיקר בכניסה למעיינות חמים (ראו את הפרק על Onsen). הפתרון האמין: **אמבטיות פרטיות/בחדר**, שם הכלל פשוט לא חל. לקעקועים קטנים, **מדבקות כיסוי עמידות למים** (כ-¥310 בכל konbini או Don Quijote) פותחות בתי מרחץ עם \"מדיניות כיסוי\"."
    },
    {
     "id": "onsen-ryokan",
     "icon": "♨️",
     "title": "אונסן וריוקאן",
     "intro": "טקס מעיינות החמים הוא השיא התרבותי של לילת יום ההולדת שלכם ב-Hakone — ועם כמה מהלכים חכמים, זה יכול להיות חוויה אינטימית, שלווה ונטולת לחץ לשני גברים. הנה בדיוק איך זה עובד.",
     "body": "**ההחלטה החשובה ביותר בהזמנה:** הזמינו חדר ב-ryokan עם **onsen פרטי בחדר, או כזה שניתן לשריין לבלעדיות** (*kashikiri* / *rotenburo*). הנה למה זה מושלם בשבילכם:\n- מרחצאות ציבוריים מופרדים **לפי מגדר**, כך שאמבטיה פרטית משותפת היא הדרך היחידה להשרות **ביחד**.\n- אמבטיה פרטית **מייתרת לחלוטין את עניין הקעקועים** — אין חוק שצריך לדאוג לגביו.\n- זה הופך לנקודת שיא אינטימית לחגיגת יום ההולדת ה-40: השריה מתחת לכוכבים, ואחר כך ארוחת kaiseki בחדר, yukata, ופוטונים על tatami.\n\n*ודאו שהאמבטיה שבחדר מוזנת ממים אמיתיים של מעיין חם (חלקן פשוט אמבטיות ברז רגיל). הזמינו חודשים מראש — Silver Week בסוף ספטמבר מוכרת אותן מהר. ספרו להם שמדובר ביום הולדת 40; רבים מה-ryokan מוסיפים עוגה, סאקה, או מתנה קטנה.*\n\n**טקס ההתרחצות (זהה בכל מקום):**\n1. השאירו נעליים בכניסה.\n2. בחדר ההלבשה, התפשטו **לגמרי** — ללא בגדי ים, בשום מקרה. שמרו הכל בלוקר/סל.\n3. לקחו איתכם לאזור הרחצה רק את **המגבת הקטנה**.\n4. שבו על כיסא נמוך ליד תחנת שטיפה ו**שטפו והדיחו היטב את כל הגוף** *לפני* הכניסה — האמבטיה מיועדת להשריה בלבד.\n5. היכנסו לאט. אל תגלשו, אל תשחו, אל תכניסו ראש מתחת למים.\n6. **המגבת הקטנה לעולם לא נוגעת במים** — קפלו אותה על הראש או על שפת האמבטיה.\n7. התייבשו במגבת הקטנה לפני שאתם חוזרים לחדר ההלבשה (להשאיר את המינרלים על העור זה בסדר גמור).\n\n**כללים לא כתובים שישמרו אתכם בברוכים:** אל תביאו טלפונים או מצלמות לאזור הרחצה (זה מרחב ללא בגדים), אל תתרחצו בשיכרות, שמרו על קולות נמוכים, קשרו שיער ארוך למעלה.\n\n**לזוג גברים, באופן ספציפי:** מרחצאות ציבוריים מחולקים לצד גברים (וילון *noren* כחול, 男) ולצד נשים (אדום, 女) — כך ששניכם תשתמשו ב**צד הגברים ביחד**, מה שהוא למעשה יתרון שקט ולא מושך שום תשומת לב. שמרו על חיבה בדיסקרטיות מתוך כבוד לאווירה השקטה; לרומנטיקה אמיתית ולפרטיות, ההזמנה של *kashikiri* פרטי היא הצעד הנכון. יפן היא דיסקרטית ולא עוינת — הצוות אכפת לו מנימוסי ההתרחצות, לא ממי אתם.\n\n**חוויית ה-ryokan המלאה:** לבשו את ה-**yukata שסופק לכם עם השוליים השמאליים על גבי הימניים** (ימין על גבי שמאל שמור לקבורה בלבד), קשרו את חגורת ה-*obi*, הוסיפו את מעיל ה-*haori* אם קר. Kaiseki הוא מסע עונתי של מנות קטנות ואמנותיות — ציינו הגבלות תזונתיות בעת ההזמנה. הצוות מפרוש את ה-futon שלכם בזמן שאתם בארוחת ערב. נעלי בית על רצפות עץ, גרביים/יחפים על tatami.\n\n**מה לארוז:** ה-ryokan מספק מגבות, yukata, סבון, שמפו ומייבש שיער. **הביאו:** קשרי שיער לפי הצורך, מדבקות לכיסוי קעקועים, מים לשתות ולהתרענן, ושקית קטנה עמידה למים למגבות רטובות. **הסירו תכשיטי כסף** — מי גופרית מחמירים אותם.",
     "cards": [
      {
       "name": "Room w/ private onsen",
       "sub": "露天風呂付き客室",
       "desc": "ההזמנה המכרעת — אמבטיה חיצונית בחדר כדי שתוכלו להשרות ביחד, ללא בעיית קעקועים. סננו לפי אפשרות זו ב-Ikyu/Rakuten Travel."
      },
      {
       "name": "Kashikiri-buro",
       "sub": "貸切風呂",
       "desc": "אמבטיה פרטית שניתן לשריין (~¥2,000–4,000 / 45 דקות) אם אמבטיה בחדר חורגת מהתקציב — הפתרון החלופי להשריה זוגית."
      },
      {
       "name": "Rotenburo",
       "sub": "露天風呂",
       "desc": "אמבטיה חיצונית בפתח — חלום ציורי של השריה מוקפת הרים וכוכבים."
      },
      {
       "name": "Kaiseki",
       "sub": "懐石",
       "desc": "ארוחת ה-ryokan המולטי-קורסית העונתית — מרכיבי סתיו כמו matsutake, ערמונים, sanma. הסעודה ליום ההולדת."
      }
     ]
    },
    {
     "id": "getting-around",
     "icon": "🚄",
     "title": "התניידות ותחבורה",
     "intro": "הלולאה הקבועה שלכם — Tokyo → Hakone → Kyoto → Osaka → Tokyo — היא בעיה פתורה. הנה מחסנית התחבורה המנצחת, בתוספת תזמון מדויק לטיסת ההגעה שלכם ב-18:25 וטיסת העזיבה ב-12:00.",
     "body": "**🎫 קודם כל כרטיס IC — הגדירו Mobile Suica.** כשאתם שניים מקישים דרך רכבות תחתיות, אוטובוסים, קונביני ומכונות אוטומטיות כל הזמן, כרטיס IC הוא חובה. **Suica, PASMO ו-ICOCA כיום תואמים לחלוטין ברחבי הארץ** — כרטיס אחד עובד בשלוש הערים.\n- **iPhone:** הוסיפו Suica ב-Apple Wallet, טענו עם Apple Pay — בלי תורים, בלי פיקדון. הגדירו את זה במטוס או בשדה התעופה.\n- **Android / טלפון ישן יותר:** קנו **Welcome Suica** פיזי (ללא פיקדון) בשדה התעופה.\n- טענו כ-¥3,000 כל אחד להתחלה; תוכלו להטעין בכל קונביני.\n\n**🚅 דלגו על ה-JR Pass — שלמו נסיעה-נסיעה.** עבור *המסלול הזה* החשבון ברור: Shinkansen נסיעה-נסיעה עולה **~¥27,000–33,000 לאדם** לעומת **¥80,000** לכרטיס ל-14 יום (¥84,000 מ-1 באוקטובר 2026). הרגליים הארוכות שלכם הן רק Odawara→Kyoto, Osaka→Tokyo ורכיבות לשדות התעופה; Hakone פועלת על מסילות פרטיות שהכרטיס כלל לא מכסה. **הזמינו מושבים דרך אפליקציית SmartEX** (באנגלית, מקשרת את הכרטיס שלכם, קישה עם כרטיס IC רשום). הזמינו מושבים לצד הר Fuji: **ימין כלפי מערב** (Odawara→Kyoto, D/E), **שמאל כלפי מזרח** (Osaka→Tokyo).\n\n**הרגליים:**\n- **Tokyo → Hakone (23 בספטמבר):** Odakyu **Romancecar** מ-Shinjuku (~85 דקות ישיר, מושבים שמורים פנורמיים) — לא Shinkansen. קנו את **Hakone Free Pass** (¥7,100 לשני ימים) במרכז שירות התיירים של Odakyu ב-Shinjuku; הוא כולל את תשלום הבסיס ואת כל 8 אמצעי התחבורה בלולאה (רכבת הרים, רכבל, טלפריק, ספינת הפיראטים, אוטובוסים). תוספת המושב השמור ב-Romancecar (~¥1,200 לכל כיוון) היא **בנפרד**.\n- **Hakone → Kyoto (24 בספטמבר):** Odawara → Kyoto ב-**Hikari** Shinkansen (~2ש'15ד', ~¥12,320). שימו לב: ה-Nozomi המהיר יותר לא עוצר ב-Odawara.\n- **Kyoto ↔ Osaka ו-Osaka ↔ Nara:** דלגו על ה-Shinkansen — פשוט קישו עם כרטיס ה-IC. JR Special Rapid Kyoto→Osaka (~29 דקות, ¥580); **Kintetsu** Osaka-Namba→Nara (~45 דקות, ~¥680) מוריד אתכם הכי קרוב לפארק האיילים.\n- **Osaka → Tokyo (30 בספטמבר):** ה-**Nozomi** המהיר (~2ש'30ד', ~¥14,400).\n\n**🧳 העברת מזוודות (takkyubin) — השדרוג הכי משמעותי לאיכות החיים.** שלחו את המזוודות הגדולות מעיר לעיר ונסעו עם תיק יום בלבד (~¥2,300–2,630 לתיק). כל דלפק מלון או קונביני מטפל בזה. **חשוב:** זה **למחרת, לא באותו יום**. אז שלחו מזוודות **ישירות Tokyo → Kyoto (דלגו על Hakone)** וקחו רק תיק ללינה לריוקאן; לאחר מכן **Osaka → Tokyo** בבוקר ה-30 בספטמבר. **אל תסמכו** על זה כדי להגיע לשדה התעופה ביום העזיבה — זה לחוץ מדי.\n\n**✈️ הגעה — 18 בספטמבר, 18:25:** תסיימו עם הגירה/מטען בסביבות 19:15–19:45, ותכוונו להיות על רכבת/אוטובוס בסביבות 19:45.\n- **מ-Narita:** Narita Express (N'EX) ל-Tokyo ~53 דקות / ל-Shinjuku ~80 דקות (~¥3,300), או **Airport Limousine bus** (~¥3,600) אם המלון שלכם הוא תחנה רשומה — מוריד אתכם בכניסה, בלי מדרגות עם מזוודות.\n- **מ-Haneda:** הרבה יותר קרוב — Keikyu/מונורייל + רכבת תחתית, ~30–45 דקות, ~¥500–650 דרך Suica.\n- **טיפ:** קנו את **N'EX Tokyo Round-Trip Ticket** (¥5,000, בתוקף 14 יום) כיוון שאתם טסים גם פנימה *וגם* החוצה מ-Tokyo — הוא מכסה את שני הכיוונים.\n\n**✈️ עזיבה — 2 באוקטובר, 12:00:** טיסה בינלאומית בצהריים אומרת שמסירת המזוודות נסגרת בסביבות 10:00, אז היו בצד האוויר עד ~10:30.\n- **מ-Narita:** צאו מהמלון **~08:15**, עלו על N'EX בסביבות 08:45, שדה התעופה עד ~09:45–10:00.\n- **מ-Haneda:** צאו מהמלון **~09:00**, שדה התעופה עד ~10:00.\n\n**📱 אפליקציות:** Google Maps (ניתוב תחבורה ציבורית מצוין — לחצו על מסלול כדי לראות באיזו קרון לעלות ליציאה המהירה), **Japan Travel by Navitime** (מפות אופליין, מציינת את הקרון והיציאה המדויקים), **SmartEX** (Shinkansen), ואפליקציית **Odakyu/EMot** (Hakone)."
    },
    {
     "id": "car-transit",
     "icon": "🚗",
     "title": "מכונית או רכבות?",
     "intro": "האם צריך לשכור מכונית? (תשובה קצרה: לא.)",
     "body": "### 🚆 פסיקה: תחבורה ציבורית\nבלי מכונית. מסלול Tokyo–Hakone–Kyoto–Osaka–Nara הזה הוא הציר הרכבתי המכוסה ביותר בעולם; השכרת מכונית תעלה יותר, תוסיף לחץ, ותעמוד חונה ברוב הזמן בחניוני המלונות.\n\n### למה בלי מכונית\n- כל נקודה במסלול הזה היא עיר צפופה עם תחבורה מצוינת, או אתר נופש (Hakone) שבנוי במיוחד סביב כרטיס רכבת/אוטובוס. אין ולו קטע אחד כפרי או נידח שבו מכונית תועיל.\n- Tokyo ו-Kyoto אקטיבית עוינות מכוניות לתיירים: כמעט אין חניה חינמית, המלונות גובים 2,000–4,000 yen בלילה לחניה, הרחובות צרים, והפקקים כבדים. תשלמו לאחסן מכונית שתוכלו להשתמש בה רק חלק מהיום.\n- Hakone פועלת על Hakone Free Pass (רכבת הרים, קרון כבלים, ropeway, ה\"ספינה הפיראטית\", ואוטובוסים — הכל כלול) — מכונית הופכת את הלולאה לגרועה יותר, לא טובה יותר, ותפספסו את חוויית ה-ropeway/ספינה שהיא אייקונית.\n- הטיולים ל-Nara, Osaka ו-Kyoto הם 30–60 דקות ברכבת ישירה שיוצאת כל כמה דקות; חניה ב-Nara, Fushimi Inari, וב-Arashiyama — נדירה ויקרה.\n- נהיגה מחייבת International Driving Permit לכל אחד מכם (חייבים להשיג לפני היציאה — לא ניתן לעשות זאת ביפן), נהיגה בצד שמאל, ואגרות כביש מהיר גבוהות (כביש סלול Tokyo–Kyoto לבד — בערך 10,000+ yen).\n- לטיול של אוכל / תרבות / onsen / חיי לילה עם כמה פינוקים בחירה, הרכבות מאפשרות לשניכם לשתות בחופשיות (izakaya, ברים גאים ב-Shinjuku Ni-chome, sake) — נהג מיועד הורג חלק מרכזי של הטיול.\n- ה-JR Pass הארצי (50,000 yen לאדם ב-2026) **גם הוא לא שווה** כאן — יש לכם קפיצת Shinkansen ארוכה אחת בלבד, ולכן תשלום כרטיסים בודדים + IC card יצא זול בהרבה מאשר מכונית **או** JR Pass.\n\n### 💴 בדיקת עלויות (לזוג)\n- **תחבורה ציבורית:** בערך 150,000–175,000 yen לזוג לכל 14 הימים (~1,000–1,180$). פירוט: Hakone passes ~12,200; Shinkansen Tokyo->Kyoto ~28,300; Shinkansen חזרה + שדה התעופה ~34,500; העברה להגעה NRT->Tokyo ~6,000; ועוד ~60,000–80,000 yen של חיבוקי IC-card יומיומיים ב-Tokyo, Kyoto, Osaka ו-Nara לשניים על פני שבועיים. נקרא לזה ~160,000 yen (~1,080$) כנקודת אמצע מוצקה.\n- **השכרת מכונית תעלה:** שכירות ל-14 יום תגיע לכ-200,000–260,000 yen (~1,350–1,750$) הכל כלול, ועדיין תצטרכו רכבות בתוך הערים. הערכה: שכירות בסיסית ~7,000–9,000 yen/יום x14 = ~98,000–126,000; אגרות כביש מהיר (Tokyo<->Kyoto/Osaka הלוך וחזור + מקומי) ~25,000–35,000; חניית מלון/עיר ~3,000 yen/לילה x13 = ~39,000; דלק ~20,000–30,000; ETC card/ביטוח תוספות ~10,000–15,000; ועוד ~2 IDP שהושגו בחו\"ל (~20$ כל אחד). תוצאה: יותר כסף, יותר לחץ, אפס יתרון — ועדיין תקישו Suica כל יום בערים.\n\n### כרטיסים וכרטיסיות לרכוש\n- **Welcome Suica Mobile (או Welcome Suica / Tourist Pasmo פיזי) x2** — כרטיסייה חינמית, טענו ~5,000–8,000 yen בהתחלה (~34–54$ לאדם) · Welcome Suica דיגיטלי (iPhone, iOS 17.2+, תוקף 180 יום, ללא פיקדון) הוא האפשרות הקלה ביותר ל-2026; אחרת, קחו Welcome Suica פיזי או Tourist Pasmo החדש ב-NRT. מכסה את כל מטרו/JR של Tokyo, רכבות מקומיות ואוטובוסים של Kyoto/Osaka/Nara, וחנויות נוחות. זה כרטיס ה-tap היומיומי שלכם.\n- **Hakone Free Pass (2 ימים, מ-Shinjuku) x2** — 6,100 yen לאיש (~41$ לאדם) — סה\"כ ~12,200 yen (~82$) · כולל הלוך-חזור Odakyu Shinjuku<->Odawara ועוד את כל 8 קווי Hakone (רכבת הרים, קרון כבלים, ropeway, ספינת טיולים, אוטובוסים). הוסיפו תוספת מושב Romancecar limited-express (~1,200 yen לכיוון) אם רוצים את הרכבת הפנורמית השמורה — אופציונלי.\n- **Shinkansen Tokyo -> Kyoto (Nozomi/Hikari שמורה) x2** — ~14,170 yen לאיש (~96$ לאדם) — סה\"כ ~28,300 yen (~192$) · קנו כרטיסים שמורים בנפרד בתחנה או דרך אפליקציית SmartEX. כיוון אחד בלבד — אתם **לא** חוזרים באותו מסלול, וזה בדיוק הסיבה שה-JR Pass מפסיד כאן.\n- **אזור Kyoto/Osaka/Nara: תשלום לפי נסיעה ב-IC card (אין צורך בכרטיס אזורי)** — ~0 עלות נוספת (נסיעות ~230–720 yen כל אחת, מתוך יתרת Suica) · בקצב מאוזן עם כמה יום-טיולים, עלויות IC בודדות עוקפות את רוב כרטיסי ה-1-day. אם תעשו יום אינטנסיבי ב-Osaka, Osaka Amazing Pass (~2,800 yen) יכול להשתלם דרך כניסה חינמית לאטרקציות — קנו אותו רק באותו יום אם מוזיאונים/אטרקציות מצדיקים.\n- **חזרה ל-Tokyo/NRT (Shinkansen Kyoto->Tokyo + גישה ל-Narita) x2** — ~14,170 yen Shinkansen + ~3,000–3,070 yen Skyliner/N'EX ל-NRT לאיש (~117$ לאדם) — סה\"כ ~34,500 yen (~234$) · Shinkansen כיוון אחד Kyoto->Tokyo ~14,170 yen; אחר כך Keisei Skyliner או JR N'EX ל-Narita T1. הזמינו את רגל שדה התעופה יום לפני הטיסת LOT 12:00 — שאפו להיות ב-NRT עד ~09:00.\n\n### כדאי לדעת\n- המרות דולר מחשבות לפי ~148 yen = 1$ (2026); שער הכרטיס האמיתי משתנה כמה אחוזים.\n- מחיר לתשומת לב: JR Pass ארצי ל-7 ימים עומד על 50,000 yen לאדם ב-2026, ועולה ל-53,000 דרך מכירות בחו\"ל מ-1 אוקטובר 2026 — לא רלוונטי כאן כיוון שלא שווה לקנות עבור קפיצה ארוכה אחת בלבד.\n- לשותף שאוהב מנגה/אנימה: Akihabara (Tokyo) ו-Den Den Town / Nipponbashi (Osaka) נגישים ברכבת קצרה — בלי מכונית; זו עוד סיבה שהתחבורה הציבורית מנצחת ברשימת הקניות.\n- הערת onsen: חלק מ-onsen ב-Hakone ו-onsen מסורתיים אחרים מסרבים לאורחים עם קעקועים גלויים — בדקו מראש או בחרו אמבטיות ידידותיות לקעקועים; לא קשור לתחבורה אבל רלוונטי לתכניות ה-onsen של הזוג.\n- Geisha/maiko: טיולי ערב ב-Gion (Kyoto) וחוויות ochaya/tea שהוזמנו מראש נגישות כולן ברגל מתחנות Kyoto — מכונית תהיה רק כאב ראש של חניה בסמטאות הצרות של Gion.\n- אם הנוחות ונושא המזוודות חשובים לכם בשתי רגלי ה-Shinkansen, הזמינו מראש את מושבי \"המטען המיוחד\" ללא תשלום — עדיין זול יותר מכל תרחיש של מכונית.\n- הזמינו את העברת שדה התעופה בחזרה (Skyliner/N'EX) ומושב Shinkansen יום לפני היציאה — הטיסת LOT ב-12:00 מ-NRT T1 שלכם מחייבת לצאת ממרכז Tokyo בערך ב-08:30–09:00."
    },
    {
     "id": "money-sim-apps",
     "icon": "💴",
     "title": "כסף, SIM ואפליקציות",
     "intro": "ערכת ההישרדות הפיננסית והדיגיטלית: איפה להשיג ין, איך להישאר מחוברים כזוג, ואילו אפליקציות מחליפות מדריך שלם.",
     "body": "**💴 כסף — מזומן + כרטיס + IC.** יפן הפכה לקאשלס יותר מבעבר, אבל בתור פודיז שרודפים אחרי אוכל רחוב ופינות נסתרות, תצטרכו **בהחלט** מזומן.\n- **שלפו ין מ-ATM של 7-Bank** (בכל סניף 7-Eleven) או מ-ATM של **Japan Post** — שניהם קולטים בצורה אמינה Visa/Mastercard/Amex זרים 24/7 עם תפריט באנגלית. **אל תתעסקו עם דוכני המרת מט\"ח** בארץ לפני הטיסה.\n- שמרו **~¥15,000–20,000 מזומן** ביד בכל עת.\n- **Contactless Visa/Mastercard** עובד בקונביני, ברשתות ובחנויות כלבו. הודיעו לבנק שלכם על הנסיעה לפני שאתם יוצאים.\n\n**🛍️ קניות פטורות ממס (המערכת הפשוטה — הגעתם בזמן).** התאריכים שלכם הם **לפני** השינוי של 1 בנובמבר 2026, כך שהמס מנוכה **מיד בקופה** — אין תור החזר בשדה התעופה.\n- הוציאו **¥5,000+ (לפני מס)** בחנות אחת הרשומה לפטור ממס ביום אחד כדי להיות זכאים.\n- **הביאו את הדרכון הפיזי בכל פעם** — תמונה בטלפון לא מתקבלת.\n- חפשו את הלוגו 'Japan. Tax-free Shop' (Don Quijote, Bic Camera, סניפי Uniqlo הגדולים, חנויות כלבו, הרבה רשתות פארמה).\n- מוצרי צריכה נאטמים בשקית — **אל תפרצו את האטימה** עד שאתם עוזבים את יפן. שמרו את הניירת בתוך הדרכון עד ליציאה.\n\n**📶 SIM — eSIM אחד לכל טלפון.** שניים שמנווטים, מתרגמים תפריטים, ולפעמים נפרדים לשעה (Akihabara מול טיול חופשי, או חיי לילה) — כל טלפון צריך חבילת גלישה משלו.\n- **ההמלצות הטובות לשנת 2026:** **Ubigi** או **Sakura Mobile** (שניהם רצים על NTT Docomo — הכיסוי הרחב ביותר, כולל הרי Hakone) לאמינות; **Airalo** (SoftBank) לחבילת הגלישה הגמישה והזולה ביותר. **חבילת 20GB/30 יום** מכסה בנוחות שבועיים של מפות ורשתות חברתיות לאדם אחד.\n- **התקינו והפעילו את ה-eSIM לפני שאתם עולים למטוס**, אבל אל תפעילו את הגלישה עד שנחתתם.\n- אם טלפון אינו תואם eSIM, שכרו **pocket WiFi** בשדה התעופה (~¥800–1,000 ליום, מכשיר אחד מכסה את שניכם) — אבל שני eSIM נפרדים עדיפים לזוג שנפרד לפעמים.\n- השאירו את ה-SIM הביתי פעיל לשיחות ו-2FA.\n\n**📱 אפליקציות חובה (התקינו לפני היציאה):**\n- **Google Maps** — תחבורה ציבורית כמעט בזמן אמת; מציג מספרי פלטפורמה ואיזה קרון לעלות אליו.\n- **Google Translate** — הורידו את חבילת היפנית לשימוש ללא אינטרנט והשתמשו ב**מצב מצלמה** לקריאת תפריטים ושלטים בזמן אמת.\n- **Japan Travel by Navitime** — הניתוב הטוב ביותר לרכבות, אומר לכם בדיוק איזה קרון ואיזה יציאה.\n- **Tabelog** — ביקורות המסעדות המהימנות ביותר ביפן; כל מקום מעל **3.5 הוא טוב מאוד** למסע הקולינרי שלכם.\n- **Suica/PASMO** ב-Apple/Google Wallet.\n- **Klook / GetYourGuide** — הכרטיסים וסיורים המודרכים שלכם.\n- **Safety Tips** — התראות push רשמיות של JMA לרעידות אדמה וטייפון באנגלית (שימושי בעונת הטייפונים של סוף ספטמבר).\n- **LINE** — אפליקציית המסרים הדומיננטית ביפן, שימושית אם מדריך או מארח מתאם איתכם.\n\n**🔌 חשמל ועוד כמה דברים מעשיים:** יפן עובדת עם תקעים **Type A** (שני שיניים שטוחות) ב-100V. מטענים אמריקאים נכנסים ישירות; מבקרים מבריטניה/אירופה/אוסטרליה צריכים מתאם Type A זול (¥100–330 בכל Daiso). הביאו **מטען USB מרובה יציאות** קטן כי בחדרי מלון יש לעיתים קרובות מעט שקעים. **השירותים** הם חוויה בפני עצמה (מושבים מחוממים עם washlet בכל מקום) — אבל שמרו ברשות עצמכם ממחטות נייר ומגבת קטנה, כי חלק משירותי הציבור חסרים נייר או מייבשים."
    },
    {
     "id": "phrases",
     "icon": "🗣️",
     "title": "ביטויים שימושיים ביפנית",
     "intro": "קצת יפנית — ובמיוחד תודות מנומסות — מחממת באופן ניכר כל אינטראקציה עם מדריכים, צוות ב-ryokan ובעלי חנויות. אלה הביטויים שבאמת שווים את המאמץ. ההגייה מופיעה בתיאור.",
     "body": "לא חייבים לדבר שוטף — אנגלית עובדת מצוין בערים, ומצלמת התרגום של Google Translate מסתדרת עם תפריטים. אבל שתים-עשרה המילים האלה מכסות 90% מהרגעים היומיומיים, ו-*'sumimasen'* לבדו הוא סכין צבא שוויצרי של נסיעות ביפן. שמרו את הכרטיסיות לעיון מהיר בדרכים.",
     "cards": [
      {
       "name": "Sumimasen",
       "sub": "すみません",
       "desc": "soo-mee-mah-sen — סליחה / להסב תשומת לב של מלצר. המילה השימושית ביותר ביפן."
      },
      {
       "name": "Arigatou gozaimasu",
       "sub": "ありがとうございます",
       "desc": "ah-ree-GAH-toh go-zah-ee-mahs — תודה רבה (מנומס). כדאי לשלב עם הנהון קל בראש."
      },
      {
       "name": "Onegaishimasu",
       "sub": "お願いします",
       "desc": "oh-neh-gah-ee-shee-mahs — בבקשה / אני רוצה את זה. לשימוש בהזמנה או בקשה."
      },
      {
       "name": "Kore o kudasai",
       "sub": "これをください",
       "desc": "koh-reh oh koo-dah-sigh — את זה, בבקשה. להצביע על התפריט או המנה."
      },
      {
       "name": "Oishii!",
       "sub": "おいしい！",
       "desc": "oy-shee — מעדן! מנצח בכל דוכן רחוב או בר דלפק."
      },
      {
       "name": "Kanpai!",
       "sub": "乾杯！",
       "desc": "kahn-pie — לחיים! להשתמש בשפע ביום ההולדת ה-40."
      },
      {
       "name": "Eigo no menu wa arimasu ka?",
       "sub": "英語のメニューはありますか？",
       "desc": "ay-go no menu wa ah-ree-mahs ka — יש לכם תפריט באנגלית?"
      },
      {
       "name": "Ikura desu ka?",
       "sub": "いくらですか？",
       "desc": "ee-koo-rah dess ka — כמה זה עולה?"
      },
      {
       "name": "Toire wa doko desu ka?",
       "sub": "トイレはどこですか？",
       "desc": "toy-reh wa doh-koh dess ka — איפה השירותים?"
      },
      {
       "name": "Daijoubu desu",
       "sub": "大丈夫です",
       "desc": "die-JOH-bu dess — בסדר גמור / לא, תודה / הכל אוקיי. דרך מנומסת לסרב בלי אי-נוחות."
      },
      {
       "name": "Itadakimasu / Gochisousama",
       "sub": "いただきます／ごちそうさま",
       "desc": "ee-tah-dah-kee-mahs / go-chee-so-sah-mah — נאמר לפני האוכל / אחרי הארוחה, להביע הכרת תודה על המזון."
      },
      {
       "name": "Osusume wa?",
       "sub": "おすすめは？",
       "desc": "oh-soo-soo-meh wa — מה אתם ממליצים? מושלם לאוהבי הרפתקאות קולינריות ליד הדלפק."
      }
     ]
    },
    {
     "id": "gay-travel",
     "icon": "🏳️‍🌈",
     "title": "טיול גאה ביפן",
     "intro": "יפן היא אחת המדינות הבטוחות והמסבירות פנים בעולם לזוג גאה — פשע נמוך, אפס עוינות כלפי תיירים מהקהילה, וסצנת לילה שהיא אגדה בפני עצמה. כך קוראים את התרבות המקומית, וכך מוצאים את הבית שלכם שם.",
     "body": "**האווירה: בטוחה, סובלנית, אבל שמורה.** יפן בטוחה לחלוטין — מבחינה חוקית ופיזית — לתיירים מהקהילה: **אין סכנת הטרדה** בחיי היומיום, ו**שני גברים שמשתפים חדר במלון או ברִיוֹקאן זה דבר שלא מושך תשומת לב בכלל**. בעת ההזמנה: **'twin' פירושו שתי מיטות** ו**'double' פירושו מיטה זוגית אחת** — בקשו במפורש מה שאתם רוצים. נישואים חד-מיניים לא מוכרים ברמה הלאומית, אבל כתיירים לא תרגישו שום מגבלה מעשית.\n\n**חיבה פומבית — עניין של מינון, לכולם.** הפגנות חיבה בפומבי הן מינימליות בתרבות היפנית, לכולם — גאים וסטרייטים כאחד. **אחיזת ידיים עוברת בשקט** בערים כמו Tokyo, Osaka, ו-Shimokitazawa הבוהמיינית — פשוט כייל למידה של האנרגיה השמורה מסביב, בעיקר במקומות מסורתיים, כפריים ובמקדשים. בתוך הרבעים הגאים, האווירה פתוחה ונינוחה — **ב-Ni-chome אפשר לבטא חיבה בחופשיות מלאה.**\n\n**🏳️‍🌈 Tokyo — Shinjuku Ni-chome.** **הרובע הגאה הצפוף ביותר על פני האדמה** — מעל 300 ברים קטנטנים בכמה בלוקים שנוחים להליכה רגלית, ו-5–15 דקות הליכה ממלונות Shinjuku. מושלם לערב יום הולדת. נקודות כניסה קלות וידידותיות לתיירים:\n- **AiiRO Cafe** — בר העמידה האייקוני בפינה שבו המסיבה גולשת לרחוב. נקודת הכיוון והמפגש; הסטופ הראשון הקל ביותר לשני גברים תיירים.\n- **Arty Farty & The Annex** — ותיק ואמין, מעורב וידידותי לתיירים, עם פיסטה לריקודים אחרי ~11 בלילה.\n- **Campy! Bar** — בר דראג פלמבויאנטי ומשעשע (מנוהל על ידי המלכה המפורסמת Bourbonne); כולם מתמזגים.\n- **Dragon Men** — מקום גדול יותר עם במה ומופעי דראג בסופי שבוע.\n- **Eagle Tokyo Blue** — אווירה נינוחה, 'בירי', מופעי דראג מהטובים שיש (בדקו את האינסטגרם שלהם למה שיועלה בתאריכים שלכם).\n- **AiSOTOPE Lounge** — מועדון ריקודים אמיתי, הגדול ביותר, לסיום הלילה (בדקו Resident Advisor / אינסטגרם לליינאפ; 20+, הביאו דרכון לזיהוי).\n\n*סיור יום הולדת מיוחד: מתחילים בנינוחות ב-AiiRO → כיף קמפי ב-Campy! → שירה וריקוד ב-Arty Farty → מופע דראג ב-Dragon Men או Eagle → מסיימים בפיסטה של AiSOTOPE. הכול ברגל. תעשו את זה ב-Sat Sep 19 או Sun Sep 20 לאנרגיה של סוף שבוע.*\n\n**🏳️‍🌈 Osaka — Doyama-cho.** רובע גאה קומפקטי וידידותי ליד Umeda (30+ ברים בכמה בלוקים), שמתואר לרוב כ*חמים ונגיש יותר לתיירים מ-Ni-chome*. הערבים ב-Osaka (Mon 28 / Tue 29) הם באמצע השבוע ורגועים — עברו בעוגנים האמינים והדוברי אנגלית:\n- **FrenZ-FrenZY** — בבעלות אוסטרלית, קריוקי בחינם, ססגוניות של קשת הגאווה, צוות שממש מדבר אנגלית ומקשר בין אנשים.\n- **Grand Slam** — בר קריוקי גאה קלאסי, עוגן ידידותי נוסף לדוברי אנגלית.\n- **Eagle Osaka** — האופציה הגדולה והקלה לכניסה (3 קומות, ללא מזומן, כניסה חינם ב-Mon–Thu).\n*שלבו ערב ב-Doyama עם שקיעה מ-Umeda Sky Building — שניהם בצפון העיר.*\n\n**🏳️‍🌈 Kyoto — קטן אבל קסום.** אין 'כפר' גאה, רק קומץ ברים אינטימיים באזור **Kiyamachi/Kawaramachi**. **Apple** הוא בר קטן, ידידותי לתיירים, לגברים בלבד, עם בעלים חמים וקריוקי בחינם — כל כך קטן שבסוף מסתיימים בשיחה עם כולם (Tue–Sun, מזומן בלבד). בואו עם ציפיות נמוכות מהסקאלה וציפיות גבוהות מהחברות.\n\n**נימוסי בר קטן (שונים ממה שמכירים במערב):**\n- **Otoshi / דמי מושב:** ברים קטנים רבים גובים ¥500–1,500 לישיבה (לפעמים עם חטיף). זה **תקין לחלוטין, לא הונאה**.\n- **אין לצלם עובדים או אורחים** ללא אישור מפורש — רבים אינם 'אאוט' בפומבי.\n- **אם בר קטן לא יכניס אתכם** (חברים בלבד / יפנים בלבד / תמה ספציפית), זה **שגרה, לא דבר אישי** — פשוט עברו הלאה.\n- **מזומן הוא המלך** — הכינו ¥15,000–20,000 ביניכם ובנוסף כרטיס לאתרים ללא מזומן (Eagle, AiSOTOPE). הביאו דרכונים לזיהוי במועדונים (אכיפה של 20+).\n\n**תזמון ובטיחות:** Ni-chome מגיע לשיא ב-Fri/Sat אחרי 10–11 בלילה. התאריכים שלכם לא חופפים ל-Tokyo Rainbow Pride (אביב) — המשחק הוא סיור ברים מאורגן, לא פסטיבל. **אכלו לפני השתייה** — רוב הברים מגישים משקאות בלבד (קחו yakitori ב-Omoide Yokocho הסמוך). יפן נמנית עם המדינות הבטוחות ביותר בעולם; שמרו על ערנות רגילה באזורי הלילה ו**הימנעו מ'ציידים'** שמנסים לגרור אתכם לברים 'בחינם' (שטר לא ירד). חירום: **משטרה 110, אמבולנס 119**; בעברית עוד אין שירות, אבל יש קו עזרה לתיירים 24 שעות — **Japan Visitor Hotline 050-3816-2787**."
    },
    {
     "id": "weather-packing",
     "icon": "🌦️",
     "title": "מזג אוויר ומה לארוז",
     "intro": "חלון הטיול שלכם, 18 בספטמבר עד 2 באוקטובר, מתרחש בתקופת המעבר בין סוף הקיץ לתחילת הסתיו ביפן: ימים חמים ולחים שמתמתנים לנעימות אמיתית, ועם סיכון סופות (שבדרך כלל ניתן להתמודד איתן). ארזו בשכבות, תכננו לגשם, והתייחסו לנוף פסגת Mt. Fuji בלי עננים כמתנת הפתעה.",
     "body": "**מזג האוויר לאורך הטיול**\n\n- **Tokyo (18–22 בספטמבר):** החלק הכי חם והלח של הטיול. צפו לטמפרטורות שיא של **29–30°C עם לחות כבדה**, ערבות קצת יותר קרירות ונעימות — מושלם לגגות כמו Shibuya Sky ולילות ב-Ni-chome.\n- **Hakone (23 בספטמבר):** גובה רב = **קריר בצורה מורגשת**, במיוחד לאחר שקיעה. קחו שכבה קלה לערב על מרפסת ה-onsen ב-ryokan.\n- **Kyoto ו-Osaka (24–29 בספטמבר):** עדיין חם (**שיא ~28–30°C**) וכן לח פנימה יותר, אבל לקראת סוף ספטמבר זה נעים יותר — ימים בסוף העשרים, ערבות בתחילת העשרים. בוקרים בין המקדשים יכולים להיות מרעננים.\n- **חזרה ל-Tokyo (30 בספטמבר–1 באוקטובר):** תחילת אוקטובר היא לעיתים הנקודה המתוקה — **ימים נעימים בסוף העשרים, לילות בתחילת העשרים**, פחות לחות מאשר בשבוע הראשון.\n\n**שני ענייני מזג אוויר שכדאי לתכנן מסביבם**\n\n1. **הלחות מרוכזת בתחילת הטיול.** ימי ה-Tokyo הראשונים הם הזיעתיים ביותר. קחו מאוורר יד, מגבת קירור ומים; עשו סיורי חוץ לחים בבוקר ושמרו את הנקודות עם מיזוג (teamLab, חנויות Akihabara, depachika) לשעות השיא של הצהריים.\n2. **עונת הסופות אמיתית אבל פחות מפחידה ממה שנדמה.** סוף ספטמבר הוא שיא העונה על הנייר. הסיכון המעשי הוא **שיבוש, לא סכנה**: סופה חולפת יכולה לעצור את ה-Shinkansen ולסגור את ה-ropeway וספינת הפיראטים ב-Hakone. מפעילי הרכבות מודיעים על הפסקות מתוכננות בערב שלפני ומחדשים פעילות מהר לאחר המעבר. שימו על הטלפון את **אפליקציית JMA או Windy**, קנו ביטוח נסיעות שמכסה עיכובים, ושמרו **1–2 חריצים גמישים/פנימיים** כדי שסופה לא תהרוס תוכנית קבועה.\n\n**שימו לב:** **עלי הסתיו המפורסמים וצמצמו הלילה של Kyoto מתחילים רק בסוף אוקטובר–נובמבר** — מאוחר מדי בשבילכם. אתם בעונה הירוקה החמה, אז אל תבנו תוכניות סביב צבעי הסתיו. השכרת yukata מסתיימת בדרך כלל בסביבות ה-20 בספטמבר, כך שב-Kyoto תשכרו **kimono** רגיל, לא את ה-yukata הקל של הקיץ.",
     "cards": [
      {
       "name": "שכבות, לא נפח",
       "sub": "לבוש",
       "desc": "חולצות קצרות ונושמות לימי Tokyo/Osaka החמים + שרוול ארוך קל אחד או הודי לאזורי Hakone הקרירים ולבוקרי/ערבי מקדשים ב-Kyoto."
      },
      {
       "name": "מעיל גשם (לא מטריה)",
       "sub": "אסטרטגיית גשם",
       "desc": "רוחות הסופה הורסות מטריות. מעיל גשם קומפקטי מתקפל הוא הרבה יותר טוב; קנו מטריה זולה מ-konbini רק לגשם קל."
      },
      {
       "name": "נעלי הליכה נוחות",
       "sub": "הנעלה",
       "desc": "תלכו קילומטרים ביום ועוד מדרגות ב-Fushimi Inari ובפארק הקופים. סגנון החלקה מקל על הסרת נעליים ב-ryokan ובמקדשים. ארזו גרביים נקיים ללא חורים."
      },
      {
       "name": "ערכת הישרדות ליום לח",
       "sub": "נוחות בשבוע הראשון",
       "desc": "מאוורר יד, מגבת קירור, מאוורר נייד, קרם הגנה ומגבת קטנה — ימי ה-Tokyo הראשונים פשוט לחים."
      },
      {
       "name": "אפליקציות מזג אוויר",
       "sub": "מעקב סופות",
       "desc": "JMA / Windy למעקב סערות; אפליקציית 'Safety Tips' הרשמית לעדכוני JMA באנגלית. eSIM עם גלישה מבטיח שתקבלו אותם."
      },
      {
       "name": "שקית קניות קטנה",
       "sub": "פרקטי",
       "desc": "משמשת גם כשקית אשפה (פחים נדירים) ומחזיקה את הרכישות מ-Akihabara/Donki. פחים נדירים, אז שאו את הפסולת שלכם."
      }
     ]
    },
    {
     "id": "events",
     "icon": "🎌",
     "title": "מה קורה בתאריכים שלכם",
     "intro": "אירועים עם תאריכים קבועים בתוך החלון שלכם, 18 ספט – 2 אוק' 2026 — עכשיו שהעברנו את Hakone לחמישי 24 ספט, אחרי שיא ה-Silver Week.",
     "body": "### 🎌 Silver Week (שבת 19 – רביעי 23 ספט) — ולמה העברנו את Hakone\nאשכול נדיר של 5 ימי חופשה (יום כבוד לקשישים ב-21, שוויון יום ולילה ב-23): הנסיעות הפנימיות בשיא ו**ה-shinkansen פועל כולו בהזמנות מראש**. חדר הרייוקאן ליום-הולדת שלכם הוא עכשיו **חמישי 24 ספט — היום שבו ההמונים חוזרים הביתה**, כך ש-Hakone שקטה יותר *וגם* זולה יותר במידה משמעותית. טוקיו פשוט בולעת את ליל-החופשה הנוסף (עיר גדולה לא שמה לב). בכל זאת — הזמינו את הרייוקאן ואת ה-shinkansen Odawara→Kyoto ב-25 ספט מראש.\n\n### ✅ נוחת בול בחלון שלכם\n- **Grand Sumo — Aki Basho** (Ryogoku): הטורניר רץ 13–27 ספט; **שני 21 ספט** הוא יום טורניר אמיתי. הכרטיסים נפתחו בערך **ב-8 אוגוסט** — קנו עכשיו.\n- **Tsukimi — ירח הקציר (Jugoya)**: ליל **שישי 25 ספט** — ערב הגעתכם הראשון ב-Kyoto. יעננו? הירח המלא האמיתי הוא **ראשון 27 ספט**.\n- **Oedo Antique Market** (Tokyo Int'l Forum): **ראשון 20 ספט** בבוקר (אשרו ב-antique-market.jp; מתבטל בגשם).\n- **טיול יום Kamakura** (החדש — **23 ספט**): Great Buddha, Hase-dera, קו Enoden לאורך הים — בריחה נינוחה מ-Silver Week לפני הרייוקאן.\n\n### 🎮 אופציונלי — כדאי לדעת\n- **Tokyo Game Show 2026** (Makuhari): **ימי קהל שבת 19 / ראשון 20 / שני 21** — חצי-יום אפשרי לשותף שחי אנימה.\n- **teamLab Borderless** (Azabudai Hills): teamLab שני ושונה, אם בא לכם עוד — מצוין לחריץ גשום.\n- **חיי-הלילה הגאים ב-Osaka** (Doyama-cho): הלילה שלכם ב-Osaka הוא **שלישי 29 ספט**, יום חול שקט — EXPLOSION & EAGLE Osaka.\n\n### 🌀 הערת עונה\nסוף ספטמבר הוא זנב **עונת הטייפון**. שמרו פעילות-גיבוי מקורה/גמישה לכל עיר; הפריטים עם הסיכון הגבוה ביותר הם **הלופ הפתוח-אוויר ב-Hakone (24 ספט)** ו**טיסות ההגעה/יציאה שלכם**. עקבו אחר JMA 3–5 ימים מראש."
    },
    {
     "id": "booking-checklist",
     "icon": "✅",
     "title": "רשימת הזמנות וציר זמן",
     "intro": "חלק מהחוויות הטובות ביותר בטיול הזה דורשות כניסה בשעה קבועה או מוגבלות בכמות — וכרטיסים נגמרים מהר, כמה מהן עם דדליינים נוקשים שאי אפשר לפספס. הנה מה להזמין ובדיוק כמה זמן מראש, לפי סדר דחיפות.",
     "body": "### ⏰ דדליינים נוקשים (אתם ~6 שבועות לפני — פעלו עכשיו)\n- **עכשיו – כרטיסי Sumo** (21 בספט'): המכירות נפתחו ~8 באוג'. קנו מיד.\n- **עכשיו – Hakone ryokan** (24 בספט', יום ההולדת): חדרים עם onsen פרטי נגמרים מהר; הזמינו כבר עכשיו גם אם זה אחרי Silver Week.\n- **עכשיו – מושבי Shinkansen**: Odawara→Kyoto (25 בספט') ו-Osaka→Tokyo (30 בספט') דרך SmartEX.\n- **10 בספט', 10:00 JST – Ghibli Museum** (ל-1 באוק'): שחרור ב-Lawson, נגמר תוך דקות, השם בכרטיס חייב להתאים לדרכון.\n- **כמה שבועות מראש – teamLab Planets, Shibuya Sky (שקיעה), ארוחת maiko, מסעדות מובחרות**.\n\n---\n### ⏰ דדליינים נוקשים (אתם ~6 שבועות לפני — פעלו עכשיו)\n- **עכשיו – כרטיסי Sumo** (21 בספט'): המכירות נפתחו ~8 באוג'. קנו מיד; הביקוש בחגים גבוה.\n- **עכשיו – Hakone ryokan + Romancecar** (23 בספט', Silver Week): חדרי onsen פרטיים ומושבים שמורים נעלמים. הזמינו היום.\n- **עכשיו – מושבי Shinkansen** (Odawara→Kyoto 24 בספט', Osaka→Tokyo 30 בספט'): הזמינו דרך SmartEX; Silver Week = הכל שמור מראש.\n- **10 בספט', 10:00 JST – Ghibli Museum** (ל-1 באוק'): שחרור ב-Lawson, נגמר תוך דקות, השם בכרטיס חייב להתאים לדרכון.\n- **כמה שבועות מראש – teamLab Planets, Shibuya Sky (סלוט שקיעה), ארוחת maiko, מסעדות מובחרות**.\n\n---\n**🚨 דדליינים נוקשים — הגדירו התראות בטלפון**\n\n- **Ghibli Museum (Mitaka):** כרטיסים נמכרים אך ורק דרך **Lawson Ticket**, משוחררים ב-**10:00 JST ב-10 לחודש הקודם** לכל החודש הבא. לביקורכם ב-30 בספט'/1 באוק' בדרך חזרה, היו מחוברים ומוכנים ב-**10:00 JST ב-10 בספט' 2026**. סלוטים לסופי שבוע וחגים נגמרים תוך ~15 דקות. **השם על הכרטיס חייב להתאים בדיוק לדרכון; הביאו אותו.** זה הדדליין האמיתי היחיד שלכם.\n- **Grand Sumo (Aki Basho):** כרטיסים יצאו למכירה ב-**8 באוג' 2026** — הזמינו ברגע שהמכירות נפתחות (Ticket Oosumo הרשמי / buysumotickets.com). המושבים הטובים נגמרים תוך שעות.\n- **כרטיסי ימי-קהל Tokyo Game Show:** מכירה מקדימה בלבד אונליין, ללא מכירה בדלת — קנו ברגע שהם משוחררים.\n\n**🏆 הזמינו חודשים מראש (3–6 חודשים) — הפריטים הכי משמעותיים ליום ההולדת**\n\n- **Hakone onsen ryokan עם אמבט פרטי בחדר/בחוץ (23 בספט'):** ההזמנה החשובה ביותר. הזמינו **3–6 חודשים מראש** — סוף ספטמבר + Silver Week אומרים שחדרי onsen פרטיים מובחרים (Gora Hanaougi, Ginyu, Gora Kadan, Yama no Chaya) נגמרים. הזמינו ישיר או דרך Ikyu/Relux/Japanican; בקשו *חדר עם אמבט פרטי בחוץ (kashikiri/in-room rotenburo)* ו**ציינו שזה יום הולדת 40** — הרבה מהם מוסיפים עוגה או sake.\n- **ארוחת ozashiki פרטית עם maiko/geiko (Kyoto):** נקודת השיא של יום ההולדת — ואחד הדברים הכי קשים לתאם. הזמינו **3–6 שבועות מראש** (Gion MAIKOYA, Geisha Show Kyoto, או סיור פרטי ב-Viator). ודאו שיש תמיכה באנגלית ואם מדובר ב-maiko או geiko אמיתי/ת.\n\n**📅 הזמינו 2–4 שבועות מראש**\n\n- **teamLab (Planets או Borderless):** כניסה בשעה קבועה, נגמר שבועות מראש — בחרו אחד, הזמינו סלוט ערב לאווירה רומנטית.\n- **Shibuya Sky סלוט שקיעה:** נגמר שבועות מראש; הזמינו חלון ~30–40 דקות לפני השקיעה באתר הרשמי או ב-Klook.\n- **Warner Bros. Studio Tour (Harry Potter):** ספציפי לתאריך ושעה, נגמר בסופי שבוע. כוונו לרגל הטוקיו הראשונה שלכם (18–22 בספט').\n- **Universal Studios Japan / Super Nintendo World (אם אתם עושים את זה, שני 28 בספט'):** קנו מראש **Studio Pass עם תאריך**; הבטיחו כניסה ל-Super Nintendo World דרך **Express Pass שכולל כניסה ל-Nintendo**, או תפסו כרטיס Area Ticket חינמי עם שעה קבועה דרך אפליקציית USJ ברגע שאתם בפנים (נגמר תוך דקות).\n- **סיור anime פרטי ב-Akihabara, סיור אוכל ב-Tsukiji + שיעור sushi, סיור אוכל ב-Osaka, טקס תה ב-Kyoto / צילום ב-kimono / סיור ב-Gion:** כולם 1–4 שבועות מראש; הסלוטים הפרטיים הטובים נעלמים.\n- **בתי קפה תמטיים** (Pokemon Cafe Nihonbashi, Kirby Cafe Skytree): ~חודש מראש אם אתם רוצים אותם.\n\n**🚆 לפני הטיסה / עם ההגעה**\n\n- **רישיון נהיגה בינלאומי (לשניכם):** אם אתם רוצים את **Street Kart / Mario Kart go-kart tour**, חייבים להשיג IDP לפי אמנת ז'נבה-1949 לפני היציאה מהארץ — לא ניתן לקבל אותו ביפן. בלי IDP = אין נהיגה.\n- **כרטיסי JR:** **דלגו על JR Pass הארצי** — נסיעות נקודה-לנקודה עולות פחות מחצי המחיר למסלול הזה. הזמינו מושבי Shinkansen (Odawara→Kyoto Hikari; Osaka→Tokyo Nozomi) דרך **אפליקציית SmartEX** 1–2 שבועות מראש (עמוס בסוף ספטמבר). קנו את **N'EX Tokyo Round-Trip Ticket (¥5,000)** כיוון שאתם מגיעים ויוצאים דרך Tokyo. הוציאו **Hakone Free Pass** (יומיים, ¥7,100 מ-Shinjuku) + תוספת מושב ל-Romancecar. הגדירו **Mobile Suica** ב-Apple Wallet לכל התחבורה המקומית.\n- **eSIM + משלוח מזוודות:** התקינו eSIM לפני הטיסה; תכננו **Yamato takkyubin** לשלוח מזוודות Tokyo→Kyoto (מדלגים על Hakone) ו-Osaka→Tokyo (יום למחרת, לא אותו יום).",
     "cards": [
      {
       "name": "Ghibli Museum",
       "sub": "התראה: 10 בספט', 10:00 JST",
       "desc": "דרך Lawson בלבד, שחרור חודש מראש, נגמר תוך ~15 דקות. השם בכרטיס חייב להתאים לדרכון."
      },
      {
       "name": "Grand Sumo",
       "sub": "למכירה מ-8 באוג'",
       "desc": "הזמינו ברגע שהמכירות נפתחות. המושבים הטובים נגמרים תוך שעות."
      },
      {
       "name": "Hakone ryokan",
       "sub": "3–6 חודשים מראש",
       "desc": "חדר עם onsen פרטי בחדר; ציינו יום הולדת 40. נגמר ב-Silver Week."
      },
      {
       "name": "Maiko dinner",
       "sub": "3–6 שבועות מראש",
       "desc": "ozashiki פרטי ב-Gion. ודאו אנגלית + maiko אמיתי/ת לעומת geiko."
      },
      {
       "name": "teamLab Planets",
       "sub": "2–4 שבועות מראש",
       "desc": "כניסה בשעה קבועה (30.9 בערב, סלוט ~17:30), נגמר שבועות מראש."
      },
      {
       "name": "USJ / Super Nintendo World",
       "sub": "מוקדם מראש (שני 28 בספט')",
       "desc": "Studio Pass עם תאריך + Express Pass עם כניסה ל-Nintendo, או תפסו Area Ticket חינמי באפליקציה עם הפתיחה."
      },
      {
       "name": "IDP לקארטינג",
       "sub": "לפני הטיסה",
       "desc": "שני הנהגים צריכים רישיון נהיגה בינלאומי לפי אמנת ז'נבה-1949 מהארץ. לא מנפיקים ביפן."
      },
      {
       "name": "JR / Shinkansen",
       "sub": "1–2 שבועות מראש",
       "desc": "דלגו על JR Pass. SmartEX למושבים, N'EX הלוך-חזור ¥5,000, Hakone Free Pass, Mobile Suica."
      }
     ]
    },
    {
     "id": "budget",
     "icon": "💴",
     "title": "סקירת תקציב",
     "intro": "עלויות יומיות גסות לזוג, על בסיס מלון ברמה בינונית עם כמה בזבוזים מכוונים ליומולדת. יפן מאפשרת לאכול נהדר בזול (¥900 ramen) או לפנק בגדול (¥40,000 omakase) — הטווחים האלה מבוססים על הסגנון שציינתם: \"מלונות סבירים, בזבוזים על חוויות נבחרות\". כל הסכומים הם לזוג אלא אם צוין אחרת.",
     "body": "**עלויות שוטפות יומיות (לזוג, רמה בינונית)**\n\n- **מלון ברמה בינונית (חדר זוגי):** ~**¥16,000–38,000/לילה** תלוי בעיר ובנכס. אפשרויות בינוניות-תקציביות (APA, Sotetsu Fresa, Candeo) עומדות על ¥14,000–24,000; בחירות מרכזיות/טרנדיות יותר (Gracery, Cross Hotel, Shibuya Excel) ¥22,000–38,000.\n- **אוכל, יום רגיל:** ~**¥8,000–16,000/לזוג/יום**. ארוחת בוקר מה-konbini (¥1,000–1,500), צהריים מזדמנים של ramen או אוכל רחוב (¥2,000–4,000), וארוחת ערב ב-izakaya או okonomiyaki עם משקאות (¥6,000–10,000). ימים של אוכל רחוב (Tsukiji, Nishiki, Kuromon, Dotonbori) נוחתים בטווח דומה — ¥3,000–6,000 לאדם כשמגוונים.\n- **תחבורה מקומית:** ~**¥1,500–3,000/לזוג/יום** בנגיעת Suica ברכבות/אוטובוסים. הוסיפו כניסות לאטרקציות (סיפוני תצפית ~¥2,500 לאדם, מקדשים ¥500 כ\"א).\n- **חיי לילה (לילה ב-Ni-chome/Doyama):** ~**¥8,000–15,000 לאדם** לסיבוב ברים מלא ליומולדת עם שתייה + כניסה לקלאב אחד; כמה ברים מזדמנים עולים הרבה פחות (¥4,000–6,000/לזוג). קחו ¥15,000–20,000 מזומן ביניכם (הרבה ברים מזומן בלבד + חיובי ישיבה של ¥500–1,000).\n\n**תחבורה בין-עירונית (חד-פעמי, לאדם)**\n\n- Shinkansen מנקודה לנקודה לכל הלופ: **~¥27,000–33,000 לאדם** (Odawara→Kyoto ~¥12,320; Osaka→Tokyo ~¥14,400; הסעות קצרות Kyoto/Osaka/Nara ¥400–820). **ה-JR Pass (¥80,000+) לא משתלם** למסלול הזה.\n- N'EX הלוך-חזור ¥5,000 לאדם; Hakone Free Pass ¥7,100 לאדם + ~¥1,200 מקום ב-Romancecar לכל כיוון.\n- משלוח מזוודות: ~¥2,300–2,630 למזוודה לכל קטע.\n\n**בזבוזי היומולדת (לזוג, חד-פעמי)**\n\n- **לינה ב-ryokan עם אמבט פרטי ב-Hakone (לילה אחד, kaiseki + ארוחת בוקר כלולים):** ~**¥70,000–150,000** לנקודת המתיקות של הבינוני-מפונק (Gora Hanaougi/Ginyu/Yama no Chaya); Gora Kadan ברמה הגבוהה עולה ¥160,000–260,000.\n- **ארוחת maiko/geiko פרטית:** מופע + ארוחה משותפת ~¥12,000–20,000 לאדם; שעה פרטית עם maiko ~¥80,000–100,000/לקבוצה.\n- **חד-פעמיים אחרים:** סיור אנימה פרטי ב-Akihabara ~$60–95 לאדם; סיור Tsukiji + שיעור סושי ~¥35,000/לזוג; צילומי kimono/samurai ~¥40,000–66,000/לזוג; go-karts ~¥22,000–40,000/לזוג; Warner Bros HP ~¥7,000 לאדם; USJ יום שלם + Express ~¥18,000–35,000 לאדם.\n\n**סכומים כוללים בערך**\n\n- **יום \"נורמלי\" מאוזן** (מלון + אוכל + תחבורה + 1–2 אטרקציות בתשלום): בערך **¥35,000–60,000/לזוג/יום**.\n- **יום בזבוזי** (למשל לילה ב-ryokan ב-Hakone, או ארוחת maiko + תוספות נחמדות): **¥90,000–180,000+/לזוג**.\n- **כלל האצבע למזומן:** תמיד שמרו ~¥15,000–20,000 מזומן עליכם — אוכל רחוב, izakaya קטנות, ברים ב-Ni-chome, Kuromon/Nakatanidou, וחנויות וינטג' הן לרוב מזומן בלבד. משכו ין מכספומטי 7-Bank (7-Eleven) או Japan Post, שמקבלים כרטיסי חוץ 24/7.",
     "cards": [
      {
       "name": "מלון ברמה בינונית",
       "sub": "ללילה, חדר זוגי",
       "desc": "¥16,000–38,000 תלוי בעיר/נכס. תקציבי-בינוני מ-¥14,000."
      },
      {
       "name": "אוכל, יום רגיל",
       "sub": "לזוג",
       "desc": "¥8,000–16,000 עם ארוחת בוקר מה-konbini, צהריים מזדמנים, ארוחת ערב ב-izakaya עם משקאות."
      },
      {
       "name": "יום מאוזן רגיל",
       "sub": "הכל כלול, לזוג",
       "desc": "~¥35,000–60,000 כולל מלון, אוכל, תחבורה, 1–2 אטרקציות בתשלום."
      },
      {
       "name": "יום בזבוזי",
       "sub": "לזוג",
       "desc": "¥90,000–180,000+ ללינה ב-ryokan ב-Hakone או ארוחת maiko פרטית + תוספות."
      },
      {
       "name": "Shinkansen לכל הלופ",
       "sub": "לאדם",
       "desc": "~¥27,000–33,000 מנקודה לנקודה. וותרו על ה-JR Pass שעולה ¥80,000."
      },
      {
       "name": "מזומן לשאת",
       "sub": "תמיד ביד",
       "desc": "¥15,000–20,000 ביניכם. הרבה מקומות אוכל-רחוב/ברים/וינטג' מזומן בלבד."
      }
     ]
    }
   ]
  },
  "restaurants": [
   {
    "name": "Tsukiji Outer Market — Marutake tamagoyaki + seafood crawl",
    "city": "Tokyo",
    "cuisine": "אוכל רחוב / פירות ים בשוק",
    "area": "Tsukiji, Chuo-ku (תחנת Tsukiji בקו Hibiya, 2 דקות; או Tsukijishijo בקו Oedo)",
    "vibe": "דוכני רחוב / סיור בוקר בשוק",
    "signatureDish": "Marutake atsuyaki-tamago על שיפוד (חביתה מתוקה בשכבות, כ-100–150 yen); ועוד קרקל על האש, uni, שיפודי טונה טרייה, ו-tamago מ-Yamacho",
    "price": "כ-1,500–3,000 yen לאדם בטעימות; בוקר בלבד (הדוכנים נפתחים בערך ב-6:00 AM, רבים נגמרים לפני אמצע הבוקר). מזומן.",
    "reservation": "ללא הזמנה — מגיעים ומסתדרים. מומלץ להגיע מוקדם (לפני 9 AM) כדי להקדים את ההמון ולתפוס הכל בשיאו.",
    "why": "סיור הבוקר הקלאסי של אוכל רחוב טוקיאי — ניצחון בטוח לבוקר הראשון אחרי הנחיתה ב-NRT בערב שישי. אוכלים בעמידה בין סוחרי הדגים, מרגישים את הדופק האמיתי של העיר. התחלה מושלמת לטיול, קלה ולא מחייבת, לזוג שאוהב אוכל רחוב ותרבות קולינרית יפנית."
   },
   {
    "name": "Tonkatsu Tonki (Meguro Honten)",
    "city": "Tokyo",
    "cuisine": "Tonkatsu (קאונטר קאלטי)",
    "area": "Meguro (3 דקות מתחנת Meguro, יציאה מערבית)",
    "vibe": "קאונטר / מוסד ותיק עם פולחן אמיתי",
    "signatureDish": "סט rosu katsu (שמן) או hire katsu (רזה) — זה כל התפריט, מאז 1939",
    "price": "כ-2,000–2,500 yen לאדם; ארוחת ערב מ-4:00 PM (ארוחת צהריים מוגבלת). ידידותי למזומן.",
    "reservation": "ללא הזמנה. מגיעים בדיוק ב-4:00 PM כשנפתח כדי להיכנס ישירות, או מצפים לתור. חשוב לשבת בקאונטר U — זו כל הנקודה, לצפות בכוריאוגרפיה של המטבח הפתוח כמו מופע.",
    "why": "פיסת היסטוריה החיה של טוקיו, ומוסד קאונטר קאלטי בדיוק כמו שביקשתם. המטבח הפתוח התיאטרלי, עם תפריט של פריט אחד בלבד, הוא בדיוק חוויית המומחיות האותנטית ללא פשרות שהזוג הזה יאהב — וזול מספיק כדי להתאים בין שתי ארוחות גדולות יותר."
   },
   {
    "name": "Soba House Konjiki Hototogisu",
    "city": "Tokyo",
    "cuisine": "Ramen (כוכב Michelin, shoyu על בסיס צדפות)",
    "area": "Shinjuku Ni-chome — ממש בלב הרובע הגאי (תחנת Shinjuku-sanchome כ-5 דקות; צעדים מברי Ni-chome)",
    "vibe": "קאונטר / Michelin ramen מיוחד — גאי-פרנדלי / סמוך ל-Ni-chome",
    "signatureDish": "Ramen shoyu עם צדפות ופורצ'יני (hamaguri + עוף + חזיר עם שמן כמהין ושמן בצל ירוק)",
    "price": "כ-1,300–2,200 yen לאדם; צהריים 11:00–15:00 וערב 18:30–21:00, סגור ראשון/שני. מזומן בלבד.",
    "reservation": "ללא הזמנה — לוקחים מספר בהגעה, מגיעים מוקדם. ממש ב-Ni-chome, מושלם לשלב עם לילה בברים.",
    "why": "קערת Michelin שיושבת ממש בתוך Shinjuku Ni-chome — הביס הגאי-פרנדלי המושלם לפני או אחרי חיי הלילה. מציע את כל הטוב של ramen קאלטי עם קערה מעודנת ויוצאת דופן של צדפות וכמהין, במקום tonkotsu הסטנדרטי — בדיוק לזוג שאוהב משהו מיוחד ובלתי צפוי."
   },
   {
    "name": "Zauo Shinjuku (fishing izakaya)",
    "city": "Tokyo",
    "cuisine": "Izakaya / פירות ים (חוויית דיג עצמאית)",
    "area": "Shinjuku (Washington Hotel, כ-8 דקות מיציאה דרומית/מערבית של תחנת Shinjuku)",
    "vibe": "חוויה מוזרה ומהנה / ארוחת יום הולדת עם צחוקים מובטחים",
    "signatureDish": "הדג שאתם תופדים בעצמכם מהבריכה — מוגש כ-sashimi, על האש, או tempura; דג ים ופלונדרה הם הציד המרכזי",
    "price": "כ-5,000–8,000 yen לאדם כולל שתייה; ארוחת ערב. טקס תיפוף וריגוש כשתופסים דג.",
    "reservation": "מומלץ להזמין מראש, במיוחד לשולחן בצד הסירה (הזמנה אונליין). אפשר לציין שזה יום הולדת.",
    "why": "זה הפריט ה'הרפתקני ויוצא הדופן' — אתם דגים ממש את ארוחת הערב שלכם מסירה בתוך המסעדה, עם תיפוף חגיגי כשמצליחים. שובבי, אינטראקטיבי, בלתי נשכח — ורגע שיהפוך לסיפור שמספרים שוב ושוב."
   },
   {
    "name": "Andy's Shin Hinomoto",
    "city": "Tokyo",
    "cuisine": "Izakaya (עם דגש על פירות ים)",
    "area": "Yurakucho — מתחת לפסי רכבת JR (1 דקה מתחנת Yurakucho, בהליכה מ-Ginza)",
    "vibe": "izakaya / מוסד חם ומקבל פנים",
    "signatureDish": "רגלי סרטן מלך, צדפות, ו-sashimi טרי טס יומי; דג על האש",
    "price": "כ-4,000–6,000 yen לאדם כולל שתייה; ערב. מזומן וכרטיס.",
    "reservation": "מומלץ מאוד להזמין מראש — מתמלא גם בלילות רגילים. להתקשר או להזמין מראש.",
    "why": "ה-izakaya הטוקיאי המושלם — מוסד בניהול בריטי, ידידותי לדוברי אנגלית, מתחת לקשתות הרכבת מאז 1945, מפורסם בפירות ים טריים יוצאי דופן ובקבלת פנים חמה ורועשת. ללא מחסום שפה ועם אווירה אותנטית — ערב izakaya מושלם לשני מטיילים שרוצים להרגיש את הדופק האמיתי."
   },
   {
    "name": "Isetan Shinjuku Depachika (B1 food hall) + Saiseisakaba standing bar",
    "city": "Tokyo",
    "cuisine": "אולם אוכל depachika / בר עמידה tachinomi",
    "area": "Shinjuku (בניין Isetan ראשי B1, ישירות מתחנת Shinjuku-sanchome; Saiseisakaba ב-Shinjuku-sanchome)",
    "vibe": "טיול depachika + בר עמידה — סצנה מקומית אנרגטית",
    "signatureDish": "Depachika: bento אומנותי, קרוקטות wagyu, wagashi וקינוחים כמו תכשיטים. Saiseisakaba: motsu-yaki (שיפודי פסולת צלויים) עם בירה קרה, בעמידה",
    "price": "Depachika כ-1,500–3,000 yen בטעימות (ביום); Saiseisakaba כ-2,500–3,500 yen כולל שתייה (ערב). שניהם נגישים מאוד.",
    "reservation": "לא צריך הזמנה לאף אחד — depachika זה מעבר חופשי; Saiseisakaba זה עמידה צפופה כתף בכתף, ראשון קודם.",
    "why": "מכסה בסיור Shinjuku אחד גם את ה-depachika וגם את בר העמידה. אולם האוכל של Isetan הוא הטוב ביותר בטוקיו לקניית מזכרות אכילות ולקניות, ואחר כך בר tachinomi רועש כמו Saiseisakaba מפיל אתכם כתף בכתף עם מקומיים על שיפודים זולים — שילוב מהנה, זול ועתיר תרבות, קרוב לבסיס חיי הלילה שלכם."
   },
   {
    "name": "Tempura Tsunahachi (Shinjuku Honten)",
    "city": "Tokyo",
    "cuisine": "Tempura (קאונטר)",
    "area": "Shinjuku (3 דקות מיציאה מזרחית של תחנת Shinjuku)",
    "vibe": "קאונטר / מומחה ותיק עם מחיר סביר",
    "signatureDish": "קורס tempura מטוגן בקאונטר — שרימפס, צלופח ים (anago), ירקות עונתיים מטוגנים חתיכה אחרי חתיכה לפניכם",
    "price": "צהריים כ-2,000–3,500 yen; קורס ערב כ-4,000–7,000 yen לאדם. כרטיס בסדר.",
    "reservation": "ידידותי לכניסה חופשית בצהריים; מומלץ להזמין לערב או לקאונטר. שבו בקאונטר לחוויית החתיכה-אחרי-חתיכה.",
    "why": "קופסת ה-'tempura קאונטר', בגרסה של ערך אמיתי (מאז 1924) ולא בהוצאה של 20,000 yen — תבוניות נחמדה בין לילות ה-wagyu וה-sushi הגדולים. לראות כל חתיכה מטוגנת ומוגשת ישר לצלחת שלכם זה הטקס הקלאסי של tempura, עשיר בתרבות ונגיש לתקציב."
   },
   {
    "name": "Sumibi Yakiniku Nakahara",
    "city": "Tokyo",
    "cuisine": "Wagyu yakiniku omakase (בזבוז יום הולדת!)",
    "area": "Shirokane-Takanawa / Meguro (הליכה קצרה מתחנת Shirokane-Takanawa)",
    "vibe": "בזבוז / קאונטר wagyu A5 ראוי ליום הולדת",
    "signatureDish": "קורס omakase של wagyu A5 משתנה יומי — כולל הלשון הנדירה maboroshi no tan וחתיכות פרימיום צלויים על גחלים (sumibi)",
    "price": "כ-25,000–38,000 yen לאדם לקורס; ערב. כרטיס בסדר.",
    "reservation": "חובה — להזמין הרבה מראש (Google Maps / שירותי הזמנה, הרבה יותר ריאלי מ-Saito או Sugita). לציין שזה יום הולדת 40.",
    "why": "הבזבוז של יום ההולדת ה-40 שאפשר באמת להשיג. קורס ה-wagyu A5 על גחלים של שף Nakahara הוא ברמה עולמית, והאינטראקציה בקאונטר הופכת אותו לאישי ומיוחד — מושלם להזמין בלילה בטוקיו לפני Hakone. (חלופה אם מעדיפים סושי: omakase סושי כמו Nihonbashi Kakigaracho Sugita הוא החלום, אבל כמעט בלתי אפשרי ללא קשרים או 8 חודשי המתנה; Nakahara הוא בחירת החגיגה האמינה.)"
   },
   {
    "name": "Kikunoi Honten (菊乃井 本店)",
    "city": "Kyoto",
    "cuisine": "Kyo-kaiseki (תפריט רב-מנות מסורתי)",
    "area": "Higashiyama, Maruyama Park / Kodaiji — הליכה של 15 דקות מ-Gion-Shijo Station (Keihan)",
    "price": "ארוחת ערב ~20,000–40,000 yen לאדם; ארוחת צהריים מ-~13,000 yen לאדם (בערך חצי ממחיר הערב, אותם מרכיבים עונתיים)",
    "reservation": "הזמנה מראש חובה — יש לקבוע 2–3 חודשים מראש דרך TABLEALL, Pocket Concierge, או קונסיירז' המלון. לבוש מכובד/רשמי; ג'קט צפוי.",
    "vibe": "חגיגה ראויה ליום הולדת — בזבוז מפנק",
    "signatureDish": "תפריט kaiseki עונתי של השף Yoshihiro Murata; תפריט סוף ספטמבר כולל hamo (פייק קונגר), פטריות matsutake, ומנת בישול איקונית",
    "why": "המסעדה בעלת 3 כוכבי Michelin שצוינה במפורש כמסעדת יום הולדת המובילה ב-Kyoto. לאירוע של גיל 40 — זהו הבזבוז המפנק שאסור לפספס: ryotei שקט על שפת Higashiyama שבו כל מנה מבשרת את תפנית הממש של העונה. הזמינו ארוחת צהריים כדי להישאר (יחסית) בתקציב מבלי לוותר על החוויה המלאה."
   },
   {
    "name": "Gion Hatanaka — Kyoto Cuisine & Maiko Evening (祇園畑中)",
    "city": "Kyoto",
    "cuisine": "ארוחת kaiseki עם הופעת maiko/geiko חיה",
    "area": "Gion, Higashiyama — צעדים מ-Yasaka Shrine, הליכה של ~8 דקות מ-Gion-Shijo Station",
    "price": "~18,000–22,000 yen לאדם לערב ארוחה + maiko",
    "reservation": "הזמנה מראש חובה — פועל בערבים קבועים בלבד; יש לקבוע הרבה זמן מראש. תרגום לאנגלית ניתן לאורך כל הערב.",
    "vibe": "ראוי ליום הולדת / חגיגה תרבותית מפנקת",
    "signatureDish": "bento/קורס kaiseki עונתי בשילוב ריקוד maiko, ואחריו שאלות ותשובות ומשחקי שתייה ozashiki עם ה-maiko וה-geiko",
    "why": "הזוג אוהב את תרבות ה-geisha/maiko, וזהו ערב ה-maiko האותנטי הנגיש ביותר לדוברי לא-יפנית — ללא צורך בהיכרות אישית עם בית תה. יושבים, צופים בריקוד, ואז משוחחים ומשחקים עם maiko אמיתית. מרכז תרבותי מושלם לקטע Kyoto וליל בלתי נשכח בשבוע יום ההולדת."
   },
   {
    "name": "Nishiki Market — Kai (takotamago) & Kimura (sashimi sticks)",
    "city": "Kyoto",
    "cuisine": "אוכל רחוב / גרגור בשוק",
    "area": "Nishikikoji-dori, Nakagyo-ku — ארקדה מקורה מ-Shijo, ליד Shijo ו-Karasuma Stations",
    "price": "~300–800 yen לנשנוש; ארוחת צהריים של גרגור ~1,500–2,500 yen לאדם",
    "reservation": "ללא הזמנה — ארקדת מעבר, ~9/10 בבוקר עד 18:00 מדי יום. הגיעו לפני הצהריים לפני שהקהל מתנפל.",
    "vibe": "דוכן רחוב / גרגור משונה ומהנה",
    "signatureDish": "ה-takotamago של Kai (ראש תמנון תינוק ממולא בביצת שליו, על שיפוד); sashimi מוחמץ על שיפוד של Kimura (הדוכן הוותיק ביותר בשוק); וגם yuba טרי, שיפודים צלויים ודגימות חינם",
    "why": "נוצר בשביל זוג שאוהב אוכל רחוב: סיור אוכל של 400 מ' שבו אוכלים עם הידיים ומנסים מיוחדויות kyoto מוזרות-טעימות. ה-takotamago הוא הביס הקלאסי החריג, והגרגור כאן הוא ניגוד כיפי וזול לבזבוזי ה-kaiseki."
   },
   {
    "name": "Nanzenji Junsei (南禅寺 順正)",
    "city": "Kyoto",
    "cuisine": "Yudofu (tofu חם) kaiseki",
    "area": "Nanzenji, Sakyo-ku — בגישה אל המקדש, ליד Philosopher's Path; הליכה של ~10 דקות מ-Keage Station",
    "price": "קורס yudofu ~3,500–6,000 yen לאדם (ארוחת צהריים או ערב מוקדם)",
    "reservation": "מומלץ להזמין לצהריים, במיוחד בסופי שבוע; כניסה חופשית ייתכן בשעות שקטות.",
    "vibe": "אווירתי / גן ירוק / חגיגה בסקאלה נמוכה",
    "signatureDish": "Yudofu (tofu משיי מבושל בציר kombu) ו-yuba מוגשים כסט, בראייה אל גן טיול מתקופת Edo בשטח 1,200 tsubo, עם בניין Junsei Sho-in הרשום כאתר תרבותי",
    "why": "חוויית ה-tofu הקיוטואית הקלאסית ביותר בסביבת גן מרהיבה — ידידותי לצמחונים, עמוק מקומי, והפסקת צהריים שלווה שאפשר לשלב עם מקדש Nanzenji הסמוך והליכה לאורך Philosopher's Path. מסורת tofu של מאות שנים."
   },
   {
    "name": "Obanzai Tatsunosuke (おばんざい 田ゝ助)",
    "city": "Kyoto",
    "cuisine": "אוכל ביתי קיוטואי (obanzai) בסגנון izakaya",
    "area": "מרכז העיר, Nakagyo/Kawaramachi — ממש ליד Kawaramachi Station",
    "price": "~3,500–5,000 yen לאדם; קורס פופולרי של ~10 מנות עם שתייה חופשית",
    "reservation": "מומלץ להזמין לארוחת ערב — מקום קטן ופופולרי עם דלפק; כדאי לקבוע יום-יומיים מראש.",
    "vibe": "izakaya / דלפק / מקומי אמיתי",
    "signatureDish": "מגוון מתחלף של ~10 מנות obanzai עונתיות (ירקות מבושלים, tofu, דגים) מאת שף עם 10+ שנות הכשרה ב-ryotei",
    "why": "זה ערב ה-counter הרגוע והקיוטואי-אמיתי — הצד הביתי והקליל מול ה-kaiseki המפואר. קז'ואלי, שיחתי, שתייה חופשית, ומלא מנות עונתיות קטנות. מושלם לערב נינוח במרכז העיר ליד חיי הלילה, בחברת המקומיים עם sake."
   },
   {
    "name": "Kagizen Yoshifusa (鍵善良房) — Gion tea room",
    "city": "Kyoto",
    "cuisine": "matcha ו-wagashi (ממתקים מסורתיים)",
    "area": "Gion, Higashiyama — על Shijo-dori, הליכה של ~5 דקות מ-Gion-Shijo Station",
    "price": "~1,000–1,600 yen לאדם עבור matcha + ממתק",
    "reservation": "ללא הזמנה לחדר התה — כניסה חופשית; סגור בימי שני. הגיעו באמצע אחר הצהריים.",
    "vibe": "אווירתי / מסורתי",
    "signatureDish": "Kuzukiri (אטריות חמצין מקוררות בשינול kuromitsu סוכר חום) ו-matcha מוקצף עם wagashi עונתיים עשויים בבית, מוגשים על tatami",
    "why": "הקונדיטוריה הוותיקה ביותר ששרדה ב-Kyoto (הוקמה ב-1716) עם חדר תה tatami מסורתי ואותנטי — matcha מוקצף על ידי צוות מוסמך בטקס תה. הפסקת ממתקים מעודנת ואווירתית ב-Gion שמתאימה הרבה יותר לצד האוהב תרבות במסע, מאשר רשת parfait מודרנית. (לגרסת matcha-parfait מודרנית, ה-warabimochi parfait של Gion Tokuya הוא האלטרנטיבה בסמוך.)"
   },
   {
    "name": "Menbaka Fire Ramen (麺屋 台 / めんばか一代)",
    "city": "Kyoto",
    "cuisine": "Ramen (עם מופע להבות על השולחן)",
    "area": "Nijo / אזור ארמון Kyoto Imperial Palace, Nakagyo-ku — ליד Nijojo-mae Station",
    "price": "~1,500–3,000 yen לאדם (סטים עם wagyu beef sushi, gyoza ואורז מוקפץ זמינים)",
    "reservation": "הזמינו אונליין דרך TableCheck — מסעדה קטנה עם מושבי מופע שמתמלאים; הזמנה מראש ממש מומלצת.",
    "vibe": "משונה / מרהיב / מושך תשומת לב",
    "signatureDish": "'Fire ramen' — בצל ירוק Kujo נצרב בהתזת שמן להבות ישירות לתוך הקערה, על ציר קל ומאוזן (הוקם ב-1984, מקום הלידה של fire ramen)",
    "why": "כיף טהור וזהב לאינסטגרם לזוג שאוהב אוכל יוצא דופן ותיאטרון אוכל רחוב. מופע שמן הבוער הוא מחזה אמיתי שישמרו בסרטון, וה-ramen מתחתיו טעים ממש — ארוחת צהריים אנרגטית ומהנה בין ביקורי מקדשים."
   },
   {
    "name": "Pontocho Alley kawadoko dining — e.g. Pontocho Fujita (先斗町ふじ田)",
    "city": "Kyoto",
    "cuisine": "מטבח קיוטואי עונתי על מרפסת לחוף הנהר (noryo-yuka/kawadoko)",
    "area": "Pontocho, Nakagyo-ku — הסמטה הצרה והמואדת בפנסים שבין Kawaramachi לנהר Kamo, ליד Gion-Shijo/Kawaramachi Stations",
    "price": "~8,000–15,000 yen לאדם לארוחת kaiseki/קורס על המרפסת",
    "reservation": "הזמנה מראש חובה למקומות מרפסת (yuka) — יש לקבוע מראש. מרפסות kawadoko פועלות מאי–ספטמבר, ולכן תאריכי הנסיעה 24–27 בספטמבר תופסים ממש את סוף העונה.",
    "vibe": "אווירתי / בלתי נשכח / ראוי ליום הולדת",
    "signatureDish": "kaiseki קיוטואי עונתי מוגש על פלטפורמת עץ (yuka) הבנויה מעל נהר Kamo, עם קול המים מלמטה ו-Pontocho המואדת בפנסים מאחוריכם",
    "why": "ארוחת הערב האווירתית ביותר ב-Kyoto ושיא שבוע יום ההולדת — ארוחה על מרפסת מעל הנהר בסמטת רובע הגיישות, בדיוק ה-Kyoto האלגנטי, התרבותי ועולם-הצי שהגעתם בשבילו. תאריכי הנסיעה בסוף ספטמבר נוחתים בשבועות האחרונים של עונת kawadoko — זה הזמן לקבוע עכשיו, לפני שייגמר."
   },
   {
    "name": "Takoyaki Wanaka (Namba / Sennichimae)",
    "city": "Osaka",
    "cuisine": "Takoyaki (כדורי תמנון)",
    "area": "Sennichimae, כ-4 דקות הליכה מ-Namba Station / Nippombashi",
    "price": "כ-600–900 ין ל-8–10 יחידות; נשנוש בכל שעה",
    "vibe": "דוכן רחוב / דלפק עמידה",
    "signatureDish": "Takoyaki קלאסי עם רוטב, ועוד וריאציות negi-mayo ו-dashi-dip",
    "reservation": "ללא הזמנה – מגיעים ישירות, ידידותי למזומן, תור קצר בשעות השיא",
    "why": "אחד מיצרני ה-takoyaki המכובדים ביותר באוסקה – קליפה פריכה, מרכז מותך ועשיר ב-dashi. הנגיסה הרחובית המושלמת לפתוח בה את מסע האוכל של הזוג."
   },
   {
    "name": "Takoyaki Juhachiban (Dotonbori)",
    "city": "Osaka",
    "cuisine": "Takoyaki",
    "area": "טיילת Dotonbori, 5 דקות מ-Namba Station",
    "price": "כ-500–700 ין למנה; נשנוש רחוב",
    "vibe": "דוכן רחוב אקסצנטרי, תיאטרון של לוחות נחושת",
    "signatureDish": "Takoyaki מבושל על לוחות נחושת, עם שוליים פריכים במיוחד",
    "reservation": "ללא הזמנה – לוקחים והולכים לאורך רחוב Dotonbori",
    "why": "מפורסם באינסטגרם, מוכן על לוחות נחושת לעיני כולם תחת אורות הניאון – ניגוד כיפי וצילוגני ל-Wanaka, מה שהופך את הביקור לתחרות טעימות takoyaki בין שני הדוכנים."
   },
   {
    "name": "Okonomiyaki Mizuno (Dotonbori)",
    "city": "Osaka",
    "cuisine": "Okonomiyaki",
    "area": "Dotonbori, 5 דקות מ-Namba Station",
    "price": "כ-1,500–2,500 ין לאדם; ארוחת צהריים או ערב",
    "vibe": "דלפק / מסעדה ותיקה ואינטימית, ראויה ליום הולדת",
    "signatureDish": "Okonomiyaki בבלילת יאם אוורירית (yamaimo) עם שרימפס ודיונון – ה-Mizuno-yaki",
    "reservation": "ללא הזמנות; צפו לתור – הגיעו בפתיחה או בשעות שקטות. מחזיקה Michelin Bib Gourmand.",
    "why": "פועלת מאז 1945 ומחזיקה ב-Michelin Bib Gourmand שוב ושוב – okonomiyaki קלילה במיוחד, בבלילת יאם, מוכנה מול עיניכם ליד הדלפק. הגרסה המגדירה של מאכל הדגל של אוסקה, ורגע ישיבה בלתי נשכח לזוג אוהבי אוכל."
   },
   {
    "name": "Kushikatsu Daruma (Shinsekai flagship)",
    "city": "Osaka",
    "cuisine": "Kushikatsu (שיפודים מטוגנים)",
    "area": "Shinsekai, מתחת למגדל Tsutenkaku; כ-5 דקות מ-Ebisucho Station",
    "price": "כ-110–300 ין לשיפוד; סט Daruma כ-1,400 ין. צהריים/ערב",
    "vibe": "איזאקאיה רטרו-אוסקאית, רועשת ומרגשת, עם חוק אחד: אסור לטבול פעמיים",
    "signatureDish": "Kushikatsu בקר וסט מגוון של השף – ה-Daruma assortment",
    "reservation": "כניסה חופשית; עלול להיות תור – לקבוצות גדולות וארוחות ערב כדאי להגיע מוקדם",
    "why": "מקום הולדתו של ה-kushikatsu המודרני ב-1929, בלב ה-Shinsekai הקיצ'י והצבעוני מתחת ל-Tsutenkaku – שקיעה מלאה בתרבות הרחוב האוסקאית."
   },
   {
    "name": "Yaekatsu (Shinsekai)",
    "city": "Osaka",
    "cuisine": "Kushiage / kushikatsu",
    "area": "Shinsekai, קרוב ל-Tsutenkaku; כ-6 דקות מ-Dobutsuen-mae Station",
    "price": "כ-130–300 ין לשיפוד; ארוחה קז'ואלית צהריים/ערב",
    "vibe": "דלפק מקומי ישן-שכונתי, פחות תיירותי",
    "signatureDish": "Kushikatsu בצל (tamanegi) ושיפודים עונתיים מגוונים",
    "reservation": "כניסה חופשית בלבד; קטן ואינטימי – הגיעו מוקדם לתפוס מקום בדלפק",
    "why": "החלופה המקומית ל-Daruma מ-1949 – באותה רמה, שקטה יותר, ניהול משפחתי. לשלב את שניהם זה לעשות kushikatsu כמו אוסקאי אמיתי."
   },
   {
    "name": "Kuromon Ichiba Market - Maguroya Kurogin + Kuromon Wagyu-kun",
    "city": "Osaka",
    "cuisine": "דוכני פירות ים טריים ו-wagyu",
    "area": "Kuromon Ichiba, Nippombashi; צעדים מיציאה 10 של Nippombashi Station",
    "price": "כוסות uni/ikura כ-800–2,500 ין; צדפה צלויה כ-500–800 ין; שיפוד/צלחת wagyu כ-1,000–3,000 ין. הכי טוב בבוקר",
    "vibe": "סיור בין דוכנים, אכילה עומדת",
    "signatureDish": "בחרו נתח o-toro/chu-toro שמן ב-Kurogin; uni ו-A5 wagyu צרוב ב-Wagyu-kun",
    "reservation": "ללא הזמנה – מסתובבים מדוכן לדוכן; הגיעו בבוקר לפני שהדוכנים נגמרים",
    "why": "\"המטבח של אוסקה\" – ארקדה של 600 מטר עם כ-150 דוכנים, שבהם אפשר לתפוס uni, wagyu צרוב וצדפות צלויות עומדים. מגרש משחקים אולטימטיבי לשני אוכלים הרפתקניים."
   },
   {
    "name": "Matsusakagyu Yakiniku M (Hozenji Yokocho, Namba)",
    "city": "Osaka",
    "cuisine": "Yakiniku / wagyu",
    "area": "Namba, 1-1-19 Namba, Chuo-ku; כ-4 דקות מ-Namba Station",
    "price": "צהריים מ-כ-3,000 ין; ערב כ-5,000–15,000 ין לאדם – פינוק נבחר",
    "vibe": "פינוק ראוי ליום הולדת, חדרים פרטיים זמינים",
    "signatureDish": "Wagyu Matsusaka A5 פרמיום על גריל שולחני; צלחת נתחים מגוונת",
    "reservation": "הזמנה מומלצת ואף הכרחית לערב ולחדרים פרטיים – הזמינו מראש",
    "why": "Wagyu Matsusaka איכותי במחירים (יחסית) הוגנים, בסמטת Hozenji Yokocho הרומנטית עם פנסי הפנס. הזמנת חדר פרטי כאן היא ארוחת ערב יום הולדת 40 מושלמת לזוג."
   },
   {
    "name": "Harukoma Sushi (Tenjinbashisuji, main store)",
    "city": "Osaka",
    "cuisine": "סושי (edomae, אגדת המסעדות הזולות)",
    "area": "ארקדה Tenjinbashisuji, רחוב 6, ליד Tenma / Tenjinbashisuji-Rokuchome Station",
    "price": "nigiri נדיב מכמה מאות ין ליחידה; ארוחה מלאה כ-2,000–3,000 ין לאדם. הכי טוב בצהריים",
    "vibe": "אגדת האוכל הזול, תור קבוע, מוסד מקומי",
    "signatureDish": "nigiri ענק בנתחים עבים – anago, uni, טונה שמנה, במחיר שלא יאמן",
    "reservation": "ללא הזמנות – כניסה חופשית בלבד; תור קבוע, הגיעו לפני הפתיחה בשעה 11:00; סגור בימי שלישי; נגמר מוקדם",
    "why": "מוסד אוסקאי אהוב, מפורסם ב-nigiri ענקי ורענן במחירים בלתי אפשריים – חוויה של איכות גבוהה בפרוטות. שלבו עם טיול ב-Tenjinbashisuji, ארקדת הקניות הארוכה ביותר ביפן."
   },
   {
    "name": "Doyamacho night bite - nikusui at a Doyama izakaya/drag-run spot",
    "city": "Osaka",
    "cuisine": "Izakaya / מאכלי נשמה אוסקאיים",
    "area": "Doyamacho (רובע ה-LGBTQ+ של Osaka), כמה דקות הליכה מזרחה מ-Umeda / Osaka Station",
    "price": "~1,500-3,000 yen לאדם עם שתייה; שעות לילה מאוחרות, הרבה ברים פתוחים עד ~5 בבוקר",
    "vibe": "נגיסת לילה כיפית בלב הסצנה הגאה, עליז ומקבל-פנים",
    "signatureDish": "Nikusui (מרק בקר צלול, מאכל ייחודי של Osaka) ונשנושי izakaya",
    "reservation": "לא נדרשת הזמנה — קופצים מבר לבר; חלק מהמקומות גובים cover charge; ידידותי לשעות מאוחרות",
    "why": "הרובע הגאה המוביל של Osaka — מבוך קומפקטי של ברים LGBTQ+ ממש ליד Umeda. עצירת לילה של nikusui ונשנושים, כשביניהם מטבח שמנוהל על-ידי drag queen — שילוב מושלם של אוכל וחיי לילה גאים לחגיגה שלהם."
   },
   {
    "name": "Hakone Ginyu (箱根吟遊)",
    "city": "Hakone",
    "cuisine": "Kaiseki ryokan (ארוחות רב-מנות בחדר)",
    "why": "נקודת השיא של ליל יום ההולדת. ryokan בוטיק בסגנון Bali-meets-Japan שבו לכל חדר יש rotenburo פרטית תחת כיפת השמיים עם נוף לעמק ההרים של Hakone — כלומר שני גברים יכולים להשרות יחד בפרטיות מוחלטת, בלי מבוכה של אמבט ציבורי. ארוחת הkaiseki וארוחת הבוקר מוגשות בחדר, כך שכל חגיגת ה-40 נשארת אינטימית לחלוטין. מדורג באופן עקבי בעשרת האמבטיות הטובות ביפן; אורחים מתארים את ארוחת הkaiseki כשיא של כל הטיול.",
    "signatureDish": "Kaiseki עונתי רב-מנות (ספטמבר = matsutake, דגי סתיו, ערמון) — מוגש בחדר",
    "area": "Gora Onsen, כ-5 דקות הליכה מתחנת הרכבל של Gora (Hakone Tozan)",
    "price": "~¥40,000-60,000+ לאדם כולל ארוחת ערב + בוקר (לילה אחד); הוצאה גדולה ומיוחדת",
    "vibe": "פינוק ראוי ליום הולדת, רומנטי עם בריכת onsen פרטית",
    "reservation": "חובה — יש להזמין 2-3 חודשים מראש דרך האתר הרשמי hakoneginyu.co.jp; חדרים פופולריים נגמרים מהר בסופי שבוע"
   },
   {
    "name": "Owakudani Kurotamago-kan (大涌谷くろたまご館)",
    "city": "Hakone",
    "cuisine": "נשנוש מקומי מיוחד — kurotamago (ביצים שחורות)",
    "why": "הטקס האוכלני המוזר-בצורה-הכי-טובה של Hakone ו-must לזוג אוהב תרבות. ביצים שנבשלות במעיינות הגופרית מקבלות קליפה שחורה לגמרי (ברזל + מימן גופרתי) אך טועמות בדיוק כמו ביצה רגילה — האגדה המקומית אומרת שכל אחת מוסיפה 7 שנים לחיים, בדיחה מושלמת ליום הולדת 40. מגיעים לשם ברכבל האוויר Hakone Ropeway, כשהנוף של עמק הגעש האדים נפרש מסביב.",
    "signatureDish": "Kurotamago — שקית 5 ביצים שחורות (~¥500)",
    "area": "עמק הוולקן Owakudani, בראש Hakone Ropeway",
    "price": "~¥500 לשקית 5 ביצים; נשנוש (מזומן)",
    "vibe": "טקס אוכל-רחוב משעשע וייחודי",
    "reservation": "לא נדרשת הזמנה — מגיעים ישירות; כדאי לבדוק שה-ropeway והעמק פתוחים (לעיתים נסגרים בגלל גזים וולקניים), לאשר ביום עצמו"
   },
   {
    "name": "Fukasei Soba (深生そば)",
    "city": "Hakone",
    "cuisine": "Soba עשוי-ביד",
    "why": "Soba עשוי-ביד ממש מול Lake Ashi ב-Moto-Hakone, ממש ליד שער ה-torii האדום המפורסם הצומח מהמים — אחד הנופים המצולמים ביותר ביפן, ועצירת צהריים ציורית מושלמת. מקום שמקומיים מגיעים אליו קבוע, לא רק לכודת לתיירים, כך שהוא מספק את חוויית ה-soba-עם-נוף האותנטית שהזוג מחפש — בלי מחיר של יוקרה.",
    "signatureDish": "Zaru soba (אטריות כוסמת קרות עשויות-ביד) מול הנוף של שער ה-torii של Lake Ashi",
    "area": "Moto-Hakone, על שפת האגם, ליד שער ה-torii האדום של Hakone Shrine",
    "price": "~¥1,200-1,800 לאדם; ארוחת צהריים (לרוב מזומן)",
    "vibe": "מסעדת soba מקומית כיפית עם נוף לאגם ו-torii",
    "reservation": "לא נדרשת הזמנה — מגיעים ישירות; מומלץ להגיע מוקדם (תורים בצהריים בעונת שיא); לאשר שעות ביום עצמו"
   },
   {
    "name": "Bakery & Table Hakone (ベーカリー&テーブル箱根)",
    "city": "Hakone",
    "cuisine": "מאפייה-קפה / קינוחים",
    "why": "עצירת הקינוח שלא תישכח: קפה עם קירות זכוכית על שפת האגם, שבו אוכלים מאפים טריים כשהרגליים שרויות בחינם ב-foot-onsen על הטרסה, והמבט נמתח על Lake Ashi וההרים — שילוב שהוא קינוח-פלוס-onsen שאפשר למצוא רק ב-Hakone. מעל 30 מאפים שונים ביום, ובכוכבת: Pan de Soft — טוסט ברוטב דבש עם גלידת soft-serve עשירה מחלב חווות Tanna המקומית.",
    "signatureDish": "Pan de Soft (טוסט בדבש-סירופ עם גלידת soft-serve עשירה מחלב חוות Tanna); מאפים על טרסת ה-footbath",
    "area": "Moto-Hakone, על שפת Lake Ashi",
    "price": "~¥1,000-2,000 לאדם; קפה/ארוחת בוקר-צהריים",
    "vibe": "קפה עם נוף ורגליים ב-footbath, פינוק מתוק",
    "reservation": "לא נדרשת הזמנה — מגיעים ישירות (מאפייה בקומה 1, קפה בקומה 2 + טרסת footbath); לאשר שעות ביום עצמו"
   },
   {
    "name": "Yoshinoya Magome (Soba & Gohei-mochi)",
    "city": "Kiso Valley",
    "area": "Magome post town",
    "cuisine": "סובה מסורתי וגוהיי-מוצ'י",
    "vibe": "בית אוכל כפרי בן 200 שנה, רצפות עץ ישנות ועשן מהגריל",
    "why": "מנת הגוהיי-מוצ'י — שיפוד אורז עם רוטב מיסו-אגוז על גחלים — היא הטעם של הנקאסנדו. אי אפשר לאכול את זה בשום מקום אחר.",
    "signatureDish": "גוהיי-מוצ'י + סובה קר מקומי",
    "price": "¥800–1,500 לאדם",
    "reservation": ""
   },
   {
    "name": "Tsumago Soba Cafe",
    "city": "Kiso Valley",
    "area": "Tsumago post town",
    "cuisine": "סובה טרי ביתי",
    "vibe": "בית קטן ושקט עם שולחן עץ ונוף לגינה מסורתית",
    "why": "הסובה נטחן ומוגש באותו יום — טעם עדין ועמוק של כוסמת הרים. הנחה מושלמת אחרי ההליכה.",
    "signatureDish": "זaru soba + שרימפס טמפורה עונתי",
    "price": "¥1,200–2,000 לאדם",
    "reservation": ""
   },
   {
    "name": "Chanko Dining Wakamatsu",
    "city": "Tokyo",
    "area": "Ryogoku",
    "cuisine": "צ'אנקו נאבה (מרק המאמן)",
    "vibe": "מסעדת גלאדיאטורים ידידותית — תמונות אלופים על הקירות, חממה ומלאה אנרגיה",
    "why": "הצ'אנקו שאוכלים מאמני סומו — מרק עשיר עם עוף, טופו וירקות שמבשלים על השולחן. אחרי המשחק ברגוקו, זה כיף פנומנלי.",
    "signatureDish": "צ'אנקו נאבה + אורז + מנה ראשונה מלאת חלבון",
    "price": "¥2,500–4,000 לאדם",
    "reservation": "מומלץ להזמין יום מראש — פנייה טלפונית או דרך Tableall."
   },
   {
    "name": "Chaos Kitchen Akihabara",
    "city": "Tokyo",
    "area": "Akihabara",
    "cuisine": "פיוז'ן יפני-אנימה, אוכל נושאתי",
    "vibe": "אור ניאון, מסכי אנימה על כל הקיר, DJ ותפריט שנראה כמו quest board",
    "why": "כל מנה נקראת על שם דמות אנימה — הבורגר הדרקון, הראמן הקיברפאנק. קיטש מכוון ומשמח, בול בשבילכם.",
    "signatureDish": "Cyber Ramen של הבית + Dragon Burger",
    "price": "¥1,800–3,200 לאדם",
    "reservation": ""
   },
   {
    "name": "Bar Gold Finger (Ni-chome)",
    "city": "Tokyo",
    "area": "Shinjuku Ni-chome",
    "cuisine": "בר לגיי נשים + זוגות LGBTQ+",
    "vibe": "חם, בטוח, צבעוני — הבר האייקוני של Ni-chome שמוכר לכולם ופתוח לכולם",
    "why": "Gold Finger הוא אחד הבארים הוותיקים והאוהבים ביותר בשינג'וקו ני-ג'ומה — אתם תרגישו שייכים מהרגע הראשון. מגישים קוקטיילים פשוטים ונשנושים לצד מוזיקה טובה.",
    "signatureDish": "קוקטייל הבית + edamame / נשנושים",
    "price": "¥800–2,000 לאדם (כניסה + שתייה)",
    "reservation": ""
   },
   {
    "name": "Doyama-cho Bar Crawl: Butterfly",
    "city": "Osaka",
    "area": "Doyama-cho (North Osaka LGBTQ+)",
    "cuisine": "בר גייז ידידותי, אוכל קל יפני",
    "vibe": "שכונת הגייז של אוסקה — קטנה, אינטימית, ידידותית לזרים מאוד",
    "why": "Butterfly ידוע כנכנס-ויוצא לדויאמה-צ'ו — צוות דובר אנגלית, ברבון יפני וחטיפי אדאמה. יפה לסיום ערב בקנסאי.",
    "signatureDish": "היי-בול יפני + אדאמאמה / טוסטים קטנים",
    "price": "¥700–1,500 לאדם",
    "reservation": ""
   }
  ],
  "attractions": [
   {
    "name": "Sumo Stable Morning Practice (Tatsunami-beya)",
    "city": "טוקיו — Sumida / Ryogoku",
    "area": "Ryogoku",
    "category": "תרבות / ספורט",
    "why": "צפו בפעילות אימון אמיתית של מתאבקים פרופסיונליים ממרחק של כמה מטרים — בלי תיירות מיותרת ובאווירה שלא תמצאו בשום מקום אחר ביפן. Tatsunami-beya מארחת yokozuna (הדרגה הגבוהה ביותר) וקולטת קבוצות קטנות עם מדריך מורשה דובר אנגלית. האווירה הגולמית — אדמת עפר, גניחות, טקס — זה הדבר האמיתי. פעיל ינואר–אוגוסט / אוקטובר–דצמבר בשבועות שאינם שבועות טורניר; בזמן Tokyo basho (ינואר, מאי, ספטמבר) האימון מתקצר ל-30–40 דקות.",
    "cost": "¥8,000–12,000 לאדם בהתאם למפעיל; חלק כוללים ארוחת צהריים של chanko-nabe (נזיד המתאבקים)",
    "duration": "2–3 שעות (אימון 6–10 בבוקר)",
    "booking": "הזמינו 1–4 שבועות מראש דרך sumoexperience.tokyo או Viator / Sunrise Tours JTB; מקסימום 25 אנשים לקבוצה. אשרו את השעה שבוע לפני — לוח הזמנים תלוי ביומן הטורנירים.",
    "tags": [
     "ספורט",
     "תרבות",
     "שעות-הבוקר-המוקדמות",
     "ייחודי"
    ]
   },
   {
    "name": "Street Go-Kart Tour — Street Kart / JapanKart",
    "city": "טוקיו — מסלולי Akihabara או Shibuya",
    "area": "Akihabara / Shibuya / Asakusa (מסלולים מרובים)",
    "category": "הרפתקה / כיף",
    "why": "נסיעה בגו-קארט פתוח בתחפושת בתוך התנועה האמיתית של טוקיו — ליד Shibuya Crossing (עד 3,000 הולכי רגל בכל החלפת אור), ארמון הקיסר, או בין שלטי הניאון של Akihabara. תחפושות ה-Mario נעלמו (תביעת Nintendo) אבל חליפות סופרהירו ואנימה עדיין זמינות. צריכים רישיון נהיגה בינלאומי. אבסורד לחלוטין — ולא נשכח.",
    "cost": "¥15,000–19,500 לאדם; תחפושת + קסדה כלולות. סיורי לילה עולים יותר.",
    "duration": "2 שעות",
    "booking": "הזמינו אונליין בـ streetkart.com או japankart.com — מקומות באותו שבוע זמינים, אבל סופי שבוע נחטפים. הביאו IDP + דרכון.",
    "tags": [
     "הרפתקה",
     "כיף",
     "זוגי",
     "סיור-בעיר"
    ]
   },
   {
    "name": "Nakano Broadway",
    "city": "Tokyo",
    "area": "Nakano",
    "category": "אנימה ואספנות",
    "why": "קומות של Mandarake — מנגה יד-שנייה, פיגורות נדירות, משחקי רטרו ואספנות. מכה לחובבי אנימה, פחות תיירי ובמחירים הוגנים.",
    "cost": "חינם (כניסה)",
    "duration": "2–3 שעות",
    "booking": "",
    "tags": [
     "אנימה",
     "אספנות",
     "רטרו",
     "קניות"
    ],
    "highlight": true
   },
   {
    "name": "teamLab Borderless — MORI Building Digital Art Museum",
    "city": "טוקיו — Azabudai Hills, Minato",
    "area": "Azabudai Hills (Kamiyacho Station, Hibiya Line — הליכה של 2 דקות)",
    "category": "אמנות / חוויה סוחפת",
    "why": "עבר מـ Odaiba לבית החדש והמשוכלל שלו בـ Azabudai Hills בתחילת 2024. Borderless (ולא Planets) הוא החוויה הגדולה יותר בסגנון מבוך — אין קירות בין החדרים, האמנות זורמת ומגיבה אליכם. הסדרה החדשה 'Light Sculpture – Flow' נפתחה מחדש ביולי 2026 עם שתי סביבות אינטראקטיביות נוספות שיימשכו עד אוקטובר 2026. עדיף לזוגות מـ Planets: אפשר להתעכב, ללכת לאיבוד יחד, והחוויה לעולם אינה זהה פעמיים.",
    "cost": "¥3,200 למבוגר (יום חול) / ¥3,800 סוף שבוע — הזמינו אונליין; כרטיסים בדלת כמעט ואינם זמינים",
    "duration": "2–3 שעות",
    "booking": "כרטיס מראש חובה בـ teamlab.art/e/tokyo — כניסה בזמן קבוע, הזמינו 2–4 שבועות מראש לסופי שבוע.",
    "tags": [
     "אמנות",
     "חוויה-סוחפת",
     "רומנטי",
     "טכנולוגיה"
    ]
   },
   {
    "name": "Shimokitazawa Vintage Crawl + New York Joe Exchange",
    "city": "טוקיו — Shimokitazawa, Setagaya",
    "area": "Shimokitazawa (2 תחנות מـ Shibuya בקו Keio Inokashira)",
    "category": "קניות / שכונה",
    "why": "הכפר הבוהמי של טוקיו: שישה רחובות קניות, 760+ חנויות, ברים עם מוזיקה חיה ושולחני קלייה קפה — הכל בתוך כיס הולך ומוקף. החנות הכוכבת היא New York Joe Exchange — חנות וינטאג' בתוך בית מרחץ מהשנות השישים שהוסב לשימוש חדש, עם מתלים שבהם פעם צעדו רוחצים בקיטור והאריחים המקוריים שלמים. CIRCULABLE SUPPLY החדשה (נפתחה אפריל 2025) מוסיפה את הדגל של Baycrew בשוק הסקנד-הנד העילי. אפס אנרגיה של מלכודת תיירים — הקהל הוא צעירי טוקיו הקריאטיביים.",
    "cost": "כניסה חינם; תקצבו ¥5,000–20,000 לקניות בהתאם לטעם",
    "duration": "חצי יום (3–5 שעות)",
    "booking": "אין צורך בהזמנה. Forbes פרסם מדריך מלא במאי 2026 — בואו ביום חול אחר הצהריים כדי להימנע מהמוני סוף השבוע.",
    "tags": [
     "וינטאג'",
     "קניות",
     "שכונה",
     "עלות-נמוכה"
    ]
   },
   {
    "name": "Samurai Restaurant Show (Robot Restaurant successor)",
    "city": "טוקיו — Kabukicho, Shinjuku",
    "area": "Kabukicho, Shinjuku",
    "category": "בידור / מופע",
    "why": "הـ Robot Restaurant נסגר לצמיתות בזמן הקורונה; יוצריו פתחו את Samurai Restaurant באותו בניין בـ Kabukicho ב-2023 — אותו DNA מקסימליסטי אבל עכשיו עם לוחמי סמוראי, רובוטים עתידניים, רקדניות קליידוסקופיות וקרב בימה דרמטי — שעה שלמה של מופע עם-כל-זה. שלושה הופעות ביום. קיטש טוקיואי אמיתי מוגש היטב; רועש וכיפי בלי להתנצל — מושלם לזוגות שרוצים ראווה עצומה.",
    "cost": "מـ ¥5,500 (מופע בלבד) עד ¥9,000 עם bento + 2 משקאות",
    "duration": "~שעה מופע; הגיעו 30 דקות מוקדם",
    "booking": "הזמינו דרך GetYourGuide או getyourguide.com/tokyo — מקומות ערב נחטפים בסופי שבוע. ניתן לבטל 24 שעות לפני.",
    "tags": [
     "בידור",
     "מופע",
     "חיי-לילה",
     "ייחודי"
    ]
   },
   {
    "name": "Nikko UNESCO Shrine Day-Trip",
    "city": "Nikko, מחוז Tochigi (טיול יום מטוקיו)",
    "area": "Nikko — שעתיים מـ Asakusa ברכבת Tobu",
    "category": "טיול יום / אתר מורשת UNESCO",
    "why": "מתחם המקדשים המעוטר ביותר ביפן — פיתוחי עלה הזהב של Toshogu, שלושת הקופים החכמים המפורסמים, מפלי Kegon הנופלים 97 מטר לתוך ערוץ הרים, ואגם Chuzenji. 103 מבנים לאורך הרים מיוערים. הולך הרבה מעבר לטיול-המקדש הסטנדרטי לـ Kamakura ומרגיש מרוחק ממש. הכי טוב בחום אוגוסט: הגובה ההרי קריר בצורה מורגשת לעומת טוקיו.",
    "cost": "¥5,200–10,000 לאדם הכל-כלול (רכבת + Nikko Pass + כניסות + צהריים). Nikko Pass World Heritage Area (¥3,000 / יומיים) כולל רכבת הלוך-חזור + אוטובוסים מקומיים.",
    "duration": "יום מלא — יציאה מטוקיו 7–8 בבוקר, חזרה עד 7–8 בערב",
    "booking": "אין צורך בהזמנה — קנו Nikko Pass בـ Asakusa Station. לחלופין, הזמינו סיור מודרך דרך Viator אם רוצים פרשנות.",
    "tags": [
     "טיול-יום",
     "טבע",
     "UNESCO",
     "מקדשים",
     "הרים"
    ]
   },
   {
    "name": "Kosugiyu Sento (retro bathhouse, 1930s Fuji mural)",
    "city": "טוקיו — Koenji / Suginami",
    "area": "Koenji, Suginami Ward",
    "category": "אונסן / סנטו / חיים מקומיים",
    "why": "זכה בתואר בית המרחץ הציבורי הניאו-רטרו הטוב ביותר לـ 2024 על ידי Nikkei. Kosugiyu משלב אסתטיקה רטרו משנות השלושים — כולל ציור ענק של הר Fuji מרצפה לתקרה בידי אחד מאמני הציורים האחרונים לסנטו ביפן — עם אזור עבודה, ברז בירה קרפטית ופרוגרמינג אירועים. בריכות האמבטיה מופרדות לפי מגדר (נימוסי סנטו רגילים); כל אחד הולך בנפרד ונפגשים לשתייה אחר כך בלאונג'. נמצא ליד Koenji, שמשתלב טבעית עם סיור בחנויות תקליטים וינטאג'. טוקיו שכונתית אמיתית, ללא תיירים.",
    "cost": "¥550 כניסה (מחיר מוסדר של סנטו בטוקיו); משקאות בתוספת",
    "duration": "1.5–2 שעות",
    "booking": "ללא הזמנה — כניסה חופשית. בדקו שעות בـ trip.com/travel-guide/attraction/tokyo/kosugiyu או Google Maps (סגור בימי שני).",
    "tags": [
     "אונסן",
     "מקומי",
     "רגיעה",
     "רטרו",
     "תקציב-נמוך"
    ]
   },
   {
    "name": "Shiro-Hige's Cream Puff Factory (Totoro Café)",
    "city": "טוקיו — Setagaya",
    "area": "Setagaya (ליד Shimokitazawa)",
    "category": "בית קפה של דמויות / אוכל",
    "why": "מחווה שקטה ולא רשמית ל-Studio Ghibli, מסתתרת בסמטה שכונתית של Setagaya — הקרמבו (choux à la crème) אפויים ומצופים בצורת Totoro מושלמת, בטעמים עונתיים (matcha, שוקולד, קסטרד). אווירה כובשת ואמיתית, בלי גימיקים; מרגיש כמו פטיסרי שכונתית שפשוט מאוהבת ב-Totoro. אין תור בכניסה, אין אוכל מוגזם — רק מאפה טוב באמת בסביבה מתוקה. משתלב נהדר עם סיור חנויות הוינטג' הסמוכות של Shimokitazawa.",
    "cost": "¥600–900 לקרמבו; ללא דמי כניסה",
    "duration": "30–45 דקות",
    "booking": "אין צורך בהזמנה מראש — הגיעו מוקדם כי צורות ה-Totoro נגמרות לפני הצהריים. כניסה חופשית בלבד.",
    "tags": [
     "אוכל",
     "בית קפה של דמויות",
     "Ghibli",
     "רומנטי",
     "אווירה נינוחה"
    ]
   },
   {
    "name": "Samurai Sword + Kimono Tea Ceremony Combo (Maikoya, Asakusa)",
    "city": "טוקיו — Asakusa, Taito",
    "area": "Asakusa",
    "category": "חוויה תרבותית",
    "why": "קומבו מובנה ומרתק של 3 שעות: לובשים kimono, מבצעים טקס תה matcha פורמלי בחדר tatami, ואז עוברים ל-hakama ולומדים tameshigiri (חיתוך בחרב אמיתית על מחצלות במבוק) בהדרכת מדריך. סניף ה-Asakusa של Maikoya הוא קבוצה קטנה, הוראה באנגלית, וביקורות עקביות כחוויה המלוטשת ביותר מסוגה בטוקיו — הרבה פחות קיטשי מהאלטרנטיבות בפורמט מוזיאון. בסיום אפשר לטייל ב-Nakamise-dori.",
    "cost": "¥10,000–15,000 לאדם לקומבו; חרב בלבד החל מ-¥6,000",
    "duration": "3 שעות",
    "booking": "הזמינו אונליין בכתובת mai-ko.com (Maikoya) — ביטול עד 24 שעות מראש. מומלץ להזמין לפחות שבוע מראש לזוגות שרוצים להגיע לאותה הפגישה.",
    "tags": [
     "תרבותי",
     "kimono",
     "סמוראי",
     "טקס תה",
     "חוויה מעשית"
    ]
   },
   {
    "name": "Private Maiko Tea Ceremony & Ozashiki Performance — Maikoya Gion",
    "city": "קיוטו — Gion / Kiyomizu",
    "area": "Gion",
    "category": "תרבות / גיישה",
    "why": "הדרך הקרובה ביותר שמבקרים רגילים יכולים לחוות ozashiki אמיתי: maiko או geiko מוסמכת מבצעת ריקוד קלאסי בחדר tatami פרטי, מגישה matcha ו-wagashi, ואחר כך עונה לשאלות באנגלית. Maikoya היא המקום היחיד שמציע זאת מדי יום ב-Gion — ולא מדובר בהצגת תחפושות: המופיעות הן חניכות או בוגרות אמיתיות של hanamachi Gion. האופציה הפרטית מבטיחה שהחדר שלכם בלבד, ללא זרים. זה ה'רגע הקיוטו האמיתי' שרוב התיירים לעולם לא מגיעים אליו.",
    "cost": "החל מכ-$100 לאדם (משותף, תה + שאלות) ועד כ-$300 לאדם (חדר פרטי, ריקוד + טקס מלא, 90–120 דקות). הנחות לקבוצות של 6 ומעלה. תוספת לבישת kimono זמינה.",
    "duration": "90–120 דקות",
    "booking": "הזמינו ישירות בכתובת mai-ko.com או דרך Viator/Tripadvisor. הזמנה מראש חובה — כניסה ללא הזמנה אינה מתקבלת. שלחו אימייל ל-gion@maikoya.com לבקשות קבוצתיות פרטיות. מינימום 2 משתתפים. מומלץ להזמין 2–4 שבועות מראש בעונות שיא (פריחת הדובדבן, שלכת הסתיו).",
    "tags": [
     "גיישה",
     "maiko",
     "טקס תה",
     "ozashiki",
     "פרטי",
     "Gion",
     "Kyoto"
    ]
   },
   {
    "name": "Fushimi Sake Brewery Walking Tour — 18 Tastings (Magical Trip)",
    "city": "קיוטו — מחוז Fushimi",
    "area": "Fushimi / Momoyama",
    "category": "אוכל ושתייה / סיור מבשלות",
    "why": "Fushimi היא אחת משתי בירות ה-sake הגדולות של יפן, מוזנת במים תת-קרקעיים מגבעות Momoyama. סיור זה באנגלית, 3 שעות, לוקח אתכם לתוך מבשלות עובדות כולל Gekkeikan (נוסדה 1637), מסביר את ההבדל בין junmai, ginjo ו-daiginjo בחדרי טעימה אמיתיים, ומסתיים בבר sake נסתר עם 18 מנות השוואתיות. מוגבל ל-9 אנשים — אינטימי מספיק לשאול שאלות אמיתיות. מדורג מקום #1 בסיורי sake בקיוטו ב-TripAdvisor 2024 עם 3,500+ בוגרים.",
    "cost": "כ-$87 USD (כ-¥13,000 JPY) לאדם. כניסה עצמאית למוזיאון Gekkeikan בלבד עולה ¥300 כולל טעימה אחת, אם מעדיפים לארגן בעצמכם.",
    "duration": "3 שעות",
    "booking": "הזמינו דרך GetYourGuide (חפשו 'Kyoto Fushimi Sake 18 tastings') או אתר Magical Trip. ביטול חינם עד 24 שעות לפני. Gekkeikan Okura Sake Museum (ביקור עצמי, ¥300) פתוח 9:30–16:30, סגור באמצע אוגוסט Obon ו-28 בדצמבר–3 בינואר. Kizakura Museum פתוח 10:00–17:00, סגור בשני.",
    "tags": [
     "sake",
     "מבשלה",
     "Fushimi",
     "Gekkeikan",
     "Kizakura",
     "טעימות",
     "Kyoto"
    ]
   },
   {
    "name": "Wagashi-Making Class — Kyoto Wagashi ISSHO",
    "city": "קיוטו — Shijo-Karasuma / Karasuma-Oike",
    "area": "מרכז קיוטו",
    "category": "שיעור בישול / אומנות",
    "why": "wagashi (ממתקים יפניים מסורתיים) הם אמנות אכילה — nerikiri עונתיות בצורת פרחי דובדבן, עלי מייפל או ארנבות שלג. ב-Wagashi ISSHO, האומן המוסמך Yasue Miyazaki מעביר שיעורים פרטיים ובקבוצות קטנות לגמרי באנגלית, ליד תחנת Shijo-Karasuma. משתמשים בשעועית Bitchu Azuki איכותית ומכינים שני סוגי nerikiri עונתיים בהשראת העונה הנוכחית של קיוטו. בסוף שותים matcha טרי שהוכנו בעצמכם. הרבה יותר אינטימי משיעורי מפעל לתיירים — המדריכה היא אומנת אמיתית.",
    "cost": "כ-¥5,000–8,000 לאדם (אמתו מחירים עדכניים בכתובת wagashi-issho.com). אלטרנטיבה חסכונית: שיעור Kanshundo כ-¥2,000–3,000 (מכינים 4 סוגים ולוקחים הביתה).",
    "duration": "כ-60–90 דקות",
    "booking": "הזמינו ישירות בכתובת wagashi-issho.com/english.php — הזמנה מראש חובה. זמין גם דרך פלטפורמת byFood. את Kanshundo (מוערך מאוד ב-Tripadvisor) ניתן להזמין ישירות בסניפיהם בקיוטו.",
    "tags": [
     "wagashi",
     "שיעור בישול",
     "nerikiri",
     "ממתקים",
     "matcha",
     "אומנות",
     "Kyoto"
    ]
   },
   {
    "name": "Kurama–Kibune Kawadoko River Dining",
    "city": "קיוטו — הרי Kurama / Kibune (30 דקות צפונה מקיוטו)",
    "area": "Kurama & Kibune, מחוז Sakyo",
    "category": "טבע / אוכל",
    "why": "kawadoko היא מסורת קיוטו בת מאות שנים של אכילה על פלטפורמות עץ תלויות ממש מעל נחל הרים צלול. בקיץ Kibune קרירה ב-10°C מקיוטו המרכזית — המים הקרים הזורמים מתחת לרגליכם בזמן שאתם אוכלים ארוחות kaiseki רב-קורסיות הן חוויה על-עולמית. הטיול בין Kurama (מעיין חם, מיתולוגיית tengu) ו-Kibune לוקח שעתיים דרך יער ארזים. Kibune Ugenta מחזיקה מיישלן 1 Key; Ryokan Hirobun הוא המקום היחיד שמגיש nagashi somen — אטריות שזורמות במורד תעלות במבוק. הצעה: התחילו ב-Kurama, ירדו ל-Kibune לארוחת צהריים.",
    "cost": "ארוחות kawadoko kaiseki לצהריים: ¥8,000–18,000 לאדם (Kibune-so: סט Tamatebako ¥6,000, kaiseki Seiryu ¥18,000). בנטו קז'ואל ב-Kibune Sagenta מכ-¥3,500, ללא הזמנה. מעיין חם (Kurama Onsen): כ-¥1,500 כניסה.",
    "duration": "יום שלם (6–8 שעות) — הליכה + ארוחה + מעיין חם",
    "booking": "עונת kawadoko: 1 במאי – 30 בספטמבר (חלק מהמסעדות עד 31 באוקטובר). מומלץ להזמין מסעדות kaiseki הרבה מראש לשיא יולי–אוגוסט (התקשרו ישירות או הזמינו דרך אתרי המסעדות). nagashi somen של Hirobun הוא כניסה חופשית — הגיעו מוקדם ועמדו בתור. גישה: Eizan Railway מתחנת Demachiyanagi ל-Kurama או Kibune-guchi (כ-30 דקות, ¥430).",
    "tags": [
     "kawadoko",
     "אכילה ליד הנהר",
     "Kibune",
     "Kurama",
     "kaiseki",
     "טבע",
     "טיול רגלי",
     "קיץ"
    ]
   },
   {
    "name": "Uji Matcha Day — Farm Tour, Stone-Mill Grinding & Oldest Teahouse",
    "city": "Uji (30 דקות דרומה מקיוטו ב-JR או Kintetsu)",
    "area": "עיר Uji",
    "category": "אוכל ושתייה / תרבות תה",
    "why": "Uji היא מרכז ה-matcha של יפן כבר 800 שנה. יום Uji מלא פוגש את כל השכבות: סיור מפעל Marukyu Koyamaen (חינם או ¥500, ראו את אבני הטחינה שהופכות עלי tencha לאבקה); Fukujuen Uji Kobo — טוחנים matcha בעצמכם עם ריחיים ואז מקצפים ושותים (¥1,650); ביקור ב-Tsuen, בית התה הוותיק ביותר ביפן שנוסד ב-1160 על נהר Uji; והליכה ב-Uji Tea Road לאורך חוות תה עובדות. זה מנצח כל 'חוויית לאטה matcha' עירונית בפער עצום — אתם מבינים מאיפה הטעם באמת מגיע.",
    "cost": "סיור מפעל Marukyu Koyamaen: ¥500. חוויית ריחיים Fukujuen: ¥1,650. בית תה Tsuen: matcha + ממתקים מכ-¥800. סיור חצי יום מודרך בחוות (Viator/byFood): כ-¥5,000–8,000 לאדם. JR Uji מקיוטו: ¥240 (20 דקות).",
    "duration": "חצי יום עד יום שלם",
    "booking": "Fukujuen Uji Kobo: כניסה חופשית או הזמנה מראש באתרם (kyoto-ujicha.com). Marukyu Koyamaen: בדקו זמינות סיורים באתרם לפי עונה. סיורי farm-to-table מודרכים: הזמינו דרך byFood או Viator ('Marvelous Matcha Kyoto Green Tea Tour' או 'Uji and Wazuka Farm'). זמינות 2026 אושרה ב-Tripadvisor.",
    "tags": [
     "matcha",
     "תה",
     "Uji",
     "חווה",
     "ריחיים",
     "בית תה",
     "Tsuen",
     "Fukujuen"
    ]
   },
   {
    "name": "Fushimi Inari Night Walk with Ghost Stories",
    "city": "קיוטו — Fushimi / Inari",
    "area": "Fushimi Ward",
    "category": "טיול לילי / מקדשים נסתרים",
    "why": "10,000 שערי ה-torii הצבעוניים של Fushimi Inari עמוסים בתיירים במהלך היום. בלילה, המקדש פתוח 24/7 וחינם לחלוטין — סיור מודרך של שעה וארבעים וחמש דקות לוקח אתכם דרך השערים לאור פנסי לנטרן, כשסיפורי רוחות יפניים (kwaidan) ואגדות עירוניות מקומיות נארגים לאורך הדרך. השבילים העמוקים לכיוון תצפית Yotsutsuji ומקדש הפנים Okusha מרגישים מפחידים ויפים באמת. הווריאנט של Magical Trip — טיול רגלי נסתר — יוצא מהשביל הסלול אל חורשות הבמבוק ומקדשי מפל הבודהיסטים — זוכה פרס Best of the Best של TripAdvisor 2025.",
    "cost": "סיור לילי: מבוסס-טיפ (מוצע ¥1,000–2,000 לאדם, בפועל חינם). טיול רגלי נסתר ביום: ~¥5,000–7,000 דרך Magical Trip / Tripadvisor. טיול עצמאי בלילה: חינם, 24/7.",
    "duration": "~שעה ו-45 דקות (סיור מודרך לילי); 3–4 שעות (טיול רגלי נסתר)",
    "booking": "סיור לילי: הזמינו דרך kyotofreewalkingtour.com (הזמנה מיידית אונליין, נפגשים ב-Great Torii ממול לתחנת JR Inari). זמין מאפריל 2026 — מאושר. טיול נסתר: הזמינו דרך Magical Trip או Tripadvisor (חפשו 'Hidden hike of Fushimi Inari'). עצמאי: ללא הזמנה, כניסה חינם 24/7.",
    "tags": [
     "Fushimi Inari",
     "טיול לילי",
     "שערי torii",
     "סיפורי רוחות",
     "מקדשים נסתרים",
     "Kyoto"
    ]
   },
   {
    "name": "Naramachi Stroll + Nakatanidou Mochi Pounding",
    "city": "Nara",
    "area": "Naramachi (דרומית ל-Kofukuji Temple)",
    "category": "אוכל / שכונה היסטורית",
    "why": "כולם הולכים לגן הצבאים ול-Todaiji. כמעט אף אחד לא הולך חמש דקות דרומה אל Naramachi — רשת של בתי סוחר מתקופת Edo ששמרו על צורתם (machiya), שבהם פועלים כיום מבשלות sake, חנויות לאקיור, בתי קפה טופו, ומוזיאון בית-הסוחר Koshi-no-Ie (כניסה חינם). השיא הוא Nakatanidou ב-29 Hashimotocho: עובדים מכות yomogi (לענה) mochi במהירות ברקים — בקצב שיא גינס — ממש מול הרחוב. ה-mochi המתקבל, מלא שעועית אדומה מתוקה ונאכל חם במקום, עולה ~¥200 ליחידה והוא אחד הביסים הטובים ביותר בכל אזור Kansai. ועוד בסביבה: גני Isuien ו-Yoshikien, ומקדש Gangoji Temple (אונסק\"ו, רעפי הגג הקדומים ביותר ביפן).",
    "cost": "mochi מ-Nakatanidou: ~¥200 ליחידה (מזומן בלבד). מוזיאון Koshi-no-Ie: חינם. גן Isuien: ¥1,200. Gangoji Temple: ¥500. יום שלם ב-Nara = זול מאוד.",
    "duration": "2–4 שעות (לולאת Naramachi, ניתן לשלב עם גן הצבאים באותו יום)",
    "booking": "אין צורך בהזמנה — Nakatanidou הוא walk-in (29 Hashimotocho, Nara 630-8217; טל' 0742-23-0141). הניסוק הוא לפי ביקוש ולא לפי לוח זמנים קבוע — בואו בשעות הצהריים של ימי חול לסיכוי הטוב ביותר, או שאלו את הצוות מתי האצווה הבאה. בדקו @nakatanidou.jp באינסטגרם לשעות עדכניות.",
    "tags": [
     "Nara",
     "Naramachi",
     "mochi",
     "Nakatanidou",
     "machiya",
     "נסתר",
     "אוכל",
     "היסטוריה"
    ]
   },
   {
    "name": "Shinsekai & Janjan Yokocho Retro Osaka Food Tour",
    "city": "Osaka — Shinsekai / דרום Namba",
    "area": "Naniwa Ward / Shinsekai",
    "category": "סיור אוכל / שכונה רטרו",
    "why": "Shinsekai ('עולם חדש') נבנתה ב-1912 כתשובת Osaka לפריז וקוני איילנד — ואז שקעה בדעיכה שלאחר המלחמה והפכה לשכונת kushikatsu של מעמד הפועלים. כיום זו השכונה הרטרו-אותנטית ביותר ב-Osaka: מגדל Tsutenkaku Tower, ארקיידי משנות ה-50, ומבוי מקורה באורך 180 מטר (Janjan Yokocho, שמו הרשמי Nanyo Dori) שבו פועלות מסעדות kushikatsu ובריסים עומדים בידי משפחות בנות שמונים. סיורי ערב מודרכים מתחילים בתחנת Ebisucho ומסתיימים ב-Janjan Yokocho, וכוללים 5–6 טעימות: kushikatsu (טובלים פעם אחת — חוק קדוש), dote-yaki (תבשיל גיד בקר), takoyaki בסגנון Osaka, baby castella על מקל מ-Kankando. הסיור מבקר גם במקדש שינטו נסתר ואצל יצרן להבים בן 80 שנה.",
    "cost": "סיור אוכל מודרך 2–3 שעות: ~¥5,000–6,000 לאדם כולל טעימות (רישום ב-Viator מאושר 2026). עצמאי: מנות kushikatsu ~¥600–1,200; takoyaki ¥450–500. ידידותי מאוד לתקציב.",
    "duration": "2–3 שעות (מודרך); גמיש בטיול עצמאי",
    "booking": "סיור מודרך: הזמינו דרך Viator ('Retro Osaka Street Food Tour Shinsekai') או Tripadvisor — שעות ערב פופולריות, הזמינו 1–2 שבועות מראש. עצמאי: ללא הזמנה, פתוח כל השנה, מסעדות 10:00–20:30. רכבת תחתית קרובה: Ebisucho (קו Sakaisuji) או Dobutsuen-mae (קווי Midosuji/Sakaisuji).",
    "tags": [
     "Osaka",
     "Shinsekai",
     "Janjan Yokocho",
     "kushikatsu",
     "סיור אוכל",
     "רטרו",
     "אוכל רחוב"
    ]
   },
   {
    "name": "Ajisai Onsen Ryokan — Private Open-Air Rotenburo",
    "city": "Hakone (אזור Gora)",
    "area": "Hakone",
    "category": "onsen פרטי / ryokan",
    "why": "רק 2 חדרי אורחים, וכל פגישת onsen היא פרטית לחלוטין — אתם מקבלים את האמבטיה הפנימית וה-rotenburo הפתוח לרשותכם בלבד בזמן הפגישה (60 דקות ערב, 45 דקות בוקר), שניהם ידידותיים לקעקועים — ללא כיסויים או טלאים. המימד האינטימי אומר אפס המון ואפס מבוכה. שירות שמפנייה, ארוחת kaiseki בחדר, ואווירת גן — בנוי בדיוק בשביל זוגות.",
    "cost": "החל מ-~¥40,000–80,000 ללילה לזוג (חדר + תוכנית ארוחה); משתנה מאוד לפי עונה. בדקו ב-Klook או באתר הישיר.",
    "duration": "לינה (צ'ק-אין 3 pm, צ'ק-אאוט 11 am); פגישות onsen בוקר + ערב",
    "booking": "הזמינו ישירות ב-ajisaionsenryokan.jphotel.site או דרך Klook/Hotels.com. הזמינו 3–6 חודשים מראש לסופי שבוע. tattoofriendlyonsen.com מאשר את מדיניות הקעקועים.",
    "tags": [
     "onsen",
     "ידידותי לקעקועים",
     "פרטי",
     "רומנטי",
     "ryokan"
    ]
   },
   {
    "name": "Hakone Ropeway over Owakudani — Mt Fuji in the Steam",
    "city": "Hakone",
    "area": "Hakone (קטע Owakudani–Ubako)",
    "category": "רכבל / נקודת תצפית אווירית",
    "why": "הגונדולה מרחפת מעל עמק וולקני פעיל שפולט אדי גופרית, כש-Mt Fuji ממלא את האופק — נוף שפשוט אי-אפשר לקבל בדרך אחרת. הקטע הטוב ביותר הוא מ-Owakudani ל-Ubako. תזמון חשוב: לכו בבוקר מוקדם בחורף (נוב'–פבר') לסיכויי יותר מ-70% לראות את Fuji בבהיר עם פסגה מושלגת. אכלו ביצת tamago שחורה (עוף קשה מבושל במעיינות הגופרית, אומרים שמוסיפה 7 שנים לחייכם) בפסגה — פינאקל של חוויה יפנית בלתי ניתנת לשכפול.",
    "cost": "¥1,800–2,200 כיוון אחד (כלול ב-Hakone Free Pass ¥6,500 לאדם, שכולל גם את רכבת Romancecar, אוטובוס, סירה ופוניקולר — ערך יוצא דופן לזוג)",
    "duration": "30 דקות נסיעה בגונדולה לכל כיוון; הקצו 3–4 שעות ל-Hakone Loop המלא",
    "booking": "ללא הזמנה מראש; קנו Hakone Free Pass בתחנת Shinjuku Odakyu או אונליין ב-odakyu.jp. בדקו נראות Mt Fuji בזמן אמת ב-hakone.or.jp לפני היציאה.",
    "tags": [
     "רכבל",
     "נקודת תצפית",
     "וולקני",
     "fuji",
     "איקוני"
    ]
   },
   {
    "name": "Chureito Pagoda + Kawaguchiko Reverse-Fuji Reflection",
    "city": "Kawaguchiko (אגמי Fuji החמישה) — טיול יום מ-Hakone",
    "area": "Kawaguchiko / Fujiyoshida",
    "category": "נקודת תצפית על Mt Fuji (טיול יום)",
    "why": "לאימפקט גולמי של Fuji, Kawaguchiko מנצח את Hakone: ההר פתוח ובלתי חסום, קרוב יותר, ומשתקף בשלמות כמו מראה בתוך האגם בבקרות ללא רוח ('Sakasa Fuji'). Chureito Pagoda — פגודה בת חמש קומות שממסגרת את Fuji עם האגם מתחתיה — היא הסצנה המצולמת ביותר ביפן. הגיעו ל-Oishi Park לפני 7 בבוקר לראות את ההשתקפות; טפסו 400 מדרגות ל-Chureito לפני 8 בבוקר כדי להקדים את הצלמים. צלצלו בפעמון Lovers' Bell בפסגת Panorama Ropeway של Mt Fuji לאושר ולמזל טוב.",
    "cost": "חינם (Chureito/Oishi Park). Panorama Ropeway ¥1,000 הלוך-חזור. טיול יום ל-Kawaguchiko מ-Hakone: ~¥2,000 לאדם באוטובוס או רכבת דרך Gotemba.",
    "duration": "יום מלא מ-Hakone (התחילו 5:30 בבוקר לראות את ההשתקפות, חזרו אחר הצהריים)",
    "booking": "אין צורך בהזמנה לנקודות התצפית. Kawaguchiko Panorama Ropeway: קנו עם ההגעה. ב-lake-kawaguchiko.com יש מדריך עדכני לנקודות הצילום הטובות ביותר ל-2026.",
    "tags": [
     "fuji",
     "השתקפות",
     "צילום",
     "pagoda",
     "טיול יום"
    ]
   },
   {
    "name": "Hakone Open-Air Museum — Foot Onsen + Picasso Pavilion",
    "city": "Hakone (תחנת Ninotaira, Hakone Tozan Railway)",
    "area": "Hakone",
    "category": "מוזיאון / חוויה אמנותית",
    "why": "אחד מפארקי הפסל החיצוניים הגדולים בעולם: 120 יצירות של Moore, Rodin, Calder ו-Niki de Saint Phalle פרוסות על גני גבעות מעוצבים. עברו יחד דרך מגדל Symphonic Sculpture (קליידוסקופ של ויטראז' שטיפסים לתוכו). הסוד הזוגי האמיתי: אמבט כפות הרגליים הפתוח עם מים חמים טבעיים — יושבים זה לצד זה, שורים את הרגליים במים אמיתיים של onsen, מוקפים בפסלים ובנופי ההרים. ואז היכנסו ל-Picasso Pavilion (מעל 300 יצירות). ייחודי לחלוטין — צהריים שקטים ויפים לשניים.",
    "cost": "¥2,000 לאדם (¥1,800 עם הנחת Asoview). כלול בחלק מחבילות Hakone Free Pass.",
    "duration": "2.5–3.5 שעות",
    "booking": "קנו אונליין ב-hakone-oam.or.jp/en/webticket או ב-Headout/Viator. הזמנה מראש אינה חובה אבל חוסכת עמידה בתור.",
    "tags": [
     "אמנות",
     "חוץ",
     "אמבט רגליים",
     "onsen",
     "פיסול"
    ]
   },
   {
    "name": "Kichijoji Harmonica Yokocho — Guided Bar-Hopping with a Local",
    "city": "טוקיו (Kichijoji, מערב טוקיו)",
    "area": "Kichijoji / Musashino",
    "category": "אוכל ושתייה / סיור חיי לילה",
    "why": "Harmonica Alley (Hamonika Yokocho) היא מבוך של כ-70 izakayas קטנטנים מתקופת אחרי המלחמה — כל אחד בגודל של סלון — עמוסים כתף-לכתף בפקידים ומקומיים, וכמעט ללא תיירים. סיור מודרך של 4 שעות עם מדריך מקומי (byFood או Klook) מוביל אתכם עמוק לתוך המבוך, לעבר מקומות מנוהלי-משפחה שלא מופיעים באף מדריך תיירים — ובדרך לומדים נימוסי שתייה יפניים, הזמנה בשפה המקומית, והתרבות שמאחורי oolong-hai, umeshu ו-yakitori על גחלים. הקבוצה מוגבלת ל-6 משתתפים בלבד, והתחושה אינטימית של כניסה לסוד. ערב מושלם לפני או אחרי שהייתכם ב-Hakone.",
    "cost": "כ-¥8,000–12,000 לאדם הכולל הכל (אוכל + שתייה + מדריך). בדקו byFood.com או Klook.",
    "duration": "4 שעות (בדרך כלל 18:00–22:00)",
    "booking": "הזמינו ב-byfood.com או klook.com. המקומות מתמלאים מהר בסופי שבוע — הזמינו 3–4 שבועות מראש.",
    "tags": [
     "אוכל",
     "שתייה",
     "izakaya",
     "מקומי",
     "חיי לילה",
     "מודרך"
    ]
   },
   {
    "name": "Couples Kimono Photoshoot in Asakusa — HANAYAKA",
    "city": "טוקיו (Asakusa)",
    "area": "Asakusa",
    "category": "צילום בקימונו",
    "why": "לבשו kimono מסורתי אותנטי ו-hakama, בחרו אביזרים מתוך מבחר של 500+ פריטים ועצבו את שיערכם — ואז צעדו 3 דקות אל Sensoji Temple לצילום מקצועי של שעה שלמה. תצאו עם 100+ תמונות דיגיטליות מרוטשות. HANAYAKA היא אחת השירותים המדורגים ביותר באזור, ידועה ב-kimonos באיכות גבוהה (לא ברמת השכרת-תיירים הזולה) ובצלמים שמכירים את הזוויות והאור הטובים ביותר של המקדש. התמונות המוגמרות יוצרות מזכרת יום-הולדת או יום-נישואין מרגשת — אישית מאוד, ויפנית בצורה שאין לטעות בה.",
    "cost": "כ-¥65,000 לשניים (הכולל הכל: kimono + עיצוב + צילום + 100+ תמונות). אפשרות השכרה בלבד מכ-¥6,000 לאדם אם מעדיפים לצלם לבד.",
    "duration": "2.5–3 שעות סה\"כ (עיצוב + צילום)",
    "booking": "הזמינו ב-Klook (חפשו HANAYAKA Asakusa) או שלחו אימייל ל-kimonohanayaka@gmail.com. הזמינו 2–4 שבועות מראש; פופולרי במיוחד בסופי שבוע.",
    "tags": [
     "kimono",
     "צילום",
     "יום הולדת",
     "יום נישואין",
     "תרבותי",
     "asakusa"
    ]
   },
   {
    "name": "MITUBACI Silver Couple Ring Workshop",
    "city": "טוקיו (מספר סניפים)",
    "area": "Tokyo",
    "category": "חוויה ייחודית שרק ביפן / מלאכת יד",
    "why": "באטלייה טוקיואית בן 50 שנה, אומן ותיק מלווה אתכם שניים בתהליך פטישיה, כיפוף וריתוך של גוש כסף מוצק לטבעות תואמות — בידיים, עם כלי נפחות אמיתיים. חורטים בפנים של הטבעת את ראשי התיבות של השני או מסר אישי, ויוצאים עם הטבעות ביום אותו. זו לא ערכה או תבנית: אתם ממש יוצרים אותן. לטיול יום-הולדת או לאבן דרך ביחסים, זו מזכרת מוחשית, קבועה וייחודית ביפן — שעולה שבריר ממה שתשלמו לצורף, ולוקחת כ-90 דקות. שיבוץ אבן (שמבצע האומן במקום) זמין בהמתנה של שעה.",
    "cost": "טבעות Silver 950 מכ-¥6,000 לאדם (סדנת Asakusa Doshin דרך Klook); סשנים פרימיום של MITUBACI כ-¥15,000–25,000 לאדם. שימו לב: MITUBACI עדכן מחירים במרץ 2026 — בדקו ב-mitubaci.co.jp למחירים עדכניים.",
    "duration": "90 דקות (הטבעת מוכנה באותו יום)",
    "booking": "הזמינו ב-mitubaci.co.jp/en או ב-Klook (חפשו 'Asakusa silver ring'). הזמנה מראש חובה — הקבוצות קטנות (2–6 אנשים).",
    "tags": [
     "מלאכת יד",
     "תכשיטים",
     "יום הולדת",
     "מזכרת",
     "חוויה מעשית",
     "ייחודי"
    ]
   },
   {
    "name": "90-Minute Mt Fuji Helicopter Tour from Tokyo",
    "city": "טוקיו (יוצא מ-Tokyo Heliport, Shinkiba / Funabashi)",
    "area": "Tokyo → Mt Fuji → Hakone",
    "category": "טיסת מסוק / חוויה אווירית",
    "why": "לרגע שפשוט לא חוזר על עצמו — או להפתעת יום-הולדת שתדבר בעד עצמה — מסוק פרטי מקיף את Mt Fuji בגובה הפסגה, עוקב אחרי שפת המכתש כשהשלג משתרע למטה ו-Lake Ashinoko נוצץ בקלדרת Hakone. המסלול עובר על Tokyo Tower, חזית הנמל של Yokohama ו-Enoshima. החודשים הטובים ביותר הם נובמבר–פברואר — ראות מושלמת ו-Fuji מכוסה שלג. לשבת זה-לצד-זה במסוק עם חלון בועה כשההר האייקוני של יפן ממלא את כל המסגרת — פשוט אין לזה מתחרה.",
    "cost": "כ-¥120,000–490,000 לאדם, תלוי באורך המסלול (20 דקות לעומת 90 דקות). שכר פרטי לשניים–שלושה אנשים כ-¥317,900. מסלול 90 דקות ל-Mt Fuji כ-¥490,000 לאדם. טיסות קצרות מעל Tokyo Bay מכ-¥63,000 לאדם.",
    "duration": "20 דקות (נוף טוקיו) עד 90 דקות (לולאה מלאה סביב Mt Fuji)",
    "booking": "הזמינו ב-japanflightadventures.com או ב-Viator (חפשו 'Mt Fuji helicopter Tokyo'). WAmazing.com מציע גם מסלול Tokyo–Hakone. חובה להזמין שבועות–חודשים מראש; מדיניות ביטול עקב מזג אוויר משתנות.",
    "tags": [
     "מסוק",
     "fuji",
     "אווירי",
     "יום הולדת",
     "בזבוז-מפנק",
     "יוקרה"
    ]
   },
   {
    "name": "Grand Sumo Aki Basho",
    "city": "Tokyo",
    "area": "Ryogoku Kokugikan",
    "category": "תרבות יפנית",
    "why": "טורניר הסומו הגדול של ספטמבר — ספורט מונומנטלי עם טקסים בני אלפי שנים, ובית סומו מרשים. ניתן לראות אגדות חיות על המזרן.",
    "cost": "¥3,800–14,000 לאדם (לפי מקום)",
    "duration": "4–6 שעות",
    "booking": "הזמינו דרך האתר הרשמי של JTA (sumo.or.jp) — מושבי זוגות (masu-seki) נגמרים זמן רב מראש; פתיחת מכירות 8 באוגוסט.",
    "tags": [
     "סומו",
     "תרבות",
     "ספורט",
     "טקס",
     "ייחודי"
    ],
    "highlight": true
   },
   {
    "name": "Nakasendo: מגומה → צומאגו",
    "city": "Kiso Valley",
    "area": "Magome & Tsumago",
    "category": "טבע וטיול",
    "why": "שמונה קילומטרים של דרך שרית עידן אדו בין כפרי עץ משמרים — בלי מכוניות, בלי טלפונים, רק יערות אורן ומפלים קטנים. רומנטי ואיטי בדיוק הנכון.",
    "cost": "חינם (הכניסה לדרך; מוזיאונים ¥300–500)",
    "duration": "3–4 שעות הליכה",
    "booking": "",
    "tags": [
     "טיול",
     "טבע",
     "רומנטי",
     "כפר",
     "היסטוריה"
    ],
    "highlight": true
   },
   {
    "name": "סדנת סושי + וואגאשי",
    "city": "Tokyo",
    "area": "Asakusa / Tsukiji",
    "category": "סדנה וחוויה קולינרית",
    "why": "לומדים לגלגל מקי ולעצב ממתקים יפניים עדינים לצד שף מקצועי — הביתה עם מתכונים, כישורים וזיכרון שאי אפשר לקנות בחנות.",
    "cost": "¥8,000–14,000 לאדם",
    "duration": "2–3 שעות",
    "booking": "הזמינו מראש דרך Airbnb Experiences או Cookly — מקומות מוגבלים לקבוצות קטנות.",
    "tags": [
     "סדנה",
     "קולינריה",
     "סושי",
     "ואגאשי",
     "חוויה"
    ],
    "highlight": false
   },
   {
    "name": "טקס תה + קימונו",
    "city": "Kyoto",
    "area": "Higashiyama / Gion",
    "category": "סדנה ותרבות",
    "why": "לובשים קימונו מסורתי ביחד ומבצעים טקס תה (chado) מונחה — רגע שקט ומכוון בלב קיוטו ההיסטורית. צלמים שמכים את עצמם על ראשם שלא הזמינו מראש.",
    "cost": "¥5,000–9,000 לאדם",
    "duration": "1.5–2 שעות",
    "booking": "הזמינו דרך Maikoya Kyoto או Camellia Tea Experience — בחרו בחבילת זוגות.",
    "tags": [
     "טקס תה",
     "קימונו",
     "תרבות",
     "רומנטי",
     "חוויה"
    ],
    "highlight": false
   },
   {
    "name": "ערב מאיקו וגייקו",
    "city": "Kyoto",
    "area": "Gion Hatanaka / Pontocho",
    "category": "חוויה ייחודית",
    "why": "ארוחה אינטימית עם מאיקו אמיתית — שיחה, משחקי טפיחות מסורתיים ורגע של יפן שרוב התיירים לא מגיעים אליו. חגיגת יום ההולדת הארבעים שתספרו עליה לכולם.",
    "cost": "¥40,000–60,000 לאדם",
    "duration": "2–2.5 שעות",
    "booking": "הזמינו 2–3 חודשים מראש דרך Gion Hatanaka או סוכן מוסמך — אין walk-in.",
    "tags": [
     "מאיקו",
     "גיישה",
     "גיון",
     "רומנטי",
     "חגיגה",
     "ייחודי"
    ],
    "highlight": true
   },
   {
    "name": "teamLab Planets",
    "city": "Tokyo",
    "area": "Toyosu",
    "category": "אמנות ואנימה",
    "why": "הולכים יחפים דרך מים רדודים ונכנסים לתוך יקום של אור ורפלקציות אינסופיות — אמנות אימרסיבית שמרגישה כמו להיות בתוך אנימה.",
    "cost": "¥3,200 לאדם",
    "duration": "1.5–2 שעות",
    "booking": "קנו כרטיסים מקדימה באתר הרשמי (planets.teamlab.art) — לעיתים נגמרים שבועות מראש.",
    "tags": [
     "אמנות",
     "אנימה",
     "טכנולוגיה",
     "אימרסיבי",
     "חוויה"
    ],
    "highlight": true
   },
   {
    "name": "מוזיאון ג'יבלי",
    "city": "Tokyo",
    "area": "Mitaka",
    "category": "אנימה וגיימינג",
    "why": "עולם קסום שעיצב מיאזאקי עצמו — חדרים שנראים כמו תוך הסרטים, הרובוט הגדול על הגג והתחושה שאתם בתוך חלום חי. חובה לכל אוהב אנימה.",
    "cost": "¥1,000 לאדם",
    "duration": "2–3 שעות",
    "booking": "הזמינו בדיוק חודש לפני (ה-10 לחודש שלפני) דרך Lawson Ticket — מוגבל מאוד, הכינו עצמכם לשעת הפתיחה.",
    "tags": [
     "ג'יבלי",
     "אנימה",
     "מוזיאון",
     "קסום",
     "חוויה"
    ],
    "highlight": true
   }
  ],
  "routes": [
   {
    "id": "tsukiji",
    "date": "2026-09-19",
    "city": "Tokyo",
    "area": "צוקיג׳י",
    "emoji": "🐟",
    "title": "שוק צוקיג׳י החיצוני — ארוחת בוקר של אלופים",
    "subtitle": "8 תחנות טעימה בסמטאות · 08:00–10:15",
    "intro": "השוק הסיטונאי המפורסם עבר ב-2018 לטויוסו, אבל השוק החיצוני (Jogai) נשאר במקומו — 400+ דוכנים חיים ובועטים. הסוד הוא לבוא מוקדם (לפני 09:00 שקט, אחרי 10:00 צפוף), לאכול היכן שקונים, ולזרום מסמטה לסמטה. זו לא ארוחה אחת אלא רצף של ביסים קטנים — חלקו כל מנה בשניים כדי לטעום הכול.",
    "meta": {
     "duration": "~2 שעות",
     "distance": "~1.5 ק״מ (סמטאות והלוך-חזור)",
     "start": "תחנת Tsukiji (קו Hibiya), יציאה 1/2 — בראש רחוב Monzeki-dori",
     "getThere": "מקבוקיצ׳ו: קו Marunouchi עד Ginza ואז Hibiya עד Tsukiji, ~20–25 דק׳",
     "end": "מקדש Namiyoke, צמוד ליציאת Tsukijishijo (קו Oedo)",
     "cost": "אין דמי כניסה. הליכה חופשית בשוק; אוכל מהדוכנים בערך ¥2,500–4,000 לאדם אם טועמים הרבה דברים. קושי-טמאגו ~¥100–200 לשיפוד, קיצונאיה הורומון-דון ~¥900, שיפודי וואגיו/פירות ים ~¥500–1,000 כל אחד, קערת אוני/קייסן ~¥1,500–3,000. מגיעים במטרו (¥180–210 בכרטיס IC), בלי צורך במונית.",
     "luggage": "המזוודה הראשית נעולה במלון בקבוקיצ'ו (HOTEL AMANEK) — יוצאים עם דייפק וכרטיס Suica בלבד. אין לוגיסטיקה מיוחדת היום.",
     "meal": "קיצונאיה (きつねや) — קערת הורומון-דון האגדית של השוק, ~¥900. תתייצבו מוקדם כי יש תור והם נסגרים מוקדם אחר הצהריים; מוסיפים שיפוד טמגויאקי חם של מרוטקה/ימאצ'ו ב-¥100–200."
    },
    "stops": [
     { "time": "08:05", "name": "Marutake (丸武) — טמגויאקי", "walk": "3 דק׳ מהיציאה, בראש Monzeki-dori", "see": "חביתת דאשי מתקתקה על שיפוד, חמה מהמחבת — ¥100–150.", "why": "יצרן טמגויאקי צוקיג׳י ותיק (קשור למשפחת שף טלוויזיה מפורסם). הגלגול המתוק-דאשי הוא מסורת אֶדוֹמָאֶה שנצרבת על מחבת נחושת מלבנית.", "tip": "אכלו במקום — קצה הקרמל-סוכר נמוג תוך דקות.", "map": "35.6659,139.7702" },
     { "time": "08:12", "name": "Yamacho (山長) — טמגויאקי", "walk": "1 דק׳ הלאה", "see": "טמגו על שיפוד, סגנון יבש ומעודן יותר — ¥100–150.", "why": "בית הטמגויאקי האייקוני השני של צוקיג׳י. המקומיים מתווכחים: Yamacho (מעודן) מול Marutake (עסיסי-מתוק). הטעימה הכפולה היא מהלך צוקיג׳י קלאסי.", "tip": "קחו אחד מכל אחד וחלקו — כך משווים בלי להתמלא.", "map": "35.6661,139.7699" },
     { "time": "08:22", "name": "Kitsuneya (きつねや) — הורמון-דון", "walk": "2 דק׳ אל Monzeki-dori הראשי", "see": "אורז מעל קרביים ובצל ירוק מבושלים במיסו — ~¥900. גם גיו-דון קטן.", "why": "פתוח מ-1947. 'הורמון' הוא סלנג אוסקאי לנתחים שהקצבים זרקו — פועלי השוק הפכו את התבשיל הזול והעשיר לארוחת בוקר אהובה. תריחו את הסיר מרחוק.", "tip": "תור קבוע ומעט שרפרפים — הגיעו מוקדם, אוכלים בעמידה מול הדלפק.", "map": "35.6655,139.7695" },
     { "time": "08:35", "name": "דלפק אוני / קאיסן בסמטה", "walk": "2 דק׳, סמטה צדדית", "see": "אוני (קיפוד ים) בכוסית או על אורז ~¥500–1,500; גם שיפודי טונה ושקערוריות קאיסן.", "why": "אחד המקומות הטובים מחוץ להוקאידו לאכול אוני שעות ספורות אחרי שנדוג. הטונה היא 'מלכת צוקיג׳י' — akami רזה, chutoro אמצע מתוק, otoro בטן שנמסה.", "tip": "קנו היכן שיש תור של יפנים ואכלו מיד בעמידה — אוני מתחמצן מהר.", "map": "35.6657,139.7690" },
     { "time": "08:50", "name": "שיפודי וואגיו ופירות ים על הגריל", "walk": "2 דק׳, לכו לפי העשן", "see": "שיפודים חרוכים מהגחלים — צדפה, צלופח, וואגיו — ~¥500–1,000 ליחידה.", "why": "דוכני היאקימונו הם הלב החושי של השוק — צולים בהזמנה לפועלי השוק עוד מימי השוק הסיטונאי.", "tip": "אכלו בעמידה ליד הגריל — בכמה סמטאות אסור ללכת-ואוכל, ושיפוד חם מטפטף.", "map": "35.6656,139.7692" },
     { "time": "09:05", "name": "מקדש Namiyoke Inari (波除稲荷)", "walk": "3 דק׳ אל קצה השוק הדרומי", "see": "מקדש שומר קטן; ראשי אריות (shishi) ענקיים ואנדרטאות שתרמו סוחרי הדגים (כולל אנדרטת טונה).", "why": "נוסד ב-1659. השם = 'הגנה מהגלים'. אחרי שהשוק הועבר לכאן (אחרי רעש 1923) הפך למקדש-המגן הלא-רשמי של הסוחרים.", "tip": "שקט, חינם, 5 דק׳ — הפוגה יפה ונקודת סיום נוחה ליד תחנת Tsukijishijo.", "map": "35.6644,139.7686" },
     { "time": "09:20", "name": "Masamoto / Aritsugu — סכינים", "walk": "3 דק׳, ברחוב Namiyoke-dori", "see": "סכיני מטבח יפניות מזוייפות ביד. Masamoto (מ-1850s, בשוק מ~1907) ו-Aritsugu (שורשי קיוטו).", "why": "אלה נפחים מקצועיים שסיפקו לחותכי הדגים. יאנגיבה חד-צד או סנטוקו הם מזכרת רצינית (¥8,000 ומעלה).", "tip": "בקשו רשות לצלם; הצוות יחרוט שם ויסביר על הפלדה — חוויה יפה לזוג, לא רק אוכל.", "map": "35.6647,139.7688" },
     { "time": "09:40", "name": "סיום מתוק — מאצ׳ה / דאיפוקו / טאיאקי", "walk": "2 דק׳ חזרה למרכז", "see": "סופט-סרב מאצ׳ה, דאיפוקו תות (Soratsuki), או טאיאקי בצורת טונה (Sanokiya) — ~¥200–400.", "why": "מסיימים על מתוק יפני; הטאיאקי בצורת טונה הוא קריצה לזהות השוק.", "tip": "התחנות הכי פחות רגישות לזמן — שמרו אותן לסוף כשהקהל מתעבה, וצאו לתחנה עד 10:15.", "map": "35.6658,139.7698" }
    ],
    "special": [
     "🥚 דו-קרב הטמגויאקי: Marutake (מתוק-עסיסי) מול Yamacho (מעודן) — הטעימה הכפולה היא טקס.",
     "🔪 חנויות הסכינים Masamoto ו-Aritsugu — מלאכת יד חיה עם חריטת שם.",
     "💴 מזומן חובה — רוב הדוכנים לא מקבלים כרטיס. מרכז המידע Plat Tsukiji מציע לוקרים (~¥500), שירותים ומפות באנגלית.",
     "⏰ למה לסיים ב-10:15: הדוכנים הכי טובים נמכרים עד ~13:00, אבל האמת היא הצפיפות — לפני 09:00 שקט, ב-11:00 כתף-אל-כתף."
    ]
   },
   {
    "id": "asakusa",
    "date": "2026-09-19",
    "city": "Tokyo",
    "area": "אסאקוסה",
    "emoji": "⛩️",
    "title": "אסאקוסה — סנסו-ג׳י והעיר התחתית של אֶדוֹ",
    "subtitle": "9 תחנות · 10:45–12:30 · הליכה שטוחה וקלה",
    "intro": "המקדש העתיק ביותר בטוקיו (נוסד 628 לספירה) והשכונה ששמרה על נשמת אֶדוֹ הישנה. שער רעם ענק, מסדרון קניות בן 300 שנה, פגודה בת חמש קומות, ומקדש שנבנה סביב פסל שנעלם. מסלול קצר ודחוס בהיסטוריה, ריח קטורת ואוכל רחוב.",
    "meta": {
     "duration": "~1 שעה 45 דק׳",
     "distance": "~1.2–1.5 ק״מ, שטוח",
     "start": "תחנת Asakusa (קו Ginza), יציאה 1 — מול שער Kaminarimon",
     "getThere": "מצוקיג׳י: קו Hibiya עד Ueno, מעבר לקו Ginza עד Asakusa (~26 דק׳)",
     "end": "גשר Azumabashi — נוף Skytree והלהבה הזהובה של אסאהי",
     "cost": "כל המסלול חינם: כניסה לסנסו-ג'י (שערים, אולם ראשי, פגודה) ולמקדש אסאקוסה + גג מרכז התרבות – ¥0. הוצאה רשות בלבד: אומיקוג'י ¥100, קטורת/קמע ~¥300–500. תחבורה מצוקיג'י במטרו ~¥210 בכרטיס Suica. אין צורך במונית.",
     "luggage": "יום סיור רגיל בטוקיו: המזוודה הראשית נעולה במלון AMANEK שינג'וקו, יוצאים עם דייפק וכרטיס Suica בלבד.",
     "meal": "מלונפאן ענק וחם מאסאקוסה קגצודו (Kagetsudo) ליד המקדש, ~¥300; או נינגיו-יאקי טרי בנקאמיסה-דורי, ~¥500 לכמה חתיכות."
    },
    "stops": [
     { "time": "10:45", "name": "מרכז מידע Asakusa (גג חינם) — לא חובה אך מומלץ להתחלה", "walk": "מול היציאה, מול Kaminarimon", "see": "תצפית גג חינמית בקומה 8 (בניין של קֶנגו קוּמָה): מצד אחד Kaminarimon ו-Nakamise, מצד שני Skytree.", "why": "התצפית המוגבהת החינמית הטובה ביותר על כל מסדרון המקדש — אידיאלית לצילום התמצאות לפני שצוללים לקהל.", "tip": "עשו זאת ראשון, ~10 דק׳: מקבלים מפת-על, שירותים ו-Wi-Fi. פתוח יומי 9:00–20:00 (תצפית עד 22:00).", "map": "35.7106,139.7963" },
     { "time": "10:55", "name": "Kaminarimon (雷門, שער הרעם)", "walk": "חציית כביש", "see": "פנס צ׳וצ׳ין אדום ענק (~3.9 מ׳, ~700 ק״ג) ופסלי אלי הרוח (Fujin) והרעם (Raijin).", "why": "השער החיצוני של סנסו-ג׳י והסמל הנצחי של אסאקוסה. הרימו מבט לבסיס הפנס — חצוב שם דרקון.", "tip": "נקודת הצילום ההמונית מספר 1 — צלמו מזווית או מהצד השני של הרחוב.", "map": "35.7111,139.7966" },
     { "time": "11:05", "name": "Nakamise-dori (仲見世通り)", "walk": "מיד אחרי השער, ~250 מ׳", "see": "~90 דוכנים: ningyo-yaki (עוגיות אדזוקי בצורות אסאקוסה), age-manju (לחמניות מטוגנות מתוקות), senbei, ומלון-פן ענק של Kagetsudo (בסמטה צדדית).", "why": "אחד מרחובות הקניות העתיקים ביפן — משנות ה-1700, כשהעניקו למקומיים זכות דוכן לאורך שביל המקדש.", "tip": "ברוב הדוכנים אסור ללכת-ואוכל — אכלו לצד הדוכן. הכול נעשה טרי מולכם; בואו מוקדם לפני שיא הצהריים.", "map": "35.7135,139.7960" },
     { "time": "11:30", "name": "Hozomon (宝蔵門, שער האוצר) + פגודה", "walk": "בסוף Nakamise", "see": "שער פנימי דו-קומתי עם סנדלי קש ענקיים (waraji, ~2.5 מ׳); משמאל פגודת חמש הקומות (53 מ׳, שנייה בגובהה ביפן).", "why": "השער שומר על המקדש ומאחסן סוטרות; הסנדלים מסמלים את כוח שומרי ה-Nio ומגרשים רוע. קצה הפגודה מכיל שרידי בודהה.", "tip": "הסתובבו ב-Hozomon לצילום ממוסגר בחזרה במורד Nakamise עד Kaminarimon.", "map": "35.7144,139.7966" },
     { "time": "11:40", "name": "אולם סנסו-ג׳י (本堂) + קטורת + omikuji", "walk": "1 דק׳", "see": "אגן קטורת ענק (jokoro) בחצר; מתקני omikuji (ניחוש מזל). כניסה חינם (מטבעות לקטורת/מזל).", "why": "נוסד 628 לספירה כשדייגים שלו פסל זהב של קאנון (אלת החמלה) מנהר סומידה. הפסל הנסתר לעולם לא מוצג. הביטו למעלה — בתקרה דרקון מצויר.", "tip": "jokoro: הניפו את העשן לעבר איבר שצריך ריפוי. omikuji: אם יצא מזל רע (בסנסו-ג׳י יש הרבה!), קפלו וקשרו למתקן — כך משאירים את הרוע במקדש.", "map": "35.7148,139.7967" },
     { "time": "12:00", "name": "מקדש Asakusa (浅草神社, 'Sanja-sama')", "walk": "מזרחית לאולם הראשי", "see": "מקדש שינטו אדום צמוד למקדש הבודהיסטי. חינם.", "why": "מוקדש לשלושת האנשים מאגדת קאנון (שני הדייגים + מי שהעריצה). מבנה אֶדוֹ מקורי (1649) ששרד את הפצצות מלה״ע — נדיר. בית פסטיבל Sanja Matsuri.", "tip": "שקט הרבה יותר מהאולם הראשי. כאן עושים את טקס השינטו: קידה-קידה, מחיאה-מחיאה, קידה.", "map": "35.7152,139.7975" },
     { "time": "12:10", "name": "Denboin-dori (伝法院通り)", "walk": "2 דק׳, חוצה את Nakamise", "see": "רחוב הולכי רגל בסגנון תקופת אֶדוֹ — חזיתות טוקיו-ישנה, פנסים, ופסלוני גנבים/נינג׳ות על הגגות.", "why": "הסמטה הכי אווירתית של 'אֶדוֹ הישנה' באסאקוסה — עוצבה בכוונה לעורר את עידן השוגון.", "tip": "אור בוקר-צהריים יפה בקצה המערבי. הרחוב מחבר אל Hoppy-dori (רחוב איזקאיות פתוחות, לחזרה בהמשך).", "map": "35.7130,139.7952" },
     { "time": "12:20", "name": "גשר Azumabashi (吾妻橋) — נקודת הסיום", "walk": "5 דק׳ מזרחה מ-Kaminarimon אל נהר סומידה", "see": "מהגשר: Tokyo Skytree (634 מ׳) ובניין אסאהי עם 'הלהבה הזהובה' (Flamme d'Or, פיליפ סטארק 1989).", "why": "הצילום האייקוני של טוקיו — ישן מול חדש. הגשר עצמו מ-1774 (הגרסה הנוכחית 1931).", "tip": "עמדו בצד הצפוני לצילום Skytree + הלהבה יחד. נקודת סיום טבעית לפני ההמשך.", "map": "35.7108,139.7986" }
    ],
    "special": [
     "🏯 גג מרכז המידע של קֶנגו קוּמָה — התצפית החינמית הכי טובה על כל מתחם המקדש. עשו אותה ראשון.",
     "🔮 טקס ה-omikuji: סנסו-ג׳י מפורסם ביחס גבוה של מזל רע — אם יצא, קשרו למתקן והשאירו את המזל מאחור.",
     "💨 עשן ה-jokoro נחשב מרפא — הניפו אותו אל הראש (חוכמה) ואל הידיים (כישרון).",
     "🍺 Hoppy-dori (רחוב Hoppy) — סמטת איזקאיות פתוחות מערבית למקדש, לחזרה מאוחרת יותר; מתעורר מהצהריים."
    ]
   },
   {
    "id": "shibuya-eve",
    "date": "2026-09-19",
    "city": "Tokyo",
    "area": "שיבויה (ערב)",
    "emoji": "🌆",
    "title": "שיבויה בין ערביים — הצומת, האורות והסמטאות",
    "subtitle": "10 תחנות · 16:45–20:00 · שקיעה 17:42",
    "intro": "לב טוקיו הצעירה כשהאורות נדלקים: הצומת העמוס בעולם, פסל האצ׳יקו הנאמן, תצפיות חינם על ה-Scramble, גג ירוק מעל העיר, וסמטאות בר זעירות מתחת למסילה. תזמנו את התצפית הכי טובה סביב 17:35–18:05 — כשהשמיים עוד צבועים והמסכים כבר בוערים.",
    "meta": {
     "duration": "~3 שעות (כולל ארוחת ערב)",
     "distance": "~2.5–3 ק״מ, שטוח, קפיצות קצרות",
     "start": "תחנת Shibuya, יציאת Hachiko",
     "getThere": "מהמלון: קו Marunouchi/JR עד Shibuya, או ישר מאסאקוסה בקו Ginza (~35 דק׳)",
     "end": "ארוחת ערב ב-Shibuya Yokocho או Nonbei Yokocho, ואז המשך ל-Ni-chome",
     "cost": "מעבר חצייה, פסל האצ'יקו, מיושיטה פארק והיוקוצ'ו – חינם; נקודת התצפית בסטארבקס טסוטאיה חינם (רק מחיר משקה); MAG8 גג בתשלום ¥1,800 לאדם כולל משקה (מזומן לא מתקבל, צילום נוסף ¥1,500). נונבֵּי יוקוצ'ו: דמי מושב/אוטושי ¥500–1,000 + שתייה ¥400–700 לכוס, בערך ¥3,000–5,000 לאדם לערב. הכול במרחק הליכה מהתחנה – אין צורך במונית.",
     "luggage": "לילה ראשון בטוקיו – המזוודה הגדולה נעולה במלון אמנק בקבוקיצ'ו (תישלח לקיוטו רק ב-21.9), יוצאים לערב עם תיק יום + כרטיס סואיקה בלבד.",
     "meal": "בשיבויה יוקוצ'ו במיושיטה פארק אפשר לטעום אוכל אזורי מכל יפן במקום אחד – יאקיטורי, גיוזה, פירות ים מהוקאידו או צלחת בשר קובה (~¥2,999); בערך ¥3,000–4,000 לאדם עם משקה."
    },
    "stops": [
     { "time": "16:45", "name": "פסל Hachiko (ハチ公像)", "walk": "מיד ביציאת Hachiko", "see": "כלב האקיטה מברונזה בכיכר Hachiko. חינם, צילום מהיר.", "why": "האצ׳יקו חיכה בתחנה כל יום לבעליו המנוח (פרופ׳ אואנו) מ-1925 עד מותו ב-1935 — ~9 שנות נאמנות שהפכו לסמל לאומי. הפסל הנוכחי יצוק מ-1948 (המקורי הותך למלחמה).", "tip": "תור קבוע לצילום — בואו עכשיו באור ולא בחשכה. הכיכר נשמרה במקום למרות שיפוץ התחנה.", "map": "35.6590,139.7005" },
     { "time": "16:55", "name": "Shibuya Scramble Crossing", "walk": "צעדים", "see": "חציית הצומת האלכסונית — עד ~3,000 איש בכל מחזור רמזור. חינם.", "why": "החצייה האלכסונית מוקפת מסכי ענק היא הדימוי המובהק של טוקיו המודרנית. השיא אחרי רדת החשכה.", "tip": "חצו פעם אחת ברמת הרחוב לחוויה, ואז צפו מלמעלה בתחנה הבאה.", "map": "35.6595,139.7005" },
     { "time": "17:05", "name": "Starbucks Tsutaya / Q-Front (קומה 2) — תצפית חינם", "walk": "מעבר לצומת", "see": "קפה (~¥500) ליד חלונות מעוגלים שמשקיפים ישר על הצומת.", "why": "תצפית הצומת המוגבהת המפורסמת בעולם, נפתחה מחדש 2024 בעיצוב 'סרט ירוק'. מול חזיתות המסכים.", "tip": "מקומות החלון נחטפים בין ערביים — הגיעו ~17:10. צלמו עדשה צמודה לזכוכית כדי למנוע השתקפות.", "map": "35.6598,139.7002" },
     { "time": "17:20", "name": "גג MAG8 (MAG's Park), MAGNET by SHIBUYA109 — תצפית בתשלום", "walk": "1 דק׳, פינת Center Gai", "see": "מרפסת גג פתוחה מעל הצומת. ~¥1,800–2,000 כולל משקה. מעלית ל-7 ואז למעלה.", "why": "הזווית הפתוחה הכי טובה ישר למטה על ה-Scramble — צילום הזרימה של האנשים והמסכים. נקודת השקיעה המומלצת אם לא הולכים ל-Shibuya Sky.", "tip": "כבר לא הגג החינמי הישן — עלות אמיתית. הגיעו ~17:15–17:20 לתפוס מעקה לפני נהירת השקיעה.", "map": "35.6601,139.6994" },
     { "time": "18:00", "name": "Center Gai (センター街)", "walk": "יורדים מהגג", "see": "רחוב הולכי הרגל הראשי — ארקיידים, סטריטוור, קרפים, ראמן, אנרגיה.", "why": "לב תרבות הנוער של שיבויה — הזוהר הניאוני שמגדיר את השכונה. שיא האנרגיה בדיוק בחלון בין הערביים.", "tip": "מצוין לצילום ניאון וקהל. מקום טוב לנשנוש קל לפני ארוחת ערב.", "map": "35.6602,139.6987" },
     { "time": "18:15", "name": "SHIBUYA109", "walk": "3 דק׳ אל מזלג Dogenzaka", "see": "מגדל האופנה הגלילי. חינם להיכנס; 10 קומות אופנת נוער.", "why": "ציון דרך מ-1979 שהשיק את תת-תרבות ה'גיאל' (gyaru) של יפן — אייקון גם אם לא קונים.", "tip": "צילום יפה מהצומת/Dogenzaka כשמואר. מבט של 5 דק׳ מספיק, ואז חזרה מזרחה אל Miyashita Park.", "map": "35.6595,139.6975" },
     { "time": "18:35", "name": "Miyashita Park (宮下公園) — גג ירוק", "walk": "8–10 דק׳ במעלה Meiji-dori", "see": "פארק גג (פתוח 8:00–23:00, חינם) מעל מתחם קמעונאות RAYARD — דשא, סקייטפארק, נוף עיר.", "why": "המצאה מחדש (2020) של פארק מוגבה ישן — פינת ירוק-ושמיים נדירה מעל צפיפות שיבויה.", "tip": "טיול רגוע ב'שעה הכחולה' וצילומי קו רקיע, ואז יורדים ישר לארוחת ערב מתחת.", "map": "35.6626,139.7017" },
     { "time": "18:50", "name": "Shibuya Yokocho (渋谷横丁) — סמטת אוכל [אופציה א׳ לערב]", "walk": "יורדים לקומת קרקע", "see": "סמטת איזקאיה מקורה (~100 מ׳) בקומת הקרקע של Miyashita Park — אוכל אזורי מכל יפן. פתוח שבת 11:00–05:00. ~¥2,000–4,000 לאדם.", "why": "חוויית 'יוקוצ׳ו' מודרנית לפי מחוזות (הוקאידו עד אוקינאווה), רועשת וידידותית לתיירים עם תפריטי תמונות.", "tip": "שולחנות משותפים, כיף ורועש. בלי הזמנה לזוג; המתנה קצרה סביב 19:00.", "map": "35.6626,139.7017" },
     { "time": "18:50", "name": "Nonbei Yokocho (のんべい横丁) — 'סמטת השיכורים' [אופציה ב׳ · פנינה]", "walk": "2 דק׳ מהצומת, ליד המסילה", "see": "שני מבואות צרים של ~40 ברים זעירים (2–6 מושבים) מתחת למסילת JR. משקה + מנות קטנות; ~¥500–1,000 דמי מקום + לפריט.", "why": "שורד רטרו מ-1952 — ההפך המוחלט משיבויה החדשה, ניצל מהריסה בזכות חוזה חכירה קולקטיבי. מקומי ואינטימי.", "tip": "בררו דמי מקום (otoshi) לפני שמתיישבים. חלק ידידותי לתיירים — חפשו תפריט אנגלי או מאסטר מסביר פנים. צילום לילה מדהים של פנסי נייר.", "map": "35.6591,139.7018" },
     { "time": "19:45", "name": "המשך ל-Ni-chome", "walk": "JR/מטרו ~10 דק׳", "see": "אחרי הארוחה, קו לשינג׳וקו-סנצ׳ומה — תחילת מסלול חיי הלילה של Ni-chome.", "why": "שבת בלילה = שיא הסצנה הגאה של טוקיו. ראו את מסלול Ni-chome הנפרד.", "tip": "אל תדחפו את הצומת ברמת הרחוב לפני 18:15 — הכי מרשים בחושך מלא.", "map": "35.6906,139.7057" }
    ],
    "special": [
     "🌇 שעת הזהב לצילום: 17:35–18:05 — המסכים כבר דולקים והשמיים עוד צבועים. הצומת ברמת הרחוב הכי טוב אחרי 18:15.",
     "🏮 Nonbei Yokocho — סמטת ברים מ-1952 מתחת למסילה, פנינה נסתרת לצילום לילה ומשקה אינטימי.",
     "💸 שימו לב: גג MAG's Park הפך לטרקלין בתשלום (MAG8, ~¥1,800–2,000 כולל משקה) — לא עוד הגג החינמי הישן.",
     "🌃 אופציונלי — Shibuya Sky (229 מ׳, כרטיס שקיעה ~¥2,500): הנוף הכי טוב בשיבויה, אבל חובה להזמין מראש סלוט ~17:00 (נחטף)."
    ]
   },
   {
    "id": "nichome",
    "date": "2026-09-19",
    "days": ["2026-09-21", "2026-10-01"],
    "city": "Tokyo",
    "area": "שינג׳וקו Ni-chome",
    "emoji": "🏳️‍🌈",
    "title": "Ni-chome — מדריך סיבוב הברים הגאה",
    "subtitle": "ריכוז הברים הגאים הגדול באסיה · ~300 ברים בחמישה בלוקים",
    "intro": "רובע הלהט״ב של שינג׳וקו — לפי הערכות ריכוז הברים הגאים הגדול בעולם. רוב הברים זעירים (6–15 מקומות), אז הכלל הוא: משקה אחד, לזוז הלאה. מתחילים בינלאומי וקליל, ומטפסים אל הריקודים והמאוחר. שני הכללים שמפעילים את כל הערב: מזומן, וזרימה בין מקומות.",
    "meta": {
     "duration": "לילה שלם, ~21:00 והלאה",
     "distance": "~5 בלוקים — הכול במרחק הליכה של דקות",
     "start": "תחנת Shinjuku-sanchome, יציאה C7/C8",
     "getThere": "מהמלון בקבוקיצ׳ו: ~10–12 דק׳ הליכה, או תחנה אחת",
     "end": "צומת Naka-dori — נקודת המפגש מתחת לשער הקשת בענן של Aiiro",
     "cost": "רוב הברים ב-2 חוֹמֵה בלי כניסה עם חובת משקה אחת ~¥700; אַיִירוֹ קפה מפורסם ב-\"בירה חופשית\" ¥1,000; ארטי פארטי ¥500 בהאפי-האוור לפני 21:00. תכננו ~¥3,500-5,000 לאדם ל-3-4 עצירות. ההליכה מקבוקיצ'ו חינם; מונית חזרה בלילה ~¥1,000-1,500.",
     "luggage": "יום רגיל בטוקיו: המזוודה הראשית נעולה במלון קבוקיצ'ו (עדיין לא נשלחה לקיוטו - זה ב-21.9), יוצאים רק עם ארנק, סוויקה ותעודה מזהה. אין צורך בתיק.",
     "meal": "קפצו לאכול לפני הזחילה: אַיִירוֹ קפה עם הבירה החופשית ¥1,000 ונשנושי אדממה/יאקיטורי, או צלחת ראמן/גיוזה מהיר בסנצ'ומה בדרך פנימה ~¥1,000-1,500 לאדם - קל על הבטן לפני לילה של שתייה."
    },
    "stops": [
     { "time": "21:00", "name": "Aiiro Cafe (アイイロカフェ) — פתיחה בינלאומית", "walk": "2 דק׳ מיציאה C8", "see": "בר-עמידה עם חזית פתוחה בפינת צומת Naka-dori, מתחת לשלט הכחול/שער הקשת. האקשן על המדרכה — קונים משקה ועומדים בחוץ.", "why": "נקודת ההתחלה וההתמצאות המושלמת — כולם עוברים כאן. מופעי דראג בסופ״ש, צוות דובר אנגלית, קהל מסביר פנים.", "tip": "היה בעבר 'Advocates' — אותו מקום, אל תחפשו שניים. מתמלא ונשפך לרחוב מ~21:00–22:00.", "map": "35.6917,139.7086" },
     { "time": "21:30", "name": "Campy! Bar (キャンピー) — דראג, כולם מוזמנים", "walk": "1 דק׳", "see": "בר דראג/קברט צבעוני. בלי דמי כניסה; משקאות מ~¥800.", "why": "מנוהל בידי מלכת הדראג Bourbonne (מ-2013). ידידותי במיוחד לכל המגדרים והנטיות, צוות ראוותני, אנרגיה קלה לחימום מוקדם.", "tip": "מזומן. קטן ותוסס — צפו לעמוד/לחלוק. פתוח גם בימי חול.", "map": "35.6916,139.7088" },
     { "time": "22:00", "name": "Eagle Tokyo / Eagle Tokyo Blue — ברי דובים", "walk": "2 דק׳", "see": "שני מקומות סמוכים: Eagle (טרקלין לבנים בסגנון ברוקלין) ו-Eagle Blue (נושא כחול-אוקיינוס, במה למופעי דראג, גו-גו, DJ וקריוקי). בלי כניסה, מינימום משקה אחד.", "why": "ברי הדובים הבינלאומיים הידועים ביותר; מקבלים תיירים באנגלית. חלק מקבוצת הברים הגאים הגדולה ביפן.", "tip": "מזומן. Blue יותר מסיבה/מופע; Eagle המקורי יותר טרקלין ושיחה. Blue נפתח מאוחר יותר (~18:00–21:00).", "map": "35.6919,139.7083" },
     { "time": "22:45", "name": "GB — בר קרוזינג קלאסי לגברים בלבד", "walk": "2 דק׳", "see": "בר וידאו/עמידה, גברים בלבד, במרתף.", "why": "הבר הראשון ב-Ni-chome שקיבל זרים. קהל של אנשי מקצוע, אמנים ו-gaisen, שנות ה-20–40. קרוזי וצפוף בסופ״ש.", "tip": "אנגלית בסדר, מזומן. זהו בר היכרויות, לא מופע. מתמלא מאוחר בשבת.", "map": "35.6915,139.7089" },
     { "time": "23:30", "name": "Dragon Men (ドラゴンメン) — טרקלין/מועדון מעוצב", "walk": "1 דק׳", "see": "לאונג׳-בר מעוצב, מעורב, ידידותי לזרים, עם רקדני גו-גו ו-DJ מאוחר. חזית פתוחה.", "why": "גדול ומלוטש יותר מהברים הזעירים — נוח למשקה וריקוד. פופולרי אצל תיירים ומקומיים.", "tip": "אנגלית בסדר, מזומן. לכו אחרי חצות כשמתמלא. סגנון משקה-אחד.", "map": "35.6917,139.7085" },
     { "time": "00:15", "name": "Arty Farty (+ Annex) — רחבת ריקודים", "walk": "1 דק׳", "see": "מועדון/בר ריקודים אהוב על זרים — שני מקומות מחוברים (בר + רחבה). בלי כניסה, מינימום משקה (~¥500–700). Happy hour לפני 21:00 = ¥500.", "why": "עוגן הריקודים האמין — צעיר, בינלאומי, מעורב וקל למתחילים. המשקה נותן חותמת למעבר חינם בין שני המקומות.", "tip": "אנגלית בסדר, מזומן. מתמלא אחרי ~22:30 בשבת.", "map": "35.6914,139.7088" },
     { "time": "01:00", "name": "AiSOTOPE Lounge — מועדון גדול לפינאלה (אופציונלי)", "walk": "2 דק׳", "see": "מקום המסיבות הגדול ב-Ni-chome — שתי קומות, מסיבה תמטית שונה כל לילה, מופעי דראג ואירועים.", "why": "אם רוצים רחבת ריקודים אמיתית לסיום ולא ברים זעירים. פתוח ~21:00–05:00.", "tip": "בדקו איזה אירוע הלילה (משתנה; חלק תמטי/לנשים בלבד). מזומן לכניסה.", "map": "35.6910,139.7080" }
    ],
    "special": [
     "💴 מזומן מלך — הניחו שרוב הברים לא מקבלים כרטיס. הביאו הרבה שטרות של ¥1,000. יש כספומט 7-Eleven ביציאה C7/C8.",
     "🍶 דמי מקום (otoshi/charge, ¥500–1,500) הם נורמה בברים הקטנים — לרוב כולל משקה ראשון. שלמו בחיוך, זה המנהג.",
     "🚶 האטיקט: משקה אחד ולזוז — הברים הזעירים חיים על תחלופה. ככה גם טועמים הרבה מקומות בלילה.",
     "📅 לליל שני (21.9, אחרי החג — שקט יותר): Bar Gold Finger (happy hour 17:00–19:00, 2 משקאות ¥1,000) → Campy! → פינת Aiiro → Eagle. ⚠️ שימו לב: Gold Finger הוא לנשים-בלבד בשבתות — דלגו עליו ב-19.9, מושלם ב-21.9."
    ]
   },
   {
    "id": "nakano",
    "date": "2026-09-20",
    "city": "Tokyo",
    "area": "Nakano Broadway",
    "emoji": "🕹️",
    "title": "Nakano Broadway — מכרה האספנים קומה-קומה",
    "subtitle": "אסטרטגיית 'מעלית ל-4, יורדים למטה' · 12:00–14:00",
    "intro": "קניון האוטאקו הרטרו האגדי — נפתח 1966, והפך למכה אחרי ש-Mandarake פתחה כאן ב-1980. היום ~32 חנויות Mandarake מתמחות תחת גג אחד: מנגה, פיגורות, סלים, כרטיסים, קוספליי, צעצועי וינטג׳. פחות תיירי ובמחירים הוגנים מאקיהברה. הביקור הוא אנכי — הקומות הן ההליכה.",
    "meta": {
     "duration": "~2 שעות (אספנים רציניים: 3–4)",
     "distance": "אנכי — מעלית וקומות, לא מרחק",
     "start": "תחנת Nakano (JR Chuo), יציאה צפונית → דרך ארקייד Sun Mall",
     "getThere": "משינג׳וקו: JR Chuo (מהיר) עד Nakano, ~5 דק׳ (התחנה הראשונה)",
     "end": "מרתף B1 — סופט-סרב Daily Chico, ואז חזרה דרך Sun Mall",
     "cost": "כניסה חינם לנקאנו ברודוויי (חנויות בלבד). נסיעה מ-JR צ'ואו רפיד משינג'וקו ~¥170 בסויקה, ~5 דק'. תקציב קניות/אספנות לפי הרצון; גלידת 8 השכבות של Daily Chico ~¥1,000. בלי צורך במונית.",
     "luggage": "יום סיור רגיל בטוקיו: המזוודה נעולה במלון (HOTEL AMANEK קבוקיצ'ו), יוצאים עם דייפאק וכרטיס סויקה בלבד.",
     "meal": "גלידת הרך המפורסמת של Daily Chico ב-B1 — מגדל 8 הטעמים (Tokudai) בגובה ~40 ס\"מ, ~¥1,000. אין מקום טוב יותר לסגור בו את הסיבוב."
    },
    "stops": [
     { "time": "11:55", "name": "Nakano Sun Mall (ארקייד) — הגישה", "walk": "מול היציאה הצפונית, ~225 מ׳ ישר", "see": "ארקייד קניות מקורה עם 100+ חנויות — ראמן, טאקויאקי, סושי, בתי קפה, דראגסטורים.", "why": "רחוב קמעונאות מקומי, יומיומי ותוסס — ניגוד מכוון למבוך האוצרות שבסופו. Sun Mall ו-Broadway מחוברים פיזית.", "tip": "אכלו כאן צהריים קל בדרך פנימה (לפני 12:00), כדי שחלון 12:00–14:00 יהיה קניות טהורות.", "map": "35.7065,139.6657" },
     { "time": "12:00", "name": "קומה 4 — 'מסע אל העבר' (הכי נדיר, הכי ריק)", "walk": "מעלית ישר ל-4", "see": "Mandarake Henya (צעצועי פח מלפני המלחמה, כניסת טוריאי אדומה), Anime-kan (סלים/genga מקוריים), Mania-kan (מנגה נדירה, מהדורות טזוקה), Plastic (בובות וינטג׳).", "why": "קומת האספן העמוק. מוזיאונית — הכול בוויטרינות. מתחילים כאן כי הקומות העליונות שקטות בפתיחה, ומנצחים את הקהל אל המלאי הנדיר.", "tip": "'Cosmos' — לא אומת שם קיים ב-2026; תפקיד הפיגורות הנדירות מכוסה ב-Henya וב-Special. חפשו לפי תפקיד, לא לפי שם.", "map": "35.7076,139.6657" },
     { "time": "12:35", "name": "קומה 3 — 'מטה' (HQ מנגה + שמות גדולים)", "walk": "מדרגות למטה", "see": "Mandarake Honten (מנגה הדגל), Special 2/3 (Kamen Rider, Macross, Evangelion, Gundam, דגמי פלסטיק), Infinity (מרצ׳ איידול J/K-pop), ו-TACO ché בפינה האחורית (ספרי אמנות אינדי, זינים).", "why": "קומת המנגה והשמות הגדולים. TACO ché הוא הפוך לגמרי מ-Mandarake המרכזי — אמנותי, קאלט, קל לפספס בפינה.", "tip": "אל תפספסו את הפינה האחורית — שם TACO ché מסתתר.", "map": "35.7076,139.6657" },
     { "time": "13:05", "name": "קומה 2 — 'גן עדן Mandarake' (ליבת הפיגורות)", "walk": "מדרגות למטה", "see": "Special / New Special (sofubi קאיג׳ו, chogokin, Ultraman, Transformers, garage kits), Galaxy (משחקי רטרו וקונסולות), Card (Pokémon), Cosplay, Micro-kan (מחקים כמו kinkeshi ודגמי אוכל).", "why": "הריכוז הגבוה ביותר של חנויות Mandarake — שדה הציד המרכזי לפיגורות, משחקים ואיידול. פה נדיר-הוינטג׳ פוגש את המודרני.", "tip": "הקדישו כאן את רוב זמן הדפדוף. השוו מחירי פיגורות בין Special ל-Galaxy. מזומן.", "map": "35.7076,139.6657" },
     { "time": "13:45", "name": "קומה 1 — קרקע (וינטג׳ יוקרה)", "walk": "מדרגות למטה", "see": "מכירה חוזרת של שעוני יוקרה ותכשיטים (Jack Road / Betty Road), דלפקי מצלמות משומשות, וכניסות/ויטרינות.", "why": "נאקאנו הוא מוקד שוק-משני אמיתי לשעוני יוקרה — שווה מבט גם ללא-קונים.", "tip": "מעבר מהיר בדרך למטה — 5 דק׳ מספיקות.", "map": "35.7076,139.6657" },
     { "time": "13:55", "name": "מרתף B1 — Daily Chico (デイリーチコ)", "walk": "מדרגות למרתף", "see": "מגדל סופט-סרב 8 טעמים (~35–40 ס״מ). מ~¥400 (קטן) עד ~¥1,000 (הענק 'Tokudai'). טעמים מתחלפים.", "why": "הפינה האייקונית של Nakano Broadway — חובה. גם מרכולית מקומית וארוחות זולות במרתף.", "tip": "אכלו מיד — נמס מהר. סיום מושלם, ואז יוצאים דרך Sun Mall.", "map": "35.7076,139.6657" }
    ],
    "special": [
     "🍦 Daily Chico (B1) — מגדל 8 הטעמים, זול ואייקוני. הפינצ׳ר לצילום ולסיום.",
     "📚 TACO ché (קומה 3, פינה אחורית) — ספרי אמנות ואינדי/דוג׳ינשי, טעם אחר לגמרי מ-Mandarake. קל לפספס.",
     "🤖 Henya (קומה 4) ו-Special (קומות 2–3) לפיגורות sofubi/קאיג׳ו/Transformers; Robot Robot לצעצועי וינטג׳.",
     "💴 מזומן — הרבה חנויות זעירות מעדיפות מזומן. Mandarake מקבל כרטיס, אבל מוכרי sofubi בודדים לא."
    ]
   },
   {
    "id": "akihabara",
    "date": "2026-09-20",
    "city": "Tokyo",
    "area": "אקיהברה",
    "emoji": "🎮",
    "title": "אקיהברה — בירת האוטאקו, לולאת הליכה מלאה",
    "subtitle": "11 תחנות · 15:30–18:45 יום + ארקיידים עד 22:30",
    "intro": "'שדה עלי הסתיו' שהפך מרובע חשמל אחר-מלחמה למרכז תרבות האוטאקו של העולם. מגה-חנויות פיגורות בקומות, מקדש רטרו-גיים, קירות גאצ׳פון, ארקיידים בוערים ומקדש שינטו שמברך שרתים. הלולאה עולה צפונה ב-Chuo-dori, סוטה במעלה אל מקדש Kanda Myojin, וחוזרת דרומה לארוחה וארקיידים. שימו לב לסגירות מוקדמות ביום ראשון.",
    "meta": {
     "duration": "~3 שעות יום + ערב",
     "distance": "~2.5–3.5 ק״מ, שטוח (חוץ מגבעת המקדש)",
     "start": "תחנת Akihabara, יציאת Electric Town (電気街口, JR)",
     "getThere": "מנאקאנו: JR Chuo-Sobu (רכבות צהובות) ישיר, ~21–26 דק׳, בלי מעבר",
     "end": "ארקיידים ליד התחנה (Taito עד 23:30) + Yodobashi (עד 22:00)",
     "cost": "כמעט הכל כניסה חופשית (Radio Kaikan, Mandarake, Super Potato, Gachapon Kaikan, ארקייד): משלמים רק על גצ'אפון ~¥300-500 לסיבוב ומשחקי ארקייד ~¥100 למשחק. מייד קפה @home ב-Donki ¥1,500 (משקה+פולארויד) או כניסה ~¥770+משקה; Cure Maid Cafe בלי דמי שולחן (אוכל מ-¥1,000, שתייה מ-¥600). Kanda Myojin חינם. הגעה מנקאנו ב-JR Chuo-Sobu ~¥170 בסוויקה, בלי צורך במונית. תקציב ריאלי לזוג: ¥6,000-10,000 כולל אוכל וקצת קניות.",
     "luggage": "יום סיור רגיל מטוקיו: המזוודה הראשית נעולה במלון AMANEK Kabukicho, יוצאים עם דייפאק וכרטיס Suica בלבד (המזוודה נשלחת לקיוטו רק ב-21.9).",
     "meal": "קפה מייד קלאסי ב-@home cafe בבניין ה-Donki: ¥1,500 לאדם למשקה + פולארויד עם מיידית — חוויה אקיהברה טהורה. לרעבים אמיתיים, קארי או אומרייס מצויר שם ~¥1,200-1,800. אלטרנטיבה שקטה: Cure Maid Cafe עם עוגה+תה ~¥1,600 לאדם."
    },
    "stops": [
     { "time": "15:30", "name": "Radio Kaikan — מגדל תחביבים 10 קומות", "walk": "1 דק׳ מיציאת Electric Town", "see": "~30 חנויות מתמחות: Kotobukiya (פיגורות), Volks (בובות, ק7), K-Books, Kaiyodo, כרטיסים, gunpla. פתוח ~10:00–20:00.", "why": "נקרא על שם שורשי שוק חלקי-הרדיו של אקיבה — הבניין ממחיש את האבולוציה מבזאר חשמל למכת אוטאקו.", "tip": "מעלית לקומה העליונה ויורדים. חנות הגאשפון הרשמית של Bandai צמודה בקומת הרחוב.", "map": "35.6985,139.7716" },
     { "time": "16:00", "name": "Cure Maid Café — בית קפה המשרתות הראשון (האלגנטי)", "walk": "2 דק׳, בניין Onoden ק6", "see": "תה ועוגה באווירת סלון ויקטוריאני שקט. פתוח 11:00–20:00.", "why": "נפתח 2001 — הראשון ביפן, ערש כל התופעה. בניגוד לבתי הקפה הרועשים: בלי הגבלת זמן, בלי טקסי עידוד. רגוע וזוגי.", "tip": "⚠️ סוגר ב-20:00 — תחנת יום, לא ערב. צילום משרתות בדרך כלל אסור (שאלו).", "map": "35.6991,139.7724" },
     { "time": "16:45", "name": "@home café (בניין Don Quijote) — בית קפה המשרתות ה'מואה'", "walk": "4 דק׳ במעלה Chuo-dori", "see": "החוויה המלאה: 'okaerinasaimase goshujin-sama', אומורייס עם ציור קטשופ, שירי 'moe moe kyun'. ~¥1,500–3,000 לאדם לשעה. למעלה (ק8): תיאטרון AKB48 (נפתח מחדש דצמבר 2024).", "why": "בית קפה המשרתות המפורסם והידידותי לזרים ביותר, בתוך Don Quijote — עומס-יתר חושי אקיבאי מובהק.", "tip": "מזומן. צילום משרתות אסור (יש פולארויד בתשלום). Donki פתוח מאוחר לסיבוב מזכרות פטור-ממס.", "map": "35.7001,139.7715" },
     { "time": "17:00", "name": "Mandarake Complex — קתדרלת יד-שנייה, 8 קומות", "walk": "3 דק׳ צפונה", "see": "8 קומות תמטיות — מנגה וינטג׳, סלים, צעצועי רטרו, דוג׳ינשי, ופיגורות אספנות בקומות העליונות. פתוח 12:00–20:00.", "why": "רשת יד-שנייה הגדולה ביפן; הדגל של אקיבה הוא עלייה-לרגל של אספנים — סלים נדירים, מנגה אזלת, פיגורות וינטג׳ יקרות.", "tip": "מזומן מזרז. מעלית למעלה, לדפדף למטה. השוו מחירי פיגורות מול Surugaya.", "map": "35.7016,139.7714" },
     { "time": "17:35", "name": "Kanda Myojin — מקדש הברכה הטכנולוגי/אנימה (פנינה, במעלה)", "walk": "5–7 דק׳ במעלה צפון-מערבה", "see": "מקדש שינטו בן 1,300 שנה. קמע ההגנה המפורסם ל-IT/סייבר (בצורת מעבד). מדפי ema של Love Live!.", "why": "מקדש-החסות של עסקי הטק והאוהדים של אקיבה — חברות IT מברכות כאן שרתים חדשים. אתר עלייה-לרגל של אנימה (Love Live!).", "tip": "חינם להיכנס; קמעות ~¥500–1,000, מזומן. בואו מוקדם יותר בחלון — דלפק הקמעות נסגר אחה״צ. הסטייה הקצרה שווה מאוד.", "map": "35.7018,139.7676" },
     { "time": "18:05", "name": "Gachapon Kaikan — 500 מכונות קפסולה, קיר-אל-קיר", "walk": "8 דק׳ במורד חזרה + מזרחה", "see": "~500 מכונות מהרצפה לתקרה. ¥300–500 לקפסולה. ⚠️ ביום ראשון סוגר 19:00!", "why": "נפתח 2002 — מוסד אהוב וכאוטי של שיגעון הגאצ׳פון. ביטוי ל-ichi-go ichi-e: לא יודעים מה יצא, ורגע ההפתעה חד-פעמי.", "tip": "מזומן ומטבעות בלבד (יש מכונת עודף). זו ה'חובה-לפני-שנסגר-ב-19:00' שלכם.", "map": "35.7009,139.7719" },
     { "time": "18:30", "name": "Super Potato — מקדש הרטרו-גיים (האגדי)", "walk": "5 דק׳ מערבה", "see": "ק3 = 'היכל התהילה' (Famicom, Super Famicom, PC Engine, Sega); ק4 = פריטים בקופסה; ק5 = ארקייד רטרו + סוכריות. פתוח 11:00–20:00.", "why": "חנות הרטרו-גיים המפורסמת בעולם — מקדש נוסטלגי; הארקייד בק5 הוא אתר עלייה-לרגל.", "tip": "מזומן מועדף בחום. תעדפו ק3 ואז ארקייד ק5. המחירים אספניים — זה חצי מוזיאון.", "map": "35.6992,139.7719" },
     { "time": "19:00", "name": "ארוחת ערב באקיהברה", "walk": "5 דק׳ לכיוון התחנה", "see": "קארי יפני קלאסי, ראמן (Kikanbo מיסו חריף), או מסעדות בקומה 8 של Yodobashi.", "why": "אחרי שהחנויות נסגרות ב-20:00 — ארוחה לפני סבב הארקיידים.", "tip": "אם רוצים בית קפה תמטי לערב — להזמין מראש.", "map": "35.6985,139.7745" },
     { "time": "20:00", "name": "Taito Station — מגדל ארקייד", "walk": "לצד התחנה", "see": "קומות של UFO catchers (מכונות טופר), משחקי קצב (taiko/maimai/Chunithm), פורי-קורה (מדבקות צילום), וקבינטים רטרו. פתוח עד 23:30.", "why": "הארקיידים ביפן חיים ובועטים בניגוד למערב — מכונות טופר ומשחקי קצב הם תחביב לאומי. חוויה זוגית מושלמת: טופר משותף, קרב קצב, פורי-קורה.", "tip": "טופר וקבינטים ישנים = מטבעות (הביאו ¥100). בקשו מהצוות עזרה במיקום הפרס ('assist' זה נורמלי).", "map": "35.6994,139.7715" },
     { "time": "21:00", "name": "GiGO / Silk Hat / Animate — עוד ארקייד וסחורה", "walk": "דקות ליד Chuo-dori", "see": "ארקיידים פעילים (GiGO ק3/ק5, ו-'Silk Hat' בבניין האדום לשעבר). Animate (נפתח מחדש אוג׳ 2026) לסחורת אנימה.", "why": "סיבוב אחרון בקומות המשחקים המוארות. הבניין האדום המיתולוגי של SEGA הפך ל-Silk Hat — הארקיידים חיים, רק במיתוג חדש.", "tip": "פורי-קורה לפעמים מגביל גברים לבד — כזוג אתם בסדר. Yodobashi פתוח עד 22:00 לרכישה אחרונה פטורת-מס.", "map": "35.6996,139.7719" }
    ],
    "special": [
     "⛩️ Kanda Myojin — קמע ההגנה ל-IT בצורת מעבד: המזכרת המושלמת של אקיבה. שינטו פוגש סיליקון, ומקדש עלייה-לרגל של Love Live!.",
     "🕹️ Super Potato ק5 — ארקייד רטרו משחק, מקדש נוסטלגיה אמיתי לחובבי גיימינג.",
     "⚠️ סגירות יום ראשון: Gachapon Kaikan נסגר 19:00 ו-Cure Maid Café ב-20:00 — עשו אותם לפני, ארקיידים אחרי.",
     "❌ לא קיימים יותר: Gundam Café (נסגר 2022, כיום Tamashii Nations) ו-Toranoana. GiGO האדום = כיום 'Silk Hat'; Beep עבר ל-SEEKBASE מתחת למסילה.",
     "💴 מזומן ומטבעות ל-UFO catchers, גאצ׳פון וחנויות ישנות. דלפקי פטור-ממס ב-Yodobashi/Donki/Animate מעל ¥5,000 — הביאו דרכון."
    ]
   },
   {
    "id": "harajuku-shibuya",
    "date": "2026-09-21",
    "city": "Tokyo",
    "area": "ראמן, הראג׳וקו ושיבויה",
    "emoji": "🍜",
    "title": "סדנת ראמן ✓, מייג׳י ג׳ינגו והראג׳וקו עד שיבויה",
    "subtitle": "✓ סדנת ראמן 09:00–13:00, ואז הליכה רציפה עד שיבויה",
    "intro": "הבוקר שמור לסדנת הראמן שהזמנתם — Baba Ramen Cooking School במינאמי-אאויאמה, 09:00–13:00, 4 שעות ידיים בבצק, ואת הראמן שתכינו אתם גם אוכלים (זו ארוחת הצהריים). בית הספר צמוד לאומוטסאנדו, אז אחה״צ זורם ישר להליכה: אומוטסאנדו → הראג׳וקו → מייג׳י ג׳ינגו → Cat Street → שיבויה. ⚠️ בגלל הסדנה, מייג׳י ג׳ינגו עובר לאחר הצהריים — 21.9 חג (שבוע הכסף) וצפוף בצהריים, אבל היער הענק בולע את הקהל; פשוט זרמו.",
    "meta": {
     "duration": "~9 שעות (סדנה 4ש' + הליכה)",
     "distance": "~2.5–3 ק״מ ברגל אחה״צ (רציף)",
     "start": "✓ Baba Ramen Cooking School · Minami-Aoyama 3-2-7 (ליד תחנת Omotesando)",
     "getThere": "מהמלון בקבוקיצ׳ו: JR Yamanote עד Harajuku + ~12 דק׳ הליכה, או מטרו עד Omotesando (יציאות A4/A5, ~5 דק׳). הגיעו ~08:45 לסדנת 09:00.",
     "end": "Miyashita Park / שיבויה — קניות וארוחת ערב, ואז Ni-chome",
     "cost": "✓ סדנת ראמן ¥46,000 לזוג (שולם · הזמנה 14166 · הראמן = צהריים) · מייג'י ג'ינגו חינם · Gyoen ¥500 · Nezu אופציונלי ~¥1,400 · תחבורה IC ~¥170",
     "luggage": "בוקר אחרון בטוקיו — לפני הסדנה (~08:00) השאירו את המזוודה הראשית בקבלת AMANEK למשלוח takkyubin לקנדאו קיוטו (מגיעה לפני צ׳ק-אין 25.9). מטיילים כל היום עם דייפק בלבד.",
     "meal": "הראמן שתכינו בסדנה הוא ארוחת הצהריים (~13:00, כלול ב-¥46,000). נשנוש קרפ קליל ב-Takeshita אם בא לכם (~¥600), וארוחת ערב בשיבויה (~¥2,500–4,000 לאדם)."
    },
    "stops": [
     { "time": "09:00", "name": "✓ סדנת ראמן — Baba Ramen Cooking School (馬場)", "walk": "Minami-Aoyama 3-2-7 · ~5 דק׳ מתחנת Omotesando", "see": "סדנת ראמן ידנית בת 4 שעות עם שפים — נודלס, מרק ותוספות, ואוכלים את הקערה שהכנתם. ¥46,000 לזוג (2), הזמנה 14166. זו גם ארוחת הצהריים.", "why": "לא רק לאכול ראמן — להבין אותו: את הקמאאגֶה, את הטארֶה, את שכבת השומן. חוויה אנימית-קולינרית מושלמת לזוג.", "tip": "בואו רעבים ובזמן (~08:45). סינרים מסופקים. אחרי הסדנה אתם כבר באומוטסאנדו — ההליכה מתחילה מכאן.", "map": "35.6668,139.7150" },
     { "time": "13:15", "name": "Omotesando (表参道) — השדרה המעוצבת", "walk": "צמוד לבית הספר", "see": "שדרת עצי זלקובה — 'השאנז-אליזה של טוקיו'. אדריכלות דגל: Omotesando Hills (טאדאו אנדו), Dior (SANAA), Tod's (טויו איטו), ובאאויאמה Prada ו-Miu Miu (הרצוג ודה מרון). מגדל Grid החדש (2026).", "why": "אחד הריכוזים הצפופים בעולם של חנויות דגל בעיצוב זוכי פריצקר, לאורך שדרה אחת — ואתם יוצאים אליו ישר מהסדנה.", "tip": "הסדנה במינאמי-אאויאמה, אז Prada/Miu Miu ממש קרוב — התחילו בהם ואז עלו את השדרה צפונה.", "map": "35.6668,139.7107" },
     { "time": "13:35", "name": "(אופציה) מוזיאון Nezu (根津美術館)", "walk": "5 דק׳ מהסדנה/אומוטסאנדו", "see": "אמנות יפנית ומזרח-אסייתית בבניין של קֶנגו קוּמָה + גן מסורתי שליו ובית קפה. ~¥1,300–1,400.", "why": "בית למסך 'האיריסים' של אוגטה קורין (אוצר לאומי, מוצג עונתית) וגן שמרגיש מיליון מייל מהעיר — הפוגה שקטה אחרי הסדנה.", "tip": "פתוח ב-21.9 (כלל חג-שני; סגור במקום ב-שלישי). דלגו אם מעדיפים יותר זמן להראג׳וקו.", "map": "35.6626,139.7169" },
     { "time": "14:05", "name": "Takeshita-dori (竹下通り) — רחוב הקוואאי", "walk": "~12 דק׳ צפונה במעלה אומוטסאנדו", "see": "~400 מ׳ של אופנת קוואאי/לוליטה, thrift, Daiso, פורי-קורה; קרפים ב-Marion (הקרפרי הראשון ביפן, 1976) ו-Angel's Heart; צמר-גפן מתוק בקשת בענן ב-Totti Candy Factory.", "why": "ערש תרבות הקוואאי והלוליטה של טוקיו — מרקדני הרחוב של שנות ה-70 ועד גלי הגותיק-לוליטה והדקורה שהפכו את 'הראג׳וקו' למילה עולמית.", "tip": "היכנסו מצד JR Harajuku. בחג צפוף — אבל אתם רק עוברים לכיוון המקדש. נשנוש קרפ קליל בדרך.", "map": "35.6716,139.7050" },
     { "time": "14:30", "name": "Meiji Jingu (明治神宮) — היער הקדוש", "walk": "5 דק׳ מ-Takeshita אל שער הטוריאי", "see": "הטוריאי הגדול (ברוש בן ~1,500 שנה); יער של ~100,000 עצים שנתרמו ונשתלו ביד מ-1920; קיר חביות הסאקה מול חביות היין הצרפתי; Temizuya, האולם הראשי, ולוחיות ema. חינם. גן פנימי (Gyoen) ¥500 אופציונלי.", "why": "יער קדוש מהמאה ה-20 שתוכנן להיראות עתיק — מקדש לקיסר מייג׳י (שהוביל את יפן לעידן המודרני) ולקיסרית שוקן. המקדש הכי מבוקר ביפן בראש השנה.", "tip": "אחה״צ בחג צפוף יותר, אבל 70 הקטאר של היער בולעים את הקהל. Temizuya: שמאל, ימין, פה, ידית. במקדש: קידה-קידה, מחיאה-מחיאה, קידה.", "map": "35.6764,139.6993" },
     { "time": "15:45", "name": "Cat Street / Ura-Harajuku (キャットストリート)", "walk": "מ-Harajuku דרומה, חוצים Meiji-dori", "see": "סמטה מפותלת מעל נהר שיבויה הישן (מקורה) — סטריטוור, סניקרס, וינטג׳, בתי קפה אינדי ועיצוב.", "why": "ערש הסטריטוור היפני (סצנת Ura-Hara / BAPE של שנות ה-90). הקיצור המקומי ברגל מהראג׳וקו לשיבויה (~10–15 דק׳), שקט וקריר מהרחובות הראשיים.", "tip": "מוביל אתכם ישר אל שיבויה/Miyashita Park. אור אחה״צ הכי יפה לצילום.", "map": "35.6660,139.7040" },
     { "time": "16:30", "name": "שיבויה — Miyashita Park וסביבתה", "walk": "בקצה Cat Street", "see": "RAYARD Miyashita Park — פארק גג (דשא, סקייט, טיפוס), ~90 חנויות (LV לגברים, Gucci, Balenciaga), ובקומת קרקע Shibuya Yokocho. חנויות 11:00–21:00.", "why": "סמל להתחדשות שיבויה — פארק מעל קניות מעל חיי לילה. חלון אחה״צ מושלם לרגיעה: נוף מהגג, קניות, וארוחת ערב מוקדמת לפני Ni-chome.", "tip": "סיימו כאן לאוכל וקניות כשהקהל והניאון מתעצמים. הצומת Scramble ~5–8 דק׳ דרומה אם רוצים אותו בין ערביים.", "map": "35.6626,139.7017" }
    ],
    "special": [
     "🍜 סדנת הראמן (✓ נסגר, ¥46,000, הזמנה 14166) היא העוגן של היום — 09:00–13:00, והראמן שתכינו הוא ארוחת הצהריים.",
     "🍶 קיר חביות הסאקה מול חביות היין הצרפתי במייג׳י ג׳ינגו — סמל לפתיחת יפן למערב בימי הקיסר מייג׳י.",
     "🐈 Cat Street — הקיצור המקומי ברגל בין הראג׳וקו לשיבויה, שקט וקריר, ערש הסטריטוור היפני.",
     "🏛️ סיור אדריכלות באומוטסאנדו: אנדו, SANAA, טויו איטו, והרצוג ודה מרון (Prada/Miu Miu באאויאמה — ממש ליד הסדנה).",
     "🎌 21.9 = יום כבוד הזקנה, בתוך שבוע הכסף — מייג׳י ג׳ינגו עכשיו אחה״צ (צפוף אך היער בולע), פשוט זרמו."
    ]
   },
   {
    "id": "hakone",
    "date": "2026-09-22",
    "city": "Hakone",
    "area": "האקונה",
    "emoji": "♨️",
    "title": "האקונה — לולאת ההר, אגם Ashi, מקדש ו-Tenzan Onsen",
    "subtitle": "רכבת הרים · געש · שיט · מקדש · אונסן וריוקאן · 10:15–20:00+",
    "intro": "יום מעגלי קלאסי של האקונה, כולו על ה-Hakone Free Pass: רכבת הרים וכבלית ורכבל אל עמק הגעש Owakudani, שיט 'ספינת פיראטים' על אגם Ashi, מקדש Hakone עם הטוריאי האדום על המים, וסיום מושלם ב-Tenzan Onsen — רוֹטֶנבּוּרוֹ בתוך הצמחייה וההרים. אחר כך צ׳ק-אין ב-Yaeikan (2 דק׳ מהתחנה), קייסקי ואונסן פרטי. ⚠️ 22.9 חג (שבוע הכסף) — קהל שיא ועיכובי אוטובוס אחה״צ; הקדימו את הרכבל בבוקר (סוגר ~17:00).",
    "meta": {
     "duration": "יום מלא (~10:15–20:00+)",
     "distance": "לולאה במעגל: רכבת+כבלית+רכבל+שיט+אוטובוס (הכול ב-Free Pass)",
     "start": "תחנת Hakone-Yumoto — הרומנסקאר מגיע 10:15; מניחים תיק-לילה ב-Yaeikan (2 דק׳ הליכה)",
     "getThere": "רומנסקאר 9:00→10:15 (✓ נסגר, מושב 6D, +¥1,200 מעל הפס). Hakone Free Pass (יומיים, ¥7,100) מכסה רכבת/כבלית/רכבל/שיט/אוטובוס",
     "end": "צ׳ק-אין ב-Yaeikan לפני 19:00 → קייסקי → אונסן פרטי (kashikiri)",
     "cost": "Free Pass ¥7,100 (יומיים, כבר מכסה את הלולאה) · Tenzan Onsen ¥1,450 לאדם (מזומן, לא בפס) · ביצה שחורה ¥500/5 · צהריים ~¥1,200 · מונית Tenzan→Yaeikan ~¥1,000–1,500",
     "luggage": "המזוודה הראשית כבר בדרך לקיוטו (נשלחה 21.9) — יוצאים עם תיק-לילה בלבד. מניחים אותו ב-Yaeikan עם ההגעה (2 דק׳ מהתחנה) ומטיילים עם תיק-גב קטן.",
     "meal": "צהריים: 'קארי געש' ב-Owakudani Kitchen (ק2 בתחנת הרכבל, ~09:00–16:30, ~¥1,200) + ביצה שחורה. ערב: קייסקי עונתי ב-Yaeikan (כלול, ~18:00)."
    },
    "stops": [
     { "time": "10:15", "name": "הגעה ל-Hakone-Yumoto + הנחת תיק ב-Yaeikan", "walk": "Yaeikan ~2 דק׳ הליכה מהתחנה", "see": "יורדים מהרומנסקאר, משאירים את תיק-הלילה ב-Yaeikan (אין טעם להסתובב איתו כל היום) ויוצאים ללולאה עם תיק-גב.", "why": "Yaeikan צמוד לתחנה — פינוק קטן שחוסך גרירת תיק בכל הרכבות והרכבלים.", "tip": "אשרו בקבלה שעה ל-private onsen (kashikiri) כבר עכשיו, וש-check-in יהיה זמין אחה״צ.", "map": "35.2325,139.1050" },
     { "time": "10:30", "name": "רכבת Tozan → Gora → כבלית → רכבל ל-Owakudani", "walk": "3 מעברים בתחנות (Gora, Sounzan)", "see": "רכבת הרים עם 3 סוויצ׳בקים ל-Gora (~40 דק׳), כבלית ל-Sounzan (~10 דק׳), ורכבל אווירי מעל עמק הגעש ל-Owakudani (~8 דק׳). הכול ב-Free Pass.", "why": "החלק היפה של המעבר — נופי עמק וגופרית מהאוויר. הרכבל פועל בספטמבר ~09:00–17:00, לכן עושים בבוקר.", "tip": "שבו בצד ימין ברכבת לנוף. בדקו בבוקר סטטוס רכבל (רוח/גז געשי) באתר HakoneNavi.", "map": "35.2470,139.0490" },
     { "time": "11:45", "name": "Owakudani (大涌谷) — עמק הגעש הפעיל", "walk": "בתחנת הרכבל", "see": "עמק געשי מעשן ומגופרת, תצפיות, וביום בהיר — פוג׳י. ביצה שחורה מפורסמת (kuro-tamago) ¥500 ל-5. צהריים ב-Owakudani Kitchen (ק2, ~09:00–16:30, קארי געש ~¥1,200).", "why": "'עמק הגיהינום' — אדי גופרית ונחלי בוער. אגדה: כל ביצה שחורה מוסיפה 7 שנות חיים.", "tip": "אכלו את הביצה חמה במקום. עצירה של ~1 שעה. בדקו מפלס גז — לפעמים סוגרים את שביל הטבע.", "map": "35.2445,139.0195" },
     { "time": "12:50", "name": "רכבל Owakudani → Togendai (אגם Ashi)", "walk": "בתחנת הרכבל", "see": "המשך ברכבל אל Togendai שעל אגם Ashi (~17 דק׳). מהצד הזה נופי אגם ופוג׳י במזג אוויר טוב.", "why": "יורדים מעל היער אל האגם — מעבר יפה בין הגעש למים.", "tip": "ב-Free Pass. בדקו את לוח שעות ה-Pirate Ship ב-Togendai (~כל 25–40 דק׳, אחרון ~17:00).", "map": "35.2245,138.9985" },
     { "time": "13:15", "name": "🚢 שיט 'ספינת פיראטים' על אגם Ashi", "walk": "נמל Togendai", "see": "ספינת סייטסינג צבעונית מ-Togendai ל-Moto-Hakone-ko (~25–35 דק׳). נופי אגם, יער והרים; בבהיר גם פוג׳י והטוריאי האדום מהמים.", "why": "השיט הקלאסי של האקונה — ב-Free Pass, נינוח ומצולם.", "tip": "עמדו על הסיפון החיצוני לצילום הטוריאי מהמים. יציאה כל ~25–40 דק׳.", "map": "35.1930,139.0245" },
     { "time": "14:00", "name": "מקדש Hakone + הטוריאי האדום על המים (箱根神社)", "walk": "~10 דק׳ מהנמל", "see": "מנמל Moto-Hakone ~10 דק׳ הליכה למקדש (חינם), ולטוריאי 'Heiwa no Torii' העומד בתוך האגם. ⚠️ תור לצילום בשער יכול להיות 1–3 שעות בחג!", "why": "משהו יפני מסורתי ולא רק נוף — מקדש ביער עם השער האדום המפורסם על המים.", "tip": "בשבוע הכסף — דלגו על תור הצילום או צלמו מהצד; תיהנו מהמקדש ומשפת האגם. עזבו עד ~15:00 בגלל האוטובוס.", "map": "35.2005,139.0250" },
     { "time": "15:00", "name": "אוטובוס H חזרה ל-Hakone-Yumoto", "walk": "תחנת Moto-Hakone", "see": "אוטובוס Tozan קו H מ-Moto-Hakone ל-Hakone-Yumoto (~35 דק׳ רגיל). ב-Free Pass.", "why": "סוגר את הלולאה בחזרה לעיירת האונסן, לקראת Tenzan.", "tip": "⚠️ האתר הרשמי מזהיר: בחג העומס בכבישים מאחר אוטובוסים אחה״צ ב-30–60 דק׳+. שמרו מרווח מול קאט-אוף הארוחה (19:00).", "map": "35.2325,139.1050" },
     { "time": "16:00", "name": "♨️ Tenzan Onsen (天山湯治郷)", "walk": "מ-Yumoto: מונית ~¥1,000–1,300, שאטל ~¥100, או אוטובוס", "see": "בית מרפא-אונסן ב-Oku-Yumoto: 4 רוֹטֶנבּוּרוֹ בתוך יער ונחל, אמבטיות פנים ומרחצאות אדים. ¥1,450 לאדם (מזומן), 09:00–23:00.", "why": "שעה–שעה וחצי של אמבט חם בעירום בטבע אחרי יום הליכה — המקום שהכי שווה להכניס כאן.", "tip": "⚠️ קעקועים: Tenzan ידידותי-קעקוע, אבל רק אדם אחד מקועקע בקבוצה! אם לשניכם קעקוע — יסרבו. אמבטיות מופרדות מגדר; יש חדרי אמבט פרטיים (Hanare-gumo) בתשלום.", "map": "35.2255,139.0855" },
     { "time": "17:20", "name": "מונית ל-Yaeikan + צ׳ק-אין", "walk": "מונית ~¥1,000–1,500, כמה דקות", "see": "מ-Tenzan מונית קצרה ל-Yaeikan. צ׳ק-אין (מ-15:00 זמין), מקבלים יוקאטה ונרגעים בחדר.", "why": "מגיעים רגועים ומחוממים — מוכנים לערב הריוקאן.", "tip": "⚠️ חובה להיות מצ׳וקאין לפני 19:00 — מי שמגיע אחרי עלול לא לקבל ארוחת ערב. אשרו את שעת האונסן הפרטי שהזמנתם בבוקר.", "map": "35.2325,139.1050" },
     { "time": "18:00", "name": "🍽️ ארוחת קייסקי ב-Yaeikan", "walk": "בריוקאן", "see": "קייסקי עונתי רב-מנתי (כלול בלינה), ~18:00–19:30. ירק הרים, דגים ומנות עונת הסתיו.", "why": "חגיגה קולינרית שקטה בריוקאן — שיא הערב.", "tip": "אחרי הארוחה נשארים במלון ולא יוצאים שוב.", "map": "35.2325,139.1050" },
     { "time": "20:00", "name": "♨️ אונסן פרטי ב-Yaeikan (kashikiri)", "walk": "בריוקאן", "see": "אמבט פרטי לזוג בשעה שהזמנתם בצ׳ק-אין, ומרחצאות המלון. סיום מושלם ליום.", "why": "רגע אינטימי בלי קהל — מה שהזמנתם מראש בקבלה.", "tip": "ההזמנה נעשית עם ההגעה — לכן ביקשנו שעה כבר בבוקר. שתו מים, אל תתחממו יתר על המידה.", "map": "35.2325,139.1050" }
    ],
    "special": [
     "🩹 קעקועים ב-Tenzan: ידידותי-קעקוע אך רק אדם אחד מקועקע בקבוצה — אם לשניכם יש, יסרבו (גם אם תיכנסו בנפרד). כסו קעקוע מחוץ למים.",
     "⚠️ תור הטוריאי על המים במקדש Hakone יכול להיות 1–3 שעות בשבוע הכסף — דלגו על התור או צלמו מהצד.",
     "🕖 קאט-אוף ארוחה: חובה צ׳ק-אין ב-Yaeikan עד 19:00 או שתפספסו את הקייסקי. תכננו לאחור מ-Tenzan.",
     "🚌 עיכובי אוטובוס: בחג הכבישים עמוסים ואוטובוס H מאחר אחה״צ — שמרו מרווח, או עזבו את המקדש עד 15:00.",
     "🎫 ה-Free Pass (¥7,100) מכסה את כל הלולאה (רכבת/כבלית/רכבל/שיט/אוטובוס) — Tenzan (¥1,450) והמוניות בנפרד, במזומן.",
     "🌋 בדקו בבוקר סטטוס רכבל Owakudani (רוח/גז געשי) — לפעמים נסגר או מוחלף באוטובוס."
    ]
   },
   {
    "id": "magome",
    "date": "2026-09-23",
    "city": "Magome",
    "emoji": "🎂",
    "area": "מגומה-ג׳וקו",
    "title": "מגומה-ג׳וקו — עיירת אֶדו על מדרון ההר (יום ההולדת)",
    "subtitle": "טיפוס ברחוב האבן המרוצף · תחנת דואר 43 מתוך 69 בנקאסֶנדו · אחה״צ+ערב",
    "intro": "עיירת דואר משוחזרת מתקופת אֶדו, ייחודית בכך שהיא בנויה על מדרון תלול — רחוב אבן מרוצף שמטפס במעלה הגבעה בין פונדקי עץ, גלגלי מים ונוף להר אֶנה. זו עיר הולדתו של הסופר שימאזאקי טוסון. הקסם הגדול: אתם לנים כאן, אז בדמדומים כשמטיילי-היום עוזבים, העיירה מתרוקנת ונעשית שלכם — פנסים דולקים וגלגל המים מקרקש. ארוחת יום ההולדת בווילה.",
    "meta": {
     "duration": "~2–3 שעות + ערב",
     "distance": "~600–800 מ׳ טיפוס תלול, אבן מרוצפת",
     "start": "השער התחתון של הרחוב — הגלגל הגדול (masugata)",
     "getThere": "מהאקונה: רכבת ל-Nakatsugawa ואז אוטובוס למגומה (המזוודה הראשית כבר בקיוטו)",
     "end": "וילה Yanagiya (בלי ארוחות) + הליכת דמדומים ברחוב הריק",
     "cost": "כניסה למוזיאון טוסון ¥500 לאדם; אוטובוס נקאצוגאווה→מגומה ¥540 לאדם לכיוון (מזומן, משלמים בירידה); אוכל רחוב ¥1,500-2,500 לאדם; ללא מונית.",
     "luggage": "המזוודה הגדולה כבר מחכה בקנדאו קיוטו; היום נושאים רק את תיק הלילה הקטן מהאקונה. שירות העברת המזוודות מגומה→צומאגו (¥1,000) הוא רק מחר (24.9).",
     "meal": "יום הולדת: גוהיי-מוצ'י על האש ברחוב הראשי (~¥350 לשיפוד) + קורי-קינטון (ממתק ערמונים, בדיוק בעונה בספטמבר) וסובה ערמונים למעלה ~¥1,000; קנו בקבוק סאקה מקומי במבשלה לחגיגה בוילה (וויאגיה ללא ארוחות, חנויות נסגרות מוקדם ~17:00)."
    },
    "stops": [
     { "time": "14:00", "name": "השער התחתון + הגלגל הגדול (masugata)", "walk": "תחילת הרחוב למטה", "see": "כניסת האבן המרוצפת; גלגל מים עץ ענק מסתובב, ופנייה בזווית ישרה (masugata). בית מנוחה קטן עם אירורי ותה ירוק.", "why": "הגלגל הוא סמל מגומה — ולא רק קישוט: הוא מפעיל גנרטור זעיר שמאיר את פנסי הרחוב. ה-masugata היא תכנון הגנתי אֶדואי.", "tip": "צילום הפוסטר של מגומה. הרחוב ללא רכב ~10:00–16:00 — הכי נקי לצילום.", "map": "35.5255,137.5672" },
     { "time": "14:20", "name": "דוכני גוהיי-מוצ׳י ואויאקי", "walk": "טיפוס קל", "see": "עוגות אורז שטוחות על שיפוד עם רוטב אגוז-מיסו, צלויות על פחם (gohei-mochi) — מאכל הדגל של קיסו. גם oyaki (כיסונים אפויים).", "why": "גוהיי-מוצ׳י הוא ה'חובה' של הנקאסֶנדו — לאכול אותו חם מהגחלים על המדרון זה הרגע הקלאסי.", "tip": "אכלו מיד בעודו חם — המיסו מתקשה כשמתקרר. מזומן.", "map": "35.5262,137.5676" },
     { "time": "14:40", "name": "חנויות סאקה ומבשלה לשעבר — קניות ליום ההולדת", "walk": "אמצע המדרון", "see": "חנויות סאקה מקומי (קיסו/נקאטסוגאווה) ומבנה מבשלה משוחזר. אחד המבנים מופיע ברומן 'טרם שחר' של טוסון.", "why": "מבשלות קיסו עשו סאקה חזק ועמוק כדי להחיות מטיילי-הדרך העייפים.", "tip": "קנו כאן בקבוק סאקה מקומי לחגיגה בווילה — אחה״צ! אין קונביני בעיירה והחנויות נסגרות ~17:00.", "map": "35.5264,137.5678" },
     { "time": "15:00", "name": "מוזיאון טוסון / Fujimura Kinenkan (על אתר ה-honjin)", "walk": "אמצע הרחוב", "see": "מוזיאון על אתר ה-honjin של משפחת שימאזאקי, שם נולד טוסון — כתבי יד, מהדורות ראשונות, חפצים. ~¥500, 9:00–17:00.", "why": "העוגן התרבותי של העיירה: היסטוריה (הפונדק הרשמי לדאימיו) וספרות (בית הסופר) במקום אחד.", "tip": "נקודת אמצע נוחה למנוחה תרבותית. (סגירת יום ד׳ היא רק בחורף — 23.9 אמור להיות פתוח.)", "map": "35.5266,137.5680" },
     { "time": "15:30", "name": "Waki-honjin ולוח המודעות (kosatsuba)", "walk": "מעט למעלה", "see": "מוזיאון ה-waki-honjin (הפונדק המשני, ריהוט אֶדו ואירורי, ~¥300) ולוח המודעות המשוחזר עם צווי השוגון (כולל איסור נצרות).", "why": "ה-waki-honjin היה פונדק הגיבוי לדאימיו; לוח המודעות מראה איך השוגונות תקשרה חוק למטיילים.", "tip": "מהיר וזול — 10–15 דק׳ תוספת היסטוריה.", "map": "35.5267,137.5681" },
     { "time": "15:50", "name": "מסעדות סובה ומתוקי ערמונים (קצה עליון)", "walk": "לקראת הראש", "see": "מסעדות סובה (כוסמת, טחונה באבן) ומתוקי ערמונים — kurikinton ואורז-ערמונים. Keiseian לצהריים בלבד ונגמר מוקדם.", "why": "סוף ספטמבר = תחילת עונת הערמונים, וה-kurikinton של נקאטסוגאווה בשיאו בדיוק עכשיו — שיא עונתי.", "tip": "לסובה אמיתי — הגיעו לפני 13:00; אחרת גוהיי-מוצ׳י ומתוקי ערמונים לנשנוש, וארוחה בערב בווילה.", "map": "35.5269,137.5683" },
     { "time": "16:20", "name": "השער העליון + תצפית הר אֶנה (Jinba-ue)", "walk": "ראש המדרון", "see": "השער העליון (masugata נוסף) ותצפית עם ספסלים — הנוף הרחב הכי טוב על הר אֶנה (2,191 מ׳) ועל עמק הקיסו. גובה ~801 מ׳. חינם.", "why": "השם מרמז על מחנה קרב מ-1584; היום זו הגמול הפנורמי של הטיפוס ונקודת שקיעה יפהפייה.", "tip": "מקום מושלם לחגוג 40 בשעת הזהב — הביאו את הסאקה והכוסות מהווילה, פנים לדרום-מזרח להר אֶנה.", "map": "35.5280,137.5680" },
     { "time": "16:45", "name": "תחילת שביל הנקאסֶנדו (טעימה קצרה)", "walk": "מעבר לתצפית", "see": "השביל ההיסטורי ממשיך מעבר למעבר Magome-toge אל צומאגו — כמה מאות מטרים ראשונים נותנים יער, מדרגות אבן ושקט.", "why": "זו הדרך האֶדואית האמיתית — אפילו טעימה קצרה מכניסה לאווירת המהלכים.", "tip": "אל תתחילו את ההליכה המלאה עכשיו — אין תאורה בשביל. רק טעימה, ואז חזרה. ההליכה המלאה מחר בבוקר.", "map": "35.5285,137.5695" }
    ],
    "special": [
     "💧 גלגלי המים — הגדול למטה מפעיל את פנסי הרחוב; גלגלים קטנים מסתובבים לאורך התעלה במעלה.",
     "🌄 תצפית הר אֶנה בראש — הגמול לטיפוס, מושלמת לשקיעה ולטוסט יום-הולדת.",
     "🌙 ריקנות הערב (היתרון הגדול שלכם): אוטובוסי-היום עוזבים עד ~14:00, החנויות נסגרות ~17:00, והעיירה מתרוקנת. כי אתם לנים — עשו הליכה שנייה איטית במעלה הרחוב הריק בדמדומים.",
     "🌰 עונת הערמונים בשיא — kurikinton טרי, מאכל עונתי של קיסו.",
     "🏪 אין קונביני בעיירה! קנו סאקה, חטיפים ומתוקים לחגיגה בווילה עוד באחר-הצהריים לפני שהחנויות נסגרות."
    ]
   },
   {
    "id": "nakasendo",
    "date": "2026-09-24",
    "city": "Tsumago",
    "area": "הליכת נקאסֶנדו",
    "emoji": "🥾",
    "title": "הליכת הנקאסֶנדו — מגומה → צומאגו",
    "subtitle": "~7.8 ק״מ, ~3 שעות · הקטע השמור ביותר של הדרך העתיקה · בוקר",
    "intro": "הקטע המפורסם והשמור ביותר של הנקאסֶנדו האֶדואי: ממגומה במעלה אל מעבר Magome-toge (801 מ׳), ואז ירידה ארוכה דרך יער אל צומאגו — עיירת דואר משומרת ללא חוטי חשמל נראים. בדרך: בית תה חינמי בן 250 שנה, מפלים, פעמוני דובים ומצבות מיל. שולחים את התיקים קדימה כדי ללכת קל.",
    "meta": {
     "duration": "~3 שעות הליכה (4 עם עצירות)",
     "distance": "~7.8 ק״מ · טיפוס אחד למעבר, אחריו ירידה עד צומאגו",
     "start": "קצה מגומה העליון — נקודת שילוח מזוודות (08:30–11:30, ¥1,000/תיק)",
     "getThere": "מהוילה במגומה, ברגל אל ראש הרחוב",
     "end": "אוטובוס צומאגו→נאגיסו (¥300, ~7–10 דק׳, אחרון ~17:41)",
     "cost": "כמעט חינם: מסלול ההליכה ללא תשלום, העברת מזוודה מגומה→צומאגו ¥1,000 לתיק, אוטובוס צומאגו→נגיסו ¥300 לאדם. תה בבית התה טאטבה חינם. אין צורך במונית.",
     "luggage": "המזוודה הגדולה כבר מחכה בקנדאו קיוטו מ-21.9, אז נושאים רק את תיק הלילה הקטן ומעבירים אותו בשירות ההעברה במגומה (¥1,000, מסירה 08:30-11:30, איסוף בצומאגו 13:00-17:00); הולכים עם דייפק בלבד.",
     "meal": "אחרי הירידה לצומאגו: יושימוראיה (Yoshimuraya) ברחוב הראשי - סובה בעבודת יד וגוהיי-מוצ'י צלוי במיסו-שומשום, ~¥1,000-1,400 לאדם (סגור בימי חמישי)."
    },
    "stops": [
     { "time": "08:45", "name": "ראש מגומה — שילוח מזוודות ותחילת הטיפוס", "walk": "ראש הרחוב, ליד Magome Chaya", "see": "הורידו את המזוודות בדלפק ליד מוזיאון טוסון (08:30–11:30), קחו מקל הליכה מושאל, מלאו מים וקנו גוהיי-מוצ׳י לדרך.", "why": "שירות שילוח המזוודות (¥1,000/תיק, מגיע לצומאגו אחרי 13:00) מאפשר ללכת עם תיק-גב קטן בלבד.", "tip": "הורידו עד ~11:00. בדקו בבוקר במרכז המידע אם המוזיאונים סגורים היום (ראו אזהרה).", "map": "35.5273,137.5686" },
     { "time": "09:00", "name": "הטיפוס למעבר Magome-toge (801 מ׳)", "walk": "~2 ק״מ עלייה מתונה", "see": "העלייה היחידה של היום. בראש: בית תה ותיק ליד הכביש, ספסלים עם נוף עמק, ומצבת אבן עם שיר של המשורר מסאוקה שיקי. מכונת שתייה ושירותים.", "why": "נקודת השיא של המסלול; מכאן והלאה הכול במורד עד צומאגו.", "tip": "המנוחה הראשונה הטובה — קפה חם מהמכונה (~¥130), ואז יורדים.", "map": "35.5350,137.5820" },
     { "time": "09:45", "name": "פעמוני הדובים (kuma-yoke)", "walk": "לאורך השביל", "see": "פעמוני מתכת על עמודים לאורך הדרך — צלצלו בכל אחד. יש דובים (דוב שחור אסייתי) ביערות.", "why": "הצליל מזהיר את הדובים שיתרחקו לפני שנפגשים. מנהג הררי כפרי ותיק.", "tip": "לא מסוכן — חלק מהכיף. אפשר גם לשאת פעמון אישי.", "map": "35.5420,137.5850" },
     { "time": "10:15", "name": "בית התה Tateba (立場茶屋) — חינם", "walk": "~אמצע המסלול", "see": "בית בן ~250 שנה שמנהלים מתנדבים מקומיים — תה חם חינם, אירורי (אח שקועה) בוער, וכלי חקלאות עתיקים. פתוח כל השנה (חוץ מראש השנה).", "why": "אחת מנקודות השיא — הפוגה חמה, מעושנת ואותנטית באמצע הדרך.", "tip": "התה חינם — השאירו מטבע בקופת התרומות כתודה.", "map": "35.5540,137.5880" },
     { "time": "11:15", "name": "מפלי Medaki ו-Odaki (זכר ונקבה)", "walk": "סטייה קצרה מהשביל", "see": "זוג מפלים: Odaki (זכר) גבוה ועוצמתי (~18 מ׳), Medaki (נקבה) עדין וצר. פינה יערנית טחובה.", "why": "קשורים באגדה למיאמוטו מוסאשי; סטייה קצרה ששווה אותה.", "tip": "מדרגות עשויות להיות חלקלקות אחרי גשם.", "map": "35.5600,137.5900" },
     { "time": "11:40", "name": "Kabuto-Kannon, ג׳יזו ומצבות מיל (ichirizuka)", "walk": "לאורך הירידה", "see": "מקדש Kannon קטן (מגן על ילדים ולידה), ופסלי ג׳יזו/קאנון אבן ומצבות 'ichirizuka' — תלוליות מיל אֶדואיות למדידת מרחק.", "why": "ה-ichirizuka סימנו כל ~3.9 ק״מ לאורך הדרך — GPS של תקופת אֶדו.", "tip": "חפשו את המצבות הקטנות בצד השביל.", "map": "35.5680,137.5920" },
     { "time": "12:15", "name": "הגעה לצומאגו-ג׳וקו (妻籠宿) — סיור בעיירה", "walk": "יורדים אל הרחוב הראשי", "see": "עיירת הדואר המשומרת: רחוב ללא רכב, ובלי חוטי חשמל/אנטנות נראים — כבלים הוסתרו. Honjin ו-Waki-honjin Okuya (מבנה ברוש 1877), לוח מודעות ותיבת דואר עתיקה. כרטיס משולב ~¥700.", "why": "חלוצת שימור המורשת ביפן (מ-1968). התכונה המפורסמת: היעדר החוטים — הרימו מבט ושימו לב למה שחסר.", "tip": "⚠️ המוזיאונים סגורים ב-2 וב-4 ביום חמישי בחודש — 24.9 הוא ה-4! אמתו בבוקר; הרחוב והחנויות פתוחים בכל מקרה.", "map": "35.5766,137.5953" },
     { "time": "12:40", "name": "צהריים בצומאגו — סובה / גוהיי-מוצ׳י", "walk": "ברחוב הראשי", "see": "סובה של קיסו, גוהיי-מוצ׳י, פורל נהר וירקות הרים (sansai) בבתי התה. אספו את המזוודות אחרי 13:00 במרכז המידע.", "why": "אותם מאכלי דרך אֶדואיים; שילוח המזוודות מגיע לכאן אחר הצהריים.", "tip": "שלחו גלויה מתיבת הדואר העתיקה של צומאגו.", "map": "35.5766,137.5953" },
     { "time": "16:30", "name": "אוטובוס לנאגיסו + צ׳ק-אין", "walk": "תחנה ליד מרכז המידע", "see": "אוטובוס Ontake Kotsu צומאגו→תחנת Nagiso, ¥300, ~7–10 דק׳. אחרון ~17:41. (אפשר גם ~3 ק״מ ברגל.)", "why": "סוגר את יום ההליכה ומביא ללינה בנאגיסו (וילה AKARI).", "tip": "אשרו את שעת האוטובוס המדויקת בלוח המודפס במרכז המידע כשאוספים מזוודות.", "map": "35.5983,137.6058" }
    ],
    "special": [
     "🍵 בית התה Tateba חינם — אירורי בוער ותה חינם (תרומה) באמצע הדרך. אומת שפתוח ב-2026.",
     "💦 מפלי Medaki ו-Odaki — זכר ונקבה, סטייה קצרה ששווה.",
     "🔔 פעמוני הדובים — צלצלו בכל עמוד; מנהג חי, לא גימיק.",
     "🔌 צומאגו בלי חוטים — הרימו מבט: היעדר החשמל הנראה הוא כל הרעיון של השימור.",
     "🧳 שילוח מזוודות ¥1,000/תיק (08:30–11:30 במגומה → מ-13:00 בצומאגו) — הולכים קל עם תיק-גב.",
     "⚠️ 24.9 = יום חמישי הרביעי בחודש → המוזיאונים בצומאגו (Honjin/Waki-honjin) כנראה סגורים. אמתו בבוקר במרכז המידע."
    ]
   },
   {
    "id": "gion-pontocho",
    "date": "2026-09-25",
    "city": "Kyoto",
    "area": "גיון ופונטוצ׳ו",
    "emoji": "🏮",
    "title": "גיון ופונטוצ׳ו — פנסים, גייקו ונהר בערב",
    "subtitle": "ערב קיוטו הראשון · 9 תחנות · 18:00–21:00",
    "intro": "הערב הראשון בקיוטו, כשהפנסים נדלקים: רחוב בתי התה של גיון, המקדש המואר של יאסאקה, תעלת שירקאווה המצולמת ביותר, גדת נהר קאמו, וסמטת פונטוצ׳ו הזעירה עם פלטפורמות אכילה מעל המים. זו גם השעה הכי טובה לתפוס הבזק של גייקו או מאיקו בדרך לפגישה. כבוד מוחלט: ברחובות הפרטיים אסור להיכנס או לצלם (קנס עד ¥10,000).",
    "meta": {
     "duration": "~3 שעות (כולל ארוחת ערב)",
     "distance": "~2.5–3 ק״מ, שטוח",
     "start": "מקרסומה/שיג׳ו — הליכה מזרחה ברחוב Shijo אל גיון",
     "getThere": "מהמלון ליד Karasuma: ~15–20 דק׳ הליכה מזרחה, או Hankyu תחנה אחת ל-Kawaramachi",
     "end": "ארוחת ערב אובנזאי/וואגיו בפונטוצ׳ו, או פלטפורמת נהר (yuka)",
     "cost": "כניסה חינם: מקדש יאסאקה, גיון שירקאווה, גשר טאצומי וגדת נהר קאמו כולם ללא תשלום, וכל המסלול הוא הליכה מהמלון (בלי מונית). ההוצאה היחידה היא ארוחת הערב באובנזאי/וואגיו בפונטוצ'ו, בערך ¥5,000–8,000 לאדם (יושבים על יוקה מעל הנהר עד סוף ספטמבר, לרוב תוספת ¥ קטנה). בירה/סאקה עוד כ-¥700–900 לכוס.",
     "luggage": "מזוודה ראשית כבר מחכה בקנדאו קרסומה מהשילוח (טאקיובין), ובערב הזה היא נעולה במלון — יוצאים לגיון ופונטוצ'ו עם דייפק וכרטיס ICOCA בלבד.",
     "meal": "ארוחת אובנזאי/וואגיו על יוקה בפונטוצ'ו (למשל Pontocho Izumoya על גדת הנהר, פתוח עד אוקטובר) — צלחות עונתיות קטנות ובשר וואגיו מול הקאמו, בערך ¥6,000–8,000 לאדם. שווה להזמין מקום מראש כי היוקה מתמלאת."
    },
    "stops": [
     { "time": "18:00", "name": "Hanamikoji-dori (花見小路)", "walk": "בקצה המזרחי של Shijo", "see": "רחוב האבן האייקוני של גיון — בתי תה (ochaya), machiya מעץ ופנסים תלויים. פנו דרומה מפינת Shijo.", "why": "לב גיון קובו, רובע הגייקו/מאיקו היוקרתי של קיוטו — כאן מתקיימות המסיבות הפרטיות (ozashiki). בין הערביים, כשהפנסים נדלקים, זו שיא האווירה.", "tip": "⚠️ הסמטאות הפרטיות מהצדדים אסורות לתיירים (קנס ¥10,000) ואסור לצלם גייקו/מאיקו בלי רשות. הישארו ברחוב הראשי הציבורי.", "map": "35.0030,135.7750" },
     { "time": "18:25", "name": "מקדש Yasaka (八坂神社)", "walk": "בקצה המזרחי של Shijo", "see": "השער האדום ובמת הריקוד התלויה במאות פנסי נייר, כל אחד עם שם עסק מקומי, מוארים בערב. חינם, פתוח 24 שעות.", "why": "מקדש המגן של רובע גיון (מקור פסטיבל Gion Matsuri). אחת הנקודות שיפות ומותרות בלילה.", "tip": "השער המערבי בראש Shijo נותן צילום מדהים במורד הרחוב.", "map": "35.0036,135.7785" },
     { "time": "18:45", "name": "Gion Shirakawa / Shimbashi (祇園白川)", "walk": "צפונה, כמה דקות", "see": "תעלת שירקאווה עם ערבות בוכות ו-Shimbashi המרוצף — פנסים משתקפים במים. שקט הרבה יותר מ-Hanamikoji.", "why": "נחשב לרחוב היפה ביותר בקיוטו — אזור שימור, הגלויה הקלאסית של גיון.", "tip": "בואו אחרי החשכה כשהוא מואר ושקט. עדיין רחוב בתי תה פעיל — דברו בשקט, אל תצלמו אנשים בלי רשות.", "map": "35.0057,135.7758" },
     { "time": "19:00", "name": "גשר Tatsumi + מקדש Tatsumi Daimyojin (巽橋)", "walk": "בתוך שירקאווה", "see": "גשר קשת קטן מעל שירקאווה, ומקדש אדום זעיר לצדו.", "why": "הגשר הופיע ב'זכרונותיה של גיישה'; המקדש אהוב על גייקו ומאיקו שמתפללות בו לשיפור אמנותן.", "tip": "אחת הפינות המצולמות בקיוטו — קטנה; היו מתחשבים באחרים שמצלמים.", "map": "35.0059,135.7752" },
     { "time": "19:15", "name": "גדת נהר קאמו (鴨川)", "walk": "מערבה אל הנהר", "see": "טיילת הגדה — זוגות יושבים במרווחים לאורך הנהר, מול גב פונטוצ׳ו המואר והפלטפורמות מעל המים.", "why": "הסצנה הקיוטואית הקלאסית, חינמית ופתוחה — מים, רוח ואורות עיר.", "tip": "הלכו צפונה מ-Shijo אל Sanjo כדי ליישר קו עם הפלטפורמות (yuka) לצילום.", "map": "35.0040,135.7715" },
     { "time": "19:30", "name": "פונטוצ׳ו (先斗町) + מקדש הטאנוקי", "walk": "לסמטה מקבילה לנהר", "see": "סמטה מוארת ברוחב ~2 מ׳ של מסעדות וברים בין Shijo ל-Sanjo. בעונה — פלטפורמות אכילה מעל הנהר (yuka).", "why": "רובע גייקו/מאיקו משלו (מ-~1670). בסמטה צדדית מסתתר מקדש טאנוקי זעיר שנבנה אחרי שריפת 1978 — 'המגן' של הרובע.", "tip": "פלטפורמות ה-yuka פתוחות עד 15 באוקטובר — אתם בעונה. הזמינו מראש לשולחן נהר בשישי.", "map": "35.0055,135.7708" },
     { "time": "19:45", "name": "Kiyamachi-dori (木屋町通)", "walk": "בלוק מערבה, לאורך תעלת Takase", "see": "רחוב אכילה וחיי לילה לצד התעלה, מקביל לפונטוצ׳ו — עצי דובדבן, ברים ואיזקאיות קז׳ואליות.", "why": "משקל-נגד תוסס וזול יותר מפונטוצ׳ו — טוב למשקה או ביס.", "tip": "עוברים מפונטוצ׳ו דרך אחת הסמטאות המחברות.", "map": "35.0050,135.7695" },
     { "time": "20:00", "name": "ארוחת ערב — אובנזאי / וואגיו / פלטפורמת נהר", "walk": "בפונטוצ׳ו/Kiyamachi", "see": "מנות קטנות עונתיות (obanzai) ב-machiya, וואגיו, או קייסקי-נהר על פלטפורמת yuka מעל קאמו.", "why": "אובנזאי = בישול בית קיוטואי — הדרך הכי טובה 'לטעום הרבה' בערב הראשון.", "tip": "לשולחן yuka בשישי — הזמינו מראש. בקשו במפורש מושב 'noryo-yuka / kawayuka'.", "map": "35.0055,135.7708" }
    ],
    "special": [
     "🚫 חוקי גיון 2026: אסור להיכנס לסמטאות הפרטיות ואסור לצלם גייקו/מאיקו בלי רשות — קנס עד ¥10,000. אל תרדפו, תיגעו או תחסמו. הישארו ברחובות הציבוריים.",
     "👘 גייקו מול מאיקו: geiko היא אמנית מוסמכת (המילה הקיוטואית ל'גיישה'); maiko היא חניכה צעירה — תסרוקת מורכבת, obi ארוך. שתיהן בעבודה, לא מופע.",
     "🌸 Shirakawa/Shimbashi בלילה — הרחוב היפה ביותר בקיוטו, שקט ומואר בפנסים.",
     "🦝 מקדש הטאנוקי הנסתר בפונטוצ׳ו — הראקון-כלב שעצר את שריפת 1978.",
     "🍶 פלטפורמות ה-yuka מעל נהר קאמו פתוחות עד 15.10 — אתם בעונה. או לאכול עליהן, או לצלם אותן מוארות מהגדה."
    ]
   },
   {
    "id": "fushimi-inari",
    "date": "2026-09-26",
    "city": "Kyoto",
    "area": "פושימי אינארי",
    "emoji": "⛩️",
    "title": "פושימי אינארי — טיפוס שחר בין אלף השערים",
    "subtitle": "פתוח 24 שעות, חינם · הגעה ~06:45 לפני הקהל",
    "intro": "המקדש עם מנהרות השערים הכתומים המפורסמות בעולם, פתוח כל הזמן וחינם — לכן שחר הוא מושלם. עד 09:00 המנהרות נהפכות לתור זוחל; ב-06:45 הן ריקות, ערפיליות וקסומות, והצילומים חופשיים. אינארי הוא אל האורז והשגשוג, והשועל (kitsune) הוא שליחו. טיפוס אמיתי, רובו מדרגות.",
    "meta": {
     "duration": "~1.5–3 שעות (תלוי עד לאן)",
     "distance": "עד Yotsutsuji ~1.5 ק״מ / פסגה מלאה ~4 ק״מ, +233 מ׳",
     "start": "תחנת Inari (JR Nara Line מקומי!) — מול שער Romon",
     "getThere": "מקיוטו: JR Nara Line מקומי (רק 'local' עוצר ב-Inari!) 2 תחנות, ~5 דק׳, ~¥150",
     "end": "ירידה ~08:30–09:00 כשהקהל מגיע; קפה Vermillion / inari-zushi",
     "cost": "כניסה חינם (מקדש פתוח 24/7), רק הנסיעה: JR Nara Line מקיוטו 2 תחנות ~5 דק' ~¥150 לכיוון עם ה-ICOCA; קפה/אינרי-זושי בירידה ~¥800–1,500 לאדם. סה\"כ ליום ~¥1,200–2,000 לאדם. אין צורך במונית.",
     "luggage": "המזוודה הראשית נשארת נעולה ב-Candeo Karasuma בקיוטו; לטיפוס השחר יוצאים עם דייפק קטן, מים וכרטיס ICOCA בלבד.",
     "meal": "בירידה: inari-zushi קלאסי ב-Nezameya (נזמאיה) שברחוב הגישה ליד תחנת Inari, מקום ותיק ואותנטי – ~¥900–1,400 לאדם; אם רוצים בראנץ' וקפה איכותי, Vermillion cafe במרחק דקות הליכה (~¥1,200–1,800)."
    },
    "stops": [
     { "time": "06:45", "name": "שער Romon (楼門) + האולם הראשי", "walk": "2 דק׳ מהתחנה, מול הכניסה", "see": "שער מגדל אדום דו-קומתי, ולצדו שני שועלי-שמירה. מאחוריו האולם הראשי (Honden).", "why": "נתרם ע״י טויוטומי הידיושי ב-1589 (לפי האגדה, כתודה על החלמת אמו). השועל מימין אוחז מפתח — למחסן האורז.", "tip": "בשחר הוא מואר וריק לגמרי — צילום סימטרי נקי. דלפקי הקמעות עוד סגורים; עשו בדרך למטה.", "map": "34.9671,135.7727" },
     { "time": "07:00", "name": "Senbon Torii (千本鳥居) — 'אלף השערים'", "walk": "מעט מעלה", "see": "השביל מתפצל לשתי שורות צפופות של שערים כתומים שיוצרים מנהרות זוהרות.", "why": "כל שער הוא תרומה של עסק המתפלל לשגשוג — השם והתאריך חרוטים בשחור בגב השער. ~10,000 שערים מכסים את ההר.", "tip": "עלו בשורה הימנית; הביטו אחורה במורד — 'המנהרה הריקה' היא צילום השחר האייקוני.", "map": "34.9678,135.7734" },
     { "time": "07:10", "name": "Okusha Hohaisho + אבני Omokaru (奥社)", "walk": "בראש Senbon Torii", "see": "אולם התפילה האחורי, ומאחוריו זוג אבני 'Omokaru' (קל-כבד) על פנסי אבן.", "why": "המנהג: משאלה, ואז הרימו את האבן — אם קלה מהצפוי, המשאלה תתגשם; כבדה = צריך יותר מאמץ.", "tip": "כאן תלויים lohot ema בצורת פני שועל (מציירים בעצמכם). מטבע, משאלה, הרמת אבן.", "map": "34.9682,135.7745" },
     { "time": "07:30", "name": "צומת Yotsutsuji (四つ辻) — תצפית", "walk": "~30–45 דק׳ מדרגות מהבסיס", "see": "הצומת באמצע ההר, ~160 מ׳ — התצפית הפנורמית הראשונה על דרום קיוטו, יפה במיוחד באור שחר וערפל.", "why": "רוב המבקרים עוצרים כאן. מכאן מתחילה לולאת הפסגה, והקהל מתדלל דרמטית מעבר לנקודה.", "tip": "אם קצרים בזמן — זו נקודת החזרה הטבעית. יש אזור מנוחה ובתי תה (נפתחים מאוחר יותר).", "map": "34.9688,135.7790" },
     { "time": "07:45", "name": "לולאת הפסגה — Ichinomine (一ノ峰, 233 מ׳) [אופציונלי]", "walk": "לולאה ~45–60 דק׳ מ-Yotsutsuji", "see": "לולאה שקטה דרך יער וארז ומקדשי-משנה עד הפסגה (233 מ׳). אין נוף עיר מהפסגה — היער סוגר; Yotsutsuji הוא הנוף.", "why": "ההר העליון שליו ומעוטר, תחושת עלייה-לרגל אמיתית עם מעט אנשים גם בצהריים.", "tip": "פנו ימינה (נגד השעון) ב-Yotsutsuji — הכיוון המקובל והעלייה מתונה יותר.", "map": "34.9700,135.7810" },
     { "time": "08:30", "name": "ירידה — קפה Vermillion / inari-zushi", "walk": "חזרה לבסיס", "see": "בירידה: קפה Vermillion (מומחיות, מעל בריכה, נפתח ~08:00–08:30) ו-inari-zushi בדוכני הגישה.", "why": "inari-zushi (כיסי טופו מטוגן ממולאים באורז) נולד כאן — טופו מטוגן הוא מאכלו האהוב של השועל, שליח אינארי.", "tip": "רדו עד ~08:30–09:00 לפני הקהל. קחו inari-zushi או kitsune-udon לסיום.", "map": "34.9671,135.7727" }
    ],
    "special": [
     "🌅 מנהרות השערים הריקות בשחר — הסיבה לבוא מוקדם; כמעט בלתי אפשרי אחר כך.",
     "🪨 אבני Omokaru ב-Okusha — הרימו: 'קל מהצפוי = המשאלה תתגשם'.",
     "🖊️ הכתובות בגב השערים — שמות ותאריכי תרומות; כל ההר הוא ספר תפילות-לשגשוג.",
     "🦊 inari-zushi נולד כאן — טופו מטוגן הוא מאכל השועל (שליח אינארי). טעמו במקום.",
     "🚃 שימו לב: רק רכבות 'local' של קו JR Nara עוצרות ב-Inari — רכבת מהירה חולפת בלי לעצור."
    ]
   },
   {
    "id": "arashiyama",
    "date": "2026-09-26",
    "city": "Kyoto",
    "area": "ארשיאמה",
    "emoji": "🎋",
    "title": "ארשיאמה — חורש הבמבוק, מקדשים ונהר",
    "subtitle": "בוקר מאוחר–אחה״צ · 10 תחנות",
    "intro": "הרובע הנופי של מערב קיוטו: שביל הבמבוק המתנשא, מקדש זן עם גן בן 700 שנה, גשר 'חציית הירח' מול ההרים, קפה על שפת הנהר, פארק קופים עם נוף פנורמי, ו'יער קימונו' מואר בתחנה. חורש הבמבוק הכי יפה מוקדם — עשו אותו ראשון מיד עם ההגעה.",
    "meta": {
     "duration": "~5–7 שעות",
     "distance": "~4–5 ק״מ, רובו שטוח (חוץ מפארק הקופים)",
     "start": "תחנת Saga-Arashiyama (JR Sagano) — 8 דק׳ לחורש",
     "getThere": "מפושימי אינארי: JR ל-Kyoto ואז JR Sagano ל-Saga-Arashiyama, ~35 דק׳",
     "end": "Kimono Forest בתחנת Randen, יציאה ברכבת הרטרו בין ערביים",
     "cost": "כניסות: אוקוצ'י סנסו ¥1000 (כולל מאצ'ה+מתוק), גן טנריו-ג'י ¥500, פארק הקופים איוואטהיאמה ¥800; חורש הבמבוק ונונומיya חינם. סירת חתירה ~¥1800/שעה או ריקשה ~¥3000+ לזוג (אופציונלי). הגעה/חזרה בכרטיס IC (JR Sagano ~¥240 לכיוון). סה\"כ כניסות ~¥2300 לאדם.",
     "luggage": "יום סיור בקיוטו: המזוודה הראשית נעולה בקנדאו קרסומה, יוצאים עם דייפק + כרטיס IC (ICOCA/Suica) בלבד.",
     "meal": "ארוחת צהריים ב-Arashiyama Yoshimura ליד גשר טוגטסוקיו — סובה בעבודת יד עם נוף לנהר, ~¥1500-2000 לאדם (נישין-סובה ¥1540). אין הזמנות, רושמים שם ומחכים; סוגרים 17:00."
    },
    "stops": [
     { "time": "10:50", "name": "חורש הבמבוק (竹林の小径)", "walk": "8 דק׳ מהתחנה", "see": "שביל ~500 מ׳ של במבוק moso מתנשא שקומר למנהרה ירוקה. חינם, 24 שעות. ~15–20 דק׳.", "why": "רשרוש הרוח בין הגבעולים רשום ב'100 נופי הקול של יפן'. האור המסונן מבעד לחופה הוא הצילום החתום.", "tip": "עשו אותו ראשון עם ההגעה! בשבת מתמלא עד אחה״צ. צלמו כלפי מעלה או במורד השביל.", "map": "35.0170,135.6717" },
     { "time": "11:15", "name": "מקדש Nonomiya (野宮神社)", "walk": "על השביל, בתוך החורש", "see": "מקדש קטן בתוך החורש, עם טוריאי שחור נדיר מעץ לא-קלוף. חינם.", "why": "אתר עתיק — נסיכות קיסריות עברו כאן טיהור לפני ששירתו במקדש איסה. מופיע ב'סיפור גנג׳י'.", "tip": "כיום נקודת כוח לאהבה — שפשפו את אבן הצב (kameishi) למשאלה.", "map": "35.0178,135.6740" },
     { "time": "11:30", "name": "וילת Okochi Sanso (大河内山荘)", "walk": "בקצה המערבי של השביל", "see": "גן וילה של כוכב סרטי סמוראים משנות ה-30. ¥1,000 כולל מאצ׳ה וממתק. 9:00–17:00.", "why": "גן טיולים שקט ומורכב להפליא עם נקודות תצפית מוגבהות על הערוץ ועל קיוטו — הרבה פחות אנשים מהחורש.", "tip": "שמרו את כרטיס התה שמקבלים בכניסה — הוא השובר למאצ׳ה בבית התה בסוף.", "map": "35.0159,135.6700" },
     { "time": "12:30", "name": "מקדש Tenryu-ji (天龍寺)", "walk": "בחזרה דרך החורש", "see": "מקדש זן של אונסק״ו. גן Sogenchi (מוסו סוסקי, מאה 14). גן ¥500. 8:30–17:00.", "why": "הגן הראשון שהוכרז 'מקום נוף מיוחד' ביפן — מופת של 'נוף מושאל' שממסגר את הרי ארשיאמה מאחורי הבריכה, ~700 שנה ללא שינוי.", "tip": "השער הצפוני יוצא ישר אל חורש הבמבוק — משתלב מושלם ביניהם.", "map": "35.0158,135.6738" },
     { "time": "13:15", "name": "צהריים — Yoshimura (סובה) או Yudofu", "walk": "לכיוון הגשר", "see": "Arashiyama Yoshimura — סובה עם נוף פנורמי לגשר ולנהר (11:00–17:00, ~¥1,000–2,200). חלופה: yudofu (סיר טופו), מאכל קיוטואי.", "why": "מושבי החלון מעל הגשר הם הסיבה לבוא — אוכל + נוף אייקוני יחד.", "tip": "עמדו בתור ~11:00 למושב חלון, או פנו ל-yudofu Sagano הסמוך אם התור ארוך.", "map": "35.0148,135.6772" },
     { "time": "14:15", "name": "גשר Togetsukyo (渡月橋)", "walk": "דקות", "see": "'גשר חציית הירח' באורך ~155 מ׳ מעל נהר Katsura, עם ההר המיוער ברקע. חינם.", "why": "הנוף הכי מזוהה של ארשיאמה — קיסר מהמאה ה-13 אמר שהירח נראה 'חוצה' את הגשר.", "tip": "הצילום הכי טוב מהגדה הצפונית במבט דרומה. גם נקודת הגישה לסירות, ריקשות ופארק הקופים.", "map": "35.0130,135.6775" },
     { "time": "14:30", "name": "☕ % Arabica על הנהר", "walk": "מעלה הזרם מהגשר", "see": "הדגל של % Arabica ממש על שפת הנהר. 9:00–18:00. קפה ~¥500–700.", "why": "קפה קיוטואי מינימליסטי עם מיקום נהר בלתי-מנוצח מול Hozu והגשר.", "tip": "קחו לאטה ושתו על מדרגות הנהר מול הסירות — אחד מרגעי הצילום הכי טובים.", "map": "35.0136,135.6765" },
     { "time": "14:50", "name": "סירת חתירה / ריקשה (אופציה)", "walk": "גדה צפונית", "see": "סירת חתירה עצמית (~¥1,000–1,800, ~30–60 דק׳) או ריקשה (jinrikisha, מ-~¥3,000, ~30 דק׳ עם הסבר).", "why": "מהמים מקבלים את הזווית הכי רגועה ופחות עמוסה על ההרים.", "tip": "לטיול קצר — סירה או ריקשה 30 דק׳ (לא שייט Hozugawa המלא שהוא חצי יום מ-Kameoka).", "map": "35.0129,135.6790" },
     { "time": "15:15", "name": "פארק הקופים Iwatayama (嵐山モンキーパーク)", "walk": "בקצה הדרומי של הגשר", "see": "כ-120 מקאקים חופשיים בראש גבעה + הנוף הפנורמי הכי טוב על אגן קיוטו. ¥800, 9:00–16:00. טיפוס ~20 דק׳.", "why": "קופים פראיים ונוף העיר הכי טוב בארשיאמה — האגן כולו נפרש למטה. מאכילים מתוך תא כלוב בעוד הם חופשיים בחוץ.", "tip": "הכניסה האחרונה ~15:30 — אל תדחו. אל תסתכלו לקופים בעיניים ואל תיגעו; סגרו תיקים. מים בספטמבר החם.", "map": "35.0095,135.6780" },
     { "time": "16:45", "name": "Kimono Forest בתחנת Randen (キモノフォレスト)", "walk": "אל תחנת Randen Arashiyama", "see": "~600 עמודים עטופים בבד קימונו Kyo-yuzen (32 דגמים), מוארים אחרי החשכה. חינם, 24 שעות.", "why": "מיצב אמנות חלומי שמהדהד את חורש הבמבוק, אבל במשי צבוע — מרהיב במיוחד מואר.", "tip": "התחנה שממנה תצאו ברכבת Randen הרטרו — הישארו לדמדומים (~18:00) לפינאלה מואר.", "map": "35.0155,135.6790" }
    ],
    "special": [
     "🎋 חורש הבמבוק ראשון — האור הירוק הכי יפה לפני שהשבת מתמלאת בצהריים.",
     "🍵 Okochi Sanso — החוויה השקטה הכי טובה: תצפיות מוגבהות + מאצ׳ה כלול, ורוב מטיילי-היום מדלגים עליה.",
     "🐒 פארק הקופים — הנוף הכי טוב בארשיאמה על אגן קיוטו כולו (הכניסה ¥800, אחרונה ~15:30).",
     "☕ % Arabica על הנהר — רגע הקפה-עם-נוף האייקוני של קיוטו.",
     "👘 Kimono Forest בדמדומים — עמודי המשי המוארים, פינאלה מושלמת, וזו תחנת היציאה שלכם."
    ]
   },
   {
    "id": "nishiki",
    "date": "2026-09-26",
    "city": "Kyoto",
    "area": "שוק נישיקי",
    "emoji": "🍢",
    "title": "שוק נישיקי — 'המטבח של קיוטו'",
    "subtitle": "אחה״צ מוקדם · ~10 תחנות טעימה · הגיעו 16:00",
    "intro": "ארקייד מקורה באורך ~400 מ׳ עם ~120 דוכנים — 'המטבח של קיוטו' מזה ~400 שנה, מושרש במוכרי דגים (מי תהום קרים). טאקו-טמאגו, טמגויאקי, חמוצים, יובה, ומתוקי מאצ׳ה. חשוב לתזמן: הרבה דוכנים סוגרים 17:00–18:00 — הגיעו ~16:00. אוכלים ליד הדוכן (לא הולכים-ואוכלים).",
    "meta": {
     "duration": "~1–1.5 שעות",
     "distance": "~400 מ׳ מקורה, שטוח",
     "start": "כניסה מזרחית (Teramachi) — מקדש Nishiki Tenmangu",
     "getThere": "ממרכז קיוטו: תחנת Shijo/Karasuma, בלוק אחד צפונה",
     "end": "יציאה מערבית ל-Karasuma/Daimaru, המשך לארוחת ערב או לגיון",
     "cost": "כניסה חופשית לארקייד, בלי כרטיס ובלי מונית (בלוק מ-Shijo/Karasuma, הכול ברגל). טעימות ב-~10 דוכנים: ~¥2,000–3,000 לאדם (טאקו-טמאגו ¥400–1,000, צדפה ¥300–500, שיפוד ¥300–800, מתוק ¥200–400).",
     "luggage": "יום סיור בקיוטו: המזוודה הראשית נעולה ב-Candeo Karasuma, יוצאים עם דייפק + כרטיס ICOCA בלבד.",
     "meal": "טאקו-טמאגו של Kai (櫂) — תמנון תינוק עם ביצת שליו בזיגוג סויה, ~¥400–1,000 לשיפוד; אכלו ליד הדוכן. הוסיפו דאשימאקי חם של Miki Keiran (~¥200 פרוסה) לפני שסוגר ב-17:00."
    },
    "stops": [
     { "time": "16:00", "name": "מקדש Nishiki Tenmangu (錦天満宮)", "walk": "כניסה מזרחית", "see": "מקדש מ-~1003, לאל הלמידה. שור ברונזה (ליטוף למזל) ומעיין 'Nishiki no Mizu' לשתייה. חינם, ~08:00–20:00.", "why": "פרט נסתר: הטוריאי של המקדש 'בלוע' לתוך הבניינים משני הצדדים — כשנבנה הרחוב, החנויות נבנו סביב השער. הרימו מבט לחלונות הקומה השנייה.", "tip": "רגע שקט לפני האוכל, וצילום של הטוריאי הבלוע.", "map": "35.0050,135.7674" },
     { "time": "16:10", "name": "Aritsugu (有次) — סכינים", "walk": "בקצה המזרחי", "see": "יצרן סכינים אגדי, נוסד 1560 (במקור נפחי חרבות). סכיני קיוטו מזוייפות ביד, סירי נחושת. 9:00–17:00 (סגור ד׳).", "why": "מעל 450 שנה — ציון דרך אמן אמיתי, לא חנות מזכרות. חריטת שם חינם ברכישה.", "tip": "גם בלי לקנות — צפו באומנים. סכין paring ~¥8,000–15,000.", "map": "35.0050,135.7672" },
     { "time": "16:20", "name": "Kai (櫂) — טאקו-טמאגו", "walk": "בארקייד", "see": "תמנון תינוק על שיפוד עם ביצת שליו שלמה מבושלת בתוך הראש, בזיגוג סויה מתוק. ~¥500–1,000.", "why": "החטיף האייקוני והייחודי ביותר של נישיקי — מפתיע ומצולם.", "tip": "אכלו ליד הדוכן; הביצה-בתוך-הראש היא כל העניין.", "map": "35.0050,135.7669" },
     { "time": "16:30", "name": "Nishiki Daiyasu (錦大安) — צדפות על הגריל", "walk": "בארקייד", "see": "חנות פירות ים בת ~100 שנה. צדפות ומאכלי ים צלויים/טריים. שבת 12:00–20:00 (מהמאוחרים לסגור).", "why": "צדפות טריות שנפתחות מולכם, בעמידה בדוכן.", "tip": "בקשו צלוי אם חוששים מנא. אכלו בדלפק.", "map": "35.0050,135.7666" },
     { "time": "16:40", "name": "שיפודי פירות ים על הגריל / unagi", "walk": "בארקייד", "see": "כמה דוכנים צולים צדפות, שרימפס, דיונון, צלופח (unagi) ואנגו. ~¥300–800 לשיפוד.", "why": "פירות ים על פחם, בהזמנה.", "tip": "לכו לפי העשן — קנו מה שחם מהגריל.", "map": "35.0050,135.7663" },
     { "time": "16:50", "name": "Miki Keiran (三木鶏卵) — טמגויאקי", "walk": "מרכז הארקייד", "see": "מ-1928, מומחה גלגול הביצה. דאשימאקי במי התהום של נישיקי; גם umaki (עטוף צלופח). שבת עד 17:00.", "why": "הדאשימאקי הקיוטואי המובהק — צפו בטכניקת הגלגול 'kyomaki'.", "tip": "הגיעו לפני 17:00 — זו התחנה הרגישה לזמן.", "map": "35.0050,135.7661" },
     { "time": "17:00", "name": "Konnamonja (こんなもんじゃ) — סופגניות חלב סויה", "walk": "בארקייד", "see": "מומחה סויה (מ-1991). סופגניות חלב-סויה (~¥300 לקופסה) וסופט-סרב סויה-מאצ׳ה. 10:00–18:00.", "why": "הסופגניות החמות והסופט-סרב הקרמי הם מוסד קינוח של נישיקי.", "tip": "חלקו קופסת סופגניות וסופט אחד — הפסקה מתוקה באמצע.", "map": "35.0050,135.7658" },
     { "time": "17:10", "name": "יובה / טופו טרי", "walk": "בארקייד", "see": "yuba (עור טופו) טרי, טופו וסופט-סרב סויה. ~¥400–600.", "why": "יובה הוא מאכל קיוטואי הקשור למטבח הבודהיסטי ולמים הרכים המקומיים.", "tip": "אם מציעים 'hikiage yuba' טרי — טעמו מיד, משיי.", "map": "35.0050,135.7655" },
     { "time": "17:20", "name": "חמוצים (tsukemono) — senmaizuke", "walk": "בארקייד", "see": "חמוצים קיוטואים כולל senmaizuke (לפת פרוסה דק). שקיות ~¥300–800, הרבה דוכנים עם טעימות חינם.", "why": "כבישת קיוטו היא מלאכה מעודנת; senmaizuke הוא קלאסיקה עונתית.", "tip": "טעמו קודם, ואז קנו ואקום כמזכרת נסיעה. אל תיגעו בסחורה שלא לטעימה.", "map": "35.0050,135.7652" },
     { "time": "17:30", "name": "מתוקי מאצ׳ה — Sawawa / warabimochi", "walk": "לקראת הקצה המערבי", "see": "סופט-סרב מאצ׳ה, דאיפוקו מאצ׳ה, warabimochi עם kinako. ~¥200–600.", "why": "מתוקי מאצ׳ה של אוג׳י כמו שצריך; warabimochi בקינאקו הוא סיום קלאסי.", "tip": "תחנת המתוק האחרונה לפני היציאה המערבית ל-Karasuma.", "map": "35.0050,135.7650" }
    ],
    "special": [
     "🐙 טאקו-טמאגו (Kai) — תמנון עם ביצת שליו בראש; החטיף החתום של נישיקי.",
     "🔪 Aritsugu — שושלת נפחי חרבות מ-1560, חריטת שם חינם.",
     "⛩️ הטוריאי הבלוע של Nishiki Tenmangu — השער הקדוש שנבלע לתוך הבניינים; הרימו מבט לקומה השנייה.",
     "🚫 אוכלים ליד הדוכן — לא הולכים-ואוכלים (איסור 'tabe-aruki'). מזומן, ואל תיגעו בסחורה.",
     "⏰ הגיעו ~16:00 — הרבה דוכנים סוגרים 17:00–18:00 (Miki Keiran טמגויאקי עד 17:00)."
    ]
   },
   {
    "id": "higashiyama",
    "date": "2026-09-27",
    "city": "Kyoto",
    "area": "היגאשיאמה",
    "emoji": "🏯",
    "title": "היגאשיאמה — קיומיזו והמדרונות העתיקים",
    "subtitle": "בוקר, במורד · 11 תחנות · 07:30–10:30",
    "intro": "הרובע ההיסטורי השמור של קיוטו: מקדש קיומיזו עם הבמה המרחפת, ומדרונות אבן מרוצפים של machiya, בתי תה וחנויות מלאכה. מטפסים לראש (קיומיזו) ויורדים דרך הרחובות העתיקים — הכיוון המומלץ. בוקר מוקדם = רחובות ריקים וצילומים בלי קהל, מושלם גם לקימונו. זהו חלק הבוקר של יום שכולל אחה״צ קינקאקו-ג׳י, קימונו+תה ומאיקו.",
    "meta": {
     "duration": "~2.5–3 שעות",
     "distance": "~2–2.5 ק״מ, רובו במורד",
     "start": "Kiyomizu-dera (הגיעו עם פתיחה 06:00–08:00)",
     "getThere": "אוטובוס 100/206 ל-Kiyomizu-michi, או מונית לבסיס Kiyomizu-zaka (נוח לקימונו)",
     "end": "מקדש Yasaka → גיון (לקראת קימונו+תה ומאיקו אחה״צ)",
     "cost": "כניסות: קיומיזו-דרה ¥500 + מנהרת זואיגודו ¥100 + קודאיג'י ¥600 = ~¥1,200 לאדם. יסאקה ומארויאמה פארק חינם. אוטובוס 100/206 ¥230 שטוח, או מונית קצרה מקנדאו ~¥1,000-1,300.",
     "luggage": "המזוודה הראשית נעולה בקנדאו קרסומה — יוצאים עם דייפאק וכרטיס IC (ICOCA) בלבד; חוזרים לאותו מלון בערב.",
     "meal": "קפה בסטארבקס המצ'יה (בית עץ בן 100 שנה) בניננזקה, ~¥600-800 לאדם; או חטיף יאטסוהאשי טרי חם בדרך, ~¥300-500."
    },
    "stops": [
     { "time": "07:40", "name": "מקדש Kiyomizu-dera (清水寺)", "walk": "טיפוס Kiyomizu-zaka לשער", "see": "מקדש אונסק״ו. הבמה העצית הענקית (butai) מעל המדרון — בלי מסמר אחד — ונוף לקיוטו. מפל Otowa: שלושה זרמים (אריכות ימים/הצלחה/אהבה) — שתו מאחד בלבד. ¥500, פתוח מ-06:00.", "why": "המקדש האייקוני של קיוטו. האור המוקדם והבמה הריקה בלתי-נשכחים.", "tip": "היכנסו עם הפתיחה. שתייה משלושת הזרמים נחשבת חמדנית ומבטלת את הברכה.", "map": "34.9949,135.7850" },
     { "time": "09:00", "name": "Zuigudo — מנהרת הרחם (胎内めぐり)", "walk": "בתוך מתחם קיומיזו", "see": "מעבר תת-קרקעי חשוך לגמרי (¥100, נעליים בחוץ) — ממששים קיר של חרוזי תפילה עד 'אבן משאלה' מוארת, מסובבים ומאחלים.", "why": "טקס 'לידה מחדש' חושי ומדיטטיבי נדיר, ומפתיע.", "tip": "⚠️ נפתח רק ב-09:00 (וגם Kodai-ji) — מוקדם מדי בטיפוס השחר; דלגו או חזרו אחרי 09:00. אמתו שפועל ב-2026.", "map": "34.9950,135.7846" },
     { "time": "08:25", "name": "Sannenzaka (産寧坂)", "walk": "במורד מקיומיזו", "see": "סמטת מדרגות אבן מרוצפת עם machiya מעץ — בתי תה, קרמיקה, קטורת, מניפות, מתוקים. חינם.", "why": "המדרון המסורתי היפה ביותר בקיוטו, אזור שימור — חלום של צלמים ולובשי קימונו.", "tip": "אמונה: מעידה על המדרגות מביאה מזל רע — שימו לב לרגליים, במיוחד בקימונו/geta. לפני 09:00 הסמטה כמעט ריקה.", "map": "34.9962,135.7825" },
     { "time": "08:45", "name": "Ninenzaka (二年坂) + סטארבקס ב-machiya", "walk": "ממשיך במורד", "see": "עוד רחוב machiya מרוצף יפהפה. סטארבקס Ninenzaka — הראשון בעולם עם חדרי טטאמי, ב-machiya בן מאה.", "why": "המשך המדרון היפה; הסטארבקס הוא צילום/הפסקה ייחודי.", "tip": "הסטארבקס מתמלא מהר — בואו מוקדם או רק צלמו את החזית.", "map": "34.9970,135.7815" },
     { "time": "09:00", "name": "נשנוש — yatsuhashi ואוכל רחוב", "walk": "על Ninenzaka/Sannenzaka", "see": "טעמו yatsuhashi (ממתק המוצ׳י-קינמון של קיוטו) ב-Shogoin או Honke Nishio; גם סופט-מאצ׳ה, dango, korokke, senbei.", "why": "yatsuhashi הוא הממתק החתום של קיוטו — נא ('nama') עטוף סביב אדזוקי.", "tip": "רוב החנויות מציעות טעימות חינם — טעמו לפני שקונים. מזומן.", "map": "34.9970,135.7815" },
     { "time": "09:15", "name": "פגודת Yasaka / Hokan-ji (八坂の塔)", "walk": "במורד אל Yasakadori", "see": "פגודת 5 הקומות הממוסגרת בקצה הרחוב המשופע, גגות machiya מקדימה — הצילום החתום של היגאשיאמה.", "why": "הצילום האייקוני של הרובע; הפנים נפתחים לעתים נדירות בלבד — הנוף החיצוני הוא הפרס.", "tip": "צלמו במעלה Yasakadori במבט מטה על הפגודה. אור בוקר ומעט אנשים.", "map": "34.9981,135.7803" },
     { "time": "09:30", "name": "מקדש Kodai-ji (高台寺)", "walk": "מעט צפונה", "see": "מקדש זן (1606) שהקימה Nene, אלמנת הידיושי, לזכרו. גנים יבשים ובריכה, חורש במבוק, אמנות לכה. ¥600. פתיחה 09:00.", "why": "משקל-נגד מעודן ושקט הרבה יותר מהמדרונות העמוסים, ספוג בסיפור הידיושי-Nene.", "tip": "אם התחלתם 07:30 תגיעו סביב הפתיחה. Entoku-in הסמוך הוא תוספת יפה עם כרטיס משולב.", "map": "34.9998,135.7808" },
     { "time": "09:50", "name": "Ishibei-koji (石塀小路) — הסמטה הנסתרת", "walk": "מ-Nene-no-Michi", "see": "סמטת אבן מרוצפת מתפתלת עם פונדקים ובתי תה — אחת היפות והשקטות בקיוטו.", "why": "מרגיש כמו כניסה לקיוטו של טרום-המלחמה; כמעט בלי קהל.", "tip": "מגורים ופונדקים יוקרתיים — דברו בשקט, צילום אורחים/כניסות לא רצוי, בלי חצובה. הכניסה קלה לפספס.", "map": "35.0007,135.7805" },
     { "time": "10:05", "name": "Nene-no-Michi (ねねの道)", "walk": "רחוב מרוצף רחב", "see": "הרחוב האבני היפה על שם Nene, מחבר את Kodai-ji צפונה — ריקשות, פנסים, בוטיקים.", "why": "'רקמת החיבור' החיננית של הרובע — טיול קל ויפה ממקדש לפארק.", "tip": "רצועת צילום קימונו מובחרת, נעים גם כשהקהל מתעבה.", "map": "35.0008,135.7810" },
     { "time": "10:15", "name": "פארק Maruyama (円山公園)", "walk": "צפונה", "see": "הפארק הציבורי העתיק בקיוטו (1886), עם עץ הדובדבן הבוכה המפורסם במרכזו. חינם, פתוח תמיד.", "why": "הפוגה ירוקה ורגועה עם בריכות ובתי תה בין רובע המקדשים למקדש יאסאקה.", "tip": "בסוף ספטמבר אין פריחה — אבל זו נשימה שקטה ורקע קימונו נחמד.", "map": "35.0033,135.7817" },
     { "time": "10:30", "name": "מקדש Yasaka (八坂神社) → גיון", "walk": "בקצה התחתון", "see": "המקדש האדום בתחתית הרובע, שער המגן של גיון. השער המערבי נפתח ישר אל Shijo וגיון.", "why": "פינאלה תוססת שמעבירה בצורה חלקה אל רובע הגיישה — וקרוב ל-MAIKOYA לאחה״צ.", "tip": "צאו דרך שער Romon המערבי אל Shijo לצילום קלאסי ולתחבורה נוחה.", "map": "35.0036,135.7785" }
    ],
    "special": [
     "🐈 Ishibei-koji — סמטת האבן הנסתרת, השקטה והאווירתית ביותר.",
     "🗼 צילום פגודת Yasaka במורד Yasakadori — הצילום החתום של היגאשיאמה.",
     "💧 מפל Otowa — שתו מזרם אחד בלבד (אריכות ימים / הצלחה / אהבה); שלושתם = חמדנות.",
     "🍵 סטארבקס בחדרי טטאמי — הראשון בעולם, ב-machiya בן מאה.",
     "🕯️ Zuigudo — מעבר 'רחם בודהה' חשוך לגמרי (¥100), טקס לידה-מחדש.",
     "⚠️ מקדש Jishu (אבני האהבה) סגור לשיפוץ מ-2022 בלי תאריך פתיחה — אל תבנו עליו."
    ]
   },
   {
    "id": "den-den",
    "date": "2026-09-28",
    "city": "Osaka",
    "area": "דן דן טאון",
    "emoji": "🎮",
    "title": "דן דן טאון (Nipponbashi) — האקיהברה של אוסקה",
    "subtitle": "אחה״צ · ~9 תחנות · 15:00–16:45 (עזבו לסומו 17:00)",
    "intro": "מכת האוטאקו של מערב יפן — היסטורית רובע חשמל, היום אנימה, מנגה, פיגורות, רטרו-גיים ובתי קפה של משרתות. שני צירים מקבילים: Sakai-suji (החנויות הגדולות) ו-Ota Road (הרצועה האנימית הצפופה). רגוע ופחות תיירי מאקיהברה, ולעתים במחירי יד-שנייה טובים יותר. נכנסים מהצפון, יורדים ב-Sakai-suji, וחוזרים צפונה ב-Ota Road.",
    "meta": {
     "duration": "~1.5–2 שעות",
     "distance": "~1.5–2 ק״מ, שטוח",
     "start": "מ-Namba/Nipponbashi — נכנסים מהקצה הצפוני",
     "getThere": "~10 דק׳ הליכה דרומה מ-Namba/Dotonbori",
     "end": "חזרה צפונה ל-Namba לקראת הסומו והערב בדוטונבורי",
     "cost": "שיטוט ברחובות חינם; ההוצאה היא קניות אופציונליות (גאצ'אפון ~¥300–500 לסיבוב, משחקי רטרו/פיגר בסופר פוטטו נוטים להיות יקרים). קפה מיידים Maidreamin באוטה רואד: כניסה ¥880 + הזמנה אחת חובה, סה\"כ ~¥2,000–3,500 לאדם עם צילום. הגעה מנמבה ברגל (~10 דק'), בלי צורך במונית.",
     "luggage": "יום ראשון באוסקה: המזוודה הגדולה כבר בOnyado Nono Namba (הגיעה היום), משאירים אותה נעולה במלון ויוצאים עם דייפאק + כרטיס ICOCA. Den Den Town במרחק הליכה מהמלון.",
     "meal": "קפה מיידים Maidreamin באוטה רואד לסיום: אומורייסו מצויר או פרפה עם מופע, ~¥2,000–3,000 לאדם (כניסה + הזמנה). לחלופין כאמן/טאקויאקי ברחוב בדרך חזרה לדוטונבורי, ~¥600–900 לאדם."
    },
    "stops": [
     { "time": "15:00", "name": "Animate + Melonbooks (אנימייט)", "walk": "בקצה הצפוני של Ota Road", "see": "רשת סחורת האנימה הגדולה ביפן — מנגה, מרצ׳, כרטיסים. בקומה 4 של אותו בניין: Melonbooks (דוג׳ינשי).", "why": "שער הכניסה ל-Ota Road והכי טוב לסחורת עונה נוכחית. Melonbooks לתוכן אינדי/מעריצים עמוק.", "tip": "התחילו כאן להתמצאות — Ota Road יורד דרומה מהפינה. אזורי R-18 בקומות עליונות, בלי צילום.", "map": "34.6620,135.5045" },
     { "time": "15:20", "name": "K-Books Nipponbashi", "walk": "אזור Ota Road", "see": "סחורת אנימה יד-שנייה, קומות לפי פאנדום — מרצ׳ דמויות, סלים, דוג׳ינשי, פריטי איידול.", "why": "מצוין לסחורת דמויות יד-שנייה ולסדרה ספציפית, מסודר היטב.", "tip": "חזק במרצ׳ לקהל מגוון וסדרות שונן מיינסטרים כאחד.", "map": "34.6615,135.5043" },
     { "time": "15:35", "name": "Super Potato — סניף Ota Road (רטרו-גיים)", "walk": "על Ota Road", "see": "רשת הרטרו-גיים האגדית — Famicom, Super Famicom, PC Engine, קונסולות נדירות. פתוח (הסניף בנמבה נסגר; זה הפעיל).", "why": "אוצר נוסטלגי — חובה לחובבי רטרו. פחות עמוס מאקיהברה.", "tip": "מזומן. פריטים בקופסה יקרים, מחסניות בודדות זולות. צילום פנימי לרוב לא רצוי — שאלו.", "map": "34.6610,135.5048" },
     { "time": "15:55", "name": "Super Kids Land (Joshin) — גאנפלה ודגמים", "walk": "דרומה ב-Sakai-suji", "see": "מגה-חנות התחביבים הגדולה ביפן (Joshin), ~5 קומות: Gunpla, דגמים בקנה מידה, פיגורות, רכבות. שלט Gundam ענק.", "why": "העוגן הדרומי של המסלול. אם אתם על Gunpla או דיורמות — זו ספינת האם.", "tip": "דלפק פטור-ממס עם דרכון. מלאי Gunpla מתחלף מהר — פריטי חלום נגמרים.", "map": "34.6595,135.5060" },
     { "time": "16:15", "name": "Volks (בורקס)", "walk": "Sakai-suji, לכיוון חזרה", "see": "בניין תחביבים שלם: פיגורות, garage kits, דגמים, ובובות Dollfie מפורסמות.", "why": "אחת מתצוגות המותג הגדולות ב-Nipponbashi; קומות ה-Dollfie מרהיבות גם בלי לקנות.", "tip": "תחנת פיגורות טובה בדרך חזרה צפונה.", "map": "34.6600,135.5060" },
     { "time": "16:30", "name": "Mandarake Grand Chaos (まんだらけ)", "walk": "אמצע Sakai-suji", "see": "אמפוריום יד-שנייה גדול — מנגה, פיגורות וינטג׳, צעצועי רטרו, סלים, דוג׳ינשי, על פני קומות.", "why": "מבוך אספנות — צעצועי שוֹווה וינטג׳, מנגה אזלת, פיגורות נדירות. התחנה הכי טובה ל'אוצר שלא ידעתם שרציתם'.", "tip": "קונים ומוכרים; תמחור הוגן-לאספן. קל לאבד כאן 45 דק׳. צילום מוגבל בחלקים.", "map": "34.6635,135.5060" },
     { "time": "16:45", "name": "רטרו-גיים ו-Surugaya", "walk": "רחובות צדדיים", "see": "Retro TV Game Revival (Famicom/Dreamcast) ו-Surugaya (משחקים/מנגה/פיגורות/כרטיסים יד-שנייה) — רוטציית מלאי שונה מ-Super Potato.", "why": "השלישייה הרטרו של Nipponbashi; שווה השוואת מחירים למחסנית שאתם מחפשים.", "tip": "מזומן. בדקו קונסולות ידניות לפני קנייה. ('A-Too' כנראה נסגר — לא אומת ל-2026.)", "map": "34.6605,135.5050" },
     { "time": "16:55", "name": "Yellow Submarine + קירות גאצ׳פון", "walk": "אזור Ota Road", "see": "Yellow Submarine (TCG/משחקי לוח: Magic, Pokémon, Yu-Gi-Oh) ומסדרונות מכונות גאצ׳פון — מאות מכונות.", "why": "הגאצ׳פון הוא מזכרת זולה וכיפית; Yellow Submarine לשחקני קלפים.", "tip": "החזיקו מטבעות ¥100/¥500. גם Lashinban ו-Surugaya בסביבה.", "map": "34.6610,135.5050" },
     { "time": "", "name": "סיום בבית קפה של משרתות (אופציונלי)", "walk": "Ota Road/Sakai-suji", "see": "בתי קפה תמטיים כמו Maidreamin, Parlante, Cocha.", "why": "קאפסטון כיפי לחוויית האוטאקו של אוסקה.", "tip": "רק אם נשאר זמן — עזבו עד ~16:40 כדי להגיע לשערי הסומו (17:00). צילום משרתות אסור, מזומן.", "map": "34.6615,135.5048" }
    ],
    "special": [
     "🛣️ Ota Road (אוטארוד) — הרצועה האנימית האמיתית, פחות ברורה מ-Sakai-suji ושווה הליכה איטית.",
     "🕹️ שלישיית הרטרו: Super Potato (Ota Road) + Retro TV Game + Surugaya — קראולּ רטרו עצמאי.",
     "🎰 קירות הגאצ׳פון — מסדרונות מכונות קפסולה, ריגוש זול וחתום.",
     "❌ Toranoana נסגר (2022) — אל תחפשו אותו. Melonbooks מכסה את נישת הדוג׳ינשי.",
     "💴 מזומן לחנויות יד-שנייה; דלפקי פטור-ממס בחנויות הגדולות (Joshin/Animate) מעל ¥5,000 — הביאו דרכון.",
     "📅 פסטיבל Street Festa (קוספליי) הוא באביב (מאי) — לא בספטמבר. יום שני = שקט ונוח לדפדוף."
    ]
   },
   {
    "id": "dotonbori",
    "date": "2026-09-28",
    "city": "Osaka",
    "area": "דוטונבורי ונמבה",
    "emoji": "🌃",
    "title": "דוטונבורי ונמבה — ניאון ו'קוּאִידָאוֹרֶה'",
    "subtitle": "ערב · ~11 תחנות · 20:15–23:00 (אחרי הסומו)",
    "intro": "בירת אוכל הרחוב של יפן ברוח ה-kuidaore ('לאכול עד שתיפול'): תעלת ניאון, שלטי תלת-ממד ענקיים, ואיש ה-Glico המפורסם. אחרי הסומו — צוללים לתעלה, אוכלים takoyaki ו-kushikatsu, ובורחים לרגע לסמטת Hozenji האבנית הישנה. באוסקה מותר יותר לאכול-תוך-כדי-הליכה מאשר בקיוטו.",
    "meta": {
     "duration": "~3 שעות (אכילה וניאון)",
     "distance": "~1.5–2 ק״מ, שטוח (הרבה הלוך-חזור)",
     "start": "מתחנת Namba — צפונה אל תעלת דוטונבורי",
     "getThere": "אחרי הסומו (מסתיים ~20:00): קו/הליכה ל-Namba (~10–15 דק׳)",
     "end": "צילומי ניאון אחרונים; דוטונבורי תוססת הרבה אחרי חצות (Glico דולק עד 24:00)",
     "cost": "כמעט הכל חינם: הגליקו, גשר אביסובאשי, טיילת התעלה, הוזנג'י יוקוצ'ו והמקדש (מטבע לפודו ~¥5–100). תשלום רק על מה שבוחרים: אופנוע הענק אביסו טאואר ¥1,000 (מזומן בלבד), שייט טונבורי ~¥2,000. אין צורך במונית - הכל הליכה מתחנת נאמבה.",
     "luggage": "התיישבתם היום ב-Onyado Nono נאמבה: המזוודה הגדולה נשארת נעולה במלון, יוצאים לסיבוב הלילי רק עם דייפק וכרטיס ICOCA.",
     "meal": "קרב טעימות אמיתי: טאקויאקי מהדוכנים (~¥600), קושיקאטסו ב-Kushikatsu Daruma (~¥1,500) ולסגור עם ראמן ב-Kinryu הדרקון (~¥900). כ-¥3,000–4,000 לאדם על כל הרצף."
    },
    "stops": [
     { "time": "20:15", "name": "גשר Ebisubashi + איש ה-Glico (戎橋)", "walk": "מ-Namba צפונה בארקייד Ebisubashi-suji", "see": "עמדו על הגשר בפוזת הניצחון של איש ה-Glico, השלט מאחוריכם. חינם.", "why": "חברת Glico (יצרנית Pocky) הציבה את השלט ב-1935; הרץ מסמל 'אנרגיה ובריאות'. הגרסה הנוכחית LED — הצילום הניאוני החתום של אוסקה.", "tip": "הגשר צפוף — לצילום נקי, מצד הארקייד או מטיילת התעלה ממזרח.", "map": "34.6687,135.5013" },
     { "time": "20:25", "name": "תעלת דוטונבורי (道頓堀)", "walk": "רדו לטיילת הנהר", "see": "מסדרון הניאון של שלטי התלת-ממד הענקיים, השתקפויות על המים ודוכני אוכל צפופים.", "why": "רוח ה-kuidaore של אוסקה בשיא הצפיפות בלילה.", "tip": "הלכו את הרצועה לכיוון אחד ואת טיילת התעלה בחזרה — שני נופים. הכי טוב אחרי חושך מלא.", "map": "34.6685,135.5030" },
     { "time": "20:35", "name": "הסרטן הענק של Kani Doraku (かに道楽)", "walk": "מערבית ל-Ebisubashi", "see": "סרטן מכני ברוחב ~8 מ׳ עם רגליים ועיניים נעות מעל הכניסה (מ-1960). קייסקי סרטן ~¥3,000–8,000, או רק צילום.", "why": "השלט השני הכי מצולם בדוטונבורי.", "tip": "חכו רגע — הרגליים זזות לצילום דינמי.", "map": "34.6686,135.5020" },
     { "time": "20:45", "name": "צביר ה-takoyaki — אוכלים כאן", "walk": "על הרצועה", "see": "אוסקה המציאה takoyaki (כדורי תמנון). דוכנים מאומתים: Wanaka, Kukuru, Juhachiban, Acchichi. ~¥500–700 ל-8.", "why": "הלב של אוכל הרחוב האוסקאי, נעשה מולכם.", "tip": "בוערים חמים — המרכז נמס. חכו ~דקה לפני הביס כדי לא להיכוות. אכילה בעמידה בדוכן נורמלית.", "map": "34.6688,135.5015" },
     { "time": "21:05", "name": "Kinryu Ramen — הדרקון (金龍ラーメン)", "walk": "על הרצועה", "see": "דרקון ירוק-זהב מטפס על הבניין. ראמן טונקוצו-סויה זול ~¥800, פתוח 24 שעות, תוספות חינם.", "why": "השלט מבין ה-3 המובילים בדוטונבורי, ומוסד לילה אוסקאי אמיתי.", "tip": "מזמינים במכונת הכרטיסים בכניסה; בר התוספות החינמי הוא המהלך המקומי.", "map": "34.6686,135.5027" },
     { "time": "21:20", "name": "Kushikatsu Daruma — המקור (串カツだるま)", "walk": "על הרצועה", "see": "Daruma ייסד את המנה ב-1929. שיפודים מטוגנים (בשר, ירק, ים) ~¥130–300, בטבילה ברוטב משותף.", "why": "המקור של kushikatsu — עם בירה קרה.", "tip": "⚠️ הכלל: אסור לטבול פעמיים ברוטב המשותף! רוצים עוד — אספו עם הכרוב החינמי. (בסניף דוטונבורי לרוב בקבוקי סחיטה אישיים.)", "map": "34.6690,135.5010" },
     { "time": "21:40", "name": "Don Quijote + גלגל הענק (えびすタワー)", "walk": "בקצה המזרחי של התעלה", "see": "מגה-חנות צהובה על התעלה, עם גלגל ענק אליפטי (הראשון בעולם) בחזית. Donki פתוח עד מאוחר למזכרות.", "why": "צילום מואר בולט מהתעלה.", "tip": "⚠️ אמתו בערב אם הגלגל פועל (היו הפסקות תפעול). ממילא צילום יפה.", "map": "34.6691,135.5033" },
     { "time": "21:55", "name": "Hozenji Yokocho (法善寺横丁) — סמטת אוסקה הישנה", "walk": "בלוק דרומה מהניאון", "see": "סמטת אבן מרוצפת וטחובה באורך ~80 מ׳, מוארת פנסים, עם 60+ ברים ומסעדות זעירים. מרגישה בת 200 שנה.", "why": "הפנינה הנסתרת — שקטה, קולנועית, ושם מקומיים באמת שותים ואוכלים.", "tip": "בואו כשהפנסים דולקים. אינטימי — היו מתחשבים, הרבה ברים זעירים.", "map": "34.6680,135.5025" },
     { "time": "22:10", "name": "מקדש Hozenji + Mizukake Fudo (水掛不動)", "walk": "בתוך הסמטה", "see": "מקדש קטן עם פסל Fudo Myoo מכוסה כולו טחב ירוק — משפריצים עליו מים אחרי תפילה ('Mizukake' = מושפרץ במים). 24 שעות, חינם.", "why": "טקס לזוגות — הדמויות נחשבות למביאות מזל בזיווג ובאהבה. מושלם לכם.", "tip": "יצקו מים על הפסל (מצקות מסופקות), אחלו משאלה יחד. רגע שקט של 5 דק׳.", "map": "34.6681,135.5027" },
     { "time": "22:25", "name": "Sennichimae Doguyasuji (千日前道具屋筋)", "walk": "מעט דרומה", "see": "ארקייד מקורה של חנויות סכיני שף, כלי מטבח ודגמי אוכל פלסטיק היפר-ריאליסטיים (מזכרות מצחיקות).", "why": "רחוב הכלים ההיסטורי — מחזיקי מפתחות סושי, מגנטי takoyaki.", "tip": "⚠️ רוב החנויות סוגרות ~18:00 — בשעה זו יהיה סגור. עברו לאווירת הארקייד; לקניות אמיתיות חזרו ביום.", "map": "34.6660,135.5040" },
     { "time": "22:40", "name": "שייט Tonbori / Amerikamura (אופציונלי)", "walk": "מזח ליד Don Quijote / מערבה", "see": "שייט Tombori 20 דק׳ מתחת לניאון (¥2,000, אחרון 21:00 — הקדימו), או Amerikamura מערבה לנייטקאפ צעיר וגרפיטי.", "why": "מהמים או משכונת הנוער — סיום שונה לערב.", "tip": "השייט האחרון ב-21:00 — עשו מוקדם או דלגו.", "map": "34.6720,135.4985" }
    ],
    "special": [
     "🏮 Hozenji Yokocho + Mizukake Fudo — הסמטה האבנית הישנה וטקס השפרצת המים לזוגות, הפינה הרומנטית והנסתרת.",
     "🏃 פוזת ה-Glico על גשר Ebisubashi — הצילום החתום של אוסקה.",
     "🦀 שלטי התלת-ממד הענקיים — הסרטן של Kani Doraku, הדרקון של Kinryu, Kuidaore Taro.",
     "🍢 Kushikatsu Daruma — כלל 'אסור לטבול פעמיים' ברוטב המשותף; אספו עם כרוב.",
     "❌ פוגר הפוגו הענק של Zuboraya נעלם — הרשת נסגרה סופית ב-2020. אל תחפשו אותו בדוטונבורי.",
     "💴 מזומן לדוכנים ולברים הקטנים. באוסקה אכילה-תוך-הליכה מקובלת יותר מקיוטו (אך אכילה בדוכן הכי מסודרת)."
    ]
   },
   {
    "id": "nara",
    "date": "2026-09-29",
    "city": "Osaka",
    "area": "נארה",
    "emoji": "🦌",
    "title": "נארה — הצבאים הקדים והבודהה הענק",
    "subtitle": "טיול יום מאוסקה · ~9 תחנות · הגעה ~10:00",
    "intro": "הבירה הקבועה הראשונה של יפן (710–794): ~1,400 צבאי סיקה פראיים משוטטים חופשי ומשתחווים לקבל קרקר, מקדש עם הבודהה הברונזה הענק (15 מ׳), ושבילי פנסי אבן ביער. הצבאים נחשבים לשליחים קדושים של האלים. יום מלא של תרבות, טבע וחיות — ובערב חוזרים לאוסקה ל-Doyama-cho.",
    "meta": {
     "duration": "יום כמעט מלא (~10:00–17:30)",
     "distance": "~6–8 ק״מ",
     "start": "תחנת Kintetsu-Nara (הכי קרוב לפארק)",
     "getThere": "מאוסקה: Kintetsu Nara Line מ-Namba, Kyuko (מהיר) ~36–40 דק׳, ¥680",
     "end": "Naramachi ואז חזרה לתחנה, רכבת לאוסקה + Doyama-cho בערב",
     "cost": "כניסות: קופוקו-ג'י ¥500, טודאי-ג'י דאיבוצו ¥800, קסוגה טאישה פנימי ¥700, יושיקיאן חינם עם דרכון זר, שיקה-סמבה (קרקרים לצבאים) ¥200; רכבת קינטצו נמבה↔נארה ¥680 לכיוון (¥1,360 הלוך-חזור). סה\"כ יום ~¥2,700 לאדם + הרכבת; מוניות לא נחוצות, הכל בהליכה בפארק.",
     "luggage": "טיול יום מאוסקה: השאירו את המזוודה הגדולה נעולה במלון Onyado Nono Namba וקחו רק דייפק + כרטיס ICOCA. אם צריך, לוקרים בתחנת קינטצו-נארה ~¥400–700.",
     "meal": "קחיצת מוצ'י יומוגי טרייה ב-Nakatanidou ברחוב Higashimuki (~¥160 לחתיכה, ההופעה של כתישת המוצ'י שווה עצירה), ולארוחה אמיתית קאקינוהא-זושי (סושי בעלה אפרסמון) ב-Hiraso ליד אגם סרוסאווה, ~¥1,500–2,000 לאדם."
    },
    "stops": [
     { "time": "10:00", "name": "רחובות Higashimuki ו-Sanjo-dori", "walk": "מהתחנה דרומה", "see": "ארקייד מקורה (Higashimuki) שמוביל דרומה מהתחנה אל Sanjo-dori — אוכל, מזכרות, מתוקי kudzu, קפה.", "why": "הטעימה הראשונה של נארה; קחו warabimochi או חטיף לפני הפארק.", "tip": "⚠️ כאן נמצא Nakatanidou (חבטת המוצ׳י המהירה) — אבל סגור היום (שלישי). קנו מתוקים במקום אחר ברחוב.", "map": "34.6828,135.8296" },
     { "time": "10:30", "name": "מקדש Kofuku-ji (興福寺)", "walk": "5 דק׳ מזרחה", "see": "מקדש אונסק״ו. אולם הזהב המרכזי ¥500, מוזיאון האוצר ¥700 (פסל Ashura המפורסם). המגרש חינם.", "why": "מקדש המייסד של שבט Fujiwara החזק; הפגודה בת 5 הקומות היא השנייה בגובהה ביפן.", "tip": "⚠️ הפגודה בשיפוץ ומכוסה פיגומים (2023–2034) — לא תראו אותה. המוזיאון הוא השיא אם משלמים על דבר אחד.", "map": "34.6825,135.8318" },
     { "time": "11:00", "name": "פארק נארה + הצבאים המשתחווים (奈良公園)", "walk": "מזרחה אל המדשאות", "see": "~1,400 צבאי סיקה פראיים חופשיים. קנו shika-senbei (קרקרי צבאים) מדוכנים מורשים — ¥200 לצרור. הצבאים משתחווים לבקש.", "why": "הצבאים מוגנים כ'shinroku' — שליחים קדושים של האלים (לפי האגדה, אל קאסוגה הגיע רכוב על צבי לבן). ההשתחוויה נלמדת — השתחוו בחזרה.", "tip": "קנו קרקרים רק כשמוכנים להאכיל מיד. אל תקניטו ואל תצלמו תוך מניעת קרקר — אז הם נושכים/מנגחים.", "map": "34.6851,135.8430" },
     { "time": "12:00", "name": "Todai-ji — שער Nandaimon + הבודהה הגדול (東大寺)", "walk": "צפונה בפארק", "see": "שער Nandaimon עם שני שומרי Nio בגובה 8.4 מ׳ (חינם). אולם הבודהה הגדול (Daibutsuden) ¥800 — בודהה ברונזה 15 מ׳. פתוח 7:30–17:30.", "why": "היה היסטורית הבניין העצי הגדול בעולם; מונומנט מכונן של תקופת נארה והבודהיזם היפני.", "tip": "מאחורי הבודהה — עמוד עם חור בגודל נחיר הבודהה; זחילה דרכו מביאה הארה/מזל. אומת פעיל ב-2026.", "map": "34.6890,135.8398" },
     { "time": "13:30", "name": "Nigatsu-do (二月堂) — תצפית", "walk": "5–8 דק׳ בעלייה מאחורי Todai-ji", "see": "אולם על גבעה עם מרפסת עץ — הנוף הפנורמי הכי טוב בנארה: גגות, חופת הפארק, והרי Ikoma. חינם, 24 שעות.", "why": "אתר פסטיבל האש Omizutori בן 1,250 שנה; שקט הרבה יותר מהאולם הראשי ותצפית חינמית מצוינת.", "tip": "לכו בשביל פנסי האבן האווירתי בין Todai-ji ל-Nigatsu-do. נקודת שקיעה יפה אם משתהים.", "map": "34.6894,135.8442" },
     { "time": "14:00", "name": "Kasuga Taisha (春日大社)", "walk": "~15 דק׳ דרומה ביער", "see": "מקדש שינטו אדום ביער. מגרש חוץ חינם; האזור הפנימי ¥700. ~3,000 פנסי ברונזה ואבן. פתוח 6:30–17:30.", "why": "~3,000 פנסים שנתרמו במשך מאות שנים; מסדרונות הפנסים האפלים הם הסימן החתום. מקדש המגן של נארה.", "tip": "שביל הגישה מרוצף פנסי אבן טחובים וצבאים — אווירתי גם בלי לשלם. שלמו ¥700 לפנסי הברונזה במסדרון החשוך.", "map": "34.6819,135.8483" },
     { "time": "15:00", "name": "גן Yoshikien (吉城園)", "walk": "מערבה חזרה לכיוון התחנה", "see": "גן תלת-חלקי (בריכה, טחב, גן תה). חינם למבקרים זרים (הראו דרכון), 9:00–17:00, פתוח שלישי.", "why": "גן מסורתי שליו ולא עמוס — ניגוד רגוע להמון הצבאים.", "tip": "⚠️ הגן הסמוך Isuien סגור בימי שלישי — לכן Yoshikien הוא הגן היום (וחינם).", "map": "34.6862,135.8368" },
     { "time": "15:45", "name": "Naramachi + Koshi-no-ie (ならまち)", "walk": "דרומה מ-Sanjo-dori", "see": "רובע הסוחרים העתיק — machiya מסורתיים, בתי קפה, סאקה, מתוקי kudzu, וקמעות 'migawari-zaru' (קוף אדום). Koshi-no-ie חינם, פתוח שלישי.", "why": "סמטאות אווירתיות שמראות איך חיו תושבי נארה; קופי ה'שעיר לעזאזל' האדומים סופגים מזל רע במקומכם.", "tip": "סיימו כאן בקפה/מתוקים וקניות, ואז חזרה צפונה ל-Kintetsu-Nara (~10–12 דק׳).", "map": "34.6790,135.8290" },
     { "time": "16:45", "name": "סיום אוכל ב-Sanjo-dori", "walk": "בחזרה לתחנה", "see": "ביסים אחרונים: kakinoha-zushi (סושי בעלה אפרסמון, מאכל נארה), מתוקי kudzu, Nara-zuke (חמוצי שמרי סאקה), וסאקה.", "why": "נארה נחשבת לעריסת הסאקה המעודן; kakinoha-zushi הוא הדגל המקומי.", "tip": "מזומן — הרבה דוכנים ומקדשים קטנים מקבלים רק מזומן.", "map": "34.6820,135.8296" }
    ],
    "special": [
     "🦌 הצבאים המשתחווים — שליחים קדושים; השתחוו בחזרה, האכילו מהר, והסתירו קרקרים עודפים בתיק.",
     "👃 עמוד הנחיר ב-Todai-ji — זחילה דרך החור מביאה הארה/מזל (אומת פעיל ב-2026).",
     "🏮 3,000 הפנסים של Kasuga Taisha — מסדרונות אפלים מרהיבים באזור הפנימי.",
     "🌄 Nigatsu-do — הנוף הפנורמי החינמי הכי טוב בנארה, שקט ויפה.",
     "⚠️ סגירות יום שלישי (29.9): Nakatanidou (חבטת מוצ׳י) ו-Isuien סגורים. Kofuku-ji פגודה בפיגומים עד 2034."
    ]
   },
   {
    "id": "doyama",
    "date": "2026-09-29",
    "city": "Osaka",
    "area": "דויאמה-צ׳ו",
    "emoji": "🏳️‍🌈",
    "title": "דויאמה-צ׳ו — הרובע הגאה של אוסקה",
    "subtitle": "ליל שלישי שקט · סיבוב ברים · הגעה ~21:00",
    "intro": "אזור חיי הלילה הלהט״בי הראשי של אוסקה, ליד Umeda — מרוכז וקטן יותר מ-Ni-chome של טוקיו, אבל תוסס וקז׳ואלי, עם ~100+ ברים גאים בבניינים צפופים. ליל שלישי שקט = אווירה אינטימית ושיחתית יותר מהסופ״ש. מגיעים מסיור האוכל בשינסקאי, מתחילים בבר ידידותי לזרים, ונותנים להמלצות להוביל.",
    "meta": {
     "duration": "לילה",
     "distance": "מרוכז — דקות בין הברים",
     "start": "ליד Umeda/Higashi-Umeda, צפונית ל-Ohatsu Tenjin",
     "getThere": "מדוטונבורי (סיום סיור האוכל, ~20:30): Midosuji לאומדה ~10 דק׳",
     "end": "סיום ב-Eagle Osaka או G Physique",
     "cost": "כניסה זולה: do with cafe ¥300 דמי מופע דראג (שלישי) + סטים ¥1,000–2,000; רוב הברים הקטנים ¥500–1,000 דמי מקום/משקה ראשון (~¥1,000–1,500 לבר); Eagle Osaka כניסה חינם א׳–ה׳ (cashless); רכבת משינסקאי לאומדה ~¥240 ICOCA. תקציב לילה ריאלי ~¥5,000–8,000 לאדם.",
     "luggage": "התיק הגדול נשאר נעול ב-Onyado Nono Namba כל היום (גם בטיול היום לנארה); לסיבוב הברים יוצאים קלים — רק ארנק, מזומן וכרטיס ICOCA, בלי תיק.",
     "meal": "אכלו-וצפו ב-do with cafe: סט ארוחה (¥1,000 רגיל / ¥1,500 / ¥2,000 פרימיום) עם מופע דראג ב-21:00, פלוס ¥300 דמי מופע — מנה חמה ובידור באותו מקום, ~¥1,500–2,500 לאדם."
    },
    "stops": [
     { "time": "21:00", "name": "do with cafe — מופע דראג מוקדם", "walk": "מרכז דויאמה", "see": "בר-מסעדה עם מופע דראג כל לילה. פורמט דינר-שואו, 20+.", "why": "מבטיח בידור דראג גם בליל שלישי שקט, כשמסיבות המועדונים מתות. עשו מוקדם — סוגר ~24:00 באמצע השבוע.", "tip": "דמי שולחן; תמחור גבוה יותר (פורמט מופע). היסטוריה של 20+ שנה.", "map": "34.7031,135.5028" },
     { "time": "21:45", "name": "FrenZ-FrenZY — פתיחה בינלאומית", "walk": "דקות", "see": "בר מעורב/בינלאומי, קריוקי ומשחקים. בבעלות זר (Sully), צוות דובר אנגלית.", "why": "הבר הכי ידידותי לזרים בדויאמה, לרוב רוב לא-יפני. נחיתה רכה ונקודת התמצאות.", "tip": "מזומן ליתר ביטחון. ⚠️ שעות שלישי לא ודאיות — בדקו מראש או החזיקו גיבוי.", "map": "34.7031,135.5028" },
     { "time": "22:15", "name": "Village — מעורב ומרווח", "walk": "דקות", "see": "בר-מועדון מרווח, מנוהל בידי דמות מוכרת בסצנה. כל המגדרים/נטיות, ידידותי לזרים, מעט אנגלית.", "why": "שיחה קלה, קהל מעורב, אנרגיה טובה באמצע שבוע.", "tip": "מופעי דראג בסופ״ש בלבד — תפספסו בשלישי, אבל הבר עצמו נהדר לליל חול. מזומן.", "map": "34.7031,135.5028" },
     { "time": "22:45", "name": "Grand Slam — ריקוד וקריוקי", "walk": "דקות", "see": "בר ריקוד/קריוקי מעורב, נפתח 2009. רוב זרים, צוות מחו״ל, אנגלית. קריוקי מוקדם, ריקוד אחרי חצות.", "why": "התחנה הטבעית 'להניע את הערב', מסבירת פנים לתיירים.", "tip": "⚠️ דיווחי יום-סגירה סותרים — אמתו שפתוח בשלישי לפני שבונים עליו. מזומן.", "map": "34.7031,135.5028" },
     { "time": "23:30", "name": "Eagle Osaka — רב-קומתי, ידידותי לחול", "walk": "דקות", "see": "נפתח 2024, רב-קומתי (רחבה + בר-עמידה + לאונג׳ תמטי). מאוד קל לזרים, cashless. א׳–ה׳ 18:00–02:00, כניסה חינם ב׳–ה׳.", "why": "אופציה מודרנית, פתוחה ונוחה לליל חול — סיום טוב.", "tip": "cashless. אם רוצים וייב דובים — Dungaree הסמוך (פתוח שלישי).", "map": "34.7031,135.5028" },
     { "time": "00:15", "name": "G Physique — נייטקאפ קז׳ואלי", "walk": "דקות", "see": "בר-דלפק/עמידה קז׳ואלי (לשעבר 'Physique Pride'), נפתח 1993. הבעלים Hideki אגדי בחביבותו. משקאות זולים, בלי כניסה.", "why": "מקום נייטקאפ רגוע במיוחד באמצע השבוע.", "tip": "ק1, בניין Sanyo-Kaikan (מעל Explosion). מזומן.", "map": "34.7031,135.5028" }
    ],
    "special": [
     "💴 מזומן מלך — רוב הברים הקטנים מזומן בלבד (Eagle Osaka הוא cashless). כספומטי קונביני ליד Umeda.",
     "🍶 דמי מקום/הזמנה ראשונה (¥500–1,000) נהוגים; חלק (FrenZY, G Physique) בלי כניסה. ~¥1,000–1,500 לבר.",
     "🤝 'תרבות ההיכרות' — הצוות ישמח להמליץ ולכוון לבר הבא; פשוט שאלו.",
     "📅 ליל שלישי שקט (29.9): ⚠️ Explosion סגור בימי שלישי. אמתו ש-FrenZY ו-Grand Slam פתוחים. גיבויים בטוחים לחול: Eagle Osaka, Village, G Physique.",
     "📸 שאלו לפני צילום — הרבה אורחים לא בחוץ של הארון; כבדו פרטיות."
    ]
   },
   {
    "id": "yanaka",
    "date": "2026-09-30",
    "city": "Tokyo",
    "area": "יאנאקה",
    "emoji": "🐈",
    "title": "יאנאקה — טוקיו הישנה שנשארה בזמן",
    "subtitle": "אחה״צ שיטמאצ׳י רגוע · ~9 תחנות",
    "intro": "רובע 'העיר התחתית' (shitamachi) ששרד את הפצצות מלה״ע ואת רעשי האדמה — סמטאות עץ, מקדשים, בית קברות מצל, מלאכת יד וחתולים בכל פינה. אחרי השינקנסן חזרה מאוסקה, זהו אחר-צהריים של 'טוקיו הישנה': מטיילים לאט, אוכלים ברחוב Yanaka Ginza, ומסיימים במנהרת טוריאי אדומה. יום רביעי נוח — כמעט הכול פתוח.",
    "meta": {
     "duration": "~3 שעות",
     "distance": "~3.5 ק״מ, שטוח",
     "start": "תחנת Nippori (JR Yamanote), יציאה מערבית — בקצה בית הקברות",
     "getThere": "ה-NOZOMI 358 נוחת בתחנת טוקיו ב-13:06. ישירות ליאנאקה: Tokyo→Nippori בקו Yamanote ~13 דק׳ (בתחנה ~13:25). אם קודם מניחים מזוודות ב-Tokyu Stay שינג'וקו: Tokyo→Shinjuku ~14 דק׳, הנחה, ואז Shinjuku→Nippori ~22 דק׳ — בתחנה ~14:15.",
     "end": "מקדש Nezu → תחנת Nezu (קו Chiyoda), לכיוון teamLab בטויוסו בערב",
     "cost": "רוב הרובע חינם: בית הקברות, מקדש טנו-ג'י והבודהה, SCAI (גלריה) ומקדש נזו עם מנהרת הטוריאי — כולם ללא תשלום. ההוצאה האמיתית היא אוכל: קרול ביאנאקה גינזה ~¥1,500–2,500 לאדם, וקפה קאיאבה ~¥1,500 (סנדוויץ' ביצה ¥1,000 + קפה ¥500). תחבורה ב-IC בלבד, בלי צורך במונית.",
     "luggage": "המזוודות נסעו איתכם ב-NOZOMI 358 (קרון 9, מושבי Oversized Baggage) והגיעו לתחנת טוקיו ב-13:06. הניחו אותן ב-Tokyu Stay שינג'וקו לפני שמתחילים, וצאו ליאנאקה עם דייפאק וכרטיס IC (סויקה) בלבד — לא סוחבים כלום בסמטאות. (הצ׳ק-אין ב-15:00, אבל אפשר להשאיר מזוודות בקבלה קודם.)",
     "meal": "חובה קפה קאיאבה (Kayaba Coffee) בבית מרחץ בן מאה שנה: סנדוויץ' הביצה החם המפורסם ¥1,000 + קפה ¥500, בערך ¥1,500 לאדם. אם יש תור — נשנשו לאורך יאנאקה גינזה (מנגו יאקיטורי, קרוקטים, גלידה) ~¥1,500."
    },
    "stops": [
     { "time": "13:40", "name": "בית הקברות של יאנאקה (谷中霊園) + קבר יושינובו", "walk": "מיציאת Nippori המערבית", "see": "בית קברות מצל ומרשים עם שדרת דובדבנים מרכזית (Sakura-dori). כאן קברו של Tokugawa Yoshinobu — השוגון האחרון של יפן. חינם.", "why": "טוקיו הישנה במיטבה השליו; תלולית הקבר הצנועה של השוגון שמסר את השלטון בשלום ב-1868.", "tip": "היכנסו דרך Sakura-dori מצד Nippori. בית קברות פעיל — בשקט.", "map": "35.7268,139.7690" },
     { "time": "14:00", "name": "מקדש Tenno-ji + הבודהה של יאנאקה (天王寺)", "walk": "בקצה בית הקברות", "see": "חצר שלווה עם בודהה ברונזה יושב שנוצק ב-1690. חינם.", "why": "בודהה בן 330 שנה שכמעט תמיד תמצאו לבד, אינטימי הרבה יותר מזה של קמאקורה.", "tip": "משתלב בקלות עם בית הקברות והבודהה בין Nippori לרחוב.", "map": "35.7275,139.7684" },
     { "time": "14:20", "name": "SCAI The Bathhouse — גלריה במרחץ ישן", "walk": "8 דק׳ מ-Nippori", "see": "גלריית אמנות עכשווית בתוך בית מרחץ ציבורי (sento) בן 200 שנה. חינם. שלישי–שבת 12:00–19:00 (סגור א׳/ב׳).", "why": "המבנה הכי טוב של 'קליפה ישנה, תוכן חדש' ביאנאקה — נכנסים מתחת לחזית האריחים המקורית אל קובייה לבנה.", "tip": "פתוח ברביעי. הציצו באתר בבוקר לוודא שאין החלפת תערוכה.", "map": "35.7202,139.7671" },
     { "time": "14:45", "name": "Kayaba Coffee (カヤバ珈琲)", "walk": "צמוד ל-SCAI", "see": "בית קפה רטרו במאצ׳יה עצית מ-1916, מגיש קפה מ-1938. הזמינו את ה-tamago sando (סנדוויץ׳ ביצה חם) וקפה טפטוף.", "why": "ה-kissaten הארכיטיפי של יאנאקה — נוסטלגי, עצי, ועדיין מצוין.", "tip": "פופולרי מאוד ולא מאפשר תור בחוץ — הזמינו מראש דרך האתר.", "map": "35.7211,139.7663" },
     { "time": "15:15", "name": "Yanaka Ginza (谷中銀座) — קראולּ אוכל", "walk": "צפונה", "see": "רחוב קניות רטרו עם ~70 חנויות: menchi-katsu וקרוקטים (Niku no Suzuki), יאקיטורי, taiyaki, סנבי צרוב, וסופגניות זנב-חתול (Shippoya).", "why": "הלב הפועם של יאנאקה השיטמאצ׳י — זול, טעים, עליז, ורווי במוטיב החתולים.", "tip": "אכלו תוך כדי הליכה; מזומן בדוכנים הקטנים. זו תחנת האוכל המרכזית.", "map": "35.7273,139.7666" },
     { "time": "15:45", "name": "Yuyake Dandan (夕やけだんだん) — מדרגות השקיעה + חתולים", "walk": "בקצה המזרחי של הרחוב", "see": "מדרגות אבן בראש Yanaka Ginza, מסגרת של כל הרחוב הרטרו למטה, ומקום מפגש של חתולי הרחוב. חינם.", "why": "צילום הפוסטר של יאנאקה — הרחוב הישן ממוסגר מלמטה, חתולים משתזפים.", "tip": "צילום יפה במורד המדרגות אל הרחוב, יפה גם באור יום (תעזבו לפני השקיעה בגלל teamLab).", "map": "35.7278,139.7671" },
     { "time": "16:00", "name": "חנויות מלאכה — Isetatsu / Matsunoya", "walk": "בסמטאות", "see": "Isetatsu: נייר chiyogami מודפס בחיתוכי עץ מסורתיים (מזכרת שטוחה ויפה). Matsunoya: כלי בית פשוטים ועמידים (סלים, מברשות).", "why": "אומנים אמיתיים שעובדים, לא מפעלי מזכרות — הצד המלאכתי של יאנאקה.", "tip": "Isetatsu הכי קל 'לקנות משהו יפה ונוח לאריזה'. פתוחים ברביעי.", "map": "35.7256,139.7645" },
     { "time": "16:15", "name": "עץ הארז ההימלאי + מאפיית Mikado", "walk": "דרומה לכיוון Nezu", "see": "ארז הימלאי בגובה ~20 מ׳ שמתנשא מעל צומת של 5 סמטאות, ומאפיית Mikadoya לרגליו. חינם.", "why": "'הפינה של יאנאקה הישנה' המובהקת — עץ ענק, סמטאות מסתבכות, מאפייה זעירה.", "tip": "קחו לחם/מאפה ישן-סגנון ב-Mikadoya מתחת לעץ.", "map": "35.7245,139.7639" },
     { "time": "16:30", "name": "מקדש Nezu (根津神社) — מנהרת הטוריאי", "walk": "10–15 דק׳ מ-Yanaka Ginza", "see": "אחד המקדשים העתיקים בטוקיו — שער ואולם אדומים (שרדו מלה״ע), בריכת קרפיונים, ומנהרת טוריאי אדומים ('Otome Inari') — מיני-פושימי אינארי בטוקיו. חינם.", "why": "מקדש שליו ומרהיב ומסדרון הטוריאי האדומים — סיום יפה ולא עמוס. (גן האזליות פורח באביב, לא בספטמבר.)", "tip": "מסתיים ליד תחנת Nezu (קו Chiyoda) — נוח להמשך לטויוסו/teamLab.", "map": "35.7203,139.7607" }
    ],
    "special": [
     "🌇 Yuyake Dandan + החתולים — צילום הפוסטר של יאנאקה, הרחוב הישן והחתולים.",
     "⛩️ מנהרת הטוריאי האדומים של Nezu — מיני-פושימי אינארי בלב טוקיו.",
     "🎨 SCAI The Bathhouse — גלריית אמנות בבית מרחץ בן 200 שנה (תערוכת Lee Ufan עד 10.10.2026).",
     "☕ Kayaba Coffee — הקיסאטן הרטרו האגדי במאצ׳יה מ-1916 (הזמינו מראש).",
     "🐈 תרבות החתולים — פסלוני חתולים על הגגות, סופגניות זנב-חתול, ובית קפה חתולים (Nekoemon).",
     "⏰ הערב teamLab בטויוסו (18:30) — עזבו את יאנאקה עד ~16:45. (מוזיאון הפיסול Asakura סוגר כניסה ב-16:00 וסגור ב׳/ה׳ — פתוח רביעי אך הקדימו אותו.)"
    ]
   },
   {
    "id": "kichijoji",
    "date": "2026-10-01",
    "city": "Tokyo",
    "area": "קיצ׳יג׳וג׳י ואינוקאשירה",
    "emoji": "🦢",
    "title": "קיצ׳יג׳וג׳י ואינוקאשירה — פארק, וינטג׳ ואוכל",
    "subtitle": "צהריים ואחה״צ אחרי ג׳יבלי · ~10 תחנות",
    "intro": "מוזיאון ג׳יבלי יושב בקצה פארק אינוקאשירה — והדרך הכי יפה לצאת ממנו היא ברגל צפונה דרך הפארק אל קיצ׳יג׳וג׳י (~15–20 דק׳). המסלול זורם טבעי: ג׳יבלי → בריכת אינוקאשירה (סירות, מקדש) → העיר האינדי (Harmonica Yokocho, ארקיידים, וינטג׳, אוכל). קיצ׳יג׳וג׳י נבחרת שוב ושוב לאחד המקומות הכי מבוקשים למגורים בטוקיו.",
    "meta": {
     "duration": "~3 שעות",
     "distance": "~2.5–4 ק״מ",
     "start": "מוזיאון ג׳יבלי → צפונה דרך פארק אינוקאשירה",
     "getThere": "הליכה ~15–20 דק׳ מג׳יבלי דרך הפארק אל תחנת Kichijoji",
     "end": "JR Chuo מהיר לשינג׳וקו ~15 דק׳ (קניות אחרונות + ארוחת פרידה)",
     "cost": "אין דמי כניסה לפארק/מקדש בנזאיטן (חינם); סירת ברבור אופציונלית ~¥800–1,000 ל-30 דק'; יום של אוכל רחוב — תקציבו ~¥2,500–3,500 לאדם (יאקיטורי איסיה ~¥90–100 לשיפוד, מנצ'י-קאטסו של סאטו ~¥300); רכבת JR צ'ואו לשינג'וקו ~¥170 בסוויקה. בלי צורך במונית.",
     "luggage": "היום האחרון בטוקיו: המזוודה הראשית נעולה ב-Tokyu Stay Shinjuku, יוצאים עם דייפק בלבד + כרטיס סוויקה; חוזרים לשינג'וקו בערב לקניות אחרונות וארוחת פרידה.",
     "meal": "יאקיטורי אצל איסיה (Iseya) בקצה פארק אינוקאשירה — שיפודי עוף על הפחם ~¥90–100 ליחידה עם בירה קרה; אכלו 8–10 שיפודים, בערך ¥1,500–2,000 לאדם. אל תפספסו מנצ'י-קאטסו של סאטו בדרך (~¥300)."
    },
    "stops": [
     { "time": "12:35", "name": "פארק אינוקאשירה (井の頭恩賜公園)", "walk": "מצד ג׳יבלי, צפונה לאורך הבריכה", "see": "בריכה גדולה, שבילי עצים, מדשאות. חינם, פתוח 24 שעות.", "why": "מרחב ירוק ומים נדיר במערב טוקיו — הלב הרגשי של השכונה וחלק גדול מהיוקרה שלה.", "tip": "היכנסו מצד ג׳יבלי/מיטאקה, טיילו צפונה לאורך הגדה המערבית לכיוון המזח והמקדש.", "map": "35.7000,139.5750" },
     { "time": "12:50", "name": "סירות הברבור בבריכה (אגדת הפרידה)", "walk": "אל המזח", "see": "השכרת סירות: סירות חתירה ~¥800/30 דק׳, סירות ברבור ~¥800–1,000. קונים במכונה במזח.", "why": "אמונה מקומית: האלה Benzaiten שבבריכה מקנאה ו'מקללת' זוגות שחותרים יחד להיפרד! אגדה בת 200+ שנה.", "tip": "צחקו על האגדה, או פשוט צפו מהגדה אם אתם אמונתיים. הסירות תלויות מזג אוויר.", "map": "35.6998,139.5738" },
     { "time": "13:05", "name": "מקדש Inokashira Benzaiten (井の頭弁財天)", "walk": "אל אי קטן בבריכה", "see": "מקדש אדום קטן על אי, מגשר קצר. חינם.", "why": "מקורו בתקופת הייאן, שוחזר במאה ה-17 — מקור 'קללת הסירות'. אולם אדום שמשתקף במים.", "tip": "עצירה מהירה (5–10 דק׳). שימו לב לאגן המים בצורת דרקון וללוחיות ה-ema.", "map": "35.6989,139.5720" },
     { "time": "13:20", "name": "Iseya (いせや) — יאקיטורי היסטורי בכניסת הפארק", "walk": "בכניסת הפארק אל העיר", "see": "יאקיטורי על פחם ~¥90–100 לשיפוד, בירה קרה, איזקאיה עמידה בכניסת הפארק. פתוח מהצהריים.", "why": "מוסד בן ~מאה שנה בקיצ׳יג׳וג׳י — מעושן, בלי גינונים, אהוב. ביס ראשון מושלם ביציאה מהפארק.", "tip": "צהריים קליל: כמה שיפודים + בירה. מזומן; יכול להיות מעושן וצפוף.", "map": "35.7028,139.5793" },
     { "time": "13:45", "name": "ארקייד Sun Road (吉祥寺サンロード)", "walk": "מהיציאה הצפונית של התחנה", "see": "הארקייד המקורה הראשי צפונה מהתחנה — ~150 חנויות (מאפיות, אופנה, אוכל קז׳ואלי).", "why": "עמוד השדרה המסחרי של קיצ׳יג׳וג׳י — חסין גשם, המחבר בין צד הפארק ל-Harmonica Yokocho.", "tip": "השתמשו בו כעורק, לא כיעד; פנו ממנו אל Harmonica Yokocho ו-Nakamichi-dori.", "map": "35.7040,139.5798" },
     { "time": "14:00", "name": "Harmonica Yokocho (ハモニカ横丁) — מבוך הסמטאות", "walk": "דקה מהיציאה הצפונית", "see": "מבוך צפוף של ~100 חנויות ופונדקים זעירים בסמטאות מקורות. ביום: בתי קפה, מוכר דגים ותיק, מתוקים. בלילה: פנסים אדומים וברי עמידה.", "why": "המקום הכי אווירתי בקיצ׳יג׳וג׳י — נקרא 'הרמוניקה' כי החזיתות הצפופות דומות ללשוניות מפוחית. וייב שוֹווה.", "tip": "בצהריים רגוע וניתן לדפדוף (מושלם לחלון שלכם). קחו taiyaki 'כנפיים' פריך ב-Amane.", "map": "35.7043,139.5795" },
     { "time": "14:25", "name": "Satou (メンチカツ さとう) — menchi-katsu מפורסם", "walk": "ליד Nakamichi-dori", "see": "אטליז עם חלון טייק-אווי ל-menchi-katsu (קציצת בקר מאצוזקה מטוגנת) ~¥300–350. תור כמעט קבוע. חלון ~10:00–19:00.", "why": "חטיף הרחוב האייקוני של קיצ׳יג׳וג׳י — עסיסי, בשרי, תור מסביב לבלוק.", "tip": "תור ~15–40 דק׳ — אחד עומד בתור, השני מדפדף ב-Sun Road. אכלו חם במקום.", "map": "35.7038,139.5796" },
     { "time": "15:00", "name": "Nakamichi-dori (中道通り) — בוטיקים ווינטג׳", "walk": "מערבית ל-Sun Road", "see": "רחוב בוטיקים רגוע — אופנה עצמאית, וינטג׳ (Garnish), כלי בית, מתנות ובתי קפה.", "why": "התמצית של הקניות האינדי המובחרת של קיצ׳יג׳וג׳י — חנויות קטנות בניהול הבעלים, לא רשתות.", "tip": "זה הרחוב לדפדוף איטי. עצרו לקפה טוב באמצע אחר הצהריים.", "map": "35.7045,139.5770" },
     { "time": "15:25", "name": "וינטג׳ / תקליטים / ספרים", "walk": "בסמטאות מסביב ל-Nakamichi", "see": "קיצ׳יג׳וג׳י ידועה במרכזי תקליטים ובגדי וינטג׳, רובם ~10 דק׳ מהתחנה.", "why": "סצנת חפירת-תקליטים ואופנת יד-שנייה אמיתית — אנלוגי וינטג׳ אמריקאי/אירופי.", "tip": "אם תקליטים או וינטג׳ זה שלכם — 30–45 דק׳ בין 2–3 חנויות. אחרת שלבו ב-Nakamichi.", "map": "35.7048,139.5772" },
     { "time": "15:50", "name": "חנויות כלבו בתחנה + depachika", "walk": "בחזרה לתחנה", "see": "Kirarina Keio (מחובר לתחנה), Atre, Tokyu, PARCO, Marui — קניות אחרונות חסינות-גשם ומרתפי אוכל.", "why": "עטיפה נוחה וממוזגת ליד הרכבת — מרתף אוכל (depachika) לחטיפים לדרך.", "tip": "סיימו כאן כדי להיות כבר בתחנה לקו Chuo חזרה. קנו חטיפי depachika אם הארוחה מאוחרת.", "map": "35.7030,139.5800" }
    ],
    "special": [
     "🦢 קללת סירות הברבור — הקנאה של Benzaiten שמפרידה זוגות; אמונה בת 200 שנה.",
     "🏮 Harmonica Yokocho — שתי אישיויות: בתי קפה רגועים ביום, מבוך ברים מוארי-פנסים בלילה.",
     "🥩 Satou — menchi-katsu בקר מאצוזקה, חטיף פולחני עם תור קבוע.",
     "🍢 Iseya — יאקיטורי בן מאה שנה, שיפודים ב-¥90 ובירה בכניסת הפארק.",
     "🛍️ סחורת ג׳יבלי — חנות המוזיאון הרשמית (Mamma Aiuto!) היא בתוך המוזיאון בלבד; קנו לפני שיוצאים.",
     "📅 1.10 = יום חמישי — שוקי סופ״ש ואמנים ברחוב לא פועלים; אל תבנו עליהם."
    ]
   }
  ]
 },
 "es": {
  "days": [
   {
    "date": "2026-09-18",
    "dow": "Fri",
    "city": "Tokyo",
    "title": "Día 1 — Neón en Tokio",
    "summary": "Aterrizaje en Narita, el expreso hasta Shinjuku y una inmersión directa en el calor de las calles iluminadas. La primera noche en Japón se celebra con brochetas, humo y luces que no se apagan.",
    "hotel": "🏨 HOTEL AMANEK Shinjuku Kabukicho · Kabukicho (✓ reservado · 18→22, 4 noches)",
    "events": [
     {
      "start": "18:25",
      "end": "19:45",
      "type": "transport",
      "area": "Narita Airport T1",
      "title": "Aterrizaje y entrada al país",
      "desc": "Llegada a Narita T1 a las 18:25, migraciones, retiro de equipaje y configuración del Mobile Suica en Apple Wallet para pagar sin fricción en todo el viaje. Confirmá que el eSIM esté activo en cuanto toqués tierra.",
      "tips": "Completá el QR de Visit Japan Web antes de aterrizar para acortar la fila de migraciones. Si el eSIM no conecta de inmediato, activá y desactivá el modo avión por 10 segundos.",
      "cost": "gratis",
      "booking": "Completá el código QR de Visit Japan Web antes de aterrizar"
     },
     {
      "start": "19:45",
      "end": "21:15",
      "type": "transport",
      "area": "Narita עד Shinjuku",
      "title": "N'EX hasta Shinjuku",
      "desc": "El Narita Express tarda unos 80 minutos y te deja directo en Shinjuku — dejás las valijas en el cuarto y ya estás afuera.",
      "tips": "Comprá el ticket de ida y vuelta (round-trip): incluye el regreso a Narita el día 15 y sale más barato que dos boletos separados.",
      "cost": "¥3.000–4.000 por persona",
      "booking": "Ticket de ida y vuelta N'EX — conviene comprarlo online o en el mostrador JR del aeropuerto",
      "dur": "~80 min"
     },
     {
      "start": "21:45",
      "end": "23:00",
      "type": "food",
      "area": "Shinjuku (Omoide Yokocho)",
      "title": "Yakitori en Omoide Yokocho",
      "desc": "\"El callejón de los recuerdos\" es una hilera de puestos diminutos iluminados con farolitos, humo, brochetas de pollo caramelizadas y cerveza bien fría. La zona es conocida por su ambiente abierto y es la bienvenida más humana que puede darles Tokio — y el konbini más cercano a las 11 de la noche es el postre perfecto.",
      "tips": "Los puestos son chiquititos: sentate donde haya dos sillas libres y sonreí, eso alcanza. Pasá también por el konbini de al lado para un snack antes de dormir.",
      "cost": "¥1.500–3.000 por persona",
      "booking": "",
      "highlight": true
     },
     {
      "start": "23:00",
      "end": "23:59",
      "type": "sightseeing",
      "area": "Shinjuku (Kabukicho)",
      "title": "Paseo de neón por Kabukicho",
      "desc": "Un loop corto por las calles de neón de Kabukicho, con parada obligada bajo la cabeza de Godzilla que asoma del Hotel Gracery — bienvenidos a Tokio. Corto, mágico, y de vuelta al hotel a descansar.",
      "tips": "Es caminando desde Omoide Yokocho — 10 minutos sin necesidad de tomar el tren. Dejá el Kabukicho Tower para otra noche.",
      "cost": "gratis",
      "booking": ""
     },
     {
      "start": "21:15",
      "end": "21:45",
      "type": "checkin",
      "area": "Shinjuku (Kabukicho)",
      "title": "Check-in en AMANEK y dejar valijas",
      "desc": "Dejan las valijas y un refresco rápido tras el vuelo, y salen caminando al callejón de yakitori (5 min)."
     }
    ],
    "cultural": "El nombre 'Kabukicho' viene del teatro kabuki que iba a construirse acá en los años 40 — nunca se levantó, pero el nombre quedó flotando como el fantasma de algo que no fue. En la cosmovisión shinto, la noche y el humo no son solo ambiente: marcan el paso del hare (lo cotidiano) al ke (lo festivo-sagrado), una transición que abre otro tiempo. Un pincho yakitori asado en carbón bincho no es solo comida en el calendario japonés — es reunión, omakase de amistad. Y las luces de neón no son contaminación lumínica: son 'matsuri' permanente, el espíritu de fiesta que los japoneses invocan cada vez que salen del mundo habitual.",
    "tips": [
     "Compren el pasaje N'EX online por adelantado (JR East o Klook) — las filas de las máquinas en el aeropuerto de noche demoran 15 min. Con ticket digital pasás directo por el molinete.",
     "En Omoide Yokocho los puestos tienen apenas 6–8 banquetas — si el primero está lleno, pasá al siguiente; todos los pinchos son de nivel parecido. Pedí 'tori kawa' (piel de pollo) y 'tsukune' (albóndigas), los clásicos.",
     "Confirmá el check-in tardío: AMANEK Kabukicho recibe hasta las 02:00, pero tené a mano tus cosas de higiene — las valijas grandes no se mueven hasta la mañana."
    ]
   },
   {
    "date": "2026-09-19",
    "dow": "Sat",
    "city": "Tokyo",
    "title": "Tokio del mercado al cielo",
    "summary": "Un día de sabores y colores: el mercado de Tsukiji, el templo de Asakusa, un paseo al atardecer por el corazón de Shibuya y la noche más intensa de Ni-chome. Así se presenta Tokio de verdad.",
    "hotel": "🏨 HOTEL AMANEK Shinjuku Kabukicho · Kabukicho (✓ reservado · 18→22, 4 noches)",
    "events": [
     {
      "start": "08:00",
      "end": "10:15",
      "type": "food",
      "area": "Tsukiji",
      "title": "Recorrida gastronómica por Tsukiji",
      "desc": "El mercado exterior de Tsukiji es un desayuno disfrazado de aventura: tamagoyaki recién hecho, uni que se deshace en la boca, nigiri de wagyu y matcha soft-serve para terminar. Turnense: uno guía, el otro come, y después al revés.",
      "tips": "Llegá antes de las 8:30 antes de que se llene. Si reservás un tour guiado vas a encontrar puestos que solo los locales conocen.",
      "cost": "¥3.000–6.000 por persona",
      "booking": "Conviene reservar con anticipación un tour guiado por Tsukiji",
      "highlight": true
     },
     {
      "start": "10:45",
      "end": "12:30",
      "type": "culture",
      "area": "Asakusa",
      "title": "Senso-ji y Nakamise-dori",
      "desc": "La puerta Kaminarimon con su farol gigante es la primera foto del viaje; después viene Nakamise-dori con ningyo-yaki caliente y melon pan. Desde el puente Azumabashi hay una toma clásica del Skytree con el cielo de fondo.",
      "tips": "El templo en sí es gratis — el presupuesto va para los omikuji y los snacks. Comé caminando, es lo más rico.",
      "cost": "¥500–1.500 por persona (snacks)",
      "booking": ""
     },
     {
      "start": "12:30",
      "end": "16:00",
      "type": "rest",
      "area": "Shinjuku",
      "title": "Descanso del mediodía en Shinjuku",
      "desc": "No hay drama en admitir que el cuerpo sigue en horario porteño — una siesta de verdad ahora convierte la noche en algo inolvidable. También podés hacer una caminata tranquila por Shinjuku y absorber el ritmo de la ciudad.",
      "tips": "No duerman de más — la noche en Shibuya y Ni-chome los espera.",
      "cost": "gratis",
      "booking": ""
     },
     {
      "start": "16:45",
      "end": "18:15",
      "type": "sightseeing",
      "area": "Shibuya",
      "title": "Shibuya — el cruce, Hachiko y paseo al atardecer",
      "desc": "Inmersión en el corazón de Shibuya: cruzar el cruce más famoso del mundo, la estatua de Hachiko, el brillo de Center Gai y la terraza de Miyashita Park para una vista tranquila del barrio al anochecer. Energía tokiota pura antes de la cena.",
      "tips": "Para la mejor foto del cruce — el segundo piso de la estación de Shibuya o el Mag's Park en la terraza de Magnet by Shibuya109. Todo gratis, sin reserva.",
      "cost": "gratis",
      "booking": ""
     },
     {
      "start": "18:30",
      "end": "20:00",
      "type": "food",
      "area": "Shibuya",
      "title": "Izakaya en Shibuya",
      "desc": "Primera cena izakaya del viaje: platitos variados, humo, cerveza nama bien fría de barril y la energía de Shibuya alrededor. Simple y perfecto.",
      "tips": "Decile al bartender \"nama futatsu\" (dos cervezas tiradas) y vas a sentirte local al instante.",
      "cost": "¥2.500–4.500 por persona",
      "booking": ""
     },
     {
      "start": "21:00",
      "end": "23:59",
      "type": "nightlife",
      "area": "Shinjuku Ni-chome",
      "title": "Shinjuku Ni-chome — pico sabatino",
      "desc": "Ni-chome un sábado a la noche es la cima de la escena gay de Tokio — cientos de bares chiquitos, energía que explota y alegría contagiosa. AiiRO Cafe es el punto más abierto y amigable para empezar, Eagle Tokyo tiene el ambiente más masculino, y Dragon Men es lo más clásico del barrio.",
      "tips": "Los bares son pequeños — no tengas drama en entrar, tomar una copa y seguir. No planifiques, fluí.",
      "cost": "¥500–1.500 por entrada/bar",
      "booking": "",
      "highlight": true
     }
    ],
    "cultural": "Senso-ji no es solo un templo: es el corazón latiente de Asakusa desde el siglo VII. La leyenda cuenta que en el año 628 unos pescadores encontraron una pequeña estatua de Kannon, la diosa de la compasión, en sus redes en el río Sumida. La estatua desapareció y nunca más se vio, pero el templo fue construido alrededor de esa ausencia — un principio japonés profundo donde lo más sagrado es aquello que no se puede ver. El humo del incensario grande (jokoro) se considera curativo: los japoneses lo dirigen hacia su cuerpo con las manos — hacia la cabeza para la sabiduría, hacia las manos para el talento. Hacé lo mismo vos también.",
    "tips": [
     "Shibuya al atardecer: el cruce impresiona más de noche, cuando se encienden todas las pantallas. Mirador gratis y excelente desde la terraza de Miyashita Park o Mag's Park (Shibuya109). El atardecer del 19/9 es ~18:00 — timing ideal para salir de Tsukiji/Asakusa y llegar a Shibuya al anochecer.",
     "En Ni-chome un sábado: la mayoría de los bares cobran 'table charge' de ¥1.000–1.500 con el primer trago incluido — pagalo con gusto, es la costumbre. Advocates Bar (barra a la calle) es el punto de encuentro; no hace falta llegar antes de las 22:30.",
     "En Tsukiji: los mejores puestos — fetas de atún fresco, tamagoyaki en palito, vieiras a la crema. Las tarjetas IC (Suica/Pasmo) ahorran filas. Ojo: la mayoría cierra 13:00–14:00, así que salir 10:15 es seguro."
    ]
   },
   {
    "date": "2026-09-20",
    "dow": "Sun",
    "city": "Tokyo",
    "title": "Tokio — día otaku: Nakano y Akihabara",
    "summary": "Un día entero de anime: los pisos de Mandarake en Nakano, arcades y gachapon en Akihabara, y figuras hasta tarde.",
    "hotel": "🏨 HOTEL AMANEK Shinjuku Kabukicho · Kabukicho (✓ reservado · 18→22, 4 noches)",
    "events": [
     {
      "start": "12:00",
      "end": "14:00",
      "type": "anime",
      "area": "Nakano",
      "title": "Nakano Broadway — meca del anime",
      "desc": "Pisos de Mandarake: manga usada, figuras raras, juegos retro, relojes y coleccionables. Paraíso otaku, menos turístico y con buenos precios.",
      "tips": "Los pisos 2–4 son los mejores; llevá efectivo. No te pierdas el retro-gaming.",
      "cost": "Gratis (compras a gusto)",
      "booking": "",
      "highlight": true
     },
     {
      "start": "14:00",
      "end": "15:00",
      "type": "food",
      "area": "Nakano",
      "title": "Almuerzo en Nakano",
      "desc": "Ramen o curry en las callecitas alrededor del Broadway.",
      "tips": "",
      "cost": "¥900–1.600 por persona",
      "booking": ""
     },
     {
      "start": "15:30",
      "end": "18:45",
      "type": "anime",
      "area": "Akihabara",
      "title": "Akihabara — arcades, gachapon y figuras",
      "desc": "Pisos de arcade (GiGO/Taito), paredes de gachapon, tiendas de figuras y manga, y quizás un café temático. El corazón del anime.",
      "tips": "Efectivo para las UFO catchers y las tiendas viejas; Super Potato para retro-gaming.",
      "cost": "¥1.000–3.000 por persona",
      "booking": "",
      "highlight": true
     },
     {
      "start": "19:00",
      "end": "20:30",
      "type": "food",
      "area": "Akihabara",
      "title": "Cena en Akihabara",
      "desc": "Curry japonés clásico, ramen o un café temático (reservá antes).",
      "tips": "",
      "cost": "¥1.200–2.500 por persona",
      "booking": ""
     },
     {
      "start": "20:30",
      "end": "22:30",
      "type": "anime",
      "area": "Akihabara",
      "title": "Noche en Akihabara — más arcade",
      "desc": "Última vuelta por los pisos iluminados de juegos y quizás un bar chico para cerrar.",
      "tips": "",
      "cost": "",
      "booking": ""
     },
     {
      "start": "09:30",
      "end": "11:30",
      "type": "rest",
      "area": "Shinjuku",
      "title": "Mañana tranquila en Shinjuku",
      "desc": "Desayuno tardío y café — Mandarake en Nakano abre recién a las 12:00, así que sin apuro tras la noche del sábado."
     }
    ],
    "cultural": "Akihabara — cuyo nombre completo 秋葉原 significa 'campo de hojas de otoño' — se transformó de un barrio de electrodomésticos de posguerra en el mayor centro de cultura otaku del mundo. En el corazón de todo esto está el concepto de Moe (萌え): una ternura cálida y afectiva hacia personajes ficticios, una estética emocional que desafía la frontera entre lo real y lo imaginado. Y las máquinas gachapon encarnan el principio budista de ichi-go ichi-e (一期一会) — 'un encuentro único en la vida': nunca sabés qué va a salir, y ese momento de sorpresa es irrepetible.",
    "tips": [
     "Las tiendas Mandarake en Nakano Broadway abren a las 12:00 — no vayan antes. Planeá una mañana tranqui con desayuno tardío en Shinjuku y después viajá a Nakano.",
     "En Nakano Broadway subí en ascensor al 4° piso y bajá caminando — las tiendas de coleccionismo más raro (incluida Mandarake Cosmos) están arriba y con menos gente al abrir.",
     "El Gachapon Kaikan de Akihabara cierra a las 19:00 los domingos — no lo dejes para el final. Andá entre 16:30–18:30, antes de cenar.",
     "⏰ Mañana (21.9) el taller de ramen arranca 09:00 en Minami-Aoyama — no se queden hasta muy tarde en los arcades, y pongan alarma ~07:30. Antes de salir, dejen la valija principal en recepción para el envío a Kioto."
    ]
   },
   {
    "date": "2026-09-21",
    "dow": "Mon",
    "city": "Tokyo",
    "title": "Tokio — taller, Harajuku y Shibuya",
    "summary": "Mañana de taller de ramen (✓ reservado, 09:00–13:00), a la tarde Harajuku y Meiji Jingu, y compras en Shibuya — último día en Tokio antes de Hakone.",
    "hotel": "🏨 HOTEL AMANEK Shinjuku Kabukicho · Kabukicho (✓ reservado · 18→22, 4 noches)",
    "events": [
     {
      "start": "09:00",
      "end": "13:00",
      "type": "experience",
      "area": "Minami-Aoyama, Minato",
      "title": "✓ Taller de ramen — Baba Ramen Cooking School",
      "desc": "✓ Reservado · reserva 14166 · 09:00–13:00 (4 horas) · 2 participantes · ¥46.000 (pagado). Taller de ramen a mano con chefs en Baba Ramen Cooking School, Minami-Aoyama 3-2-7 (junto a la estación Omotesando). Hacen fideos, caldo y toppings — y se comen el bowl que hicieron. Es el almuerzo.",
      "tips": "Vengan con hambre y a tiempo (~08:45). Del hotel: JR Yamanote hasta Harajuku + ~12 min a pie, o metro hasta Omotesando (salidas A4/A5). Dan delantales.",
      "cost": "✓ ¥46.000 la pareja (pagado · reserva 14166)",
      "booking": "✓ Reservado · reserva 14166",
      "highlight": true
     },
     {
      "start": "13:15",
      "end": "14:05",
      "type": "sightseeing",
      "area": "Omotesando / Aoyama",
      "title": "Omotesando y Aoyama (saliendo del taller)",
      "desc": "La escuela está pegada a Omotesando — arrancan por la avenida de arquitectura (Prada y Miu Miu en Aoyama al lado, Omotesando Hills de Ando), y quizás el tranquilo Museo Nezu. Desde ahí suben al norte a Harajuku.",
      "tips": "Después del ramen no hace falta almuerzo — solo un café/crepe liviano si les provoca.",
      "cost": "Gratis (Nezu opcional ~¥1.400)",
      "booking": ""
     },
     {
      "start": "14:05",
      "end": "16:00",
      "type": "sightseeing",
      "area": "Harajuku / Meiji Jingu",
      "title": "Takeshita-dori y Meiji Jingu",
      "desc": "La colorida Takeshita (crepes, kawaii), y después la calma del bosque del santuario Meiji Jingu — la pared de barriles de sake frente al vino francés, el Temizuya y el salón principal.",
      "tips": "⚠️ Por el taller de la mañana, Meiji Jingu ahora es a la tarde — en feriado hay más gente, pero las 70 hectáreas de bosque la absorben. Temizuya: izquierda, derecha, boca, mango.",
      "cost": "Gratis (Gyoen ¥500 opcional)",
      "booking": "",
      "highlight": true
     },
     {
      "start": "16:00",
      "end": "18:00",
      "type": "shopping",
      "area": "Shibuya",
      "title": "Shibuya — compras y el cruce famoso",
      "desc": "Las flagship de Shibuya, el cruce Scramble y la vibra de la gran ciudad.",
      "tips": "",
      "cost": "",
      "booking": ""
     },
     {
      "start": "18:00",
      "end": "19:30",
      "type": "food",
      "area": "Shibuya",
      "title": "Cena en Shibuya",
      "desc": "Izakaya de platos chicos o yakitori antes de la noche.",
      "tips": "",
      "cost": "¥2.500–4.000 por persona",
      "booking": ""
     },
     {
      "start": "20:00",
      "end": "23:00",
      "type": "nightlife",
      "area": "Shinjuku Ni-chome",
      "title": "Última noche en Tokio — Ni-chome",
      "desc": "Vuelta de bares por el barrio gay antes de seguir mañana a Hakone; después arman el bolso de una noche.",
      "tips": "Recuerden: mañana envían la valija principal a Kioto.",
      "cost": "",
      "booking": ""
     }
    ],
    "cultural": "Meiji Jingu no es un sitio turístico: es una de las almas del país. El santuario fue dedicado en 1920 al Emperador Meiji y su esposa la emperatriz Shōken, quienes guiaron a Japón desde la era de los samuráis hacia la modernidad. El bosque de 70 hectáreas fue plantado a mano por 100.000 voluntarios de cada provincia del país con 365 especies de árboles de alcanfor. Antes de entrar al patio interior, vas a encontrar el Temizuya: una pileta de piedra con pequeños caños. El ritual se llama misogi-harae, purificación que viene de la creencia sintoísta de que el agua no solo limpia la suciedad física sino también el 'kegare' — la impureza espiritual que se acumula en la vida cotidiana. Tres lavados, incluyendo la boca, y recién entonces podés presentarte ante la deidad.",
    "tips": [
     "✓ El taller de ramen está reservado — Baba Ramen Cooking School, Minami-Aoyama 3-2-7 (junto a Omotesando), 09:00–13:00, reserva 14166, ¥46.000 la pareja. Lleguen ~08:45; también es el almuerzo (el ramen que hagan).",
     "Meiji Jingu ahora a la tarde (porque el taller es a la mañana): en feriado el pico es 12:00–15:00, pero las 70 hectáreas de bosque absorben la multitud — déjense llevar. En el Temizuya lavate las manos con calma — izquierda, derecha, boca, mango — antes de entrar.",
     "Takeshita Street: entrá por el lado de la estación JR Harajuku (no por Omotesando) y te ahorrás lo peor del gentío. Abre ~10:00-11:00; mediodía en Harajuku: Angus burgers, Kawaii Monster Café, o un crepe de los puestos de la calle."
    ],
    "logistics": {
     "he": "בוקר אחרון בטוקיו: לפני סדנת הראמן (09:00) מסרו את המזוודה הראשית בקבלת AMANEK למשלוח ל-Candeo קיוטו (Yamato takkyubin) — שליחה ב-21.9 נותנת מרווח לעיכובי שבוע הכסף; מגיעה לפני הצ׳ק-אין (25.9). ממשיכים להאקונה+קיסו עם תיק-לילה בלבד.",
     "es": "Última mañana en Tokio: antes del taller de ramen (09:00) dejen la valija principal en recepción del AMANEK para despacharla al Candeo Kioto (takkyubin de Yamato) — mandarla el 21/9 da margen ante las demoras de Silver Week; llega antes del check-in (25/9). Siguen a Hakone+Kiso solo con bolso de una noche."
    }
   },
   {
    "date": "2026-09-22",
    "dow": "Tue",
    "city": "Hakone",
    "title": "Hakone — Semana de Plata, baño entre montañas",
    "summary": "El gran día de transición: las valijas viajan solas a Kyoto mientras vos dos tomás el Romancecar panorámico hacia el valle de montaña, y a la tarde se hunden en un ryokan con onsen privado, yukatas y una kaiseki otoñal para celebrar los 40.",
    "hotel": "🏨 Hakone Onsen Ryokan Yaeikan (✓ reservado · 22→23) · onsen",
    "events": [
     {
      "start": "07:30",
      "end": "09:00",
      "type": "transport",
      "area": "Tokyo",
      "title": "Check-out y salida hacia Hakone",
      "desc": "Desayuno y check-out. La valija principal ya va camino a Kioto (despachada ayer) — salen solo con bolso de una noche.",
      "tips": "Buscá un mostrador TA-Q-BIN (Yamato) en el aeropuerto de Narita, en hoteles grandes de Tokyo, o en el 7-Eleven más cercano. Mandá antes de las 10:00 para garantizar la entrega al día siguiente.",
      "cost": "¥2.000–2.500 por persona",
      "booking": ""
     },
     {
      "start": "09:00",
      "end": "10:15",
      "type": "transport",
      "area": "Shinjuku עד Hakone-Yumoto",
      "title": "✓ Romancecar — el tren romántico de Hakone",
      "desc": "✓ Reservado · salida 9:00 → llegada 10:15 · asiento 6D (vagón 06) · confirmación 00018. El Romancecar de Odakyu sale de Shinjuku directo a Hakone-Yumoto con ventanales panorámicos. Todavía hay que comprar el Hakone Free Pass para el transporte local de hoy y mañana.",
      "tips": "El asiento está reservado (6D). Comprá el Hakone Free Pass (2 días) — cubre el Tozan, funicular, teleférico, crucero y colectivos.",
      "cost": "✓ ¥2.420 Romancecar (pagado) + ¥6.500–7.000 Hakone Free Pass por persona",
      "booking": "✓ Reservado — e-Romancecar · asiento 6D · confirmación 00018",
      "dur": "~75 min"
     },
     {
      "start": "10:30",
      "end": "15:00",
      "type": "sightseeing",
      "area": "Owakudani · lago Ashi · santuario Hakone",
      "title": "Circuito de Hakone — volcán, barco y santuario",
      "desc": "Dejan el bolso de una noche en Yaeikan (2 min de la estación) y salen al circuito con el Free Pass: tren Tozan→Gora, funicular a Sounzan, teleférico al valle volcánico Owakudani (huevo negro + almuerzo en Owakudani Kitchen), teleférico a Togendai, barco pirata por el lago Ashi a Moto-Hakone, y el santuario Hakone con su torii rojo sobre el agua. Detalles completos en la pestaña 🚶 Recorridos.",
      "tips": "⚠️ El teleférico cierra ~17:00 — háganlo a la mañana. La cola del torii puede ser de 1–3 horas en Silver Week — saltala o fotografiá desde el costado. Salgan del santuario para las ~15:00 (tráfico de buses en feriado).",
      "cost": "Incluido en el Hakone Free Pass · huevo negro ¥500/5 · almuerzo ~¥1.200",
      "booking": ""
     },
     {
      "start": "17:20",
      "end": "18:00",
      "type": "onsen",
      "area": "Hakone-Yumoto",
      "title": "Llegada al ryokan — este momento era para vos (¡antes de las 19:00!)",
      "desc": "Check-in en el ryokan de Yumoto: bienvenida con té verde y dulces japoneses, cambio a yukata, y primera inmersión en el onsen con vistas a las montañas. Sentí cómo el estrés se va disolviendo.",
      "tips": "Dejá los zapatos en la entrada y pasate a las sandalias del ryokan (geta) — es parte de la experiencia. Sacate fotos mutuamente con el yukata antes de que el onsen te enrojezca las mejillas.",
      "cost": "Incluido en el alojamiento",
      "booking": ""
     },
     {
      "start": "20:00",
      "end": "21:00",
      "type": "onsen",
      "area": "Hakone-Yumoto",
      "title": "Onsen privado para parejas (kashikiri)",
      "desc": "Una hora entera de onsen privado para los dos solos — agua caliente de manantiales naturales, silencio absoluto y una intimidad única. Un momento especial para celebrar los 40.",
      "tips": "Reservá el espacio ni bien hacés el check-in porque los slots se llenan rápido en la Semana de Plata. Preguntale al ryokan si el onsen es de azufre (sulfuroso) — a algunas personas les molesta el olor.",
      "cost": "¥1.500–3.000 por pareja (varía según el ryokan)",
      "booking": "Reservar el slot de onsen privado al momento del check-in",
      "highlight": true
     },
     {
      "start": "18:00",
      "end": "20:00",
      "type": "food",
      "area": "Hakone-Yumoto",
      "title": "Cena kaiseki — celebración de estación",
      "desc": "La cena kaiseki tradicional se sirve en tu habitación: pequeños platos de temporada que cuentan la historia del otoño japonés — pescados, verduras de montaña, tofu y mucho más. Una comida que es en sí misma una experiencia.",
      "tips": "Avisale al ryokan de antemano sobre preferencias alimentarias (vegetarianismo/alergias) al momento de la reserva. Pedí sake local — el camarero generalmente se entusiasma recomendando la elección de estación.",
      "cost": "¥15.000–25.000 por persona (generalmente incluido en el paquete de alojamiento)",
      "booking": "",
      "highlight": true
     },
     {
      "start": "16:00",
      "end": "17:15",
      "type": "onsen",
      "area": "Tenzan Onsen · Oku-Yumoto",
      "title": "♨️ Tenzan Onsen — rotenburo en la naturaleza",
      "desc": "Tras el circuito, una hora o hora y media de baño caliente al desnudo entre bosque y arroyo en Tenzan (Oku-Yumoto): 4 rotenburo, baños interiores y salas de vapor. Desde Yumoto, taxi ~¥1.000–1.300 / shuttle ~¥100, y después un taxi corto a Yaeikan.",
      "tips": "⚠️ Tatuajes: Tenzan es tattoo-friendly pero solo una persona tatuada por grupo — si los dos tienen, los rechazan. Abierto 09:00–23:00, solo efectivo. Baños separados por género; hay salas privadas con costo.",
      "cost": "¥1.450 por persona (efectivo, no en el Free Pass)",
      "booking": ""
     }
    ],
    "logistics": {
     "he": "המזוודה הראשית כבר בדרך לקיוטו (נשלחה ב-21.9). נוסעים להאקונה ולעמק קיסו עם תיק-לילה בלבד — 2 לילות. אשרו עם Yaeikan הזמנת אמבט פרטי (kashikiriburo) בצ׳ק-אין.",
     "es": "La valija principal ya va camino a Kioto (despachada el 21/9). Van a Hakone y al Valle de Kiso solo con bolso de una noche — 2 noches. Confirmá con Yaeikan la reserva del baño privado (kashikiriburo) al hacer el check-in."
    },
    "cultural": "Los manantiales termales de Hakone brotan de las entrañas del volcán Fuji-Hakone, y en la tradición sintoísta esas aguas burbujeantes son expresión de musubi, la fuerza divina que fluye desde la tierra misma. El misogi —purificación mediante el agua— es uno de los ritos sintoístas más antiguos: entrar al onsen no es solo higiene, sino un lavado espiritual del kegare, la impureza invisible que acumulamos en la vida cotidiana. Por eso te duchás con meticulosidad antes de sumergirte en la pileta común —no es mera cortesía, sino porque el agua en sí se preserva sagrada y limpia para todos. Cuando se hundan en esa agua caliente con las montañas de fondo, recuerden que están participando de un ritual que la gente lleva realizando aquí desde hace mil años.",
    "tips": [
     "Reservá el Romancecar el día que abre la venta (~30 días antes, por EMot de Odakyu). En Silver Week se agota en minutos. Conviene el tren de las 09:00 — lo más temprano y aún tranquilo tras despachar la valija.",
     "Descargá el Hakone Freepass (2 días) de Odakyu — cubre Romancecar (descuento), tren Tozan, funicular, teleférico, crucero por el lago Ashi y colectivos. Para dos se paga solo el primer día. Compralo online.",
     "En Yaeikan: poné la yukata apenas hagas el check-in y andá al baño privado (kashikiriburo) — puede requerir reserva en recepción. Preguntá al llegar; en Silver Week todos quieren el mismo horario."
    ]
   },
   {
    "date": "2026-09-23",
    "dow": "Wed",
    "city": "Magome",
    "title": "🎂 Cumpleaños 40 — Magome (Valle de Kiso)",
    "summary": "Viaje de Hakone al Valle de Kiso, atardecer en la aldea Edo de Magome, y cena de cumpleaños en la villa o un restaurante local.",
    "hotel": "🏨 Yanagiya Iri — villa en Magome (✓ reservado) · cocina, sin comidas · 🎂",
    "events": [
     {
      "start": "08:00",
      "end": "09:00",
      "type": "food",
      "area": "Hakone-Yumoto",
      "title": "Desayuno y último baño en Hakone",
      "desc": "Desayuno japonés y un último onsen antes de partir.",
      "tips": "",
      "cost": "",
      "booking": ""
     },
     {
      "start": "09:30",
      "end": "13:20",
      "type": "transport",
      "area": "Hakone-Yumoto עד Nagoya עד Magome",
      "title": "Viaje al Valle de Kiso — Hakone → Magome",
      "desc": "Hakone→Odawara (~15 min) · shinkansen Hikari Odawara→Nagoya (~1:05 · no Nozomi — no para en Odawara) · Ltd.Exp Shinano Nagoya→Nakatsugawa (~50 min) · bus Kita-Ena→Magome (~30 min). Un descenso escénico al Japón rural.",
      "tips": "La valija principal ya va camino a Kioto — viajan con bolso de una noche. Verificá de antemano el horario del Shinano y del bus Kita-Ena desde Nakatsugawa — el bus es infrecuente; dejá margen en la combinación en Nagoya.",
      "cost": "",
      "booking": "✓ Reservado: shinkansen Odawara→Nagoya · HIKARI 637 · vagón 14 (14D/14E)",
      "dur": "~3–3,5 h · 4 tramos"
     },
     {
      "start": "13:30",
      "end": "14:15",
      "type": "food",
      "area": "Magome",
      "title": "Almuerzo en Magome — soba y gohei-mochi",
      "desc": "Soba shinshu y gohei-mochi (arroz a la brasa con miso y nueces) — el sabor del Nakasendo. Recién llegan a Magome ~13:20 (tras el Shinano + bus Kita-Ena), así que es la primera comida al llegar.",
      "tips": "Coman apenas lleguen — los restaurantes de almuerzo en Magome se agotan rápido en Silver Week. Mikazukian (soba) o Nakaizutuya en la calle principal.",
      "cost": "¥1.000–1.800 por persona",
      "booking": ""
     },
     {
      "start": "14:15",
      "end": "15:45",
      "type": "sightseeing",
      "area": "Magome",
      "title": "Magome — pueblo Edo en la ladera",
      "desc": "La cuesta empedrada, ruedas de agua y miradores sobre el valle de Ena. Ambiente Edo preservado.",
      "tips": "",
      "cost": "Gratis",
      "booking": "",
      "highlight": true
     },
     {
      "start": "16:30",
      "end": "17:00",
      "type": "checkin",
      "area": "Magome",
      "title": "Check-in en la villa Yanagiya Iri",
      "desc": "Villa con cocina y tatami en el corazón de Magome (sin comidas).",
      "tips": "",
      "cost": "¥53.600 · reservado",
      "booking": ""
     },
     {
      "start": "19:45",
      "end": "21:00",
      "type": "sightseeing",
      "area": "Magome",
      "title": "Magome al atardecer",
      "desc": "Cuando se van los excursionistas, la cuesta a la luz de los faroles se aquieta — un momento hermoso.",
      "tips": "",
      "cost": "Gratis",
      "booking": ""
     },
     {
      "start": "17:30",
      "end": "19:30",
      "type": "birthday",
      "area": "Magome",
      "title": "🎂 Cena de cumpleaños 40",
      "desc": "La villa no incluye comidas — reservá mesa en Haginoya (la única posada de Magome que sirve de noche, ~17:30, cierra ~20:00), o una cena especial en la cocina de la villa con sake local. Avisá que es el cumple de 40 — a veces sorprenden con un detalle.",
      "tips": "Reservar restaurante antes, o comprar ingredientes + sake en Nakatsugawa/Magome.",
      "cost": "Según elijan",
      "booking": "Haginoya — reservar (0573-69-2738)",
      "highlight": true
     },
     {
      "start": "15:45",
      "end": "16:30",
      "type": "shopping",
      "area": "Magome",
      "title": "Compra de sake y snacks para festejar",
      "desc": "⚠️ Las tiendas de Magome cierran ~17:00 — por eso las compras antes del check-in: sake local (Kiso), dulces (gohei-mochi) y quizá una torta chica para festejar en la villa."
     }
    ],
    "birthday": true,
    "cultural": "A lo largo del Nakasendo — una de las cinco grandes rutas de la era Edo que unía Edo (Tokio) con Kioto — hay miles de pequeñas estatuas de Jizo envueltas en telas rojas. Jizo es un bodhisattva que renunció a su propio nirvana para quedarse en el mundo y proteger a los viajeros, los niños y todo aquel que transita entre dos mundos. En la era Edo, los caminantes le dejaban una piedrecita como agradecimiento por haber llegado sanos y salvos — una costumbre que persiste hasta hoy. Cuando camines por el adoquinado de Magome y veas una figura de Jizo al costado del camino, recordá que estás pisando la misma tierra que samurais, comerciantes y poetas recorrieron durante siglos.",
    "tips": [
     "Los restaurantes de almuerzo en Magome se agotan rápido en Silver Week — coman apenas llegan (antes de las 13:00 si se puede). Prioricen Mikazukian (soba) o Nakaizutuya, en la calle principal.",
     "Para la cena de cumpleaños: reservá por teléfono en Haginoya (tel. 0573-69-2738) antes del viaje — es obligatorio y a veces se agota igual. Avisá que es un cumple de 40 — a veces sorprenden con un detalle.",
     "Para la villa Yanagiya Iri: consultá antes si podés dejar el bolso en check-in temprano (antes de las 16:30) — así recorrés el pueblo con las manos libres."
    ]
   },
   {
    "date": "2026-09-24",
    "dow": "Thu",
    "city": "Tsumago",
    "title": "Valle de Kiso — caminata Nakasendo y Tsumago",
    "summary": "Caminata Nakasendo Magome→Tsumago, atardecer mágico en la aldea Edo, y noche en la villa de Nagiso.",
    "hotel": "🏨 AKARI — villa en Nagiso (✓ reservado · ~10 min de Tsumago) · cocina, sin comidas",
    "events": [
     {
      "start": "08:00",
      "end": "09:00",
      "type": "food",
      "area": "Magome",
      "title": "Desayuno en la villa de Magome",
      "desc": "Café y algo liviano en la cocina de la villa antes de salir al sendero.",
      "tips": "",
      "cost": "",
      "booking": ""
     },
     {
      "start": "09:00",
      "end": "12:30",
      "type": "experience",
      "area": "Nakasendo Trail (Magome->Tsumago)",
      "title": "Caminata Nakasendo — Magome → Tsumago",
      "desc": "~8 km por el camino Edo entre bosque, cascadas y una casa de té.",
      "tips": "Dejen el bolso en Magome antes de las ~11:30 → los espera en Tsumago.",
      "cost": "Gratis",
      "booking": "",
      "highlight": true
     },
     {
      "start": "12:30",
      "end": "14:00",
      "type": "food",
      "area": "Tsumago",
      "title": "Almuerzo en Tsumago — soba",
      "desc": "Soba de trigo sarraceno de montaña después de la caminata.",
      "tips": "",
      "cost": "¥1.200–2.000 por persona",
      "booking": ""
     },
     {
      "start": "14:00",
      "end": "16:00",
      "type": "sightseeing",
      "area": "Tsumago",
      "title": "Tsumago — la calle, las cascadas y los callejones",
      "desc": "El 24/9 es el 4° jueves del mes → el Waki-honjin y el museo de Nagiso cierran. Pero el pueblo, los adoquines y las cascadas Odaki/Medaki están siempre abiertos y son gratis — un día al aire libre.",
      "tips": "Retiren el bolso en la oficina de turismo de Tsumago.",
      "cost": "Gratis",
      "booking": "",
      "highlight": true
     },
     {
      "start": "16:00",
      "end": "16:45",
      "type": "sightseeing",
      "area": "Tsumago",
      "title": "Tsumago al atardecer",
      "desc": "Cuando se van los excursionistas la aldea se aquieta del todo — el momento más mágico, a la luz de los faroles.",
      "tips": "",
      "cost": "Gratis",
      "booking": ""
     },
     {
      "start": "17:30",
      "end": "18:15",
      "type": "checkin",
      "area": "Nagiso",
      "title": "Bus a Nagiso + check-in en AKARI",
      "desc": "~10 min de Tsumago a Nagiso; villa con cocina y tatami (sin comidas).",
      "tips": "",
      "cost": "¥44.000 · reservado",
      "booking": ""
     },
     {
      "start": "19:00",
      "end": "20:30",
      "type": "food",
      "area": "Nagiso",
      "title": "Cena en Nagiso",
      "desc": "La villa no incluye comidas y Nagiso casi no tiene restós de noche — comprá bento/provisiones en Tsumago o en el super cerca de la estación de Nagiso antes del último colectivo, para cenar tranquilo en la villa.",
      "tips": "Chequear horarios del restaurante antes (pueblo chico).",
      "cost": "Según elijan",
      "booking": ""
     }
    ],
    "logistics": {
     "he": "בבוקר: מסרו את תיק-הלילה במרכז המידע במגומה עד ~11:30 להעברה לצומאגו (¥1,000/תיק). אספו בצומאגו לפני ההמשך לנאגיסו (10 דק׳).",
     "es": "A la mañana: dejen el bolso en la oficina de turismo de Magome antes de las ~11:30 para enviarlo a Tsumago (¥1.000/bolso). Retírenlo en Tsumago antes de seguir a Nagiso (10 min)."
    },
    "cultural": "El Nakasendo — 'el camino central a través de las montañas' — fue una de las dos grandes rutas imperiales del período Edo, conectando Edo (Tokio) con Kioto a través de valles y bosques de cedro. A lo largo del camino se alzaban postas (shuku), y en cada una destacaban dos instituciones: el honjin, posada oficial para daimyo y emisarios imperiales, con sala de audiencias y jardín; y el waki-honjin, posada secundaria para comerciantes acaudalados. Tsumago conserva sus tres edificios originales de esa época, algo extraordinariamente raro — la mayoría de las postas ardieron o fueron demolidas durante la modernización Meiji. Los adoquines desgastados por millones de pies a lo largo de siglos son un testimonio silencioso de un principio estético japonés profundo: lo que se cuida con amor no se gasta, sino que gana capas de alma.",
    "tips": [
     "El Wakihonjin Okuya y el museo de Nagiso cierran el 2° y 4° jueves de cada mes — el 24/9 es justo el 4° jueves. No cuentes con entrar; el pueblo y los callejones de piedra están siempre abiertos y gratis.",
     "Dejá los bolsos en el centro de info de Magome antes de las ~11:30 (abre 08:30, entrega en Tsumago hasta 13:00). Se retiran en Tsumago entre 13:00–17:00 — no te pierdas la ventana o los cargás al hombro.",
     "La cena en Nagiso es el punto ciego: el pueblo es muy chico y no hay restós de noche garantizados. Lo más seguro: almuerzo/cena temprana en Tsumago (Kongoya — soba + gohei-mochi) y comprar provisiones en el super cerca de la estación de Nagiso para la villa AKARI."
    ]
   },
   {
    "date": "2026-09-25",
    "dow": "Fri",
    "city": "Kyoto",
    "title": "De Nagiso a Kioto: el tren temprano y un día completo en la ciudad",
    "summary": "Salida temprana de Nagiso en los trenes ya reservados (08:09) — llegan a Kioto a las 10:15, un día entero en la ciudad de las geishas. Por la noche: los faroles de Gion y el callejón de Pontocho que te abrazan el alma.",
    "hotel": "🏨 Candeo Hotels Kyoto Karasuma Rokkaku (✓ reservado · 25→28) · centro de Kioto, 4★",
    "events": [
     {
      "start": "07:00",
      "end": "07:55",
      "type": "food",
      "area": "Nagiso",
      "title": "Desayuno temprano en la villa y salida a la estación de Nagiso",
      "desc": "Se despiertan en la villa AKARI de Nagiso — desayuno liviano y rápido en la cocina, y luego ~10 min hasta la estación de Nagiso. El tren reservado sale temprano (SHINANO 2 a las 08:09), así que esta vez no hay vuelta de despedida por Tsumago — el pueblo ya quedó atrás.",
      "tips": "Armá el bolso la noche anterior — la mañana es corta. ⚠️ El boleto no se puede retirar en la estación de Nagiso; asegurate de tenerlo ya en mano (retirado antes, ej. en Nagoya el 23/9).",
      "cost": "",
      "booking": ""
     },
     {
      "start": "08:09",
      "end": "10:15",
      "type": "transport",
      "area": "Nagiso עד Kyoto",
      "title": "✓ Viaje a Kioto: Nagiso → Kioto (reservado)",
      "desc": "✓ Reservado (JR-WEST Online · reserva 46424) · Ltd.Exp SHINANO 2 Nagiso 08:09→Nagoya 09:18 (vagón 4, asientos 2C+2D) · trasbordo 23 min · shinkansen NOZOMI 61 Nagoya 09:41→Kioto 10:15 (vagón 14, asientos 19D+19E). Un boleto continuo hasta Kioto, ¥19.020 la pareja. La valija principal ya espera en Candeo desde el 23/9.",
      "tips": "⚠️ El boleto no se puede retirar en la estación de Nagiso — hay que retirar el papel antes en una boletería (ej. Nagoya el 23/9) con la tarjeta de crédito y el código de 4 dígitos. En el trasbordo de Nagoya los andenes del Shinkansen están lejos — 23 min alcanzan si no se demoran.",
      "cost": "¥19.020 la pareja (reservado)",
      "booking": "✓ Reservado — JR-WEST Online · reserva 46424 · Receipt AEE0512M",
      "dur": "~2 h · 2 trenes (trasbordo en Nagoya)"
     },
     {
      "start": "15:00",
      "end": "16:00",
      "type": "rest",
      "area": "Kyoto",
      "title": "Check-in y un respiro en el hotel",
      "desc": "El check-in en Candeo abre a las 15:00 — entran a la habitación, se refrescan y descansan un rato después de la mañana temprana, antes de la noche en Gion.",
      "tips": "Guardá energía — la noche es larga y hermosa.",
      "cost": "gratis",
      "booking": ""
     },
     {
      "start": "16:30",
      "end": "18:30",
      "type": "sightseeing",
      "area": "Kyoto (Gion)",
      "title": "Gion y Pontocho: el brillo de los faroles",
      "desc": "Recorran los adoquines del barrio de Gion y el angosto callejón de Pontocho sobre las orillas del río Kamo — un lugar hecho para momentos en pareja. Faroles rojos, susurros de kimono, aroma a sake saliendo por las puertas entornadas.",
      "tips": "Entre las 16:30 y las 18:00 la luz es la más mágica para fotos; después de las 18:00 se encienden los faroles y empieza la atmósfera nocturna.",
      "cost": "gratis",
      "booking": "",
      "highlight": true
     },
     {
      "start": "18:30",
      "end": "21:00",
      "type": "food",
      "area": "Kyoto (Pontocho)",
      "title": "Primera cena kiotoita — obanzai o wagyu",
      "desc": "Dale la bienvenida a Kioto con una cena de obanzai — pequeños platos tradicionales de temporada que cuentan la historia de la cocina budista — o elegí un wagyu de Kioto, suave como manteca, con una copa de sake local. Pontocho tiene restaurantes increíbles en todo su recorrido.",
      "tips": "Mirá los menús expuestos en las vidrieras antes de entrar — la mayoría de los lugares con vista al río piden reserva anticipada los fines de semana.",
      "cost": "¥4.000–9.000 por persona",
      "booking": ""
     },
     {
      "start": "10:45",
      "end": "12:00",
      "type": "food",
      "area": "Kyoto",
      "title": "Llegada a Kioto, dejar bolsos en Candeo y almuerzo temprano",
      "desc": "Llegan a Kioto ya a las 10:15 — bajan en la estación de Kioto, van al hotel Candeo (Karasuma-Rokkaku), dejan el bolso de una noche en recepción (la valija principal ya está allí desde el 23/9) y almuerzan algo liviano en el barrio de Karasuma/Nishiki.",
      "tips": "El check-in oficial es desde las 15:00, pero pueden dejar los bolsos y salir libres a la ciudad.",
      "cost": "¥1.000–2.500 por persona",
      "booking": ""
     },
     {
      "start": "12:15",
      "end": "14:45",
      "type": "sightseeing",
      "area": "Kyoto",
      "title": "Primer contacto con Kioto — Karasuma y las orillas del río Kamo",
      "desc": "La llegada temprana les regala una tarde libre: un paseo tranquilo por el centro de Kioto — los callejones de Karasuma, las orillas del río Kamo y pequeñas tiendas de matcha. Un ritmo relajado para aclimatarse a la ciudad antes de la noche en Gion.",
      "tips": "Guardan el Mercado Nishiki y Fushimi Inari/Arashiyama para mañana (26/9) — hoy solo saborean el ambiente.",
      "cost": "gratis",
      "booking": ""
     }
    ],
    "logistics": {
     "he": "אספו במלון בקיוטו את המזוודה הראשית שנשלחה מטוקיו.",
     "es": "Retiren en el hotel de Kioto la valija principal enviada desde Tokio."
    },
    "cultural": "Gion y Pontocho son dos de los cinco 'hanamachi' — barrios de las flores — de Kioto, donde todavía sobrevive la tradición de la geisha (llamada en Kioto 'geiko', que significa 'mujer del arte'). El ochaya —la casa de té— no es un lugar para tomar té: es un club privado y exclusivo al que solo puede entrar un invitado, para escuchar shamisen, ver danzas y disfrutar de la cocina obanzai. La puerta cerrada y la cortina de bambú no son decoración: son un límite social de siglos. En el centro de esta estética está el concepto 'ma' (間) — el espacio, la pausa, lo que no se dice. La geisha que pasó frente a vos sin mirarte a los ojos no fue grosera: estaba guardando el 'ma' entre ella y vos.",
    "tips": [
     "Los asientos están reservados para trenes específicos (SHINANO 2 a las 08:09 y NOZOMI 61 a las 09:41) — no pierdan la salida temprana de Nagiso. En el trasbordo de Nagoya hay 23 min: los andenes del Shinkansen están lejos del Shinano, así que vayan directo. ⚠️ El boleto no se puede retirar en la estación de Nagiso — retiren el papel antes en una boletería (ej. Nagoya el 23/9) con la tarjeta y el código de 4 dígitos.",
     "La valija grande te espera en Candeo desde el 23/9 — al llegar, pedila en recepción aunque el cuarto no esté listo, y cambiate en el lobby para la noche en Gion.",
     "En Gion (calle Hanamikoji): no se puede fotografiar geishas/maikos de cerca, ni bloquearles el paso, ni tocarlas — hay prohibición municipal. Fotografiá a distancia respetuosa."
    ]
   },
   {
    "date": "2026-09-26",
    "dow": "Sat",
    "city": "Kyoto",
    "title": "Amanecer entre torii — Día 9",
    "summary": "Un día entero con lo mejor de Kioto: subida al alba entre miles de torii bermejos en Fushimi Inari, el bosque de bambú y la serenidad zen de Arashiyama, y el cierre perfecto con una cena de degustación por el Mercado Nishiki.",
    "hotel": "🏨 Candeo Hotels Kyoto Karasuma Rokkaku (✓ reservado · 25→28) · centro de Kioto, 4★",
    "events": [
     {
      "start": "06:45",
      "end": "09:00",
      "type": "sightseeing",
      "area": "Fushimi Inari",
      "title": "Ascenso al alba — Fushimi Inari",
      "desc": "Al romper el día, antes de que lleguen los grupos, recorren miles de torii bermejos que forman un túnel de fuego por la ladera del monte Inari. La luz dorada se filtra entre los arcos y crea una atmósfera entre mágica y surrealista. Es una de las experiencias más románticas e icónicas del Japón.",
      "tips": "Lleguen justo antes del amanecer — media hora después ya empiezan a llegar las multitudes. Usen zapatillas cómodas; el sendero completo hasta la cumbre son 4 km.",
      "cost": "gratis",
      "booking": "",
      "highlight": true
     },
     {
      "start": "09:30",
      "end": "10:15",
      "type": "food",
      "area": "Fushimi",
      "title": "Desayuno cerca de la estación — Fushimi",
      "desc": "Los cafés y pequeños locales junto a la estación de Fushimi Inari ofrecen onigiri caliente, tostadas japonesas clásicas o medialunas de panadería artesanal. Ideal para recargar antes de tomar el tren a Arashiyama.",
      "tips": "Buscá el pequeño Vermilion Coffee a metros de la entrada del santuario — latte de sésamo negro y ambiente local auténtico.",
      "cost": "¥600–1.200 por persona",
      "booking": ""
     },
     {
      "start": "11:15",
      "end": "13:15",
      "type": "nature",
      "area": "Arashiyama",
      "title": "Bosque de bambú y jardín zen de Tenryu-ji",
      "desc": "El bosque de bambú de Arashiyama es uno de los paisajes más hipnóticos del país — los culmos gigantes se mecen y producen un murmullo envolvente. Justo después, el jardín zen del templo Tenryu-ji (Patrimonio UNESCO) despliega una quietud absoluta con su estanque que refleja las colinas.",
      "tips": "⚠️ El traslado de Fushimi a Arashiyama cruza toda Kioto — ~50–60 min (JR vía estación de Kioto). Salgan de Fushimi apenas terminen el desayuno. Entren al jardín de Tenryu-ji inmediatamente después del bambú — los tickets combinados convienen.",
      "cost": "¥500–1.000 por persona (jardín solamente)",
      "booking": "",
      "highlight": true
     },
     {
      "start": "13:15",
      "end": "14:30",
      "type": "food",
      "area": "Arashiyama",
      "title": "Almuerzo junto al río Hozu — yudofu o udon de Kioto",
      "desc": "Los restaurantes a orillas del río Hozu sirven yudofu (tofu en caldo suave de kombu), el plato emblemático de Kioto, y udon casero ancho y reconfortante. Coman con vista al río y a las montañas verdes que lo enmarcan.",
      "tips": "Pedí lugar afuera si el clima lo permite — la vista al río lo vale todo. El restaurante Hakobune, cerca del puente Togetsukyo, es conocido por su yudofu.",
      "cost": "¥1.500–3.000 por persona",
      "booking": ""
     },
     {
      "start": "15:00",
      "end": "16:30",
      "type": "experience",
      "area": "Arashiyama",
      "title": "Tren panorámico Sagano o parque de monos Iwatayama",
      "desc": "El romántico tren panorámico de Sagano atraviesa el valle del río Hozu (25 minutos en cada sentido) entre rocas y bosques — una experiencia lenta y envolvente para los dos. Como alternativa, el parque de monos en la cima del cerro ofrece un encuentro cercano con macacos japoneses y vistas de Kioto a sus pies.",
      "tips": "Para el tren — comprá los boletos temprano cuando llegués a Arashiyama, se agotan rápido. Para el parque de monos — la subida son 20 minutos; llevá agua.",
      "cost": "¥880–1.200 por persona",
      "booking": "Para el tren Sagano: comprá los boletos temprano en la estación Torokko-Saga; en temporada alta se agotan rápido."
     },
     {
      "start": "17:15",
      "end": "18:45",
      "type": "food",
      "area": "Kyoto (Nishiki)",
      "title": "Cena de degustación en el Mercado Nishiki",
      "desc": "\"La cocina de Kioto\" — un pasaje cubierto de 400 años con puestos de encurtidos, tofu ahumado, pescados locales, dulces y platitos para comer parado. Esta es la cena de hoy: caminen de puesto en puesto y armen una comida completa — yakitori, tempura, sashimi fresco, dashimaki (tortilla) y algo dulce para cerrar.",
      "tips": "⚠️ Los puestos del mercado cierran ~18:00 — lleguen hacia las ~17:15 para encontrarlos abiertos. No lleguen con demasiada hambre del almuerzo. Buscá el puesto Aritsugu de cuchillos japoneses. La cola de la noche pueden seguirla en la cercana Pontocho (2 min al este) — hay locales y bares abiertos hasta tarde.",
      "cost": "¥2.500–4.000 por persona (comida a base de picadas)",
      "booking": ""
     },
     {
      "start": "19:00",
      "end": "20:30",
      "type": "sightseeing",
      "area": "Kyoto (Pontocho / Kamogawa)",
      "title": "Noche tranquila a la orilla del río Kamo — Pontocho",
      "desc": "Un cierre de día temprano y relajado (¡arrancaron a las 06:45!): un paseo a la luz de los faroles por el angosto callejón de Pontocho y a lo largo de las orillas del río Kamo, con una parada para el postre — matcha, helado, warabi-mochi o una copa de sake local junto al río. No es otra comida, sino un momento tranquilo para los dos antes de volver al hotel.",
      "tips": "A comienzos de otoño siguen abiertas las 'kawayuka' — terrazas de madera sobre el río; se pueden sentar a un postre o una copa con vista. Mañana (27/9) arranca temprano en Kinkaku-ji, así que una noche temprana viene bien.",
      "cost": "¥800–2.000 por pareja (postre/copa)",
      "booking": ""
     }
    ],
    "cultural": "Los torii rojos de Fushimi Inari no son mera decoración — cada uno es una ofrenda de una empresa o familia a Inari Ōkami, la deidad del arroz, la prosperidad y el comercio. El nombre del donante y la fecha están grabados en la parte posterior de cada arco, así que cuando caminen por ese río naranja-rojizo hacia adentro del monte al amanecer, están cruzando literalmente a través de miles de plegarias humanas por el éxito. Los zorros — kitsune — son los mensajeros de la deidad: los van a encontrar en cada rincón, a veces sosteniendo una llave (del granero de arroz), una rueda (la ley búdica) o una planta. Si querés pedirle algo a Inari, hacé dos reverencias, aplaudí dos veces, y guardá tu deseo en silencio.",
    "tips": [
     "Fushimi Inari a las 06:45: subí al menos hasta el Yotsutsuji (el cruce principal, ~30 min) — la vista de Kioto al amanecer desde ahí es de lo más lindo de Japón. Llevá una linternita de cabeza (se venden en los konbini).",
     "Tren Sagano: reservá apenas abre la venta — web oficial o mostrador Torokko Saga (llegá 30 min antes). Elegí el lado izquierdo del tren (lado del río Hozu) para la mejor vista.",
     "Mercado Nishiki: los mejores puestos están en el medio — buscá los encurtidos (tsukemono) de Ueno y el pescado de Daiyasu. Llevá billetes chicos — a la mayoría no le gusta dar vuelto de ¥1.000."
    ]
   },
   {
    "date": "2026-09-27",
    "dow": "Sun",
    "city": "Kyoto",
    "title": "Día 10 — Oro, Kimono y Maiko en Kioto",
    "summary": "Un día completo en la Kioto más auténtica: el pabellón dorado al amanecer, las calles empedradas de Higashiyama, una ceremonia del té en kimono para los dos, un menú de soba de celebración en Juu-go (✓ reservado) cerca de Ginkaku-ji, y una noche de magia con una Maiko.",
    "hotel": "🏨 Candeo Hotels Kyoto Karasuma Rokkaku (✓ reservado · 25→28) · centro de Kioto, 4★",
    "events": [
     {
      "start": "09:00",
      "end": "10:00",
      "type": "sightseeing",
      "area": "Kyoto (Northwest)",
      "title": "Kinkaku-ji — El Pabellón Dorado",
      "desc": "Llegar exactamente con la apertura (09:00) les permite disfrutar del reflejo perfecto del pabellón en el estanque antes de que lleguen las multitudes. El aire fresco de septiembre hace que el dorado brille de una manera que no se ve en las fotos. El pabellón es un recorrido corto — una hora alcanza con calma.",
      "tips": "Llegá a las 09:00 en punto (hora de apertura) — las multitudes aparecen después. Salí ya a las 10:00: el traslado a Kiyomizu es al extremo opuesto de la ciudad (ver el tip del taxi en el evento siguiente).",
      "cost": "¥500 por persona",
      "booking": ""
     },
     {
      "start": "10:45",
      "end": "12:30",
      "type": "sightseeing",
      "area": "Kyoto (Higashiyama)",
      "title": "Kiyomizu-dera + pendientes de Ninenzaka y Sannenzaka",
      "desc": "Kiyomizu-dera se alza sobre una plataforma de madera con vistas panorámicas a Kioto — en septiembre los primeros toques otoñales empiezan a colorearse. Desde el templo bajás por las calles adoquinadas de Ninenzaka y Sannenzaka, intactas y llenas de tiendas de artesanía y casas de té antiguas. Esto es Kioto tal como la soñaste.",
      "tips": "⚠️ El salto de Kinkaku-ji (NO) a Kiyomizu (SE) cruza toda la ciudad — tomá un taxi (~30–40 min, ~¥2.500). En bus son 50–60 min y no entra en la ventana. Saliendo 10:00 de Kinkaku-ji quedan ~45 min de margen cómodo. El camino entre Ninenzaka y Sannenzaka es corto y encantador — no lo apurés.",
      "cost": "¥400 por persona (entrada a Kiyomizu-dera)",
      "booking": ""
     },
     {
      "start": "12:45",
      "end": "13:30",
      "type": "food",
      "area": "Kyoto (Higashiyama)",
      "title": "Almuerzo liviano",
      "desc": "Un bocado liviano en Higashiyama — la comida grande del día es el menú de soba en Juu-go a las 16:00, así que guardá el apetito. Un yudofu chico, un onigiri o un dulce con matcha alcanzan perfecto.",
      "tips": "No te llenes — el menú de soba de las 16:00 es abundante. Evitá los lugares con la carta traducida muy llamativa en el vidrio — suelen ser solo para turistas.",
      "cost": "¥800–1.500 por persona",
      "booking": ""
     },
     {
      "start": "13:30",
      "end": "15:30",
      "type": "experience",
      "area": "Kyoto (Gion)",
      "title": "Taller de kimono + ceremonia del té — MAIKOYA Gion",
      "desc": "Kimono completo para los dos y ceremonia del té auténtica en una casa de té antigua (propiedad cultural registrada) en Gion. Adelantado a la tarde para conectar con la soba de las 16:00 en Jodoji. Elegí la opción privada. Reservá con tiempo — los fines de semana se llenan.",
      "tips": "Reservá con tiempo un paquete para pareja; confirmá que el taller se desarrolle en inglés. ⚠️ Pedí a MAIKOYA terminar la parte activa hacia las ~15:15 para tener tiempo de sacarse el kimono y salir a las 15:30. Reservá un taxi por anticipado a Jodoji (~15 min, ~¥1.800) — el bus tarda 25–35 min y no hay margen para el asiento de soba ya pagado de las 16:00.",
      "cost": "¥5.000–10.000 por persona",
      "booking": "mai-ko.com — MAIKOYA Gion",
      "highlight": true
     },
     {
      "start": "16:00",
      "end": "17:30",
      "type": "food",
      "area": "Kyoto (Jodoji / Ginkakuji)",
      "title": "✓ Menú de soba de celebración — Juu-go (十五)",
      "desc": "Reservado y pagado por adelantado (TableCheck) · 2 personas · menú de soba a ¥3.500 por persona (¥7.000 total). Restaurante de soba íntimo en Jodoji, cerca de Ginkaku-ji (el Pabellón de Plata) y el Camino del Filósofo — soba artesanal en un ambiente tranquilo. Después vale un paseo corto por el Camino del Filósofo al atardecer.",
      "tips": "Dirección: Kamiminamida-cho, Jodoji, Sakyo-ku, Kioto 606-8405 · tel. 075-708-5367. Llegá unos minutos antes de las 16:00 — la reserva es puntual. El pago ya está hecho por adelantado.",
      "cost": "¥7.000 por pareja (pagado por adelantado ✓)",
      "booking": "TableCheck — ✓ confirmado",
      "highlight": true
     },
     {
      "start": "18:30",
      "end": "20:30",
      "type": "culture",
      "area": "Kyoto (Gion)",
      "title": "Experiencia Maiko/Geiko — ozashiki en Gion",
      "desc": "Una velada con una maiko de verdad — por ejemplo en Gion Hatanaka: kaiseki, danza, juegos de ozashiki y fotos. Incluye la cena, así que es la cena del día (la soba de las 16:00 es liviana y deja lugar de sobra). No es todas las noches — confirmá fecha y reservá.",
      "tips": "Reservá con mucha anticipación — las experiencias realmente auténticas (no el show para turistas) se agotan rápido. Podés pedir que la Maiko les enseñe un juego tradicional en profundidad.",
      "cost": "¥15.000–25.000 por persona",
      "booking": "gionhatanaka.jp",
      "highlight": true
     }
    ],
    "cultural": "El Pabellón Dorado — Kinkaku-ji — fue construido en 1397 como villa de retiro del shogun Ashikaga Yoshimitsu, y tras su muerte se convirtió en templo zen budista. Sus tres pisos están cubiertos de pan de oro real, pero cada piso combina un estilo arquitectónico distinto: el primero evoca el palacio aristocrático, el segundo el salón guerrero, el tercero el santuario zen. Esta fusión deliberada entre mundos se llama 'yugō' (融合) en japonés — unidad a través de la diferencia. Igualmente central: el estanque Kyōkochi que refleja el pabellón encarna el concepto zen de 'yūgen' — una belleza profunda que se revela solo en el reflejo, nunca por completo.",
    "tips": [
     "Kinkaku-ji cuesta solo ¥500 — uno de los sitios más baratos de Japón para su fama. Guardá la entrada: es un ofuda, un amuleto de papel con el sello del templo, no un ticket cualquiera.",
     "En Ninenzaka y Sannenzaka — no entres con kimono alquilado a las tiendas con cartel de 'prohibido fotografiar'; la calle es libre. Comer y tomar caminando (aruki-gui) no está bien visto — comé al lado del puesto.",
     "Ceremonia del té: al tomar el matcha, girá el bol dos o tres veces en sentido horario antes de beber — respeto al anfitrión. Después girá de vuelta y limpiá el borde por donde bebiste."
    ]
   },
   {
    "date": "2026-09-28",
    "dow": "Mon",
    "city": "Osaka",
    "title": "Osaka — castillo, sumo y Dotonbori",
    "summary": "Se mudan a Osaka, la ciudad más sabrosa y ruidosa de Japón. Un día que mezcla historia imponente, el paraíso del anime de Nipponbashi y una noche de atracones gloriosos por el Dotonbori.",
    "hotel": "🏨 Onyado Nono Namba (✓ reservado) · onsen natural · sin tatuajes visibles",
    "events": [
     {
      "start": "09:00",
      "end": "10:30",
      "type": "transport",
      "area": "Kyoto עד Osaka",
      "title": "Traslado de Kyoto a Osaka",
      "desc": "Un tren rápido y cómodo conecta Kyoto con Osaka en menos de 30 minutos. Mandan las valijas adelante al hotel y llegan livianos. El check-in los espera al terminar la mañana.",
      "tips": "Usá el servicio de Forward Luggage desde el hotel de Kyoto o a través del Airporter — las valijas aparecen mágicamente en la habitación de Osaka. La mayoría de los hoteles las reciben desde temprano.",
      "cost": "¥1.400–1.800 por persona (Shinkansen/JR Express)",
      "booking": "",
      "dur": "~15–30 min"
     },
     {
      "start": "10:30",
      "end": "12:00",
      "type": "sightseeing",
      "area": "Osaka (Osakajokoen)",
      "title": "Castillo de Osaka — parque y fortaleza",
      "desc": "Osakajo es una de las postales más icónicas de Japón, rodeada de fosos y en septiembre cubierta de verde intenso. Recorren el parque amplio y sacan fotos de la torre desde todos los ángulos. La entrada al parque es gratis; subir adentro es opcional.",
      "tips": "El parque es grande y tiene sombra — zapatillas sí o sí. Si suben a la torre, el piso 8 tiene una vista panorámica impresionante de toda la ciudad.",
      "cost": "gratis (parque) / ¥600 por persona (interior del castillo)",
      "booking": ""
     },
     {
      "start": "12:45",
      "end": "13:45",
      "type": "food",
      "area": "Osaka (Kuromon)",
      "title": "Mercado Kuromon — mariscos, wagyu y frituras",
      "desc": "Kuromon Ichiba es \"la cocina de Osaka\": un mercado cubierto y larguísimo lleno de puestos de mariscos frescos, brochettes de wagyu y ostras a la plancha para comer ahí mismo. Caminan de puesto en puesto comiendo con las manos, como corresponde. La energía del lugar es adictiva.",
      "tips": "Lleguen con hambre pero sin llenarse — la noche de comida en el Dotonbori es larga y generosa. Muchos puesteros indican qué es picante con un cartelito.",
      "cost": "¥1.500–3.500 por persona",
      "booking": ""
     },
     {
      "start": "14:00",
      "end": "16:30",
      "type": "anime",
      "area": "Osaka (Nipponbashi / Den Den Town)",
      "title": "Den Den Town — el paraíso del anime y los videojuegos",
      "desc": "Nipponbashi es el Akihabara de Osaka: calles apretadas con tiendas de figuras, manga, videojuegos retro, cosplay y electrónica de segunda mano que parece sacada de un sueño. Se pueden separar una hora y encontrarse cargados de bolsas. El nivel de tentación es altísimo.",
      "tips": "Super Potato y Mandarake son paradas obligadas para los amantes del retro. Si están buscando figuras de edición limitada, mejor ir con una lista específica para no perderse.",
      "cost": "gratis (entrada) / compras según el estado de la billetera",
      "booking": ""
     },
     {
      "start": "17:00",
      "end": "20:00",
      "type": "experience",
      "area": "Osaka (Namba)",
      "title": "🥋 Show de sumo — Sumo Hall Hirakuza",
      "desc": "Puertas 17:00, bento y asientos alrededor del dohyo; el show ~18:00–20:00. Ya reservado — pedí primera fila. A 10 min a pie de Den Den Town.",
      "tips": "Llegar ~15 min antes. Después del show — directo a Dotonbori.",
      "cost": "✓ Pagado (₪537,90 la pareja)",
      "booking": "✓ Reservado — reserva PFB554612",
      "highlight": true
     },
     {
      "start": "20:15",
      "end": "23:00",
      "type": "food",
      "area": "Osaka (Dotonbori)",
      "title": "Noche osaka-ense — Dotonbori y Namba encendidos",
      "desc": "El Dotonbori de noche es uno de los espectáculos más icónicos de Japón: carteles de neón gigantes, olor a takoyaki en cada esquina y el famoso letrero luminoso del corredor Glico iluminando el canal. Van de puesto en puesto — takoyaki (bolitas de pulpo), kushikatsu (brochettes fritas), okonomiyaki (la tortilla savory de Osaka) y cerveza bien fría. Una noche entera de festejo para los dos.",
      "tips": "La regla del kushikatsu: nunca se vuelve a mojar una brochette que ya mordieron — te dan la salsa aparte. Kushikatsu Daruma es la cadena clásica y Kushi Katsu Tanaka es más accesible sin tanta fila.",
      "cost": "¥3.000–6.000 por persona",
      "booking": "",
      "highlight": true
     }
    ],
    "logistics": {
     "he": "שלחו את המזוודה מ-Candeo כבר בערב 27.9 (takkyubin) כדי שתגיע ל-Onyado Nono ב-28.9 אחה״צ. אם שולחים בבוקר ה-28 — תגיע רק ב-29.9, אז קחו תיק-לילה ללילה הראשון.",
     "es": "Despachen la valija desde Candeo ya la noche del 27/9 (takkyubin) para que llegue a Onyado Nono el 28/9 a la tarde. Si la mandan la mañana del 28, llega recién el 29 — lleven un bolso de una noche para la primera noche."
    },
    "cultural": "El sumo no es solo un deporte: es un ritual sintoísta de más de 1.500 años. Antes de cada combate, los luchadores esparcen sal sobre el dohyo (el ring de pelea) para purificarlo de espíritus malignos; el pisotón fuerte en el suelo sirve para ahuyentar demonios. Todos los gestos — la lentitud, el lanzamiento de sal, las miradas fijas — provienen de ceremonias celebradas ante los dioses. Cuando llegués a Hirakuza, observá el mawashi (el cinturón ceremonial) y la expresión severa de los rikishi: no es arrogancia, es un estado de concentración sagrada llamado \"haki\" — presencia total de cuerpo y alma en el instante previo al contacto.",
    "tips": [
     "Castillo de Osaka un lunes — el jardín Nishinomaru cierra, pero la torre abre 9:00-17:00 (último ingreso 16:30). La foto clásica desde afuera siempre está — apuntá al puente Gokuraku-bashi temprano por la buena luz.",
     "Hirakuza — ¡reservá con anticipación! El show 17:00 (apertura) + 18:00 (inicio) incluye bento y asientos alrededor del dohyo. Pedí primera fila — más cerca de los luchadores.",
     "De Den Den Town a Namba Parks (Hirakuza) hay ~10-12 min caminando al este por Sennichimae — sin transporte. Salí de Den Den Town 16:40 para llegar con margen."
    ]
   },
   {
    "date": "2026-09-29",
    "dow": "Tue",
    "city": "Osaka",
    "title": "Ciervos, Buda y una noche arcoíris",
    "summary": "Un día de excursión a Nara — ciervos sagrados y un Buda gigante — y a la noche un tour gastronómico por Shinsekai (✓ reservado) antes de festejar en Doyama-cho, el barrio gay de la ciudad.",
    "hotel": "🏨 Onyado Nono Namba (✓ reservado) · onsen natural · sin tatuajes visibles",
    "events": [
     {
      "start": "08:15",
      "end": "09:15",
      "type": "transport",
      "area": "Osaka עד Nara",
      "title": "Viaje a Nara",
      "desc": "Un trayecto cómodo en tren desde Osaka directo a Nara — unos 45 minutos en el Kintetsu o JR. La mañana fresca es perfecta para salir temprano y aprovechar el día.",
      "tips": "Tomá el Kintetsu desde Namba — es más rápido y directo que el JR. Guardá el JR Pass para los tramos que lo justifiquen.",
      "cost": "¥1.000–1.200 por persona",
      "booking": "",
      "dur": "~45 min"
     },
     {
      "start": "09:15",
      "end": "13:00",
      "type": "sightseeing",
      "area": "Nara (Nara Park)",
      "title": "Nara Park y el Gran Buda de Todai-ji",
      "desc": "Miles de ciervos libres deambulan por el parque y te hacen reverencias como si te conocieran de siempre — una ternura que descoloca. Adentro del templo Todai-ji te espera uno de los Budas de bronce más grandes del mundo: 15 metros de altura que te dejan sin palabras. Un momento de belleza y asombro que van a recordar siempre los dos.",
      "tips": "Comprá las galletitas de ciervo (shika senbei) en los puestitos — es imposible no enamorarse de la experiencia. Llegá a Todai-ji antes de las 10:00 para evitar los grupos grandes.",
      "cost": "¥600 por persona (entrada a Todai-ji) + ¥200 las galletitas",
      "booking": "",
      "highlight": true
     },
     {
      "start": "13:00",
      "end": "14:00",
      "type": "food",
      "area": "Nara (Naramachi)",
      "title": "Almuerzo en Naramachi",
      "desc": "Naramachi es un barrio de comerciantes antiguos con pequeños restaurantes de cocina tradicional. Buscá el kakinoha-zushi — sushi envuelto en hoja de arce, especialidad local — o un restaurante de tofu artesanal de los que no encontrás en ningún otro lado.",
      "tips": "Los restaurantes buenos son chiquitos y se llenan rápido — no esperés después de las 13:00 para entrar. El pasaje Higashi-muki Shotengai es un buen punto de partida.",
      "cost": "¥1.200–2.500 por persona",
      "booking": ""
     },
     {
      "start": "14:00",
      "end": "15:30",
      "type": "sightseeing",
      "area": "Nara (Naramachi)",
      "title": "Paseo por las callejuelas de Naramachi",
      "desc": "El museo de Naramachi cierra los martes — hoy es día de callejones: templo Gangoji, el museo de juguetes Karakuri (abierto) y las casas de mercaderes antiguas.",
      "tips": "Buscá el Naramachi Koshi-no-ie (casa tradicional abierta al público, entrada gratis) para asomarte a la vida de los comerciantes de otra época.",
      "cost": "Gratis (compras a gusto)",
      "booking": ""
     },
     {
      "start": "15:45",
      "end": "17:00",
      "type": "transport",
      "area": "Nara עד Osaka (Shinsekai)",
      "title": "Regreso a Osaka + refresco rápido",
      "desc": "Viaje de vuelta de Nara a Osaka (~45 min) y un refresco rápido antes del tour gastronómico. Apunten a la estación Dobutsuen-mae (Shinsekai) — el punto de encuentro del tour.",
      "tips": "De Namba a Shinsekai ~10 min (línea Midosuji hasta Dobutsuen-mae). Lleguen al punto de encuentro 10 min antes de las 17:30.",
      "cost": "¥1.000–1.200 por persona (viaje de regreso)",
      "booking": ""
     },
     {
      "start": "17:30",
      "end": "20:30",
      "type": "food",
      "area": "Osaka (Shinsekai)",
      "title": "✓ Tour gastronómico nocturno por Shinsekai — con guía local",
      "desc": "✓ Reservado · 29/9 a las 17:30 · 2 personas · tour de ~3 horas. Recorrido por los callejones de Shinsekai — 5 comedores escondidos y ~10 platos, junto a la torre Tsutenkaku y la estatua Billiken. Punto de encuentro: estación Dobutsuen-mae; el tour termina en Dotonbori. Es la cena de hoy — ¡vengan con hambre!",
      "tips": "Encuentro en Dobutsuen-mae (verificá la salida exacta en el voucher de Klook — normalmente salida 1 / cerca del Mega Donki). El guía tiene un cartel. Termina en Dotonbori — cómodo para seguir la noche.",
      "cost": "✓ pagado · 2 personas",
      "booking": "✓ Reservado — Klook · Osaka Shinsekai Night Food Tour",
      "highlight": true
     },
     {
      "start": "21:00",
      "end": "23:00",
      "type": "nightlife",
      "area": "Osaka (Doyama-cho)",
      "title": "Noche gay en Doyama-cho — FrenZy y Grand Slam",
      "desc": "Doyama-cho es el barrio gay central de Osaka — edificios y calles repletos de bares amigables, todos chicos e íntimos. FrenZy es conocido por su energía y sus eventos, Grand Slam es un refugio clásico con vibra relajada. Esta noche — festejen con orgullo y amor.",
      "tips": "Doyama-cho recién arranca después de las 21:00 — no lleguen demasiado temprano. La mayoría de los bares cobran una entrada chica (¥500–1.000) que incluye la primera consumición.",
      "cost": "¥2.000–5.000 por persona (entradas + tragos)",
      "booking": "",
      "highlight": true
     }
    ],
    "cultural": "En el Parque de Nara, los ciervos no son mera decoración — son animales sagrados (神鹿, shinkaku) del dios del santuario Kasuga Taisha, cuya divinidad llegó hace 1.300 años montada sobre un ciervo blanco. Cada ciervo que deambula por el parque es considerado mensajero divino, y durante siglos matar uno se castigaba con la muerte. Hoy siguen gozando de protección legal oficial, pero el vínculo ritual pervive: las campanas de Kasuga suenan al alba como 'convocatoria' a las presencias divinas, y en la ceremonia otoñal Shika-no-Tsunokiri se cortan los cuernos de los ciervos en un ritual que invita a los presentes como testigos del pacto entre el mundo humano y el sagrado.",
    "tips": [
     "La entrada al Gran Salón del Buda (Daibutsuden) cuesta ¥800 p/persona, solo efectivo en boletería. Comprá el combo ¥1.200 (salón + museo) si te interesa el museo de enfrente — vale la pena.",
     "Tomá el Kintetsu desde Namba directo a Nara (36 min, ¥680) — mucho más cerca y rápido que el JR, y sale al lado del hotel. El JR Pass no cubre Kintetsu, pero la diferencia es mínima.",
     "Doyama-cho está en Kita (Umeda), no en Namba — tomá el subte Midosuji al norte (7 min, ¥240) de Namba a Umeda, y 5 min a pie. FrenZy abre 20:00 los martes, Grand Slam a las 21:00."
    ]
   },
   {
    "date": "2026-09-30",
    "dow": "Wed",
    "city": "Tokyo",
    "title": "Día 13 — De vuelta a Tokyo: Yanaka eterna",
    "summary": "Se despiden de Osaka con un desayuno tranquilo y toman el Shinkansen de regreso a Tokyo. La tarde los espera con los gatos y el encanto retro de Yanaka, a la noche una inmersión en el arte digital de teamLab Planets en Toyosu, y luego una cena para festejar los 40.",
    "hotel": "🏨 Tokyu Stay Shinjuku (✓ reservado · 30→2.10) · Shinjuku · lavarropas en la habitación",
    "events": [
     {
      "start": "08:30",
      "end": "09:30",
      "type": "food",
      "area": "Osaka",
      "title": "Último desayuno en Osaka",
      "desc": "Un último recorrido por el barrio antes de partir — café japonés, tostadas con manteca y salsa de soja, o unos takoyaki madrugadores para el camino. Que Osaka cierre con una buena despedida.",
      "tips": "⚠️ El tren sale de Shin-Osaka a las 10:39 — cierren la mañana tranquilos hasta las 09:30 y no estiren el desayuno.",
      "cost": "¥800–1.500 por persona",
      "booking": ""
     },
     {
      "start": "09:30",
      "end": "10:25",
      "type": "transport",
      "area": "Namba a Shin-Osaka",
      "title": "Check-out y traslado a la estación Shin-Osaka",
      "desc": "Check-out del Onyado Nono con las valijas y después la línea Midosuji de Namba a Shin-Osaka (~12 min, directo). Llegan a la estación ~10:25 — tiempo de sobra para comprar el bento del tren y encontrar el andén del Tokaido.",
      "tips": "Compren un ekiben (bento de tren) y bebida en la estación antes de subir — hay puestos muy buenos en el nivel de los molinetes del shinkansen. Con valijas, la Midosuji a esa hora está tranquila.",
      "cost": "¥290 por persona (Midosuji, IC)",
      "booking": "",
      "dur": "~55 min con margen"
     },
     {
      "start": "10:39",
      "end": "13:06",
      "type": "transport",
      "area": "Shin-Osaka a Tokio",
      "title": "✓ NOZOMI 358 a Tokio (reservado)",
      "desc": "✓ Reservado · NOZOMI 358 (N700, 16 vagones) · Shin-Osaka 10:39 → Tokio 13:06 · vagón 9, asientos 1C+1D · Seat with Oversized Baggage Area (espacio garantizado para valija grande) · tarifa Hayatoku-3 · reserva 2002 · ¥33.120 la pareja. Dos horas y media de transición suave entre dos metrópolis.",
      "tips": "⚠️ 1C y 1D son dos asientos de pasillo a cada lado del corredor (fila 3+2) — no están juntos. 🗻 En sentido Osaka→Tokio el Fuji se ve del lado izquierdo (fila A/B/C, o sea el lado del 1C) cerca de las 11:45, después de Shin-Fuji. Para subir: escanear el QR-Ticket, retirar el boleto en la máquina, o asociar la tarjeta IC a los asientos y pasar la Suica por el molinete.",
      "cost": "✓ ¥33.120 la pareja (pagado · reserva 2002)",
      "booking": "✓ Reservado — smartEX · NOZOMI 358 · vagón 9, asientos 1C+1D · reserva 2002",
      "dur": "~2:27 h"
     },
     {
      "start": "14:45",
      "end": "16:15",
      "type": "sightseeing",
      "area": "Yanaka (Nippori)",
      "title": "Yanaka — el barrio que detuvo el tiempo",
      "desc": "Yanaka es uno de los pocos barrios de Tokyo que sobrevivió los bombardeos y la demolición modernizadora — la calle Yanaka Ginza es un paseo retro con tienditas, templos silenciosos y gatos que caminan como dueños del lugar. Caminá despacio, sacá fotos y tocá la textura real de Tokyo.",
      "tips": "La entrada al cementerio Yanaka Cemetery es gratis y vale la pena — árboles enormes, la tumba de los Tokugawa y un silencio absoluto.",
      "cost": "Gratis (compras a elección)",
      "booking": "",
      "highlight": true
     },
     {
      "start": "18:30",
      "end": "20:00",
      "type": "experience",
      "area": "Toyosu (teamLab Planets)",
      "title": "✓ teamLab Planets, Toyosu (reservado)",
      "desc": "✓ Reservado · entrada 18:30–19:00 · 2 adultos. La experiencia de arte digital más impactante de Japón — bajás descalzo al agua, te acostás bajo flores infinitas, te sumergís entre luces que responden al tacto. La visita dura ~1,5 h (hasta ~20:00).",
      "tips": "Lleguen dentro de la ventana de entrada 18:30–19:00 (más tarde no dejan entrar). Usá ropa que se pueda arremangar (piernas y tobillos se mojan). Desde Toyosu son ~15 min a Ginza o ~10 min a Tsukiji para la cena.",
      "cost": "¥3.200–3.600 por persona (pagado)",
      "booking": "✓ Reservado — teamLab Planets · entrada 18:30–19:00 · 2 adultos",
      "highlight": true
     },
     {
      "start": "20:30",
      "end": "22:00",
      "type": "food",
      "area": "Tokyo (Ginza / Tsukiji)",
      "title": "Cena de festejo — Ginza/Tsukiji",
      "desc": "Después de teamLab (salida ~20:00) — desde Toyosu son ~15 min a Ginza (línea Yurakucho) o ~10 min a Tsukiji, un recorrido limpio sin zigzag. Una cena para festejar los 40: sushi de nivel, kaiseki o un bistró japonés íntimo. Tip: si no quieren dos cenas en Ginza seguidas (el 1/10 es la cena de despedida en Ginza), Tsukiji junto al agua está aún más cerca y es excelente.",
      "tips": "Buscá lugares con asientos en la barra frente a la cocina — ver al chef trabajar es parte de la experiencia; presentate como pareja en festejo para un trato especial.",
      "cost": "¥5.000–9.000 por persona",
      "booking": "",
      "highlight": true
     }
    ],
    "logistics": {
     "he": "✓ לוקחים את המזוודות בשינקנסן לטוקיו — המושבים שנסגרו (NOZOMI 358, קרון 9, 1C+1D) הם Seat with Oversized Baggage Area, כלומר מקום מובטח למזוודה גדולה מאחורי הכיסא. אין צורך ב-takkyubin (שליחה מאוסקה מגיעה רק למחרת). בטוקיו: משאירים את המזוודות ב-Tokyu Stay שינג'וקו לפני היציאה ליאנאקה.",
     "es": "✓ Llevan las valijas en el shinkansen a Tokio — los asientos reservados (NOZOMI 358, vagón 9, 1C+1D) son Seat with Oversized Baggage Area, o sea espacio garantizado para la valija grande detrás del asiento. No hace falta takkyubin (desde Osaka llegaría recién al día siguiente). En Tokio: dejan las valijas en el Tokyu Stay Shinjuku antes de salir para Yanaka."
    },
    "cultural": "Yanaka sobrevivió a los siglos no porque la reconstruyeron, sino porque no la quemaron. Mientras el resto de Tokio fue borrado dos veces — por el terremoto de 1923 y los bombardeos de 1945 —, Yanaka permaneció intacta: sus casas de madera, sus cementerios budistas, sus callejuelas retorcidas. El concepto que subyace a todo esto se llama shitamachi — la 'ciudad baja', el barrio de los comerciantes, artesanos y gente común de la época Edo. A diferencia de los señoríos en las colinas, el shitamachi cultivaba otra nobleza: humana, cálida y ruidosa, donde el espíritu del vecindario en sí es considerado algo que vale la pena preservar.",
    "tips": [
     "✓ NOZOMI 358, vagón 9, asientos 1C+1D (reserva 2002). En sentido Osaka→Tokio el monte Fuji se ve del lado izquierdo — fila A/B/C, o sea el lado del asiento 1C — cerca de las 11:45, justo después de Shin-Fuji. Ojo que 1C y 1D quedan a cada lado del pasillo, así que el que va en 1D tiene que cruzar para la foto. Llegá al andén 10 min antes — los trenes salen puntuales al segundo.",
     "En Yanaka: comprá menchi-katsu (croquetas de carne) calientes en la calle Yanaka Ginza — se comen caminando (aruki-gui). No te pierdas la escalera Yuyake Dandan para la foto de la calle desde arriba.",
     "En Shibuya: Loft (7 pisos) y Tokyu Hands para accesorios de viaje, cosmética y souvenirs únicos. Si buscás anime/música, el Village Vanguard de Shibuya es excelente."
    ]
   },
   {
    "date": "2026-10-01",
    "dow": "Thu",
    "city": "Tokyo",
    "title": "Día 14 — Ghibli, luz y despedida en Tokio",
    "summary": "El día más emotivo del viaje: una mañana de fantasía en el Museo Ghibli, una tarde tranquila en Kichijoji y el parque Inokashira con las últimas compras en Shibuya, y una cena de celebración con omakase que cierra con broche de oro el cumpleaños 40 de Ezequiel. Tokio se despide a lo grande.",
    "hotel": "🏨 Tokyu Stay Shinjuku (✓ reservado · 30→2.10) · Shinjuku · lavarropas en la habitación",
    "events": [
     {
      "start": "09:30",
      "end": "12:30",
      "type": "experience",
      "area": "Tokyo (Mitaka)",
      "title": "Museo Ghibli, Mitaka",
      "desc": "El reino fantástico de Miyazaki te recibe con habitaciones secretas, el robot gigante en la terraza y cortometrajes exclusivos que no vas a encontrar en ningún otro lugar. No es un museo — es entrar a vivir adentro de un sueño animado.",
      "tips": "Llegá exactamente a la hora de entrada que reservaste — no dejan entrar antes. Comprá el voucher de tira de film en la entrada, es el souvenir más especial que te podés llevar.",
      "cost": "¥1.000 por persona",
      "booking": "Lawson Ticket — 10/9 10:00 JST",
      "highlight": true
     },
     {
      "start": "13:00",
      "end": "14:00",
      "type": "food",
      "area": "Tokyo (Kichijoji)",
      "title": "Almuerzo en Kichijoji, cerca de Inokashira Park",
      "desc": "El barrio más querido de Tokio tiene callejuelas llenas de bares pequeños, comida de la calle y cafés con vista al lago del parque. Probá los kushi-katsu de los callejones traseros o tomate un café con leche mirando el agua.",
      "tips": "El Harmonica Yokocho (justo detrás de la estación) está lleno de opciones riquísimas y baratas. No te perdas el helado de sésamo negro si hay.",
      "cost": "¥1.200–2.500 por persona",
      "booking": ""
     },
     {
      "start": "15:00",
      "end": "17:30",
      "type": "shopping",
      "area": "Shibuya / Harajuku",
      "title": "Últimas compras — Shibuya y Harajuku",
      "desc": "De Kichijoji directo por la línea Inokashira a Shibuya (~15 min). Takeshita Street para el hype, Omotesando para diseño y Cat Street para lo escondido. El momento perfecto para cazar los últimos regalos antes de la cena de despedida.",
      "tips": "Tokyu Hands y Loft en Shibuya, Village Vanguard en Harajuku — anime, gadgets y souvenirs raros que no vas a encontrar en el aeropuerto. Guardá lugar en la valija.",
      "cost": "¥2.000–10.000 por persona (según tentación)",
      "booking": ""
     },
     {
      "start": "19:00",
      "end": "21:30",
      "type": "food",
      "area": "Tokyo (Ginza)",
      "title": "Cena de despedida — omakase de sushi o kaiseki, Ginza",
      "desc": "La última noche pide altura: un chef que te prepara pieza por pieza el mejor sushi de tu vida, o una kaiseki que te manda de vuelta a casa entendiendo de qué trata la cocina japonesa de verdad. Ginza es el lugar para eso.",
      "tips": "Reservá con al menos un mes de anticipación — los omakase de Ginza se llenan rápido. Pedile al concierge del hotel que te ayude con la reserva si hay barrera de idioma.",
      "cost": "¥15.000–30.000 por persona",
      "booking": "Reservá la cena de despedida con anticipación — es imprescindible",
      "highlight": true
     },
     {
      "start": "22:00",
      "end": "23:59",
      "type": "nightlife",
      "area": "Shinjuku Ni-chome",
      "title": "Última copa en Shinjuku Ni-chome",
      "desc": "Ni-chome — el barrio gay de Tokio — se despide de ustedes con calidez y sin prejuicios. Campy! Bar ofrece kitsch vocal y amor sin condiciones; Eagle Tokyo Blue es más oscuro y con ambiente mezclado. Brindan por los 40, por Japón y por ustedes dos.",
      "tips": "Ni-chome es pequeño — hasta caminar por la calle de noche se siente como una fiesta. Para Campy! no hace falta reserva, llegás y listo.",
      "cost": "¥800–2.000 por persona (tragos)",
      "booking": ""
     }
    ],
    "cultural": "El Museo Ghibli no es un museo de cine — es un templo al *ma* (間), el concepto estético japonés del espacio vacío, la pausa, el aliento entre las cosas. Miyazaki lo diseñó sin recorrido fijo: cada visitante deambula según su intuición y descubre detalles que su compañero no vio. No es casualidad — en el *ma*, el camino es el contenido. El Totoro gigante que te hace sonreír hasta la salida es además una figura raíz: un *kami* del bosque que custodia el umbral entre el mundo de los niños y el de los espíritus. El 1° de octubre, con el primer viento otoñal llegando a Mitaka, valé la pena detenerse un momento a sentirlo.",
    "tips": [
     "Entradas Ghibli — Lawson Ticket: alarma 9:55 JST el 10/9/2026. Abrí el sitio con tiempo, a veces se agotan en 3–5 min. Máx. 4 entradas, fecha y hora fijas — elegí la franja 09:30 para aprovechar el día.",
     "teamLab Planets — llevá ropa que puedas arremangar en brazos y piernas: hay instalaciones con agua hasta el tobillo. Guardá el celu en un bolsillo seguro — casi todo se refleja hacia arriba cuando levantás los brazos.",
     "Omakase en Ginza — reservá 2–3 meses antes por Tableall, byFood u Omakase.in. Buscá restós con 'English menu'; avisá que es una cena de despedida — a los chefs japoneses les gusta sumar un plato especial."
    ]
   },
   {
    "date": "2026-10-02",
    "dow": "Fri",
    "city": "Tokyo",
    "title": "Día 15 — Sayonara, Japón",
    "summary": "La última mañana en Tokyo llega con las valijas listas y el corazón lleno. Desayuno rápido, el tren del alba hacia Narita y una última mirada a los carteles de neón antes de que el avión los lleve de vuelta a casa con los 40 años festejados y un amor sellado en Japón.",
    "hotel": "✈️ Día de salida — sin alojamiento",
    "events": [
     {
      "start": "05:45",
      "end": "06:10",
      "type": "food",
      "area": "Tokyo",
      "title": "Desayuno rápido y últimos preparativos",
      "desc": "Café caliente, un onigiri o una medialuña del konbini de la esquina y una revisión final para asegurarse de que los recuerdos viajan bien entre la ropa. Un momento tranquilo antes del apuro.",
      "tips": "Revisá el saldo de la Suica que sobra — podés pedir la devolución en efectivo en el mostrador JR de la terminal.",
      "cost": "¥600–1.200 por persona",
      "booking": ""
     },
     {
      "start": "06:30",
      "end": "08:45",
      "type": "transport",
      "area": "Shinjuku עד Narita T1",
      "title": "N'EX a Narita — despedida de Shinjuku",
      "desc": "El Narita Express desde Shinjuku llega a Narita T1 en unos 90 minutos (salida ~06:30 → llegada ~08:45, ~3h15 antes del vuelo): asientos reservados, espacio para el equipaje grande y el paisaje urbano que cede paso a los campos. El cierre que Japón se merece: ordenado, puntual y hermoso.",
      "tips": "⚠️ Reservá un N'EX temprano — apuntá a ~06:30 (las 07:00 dejan solo ~2h50, menos de 3 h). El N'EX desde Shinjuku sale ~cada hora, así que perderlo cuesta caro. Backup: Yamanote a Nippori/Ueno y Keisei Skyliner, o a Tokyo Station y N'EX.",
      "cost": "¥3.070 por persona (Shinjuku→Narita T1)",
      "booking": "Reservar asiento N'EX ~06:30 desde Shinjuku (segunda pierna del ida y vuelta)",
      "dur": "~90 min"
     },
     {
      "start": "09:00",
      "end": "12:00",
      "type": "transport",
      "area": "Narita Airport T1",
      "title": "Check-in, shopping final y embarque",
      "desc": "En Narita T1 los espera el Duty-Free con whisky japonés, Kit-Kats de sabores únicos y cosmética — la última oportunidad para cerrar cualquier compra pendiente. Después del control de seguridad, embarque en LO1080 a las 12:00 y sayonara, Japón.",
      "tips": "Reservá al menos dos horas antes del cierre de puertas para el check-in, seguridad y el mostrador de devolución de impuestos (tax-refund), que suele tener fila y está antes del control de seguridad.",
      "cost": "gratis (compras a elección)",
      "booking": "",
      "highlight": true
     }
    ],
    "cultural": "En la cultura japonesa, el momento de la despedida — oseparē (お別れ) — viene cargado de una cortesía casi ritual: los viajeros se inclinan levemente incluso desde la ventanilla del tren, y quienes los acompañan siguen saludando con la mano hasta que el vagón desaparece del horizonte. En los aeropuertos japoneses sobrevive una costumbre similar: el personal de pista se da vuelta hacia el avión que parte y saluda con ambas manos — no a los pasajeros que miran por la ventanilla, sino al avión mismo, como gesto de respeto al vehículo y a quienes lleva dentro. Es una expresión del kotodama (言霊) — la creencia de que gestos y palabras portan fuerza espiritual — y del espíritu del omotenashi (おもてなし): el servicio que no termina cuando el cliente ya no te ve.",
    "tips": [
     "Armá todo la noche del 1/10 y dejá solo lo del amanecer (cepillo, cargador). La mañana de la salida cada minuto cuenta.",
     "El check-in online en LOT.com abre 24 h antes del despegue — o sea el 1/10 a las 12:00. Elegí asientos cómodos (pasillo, filas traseras) y guardá/imprimí el boarding pass.",
     "El N'EX desde Shinjuku no sale a toda hora — chequeá el tren en JR East y sacá el pasaje antes (se puede con IC card/Suica). En Shinjuku hay un acceso propio al N'EX en el nivel B1 — no lo confundas con los andenes comunes."
    ]
   }
  ],
  "guide": {
   "sections": [
    {
     "id": "japanese-food-101",
     "icon": "🍜",
     "title": "Comida Japonesa 101",
     "intro": "Tu hoja de ruta imprescindible para 14 días completamente obsesionados con la comida. Osaka es tu capital del street food, Kyoto tu escala de tradición refinada, Tokyo la ciudad que tiene todo, y Hakone el centro de tu kaiseki de cumpleaños en ryokan con onsen. Comé sin miedo.",
     "body": "Japón recompensa a los aventureros como ningún otro lugar. Podés sorber un bowl de ramen de ¥900 de una máquina expendedora a medianoche, y al día siguiente darte el lujo de un omakase de sushi prensado a mano o una cena kaiseki de múltiples platos. Esta es tu escalada de **platos imperdibles** a lo largo de todo el recorrido, secuenciada para que vayas llegando a las cosas verdaderamente locas.\n\n**La estrategia gastronómica, ciudad por ciudad**\n- **Tokyo** — la ciudad que tiene todo: comida barata con Michelin (16 nuevos Bib Gourmand para 2026), sushi Edomae en su lugar de origen, food halls de depachika, joyas del konbini, y las especialidades más alocadas (shirako, rarezas afines al fugu).\n- **Kyoto** — refinamiento: kaiseki, tofu/yuba, matcha y wagashi, más los bocados raros del Nishiki Market.\n- **Osaka** — capital del street food (\"kuidaore\" = comer hasta caer): takoyaki, okonomiyaki, kushikatsu, más fugu.\n- **Hakone** — tu cena kaiseki de cumpleaños en el ryokan, y huevos negros hervidos en azufre en Owakudani.\n- **Nara** — el show callejero de machacado de mochi a máxima velocidad en Nakatanidou.\n\n**Reglas de oro para comer como un pro**\n- **Sorbé** el ramen y el soba haciendo ruido — enfría los fideos, airea el caldo y es señal de que estás disfrutando.\n- Comé el nigiri **de un solo bocado**, con el pescado boca abajo sobre la lengua; no lo ahogués en soja ni le frotés wasabi en el plato.\n- Decí **\"itadakimasu\"** antes de comer y **\"gochisousama\"** al terminar.\n- **Jamás** claves los palillos parados en el arroz ni pases comida de palillo a palillo (ambos son rituales funerarios).\n- **Sin propinas**, nunca. El servicio es impecable porque así se espera.\n\n**Tu escalada para paladares aventureros:** empezá con **natto** (barato, en cualquier desayuno) → **basashi** (caballo crudo, un clásico de izakaya) → **fugu** (menú con chef licenciado en Osaka) → **shirako** (leche de bacalao de temporada, otoño — justo para fines de septiembre). Osaka es tu mejor ciudad para lo más salvaje; Kyoto es para el refinamiento.",
     "cards": [
      {
       "name": "Edomae Sushi (Omakase)",
       "sub": "Tokyo — Toyosu / Ginza / Tsukiji Outer Market",
       "desc": "Nigiri prensado a mano en una barra, mirando trabajar al itamae — el teatro gastronómico en su máxima expresión. TIP: el omakase del mediodía es mucho más barato que el de noche con el mismo chef. Reservá barras de alto nivel por Pocket Concierge o la app OMAKASE con 1-2 meses de anticipación."
      },
      {
       "name": "Ramen (5 estilos)",
       "sub": "Tokyo shoyu/tsukemen · Kyoto kotteri · tonkotsu en todos lados",
       "desc": "Barato, rápido e infinitamente variado — probá un estilo distinto en cada ciudad. TIP: sorber es lo correcto; pedí 'kae-dama' (fideos extra, ~¥150) en los locales de tonkotsu. Ichiran tiene boxes individuales + un formulario de papel — una introducción sin presiones."
      },
      {
       "name": "Takoyaki",
       "sub": "Osaka — Dotonbori (su lugar de nacimiento)",
       "desc": "Bolitas de pulpo fundidas por dentro, crocantes por fuera, cubiertas de hojuelas de bonito danzantes. El snack para agarrar y pasear por antonomasia. TIP: dejales enfriar 30-60 seg — el centro es lava pura. Buscá Wanaka o Kukuru (takoyaki 'bikkuri' con tentáculo que asoma = foto imprescindible)."
      },
      {
       "name": "Okonomiyaki",
       "sub": "Osaka — Dotonbori & Namba",
       "desc": "Panqueque salado de masa con repollo a la plancha en tu propia mesa, bañado en salsa dulce, mayonesa y bonito. TIP: Mizuno (Michelin Bib Gourmand) es la elección del entendido — probá el yamaimo yaki. El 'modan-yaki' lleva fideos yakisoba adentro."
      },
      {
       "name": "Kushikatsu",
       "sub": "Osaka — Shinsekai, bajo la Tsutenkaku Tower",
       "desc": "Pinchos fritos de carne, mariscos y verdura, retro y para pedir sin parar. TIP: LA regla cardinal — NO mojar dos veces en la salsa comunal. Un solo toque antes del primer bocado; usá el repollo gratis para agarrar más. Daruma es el originador desde 1929."
      },
      {
       "name": "Yakitori",
       "sub": "Tokyo — Omoide Yokocho & Yurakucho tracks",
       "desc": "Pinchos de pollo al carbón en un callejón iluminado con faroles = la noche definitiva en Tokyo. Pasá de los muslos: piel (kawa), corazón (hatsu), molleja (zuri), cartílago (nankotsu). TIP: elegí 'tare' (glaseado dulce) o 'shio' (sal); decí 'omakase' para dejar que el chef elija."
      },
      {
       "name": "Kaiseki",
       "sub": "Kyoto (su hogar espiritual) + tu ryokan de Hakone",
       "desc": "Una procesión estacional y artística de pequeños platos — la comida más refinada de Japón y el centro de tu celebración de cumpleaños. TIP: la cena en tu ryokan de Hakone ES kaiseki; llegá con hambre después del baño en el onsen. Un almuerzo kaiseki en Kyoto es una forma más económica de probarlo."
      },
      {
       "name": "Wagyu (A5)",
       "sub": "Kobe/Omi cerca de Osaka; servido en Osaka/Kyoto/Tokyo",
       "desc": "Carne de vaca intensamente marmolada y mantecosa — el lujazo ideal para los 40. TIP: 100-150g alcanza; el teppanyaki (el chef cocina en tu barra) es el más teatral. Hay excelente A5 que no es de Kobe y cuesta menos. Pedilo al punto medio."
      },
      {
       "name": "Tonkatsu",
       "sub": "Tokyo (su lugar de origen; muchos spots Bib Gourmand)",
       "desc": "Milanesa de cerdo con panko ultra crocante — comfort food barato hecho excepcionalmente bien. TIP: molé las semillas de sésamo y después mezclá la salsa agridulce. 'Hire' = lomo magro, 'rosu' = lomo más graso. El repollo y el arroz se recargan sin límite."
      },
      {
       "name": "Matcha & Wagashi",
       "sub": "Kyoto — Uji, casas de té de Gion",
       "desc": "Soft-serve, parfaits, warabi-mochi, y la ceremonia del té formal que combina el matcha amargo con un dulce de temporada. TIP: comé el wagashi ANTES de tomar el matcha — equilibra el amargor. Los wagashi de otoño tienen forma de hojas de arce y castañas."
      },
      {
       "name": "Fugu (Pez Globo)",
       "sub": "Osaka — la capital del fugu (buscá los faroles)",
       "desc": "El pescado de lista de deseos que solo puede preparar un chef licenciado: sashimi 'tessa' finísimo, karaage, y olla caliente 'tecchiri'. TIP: SOLO en restaurantes habilitados. Septiembre es temporada baja (el invierno es el pico), así que confirmá disponibilidad. El leve hormigueo es normal."
      },
      {
       "name": "Shirako",
       "sub": "Izakaya y barras de sushi, mejor en Tokyo",
       "desc": "Leche de bacalao (sacos de esperma) — cremoso, como flan, con sabor oceánico. La delicadeza \"rara\" por excelencia, y fines de septiembre es el arranque de su temporada. TIP: probalo crudo con ponzu (delicado) o levemente a la plancha/en tempura (como un flan). El shock es la textura, no el sabor."
      }
     ]
    },
    {
     "id": "street-food-markets",
     "icon": "🏮",
     "title": "Comida callejera y mercados",
     "intro": "Puestos, mercados cubiertos, relucientes galerías gourmet en sótanos de tiendas, tesoros de konbini y bares de pie. Acá es donde los dos se van a pegar un paseo comiendo por todo Japón — con las manos llenas y sin apuro.",
     "body": "Para una pareja que vive por la comida callejera, esto es el corazón del viaje. Te contamos cómo aprovechar cada tipo de lugar, más los mercados y barrios específicos que no te podés perder.\n\n**Los grandes mercados (tus corredores de picoteo)**\n- **Nishiki Market, Kyoto** — 400 años de historia, ~100 puestos cubiertos con delicias raras de Kyoto: tako-tamago (pulpito bebé caramelizado con un huevo de codorniz adentro), yuba fresca, pinchos a la parrilla, donuts de leche de soja, encurtidos, degustaciones de sake. Llegá con hambre entre las 10am y las 3pm; lo normal es comer parado en cada puesto. Desemboca hacia los pasajes Teramachi/Shinkyogoku, ideales para pasear después.\n- **Kuromon Ichiba, Osaka** — \"La cocina de Osaka\", más de 150 puestos con mariscos a la parrilla al momento: atún grasoso, uni, vieiras, pinchos de wagyu, cangrejo, fugu. Llegá antes de las 9:30-10am para encontrar lo mejor. **Comé en el mismo puesto donde comprás** (así lo pide la etiqueta). Llevá efectivo.\n- **Ameyoko, Tokyo (Ueno)** — un mercado a cielo abierto y bien cutre bajo las vías del tren: comida barata, snacks, zapatillas, compras de saldo y izakaya de pie. Está más vivo a última hora de la tarde.\n- **Tsukiji Outer Market, Tokyo** — la mejor mañana gastronómica: tamagoyaki en palito, uni a la parrilla, ostras, wagyu nigiri, matcha soft-serve. Andá entre las 8 y las 10am; **CERRADO los domingos y casi todos los miércoles**.\n\n**Dotonbori, Osaka** — no es un mercado, pero sí ES el corredor de comida callejera: enormes carteles animados de cangrejos y pulpos, el hombre corriendo de Glico, neón reflejado en el canal. Este es tu circuito de takoyaki/okonomiyaki/kushikatsu. Mejor después de que anochece; fotografiá el cartel de Glico desde el *costado* del puente Ebisubashi para esquivar la multitud.\n\n**Depachika (galerías gourmet en sótanos de tiendas)** — un salón reluciente con bento premium, wagashi, tempura, wagyu, sushi y postres. Isetan Shinjuku y Takashimaya son legendarias en Tokyo; Daimaru/Takashimaya en Kyoto/Osaka. **Jugada maestra:** andá ~1 hora antes del cierre para agarrar descuentos en comidas preparadas — perfecto para armar un picnic de lujo la noche antes de entrar al ryokan. Los samples gratis abundan.\n\n**Joyas del konbini (7-Eleven, Lawson, FamilyMart)** — un destino gastronómico real, baratísimo, perfecto para tu llegada el viernes a la noche, los días de tren y los snacks post-joda. Imperdibles: **karaage-kun** de Lawson (pollo frito), el mítico **sándwich de ensalada de huevo (tamago)**, onigiri (el personal te lo calienta), **Famichiki** de FamilyMart, **oden** en otoño y los postres a ¥150. 7-Eleven tiene el mejor café, y los cajeros de konbini aceptan tarjetas extranjeras cuando otros no.\n\n**Tachinomi (bares de pie)** — lugares para tomar algo barato, rápido y sin vueltas, geniales entre actividades. Pedís y muchas veces pagás por item, amigables con el efectivo, mucha rotación, generalmente sin cargo por asiento. Cazalos en: **Nonbei Yokocho (Shibuya)** y **Yurakucho/Shinbashi** bajo las vías en Tokyo; **Shinsekai/Tenma** en Osaka.\n\n**Cargá pilas antes del crawl por Ni-chome:** la mayoría de los bares gays solo sirven tragos, así que comé antes en **Omoide Yokocho** (el Callejón de los Recuerdos), el pasaje de yakitori cerca de Shinjuku — pinchos ahumados y onda retro Showa, y después 10 minutos a pie hasta la esquina de AiiRO para arrancar la noche.",
     "cards": [
      {
       "name": "Nishiki Market",
       "sub": "Kyoto — centro (Shijo/Kawaramachi)",
       "desc": "\"La cocina de Kyoto\": 100 puestos cubiertos con las cosas raras — tako-tamago, yuba, donuts de leche de soja, encurtidos, sake. Mejor de 10am a 3pm, más tranquilo en las mañanas de entre semana. Comé parado en el puesto; está completamente cubierto = plan perfecto para días de lluvia."
      },
      {
       "name": "Kuromon Ichiba",
       "sub": "Osaka — Nipponbashi, 5 min de Namba",
       "desc": "Más de 150 puestos que grillean mariscos al momento: vieira con uni, sashimi de otoro, wagyu en palito, donuts frescos de leche de soja. Llegá antes de las 9:30-10am. Comé donde comprás; llevá efectivo."
      },
      {
       "name": "Ameyoko Market",
       "sub": "Tokyo — Ueno / Okachimachi",
       "desc": "Mercado a cielo abierto y cutre bajo las vías: comida callejera barata (¥300-800), snacks, zapatillas y bares de pie que se activan al atardecer. Más vivo a última hora de la tarde; combina bien con Ueno Park."
      },
      {
       "name": "Dotonbori",
       "sub": "Osaka — Namba",
       "desc": "El corredor de comida callejera con todo el neón — el cartel de Glico, el canal, los enormes letreros. Tu pista de picoteo para takoyaki, okonomiyaki, kushikatsu. Mejor después de que anochece; fotografiá el Glico desde el costado de Ebisubashi."
      },
      {
       "name": "Tsukiji Outer Market",
       "sub": "Tokyo — Tsukiji",
       "desc": "La mejor mañana gastronómica: tamagoyaki en palito, uni a la parrilla, ostras, wagyu nigiri, matcha soft-serve. Recorrelo bien entre las 8 y las 10am. CERRADO los domingos y casi todos los miércoles — revisá el calendario."
      },
      {
       "name": "Depachika",
       "sub": "Isetan/Takashimaya Tokyo; Daimaru Kyoto/Osaka",
       "desc": "Galerías gourmet en sótanos: bento premium, wagashi, tempura, wagyu, postres, samples gratis. Andá ~1hr antes del cierre para agarrar descuentos — perfecto para un picnic de lujo la noche previa al ryokan."
      },
      {
       "name": "Konbini Crawl",
       "sub": "7-Eleven · Lawson · FamilyMart (en todos lados)",
       "desc": "Un destino gastronómico real a ¥120-600: karaage-kun de Lawson, sándwich de ensalada de huevo, onigiri (pedí que te lo calienten), Famichiki, oden de otoño, postres a ¥150. 7-Eleven tiene el mejor café; los cajeros aceptan tarjetas extranjeras."
      },
      {
       "name": "Tachinomi",
       "sub": "Nonbei Yokocho & Yurakucho (Tokyo); Shinsekai (Osaka)",
       "desc": "Bares de pie, baratos y sin vueltas, pago por item, generalmente sin cargo por asiento. Ideales entre actividades o como parada animada en el bar-hop. Amigables con el efectivo, mucha rotación."
      },
      {
       "name": "Omoide Yokocho",
       "sub": "Tokyo — Shinjuku (al lado de la estación)",
       "desc": "El ahumado y encantador callejón de yakitori iluminado con faroles ('Callejón de los Recuerdos') — pinchos a la parrilla (probá el mollejas, el huevo de codorniz) y cerveza en pasajes de la era Showa. Pequeñas barras de efectivo. Ideal para unas copas antes de Ni-chome."
      },
      {
       "name": "Nakatanidou",
       "sub": "Nara — pasaje Sanjo-dori",
       "desc": "Expertos en mochi se mandan a machacar yomogi mochi a una velocidad vertiginosa, casi peligrosa, en un show en plena vereda, y después te dan un mochi tibio con pasta de poroto rojo (~¥200). Mirarlo es gratis; el machacado sale cada ~30 min. Solo efectivo."
      },
      {
       "name": "Owakudani Black Eggs",
       "sub": "Hakone — estación intermedia del teleférico",
       "desc": "Huevos hervidos en manantiales volcánicos de azufre que se vuelven negros; la leyenda dice que cada uno le suma 7 años de vida. ~¥500 por 4-5, los comés en medio de los vapores. Un snack-foto divertido y original para el cumpleaños. El olor a azufre es fuerte."
      }
     ]
    },
    {
     "id": "eat-like-a-local",
     "icon": "🥢",
     "title": "Cómo comer como un local",
     "intro": "La mecánica: máquinas expendedoras, etiqueta en izakayas, reservas, frases para pedir, pago y la realidad dietaria. Dominá estos sistemas y vas a comer sin miedo en cualquier bodegón.",
     "body": "La comida es fácil una vez que entendés cómo funciona el sistema. Acá tenés todo lo que necesitás para entrar con confianza a cualquier mostrador de ramen o izakaya.\n\n**Máquinas expendedoras de comida (shokken-ki)** — en los locales de ramen, gyudon y soba comprás el ticket de comida en la máquina **antes** de sentarte. Metés plata en efectivo (muchas aceptan monedas y billetes de ¥1.000; las más nuevas aceptan tarjetas IC), apretás el botón de tu plato (los **botones del extremo superior izquierdo suelen ser la especialidad del local**), tomás el ticket impreso, te sentás y se lo das al personal. Muchas tienen botones en inglés, con fotos o un selector de idioma. ¿Querés más fideos en tu ramen? Pedílo verbalmente diciendo **\"kae-dama\"**.\n\n**Etiqueta en la izakaya (el pub japonés)** — tu mejor ventana a la cultura gastronómica cotidiana y una cena relajada para compartir de a dos.\n- Te van a servir un **otoshi** (una pequeña entrada, ¥300-600) como cargo por la mesa. **Es normal, no te están cagando.**\n- **Serví las bebidas para el otro, no para vos mismo**, y arrancá con un **\"kanpai!\"** colectivo (usálo bastante en los 40).\n- Pedí en **rondas**, no todo junto. Los lugares muy concurridos tienen un límite de 90 a 120 minutos.\n- Empezá con **\"toriaezu nama\"** — una cerveza de barril para comenzar.\n- La toallita húmeda (**oshibori**) es solo para las manos.\n\n**Frases para pedir**\n- **Sumimasen** — perdón / para llamar al mozo (la palabra más útil de todo Japón).\n- **Omakase de** — a elección del chef.\n- **Osusume wa?** — ¿qué recomendás?\n- **Kore o kudasai** — este, por favor (señalá el menú o los modelos de comida de plástico en la vidriera).\n- **Eigo no menu wa arimasu ka?** — ¿tienen menú en inglés?\n- **O-kaikei / o-kanjo kudasai** — la cuenta, por favor (muchas veces se paga en la caja, no en la mesa).\n\n**Reservas** — el ramen y la comida callejera son sin reserva; hacés fila. Pero reservá con anticipación para: **omakase sushi de alta gama** (Pocket Concierge / OMAKASE app, con 1 o 2 meses de anticipación), **kaiseki en Kyoto**, mostradores populares de **yakiniku** y **teppanyaki wagyu**, un restaurante de **fugu** habilitado, y cualquier **café temático** (Pokemon Cafe en Nihonbashi, Kirby Cafe en Skytree — reservá con ~1 mes de anticipación; una buena excusa de \"comida insólita\" para el fan del anime). El **kaiseki de tu ryokan en Hakone** está incluido en la habitación — solo confirmá si la cena es en el cuarto o en un comedor privado, y **avisales que es el cumpleaños número 40** (muchos agregan una torta o sake de regalo).\n\n**Pago** — llevá efectivo. Muchos locales de ramen, tachinomi, puestos callejeros e izakayas pequeñas son **solo efectivo**. Retirá yenes en los cajeros de 7-Eleven (7-Bank) o Japan Post, que aceptan tarjetas extranjeras las 24 horas. Una **Suica/PASMO** en tu billetera digital también sirve para pagar en konbinis y muchos restaurantes. Y de nuevo: **no se da propina** — si dejás monedas de cambio, puede que te corran por la calle para devolvértelas.\n\n**Notas sobre dietas** — seamos honestos:\n- **El vegetarianismo/veganismo es DIFÍCIL** — el dashi (caldo de bonito/pescado) se esconde en casi todo, incluso en platos \"de verduras\", sopa de miso y tsuyu de soba. Podés decir **\"katsuo dashi nashi\"** (sin caldo de bonito) pero no confíes ciegamente. Para una opción genuinamente vegana, reservá **shojin-ryori** (cocina de templos budistas, especialmente en Kyoto).\n- **Sin gluten es complicado** — la salsa de soja lleva trigo; la tempura y el tonkatsu son rebozados; la soba muchas veces también tiene trigo (preguntá). Si tenés una alergia real, llevá una tarjeta de alérgenos escrita en japonés.\n- Las opciones **halal/kosher** son limitadas fuera de los lugares especializados de las grandes ciudades.\n\n**Un último ritual local:** después de comer zaru soba fría, volcá el **sobayu** caliente (el agua de cocción) en la salsa para mojar que te sobró y tomátelo. Y usá la app gratuita de la Guía Michelin con el filtro de **Bib Gourmand** (16 nuevos lugares en Tokyo para 2026) para encontrar comidas baratas, inteligentes y excelentes donde sea que estés.",
     "cards": [
      {
       "name": "Máquina expendedora",
       "sub": "Locales de ramen · gyudon · soba",
       "desc": "Comprá el ticket ANTES de sentarte: metés plata, apretás tu plato (arriba a la izquierda = la especialidad del local), le das el ticket impreso al personal. Decí 'kae-dama' para más fideos. Muchas tienen opciones en inglés o con fotos."
      },
      {
       "name": "El Otoshi",
       "sub": "Cargo por mesa en la izakaya",
       "desc": "Una pequeña entrada (¥300-600) que te sirven automáticamente como cargo por sentarte. Es normal, no es una estafa. Serví las bebidas para el otro, arrancá con '¡kanpai!', pedí en rondas y tené en cuenta el límite de 90 a 120 minutos."
      },
      {
       "name": "Frases clave",
       "sub": "Usálas en todos lados",
       "desc": "Sumimasen (perdón/disculpá), Omakase de (a elección del chef), Osusume wa? (¿qué recomendás?), Kore o kudasai (este, por favor), O-kanjo kudasai (la cuenta). Si no entendés nada, señalá los modelos de comida de plástico."
      },
      {
       "name": "Reservá con anticipación",
       "sub": "Lo que realmente necesita reserva",
       "desc": "Omakase sushi (Pocket Concierge/OMAKASE, 1-2 meses), kaiseki en Kyoto, teppanyaki de wagyu, fugu habilitado, cafés temáticos (~1 mes). Ramen/comida callejera = sin reserva. Avisale al ryokan de Hakone que es el cumpleaños número 40."
      },
      {
       "name": "Pago y efectivo",
       "sub": "El efectivo sigue siendo el rey",
       "desc": "Muchas izakayas chicas, tachinomi y puestos son solo efectivo. Retirá yenes en cajeros de 7-Eleven/Japan Post (tarjetas extranjeras, 24 horas). La Suica en el celular también sirve en konbinis. NUNCA des propina."
      },
      {
       "name": "La realidad dietaria",
       "sub": "El dashi se esconde en todos lados",
       "desc": "El vegetarianismo/veganismo es difícil — el dashi de pescado se mete en platos 'de verduras' y en el tsuyu de soba; decí 'katsuo dashi nashi' pero mejor reservá shojin-ryori para una opción vegana de verdad. Sin gluten es complicado (soja = trigo). Llevá una tarjeta de alérgenos."
      }
     ]
    },
    {
     "id": "nutshell",
     "icon": "🗾",
     "title": "Japón en pocas palabras",
     "intro": "Una orientación rápida sobre el país al que llegás para celebrar sus 40 — qué lo hace único, cómo se siente vivir ahí, y las cosas que sorprenden a todo el que llega por primera vez.",
     "body": "Japón es uno de los **países más seguros, limpios y fáciles del mundo para viajar** — las billeteras perdidas aparecen, los trenes llegan al segundo exacto, y dos hombres compartiendo una habitación es algo completamente normal. Pero tiene su propia lógica silenciosa, y conocerla de entrada te permite relajarte y disfrutar el viaje en vez de descifrarlo sobre la marcha.\n\n**El panorama general de tu recorrido:**\n- **Tokyo** — la ciudad que lo tiene todo: neón, comida de primer nivel a todo precio, barrios otaku y la escena gay de Ni-chome. Tu base de llegada (18–22 sep) y de despedida (30 sep–1 oct).\n- **Hakone** — pueblo de aguas termales volcánicas a 85 minutos de Tokyo; el centro de tu cumpleaños con onsen-ryokan (23 sep).\n- **Kyoto** — el corazón cultural: templos, geishas, té y artes tradicionales (24–27 sep).\n- **Osaka** — la capital ruidosa y amistosa de la comida callejera, más una excursión a Nara para ver ciervos que te hacen reverencias (28–29 sep).\n\n**Las cosas que sorprenden a todo el que llega por primera vez:**\n- **Todavía bastante en efectivo.** A pesar de los pagos sin contacto, la comida callejera, los izakaya chicos y los negocios de ropa vintage suelen ser solo efectivo. Llevá ¥15.000–20.000 encima.\n- **Los trenes son casi silenciosos** — nada de llamadas, las conversaciones bien bajitas.\n- **Cero propinas, en ningún lado, jamás.** El servicio es excelente porque se espera eso, no porque haya incentivo económico.\n- **Sacarse los zapatos en interiores** pasa mucho más seguido de lo que imaginás (es obligatorio en tu ryokan).\n- **Los cestos de basura en la calle son rarísimos** — llevás tu basura hasta encontrar uno.\n\n**El momento que eligieron tiene sus ventajas:** llegás durante la **Silver Week** (19–23 sep, un feriado largo de 5 días) — hay mucha gente y los precios suben, así que reservá Hakone y los asientos del Shinkansen con tiempo. Pero además coincidís con el **torneo de Sumo de septiembre**, el **Tokyo Game Show** y el **Tsukimi** (la noche de la luna llena de la cosecha, el 25 sep, justo cuando están en Kyoto). El clima de fines de septiembre empieza cálido y húmedo y va cediendo a unos agradables 25°C, con riesgo real —aunque manejable— de tifón: llevá campera de lluvia, no solo paraguas.\n\n**Un dato sobre las compras libres de impuestos:** sus fechas caen *antes* de la reforma del 1 de nov de 2026, así que aplica el sistema simple — el impuesto se descuenta directamente en la caja, sin cola en el aeropuerto. Solo llevá el **pasaporte físico** cada vez que gastés ¥5.000 o más."
    },
    {
     "id": "etiquette",
     "icon": "🙇",
     "title": "Etiqueta y costumbres",
     "intro": "Los códigos sociales que más importan. Ninguno es difícil, y los locales son comprensivos con los turistas — pero manejarlos bien te marca como un huésped considerado y hace que todo fluya de manera mucho más natural.",
     "body": "**👟 Zapatos afuera — sabé cuándo.** Sacate los zapatos en el *genkan* (la zona rebajada de la entrada) y subí **hacia arriba** al piso elevado en medias o con las pantuflas que te dan. Jamás dejes que las medias toquen el piso del genkan. Esto no es negociable en tu **ryokan de Hakone**, en habitaciones con tatami, algunos templos y restaurantes tradicionales.\n- Las **pantuflas del baño** son aparte: cambialas al entrar al baño y volvé a cambiarlas al salir — entrar de vuelta a la habitación con las pantuflas del baño es el error clásico del turista.\n- **Nunca** pises el tatami con ningún tipo de pantuflas — solo medias.\n- *Usá calzado fácil de sacar y llevá medias limpias sin agujeros — lo vas a hacer constantemente.*\n\n**🤫 Silencio en el tren.** Poné el celular en modo silencioso, no atendas llamadas y hablá bajito. No comas en trenes urbanos ni en el subte — aunque un *ekiben* (vianda de estación) en el **Shinkansen de larga distancia es un ritual hermoso**. Hacé fila en las marcas del piso, dejá salir antes de subir y sacate la mochila de la espalda. Escaleras mecánicas: parate a la **izquierda en Tokyo**, a la **derecha en Osaka/Kyoto** (sí, está invertido de verdad — fijate en los locales).\n\n**💴 No se da propina — en ningún lado, nunca.** No les des propina a los taxis, restaurantes, hoteles, guías ni al personal del ryokan. Dejá cambio sobre la mesa y puede que el mozo te corra media cuadra para devolvértelo. Para agradecer a un guía privado, un sincero *'arigatou gozaimashita'* — o un regalito envuelto de tu país — es el gesto correcto. Un cargo por servicio automático del 10–15% en lugares de alta gama es normal, no es propina.\n\n**🥢 Reglas de los palillos.** Dos cosas son un verdadero tabú (ambas son rituales fúnebres): **nunca pinches los palillos verticalmente en el arroz** y **nunca pases comida de palillo a palillo** — usá el platito en cambio. No froces los palillos descartables entre sí (da a entender que son baratos) y no apuntes ni los agites. Y sí, **sorbé** el ramen y el soba con ruido — es señal de que está rico. Decí *'itadakimasu'* antes de comer y *'gochisousama'* al terminar.\n\n**🙇 Las reverencias.** No necesitás dominarlas — con inclinar levemente la cabeza y decir *'arigatou gozaimasu'* alcanza para casi todo como visitante. La reverencia reemplaza el apretón de manos y transmite agradecimiento, disculpa y saludo al mismo tiempo; simplemente imitá la profundidad de la que te hacen a vos y vas a estar bien.\n\n**🗑️ Basura — llevala con vos.** Hace décadas que sacaron los cestos públicos, y sin embargo las calles están impecables porque todos se llevan su basura a casa. Llevá una bolsita en la mochila del día. Podés tirar en los cestos de los **konbini** (idealmente si compraste ahí), en el reciclaje de las **máquinas expendedoras** (solo esa botella o lata) y en los cestos de las estaciones. Comé las cosas de los puestos callejeros **en el puesto o justo al lado**, y tirálo ahí mismo — caminar comiendo está un poco mal visto.\n\n**🎨 Tatuajes.** En Japón históricamente los tatuajes se asocian al crimen organizado, así que **muchos onsen públicos, sento, gimnasios y piletas todavía prohíben los tatuajes visibles** — sin excepciones, y el personal te va a pedir que te retires si te los ven. En este viaje eso importa sobre todo en las termas (mirá la sección de Onsen). La solución que siempre funciona: **baños privados o dentro de la habitación**, donde la regla directamente no aplica. Para tinta pequeña, los **stickers de cobertura** impermeables (~¥310 en cualquier konbini o Don Quijote) te abren los baños con 'política de cobertura'."
    },
    {
     "id": "onsen-ryokan",
     "icon": "♨️",
     "title": "Onsen y Ryokan",
     "intro": "El ritual de las aguas termales es el momento cultural más especial de tu noche de cumpleaños en Hakone — y con un par de decisiones inteligentes, puede ser completamente íntimo y sin estrés para dos hombres. Acá te explicamos exactamente cómo funciona.",
     "body": "**La decisión de reserva más importante:** reservá una habitación de ryokan con **onsen PRIVADO en la habitación o reservable al aire libre** (*kashikiri* / *rotenburo*). Por qué es perfecto para los dos:\\n- Los baños públicos son **separados por género**, así que un baño privado mixto es la única manera de sumergirse *juntos*.\\n- Un baño privado **elimina completamente el tema de los tatuajes** — sin reglas de qué preocuparse.\\n- Se convierte en el centro romántico del cumpleaños número 40: bañarse bajo las estrellas, y después una cena kaiseki en la habitación, yukata, y colchonetas futon sobre tatami.\\n\\n*Confirmá que el baño en la habitación use agua termal real (algunos son simplemente tinas de agua corriente). Reservá con meses de anticipación — la Silver Week de fines de septiembre agota estas habitaciones. Contales que es un cumpleaños número 40; muchos ryokan añaden una torta, sake o un pequeño regalo.*\\n\\n**El ritual del baño (igual en todos lados):**\\n1. Dejá los zapatos en la entrada.\\n2. En el vestuario, desvestite **completamente** — sin traje de baño, nunca. Guardá todo en un casillero o canasta.\\n3. Llevá solo la **toallita pequeña** al área del baño.\\n4. Sentate en un banquito bajo en una estación de lavado y **lavate y enjuagate bien todo el cuerpo** *antes* de entrar — el baño es solo para remojarse.\\n5. Entrá despacio. Sin salpicar, sin nadar, sin meter la cabeza bajo el agua.\\n6. **La toallita pequeña no toca el agua nunca** — doblala sobre tu cabeza o en el borde del baño.\\n7. Secate con la toallita pequeña antes de volver al vestuario (está bien dejar los minerales en la piel).\\n\\n**Reglas no escritas que te mantienen bienvenidos:** nada de celulares ni cámaras en el área del baño (es un espacio nudista), no te bañes muy borracho, hablá bajo, atate el pelo largo para que no toque el agua.\\n\\n**Para una pareja de dos hombres, específicamente:** los baños públicos separan hombres (cortina azul *noren*, 男) y mujeres (roja, 女) — entonces como dos hombres usarían el **lado masculino juntos**, lo cual es una ventaja tranquila y completamente sin drama. Mantengan cualquier muestra de afecto discreta por respeto al ambiente de calma; para el romance genuino y la privacidad, la reserva privada *kashikiri* es la opción ideal. Japón es discreto más que hostil — al personal le importa la etiqueta del baño, no quiénes son ustedes.\\n\\n**La experiencia completa del ryokan:** usá la **yukata con la solapa izquierda SOBRE la derecha** (la derecha sobre la izquierda es solo para funerales), atate el cinturón *obi*, agregá la chaqueta *haori* si hace frío. El kaiseki es un desfile de pequeños platos estacionales artísticos — avisá restricciones dietarias al reservar. El personal acomoda tu futon mientras estás en la cena. Pantuflas en los pisos de madera, pies descalzos o con medias sobre el tatami.\\n\\n**Qué llevar:** el ryokan provee toallas, yukata, jabón, shampoo y secador de pelo. **Llevá:** una colita de pelo si la necesitás, stickers para cubrir tatuajes, agua para rehidratarte y una bolsita impermeable para las toallas mojadas. **Sacate las joyas de plata** — las aguas sulfurosas las oscurecen.",
     "cards": [
      {
       "name": "Habitación con onsen privado",
       "sub": "露天風呂付き客室",
       "desc": "La reserva clave — un baño al aire libre en la habitación para que se remojen juntos, sin problema de tatuajes. Filtralo en Ikyu/Rakuten Travel."
      },
      {
       "name": "Kashikiri-buro",
       "sub": "貸切風呂",
       "desc": "Un baño privado reservable (~¥2.000–4.000 / 45 min) si el de la habitación se sale del presupuesto — el plan B perfecto para remojarse en pareja."
      },
      {
       "name": "Rotenburo",
       "sub": "露天風呂",
       "desc": "Baño exterior al aire libre — el sueño paisajístico, remojándose bajo las montañas y las estrellas."
      },
      {
       "name": "Kaiseki",
       "sub": "懐石",
       "desc": "La cena de varios pasos estacionales del ryokan — ingredientes de otoño como matsutake, castaña, sanma. El festín de cumpleaños."
      }
     ]
    },
    {
     "id": "getting-around",
     "icon": "🚄",
     "title": "Cómo moverse",
     "intro": "El circuito fijo — Tokyo → Hakone → Kyoto → Osaka → Tokyo — es un problema resuelto. Acá está la combinación de transporte ganadora, más los tiempos exactos en el aeropuerto para tu llegada a las 18:25 y tu salida a las 12:00.",
     "body": "**🎫 Primero lo primero — configurá Mobile Suica.** Como son dos usando subtes, colectivos, konbini y máquinas expendedoras todo el tiempo, la tarjeta IC es indispensable. **Suica, PASMO e ICOCA ahora son totalmente intercambiables en todo el país** — una sola tarjeta funciona en las tres ciudades.\n- **iPhone:** agregá Suica en Apple Wallet y cargá saldo con Apple Pay — sin colas, sin depósito. Configurala en el avión o en el aeropuerto.\n- **Android / teléfonos más viejos:** comprá una **Welcome Suica** física (sin depósito) en el aeropuerto.\n- Cargá ~¥3,000 cada uno para arrancar; podés recargar en cualquier konbini.\n\n**🚅 Olvidate del JR Pass — pagá punto a punto.** Para *este* recorrido los números son contundentes: el Shinkansen punto a punto suma **~¥27,000–33,000 por persona** contra **¥80,000** del pase de 14 días (¥84,000 desde el 1 de octubre de 2026). Las únicas etapas largas son Odawara→Kyoto, Osaka→Tokyo y los traslados al aeropuerto; Hakone funciona con trenes privados que el pase ni siquiera cubre. **Reservá los asientos a través de la app SmartEX** (en inglés, vinculás tu tarjeta y pasás directo con la IC registrada). Reservá asientos del lado del Fuji: **derecha yendo hacia el oeste** (Odawara→Kyoto, D/E), **izquierda yendo hacia el este** (Osaka→Tokyo).\n\n**Las etapas:**\n- **Tokyo → Hakone (23 sep):** **Romancecar** de Odakyu desde Shinjuku (~85 min directo, asientos reservados con vista panorámica) — no es Shinkansen. Comprá el **Hakone Free Pass** (¥7,100 por 2 días) en el Shinjuku Odakyu Sightseeing Service Center; incluye la tarifa base más los 8 transportes del circuito (tren de montaña, teleférico, ropeway, barco pirata, colectivos). El suplemento por asiento reservado en el Romancecar (~¥1,200 cada tramo) es **aparte**.\n- **Hakone → Kyoto (24 sep):** Odawara → Kyoto en Shinkansen **Hikari** (~2h15m, ~¥12,320). Ojo: el Nozomi, que es más rápido, no para en Odawara.\n- **Kyoto ↔ Osaka y Osaka ↔ Nara:** ni te molestes con el Shinkansen — simplemente pasá con la IC. JR Special Rapid Kyoto→Osaka (~29 min, ¥580); **Kintetsu** Osaka-Namba→Nara (~45 min, ~¥680) te deja justo cerca del parque de los ciervos.\n- **Osaka → Tokyo (30 sep):** el rapidísimo **Nozomi** (~2h30m, ~¥14,400).\n\n**🧳 Envío de equipaje (takkyubin) — el mayor upgrade de confort del viaje.** Mandá las valijas grandes de ciudad en ciudad y viajá solo con una mochila de día (~¥2,300–2,630 por bolso). Cualquier recepción de hotel o konbini se encarga. **Clave:** tarda **un día, no el mismo día**. Así que mandá las valijas **directamente de Tokyo a Kyoto (salteándote Hakone)** y llevá solo una bolsa de una noche al ryokan; después **de Osaka a Tokyo** la mañana del 30 de sep. **No** dependas de este servicio para llegar al aeropuerto el día de salida — no da el tiempo.\n\n**✈️ Llegada — 18 sep, 18:25:** vas a terminar con migraciones y equipaje ~19:15–19:45, apuntando a estar en un tren o colectivo hacia ~19:45.\n- **Desde Narita:** Narita Express (N'EX) hasta Tokyo ~53 min / Shinjuku ~80 min (~¥3,300), o el **Airport Limousine bus** (~¥3,600) si tu hotel está entre las paradas — te deja en la puerta, sin escaleras con el equipaje.\n- **Desde Haneda:** mucho más cerca — Keikyu/monorail + subte, ~30–45 min, ~¥500–650 con Suica.\n- **Dato útil:** comprá el **N'EX Tokyo Round-Trip Ticket** (¥5,000, válido 14 días) ya que llegás *y* salís por Tokyo — cubre los dos sentidos.\n\n**✈️ Salida — 2 oct, 12:00:** un vuelo internacional al mediodía significa que el cierre de equipaje es ~10:00, así que tenés que estar del lado de puertas ~10:30.\n- **Desde Narita:** salí del hotel **~08:15**, tomá el N'EX ~08:45, aeropuerto ~09:45–10:00.\n- **Desde Haneda:** salí del hotel **~09:00**, aeropuerto ~10:00.\n\n**📱 Apps:** Google Maps (excelente para rutas de transporte público — tocás una ruta y te dice en qué vagón subir para salir más rápido), **Japan Travel by Navitime** (mapas offline, te indica el vagón exacto y la salida), **SmartEX** (Shinkansen) y la app **Odakyu/EMot** (Hakone)."
    },
    {
     "id": "car-transit",
     "icon": "🚗",
     "title": "¿Auto o trenes?",
     "intro": "¿Necesitás alquilar un auto? (Respuesta corta: no.)",
     "body": "### 🚆 Veredicto: transporte público\nNada de auto. Este recorrido exacto Tokyo–Hakone–Kyoto–Osaka–Nara es el corredor ferroviario mejor conectado del planeta; alquilar un auto costaría más plata, generaría más estrés, y pasaría el día guardado en playas de estacionamiento.\n\n### Por qué no conviene el auto\n- Cada punto de este itinerario es una ciudad densa y bien servida por transporte, o un resort (Hakone) diseñado específicamente alrededor de pases de tren y colectivo. No hay ningún tramo rural o de difícil acceso donde un auto ayude.\n- Tokyo y Kyoto son activamente hostiles al auto para los visitantes: casi no hay estacionamiento gratuito, los hoteles cobran entre 2.000 y 4.000 yen/noche por guardar el auto, las calles son angostas y el tráfico es un caos. Estarías pagando para guardar un auto que no podés usar la mayor parte del día.\n- Hakone funciona con el Hakone Free Pass (tren de montaña, teleférico, ropeway, barco pirata y colectivos, todo incluido) — con auto el circuito empeora, no mejora, y te perdés la experiencia icónica del ropeway y el barco.\n- Las excursiones a Nara, Osaka y Kyoto son trenes directos de 30 a 60 minutos que salen cada pocos minutos; el estacionamiento en Nara, Fushimi Inari y Arashiyama es escaso y caro.\n- Para manejar necesitás un Permiso Internacional de Conducir por persona (hay que gestionarlo antes de salir de casa — no se puede tramitar en Japón), conducción por la izquierda, y los peajes en las autopistas son altísimos (solo los peajes Tokyo–Kyoto rondan los 10.000 yen o más).\n- Para un viaje de comida, cultura, onsen y vida nocturna con algunos gustos, el tren le permite a LOS DOS beber libremente (izakaya, bares gay en Shinjuku Ni-chome, sake) — tener que hacer de conductor designado arruina una parte central del viaje.\n- El JR Pass nacional (50.000 yen/persona en 2026) tampoco vale la pena acá — solo hacen un Shinkansen largo, así que pagar por separado con tarjeta IC y tickets individuales es mucho más barato que el auto O que el JR Pass.\n\n### 💴 Resumen de costos (para la pareja)\n- **Transporte público:** Aproximadamente 150.000–175.000 yen para los dos durante los 14 días completos (~$1.000–1.180). Desglose: pases Hakone ~12.200; Tokyo→Kyoto Shinkansen ~28.300; Shinkansen de vuelta + aeropuerto ~34.500; transferencia de llegada NRT→Tokyo ~6.000; más ~60.000–80.000 yen de taps diarios con tarjeta IC en Tokyo, Kyoto, Osaka y Nara para dos personas durante dos semanas. Redondeando en ~160.000 yen (~$1.080) como punto medio sólido.\n- **Un auto alquilado costaría:** Un alquiler de 14 días saldría aproximadamente 200.000–260.000 yen (~$1.350–1.750) en total, y AUN ASÍ necesitarían trenes en las ciudades. Estimación: alquiler base ~7.000–9.000 yen/día × 14 = ~98.000–126.000; peajes de autopista (Tokyo↔Kyoto/Osaka ida y vuelta + locales) ~25.000–35.000; estacionamiento hotel/ciudad ~3.000 yen/noche × 13 = ~39.000; combustible ~20.000–30.000; ETC card/seguro extras ~10.000–15.000; más ~2 × Permiso Internacional tramitado en el extranjero (~$20 c/u). Total: más plata, más estrés, ninguna ventaja, y igual tapan Suica todos los días en las ciudades.\n\n### Pases y tarjetas para comprar\n- **Welcome Suica Mobile (o Welcome Suica / Tourist Pasmo físico) × 2** — Tarjeta gratuita, cargá ~5.000–8.000 yen c/u para empezar (~$34–54 por persona) · La Welcome Suica digital (iPhone, iOS 17.2+, validez 180 días, sin depósito) es la opción más cómoda en 2026; si no, conseguí la Welcome Suica física o la nueva Tourist Pasmo en NRT. Cubre todo el metro/JR de Tokyo, los trenes locales de Kyoto/Osaka/Nara, colectivos y los convenience stores. Esta es tu tarjeta de tap cotidiana.\n- **Hakone Free Pass (2 días, desde Shinjuku) × 2** — 6.100 yen c/u (~$41 por persona) — total ~12.200 yen (~$82) · Incluye ida y vuelta Odakyu Shinjuku↔Odawara MÁS las 8 líneas de Hakone (tren de montaña, teleférico, ropeway, barco turístico, colectivos). Sumale el suplemento por asiento del Romancecar limited-express (~1.200 yen por tramo) si querés el tren panorámico con butaca reservada — es opcional.\n- **Tokyo → Kyoto Shinkansen (Nozomi/Hikari con reserva) × 2** — ~14.170 yen c/u (~$96 por persona) — total ~28.300 yen (~$192) · Comprá los tickets con asiento reservado en la estación o por la app SmartEX. Solo de ida — NO hacen round-trip, y eso es exactamente por qué el JR Pass pierde.\n- **Zona Kyoto/Osaka/Nara: pagás a medida que viajás con tarjeta IC (no hace falta pase regional)** — ~$0 extra (viajes ~230–720 yen c/u, debitado del saldo de Suica) · A un ritmo equilibrado con alguna excursión, las tarifas IC individuales le ganan a la mayoría de los pases de un día. Si hacen un día intenso en Osaka, el Osaka Amazing Pass (~2.800 yen) puede convenirles gracias a la entrada gratuita a atracciones — compralo solo ese día si los museos/atracciones lo justifican.\n- **Regreso a Tokyo/NRT (Shinkansen Kyoto→Tokyo + acceso a Narita) × 2** — ~14.170 yen de Shinkansen + ~3.000–3.070 yen de Skyliner/N'EX a NRT c/u (~$117 por persona) — total ~34.500 yen (~$234) · Shinkansen Kyoto→Tokyo de ida ~14.170 yen; después Keisei Skyliner o JR N'EX a Narita T1. Reservá el tramo al aeropuerto el día antes de tu vuelo LOT de las 12:00 — apuntá a estar en NRT alrededor de las 09:00.\n\n### Para tener en cuenta\n- Las conversiones a USD usan ~148 yen = $1 (2026); la tasa real de la tarjeta varía algunos puntos.\n- Precios a recordar: el JR Pass nacional de 7 días sale 50.000 yen/persona en 2026 y sube a 53.000 en ventas en el exterior a partir del 1 de octubre de 2026 — irrelevante acá porque no conviene comprarlo para un único tramo largo.\n- Para la persona del dúo fan del manga/anime: Akihabara (Tokyo) y Den Den Town / Nipponbashi (Osaka) quedan a un corto viaje en tren — sin auto; esa es otra razón por la que el transporte gana para la lista de compras.\n- Nota sobre onsen: algunos baños en Hakone y onsen tradicionales no admiten huéspedes con tatuajes visibles — fijate antes o elegí baños que los acepten; no tiene que ver con el transporte pero es relevante para los planes de onsen de la pareja.\n- Geisha/maiko: los paseos nocturnos por Gion (Kyoto) y las experiencias reservadas en ochaya/casas de té están todos a distancia a pie desde las estaciones de Kyoto — el auto solo sería un dolor de cabeza para estacionar en los callejoncitos de Gion.\n- Si querés comodidad con el equipaje en los dos tramos de Shinkansen, reservá gratis los asientos para \"equipaje sobredimensionado\" con anticipación ya que van con valijas; sigue siendo más barato que cualquier opción con auto.\n- Reservá la transferencia al aeropuerto de vuelta (Skyliner/N'EX) y un asiento de Shinkansen el día anterior a la salida — el vuelo LOT de las 12:00 desde NRT T1 implica salir del centro de Tokyo alrededor de las 08:30–09:00."
    },
    {
     "id": "money-sim-apps",
     "icon": "💴",
     "title": "Plata, SIM y Apps",
     "intro": "El kit de supervivencia financiera y digital: dónde conseguir yenes, cómo mantenerse conectados como pareja, y las apps que reemplazan a cualquier guía.",
     "body": "**💴 Plata — efectivo + tarjeta + IC.** Japón está más digitalizado que antes, pero como foodies que van a cazar street food y bodeguitas sin nombre, **sí o sí** van a necesitar efectivo.\n- **Sacá yenes en los cajeros 7-Bank** (adentro de cada 7-Eleven) o en los cajeros de **Japan Post** — los dos aceptan Visa/Mastercard/Amex extranjeras las 24 hs con menú en inglés. **Olvidate de las casas de cambio** antes de salir.\n- Llevá **~¥15,000–20,000 en efectivo** encima en todo momento.\n- **Visa/Mastercard contactless** funciona en los konbini, cadenas y tiendas departamentales. Avisale a tu banco que viajás antes de irte.\n\n**🛍️ Compras libre de impuestos (el sistema simple — llegaron justo a tiempo).** Sus fechas son **antes** del cambio del 1 de noviembre de 2026, así que el impuesto se descuenta **en el momento en la caja** — sin cola de reembolso en el aeropuerto.\n- Gastá **¥5,000+ (antes de impuestos)** en una misma tienda registrada como tax-free en un mismo día para calificar.\n- **Llevá el pasaporte físico siempre** — una foto en el teléfono NO se acepta.\n- Buscá el logo 'Japan. Tax-free Shop' (Don Quijote, Bic Camera, flagships de Uniqlo, tiendas departamentales, muchas farmacias).\n- Los consumibles se sellan en una bolsa — **no rompas el sello** hasta salir de Japón. Guardá el papeleo en el pasaporte hasta que te vayas.\n\n**📶 SIM — una eSIM por teléfono.** Dos navegando, traduciendo menús y a veces separándose (Akihabara vs. pasear, o salidas nocturnas) significa que cada teléfono debería tener sus propios datos.\n- **Las mejores opciones para 2026:** **Ubigi** o **Sakura Mobile** (las dos van por NTT Docomo — la cobertura más amplia, incluyendo las montañas de Hakone) para confiabilidad; **Airalo** (SoftBank) para los datos más baratos y flexibles. Un **plan de 20GB/30 días** cubre fácilmente dos semanas de mapas y redes sociales para una persona.\n- **Instalá y activá la eSIM antes de volar**, pero no enciendas los datos hasta que aterricen.\n- Si algún teléfono no es compatible con eSIM, alquilá un **pocket WiFi** en el aeropuerto (~¥800–1,000/día, un dispositivo cubre a los dos) — pero las eSIMs duales ganan si van a separarse de vez en cuando.\n- Dejá la SIM de tu país activa para llamadas y verificación en dos pasos.\n\n**📱 Apps imprescindibles (instalá antes de salir):**\n- **Google Maps** — tránsito casi en tiempo real; muestra el número de andén y en qué vagón subir.\n- **Google Translate** — bajate el paquete offline de japonés y usá el **modo cámara** para leer menús y carteles en vivo.\n- **Japan Travel by Navitime** — el mejor para rutas de tren; te dice exactamente el vagón y la salida.\n- **Tabelog** — las reseñas gastronómicas de confianza en Japón; cualquier cosa **de 3.5 para arriba es muy bueno** para tus búsquedas de comida.\n- **Suica/PASMO** en Apple/Google Wallet.\n- **Klook / GetYourGuide** — para tus entradas y tours con guía.\n- **Safety Tips** — alertas oficiales de JMA de terremotos y tifones en inglés (útil en la temporada de tifones de fines de septiembre).\n- **LINE** — la app de mensajería dominante en Japón, práctico si un guía o anfitrión coordina con vos.\n\n**🔌 Electricidad y datos prácticos:** Japón usa enchufes **Type A** de dos patas planas a 100V. Los cargadores de EE.UU. entran sin adaptador; quienes vienen de UK/EU/AU necesitan un adaptador Type A barato (¥100–330 en cualquier Daiso). Llevá un **cargador USB multipuerto** porque las habitaciones de hotel suelen tener pocos tomacorrientes. **Los baños** son un placer aparte (inodoros con asiento calefaccionado y washlet en todos lados) — pero llevá pañuelos y una toallita de mano pequeña, porque algunos baños públicos no tienen papel ni secadores."
    },
    {
     "id": "phrases",
     "icon": "🗣️",
     "title": "Frases japonesas útiles",
     "intro": "Un poco de japonés — especialmente los agradecimientos formales — calienta visiblemente cada interacción con guías, personal de ryokan y comerciantes. Estas son las que de verdad valen la pena. La pronunciación está en la descripción.",
     "body": "No necesitás ser fluido — el inglés llega sorprendentemente lejos en las ciudades, y el modo cámara de Google Translate se encarga de los menús. Pero esta docena de frases cubre el 90% de los momentos cotidianos, y *'sumimasen'* solo ya es la navaja suiza del viaje por Japón. Guardá estas tarjetas para tenerlas a mano cuando las necesités.",
     "cards": [
      {
       "name": "Sumimasen",
       "sub": "すみません",
       "desc": "soo-mee-mah-sen — Perdón / disculpá / para llamar al mozo. La palabra más útil de todo Japón."
      },
      {
       "name": "Arigatou gozaimasu",
       "sub": "ありがとうございます",
       "desc": "ah-ree-GAH-toh go-zah-ee-mahs — Gracias (formal). Acompañá con un leve movimiento de cabeza."
      },
      {
       "name": "Onegaishimasu",
       "sub": "お願いします",
       "desc": "oh-neh-gah-ee-shee-mahs — Por favor / quisiera esto. Usalo al pedir o al hacer una solicitud."
      },
      {
       "name": "Kore o kudasai",
       "sub": "これをください",
       "desc": "koh-reh oh koo-dah-sigh — Este, por favor. Señalá el menú o el plato."
      },
      {
       "name": "Oishii!",
       "sub": "おいしい！",
       "desc": "oy-shee — ¡Riquísimo! Cae genial en cualquier puesto callejero o barra de cocina."
      },
      {
       "name": "Kanpai!",
       "sub": "乾杯！",
       "desc": "kahn-pie — ¡Salud! Usalo seguido durante el festejo de los 40."
      },
      {
       "name": "Eigo no menu wa arimasu ka?",
       "sub": "英語のメニューはありますか？",
       "desc": "ay-go no menu wa ah-ree-mahs ka — ¿Tienen menú en inglés?"
      },
      {
       "name": "Ikura desu ka?",
       "sub": "いくらですか？",
       "desc": "ee-koo-rah dess ka — ¿Cuánto sale?"
      },
      {
       "name": "Toire wa doko desu ka?",
       "sub": "トイレはどこですか？",
       "desc": "toy-reh wa doh-koh dess ka — ¿Dónde está el baño?"
      },
      {
       "name": "Daijoubu desu",
       "sub": "大丈夫です",
       "desc": "die-JOH-bu dess — Estoy bien / no, gracias / está todo bien. Declina con amabilidad y sin drama."
      },
      {
       "name": "Itadakimasu / Gochisousama",
       "sub": "いただきます／ごちそうさま",
       "desc": "ee-tah-dah-kee-mahs / go-chee-so-sah-mah — Se dice antes de comer / al terminar la comida, como agradecimiento por lo recibido."
      },
      {
       "name": "Osusume wa?",
       "sub": "おすすめは？",
       "desc": "oh-soo-soo-meh wa — ¿Qué recomendás? Ideal para los aventureros gastronómicos sentados en la barra."
      }
     ]
    },
    {
     "id": "gay-travel",
     "icon": "🏳️‍🌈",
     "title": "Viaje gay en Japón",
     "intro": "Japón es uno de los lugares más seguros y acogedores del mundo para una pareja gay — poca delincuencia, cero hostilidad hacia turistas LGBTQ+, y una escena nocturna legendaria. Acá te contamos cómo leer la cultura y dónde encontrar tu gente.",
     "body": "**El clima: seguro, tolerante, pero discreto.** Japón es legal y físicamente seguro para visitantes LGBTQ+ — **sin riesgo de acoso** en la vida cotidiana, y **dos hombres compartiendo habitación de hotel o ryokan no le llama la atención a nadie**. Al reservar, tené en cuenta que **'twin' significa dos camas** y **'double' significa una sola cama** — pedí explícitamente lo que querés (una habitación de tipo occidental 'double'). El matrimonio igualitario no tiene reconocimiento nacional, pero los turistas no se encuentran con ningún problema práctico.\n\n**El afecto público es tranquilo — para todos.** Las muestras de afecto en público son discretas en la cultura japonesa en general, sea una pareja gay o no. **Tomarse de la mano está bien y nadie te mira mal** en ciudades como Tokyo, Osaka y el hipster-friendly Shimokitazawa — solo calibrá al ambiente más reservado, sobre todo en entornos tradicionales o rurales y en templos. Dentro de los barrios gays, el ambiente es relajado y abierto — **las muestras de afecto están perfectamente bien en Ni-chome.**\n\n**🏳️‍🌈 Tokyo — Shinjuku Ni-chome.** El **barrio gay con más vida nocturna por metro cuadrado en todo el mundo** — más de 300 barcitos en unas pocas manzanas caminables, a 5–15 minutos a pie de los hoteles de Shinjuku. Perfecto para una noche de cumpleaños. Puntos de partida fáciles y amigables para extranjeros:\n- **AiiRO Cafe** — el mítico bar esquinero donde el festejo se desborda a la calle. EL punto de referencia y de encuentro; la primera parada más fácil para dos turistas hombres.\n- **Arty Farty & The Annex** — con décadas de historia, siempre mixto y amigable para extranjeros, con pista de baile a partir de las ~11pm.\n- **Campy! Bar** — bar de drag flamboyante y divino (lo lleva la queen celebrity Bourbonne); todo el mundo se mezcla.\n- **Dragon Men** — local más grande con escenario y shows de drag los fines de semana.\n- **Eagle Tokyo Blue** — ambiente relajado y bearish, con algunos de los mejores shows de drag (revisá su Instagram para ver qué hay en tus fechas).\n- **AiSOTOPE Lounge** — el club de baile más grande de verdad, para terminar la noche (chequeá Resident Advisor / Instagram por la grilla; 20+, llevá el pasaporte como ID).\n\n*Un recorrido de cumpleaños curado: arrancá tranquilo en la esquina de AiiRO → diversión camp en Campy! → cantá y bailá en Arty Farty → show de drag en Dragon Men o Eagle → terminá en la pista de AiSOTOPE. Todo caminando. Hacelo el sáb 19 sep o el dom 20 sep para aprovechar la energía del fin de semana.*\n\n**🏳️‍🌈 Osaka — Doyama-cho.** Un barrio gay compacto y copado cerca de Umeda (más de 30 bares en pocas manzanas), que muchos describen como *más cálido y accesible para visitantes que Ni-chome*. Tus noches en Osaka (lun 28 / mar 29) son entre semana y más tranquilas — pasate por los clásicos siempre abiertos y amigables en inglés:\n- **FrenZ-FrenZY** — de dueño australiano, karaoke gratis, lleno de colores rainbow, con staff que habla inglés de verdad y te hace sentir bienvenido.\n- **Grand Slam** — bar gay de karaoke clásico, otro ancla amigable para anglófonos.\n- **Eagle Osaka** — la opción grande y de fácil acceso (3 pisos, sin efectivo, entrada gratis lun–jue).\n*Combiná una noche en Doyama con el atardecer desde el Umeda Sky Building — los dos están en el norte.*\n\n**🏳️‍🌈 Kyoto — pequeño pero con encanto.** Sin un 'barrio' gay como tal, solo un puñado de bares íntimos alrededor de **Kiyamachi/Kawaramachi**. **Apple** es un bar pequeño, amigable para extranjeros, solo hombres, con un dueño de lo más cálido y karaoke gratis — tan chiquito que terminás charlando con todos (mar–dom, solo efectivo). Llegá con pocas expectativas de escala y muchas expectativas de calidez.\n\n**Etiqueta en bares chicos (poco conocida para los turistas occidentales):**\n- **Otoshi / cargo por asiento:** muchos bares chicos suman un cargo de ¥500–1,500 por sentarse (a veces con un snack). Esto es **normal, no es una estafa**.\n- **Sin fotos del staff ni de los clientes** sin permiso explícito — muchos no están públicamente fuera del closet.\n- **Si un bar chiquito no te deja entrar** (solo miembros / solo japoneses / temática específica), es **algo de rutina, no es personal** — simplemente pasá al siguiente.\n- **El efectivo manda** — llevá ¥15,000–20,000 entre los dos más una tarjeta para los lugares sin efectivo (Eagle, AiSOTOPE). Llevá los pasaportes como ID para los clubes (20+ se controla).\n\n**Horarios y notas de seguridad:** Ni-chome llega a su pico los vie/sáb después de las 10–11pm. Tus fechas no coinciden con el Tokyo Rainbow Pride (primavera) — el plan es un recorrido de bares curado, no un festival. **Comé antes de ponerte a tomar** — la mayoría de los bares solo sirven bebidas (primero pasate por yakitori cerca en Omoide Yokocho). Japón está entre los países más seguros del mundo; mantené la atención normal en las zonas de noche y **evitá a los captadores** que te arrastran a bares 'gratis' (después te cobran cualquier cosa). Emergencias: **policía 110, ambulancia 119**; línea en inglés 24h **Japan Visitor Hotline 050-3816-2787**."
    },
    {
     "id": "weather-packing",
     "icon": "🌦️",
     "title": "Clima y qué llevar en la valija",
     "intro": "La ventana del 18 sep al 2 oct cae justo en la transición de verano tardío a otoño temprano en Japón: días cálidos y húmedos que se van calmando hacia algo genuinamente agradable, más un riesgo real (aunque generalmente manejable) de tifón. Llevá ropa en capas, planeá para la lluvia y tratá a un Mt. Fuji despejado como un bonus de buena suerte.",
     "body": "**El arco climático a lo largo del viaje**\n\n- **Tokyo (18–22 sep):** El tramo más caluroso y pegajoso. Esperá máximas diurnas de alrededor de **29–30°C con humedad real**, noches un poco más frescas y cómodas — ideal para las terrazas (Shibuya Sky) y las noches en Ni-chome.\n- **Hakone (23 sep):** Mayor altitud = **notablemente más fresco**, especialmente después de que cae el sol. Llevá una capa liviana para la noche en el onsen de la terraza del ryokan.\n- **Kyoto & Osaka (24–29 sep):** Todavía cálido (**máximas ~28–30°C**) y puede sentirse húmedo tierra adentro, pero hacia fines de septiembre ya va cediendo hacia días cómodos en los 20 altos y noches en los 20 bajos. Las mañanas en los templos pueden ser frescas.\n- **De vuelta en Tokyo (30 sep–1 oct):** Principios de octubre suele ser el momento ideal — **días agradables en los 20 altos, noches en los 20 bajos**, menos humedad que la semana de llegada.\n\n**Dos realidades climáticas para tener en cuenta**\n\n1. **La humedad se concentra al inicio del viaje.** Los primeros días en Tokyo son los más agotadores por el calor. Llevá un abanico de mano, una toalla refrescante y agua; hacé las visitas al aire libre en la mañana y guardá los refugios con aire acondicionado (teamLab, las tiendas de Akihabara, los depachika) para las horas de mayor calor de la tarde.\n2. **La temporada de tifones es real, pero menos dramática de lo que parece.** Sobre el papel, fines de septiembre es el pico de la temporada de tifones. El riesgo práctico es de **interrupciones, no de peligro**: una tormenta que pase puede suspender el Shinkansen y cerrar el teleférico y el barco pirata de Hakone. Las empresas ferroviarias anuncian las suspensiones la noche anterior y retoman rápido una vez que pasa la tormenta. Tené la **app JMA o Windy** en los celulares, contratá un seguro de viaje que cubra demoras y dejá **1–2 franjas flexibles/aptas para interiores** para que una tormenta no te arruine un plan fijo.\n\n**A tener en cuenta:** El famoso **follaje otoñal y las iluminaciones nocturnas de Kyoto no arrancan hasta fines de oct–nov** — demasiado tarde para ustedes. Están en la temporada cálida \"verde\", así que no armen planes en torno a los colores del otoño. El alquiler de yukata también suele terminar alrededor del 20 de sep, así que en Kyoto van a alquilar **kimono** propiamente dicho, no el más liviano yukata de verano.",
     "cards": [
      {
       "name": "Capas, no bulto",
       "sub": "Ropa",
       "desc": "Remeras transpirables de manga corta para los días calurosos en Tokyo/Osaka + una camiseta larga o buzo liviano para las mañanas y noches frescas en Hakone y los templos de Kyoto."
      },
      {
       "name": "CAMPERA de lluvia (no paraguas)",
       "sub": "Estrategia para la lluvia",
       "desc": "Los vientos de un tifón destrozan los paraguas. Una campera de lluvia compacta y plegable es mucho mejor; comprá un paraguas barato en el konbini solo para lluvia liviana."
      },
      {
       "name": "Zapatillas cómodas para caminar",
       "sub": "Calzado",
       "desc": "Van a caminar kilómetros por día más las escalinatas de Fushimi Inari y el parque de los monos. El estilo slip-on hace que sacarse los zapatos en el ryokan y los templos sea mucho más fácil. Llevá medias limpias y sin agujeros."
      },
      {
       "name": "Kit de supervivencia para días húmedos",
       "sub": "Comodidad la primera semana",
       "desc": "Abanico de mano, toalla refrescante, ventilador portátil, protector solar y una toallita chica — los primeros días en Tokyo son genuinamente sofocantes."
      },
      {
       "name": "Apps del clima",
       "sub": "Monitoreo de tifones",
       "desc": "JMA / Windy para seguir las tormentas; la app oficial 'Safety Tips' para alertas push de JMA en inglés. Una eSIM de datos garantiza que las reciban."
      },
      {
       "name": "Bolsa de tela chica",
       "sub": "Práctica",
       "desc": "Funciona como bolsa de basura (los tachos escasean) y te carga con las compras de Akihabara/Donki. Los cestos de basura son escasos, así que llevá tu basura con vos."
      }
     ]
    },
    {
     "id": "events",
     "icon": "🎌",
     "title": "Qué hay para hacer en tus fechas",
     "intro": "Eventos con fecha dentro de tu ventana del 18 sep – 2 oct 2026 — ahora que Hakone se movió al jue 24 sep, fuera del pico de Silver Week.",
     "body": "### 🎌 Silver Week (sáb 19 – mié 23 sep) — y por qué movimos Hakone\nUn rarísimo bloque de 5 días feriados (lunes 21 Respeto a los Mayores, miércoles 23 Equinoccio de Otoño): el turismo interno se dispara y **los shinkansen corren con reserva obligatoria**. Tu ryokan de cumpleaños queda ahora el **jue 24 sep — justo el día en que las multitudes vuelven a casa**, así que Hakone está más tranquilo *y* notablemente más barato. Tokyo simplemente absorbe la noche feriada extra (una ciudad grande se lo toma de onda). Igual reservá el ryokan y el shinkansen del 25 sep Odawara→Kyoto con anticipación.\n\n### ✅ Cae perfecto en tu ventana\n- **Grand Sumo — Aki Basho** (Ryogoku): se disputa del 13 al 27 sep; tu **lun 21 sep** es un día real de torneo. Las entradas abren ~el **8 de agosto** — comprá ya.\n- **Tsukimi — luna de la cosecha (Jugoya)**: la noche del **vie 25 sep** — tu primer atardecer en Kyoto. ¿Nublado? La luna llena real es el **dom 27 sep**.\n- **Oedo Antique Market** (Tokyo Int'l Forum): **dom 20 sep** a la mañana (confirmá en antique-market.jp; se cancela si llueve).\n- **Excursión a Kamakura** (nuevo **23 sep**): el Gran Buda, Hase-dera, la línea costera Enoden — un escape relajado en Silver Week antes del ryokan.\n\n### 🎮 Opcional, vale saberlo\n- **Tokyo Game Show 2026** (Makuhari): **días públicos sáb 19 / dom 20 / lun 21** — una posible media jornada para el amante del anime.\n- **teamLab Borderless** (Azabudai Hills): un segundo teamLab diferente si querés más — ideal para un espacio libre con lluvia.\n- **Vida nocturna gay en Osaka** (Doyama-cho): tu noche en Osaka el **mar 29 sep** es un día de semana tranquilo — EXPLOSION & EAGLE Osaka.\n\n### 🌀 Nota de temporada\nA finales de septiembre estamos en la cola de la **temporada de tifones**. Tené una alternativa cubierta/flexible por ciudad; los ítems de mayor riesgo son el **circuito al aire libre de Hakone (24 sep)** y tus **vuelos de llegada y salida**. Seguí el JMA de 3 a 5 días antes."
    },
    {
     "id": "booking-checklist",
     "icon": "✅",
     "title": "Lista de Reservas y Cronograma",
     "intro": "Algunas de las mejores experiencias de este viaje tienen acceso con horario fijo o cupos muy limitados y se agotan rápido — varias con fechas límite duras e inamovibles. Acá te contamos qué reservar y con cuánta anticipación, ordenado por urgencia.",
     "body": "### ⏰ Fechas límite duras (estás a ~6 semanas — actuá ahora)\n- **AHORA – Entradas de sumo** (21 sep): las ventas abrieron ~el 8 de ago. Comprá ya mismo.\n- **AHORA – Ryokan en Hakone** (24 sep, cumpleaños): las habitaciones con onsen privado se agotan; reservá igual de anticipado aunque sea después de Silver Week.\n- **AHORA – Asientos en el Shinkansen**: Odawara→Kyoto (25 sep) y Osaka→Tokyo (30 sep) vía SmartEX.\n- **10 sep, 10:00 JST – Ghibli Museum** (para el 1 oct): el lanzamiento es por Lawson, se agota en minutos, el nombre debe coincidir con el pasaporte.\n- **Semanas antes – teamLab Planets, Shibuya Sky (atardecer), cena con maiko, restaurantes top**.\n\n---\n### ⏰ Fechas límite duras (estás a ~6 semanas — actuá ahora)\n- **AHORA – Entradas de sumo** (21 sep): las ventas abrieron ~el 8 de ago. Comprá ya; la demanda de feriado es alta.\n- **AHORA – Ryokan en Hakone + Romancecar** (23 sep, Silver Week): las habitaciones con onsen privado y los asientos reservados desaparecen. Reservá hoy.\n- **AHORA – Asientos en el Shinkansen** (Odawara→Kyoto 24 sep, Osaka→Tokyo 30 sep): reservá vía SmartEX; Silver Week = todo reservado.\n- **10 sep, 10:00 JST – Ghibli Museum** (para el 1 oct): el lanzamiento es por Lawson, se agota en minutos, el nombre debe coincidir con el pasaporte.\n- **Semanas antes – teamLab Planets, Shibuya Sky (horario de atardecer), cena con maiko, restaurantes top**.\n\n---\n**🚨 FECHAS LÍMITE DURAS — poné alarmas en el teléfono**\n\n- **Ghibli Museum (Mitaka):** Las entradas se venden ÚNICAMENTE a través de **Lawson Ticket**, y se liberan a las **10:00 JST del día 10 del mes anterior** para todo el mes siguiente. Para la visita del 30 sep / 1 oct de vuelta, tenés que estar conectado y listo a las **10:00 JST del 10 de sep de 2026**. Los turnos de fin de semana y feriado se agotan en ~15 minutos. **El nombre en la entrada debe coincidir exactamente con el pasaporte; llevalo.** Esta es tu única fecha límite real.\n- **Grand Sumo (Aki Basho):** Las entradas salieron a la venta el **8 de ago de 2026** — comprá en cuanto abran las ventas (Ticket Oosumo oficial / buysumotickets.com). Los mejores lugares se van en horas.\n- **Entradas al Tokyo Game Show (días públicos):** Solo por internet con anticipación, no se venden en puerta — comprá en cuanto salgan.\n\n**🏆 RESERVÁ MESES ANTES (3–6 meses) — los planes más impactantes del cumpleaños**\n\n- **Ryokan en Hakone con baño de onsen PRIVADO en habitación o al aire libre (23 sep):** La reserva más importante de todo el viaje. Reservá con **3–6 meses de anticipación** — finales de septiembre + Silver Week significa que las mejores habitaciones con onsen privado (Gora Hanaougi, Ginyu, Gora Kadan, Yama no Chaya) se agotan. Reservá directo o vía Ikyu/Relux/Japanican; pedí una *habitación con baño de agua caliente al aire libre privado (kashikiri/rotenburo en habitación)* y **mencioná que es el cumpleaños número 40** — muchos agregan torta o sake.\n- **Cena privada de ozashiki con maiko/geiko (Kyoto):** El plato fuerte del cumpleaños y una de las cosas más difíciles de conseguir. Reservá con **3–6 semanas de anticipación** (Gion MAIKOYA, Geisha Show Kyoto, o un tour privado por Viator). Confirmá si tienen atención en inglés y si es una maiko o geiko de verdad.\n\n**📅 RESERVÁ 2–4 SEMANAS ANTES**\n\n- **teamLab (Planets o Borderless):** Acceso con horario fijo, se agota semanas antes de forma habitual — elegí UNO, reservá un turno de noche para el clima romántico.\n- **Horario de atardecer en Shibuya Sky:** Se agota semanas antes; reservá la ventana de ~30–40 min antes del atardecer en el sitio oficial o en Klook.\n- **Warner Bros. Studio Tour (Harry Potter):** Específico por fecha y hora, se agota los fines de semana. Apuntá a los primeros días en Tokyo (18–22 sep).\n- **Universal Studios Japan / Super Nintendo World (si lo hacen, lun 28 sep):** Comprá antes un **Studio Pass con fecha**; asegurate de entrar a Super Nintendo World con un **nivel de Express Pass que incluya la entrada a Nintendo**, o agarrá el Area Ticket gratuito con horario en la app de USJ en el momento en que abre (se agota en minutos).\n- **Tour privado de anime en Akihabara, food tour en Tsukiji + clase de sushi, food tour en Osaka, ceremonia del té en Kyoto / sesión de fotos con kimono / paseo por Gion:** Todo con 1–4 semanas de anticipación; los buenos turnos privados se van.\n- **Cafés temáticos** (Pokemon Cafe Nihonbashi, Kirby Cafe Skytree): ~1 mes antes si los querés.\n\n**🚆 ANTES DE VOLAR / AL LLEGAR**\n\n- **Permiso Internacional de Conducir (los dos):** Si querés hacer el tour en Street Kart / Mario Kart, TENÉS QUE obtener un Permiso Internacional de Conducir de la Convención de Ginebra de 1949 en tu país antes de salir — no se puede tramitar en Japón. Sin permiso = sin manejo.\n- **Pasajes JR:** **No compres el JR Pass nacional** — los tickets punto a punto salen menos de la mitad de precio para esta ruta. Reservá asientos en el Shinkansen (Odawara→Kyoto Hikari; Osaka→Tokyo Nozomi) en la **app SmartEX** con 1–2 semanas de anticipación (fines de septiembre está movido). Comprá el **N'EX Tokyo Round-Trip Ticket (¥5,000)** ya que llegás y salís por Tokyo. Conseguí el **Hakone Free Pass** (2 días, ¥7,100 desde Shinjuku) + el suplemento por asiento en el Romancecar. Configurá **Mobile Suica** en la Wallet de Apple para todo el transporte local.\n- **eSIMs + envío de equipaje:** Instalá las eSIMs antes de volar; planeá usar **Yamato takkyubin** para mandar las valijas Tokyo→Kyoto (salteando Hakone) y Osaka→Tokyo (al día siguiente, no el mismo día).",
     "cards": [
      {
       "name": "Ghibli Museum",
       "sub": "ALARMA: 10 sep, 10:00 JST",
       "desc": "Solo por Lawson, lanzamiento del mes anterior, se agota en ~15 min. El nombre debe coincidir con el pasaporte."
      },
      {
       "name": "Grand Sumo",
       "sub": "En venta el 8 de ago",
       "desc": "Comprá en cuanto abran las ventas. Los mejores lugares se van en horas."
      },
      {
       "name": "Ryokan en Hakone",
       "sub": "3–6 meses antes",
       "desc": "Habitación con onsen privado en cuarto; mencioná el cumpleaños número 40. Se agota durante Silver Week."
      },
      {
       "name": "Cena con maiko",
       "sub": "3–6 semanas antes",
       "desc": "Ozashiki privado en Gion. Confirmá si hay inglés y si es maiko o geiko de verdad."
      },
      {
       "name": "teamLab Planets",
       "sub": "2–4 semanas antes",
       "desc": "Acceso con horario fijo (30/9 a la noche, slot ~17:30), se agotan semanas antes."
      },
      {
       "name": "USJ / Super Nintendo World",
       "sub": "Con bastante anticipación (lun 28 sep)",
       "desc": "Studio Pass con fecha + Express Pass con entrada a Nintendo, o agarrá el Area Ticket gratuito en la app al abrir."
      },
      {
       "name": "Permiso para los karts",
       "sub": "Antes de volar",
       "desc": "Los dos conductores necesitan un Permiso Internacional de Conducir de la Convención de Ginebra de 1949 tramitado en casa. No se emite en Japón."
      },
      {
       "name": "JR / Shinkansen",
       "sub": "1–2 semanas antes",
       "desc": "Saltate el JR Pass. SmartEX para los asientos, N'EX ida y vuelta ¥5,000, Hakone Free Pass, Mobile Suica."
      }
     ]
    },
    {
     "id": "budget",
     "icon": "💴",
     "title": "Presupuesto estimado",
     "intro": "Costos diarios aproximados por pareja para una base en hotel de rango medio con algunos gustos especiales de cumpleaños bien elegidos. Japón te permite comer de maravilla barato (¥900 de ramen) o tirar la casa por la ventana (¥40k de omakase) — estos rangos asumen el estilo que mencionaron: \"hoteles decentes, derroche en experiencias puntuales\". Todos los montos son por pareja salvo que se indique lo contrario.",
     "body": "**Gastos diarios fijos (por pareja, rango medio)**\n\n- **Hotel de rango medio (habitación doble):** ~**¥16,000–38,000/noche** según la ciudad y el alojamiento. Opciones económicas-medias (APA, Sotetsu Fresa, Candeo) rondan ¥14,000–24,000; opciones más trendy/céntricas (Gracery, Cross Hotel, Shibuya Excel) ¥22,000–38,000.\n- **Comida, día normal:** ~**¥8,000–16,000/pareja/día**. Un desayuno de konbini o algo rápido (¥1,000–1,500), un almuerzo casual de ramen o street food (¥2,000–4,000), y una cena en izakaya u okonomiyaki con bebidas (¥6,000–10,000). Los días de pica-pica callejero (Tsukiji, Nishiki, Kuromon, Dotonbori) salen similar — ¥3,000–6,000 por persona si probás de todo.\n- **Transporte local:** ~**¥1,500–3,000/pareja/día** usando Suica en subtes y colectivos. Sumá entradas a atracciones (miradores ~¥2,500 por persona, templos ¥500 cada uno).\n- **Noche de joda (Ni-chome/Doyama):** ~**¥8,000–15,000 por persona** para un bar-crawl de cumpleaños completo con tragos + entrada a algún club; un par de bares tranquis sale mucho menos (¥4,000–6,000/pareja). Llevá ¥15,000–20,000 en efectivo entre los dos (muchos bares son cash-only + cobran ¥500–1,000 de cover por asiento).\n\n**Transporte intercity (pago único, por persona)**\n\n- Shinkansen de punto a punto por todo el circuito: **~¥27,000–33,000 por persona** (Odawara→Kyoto ~¥12,320; Osaka→Tokyo ~¥14,400; tramos cortos Kyoto/Osaka/Nara ¥400–820). **El JR Pass (¥80,000+) NO vale la pena** para esta ruta.\n- N'EX Tokyo ida y vuelta ¥5,000 por persona; Hakone Free Pass ¥7,100 por persona + ~¥1,200 de asiento en Romancecar por tramo.\n- Reenvío de equipaje: ~¥2,300–2,630 por valija por tramo.\n\n**Los gustos de cumpleaños (por pareja, gasto único)**\n\n- **Ryokan con onsen privado en Hakone (1 noche, kaiseki + desayuno incluido):** ~**¥70,000–150,000** para el rango medio-alto (Gora Hanaougi/Ginyu/Yama no Chaya); el top tier Gora Kadan llega a ¥160,000–260,000.\n- **Cena privada con maiko/geiko:** show+cena compartido ~¥12,000–20,000 por persona; hora completamente privada con maiko ~¥80,000–100,000/grupo.\n- **Otros gastos únicos:** tour privado de anime en Akihabara ~$60–95 por persona; tour de Tsukiji + clase de sushi ~¥35,000/pareja; sesión de fotos con kimono/samurai ~¥40,000–66,000/pareja; go-karts ~¥22,000–40,000/pareja; Warner Bros HP ~¥7,000 por persona; USJ día completo + Express ~¥18,000–35,000 por persona.\n\n**Totales aproximados**\n\n- **Un día \"normal\" equilibrado** (hotel + comida + transporte + 1–2 atracciones pagas): roughly **¥35,000–60,000/pareja/día**.\n- **Un día de derroche** (por ej. la noche en ryokan de Hakone, o una cena con maiko + extras): **¥90,000–180,000+/pareja**.\n- **Regla de oro con el efectivo:** siempre lleváen el bolsillo ~¥15,000–20,000 en cash — la comida callejera, los bodegones izakaya, los bares de Ni-chome, Kuromon/Nakatanidou y los locales de ropa vintage frecuentemente son cash-only. Retirá yenes en los cajeros 7-Bank (7-Eleven) o Japan Post, que aceptan tarjetas extranjeras las 24hs.",
     "cards": [
      {
       "name": "Hotel de rango medio",
       "sub": "por noche, habitación doble",
       "desc": "¥16,000–38,000 según ciudad/alojamiento. Económico-medio desde ¥14,000."
      },
      {
       "name": "Comida, día normal",
       "sub": "por pareja",
       "desc": "¥8,000–16,000 entre desayuno de konbini, almuerzo casual e izakaya con bebidas."
      },
      {
       "name": "Día normal equilibrado",
       "sub": "todo incluido, por pareja",
       "desc": "~¥35,000–60,000 con hotel, comida, transporte y 1–2 atracciones pagas."
      },
      {
       "name": "Día de derroche",
       "sub": "por pareja",
       "desc": "¥90,000–180,000+ para la noche en ryokan de Hakone o una cena privada con maiko + extras."
      },
      {
       "name": "Shinkansen circuito completo",
       "sub": "por persona",
       "desc": "~¥27,000–33,000 de punto a punto. Saltéense el JR Pass de ¥80,000."
      },
      {
       "name": "Efectivo a mano",
       "sub": "siempre encima",
       "desc": "¥15,000–20,000 entre los dos. Muchos puestos de street food, bares y locales vintage son cash-only."
      }
     ]
    }
   ]
  },
  "restaurants": [
   {
    "name": "Tsukiji Outer Market — Marutake tamagoyaki + seafood crawl",
    "city": "Tokyo",
    "cuisine": "Comida callejera / mariscos de mercado",
    "area": "Tsukiji, Chuo-ku (Tsukiji Station en la línea Hibiya, 2 min; o Tsukijishijo en la línea Oedo)",
    "vibe": "puesto callejero / recorrida matutina por el mercado",
    "signatureDish": "Marutake atsuyaki-tamago en palito (omelette dulce de huevo en capas, ~100-150 yen); más vieiras a la plancha, uni, brochettes de atún fresco, tamago de Yamacho",
    "price": "~1.500-3.000 yen por persona picoteando; solo por la mañana (los puestos abren ~6:00 AM, muchos se quedan sin stock a media mañana). En efectivo.",
    "reservation": "Sin reserva — entrás y ya. Llegá temprano (antes de las 9 AM) para evitar la multitud y conseguir todo fresquísimo.",
    "why": "La clásica recorrida matutina de street food de Tokyo y un arranque perfecto para la primera mañana después de la llegada del viernes a la noche en NRT. Es hands-on, relajado y muy cultural — comés parado entre los pescadores. Un comienzo ideal y sin presión para la pareja que ama la comida callejera y la cultura gastronómica japonesa."
   },
   {
    "name": "Tonkatsu Tonki (Meguro Honten)",
    "city": "Tokyo",
    "cuisine": "Tonkatsu (mostrador de culto)",
    "area": "Meguro (3 min de la salida oeste de Meguro Station)",
    "vibe": "mostrador / institución de culto de la vieja escuela",
    "signatureDish": "Set de rosu katsu (graso) o hire katsu (magro) — ese es el menú completo, desde 1939",
    "price": "~2.000-2.500 yen por persona; cena desde las 4:00 PM (almuerzo limitado). Pagan en efectivo.",
    "reservation": "Sin reservas. Llegá justo a las 4:00 PM para entrar de frente, o esperá cola. Sentate en el mostrador en U — la gracia está en ver la coreografía de la cocina abierta.",
    "why": "Un pedacito vivo de la historia de Tokyo y un mostrador de culto de los que están en la lista de deseos. La cocina abierta teatral y el menú de un solo plato son exactamente el tipo de experiencia auténtica y sin vueltas que esta pareja fanática de la gastronomía va a adorar — y de paso es muy accesible en precio entre los gustos más caros."
   },
   {
    "name": "Soba House Konjiki Hototogisu",
    "city": "Tokyo",
    "cuisine": "Ramen (shoyu de almejas con estrella Michelin)",
    "area": "Shinjuku Ni-chome — literalmente en el barrio gay (Shinjuku-sanchome Station ~5 min; a pasos de los bares de Ni-chome)",
    "vibe": "mostrador / ramen Michelin con onda — gay-friendly / pegado a Ni-chome",
    "signatureDish": "Ramen shoyu de almejas y porcini (caldo de hamaguri clam + pollo + cerdo con aceite de trufa y aceite de cebolla de verdeo)",
    "price": "~1.300-2.200 yen por persona; almuerzo 11:00-15:00 y cena 18:30-21:00, cerrado dom/lun. Solo efectivo.",
    "reservation": "Sin reservas — tomá un ticket numerado al llegar, llegá temprano. Está en Ni-chome, ideal para combinar con una noche de bares.",
    "why": "Un bowl con estrella Michelin que queda EN Shinjuku Ni-chome — la picada perfecta gay-friendly antes o después de la noche. Te da el ramen de culto con un bowl refinado e insólito de almejas y trufa, muy distinto al tonkotsu de siempre, perfecto para la pareja que busca lo especial y lo inesperado."
   },
   {
    "name": "Zauo Shinjuku (fishing izakaya)",
    "city": "Tokyo",
    "cuisine": "Izakaya / mariscos (experiencia de pesca propia)",
    "area": "Shinjuku (Washington Hotel, ~8 min de la salida sur/oeste de Shinjuku Station)",
    "vibe": "experiencia gastronómica peculiar y aventurera — para cagarse de risa en un viaje de cumpleaños",
    "signatureDish": "El pescado que VOS pescás del estanque al lado del bote — servido como sashimi, a la plancha o en tempura; la dorada y el lenguado son las mejores presas",
    "price": "~5.000-8.000 yen por persona con bebidas; cena. Ritual festivo de tambores y aplausos cuando agarrás un pez.",
    "reservation": "Se recomienda reservar, especialmente para una mesa al lado del bote (reservá online). Avisales que es un cumpleaños.",
    "why": "Esta es la propuesta 'aventurera e insólita' — literalmente pescás tu propia cena desde un bote en el medio del salón, con redoble de tambores cuando lo lográs. Lúdico, interactivo, memorable y garantizado como momento destacado para una pareja que busca experiencias gastronómicas fuera de lo común."
   },
   {
    "name": "Andy's Shin Hinomoto",
    "city": "Tokyo",
    "cuisine": "Izakaya (con foco en mariscos)",
    "area": "Yurakucho — bajo las vías del JR (1 min de Yurakucho Station, caminando a Ginza)",
    "vibe": "izakaya / institución animada y acogedora",
    "signatureDish": "Patas de centolla real, ostras y sashimi fresquísimo traído a diario; pescado a la plancha",
    "price": "~4.000-6.000 yen por persona con bebidas; cena. Efectivo y tarjeta.",
    "reservation": "Se recomienda reservar con anticipación — se llena hasta en días de semana. Llamá o reservá con tiempo.",
    "why": "La izakaya quintaesencial de Tokyo — una institución manejada por un británico, amigable para extranjeros, bajo los arcos del ferrocarril desde 1945, famosa por sus mariscos excepcionalmente frescos y su bienvenida cálida y bulliciosa. Sin barreras de idioma y sin pretensiones, perfecta para una noche de izakaya relajada para dos viajeros que quieren el ambiente de verdad."
   },
   {
    "name": "Isetan Shinjuku Depachika (B1 food hall) + Saiseisakaba standing bar",
    "city": "Tokyo",
    "cuisine": "Food hall depachika / bar de pie tachinomi",
    "area": "Shinjuku (Isetan edificio principal B1, directo desde Shinjuku-sanchome Station; Saiseisakaba en Shinjuku-sanchome)",
    "vibe": "picoteo en depachika + bar de pie — escena local de alta energía",
    "signatureDish": "Depachika: bento artesanal, croquetas de wagyu, wagashi y pastelería preciosa. Saiseisakaba: motsu-yaki (brochettes de vísceras a la plancha) con cerveza bien fría, parado",
    "price": "Depachika ~1.500-3.000 yen picoteando (de día); Saiseisakaba ~2.500-3.500 yen con bebidas (de noche). Los dos muy accesibles.",
    "reservation": "Sin reserva para ninguno — el depachika es de libre circulación; el Saiseisakaba es codo a codo parado, por orden de llegada.",
    "why": "Cubre de una sola salida por Shinjuku tanto el depachika como el bar de pie. El food hall de Isetan es el mejor de Tokyo para souvenirs comestibles y compras gastronómicas sin lujo, y después en un tachinomi como el Saiseisakaba terminás hombro a hombro con los locales sobre brochettes baratos — una combinación divertida, económica y muy cultural, cerquita de su base para la noche."
   },
   {
    "name": "Tempura Tsunahachi (Shinjuku Honten)",
    "city": "Tokyo",
    "cuisine": "Tempura (mostrador)",
    "area": "Shinjuku (3 min de la salida este de Shinjuku Station)",
    "vibe": "mostrador / especialista histórico con muy buena relación precio-calidad",
    "signatureDish": "Curso de tempura frita en el mostrador — langostino, anguila de mar (anago), verduras de estación fritas pieza por pieza frente a vos",
    "price": "Almuerzo ~2.000-3.500 yen; menú degustación cena ~4.000-7.000 yen por persona. Acepta tarjeta.",
    "reservation": "Amigable para entrar sin reserva al almuerzo; se recomienda reservar para la cena o el mostrador. Sentate en el mostrador para la experiencia pieza por pieza.",
    "why": "El mostrador de tempura de verdad, a un precio razonable (desde 1924) y no a 20.000 yen — una elección inteligente entre las noches de wagyu y sushi. Ver cada pieza frita y servida caliente en el plato es el ritual clásico de la tempura, muy rico en cultura y accesible en presupuesto para un viaje de nivel intermedio."
   },
   {
    "name": "Sumibi Yakiniku Nakahara",
    "city": "Tokyo",
    "cuisine": "Wagyu yakiniku omakase (EL GRAN FESTEJO DE CUMPLEAÑOS)",
    "area": "Shirokane-Takanawa / zona de Meguro (caminando desde Shirokane-Takanawa Station)",
    "vibe": "derroche / mostrador de A5 wagyu digno de un cumpleaños de 40",
    "signatureDish": "Menú omakase de A5 wagyu que cambia a diario — incluye la rarísima 'lengua fantasma' (maboroshi no tan) y cortes premium a las brasas de carbón (sumibi)",
    "price": "~25.000-38.000 yen por persona para el menú degustación; cena. Acepta tarjeta.",
    "reservation": "Imprescindible — reservá con mucha anticipación (se puede vía Google Maps / servicios de reserva, mucho más accesible que Saito o Sugita). Avisá que es el cumpleaños número 40.",
    "why": "El gran festejo de los 40 que realmente se puede conseguir. El omakase de A5 wagyu a las brasas del chef Nakahara es de nivel mundial, y la interacción en el mostrador lo hace sentir especial y personal — perfecto para reservar en una noche en Tokyo antes de Hakone. (Alternativa si preferís sushi: el omakase de Nihonbashi Kakigaracho Sugita es el sueño, pero casi imposible sin contactos o 8 meses de anticipación; Nakahara es la elección confiable para festejarlo en grande.)"
   },
   {
    "name": "Kikunoi Honten (菊乃井 本店)",
    "city": "Kyoto",
    "cuisine": "Kyo-kaiseki (menú de varios tiempos, estilo tradicional)",
    "area": "Higashiyama, Maruyama Park / Kodaiji — a 15 minutos caminando de Gion-Shijo Station (Keihan)",
    "price": "Cena ~20,000-40,000 yen por persona; almuerzo desde ~13,000 yen por persona (más o menos la mitad de la cena, con los mismos ingredientes de temporada)",
    "reservation": "IMPRESCINDIBLE — reservá con 2-3 meses de anticipación vía TABLEALL, Pocket Concierge o la conserjería del hotel. Vestimenta elegante/formal; se espera saco.",
    "vibe": "joya para cumpleaños, un lujo memorable",
    "signatureDish": "Menú kaiseki estacional por el chef Yoshihiro Murata; el menú de principios de otoño (fines de septiembre) incluye hamo (anguila de pico), hongos matsutake y un clásico plato de cocción lenta",
    "why": "El restaurante con 3 estrellas Michelin que todo el mundo menciona como la mejor opción en Kyoto para celebrar un cumpleaños. Para los 40, esto es EL derroche — un ryotei en silencio al borde de Higashiyama donde cada plato marca el cambio exacto de la estación. Hacelo al mediodía para que sea (relativamente) más accesible sin resignar nada de la experiencia completa."
   },
   {
    "name": "Gion Hatanaka — Kyoto Cuisine & Maiko Evening (祇園畑中)",
    "city": "Kyoto",
    "cuisine": "Cena kaiseki con actuación en vivo de maiko y geiko",
    "area": "Gion, Higashiyama — a pasos de Yasaka Shrine, ~8 minutos caminando de Gion-Shijo Station",
    "price": "~18,000-22,000 yen por persona para la velada de cena con maiko",
    "reservation": "IMPRESCINDIBLE — solo funciona en noches establecidas; reservá con bastante anticipación por internet. Se brinda interpretación en inglés durante toda la velada.",
    "vibe": "ideal para cumpleaños / lujo cultural",
    "signatureDish": "Bento kaiseki estacional acompañado de una danza de maiko, seguido de una ronda de preguntas y juegos de bebida ozashiki con la maiko y la geiko",
    "why": "A la pareja le encanta la cultura de las geishas y maiko, y este es el acceso más auténtico a una cena con maiko para quienes no hablan japonés — sin necesidad de presentación personal en una casa de té. Realmente se sientan, miran una danza, y después charlan y juegan con una maiko de verdad. El plato fuerte cultural de la etapa en Kyoto y una noche de cumpleaños que no se olvida más."
   },
   {
    "name": "Nishiki Market — Kai (takotamago) & Kimura (sashimi sticks)",
    "city": "Kyoto",
    "cuisine": "Comida callejera / picoteo de mercado",
    "area": "Nishikikoji-dori, Nakagyo-ku — galería cubierta que sale de Shijo, cerca de Shijo & Karasuma Stations",
    "price": "~300-800 yen por bocado; almuerzo a puro picoteo ~1,500-2,500 yen por persona",
    "reservation": "Sin reserva — galería para recorrer a pie, de ~9/10am a 6pm todos los días. Andá antes del mediodía para evitar las multitudes.",
    "vibe": "puestitos callejeros / picoteo sin filtros",
    "signatureDish": "El takotamago de Kai (cabeza de pulpito bebé rellena con un huevo de codorniz, en palito); los sashimi-on-a-stick marinados de Kimura (el puesto más viejo del mercado); más yuba fresca, brochettes a la parrilla y degustaciones gratis",
    "why": "Hecho a medida para una pareja que ama la comida callejera: 400 metros de recorrido gastronómico donde se come con las manos y se prueban especialidades kyotenses raras y deliciosas. El takotamago es el bocado raro por excelencia, y recorrer el mercado así es un contraste divertido y económico frente a los lujos kaiseki."
   },
   {
    "name": "Nanzenji Junsei (南禅寺 順正)",
    "city": "Kyoto",
    "cuisine": "Kaiseki de yudofu (tofu caliente)",
    "area": "Nanzenji, Sakyo-ku — sobre el camino al templo, cerca del Philosopher's Path; ~10 minutos caminando de Keage Station",
    "price": "Menú yudofu ~3,500-6,000 yen por persona (almuerzo o cena temprana)",
    "reservation": "Se recomienda reservar para el almuerzo, especialmente los fines de semana; es posible entrar sin reserva en horarios de baja afluencia.",
    "vibe": "atmosférico / lujo suave con jardín",
    "signatureDish": "Yudofu (tofu sedoso cocinado a fuego lento en caldo de kombu) y yuba servidos como menú completo, con vista a un jardín de estilo paseante del período Edo de 1,200 tsubo y el edificio Junsei Sho-in, declarado propiedad cultural",
    "why": "La experiencia de tofu más típica de Kyoto, en un jardín de ensueño — apta para vegetarianos, profundamente local y un descanso sereno en el mediodía que podés combinar con la visita al templo Nanzenji y el paseo por el Philosopher's Path. Fundada en siglos de tradición tofera kyotense."
   },
   {
    "name": "Obanzai Tatsunosuke (おばんざい 田ゝ助)",
    "city": "Kyoto",
    "cuisine": "Izakaya de obanzai (cocina casera de Kyoto)",
    "area": "Centro, Nakagyo/Kawaramachi — a pasos de Kawaramachi Station",
    "price": "~3,500-5,000 yen por persona; popular menú de ~10 platos de obanzai con barra libre incluida",
    "reservation": "Se recomienda reservar para la cena — es un lugar pequeño y muy pedido; reservá con uno o dos días de anticipación.",
    "vibe": "izakaya / barra / ambiente de barrio",
    "signatureDish": "Una variedad de ~10 platos estacionales de obanzai (verduras en salsa, tofu, pescado) de un chef con más de 10 años de formación en ryotei",
    "why": "Esta es la noche relajada y auténtica en Kyoto — la contracara casera y sin pretensiones del kaiseki de lujo. Informal, con buena charla, barra libre y un montón de platitos de temporada. Ideal para una velada tranquila en el centro cerca de la vida nocturna, mezclándose con locales al ritmo del sake."
   },
   {
    "name": "Kagizen Yoshifusa (鍵善良房) — Gion tea room",
    "city": "Kyoto",
    "cuisine": "Matcha y wagashi (dulces tradicionales)",
    "area": "Gion, Higashiyama — sobre Shijo-dori, ~5 minutos caminando de Gion-Shijo Station",
    "price": "~1,000-1,600 yen por persona para matcha + dulce",
    "reservation": "Sin reserva para el salón de té — se entra directamente; cerrado los lunes. Andá a media tarde.",
    "vibe": "atmosférico / tradicional",
    "signatureDish": "Kuzukiri (fideos de arrurruz servidos fríos con salsa kuromitsu de azúcar negra) y matcha batido de ceremonia con wagashi de temporada hechos en casa, servido sobre tatami",
    "why": "La confitería más antigua que sigue en pie de Kyoto (fundada en 1716), con un salón de té en tatami genuinamente tradicional — matcha batido por personal formado en la ceremonia del té. Una pausa refinada y atmosférica en Gion para los amantes de la cultura, mucho más interesante que cualquier cadena moderna de parfait. (Para el fix de matcha-parfait contemporáneo, el parfait de warabimochi de Gion Tokuya es la alternativa a la vuelta de la esquina.)"
   },
   {
    "name": "Menbaka Fire Ramen (麺屋 台 / めんばか一代)",
    "city": "Kyoto",
    "cuisine": "Ramen (con show de llamas en la mesa)",
    "area": "Nijo / zona del Kyoto Imperial Palace, Nakagyo-ku — cerca de Nijojo-mae Station",
    "price": "~1,500-3,000 yen por persona (hay combos con sushi de wagyu, gyoza y arroz frito)",
    "reservation": "Reservá por internet vía TableCheck — es un local chico y los turnos del show se llenan; se recomienda reservar sí o sí.",
    "vibe": "original / espectacular",
    "signatureDish": "'Fire ramen' — puerros Kujo chamuscados con un chorro de aceite encendido justo sobre el tazón, sobre un caldo liviano y equilibrado (fundado en 1984, la cuna del fire ramen)",
    "why": "Pura diversión y material de video para una pareja que ama la comida poco convencional y el espectáculo gastronómico callejero. El show del aceite flameado es un espectáculo genuino que se lleva grabado en el celular, y el ramen debajo es realmente bueno — un almuerzo energético y festivo ideal entre visitas a templos."
   },
   {
    "name": "Pontocho Alley kawadoko dining — e.g. Pontocho Fujita (先斗町ふじ田)",
    "city": "Kyoto",
    "cuisine": "Cocina estacional de Kyoto en terraza junto al río (noryo-yuka/kawadoko)",
    "area": "Pontocho, Nakagyo-ku — el angosto callejón iluminado con faroles entre Kawaramachi y el Kamo River, cerca de Gion-Shijo/Kawaramachi Stations",
    "price": "~8,000-15,000 yen por persona para una cena kaiseki/menú completo en la terraza",
    "reservation": "IMPRESCINDIBLE para los asientos en terraza (yuka) — reservá con anticipación. Las terrazas kawadoko funcionan de mayo a septiembre, así que las fechas 24-27 de septiembre apenas alcanzan el final de la temporada.",
    "vibe": "atmosférico / memorable / digno del cumpleaños",
    "signatureDish": "Kaiseki estacional de Kyoto servido sobre una plataforma de madera (yuka) construida sobre el Kamo River, con el sonido del agua abajo y Pontocho iluminado de faroles detrás",
    "why": "La cena más atmosférica de toda Kyoto y uno de los momentos clave de la semana de cumpleaños — cenar en una terraza sobre el río en el callejón del barrio de geishas, exactamente la Kyoto elegante, cultural y flotante que vinieron a encontrar. Sus fechas de fines de septiembre caen en las últimas semanas de la temporada kawadoko, así que reserven ya, porque esto no se puede perder mientras siga disponible."
   },
   {
    "name": "Takoyaki Wanaka (Namba / Sennichimae)",
    "city": "Osaka",
    "cuisine": "Takoyaki (bolitas de pulpo)",
    "area": "Sennichimae, a unos 4 minutos a pie de Namba Station / Nippombashi",
    "price": "~600-900 yen por 8-10 unidades; ideal como snack en cualquier momento",
    "vibe": "puesto callejero / barra para comer de pie",
    "signatureDish": "Takoyaki clásico con salsa, más variaciones con negi-mayo y dip de dashi",
    "reservation": "Sin reserva — llegás y listo, aceptan efectivo, cola corta en hora pico",
    "why": "Uno de los takoyaki más respetados de Osaka: cáscara crocante, centro fundido con mucho dashi. El mordisco callejero quintaesencial para arrancar el recorrido gastronómico al estilo kuidaore."
   },
   {
    "name": "Takoyaki Juhachiban (Dotonbori)",
    "city": "Osaka",
    "cuisine": "Takoyaki",
    "area": "Costa del río Dotonbori, a 5 minutos de Namba Station",
    "price": "~500-700 yen por porción; snack/callejero",
    "vibe": "puesto callejero excéntrico, show en planchas de cobre",
    "signatureDish": "Takoyaki cocido en planchas de cobre, bordes extra crocantes",
    "reservation": "Sin reserva — lo comprás y seguís caminando por Dotonbori",
    "why": "Famoso en Instagram, se cocina en planchas de cobre a plena vista bajo los neones. Un contraste divertido y fotogénico con Wanaka, perfecto para un duelo de takoyaki entre dos amantes de la comida."
   },
   {
    "name": "Okonomiyaki Mizuno (Dotonbori)",
    "city": "Osaka",
    "cuisine": "Okonomiyaki",
    "area": "Dotonbori, a 5 minutos de Namba Station",
    "price": "~1.500-2.500 yen por persona; almuerzo o cena",
    "vibe": "barra / local clásico y acogedor, especial para cumpleaños",
    "signatureDish": "Okonomiyaki con masa de yamaimo (ñame esponjoso) con camarones y calamar — el Mizuno-yaki",
    "reservation": "Sin reservas; esperá cola — llegá a la apertura o fuera del horario pico. Michelin Bib Gourmand.",
    "why": "Desde 1945 y con reconocimiento Michelin Bib Gourmand repetido: un okonomiyaki excepcionalmente liviano con masa de ñame, cocinado en la barra. La versión definitiva del plato emblema de Osaka — una experiencia memorable para una pareja que ama comer bien."
   },
   {
    "name": "Kushikatsu Daruma (Shinsekai flagship)",
    "city": "Osaka",
    "cuisine": "Kushikatsu (pinchos fritos)",
    "area": "Shinsekai, bajo la torre Tsutenkaku; a ~5 minutos de Ebisucho Station",
    "price": "~110-300 yen por pincho; set Daruma ~1.400 yen. Almuerzo/cena",
    "vibe": "izakaya retro de Osaka, animado, con la famosa regla de no mojar dos veces",
    "signatureDish": "Kushikatsu de carne y el set surtido Daruma del chef",
    "reservation": "Sin reserva; puede haber cola — para cena o grupos conviene llegar temprano",
    "why": "El lugar donde nació el kushikatsu moderno en 1929, en el gloriosamente kitsch Shinsekai bajo la Tsutenkaku. Pura cultura de barrio y alma de Osaka — la inmersión callejera y alternativa que están buscando."
   },
   {
    "name": "Yaekatsu (Shinsekai)",
    "city": "Osaka",
    "cuisine": "Kushiage / kushikatsu",
    "area": "Shinsekai, cerca de Tsutenkaku; a ~6 minutos de Dobutsuen-mae Station",
    "price": "~130-300 yen por pincho; almuerzo/cena casual",
    "vibe": "barra local de toda la vida, menos turístico",
    "signatureDish": "Kushikatsu de cebolla (tamanegi) y pinchos de temporada surtidos",
    "reservation": "Solo sin reserva; es chiquito — llegá temprano para agarrar lugar en la barra",
    "why": "La alternativa de los locales desde 1949, tan buena como Daruma pero más tranquila y familiar. Ir a los dos les permite hacer una comparación de kushikatsu como auténticos osakanenses."
   },
   {
    "name": "Kuromon Ichiba Market - Maguroya Kurogin + Kuromon Wagyu-kun",
    "city": "Osaka",
    "cuisine": "Mariscos frescos y puestos callejeros de wagyu",
    "area": "Kuromon Ichiba, Nippombashi; a pasos de la Salida 10 de Nippombashi Station",
    "price": "Vasos de uni/ikura ~800-2.500 yen; vieiras a la parrilla ~500-800 yen; pincho/plato de wagyu ~1.000-3.000 yen. Mejor a media mañana",
    "vibe": "puestos callejeros para picar de pie mientras caminás",
    "signatureDish": "Atún gordo a elección (o-toro/chu-toro) en Kurogin; uni y wagyu A5 sellado en Wagyu-kun",
    "reservation": "Sin reserva — vas de puesto en puesto; llegá a media mañana antes de que se agote",
    "why": "La cocina de Osaka: una galería de 600 metros con ~150 puestos donde podés agarrar uni, wagyu flameado y vieiras a la parrilla comiendo de pie. El paraíso gastronómico callejero definitivo para dos aventureros del sabor."
   },
   {
    "name": "Matsusakagyu Yakiniku M (Hozenji Yokocho, Namba)",
    "city": "Osaka",
    "cuisine": "Yakiniku / wagyu",
    "area": "Namba, 1-1-19 Namba, Chuo-ku; a ~4 minutos de Namba Station",
    "price": "Almuerzo desde ~3.000 yen; cena ~5.000-15.000 yen por persona — un lujo selecto",
    "vibe": "cena de lujo para celebrar, con salones privados disponibles",
    "signatureDish": "Wagyu A5 premium de Matsusaka a la parrilla en la mesa; plato surtido de cortes",
    "reservation": "Reserva recomendada, imprescindible para cena y salones privados — reservá con anticipación",
    "why": "Wagyu de primera de Matsusaka a precios (relativamente) accesibles, en el pintoresco callejón Hozenji Yokocho iluminado con faroles. Reservar una sala privada acá es la cena de cumpleaños de 40 perfecta para la pareja."
   },
   {
    "name": "Harukoma Sushi (Tenjinbashisuji, main store)",
    "city": "Osaka",
    "cuisine": "Sushi (edomae, leyenda del buen precio)",
    "area": "Galería Tenjinbashisuji 6-chome, al lado de Tenma / Tenjinbashisuji-Rokuchome Station",
    "price": "Nigiri generoso desde unos pocos cientos de yen por pieza; una comida completa ~2.000-3.000 yen por persona. Mejor al mediodía",
    "vibe": "clásico para comer rico y barato, con cola permanente, institución local",
    "signatureDish": "Nigiri extra grande de corte grueso — anago, uni, atún graso a precios increíbles",
    "reservation": "Sin reservas — solo walk-in; hay cola permanente, llegá antes de las 11:00 de apertura; cerrado los martes; se agota",
    "why": "Una querida institución de Osaka famosa por su nigiri enorme y ultra fresco a precios de locos — la experiencia clásica de calidad máxima al mejor precio. Combinalo con un paseo por Tenjinbashisuji, la galería comercial más larga de Japón."
   },
   {
    "name": "Doyamacho night bite - nikusui at a Doyama izakaya/drag-run spot",
    "city": "Osaka",
    "cuisine": "Izakaya / comida de confort osaquense",
    "area": "Doyamacho (el barrio LGBTQ+ de Osaka), a pocas cuadras al este de Umeda/Osaka Station",
    "price": "~1,500-3,000 yenes por persona con una copa; de madrugada, muchos bares abren hasta las ~5am",
    "vibe": "bocado de medianoche en la movida gay, animado y bienvenidor",
    "signatureDish": "Nikusui (sopa clara de carne cocida a fuego lento, especialidad osaquense) más picadas de izakaya",
    "reservation": "Sin reserva — recorré los bares; algunos cobran entrada; ideal para salir de noche",
    "why": "El barrio gay por excelencia de Osaka: un laberinto compacto de bares LGBTQ+ a pasos de Umeda. Una parada de nikusui y picadas de madrugada, con una cocina conducida por drag queens entre las opciones, une comida y noche gay de manera perfecta para festejar."
   },
   {
    "name": "Hakone Ginyu (箱根吟遊)",
    "city": "Hakone",
    "cuisine": "Ryokan de kaiseki (menú de varios pasos servido en la habitación)",
    "why": "La joya de la noche del cumpleaños. Un ryokan boutique estilo Bali-meets-Japan donde CADA habitación tiene su propio rotenburo al aire libre con vista al valle montañoso de Hakone, así que los dos pueden bañarse juntos en total privacidad, sin incomodidades de baños públicos. La cena kaiseki de temporada y el desayuno se sirven en la habitación, de modo que toda la celebración de los 40 queda en un ambiente íntimo. Consistentemente rankeado entre los 10 mejores spas de Japón; los huéspedes dicen que la cena kaiseki es lo más destacado de todo el viaje.",
    "signatureDish": "Kaiseki de varios pasos según la temporada (septiembre = matsutake, pescado otoñal, castañas) servido en la habitación",
    "area": "Gora Onsen, a ~5 minutos a pie desde la estación del teleférico de Gora (Hakone Tozan)",
    "price": "~¥40,000-60,000+ por persona con cena + desayuno (estadía de 1 noche); un verdadero lujo",
    "vibe": "gasto celebratorio a puro lujo, romántico con onsen privado",
    "reservation": "Imprescindible — reservá con 2-3+ meses de anticipación por el sitio oficial hakoneginyu.co.jp; las habitaciones más lindas se agotan rápido los fines de semana"
   },
   {
    "name": "Owakudani Kurotamago-kan (大涌谷くろたまご館)",
    "city": "Hakone",
    "cuisine": "Snack local especial — kurotamago (huevos negros)",
    "why": "El ritual gastronómico más peculiar y emblemático de Hakone, imperdible para una pareja apasionada por la cultura. Los huevos cocidos en los manantiales sulfurosos quedan negros por fuera (hierro + ácido sulfhídrico) pero saben igual que un huevo duro normal — la leyenda local dice que cada uno le suma 7 años de vida, un chiste divertidísimo para festejar los 40. Subís en el Hakone Ropeway atravesando el humeante valle volcánico hasta llegar.",
    "signatureDish": "Kurotamago — bolsa de 5 huevos negros (~¥500)",
    "area": "Valle volcánico de Owakudani, en la punta del Hakone Ropeway",
    "price": "~¥500 por 5 huevos; snack (efectivo)",
    "vibe": "ritual de street food rarísimo y encantador",
    "reservation": "Sin reserva — te acercás y listo; verificá que el teleférico y el valle estén abiertos (a veces cierran por gas volcánico), confirmá el mismo día"
   },
   {
    "name": "Fukasei Soba (深生そば)",
    "city": "Hakone",
    "cuisine": "Soba artesanal",
    "why": "Soba hecha a mano con vista directa al Lago Ashi en Moto-Hakone, al lado del icónico torii rojo que emerge del agua — uno de los paisajes más fotografiados de Japón y una parada de almuerzo con escenario de película. Es el favorito del barrio, lleno de locales y no solo turistas, así que la experiencia de soba-con-vista es auténtica sin precio de lujo.",
    "signatureDish": "Zaru soba (fideos de trigo sarraceno fríos hechos a mano) con vista al torii del Lago Ashi",
    "area": "Moto-Hakone, costanera cerca del torii del Hakone Shrine",
    "price": "~¥1,200-1,800 por persona; almuerzo (mayormente efectivo)",
    "vibe": "soba local informal con vista al lago y al torii",
    "reservation": "Sin reserva — te acercás; llegá temprano (hay cola a la hora pico en temporada alta); confirmá los horarios del día"
   },
   {
    "name": "Bakery & Table Hakone (ベーカリー&テーブル箱根)",
    "city": "Hakone",
    "cuisine": "Café panadería / dulces",
    "why": "La parada dulce que no se olvida: un café con paredes de vidrio a orillas del lago donde comés facturas recién horneadas con los pies en un foot-onsen gratuito en la terraza, mirando el Lago Ashi y las montañas — una combo deliciosamente única del Hakone entre postre y onsen. Más de 30 panes distintos por día, más el Pan de Soft estrella (tostada con miel y mucho soft-serve de leche del tambo Tanna).",
    "signatureDish": "Pan de Soft (tostada con sirope de miel y soft-serve de Tanna Milk); facturas en la terraza con baño de pies",
    "area": "Moto-Hakone, orilla del Lago Ashi",
    "price": "~¥1,000-2,000 por persona; café/desayuno-almuerzo",
    "vibe": "café con vista panorámica y baño de pies, capricho dulce",
    "reservation": "Sin reserva — te acercás (panadería en PB, café en 1° piso + terraza con foot-onsen); confirmá los horarios el mismo día"
   },
   {
    "name": "Yoshinoya Magome (Soba & Gohei-mochi)",
    "city": "Kiso Valley",
    "area": "Magome post town",
    "cuisine": "Soba tradicional y gohei-mochi",
    "vibe": "Posada de 200 años con piso de madera y humo de la parrilla",
    "why": "El gohei-mochi — brocheta de arroz con salsa de miso y nueces a las brasas — es el sabor del Nakasendo. No existe en ningún otro lugar del mundo.",
    "signatureDish": "Gohei-mochi + soba frío local",
    "price": "¥800–1.500 por persona",
    "reservation": ""
   },
   {
    "name": "Tsumago Soba Cafe",
    "city": "Kiso Valley",
    "area": "Tsumago post town",
    "cuisine": "Soba casero fresco",
    "vibe": "Casa pequeña y tranquila con mesa de madera y vista a un jardín tradicional",
    "why": "El soba se muele y se sirve el mismo día — sabor delicado y profundo de trigo sarraceno de montaña. El descanso perfecto después de la caminata.",
    "signatureDish": "Zaru soba + tempura de langostino de temporada",
    "price": "¥1.200–2.000 por persona",
    "reservation": ""
   },
   {
    "name": "Chanko Dining Wakamatsu",
    "city": "Tokyo",
    "area": "Ryogoku",
    "cuisine": "Chanko nabe (el caldo de los luchadores)",
    "vibe": "Restaurante tipo gladiadores — fotos de campeones en las paredes, cálido y lleno de energía",
    "why": "El chanko que comen los entrenadores de sumo — un caldo rico con pollo, tofu y verduras que se cocina en la mesa. Después del basho en Ryogoku, es una experiencia fenomenal.",
    "signatureDish": "Chanko nabe + arroz + entrada proteica",
    "price": "¥2.500–4.000 por persona",
    "reservation": "Conviene reservar con un día de anticipación — por teléfono o vía Tableall."
   },
   {
    "name": "Chaos Kitchen Akihabara",
    "city": "Tokyo",
    "area": "Akihabara",
    "cuisine": "Fusión japonesa-anime, temático",
    "vibe": "Luces de neón, pantallas de anime en toda la pared, DJ y menú que parece un quest board",
    "why": "Cada plato lleva el nombre de un personaje de anime — la hamburguesa dragón, el ramen cyberpunk. Kitsch intencional y alegre, justo para los dos.",
    "signatureDish": "Cyber Ramen de la casa + Dragon Burger",
    "price": "¥1.800–3.200 por persona",
    "reservation": ""
   },
   {
    "name": "Bar Gold Finger (Ni-chome)",
    "city": "Tokyo",
    "area": "Shinjuku Ni-chome",
    "cuisine": "Bar para mujeres lesbianas + parejas LGBTQ+",
    "vibe": "Cálido, seguro, colorido — el bar icónico de Ni-chome conocido por todos y abierto a todos",
    "why": "Gold Finger es uno de los bares más veteranos y amorosos de Shinjuku Ni-chome — van a sentirse parte de todo desde el primer segundo. Sirven cócteles simples y snacks con buena música.",
    "signatureDish": "Cóctel de la casa + edamame / snacks",
    "price": "¥800–2.000 por persona (entrada + bebida)",
    "reservation": ""
   },
   {
    "name": "Doyama-cho Bar Crawl: Butterfly",
    "city": "Osaka",
    "area": "Doyama-cho (LGBTQ+ norte de Osaka)",
    "cuisine": "Bar gay-friendly, comida liviana japonesa",
    "vibe": "El barrio gay de Osaka — pequeño, íntimo, muy amigable con extranjeros",
    "why": "Butterfly es la puerta de entrada a Doyama-cho — staff que habla inglés, highball japonés y chips de edamame. Ideal para cerrar una noche en Kansai.",
    "signatureDish": "Highball japonés + edamame / tostadas pequeñas",
    "price": "¥700–1.500 por persona",
    "reservation": ""
   }
  ],
  "attractions": [
   {
    "name": "Sumo Stable Morning Practice (Tatsunami-beya)",
    "city": "Tokio — Sumida / Ryogoku",
    "area": "Ryogoku",
    "category": "Cultural / Deporte",
    "why": "Mirá a luchadores profesionales activos hacer ejercicios y sparring a pocos metros tuyo — sin circo mediático y completamente distinto a todo lo demás que vas a ver en Japón. Tatsunami-beya alberga a un yokozuna (el rango más alto) y recibe grupos pequeños con un guía con habilitación en inglés. El ambiente crudo — tierra pisada, gruñidos, ritual — es lo auténtico de verdad. Funciona de enero a agosto y de octubre a diciembre en semanas sin torneo; durante el Tokyo basho (enero, mayo, septiembre) las sesiones se acortan a 30–40 min.",
    "cost": "¥8,000–12,000 por persona según el operador; algunos incluyen almuerzo de chanko-nabe (el guiso de los luchadores)",
    "duration": "2–3 horas (práctica de 6 a 10 a.m.)",
    "booking": "Reservá con 1–4 semanas de anticipación en sumoexperience.tokyo o por Viator/Sunrise Tours JTB; máximo 25 personas por grupo. Confirmá el horario una semana antes — el cronograma depende del calendario de torneos.",
    "tags": [
     "deporte",
     "cultural",
     "madrugada",
     "único"
    ]
   },
   {
    "name": "Street Go-Kart Tour — Street Kart / JapanKart",
    "city": "Tokio — recorridos por Akihabara o Shibuya",
    "area": "Akihabara / Shibuya / Asakusa (múltiples recorridos)",
    "category": "Aventura / Diversión",
    "why": "Manejá go-karts a cielo abierto disfrazados por el tráfico real de Tokio — pasando por Shibuya Crossing (hasta 3.000 personas por cambio de semáforo), el Palacio Imperial, o por las calles de neón de Akihabara. Los trajes de Mario ya no están (juicio de Nintendo) pero los de superhéroes y anime siguen disponibles. Necesitás licencia de conducir internacional. Una locura absoluta e imposible de olvidar.",
    "cost": "¥15,000–19,500 por persona; disfraz y casco incluidos. Los tours nocturnos cuestan más.",
    "duration": "2 horas",
    "booking": "Reservá online en streetkart.com o japankart.com — hay turnos disponibles en la misma semana pero los fines de semana se agotan. Llevá el permiso internacional + pasaporte.",
    "tags": [
     "aventura",
     "diversión",
     "pareja",
     "tour-urbano"
    ]
   },
   {
    "name": "Nakano Broadway",
    "city": "Tokyo",
    "area": "Nakano",
    "category": "Anime y coleccionables",
    "why": "Pisos de Mandarake — manga usada, figuras raras, juegos retro y coleccionables. Meca otaku, menos turística y con buenos precios.",
    "cost": "Gratis (entrada)",
    "duration": "2–3 horas",
    "booking": "",
    "tags": [
     "anime",
     "coleccionables",
     "retro",
     "compras"
    ],
    "highlight": true
   },
   {
    "name": "teamLab Borderless — MORI Building Digital Art Museum",
    "city": "Tokio — Azabudai Hills, Minato",
    "area": "Azabudai Hills (Kamiyacho Station, Hibiya Line — 2 min caminando)",
    "category": "Arte / Inmersivo",
    "why": "Se mudó de Odaiba a su flamante sede en Azabudai Hills a principios de 2024. Borderless (no Planets) es la experiencia más grande, tipo laberinto — sin paredes entre salas, el arte fluye y reacciona a quienes están ahí. La nueva serie 'Light Sculpture – Flow' reabrió en julio de 2026 con dos ambientes interactivos adicionales que van hasta octubre de 2026. Es mejor para parejas que Planets: podés quedarte todo el tiempo que quieran, perderse juntos, y nunca es igual dos veces.",
    "cost": "¥3,200 adulto (día de semana) / ¥3,800 fin de semana — comprá online; en puerta casi no hay entradas",
    "duration": "2–3 horas",
    "booking": "Entrada anticipada obligatoria en teamlab.art/e/tokyo — turnos con horario fijo, reservá con 2–4 semanas de anticipación para los fines de semana.",
    "tags": [
     "arte",
     "inmersivo",
     "romántico",
     "tecnología"
    ]
   },
   {
    "name": "Shimokitazawa Vintage Crawl + New York Joe Exchange",
    "city": "Tokio — Shimokitazawa, Setagaya",
    "area": "Shimokitazawa (2 paradas desde Shibuya por la Keio Inokashira Line)",
    "category": "Compras / Barrio",
    "why": "El barrio bohemio de Tokio: seis calles comerciales, más de 760 locales, bares con música en vivo y tostadores de café en un radio caminable y compacto. El local estrella es New York Joe Exchange — un negocio de ropa vintage instalado en un bathhouse de los años 60 reconvertido, con percheros donde antes la gente caminaba entre el vapor y los azulejos originales intactos. El nuevo CIRCULABLE SUPPLY (abrió en abril de 2025) suma el flagship de segunda mano premium de Baycrew. Energía cero de trampa turística; el público es joven y creativo, tokiota de ley.",
    "cost": "Gratis pasear; calculá ¥5,000–20,000 para compras según el gusto",
    "duration": "Medio día (3–5 horas)",
    "booking": "No hace falta reservar. Forbes publicó una guía completa en mayo de 2026 — vayan un día de semana por la tarde para evitar el caos del fin de semana.",
    "tags": [
     "vintage",
     "compras",
     "barrio",
     "económico"
    ]
   },
   {
    "name": "Samurai Restaurant Show (Robot Restaurant successor)",
    "city": "Tokio — Kabukicho, Shinjuku",
    "area": "Kabukicho, Shinjuku",
    "category": "Entretenimiento / Show",
    "why": "El Robot Restaurant cerró definitivamente durante el COVID; sus creadores abrieron el Samurai Restaurant en el mismo edificio de Kabukicho en 2023 — mismo ADN maximalista pero ahora con guerreros samurái, robots futuristas, bailarines caleidoscópicos y combates teatrales en un show de una hora deliberadamente exagerado. Tres funciones por día. Kitsch tokiota puro y bien ejecutado; ruidoso sin disculpas y divertidísimo para una pareja que quiere espectáculo antes que autenticidad.",
    "cost": "Desde ¥5,500 (solo show) hasta ¥9,000 con bento + 2 tragos",
    "duration": "~1 hora de show; llegá 30 min antes",
    "booking": "Reservá en GetYourGuide o getyourguide.com/tokyo — los turnos nocturnos de fin de semana se agotan. Podés cancelar hasta 24 h antes.",
    "tags": [
     "entretenimiento",
     "show",
     "vida-nocturna",
     "único"
    ]
   },
   {
    "name": "Nikko UNESCO Shrine Day-Trip",
    "city": "Nikko, Tochigi Prefecture (excursión de un día desde Tokio)",
    "area": "Nikko — 2 h desde Asakusa por el Tobu Railway",
    "category": "Excursión / Patrimonio UNESCO",
    "why": "El complejo de santuarios más lujosamente decorado de Japón — las tallas con pan de oro de Toshogu, los famosos tres monos sabios, las Cataratas Kegon cayendo 97 m en un desfiladero de montaña, y el Lago Chuzenji. 103 edificios repartidos por montañas boscosas. Va mucho más allá de la clásica excursión a Kamakura y te da una sensación genuinamente remota. Ideal en el calor de agosto: la altitud de la montaña es notablemente más fresca que Tokio.",
    "cost": "¥5,200–10,000 por persona todo incluido (tren + Nikko Pass + entradas + almuerzo). El Nikko Pass World Heritage Area (¥3,000/2 días) cubre el tren ida y vuelta + colectivos locales.",
    "duration": "Día completo — salida de Tokio a las 7–8 a.m., regreso a las 7–8 p.m.",
    "booking": "No hace falta reservar — comprá el Nikko Pass en Asakusa Station. O reservá una excursión guiada por Viator si querés comentario en inglés.",
    "tags": [
     "excursión",
     "naturaleza",
     "UNESCO",
     "templos",
     "montañas"
    ]
   },
   {
    "name": "Kosugiyu Sento (retro bathhouse, 1930s Fuji mural)",
    "city": "Tokio — Koenji / Suginami",
    "area": "Koenji, Suginami Ward",
    "category": "Onsen / Sento / Vida de Barrio",
    "why": "Elegido Mejor Baño Público Neo de 2024 por el Nikkei. Kosugiyu combina una estética retro de los años 30 — con un mural del Monte Fuji de piso a techo pintado por uno de los últimos maestros murales de sento de Japón — con un lounge de trabajo compartido, tirada de cerveza artesanal y programación de eventos. Los baños están separados por género (protocolo estándar del sento); entren por separado y encuéntrense para tomar algo en el lounge después. Queda cerca de Koenji, que combina perfecto con una vuelta por los locales de discos de vinilo vintage. Tokio de barrio auténtico, sin turistas.",
    "cost": "¥550 entrada (precio regulado de sento en Tokio); bebidas aparte",
    "duration": "1.5–2 horas",
    "booking": "Sin reserva — entrás directamente. Chequeá los horarios en trip.com/travel-guide/attraction/tokyo/kosugiyu o Google Maps (cierra los lunes).",
    "tags": [
     "onsen",
     "local",
     "relax",
     "retro",
     "económico"
    ]
   },
   {
    "name": "Shiro-Hige's Cream Puff Factory (Totoro Café)",
    "city": "Tokio — Setagaya",
    "area": "Setagaya (cerca de Shimokitazawa)",
    "category": "Café de Personajes / Comida",
    "why": "Un homenaje no oficial a Studio Ghibli escondido en un callejón residencial de Setagaya — los cream puffs (choux à la crème) se hornean y glasean en forma de Totoro perfecto, con sabores de temporada (matcha, chocolate, crema pastelera). Tiene un encanto genuino, nada de excesos kitsch; se siente como una pastelería de barrio que de paso adora a Totoro. Sin fila en la entrada, sin comida trucha, simplemente muy buena repostería en un ambiente adorable. Queda bárbaro combinarlo con el recorrido de ropa vintage por Shimokitazawa.",
    "cost": "¥600–900 por cream puff; sin cargo de entrada",
    "duration": "30–45 min",
    "booking": "No hace falta reserva — llegá temprano porque las formas de Totoro se agotan antes del mediodía. Solo se entra sin turno.",
    "tags": [
     "comida",
     "café-de-personajes",
     "Ghibli",
     "romántico",
     "tranquilo"
    ]
   },
   {
    "name": "Samurai Sword + Kimono Tea Ceremony Combo (Maikoya, Asakusa)",
    "city": "Tokio — Asakusa, Taito",
    "area": "Asakusa",
    "category": "Experiencia Cultural",
    "why": "Un combo de 3 horas muy bien armado: te vestís con kimono, hacés una ceremonia formal de matcha en una sala con tatami, y después te ponés un hakama y aprendés tameshigiri (corte con espada real sobre esterillas de bambú) con un instructor. La sede de Maikoya en Asakusa es de grupos chicos, se enseña en inglés y tiene reseñas consistentes como la versión más prolija de esta experiencia en Tokio — mucho menos choto que las alternativas en formato museo. Asakusa te permite terminar el día con un paseo por Nakamise-dori.",
    "cost": "¥10.000–15.000 por persona para el combo; solo espada desde ¥6.000",
    "duration": "3 horas",
    "booking": "Reservá online en mai-ko.com (Maikoya) — cancelación con 24 h de anticipación. Reservá con al menos 1 semana de antelación si quieren ir juntos en la misma sesión.",
    "tags": [
     "cultural",
     "kimono",
     "samurai",
     "tea-ceremony",
     "participativo"
    ]
   },
   {
    "name": "Private Maiko Tea Ceremony & Ozashiki Performance — Maikoya Gion",
    "city": "Kioto — Gion / Kiyomizu",
    "area": "Gion",
    "category": "Cultural / Geisha",
    "why": "Lo más cerca que llega la mayoría de los visitantes a un ozashiki real: una maiko o geiko certificada ejecuta una danza clásica en una sala privada con tatami, les sirve matcha y wagashi, y después responde preguntas en inglés. Maikoya es el único lugar que ofrece esto todos los días en Gion — no es un show de disfraces, las intérpretes son aprendices auténticas del hanamachi de Gion o graduadas. La opción privada significa que tienen la sala solo para ustedes, sin extraños. Este es el momento del 'Kioto de adentro' al que la mayoría de los turistas nunca accede.",
    "cost": "Desde ~$100/persona (compartido, té + preguntas) hasta ~$300/persona (sala privada, danza + ceremonia completa, 90–120 min). Grupos de 6+ obtienen descuentos. Disponible el agregado de vestimenta con kimono.",
    "duration": "90–120 minutos",
    "booking": "Reservá directo en mai-ko.com o por Viator/Tripadvisor. La reserva previa es obligatoria — no se aceptan walk-ins. Escribí a gion@maikoya.com para pedidos de grupos privados. Mínimo 2 participantes. Reservá con al menos 2–4 semanas de anticipación en temporadas pico (flor de cerezo, follaje otoñal).",
    "tags": [
     "geisha",
     "maiko",
     "tea ceremony",
     "ozashiki",
     "privado",
     "Gion",
     "Kyoto"
    ]
   },
   {
    "name": "Fushimi Sake Brewery Walking Tour — 18 Tastings (Magical Trip)",
    "city": "Kioto — Distrito Fushimi",
    "area": "Fushimi / Momoyama",
    "category": "Comida y Bebida / Tour de Cervecería",
    "why": "Fushimi es una de las dos grandes capitales del sake en Japón, alimentada por el agua subterránea de las colinas de Momoyama. Este tour de 3 horas en inglés te lleva adentro de varias cervecerías en funcionamiento, incluida Gekkeikan (fundada en 1637), explica la diferencia entre junmai, ginjo y daiginjo en salas de degustación reales, y termina en un bar de sake oculto con una final comparativa de 18 tragos. Máximo 9 personas — suficientemente íntimo para hacer preguntas de verdad. Calificado como el tour de sake #1 en Kioto en TripAdvisor 2024, con más de 3.500 participantes.",
    "cost": "~$87 USD (~¥13.000 JPY) por persona. La entrada solo al museo Gekkeikan es ¥300 con una degustación incluida, si preferís hacerlo por tu cuenta.",
    "duration": "3 horas",
    "booking": "Reservá por GetYourGuide (buscá 'Kyoto Fushimi Sake 18 tastings') o en el sitio web de Magical Trip. Cancelación gratuita hasta 24 horas antes. Gekkeikan Okura Sake Museum (autoguiado, ¥300) abre 9:30–16:30, cerrado a mediados de agosto por Obon y del 28 de dic al 3 de enero. Kizakura Museum abre 10:00–17:00, cerrado los lunes.",
    "tags": [
     "sake",
     "cervecería",
     "Fushimi",
     "Gekkeikan",
     "Kizakura",
     "degustación",
     "Kyoto"
    ]
   },
   {
    "name": "Wagashi-Making Class — Kyoto Wagashi ISSHO",
    "city": "Kioto — Shijo-Karasuma / Karasuma-Oike",
    "area": "Centro de Kioto",
    "category": "Clase de Cocina / Artesanía",
    "why": "Los wagashi (dulces tradicionales japoneses) son arte comestible — nerikiri de temporada moldeados en forma de flores de cerezo, hojas de arce o conejos en la nieve. En Wagashi ISSHO, la artesana maestra certificada Yasue Miyazaki dicta sesiones privadas y de grupos pequeños completamente en inglés, cerca de la estación Shijo-Karasuma. Usás poroto azuki Bitchu de primera calidad y elaborás dos tipos de nerikiri de temporada inspirados en la estación actual de Kioto. Al final los comés con matcha recién batido. Mucho más íntimo que las clases de fábrica turística — la instructora es una artesana de verdad.",
    "cost": "~¥5.000–8.000 por persona (confirmá las tarifas actuales en wagashi-issho.com). Alternativa más económica: clase en Kanshundo ~¥2.000–3.000 (hacés 4 tipos y te los llevás a casa).",
    "duration": "~60–90 minutos",
    "booking": "Reservá directo en wagashi-issho.com/english.php — la reserva previa es obligatoria. También disponible por la plataforma byFood. Kanshundo (muy bien calificado en Tripadvisor) se puede reservar directamente en sus locales de Kioto.",
    "tags": [
     "wagashi",
     "clase de cocina",
     "nerikiri",
     "dulces",
     "matcha",
     "artesanía",
     "Kyoto"
    ]
   },
   {
    "name": "Kurama–Kibune Kawadoko River Dining",
    "city": "Kioto — Montañas de Kurama / Kibune (30 min al norte de Kioto)",
    "area": "Kurama & Kibune, Sakyo Ward",
    "category": "Naturaleza / Gastronomía",
    "why": "Kawadoko es la tradición kiotoíta de siglos de antigüedad de comer en plataformas de madera suspendidas directamente sobre un arroyo de montaña cristalino. En verano Kibune está 10°C más fresco que el centro de Kioto — el agua fría corriendo bajo tus pies mientras comés menús de varios pasos con nivel kaiseki es algo de otro mundo. La caminata entre Kurama (aguas termales, mitología tengu) y Kibune dura 2 horas entre bosques de cedros. Kibune Ugenta tiene 1 Key Michelin; Ryokan Hirobun es el único lugar que sirve nagashi somen — los fideos corren por canaletas de bambú. Combinalo así: primero hacé Kurama, después bajás a Kibune para el almuerzo.",
    "cost": "Almuerzos kaiseki kawadoko: ¥8.000–18.000 por persona (Kibune-so: set Tamatebako ¥6.000, kaiseki Seiryu ¥18.000). Bento informal en Kibune Sagenta desde ~¥3.500, sin reserva. Aguas termales de Kurama (Kurama Onsen): ~¥1.500 la entrada.",
    "duration": "Día completo (6–8 horas) — caminata + almuerzo + aguas termales",
    "booking": "Temporada kawadoko: 1 de mayo – 30 de sept (algunos restaurantes hasta el 31 de oct). Reservá los restaurantes kaiseki con mucha anticipación para el pico de julio–agosto (llamá directo o reservá por los sitios web de cada restaurante). El nagashi somen de Hirobun es solo walk-in — llegá temprano y hacé fila. Acceso: Eizan Railway desde la estación Demachiyanagi hasta Kurama o Kibune-guchi (~30 min, ¥430).",
    "tags": [
     "kawadoko",
     "cena junto al río",
     "Kibune",
     "Kurama",
     "kaiseki",
     "naturaleza",
     "senderismo",
     "verano"
    ]
   },
   {
    "name": "Uji Matcha Day — Farm Tour, Stone-Mill Grinding & Oldest Teahouse",
    "city": "Uji (30 min al sur de Kioto por JR o Kintetsu)",
    "area": "Ciudad de Uji",
    "category": "Comida y Bebida / Cultura del Té",
    "why": "Uji lleva 800 años siendo el corazón del matcha en Japón. Un día como la gente en Uji cubre todas las capas: tour por la fábrica Marukyu Koyamaen (gratis o ¥500, ves las piedras de molienda que convierten las hojas tencha en polvo); Fukujuen Uji Kobo — molés tu propio matcha con un molino de piedra, lo batís y te lo tomás (¥1.650); visitás Tsuen, la casa de té más antigua de Japón fundada en 1160 sobre el río Uji; y caminás por el Uji Tea Road pasando por plantaciones de té en funcionamiento. Esto supera cualquier 'experiencia de matcha latte' en la ciudad por lejos — entendés de dónde viene el sabor de verdad.",
    "cost": "Tour fábrica Marukyu Koyamaen: ¥500. Experiencia molino de piedra Fukujuen: ¥1.650. Casa de té Tsuen: matcha + dulces desde ~¥800. Tour guiado medio día en la finca (Viator/byFood): ~¥5.000–8.000 pp. JR Uji desde Kioto: ¥240 (20 min).",
    "duration": "Medio día a día completo",
    "booking": "Fukujuen Uji Kobo: walk-in o reserva previa en su sitio web (kyoto-ujicha.com). Marukyu Koyamaen: confirmá la disponibilidad del tour en su sitio web según la temporada. Tours guiados de campo a mesa: reservá por byFood o Viator ('Marvelous Matcha Kyoto Green Tea Tour' o 'Uji and Wazuka Farm'). Disponibilidad 2026 confirmada y verificada en Tripadvisor.",
    "tags": [
     "matcha",
     "té",
     "Uji",
     "finca",
     "molino de piedra",
     "casa de té",
     "Tsuen",
     "Fukujuen"
    ]
   },
   {
    "name": "Fushimi Inari Night Walk with Ghost Stories",
    "city": "Kioto — Fushimi / Inari",
    "area": "Barrio de Fushimi",
    "category": "Caminata nocturna / Templos escondidos",
    "why": "Las 10.000 puertas torii bermellón de Fushimi Inari se llenan de gente durante el día. De noche, el santuario está abierto las 24 hs y es completamente gratuito — un tour guiado de una hora y tres cuartos te lleva por las puertas con luz de linterna, entretejido con historias de fantasmas japoneses (kwaidan) y leyendas urbanas del lugar. Los senderos más profundos hacia el mirador de Yotsutsuji y el santuario interior de Okusha generan una atmósfera genuinamente inquietante y hermosa. La variante de caminata oculta de Magical Trip te saca del camino pavimentado hacia bambusales y santuarios budistas junto a cascadas — ganador del Premio Best of the Best de TripAdvisor 2025.",
    "cost": "Tour nocturno: a la gorra (se sugieren ¥1.000–2.000 por persona, prácticamente gratis). Caminata oculta diurna: ~¥5.000–7.000 vía Magical Trip / Tripadvisor. Caminata nocturna autoguiada: gratis, 24 hs.",
    "duration": "~1 hora 45 minutos (tour nocturno guiado); 3–4 horas (caminata oculta)",
    "booking": "Tour nocturno: reservá en kyotofreewalkingtour.com (reserva instantánea online, punto de encuentro en el Gran Torii frente a JR Inari Station). Disponible desde abril de 2026 confirmado. Caminata oculta: reservá vía Magical Trip o Tripadvisor ('Hidden hike of Fushimi Inari'). Autoguiada: sin reserva, entrada gratuita las 24 hs.",
    "tags": [
     "Fushimi Inari",
     "caminata nocturna",
     "torii gates",
     "historias de fantasmas",
     "templos escondidos",
     "Kioto"
    ]
   },
   {
    "name": "Naramachi Stroll + Nakatanidou Mochi Pounding",
    "city": "Nara",
    "area": "Naramachi (al sur del Kofukuji Temple)",
    "category": "Gastronomía / Barrio histórico",
    "why": "Todo el mundo hace el parque de los ciervos y el Todaiji. Casi nadie camina cinco minutos hacia el sur hasta Naramachi — una cuadrícula de casas de comerciantes del período Edo conservadas (machiya) que hoy albergan cervecerías de sake, negocios de laca, cafés de tofu y el museo de la casa del mercader Koshi-no-Ie (entrada gratuita). El momento cumbre es Nakatanidou en el 29 de Hashimotocho: los empleados golpean mochi fresco de yomogi (artemisa) a una velocidad increíble — a ritmo de récord Guinness — a plena vista de la calle. El mochi resultante, relleno de pasta de poroto rojo dulce y servido tibio en el momento, cuesta ~¥200 la unidad y es uno de los mejores bocados de toda la región de Kansai. También cerca: los jardines de Isuien y Yoshikien, y el Gangoji Temple (UNESCO, las tejas del techo más antiguas de Japón).",
    "cost": "Mochi de Nakatanidou: ~¥200 la unidad (solo efectivo). Museo Koshi-no-Ie: gratis. Isuien Garden: ¥1.200. Gangoji Temple: ¥500. Un día completo en Nara = muy económico.",
    "duration": "2–4 horas (recorrido por Naramachi, se puede combinar con el parque de ciervos el mismo día)",
    "booking": "Sin reserva — Nakatanidou es de entrada libre (29 Hashimotocho, Nara 630-8217; tel 0742-23-0141). El golpeado de mochi va según la demanda, no tiene horario fijo — visitá los días de semana a la tarde para más chances, o preguntale al personal cuándo va a ser la próxima tanda. Chequeá @nakatanidou.jp en Instagram para los horarios actuales.",
    "tags": [
     "Nara",
     "Naramachi",
     "mochi",
     "Nakatanidou",
     "machiya",
     "escondido",
     "comida",
     "historia"
    ]
   },
   {
    "name": "Shinsekai & Janjan Yokocho Retro Osaka Food Tour",
    "city": "Osaka — Shinsekai / Sur de Namba",
    "area": "Barrio de Naniwa / Shinsekai",
    "category": "Tour gastronómico / Barrio retro",
    "why": "Shinsekai ('Nuevo Mundo') fue construido en 1912 como la respuesta de Osaka a París y Coney Island — luego cayó en el abandono de posguerra y se convirtió en un barrio obrero de kushikatsu. Hoy es el barrio más auténticamente retro de Osaka: la torre Tsutenkaku, salones de juegos de los años 50 y un pasaje cubierto de 180 metros (Janjan Yokocho, oficialmente Nanyo Dori) donde negocios de kushikatsu y bares de parados son llevados por familias de octogenarios. Los tours nocturnos guiados arrancan en Ebisucho Station, terminan en Janjan Yokocho e incluyen 5–6 degustaciones: kushikatsu (mojás una sola vez — regla sagrada), dote-yaki (guiso de tendón de res), takoyaki estilo Osaka, castella de bebé en palito de Kankando. El tour también visita un santuario sintoísta escondido y un fabricante de cuchillas de 80 años de historia.",
    "cost": "Tour gastronómico guiado de 2–3 hs: ~¥5.000–6.000 por persona incluyendo degustaciones (listado en Viator confirmado 2026). Autoguiado: sets de kushikatsu ~¥600–1.200; takoyaki ¥450–500. Muy accesible para el bolsillo.",
    "duration": "2–3 horas (guiado); flexible autoguiado",
    "booking": "Tour guiado: reservá vía Viator ('Retro Osaka Street Food Tour Shinsekai') o Tripadvisor — los turnos nocturnos son muy demandados, reservá con 1–2 semanas de anticipación. Autoguiado: sin reserva, abierto todo el año, restaurantes de 10:00 a 20:30. Subte más cercano: Ebisucho (línea Sakaisuji) o Dobutsuen-mae (líneas Midosuji/Sakaisuji).",
    "tags": [
     "Osaka",
     "Shinsekai",
     "Janjan Yokocho",
     "kushikatsu",
     "tour gastronómico",
     "retro",
     "comida callejera"
    ]
   },
   {
    "name": "Ajisai Onsen Ryokan — Private Open-Air Rotenburo",
    "city": "Hakone (zona de Gora)",
    "area": "Hakone",
    "category": "Onsen privado / ryokan",
    "why": "Solo 2 habitaciones, y cada sesión de onsen es completamente privada — tienen el baño cubierto y el rotenburo al aire libre exclusivamente para ustedes en su franja horaria (60 min a la noche, 45 min a la mañana), ambos amigables con los tatuajes, sin necesidad de vendas ni parches. La escala íntima significa cero aglomeración y cero incomodidad. El servicio de champagne, la cena kaiseki en la habitación y el entorno con jardín lo hacen ideal para parejas.",
    "cost": "Desde ~¥40.000–80.000 por noche por pareja (habitación + plan de cena); varía mucho según la temporada. Chequeá en Klook o directamente en el sitio.",
    "duration": "Una noche (check-in a las 15 hs, check-out a las 11 hs); turnos de onsen mañana y noche",
    "booking": "Reservá directamente en ajisaionsenryokan.jphotel.site o vía Klook/Hotels.com. Reservá con 3–6 meses de anticipación para los fines de semana. tattoofriendlyonsen.com confirma la política de tatuajes.",
    "tags": [
     "onsen",
     "amigable con tatuajes",
     "privado",
     "romántico",
     "ryokan"
    ]
   },
   {
    "name": "Hakone Ropeway over Owakudani — Mt Fuji in the Steam",
    "city": "Hakone",
    "area": "Hakone (sección Owakudani–Ubako)",
    "category": "Teleférico / mirador aéreo",
    "why": "La góndola flota sobre un valle volcánico activo que expulsa vapor de azufre, con el Mt Fuji llenando el horizonte — una vista que literalmente no podés conseguir de ninguna otra manera. El mejor tramo es de Owakudani a Ubako. El momento importa: idé temprano por la mañana en invierno (nov–feb) para tener más del 70% de probabilidades de ver el Fuji despejado y la cima nevada. Comete un huevo tamago negro (hervido en aguas sulfurosas, dicen que le suma 7 años a tu vida) en la cumbre — el máximo capricho solo-en-Japón.",
    "cost": "¥1.800–2.200 en un sentido (incluido en el Hakone Free Pass ¥6.500/persona, que también cubre el tren Romancecar, ómnibus, barco y funicular — un valor excepcional para una pareja)",
    "duration": "30 min de teleférico en cada sentido; calculá 3–4 hs para el circuito completo de Hakone",
    "booking": "Sin reserva; comprá el Hakone Free Pass en Shinjuku Odakyu station o en línea en odakyu.jp. Chequeá la visibilidad en vivo del Mt Fuji en hakone.or.jp antes de salir.",
    "tags": [
     "teleférico",
     "mirador",
     "volcán",
     "fuji",
     "icónico"
    ]
   },
   {
    "name": "Chureito Pagoda + Kawaguchiko Reverse-Fuji Reflection",
    "city": "Kawaguchiko (Lagos del Fuji) — excursión desde Hakone",
    "area": "Kawaguchiko / Fujiyoshida",
    "category": "Mirador del Mt Fuji (excursión de día)",
    "why": "Para el impacto puro del Fuji, Kawaguchiko le gana a Hakone: la montaña aparece sin obstáculos, más cerca y reflejada a la perfección en el lago en las mañanas sin viento ('Sakasa Fuji'). Chureito Pagoda — una pagoda de cinco pisos que enmarca el Fuji con el lago abajo — es la escena más fotografiada de todo Japón. Llegá al Oishi Park antes de las 7 hs para ver el reflejo; subí los 400 escalones hasta Chureito antes de las 8 hs para ganarle a los fotógrafos. Tocá la Campana de los Amantes en la cumbre del Mt Fuji Panorama Ropeway para la buena suerte.",
    "cost": "Gratis (Chureito/Oishi Park). Mt Fuji Panorama Ropeway ¥1.000 ida y vuelta. Excursión de día a Kawaguchiko desde Hakone: ~¥2.000/persona en ómnibus o tren vía Gotemba.",
    "duration": "Día completo desde Hakone (salí a las 5:30 hs para ver el reflejo, volvé a la tarde)",
    "booking": "Sin reserva para los miradores. Mt Fuji Panorama Ropeway: comprá al llegar. lake-kawaguchiko.com tiene la guía actualizada de los mejores spots fotográficos para 2026.",
    "tags": [
     "fuji",
     "reflejo",
     "fotografía",
     "pagoda",
     "excursión de día"
    ]
   },
   {
    "name": "Hakone Open-Air Museum — Foot Onsen + Picasso Pavilion",
    "city": "Hakone (estación Ninotaira, Hakone Tozan Railway)",
    "area": "Hakone",
    "category": "Museo / experiencia artística",
    "why": "Uno de los grandes parques de esculturas al aire libre del mundo: 120 obras de Moore, Rodin, Calder y Niki de Saint Phalle distribuidas por jardines en ladera. Recorran juntos la torre Symphonic Sculpture (un caleidoscopio de vidrieras que se puede trepar por dentro). El secreto real para parejas: el baño de pies al aire libre con aguas termales naturales — se sientan uno al lado del otro, con los pies en agua de onsen de verdad, rodeados de esculturas y vistas a la montaña. Después métanse al Picasso Pavilion (más de 300 obras). Lo bueno es que se puede dedicar toda una tarde tranquila y sin apuros.",
    "cost": "¥2.000/adulto (¥1.800 con descuento de Asoview). Incluido en algunos paquetes del Hakone Free Pass.",
    "duration": "2,5–3,5 hs",
    "booking": "Comprá online en hakone-oam.or.jp/en/webticket o por Headout/Viator. No es estrictamente necesario reservar antes, pero la compra online evita la fila.",
    "tags": [
     "arte",
     "al aire libre",
     "baño de pies",
     "onsen",
     "esculturas"
    ]
   },
   {
    "name": "Kichijoji Harmonica Yokocho — Guided Bar-Hopping with a Local",
    "city": "Tokyo (Kichijoji, oeste de Tokyo)",
    "area": "Kichijoji / Musashino",
    "category": "Comida y bebida / recorrida nocturna",
    "why": "Harmonica Alley (Hamonika Yokocho) es un laberinto de ~70 izakayas de posguerra del tamaño de un living, repletas de salarymen y vecinos del barrio, con casi cero turistas. Un tour guiado de 4 horas con un local (byFood o Klook) te mete de lleno en el laberinto hasta llegar a bares familiares que no aparecen en ninguna guía, donde aprendés protocolo para brindar, cómo pedir en japonés, y la cultura detrás del oolong-hai, el umeshu y el yakitori a las brasas. El grupo no supera las 6 personas, así que se siente íntimo y auténtico, como si te invitaran a un secreto. Ideal como noche previa o posterior a la estadía en Hakone.",
    "cost": "~¥8,000–12,000 por persona con todo incluido (comida + bebida + guía). Fijate en byFood.com o Klook.",
    "duration": "4 horas (generalmente de 18 a 22 h)",
    "booking": "Reservá en byfood.com o klook.com. Los cupos se llenan rápido los viernes y sábados — reservá con 3–4 semanas de anticipación.",
    "tags": [
     "comida",
     "bebida",
     "izakaya",
     "local",
     "vida nocturna",
     "guiado"
    ]
   },
   {
    "name": "Couples Kimono Photoshoot in Asakusa — HANAYAKA",
    "city": "Tokyo (Asakusa)",
    "area": "Asakusa",
    "category": "Sesión de fotos en kimono",
    "why": "Se visten con kimono auténtico furisode y hakama, les arreglan el pelo y eligen accesorios entre más de 500 opciones, y a los 3 minutos están en el Sensoji Temple para una sesión fotográfica profesional de 1 hora. Se van con más de 100 fotos digitales retocadas. HANAYAKA es uno de los servicios mejor puntuados de la zona, reconocido por kimonos de alta calidad (nada de esos alquileres baratos para turistas) y fotógrafos que conocen los mejores ángulos y la luz del templo. Las fotos terminadas son un recuerdo de cumpleaños o aniversario impresionante: personal, profundo, e inconfundiblemente japonés.",
    "cost": "~¥65,000 para 2 personas (todo incluido: kimono + producción + sesión de fotos + 100+ fotos). Opciones de solo alquiler desde ~¥6,000 por persona si prefieren sacarse las fotos solos.",
    "duration": "2,5–3 hs en total (producción + sesión)",
    "booking": "Reservá en Klook (buscá HANAYAKA Asakusa) o escribí a kimonohanayaka@gmail.com. Reservá con 2–4 semanas de anticipación; los fines de semana se llenan rápido.",
    "tags": [
     "kimono",
     "sesión de fotos",
     "cumpleaños",
     "aniversario",
     "cultural",
     "asakusa"
    ]
   },
   {
    "name": "MITUBACI Silver Couple Ring Workshop",
    "city": "Tokyo (varias ubicaciones)",
    "area": "Tokyo",
    "category": "Solo en Japón / artesanía",
    "why": "En un taller tokiota con 50 años de historia, un artesano con experiencia los guía a los dos para martillar, doblar y soldar un lingote de plata maciza hasta convertirlo en anillos a juego, con herramientas de orfebrería de verdad. Se graban las iniciales del otro o un mensaje adentro, y ese mismo día se los llevan puestos. No es un kit ni un molde: realmente los hacen. Para un viaje de cumpleaños o un hito de pareja, es un recuerdo táctil, permanente y únicamente japonés que sale una fracción de lo que cobraría una joyería, y lleva unos 90 minutos. La colocación de piedras (que hace el artesano en el momento) está disponible con una espera de una hora.",
    "cost": "Anillos de plata 950 desde ~¥6,000 por persona (taller Asakusa Doshin vía Klook); sesiones premium de MITUBACI ~¥15,000–25,000 por persona. Nota: MITUBACI actualizó los precios en marzo de 2026 — chequeá mitubaci.co.jp para las tarifas vigentes.",
    "duration": "90 minutos (el anillo listo ese mismo día)",
    "booking": "Reservá en mitubaci.co.jp/en o Klook (buscá 'Asakusa silver ring'). Reserva obligatoria — los grupos son pequeños (2–6 personas).",
    "tags": [
     "artesanía",
     "joyería",
     "cumpleaños",
     "souvenir",
     "experiencia práctica",
     "único"
    ]
   },
   {
    "name": "90-Minute Mt Fuji Helicopter Tour from Tokyo",
    "city": "Tokyo (sale desde Tokyo Heliport, Shinkiba / Funabashi)",
    "area": "Tokyo → Mt Fuji → Hakone",
    "category": "Helicóptero / experiencia aérea",
    "why": "Para un momento verdaderamente irrepetible — o una sorpresa de cumpleaños que deja sin palabras — un helicóptero privado rodea el Mt Fuji a la altura de la cima, siguiendo el borde del cráter con el campo de nieve abajo y el lago Lake Ashinoko brillando en la caldera de Hakone. La ruta pasa por la Tokyo Tower, el frente costero de Yokohama y Enoshima. Los mejores meses son de noviembre a febrero, cuando la visibilidad es increíble y el Fuji está nevado. Volar uno al lado del otro en un helicóptero con ventana de burbuja, con la montaña más icónica de Japón llenando el encuadre, es simplemente incomparable.",
    "cost": "~¥120,000–490,000 por persona según la duración del recorrido (20 min vs 90 min). Cárter privado para 2–3 personas ~¥317,900. Recorrido de 90 min alrededor del Mt Fuji ~¥490,000 por persona. Vuelos más cortos sobre la bahía de Tokyo desde ~¥63,000 por persona.",
    "duration": "De 20 min (panorámico sobre Tokyo) a 90 min (vuelta completa al Mt Fuji)",
    "booking": "Reservá en japanflightadventures.com o Viator (buscá 'Mt Fuji helicopter Tokyo'). WAmazing.com también ofrece la ruta Tokyo–Hakone. Hay que reservar con semanas o meses de anticipación; la política de cancelación por mal tiempo varía.",
    "tags": [
     "helicóptero",
     "fuji",
     "aéreo",
     "cumpleaños",
     "lujo extremo",
     "lujo"
    ]
   },
   {
    "name": "Grand Sumo Aki Basho",
    "city": "Tokyo",
    "area": "Ryogoku Kokugikan",
    "category": "Cultura japonesa",
    "why": "El gran torneo de sumo de septiembre — deporte monumental con rituales milenarios en el estadio más emblemático del género. Podés ver leyendas vivas sobre el dohyo.",
    "cost": "¥3.800–14.000 por persona (según ubicación)",
    "duration": "4–6 horas",
    "booking": "Reservá en el sitio oficial de JTA (sumo.or.jp) — los asientos para parejas (masu-seki) se van meses antes; la venta abre el 8 de agosto.",
    "tags": [
     "sumo",
     "cultura",
     "deporte",
     "ritual",
     "único"
    ],
    "highlight": true
   },
   {
    "name": "Nakasendo: Magome → Tsumago",
    "city": "Kiso Valley",
    "area": "Magome & Tsumago",
    "category": "Naturaleza y trekking",
    "why": "Ocho kilómetros por un camino de postas de la era Edo entre aldeas de madera sin autos ni teléfonos — solo bosques de pino y cascadas pequeñas. Romántico y lento, justo como tiene que ser.",
    "cost": "Gratis (el sendero; museos ¥300–500)",
    "duration": "3–4 horas de caminata",
    "booking": "",
    "tags": [
     "trekking",
     "naturaleza",
     "romántico",
     "aldea",
     "historia"
    ],
    "highlight": true
   },
   {
    "name": "Taller de sushi + wagashi",
    "city": "Tokyo",
    "area": "Asakusa / Tsukiji",
    "category": "Taller y experiencia culinaria",
    "why": "Aprenden a enrollar maki y a moldear delicados dulces japoneses junto a un chef profesional — se van con recetas, habilidades y un recuerdo que no se compra en ningún negocio.",
    "cost": "¥8.000–14.000 por persona",
    "duration": "2–3 horas",
    "booking": "Reservá con anticipación en Airbnb Experiences o Cookly — grupos pequeños, lugares limitados.",
    "tags": [
     "taller",
     "gastronomía",
     "sushi",
     "wagashi",
     "experiencia"
    ],
    "highlight": false
   },
   {
    "name": "Ceremonia del té + kimono",
    "city": "Kyoto",
    "area": "Higashiyama / Gion",
    "category": "Taller y cultura",
    "why": "Se visten con kimono tradicional juntos y realizan una ceremonia del té (chado) guiada — un momento tranquilo e intencionado en el corazón del Kyoto histórico. Los fotógrafos se van a matar por no haberlo reservado antes.",
    "cost": "¥5.000–9.000 por persona",
    "duration": "1.5–2 horas",
    "booking": "Reservá en Maikoya Kyoto o Camellia Tea Experience — elegí el paquete para parejas.",
    "tags": [
     "ceremonia del té",
     "kimono",
     "cultura",
     "romántico",
     "experiencia"
    ],
    "highlight": false
   },
   {
    "name": "Velada con maiko y geiko",
    "city": "Kyoto",
    "area": "Gion Hatanaka / Pontocho",
    "category": "Experiencia única",
    "why": "Una cena íntima con una maiko de verdad — charla, juegos de tradición y un rincón del Japón al que la mayoría de los turistas nunca llega. La celebración de los cuarenta que le van a contar a todos.",
    "cost": "¥40.000–60.000 por persona",
    "duration": "2–2.5 horas",
    "booking": "Reservá 2–3 meses antes en Gion Hatanaka o a través de un agente autorizado — no hay walk-in posible.",
    "tags": [
     "maiko",
     "geisha",
     "Gion",
     "romántico",
     "celebración",
     "único"
    ],
    "highlight": true
   },
   {
    "name": "teamLab Planets",
    "city": "Tokyo",
    "area": "Toyosu",
    "category": "Arte y anime",
    "why": "Caminan descalzos por agua poco profunda y se sumergen en un universo de luz y reflejos infinitos — arte inmersivo que se siente como estar dentro de un anime.",
    "cost": "¥3.200 por persona",
    "duration": "1.5–2 horas",
    "booking": "Comprá las entradas con anticipación en el sitio oficial (planets.teamlab.art) — suelen agotarse semanas antes.",
    "tags": [
     "arte",
     "anime",
     "tecnología",
     "inmersivo",
     "experiencia"
    ],
    "highlight": true
   },
   {
    "name": "Museo Ghibli",
    "city": "Tokyo",
    "area": "Mitaka",
    "category": "Anime y gaming",
    "why": "Un mundo mágico diseñado por el propio Miyazaki — habitaciones que parecen salidas de las películas, el robot gigante en el techo y la sensación de estar dentro de un sueño vivo. Imperdible para todo amante del anime.",
    "cost": "¥1.000 por persona",
    "duration": "2–3 horas",
    "booking": "Reservá exactamente un mes antes (el día 10 del mes anterior) en Lawson Ticket — muy limitado, prepárense para la hora de apertura.",
    "tags": [
     "Ghibli",
     "anime",
     "museo",
     "mágico",
     "experiencia"
    ],
    "highlight": true
   }
  ],
  "routes": [
   {
    "id": "tsukiji",
    "date": "2026-09-19",
    "city": "Tokyo",
    "area": "Tsukiji",
    "emoji": "🐟",
    "title": "Mercado Exterior de Tsukiji — desayuno de campeones",
    "subtitle": "8 paradas de degustación por los callejones · 08:00–10:15",
    "intro": "El mercado mayorista se mudó a Toyosu en 2018, pero el mercado exterior (Jogai) sigue acá — 400+ puestos vivísimos. El secreto: venir temprano (antes de las 09:00 tranquilo, después de las 10:00 lleno), comer donde comprás, y fluir de callejón en callejón. No es una comida sino una seguidilla de bocados chicos — compartan cada plato de a dos para probar todo.",
    "meta": {
     "duration": "~2 horas",
     "distance": "~1,5 km (callejones e ida y vuelta)",
     "start": "Estación Tsukiji (línea Hibiya), salida 1/2 — al inicio de Monzeki-dori",
     "getThere": "Desde Kabukicho: línea Marunouchi hasta Ginza y después Hibiya hasta Tsukiji, ~20–25 min",
     "end": "Santuario Namiyoke, pegado a la salida de Tsukijishijo (línea Oedo)",
     "cost": "No hay entrada. El mercado se recorre gratis; la comida de los puestos ronda ¥2.500–4.000 por persona si probás varias cosas. Kushi-tamago ~¥100–200 el palito, el horumon-don de Kitsuneya ~¥900, brochetas de wagyu/mariscos ~¥500–1.000 cada una, y un bowl de uni/kaisen ~¥1.500–3.000. Llegás en metro (¥180–210 con tarjeta IC), no hace falta taxi.",
     "luggage": "La valija grande queda guardada en el hotel de Kabukicho (HOTEL AMANEK) — salís solo con la mochila y la tarjeta Suica. Hoy no hay logística especial de equipaje.",
     "meal": "Kitsuneya (きつねや) — el legendario bowl de horumon-don del mercado, ~¥900. Caé temprano porque hay cola y cierran a media tarde; sumale un palito de tamagoyaki calentito de Marutake o Yamacho por ¥100–200."
    },
    "stops": [
     { "time": "08:05", "name": "Marutake (丸武) — tamagoyaki", "walk": "3 min de la salida, al inicio de Monzeki-dori", "see": "Tortilla de dashi dulzona en un palito, calentita de la plancha — ¥100–150.", "why": "Casa histórica de tamagoyaki de Tsukiji (ligada a la familia de un chef famoso de TV). El rollo dulce-dashi es tradición Edomae, cocinado en plancha de cobre rectangular.", "tip": "Comelo en el lugar — el borde caramelizado se pierde en minutos.", "map": "35.6659,139.7702" },
     { "time": "08:12", "name": "Yamacho (山長) — tamagoyaki", "walk": "1 min más adelante", "see": "Tamago al palito, estilo más seco y refinado — ¥100–150.", "why": "La otra casa icónica de tamagoyaki de Tsukiji. Los locales debaten: Yamacho (refinado) vs Marutake (jugoso-dulce). La degustación doble es un clásico de Tsukiji.", "tip": "Tomen uno de cada uno y compartan — así comparan sin llenarse.", "map": "35.6661,139.7699" },
     { "time": "08:22", "name": "Kitsuneya (きつねや) — horumon-don", "walk": "2 min hacia el Monzeki-dori principal", "see": "Arroz cubierto de achuras y verdeo guisados en miso — ~¥900. También gyu-don chico.", "why": "Abierto desde 1947. 'Horumon' es jerga de Osaka para los cortes que el carnicero tiraba — los trabajadores del mercado convirtieron ese guiso barato y potente en un desayuno querido. Se huele la olla de lejos.", "tip": "Cola fija y pocos banquitos — llegá temprano, se come parado en la barra.", "map": "35.6655,139.7695" },
     { "time": "08:35", "name": "Barra de uni / kaisen en callejón", "walk": "2 min, callejón lateral", "see": "Uni (erizo) en vasito o sobre arroz ~¥500–1.500; también brochettes de atún y boles kaisen.", "why": "Uno de los mejores lugares fuera de Hokkaido para comer uni pocas horas después de pescado. El atún es 'el rey de Tsukiji' — akami magro, chutoro el punto dulce, otoro panza que se derrite.", "tip": "Comprá donde haya cola de japoneses y comé parado ahí mismo — el uni se oxida rápido.", "map": "35.6657,139.7690" },
     { "time": "08:50", "name": "Brochettes de wagyu y mariscos a la parrilla", "walk": "2 min, seguí el humo", "see": "Brochettes chamuscadas a las brasas — vieira, anguila, wagyu — ~¥500–1.000 c/u.", "why": "Los puestos de yakimono son el corazón sensorial del mercado — asando a pedido para los trabajadores desde los días del mercado mayorista.", "tip": "Comé parado junto a la parrilla — en varios callejones no se camina comiendo, y la brochette caliente gotea.", "map": "35.6656,139.7692" },
     { "time": "09:05", "name": "Santuario Namiyoke Inari (波除稲荷)", "walk": "3 min hacia el extremo sur", "see": "Pequeño santuario guardián; cabezas de león (shishi) gigantes y monumentos donados por los pescaderos (incluso un memorial del atún).", "why": "Fundado en 1659. El nombre = 'protección contra las olas'. Cuando el mercado se mudó acá (tras el terremoto de 1923) se volvió el santuario guardián no oficial de los comerciantes.", "tip": "Tranquilo, gratis, 5 min — un respiro lindo y punto de cierre cómodo junto a Tsukijishijo.", "map": "35.6644,139.7686" },
     { "time": "09:20", "name": "Masamoto / Aritsugu — cuchillos", "walk": "3 min, sobre Namiyoke-dori", "see": "Cuchillos de cocina japoneses forjados a mano. Masamoto (desde 1850s, en el mercado desde ~1907) y Aritsugu (raíces de Kioto).", "why": "Son forjadores profesionales que abastecían a los cortadores de pescado. Un yanagiba de un solo bisel o un santoku es un recuerdo serio (¥8.000 para arriba).", "tip": "Pedí permiso para fotos; el personal graba el nombre y explica el acero — una linda experiencia de pareja, más allá de la comida.", "map": "35.6647,139.7688" },
     { "time": "09:40", "name": "Cierre dulce — matcha / daifuku / taiyaki", "walk": "2 min de vuelta al centro", "see": "Soft-serve de matcha, daifuku de frutilla (Soratsuki), o taiyaki con forma de atún (Sanokiya) — ~¥200–400.", "why": "Se cierra con dulces japoneses; el taiyaki con forma de atún es un guiño a la identidad del mercado.", "tip": "Las paradas menos sensibles al tiempo — guardalas para el final cuando la gente se amontona, y salí para las 10:15.", "map": "35.6658,139.7698" }
    ],
    "special": [
     "🥚 El duelo del tamagoyaki: Marutake (dulce-jugoso) vs Yamacho (refinado) — la degustación doble es un ritual.",
     "🔪 Las cuchillerías Masamoto y Aritsugu — artesanía viva con grabado del nombre.",
     "💴 Efectivo obligatorio — la mayoría de los puestos no toma tarjeta. El centro Plat Tsukiji tiene lockers (~¥500), baños y mapas en inglés.",
     "⏰ Por qué cerrar a las 10:15: los mejores puestos se agotan hacia las 13:00, pero la verdadera razón es la multitud — antes de las 09:00 tranquilo, a las 11:00 hombro con hombro."
    ]
   },
   {
    "id": "asakusa",
    "date": "2026-09-19",
    "city": "Tokyo",
    "area": "Asakusa",
    "emoji": "⛩️",
    "title": "Asakusa — Senso-ji y la ciudad baja de Edo",
    "subtitle": "9 paradas · 10:45–12:30 · caminata plana y fácil",
    "intro": "El templo más antiguo de Tokio (fundado en 628) y el barrio que conservó el alma de la vieja Edo. Una puerta del trueno gigante, un pasaje comercial de 300 años, una pagoda de cinco pisos y un templo construido alrededor de una estatua que desapareció. Recorrido corto y cargado de historia, olor a incienso y comida callejera.",
    "meta": {
     "duration": "~1 hora 45 min",
     "distance": "~1,2–1,5 km, plano",
     "start": "Estación Asakusa (línea Ginza), salida 1 — frente a la puerta Kaminarimon",
     "getThere": "Desde Tsukiji: línea Hibiya hasta Ueno, transbordo a la línea Ginza hasta Asakusa (~26 min)",
     "end": "Puente Azumabashi — vista del Skytree y la llama dorada de Asahi",
     "cost": "Todo el recorrido es gratis: entrada a Senso-ji (puertas, salón principal, pagoda), al santuario Asakusa y a la terraza del Centro Cultural = ¥0. Gasto opcional nomás: omikuji ¥100, incienso/amuleto ~¥300–500. Transporte desde Tsukiji en metro ~¥210 con Suica. No hace falta taxi.",
     "luggage": "Día normal de paseo en Tokio: la valija grande queda guardada en el hotel AMANEK Shinjuku, salís solo con la mochilita y la Suica.",
     "meal": "El melonpan gigante y calentito de Asakusa Kagetsudo, al lado del templo, ~¥300; o los ningyo-yaki recién hechos en Nakamise-dori, ~¥500 por unos cuantos."
    },
    "stops": [
     { "time": "10:45", "name": "Centro de Info de Asakusa (terraza gratis) — opcional pero recomendado para arrancar", "walk": "Frente a la salida, enfrente de Kaminarimon", "see": "Terraza gratuita en el piso 8 (edificio de Kengo Kuma): de un lado Kaminarimon y Nakamise, del otro el Skytree.", "why": "La mejor vista elevada gratis de todo el pasaje del templo — ideal para una foto de orientación antes de meterse en la multitud.", "tip": "Háganlo primero, ~10 min: mapa general, baños y Wi-Fi. Abierto 9:00–20:00 (terraza hasta 22:00).", "map": "35.7106,139.7963" },
     { "time": "10:55", "name": "Kaminarimon (雷門, Puerta del Trueno)", "walk": "Cruzar la calle", "see": "Farol chochin rojo gigante (~3,9 m, ~700 kg) y las estatuas de los dioses del viento (Fujin) y del trueno (Raijin).", "why": "La puerta exterior de Senso-ji y el símbolo eterno de Asakusa. Mirá la base del farol — hay un dragón tallado.", "tip": "El punto de foto masivo n.º 1 — disparen desde un ángulo o desde la vereda de enfrente.", "map": "35.7111,139.7966" },
     { "time": "11:05", "name": "Nakamise-dori (仲見世通り)", "walk": "Justo después de la puerta, ~250 m", "see": "~90 puestos: ningyo-yaki (bizcochitos de anko con formas de Asakusa), age-manju (bollos fritos dulces), senbei, y el melon-pan gigante de Kagetsudo (en un callejón lateral).", "why": "Una de las calles comerciales más antiguas de Japón — desde el 1700, cuando le dieron a los locales el derecho de puesto sobre el camino al templo.", "tip": "En la mayoría de los puestos no se camina comiendo — comé al lado del puesto. Todo se hace fresco frente a vos; vení temprano.", "map": "35.7135,139.7960" },
     { "time": "11:30", "name": "Hozomon (宝蔵門, Puerta del Tesoro) + pagoda", "walk": "Al final de Nakamise", "see": "Puerta interior de dos pisos con sandalias de paja gigantes (waraji, ~2,5 m); a la izquierda la pagoda de cinco pisos (53 m, la segunda más alta de Japón).", "why": "La puerta guarda el templo y almacena sutras; las sandalias simbolizan la fuerza de los guardianes Nio y ahuyentan el mal. La cima de la pagoda guarda reliquias de Buda.", "tip": "Date vuelta en Hozomon para una foto enmarcada bajando por Nakamise hasta Kaminarimon.", "map": "35.7144,139.7966" },
     { "time": "11:40", "name": "Salón principal de Senso-ji (本堂) + incienso + omikuji", "walk": "1 min", "see": "Gran caldero de incienso (jokoro) en el patio; puestos de omikuji (suertes). Entrada gratis (monedas para incienso/suerte).", "why": "Fundado en 628, cuando unos pescadores sacaron del río Sumida una estatua dorada de Kannon (diosa de la misericordia). La estatua oculta nunca se exhibe. Mirá arriba — hay un dragón pintado en el techo.", "tip": "jokoro: llevá el humo hacia la parte del cuerpo que necesita cura. omikuji: si sale mala suerte (¡en Senso-ji hay mucha!), doblala y atala al soporte — así dejás el mal en el templo.", "map": "35.7148,139.7967" },
     { "time": "12:00", "name": "Santuario Asakusa (浅草神社, 'Sanja-sama')", "walk": "Al este del salón principal", "see": "Santuario shinto rojo pegado al templo budista. Gratis.", "why": "Dedicado a las tres personas de la leyenda de Kannon (los dos pescadores + quien la veneró). Estructura Edo original (1649) que sobrevivió los bombardeos — algo raro. Cuna del festival Sanja Matsuri.", "tip": "Mucho más tranquilo que el salón principal. Acá se hace el rito shinto: reverencia-reverencia, palmada-palmada, reverencia.", "map": "35.7152,139.7975" },
     { "time": "12:10", "name": "Denboin-dori (伝法院通り)", "walk": "2 min, cruza Nakamise", "see": "Calle peatonal al estilo del período Edo — frentes de vieja Tokio, faroles, y estatuitas de ladrones/ninjas en los techos.", "why": "El callejón más atmosférico de la 'vieja Edo' en Asakusa — diseñado a propósito para evocar la era del shogun.", "tip": "Linda luz de media mañana en el extremo oeste. Conecta con Hoppy-dori (calle de izakayas abiertas, para volver más tarde).", "map": "35.7130,139.7952" },
     { "time": "12:20", "name": "Puente Azumabashi (吾妻橋) — cierre", "walk": "5 min al este desde Kaminarimon hacia el río Sumida", "see": "Desde el puente: Tokyo Skytree (634 m) y el edificio Asahi con la 'llama dorada' (Flamme d'Or, Philippe Starck, 1989).", "why": "La foto icónica de Tokio — lo viejo contra lo nuevo. El puente es de 1774 (versión actual 1931).", "tip": "Parate del lado norte para el Skytree + la llama juntos. Punto de cierre natural antes de seguir.", "map": "35.7108,139.7986" }
    ],
    "special": [
     "🏯 La terraza del centro de info de Kengo Kuma — la mejor vista gratis de todo el complejo del templo. Háganla primero.",
     "🔮 El rito del omikuji: Senso-ji es famoso por su alta proporción de mala suerte — si sale, atala al soporte y dejá el mal atrás.",
     "💨 El humo del jokoro se considera curativo — llevalo a la cabeza (sabiduría) y a las manos (talento).",
     "🍺 Hoppy-dori (calle Hoppy) — callejón de izakayas abiertas al oeste del templo, para volver más tarde; se prende desde el mediodía."
    ]
   },
   {
    "id": "shibuya-eve",
    "date": "2026-09-19",
    "city": "Tokyo",
    "area": "Shibuya (tarde/noche)",
    "emoji": "🌆",
    "title": "Shibuya al atardecer — el cruce, las luces y los callejones",
    "subtitle": "10 paradas · 16:45–20:00 · atardecer 17:42",
    "intro": "El corazón de la Tokio joven cuando se prenden las luces: el cruce más transitado del mundo, la estatua del fiel Hachiko, miradores gratis del Scramble, un techo verde sobre la ciudad, y callejones de bares diminutos bajo las vías. Cronometren el mejor mirador cerca de 17:35–18:05 — cuando el cielo todavía tiene color y las pantallas ya arden.",
    "meta": {
     "duration": "~3 horas (con cena)",
     "distance": "~2,5–3 km, plano, saltos cortos",
     "start": "Estación Shibuya, salida Hachiko",
     "getThere": "Desde el hotel: línea Marunouchi/JR hasta Shibuya, o directo desde Asakusa por la línea Ginza (~35 min)",
     "end": "Cena en Shibuya Yokocho o Nonbei Yokocho, y después seguir a Ni-chome",
     "cost": "El cruce, la estatua de Hachiko, Miyashita Park y los yokocho son gratis; el mirador del Starbucks Tsutaya es gratis (solo pagás la bebida); la terraza MAG8 cuesta ¥1.800 por persona con una bebida incluida (no aceptan efectivo, foto extra ¥1.500). Nonbei Yokocho: cargo de asiento/otoshi ¥500–1.000 + tragos ¥400–700 cada uno, calculá ¥3.000–5.000 por persona la noche. Todo se hace a pie desde la estación, no hace falta taxi.",
     "luggage": "Primera noche en Tokio: la valija grande queda guardada en el hotel Amanek de Kabukicho (recién se despacha a Kioto el 21.9), salís de noche solo con una mochila de día + la tarjeta Suica.",
     "meal": "En Shibuya Yokocho (Miyashita Park) probás comida regional de todo Japón en un solo lugar: yakitori, gyoza, mariscos de Hokkaido o un plato de carne de Kobe (~¥2.999); calculá unos ¥3.000–4.000 por persona con una bebida."
    },
    "stops": [
     { "time": "16:45", "name": "Estatua de Hachiko (ハチ公像)", "walk": "Justo en la salida Hachiko", "see": "El perro akita de bronce en la plaza Hachiko. Gratis, foto rápida.", "why": "Hachiko esperó en la estación todos los días a su dueño fallecido (prof. Ueno) desde 1925 hasta su muerte en 1935 — ~9 años de lealtad que lo hicieron símbolo nacional. La estatua actual es de 1948 (la original se fundió para la guerra).", "tip": "Cola fija para la foto — vení ahora con luz, no en la oscuridad. La plaza se conservó pese a la remodelación de la estación.", "map": "35.6590,139.7005" },
     { "time": "16:55", "name": "Cruce Scramble de Shibuya", "walk": "Unos pasos", "see": "Cruzar el cruce diagonal — hasta ~3.000 personas por ciclo de semáforo. Gratis.", "why": "El cruce diagonal rodeado de pantallas gigantes es la imagen definitiva de la Tokio moderna. El pico es después de que oscurece.", "tip": "Cruzá una vez a nivel de calle para la inmersión, y después mirá desde arriba en la próxima parada.", "map": "35.6595,139.7005" },
     { "time": "17:05", "name": "Starbucks Tsutaya / Q-Front (piso 2) — vista gratis", "walk": "Cruzando el cruce", "see": "Café (~¥500) junto a los ventanales curvos que miran directo al cruce.", "why": "La vista elevada del cruce más famosa del mundo, reabierta en 2024 con diseño 'cinta verde'. Enfrente de los frentes de pantallas.", "tip": "Los lugares junto a la ventana vuelan al atardecer — llegá ~17:10. Disparen con la lente pegada al vidrio para evitar reflejos.", "map": "35.6598,139.7002" },
     { "time": "17:20", "name": "Terraza MAG8 (MAG's Park), MAGNET by SHIBUYA109 — vista paga", "walk": "1 min, esquina de Center Gai", "see": "Terraza abierta sobre el cruce. ~¥1.800–2.000 con trago. Ascensor al 7 y después arriba.", "why": "El mejor ángulo abierto directo sobre el Scramble — la foto del flujo de gente y las pantallas. El mirador recomendado para el atardecer si no van a Shibuya Sky.", "tip": "Ya no es la terraza gratis de antes — tiene costo real. Llegá ~17:15–17:20 para agarrar baranda antes de la avalancha del atardecer.", "map": "35.6601,139.6994" },
     { "time": "18:00", "name": "Center Gai (センター街)", "walk": "Bajando de la terraza", "see": "La peatonal principal — arcades, streetwear, crepes, ramen, energía.", "why": "El corazón de la cultura joven de Shibuya — el brillo de neón que define el barrio. El pico de energía justo en la ventana del atardecer.", "tip": "Excelente para fotos de neón y multitud. Buen lugar para picar algo liviano antes de cenar.", "map": "35.6602,139.6987" },
     { "time": "18:15", "name": "SHIBUYA109", "walk": "3 min hacia la bifurcación de Dogenzaka", "see": "La torre cilíndrica de moda. Entrada gratis; 10 pisos de moda joven.", "why": "Un hito de 1979 que lanzó la subcultura 'gyaru' de Japón — un ícono aunque no compres.", "tip": "Linda foto desde el cruce/Dogenzaka cuando está iluminada. Con 5 min alcanza, y después volvé al este hacia Miyashita Park.", "map": "35.6595,139.6975" },
     { "time": "18:35", "name": "Miyashita Park (宮下公園) — techo verde", "walk": "8–10 min subiendo por Meiji-dori", "see": "Parque en la terraza (abierto 8:00–23:00, gratis) sobre el complejo RAYARD — césped, skatepark, vista de la ciudad.", "why": "Una reinvención (2020) de un viejo parque elevado — un rincón raro de verde-y-cielo sobre la densidad de Shibuya.", "tip": "Paseo tranquilo en la 'hora azul' y fotos del skyline, y después bajás directo a cenar.", "map": "35.6626,139.7017" },
     { "time": "18:50", "name": "Shibuya Yokocho (渋谷横丁) — callejón de comida [opción A para la noche]", "walk": "Bajás a planta baja", "see": "Callejón de izakayas techado (~100 m) en la planta baja de Miyashita Park — comida regional de todo Japón. Abierto sábado 11:00–05:00. ~¥2.000–4.000 por persona.", "why": "Una experiencia 'yokocho' moderna por prefecturas (de Hokkaido a Okinawa), ruidosa y amable con turistas, con menús con fotos.", "tip": "Mesas compartidas, divertido y ruidoso. Sin reserva para dos; espera corta cerca de las 19:00.", "map": "35.6626,139.7017" },
     { "time": "18:50", "name": "Nonbei Yokocho (のんべい横丁) — 'callejón de los borrachos' [opción B · joya]", "walk": "2 min del cruce, junto a las vías", "see": "Dos pasajes angostos de ~40 bares diminutos (2–6 asientos) bajo las vías del JR. Trago + platitos; ~¥500–1.000 de cargo de mesa + por ítem.", "why": "Sobreviviente retro desde 1952 — lo opuesto total a la Shibuya nueva, salvado de la demolición por un contrato de alquiler colectivo. Local e íntimo.", "tip": "Preguntá el cargo de mesa (otoshi) antes de sentarte. Algunos son amables con turistas — buscá menú en inglés o un maestro simpático. Fotos nocturnas increíbles de los faroles de papel.", "map": "35.6591,139.7018" },
     { "time": "19:45", "name": "Seguir a Ni-chome", "walk": "JR/metro ~10 min", "see": "Después de cenar, línea a Shinjuku-sanchome — arranque del recorrido nocturno de Ni-chome.", "why": "Sábado a la noche = pico de la escena gay de Tokio. Ver el recorrido aparte de Ni-chome.", "tip": "No empujen el cruce a nivel de calle antes de las 18:15 — es más impactante ya de noche cerrada.", "map": "35.6906,139.7057" }
    ],
    "special": [
     "🌇 Hora dorada para fotos: 17:35–18:05 — las pantallas ya prendidas y el cielo todavía con color. El cruce a nivel de calle rinde mejor después de las 18:15.",
     "🏮 Nonbei Yokocho — callejón de bares desde 1952 bajo las vías, joya escondida para foto nocturna y un trago íntimo.",
     "💸 Ojo: la terraza de MAG's Park pasó a ser un lounge pago (MAG8, ~¥1.800–2.000 con trago) — ya no es la terraza gratis de antes.",
     "🌃 Opcional — Shibuya Sky (229 m, entrada atardecer ~¥2.500): la mejor vista de Shibuya, pero hay que reservar un turno de ~17:00 con anticipación (se agota)."
    ]
   },
   {
    "id": "nichome",
    "date": "2026-09-19",
    "days": ["2026-09-21", "2026-10-01"],
    "city": "Tokyo",
    "area": "Shinjuku Ni-chome",
    "emoji": "🏳️‍🌈",
    "title": "Ni-chome — guía del recorrido de bares gay",
    "subtitle": "La mayor concentración de bares gay de Asia · ~300 bares en cinco cuadras",
    "intro": "El barrio LGBTQ+ de Shinjuku — según se estima, la mayor concentración de bares gay del mundo. La mayoría son diminutos (6–15 lugares), así que la regla es: un trago y seguir. Se arranca internacional y relajado, y se sube hacia el baile y lo tardío. Las dos reglas que hacen funcionar la noche: efectivo, y fluir entre lugares.",
    "meta": {
     "duration": "Toda la noche, desde ~21:00",
     "distance": "~5 cuadras — todo a minutos a pie",
     "start": "Estación Shinjuku-sanchome, salida C7/C8",
     "getThere": "Desde el hotel en Kabukicho: ~10–12 min a pie, o una estación",
     "end": "Cruce de Naka-dori — el punto de encuentro bajo el arcoíris de Aiiro",
     "cost": "Casi todos los bares de Ni-chome son sin entrada, con consumición mínima de ~¥700; el AiiRO Cafe es famoso por su \"barra libre de cerveza\" a ¥1,000; Arty Farty tiene tragos a ¥500 en happy hour antes de las 21:00. Calculá ~¥3,500-5,000 por persona para 3-4 paradas. La caminata desde Kabukicho es gratis; taxi de vuelta de noche ~¥1,000-1,500.",
     "luggage": "Dia normal en Tokio: la valija grande queda cerrada en el hotel de Kabukicho (todavia no se despacha a Kioto, eso es el 21.9), salis solo con la billetera, la Suica y un documento. No hace falta mochila.",
     "meal": "Comé algo antes del recorrido: el AiiRO Cafe con su barra libre de cerveza a ¥1,000 y picada de edamame/yakitori, o un ramen con gyozas rápido en Sanchome camino a la zona, ~¥1,000-1,500 por persona; liviano para arrancar la noche de tragos."
    },
    "stops": [
     { "time": "21:00", "name": "Aiiro Cafe (アイイロカフェ) — apertura internacional", "walk": "2 min de la salida C8", "see": "Bar de pie de frente abierto en la esquina del cruce Naka-dori, bajo el cartel azul/arco iris. La acción es en la vereda — comprás un trago y te quedás afuera.", "why": "El punto de arranque y orientación perfecto — todos pasan por acá. Shows de drag el finde, personal que habla inglés, público muy amable con extranjeros.", "tip": "Antes se llamaba 'Advocates' — es el mismo lugar, no busques dos. Se llena y se desborda a la vereda desde ~21:00–22:00.", "map": "35.6917,139.7086" },
     { "time": "21:30", "name": "Campy! Bar (キャンピー) — drag, todos bienvenidos", "walk": "1 min", "see": "Bar de drag/cabaret colorido. Sin cover; tragos desde ~¥800.", "why": "Manejado por la drag queen Bourbonne (desde 2013). Súper amable con todos los géneros y orientaciones, personal fabuloso, energía fácil para calentar temprano.", "tip": "Efectivo. Chico y movido — vas a estar parado/compartiendo. Abre también entre semana.", "map": "35.6916,139.7088" },
     { "time": "22:00", "name": "Eagle Tokyo / Eagle Tokyo Blue — bares de osos", "walk": "2 min", "see": "Dos lugares cercanos: Eagle (lounge estilo Brooklyn) y Eagle Blue (temática azul-océano, escenario con drag, go-go, DJ y karaoke). Sin cover, mínimo un trago.", "why": "Los bares de osos internacionales más conocidos; reciben turistas en inglés. Parte del grupo de bares gay más grande de Japón.", "tip": "Efectivo. Blue es más fiesta/show; el Eagle original es más lounge y charla. Blue abre más tarde (~18:00–21:00).", "map": "35.6919,139.7083" },
     { "time": "22:45", "name": "GB — bar de cruising clásico, solo hombres", "walk": "2 min", "see": "Bar de video/de pie, solo hombres, en el sótano.", "why": "El primer bar de Ni-chome que recibió extranjeros. Público de profesionales, artistas y gaisen, de 20 a 40. Cruising y lleno el finde.", "tip": "Inglés OK, efectivo. Es un bar de levante, no de show. Se llena tarde el sábado.", "map": "35.6915,139.7089" },
     { "time": "23:30", "name": "Dragon Men (ドラゴンメン) — lounge/club de diseño", "walk": "1 min", "see": "Lounge-bar de diseño, mixto, amable con extranjeros, con go-go y DJ tarde. Frente abierto.", "why": "Más grande y pulido que los bares diminutos — cómodo para un trago y baile. Popular entre turistas y locales.", "tip": "Inglés OK, efectivo. Andá después de medianoche cuando se llena. Estilo un-trago.", "map": "35.6917,139.7085" },
     { "time": "00:15", "name": "Arty Farty (+ Annex) — pista de baile", "walk": "1 min", "see": "Club/bar de baile querido por extranjeros — dos lugares conectados (bar + pista). Sin cover, mínimo un trago (~¥500–700). Happy hour antes de las 21:00 = ¥500.", "why": "El ancla confiable del baile — joven, internacional, mixto y fácil para principiantes. El trago da un sello para pasar gratis entre los dos lugares.", "tip": "Inglés OK, efectivo. Se llena después de ~22:30 el sábado.", "map": "35.6914,139.7088" },
     { "time": "01:00", "name": "AiSOTOPE Lounge — club grande para el final (opcional)", "walk": "2 min", "see": "El local de fiestas más grande de Ni-chome — dos pisos, una fiesta temática distinta cada noche, shows de drag y eventos.", "why": "Si querés una pista de baile de verdad para cerrar, y no bares diminutos. Abre ~21:00–05:00.", "tip": "Fijate qué evento hay esa noche (cambia; algunos son temáticos/solo mujeres). Efectivo para la entrada.", "map": "35.6910,139.7080" }
    ],
    "special": [
     "💴 El efectivo es rey — asumí que la mayoría no toma tarjeta. Llevá muchos billetes de ¥1.000. Hay cajero 7-Eleven en la salida C7/C8.",
     "🍶 El cargo de mesa (otoshi/charge, ¥500–1.500) es la norma en los bares chicos — suele incluir el primer trago. Pagalo con una sonrisa, es la costumbre.",
     "🚶 La etiqueta: un trago y seguir — los bares diminutos viven de la rotación. Así también probás muchos lugares en la noche.",
     "📅 Para el lunes de noche (21.9, tras el feriado — más tranquilo): Bar Gold Finger (happy hour 17:00–19:00, 2 tragos ¥1.000) → Campy! → esquina de Aiiro → Eagle. ⚠️ Ojo: Gold Finger es solo-mujeres los sábados — saltealo el 19.9, perfecto el 21.9."
    ]
   },
   {
    "id": "nakano",
    "date": "2026-09-20",
    "city": "Tokyo",
    "area": "Nakano Broadway",
    "emoji": "🕹️",
    "title": "Nakano Broadway — la mina del coleccionista, piso por piso",
    "subtitle": "Estrategia 'ascensor al 4, bajar caminando' · 12:00–14:00",
    "intro": "El legendario mall otaku retro — abrió en 1966 y se volvió meca cuando Mandarake abrió acá en 1980. Hoy ~32 tiendas Mandarake especializadas bajo un mismo techo: manga, figuras, cels, cartas, cosplay, juguetes vintage. Menos turístico y con precios más justos que Akihabara. La visita es vertical — los pisos son la caminata.",
    "meta": {
     "duration": "~2 horas (coleccionistas serios: 3–4)",
     "distance": "Vertical — ascensor y pisos, no distancia",
     "start": "Estación Nakano (JR Chuo), salida norte → por la galería Sun Mall",
     "getThere": "Desde Shinjuku: JR Chuo (rápido) hasta Nakano, ~5 min (la primera estación)",
     "end": "Subsuelo B1 — soft-serve Daily Chico, y de vuelta por Sun Mall",
     "cost": "Entrada gratis a Nakano Broadway (solo pagás lo que comprás). El JR Chuo rapido desde Shinjuku sale ~¥170 con Suica, ~5 min. Presupuesto de coleccionismo a gusto; el helado de 8 sabores de Daily Chico ~¥1,000. No hace falta taxi.",
     "luggage": "Dia normal de paseo por Tokio: la valija queda guardada en el hotel (HOTEL AMANEK Kabukicho), salis solo con la mochila chica y la Suica.",
     "meal": "El famoso soft de Daily Chico en el B1: la torre Tokudai de 8 sabores de ~40 cm de alto, ~¥1,000. No hay mejor forma de cerrar la recorrida."
    },
    "stops": [
     { "time": "11:55", "name": "Nakano Sun Mall (galería) — el acceso", "walk": "Frente a la salida norte, ~225 m derecho", "see": "Galería comercial techada con 100+ locales — ramen, takoyaki, sushi, cafés, farmacias.", "why": "Una calle comercial local, cotidiana y vibrante — contraste deliberado con el laberinto de tesoros que hay al final. Sun Mall y Broadway están conectados físicamente.", "tip": "Comé acá un almuerzo liviano de camino (antes de las 12:00), así la ventana 12:00–14:00 es puro shopping.", "map": "35.7065,139.6657" },
     { "time": "12:00", "name": "Piso 4 — 'Viaje al pasado' (lo más raro, lo más vacío)", "walk": "Ascensor directo al 4", "see": "Mandarake Henya (juguetes de lata de preguerra, entrada tipo torii rojo), Anime-kan (cels/genga originales), Mania-kan (manga raro, ediciones de Tezuka), Plastic (muñecas vintage).", "why": "El piso del coleccionista profundo. Museístico — todo en vitrinas. Se empieza acá porque los pisos altos están tranquilos en la apertura, y le ganás a la multitud el stock raro.", "tip": "'Cosmos' — no se pudo confirmar como nombre vigente en 2026; el rol de figuras raras lo cubren Henya y Special. Buscá por función, no por nombre.", "map": "35.7076,139.6657" },
     { "time": "12:35", "name": "Piso 3 — 'Cuartel general' (HQ de manga + nombres grandes)", "walk": "Escaleras abajo", "see": "Mandarake Honten (manga insignia), Special 2/3 (Kamen Rider, Macross, Evangelion, Gundam, modelos de plástico), Infinity (merch de ídolos J/K-pop), y TACO ché en el rincón de atrás (libros de arte indie, zines).", "why": "El piso del manga y los nombres grandes. TACO ché es lo opuesto total a Mandarake — artístico, de culto, fácil de perderse en el rincón.", "tip": "No te pierdas el rincón del fondo — ahí se esconde TACO ché.", "map": "35.7076,139.6657" },
     { "time": "13:05", "name": "Piso 2 — 'Paraíso Mandarake' (núcleo de figuras)", "walk": "Escaleras abajo", "see": "Special / New Special (sofubi kaiju, chogokin, Ultraman, Transformers, garage kits), Galaxy (juegos retro y consolas), Card (Pokémon), Cosplay, Micro-kan (miniaturas tipo kinkeshi y modelos de comida).", "why": "La mayor concentración de tiendas Mandarake — el campo de caza principal de figuras, juegos e ídolos. Acá lo vintage raro se cruza con lo moderno.", "tip": "Dedicá acá la mayor parte del tiempo. Compará precios de figuras entre Special y Galaxy. Efectivo.", "map": "35.7076,139.6657" },
     { "time": "13:45", "name": "Piso 1 — planta baja (vintage de lujo)", "walk": "Escaleras abajo", "see": "Reventa de relojes de lujo y joyas (Jack Road / Betty Road), mostradores de cámaras usadas, y entradas/vidrieras.", "why": "Nakano es un verdadero polo de mercado secundario de relojes de lujo — vale una mirada aunque no compres.", "tip": "Paso rápido de camino abajo — con 5 min alcanza.", "map": "35.7076,139.6657" },
     { "time": "13:55", "name": "Subsuelo B1 — Daily Chico (デイリーチコ)", "walk": "Escaleras al subsuelo", "see": "Torre de soft-serve de 8 sabores (~35–40 cm). Desde ~¥400 (chico) hasta ~¥1.000 (el gigante 'Tokudai'). Sabores rotativos.", "why": "El rincón icónico de Nakano Broadway — imperdible. También hay mercadito local y comidas baratas en el subsuelo.", "tip": "Comelo ya — se derrite rápido. Cierre perfecto, y salís por Sun Mall.", "map": "35.7076,139.6657" }
    ],
    "special": [
     "🍦 Daily Chico (B1) — la torre de 8 sabores, barata e icónica. La foto y el cierre.",
     "📚 TACO ché (piso 3, rincón de atrás) — libros de arte e indie/doujinshi, otro sabor muy distinto a Mandarake. Fácil de perderse.",
     "🤖 Henya (piso 4) y Special (pisos 2–3) para figuras sofubi/kaiju/Transformers; Robot Robot para juguetes vintage.",
     "💴 Efectivo — muchos locales diminutos lo prefieren. Mandarake toma tarjeta, pero los vendedores sueltos de sofubi no."
    ]
   },
   {
    "id": "akihabara",
    "date": "2026-09-20",
    "city": "Tokyo",
    "area": "Akihabara",
    "emoji": "🎮",
    "title": "Akihabara — capital otaku, circuito completo a pie",
    "subtitle": "11 paradas · 15:30–18:45 de día + arcades hasta 22:30",
    "intro": "El 'campo de hojas de otoño' que pasó de barrio eléctrico de posguerra a centro mundial de la cultura otaku. Megatiendas de figuras por pisos, un templo del retro-gaming, paredes de gachapon, arcades ardiendo y un santuario shinto que bendice servidores. El circuito sube por Chuo-dori, desvía cuesta arriba al templo Kanda Myojin, y vuelve al sur para cenar y jugar. Ojo con los cierres tempranos del domingo.",
    "meta": {
     "duration": "~3 horas de día + noche",
     "distance": "~2,5–3,5 km, plano (salvo la loma del templo)",
     "start": "Estación Akihabara, salida Electric Town (電気街口, JR)",
     "getThere": "Desde Nakano: JR Chuo-Sobu (trenes amarillos) directo, ~21–26 min, sin transbordo",
     "end": "Arcades junto a la estación (Taito hasta 23:30) + Yodobashi (hasta 22:00)",
     "cost": "Casi todo es entrada gratis (Radio Kaikan, Mandarake, Super Potato, Gachapon Kaikan, arcades): solo pagás gachapon ~¥300-500 la tirada y arcades ~¥100 por partida. El maid cafe @home en el Donki sale ¥1,500 (bebida+polaroid) o entrada ~¥770+bebida; Cure Maid Cafe no cobra cubierto (comida desde ¥1,000, bebida desde ¥600). Kanda Myojin es gratis. Llegás de Nakano en JR Chuo-Sobu ~¥170 con Suica, no hace falta taxi. Presupuesto real para la pareja: ¥6,000-10,000 con comida y algunas comprillas.",
     "luggage": "Día de paseo normal desde Tokio: la valija grande queda guardada en el hotel AMANEK Kabukicho, salís con una mochilita y la Suica nomás (la valija recién se manda a Kioto el 21.9).",
     "meal": "Un maid cafe clásico en @home cafe del edificio Donki: ¥1,500 por persona con bebida + polaroid con una maid, la experiencia Akihabara pura. Si tenés hambre en serio, un curry u omurice dibujado sale ~¥1,200-1,800. Alternativa más tranqui: Cure Maid Cafe con torta+té ~¥1,600 por persona."
    },
    "stops": [
     { "time": "15:30", "name": "Radio Kaikan — torre de hobby de 10 pisos", "walk": "1 min de la salida Electric Town", "see": "~30 tiendas especializadas: Kotobukiya (figuras), Volks (muñecas, p7), K-Books, Kaiyodo, cartas, gunpla. Abierto ~10:00–20:00.", "why": "Lleva el nombre de las raíces del mercado de repuestos de radio de Akiba — el edificio resume la evolución de bazar eléctrico a meca otaku.", "tip": "Ascensor al último piso y bajás. La tienda oficial de gashapon de Bandai está pegada a nivel de calle.", "map": "35.6985,139.7716" },
     { "time": "16:00", "name": "Cure Maid Café — el primer maid café (el elegante)", "walk": "2 min, edificio Onoden p6", "see": "Té y torta en un ambiente de salón victoriano tranquilo. Abierto 11:00–20:00.", "why": "Abrió en 2001 — el primero de Japón, cuna de todo el fenómeno. A diferencia de los ruidosos: sin límite de tiempo, sin rituales de aliento. Relajado y de pareja.", "tip": "⚠️ Cierra 20:00 — es parada de día, no de noche. Fotos de las maids en general prohibidas (preguntá).", "map": "35.6991,139.7724" },
     { "time": "16:45", "name": "@home café (edificio Don Quijote) — el maid café 'moe'", "walk": "4 min subiendo por Chuo-dori", "see": "La experiencia completa: 'okaerinasaimase goshujin-sama', omurice con dibujo de ketchup, cantitos 'moe moe kyun'. ~¥1.500–3.000 por persona por hora. Arriba (p8): teatro AKB48 (reabrió dic 2024).", "why": "El maid café más famoso y amable con extranjeros, dentro de Don Quijote — sobrecarga sensorial akibense en estado puro.", "tip": "Efectivo. Prohibido fotografiar maids (hay Polaroid paga). Donki abre hasta tarde para una vuelta de souvenirs libre de impuestos.", "map": "35.7001,139.7715" },
     { "time": "17:00", "name": "Mandarake Complex — catedral de usado, 8 pisos", "walk": "3 min al norte", "see": "8 pisos temáticos — manga vintage, cels, juguetes retro, doujinshi, y figuras de colección en los pisos altos. Abierto 12:00–20:00.", "why": "La cadena de usado más grande de Japón; el buque insignia de Akiba es una peregrinación de coleccionistas — cels raros, manga agotado, figuras vintage carísimas.", "tip": "El efectivo agiliza. Ascensor arriba, hojear bajando. Compará precios de figuras con Surugaya.", "map": "35.7016,139.7714" },
     { "time": "17:35", "name": "Kanda Myojin — el templo tecno/anime (joya, cuesta arriba)", "walk": "5–7 min cuesta arriba al noroeste", "see": "Santuario shinto de 1.300 años. El famoso amuleto de protección para IT/ciber (con forma de CPU). Estanterías de ema de Love Live!.", "why": "El santuario patrono de las empresas tech y los fans de Akiba — las firmas de IT vienen a bendecir servidores nuevos. Sitio de peregrinación anime (Love Live!).", "tip": "Entrada gratis; amuletos ~¥500–1.000, efectivo. Vení más temprano en la ventana — el mostrador de amuletos cierra a la tarde. El desvío corto vale mucho.", "map": "35.7018,139.7676" },
     { "time": "18:05", "name": "Gachapon Kaikan — 500 máquinas de cápsulas, pared a pared", "walk": "8 min bajando + al este", "see": "~500 máquinas del piso al techo. ¥300–500 por cápsula. ⚠️ ¡El domingo cierra 19:00!", "why": "Abrió en 2002 — una institución querida y caótica de la fiebre del gachapon. Es puro ichi-go ichi-e: no sabés qué sale, y el momento de sorpresa es único.", "tip": "Solo efectivo y monedas (hay máquina de cambio). Es tu 'hay que hacerlo antes de que cierre a las 19:00'.", "map": "35.7009,139.7719" },
     { "time": "18:30", "name": "Super Potato — el templo del retro-gaming (el legendario)", "walk": "5 min al oeste", "see": "p3 = 'salón de la fama' (Famicom, Super Famicom, PC Engine, Sega); p4 = ítems en caja; p5 = arcade retro + golosinas. Abierto 11:00–20:00.", "why": "La tienda de retro-gaming más famosa del mundo — un templo nostálgico; el arcade del p5 es sitio de peregrinación.", "tip": "Efectivo muy preferido. Prioricen p3 y después el arcade p5. Los precios son de coleccionista — es medio museo.", "map": "35.6992,139.7719" },
     { "time": "19:00", "name": "Cena en Akihabara", "walk": "5 min hacia la estación", "see": "Curry japonés clásico, ramen (Kikanbo, miso picante), o restaurantes en el piso 8 de Yodobashi.", "why": "Después de que las tiendas cierran a las 20:00 — una comida antes de la ronda de arcades.", "tip": "Si querés un café temático de noche — reservá con anticipación.", "map": "35.6985,139.7745" },
     { "time": "20:00", "name": "Taito Station — torre de arcade", "walk": "Al lado de la estación", "see": "Pisos de UFO catchers (garras), juegos de ritmo (taiko/maimai/Chunithm), puri-kura (fotos-sticker) y gabinetes retro. Abierto hasta 23:30.", "why": "Los arcades en Japón están vivísimos a diferencia de Occidente — las garras y los juegos de ritmo son pasatiempo nacional. Experiencia de pareja perfecta: garra compartida, batalla de ritmo, puri-kura.", "tip": "Garras y gabinetes viejos = monedas (llevá ¥100). Pedile al personal ayuda para ubicar el premio ('assist' es normal).", "map": "35.6994,139.7715" },
     { "time": "21:00", "name": "GiGO / Silk Hat / Animate — más arcade y merch", "walk": "Minutos junto a Chuo-dori", "see": "Arcades activos (GiGO p3/p5, y 'Silk Hat' en el ex edificio rojo). Animate (reabrió ago 2026) para merch de anime.", "why": "Última vuelta por los pisos de juegos iluminados. El mítico edificio rojo de SEGA pasó a ser Silk Hat — los arcades viven, solo con marca nueva.", "tip": "El puri-kura a veces limita a hombres solos — como pareja están bien. Yodobashi abre hasta 22:00 para la última compra libre de impuestos.", "map": "35.6996,139.7719" }
    ],
    "special": [
     "⛩️ Kanda Myojin — el amuleto de protección de IT con forma de CPU: el souvenir perfecto de Akiba. Shinto se cruza con silicio, y es sitio de peregrinación de Love Live!.",
     "🕹️ Super Potato p5 — arcade retro jugable, un verdadero templo de nostalgia gamer.",
     "⚠️ Cierres del domingo: Gachapon Kaikan cierra 19:00 y Cure Maid Café 20:00 — háganlos antes, arcades después.",
     "❌ Ya no existen: Gundam Café (cerró 2022, hoy Tamashii Nations) y Toranoana. El GiGO rojo = hoy 'Silk Hat'; Beep se mudó a SEEKBASE bajo las vías.",
     "💴 Efectivo y monedas para UFO catchers, gachapon y tiendas viejas. Mostradores libres de impuestos en Yodobashi/Donki/Animate desde ¥5.000 — llevá pasaporte."
    ]
   },
   {
    "id": "harajuku-shibuya",
    "date": "2026-09-21",
    "city": "Tokyo",
    "area": "Ramen, Harajuku y Shibuya",
    "emoji": "🍜",
    "title": "Taller de ramen ✓, Meiji Jingu y Harajuku hasta Shibuya",
    "subtitle": "✓ Taller de ramen 09:00–13:00, y después caminata continua a Shibuya",
    "intro": "La mañana está reservada para el taller de ramen que reservaron — Baba Ramen Cooking School en Minami-Aoyama, 09:00–13:00, 4 horas con las manos en la masa, y el ramen que hagan se lo comen ustedes (es el almuerzo). La escuela está pegada a Omotesando, así que la tarde fluye directo a la caminata: Omotesando → Harajuku → Meiji Jingu → Cat Street → Shibuya. ⚠️ Por el taller, Meiji Jingu pasa a la tarde — el 21.9 es feriado (Silver Week) y al mediodía hay gente, pero el bosque enorme absorbe la multitud; déjense llevar.",
    "meta": {
     "duration": "~9 horas (taller 4h + caminata)",
     "distance": "~2,5–3 km a pie a la tarde (continuo)",
     "start": "✓ Baba Ramen Cooking School · Minami-Aoyama 3-2-7 (junto a la estación Omotesando)",
     "getThere": "Desde el hotel en Kabukicho: JR Yamanote hasta Harajuku + ~12 min a pie, o metro hasta Omotesando (salidas A4/A5, ~5 min). Lleguen ~08:45 al taller de las 09:00.",
     "end": "Miyashita Park / Shibuya — compras y cena, y después Ni-chome",
     "cost": "✓ Taller de ramen ¥46.000 la pareja (pagado · reserva 14166 · el ramen = almuerzo) · Meiji Jingu gratis · Gyoen ¥500 · Nezu opcional ~¥1.400 · transporte IC ~¥170",
     "luggage": "Última mañana en Tokio — antes del taller (~08:00) dejen la valija grande en recepción del AMANEK para el envío takkyubin al Candeo de Kioto (llega antes del check-in del 25.9). Todo el día con una mochila chica.",
     "meal": "El ramen que hagan en el taller es el almuerzo (~13:00, incluido en los ¥46.000). Un crepe liviano en Takeshita si les provoca (~¥600), y cena en Shibuya (~¥2.500–4.000 por persona)."
    },
    "stops": [
     { "time": "09:00", "name": "✓ Taller de ramen — Baba Ramen Cooking School (馬場)", "walk": "Minami-Aoyama 3-2-7 · ~5 min de la estación Omotesando", "see": "Taller de ramen a mano de 4 horas con chefs — fideos, caldo y toppings, y se comen el bowl que hicieron. ¥46.000 la pareja (2), reserva 14166. También es el almuerzo.", "why": "No solo comer ramen — entenderlo: el kaeshi, el tare, la capa de grasa. Una experiencia anime-culinaria perfecta para la pareja.", "tip": "Vengan con hambre y a tiempo (~08:45). Dan delantales. Al terminar ya están en Omotesando — la caminata arranca desde acá.", "map": "35.6668,139.7150" },
     { "time": "13:15", "name": "Omotesando (表参道) — la avenida de diseño", "walk": "Pegado a la escuela", "see": "Avenida de zelkovas — los 'Campos Elíseos de Tokio'. Arquitectura insignia: Omotesando Hills (Tadao Ando), Dior (SANAA), Tod's (Toyo Ito), y en Aoyama Prada y Miu Miu (Herzog & de Meuron). La nueva Grid Tower (2026).", "why": "Una de las concentraciones más densas del mundo de tiendas insignia de laureados del Pritzker, sobre una sola avenida — y salen a ella directo del taller.", "tip": "La escuela está en Minami-Aoyama, así que Prada/Miu Miu quedan pegados — empiecen por ahí y suban la avenida al norte.", "map": "35.6668,139.7107" },
     { "time": "13:35", "name": "(opción) Museo Nezu (根津美術館)", "walk": "5 min de la escuela/Omotesando", "see": "Arte japonés y de Asia oriental en un edificio de Kengo Kuma + un jardín tradicional sereno y café. ~¥1.300–1.400.", "why": "Hogar del biombo 'Lirios' de Ogata Korin (tesoro nacional, exhibido por temporada) y un jardín que se siente a un millón de kilómetros — una pausa tranquila después del taller.", "tip": "Abierto el 21.9 (regla del lunes feriado; cierra en cambio el martes). Saltealo si preferís más tiempo en Harajuku.", "map": "35.6626,139.7169" },
     { "time": "14:05", "name": "Takeshita-dori (竹下通り) — la calle kawaii", "walk": "~12 min al norte subiendo Omotesando", "see": "~400 m de moda kawaii/Lolita, thrift, Daiso, puri-kura; crepes en Marion (la primera creperie de Japón, 1976) y Angel's Heart; algodón de azúcar arcoíris en Totti Candy Factory.", "why": "Cuna de la cultura kawaii y Lolita de Tokio — de los bailarines callejeros de los 70 a las olas Gothic-Lolita y decora que hicieron de 'Harajuku' una palabra mundial.", "tip": "Entrá por el lado JR Harajuku. En feriado hay gente — pero solo la cruzan rumbo al santuario. Un crepe liviano en el camino.", "map": "35.6716,139.7050" },
     { "time": "14:30", "name": "Meiji Jingu (明治神宮) — el bosque sagrado", "walk": "5 min de Takeshita al torii", "see": "El gran torii (ciprés de ~1.500 años); un bosque de ~100.000 árboles donados desde 1920; la pared de barriles de sake frente a los de vino francés; Temizuya, el salón principal, y las tablillas ema. Gratis. Jardín interior (Gyoen) ¥500 opcional.", "why": "Un bosque sagrado del siglo XX diseñado para parecer antiguo — santuario al emperador Meiji (que llevó a Japón a la era moderna) y a la emperatriz Shoken. El más visitado de Japón en Año Nuevo.", "tip": "A la tarde en feriado hay más gente, pero las 70 hectáreas de bosque la absorben. Temizuya: izquierda, derecha, boca, mango. En el santuario: reverencia-reverencia, palmada-palmada, reverencia.", "map": "35.6764,139.6993" },
     { "time": "15:45", "name": "Cat Street / Ura-Harajuku (キャットストリート)", "walk": "De Harajuku al sur, cruzando Meiji-dori", "see": "Callejón sinuoso sobre el viejo río Shibuya (entubado) — streetwear, zapatillas, vintage, cafés indie y diseño.", "why": "Cuna del streetwear japonés (la escena Ura-Hara / BAPE de los 90). El atajo local a pie de Harajuku a Shibuya (~10–15 min), tranquilo y fresco frente a las calles principales.", "tip": "Te lleva directo a Shibuya/Miyashita Park. La luz de la tarde es la mejor para fotos.", "map": "35.6660,139.7040" },
     { "time": "16:30", "name": "Shibuya — Miyashita Park y alrededores", "walk": "Al final de Cat Street", "see": "RAYARD Miyashita Park — parque en la terraza (césped, skate, escalada), ~90 tiendas (LV men's, Gucci, Balenciaga), y en planta baja Shibuya Yokocho. Tiendas 11:00–21:00.", "why": "Símbolo de la renovación de Shibuya — parque sobre compras sobre vida nocturna. La ventana de la tarde es perfecta para aflojar: vista desde la terraza, compras y cena temprana antes de Ni-chome.", "tip": "Cerrá acá para comer y comprar mientras la multitud y el neón suben. El cruce Scramble está ~5–8 min al sur si lo querés al atardecer.", "map": "35.6626,139.7017" }
    ],
    "special": [
     "🍜 El taller de ramen (✓ reservado, ¥46.000, reserva 14166) es el ancla del día — 09:00–13:00, y el ramen que hagan es el almuerzo.",
     "🍶 La pared de barriles de sake frente a los de vino francés en Meiji Jingu — símbolo de la apertura de Japón a Occidente en tiempos del emperador Meiji.",
     "🐈 Cat Street — el atajo local a pie entre Harajuku y Shibuya, tranquilo y fresco, cuna del streetwear japonés.",
     "🏛️ Tour de arquitectura en Omotesando: Ando, SANAA, Toyo Ito y Herzog & de Meuron (Prada/Miu Miu en Aoyama — justo al lado de la escuela).",
     "🎌 21.9 = Día del Respeto a los Mayores, dentro del Silver Week — Meiji Jingu ahora a la tarde (con gente, pero el bosque la absorbe); déjense llevar."
    ]
   },
   {
    "id": "hakone",
    "date": "2026-09-22",
    "city": "Hakone",
    "area": "Hakone",
    "emoji": "♨️",
    "title": "Hakone — circuito de montaña, lago Ashi, santuario y Tenzan Onsen",
    "subtitle": "Tren de montaña · volcán · barco · santuario · onsen y ryokan · 10:15–20:00+",
    "intro": "El clásico circuito de Hakone, todo sobre el Hakone Free Pass: tren de montaña, funicular y teleférico hasta el valle volcánico de Owakudani, un crucero 'barco pirata' por el lago Ashi, el santuario de Hakone con su torii rojo sobre el agua, y un cierre perfecto en Tenzan Onsen — rotenburo entre la vegetación y las montañas. Después, check-in en Yaeikan (2 min de la estación), kaiseki y onsen privado. ⚠️ El 22.9 es feriado (Silver Week) — multitud pico y demoras de bus a la tarde; hagan el teleférico temprano (cierra ~17:00).",
    "meta": {
     "duration": "Día completo (~10:15–20:00+)",
     "distance": "Circuito en anillo: tren+funicular+teleférico+barco+bus (todo en el Free Pass)",
     "start": "Estación Hakone-Yumoto — el Romancecar llega 10:15; dejan el bolso de una noche en Yaeikan (2 min a pie)",
     "getThere": "Romancecar 9:00→10:15 (✓ reservado, asiento 6D, +¥1.200 sobre el pase). Hakone Free Pass (2 días, ¥7.100) cubre tren/funicular/teleférico/barco/bus",
     "end": "Check-in en Yaeikan antes de las 19:00 → kaiseki → onsen privado (kashikiri)",
     "cost": "Free Pass ¥7.100 (2 días, ya cubre el circuito) · Tenzan Onsen ¥1.450 por persona (efectivo, no en el pase) · huevo negro ¥500/5 · almuerzo ~¥1.200 · taxi Tenzan→Yaeikan ~¥1.000–1.500",
     "luggage": "La valija principal ya va camino a Kioto (despachada el 21.9) — salen solo con el bolso de una noche. Lo dejan en Yaeikan al llegar (2 min de la estación) y recorren con una mochila chica.",
     "meal": "Almuerzo: 'curry del volcán' en Owakudani Kitchen (P2 de la estación del teleférico, ~09:00–16:30, ~¥1.200) + huevo negro. Cena: kaiseki de estación en Yaeikan (incluido, ~18:00)."
    },
    "stops": [
     { "time": "10:15", "name": "Llegada a Hakone-Yumoto + dejar el bolso en Yaeikan", "walk": "Yaeikan ~2 min a pie de la estación", "see": "Bajan del Romancecar, dejan el bolso de una noche en Yaeikan (no tiene sentido cargarlo todo el día) y salen al circuito con una mochila.", "why": "Yaeikan está pegado a la estación — un lujito que evita arrastrar el bolso por todos los trenes y teleféricos.", "tip": "Confirmá en recepción un horario para el private onsen (kashikiri) ya ahora, y que el check-in esté disponible a la tarde.", "map": "35.2325,139.1050" },
     { "time": "10:30", "name": "Tren Tozan → Gora → funicular → teleférico a Owakudani", "walk": "3 transbordos en estaciones (Gora, Sounzan)", "see": "Tren de montaña con 3 switchbacks a Gora (~40 min), funicular a Sounzan (~10 min), y teleférico aéreo sobre el valle volcánico a Owakudani (~8 min). Todo en el Free Pass.", "why": "La parte linda del traslado — vistas del valle y azufre desde el aire. El teleférico opera en septiembre ~09:00–17:00, por eso se hace a la mañana.", "tip": "Sentate a la derecha en el tren para la vista. Chequeá a la mañana el estado del teleférico (viento/gas volcánico) en HakoneNavi.", "map": "35.2470,139.0490" },
     { "time": "11:45", "name": "Owakudani (大涌谷) — el valle volcánico activo", "walk": "En la estación del teleférico", "see": "Valle volcánico humeante y sulfuroso, miradores, y en día claro — el Fuji. El famoso huevo negro (kuro-tamago) ¥500 los 5. Almuerzo en Owakudani Kitchen (P2, ~09:00–16:30, curry del volcán ~¥1.200).", "why": "'El valle del infierno' — vapores de azufre y arroyos hirvientes. Leyenda: cada huevo negro suma 7 años de vida.", "tip": "Comé el huevo caliente en el lugar. Parada de ~1 hora. Chequeá el nivel de gas — a veces cierran el sendero natural.", "map": "35.2445,139.0195" },
     { "time": "12:50", "name": "Teleférico Owakudani → Togendai (lago Ashi)", "walk": "En la estación del teleférico", "see": "Se sigue en teleférico hasta Togendai, sobre el lago Ashi (~17 min). De este lado, vistas del lago y del Fuji con buen tiempo.", "why": "Se baja sobre el bosque hacia el lago — un lindo paso del volcán al agua.", "tip": "En el Free Pass. Chequeá el horario del barco pirata en Togendai (~cada 25–40 min, último ~17:00).", "map": "35.2245,138.9985" },
     { "time": "13:15", "name": "🚢 Crucero 'barco pirata' por el lago Ashi", "walk": "Puerto de Togendai", "see": "Barco de turismo colorido de Togendai a Moto-Hakone-ko (~25–35 min). Vistas del lago, el bosque y las montañas; con día claro también el Fuji y el torii rojo desde el agua.", "why": "El crucero clásico de Hakone — en el Free Pass, relajado y fotogénico.", "tip": "Parate en la cubierta exterior para fotografiar el torii desde el agua. Sale cada ~25–40 min.", "map": "35.1930,139.0245" },
     { "time": "14:00", "name": "Santuario Hakone + el torii rojo sobre el agua (箱根神社)", "walk": "~10 min del puerto", "see": "Del puerto de Moto-Hakone ~10 min a pie al santuario (gratis), y al torii 'Heiwa no Torii' que se alza dentro del lago. ⚠️ ¡La cola para la foto en la puerta puede ser de 1–3 horas en feriado!", "why": "Algo japonés tradicional y no solo paisaje — un santuario en el bosque con la famosa puerta roja sobre el agua.", "tip": "En Silver Week — saltá la cola de la foto o dispará desde el costado; disfrutá el santuario y la orilla. Salgan para las ~15:00 por el bus.", "map": "35.2005,139.0250" },
     { "time": "15:00", "name": "Bus H de vuelta a Hakone-Yumoto", "walk": "Parada de Moto-Hakone", "see": "Bus Tozan línea H de Moto-Hakone a Hakone-Yumoto (~35 min normal). En el Free Pass.", "why": "Cierra el circuito de vuelta al pueblo termal, rumbo a Tenzan.", "tip": "⚠️ El sitio oficial advierte: en feriado el tráfico demora los buses a la tarde 30–60 min+. Dejá margen frente al corte de la cena (19:00).", "map": "35.2325,139.1050" },
     { "time": "16:00", "name": "♨️ Tenzan Onsen (天山湯治郷)", "walk": "Desde Yumoto: taxi ~¥1.000–1.300, shuttle ~¥100, o bus", "see": "Un balneario-onsen en Oku-Yumoto: 4 rotenburo entre bosque y arroyo, baños interiores y salas de vapor. ¥1.450 por persona (efectivo), 09:00–23:00.", "why": "Una hora o hora y media de baño caliente al desnudo en la naturaleza tras un día de caminata — el lugar que más vale meter acá.", "tip": "⚠️ Tatuajes: Tenzan es tattoo-friendly, ¡pero solo una persona tatuada por grupo! Si los dos tienen tatuaje — los rechazan. Baños separados por género; hay salas de baño privadas (Hanare-gumo) con costo.", "map": "35.2255,139.0855" },
     { "time": "17:20", "name": "Taxi a Yaeikan + check-in", "walk": "Taxi ~¥1.000–1.500, unos minutos", "see": "De Tenzan, un taxi corto a Yaeikan. Check-in (disponible desde las 15:00), reciben la yukata y se relajan en la habitación.", "why": "Llegan relajados y calentitos — listos para la noche del ryokan.", "tip": "⚠️ Hay que estar registrados antes de las 19:00 — quien llega después puede perder la cena. Confirmá el horario del onsen privado que reservaron a la mañana.", "map": "35.2325,139.1050" },
     { "time": "18:00", "name": "🍽️ Cena kaiseki en Yaeikan", "walk": "En el ryokan", "see": "Kaiseki de estación de varios platos (incluido en el alojamiento), ~18:00–19:30. Verduras de montaña, pescado y platos de otoño.", "why": "Un festín tranquilo en el ryokan — el plato fuerte de la noche.", "tip": "Después de la cena se quedan en el hotel y no salen de nuevo.", "map": "35.2325,139.1050" },
     { "time": "20:00", "name": "♨️ Onsen privado en Yaeikan (kashikiri)", "walk": "En el ryokan", "see": "Baño privado de pareja en el horario que reservaron al check-in, y los baños del hotel. Un cierre perfecto para el día.", "why": "Un momento íntimo sin gente — lo que reservaron con anticipación en recepción.", "tip": "La reserva se hace al llegar — por eso pedimos el horario ya a la mañana. Tomen agua, no se recalienten.", "map": "35.2325,139.1050" }
    ],
    "special": [
     "🩹 Tatuajes en Tenzan: tattoo-friendly pero solo una persona tatuada por grupo — si los dos tienen, los rechazan (aunque entren separados). Cubran el tatuaje fuera del agua.",
     "⚠️ La cola del torii sobre el agua en el santuario Hakone puede ser de 1–3 horas en Silver Week — saltá la cola o fotografiá desde el costado.",
     "🕖 Corte de cena: hay que hacer check-in en Yaeikan antes de las 19:00 o pierden el kaiseki. Planeen hacia atrás desde Tenzan.",
     "🚌 Demoras de bus: en feriado el tráfico se satura y el bus H llega tarde a la tarde — dejá margen, o salgan del santuario para las 15:00.",
     "🎫 El Free Pass (¥7.100) cubre todo el circuito (tren/funicular/teleférico/barco/bus) — Tenzan (¥1.450) y los taxis aparte, en efectivo.",
     "🌋 Chequeá a la mañana el estado del teleférico de Owakudani (viento/gas volcánico) — a veces cierra o lo reemplazan por bus."
    ]
   },
   {
    "id": "magome",
    "date": "2026-09-23",
    "city": "Magome",
    "emoji": "🎂",
    "area": "Magome-juku",
    "title": "Magome-juku — pueblo de Edo en la ladera (el cumpleaños)",
    "subtitle": "Subida por la calle empedrada · posta 43 de 69 del Nakasendo · tarde+noche",
    "intro": "Un pueblo-posta restaurado del período Edo, único por estar construido sobre una ladera empinada — una calle empedrada que trepa la colina entre posadas de madera, ruedas de agua y vistas al monte Ena. Es la ciudad natal del novelista Shimazaki Toson. La magia grande: ustedes duermen acá, así que al anochecer, cuando se van los excursionistas del día, el pueblo se vacía y queda para ustedes — faroles prendidos y la rueda de agua girando. La cena de cumpleaños en la villa.",
    "meta": {
     "duration": "~2–3 horas + noche",
     "distance": "~600–800 m de subida empinada, empedrado",
     "start": "La puerta baja de la calle — la gran rueda de agua (masugata)",
     "getThere": "Desde Hakone: tren a Nakatsugawa y después bus a Magome (la valija principal ya está en Kioto)",
     "end": "Villa Yanagiya (sin comidas) + paseo al anochecer por la calle vacía",
     "cost": "Entrada museo Toson ¥500 por persona; colectivo Nakatsugawa→Magome ¥540 por persona por tramo (efectivo, pagás al bajar); comida callejera ¥1.500-2.500 por persona; no hace falta taxi.",
     "luggage": "La valija grande ya espera en Candeo Kyoto; hoy cargás solo el bolsito de noche desde Hakone. El servicio de forwarding Magome→Tsumago (¥1.000) es recién mañana (24.9).",
     "meal": "Cumple: gohei-mochi a la parrilla en la calle principal (~¥350 el palito) + kuri-kinton (dulce de castañas, justo en temporada en septiembre) y soba de castañas arriba ~¥1.000; comprá una botella de sake local en la brewery para festejar en la villa (Yanagiya sin comidas, los negocios cierran temprano ~17:00)."
    },
    "stops": [
     { "time": "14:00", "name": "La puerta baja + la gran rueda de agua (masugata)", "walk": "Inicio de la calle, abajo", "see": "La entrada empedrada; una rueda de agua de madera gigante girando, y un giro en ángulo recto (masugata). Una casita de descanso con irori y té verde.", "why": "La rueda es el símbolo de Magome — y no es solo decoración: mueve un mini-generador que alimenta los faroles de la calle. El masugata es diseño defensivo de Edo.", "tip": "La foto postal de Magome. La calle sin autos ~10:00–16:00 — lo más limpio para fotos.", "map": "35.5255,137.5672" },
     { "time": "14:20", "name": "Puestos de gohei-mochi y oyaki", "walk": "Subida suave", "see": "Tortas de arroz aplanadas en palito con salsa de nuez-miso, asadas al carbón (gohei-mochi) — el plato insignia de Kiso. También oyaki (empanaditas horneadas).", "why": "El gohei-mochi es el 'hay que probar' del Nakasendo — comerlo caliente de las brasas en la cuesta es el momento clásico.", "tip": "Comelo ya, calentito — el miso se endurece al enfriarse. Efectivo.", "map": "35.5262,137.5676" },
     { "time": "14:40", "name": "Tiendas de sake y ex cervecería — compras para el cumpleaños", "walk": "Mitad de la cuesta", "see": "Tiendas de sake local (Kiso/Nakatsugawa) y un edificio de destilería restaurado. Uno de los edificios aparece en la novela 'Antes del amanecer' de Toson.", "why": "Las destilerías de Kiso hacían un sake fuerte y profundo para revivir a los viajeros cansados del camino.", "tip": "¡Comprá acá una botella de sake local para el festejo en la villa — a la tarde! No hay konbini en el pueblo y las tiendas cierran ~17:00.", "map": "35.5264,137.5678" },
     { "time": "15:00", "name": "Museo Toson / Fujimura Kinenkan (en el sitio del honjin)", "walk": "Mitad de la calle", "see": "Museo en el sitio del honjin de la familia Shimazaki, donde nació Toson — manuscritos, primeras ediciones, objetos. ~¥500, 9:00–17:00.", "why": "El ancla cultural del pueblo: historia (la posada oficial de los daimyo) y literatura (la casa del escritor) en un solo lugar.", "tip": "Un punto medio cómodo para un descanso cultural. (El cierre de los miércoles es solo en invierno — el 23.9 debería estar abierto.)", "map": "35.5266,137.5680" },
     { "time": "15:30", "name": "Waki-honjin y el tablón de edictos (kosatsuba)", "walk": "Un poco más arriba", "see": "Museo del waki-honjin (la posada secundaria, mobiliario Edo e irori, ~¥300) y el tablón de anuncios restaurado con los edictos del shogun (incluida la prohibición del cristianismo).", "why": "El waki-honjin era la posada de reserva para los daimyo; el tablón muestra cómo el shogunato comunicaba la ley a los viajeros.", "tip": "Rápido y barato — 10–15 min de historia extra.", "map": "35.5267,137.5681" },
     { "time": "15:50", "name": "Sobas y dulces de castaña (extremo alto)", "walk": "Hacia la cima", "see": "Restaurantes de soba (trigo sarraceno, molido a piedra) y dulces de castaña — kurikinton y arroz con castañas. Keiseian es solo mediodía y se agota temprano.", "why": "Fin de septiembre = inicio de la temporada de castañas, y el kurikinton de Nakatsugawa está en su punto justo ahora — un pico de temporada.", "tip": "Para soba de verdad — llegá antes de las 13:00; si no, gohei-mochi y dulces de castaña para picar, y cena en la villa.", "map": "35.5269,137.5683" },
     { "time": "16:20", "name": "La puerta alta + mirador del monte Ena (Jinba-ue)", "walk": "Cima de la cuesta", "see": "La puerta alta (otro masugata) y un mirador con bancos — la mejor vista amplia del monte Ena (2.191 m) y del valle de Kiso. Altitud ~801 m. Gratis.", "why": "El nombre alude a un campamento de batalla de 1584; hoy es la recompensa panorámica de la subida y un lindo punto de atardecer.", "tip": "El lugar perfecto para festejar los 40 en la hora dorada — traé el sake y los vasos de la villa, mirando al sureste hacia el monte Ena.", "map": "35.5280,137.5680" },
     { "time": "16:45", "name": "Inicio del sendero Nakasendo (una probadita)", "walk": "Pasando el mirador", "see": "El sendero histórico sigue más allá del paso Magome-toge hacia Tsumago — los primeros cientos de metros ya dan bosque, escalones de piedra y silencio.", "why": "Es el verdadero camino de Edo — hasta una probadita corta te mete en el clima de los caminantes.", "tip": "No arranquen la caminata completa ahora — no hay luz en el sendero. Solo una probada y de vuelta. La caminata entera es mañana.", "map": "35.5285,137.5695" }
    ],
    "special": [
     "💧 Las ruedas de agua — la grande de abajo alimenta los faroles de la calle; las chicas giran a lo largo del canal cuesta arriba.",
     "🌄 El mirador del monte Ena arriba — la recompensa de la subida, perfecto para el atardecer y el brindis de cumpleaños.",
     "🌙 El vacío de la noche (su gran ventaja): los buses del día se van hacia las 14:00, las tiendas cierran ~17:00 y el pueblo se vacía. Como duermen acá — hagan una segunda caminata lenta por la calle vacía al anochecer.",
     "🌰 Temporada pico de castañas — kurikinton fresco, un manjar de estación de Kiso.",
     "🏪 ¡No hay konbini en el pueblo! Compren sake, snacks y dulces para el festejo en la villa a la tarde, antes de que cierren las tiendas."
    ]
   },
   {
    "id": "nakasendo",
    "date": "2026-09-24",
    "city": "Tsumago",
    "area": "Caminata Nakasendo",
    "emoji": "🥾",
    "title": "Caminata del Nakasendo — Magome → Tsumago",
    "subtitle": "~7,8 km, ~3 horas · el tramo mejor conservado del viejo camino · mañana",
    "intro": "El tramo más famoso y mejor conservado del Nakasendo de Edo: de Magome cuesta arriba al paso Magome-toge (801 m), y después una larga bajada por el bosque hasta Tsumago — un pueblo-posta preservado sin cables de electricidad a la vista. En el camino: una casa de té gratis de 250 años, cascadas, campanas anti-osos y mojones de distancia. Se despachan las valijas para caminar liviano.",
    "meta": {
     "duration": "~3 horas de caminata (4 con paradas)",
     "distance": "~7,8 km · una subida al paso, después bajada hasta Tsumago",
     "start": "Extremo alto de Magome — punto de despacho de valijas (08:30–11:30, ¥1.000/bolso)",
     "getThere": "Desde la villa en Magome, a pie hasta la punta de la calle",
     "end": "Bus Tsumago→Nagiso (¥300, ~7–10 min, último ~17:41)",
     "cost": "Casi gratis: el sendero no se paga, envío de valija Magome→Tsumago ¥1.000 por bolso, colectivo Tsumago→Nagiso ¥300 por persona. El té en la casa de té Tateba es gratis. No hace falta taxi.",
     "luggage": "La valija grande ya espera en el Candeo Kyoto desde el 21.9, así que llevás solo el bolsito de noche y lo despachás en el servicio de Magome (¥1.000, entrega 08:30-11:30, lo retirás en Tsumago 13:00-17:00); caminás solo con la mochila.",
     "meal": "Al bajar a Tsumago: Yoshimuraya, sobre la calle principal, soba hecho a mano y gohei-mochi grillado en miso-sesamo, ~¥1.000-1.400 por persona (cierra los jueves)."
    },
    "stops": [
     { "time": "08:45", "name": "Punta de Magome — despacho de valijas e inicio de la subida", "walk": "Punta de la calle, junto a Magome Chaya", "see": "Despachá las valijas en el mostrador junto al Museo Toson (08:30–11:30), agarrá un bastón prestado, cargá agua y comprá gohei-mochi para el camino.", "why": "El servicio de despacho de valijas (¥1.000/bolso, llega a Tsumago después de las 13:00) te deja caminar solo con una mochila chica.", "tip": "Despachá antes de ~11:00. Chequeá a la mañana en el centro de info si los museos están cerrados hoy (ver aviso).", "map": "35.5273,137.5686" },
     { "time": "09:00", "name": "La subida al paso Magome-toge (801 m)", "walk": "~2 km de subida moderada", "see": "La única subida del día. Arriba: una casa de té vieja junto a la ruta, bancos con vista al valle, y un monumento de piedra con un verso del poeta Masaoka Shiki. Máquina de bebidas y baños.", "why": "El punto más alto del recorrido; de acá en adelante todo es bajada hasta Tsumago.", "tip": "El primer buen descanso — café caliente de la máquina (~¥130), y a bajar.", "map": "35.5350,137.5820" },
     { "time": "09:45", "name": "Las campanas anti-osos (kuma-yoke)", "walk": "A lo largo del sendero", "see": "Campanas de metal en postes a lo largo del camino — tocá cada una. Hay osos (oso negro asiático) en los bosques.", "why": "El sonido avisa a los osos para que se alejen antes del encuentro. Una costumbre rural de montaña de siempre.", "tip": "No es peligroso — es parte de la gracia. También podés llevar una campana personal.", "map": "35.5420,137.5850" },
     { "time": "10:15", "name": "Casa de té Tateba (立場茶屋) — gratis", "walk": "~mitad del recorrido", "see": "Una casa de ~250 años que atienden voluntarios locales — té caliente gratis, un irori (hogar hundido) encendido, y aperos de campo antiguos. Abierta todo el año (salvo Año Nuevo).", "why": "Uno de los puntos altos — una pausa cálida, ahumada y auténtica a mitad de camino.", "tip": "El té es gratis — dejá una moneda en la caja de donaciones como agradecimiento.", "map": "35.5540,137.5880" },
     { "time": "11:15", "name": "Cascadas Medaki y Odaki (macho y hembra)", "walk": "Desvío corto del sendero", "see": "Un par de cascadas: Odaki (macho) alta y potente (~18 m), Medaki (hembra) suave y angosta. Un rincón boscoso y musgoso.", "why": "Vinculadas por leyenda a Miyamoto Musashi; un desvío corto que vale la pena.", "tip": "Los escalones pueden estar resbalosos después de lluvia.", "map": "35.5600,137.5900" },
     { "time": "11:40", "name": "Kabuto-Kannon, jizo y mojones (ichirizuka)", "walk": "A lo largo de la bajada", "see": "Un pequeño santuario Kannon (protege a los niños y el parto), y estatuas de jizo/kannon de piedra y mojones 'ichirizuka' — túmulos de distancia de Edo.", "why": "Los ichirizuka marcaban cada ~3,9 km a lo largo del camino — el GPS del período Edo.", "tip": "Buscá los mojones chiquitos al costado del sendero.", "map": "35.5680,137.5920" },
     { "time": "12:15", "name": "Llegada a Tsumago-juku (妻籠宿) — paseo por el pueblo", "walk": "Se baja a la calle principal", "see": "El pueblo-posta preservado: calle sin autos, y sin cables/antenas a la vista — los cables se ocultaron. Honjin y Waki-honjin Okuya (edificio de ciprés de 1877), tablón de edictos y buzón antiguo. Ticket combinado ~¥700.", "why": "Pionero de la preservación del patrimonio en Japón (desde 1968). La marca famosa: la ausencia de cables — mirá para arriba y notá lo que falta.", "tip": "⚠️ Los museos cierran el 2º y 4º jueves del mes — ¡el 24.9 es el 4º! Verificá a la mañana; la calle y las tiendas abren igual.", "map": "35.5766,137.5953" },
     { "time": "12:40", "name": "Almuerzo en Tsumago — soba / gohei-mochi", "walk": "En la calle principal", "see": "Soba de Kiso, gohei-mochi, trucha de río y verduras de montaña (sansai) en las casas de té. Retirá las valijas después de las 13:00 en el centro de info.", "why": "Los mismos platos del camino de Edo; el despacho de valijas llega acá a la tarde.", "tip": "Mandá una postal desde el buzón antiguo de Tsumago.", "map": "35.5766,137.5953" },
     { "time": "16:30", "name": "Bus a Nagiso + check-in", "walk": "Parada junto al centro de info", "see": "Bus Ontake Kotsu Tsumago→estación Nagiso, ¥300, ~7–10 min. Último ~17:41. (También se puede caminar ~3 km.)", "why": "Cierra el día de caminata y lleva al alojamiento en Nagiso (villa AKARI).", "tip": "Confirmá el horario exacto del bus en el cartel impreso del centro de info al retirar las valijas.", "map": "35.5983,137.6058" }
    ],
    "special": [
     "🍵 La casa de té Tateba gratis — irori encendido y té gratis (donación) a mitad de camino. Confirmado abierto en 2026.",
     "💦 Cascadas Medaki y Odaki — macho y hembra, un desvío corto que vale.",
     "🔔 Las campanas anti-osos — tocá cada poste; es una costumbre viva, no un gimmick.",
     "🔌 Tsumago sin cables — mirá para arriba: la ausencia de electricidad a la vista es toda la idea de la preservación.",
     "🧳 Despacho de valijas ¥1.000/bolso (08:30–11:30 en Magome → desde 13:00 en Tsumago) — caminás liviano con mochila.",
     "⚠️ 24.9 = 4º jueves del mes → los museos de Tsumago (Honjin/Waki-honjin) probablemente cerrados. Verificá a la mañana en el centro de info."
    ]
   },
   {
    "id": "gion-pontocho",
    "date": "2026-09-25",
    "city": "Kyoto",
    "area": "Gion y Pontocho",
    "emoji": "🏮",
    "title": "Gion y Pontocho — faroles, geiko y río al anochecer",
    "subtitle": "Primera noche en Kioto · 9 paradas · 18:00–21:00",
    "intro": "La primera noche en Kioto, cuando se prenden los faroles: la calle de casas de té de Gion, el santuario iluminado de Yasaka, el canal de Shirakawa (el más fotografiado), la orilla del río Kamo, y el angosto callejón de Pontocho con plataformas de comida sobre el agua. Es también la mejor hora para ver de reojo a una geiko o maiko yendo a una cita. Respeto absoluto: en las calles privadas no se entra ni se fotografía (multa hasta ¥10.000).",
    "meta": {
     "duration": "~3 horas (con cena)",
     "distance": "~2,5–3 km, plano",
     "start": "Desde Karasuma/Shijo — caminar al este por la calle Shijo hacia Gion",
     "getThere": "Desde el hotel junto a Karasuma: ~15–20 min a pie al este, o Hankyu una estación a Kawaramachi",
     "end": "Cena obanzai/wagyu en Pontocho, o plataforma sobre el río (yuka)",
     "cost": "Entrada gratis: el santuario Yasaka, Gion Shirakawa, el puente Tatsumi y la orilla del río Kamo son todos sin cargo, y todo el recorrido se hace caminando desde el hotel (sin taxi). El único gasto es la cena de obanzai/wagyu en Pontocho, más o menos ¥5.000–8.000 por persona (podés sentarte en la yuka sobre el río hasta fin de septiembre, suele haber un pequeño recargo). Cerveza/sake, otros ¥700–900 la copa.",
     "luggage": "La valija grande ya te espera en el Candeo Karasuma desde el envío (takkyubin), así que esta noche queda guardada en el hotel: salís a Gion y Pontocho solo con la mochilita y la tarjeta ICOCA.",
     "meal": "Cena de obanzai/wagyu en la yuka de Pontocho (por ejemplo Pontocho Izumoya, sobre la orilla, abierto hasta octubre): platitos de estación y wagyu frente al Kamo, más o menos ¥6.000–8.000 por persona. Conviene reservar porque la yuka se llena."
    },
    "stops": [
     { "time": "18:00", "name": "Hanamikoji-dori (花見小路)", "walk": "En el extremo este de Shijo", "see": "La calle empedrada icónica de Gion — casas de té (ochaya), machiya de madera y faroles colgantes. Doblá al sur desde la esquina de Shijo.", "why": "El corazón de Gion Kobu, el prestigioso barrio de geiko/maiko de Kioto — acá se hacen los banquetes privados (ozashiki). Al anochecer, cuando prenden los faroles, es el pico de atmósfera.", "tip": "⚠️ Los callejones privados de los costados están prohibidos a turistas (multa ¥10.000) y no se puede fotografiar geiko/maiko sin permiso. Quedate en la calle principal pública.", "map": "35.0030,135.7750" },
     { "time": "18:25", "name": "Santuario Yasaka (八坂神社)", "walk": "En el extremo este de Shijo", "see": "La puerta roja y el escenario de danza colgado de cientos de faroles de papel, cada uno con el nombre de un comercio local, encendidos de noche. Gratis, abierto 24 h.", "why": "El santuario guardián del barrio de Gion (origen del festival Gion Matsuri). Uno de los pocos lugares hermosos y permitidos de noche.", "tip": "La puerta oeste en lo alto de Shijo da una foto increíble calle abajo.", "map": "35.0036,135.7785" },
     { "time": "18:45", "name": "Gion Shirakawa / Shimbashi (祇園白川)", "walk": "Al norte, unos minutos", "see": "El canal de Shirakawa con sauces llorones y el empedrado de Shimbashi — faroles reflejados en el agua. Mucho más tranquilo que Hanamikoji.", "why": "Considerada la calle más hermosa de Kioto — distrito de preservación, la postal clásica de Gion.", "tip": "Vení después de que oscurece, iluminada y en silencio. Sigue siendo una calle de casas de té en actividad — hablá bajo, no fotografíes gente sin permiso.", "map": "35.0057,135.7758" },
     { "time": "19:00", "name": "Puente Tatsumi + santuario Tatsumi Daimyojin (巽橋)", "walk": "Dentro de Shirakawa", "see": "Un puentecito arqueado sobre el Shirakawa, y un santuario rojo diminuto al lado.", "why": "El puente apareció en 'Memorias de una geisha'; el santuario es querido por geiko y maiko, que rezan ahí para mejorar su arte.", "tip": "Uno de los rincones más fotografiados de Kioto — chico; sé considerado con los demás que sacan la misma foto.", "map": "35.0059,135.7752" },
     { "time": "19:15", "name": "Orilla del río Kamo (鴨川)", "walk": "Al oeste, hacia el río", "see": "El paseo de la orilla — parejas sentadas espaciadas a lo largo del río, frente a los fondos iluminados de Pontocho y las plataformas sobre el agua.", "why": "La escena kiotense clásica, gratis y abierta — agua, brisa y luces de la ciudad.", "tip": "Caminá al norte desde Shijo hacia Sanjo para alinearte con las plataformas (yuka) para la foto.", "map": "35.0040,135.7715" },
     { "time": "19:30", "name": "Pontocho (先斗町) + el santuario del tanuki", "walk": "Al callejón paralelo al río", "see": "Un callejón iluminado de ~2 m de ancho, de restaurantes y bares, entre Shijo y Sanjo. En temporada — plataformas de comida sobre el río (yuka).", "why": "Su propio barrio de geiko/maiko (desde ~1670). En un callejón lateral se esconde un santuario diminuto del tanuki, levantado tras el incendio de 1978 — el 'protector' del barrio.", "tip": "Las plataformas yuka están abiertas hasta el 15 de octubre — están en temporada. Reservá con anticipación una mesa junto al río el viernes.", "map": "35.0055,135.7708" },
     { "time": "19:45", "name": "Kiyamachi-dori (木屋町通)", "walk": "Una cuadra al oeste, junto al canal Takase", "see": "Una calle de comida y vida nocturna junto al canal, paralela a Pontocho — cerezos, bares e izakayas más casuales.", "why": "Un contrapunto más vivo y económico que Pontocho — bueno para un trago o un bocado.", "tip": "Se cruza desde Pontocho por cualquiera de los callejones conectores.", "map": "35.0050,135.7695" },
     { "time": "20:00", "name": "Cena — obanzai / wagyu / plataforma sobre el río", "walk": "En Pontocho/Kiyamachi", "see": "Platitos de estación (obanzai) en un machiya, wagyu, o kaiseki-río en una plataforma yuka sobre el Kamo.", "why": "El obanzai = cocina casera de Kioto — la mejor forma de 'probar mucho' la primera noche.", "tip": "Para una mesa yuka el viernes — reservá. Pedí específicamente asiento 'noryo-yuka / kawayuka'.", "map": "35.0055,135.7708" }
    ],
    "special": [
     "🚫 Reglas de Gion 2026: prohibido entrar a los callejones privados y fotografiar geiko/maiko sin permiso — multa hasta ¥10.000. No las persigas, toques ni bloquees. Quedate en las calles públicas.",
     "👘 Geiko vs maiko: la geiko es una artista consagrada (la palabra kiotense de 'geisha'); la maiko es una aprendiz joven — peinado elaborado, obi largo. Ambas están trabajando, no es un show.",
     "🌸 Shirakawa/Shimbashi de noche — la calle más hermosa de Kioto, tranquila e iluminada por faroles.",
     "🦝 El santuario oculto del tanuki en Pontocho — el mapache-perro que frenó el incendio de 1978.",
     "🍶 Las plataformas yuka sobre el río Kamo están abiertas hasta el 15/10 — están en temporada. O comés sobre ellas, o las fotografiás iluminadas desde la orilla."
    ]
   },
   {
    "id": "fushimi-inari",
    "date": "2026-09-26",
    "city": "Kyoto",
    "area": "Fushimi Inari",
    "emoji": "⛩️",
    "title": "Fushimi Inari — subida al amanecer entre mil torii",
    "subtitle": "Abierto 24 h, gratis · llegar ~06:45 antes de la multitud",
    "intro": "El santuario de los túneles de torii naranjas más famosos del mundo, abierto siempre y gratis — por eso el amanecer es ideal. Para las 09:00 los túneles son una fila que avanza a paso de tortuga; a las 06:45 están vacíos, con neblina y mágicos, y las fotos salen limpias. Inari es el dios del arroz y la prosperidad, y el zorro (kitsune) es su mensajero. Es una subida de verdad, casi toda escalones.",
    "meta": {
     "duration": "~1,5–3 horas (según hasta dónde)",
     "distance": "Hasta Yotsutsuji ~1,5 km / cima ~4 km, +233 m",
     "start": "Estación Inari (¡JR Nara Line local!) — frente a la puerta Romon",
     "getThere": "Desde Kioto: JR Nara Line local (¡solo el 'local' para en Inari!) 2 estaciones, ~5 min, ~¥150",
     "end": "Bajada ~08:30–09:00 al llegar la multitud; café Vermillion / inari-zushi",
     "cost": "Entrada gratis (el santuario está abierto 24/7), solo pagás el tren: JR Nara Line desde Kioto, 2 paradas ~5 min ~¥150 por tramo con la ICOCA; café/inari-zushi a la bajada ~¥800–1.500 por persona. Total del día ~¥1.200–2.000 por persona. No hace falta taxi.",
     "luggage": "La valija grande queda guardada en el Candeo Karasuma de Kioto; para la subida al amanecer salís solo con una mochilita, agua y la tarjeta ICOCA.",
     "meal": "A la bajada: inari-zushi clásico en Nezameya, sobre la calle de acceso junto a la estación Inari, un clásico bien auténtico – ~¥900–1.400 por persona; y si querés brunch con buen café, el Vermillion cafe está a unos minutos a pie (~¥1.200–1.800)."
    },
    "stops": [
     { "time": "06:45", "name": "Puerta Romon (楼門) + el salón principal", "walk": "2 min de la estación, frente a la entrada", "see": "Puerta-torre roja de dos pisos, flanqueada por dos zorros guardianes. Detrás, el salón principal (Honden).", "why": "Donada por Toyotomi Hideyoshi en 1589 (según la leyenda, en agradecimiento por la recuperación de su madre). El zorro de la derecha sostiene una llave — la del granero de arroz.", "tip": "Al amanecer está iluminada y totalmente vacía — foto simétrica y limpia. Los mostradores de amuletos aún cerrados; hacelos al bajar.", "map": "34.9671,135.7727" },
     { "time": "07:00", "name": "Senbon Torii (千本鳥居) — 'los mil torii'", "walk": "Un poco más arriba", "see": "El sendero se divide en dos hileras densas de torii naranjas que forman túneles brillantes.", "why": "Cada torii es la donación de un negocio que reza por prosperidad — el nombre y la fecha van tallados en negro en el dorso. ~10.000 gates cubren la montaña.", "tip": "Subí por la hilera derecha; mirá hacia atrás cuesta abajo — 'el túnel vacío' es la foto icónica del amanecer.", "map": "34.9678,135.7734" },
     { "time": "07:10", "name": "Okusha Hohaisho + piedras Omokaru (奥社)", "walk": "En lo alto de Senbon Torii", "see": "El salón de oración trasero, y detrás un par de piedras 'Omokaru' (liviano-pesado) sobre faroles de piedra.", "why": "La costumbre: pedí un deseo y levantá la piedra — si pesa menos de lo esperado, el deseo se cumple; si pesa más, hace falta más esfuerzo.", "tip": "Acá cuelgan los ema con cara de zorro (los dibujás vos). Moneda, deseo, levantar la piedra.", "map": "34.9682,135.7745" },
     { "time": "07:30", "name": "Cruce Yotsutsuji (四つ辻) — mirador", "walk": "~30–45 min de escalones desde la base", "see": "El cruce a mitad de la montaña, ~160 m — el primer mirador panorámico sobre el sur de Kioto, precioso con luz de amanecer y neblina.", "why": "La mayoría de los visitantes para acá. Desde aquí arranca el circuito de la cima, y la multitud se ralea muchísimo más arriba.", "tip": "Si andás corto de tiempo — este es el punto de retorno natural. Hay zona de descanso y casas de té (abren más tarde).", "map": "34.9688,135.7790" },
     { "time": "07:45", "name": "Circuito de la cima — Ichinomine (一ノ峰, 233 m) [opcional]", "walk": "Circuito ~45–60 min desde Yotsutsuji", "see": "Un circuito tranquilo por bosque de cedros y sub-santuarios hasta la cima (233 m). No hay vista de la ciudad desde la cumbre — el bosque la tapa; Yotsutsuji es la vista.", "why": "La montaña alta es serena y con pocos, una verdadera sensación de peregrinación aun al mediodía.", "tip": "Doblá a la derecha (sentido antihorario) en Yotsutsuji — el sentido acostumbrado y la subida más suave.", "map": "34.9700,135.7810" },
     { "time": "08:30", "name": "Bajada — café Vermillion / inari-zushi", "walk": "De vuelta a la base", "see": "Al bajar: el café Vermillion (de especialidad, sobre un estanque, abre ~08:00–08:30) e inari-zushi en los puestos de la entrada.", "why": "El inari-zushi (bolsitas de tofu frito rellenas de arroz) nació acá — el tofu frito es la comida favorita del zorro, mensajero de Inari.", "tip": "Bajá para las ~08:30–09:00 antes de la multitud. Llevate inari-zushi o kitsune-udon para cerrar.", "map": "34.9671,135.7727" }
    ],
    "special": [
     "🌅 Los túneles de torii vacíos al amanecer — la razón para venir temprano; casi imposible después.",
     "🪨 Las piedras Omokaru en Okusha — levantá: 'más liviana de lo esperado = el deseo se cumple'.",
     "🖊️ Las inscripciones en el dorso de los torii — nombres y fechas de donaciones; toda la montaña es un libro de rezos por prosperidad.",
     "🦊 El inari-zushi nació acá — el tofu frito es la comida del zorro (mensajero de Inari). Probalo en el lugar.",
     "🚃 Ojo: solo los trenes 'local' de la JR Nara Line paran en Inari — el rápido pasa sin detenerse."
    ]
   },
   {
    "id": "arashiyama",
    "date": "2026-09-26",
    "city": "Kyoto",
    "area": "Arashiyama",
    "emoji": "🎋",
    "title": "Arashiyama — el bosque de bambú, templos y río",
    "subtitle": "Media mañana–tarde · 10 paradas",
    "intro": "El distrito escénico del oeste de Kioto: el sendero de bambú imponente, un templo zen con un jardín de 700 años, el puente del 'cruce de la luna' frente a las montañas, un café al borde del río, un parque de monos con vista panorámica, y un 'bosque de kimonos' iluminado en la estación. El bosque de bambú es más lindo temprano — háganlo primero al llegar.",
    "meta": {
     "duration": "~5–7 horas",
     "distance": "~4–5 km, casi todo plano (salvo el parque de monos)",
     "start": "Estación Saga-Arashiyama (JR Sagano) — 8 min al bosque",
     "getThere": "Desde Fushimi Inari: JR a Kioto y después JR Sagano a Saga-Arashiyama, ~35 min",
     "end": "Kimono Forest en la estación Randen, salida en el tranvía retro al anochecer",
     "cost": "Entradas: Okochi Sanso ¥1000 (incluye matcha+dulce), jardín Tenryu-ji ¥500, Parque de Monos Iwatayama ¥800; el bosque de bambú y Nonomiya son gratis. Bote a remo ~¥1800/hora o rickshaw ~¥3000+ la pareja (opcional). Ida/vuelta con tarjeta IC (JR Sagano ~¥240 por tramo). Total entradas ~¥2300 por persona.",
     "luggage": "Día de paseo en Kioto: la valija grande queda guardada en el Candeo Karasuma, salís solo con una mochila chica + tarjeta IC (ICOCA/Suica).",
     "meal": "Almuerzo en Arashiyama Yoshimura, al lado del puente Togetsukyo — soba hecha a mano con vista al río, ~¥1500-2000 por persona (el nishin-soba ¥1540). No toman reserva, anotás tu nombre y esperás; cierran 17:00."
    },
    "stops": [
     { "time": "10:50", "name": "Bosque de bambú (竹林の小径)", "walk": "8 min de la estación", "see": "Sendero de ~500 m de bambú moso imponente que se arquea en un túnel verde. Gratis, 24 h. ~15–20 min.", "why": "El susurro del viento entre las cañas está registrado entre los '100 paisajes sonoros de Japón'. La luz filtrada por el dosel es la foto característica.", "tip": "¡Háganlo primero al llegar! El sábado se llena hacia la tarde. Fotografiá hacia arriba o sendero abajo.", "map": "35.0170,135.6717" },
     { "time": "11:15", "name": "Santuario Nonomiya (野宮神社)", "walk": "Sobre el sendero, dentro del bosque", "see": "Un santuario chico dentro del bosque, con un raro torii negro de madera sin descortezar. Gratis.", "why": "Un sitio antiguo — princesas imperiales se purificaban acá antes de servir en el santuario de Ise. Aparece en 'La historia de Genji'.", "tip": "Hoy es un punto de poder para el amor — frotá la piedra de la tortuga (kameishi) para un deseo.", "map": "35.0178,135.6740" },
     { "time": "11:30", "name": "Villa Okochi Sanso (大河内山荘)", "walk": "En el extremo oeste del sendero", "see": "El jardín-villa de una estrella del cine de samuráis de los años 30. ¥1.000 con matcha y un dulce. 9:00–17:00.", "why": "Un jardín de paseo tranquilo y bellamente compuesto, con miradores elevados sobre la quebrada y Kioto — muchísima menos gente que el bosque.", "tip": "Guardá el ticket de té que te dan al entrar — es el vale para el matcha en la casa de té al final.", "map": "35.0159,135.6700" },
     { "time": "12:30", "name": "Templo Tenryu-ji (天龍寺)", "walk": "De vuelta por el bosque", "see": "Templo zen de la UNESCO. Jardín Sogenchi (Muso Soseki, siglo XIV). Jardín ¥500. 8:30–17:00.", "why": "El primer jardín declarado 'Lugar de Belleza Escénica Especial' de Japón — una obra maestra de 'paisaje prestado' que enmarca las montañas de Arashiyama tras el estanque, sin cambios en ~700 años.", "tip": "La puerta norte sale directo al bosque de bambú — encaja perfecto entre ambos.", "map": "35.0158,135.6738" },
     { "time": "13:15", "name": "Almuerzo — Yoshimura (soba) o Yudofu", "walk": "Hacia el puente", "see": "Arashiyama Yoshimura — soba con vista panorámica al puente y al río (11:00–17:00, ~¥1.000–2.200). Alternativa: yudofu (olla de tofu), especialidad kiotense.", "why": "Los asientos junto a la ventana sobre el puente son la razón para venir — comida + vista icónica juntas.", "tip": "Hacé cola ~11:00 para mesa con ventana, o pasate al yudofu Sagano cercano si la cola es larga.", "map": "35.0148,135.6772" },
     { "time": "14:15", "name": "Puente Togetsukyo (渡月橋)", "walk": "Minutos", "see": "El puente del 'cruce de la luna' de ~155 m sobre el río Katsura, con la montaña boscosa de fondo. Gratis.", "why": "La vista más emblemática de Arashiyama — un emperador del siglo XIII dijo que la luna parecía 'cruzar' el puente.", "tip": "La mejor foto desde la orilla norte mirando al sur. También es el acceso a botes, rickshaws y el parque de monos.", "map": "35.0130,135.6775" },
     { "time": "14:30", "name": "☕ % Arabica sobre el río", "walk": "Río arriba desde el puente", "see": "El flagship de % Arabica justo al borde del río. 9:00–18:00. Café ~¥500–700.", "why": "Café kiotense minimalista con una ubicación de río imbatible frente al Hozu y el puente.", "tip": "Llevate un latte y tomalo en los escalones del río frente a los botes — uno de los mejores momentos de foto.", "map": "35.0136,135.6765" },
     { "time": "14:50", "name": "Bote a remo / rickshaw (opción)", "walk": "Orilla norte", "see": "Bote a remo propio (~¥1.000–1.800, ~30–60 min) o rickshaw (jinrikisha, desde ~¥3.000, ~30 min con guía).", "why": "Desde el agua se obtiene el ángulo más tranquilo y menos concurrido de las montañas.", "tip": "Para una salida corta — bote o rickshaw de 30 min (no el crucero Hozugawa completo, que es medio día desde Kameoka).", "map": "35.0129,135.6790" },
     { "time": "15:15", "name": "Parque de monos Iwatayama (嵐山モンキーパーク)", "walk": "En el extremo sur del puente", "see": "~120 macacos libres en la cima de un cerro + la mejor panorámica del valle de Kioto. ¥800, 9:00–16:00. Subida ~20 min.", "why": "Monos salvajes y la mejor vista de la ciudad en Arashiyama — todo el valle se despliega abajo. Se alimenta a los macacos desde una caseta enrejada mientras ellos andan libres afuera.", "tip": "La última entrada es ~15:30 — no lo dejes. No mires a los monos a los ojos ni los toques; cerrá los bolsos. Agua en el septiembre caluroso.", "map": "35.0095,135.6780" },
     { "time": "16:45", "name": "Kimono Forest en la estación Randen (キモノフォレスト)", "walk": "A la estación Randen Arashiyama", "see": "~600 pilares envueltos en tela de kimono Kyo-yuzen (32 patrones), iluminados de noche. Gratis, 24 h.", "why": "Una instalación de arte de ensueño que hace eco al bosque de bambú, pero en seda teñida — espectacular iluminada.", "tip": "Es la estación desde donde salen en el tranvía Randen retro — quédense al anochecer (~18:00) para el cierre iluminado.", "map": "35.0155,135.6790" }
    ],
    "special": [
     "🎋 El bosque de bambú primero — la mejor luz verde antes de que el sábado se llene al mediodía.",
     "🍵 Okochi Sanso — la experiencia tranquila más linda: miradores elevados + matcha incluido, y la mayoría de los excursionistas la saltea.",
     "🐒 El parque de monos — la mejor vista de Arashiyama sobre todo el valle de Kioto (entrada ¥800, última ~15:30).",
     "☕ % Arabica sobre el río — el momento icónico kiotense de café-con-vista.",
     "👘 Kimono Forest al anochecer — los pilares de seda iluminados, un cierre perfecto, y es su estación de salida."
    ]
   },
   {
    "id": "nishiki",
    "date": "2026-09-26",
    "city": "Kyoto",
    "area": "Mercado Nishiki",
    "emoji": "🍢",
    "title": "Mercado Nishiki — 'la cocina de Kioto'",
    "subtitle": "Media tarde temprano · ~10 paradas de degustación · lleguen 16:00",
    "intro": "Una arcada techada de ~400 m con ~120 puestos — 'la cocina de Kioto' desde hace ~400 años, con raíces en los pescaderos (agua subterránea fría). Tako-tamago, tamagoyaki, encurtidos, yuba y dulces de matcha. Clave el timing: muchos puestos cierran 17:00–18:00 — lleguen ~16:00. Se come junto al puesto (no se camina comiendo).",
    "meta": {
     "duration": "~1–1,5 horas",
     "distance": "~400 m techados, plano",
     "start": "Entrada este (Teramachi) — santuario Nishiki Tenmangu",
     "getThere": "Desde el centro de Kioto: estación Shijo/Karasuma, una cuadra al norte",
     "end": "Salida oeste a Karasuma/Daimaru, seguir a cenar o a Gion",
     "cost": "Entrada libre a la arcada, sin pase ni taxi (a una cuadra de Shijo/Karasuma, todo a pie). Degustar en ~10 puestos: ~¥2.000–3.000 por persona (tako-tamago ¥400–1.000, ostra ¥300–500, brochette ¥300–800, dulce ¥200–400).",
     "luggage": "Día de paseo en Kioto: la valija principal queda guardada en el Candeo Karasuma, salís con daypack + tarjeta ICOCA nomás.",
     "meal": "Tako-tamago de Kai (櫂) — pulpito con huevo de codorniz glaseado en soja, ~¥400–1.000 el palito; comelo junto al puesto. Sumale un dashimaki calentito de Miki Keiran (~¥200 la porción) antes de que cierre a las 17:00."
    },
    "stops": [
     { "time": "16:00", "name": "Santuario Nishiki Tenmangu (錦天満宮)", "walk": "Entrada este", "see": "Santuario de ~1003, al dios del estudio. Buey de bronce (frotalo para suerte) y un manantial 'Nishiki no Mizu' potable. Gratis, ~08:00–20:00.", "why": "Detalle oculto: el torii del santuario está 'tragado' por los edificios de ambos lados — cuando se construyó la calle, los comercios se levantaron alrededor de la puerta sagrada. Mirá para arriba, a las ventanas del segundo piso.", "tip": "Un momento tranquilo antes de la comida, y una foto del torii tragado.", "map": "35.0050,135.7674" },
     { "time": "16:10", "name": "Aritsugu (有次) — cuchillos", "walk": "En el extremo este", "see": "Cuchillero legendario, fundado en 1560 (originalmente forjadores de espadas). Cuchillos de Kioto forjados a mano, ollas de cobre. 9:00–17:00 (cerrado miércoles).", "why": "Más de 450 años — un hito artesanal genuino, no una tienda de souvenirs. Grabado del nombre gratis en la compra.", "tip": "Aunque no compres — mirá a los artesanos. Un cuchillo de office ~¥8.000–15.000.", "map": "35.0050,135.7672" },
     { "time": "16:20", "name": "Kai (櫂) — tako-tamago", "walk": "En la arcada", "see": "Pulpito en palito con un huevo de codorniz entero cocido dentro de la cabeza, glaseado en soja dulce. ~¥500–1.000.", "why": "El snack más icónico y único de Nishiki — sorprendente y fotogénico.", "tip": "Comelo junto al puesto; el huevo-dentro-de-la-cabeza es todo el punto.", "map": "35.0050,135.7669" },
     { "time": "16:30", "name": "Nishiki Daiyasu (錦大安) — mariscos a la parrilla", "walk": "En la arcada", "see": "Pescadería de ~100 años. Ostras y mariscos grillados/frescos. Sábado 12:00–20:00 (de los últimos en cerrar).", "why": "Ostras frescas abiertas frente a vos, parado en el puesto.", "tip": "Pedí grillado si te da cosa lo crudo. Comé en la barra.", "map": "35.0050,135.7666" },
     { "time": "16:40", "name": "Brochettes de mariscos a la parrilla / unagi", "walk": "En la arcada", "see": "Varios puestos asan ostras, langostinos, calamar, anguila (unagi) y anago. ~¥300–800 por brochette.", "why": "Mariscos al carbón, hechos al momento.", "tip": "Seguí el humo — comprá lo que esté caliente de la parrilla.", "map": "35.0050,135.7663" },
     { "time": "16:50", "name": "Miki Keiran (三木鶏卵) — tamagoyaki", "walk": "Centro de la arcada", "see": "Desde 1928, especialista del rollo de huevo. Dashimaki con el agua subterránea de Nishiki; también umaki (envuelto en anguila). Sábado hasta 17:00.", "why": "El dashimaki kiotense por excelencia — mirá la técnica de enrollado 'kyomaki'.", "tip": "Llegá antes de las 17:00 — esta es la parada sensible al tiempo.", "map": "35.0050,135.7661" },
     { "time": "17:00", "name": "Konnamonja (こんなもんじゃ) — donas de leche de soja", "walk": "En la arcada", "see": "Especialista en soja (desde 1991). Donas de leche de soja (~¥300 la caja) y soft de soja-matcha. 10:00–18:00.", "why": "Las donas calentitas y el soft cremoso son una institución de postre de Nishiki.", "tip": "Compartí una caja de donas y un soft — una pausa dulce a mitad de camino.", "map": "35.0050,135.7658" },
     { "time": "17:10", "name": "Yuba / tofu fresco", "walk": "En la arcada", "see": "Yuba (piel de tofu) fresca, tofu y soft de soja. ~¥400–600.", "why": "La yuba es una especialidad kiotense ligada a la cocina budista y al agua blanda local.", "tip": "Si ofrecen 'hikiage yuba' fresca — probala ya, es sedosa.", "map": "35.0050,135.7655" },
     { "time": "17:20", "name": "Encurtidos (tsukemono) — senmaizuke", "walk": "En la arcada", "see": "Encurtidos kiotenses incluido senmaizuke (nabo en láminas finas). Bolsas ~¥300–800, muchos puestos con muestras gratis.", "why": "El encurtido de Kioto es un oficio refinado; el senmaizuke es un clásico de estación.", "tip": "Probá primero, después comprá los envasados al vacío como souvenir de viaje. No toques la mercadería que no es muestra.", "map": "35.0050,135.7652" },
     { "time": "17:30", "name": "Dulces de matcha — Sawawa / warabimochi", "walk": "Hacia el extremo oeste", "see": "Soft de matcha, daifuku de matcha, warabimochi con kinako. ~¥200–600.", "why": "Dulces de matcha de Uji como corresponde; el warabimochi en kinako es un cierre clásico.", "tip": "La última parada dulce antes de la salida oeste a Karasuma.", "map": "35.0050,135.7650" }
    ],
    "special": [
     "🐙 Tako-tamago (Kai) — pulpito con huevo de codorniz en la cabeza; el snack sello de Nishiki.",
     "🔪 Aritsugu — linaje de forjadores de espadas desde 1560, grabado del nombre gratis.",
     "⛩️ El torii tragado de Nishiki Tenmangu — la puerta sagrada engullida por los edificios; mirá al segundo piso.",
     "🚫 Se come junto al puesto — no se camina comiendo (prohibido el 'tabe-aruki'). Efectivo, y no toques la mercadería.",
     "⏰ Lleguen ~16:00 — muchos puestos cierran 17:00–18:00 (Miki Keiran tamagoyaki hasta 17:00)."
    ]
   },
   {
    "id": "higashiyama",
    "date": "2026-09-27",
    "city": "Kyoto",
    "area": "Higashiyama",
    "emoji": "🏯",
    "title": "Higashiyama — Kiyomizu y las cuestas antiguas",
    "subtitle": "Mañana, cuesta abajo · 11 paradas · 07:30–10:30",
    "intro": "El distrito histórico preservado de Kioto: el templo Kiyomizu con su escenario flotante, y cuestas empedradas de machiya, casas de té y tiendas de artesanía. Se sube a la cima (Kiyomizu) y se baja por las calles antiguas — el sentido recomendado. Temprano a la mañana = calles vacías y fotos sin gente, ideal también para kimono. Es la parte de la mañana de un día que incluye a la tarde Kinkaku-ji, kimono+té y maiko.",
    "meta": {
     "duration": "~2,5–3 horas",
     "distance": "~2–2,5 km, casi todo cuesta abajo",
     "start": "Kiyomizu-dera (lleguen con la apertura, 06:00–08:00)",
     "getThere": "Bus 100/206 a Kiyomizu-michi, o taxi a la base de Kiyomizu-zaka (cómodo para kimono)",
     "end": "Santuario Yasaka → Gion (rumbo a kimono+té y maiko a la tarde)",
     "cost": "Entradas: Kiyomizu-dera ¥500 + túnel Zuigudo ¥100 + Kodai-ji ¥600 = ~¥1.200 por persona. Yasaka y el parque Maruyama son gratis. Colectivo 100/206 ¥230 fijo, o un taxi corto desde el Candeo ~¥1.000-1.300.",
     "luggage": "La valija principal queda guardada en el Candeo Karasuma — salís solo con la mochila y la tarjeta IC (ICOCA); volvés al mismo hotel a la noche.",
     "meal": "Un café en el Starbucks machiya (casona de madera de 100 años) de Ninenzaka, ~¥600-800 por persona; o un yatsuhashi recién hecho en el camino, ~¥300-500."
    },
    "stops": [
     { "time": "07:40", "name": "Templo Kiyomizu-dera (清水寺)", "walk": "Subida por Kiyomizu-zaka a la puerta", "see": "Templo de la UNESCO. El enorme escenario de madera (butai) sobre la ladera — sin un solo clavo — y vista sobre Kioto. Cascada Otowa: tres chorros (longevidad/éxito/amor) — bebé de uno solo. ¥500, abre 06:00.", "why": "El templo icónico de Kioto. La luz temprana y el escenario vacío son inolvidables.", "tip": "Entrá apenas abre. Beber de los tres chorros se considera codicioso y anula la bendición.", "map": "34.9949,135.7850" },
     { "time": "09:00", "name": "Zuigudo — el túnel del vientre (胎内めぐり)", "walk": "Dentro del predio de Kiyomizu", "see": "Pasaje subterráneo totalmente a oscuras (¥100, zapatos afuera) — palpás una pared de cuentas de oración hasta una 'piedra de deseos' apenas iluminada, la girás y pedís.", "why": "Un raro ritual sensorial y meditativo de 'renacimiento', y sorprendente.", "tip": "⚠️ Abre recién a las 09:00 (y Kodai-ji también) — muy temprano en la subida del amanecer; saltealo o volvé después de las 09:00. Verificá que funcione en 2026.", "map": "34.9950,135.7846" },
     { "time": "08:25", "name": "Sannenzaka (産寧坂)", "walk": "Cuesta abajo desde Kiyomizu", "see": "Callejón de escalones de piedra con machiya de madera — casas de té, cerámica, incienso, abanicos, dulces. Gratis.", "why": "La cuesta tradicional más hermosa de Kioto, distrito de preservación — un sueño para fotógrafos y para quien viste kimono.", "tip": "Superstición: tropezar en los escalones trae mala suerte — cuidado con los pies, sobre todo en kimono/geta. Antes de las 09:00 el callejón está casi vacío.", "map": "34.9962,135.7825" },
     { "time": "08:45", "name": "Ninenzaka (二年坂) + el Starbucks en machiya", "walk": "Sigue cuesta abajo", "see": "Otra calle de machiya empedrada preciosa. Starbucks Ninenzaka — el primero del mundo con salas de tatami, en un machiya centenario.", "why": "La continuación de la cuesta hermosa; el Starbucks es una foto/pausa única.", "tip": "El Starbucks se llena rápido — vení temprano o solo fotografiá la fachada.", "map": "34.9970,135.7815" },
     { "time": "09:00", "name": "Picoteo — yatsuhashi y comida callejera", "walk": "Sobre Ninenzaka/Sannenzaka", "see": "Probá yatsuhashi (el dulce de mochi y canela de Kioto) en Shogoin o Honke Nishio; también soft de matcha, dango, korokke, senbei.", "why": "El yatsuhashi es el dulce sello de Kioto — crudo ('nama') envuelto sobre pasta de poroto.", "tip": "La mayoría de las tiendas ofrece muestras gratis — probá antes de comprar. Efectivo.", "map": "34.9970,135.7815" },
     { "time": "09:15", "name": "Pagoda Yasaka / Hokan-ji (八坂の塔)", "walk": "Cuesta abajo hacia Yasakadori", "see": "La pagoda de 5 pisos enmarcada al final de la calle en pendiente, con techos de machiya al frente — la foto sello de Higashiyama.", "why": "La foto icónica del barrio; el interior abre solo rara vez — la vista exterior es el premio.", "tip": "Fotografiá cuesta arriba por Yasakadori mirando abajo a la pagoda. Luz de mañana y poca gente.", "map": "34.9981,135.7803" },
     { "time": "09:30", "name": "Templo Kodai-ji (高台寺)", "walk": "Un poco al norte", "see": "Templo zen (1606) que fundó Nene, viuda de Hideyoshi, en su memoria. Jardines secos y de estanque, bosque de bambú, arte en laca. ¥600. Abre 09:00.", "why": "Un contrapunto refinado y mucho más tranquilo que las cuestas atestadas, empapado de la historia Hideyoshi-Nene.", "tip": "Si arrancaste 07:30 llegás cerca de la apertura. Entoku-in al lado es un lindo agregado con el ticket combinado.", "map": "34.9998,135.7808" },
     { "time": "09:50", "name": "Ishibei-koji (石塀小路) — el callejón oculto", "walk": "Desde Nene-no-Michi", "see": "Un callejón empedrado sinuoso con posadas y casas de té — uno de los más bellos y silenciosos de Kioto.", "why": "Se siente como entrar en la Kioto de preguerra; casi sin gente.", "tip": "Residencial y con posadas de lujo — hablá bajo, no se recomienda fotografiar huéspedes/entradas, sin trípode. La entrada es fácil de perderse.", "map": "35.0007,135.7805" },
     { "time": "10:05", "name": "Nene-no-Michi (ねねの道)", "walk": "Calle empedrada ancha", "see": "La bella calle de piedra que lleva el nombre de Nene, conecta Kodai-ji al norte — rickshaws, faroles, boutiques.", "why": "El 'tejido conector' elegante del barrio — un paseo fácil y lindo de templo a parque.", "tip": "Franja de foto de kimono destacada, agradable aun cuando sube la gente.", "map": "35.0008,135.7810" },
     { "time": "10:15", "name": "Parque Maruyama (円山公園)", "walk": "Al norte", "see": "El parque público más antiguo de Kioto (1886), con el famoso cerezo llorón en su centro. Gratis, siempre abierto.", "why": "Una pausa verde y tranquila con estanques y casas de té entre el barrio de templos y el santuario Yasaka.", "tip": "A fin de septiembre no hay flor — pero es un respiro tranquilo y un lindo fondo de kimono.", "map": "35.0033,135.7817" },
     { "time": "10:30", "name": "Santuario Yasaka (八坂神社) → Gion", "walk": "En el extremo bajo", "see": "El santuario rojo al pie del barrio, la puerta guardiana de Gion. La puerta oeste abre directo a Shijo y Gion.", "why": "Un final animado que te pasa fluido al barrio de las geishas — y cerca de MAIKOYA para la tarde.", "tip": "Salí por la puerta Romon oeste a Shijo para la foto clásica y transporte cómodo.", "map": "35.0036,135.7785" }
    ],
    "special": [
     "🐈 Ishibei-koji — el callejón de piedra oculto, el más silencioso y atmosférico.",
     "🗼 Foto de la pagoda Yasaka cuesta abajo por Yasakadori — la foto sello de Higashiyama.",
     "💧 Cascada Otowa — bebé de un solo chorro (longevidad / éxito / amor); los tres = codicia.",
     "🍵 Starbucks con salas de tatami — el primero del mundo, en un machiya centenario.",
     "🕯️ Zuigudo — pasaje del 'vientre de Buda' a oscuras (¥100), un ritual de renacimiento.",
     "⚠️ El santuario Jishu (las piedras del amor) está cerrado por obras desde 2022 sin fecha de reapertura — no cuenten con él."
    ]
   },
   {
    "id": "den-den",
    "date": "2026-09-28",
    "city": "Osaka",
    "area": "Den Den Town",
    "emoji": "🎮",
    "title": "Den Den Town (Nipponbashi) — el Akihabara de Osaka",
    "subtitle": "Tarde · ~9 paradas · 15:00–16:45 (salir para el sumo 17:00)",
    "intro": "La meca otaku del oeste de Japón — históricamente barrio eléctrico, hoy anime, manga, figuras, retro-gaming y maid cafes. Dos ejes paralelos: Sakai-suji (las tiendas grandes) y Ota Road (la franja anime más densa). Más tranquilo y menos turístico que Akihabara, y a veces con mejores precios de usado. Se entra por el norte, se baja por Sakai-suji y se vuelve al norte por Ota Road.",
    "meta": {
     "duration": "~1,5–2 horas",
     "distance": "~1,5–2 km, plano",
     "start": "Desde Namba/Nipponbashi — se entra por el extremo norte",
     "getThere": "~10 min a pie al sur desde Namba/Dotonbori",
     "end": "De vuelta al norte a Namba rumbo al sumo y la noche en Dotonbori",
     "cost": "Callejear es gratis; el gasto son compras opcionales (gachapon ~¥300–500 la tirada, juegos retro/figuras en Super Potato suelen ser caros). Maid café Maidreamin en Ota Road: entrada ¥880 + una consumición obligatoria, total ~¥2,000–3,500 por persona con foto. Se llega desde Namba caminando (~10 min), no hace falta taxi.",
     "luggage": "Primer día en Osaka: la valija grande ya está en el Onyado Nono Namba (llegó hoy), la dejás guardada en el hotel y salís con daypack + tarjeta ICOCA. Den Den Town queda a pasos del hotel.",
     "meal": "Maid café Maidreamin en Ota Road para cerrar: un omurice dibujado o un parfait con show, ~¥2,000–3,000 por persona (entrada + consumición). Si no, un ramen o takoyaki callejero de vuelta hacia Dotonbori, ~¥600–900 por persona."
    },
    "stops": [
     { "time": "15:00", "name": "Animate + Melonbooks (アニメイト)", "walk": "En el extremo norte de Ota Road", "see": "La mayor cadena de merch de anime de Japón — manga, merch, cartas. En el piso 4 del mismo edificio: Melonbooks (doujinshi).", "why": "La puerta de entrada a Ota Road y lo mejor para merch de temporada. Melonbooks para contenido indie/fan profundo.", "tip": "Arrancá acá para orientarte — Ota Road baja al sur desde la esquina. Zonas R-18 en pisos altos, sin fotos.", "map": "34.6620,135.5045" },
     { "time": "15:20", "name": "K-Books Nipponbashi", "walk": "Zona Ota Road", "see": "Merch de anime usado, pisos por fandom — merch de personajes, cels, doujinshi, ídolos.", "why": "Excelente para merch de personajes usado y series específicas, bien organizado.", "tip": "Fuerte en merch para público diverso y series shonen mainstream por igual.", "map": "34.6615,135.5043" },
     { "time": "15:35", "name": "Super Potato — sucursal Ota Road (retro-gaming)", "walk": "Sobre Ota Road", "see": "La legendaria cadena retro — Famicom, Super Famicom, PC Engine, consolas raras. Abierta (la de Namba cerró; esta es la vigente).", "why": "Un tesoro nostálgico — imperdible para los del retro. Menos lleno que Akihabara.", "tip": "Efectivo. Los ítems en caja son caros, los cartuchos sueltos baratos. Fotos adentro no muy bienvenidas — preguntá.", "map": "34.6610,135.5048" },
     { "time": "15:55", "name": "Super Kids Land (Joshin) — gunpla y modelos", "walk": "Al sur por Sakai-suji", "see": "La mayor megatienda de hobby de Japón (Joshin), ~5 pisos: Gunpla, modelos a escala, figuras, trenes. Cartel gigante de Gundam.", "why": "El ancla sur del recorrido. Si les gusta el Gunpla o los dioramas — esta es la nave nodriza.", "tip": "Mostrador libre de impuestos con pasaporte. El stock de Gunpla rota rápido — los grales se agotan.", "map": "34.6595,135.5060" },
     { "time": "16:15", "name": "Volks (ボークス)", "walk": "Sakai-suji, volviendo", "see": "Un edificio entero de hobby: figuras, garage kits, modelos, y las famosas muñecas Dollfie.", "why": "Una de las mayores exhibiciones de marca en Nipponbashi; los pisos de Dollfie impactan aunque no compres.", "tip": "Buena parada de figuras volviendo al norte.", "map": "34.6600,135.5060" },
     { "time": "16:30", "name": "Mandarake Grand Chaos (まんだらけ)", "walk": "Mitad de Sakai-suji", "see": "Gran emporio de usado — manga, figuras vintage, juguetes retro, cels, doujinshi, por pisos.", "why": "Un laberinto de coleccionables — juguetes Showa vintage, manga agotado, figuras raras. La mejor parada para 'el coleccionable que no sabías que querías'.", "tip": "Compran y venden; precios justos-a-coleccionista. Fácil perder 45 min. Fotos restringidas en partes.", "map": "34.6635,135.5060" },
     { "time": "16:45", "name": "Retro-gaming y Surugaya", "walk": "Calles laterales", "see": "Retro TV Game Revival (Famicom/Dreamcast) y Surugaya (juegos/manga/figuras/cartas usados) — rotación de stock distinta a Super Potato.", "why": "El trío retro de Nipponbashi; vale comparar precios para ese cartucho que buscás.", "tip": "Efectivo. Probá las portátiles antes de comprar. ('A-Too' probablemente cerró — no confirmado para 2026.)", "map": "34.6605,135.5050" },
     { "time": "16:55", "name": "Yellow Submarine + paredes de gachapon", "walk": "Zona Ota Road", "see": "Yellow Submarine (TCG/juegos de mesa: Magic, Pokémon, Yu-Gi-Oh) y pasillos de máquinas de gachapon — cientos de máquinas.", "why": "El gachapon es un souvenir barato y divertido; Yellow Submarine para jugadores de cartas.", "tip": "Tené monedas de ¥100/¥500. También Lashinban y Surugaya por la zona.", "map": "34.6610,135.5050" },
     { "time": "", "name": "Cierre en un maid cafe (opcional)", "walk": "Ota Road/Sakai-suji", "see": "Cafés temáticos como Maidreamin, Parlante, Cocha.", "why": "Un cierre divertido de la experiencia otaku de Osaka.", "tip": "Solo si queda tiempo — salgan para las ~16:40 para llegar a las puertas del sumo (17:00). Prohibido fotografiar a las maids, efectivo.", "map": "34.6615,135.5048" }
    ],
    "special": [
     "🛣️ Ota Road (Otaroad) — la franja anime de verdad, menos obvia que Sakai-suji y que vale caminar lento.",
     "🕹️ El trío retro: Super Potato (Ota Road) + Retro TV Game + Surugaya — un crawl retro autónomo.",
     "🎰 Las paredes de gachapon — pasillos de máquinas de cápsulas, una emoción barata y sello.",
     "❌ Toranoana cerró (2022) — no lo busquen. Melonbooks cubre el nicho del doujinshi.",
     "💴 Efectivo para las tiendas de usado; mostradores libres de impuestos en las grandes (Joshin/Animate) desde ¥5.000 — llevá pasaporte.",
     "📅 El festival Street Festa (cosplay) es en primavera (mayo) — no en septiembre. El lunes = tranquilo y cómodo para curiosear."
    ]
   },
   {
    "id": "dotonbori",
    "date": "2026-09-28",
    "city": "Osaka",
    "area": "Dotonbori y Namba",
    "emoji": "🌃",
    "title": "Dotonbori y Namba — neón y 'kuidaore'",
    "subtitle": "Noche · ~11 paradas · 20:15–23:00 (después del sumo)",
    "intro": "La capital de la comida callejera de Japón, con el espíritu kuidaore ('comer hasta caer'): un canal de neón, carteles 3D gigantes, y el famoso hombre de Glico. Después del sumo — se baja al canal, se come takoyaki y kushikatsu, y se escapan un rato al empedrado viejo callejón de Hozenji. En Osaka se acepta más comer caminando que en Kioto.",
    "meta": {
     "duration": "~3 horas (comida y neón)",
     "distance": "~1,5–2 km, plano (mucho ida y vuelta)",
     "start": "Desde la estación Namba — al norte hacia el canal Dotonbori",
     "getThere": "Después del sumo (termina ~20:00): línea/caminata a Namba (~10–15 min)",
     "end": "Últimas fotos de neón; Dotonbori sigue vivo mucho después de medianoche (Glico prendido hasta 24:00)",
     "cost": "Casi todo gratis: el Glico, el puente Ebisubashi, el canal, Hozenji Yokocho y el templo (una monedita al Fudo, ~¥5–100). Solo pagás lo que elegís: la vuelta al mundo Ebisu Tower ¥1.000 (solo efectivo) y el paseo en barco Tombori ~¥2.000. No hace falta taxi, es todo a pie desde Namba.",
     "luggage": "Hoy ya te instalaste en el Onyado Nono Namba: la valija grande queda guardada en el hotel y salís a la ronda nocturna solo con la mochilita y la tarjeta ICOCA.",
     "meal": "Una picada callejera de verdad: takoyaki de los puestos (~¥600), kushikatsu en Kushikatsu Daruma (~¥1.500) y cerrás con un ramen en Kinryu, el del dragón (~¥900). Contá unos ¥3.000–4.000 por cabeza en toda la recorrida."
    },
    "stops": [
     { "time": "20:15", "name": "Puente Ebisubashi + el hombre de Glico (戎橋)", "walk": "De Namba al norte por la arcada Ebisubashi-suji", "see": "Parate en el puente en la pose de victoria del hombre de Glico, el cartel detrás. Gratis.", "why": "Glico (fabricante de Pocky) puso el cartel en 1935; el corredor simboliza 'energía y salud'. La versión actual es LED — la foto de neón sello de Osaka.", "tip": "El puente está lleno — para una foto limpia, desde el lado de la arcada o el paseo del canal al este.", "map": "34.6687,135.5013" },
     { "time": "20:25", "name": "Canal Dotonbori (道頓堀)", "walk": "Bajá al paseo del río", "see": "El corredor de neón de carteles 3D gigantes, reflejos en el agua y puestos de comida apretados.", "why": "El espíritu kuidaore de Osaka en su máxima densidad de noche.", "tip": "Caminá la franja en un sentido y el paseo del canal de vuelta — dos vistas. Lo mejor con oscuridad total.", "map": "34.6685,135.5030" },
     { "time": "20:35", "name": "El cangrejo gigante de Kani Doraku (かに道楽)", "walk": "Al oeste de Ebisubashi", "see": "Un cangrejo mecánico de ~8 m de ancho con patas y ojos que se mueven (desde 1960). Kaiseki de cangrejo ~¥3.000–8.000, o solo foto.", "why": "El segundo cartel más fotografiado de Dotonbori.", "tip": "Esperá un segundo — las patas se mueven para una foto con movimiento.", "map": "34.6686,135.5020" },
     { "time": "20:45", "name": "El grupo de takoyaki — coman acá", "walk": "Sobre la franja", "see": "Osaka inventó el takoyaki (bolitas de pulpo). Puestos confirmados: Wanaka, Kukuru, Juhachiban, Acchichi. ~¥500–700 por 8.", "why": "El corazón de la comida callejera de Osaka, hecho frente a vos.", "tip": "Salen ardiendo — el centro está fundido. Esperá ~1 min antes del mordisco para no quemarte. Comer parado en el puesto es normal.", "map": "34.6688,135.5015" },
     { "time": "21:05", "name": "Kinryu Ramen — el dragón (金龍ラーメン)", "walk": "Sobre la franja", "see": "Un dragón verde-dorado trepa el edificio. Ramen tonkotsu-soja barato ~¥800, abierto 24 h, toppings gratis.", "why": "Uno de los top 3 carteles de Dotonbori, y una institución nocturna de Osaka de verdad.", "tip": "Se pide en la máquina de tickets de la puerta; la barra de toppings gratis es la movida local.", "map": "34.6686,135.5027" },
     { "time": "21:20", "name": "Kushikatsu Daruma — el original (串カツだるま)", "walk": "Sobre la franja", "see": "Daruma fundó el plato en 1929. Brochettes fritas (carne, verdura, mariscos) ~¥130–300, con salsa comunal.", "why": "El origen del kushikatsu — con una birra fría.", "tip": "⚠️ La regla: ¡no mojar dos veces en la salsa comunal! Si querés más, juntá con el repollo gratis. (En Dotonbori suele haber botellas individuales.)", "map": "34.6690,135.5010" },
     { "time": "21:40", "name": "Don Quijote + la vuelta al mundo (えびすタワー)", "walk": "En el extremo este del canal", "see": "Megatienda amarilla sobre el canal, con una vuelta al mundo ovalada (la primera del mundo) en la fachada. Donki abre hasta tarde para souvenirs.", "why": "Una foto iluminada llamativa desde el canal.", "tip": "⚠️ Verificá a la noche si la vuelta funciona (hubo pausas operativas). Igual es linda foto.", "map": "34.6691,135.5033" },
     { "time": "21:55", "name": "Hozenji Yokocho (法善寺横丁) — el callejón viejo de Osaka", "walk": "Una cuadra al sur del neón", "see": "Un callejón empedrado y musgoso de ~80 m, iluminado con faroles, con 60+ bares y restaurantes diminutos. Se siente de 200 años.", "why": "La joya escondida — silenciosa, cinematográfica, y donde los locales de verdad toman y comen.", "tip": "Vení con los faroles prendidos. Íntimo — sé considerado, muchos bares diminutos.", "map": "34.6680,135.5025" },
     { "time": "22:10", "name": "Templo Hozenji + Mizukake Fudo (水掛不動)", "walk": "Dentro del callejón", "see": "Un templo chico con una estatua de Fudo Myoo totalmente cubierta de musgo verde — le tirás agua después de rezar ('Mizukake' = mojado con agua). 24 h, gratis.", "why": "Un ritual de pareja — las figuras se consideran portadoras de suerte en el emparejamiento y el amor. Perfecto para ustedes.", "tip": "Volcá agua sobre la estatua (hay cucharones), pidan un deseo juntos. Un momento tranquilo de 5 min.", "map": "34.6681,135.5027" },
     { "time": "22:25", "name": "Sennichimae Doguyasuji (千日前道具屋筋)", "walk": "Un poco al sur", "see": "Arcada techada de cuchillerías, utensilios de cocina y muestras de comida de plástico hiperrealistas (souvenirs graciosos).", "why": "La calle histórica de utensilios — llaveros de sushi, imanes de takoyaki.", "tip": "⚠️ La mayoría cierra ~18:00 — a esta hora estará cerrado. Pasá por el ambiente de la arcada; para comprar de verdad, volvé de día.", "map": "34.6660,135.5040" },
     { "time": "22:40", "name": "Crucero Tonbori / Amerikamura (opcional)", "walk": "Muelle junto a Don Quijote / al oeste", "see": "Crucero Tombori de 20 min bajo el neón (¥2.000, último 21:00 — adelantalo), o Amerikamura al oeste para un nightcap joven y graffiti.", "why": "Desde el agua o desde el barrio joven — un cierre distinto para la noche.", "tip": "El último crucero es a las 21:00 — hacelo temprano o saltealo.", "map": "34.6720,135.4985" }
    ],
    "special": [
     "🏮 Hozenji Yokocho + Mizukake Fudo — el callejón empedrado viejo y el ritual de tirar agua para parejas, el rincón romántico y oculto.",
     "🏃 La pose de Glico en el puente Ebisubashi — la foto sello de Osaka.",
     "🦀 Los carteles 3D gigantes — el cangrejo de Kani Doraku, el dragón de Kinryu, Kuidaore Taro.",
     "🍢 Kushikatsu Daruma — la regla de 'no mojar dos veces' en la salsa comunal; juntá con repollo.",
     "❌ El pez globo gigante de Zuboraya ya no está — la cadena cerró definitivamente en 2020. No lo busquen en Dotonbori.",
     "💴 Efectivo para los puestos y bares chicos. En Osaka comer caminando se acepta más que en Kioto (aunque comer en el puesto es lo más prolijo)."
    ]
   },
   {
    "id": "nara",
    "date": "2026-09-29",
    "city": "Osaka",
    "area": "Nara",
    "emoji": "🦌",
    "title": "Nara — los ciervos que hacen reverencia y el Gran Buda",
    "subtitle": "Excursión desde Osaka · ~9 paradas · llegada ~10:00",
    "intro": "La primera capital permanente de Japón (710–794): ~1.400 ciervos sika salvajes andan libres y hacen reverencia para pedir una galletita, un templo con el Gran Buda de bronce (15 m), y senderos de faroles de piedra en el bosque. Los ciervos se consideran mensajeros sagrados de los dioses. Un día completo de cultura, naturaleza y animales — y a la noche vuelven a Osaka a Doyama-cho.",
    "meta": {
     "duration": "Casi día completo (~10:00–17:30)",
     "distance": "~6–8 km",
     "start": "Estación Kintetsu-Nara (la más cercana al parque)",
     "getThere": "Desde Osaka: Kintetsu Nara Line desde Namba, Kyuko (rápido) ~36–40 min, ¥680",
     "end": "Naramachi y de vuelta a la estación, tren a Osaka + Doyama-cho a la noche",
     "cost": "Entradas: Kofuku-ji ¥500, Gran Buda de Todai-ji ¥800, santuario interior de Kasuga Taisha ¥700, Yoshikien gratis con pasaporte extranjero, galletas shika-senbei para los ciervos ¥200; tren Kintetsu Namba↔Nara ¥680 por tramo (¥1,360 ida y vuelta). Total del día ~¥2,700 por persona + el tren; no hace falta taxi, todo se camina dentro del parque.",
     "luggage": "Excursión de un día desde Osaka: dejá la valija grande guardada en el hotel Onyado Nono Namba y llevá solo una mochila + tarjeta ICOCA. Si hace falta, hay lockers en la estación Kintetsu-Nara por ~¥400–700.",
     "meal": "Probá el mochi de yomogi recién amasado en Nakatanidou sobre la calle Higashimuki (~¥160 la pieza, el show de golpear el mochi vale la parada), y para comer en serio el kakinoha-zushi (sushi en hoja de caqui) en Hiraso cerca del estanque Sarusawa, ~¥1,500–2,000 por persona."
    },
    "stops": [
     { "time": "10:00", "name": "Calles Higashimuki y Sanjo-dori", "walk": "De la estación al sur", "see": "Arcada techada (Higashimuki) que baja de la estación a Sanjo-dori — comida, souvenirs, dulces de kudzu, café.", "why": "El primer gusto de Nara; llevate un warabimochi o snack antes del parque.", "tip": "⚠️ Acá está Nakatanidou (el golpeo de mochi ultrarrápido) — pero cierra hoy (martes). Comprá dulces en otro lado de la calle.", "map": "34.6828,135.8296" },
     { "time": "10:30", "name": "Templo Kofuku-ji (興福寺)", "walk": "5 min al este", "see": "Templo de la UNESCO. Salón Dorado Central ¥500, Museo del Tesoro ¥700 (la famosa estatua Ashura). El predio es gratis.", "why": "El templo fundador del poderoso clan Fujiwara; su pagoda de 5 pisos es la segunda más alta de Japón.", "tip": "⚠️ La pagoda está en restauración y cubierta de andamios (2023–2034) — no la verán. El Museo es lo mejor si pagás por una cosa.", "map": "34.6825,135.8318" },
     { "time": "11:00", "name": "Parque de Nara + los ciervos que hacen reverencia (奈良公園)", "walk": "Al este, hacia el pasto", "see": "~1.400 ciervos sika salvajes libres. Comprá shika-senbei (galletitas de ciervo) en puestos autorizados — ¥200 el paquete. Los ciervos hacen reverencia para pedir.", "why": "Los ciervos están protegidos como 'shinroku' — mensajeros sagrados de los dioses (según la leyenda, un dios de Kasuga llegó montado en un ciervo blanco). La reverencia es aprendida — devolvela.", "tip": "Comprá galletitas solo cuando estés listo para dar de comer ya. No los provoques ni fotografíes reteniendo la galletita — ahí muerden/embisten.", "map": "34.6851,135.8430" },
     { "time": "12:00", "name": "Todai-ji — puerta Nandaimon + el Gran Buda (東大寺)", "walk": "Al norte por el parque", "see": "Puerta Nandaimon con dos guardianes Nio de 8,4 m (gratis). El Salón del Gran Buda (Daibutsuden) ¥800 — Buda de bronce de 15 m. Abre 7:30–17:30.", "why": "Fue históricamente el edificio de madera más grande del mundo; un monumento clave del período Nara y del budismo japonés.", "tip": "Detrás del Buda — un pilar con un agujero del tamaño de la fosa nasal del Buda; pasar por él trae iluminación/suerte. Confirmado activo en 2026.", "map": "34.6890,135.8398" },
     { "time": "13:30", "name": "Nigatsu-do (二月堂) — mirador", "walk": "5–8 min de subida detrás de Todai-ji", "see": "Un salón sobre una colina con veranda de madera — la mejor vista panorámica de Nara: techos, el dosel del parque, y las montañas de Ikoma. Gratis, 24 h.", "why": "Sitio del festival del fuego Omizutori de 1.250 años; mucho más tranquilo que el salón principal y un mirador gratis excelente.", "tip": "Andá por el sendero atmosférico de faroles de piedra entre Todai-ji y Nigatsu-do. Lindo punto de atardecer si te quedás.", "map": "34.6894,135.8442" },
     { "time": "14:00", "name": "Kasuga Taisha (春日大社)", "walk": "~15 min al sur por el bosque", "see": "Santuario shinto rojo en el bosque. Predio exterior gratis; área interior ¥700. ~3.000 faroles de bronce y piedra. Abre 6:30–17:30.", "why": "~3.000 faroles donados a lo largo de siglos; los corredores oscuros de faroles son la marca. El santuario guardián de Nara.", "tip": "El sendero de acceso está bordeado de faroles de piedra musgosos y ciervos — atmosférico aun sin pagar. Pagá ¥700 por los faroles de bronce en el corredor oscuro.", "map": "34.6819,135.8483" },
     { "time": "15:00", "name": "Jardín Yoshikien (吉城園)", "walk": "Al oeste, de vuelta hacia la estación", "see": "Jardín de tres partes (estanque, musgo, jardín de té). Gratis para visitantes extranjeros (mostrá pasaporte), 9:00–17:00, abierto martes.", "why": "Un jardín tradicional sereno y sin gente — un contraste tranquilo a la multitud de ciervos.", "tip": "⚠️ El jardín Isuien vecino cierra los martes — así que Yoshikien es el jardín de hoy (y gratis).", "map": "34.6862,135.8368" },
     { "time": "15:45", "name": "Naramachi + Koshi-no-ie (ならまち)", "walk": "Al sur de Sanjo-dori", "see": "El barrio de comerciantes antiguo — machiya tradicionales, cafés, sake, dulces de kudzu, y amuletos 'migawari-zaru' (mono rojo). Koshi-no-ie gratis, abierto martes.", "why": "Callejones atmosféricos que muestran cómo vivían los de Nara; los monos 'chivo expiatorio' rojos absorben la mala suerte por vos.", "tip": "Cerrá acá con café/dulces y compras, y después volvé al norte a Kintetsu-Nara (~10–12 min).", "map": "34.6790,135.8290" },
     { "time": "16:45", "name": "Cierre gastronómico en Sanjo-dori", "walk": "De vuelta a la estación", "see": "Últimos bocados: kakinoha-zushi (sushi en hoja de caqui, especialidad de Nara), dulces de kudzu, Nara-zuke (encurtido en heces de sake), y sake.", "why": "Nara se considera cuna del sake refinado; el kakinoha-zushi es el plato sello local.", "tip": "Efectivo — muchos puestos y templos chicos solo toman efectivo.", "map": "34.6820,135.8296" }
    ],
    "special": [
     "🦌 Los ciervos que hacen reverencia — mensajeros sagrados; devolvé la reverencia, dales de comer rápido, y escondé las galletitas de más en el bolso.",
     "👃 El pilar de la fosa nasal en Todai-ji — pasar por el agujero trae iluminación/suerte (confirmado activo en 2026).",
     "🏮 Los 3.000 faroles de Kasuga Taisha — corredores oscuros impactantes en el área interior.",
     "🌄 Nigatsu-do — la mejor vista panorámica gratis de Nara, tranquila y linda.",
     "⚠️ Cierres del martes (29.9): Nakatanidou (golpeo de mochi) e Isuien cerrados. La pagoda de Kofuku-ji con andamios hasta 2034."
    ]
   },
   {
    "id": "doyama",
    "date": "2026-09-29",
    "city": "Osaka",
    "area": "Doyama-cho",
    "emoji": "🏳️‍🌈",
    "title": "Doyama-cho — el barrio gay de Osaka",
    "subtitle": "Martes tranquilo · recorrido de bares · llegada ~21:00",
    "intro": "La principal zona de vida nocturna LGBTQ+ de Osaka, junto a Umeda — más compacta y chica que Ni-chome de Tokio, pero animada y casual, con ~100+ bares gay en edificios apretados. Martes tranquilo = un clima más íntimo y conversador que el finde. Llegan del tour de comida en Shinsekai, arrancan en un bar amable con extranjeros, y dejan que las recomendaciones guíen.",
    "meta": {
     "duration": "Noche",
     "distance": "Compacto — minutos entre bares",
     "start": "Junto a Umeda/Higashi-Umeda, al norte de Ohatsu Tenjin",
     "getThere": "Desde Dotonbori (fin del tour de comida, ~20:30): Midosuji a Umeda ~10 min",
     "end": "Cierre en Eagle Osaka o G Physique",
     "cost": "Entradas baratas: do with cafe ¥300 de cargo por el show drag (martes) + menús ¥1.000–2.000; la mayoría de los bares chicos ¥500–1.000 de cargo de mesa/primera consumición (~¥1.000–1.500 por bar); Eagle Osaka gratis lun–jue (cashless); tren de Shinsekai a Umeda ~¥240 con ICOCA. Presupuesto realista de la noche ~¥5.000–8.000 por persona.",
     "luggage": "La valija grande queda guardada en el Onyado Nono Namba todo el día (también durante la excursión a Nara); para el recorrido de bares salís liviano — solo billetera, efectivo y tarjeta ICOCA, sin bolso.",
     "meal": "Comé y mirá show en do with cafe: menú (¥1.000 regular / ¥1.500 / ¥2.000 premium) con show drag a las 21:00, más ¥300 de cargo del show — plato caliente y entretenimiento en un mismo lugar, ~¥1.500–2.500 por persona."
    },
    "stops": [
     { "time": "21:00", "name": "do with cafe — show de drag temprano", "walk": "Centro de Doyama", "see": "Bar-restaurante con show de drag todas las noches. Formato cena-show, 20+.", "why": "Garantiza entretenimiento drag aun un martes tranquilo, cuando las fiestas de club están muertas. Háganlo temprano — cierra ~24:00 entre semana.", "tip": "Cargo de mesa; precios más altos (formato show). Más de 20 años de historia.", "map": "34.7031,135.5028" },
     { "time": "21:45", "name": "FrenZ-FrenZY — apertura internacional", "walk": "Minutos", "see": "Bar mixto/internacional, karaoke y juegos. Dueño extranjero (Sully), personal que habla inglés.", "why": "El bar más amable con extranjeros de Doyama, a menudo con mayoría no japonesa. Un aterrizaje suave y punto de orientación.", "tip": "Efectivo por las dudas. ⚠️ Los horarios del martes no son seguros — chequeá antes o tené un plan B.", "map": "34.7031,135.5028" },
     { "time": "22:15", "name": "Village — mixto y amplio", "walk": "Minutos", "see": "Bar-club espacioso, manejado por una figura conocida de la escena. Todos los géneros/orientaciones, amable con extranjeros, algo de inglés.", "why": "Charla fácil, público mixto, buena energía a mitad de semana.", "tip": "Los shows de drag son solo el finde — se los pierden el martes, pero el bar en sí es genial entre semana. Efectivo.", "map": "34.7031,135.5028" },
     { "time": "22:45", "name": "Grand Slam — baile y karaoke", "walk": "Minutos", "see": "Bar mixto de baile/karaoke, abrió en 2009. Mayoría extranjeros, personal de afuera, inglés. Karaoke temprano, baile después de medianoche.", "why": "La parada natural para 'arrancar la noche', muy acogedora para turistas.", "tip": "⚠️ Los reportes del día de cierre son contradictorios — verificá que esté abierto el martes antes de contar con él. Efectivo.", "map": "34.7031,135.5028" },
     { "time": "23:30", "name": "Eagle Osaka — de varios pisos, apto entre semana", "walk": "Minutos", "see": "Abrió en 2024, de varios pisos (pista + bar de pie + lounge temático). Muy fácil para extranjeros, cashless. Dom-jue 18:00–02:00, entrada gratis lun-jue.", "why": "Una opción moderna, abierta y cómoda para un martes de noche — un buen cierre.", "tip": "Cashless. Si querés vibra de osos — Dungaree al lado (abierto martes).", "map": "34.7031,135.5028" },
     { "time": "00:15", "name": "G Physique — nightcap casual", "walk": "Minutos", "see": "Bar de barra/de pie casual (ex 'Physique Pride'), abrió en 1993. El dueño Hideki es legendario por su calidez. Tragos baratos, sin cover.", "why": "Un lugar de nightcap relajado, ideal a mitad de semana.", "tip": "P1, edificio Sanyo-Kaikan (arriba de Explosion). Efectivo.", "map": "34.7031,135.5028" }
    ],
    "special": [
     "💴 El efectivo es rey — la mayoría de los bares chicos son solo efectivo (Eagle Osaka es cashless). Cajeros de konbini junto a Umeda.",
     "🍶 Cargo de mesa/primera consumición (¥500–1.000) es habitual; algunos (FrenZY, G Physique) sin cover. ~¥1.000–1.500 por bar.",
     "🤝 La 'cultura de la presentación' — el personal recomienda con gusto y te señala el próximo bar; solo preguntá.",
     "📅 Martes tranquilo (29.9): ⚠️ Explosion cierra los martes. Verificá que FrenZY y Grand Slam estén abiertos. Respaldos seguros entre semana: Eagle Osaka, Village, G Physique.",
     "📸 Preguntá antes de fotografiar — muchos no están fuera del clóset; respetá la privacidad."
    ]
   },
   {
    "id": "yanaka",
    "date": "2026-09-30",
    "city": "Tokyo",
    "area": "Yanaka",
    "emoji": "🐈",
    "title": "Yanaka — la vieja Tokio que quedó en el tiempo",
    "subtitle": "Tarde shitamachi tranquila · ~9 paradas",
    "intro": "El barrio de la 'ciudad baja' (shitamachi) que sobrevivió los bombardeos de la guerra y los terremotos — callejones de madera, templos, un cementerio con sombra, artesanía y gatos en cada esquina. Después del shinkansen de vuelta desde Osaka, es una tarde de 'vieja Tokio': se camina despacio, se come en la calle Yanaka Ginza, y se cierra en un túnel de torii rojos. El miércoles es cómodo — casi todo abierto.",
    "meta": {
     "duration": "~3 horas",
     "distance": "~3,5 km, plano",
     "start": "Estación Nippori (JR Yamanote), salida oeste — al borde del cementerio",
     "getThere": "El NOZOMI 358 llega a la estación de Tokio a las 13:06. Directo a Yanaka: Tokyo→Nippori en la línea Yamanote ~13 min (en la estación ~13:25). Si primero dejan las valijas en el Tokyu Stay Shinjuku: Tokyo→Shinjuku ~14 min, dejarlas, y después Shinjuku→Nippori ~22 min — en la estación ~14:15.",
     "end": "Santuario Nezu → estación Nezu (línea Chiyoda), rumbo a teamLab en Toyosu a la noche",
     "cost": "Casi todo el barrio es gratis: el cementerio, el templo Tenno-ji con el Gran Buda, la galería SCAI y el santuario Nezu con el túnel de torii, todo sin entrada. El gasto real es la comida: el food crawl en Yanaka Ginza ~¥1.500–2.500 por persona, y Kayaba Coffee ~¥1.500 (sándwich de huevo ¥1.000 + café ¥500). Todo con la IC, no hace falta taxi.",
     "luggage": "Las valijas viajaron con ustedes en el NOZOMI 358 (vagón 9, asientos con Oversized Baggage Area) y llegaron a la estación de Tokio a las 13:06. Déjenlas en el Tokyu Stay Shinjuku antes de arrancar y salgan a Yanaka con un daypack y la tarjeta IC (Suica) nomás — nada de arrastrar valijas por los callejones. (El check-in es a las 15:00, pero se pueden dejar las valijas en recepción antes.)",
     "meal": "Imperdible el Kayaba Coffee, en una casa de baños centenaria: el famoso sándwich de huevo tibio ¥1.000 + café ¥500, unos ¥1.500 por persona. Si hay cola, picoteá a lo largo de Yanaka Ginza (yakitori, croquetas, helado) por ~¥1.500."
    },
    "stops": [
     { "time": "13:40", "name": "Cementerio de Yanaka (谷中霊園) + tumba de Yoshinobu", "walk": "De la salida oeste de Nippori", "see": "Un cementerio con sombra e impactante, con una avenida central de cerezos (Sakura-dori). Acá está la tumba de Tokugawa Yoshinobu — el último shogun de Japón. Gratis.", "why": "La vieja Tokio en su forma más contemplativa; el túmulo modesto del shogun que entregó el poder en paz en 1868.", "tip": "Entrá por Sakura-dori desde el lado de Nippori. Es un cementerio en uso — voces bajas.", "map": "35.7268,139.7690" },
     { "time": "14:00", "name": "Templo Tenno-ji + el Buda de Yanaka (天王寺)", "walk": "Al borde del cementerio", "see": "Un patio sereno con un Buda de bronce sentado, fundido en 1690. Gratis.", "why": "Un Buda de 330 años que casi siempre vas a tener para vos, mucho más íntimo que el de Kamakura.", "tip": "Se combina fácil con el cementerio y el Buda, entre Nippori y la calle.", "map": "35.7275,139.7684" },
     { "time": "14:20", "name": "SCAI The Bathhouse — galería en un baño viejo", "walk": "8 min de Nippori", "see": "Galería de arte contemporáneo dentro de un baño público (sento) de 200 años. Gratis. Mar–sáb 12:00–19:00 (cerrado dom/lun).", "why": "El mejor edificio de 'cáscara vieja, contenido nuevo' de Yanaka — entrás bajo la fachada de azulejos original a un cubo blanco.", "tip": "Abierto el miércoles. Mirá su web a la mañana por si hay cambio de muestra.", "map": "35.7202,139.7671" },
     { "time": "14:45", "name": "Kayaba Coffee (カヤバ珈琲)", "walk": "Pegado a SCAI", "see": "Un café retro en un machiya de madera de 1916, sirviendo café desde 1938. Pedí el tamago sando (sándwich de huevo caliente) y café de filtro.", "why": "El kissaten arquetípico de Yanaka — nostálgico, de madera, y todavía excelente.", "tip": "Muy popular y no permite hacer cola afuera — reservá por su web.", "map": "35.7211,139.7663" },
     { "time": "15:15", "name": "Yanaka Ginza (谷中銀座) — crawl de comida", "walk": "Al norte", "see": "Calle comercial retro con ~70 tiendas: menchi-katsu y croquetas (Niku no Suzuki), yakitori, taiyaki, senbei tostado, y donas cola-de-gato (Shippoya).", "why": "El corazón latente del Yanaka shitamachi — barato, rico, alegre, y empapado del motivo de los gatos.", "tip": "Comé caminando; efectivo en los puestos chicos. Esta es la parada de comida principal.", "map": "35.7273,139.7666" },
     { "time": "15:45", "name": "Yuyake Dandan (夕やけだんだん) — las escaleras del atardecer + gatos", "walk": "En el extremo este de la calle", "see": "Escaleras de piedra en lo alto de Yanaka Ginza, que enmarcan toda la calle retro abajo, y punto de encuentro de los gatos callejeros. Gratis.", "why": "La foto postal de Yanaka — la calle vieja enmarcada desde abajo, gatos al sol.", "tip": "Linda foto escaleras abajo hacia la calle, hermosa también de día (se van antes del atardecer por teamLab).", "map": "35.7278,139.7671" },
     { "time": "16:00", "name": "Tiendas de artesanía — Isetatsu / Matsunoya", "walk": "Por los callejones", "see": "Isetatsu: papel chiyogami impreso con xilografías tradicionales (souvenir plano y lindo). Matsunoya: artículos del hogar simples y durables (canastos, cepillos).", "why": "Artesanos de verdad trabajando, no fábricas de souvenirs — el lado artesanal de Yanaka.", "tip": "Isetatsu es lo más fácil para 'comprar algo lindo y fácil de empacar'. Abiertos el miércoles.", "map": "35.7256,139.7645" },
     { "time": "16:15", "name": "El cedro del Himalaya + panadería Mikado", "walk": "Al sur hacia Nezu", "see": "Un cedro del Himalaya de ~20 m que se alza sobre un cruce de 5 callejones, con la panadería Mikadoya a sus pies. Gratis.", "why": "El 'rincón del viejo Yanaka' por excelencia — un árbol gigante, callejones enredados, una panadería diminuta.", "tip": "Llevate un pan/pastelito a la vieja usanza en Mikadoya bajo el árbol.", "map": "35.7245,139.7639" },
     { "time": "16:30", "name": "Santuario Nezu (根津神社) — el túnel de torii", "walk": "10–15 min de Yanaka Ginza", "see": "Uno de los santuarios más antiguos de Tokio — puerta y salón rojos (sobrevivieron la guerra), estanque de carpas, y un túnel de torii rojos ('Otome Inari') — un mini-Fushimi Inari en Tokio. Gratis.", "why": "Un santuario sereno y precioso y el corredor de torii rojos — un cierre lindo y sin gente. (El jardín de azaleas florece en primavera, no en septiembre.)", "tip": "Termina junto a la estación Nezu (línea Chiyoda) — cómodo para seguir a Toyosu/teamLab.", "map": "35.7203,139.7607" }
    ],
    "special": [
     "🌇 Yuyake Dandan + los gatos — la foto postal de Yanaka, la calle vieja y los gatos.",
     "⛩️ El túnel de torii rojos de Nezu — un mini-Fushimi Inari en el corazón de Tokio.",
     "🎨 SCAI The Bathhouse — galería de arte en un baño público de 200 años (muestra de Lee Ufan hasta el 10/10/2026).",
     "☕ Kayaba Coffee — el kissaten retro legendario en un machiya de 1916 (reservá).",
     "🐈 La cultura del gato — esculturas de gatos en los techos, donas cola-de-gato, y un cat café (Nekoemon).",
     "⏰ A la noche teamLab en Toyosu (18:30) — salí de Yanaka para las ~16:45. (El Museo de Escultura Asakura cierra el ingreso a las 16:00 y cierra lun/jue — abre miércoles pero adelantalo.)"
    ]
   },
   {
    "id": "kichijoji",
    "date": "2026-10-01",
    "city": "Tokyo",
    "area": "Kichijoji e Inokashira",
    "emoji": "🦢",
    "title": "Kichijoji e Inokashira — parque, vintage y comida",
    "subtitle": "Mediodía y tarde después de Ghibli · ~10 paradas",
    "intro": "El Museo Ghibli está al borde del parque Inokashira — y la forma más linda de salir de él es a pie hacia el norte por el parque hasta Kichijoji (~15–20 min). El recorrido fluye natural: Ghibli → estanque de Inokashira (botes, santuario) → la ciudad indie (Harmonica Yokocho, arcadas, vintage, comida). A Kichijoji la eligen una y otra vez como uno de los lugares más deseados para vivir en Tokio.",
    "meta": {
     "duration": "~3 horas",
     "distance": "~2,5–4 km",
     "start": "Museo Ghibli → al norte por el parque Inokashira",
     "getThere": "Caminata ~15–20 min de Ghibli por el parque hasta la estación Kichijoji",
     "end": "JR Chuo rápido a Shinjuku ~15 min (últimas compras + cena de despedida)",
     "cost": "Sin entrada al parque ni al santuario Benzaiten (gratis); bote cisne opcional ~¥800–1.000 por 30 min; día de comida callejera — calculá ~¥2.500–3.500 por persona (yakitori Iseya ~¥90–100 el pincho, menchi-katsu de Satou ~¥300); tren JR Chuo a Shinjuku ~¥170 con Suica. No hace falta taxi.",
     "luggage": "Último día en Tokio: la valija grande queda guardada en el Tokyu Stay Shinjuku, salís solo con daypack + tarjeta Suica; volvés a Shinjuku a la tarde para las últimas compras y la cena de despedida.",
     "meal": "Yakitori en Iseya, al borde del parque Inokashira — pinchos de pollo al carbón ~¥90–100 cada uno con una birra fría; comé 8–10 pinchos, unos ¥1.500–2.000 por persona. Y no te pierdas el menchi-katsu de Satou en el camino (~¥300)."
    },
    "stops": [
     { "time": "12:35", "name": "Parque Inokashira (井の頭恩賜公園)", "walk": "Del lado de Ghibli, al norte por el estanque", "see": "Un estanque grande, senderos arbolados, praderas. Gratis, abierto 24 h.", "why": "Un espacio verde con agua poco común en el oeste de Tokio — el corazón emocional del barrio y gran parte de su prestigio.", "tip": "Entrá del lado de Ghibli/Mitaka, caminá al norte por la orilla oeste hacia el muelle y el santuario.", "map": "35.7000,139.5750" },
     { "time": "12:50", "name": "Los botes-cisne del estanque (la leyenda de la ruptura)", "walk": "Al muelle", "see": "Alquiler de botes: a remo ~¥800/30 min, cisne ~¥800–1.000. Se compra en la máquina del muelle.", "why": "Creencia local: la diosa Benzaiten del estanque es celosa y 'maldice' a las parejas que reman juntas a separarse. Una leyenda de más de 200 años.", "tip": "Réanse de la leyenda, o simplemente miren desde la orilla si son supersticiosos. Los botes dependen del clima.", "map": "35.6998,139.5738" },
     { "time": "13:05", "name": "Santuario Inokashira Benzaiten (井の頭弁財天)", "walk": "A un islote del estanque", "see": "Un santuario rojo chico en un islote, por un puentecito. Gratis.", "why": "De origen en el período Heian, restaurado en el siglo XVII — la fuente de la 'maldición de los botes'. Salón rojo reflejado en el agua.", "tip": "Parada muy rápida (5–10 min). Mirá la fuente de agua con forma de dragón y los ema.", "map": "35.6989,139.5720" },
     { "time": "13:20", "name": "Iseya (いせや) — yakitori histórico en la entrada del parque", "walk": "En la entrada del parque a la ciudad", "see": "Yakitori al carbón ~¥90–100 por brochette, birra fría, izakaya de pie en la entrada del parque. Abre desde el mediodía.", "why": "Una institución de ~100 años en Kichijoji — ahumado, sin vueltas, querido. El primer bocado perfecto al salir del parque.", "tip": "Un almuerzo liviano: unas brochettes + birra. Efectivo; puede ser humoso y lleno.", "map": "35.7028,139.5793" },
     { "time": "13:45", "name": "Arcada Sun Road (吉祥寺サンロード)", "walk": "De la salida norte de la estación", "see": "La arcada techada principal que va al norte de la estación — ~150 tiendas (panaderías, moda, comida casual).", "why": "La columna comercial de Kichijoji — a prueba de lluvia, conecta el lado del parque con Harmonica Yokocho.", "tip": "Usala como arteria, no como destino; metete en Harmonica Yokocho y Nakamichi-dori.", "map": "35.7040,139.5798" },
     { "time": "14:00", "name": "Harmonica Yokocho (ハモニカ横丁) — el laberinto de callejones", "walk": "1 min de la salida norte", "see": "Un laberinto denso de ~100 tiendas y comederos diminutos en callejones techados. De día: cafés, una pescadería vieja, dulces. De noche: faroles rojos y bares de pie.", "why": "El lugar más atmosférico de Kichijoji — se llama 'armónica' porque los frentes apretados parecen lengüetas de armónica. Vibra Showa.", "tip": "Al mediodía está tranquilo y curioseable (perfecto para su franja). Llevate un taiyaki 'con alas' crujiente en Amane.", "map": "35.7043,139.5795" },
     { "time": "14:25", "name": "Satou (メンチカツ さとう) — menchi-katsu famoso", "walk": "Junto a Nakamichi-dori", "see": "Carnicería con ventana de takeaway de menchi-katsu (croqueta de carne de res Matsuzaka frita) ~¥300–350. Cola casi permanente. Ventana ~10:00–19:00.", "why": "El snack callejero icónico de Kichijoji — jugoso, carnoso, con cola alrededor de la cuadra.", "tip": "Cola de ~15–40 min — uno hace la fila, el otro curiosea en Sun Road. Comelo caliente en el lugar.", "map": "35.7038,139.5796" },
     { "time": "15:00", "name": "Nakamichi-dori (中道通り) — boutiques y vintage", "walk": "Al oeste de Sun Road", "see": "Una calle de boutiques relajada — moda independiente, vintage (Garnish), homeware, regalos y cafés.", "why": "La esencia de las compras indie curadas de Kichijoji — tiendas chicas de sus dueños, no cadenas.", "tip": "Esta es la calle para curiosear despacio. Pará por un buen café a media tarde.", "map": "35.7045,139.5770" },
     { "time": "15:25", "name": "Vintage / discos / libros", "walk": "Por los callejones cerca de Nakamichi", "see": "Kichijoji es conocida por sus disquerías y ropa vintage, la mayoría a ~10 min de la estación.", "why": "Una escena real de crate-digging y moda de segunda mano — vinilos vintage y ropa americana/europea.", "tip": "Si los discos o el vintage son lo suyo — 30–45 min entre 2–3 tiendas. Si no, sumalo al paseo por Nakamichi.", "map": "35.7048,139.5772" },
     { "time": "15:50", "name": "Tiendas por departamento en la estación + depachika", "walk": "De vuelta a la estación", "see": "Kirarina Keio (conectada a la estación), Atre, Tokyu, PARCO, Marui — últimas compras a prueba de lluvia y sótanos gastronómicos.", "why": "Un cierre cómodo y climatizado junto al tren — sótano de comida (depachika) para snacks del viaje.", "tip": "Cerrá acá para estar ya en la estación para la línea Chuo de vuelta. Comprá snacks de depachika si la cena es tarde.", "map": "35.7030,139.5800" }
    ],
    "special": [
     "🦢 La maldición de los botes-cisne — los celos de Benzaiten que separan parejas; una creencia de 200 años.",
     "🏮 Harmonica Yokocho — dos personalidades: cafés tranquilos de día, laberinto de bares con faroles de noche.",
     "🥩 Satou — menchi-katsu de carne Matsuzaka, un snack de culto con cola permanente.",
     "🍢 Iseya — yakitori de cien años, brochettes a ¥90 y birra en la entrada del parque.",
     "🛍️ Merch de Ghibli — la tienda oficial del museo (Mamma Aiuto!) está solo dentro del museo; comprá antes de salir.",
     "📅 1/10 = jueves — los mercados de finde y los artistas callejeros no funcionan; no cuenten con ellos."
    ]
   }
  ]
 }
};
