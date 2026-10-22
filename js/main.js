/**
 * IRONGUIDE — Main JavaScript Module (ES6+)
 * Handles navigation, exercise catalog search & filtering, accessible modal,
 * muscle group navigation, workout program tabs, FAQ accordion, and glossary search.
 */

const EXERCISES_DATA = [
  {
    id: 'barbell-bench-press',
    name: 'Жим штанги лежачи',
    category: 'Груди',
    muscles: 'Великий грудний м’яз, передня дельта, трицепс',
    equipment: 'Штанга, горизонтальна лава',
    type: 'Базова вправа',
    image: 'assets/images/exercises/barbell-bench-press.svg',
    alt: 'Жим штанги лежачи на горизонтальній лаві',
    shortDesc: 'Фундаментальна базова вправа для розвитку сили та маси грудних м’язів, плечового пояса і трицепсів.',
    fullDesc: 'Жим штанги лежачи на горизонтальній лаві дозволяє залучити великий масив м’язів верхньої частини тіла. Стабільне положення лопаток та ніг допомагає безпечно передавати зусилля і контролювати траєкторію грифа.',
    steps: [
      'Ляжте на горизонтальну лаву так, щоб очі знаходилися безпосередньо під грифом штанги.',
      'Зведіть лопатки разом і опустіть їх вниз до лави; стопи щільно притисніть до підлоги.',
      'Візьміться за гриф хватом трохи ширше плечей, зніміть штангу зі стійок і виведіть її над серединою грудей.',
      'На вдиху підконтрольно опустіть гриф до нижньої частини грудної клітки, тримаючи лікті під кутом 45–70°.',
      'На видиху потужно витисніть штангу вгору у вихідне положення без відриву таза від лави.'
    ],
    tip: 'Не розводьте лікті під 90° до тулуба — легкий нахил ліктів вперед зменшує навантаження на плечові суглоби.'
  },
  {
    id: 'incline-dumbbell-press',
    name: 'Жим гантелей на похилій лаві',
    category: 'Груди',
    muscles: 'Верхній відділ грудних м’язів, передня дельта, трицепс',
    equipment: 'Гантелі, лава з нахилом 30°',
    type: 'Базова вправа',
    image: 'assets/images/exercises/incline-dumbbell-press.svg',
    alt: 'Жим гантелей на похилій лаві під кутом 30 градусів',
    shortDesc: 'Ефективний рух для акцентованого опрацювання ключичної (верхньої) частини грудних м’язів із повною амплітудою.',
    fullDesc: 'Використання гантелей на похилій лаві дозволяє кожній руці працювати незалежно, вирівнюючи м’язовий дисбаланс та забезпечуючи глибше розтягнення волокон у нижній точці.',
    steps: [
      'Встановіть спинку лави під кутом 25–35° (занадто високий кут перенесе навантаження на плечі).',
      'Сядьте на лаву, поставте гантелі на стегна і ляжте, вивівши гантелі над плечима.',
      'Зведіть лопатки та притисніть верх спини до лави.',
      'Повільно опустіть гантелі до рівня верху грудей, поки передпліччя залишаються вертикальними.',
      'Витисніть гантелі вгору по дугоподібній траєкторії, не вдаряючи їх одна об одну.'
    ],
    tip: 'Оптимальний кут нахилу лави для верхньої частини грудей становить близько 30°.'
  },
  {
    id: 'push-ups',
    name: 'Віджимання',
    category: 'Груди',
    muscles: 'Грудний м’яз, трицепс, передня дельта, м’язи кора',
    equipment: 'Власна вага',
    type: 'Базова вправа',
    image: 'assets/images/exercises/push-ups.svg',
    alt: 'Віджимання від підлоги з прямою лінією корпусу',
    shortDesc: 'Класична вправа з власною вагою, що розвиває грудні м’язи, трицепси та стабільність корпусу.',
    fullDesc: 'Віджимання від підлоги навчають утримувати жорстку лінію тіла в русі та чудово підходять як для розминки, так і для основного тренування.',
    steps: [
      'Прийміть упор лежачи: долоні трохи ширше плечей, пальці спрямовані вперед.',
      'Напружте прес і сідниці так, щоб голова, спина та п’яти утворювали пряму лінію.',
      'Згинаючи лікті під кутом близько 45° до корпусу, опустіться грудьми майже до підлоги.',
      'Відштовхніться долонями від підлоги та поверніться у вихідне положення.'
    ],
    tip: 'Якщо класичний варіант заважкий, виконуйте віджимання з опорою рук на лаву або підвищення.'
  },
  {
    id: 'lat-pulldown',
    name: 'Тяга верхнього блока',
    category: 'Спина',
    muscles: 'Найширші м’язи спини, великий круглий м’яз, біцепс',
    equipment: 'Блоковий тренажер, широке руків’я',
    type: 'Базова вправа',
    image: 'assets/images/exercises/lat-pulldown.svg',
    alt: 'Тяга верхнього блока широким хватом до грудей сидячи',
    shortDesc: 'Вертикальна тяга для цілеспрямованого розвитку найширших м’язів спини та формування V-подібного силуету.',
    fullDesc: 'Тяга верхнього блока до грудей дозволяє точно дозувати робочу вагу та відпрацювати правильне опускання плечового пояса перед переходом до підтягувань.',
    steps: [
      'Відрегулюйте валики тренажера так, щоб вони щільно фіксували стегна.',
      'Візьміться за руків’я хватом ширше плечей, сядьте та трохи подайте грудну клітку вперед.',
      'Почніть рух із опускання лопаток вниз, а потім тягніть руків’я до верхньої частини грудей.',
      'Спрямовуйте лікті вниз і трохи назад, уникаючи сильного розгойдування корпусу.',
      'Плавно поверніть руків’я вгору, відчуваючи розтягнення найширших м’язів.'
    ],
    tip: 'Тягніть гриф саме перед собою до верху грудей; тяга за голову створює зайве навантаження на плечові суглоби.'
  },
  {
    id: 'seated-cable-row',
    name: 'Горизонтальна тяга блока',
    category: 'Спина',
    muscles: 'Середина спини, ромбоподібні, трапецієподібні та найширші м’язи',
    equipment: 'Нижній блоковий тренажер, V-подібне руків’я',
    type: 'Базова вправа',
    image: 'assets/images/exercises/seated-cable-row.svg',
    alt: 'Горизонтальна тяга нижнього блока сидячи з упором стоп',
    shortDesc: 'Базова горизонтальна тяга для зміцнення середини спини, покращення постави та розвитку товщини м’язів.',
    fullDesc: 'Вправа поєднує роботу найширших м’язів із активним зведенням лопаток, що робить її незамінною для збалансованого розвитку спини.',
    steps: [
      'Сядьте на тренажер, поставте стопи на платформи, залишивши коліна злегка зігнутими.',
      'Візьміться за руків’я, вирівняйте спину та утримуйте природний прогин у попереку.',
      'На видиху потягніть руків’я до низу живота, ведучи лікті вздовж тулуба і зводячи лопатки.',
      'Затримайтеся на секунду в точці максимального скорочення м’язів спини.',
      'Підконтрольно випряміть руки вперед, не округлюючи поперековий відділ.'
    ],
    tip: 'Уникайте інерційних нахилів тулуба вперед-назад: корпус має залишатися майже нерухомим.'
  },
  {
    id: 'one-arm-dumbbell-row',
    name: 'Тяга гантелі однією рукою',
    category: 'Спина',
    muscles: 'Найширший м’яз спини, ромбоподібні м’язи, задня дельта, біцепс',
    equipment: 'Гантель, горизонтальна лава',
    type: 'Базова вправа',
    image: 'assets/images/exercises/one-arm-dumbbell-row.svg',
    alt: 'Тяга гантелі однією рукою в нахилі з опорою на лаву',
    shortDesc: 'Одностороння тяга в нахилі, що дозволяє пропрацювати кожну половину спини з максимальною амплітудою.',
    fullDesc: 'Опора вільною рукою на лаву знімає зайве навантаження з попереку і дозволяє зосередитися виключно на роботі найширшого м’яза спини.',
    steps: [
      'Поставте одне коліно та однойменну долоню на горизонтальну лаву, іншу ногу відставте вбік на підлогу.',
      'Візьміть гантель вільною рукою; спина має бути рівною і майже паралельною підлозі.',
      'Тягніть гантель по дузі назад до кульшового суглоба (до пояса), а не до плеча.',
      'У верхній точці відчуйте скорочення м’язів спини, не розвертаючи тулуб.',
      'Плавно опустіть гантель вниз до повного розтягнення лопатки.'
    ],
    tip: 'Уявляйте, що ви тягнете вагу ліктем назад у бік кишені штанів — це зменшить залучення біцепса.'
  },
  {
    id: 'seated-dumbbell-shoulder-press',
    name: 'Жим гантелей сидячи',
    category: 'Плечі',
    muscles: 'Передня та середня дельти, трицепс, верх трапеції',
    equipment: 'Гантелі, лава з вертикальною спинкою',
    type: 'Базова вправа',
    image: 'assets/images/exercises/seated-dumbbell-shoulder-press.svg',
    alt: 'Жим гантелей вгору сидячи на лаві з вертикальною спинкою',
    shortDesc: 'Основна жимова вправа для розвитку сили та об’єму дельтоподібних м’язів зі стабільною опорою спини.',
    fullDesc: 'Виконання жиму сидячи з опорою на спинку лави мінімізує допомогу ніг і допомагає прицільно навантажити плечовий пояс.',
    steps: [
      'Встановіть спинку лави майже вертикально (75–85°) і щільно притисніть до неї верх спини.',
      'Підніміть гантелі до рівня плечей; лікті спрямовані трохи вперед (приблизно на 30° від площини тулуба).',
      'На видиху витисніть гантелі вертикально вгору до майже повного випрямлення рук.',
      'Підконтрольно опустіть гантелі до рівня вух або підборіддя без різких ривків.'
    ],
    tip: 'Не прогинайте надмірно поперек — тримайте прес у тонусі протягом усього підходу.'
  },
  {
    id: 'lateral-raises',
    name: 'Махи гантелями в сторони',
    category: 'Плечі',
    muscles: 'Середній пучок дельтоподібного м’яза',
    equipment: 'Гантелі',
    type: 'Ізоляційна вправа',
    image: 'assets/images/exercises/lateral-raises.svg',
    alt: 'Махи гантелями в сторони стоячи для середньої дельти',
    shortDesc: 'Ключова ізоляційна вправа для середньої дельти, що візуально розширює лінію плечей.',
    fullDesc: 'Середній пучок дельти слабо залучається у важких жимах, тому махи через сторони є обов’язковим елементом для пропорційного розвитку плечей.',
    steps: [
      'Станьте прямо, ноги на ширині таза, корпус ледь нахилений вперед на 5–10°.',
      'Тримайте гантелі внизу перед стегнами або збоку зі злегка зігнутими ліктями.',
      'Підніміть руки через сторони до рівня плечей, ведучи рух ліктями вбік і трохи вперед.',
      'Плавно опустіть гантелі вниз, не кидаючи їх під дією сили тяжіння.'
    ],
    tip: 'Обирайте помірну вагу: занадто важкі гантелі змушують піднімати плечі до вух і перекладають роботу на трапецію.'
  },
  {
    id: 'barbell-bicep-curl',
    name: 'Підйом штанги на біцепс',
    category: 'Руки',
    muscles: 'Двоголовий м’яз плеча (біцепс), плечовий м’яз, передпліччя',
    equipment: 'Прямий або EZ-гриф',
    type: 'Ізоляційна вправа',
    image: 'assets/images/exercises/barbell-bicep-curl.svg',
    alt: 'Підйом штанги на біцепс стоячи з фіксованими ліктями',
    shortDesc: 'Класична вправа для цілеспрямованого розвитку сили та об’єму згиначів передпліччя.',
    fullDesc: 'Підйом штанги стоячи дозволяє працювати з відчутною вагою. Використання вигнутого EZ-грифа зменшує навантаження на зап’ястя.',
    steps: [
      'Станьте рівно, стопи на ширині плечей, візьміть гриф хватом знизу на ширині плечей.',
      'Притисніть лікті до боків тулуба і зафіксуйте їх у цьому положенні.',
      'На видиху зігніть руки в ліктях, піднімаючи штангу до рівня верху грудей.',
      'Затримайтеся на мить у верхній точці, додатково напружуючи біцепс.',
      'Повільно опустіть штангу вниз до повного випрямлення рук без розгойдування спини.'
    ],
    tip: 'Якщо корпус відхиляється назад під час підйому, зменште робочу вагу або станьте спиною до стіни.'
  },
  {
    id: 'tricep-rope-pushdown',
    name: 'Розгинання рук на блоці',
    category: 'Руки',
    muscles: 'Триголовий м’яз плеча (трицепс — бічна та медіальна головки)',
    equipment: 'Верхній блок, канатне або пряме руків’я',
    type: 'Ізоляційна вправа',
    image: 'assets/images/exercises/tricep-rope-pushdown.svg',
    alt: 'Розгинання рук на верхньому блоці з канатним руків’ям для трицепса',
    shortDesc: 'Ізоляційна вправа на верхньому блоці для детального опрацювання всіх головок трицепса.',
    fullDesc: 'Трицепс становить більшу частину об’єму плеча. Розгинання на блоці забезпечують постійний натяг троса вздовж усієї амплітуди руху.',
    steps: [
      'Станьте обличчям до верхнього блока, візьміться за канатне або пряме руків’я.',
      'Нахиліть корпус вперед на 10–15° і притисніть лікті до корпусу.',
      'На видиху розігніть передпліччя вниз до повного випрямлення рук, розводячи кінці каната внизу.',
      'На вдиху плавно підніміть передпліччя вгору, не зрушуючи лікті вперед чи в сторони.'
    ],
    tip: 'Рухатися повинні лише передпліччя — плечова кістка залишається вертикальною та нерухомою.'
  },
  {
    id: 'barbell-squat',
    name: 'Присідання',
    category: 'Ноги',
    muscles: 'Квадрицепси, великі сідничні м’язи, привідні м’язи, м’язи кора',
    equipment: 'Штанга, силові стійки або рама',
    type: 'Базова вправа',
    image: 'assets/images/exercises/barbell-squat.svg',
    alt: 'Присідання зі штангою на плечах до паралелі стегон із підлогою',
    shortDesc: 'Головна базова вправа для розвитку сили та м’язової маси нижньої частини тіла і стабілізаторів кора.',
    fullDesc: 'Присідання зі штангою на спині залучають найбільші м’язові групи людського тіла, розвиваючи загальну силу, координацію та щільність кісткової тканини.',
    steps: [
      'Встановіть штангу на стійках на рівні верхньої частини грудей, підсядьте під гриф і покладіть його на трапеції.',
      'Зніміть штангу, зробіть 1–2 кроки назад, поставте стопи трохи ширше плечей, носки розверніть на 15–30°.',
      'Зробіть глибокий вдих у живіт, напружте кор і почніть одночасно відводити таз назад та згинати коліна.',
      'Опустіться щонайменше до паралелі стегон із підлогою, стежачи, щоб коліна рухалися в напрямку носків.',
      'Відштовхуючись усією стопою від підлоги, потужно підніміться у вихідне положення.'
    ],
    tip: 'Не відривайте п’яти від підлоги і не дозволяйте колінам завалюватися всередину під час підйому.'
  },
  {
    id: 'leg-extension',
    name: 'Розгинання ніг у тренажері',
    category: 'Ноги',
    muscles: 'Чотириголовий м’яз стегна (квадрицепс)',
    equipment: 'Тренажер для розгинання ніг',
    type: 'Ізоляційна вправа',
    image: 'assets/images/exercises/leg-extension.svg',
    alt: 'Розгинання ніг сидячи у спеціалізованому тренажері для квадрицепсів',
    shortDesc: 'Прицільна ізоляційна вправа для опрацювання всіх чотирьох головок квадрицепса без осьового навантаження на хребет.',
    fullDesc: 'Тренажер для розгинання ніг ідеально підходить для завершення тренування ніг або попереднього стомлення квадрицепсів перед базовими рухами.',
    steps: [
      'Відрегулюйте спинку тренажера так, щоб колінні суглоби точно збігалися з віссю обертання важеля.',
      'Встановіть нижній валик на передню частину гомілки трохи вище гомілковостопного суглоба.',
      'Візьміться за бічні ручки, притисніть таз і поперек до сидіння.',
      'На видиху повністю розігніть ноги в колінах і затримайтеся у верхній точці на 1 секунду.',
      'Підконтрольно опустіть вагу вниз, не кидаючи обтяження на упори.'
    ],
    tip: 'Уникайте інерційних ривків на старті — плавний початок руху береже зв’язки колінного суглоба.'
  },
  {
    id: 'romanian-deadlift',
    name: 'Румунська тяга зі штангою',
    category: 'Ноги',
    muscles: 'Задня поверхня стегна (біцепс стегна), сідничні м’язи, розгиначі спини',
    equipment: 'Штанга або гантелі',
    type: 'Базова вправа',
    image: 'assets/images/exercises/romanian-deadlift.svg',
    alt: 'Румунська тяга зі штангою з відведенням таза назад',
    shortDesc: 'Базовий тазово-домінантний рух для зміцнення задньої поверхні стегна, сідниць та м’язів попереку.',
    fullDesc: 'На відміну від класичної станової тяги, румунська тяга виконується з мінімальним згинанням колін, що фокусує навантаження на розтягненні та скороченні біцепса стегна і сідниць.',
    steps: [
      'Станьте прямо, тримаючи штангу в опущених руках хватом трохи ширше плечей; стопи на ширині таза.',
      'Злегка зігніть коліна (на 15–20°) і зафіксуйте цей кут до кінця підходу.',
      'Відводьте таз максимально назад, нахиляючи прямий корпус вперед і ведучи гриф впритул до ніг.',
      'Опускайте штангу до середини гомілки або до моменту відчутного розтягнення задньої поверхні стегна.',
      'Подайте таз вперед, стискаючи сідниці, та поверніться у вертикальне положення.'
    ],
    tip: 'Гриф повинен ковзати вздовж стегон: чим далі штанга від ніг, тим більше небажане навантаження на поперек.'
  },
  {
    id: 'cable-crunch',
    name: 'Скручування на верхньому блоці',
    category: 'Прес',
    muscles: 'Прямий м’яз живота, косі м’язи живота',
    equipment: 'Верхній блок, канатне руків’я',
    type: 'Ізоляційна вправа',
    image: 'assets/images/exercises/cable-crunch.svg',
    alt: 'Скручування корпусу на колінах біля верхнього блока з канатом',
    shortDesc: 'Ефективна вправа для тренування прямого м’яза живота з можливістю плавної прогресії робочої ваги.',
    fullDesc: 'Як і будь-який інший м’яз, прес реагує на прогресивне навантаження. Блоковий тренажер дозволяє додати контрольований опір без надмірної кількості повторень.',
    steps: [
      'Станьте на коліна перед верхнім блоком і візьміть кінці каната біля скронь або шиї.',
      'Зафіксуйте таз нерухомо — рух повинен відбуватися тільки в грудному та поперековому відділах хребта.',
      'На видиху плавно скрутіть корпус вниз, тягнучи грудну клітку до таза (округлюючи спину).',
      'На вдиху повільно розкрутіться у вихідне положення, зберігаючи напругу в м’язах преса.'
    ],
    tip: 'Не робіть поклони з прямою спиною за рахунок згинання кульшових суглобів — працювати має саме скручування хребта.'
  },
  {
    id: 'plank-hold',
    name: 'Планка з опорою на передпліччя',
    category: 'Прес',
    muscles: 'Поперечний і прямий м’язи живота, сідниці, стабілізатори хребта',
    equipment: 'Власна вага, килимок',
    type: 'Базова вправа',
    image: 'assets/images/exercises/plank-hold.svg',
    alt: 'Утримання прямої лінії тіла в планці з опорою на передпліччя',
    shortDesc: 'Ізометрична вправа для зміцнення глибоких м’язів кора та формування навички стабілізації хребта.',
    fullDesc: 'Сильний кор необхідний для безпечного виконання присідань, тяг та жимів. Планка вчить протидіяти прогину в попереку під навантаженням.',
    steps: [
      'Ляжте на підлогу обличчям вниз і поставте лікті точно під плечовими суглобами.',
      'Підніміть таз, спираючись лише на передпліччя та носки стоп.',
      'Підкрутіть таз трохи під себе, сильно напружте сідниці, квадрицепси та прес.',
      'Утримуйте ідеально пряму лінію тіла без провисання попереку, рівномірно дихаючи.'
    ],
    tip: 'Краще утримувати технічно жорстку планку 30–45 секунд, ніж стояти 2 хвилини з проваленим попереком.'
  }
];

