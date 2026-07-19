import { html } from "htm/preact";
import { render } from "preact";
import { signal, effect } from "@preact/signals";

/* ─── Site data ─────────────────────────────────────────── */

export const site = {
  name: "STUDIO 4Marketing",
  tagline: "маркетинг + оценяване на имоти",
  phone: "+359 879 070 759",
  phoneHref: "tel:+359879070759",
  email: "info@studio4.marketing",
  year: 2026,
  logo: "./assets/images/logo.png",
  logoMark: "./assets/images/logo3.png",
  description:
    "Агенция за недвижими имоти в Благоевград Studio4.marketing. Сделки с недвижими имоти, наеми, пазарни оценки, кредитно посредничество, пазарни проучвания",
  keywords:
    "квартири благоевград, апартаменти благоевград, апартамент под наем благоевград, ново строителство благоевград, магазин под наем благоевград, офис под наем благоевград, апартамент Еленово, апартамент в строеж благоевград, имоти в Благоевград, къщи за продажба в Благоевград, blagoevgrad real estates, blagoevgrad properties",
};

export const social = [
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/studio4marketing" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/studio4.marketing" },
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/Studio4marketing-250069172378934/posts" },
  { id: "twitter", label: "X", href: "https://twitter.com/studio4market" },
];

export const routes = {
  home: { path: "/", title: "STUDIO 4Marketing" },
  mediation: { path: "/mediation", title: "Посредничество | STUDIO 4Marketing" },
  service: { path: "/service", title: "Само за продавачи | STUDIO 4Marketing" },
  mortgage: { path: "/mortgage", title: "Ипотечни оценки | STUDIO 4Marketing" },
  bailiff: { path: "/bailiff", title: "Оценки за съдия-изпълнител | STUDIO 4Marketing" },
  investment: { path: "/investment", title: "Инвестиционни проекти | STUDIO 4Marketing" },
  kss: { path: "/kss", title: "КСС на СМР | STUDIO 4Marketing" },
  areas: { path: "/areas", title: "Площообразуване | STUDIO 4Marketing" },
  concept: { path: "/concept", title: "Концепция | STUDIO 4Marketing" },
  contact: { path: "/contact", title: "Контакти | STUDIO 4Marketing" },
  addProperty: { path: "/add-property", title: "+ Добавете имот | STUDIO 4Marketing" },
  article1: { path: "/article1", title: "Оценка или Консултация? | STUDIO 4Marketing" },
  article2: { path: "/article2", title: "За Дизайна на пространства | STUDIO 4Marketing" },
  reviews: { path: "/reviews", title: "Отзиви | STUDIO 4Marketing" },
};

export const menu = [
  {
    label: "имоти",
    children: [
      { label: "жилищни", route: "home" },
      { label: "бизнес", route: "home" },
      { label: "земя", route: "home" },
      { label: "сгради", route: "home" },
    ],
  },
  {
    label: "услуги",
    children: [
      { label: "посредничество", route: "mediation" },
      { label: "+добави имот", route: "addProperty" },
      { label: "само за продавачи", route: "service" },
    ],
  },
  {
    label: "оцени моя имот",
    children: [
      { label: "ипотечни оценки", route: "mortgage" },
      { label: "анализ и проучване на инвестиционни проекти", route: "investment" },
      { label: "оценки на недвижими имоти за съдия-изпълнител", route: "bailiff" },
      { label: "количествено-стойностни сметки на СМР", route: "kss" },
      { label: "площообразуване на сгради", route: "areas" },
    ],
  },
  { label: "контакти", route: "contact" },
];

export const heroStatements = [
  {
    id: "value",
    lines: [
      "В основата на всичко",
      "стои стойността,",
      "не само като паричен еквивалент,",
      "но и като вярната отправна точка.",
    ],
  },
  {
    id: "platform",
    lines: [
      "Studio4.marketing е специализирана платформа",
      "за консултантски услуги в бизнеса с недвижими имоти",
      "и експертното им оценяване.",
    ],
  },
  {
    id: "care",
    lines: [
      "Качествени имоти, отговарящи по цена и характеристики",
      "на това, което търсите.",
      "Studio4.marketing се отнася с грижа към средствата на клиентите.",
      "Полагаме усилия, за да срещнете правилния имот",
      "и да сключите най-добрата сделка.",
    ],
  },
];

export const mediation = {
  title: "Посредничество при сделки",
  subtitle: "с недвижими И М О Т И",
  image: "./assets/images/fliped3.jpg",
  items: [
    "покупко - продажби",
    "наемане / отдаване под наем",
    "пазарни проучвания",
    "консултации & маркетинг",
  ],
};

export const homeServices = [
  {
    title: "Изготвяне на таблици за площообразуване на сгради",
    route: "areas",
  },
  {
    title: "Изготвяне на индикативни количествено-стойностни сметки на СМР при строителство на сгради",
    route: "kss",
  },
  {
    title: "Анализ и проучване на инвестиционни проекти",
    route: "investment",
  },
  {
    title: "Оценки на недвижими имоти за съдебен изпълнител",
    route: "bailiff",
  },
  {
    title: "Услуги за продавачи на имоти",
    route: "service",
  },
  {
    title: "Ипотечни оценки",
    route: "mortgage",
  },
];

export const appraisalBanner = {
  lines: [
    "Studio4.marketing работи съвместно с",
    "НЕЗАВИСИМИ ОЦЕНИТЕЛИ, действащи съгласно",
    "разпоредбите на Българското законодателство и",
    "утвърдените международни СТАНДАРТИ за оценяване",
  ],
};

export const appraisalFormOptions = {
  kinds: ["Жилищни", "Бизнес", "Сгради", "Земя"],
  times: ["08:00 - 10:00", "10:00 - 12:00", "12:00 - 14:00", "14:00 - 16:00", "16:00 - 18:00"],
  referances: ["Google", "Facebook", "LinkedIn", "Друг сайт", "Препоръка", "Друго"],
};

/** Five appraisal/consulting service pages */
export const appraisalServices = {
  mortgage: {
    id: "mortgage",
    family: "value",
    title: "Ипотечни оценки",
    formType: "За кредит",
    formTypeLabel: "За кредит (ипотечни оценки)",
    banner: "./assets/images/price-request-banner.jpg",
    message: "Здравейте, искам Оценка за кредит от банка (ипотечна оценка).",
    paragraphs: [
      "Оценяването на недвижими имоти представлява процес за извеждане на конкретна индикативна стойност на даден обект, според определена цел. При кандидатстване за ипотечен кредит, банката – кредитор ще изиска да бъде представен оценителски доклад (експертна оценка, изготвена от сертифициран оценител).",
      "Кредитния консултант ще ви предостави списък с необходими документи, касаещи вас (като кредитоискател) и избрания от вас имот (като обезпечение). Един от тези документи е оценителният доклад. Оценката на имота е от съществено значение за процеса по отпускане на кредит, поради факта, че банката ще ви отпусне кредит, в зависимост от стойността, на която е оценен имота.",
      "При всяка банка процента на финансиране е различен и спрямо вътрешните правила на банката, се определя крайната пазарна оценка. Имотът се оценява по няколко метода, като в зависимост от тяхната тежест и изискванията на банката за изчисление на различни компоненти (кредитен риск, експлоатационна годност, ликвидност, възвръщаемост и други), се формират стойността, които вие получавате като заемни средства.",
    ],
  },
  bailiff: {
    id: "bailiff",
    family: "value",
    title: "Оценки на недвижими имоти за съдия-изпълнител",
    formType: "За съдия",
    formTypeLabel: "Оценка на имоти за съдия изпълнител",
    banner: "./assets/images/price-request-banner.jpg",
    message: "Здравейте, искам Оценка за публична продан / съдия-изпълнител.",
    paragraphs: [
      "Публичната продан на имоти се извършва от държавни (ДСИ) или частни (ЧСИ) съдебни изпълнители, в зависимост от това къде е образувано изпълнителното дело, като процедурата по продажба е уредена от ГПК.",
      "С помощта на лицензиран оценител се определя първоначалната пазарна цена на имота, а желаещите да го закупят следва да заявят участие в търга по надлежния ред и да предложат цена по свое усмотрение (равна или над обявената).",
      'Studio4.marketing работи с експерти, които изготвят пазарни оценки за нуждите на съдебни изпълнители и предлага консултации за желаещите да закупят недвижим имот, обявен на публична продан. Актуални търгове на имоти може да разгледате тук: www.sales.bcpea.org.',
    ],
    link: { label: "www.sales.bcpea.org", href: "http://www.sales.bcpea.org" },
  },
  investment: {
    id: "investment",
    family: "price",
    title: "Анализ и проучване на инвестиционни проекти",
    formType: "Инвестиция",
    formTypeLabel: "Инвестиционен проект",
    banner: "./assets/images/appraisal-banner.jpg",
    message: "Здравейте, искам анализ и проучване на инвестиционен проект.",
    paragraphs: [
      "Екипът на Studio4.marketing вярва, че преди да се започне каквото и да било строително начинание, инвеститорът следва да е на ясно каква е степента на целесъобразност на проекта и каква е финансовата му ефективност. Какъв е възможния диапазон на печалба в различните сегменти на пазара на недвижими имоти и кои са възможните стъпки за реализацията на проекта ви?",
      "Прилагаме аналитични преценки в доклада за всеки един казус, основаващи се на професионален опит и квалификация, за да достигнем една реалистична прогноза, с която да отговорим адекватно на поставените от вас въпроси.",
    ],
  },
  kss: {
    id: "kss",
    family: "price",
    title: "Изготвяне на индикативни количествено – стойностни сметки на СМР при строителство на сгради",
    formType: "КСС на СМР",
    formTypeLabel: "Индикативни КСС на СМР при строителство на сгради",
    banner: "./assets/images/appraisal-banner.jpg",
    message: "Здравейте, искам изготвяне на индикативна КСС на СМР.",
    paragraphs: [
      "КСС (количествено – стойностна сметка) представлява документ, в който детайлно са характеризирани и остойностени всички видове СМР. Строително – монтажните работи (СМР) са дейностите, чрез които строежите се изграждат, реконструират, ремонтират, преустройват, поддържат или възстановяват. В КСС са описани по категории и по обем всички видове СМР (предстоящи или изпълнени), включващи разходите за труд, материали, механизация и допълнителни разходи, като изчисленията са направени по номерклатура на УСН (уедрени сметни норми) и по разходни норми на СЕК (специализирано издание).",
      "Независимо какво е инвестиционното ви намерение (дали ще строите или ще ремонтирате), е ценно да знаете индикативната стойност на средствата, които ще са ви необходими за реализация на проекта. Специалистите, с които Studio4.marketing работи, са отлично запознати с процесите при строителство и ще изготвят за вашия проект прецизна КСС, с която да проучите целесъобразността и изпълнимостта на инвестиционното си начинание.",
    ],
  },
  areas: {
    id: "areas",
    family: "price",
    title: "Изготвяне на таблици за площообразуване на сгради",
    formType: "Таблица",
    formTypeLabel: "Изготвяне на таблица за площообразуване",
    banner: "./assets/images/appraisal-banner.jpg",
    message: "Здравейте, искам изготвяне на таблица за площообразуване на сграда.",
    paragraphs: [
      "Съгласно Закона за собствеността, при сгради в режим на етажна собственост, всеки собственик на имот притежава и припадащия се към обекта дял от общите части на сградата. В таблицата за площообразуване на една сграда са изчислени припадащите се идеални части в % или в квадратни метри, съответно от общите части на сградата, от правото на строеж или от терена, върху който е изградена сградата.",
      "Припадащия се дял от общите части на всеки собственик на обект в сградата, следва да е съразмерен на съотношението между стойностите на отделните помещения, които той притежава, изчислени при учредяването на етажната собственост. Таблицата за площообразуване е полезен документ за справедливото разпределяне на разходите при възникнала необходимост за ремонт/поддръжка на общите части в дадена сграда, тъй като всеки собственик, спрямо дела си в общите части, е длъжен да участва в тези разноски.",
    ],
  },
};

