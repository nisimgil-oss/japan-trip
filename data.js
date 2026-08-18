/* data.js — Option A · booked hotels + luggage logistics per day. bilingual he/es. */
window.TRIP_DATA = {
 "v": "bi-optA-12",
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
    "summary": "יום של חושים וצבעים: שוק טסוקיג'י, מקדש אסאקוסה, שקיעה אגדית מ-Shibuya Sky ולילה רועש ב-Ni-chome. ביום הזה טוקיו מתגלה בשלמותה.",
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
      "tips": "הגדירו אלארם — השקיעה ב-Shibuya Sky לא מחכה לאיש.",
      "cost": "חינם",
      "booking": ""
     },
     {
      "start": "16:45",
      "end": "18:15",
      "type": "sightseeing",
      "area": "Shibuya (Shibuya Sky)",
      "title": "Shibuya Sky בשעת הזהב",
      "desc": "הגג הפתוח של Shibuya Sky הוא אחד מהנופים הרומנטיים ביותר בטוקיו: ים האורות של הצומת המפורסמת בעולם, שמיים כתומים-ורודים, ואתם יחד מעל הכול. ממש שווה כל ין.",
      "tips": "הזמינו סלוט שקיעה ספציפי — הפופולריים נגמרים שבועות מראש. לבשו שכבה — קר בגובה.",
      "cost": "¥2,000–2,500 לאדם",
      "booking": "יש להזמין מראש סלוט שקיעה ב-Shibuya Sky — נגמר שבועות מראש",
      "highlight": true
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
     "שיבויה סקיי בשבת של שבוע כסף: חלון ההזמנות נפתח 14 יום מראש (בסביבות 5 בספטמבר) בחצות JST — שחרור אזעקה כבר עכשיו. שקיעה בטוקיו ב-19 בספטמבר היא כ-18:00; הזמינו כניסה ל-17:00 או 17:15 לגולדן אוור מושלם. מחיר אחרי 15:00: ¥3,700 לאדם.",
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
     "ה-Gachapon Kaikan באקיהברה סוגר ב-19:00 בימי ראשון — אל תשמרו אותו לסוף הערב. לכו לשם בין 16:30–18:30 לפני ארוחת הערב."
    ]
   },
   {
    "date": "2026-09-21",
    "dow": "Mon",
    "city": "Tokyo",
    "title": "טוקיו — סדנה, Harajuku ו-Shibuya",
    "summary": "בוקר יוצרים בסדנת בישול, אופנת קוואיי ב-Harajuku, רוגע ביער Meiji, וקניות בשיבויה — יום טוקיו אחרון לפני האקונה.",
    "hotel": "🏨 HOTEL AMANEK Shinjuku Kabukicho · Kabukicho (✓ נסגר · 18→22, 4 לילות)",
    "events": [
     {
      "start": "11:30",
      "end": "13:30",
      "type": "experience",
      "area": "Tokyo",
      "title": "סדנת בֶּנטו קוואאי / סושי (להזמין!)",
      "desc": "סדנה אנימית וטעימה לזוג — בֶּנטו קוואאי בשינג׳וקו (~1.5ש׳) או הכנת סושי ליד שינג׳וקו (~2ש׳). Silver Week מתמלא ראשון — הזמינו מראש (ביטול חינם עד 24ש׳).",
      "tips": "בואו רעבים; סינרים מסופקים.",
      "cost": "כ-¥5,000–9,000 לאדם",
      "booking": "GetYourGuide / byFood"
     },
     {
      "start": "13:30",
      "end": "14:30",
      "type": "food",
      "area": "Harajuku",
      "title": "צהריים ב-Harajuku",
      "desc": "אוכל צבעוני ברחוב Takeshita או ביסטרו נחמד ב-Omotesando.",
      "tips": "",
      "cost": "כ-¥1,500–3,000 לאדם",
      "booking": ""
     },
     {
      "start": "09:30",
      "end": "11:00",
      "type": "sightseeing",
      "area": "Harajuku",
      "title": "Harajuku ו-Meiji Jingu",
      "desc": "רחוב Takeshita הצבעוני, קרפים, אופנת קוואיי, ואז רוגע ביער המקדש Meiji Jingu.",
      "tips": "Meiji Jingu חינם ורגוע גם בשעות עמוסות.",
      "cost": "חינם–¥1,000",
      "booking": "",
      "highlight": true
     },
     {
      "start": "15:30",
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
     "סדנת הבישול — הזמינו ל-Cooking Sun Tokyo (שינאנומאצ'י) או Ramen Cooking Tokyo עכשיו: קיבולת 8 אנשים ו-Silver Week = נחטף ראשון. getyourguide.com מאפשר ביטול חינם עד 24 שעות.",
     "מייג'י ג'ינגו ב-21.9 (חג לאומי): הגיעו לפני 10:00 — היער שקט, אור בוקר מקסים בין עצי הקמפור, בלי דחיפות. ב-12:00-15:00 הצפיפות שיא. ב-Temizuya (כיור הטהרה בכניסה) שטפו ידיים בנחת — שמאל, ימין, פה, ידית — לפני הכניסה לחצר.",
     "Takeshita Street: כניסה מצד תחנת JR Harajuku (לא מהצד של אומוטסאנדו) חוסכת את הצפיפות הגרועה ביותר. הפתיחה ~10:00-11:00; צהריים ב-Harajuku = אנגוס רסטורנט (burgers), Kawaii Monster Café, או קריפ מאחד הדוכנים המקוריים ברחוב."
    ],
    "logistics": {
     "he": "בוקר אחרון בטוקיו: שלחו את המזוודה הראשית ל-Candeo קיוטו (Yamato takkyubin) — שליחה כבר ב-21.9 נותנת מרווח לעיכובי שבוע הכסף; ודאו שהמלון שומר חבילות שמגיעות לפני הצ׳ק-אין (25.9). ממשיכים להאקונה+קיסו עם תיק-לילה בלבד.",
     "es": "Última mañana en Tokio: despachen la valija principal a Candeo Kioto (takkyubin de Yamato) — mandarla ya el 21/9 da margen ante las demoras de Silver Week; confirmá que el hotel guarda paquetes que llegan antes del check-in (25/9). Siguen a Hakone+Kiso solo con bolso de una noche."
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
      "end": "10:30",
      "type": "transport",
      "area": "Shinjuku עד Hakone-Yumoto",
      "title": "רומנסקאר — הרכבת הרומנטית של הקונה",
      "desc": "רכבת הרומנסקאר של אודקיו מגיעה מסינג'וקו ישירות אל Hakone-Yumoto עם חלונות פנורמיים ונוף מדהים. קנו גם את Hakone Free Pass שיחסוך לכם כסף בכל התחבורה המקומית ביום הזה ולמחרת.",
      "tips": "הרומנסקאר מתמלאת מהר בשבוע הכסף — הזמינו מושבות באתר Odakyu (odakyu.jp) מספר ימים מראש. בחרו מושבות בכיוון A לנוף הטוב ביותר.",
      "cost": "¥2,470 רומנסקאר + ¥6,500–7,000 Hakone Free Pass לאדם",
      "booking": "הזמנת מושבות ברומנסקאר + Hakone Free Pass — הזמינו מוקדם, שבוע הכסף עמוס",
      "dur": "~85 דק׳"
     },
     {
      "start": "11:30",
      "end": "14:30",
      "type": "sightseeing",
      "area": "Hakone Open Air Museum",
      "title": "מוזיאון הפסלים בשמיים הפתוחים (עם אמבט רגליים)",
      "desc": "פסלי הנרי מור בין ההרים + אמבט רגליים חם (ashiyu) בשטח. בוחרים מוזיאון אחד בלבד — לא גם אגם אשי, אין זמן לשניהם ב-Silver Week.",
      "tips": "ה-Open-Air Museum כלול ב-Hakone Free Pass, כך שהכניסה חינם. אם אתם עייפים מהנסיעה, דלגו ישירות לרייוקאן — המנוחה חשובה לפני ערב האונסן.",
      "cost": "חינם עם Hakone Free Pass (ללא הפאס: ¥1,600 לאדם)",
      "booking": ""
     },
     {
      "start": "15:00",
      "end": "16:30",
      "type": "onsen",
      "area": "Hakone-Yumoto",
      "title": "הגעה לרייוקאן — הרגע הזה מגיע",
      "desc": "צ'ק-אין ברייוקאן בגורה: קבלת פנים עם תה ירוק ומתוקים יפניים, החלפה ליוקאטה, וטבילה ראשונה במי האונסן עם נוף ההרים. הרגישו את הלחץ מתפוגג.",
      "tips": "השאירו את הנעליים בכניסה ועברו לסנדלי הרייוקאן (גֶּטה) — זה חלק מהחוויה. צלמו זה את זה ביוקאטה לפני שהאונסן מאדים את הפנים.",
      "cost": "כלול בלינה",
      "booking": ""
     },
     {
      "start": "16:30",
      "end": "17:30",
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
      "start": "10:30",
      "end": "11:30",
      "type": "food",
      "area": "Hakone-Yumoto",
      "title": "צהריים בעיירת האונסן יומוטו",
      "desc": "סובה/אודון מקומי וקניית manju (עוגיות אונסן) ברחוב יומוטו לפני העלייה למוזיאון."
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
      "end": "13:00",
      "type": "transport",
      "area": "Hakone-Yumoto עד Nagoya עד Magome",
      "title": "מסע לעמק קיסו — האקונה → מגומה",
      "desc": "האקונה→אודוארה (~15 דק׳) · שינקנסן אודוארה→נגויה (~1:05) · Ltd.Exp שינאנו נגויה→נקאטסוגאווה (~50 דק׳) · אוטובוס→מגומה (~30 דק׳). ירידה נופית אל יפן הכפרית.",
      "tips": "המזוודה הראשית כבר בדרך לקיוטו — נוסעים עם תיק-לילה.",
      "cost": "",
      "booking": "",
      "dur": "~3–3.5 שעות · 4 קטעים"
     },
     {
      "start": "12:40",
      "end": "13:30",
      "type": "food",
      "area": "Magome",
      "title": "צהריים במגומה — סובה וגוהיי-מוצ׳י",
      "desc": "סובה שינשו וגוהיי-מוצ׳י (אורז צלוי ברוטב מיסו-אגוז) — הטעם של הנקאסֶנדו.",
      "tips": "",
      "cost": "כ-¥1,000–1,800 לאדם",
      "booking": ""
     },
     {
      "start": "14:00",
      "end": "16:00",
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
      "start": "16:00",
      "end": "16:30",
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
      "start": "16:30",
      "end": "17:15",
      "type": "shopping",
      "area": "Magome",
      "title": "קניית sake וחטיפים לחגיגה",
      "desc": "חנויות מגומה סוגרות ~17:00 — קנו sake מקומי (קיסו), ממתקים (gohei-mochi) ואולי עוגה קטנה לחגיגה בווילה."
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
     "מסרו את התיקים במרכז המידע במגומה לא יאוחר מ-09:00 (הפתיחה היא 08:30). איסוף בצומאגו בין 13:00–17:00 — אל תחמיצו את חלון האיסוף אחרת תישאו את התיקים על גב.",
     "ארוחת הערב בנאגיסו היא נקודה עיוורת: העיירה קטנה מאוד ואין מסעדות ערב ביתיות שמובטח שיהיו פתוחות. האפשרות הבטוחה ביותר היא ארוחת צהריים/מוקדמת-ערב בצומאגו עצמה (Kongoya — סובה + גוהיי-מוצ'י בבית עץ עתיק), ורכישת מצרכים בסופרמרקט ליד תחנת נאגיסו לארוחה קלה בווילה AKARI."
    ]
   },
   {
    "date": "2026-09-25",
    "dow": "Fri",
    "city": "Kyoto",
    "title": "מצומאגו לקיוטו: עיר הגיישות מחכה",
    "summary": "יום של מעברים יפים — הפרידה מהכפר השקט של צומאגו ועלייה לקיוטו הדרמטית. הערב: פנסי גיון ושדרות פונטוצ'ו שמחממות את הלב.",
    "hotel": "🏨 Candeo Hotels Kyoto Karasuma Rokkaku (✓ נסגר · 25→28) · מרכז קיוטו, 4★",
    "events": [
     {
      "start": "08:00",
      "end": "09:00",
      "type": "food",
      "area": "Tsumago",
      "title": "ארוחת בוקר ופרידה שקטה מצומאגו",
      "desc": "ארוחת בוקר אחרונה בצומאגו — אולי בפנסיון שלכם או בחנות קטנה בסמטה — ואז סיבוב פרידה ברחובות האבן השקטים לפני שהרכבות לוקחות אתכם הלאה. הכפר בבוקר מוקדם שייך רק לכם.",
      "tips": "קחו תמונה אחרונה מול הכנסייה הישנה לפני שהיום הקיצי מתעורר עם תיירים.",
      "cost": "¥500–1,500 לאדם",
      "booking": ""
     },
     {
      "start": "09:30",
      "end": "13:30",
      "type": "transport",
      "area": "Tsumago עד Kyoto",
      "title": "מסע חזרה: צומאגו → קיוטו",
      "desc": "אוטובוס צומאגו→נאגיסו (~10 דק׳) · Ltd.Exp שינאנו נאגיסו→נגויה (~1:20) · שינקנסן נגויה→קיוטו (~35 דק׳). המזוודות שנשלחו מראש כבר מחכות בחדר.",
      "tips": "הזמינו מראש ב-SmartEX — המושבים ליד החלון בצד ימין בדרך לקיוטו נותנים נוף לאורך המסע.",
      "cost": "¥4,000–6,000 לאדם",
      "booking": "שינקנסן נגויה → קיוטו — הזמינו ב-SmartEX",
      "dur": "~2.5 שעות · 3 קטעים"
     },
     {
      "start": "15:00",
      "end": "16:00",
      "type": "rest",
      "area": "Kyoto",
      "title": "שעות מנוחה במלון",
      "desc": "אחרי בוקר של נסיעות, הדירה שלכם בקיוטו פתוחה ומחכה. זמן לנשום, להתפנות ולהיכנס לקצב של העיר.",
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
      "start": "13:45",
      "end": "14:45",
      "type": "food",
      "area": "Kyoto",
      "title": "צהריים קל ליד המלון (קרסומה-רוקאקו)",
      "desc": "הצ׳ק-אין ב-Candeo מ-15:00 — עד אז אוכלים קל בשכונת קרסומה/ניישיקי ומשאירים מזוודה בקבלה."
     }
    ],
    "logistics": {
     "he": "אספו במלון בקיוטו את המזוודה הראשית שנשלחה מטוקיו.",
     "es": "Retiren en el hotel de Kioto la valija principal enviada desde Tokio."
    },
    "cultural": "גיון ופונטוצ'ו הן שתי מ-חמשת ה'האנאמאצ'י' — שכונות הפרחים — של קיוטו, שבהן עדיין שורדת מסורת הגיישה (הנקראת בקיוטו 'גיאיקו', ובמשמעות 'אישה של אמנות'). האוֹצ'איה — בית התה — אינו מקום לשתות תה: הוא מועדון פרטי בלעדי שבו אורח מוזמן בלבד רשאי להיכנס לשמוע שמיסן, לצפות בריקוד, ולהתענג על אובנזאי. הדלת הסגורה והמסך הבמבוקי הן לא עיצוב — הן גבול חברתי של מאות שנים. ביסוד האסתטיקה הזאת עומד מושג ה'מָה' (間) — הרֶווַח, ההפסקה, מה שאינו אמור. גיישה שזה עתה עברה מולכם ולא הסתכלה לעיניכם לא הייתה גסה — היא שמרה על ה'מא' בינה לביניכם.",
    "tips": [
     "חלון הזמן הצר ביותר הוא המעבר בנאגויה — פלטפורמות ה-Shinkansen רחוקות מפלטפורמות ה-Shinano Express. תנו 15–20 דקות לפחות למעבר; אם הפסדתם את הנוזומי הרצוי — הבא יוצא תוך 10–15 דקות.",
     "המזוודה הגדולה מחכה אתכם ב-Candeo מאז 23.9 — ברגע שמגיעים, בקשו אותה מהקבלה גם לפני כניסה לחדר, ותוכלו להחליף בגדים בלובי לקראת ערב גיון.",
     "בגיון (רחוב הנאמיקוג'י): אין לצלם גיישות/מאיקות מקרוב, לחסום את דרכן, או לגעת בהן — קיים איסור עירוני פורמלי. צלמו מרחק מכובד."
    ]
   },
   {
    "date": "2026-09-26",
    "dow": "Sat",
    "city": "Kyoto",
    "title": "שחר בין הטוריי — יום 9",
    "summary": "יום שלם של קיוטו במיטבה: עלייה לפנות בוקר בין אלפי שערי הטוריי הארגמניים של פושימי אינארי, ואחר כך יערות הבמבוק ואמהות הוואבי-סאבי של אראשיימה — והכל נחתם בטיול טעימות בשוק ניישיקי ובארוחת שחיטה מפנקת לשניים.",
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
      "start": "10:30",
      "end": "13:00",
      "type": "nature",
      "area": "Arashiyama",
      "title": "חורשת הבמבוק וגן טנריו-ג'י",
      "desc": "חורשת הבמבוק של אראשיימה היא אחד הנופים האיקוניים של יפן — גבעולים ענקיים מתנדנדים בשמיים ומפיקים רחש מרגיע ומסתורי. מיד לאחר מכן, גן הזן של מקדש טנריו-ג'י (UNESCO) פורש שלווה מוחלטת עם אגם בשיקוף ההרים.",
      "tips": "הכנסו לגן הטנריו-ג'י ישר לאחר הבמבוק — המנות המשולבות הן הכי כדאיות. לפנות בוקר הגן עמוס פחות.",
      "cost": "¥500–1,000 לאדם (גן בלבד)",
      "booking": "",
      "highlight": true
     },
     {
      "start": "13:00",
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
      "start": "17:30",
      "end": "19:00",
      "type": "food",
      "area": "Kyoto (Nishiki)",
      "title": "טעימות בשוק ניישיקי",
      "desc": "\"מטבחה של קיוטו\" — רחוב מקורה ורועש של 400 שנה עם דוכנים של כבישים, טופו מעושן, דגי קיוטו, ממתקים וצלחות קטנות. אכלו בהליכה, גלו, נהנו מהצפיפות המבסוטת.",
      "tips": "אל תגיעו רעבים מדי — הטעימות מצטברות לארוחה שלמה. חפשו את הדוכן של Aritsugu לסכיני מטבח מפורסמים — מתנה לבשלנים.",
      "cost": "¥1,000–2,500 לאדם (תלוי בטעימות)",
      "booking": ""
     },
     {
      "start": "19:30",
      "end": "21:30",
      "type": "food",
      "area": "Kyoto",
      "title": "ארוחת סוקיאקי או שאבו-שאבו לשניים",
      "desc": "סיום ערב פנוק במסעדת בשר קיוטואית — סוקיאקי עם ביצה טרופה וגבעולי ירק, או שאבו-שאבו עם רטבי פונזו ושומשום. שתי חוויות טבילה שמחברות בין שניים ליד הסיר.",
      "tips": "חפשו מסעדות עם \"Kyoto wagyu\" בסביבת גיאון או שינג'וקו-סוג'י — ההבדל באיכות הבשר ניכר. הזמנה מראש מומלצת בשישי ושבת.",
      "cost": "¥4,000–8,000 לאדם",
      "booking": "הזמינו שולחן מראש דרך האתר של המסעדה או Tableall — ערבי שבת עמוסים."
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
      "start": "08:30",
      "end": "10:00",
      "type": "sightseeing",
      "area": "Kyoto (Northwest)",
      "title": "ביתן הזהב — קינקאקו-ג'י",
      "desc": "הגעה בדיוק עם פתיחת השערים מאפשרת לכם ליהנות מהבבואה המושלמת של הביתן בבריכה לפני שההמון מגיע. אוויר הבוקר הצלול של ספטמבר הופך את הזהב לחי ומרטיט. קחו את הזמן להקיף את הגן — יש נקודות צילום שרוב התיירים מפספסים.",
      "tips": "הגיעו ממש בשמונה וחצי — המוני התיירים מגיעים רק אחרי תשע. בסוף הסיור יש תה-עם-מתוק מסורתי בצריף קטן — שווה עצירה.",
      "cost": "¥500 לאדם",
      "booking": ""
     },
     {
      "start": "10:30",
      "end": "12:30",
      "type": "sightseeing",
      "area": "Kyoto (Higashiyama)",
      "title": "קיומיזו-דרה + שבילי ניינזקה וסאנינזקה",
      "desc": "קיומיזו-דרה עומדת על גבי מדרגות עץ מרהיבות עם נוף פנורמי על קיוטו — ספטמבר מתחיל לגעת בצמחייה בגוונים חמים ראשונים. מהמקדש, גלשו במורד הסמטאות המרוצפות של ניינזקה וסאנינזקה — שמורות לפלא, עם חנויות פוריות ובתי תה ישנים. זו קיוטו כפי שחלמתם עליה.",
      "tips": "הדרך בין שתי הסמטאות קצרה ומקסימה — אל תחפזו. שימו לב לסימן המחיר לפני שאתם נכנסים לחנויות המזכרות; האיכות משתנה מאוד.",
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
      "tips": "הזמינו מראש חבילה לזוג; בדקו שהסדנה מתנהלת גם באנגלית. סיימו עד 15:30 — משם ~20 דק' לג'ודוג'י (אוטובוס/מונית) לסובה.",
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
    "summary": "יום טיול יומי לנארה — מפגש עם צבאים מקודשים ואחד מהגדולים בבודהות היפן — ואחר כך שובה לאוסקה לחגיגת לילה גאה בדויאמה-צ'ו.",
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
      "start": "16:00",
      "end": "18:00",
      "type": "rest",
      "area": "Osaka",
      "title": "חזרה לאוסקה ומנוחה",
      "desc": "נסיעה חזרה לאוסקה ומנוחה חיונית לפני הלילה הגדול. תזמנו מקלחת, קפה קטן ומוזיקה שמשנה את המצב.",
      "tips": "חזרו לא יאוחר מ-17:30 כדי שתהיה לכם שעה ורבע של נשימה אמיתית לפני היציאה לערב.",
      "cost": "¥1,000–1,200 לאדם (נסיעה חזרה)",
      "booking": ""
     },
     {
      "start": "19:00",
      "end": "20:30",
      "type": "food",
      "area": "Osaka (Namba)",
      "title": "ערב ביקינקו או איזאקאיה — Namba",
      "desc": "ארוחת ערב עשירה ועמוקה: ביקינקו — בשר על גריל שולחני — הוא חגיגה של ריח, עשן ונגיסות. לחלופין, איזאקאיה עם שרשרת צלחות קטנות ושאקה קרה — כל אחת אפשרות שמשתפת ומשמחת.",
      "tips": "ב-Namba מומלצת Gyukaku לביקינקו נגיש, או חפשו איזאקאיה עם תפריט אנגלי ברחוב Dotonbori הסמוך. הזמינו מושב ליד הגריל לחוויה מלאה.",
      "cost": "¥2,500–5,000 לאדם",
      "booking": ""
     },
     {
      "start": "20:30",
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
    "summary": "נפרדים מאוסקה בארוחת בוקר אחרונה ויוצאים בשינקנסן לטוקיו. אחר הצהריים — שוטטות רכה בין חתולים ומקדשים ביאנאקה, ואחריה קניות בשיבויה לפני ארוחת ערב מפנקת באביסו.",
    "hotel": "🏨 Tokyu Stay Shinjuku (✓ נסגר · 30→2.10) · שינג'וקו · מכונת כביסה בחדר",
    "events": [
     {
      "start": "09:00",
      "end": "10:00",
      "type": "food",
      "area": "Osaka",
      "title": "ארוחת בוקר אחרונה באוסקה",
      "desc": "צאו לסיבוב אחרון בשכונה לפני עזיבה — קפה יפני, טוסט עם חמאה ורוטב סויה, או takoyaki מוקדם לדרך. תנו לאוסקה לסגור בטוב.",
      "tips": "שמרו מקום בבטן לטוקיו; הצ'ק-אאוט בדרך כלל עד 11:00 אז תכננו בהתאם.",
      "cost": "¥800–1,500 לאדם",
      "booking": ""
     },
     {
      "start": "10:45",
      "end": "13:20",
      "type": "transport",
      "area": "Shin-Osaka עד Tokyo",
      "title": "שינקנסן לטוקיו — הגעה הביתה",
      "desc": "רכבת Nozomi מ-Shin-Osaka מגיעה לטוקיו תוך כ-2.5 שעות — גלו את היופי שבמעבר הזריז בין שתי מטרופולינים. תיהנו מהנוף המשתנה ומכוס קפה מהקיוסק.",
      "tips": "שמרו את מזוודות הצד בתא העליון ואת הגב למטה — הנסיעה חלקה ונוחה לעבודה או לנמנום.",
      "cost": "כלול ב-JR Pass",
      "booking": "הזמינו מושבים Shin-Osaka → Tokyo ב-SmartEX מראש",
      "dur": "~2:30 שעות"
     },
     {
      "start": "14:00",
      "end": "16:00",
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
      "start": "16:00",
      "end": "18:00",
      "type": "shopping",
      "area": "Shibuya",
      "title": "שיבויה / הרג'וקו — קניות אחרונות",
      "desc": "Takeshita Street להייפ והומור, Omotesando לעיצוב ואופנה, וCat Street לגאצ'ות הנסתרות. יום לפני הלפני-אחרון — זמן מושלם לציד מתנות ובוטיקים.",
      "tips": "Tokyu Hands בשיבויה ו-Village Vanguard ב-Harajuku — אנימה, גאדג'טים ומתנות מוזרות מקסימות שלא תמצאו בשדה התעופה.",
      "cost": "¥2,000–10,000 לאדם (לפי פיתוי)",
      "booking": ""
     },
     {
      "start": "19:00",
      "end": "21:00",
      "type": "food",
      "area": "Tokyo (Ebisu)",
      "title": "ארוחת ערב רומנטית באביסו",
      "desc": "Ebisu ו-Meguro מציעות את שילוב הנדיר של איזאקאיה מודרנית ובסטרו טוקיואי בטיפול יד בוגרת — ברחובות הצדדים תמצאו מסעדות קטנות עם תפריטי omakase, יינות יפניים ואווירה שקטה. ארוחה לציון יום ההולדת ה-40 לפני הלילה האחרון.",
      "tips": "חפשו מקומות עם מושבים בבר המטבח — לראות את השף עובד זה חלק מהחוויה; הזמינו בהצגת עצמכם כצמד חוגג.",
      "cost": "¥5,000–9,000 לאדם",
      "booking": "",
      "highlight": true
     }
    ],
    "logistics": {
     "he": "לוקחים את המזוודות בשינקנסן לטוקיו (הזמינו מושב \"מטען גדול\" אם מזוודה מעל 160 ס\"מ). שליחת takkyubin מאוסקה מגיעה רק למחרת.",
     "es": "Llevan las valijas en el shinkansen a Tokio (reserven asiento \"equipaje grande\" si la valija supera 160 cm). El envío takkyubin desde Osaka llega recién al día siguiente."
    },
    "cultural": "יאנאקה שורדת את הדורות לא בזכות שיקום — אלא בזכות שלא נשרפה. בעוד שטוקיו האחרת נמחתה פעמיים, בהרעידת הקרקע של 1923 ובהפצצות של 1945, יאנאקה נותרה על כנה — בתי העץ, בתי-הקברות הבודהיסטים, ורחובות הסמטאות שלה שרדו. הרעיון שעומד מאחורי שמירה זו נקרא בפי היפנים 'שיטאמאצ'י' — העיר התחתונה, מקום מגורי הסוחרים, האומנים, ואנשי העם בתקופת אדו. בניגוד לחצרות הגבוהות על הגבעות, שיטאמאצ'י שמרה על אדנות אחרת: אנושית, חמה ורועשת, שבה רוח השכונה עצמה נחשבת לדבר שצריך לשמרו.",
    "tips": [
     "בשינקנסן Nozomi: תזמנו כיסאות בצד ה-E (החלון הימני בכיוון הנסיעה) — נוף פוג'י בדרך לטוקיו נראה מצד ימין לאחר Shin-Fuji. הגיעו לרכבת לפחות 10 דקות לפני יציאה — הרכבות יוצאות בדייקנות שניה.",
     "ביאנאקה: קנו מנצ'י-קטסו (כדורי בשר מטוגנים) חמים ישר מהמאפייה ברחוב Yanaka Ginza — אוכלים עומדים תוך כדי הליכה (תכונה מקומית שמכנים אחילוי, 'אוכל הלוך'). אל תחמיצו את מדרגות Yuyake Dandan לתמונה של הרחוב מלמעלה.",
     "בשיבויה: Loft (7 קומות) ו-Tokyu Hands הם כתובת לציודי נסיעה, קוסמטיקה, וסובנירים ייחודיים לא מיוצאים. אם קניות האחרונות כוללות מוצרי ניגון/אנימה — ה-Village Vanguard בשיבויה מצויין."
    ]
   },
   {
    "date": "2026-10-01",
    "dow": "Thu",
    "city": "Tokyo",
    "title": "יום 14 — גיבלי, אור ופרידה בטוקיו",
    "summary": "יום הפרידה הגדול: בוקר של פלאים בגיבלי, אחר צהריים שקוע בתוך יצירת האמנות של teamLab Planets, וערב חגיגי עם אומאקאסה שמסכם עשרים שנה ויום הולדת 40 עם כוסית פרידה ב-Ni-chome. טוקיו נפרדת מכם בגדול.",
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
      "end": "18:00",
      "type": "experience",
      "area": "Toyosu (teamLab Planets)",
      "title": "teamLab Planets, Toyosu",
      "desc": "חווית האמנות הדיגיטלית הנסחטת ביותר ביפן — ובצדק. יורדים יחפים לתוך מים, שוכבים מתחת לפרחים אינסופיים, שוקעים בין אורות שמגיבים לנגיעה. לא אמנות צופה בה — אמנות שחיים בתוכה.",
      "tips": "לבשו בגדים שאפשר לגלול מעלה (ירגליים וקרסוליים נרטבים). פתרון נוסף: שמלה קצרה או מכנסיים קצרים.",
      "cost": "¥3,200–3,600 לאדם",
      "booking": "teamLab Planets — הזמינו כרטיס עם כניסה בשעה קבועה מראש",
      "highlight": true
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
      "start": "06:00",
      "end": "06:45",
      "type": "food",
      "area": "Tokyo",
      "title": "ארוחת בוקר מהירה ואריזה אחרונה",
      "desc": "קפה חם, onigiri או לחמנייה מהקונבייניאנס הקרוב, ובדיקה אחרונה שהסוברינירים בטוחים בתוך הבגדים הלא-מקופלים. רגע שקט לפני הריצה.",
      "tips": "סדרו את הטעינה של חשבון מי Suica שנשאר — אפשר להחזיר מזומן בדלפק JR במסוף.",
      "cost": "¥600–1,200 לאדם",
      "booking": ""
     },
     {
      "start": "07:00",
      "end": "09:10",
      "type": "transport",
      "area": "Shinjuku עד Narita T1",
      "title": "N'EX לנמל Narita — הפרדה מ-Shinjuku",
      "desc": "ה-Narita Express מ-Shinjuku מגיע ל-Narita T1 בכ-90 דקות — ישיבות שמורות, מרווח לכבודה גדולה, ונוף עירוני שמפנה מקום לשדות. זה הסיום שיפן ראויה לו: מסודר, בזמן, ויפה.",
      "tips": "רכשו כרטיסי N'EX מראש דרך אתר JR-East או אוטומטים בתחנה; קחו רכבת שמגיעה לפחות שלוש שעות לפני הטיסה.",
      "cost": "¥3,070 לאדם (Shinjuku→Narita T1)",
      "booking": "",
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
       "name": "teamLab / Shibuya Sky",
       "sub": "2–4 שבועות מראש",
       "desc": "כניסה בשעה קבועה, נגמר שבועות מראש. teamLab: בחרו אחד; Shibuya Sky: סלוט שקיעה."
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
    "summary": "Un día de sabores y alturas: el mercado de Tsukiji, el templo de Asakusa, una puesta de sol épica desde Shibuya Sky y la noche más intensa de Ni-chome. Así se presenta Tokio de verdad.",
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
      "tips": "Poné alarma — la puesta del sol en Shibuya Sky no espera a nadie.",
      "cost": "gratis",
      "booking": ""
     },
     {
      "start": "16:45",
      "end": "18:15",
      "type": "sightseeing",
      "area": "Shibuya (Shibuya Sky)",
      "title": "Shibuya Sky en la hora dorada",
      "desc": "La azotea abierta de Shibuya Sky es uno de los panoramas más románticos de Tokio: el cruce más famoso del mundo bañado en naranja y rosa, y ustedes dos por encima de todo. Vale cada yen.",
      "tips": "Reservá el slot de atardecer con anticipación — los horarios populares se agotan semanas antes. Llevá una capa, arriba hace frío.",
      "cost": "¥2.000–2.500 por persona",
      "booking": "Reservá con anticipación el slot de atardecer en Shibuya Sky — se agota semanas antes",
      "highlight": true
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
     "Shibuya Sky un sábado de Silver Week: la ventana de reservas abre 14 días antes (~5/9) a medianoche JST — poné alarma ya. El atardecer del 19/9 es ~18:00; reservá 17:00 o 17:15 para la golden hour. Después de las 15:00: ¥3.700 p/persona.",
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
     "El Gachapon Kaikan de Akihabara cierra a las 19:00 los domingos — no lo dejes para el final. Andá entre 16:30–18:30, antes de cenar."
    ]
   },
   {
    "date": "2026-09-21",
    "dow": "Mon",
    "city": "Tokyo",
    "title": "Tokio — taller, Harajuku y Shibuya",
    "summary": "Mañana creativa en un taller de cocina, moda kawaii en Harajuku, la calma del bosque Meiji y compras en Shibuya — último día en Tokio antes de Hakone.",
    "hotel": "🏨 HOTEL AMANEK Shinjuku Kabukicho · Kabukicho (✓ reservado · 18→22, 4 noches)",
    "events": [
     {
      "start": "11:30",
      "end": "13:30",
      "type": "experience",
      "area": "Tokyo",
      "title": "Taller de bento kawaii / sushi (¡reservar!)",
      "desc": "Un taller animé y rico para la pareja — bento kawaii en Shinjuku (~1,5h) o hacer sushi cerca de Shinjuku (~2h). Silver Week se llena primero — reservá con tiempo (cancelación gratis hasta 24h).",
      "tips": "Vengan con hambre; dan delantales.",
      "cost": "¥5.000–9.000 por persona",
      "booking": "GetYourGuide / byFood"
     },
     {
      "start": "13:30",
      "end": "14:30",
      "type": "food",
      "area": "Harajuku",
      "title": "Almuerzo en Harajuku",
      "desc": "Comida colorida en Takeshita o un bistró lindo en Omotesando.",
      "tips": "",
      "cost": "¥1.500–3.000 por persona",
      "booking": ""
     },
     {
      "start": "09:30",
      "end": "11:00",
      "type": "sightseeing",
      "area": "Harajuku",
      "title": "Harajuku y Meiji Jingu",
      "desc": "La colorida Takeshita, crepes, moda kawaii, y después la calma del bosque del santuario Meiji Jingu.",
      "tips": "Meiji Jingu es gratis y tranquilo aun en horas pico.",
      "cost": "Gratis–¥1.000",
      "booking": "",
      "highlight": true
     },
     {
      "start": "15:30",
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
     "La clase de cocina — reservá ya en Cooking Sun Tokyo (Shinanomachi) o Ramen Cooking Tokyo: capacidad 8 y Silver Week se agota primero. getyourguide.com permite cancelación gratis hasta 24 h antes.",
     "Meiji Jingu el 21/9 (feriado): llegá antes de las 10:00 — el bosque en calma, luz de la mañana entre los alcanforeros. De 12:00 a 15:00 es el pico. En el Temizuya lavate las manos con calma — izquierda, derecha, boca, mango — antes de entrar.",
     "Takeshita Street: entrá por el lado de la estación JR Harajuku (no por Omotesando) y te ahorrás lo peor del gentío. Abre ~10:00-11:00; mediodía en Harajuku: Angus burgers, Kawaii Monster Café, o un crepe de los puestos de la calle."
    ],
    "logistics": {
     "he": "בוקר אחרון בטוקיו: שלחו את המזוודה הראשית ל-Candeo קיוטו (Yamato takkyubin) — שליחה כבר ב-21.9 נותנת מרווח לעיכובי שבוע הכסף; ודאו שהמלון שומר חבילות שמגיעות לפני הצ׳ק-אין (25.9). ממשיכים להאקונה+קיסו עם תיק-לילה בלבד.",
     "es": "Última mañana en Tokio: despachen la valija principal a Candeo Kioto (takkyubin de Yamato) — mandarla ya el 21/9 da margen ante las demoras de Silver Week; confirmá que el hotel guarda paquetes que llegan antes del check-in (25/9). Siguen a Hakone+Kiso solo con bolso de una noche."
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
      "end": "10:30",
      "type": "transport",
      "area": "Shinjuku עד Hakone-Yumoto",
      "title": "Romancecar — el tren romántico de Hakone",
      "desc": "El Romancecar de Odakyu sale de Shinjuku directo a Hakone-Yumoto con ventanales panorámicos y paisajes increíbles. Comprá también el Hakone Free Pass que te ahorra plata en todo el transporte local de hoy y mañana.",
      "tips": "El Romancecar se llena rápido en la Semana de Plata — reservá los asientos en el sitio de Odakyu (odakyu.jp) con varios días de anticipación. Elegí asientos del lado A para la mejor vista.",
      "cost": "¥2.470 Romancecar + ¥6.500–7.000 Hakone Free Pass por persona",
      "booking": "Reservar asientos en el Romancecar + Hakone Free Pass — reservar con anticipación, la Semana de Plata está muy concurrida",
      "dur": "~85 min"
     },
     {
      "start": "11:30",
      "end": "14:30",
      "type": "sightseeing",
      "area": "Hakone Open Air Museum",
      "title": "Museo al Aire Libre de Hakone (con baño de pies)",
      "desc": "Esculturas de Henry Moore entre las montañas + un baño de pies caliente (ashiyu). Elegimos un solo museo — no también el lago Ashi, no da el tiempo en Silver Week.",
      "tips": "El Open-Air Museum está incluido en el Hakone Free Pass, así que la entrada es gratis. Si llegás cansado del viaje, salteo directo al ryokan — el descanso es importante antes de la noche de onsen.",
      "cost": "Gratis con Hakone Free Pass (sin pase: ¥1.600 por persona)",
      "booking": ""
     },
     {
      "start": "15:00",
      "end": "16:30",
      "type": "onsen",
      "area": "Hakone-Yumoto",
      "title": "Llegada al ryokan — este momento era para vos",
      "desc": "Check-in en el ryokan de Gora: bienvenida con té verde y dulces japoneses, cambio a yukata, y primera inmersión en el onsen con vistas a las montañas. Sentí cómo el estrés se va disolviendo.",
      "tips": "Dejá los zapatos en la entrada y pasate a las sandalias del ryokan (geta) — es parte de la experiencia. Sacate fotos mutuamente con el yukata antes de que el onsen te enrojezca las mejillas.",
      "cost": "Incluido en el alojamiento",
      "booking": ""
     },
     {
      "start": "16:30",
      "end": "17:30",
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
      "start": "10:30",
      "end": "11:30",
      "type": "food",
      "area": "Hakone-Yumoto",
      "title": "Almuerzo en el pueblo termal de Yumoto",
      "desc": "Soba/udon local y unos manju (dulces de onsen) en la calle de Yumoto antes de subir al museo."
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
      "end": "13:00",
      "type": "transport",
      "area": "Hakone-Yumoto עד Nagoya עד Magome",
      "title": "Viaje al Valle de Kiso — Hakone → Magome",
      "desc": "Hakone→Odawara (~15 min) · shinkansen Odawara→Nagoya (~1:05) · Ltd.Exp Shinano Nagoya→Nakatsugawa (~50 min) · bus→Magome (~30 min). Un descenso escénico al Japón rural.",
      "tips": "La valija principal ya va camino a Kioto — viajan con bolso de una noche.",
      "cost": "",
      "booking": "",
      "dur": "~3–3,5 h · 4 tramos"
     },
     {
      "start": "12:40",
      "end": "13:30",
      "type": "food",
      "area": "Magome",
      "title": "Almuerzo en Magome — soba y gohei-mochi",
      "desc": "Soba shinshu y gohei-mochi (arroz a la brasa con miso y nueces) — el sabor del Nakasendo.",
      "tips": "",
      "cost": "¥1.000–1.800 por persona",
      "booking": ""
     },
     {
      "start": "14:00",
      "end": "16:00",
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
      "start": "16:00",
      "end": "16:30",
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
      "start": "16:30",
      "end": "17:15",
      "type": "shopping",
      "area": "Magome",
      "title": "Compra de sake y snacks para festejar",
      "desc": "Las tiendas de Magome cierran ~17:00 — comprá sake local (Kiso), dulces (gohei-mochi) y quizá una torta chica para festejar en la villa."
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
     "Dejá los bolsos en el centro de info de Magome no más tarde de las 09:00 (abre 08:30). Se retiran en Tsumago entre 13:00–17:00 — no te pierdas la ventana o los cargás al hombro.",
     "La cena en Nagiso es el punto ciego: el pueblo es muy chico y no hay restós de noche garantizados. Lo más seguro: almuerzo/cena temprana en Tsumago (Kongoya — soba + gohei-mochi) y comprar provisiones en el super cerca de la estación de Nagiso para la villa AKARI."
    ]
   },
   {
    "date": "2026-09-25",
    "dow": "Fri",
    "city": "Kyoto",
    "title": "De Tsumago a Kioto: la ciudad de las geishas te espera",
    "summary": "Un día de tránsitos hermosos — la despedida del pueblito sereno de Tsumago y la llegada dramática a Kioto. Por la noche: los faroles de Gion y el callejón de Pontocho que te abrazan el alma.",
    "hotel": "🏨 Candeo Hotels Kyoto Karasuma Rokkaku (✓ reservado · 25→28) · centro de Kioto, 4★",
    "events": [
     {
      "start": "08:00",
      "end": "09:00",
      "type": "food",
      "area": "Tsumago",
      "title": "Desayuno y última mañana tranquila en Tsumago",
      "desc": "Último desayuno en Tsumago — quizás en tu ryokan o en alguna tiendita del callejón de piedra — y después una vuelta de despedida por las calles empedradas antes de que los trenes se los lleven. El pueblo a primera hora es solo para vos dos.",
      "tips": "Sacate una última foto frente a la posada histórica antes de que lleguen los primeros turistas del día.",
      "cost": "¥500–1.500 por persona",
      "booking": ""
     },
     {
      "start": "09:30",
      "end": "13:30",
      "type": "transport",
      "area": "Tsumago עד Kyoto",
      "title": "Viaje de regreso: Tsumago → Kioto",
      "desc": "Bus Tsumago→Nagiso (~10 min) · Ltd.Exp Shinano Nagiso→Nagoya (~1:20) · shinkansen Nagoya→Kioto (~35 min). Las valijas que mandaron adelantadas ya los esperan en el cuarto.",
      "tips": "Reservá con anticipación en SmartEX — los asientos del lado derecho de la ventana tienen vistas espectaculares durante el trayecto hacia Kioto.",
      "cost": "¥4.000–6.000 por persona",
      "booking": "Shinkansen Nagoya → Kioto — reservá en SmartEX",
      "dur": "~2,5 h · 3 tramos"
     },
     {
      "start": "15:00",
      "end": "16:00",
      "type": "rest",
      "area": "Kyoto",
      "title": "Horas de descanso en el hotel",
      "desc": "Después de una mañana de viajes, su habitación en Kioto está abierta y esperándolos. Tiempo para respirar, desempacar y sintonizarse con el ritmo de la ciudad.",
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
      "start": "13:45",
      "end": "14:45",
      "type": "food",
      "area": "Kyoto",
      "title": "Almuerzo liviano cerca del hotel (Karasuma-Rokkaku)",
      "desc": "El check-in en Candeo es desde las 15:00 — hasta entonces comen algo liviano en Karasuma/Nishiki y dejan la valija en recepción."
     }
    ],
    "logistics": {
     "he": "אספו במלון בקיוטו את המזוודה הראשית שנשלחה מטוקיו.",
     "es": "Retiren en el hotel de Kioto la valija principal enviada desde Tokio."
    },
    "cultural": "Gion y Pontocho son dos de los cinco 'hanamachi' — barrios de las flores — de Kioto, donde todavía sobrevive la tradición de la geisha (llamada en Kioto 'geiko', que significa 'mujer del arte'). El ochaya —la casa de té— no es un lugar para tomar té: es un club privado y exclusivo al que solo puede entrar un invitado, para escuchar shamisen, ver danzas y disfrutar de la cocina obanzai. La puerta cerrada y la cortina de bambú no son decoración: son un límite social de siglos. En el centro de esta estética está el concepto 'ma' (間) — el espacio, la pausa, lo que no se dice. La geisha que pasó frente a vos sin mirarte a los ojos no fue grosera: estaba guardando el 'ma' entre ella y vos.",
    "tips": [
     "La ventana más justa es la combinación en Nagoya — los andenes del Shinkansen están lejos de los del Shinano. Dejá 15–20 min para el cambio; si perdés el Nozomi, el próximo sale en 10–15 min.",
     "La valija grande te espera en Candeo desde el 23/9 — al llegar, pedila en recepción aunque el cuarto no esté listo, y cambiate en el lobby para la noche en Gion.",
     "En Gion (calle Hanamikoji): no se puede fotografiar geishas/maikos de cerca, ni bloquearles el paso, ni tocarlas — hay prohibición municipal. Fotografiá a distancia respetuosa."
    ]
   },
   {
    "date": "2026-09-26",
    "dow": "Sat",
    "city": "Kyoto",
    "title": "Amanecer entre torii — Día 9",
    "summary": "Un día entero con lo mejor de Kioto: subida al alba entre miles de torii bermejos en Fushimi Inari, el bosque de bambú y la serenidad zen de Arashiyama, y el cierre perfecto con un recorrido de degustación por el Mercado Nishiki y una cena de sukiyaki para los dos.",
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
      "start": "10:30",
      "end": "13:00",
      "type": "nature",
      "area": "Arashiyama",
      "title": "Bosque de bambú y jardín zen de Tenryu-ji",
      "desc": "El bosque de bambú de Arashiyama es uno de los paisajes más hipnóticos del país — los culmos gigantes se mecen y producen un murmullo envolvente. Justo después, el jardín zen del templo Tenryu-ji (Patrimonio UNESCO) despliega una quietud absoluta con su estanque que refleja las colinas.",
      "tips": "Entren al jardín de Tenryu-ji inmediatamente después del bambú — los tickets combinados convienen. Temprano hay mucho menos gente.",
      "cost": "¥500–1.000 por persona (jardín solamente)",
      "booking": "",
      "highlight": true
     },
     {
      "start": "13:00",
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
      "start": "17:30",
      "end": "19:00",
      "type": "food",
      "area": "Kyoto (Nishiki)",
      "title": "Degustación en el Mercado Nishiki",
      "desc": "\"La cocina de Kioto\" — un pasaje cubierto de 400 años con puestos de encurtidos, tofu ahumado, pescados locales, dulces y platitos para comer parado. Caminen, prueben, descúbranlo juntos y disfruten del bullicio amigable.",
      "tips": "No lleguen con demasiada hambre — las picadas se acumulan y forman una comida completa. Buscá el puesto Aritsugu de cuchillos de cocina japoneses — un regalo ideal para quienes aman cocinar.",
      "cost": "¥1.000–2.500 por persona (según lo que prueben)",
      "booking": ""
     },
     {
      "start": "19:30",
      "end": "21:30",
      "type": "food",
      "area": "Kyoto",
      "title": "Cena de sukiyaki o shabu-shabu para dos",
      "desc": "El cierre perfecto del día: un restaurante de carne kiotoano donde comparten la olla caliente — sukiyaki con huevo batido y verduras, o shabu-shabu con salsas ponzu y sésamo. Una experiencia íntima donde cocinar juntos es parte de la magia.",
      "tips": "Buscá restaurantes con \"Kyoto wagyu\" cerca de Gion o Shinkyogoku — la diferencia en la calidad de la carne se nota mucho. Los sábados a la noche es mejor reservar.",
      "cost": "¥4.000–8.000 por persona",
      "booking": "Reservá mesa con anticipación por la web del restaurante o por Tableall — los sábados a la noche se llenan rápido."
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
      "start": "08:30",
      "end": "10:00",
      "type": "sightseeing",
      "area": "Kyoto (Northwest)",
      "title": "Kinkaku-ji — El Pabellón Dorado",
      "desc": "Llegar exactamente con la apertura de las puertas les permite disfrutar del reflejo perfecto del pabellón en el estanque antes de que lleguen las multitudes. El aire fresco de septiembre hace que el dorado brille de una manera que no se ve en las fotos. Caminá despacio alrededor del jardín — hay ángulos que la mayoría de los turistas se pierden.",
      "tips": "Llegá a las 8:30 en punto — las multitudes aparecen recién después de las nueve. Al final del recorrido hay un rincón con matcha y dulce tradicional que vale la pena no saltarse.",
      "cost": "¥500 por persona",
      "booking": ""
     },
     {
      "start": "10:30",
      "end": "12:30",
      "type": "sightseeing",
      "area": "Kyoto (Higashiyama)",
      "title": "Kiyomizu-dera + pendientes de Ninenzaka y Sannenzaka",
      "desc": "Kiyomizu-dera se alza sobre una plataforma de madera con vistas panorámicas a Kioto — en septiembre los primeros toques otoñales empiezan a colorearse. Desde el templo bajás por las calles adoquinadas de Ninenzaka y Sannenzaka, intactas y llenas de tiendas de artesanía y casas de té antiguas. Esto es Kioto tal como la soñaste.",
      "tips": "El camino entre las dos calles es corto y encantador — no lo apurés. Fijate bien en los precios antes de entrar a las tiendas de souvenirs; la calidad varía muchísimo.",
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
      "tips": "Reservá con tiempo un paquete para pareja; confirmá que el taller se desarrolle en inglés. Terminá antes de las 15:30 — desde ahí ~20 min a Jodoji (bus/taxi) para la soba.",
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
    "summary": "Un día de excursión a Nara — ciervos sagrados y uno de los Budas más imponentes de Japón — y después de vuelta a Osaka para festejar en Doyama-cho, el barrio gay de la ciudad.",
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
      "start": "16:00",
      "end": "18:00",
      "type": "rest",
      "area": "Osaka",
      "title": "Regreso a Osaka y descanso",
      "desc": "Viaje de vuelta a Osaka y un descanso que vale oro antes de la gran noche. Calculen ducha, un cafecito y música que cambie el clima.",
      "tips": "Volvé antes de las 17:30 para tener al menos una hora de respiro real antes de salir a la noche.",
      "cost": "¥1.000–1.200 por persona (viaje de regreso)",
      "booking": ""
     },
     {
      "start": "19:00",
      "end": "20:30",
      "type": "food",
      "area": "Osaka (Namba)",
      "title": "Cena de yakiniku o izakaya — Namba",
      "desc": "Una cena intensa y festiva: el yakiniku — carne a la parrilla en la misma mesa — es todo humo, aroma y mordiscos compartidos. O bien una izakaya con una cadena interminable de platitos y sake frío — cualquiera de las dos opciones une y alegra.",
      "tips": "En Namba recomendamos Gyukaku para un yakiniku accesible, o buscá una izakaya con menú en inglés sobre el mismo Dotonbori. Pedí mesa al lado de la parrilla para vivir la experiencia completa.",
      "cost": "¥2.500–5.000 por persona",
      "booking": ""
     },
     {
      "start": "20:30",
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
    "summary": "Se despiden de Osaka con un desayuno tranquilo y toman el Shinkansen de regreso a Tokyo. La tarde los espera con los gatos y el encanto retro de Yanaka, compras en Shibuya y una cena íntima en Ebisu para celebrar.",
    "hotel": "🏨 Tokyu Stay Shinjuku (✓ reservado · 30→2.10) · Shinjuku · lavarropas en la habitación",
    "events": [
     {
      "start": "09:00",
      "end": "10:00",
      "type": "food",
      "area": "Osaka",
      "title": "Último desayuno en Osaka",
      "desc": "Un último recorrido por el barrio antes de partir — café japonés, tostadas con manteca y salsa de soja, o unos takoyaki madrugadores para el camino. Que Osaka cierre con una buena despedida.",
      "tips": "Guardá lugar en el estómago para Tokyo; el check-out suele ser hasta las 11:00 así que planificá bien los tiempos.",
      "cost": "¥800–1.500 por persona",
      "booking": ""
     },
     {
      "start": "10:45",
      "end": "13:20",
      "type": "transport",
      "area": "Shin-Osaka עד Tokyo",
      "title": "Shinkansen a Tokyo — bienvenidos de vuelta",
      "desc": "El Nozomi desde Shin-Osaka llega a Tokyo en unas 2,5 horas — una transición casi mágica entre dos metrópolis gigantes. Disfrutá el paisaje que va cambiando y tomate un café del kiosco del andén.",
      "tips": "Las valijas grandes van en el compartimento superior y las mochilas abajo — el viaje es suave, ideal para descansar o leer.",
      "cost": "Incluido en el JR Pass",
      "booking": "Reservá los asientos Shin-Osaka → Tokyo por SmartEX con anticipación",
      "dur": "~2:30 h"
     },
     {
      "start": "14:00",
      "end": "16:00",
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
      "start": "16:00",
      "end": "18:00",
      "type": "shopping",
      "area": "Shibuya",
      "title": "Shibuya / Harajuku — compras de penúltimo día",
      "desc": "Takeshita Street para el hype y lo bizarro, Omotesando para diseño y moda, y Cat Street para los boliches escondidos. Es el momento perfecto para cazar regalos de último momento y explorar boutiques únicas.",
      "tips": "Tokyu Hands en Shibuya y Village Vanguard en Harajuku — anime, gadgets y souvenirs raros y encantadores que no vas a encontrar en el aeropuerto.",
      "cost": "¥2.000–10.000 por persona (según tentación)",
      "booking": ""
     },
     {
      "start": "19:00",
      "end": "21:00",
      "type": "food",
      "area": "Tokyo (Ebisu)",
      "title": "Cena romántica en Ebisu",
      "desc": "Ebisu y Meguro ofrecen esa combinación rara de izakaya moderna y bistró tokiota con mano adulta — en las calles laterales encontrás restaurantes pequeños con menús omakase, vinos japoneses y una atmósfera íntima. Una cena para festejar los 40 antes de la última noche.",
      "tips": "Buscá lugares con asientos en la barra frente a la cocina — ver al chef trabajar es parte de la experiencia; presentate como pareja en festejo para un trato especial.",
      "cost": "¥5.000–9.000 por persona",
      "booking": "",
      "highlight": true
     }
    ],
    "logistics": {
     "he": "לוקחים את המזוודות בשינקנסן לטוקיו (הזמינו מושב \"מטען גדול\" אם מזוודה מעל 160 ס\"מ). שליחת takkyubin מאוסקה מגיעה רק למחרת.",
     "es": "Llevan las valijas en el shinkansen a Tokio (reserven asiento \"equipaje grande\" si la valija supera 160 cm). El envío takkyubin desde Osaka llega recién al día siguiente."
    },
    "cultural": "Yanaka sobrevivió a los siglos no porque la reconstruyeron, sino porque no la quemaron. Mientras el resto de Tokio fue borrado dos veces — por el terremoto de 1923 y los bombardeos de 1945 —, Yanaka permaneció intacta: sus casas de madera, sus cementerios budistas, sus callejuelas retorcidas. El concepto que subyace a todo esto se llama shitamachi — la 'ciudad baja', el barrio de los comerciantes, artesanos y gente común de la época Edo. A diferencia de los señoríos en las colinas, el shitamachi cultivaba otra nobleza: humana, cálida y ruidosa, donde el espíritu del vecindario en sí es considerado algo que vale la pena preservar.",
    "tips": [
     "En el Shinkansen Nozomi: pedí asientos lado E (ventana derecha en sentido de marcha) — el Fuji rumbo a Tokio se ve a la derecha después de Shin-Fuji. Llegá al tren 10 min antes — salen puntuales al segundo.",
     "En Yanaka: comprá menchi-katsu (croquetas de carne) calientes en la calle Yanaka Ginza — se comen caminando (aruki-gui). No te pierdas la escalera Yuyake Dandan para la foto de la calle desde arriba.",
     "En Shibuya: Loft (7 pisos) y Tokyu Hands para accesorios de viaje, cosmética y souvenirs únicos. Si buscás anime/música, el Village Vanguard de Shibuya es excelente."
    ]
   },
   {
    "date": "2026-10-01",
    "dow": "Thu",
    "city": "Tokyo",
    "title": "Día 14 — Ghibli, luz y despedida en Tokio",
    "summary": "El día más emotivo del viaje: una mañana de fantasía en el Museo Ghibli, una tarde sumergidos en el arte digital de teamLab Planets y una cena de celebración con omakase que cierra con broche de oro el cumpleaños 40 de Ezequiel. Tokio se despide a lo grande.",
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
      "end": "18:00",
      "type": "experience",
      "area": "Toyosu (teamLab Planets)",
      "title": "teamLab Planets, Toyosu",
      "desc": "La experiencia de arte digital más inmersiva de Japón — y con razón. Entrás descalzos al agua, te acostás bajo flores infinitas y te hundís entre luces que responden a tu toque. No es arte que mirás — es arte que habitás.",
      "tips": "Vestite con algo que se pueda enrollar fácil (los pies y tobillos se mojan). Un vestido corto o bermudas funcionan perfecto.",
      "cost": "¥3.200–3.600 por persona",
      "booking": "teamLab Planets — reservá tu entrada con horario fijo de antemano",
      "highlight": true
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
      "start": "06:00",
      "end": "06:45",
      "type": "food",
      "area": "Tokyo",
      "title": "Desayuno rápido y últimos preparativos",
      "desc": "Café caliente, un onigiri o una medialuña del konbini de la esquina y una revisión final para asegurarse de que los recuerdos viajan bien entre la ropa. Un momento tranquilo antes del apuro.",
      "tips": "Revisá el saldo de la Suica que sobra — podés pedir la devolución en efectivo en el mostrador JR de la terminal.",
      "cost": "¥600–1.200 por persona",
      "booking": ""
     },
     {
      "start": "07:00",
      "end": "09:10",
      "type": "transport",
      "area": "Shinjuku עד Narita T1",
      "title": "N'EX a Narita — despedida de Shinjuku",
      "desc": "El Narita Express desde Shinjuku llega a Narita T1 en unos 90 minutos: asientos reservados, espacio para el equipaje grande y el paisaje urbano que va cediendo paso a los campos. El cierre que Japón se merece: ordenado, puntual y hermoso.",
      "tips": "Comprá los pasajes del N'EX con anticipación en el sitio de JR-East o en los autoservicios de la estación; tomá un tren que llegue al menos tres horas antes del vuelo.",
      "cost": "¥3.070 por persona (Shinjuku→Narita T1)",
      "booking": "",
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
       "name": "teamLab / Shibuya Sky",
       "sub": "2–4 semanas antes",
       "desc": "Acceso con horario fijo, se agotan semanas antes. teamLab: elegí UNO; Shibuya Sky: turno de atardecer."
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
  ]
 }
};