const GLOSSARY_DATA = [
  {
    term: 'Повторення',
    category: 'Структура тренування',
    definition: 'Один повний цикл виконання вправи від початкового положення через фазу зусилля (концентричну) до повернення у вихідну точку (ексцентричну).'
  },
  {
    term: 'Підхід',
    category: 'Структура тренування',
    definition: 'Серія безперервних повторень однієї вправи, після якої слідує запланований інтервал відпочинку (також часто називається сетом).'
  },
  {
    term: 'Робоча вага',
    category: 'Навантаження',
    definition: 'Обтяження, з яким атлет виконує основні підходи вправи з дотриманням цільової кількості повторень і правильної біомеханічної техніки.'
  },
  {
    term: 'Розминка',
    category: 'Підготовка',
    definition: 'Підготовча частина тренування (загальна суглобова та спеціальна з легкими підходами), спрямована на підвищення температури м’язів, рухливості суглобів і готовності нервової системи.'
  },
  {
    term: 'Прогресивне навантаження',
    category: 'Принципи',
    definition: 'Фундаментальний принцип адаптації, що полягає у поступовому підвищенні вимог до м’язів з часом — за рахунок збільшення робочої ваги, кількості повторень, підходів або якості контролю.'
  },
  {
    term: 'Амплітуда руху',
    category: 'Техніка',
    definition: 'Траєкторія та ступінь руху в суглобах від повного комфортного розтягнення м’яза до його повного скорочення (ROM — Range of Motion).'
  },
  {
    term: 'Темп повторення',
    category: 'Техніка',
    definition: 'Швидкість проходження різних фаз одного повторення: опускання ваги, паузи в нижній точці, підйому ваги та фіксації у верхній точці.'
  },
  {
    term: 'Відмова м\'язів',
    category: 'Інтенсивність',
    definition: 'Стан у кінці підходу, коли м’язи тимчасово не здатні виконати ще одне повторення з обраною вагою без порушення техніки.'
  },
  {
    term: 'Обсяг тренування',
    category: 'Принципи',
    definition: 'Загальна кількість виконаної роботи за тренування або тиждень; найчастіше вимірюється кількістю робочих підходів на кожну м’язову групу.'
  },
  {
    term: 'Інтенсивність',
    category: 'Принципи',
    definition: 'Міра величини обтяження відносно вашого одноповторного максимуму (1ПМ) або ступінь близькості робочого підходу до м’язової відмови.'
  },
  {
    term: 'Частота тренувань',
    category: 'Структура тренування',
    definition: 'Кількість тренувальних сесій на тиждень загалом або скільки разів на тиждень опрацьовується конкретна м’язова група.'
  },
  {
    term: 'Відновлення',
    category: 'Фізіологія',
    definition: 'Сукупність процесів між тренуваннями (сон, харчування, відпочинок), під час яких організм компенсує втому та зміцнює м’язові волокна і нервову систему.'
  },
  {
    term: 'Суперсет',
    category: 'Методи',
    definition: 'Послідовне виконання двох вправ підряд без відпочинку між ними — зазвичай для м’язів-антагоністів (наприклад, біцепс і трицепс) або однієї групи.'
  },
  {
    term: 'Базова вправа',
    category: 'Класифікація',
    definition: 'Багатосуглобовий рух, у якому одночасно працюють два або більше суглобів і великі масиви м’язів (наприклад, присідання, жим лежачи, тяги).'
  },
  {
    term: 'Ізоляційна вправа',
    category: 'Класифікація',
    definition: 'Односуглобовий рух, який прицільно навантажує одну конкретну м’язову групу за мінімальної участі інших м’язів (наприклад, розгинання ніг або махи гантелями).'
  },
  {
    term: 'Запас повторень (RIR)',
    category: 'Інтенсивність',
    definition: 'Показник (Reps in Reserve), що означає, скільки ще технічно чистих повторень ви могли б виконати до настання м’язової відмови в кінці підходу.'
  },
  {
    term: 'Ексцентрична фаза',
    category: 'Техніка',
    definition: 'Негативна фаза руху, під час якої м’яз контрольовано подовжується під дією навантаження (наприклад, опускання штанги на груди або присідання вниз).'
  },
  {
    term: 'Концентрична фаза',
    category: 'Техніка',
    definition: 'Позитивна фаза руху, під час якої м’яз скорочується, долаючи зовнішній опір (наприклад, витискання штанги вгору або підйом із присіду).'
  }
];