export const sellerPage = {
  headline: "поръчайте пакет услуги",
  flow: [
    {
      id: "order",
      text: "# поръчайте пакет услуги",
      textPos: "below",
      icons: ["./assets/images/book.JPG", "./assets/images/right-arrow.png"],
    },
    {
      id: "visit",
      text: "# ние ще дойдем при вас за оглед на имота",
      textPos: "above",
      icons: ["./assets/images/volkswagen-car-side-view.png", "./assets/images/right-arrow.png"],
    },
    {
      id: "analysis",
      text: "# ще направим нужния анализ, за да представим имота ви професионално",
      textPos: "below",
      icons: ["./assets/images/sine-waves-analysis.png"],
    },
    {
      id: "photo",
      text: "",
      textPos: "none",
      icons: ["./assets/images/right-arrow.png", "./assets/images/photo-camera.png"],
    },
    {
      id: "deal",
      text: "# съдействаме за сключването на вашата успешна сделка",
      textPos: "above",
      icons: ["./assets/images/business.png"],
    },
  ],
  introTitle: "Само за тези от вас, които продават недвижим имот!",
  intro: [
    "Увеличете шансовете за успешна продажба на вашия имот!",
    "Определянето на адекватна пазарна цена играе важна роля за ефективната продажба. Това е верния старт на процеса п р о д а ж б а. Екипът на Studio4.marketing познава в детайли всичко, което ви предстои, когато вземете решение за продажба на ваша недвижима собственост.",
    "Разгледайте комплексните решения, създадени за ваше удобство.",
  ],
  referOptions: ["Google", "Facebook", "LinkedIn", "Друг сайт", "Препоръка", "Друго"],
  packages: [
    {
      id: 2,
      label: "[Studio4.marketing]",
      power: "2",
      price: "300",
      recommended: false,
      features: [
        {
          text: "+Експертно становище за постижимата пазарна цена на вашия имот",
          tip: "Получавате доклад в дигитален вариант или на хартиен носител. Крайното решение на каква цена да обявите имота си за продажба, е ваше. Оценителкият доклад и достигнатите стойности в него имат препоръчителен характер.",
        },
        {
          text: "+Професионално представяне на имота, генериращо интерес",
          tip: "Снимки и схематичен чертеж",
        },
        {
          text: "+Маркетинг консултация за оптимално позициониране на пазара",
          tip: "Условията и реда, по който се предоставят пакетните услуги, могат да бъдат разгледани тук.",
          tipHref: "./terms.pdf",
        },
      ],
    },
    {
      id: 3,
      label: "[Studio4.marketing]",
      power: "3",
      price: "500",
      recommended: true,
      features: [
        {
          text: "+Експертно становище за постижимата пазарна цена на вашия имот",
          tip: "Получавате доклад в дигитален вариант или на хартиен носител. Крайното решение на каква цена да обявите имота си за продажба, е ваше. Оценителкият доклад и достигнатите стойности в него имат препоръчителен характер.",
        },
        {
          text: "+Професионално представяне на имота, генериращо интерес",
          tip: "Снимки и схематичен чертеж",
        },
        {
          text: "+Маркетинг консултация за оптимално позициониране на пазара - подготвяне обява за имота",
          tip: "По желание на BG/EN/RU",
        },
        {
          text: "+On-line промотиране на имота",
          tip: "Условията и реда, по който се предоставят пакетните услуги, могат да бъдат разгледани тук.",
          tipHref: "./terms.pdf",
        },
      ],
    },
    {
      id: 4,
      label: "[Studio4.marketing]",
      power: "4",
      price: "700",
      recommended: false,
      features: [
        {
          text: "+Експертно становище за постижимата пазарна цена на вашия имот",
          tip: "Получавате доклад в дигитален вариант или на хартиен носител. Крайното решение на каква цена да обявите имота си за продажба, е ваше. Оценителкият доклад и достигнатите стойности в него имат препоръчителен характер.",
        },
        {
          text: "+Професионално представяне на имота, генериращо интерес",
          tip: "Снимки и схематичен чертеж",
        },
        {
          text: "+Маркетинг консултация за оптимално позициониране на пазара - подготвяне обява за имота",
          tip: "По желание на BG/EN/RU",
        },
        {
          text: "+On-line промотиране на имота",
          tip: "Условията и реда, по който се предоставят пакетните услуги, могат да бъдат разгледани тук.",
          tipHref: "./terms.pdf",
        },
        {
          text: "+Снабдяване с всички съпътстващи документи имота за сключване на сделката пред нотариус и съдействие в етапите от продажбата",
          tip: "Дължимите административни такси, данъчни задължения и други се заплащат от собственика на имота",
        },
      ],
    },
  ],
};

export const footerColumns = [
  [
    { label: "К О Н Ц Е П Ц И Я", route: "concept" },
    { label: "УСЛОВИЯ ЗА ПОЛЗВАНЕ", href: "./terms.pdf", external: true },
    { label: "Оценка или Консултация ?", route: "article1" },
  ],
  [
    { label: "+ДОБАВИ ИМОТ ЗА ПРОДАЖБА", route: "addProperty" },
    { label: "ИПОТЕЧНИ ОЦЕНКИ", route: "mortgage" },
    { label: "За Дизайна на пространства", route: "article2" },
  ],
  [
    { label: "КОНТАКТИ", route: "contact" },
    { label: `Пишете ни: ${site.email}`, href: `mailto:${site.email}` },
    { label: `ТЕЛЕФОН: ${site.phone.replace(/\s/g, "")}`, href: site.phoneHref },
    { label: "Вашето мнение е ценно за нас", route: "reviews" },
  ],
];