/* ==========================================================================
   Utility Helpers & Global UI (Mobile Menu, Back to Top, Image Fallback)
   ========================================================================== */
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function attachImageFallbacks(root = document) {
  const images = root.querySelectorAll('img[data-fallback]');
  images.forEach((img) => {
    if (img.dataset.fallbackBound) return;
    img.dataset.fallbackBound = 'true';
    img.addEventListener('error', () => {
      img.style.display = 'none';
    });
  });
}

function initMobileNav() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (!toggleBtn || !navMenu) return;

  const closeMenu = () => {
    toggleBtn.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('is-open');
  };

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', String(!isExpanded));
    navMenu.classList.toggle('is-open', !isExpanded);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      closeMenu();
      toggleBtn.focus();
    }
  });

  document.addEventListener('click', (e) => {
    if (
      navMenu.classList.contains('is-open') &&
      !navMenu.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 860 && navMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });
}

function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  const updateVisibility = () => {
    if (window.scrollY > 420) {
      btn.classList.add('is-visible');
    } else {
      btn.classList.remove('is-visible');
    }
  };

  window.addEventListener('scroll', updateVisibility, { passive: true });
  updateVisibility();

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   Exercise Detail Modal
   ========================================================================== */
let lastFocusedElement = null;

function openExerciseModal(exerciseId) {
  const exercise = EXERCISES_DATA.find((item) => item.id === exerciseId);
  const backdrop = document.getElementById('exerciseModal');
  if (!exercise || !backdrop) return;

  lastFocusedElement = document.activeElement;

  const titleEl = document.getElementById('modalTitle');
  const categoryEl = document.getElementById('modalCategory');
  const typeEl = document.getElementById('modalType');
  const imageEl = document.getElementById('modalImage');
  const fallbackEl = document.getElementById('modalFallbackText');
  const musclesEl = document.getElementById('modalMuscles');
  const equipmentEl = document.getElementById('modalEquipment');
  const descEl = document.getElementById('modalDesc');
  const stepsEl = document.getElementById('modalSteps');
  const tipEl = document.getElementById('modalTip');

  if (titleEl) titleEl.textContent = exercise.name;
  if (categoryEl) categoryEl.textContent = exercise.category;
  if (typeEl) typeEl.textContent = exercise.type;
  if (fallbackEl) fallbackEl.textContent = `${exercise.category} — ${exercise.name}`;

  if (imageEl) {
    imageEl.style.display = 'block';
    imageEl.src = exercise.image;
    imageEl.alt = exercise.alt || exercise.name;
  }

  if (musclesEl) musclesEl.textContent = exercise.muscles;
  if (equipmentEl) equipmentEl.textContent = exercise.equipment;
  if (descEl) descEl.textContent = exercise.fullDesc;

  if (stepsEl) {
    stepsEl.innerHTML = exercise.steps
      .map((step) => `<li>${escapeHtml(step)}</li>`)
      .join('');
  }

  if (tipEl) tipEl.textContent = exercise.tip;

  backdrop.classList.add('is-open');
  backdrop.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  const closeBtn = backdrop.querySelector('.modal-close');
  if (closeBtn) {
    setTimeout(() => closeBtn.focus(), 50);
  }
}

function closeExerciseModal() {
  const backdrop = document.getElementById('exerciseModal');
  if (!backdrop || !backdrop.classList.contains('is-open')) return;

  backdrop.classList.remove('is-open');
  backdrop.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');

  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
}

function initModalEvents() {
  const backdrop = document.getElementById('exerciseModal');
  if (!backdrop) return;

  const closeButtons = backdrop.querySelectorAll('[data-close-modal]');
  closeButtons.forEach((btn) => {
    btn.addEventListener('click', closeExerciseModal);
  });

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeExerciseModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('is-open')) {
      closeExerciseModal();
    }
  });

  // Bind any static featured exercise trigger buttons
  document.querySelectorAll('[data-open-exercise]').forEach((trigger) => {
    const exId = trigger.getAttribute('data-open-exercise');
    trigger.addEventListener('click', () => openExerciseModal(exId));
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openExerciseModal(exId);
      }
    });
  });
}

/* ==========================================================================
   Exercise Catalog: Search, Category Filter & Rendering
   ========================================================================== */
function initExerciseCatalog() {
  const grid = document.getElementById('exercisesGrid');
  if (!grid) return;

  const searchInput = document.getElementById('exerciseSearch');
  const filterButtons = document.querySelectorAll('[data-category-filter]');
  const resetButtons = document.querySelectorAll('[data-reset-exercises]');
  const countEl = document.getElementById('exerciseCount');
  const emptyState = document.getElementById('exerciseEmptyState');

  let activeCategory = 'Усі';
  let searchQuery = '';

  // Support URL query parameter ?category=... or ?exercise=...
  const params = new URLSearchParams(window.location.search);
  const urlCategory = params.get('category');
  const urlExercise = params.get('exercise');

  if (urlCategory) {
    const matchedBtn = Array.from(filterButtons).find(
      (btn) => btn.getAttribute('data-category-filter') === urlCategory
    );
    if (matchedBtn) {
      activeCategory = urlCategory;
      filterButtons.forEach((b) => {
        const isMatch = b === matchedBtn;
        b.classList.toggle('is-active', isMatch);
        b.setAttribute('aria-pressed', String(isMatch));
      });
    }
  }

  function renderCatalog() {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    const filtered = EXERCISES_DATA.filter((ex) => {
      const matchesCategory = activeCategory === 'Усі' || ex.category === activeCategory;
      const matchesSearch =
        !normalizedQuery ||
        ex.name.toLowerCase().includes(normalizedQuery) ||
        ex.muscles.toLowerCase().includes(normalizedQuery) ||
        ex.equipment.toLowerCase().includes(normalizedQuery) ||
        ex.category.toLowerCase().includes(normalizedQuery) ||
        ex.shortDesc.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesSearch;
    });

    if (countEl) {
      countEl.textContent = `Знайдено вправ: ${filtered.length} із ${EXERCISES_DATA.length}`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = '';
      if (emptyState) emptyState.hidden = false;
      return;
    }

    if (emptyState) emptyState.hidden = true;

    grid.innerHTML = filtered
      .map(
        (ex) => `
      <article class="card card--interactive card--exercise" tabindex="0" role="button" aria-label="Детальніше про вправу ${escapeHtml(ex.name)}" data-exercise-card="${escapeHtml(ex.id)}">
        <div class="card__media">
          <span class="card__badge">${escapeHtml(ex.category)}</span>
          <div class="card__media-fallback">
            <span>${escapeHtml(ex.category)}</span>
          </div>
          <img src="${escapeHtml(ex.image)}" alt="${escapeHtml(ex.alt || ex.name)}" loading="lazy" data-fallback />
        </div>
        <div class="card__body">
          <h2 class="card__title">${escapeHtml(ex.name)}</h2>
          <p class="card__sub">${escapeHtml(ex.muscles)}</p>
          <div class="card__footer">
            <span class="card__equip">${escapeHtml(ex.equipment)}</span>
            <span class="card__action" aria-hidden="true">Деталі →</span>
          </div>
        </div>
      </article>
    `
      )
      .join('');

    attachImageFallbacks(grid);

    grid.querySelectorAll('[data-exercise-card]').forEach((card) => {
      const id = card.getAttribute('data-exercise-card');
      card.addEventListener('click', () => openExerciseModal(id));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openExerciseModal(id);
        }
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderCatalog();
    });
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeCategory = btn.getAttribute('data-category-filter') || 'Усі';
      filterButtons.forEach((b) => {
        const isCurrent = b === btn;
        b.classList.toggle('is-active', isCurrent);
        b.setAttribute('aria-pressed', String(isCurrent));
      });
      renderCatalog();
    });
  });

  resetButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeCategory = 'Усі';
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      filterButtons.forEach((b) => {
        const isAll = b.getAttribute('data-category-filter') === 'Усі';
        b.classList.toggle('is-active', isAll);
        b.setAttribute('aria-pressed', String(isAll));
      });
      renderCatalog();
      if (searchInput) searchInput.focus();
    });
  });

  renderCatalog();

  if (urlExercise) {
    openExerciseModal(urlExercise);
  }
}