export const conceptPage = {
  title: "концепция",
  image: "./assets/images/concept.jpg",
  sections: [
    {
      id: "concept",
      title: "[Концепция]",
      text: "Студио за маркетинг и оценяване на недвижими имоти е проект, стремящ се към повишаване нивото и качеството на посредническите услуги при операции с недвижими имоти . Фокусът ни е насочен към удовлетворяване потребностите на клиентите, по съвременен начин, изключително съобразен с динамиката на пазара и със съвременните технологии и тенденции в бранша. Студиото работи съвместно с външни квалифицирани експерти, притежаващи необходимото образование и с дългогодишен опит в сектора.",
    },
    {
      id: "believe",
      title: "[В какво вярваме]",
      text: "Това, в което Studio4.marketing вярва е, че нашите клиенти са наши партньори в бизнеса и успехът на съвместната ни дейност започва с доверие. Доверие, въз основа на което са поставени нашата отговорност към клиента, разбиране на всеки детайл в конкретния казус и извършване на всички необходими дейности за успешно реализиране на сделка. В основата на всичко стои стойността, не само като паричен еквивалент, но и като вярната отправна точка за клиента, защото знаейки я – това е предпоставка за осъществяване на сделка, която ще ви удовлетвори.",
    },
    {
      id: "vision",
      title: "[Нашата визия]",
      text: "Посредничеството и маркетингът при сделки с недвижими имоти изискват прецизност. Оценяването на имоти изисква също прецизност и добро познаване на пазара, във всички аспекти на нужния анализ при определяне на търсената стойност. Оценката на недвижим имот е свързана с определяне на коректната индикативна стойност, към определен момент в условията и движението на пазара, за определена цел. Да работим с желание, прецизност и отговорност към всеки един бизнес казус, за нас е единственият път да предоставим висококачествени консултантски услуги в сферата на недвижимите имоти.",
    },
    {
      id: "values",
      title: "[Ценности]",
      text: "Вдъхновени сме да работим усърдно за една по – качествена и усъвършенствана услуга, изцяло ориентирана към клиентите в бизнеса с недвижими имоти. Studio4.marketing ви предлага услуга, която съчетава комплексно всички операции с недвижими имоти, тяхното оценяване и маркетинг.",
    },
  ],
};

export const article1Page = {
  eyebrow: "« Каква е разликата между",
  title: "оценяване на имот",
  titleSuffix: "консултация ?",
  image: "./assets/images/article1.jpg",
  intro: [
    {
      parts: [
        { bold: true, text: "Процесът и осъществяването" },
        { text: " на покупко – продажба на недвижими имоти " },
        { bold: true, text: "изисква специфични познания и подготовка." },
      ],
    },
    {
      parts: [
        { text: "За да оптимизирате шансовете си за " },
        { bold: true, text: "реална продажба" },
        {
          text: " и да сключите сделка, която удовлетворява вашите потребности,",
        },
      ],
    },
    {
      parts: [
        { text: "Studio4.marketing ви съветва да " },
        { bold: true, text: "се доверите на специалистите в бранша." },
      ],
    },
  ],
  sections: [
    {
      id: "appraisal",
      title: "Оценка",
      paragraphs: [
        {
          parts: [
            {
              text: "Пазарната оценка на имот може да бъде направена единствено от оценител, който има нужното образование, подготовка, релевантен опит и притежава валиден сертификат, издаден от ",
            },
            {
              tip: "КНОБ – камара на независимите оценители в България.",
              label: "КНОБ",
            },
            { text: "." },
          ],
        },
        {
          text: "Оценяването е комплексна задача, която отнема време, поради специфичността на анализа, който оценителя извършва, за да отговори обективно и обосновано на въпроса „Каква е стойността на конкретния имот към даден момент“.",
        },
        {
          parts: [
            {
              text: "Стойността не е статична величина и се изменя във времето, повлияна от множество фактори. След като оценката бъде направена, нейният възложител получава документ, представляващ официален доклад. Анализът на всички касаещи имота данни и изведената стойност, спрямо целта на оценката, са направени съобразно ",
            },
            {
              tip: "БСО и международните стандарти – Български стандарти за оценяване, международни стандарти Ivsc, TEGoVA",
              label: "БСО и международните стандарти",
            },
            { text: "." },
          ],
        },
        {
          parts: [
            {
              text: "Ако Вие искате да знаете каква е най-добрата индикативна цена за вашия имот, ",
            },
            { route: "mortgage", label: "заявете оценка." },
            {
              text: " Ние от Studio4.marketing ще се погрижим да получите акуратно становище от независим оценител ! Ще получите ясен и обективен отговор от експерт за текущата стойност на имота ви.",
            },
          ],
        },
      ],
    },
    {
      id: "consultation",
      title: "Консултация",
      paragraphs: [
        {
          text: "Консултация за текуща цена на имота ви може да получите от брокер на недвижими имоти, който има нужната практическа подготовка и е професионалист.",
        },
        {
          parts: [
            {
              text: "В България все още няма закон, регламентиращ правата и задълженията на лицата, опериращи като брокери по недвижими имоти. Има квалификационни курсове, както и учебни заведения предлагащи програми за подготовка на кадри, но те са препоръчителни и дори без такава подготовка, е възможно практикуването на дейност като брокер. Когато се обръщате към услугите на агенция за недвижими имоти, ще спечелите ползи, ако фирмата е член на ",
            },
            {
              tip: "НСНИ е сдружение, което се стреми към въвеждането на ясни правила на работа в брокерските агенции, спазване на професионална етика, предоставяне на качествена услуга на клиентите и много други добри практики в бизнеса с имоти.",
              label: "НСНИ",
            },
            { text: "." },
          ],
        },
        {
          text: "Мнението на агентът по недвижими имоти ще се основава на скорошни сделки, които той е осъществил, за имоти, разположени в сходен район и притежаващи сходни характеристики спрямо вашия имот. Важно е да сте наясно, че става дума за мнение на посредник, което при друг посредник може да е различно, според обема на осъществени сделки. Консултациите на брокери обикновено са безплатни и не са обвързани с официално становище.",
        },
      ],
    },
  ],
};

export const article2Page = {
  title: "« За Дизайна на пространства",
  image: "./assets/images/article2.jpg",
  intro: [
    {
      text: "Всеки един недвижим имот физически представлява обособено пространство, със специфични характеристики, спрямо функционалното предназначение на имота. Но кое определя атмосферата на това пространство – това нематериално усещане, което вие като собственик, наемател или посетител усещате, докато сте в имота ?",
    },
  ],
  sections: [
    {
      id: "design",
      title: "За дизайна",
      paragraphs: [
        {
          text: "Дали една стена е декорирана с бели ретро тухли или ярък фототапет, е въпрос на вкус и персонални виждания за естетика. Цветово комбинациите могат да бъдат хиляди, съчетанията на материали също и изпълнените СМР да бъдат разнотипни. Това разнообразие предопределя необхватните вариации на оформлението на едно пространство. Но има хора, които го носят в себе си – умението или по – точно казано дарбата да превръщат едно помещение в пространство с душа. Случвало ли ви се е, когато посетите нечий дом да си кажете „Тук има атмосфера“. И не заради тъкмо монтираната нова кухня или ефектен гранитогрес на пода, а заради нещо друго.",
        },
        {
          parts: [
            {
              text: "Дизайнерите са тези професионалисти, които ще ви съдействат в процесите на довършителни работи по един недвижим имот, за да го преобразите в пространството, от което имате нужда. Дали ще е вашият офис, в който посрещате клиентите си, или домът, в който изживявате красиви моменти с близките си, е всъщност без значение. Защото имотът следва потребностите на собственика си. И докато ежедневно ние се доверяваме неосезаемо на някого при избора си на храна/дрехи/автомобили, за имотите и оформлението на тяхното пространство, сякаш е по – нетипично. Ние от Studio4.marketing се възхищаваме на дизайнери, които претворяват имотите в пространства с атмосфера. В социалните мрежи ще ви споделим креативните проекти, за да визуализираме, това за което говорим. Последвайте ни на ",
            },
            {
              href: social.find((s) => s.id === "facebook").href,
              label: "Facebook",
            },
            { text: " и " },
            {
              href: social.find((s) => s.id === "instagram").href,
              label: "Instagram",
            },
            {
              text: " и се насладете на красотата, която е част от усещането за уют + баланс в имота. А ако е дошло време да закупите нов имот – ние сме на ",
            },
            { route: "contact", label: "разположение" },
            {
              text: ". Не забравяйте, че дори и в неугледно състояние – имотите могат да се превърнат в пространства с атмосфера.",
            },
          ],
        },
      ],
    },
    {
      id: "construction",
      title: "Under construction",
      paragraphs: [
        {
          text: "Ремонтът без предварително обмислен дизайн някак звучи като сделка за недвижим имот без участие на адвокат с насоченост вещно право, технически може – напълно изпълнимо е, но дали не е рисково ( за страните по сделката и за този, който ще инвестира средства в ремонта) ? Както адвокатът се грижи за това интересите на купувача / или продавача да бъдат защитени, така при ремонта дизайнерът полага усилия финалния завършен вид на имота да е този, който вие ще одобрите и ще удовлетвори потребностите ви.",
        },
        {
          parts: [
            {
              text: "Доверявайки се на професионалист, може да си позволите спокойствие за желания краен резултат. Спокойствие, което е неизмеримо в парични средства, и даже е безценно за успешното финализиране на процесите по довършителни дейности в имота. Е, не винаги бюджетът позволява услугите на дизайнер (или адвокат), но никога една консултация няма да натежи финансово кой знае колко, а ще спести не малко главоболия. Окото на професионалиста ще улови трудно уловимите детайли, които си струват внимание при подготовката и обмислянето на процесите, свързани с имота и всъщност това ще ви спести не малко средства. Studio4.marketing се грижи за клиентите и техните различни казуси като оказва съдействие при намиране на точните специалисти за конкретната ситуация – защото вярваме, че това е начина да ви доставим висококачествени посреднически ",
            },
            { route: "concept", label: "услуги" },
            { text: "." },
          ],
        },
      ],
    },
  ],
};

export const reviewsPage = {
  title: "отзиви",
  image: "./assets/images/reviews-banner.jpg",
  mailIcon: "./assets/images/mails.png",
  cameraIcon: "./assets/images/photo-camera.png",
  emailLabel: `И-МЕЙЛ: ${site.email}`,
  phoneLabel: "+(359)879070759",
  messageDefault: "Вашата препоръка към нас...",
  fileLabel:
    "Ако искате да публикувате отзив, качете снимката си (по избор). Препоръчително е снимката да бъде с еднаква височина и ширина.",
  avatar: "./assets/images/user.png",
  testimonials: [
    {
      name: "Емил Сергиев",
      quote: "Много съм доволен от професионалното и коректно отношение към вашите клиенти!",
    },
    {
      name: "Кирил Стефанов",
      quote:
        "Хареса ми разбирането към мен и професионализма, с който се подходи в моя случай. Хубаво е когато нещата се получават гладко и безпроблемно. Успех и имате моята препоръка.",
    },
    {
      name: "Georgi Pahlev",
      quote: "Prodaljavai v sashtiq dyx.Pojelavam ti mn mn uspexi i da stignesh do varxa!!!",
    },
  ],
};

export const contactPage = {
  title: "контакти",
  city: "гр. Благоевград",
  image: "./assets/images/contact-banner.jpg",
  mailIcon: "./assets/images/mails.png",
  emailLabel: `И-МЕЙЛ: ${site.email}`,
  phoneLabel: "+(359)879070759",
  partners: [
    {
      alt: "Alma-M2",
      src: "./assets/images/alma-m2.jpg",
      href: "https://goo.gl/maps/TEaYy5wavDA2",
    },
    {
      alt: "Stiliyana Laleva public register",
      src: "./assets/images/logo_registar.svg",
      href: "https://publicregister.bg/bg/%D1%81%D1%82%D0%B8%D0%BB%D0%B8%D1%8F%D0%BD%D0%B0-%D0%BA%D0%BE%D1%81%D1%82%D0%B0%D0%B4%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0-%D0%BB%D0%B0%D0%BB%D0%B5%D0%B2%D0%B0",
    },
    {
      alt: "Механа при дедо Коце",
      src: "./assets/images/mehana.png",
      href: "https://www.google.bg/maps/dir/''/%D0%9C%D0%B5%D1%85%D0%B0%D0%BD%D0%B0+%D0%BF%D1%80%D0%B8+%D0%B4%D0%B5%D0%B4%D0%BE+%D0%9A%D0%BE%D1%86%D0%B5+%D0%A0%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD%D1%82/@41.8380087,23.4192261,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14abaea4ab8e3fed:0x67042ed47676d2e6!2m2!1d23.489266!2d41.83803",
    },
    { alt: "SWU", src: "./assets/images/swu.png", href: "http://www.law.swu.bg" },
    { alt: "UNWE", src: "./assets/images/logo-short-bg.png", href: "https://www.unwe.bg" },
    { alt: "NSNI", src: "./assets/images/nsni.png", href: "https://nsni.bg" },
    { alt: "CIAB", src: "./assets/images/ciab-bg.jpg", href: "http://public.ciab-bg.com" },
    {
      alt: "Sika",
      src: "./assets/images/sika.png",
      href: "https://bgr.sika.com/bg/solutions_products/02/02a024.html",
    },
  ],
};

export const addPropertyPage = {
  title: "+ добавете",
  image: "./assets/images/addition.jpg",
  cameraIcon: "./assets/images/photo-camera.png",
  messageDefault: "Здравейте, искам да обявя за продажба / под наем този имот ...",
  fileLabel: "Прикачи файл / файлове (до 10)",
  sources: ["Google", "Facebook", "LinkedIn", "Друг сайт", "Препоръка", "Друго"],
  headline: [
    { text: "+ Добавете имот ", size: "lg" },
    { text: "и експерт", size: "sm" },
    { text: "\n", size: "br" },
    { text: "от екипа на ", size: "sm" },
    { text: "Studio4.marketing", size: "lg" },
    { text: "\n", size: "br" },
    { text: "ще се свърже ", size: "sm" },
    { text: "с вас, за да уточним ", size: "sm" },
    { text: "\n", size: "br" },
    { text: "детайлите ", size: "lg" },
    { text: "и ", size: "sm" },
    { text: "предстоящите ", size: "sm" },
    { text: "стъпки,", size: "lg" },
    { text: "\n", size: "br" },
    { text: "които са нужни за ", size: "sm" },
    { text: "успешно ", size: "lg" },
    { text: "\n", size: "br" },
    { text: "позициониране ", size: "lg" },
    { text: "на пазара.", size: "md" },
  ],
};

/* ─── Router / state ────────────────────────────────────── */

const routeFromHash = () => {
  const raw = (location.hash || "#/").replace(/^#/, "") || "/";
  const path = (raw.startsWith("/") ? raw : `/${raw}`).split("?")[0].replace(/\/$/, "") || "/";
  const match = Object.entries(routes).find(([, r]) => r.path === path);
  return match?.[0] || "home";
};

const route = signal(routeFromHash());
const menuOpen = signal(false);
const activeStatement = signal(0);
const orderPackageId = signal(null);
const formStatus = signal("");
const sellerIntroOpen = signal(true);
const appraisalOpenId = signal(null);
const appraisalFormStatus = signal("");
const conceptOpenId = signal("concept");
const article1OpenId = signal("appraisal");
const article2OpenId = signal("design");
const contactFormStatus = signal("");
const reviewsFormStatus = signal("");
const reviewsFileLabel = signal(reviewsPage.fileLabel);
const reviewsIndex = signal(0);
const addPropertyFormStatus = signal("");
const addPropertyFileLabel = signal(addPropertyPage.fileLabel);

const navigate = (name) => {
  const path = routes[name]?.path || "/";
  const nextHash = `#${path}`;
  if (location.hash !== nextHash) location.hash = path;
  else route.value = name;
  menuOpen.value = false;
  orderPackageId.value = null;
  formStatus.value = "";
  appraisalFormStatus.value = "";
  appraisalOpenId.value = appraisalServices[name] ? name : null;
  if (name === "concept") conceptOpenId.value = "concept";
  if (name === "article1") article1OpenId.value = "appraisal";
  if (name === "article2") article2OpenId.value = "design";
  contactFormStatus.value = "";
  reviewsFormStatus.value = "";
  reviewsFileLabel.value = reviewsPage.fileLabel;
  reviewsIndex.value = 0;
  addPropertyFormStatus.value = "";
  addPropertyFileLabel.value = addPropertyPage.fileLabel;
  window.scrollTo(0, 0);
};

window.addEventListener("hashchange", () => {
  route.value = routeFromHash();
  menuOpen.value = false;
  orderPackageId.value = null;
  formStatus.value = "";
  appraisalFormStatus.value = "";
  appraisalOpenId.value = appraisalServices[route.value] ? route.value : null;
  if (route.value === "concept") conceptOpenId.value = conceptOpenId.value || "concept";
  if (route.value === "article1") article1OpenId.value = article1OpenId.value || "appraisal";
  if (route.value === "article2") article2OpenId.value = article2OpenId.value || "design";
  contactFormStatus.value = "";
  reviewsFormStatus.value = "";
  reviewsFileLabel.value = reviewsPage.fileLabel;
  reviewsIndex.value = 0;
  addPropertyFormStatus.value = "";
  addPropertyFileLabel.value = addPropertyPage.fileLabel;
  window.scrollTo({ top: 0, behavior: "auto" });
});

effect(() => {
  const r = routes[route.value];
  if (r) document.title = r.title;
});

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};

const selectStatement = (index) => {
  activeStatement.value = index;
};

const prevStatement = () => {
  const n = heroStatements.length;
  activeStatement.value = (activeStatement.value - 1 + n) % n;
};

const nextStatement = () => {
  const n = heroStatements.length;
  activeStatement.value = (activeStatement.value + 1) % n;
};

const openOrder = (id) => {
  orderPackageId.value = id;
  formStatus.value = "";
};

const closeOrder = () => {
  orderPackageId.value = null;
  formStatus.value = "";
};

/* ─── Icons ─────────────────────────────────────────────── */