/* ==========================================================================
   Muscle Groups Page Interactive Selector & Highlighting
   ========================================================================== */
function initMuscleGroupsPage() {
  const pills = document.querySelectorAll('[data-muscle-target]');
  const sections = document.querySelectorAll('.muscle-section');
  if (!pills.length) return;

  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const targetId = pill.getAttribute('data-muscle-target');
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      pills.forEach((p) => p.classList.toggle('is-active', p === pill));
      sections.forEach((sec) => sec.classList.toggle('is-highlighted', sec === targetEl));

      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  if (window.location.hash) {
    const hashId = window.location.hash.slice(1);
    const targetSec = document.getElementById(hashId);
    if (targetSec && targetSec.classList.contains('muscle-section')) {
      targetSec.classList.add('is-highlighted');
      pills.forEach((p) => {
        p.classList.toggle('is-active', p.getAttribute('data-muscle-target') === hashId);
      });
    }
  }
}

/* ==========================================================================
   Workout Programs Tabs & Expandable FAQ
   ========================================================================== */
function initProgramTabs() {
  const tabs = document.querySelectorAll('[data-program-tab]');
  const panels = document.querySelectorAll('[data-program-panel]');
  if (!tabs.length || !panels.length) return;

  function activateProgram(programKey) {
    tabs.forEach((tab) => {
      const isSelected = tab.getAttribute('data-program-tab') === programKey;
      tab.classList.toggle('is-active', isSelected);
      tab.setAttribute('aria-selected', String(isSelected));
      tab.setAttribute('tabindex', isSelected ? '0' : '-1');
    });

    panels.forEach((panel) => {
      const isMatch = panel.getAttribute('data-program-panel') === programKey;
      panel.classList.toggle('is-active', isMatch);
      panel.hidden = !isMatch;
    });
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      const key = tab.getAttribute('data-program-tab');
      if (key) activateProgram(key);
    });

    tab.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const dir = e.key === 'ArrowRight' ? 1 : -1;
        const nextIndex = (index + dir + tabs.length) % tabs.length;
        const nextTab = tabs[nextIndex];
        nextTab.focus();
        const key = nextTab.getAttribute('data-program-tab');
        if (key) activateProgram(key);
      }
    });
  });

  const params = new URLSearchParams(window.location.search);
  const urlProgram = params.get('program');
  if (urlProgram && Array.from(tabs).some((t) => t.getAttribute('data-program-tab') === urlProgram)) {
    activateProgram(urlProgram);
  }
}