const IconPhone = () => html`
  <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"/>
  </svg>
`;

const IconLinkedIn = () => html`
  <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M6.5 8.5H3.7V20h2.8V8.5zM5.1 4C4.1 4 3.3 4.8 3.3 5.8s.8 1.8 1.8 1.8 1.8-.8 1.8-1.8S6.1 4 5.1 4zM20.3 20h-2.8v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20H10.8V8.5h2.7v1.6h.1c.4-.7 1.3-1.8 3.1-1.8 3.3 0 3.9 2.2 3.9 5V20z"/>
  </svg>
`;

const IconInstagram = () => html`
  <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zM17.8 6.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM12 3.6c-2.3 0-2.6 0-3.5.1-.9 0-1.5.2-2 .4a4 4 0 0 0-1.5 1.5c-.2.5-.4 1.1-.4 2-.1.9-.1 1.2-.1 3.5s0 2.6.1 3.5c0 .9.2 1.5.4 2a4 4 0 0 0 1.5 1.5c.5.2 1.1.4 2 .4.9.1 1.2.1 3.5.1s2.6 0 3.5-.1c.9 0 1.5-.2 2-.4a4 4 0 0 0 1.5-1.5c.2-.5.4-1.1.4-2 .1-.9.1-1.2.1-3.5s0-2.6-.1-3.5c0-.9-.2-1.5-.4-2a4 4 0 0 0-1.5-1.5c-.5-.2-1.1-.4-2-.4-.9-.1-1.2-.1-3.5-.1zm0 1.5c2.2 0 2.5 0 3.4.1.8 0 1.3.2 1.6.3.4.2.7.3 1 .6.3.3.5.6.6 1 .2.3.3.8.3 1.6.1.9.1 1.2.1 3.4s0 2.5-.1 3.4c0 .8-.2 1.3-.3 1.6-.2.4-.3.7-.6 1-.3.3-.6.5-1 .6-.3.2-.8.3-1.6.3-.9.1-1.2.1-3.4.1s-2.5 0-3.4-.1c-.8 0-1.3-.2-1.6-.3-.4-.2-.7-.3-1-.6-.3-.3-.5-.6-.6-1-.2-.3-.3-.8-.3-1.6-.1-.9-.1-1.2-.1-3.4s0-2.5.1-3.4c0-.8.2-1.3.3-1.6.2-.4.3-.7.6-1 .3-.3.6-.5 1-.6.3-.2.8-.3 1.6-.3.9-.1 1.2-.1 3.4-.1z"/>
  </svg>
`;

const IconFacebook = () => html`
  <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M14 8.2h2.4V5h-2.4C11.8 5 10 6.8 10 9.2v1.6H7.8V14H10v7h3.2v-7h2.5l.5-3.2h-3V9.2c0-.6.4-1 1-1z"/>
  </svg>
`;

const IconX = () => html`
  <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M17.6 4h2.5l-5.5 6.3L21.5 20h-5.3l-4.2-5.5L7.3 20H4.8l5.9-6.7L2.7 4h5.4l3.8 5 5.7-5zm-.9 14.4h1.4L7.4 5.5H6L16.7 18.4z"/>
  </svg>
`;

const IconChevronLeft = () => html`
  <svg class="icon icon--arrow" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M15 5l-7 7 7 7"/>
  </svg>
`;

const IconChevronRight = () => html`
  <svg class="icon icon--arrow" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
  </svg>
`;

const socialIcons = {
  linkedin: IconLinkedIn,
  instagram: IconInstagram,
  facebook: IconFacebook,
  twitter: IconX,
};

/* ─── Shared UI ─────────────────────────────────────────── */

const Link = ({ to, className = "", children, onClick, ...rest }) => {
  const href = `#${routes[to]?.path || "/"}`;
  const handle = (e) => {
    e.preventDefault();
    navigate(to);
    onClick?.();
  };
  return html`<a href=${href} class=${className} onClick=${handle} ...${rest}>${children}</a>`;
};

const MenuAnchor = ({ item, onNavigate, className = "" }) => {
  if (item.route) {
    return html`
      <${Link} to=${item.route} className=${className} onClick=${onNavigate}>
        ${item.label}
        ${item.count != null ? html`<sup>${item.count}</sup>` : null}
      <//>
    `;
  }
  return html`
    <a
      href=${item.href}
      class=${className}
      onClick=${onNavigate}
      target=${item.external ? "_blank" : undefined}
      rel=${item.external ? "noopener noreferrer" : undefined}
    >
      ${item.label}
      ${item.count != null ? html`<sup>${item.count}</sup>` : null}
    </a>
  `;
};

const SocialLinks = ({ className = "" }) => html`
  <div class=${`social ${className}`}>
    ${social.map((s) => {
      const Icon = socialIcons[s.id];
      return html`
        <a key=${s.id} href=${s.href} target="_blank" rel="noopener noreferrer" aria-label=${s.label} class="social__link">
          <${Icon} />
        </a>
      `;
    })}
  </div>
`;

const Header = () => html`
  <header class="header">
    <${Link} to="home" className="header__brand" aria-label=${site.name}>
      <img src=${site.logo} alt=${site.name} class="header__logo" width="180" height="45" />
    <//>
    <div class="header__actions">
      <a class="header__phone" href=${site.phoneHref}>
        <${IconPhone} />
        <span>${site.phone}</span>
      </a>
      <${SocialLinks} className="header__social" />
      <button
        type="button"
        class=${`menu-toggle ${menuOpen.value ? "is-open" : ""}`}
        aria-label=${menuOpen.value ? "Затвори меню" : "Отвори меню"}
        aria-expanded=${menuOpen.value}
        onClick=${toggleMenu}
      >
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
`;

const SideMenu = () => html`
  <div class=${`menu-overlay ${menuOpen.value ? "is-open" : ""}`} onClick=${closeMenu}></div>
  <nav class=${`side-menu ${menuOpen.value ? "is-open" : ""}`} aria-hidden=${!menuOpen.value}>
    <button type="button" class="side-menu__close" aria-label="Затвори" onClick=${closeMenu}>×</button>
    <ul class="side-menu__list">
      ${menu.map((item) =>
        item.children
          ? html`
              <li key=${item.label} class="side-menu__group">
                <span class="side-menu__label">${item.label}</span>
                <ul>
                  ${item.children.map(
                    (child) => html`
                      <li key=${child.label}>
                        <${MenuAnchor} item=${child} onNavigate=${closeMenu} />
                      </li>
                    `
                  )}
                </ul>
              </li>
            `
          : html`
              <li key=${item.label}>
                <${MenuAnchor} item=${item} className="side-menu__top" onNavigate=${closeMenu} />
              </li>
            `
      )}
    </ul>
    <div class="side-menu__footer">
      <${SocialLinks} />
      <p class="copy">© ${site.year} Studio4.marketing</p>
    </div>
  </nav>
`;

const Footer = () => html`
  <footer class="footer">
    <div class="footer__grid">
      ${footerColumns.map(
        (col, i) => html`
          <ul key=${i} class="footer__col">
            ${col.map(
              (link) => html`
                <li key=${link.label}>
                  ${link.route
                    ? html`<${Link} to=${link.route}>${link.label}<//>`
                    : html`
                        <a
                          href=${link.href}
                          target=${link.external ? "_blank" : undefined}
                          rel=${link.external ? "noopener noreferrer" : undefined}
                        >
                          ${link.label}
                        </a>
                      `}
                </li>
              `
            )}
          </ul>
        `
      )}
    </div>
    <div class="footer__bottom">
      <${SocialLinks} />
      <p class="copy">© ${site.year} Studio4.marketing</p>
    </div>
  </footer>
`;

/* ─── Home ──────────────────────────────────────────────── */

const Hero = () => {
  const statement = heroStatements[activeStatement.value];
  return html`
    <section class="hero">
      <div class="hero__media" aria-hidden="true">
        <img src="./assets/images/new.jpg" alt="" class="hero__img" />
        <div class="hero__veil"></div>
      </div>
      <div class="hero__content">
        <p class="hero__eyebrow">${site.tagline}</p>
        <img class="hero__wordmark" src=${site.logo} alt=${site.name} width="400" height="101" />
        <div class="hero__statement" key=${statement.id}>
          ${statement.lines.map(
            (line, i) => html`<p key=${i} class=${i === 0 ? "hero__lead" : "hero__line"}>${line}</p>`
          )}
        </div>
        <div class="hero__tabs" role="tablist" aria-label="Ключови послания">
          ${heroStatements.map(
            (s, i) => html`
              <button
                key=${s.id}
                type="button"
                role="tab"
                aria-selected=${activeStatement.value === i}
                class=${`hero__tab ${activeStatement.value === i ? "is-active" : ""}`}
                onClick=${() => selectStatement(i)}
              >
                <span class="sr-only">${s.lines[0]}</span>
              </button>
            `
          )}
        </div>
        <div class="hero__nav">
          <button type="button" class="hero__arrow" aria-label="Предишно послание" onClick=${prevStatement}>
            <${IconChevronLeft} />
          </button>
          <button type="button" class="hero__arrow" aria-label="Следващо послание" onClick=${nextStatement}>
            <${IconChevronRight} />
          </button>
        </div>
      </div>
    </section>
  `;
};

const MediationTeaser = () => html`
  <section class="mediation">
    <div class="mediation__media" aria-hidden="true">
      <img src=${mediation.image} alt="" />
      <div class="mediation__veil"></div>
    </div>
    <div class="mediation__body">
      <h2 class="mediation__title">${mediation.title}</h2>
      <p class="mediation__subtitle">${mediation.subtitle}</p>
      <ul class="mediation__list">
        ${mediation.items.map(
          (item) => html`<li key=${item}><span class="plus" aria-hidden="true">+</span> ${item}</li>`
        )}
        <li>
          <span class="plus" aria-hidden="true">+</span>
          <${Link} to="mediation"> към посредничество</${Link}>
        </li>
      </ul>
    </div>
  </section>
`;

const HomeServices = () => html`
  <section class="services">
    <div class="services__media" aria-hidden="true">
      <img src="./assets/images/homepage-banner-3.jpg" alt="" />
      <div class="services__veil"></div>
    </div>
    <div class="services__inner">
      <h2 class="services__title">Услуги</h2>
      <div class="services__grid">
        ${homeServices.map((svc) =>
          svc.route
            ? html`
                <${Link} key=${svc.title} to=${svc.route} className="service">
                  <h3>${svc.title} <span class="plus">+</span></h3>
                <//>
              `
            : html`
                <a key=${svc.title} class="service" href=${svc.href}>
                  <h3>${svc.title} <span class="plus">+</span></h3>
                </a>
              `
        )}
      </div>
    </div>
  </section>
`;

const HomePage = () => html`
  <${Hero} />
  <${MediationTeaser} />
  <${HomeServices} />
`;

/* ─── Mediation page ────────────────────────────────────── */

const MediationPage = () => html`
  <div class="page page--mediation">
    <section class="mediation-split">
      <div class="mediation-split__content">
        <h1 class="mediation-split__title">${mediation.title}</h1>
        <p class="mediation__subtitle">${mediation.subtitle}</p>
        <ul class="mediation-split__list">
          ${mediation.items.map(
            (item) => html`
              <li key=${item}>
                <span class="plus" aria-hidden="true">+</span> ${item}
              </li>
            `
          )}
        </ul>
      </div>
      <div class="mediation-split__visual" aria-hidden="true">
        <img src=${mediation.image} alt="" />
      </div>
    </section>
  </div>
`;

/* ─── Service / sellers page ────────────────────────────── */

const OrderModal = () => {
  const pkg = sellerPage.packages.find((p) => p.id === orderPackageId.value);
  if (!pkg) return null;

  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Поръчка пакет ${pkg.label}${pkg.power}`);
    const body = encodeURIComponent(
      [
        fd.get("message"),
        "",
        `Име: ${fd.get("name")}`,
        `Телефон: ${fd.get("phone")}`,
        `Имейл: ${fd.get("email")}`,
        `Откъде: ${fd.get("referance")}`,
        `Пакет: ${pkg.id}`,
      ].join("\n")
    );
    formStatus.value = "Отваряне на имейл клиента…";
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return html`
    <div class="modal-overlay" onClick=${closeOrder}>
      <div class="modal" role="dialog" aria-modal="true" onClick=${(e) => e.stopPropagation()}>
        <button type="button" class="modal__close" aria-label="Затвори" onClick=${closeOrder}>×</button>
        <h3 class="modal__title">${pkg.label}<sup>${pkg.power}</sup></h3>
        <form class="order-form" onSubmit=${onSubmit}>
          <div class="order-form__row">
            <input name="name" type="text" placeholder="Име и Фамилия" required />
            <input name="phone" type="text" placeholder="Телефон" required />
          </div>
          <div class="order-form__row">
            <input name="email" type="email" placeholder="Имейл" required />
            <select name="referance" required>
              <option value="">Как разбрахте за нас?</option>
              ${sellerPage.referOptions.map((o) => html`<option key=${o} value=${o}>${o}</option>`)}
            </select>
          </div>
          <textarea name="message" required>
${`Здравейте, искам да закупя пакет услуги № ${pkg.label}${pkg.power}`}</textarea>
          <label class="order-form__check">
            <input type="checkbox" name="terms" required />
            <span>Съгласен съм с <a href="./terms.pdf" target="_blank" rel="noopener noreferrer">общите условия</a></span>
          </label>
          ${formStatus.value ? html`<p class="order-form__status">${formStatus.value}</p>` : null}
          <button type="submit" class="btn btn--accent">Изпрати</button>
        </form>
      </div>
    </div>
  `;
};

const ServicePage = () => html`
  <div class="page page--service">
    <section class="seller-flow">
      <div class="seller-flow__inner">
        ${sellerPage.flow.map(
          (step) => html`
            <div key=${step.id} class=${`seller-flow__step seller-flow__step--${step.id}`}>
              ${step.textPos === "above" && step.text
                ? html`<p class="seller-flow__text">${step.text}</p>`
                : null}
              <div class="seller-flow__icons">
                ${step.icons.map((src, j) => html`<img key=${j} src=${src} alt="" />`)}
              </div>
              ${step.textPos === "below" && step.text
                ? html`<p class="seller-flow__text">${step.text}</p>`
                : null}
            </div>
          `
        )}
      </div>
    </section>

    <section class="seller-accordion">
      <button
        type="button"
        class="seller-accordion__toggle"
        aria-expanded=${sellerIntroOpen.value}
        onClick=${() => {
          sellerIntroOpen.value = !sellerIntroOpen.value;
        }}
      >
        <span>${sellerPage.introTitle}</span>
        <span class="plus" aria-hidden="true">${sellerIntroOpen.value ? "−" : "+"}</span>
      </button>
      ${sellerIntroOpen.value
        ? html`
            <div class="seller-accordion__body">
              ${sellerPage.intro.map((p, i) => html`<p key=${i}>${p}</p>`)}
            </div>
          `
        : null}
    </section>

    <section class="packages">
      <div class="packages__grid">
        ${sellerPage.packages.map(
          (pkg) => html`
            <article key=${pkg.id} class=${`package ${pkg.recommended ? "package--recommended" : ""}`}>
              <h3>${pkg.label}<sup>${pkg.power}</sup></h3>
              <p class="package__price">${pkg.price} <span>лв.</span></p>
              <ul class="package__features">
                ${pkg.features.map(
                  (f) => html`
                    <li key=${f.text}>
                      <span>${f.text}</span>
                      ${f.tip
                        ? f.tipHref
                          ? html`<a class="tip" href=${f.tipHref} target="_blank" rel="noopener noreferrer" title=${f.tip}>?</a>`
                          : html`<span class="tip" title=${f.tip}>?</span>`
                        : null}
                    </li>
                  `
                )}
              </ul>
              <button type="button" class="btn btn--ghost" onClick=${() => openOrder(pkg.id)}>
                [поръчай]
              </button>
            </article>
          `
        )}
      </div>
    </section>

    ${orderPackageId.value != null ? html`<${OrderModal} />` : null}
  </div>
`;

/* ─── Appraisal / request pages ─────────────────────────── */

const familyServices = (family) =>
  Object.values(appraisalServices).filter((s) => s.family === family);