function initFaqAccordion() {
  const triggers = document.querySelectorAll('.faq-trigger');
  if (!triggers.length) return;

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.faq-item');
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', String(!isExpanded));
      if (item) {
        item.classList.toggle('is-open', !isExpanded);
      }
    });
  });
}

/* ==========================================================================
   Fitness Glossary Search & Category Filter
   ========================================================================== */
function initGlossaryPage() {
  const grid = document.getElementById('glossaryGrid');
  if (!grid) return;

  const searchInput = document.getElementById('glossarySearch');
  const filterBtns = document.querySelectorAll('[data-glossary-filter]');
  const resetBtns = document.querySelectorAll('[data-reset-glossary]');
  const countEl = document.getElementById('glossaryCount');
  const emptyEl = document.getElementById('glossaryEmptyState');

  let activeCat = 'Усі';
  let query = '';

  function renderGlossary() {
    const q = query.trim().toLowerCase();

    const filtered = GLOSSARY_DATA.filter((item) => {
      const matchCat = activeCat === 'Усі' || item.category === activeCat;
      const matchQuery =
        !q ||
        item.term.toLowerCase().includes(q) ||
        item.definition.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });

    if (countEl) {
      countEl.textContent = `Показано термінів: ${filtered.length} із ${GLOSSARY_DATA.length}`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = '';
      if (emptyEl) emptyEl.hidden = false;
      return;
    }

    if (emptyEl) emptyEl.hidden = true;

    grid.innerHTML = filtered
      .map(
        (item) => `
      <article class="glossary-card">
        <div class="glossary-card__top">
          <h2 class="glossary-card__term">${escapeHtml(item.term)}</h2>
          <span class="glossary-card__cat">${escapeHtml(item.category)}</span>
        </div>
        <p class="glossary-card__def">${escapeHtml(item.definition)}</p>
      </article>
    `
      )
      .join('');
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      query = e.target.value;
      renderGlossary();
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeCat = btn.getAttribute('data-glossary-filter') || 'Усі';
      filterBtns.forEach((b) => {
        const isCurrent = b === btn;
        b.classList.toggle('is-active', isCurrent);
        b.setAttribute('aria-pressed', String(isCurrent));
      });
      renderGlossary();
    });
  });

  resetBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeCat = 'Усі';
      query = '';
      if (searchInput) searchInput.value = '';
      filterBtns.forEach((b) => {
        const isAll = b.getAttribute('data-glossary-filter') === 'Усі';
        b.classList.toggle('is-active', isAll);
        b.setAttribute('aria-pressed', String(isAll));
      });
      renderGlossary();
      if (searchInput) searchInput.focus();
    });
  });

  renderGlossary();
}

/* ==========================================================================
   Bootstrap on DOMContentLoaded
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  attachImageFallbacks();
  initMobileNav();
  initBackToTop();
  initModalEvents();
  initExerciseCatalog();
  initMuscleGroupsPage();
  initProgramTabs();
  initFaqAccordion();
  initGlossaryPage();
});