const AppraisalForm = ({ service }) => {
  const siblings = familyServices(service.family);

  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Заявка: ${service.title}`);
    const body = encodeURIComponent(
      [
        fd.get("message"),
        "",
        `Услуга: ${fd.get("type")}`,
        `Име: ${fd.get("name")}`,
        `Телефон: ${fd.get("phone")}`,
        `Имейл: ${fd.get("email")}`,
        `Тип имот: ${fd.get("kind")}`,
        `Локация: ${fd.get("location")}`,
        `Район: ${fd.get("town")}`,
        `Дата: ${fd.get("date")}`,
        `Час: ${fd.get("time")}`,
        `Откъде: ${fd.get("referance")}`,
      ].join("\n")
    );
    appraisalFormStatus.value = "Отваряне на имейл клиента…";
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return html`
    <form class="appraisal-form" onSubmit=${onSubmit}>
      <h2 class="appraisal-form__title">заявете оценка на вашия имот</h2>
      <select name="type" required>
        ${siblings.map(
          (s) => html`
            <option key=${s.id} value=${s.formType} selected=${s.id === service.id}>
              ${s.formTypeLabel}
            </option>
          `
        )}
      </select>
      <div class="appraisal-form__row">
        <input name="name" type="text" placeholder="Име и Фамилия" required />
        <input name="phone" type="tel" placeholder="Телефон" required />
      </div>
      <div class="appraisal-form__row">
        <input name="email" type="email" placeholder="Имейл" required />
        <select name="kind" required>
          <option value="">Тип имот</option>
          ${appraisalFormOptions.kinds.map((k) => html`<option key=${k} value=${k}>${k}</option>`)}
        </select>
      </div>
      <div class="appraisal-form__row">
        <input name="location" type="text" placeholder="Локация" required />
        <input name="town" type="text" placeholder="Район" required />
      </div>
      <div class="appraisal-form__row">
        <input name="date" type="date" required />
        <select name="time" required>
          <option value="">Удобен час</option>
          ${appraisalFormOptions.times.map((t) => html`<option key=${t} value=${t}>${t}</option>`)}
        </select>
      </div>
      <textarea name="message" required>${service.message}</textarea>
      <select name="referance" required>
        <option value="">Как разбрахте за нас?</option>
        ${appraisalFormOptions.referances.map((r) => html`<option key=${r} value=${r}>${r}</option>`)}
      </select>
      <label class="order-form__check">
        <input type="checkbox" name="terms" required />
        <span>Съгласен съм с <a href="./terms.pdf" target="_blank" rel="noopener noreferrer">общите условия</a></span>
      </label>
      ${appraisalFormStatus.value
        ? html`<p class="order-form__status">${appraisalFormStatus.value}</p>`
        : null}
      <button type="submit" class="btn btn--accent">Изпрати</button>
    </form>
  `;
};

const AppraisalPage = ({ serviceId }) => {
  const service = appraisalServices[serviceId];
  if (!service) return null;
  const openId = appraisalOpenId.value || serviceId;
  const siblings = familyServices(service.family);

  return html`
    <div class="page page--appraisal">
      <section class="appraisal-banner">
        <div class="appraisal-banner__media" aria-hidden="true">
          <img src=${service.banner} alt="" />
        </div>
        <div class="appraisal-banner__content">
          ${appraisalBanner.lines.map((line, i) =>
            i === 2
              ? html`<p key=${i} class="appraisal-banner__sub">${line}</p>`
              : html`<p key=${i} class="appraisal-banner__line">${line}</p>`
          )}
        </div>
      </section>

      <section class="appraisal-main">
        <div class="appraisal-copy">
          ${siblings.map(
            (s) => html`
              <div key=${s.id} class="seller-accordion appraisal-accordion">
                <button
                  type="button"
                  class="seller-accordion__toggle"
                  aria-expanded=${openId === s.id}
                  onClick=${() => {
                    if (s.id !== serviceId) {
                      navigate(s.id);
                      return;
                    }
                    appraisalOpenId.value = openId === s.id ? null : s.id;
                  }}
                >
                  <span>${s.title}</span>
                  <span class="plus" aria-hidden="true">${openId === s.id ? "−" : "+"}</span>
                </button>
                ${openId === s.id
                  ? html`
                      <div class="seller-accordion__body">
                        ${s.paragraphs.map((p, i) => html`<p key=${i}>${p}</p>`)}
                        ${s.link
                          ? html`
                              <p>
                                <a href=${s.link.href} target="_blank" rel="noopener noreferrer">${s.link.label}</a>
                              </p>
                            `
                          : null}
                      </div>
                    `
                  : null}
              </div>
            `
          )}
        </div>
        <div class="appraisal-side">
          <${AppraisalForm} key=${service.id} service=${service} />
        </div>
      </section>
    </div>
  `;
};

const ConceptPage = () => html`
  <div class="page page--concept">
    <section class="concept-hero">
      <div class="concept-hero__media" aria-hidden="true">
        <img src=${conceptPage.image} alt="" />
      </div>
      <div class="concept-hero__content">
        <h1>${conceptPage.title}</h1>
      </div>
    </section>

    <section class="concept-sections">
      ${conceptPage.sections.map(
        (section) => html`
          <div key=${section.id} class="seller-accordion concept-accordion">
            <button
              type="button"
              class="seller-accordion__toggle"
              aria-expanded=${conceptOpenId.value === section.id}
              onClick=${() => {
                conceptOpenId.value =
                  conceptOpenId.value === section.id ? null : section.id;
              }}
            >
              <span>${section.title}</span>
              <span class="plus" aria-hidden="true">
                ${conceptOpenId.value === section.id ? "−" : "+"}
              </span>
            </button>
            ${conceptOpenId.value === section.id
              ? html`
                  <div class="seller-accordion__body">
                    <p>${section.text}</p>
                  </div>
                `
              : null}
          </div>
        `
      )}
    </section>
  </div>
`;

const RichParagraph = ({ paragraph }) => {
  if (paragraph.text) return html`<p>${paragraph.text}</p>`;
  return html`
    <p>
      ${paragraph.parts.map((part, i) => {
        if (part.route)
          return html`<${Link} key=${i} to=${part.route} className="inline-link">${part.label}</${Link}>`;
        if (part.href)
          return html`<a
            key=${i}
            class="inline-link"
            href=${part.href}
            target="_blank"
            rel="noopener noreferrer"
            >${part.label}</a
          >`;
        if (part.tip)
          return html`<abbr key=${i} class="tip" title=${part.tip}>${part.label}</abbr>`;
        if (part.bold) return html`<strong key=${i}>${part.text}</strong>`;
        return part.text;
      })}
    </p>
  `;
};

const ArticleSections = ({ sections, openId }) => html`
  <div class="article-columns">
    ${sections.map(
      (section) => html`
        <div key=${section.id} class="seller-accordion article-accordion">
          <button
            type="button"
            class="seller-accordion__toggle"
            aria-expanded=${openId.value === section.id}
            onClick=${() => {
              openId.value = openId.value === section.id ? null : section.id;
            }}
          >
            <span>${section.title}</span>
            <span class="plus" aria-hidden="true">
              ${openId.value === section.id ? "−" : "+"}
            </span>
          </button>
          ${openId.value === section.id
            ? html`
                <div class="seller-accordion__body">
                  ${section.paragraphs.map(
                    (paragraph, i) =>
                      html`<${RichParagraph} key=${i} paragraph=${paragraph} />`
                  )}
                </div>
              `
            : null}
        </div>
      `
    )}
  </div>
`;

const Article1Page = () => html`
  <div class="page page--article page--article1">
    <section class="article-hero">
      <div class="article-hero__media" aria-hidden="true">
        <img src=${article1Page.image} alt="" />
      </div>
      <div class="article-hero__content">
        <p class="article-hero__eyebrow">${article1Page.eyebrow}</p>
        <h1>${article1Page.title}</h1>
        <p class="article-hero__suffix">
          <span class="article-hero__and">и</span> ${article1Page.titleSuffix}
        </p>
      </div>
    </section>

    <section class="article-body">
      <div class="article-intro">
        ${article1Page.intro.map(
          (paragraph, i) => html`<${RichParagraph} key=${i} paragraph=${paragraph} />`
        )}
      </div>
      <${ArticleSections} sections=${article1Page.sections} openId=${article1OpenId} />
    </section>
  </div>
`;

const Article2Page = () => html`
  <div class="page page--article page--article2">
    <section class="article-hero">
      <div class="article-hero__media" aria-hidden="true">
        <img src=${article2Page.image} alt="" />
      </div>
      <div class="article-hero__content">
        <h1>${article2Page.title}</h1>
      </div>
    </section>

    <section class="article-body">
      <div class="article-intro">
        ${article2Page.intro.map(
          (paragraph, i) => html`<${RichParagraph} key=${i} paragraph=${paragraph} />`
        )}
      </div>
      <${ArticleSections} sections=${article2Page.sections} openId=${article2OpenId} />
    </section>
  </div>
`;

const ContactPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent("контакт");
    const body = encodeURIComponent(
      [
        fd.get("message"),
        "",
        `Име: ${fd.get("name")}`,
        `Телефон: ${fd.get("phone")}`,
        `Имейл: ${fd.get("email")}`,
      ].join("\n")
    );
    contactFormStatus.value = "Отваряне на имейл клиента…";
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return html`
    <div class="page page--contact">
      <section class="contact-hero">
        <div class="contact-hero__media" aria-hidden="true">
          <img src=${contactPage.image} alt="" />
        </div>
        <div class="contact-hero__content">
          <h1>${contactPage.title}</h1>
          <p>${contactPage.city}</p>
        </div>
      </section>

      <section class="contact-main">
        <form class="contact-form" onSubmit=${onSubmit}>
          <div class="contact-form__fields">
            <div class="contact-form__row">
              <input name="name" type="text" placeholder="Име и Фамилия" required />
              <input name="phone" type="text" placeholder="Телефон" required />
            </div>
            <div class="contact-form__row">
              <textarea name="message" placeholder="Съобщение" required></textarea>
              <input name="email" type="email" placeholder="Имейл" required />
            </div>
            <label class="order-form__check">
              <input type="checkbox" name="terms" required />
              <span>
                Съгласен съм с
                <a href="./terms.pdf" target="_blank" rel="noopener noreferrer">общите условия</a>
              </span>
            </label>
            ${contactFormStatus.value
              ? html`<p class="order-form__status">${contactFormStatus.value}</p>`
              : null}
          </div>
          <div class="contact-form__actions">
            <button type="submit" class="contact-action contact-action--submit">
              <img src=${contactPage.mailIcon} alt="" />
              <span>изпрати</span>
            </button>
            <a class="contact-action contact-action--dark" href=${`mailto:${site.email}`}>
              <span>${contactPage.emailLabel}</span>
            </a>
            <a class="contact-action contact-action--light" href=${site.phoneHref}>
              <span>${contactPage.phoneLabel}</span>
            </a>
          </div>
        </form>

        <div class="contact-partners">
          ${contactPage.partners.map(
            (p) => html`
              <a
                key=${p.alt}
                class="contact-partner"
                href=${p.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src=${p.src} alt=${p.alt} />
              </a>
            `
          )}
        </div>
      </section>
    </div>
  `;
};

const ReviewsPage = () => {
  const n = reviewsPage.testimonials.length;
  const t = reviewsPage.testimonials[reviewsIndex.value % n];

  const onFile = (e) => {
    const file = e.currentTarget.files?.[0];
    reviewsFileLabel.value = file ? file.name : reviewsPage.fileLabel;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const file = e.currentTarget.querySelector('input[type="file"]')?.files?.[0];
    const subject = encodeURIComponent("отзив");
    const body = encodeURIComponent(
      [
        fd.get("message"),
        "",
        `Име: ${fd.get("name")}`,
        `Телефон: ${fd.get("phone")}`,
        `Имейл: ${fd.get("email")}`,
        file ? `Снимка (прикачете ръчно в имейла): ${file.name}` : "",
      ]
        .filter(Boolean)
        .join("\n")
    );
    reviewsFormStatus.value = file
      ? "Отваряне на имейл клиента… Прикачете снимката ръчно."
      : "Отваряне на имейл клиента…";
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return html`
    <div class="page page--reviews">
      <section class="contact-hero">
        <div class="contact-hero__media" aria-hidden="true">
          <img src=${reviewsPage.image} alt="" />
        </div>
        <div class="contact-hero__content">
          <h1>${reviewsPage.title}</h1>
        </div>
      </section>

      <section class="contact-main reviews-main">
        <form class="contact-form" onSubmit=${onSubmit}>
          <div class="contact-form__fields">
            <div class="contact-form__row">
              <input name="name" type="text" placeholder="Име и Фамилия" required />
              <input name="phone" type="text" placeholder="Телефон" required />
            </div>
            <div class="contact-form__row">
              <textarea name="message" required>${reviewsPage.messageDefault}</textarea>
              <input name="email" type="email" placeholder="Имейл" required />
            </div>
            <label class="order-form__check">
              <input type="checkbox" name="terms" required />
              <span>
                Съгласен съм с
                <a href="./terms.pdf" target="_blank" rel="noopener noreferrer">общите условия</a>
              </span>
            </label>
            ${reviewsFormStatus.value
              ? html`<p class="order-form__status">${reviewsFormStatus.value}</p>`
              : null}
          </div>
          <div class="contact-form__actions">
            <button type="submit" class="contact-action contact-action--submit">
              <img src=${reviewsPage.mailIcon} alt="" />
              <span>изпрати</span>
            </button>
            <a class="contact-action contact-action--dark" href=${`mailto:${site.email}`}>
              <span>${reviewsPage.emailLabel}</span>
            </a>
            <a class="contact-action contact-action--light" href=${site.phoneHref}>
              <span>${reviewsPage.phoneLabel}</span>
            </a>
          </div>
        </form>

        <label class="reviews-upload">
          <img src=${reviewsPage.cameraIcon} alt="" />
          <span>${reviewsFileLabel.value}</span>
          <input type="file" name="img" accept="image/*" onChange=${onFile} />
        </label>

        <div class="reviews-carousel">
          <button
            type="button"
            class="reviews-carousel__nav"
            aria-label="Предишен отзив"
            onClick=${() => {
              reviewsIndex.value = (reviewsIndex.value - 1 + n) % n;
            }}
          >
            ‹
          </button>
          <blockquote class="reviews-card">
            <p>"${t.quote}"</p>
            <img src=${reviewsPage.avatar} alt="" />
            <cite>${t.name}</cite>
          </blockquote>
          <button
            type="button"
            class="reviews-carousel__nav"
            aria-label="Следващ отзив"
            onClick=${() => {
              reviewsIndex.value = (reviewsIndex.value + 1) % n;
            }}
          >
            ›
          </button>
        </div>
      </section>
    </div>
  `;
};

const AddPropertyPage = () => {
  const onFiles = (e) => {
    const files = [...(e.currentTarget.files || [])].slice(0, 10);
    addPropertyFileLabel.value = files.length
      ? files.map((f) => f.name).join(", ")
      : addPropertyPage.fileLabel;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const files = [...(e.currentTarget.querySelector('input[type="file"]')?.files || [])].slice(
      0,
      10
    );
    const subject = encodeURIComponent("+ Добавете имот");
    const body = encodeURIComponent(
      [
        fd.get("message"),
        "",
        `Име: ${fd.get("name")}`,
        `Телефон: ${fd.get("phone")}`,
        `Имейл: ${fd.get("email")}`,
        `Как разбрахте за нас?: ${fd.get("reference")}`,
        files.length
          ? `Файлове (прикачете ръчно в имейла): ${files.map((f) => f.name).join(", ")}`
          : "",
      ]
        .filter(Boolean)
        .join("\n")
    );
    addPropertyFormStatus.value = files.length
      ? "Отваряне на имейл клиента… Прикачете избраните файлове ръчно."
      : "Отваряне на имейл клиента…";
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return html`
    <div class="page page--add-property">
      <section class="add-hero">
        <div class="add-hero__media" aria-hidden="true">
          <img src=${addPropertyPage.image} alt="" />
        </div>
        <div class="add-hero__veil">
          <h1 class="add-hero__title">
            ${addPropertyPage.headline.map((part, i) =>
              part.size === "br"
                ? html`<br key=${`br-${i}`} />`
                : html`<span key=${i} class=${`add-hero__part add-hero__part--${part.size}`}>
                    ${part.text}
                  </span>`
            )}
          </h1>
        </div>
      </section>

      <section class="add-main">
        <h2>${addPropertyPage.title}</h2>
        <form class="add-form" onSubmit=${onSubmit}>
          <div class="add-form__fields">
            <div class="add-form__row">
              <input name="name" type="text" placeholder="Име и Фамилия" required />
              <input name="phone" type="text" placeholder="Телефон" required />
            </div>
            <div class="add-form__row">
              <textarea name="message" required>${addPropertyPage.messageDefault}</textarea>
              <input name="email" type="email" placeholder="Имейл" required />
            </div>
            <label class="order-form__check">
              <input type="checkbox" name="terms" required />
              <span>
                Съгласен съм с
                <a href="./terms.pdf" target="_blank" rel="noopener noreferrer">общите условия</a>
              </span>
            </label>
            ${addPropertyFormStatus.value
              ? html`<p class="order-form__status">${addPropertyFormStatus.value}</p>`
              : null}
          </div>
          <div class="add-form__actions">
            <label class="add-file">
              <img src=${addPropertyPage.cameraIcon} alt="" />
              <span>${addPropertyFileLabel.value}</span>
              <input
                type="file"
                name="items"
                multiple
                accept="image/*,.pdf,.doc,.docx"
                onChange=${onFiles}
              />
            </label>
            <button type="submit" class="add-submit">изпрати</button>
            <select name="reference" required>
              <option value="">Как разбрахте за нас?</option>
              ${addPropertyPage.sources.map(
                (s) => html`<option key=${s} value=${s}>${s}</option>`
              )}
            </select>
          </div>
        </form>
      </section>
    </div>
  `;
};

/* ─── App ───────────────────────────────────────────────── */

const Main = () => {
  if (route.value === "mediation") return html`<${MediationPage} />`;
  if (route.value === "service") return html`<${ServicePage} />`;
  if (route.value === "concept") return html`<${ConceptPage} />`;
  if (route.value === "article1") return html`<${Article1Page} />`;
  if (route.value === "article2") return html`<${Article2Page} />`;
  if (route.value === "contact") return html`<${ContactPage} />`;
  if (route.value === "reviews") return html`<${ReviewsPage} />`;
  if (route.value === "addProperty") return html`<${AddPropertyPage} />`;
  // mortgage | bailiff | investment | kss | areas → shared appraisal template
  if (
    route.value === "mortgage" ||
    route.value === "bailiff" ||
    route.value === "investment" ||
    route.value === "kss" ||
    route.value === "areas"
  ) {
    return html`<${AppraisalPage} serviceId=${route.value} />`;
  }
  return html`<${HomePage} />`;
};

const App = () => html`
  <div class="app">
    <${Header} />
    <${SideMenu} />
    <main>
      <${Main} />
    </main>
    <${Footer} />
  </div>
`;

export const renderApp = (el) => {
  if (!location.hash) location.replace(`${location.pathname}${location.search}#/`);
  route.value = routeFromHash();
  appraisalOpenId.value = appraisalServices[route.value] ? route.value : null;
  render(html`<${App} />`, el);
};
