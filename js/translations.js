// js/translations.js
export const translations = {
  // -------------------------------------------------------------------------
  // РУССКИЙ (RU)
  // -------------------------------------------------------------------------
  ru: {
    page_title: "Портфолио разработчика — EW Studio",
    nav_about: "О студии", nav_projects: "Проекты", nav_blog: "Блог", nav_contact: "Контакты",
    hero_subtitle: "Инди-разработка 2D-игр · веб-практика",
    hero_title: "Привет — я Einir",
    hero_description: "Я — инди-разработчик: осваиваю **Godot 4**, делаю захватывающие 2D-игры и параллельно прокачиваю веб-навыки (React / Three.js) для портфолио.",
    hero_button: "Смотреть проекты",

    about_title: "О EW Studio", about_subtitle: "Кто я и что создаю?",
    about_p1: "EW Studio (Eclipse Work Studio) — это мой личный проект. Я работаю как соло-разработчик и сосредоточен на **Godot 4** — мне интересны глубокие, атмосферные миры в 2D. 3D-иногда красиво, но сейчас я выбираю фокус и плотный геймплей.",
    about_p2: "Параллельно я изучаю веб-разработку (JavaScript, React), чтобы красиво представить игры в портфолио. Этот сайт — часть моего пути. (Да, я всё ещё люблю фиксить баги ночью — бесплатно.)",

    projects_title: "Мои проекты",
    project_atlas_title: "Project Atlas: Destination",
    project_atlas_subtitle: "Пиксельная 2D-игра на Godot — пре-альфа",
    project_atlas_desc: "Атмосферный **Reverse Bullet Hell / Action Survival** с элементами космического техно-хоррора. Проект в активной разработке.",
    project_atlas_tags: ['Godot 4', '2D', 'Pixel Art', 'Pre-alpha', 'В разработке'],

    project_atlas_lore_title: "Лор",
    project_atlas_lore: `Project Atlas не ищет «лучших» — он выбирает тех, чью способность можно извлечь и переписать. Ты оказался в «Code Zero» — холодной, нейтральной симуляции без жалости и лишних слов. Наставник с кодовым именем Терминал даёт только одно условие: выжить 120 минут. Всё остальное — испытание и загадка.`,

    project_atlas_challenges_title: "Вызовы и решения",
    project_atlas_challenges: [
      'Стиль: передать мрачную, высококонтрастную эстетику в Godot 4, не потеряв читаемость геймплея.',
      'Оптимизация: удерживать стабильный FPS при сотнях врагов в кадре в 2D.',
      'Нарратив: встроить глубокий лор через внутриигровые тексты и окружение, не нарушая ритм игры.',
    ],

    project_wip_title: "Проект в разработке...", project_wip_subtitle: "Скоро будет больше деталей.",
    project_wip_desc: "Проект на ранней стадии — следите за обновлениями.",
    project_wip_tags: ['Скоро'],

    btn_back_to_projects: "← К проектам", btn_view_details: "Детали", btn_steam_page: "Steam", btn_playmarket_page: "Play Market", status_soon: "Скоро",

    blog_title: "Блог разработки", btn_read_more: "Читать далее →", btn_back_to_blog: "← К блогу",

    post1_title: "Почему я перешёл с JS на Godot 4", post1_date: "06 октября 2025",
    post1_summary: "Сравнение чистого Canvas/JS и Godot: какие задачи ушли с движком, а что осталось за нами.",
    post1_content: `<p>Первая игра — это смесь энтузиазма и горьких уроков. Мой первый опыт был на чистом JavaScript: управление циклом игры и столкновениями отнимало много времени и сил.</p>
      <h3>Чему меня научил JS:</h3>
      <ul>
        <li><strong>Антипаттерн "всё в одном файле"</strong>: логика быстро превращается в бессистемную кучу.</li>
        <li><strong>Проблемы с FPS</strong>: setInterval вместо requestAnimationFrame — классика провалов.</li>
      </ul>
      <p>В **Godot 4** многие рутинные проблемы решает сам движок, что даёт больше времени на дизайн и механику — а это то, что действительно важно.</p>`,

    post2_title: "5 библиотек для веб-анимаций", post2_date: "28 сентября 2025",
    post2_summary: "От лёгких CSS-решений до мощных JS-фреймворков — инструменты, которые оживляют портфолио.",
    post2_content: `<p>Анимация — это вкус интерфейса. Пять инструментов, которые мне нравятся:</p>
      <ol>
        <li><strong>Tailwind CSS Transitions</strong> — быстро и аккуратно для UI.</li>
        <li><strong>GSAP (GreenSock)</strong> — профуровень для сложных эффектов.</li>
        <li><strong>Lottie</strong> — импорт анимаций из After Effects.</li>
        <li><strong>Three.js</strong> — когда нужен 3D-эффект.</li>
        <li><strong>Framer Motion</strong> (для React) — удобные переходы в приложениях.</li>
      </ol>`,

    post3_title: "О геймдизайне: как выжить в 2D", post3_date: "15 сентября 2025",
    post3_summary: "Графика или механика? Почему сильная механика важнее красивой картинки.",
    post3_content: `<p>В инди-мире часто приходится выбирать. Хорошая графика не спасёт слабую механику.</p>
      <h3>Геймплей — король</h3>
      <p>Игроки простят упрощённую графику, если механика цепляет. Для соло-разработчика это жизненно важно: сначала рабочая механика, потом шлифовка.</p>`,

    contact_title: "Связаться с EW Studio",
    contact_subtitle: "Открыт для разговоров и совместных проектов — напишите мне!",
    form_name: "Ваше имя", form_email: "Email", form_message: "Сообщение", form_submit: "Отправить",

    footer_text: `&copy; ${new Date().getFullYear()} EW Studio. Разработано Einir с <span class="text-red-500">♥</span>`
  },

  // -------------------------------------------------------------------------
  // ТАТАРСКИ (TT)
  // -------------------------------------------------------------------------
  tt: {
    page_title: "Эшләнмәче портфолиосы — EW Studio",
    nav_about: "Студия турында", nav_projects: "Проектлар", nav_blog: "Блог", nav_contact: "Элемтә",
    hero_subtitle: "Инди 2D-уйын эшләве һәм веб-практика",
    hero_title: "Сәлам — мин Einir",
    hero_description: "Мин — инди-эшләнмәче: **Godot 4** өйрәнәм, мавыктыргыч 2D уйларын ясыйм һәм портфолио өчен веб-эшләнмәләр (React / Three.js) өйрәнәм.",
    hero_button: "Проектларны карау",

    about_title: "EW Studio турында", about_subtitle: "Мин кем һәм нәрсә булдырам?",
    about_p1: "EW Studio — минем шәхси проектым. Мин бер эшләнмәче буларак **Godot 4** та 2D уйларын булдыруга игътибар итәм. 3D-гә әлегә укымыйм — ике үлчәмдә тирән атмосфера төзү яклы.",
    about_p2: "Шул ук вакытта веб-технологияләрне (JavaScript, React) өйрәнәм, эшләремне матур итеп күрсәтү өчен. Бу сайт — өйрәнү юлымның бер өлеше. (Һәм мин еш кына багны көлеп очратам — ул да кечкенә тарих.)",

    projects_title: "Минем проектлар",
    project_atlas_title: "Project Atlas: Destination",
    project_atlas_subtitle: "Godot’та пиксель 2D — пре-альфа",
    project_atlas_desc: "Cosmic Techno-Horror хисле **Reverse Bullet Hell / Action Survival** жанрында уен. Проект актив эшләнүдә.",
    project_atlas_tags: ['Godot 4', '2D', 'Pixel Art', 'Pre-alpha', 'Үсештә'],

    project_atlas_lore_title: "Лор (тасвир)",
    project_atlas_lore: `Project Atlas иң осталарны эзләми — ул сине сайлап ала, сине өйрәнеп, сине сынарга тели. Сине «Code Zero» киңлегенә урнаштырганнар — салкын, рәттән тайпылмаган симуляция. Терминал исемле остазның таләбе гади: 120 минут исән кал. Күбрәге — уенның сере.`,

    project_atlas_challenges_title: "Кыенлыклар һәм чишелешләр",
    project_atlas_challenges: [
      'Стиль: Godot 4тә мрачен, югары контрастлы визуаль стиль тудыру, шул ук вакытта уенны укыла торган итү.',
      'Оптимизация: 2D-да экранда йөзләрчә дошманны тоту һәм FPSны саклау.',
      'Лор үстерү: уен эчендәге текстлар һәм мохит аша тарихны табигый итеп кертү.',
    ],

    project_wip_title: "Үсештәге проект...", project_wip_subtitle: "Тиздән яңалыклар булыр.",
    project_wip_desc: "Проект хәзерге вакытта башлангыч стадиядә — яңалыклар киләчәк.",
    project_wip_tags: ['Тиздән'],

    btn_back_to_projects: "← Проектларга", btn_view_details: "Детальләр", btn_steam_page: "Steam", btn_playmarket_page: "Play Market", status_soon: "Тиздән",

    blog_title: "Үсеш блогы", btn_read_more: "Укыту дәвамы →", btn_back_to_blog: "← Блогка",

    post1_title: "Ни өчен мин JS’тан Godot 4кә күчтем", post1_date: "2025-нче ел, 6 октябрь",
    post1_summary: "Чиста Canvas/JS белән Godot-тагы 2D эшләвен чагыштыру — ниләр җиңеләде, нәрсә калды.",
    post1_content: `<p>Беренче уен ясау — зур дәрт һәм кече ачышлар. Мин JavaScript белән башладым: уен циклы һәм бәрелешләр белән идарә итү күп вакыт һәм игътибар таләп итте.</p>
      <h3>JSтан алган хаталарым:</h3>
      <ul>
        <li><strong>Бөтен логиканы бергә туплау</strong>: код тиз буталчыкка әйләнә.</li>
        <li><strong>FPS проблемалары</strong>: requestAnimationFrame урынына setInterval куллану — ялгыш үрнәк.</li>
      </ul>
      <p>Хәзер **Godot 4** күп рутинаны үз өстенә ала, һәм миңа уеннарның күңеленә — механика һәм атмосферага — күбрәк игътибар бирергә мөмкинлек бар.</p>`,

    post2_title: "Веб-анимацияләр өчен 5 китапханә", post2_date: "2025-нче ел, 28 сентябрь",
    post2_summary: "Сайтка хәрәкәт өстәүче кораллар — җиңел CSS-тан көчле JS-челтәрләргә.",
    post2_content: `<p>Анимация — вебның җаны. Мин кулланган 5 корал:</p>
      <ol>
        <li><strong>Tailwind CSS Transitions</strong> — тиз һәм җиңел.</li>
        <li><strong>GSAP</strong> — катлаулы анимацияләр өчен.</li>
        <li><strong>Lottie</strong> — After Effects анимацияләрен алып килү.</li>
        <li><strong>Three.js</strong> — 3D кирәк булса.</li>
        <li><strong>Framer Motion</strong> — React өчен күчешләр.</li>
      </ol>`,

    post3_title: "Геймдизайн фикерләре: 2Dда ничек исән калырга", post3_date: "2025-нче ел, 15 сентябрь",
    post3_summary: "Графика яки механика — уенны нинди итә? Ни өчен механика беренче урында.",
    post3_content: `<p>Инди дөньясында сайлау мәҗбүри: графика яки механика? Күпчелек вакытта — механика өстен.</p>
      <h3>Геймплей — төп</h3>
      <p>Тирән механика булса, уенчылар гади рәсемне кичерә. Мин һәрвакыт «алдына механика, аннан полировка» кагыйдәсенә таянам — ул тиз сынау һәм иртә кире кагу мөмкинлеге бирә.</p>`,

    contact_title: "EW Studio белән элемтә", contact_subtitle: "Яңа проектлар һәм сөйләшүләргә һәрвакыт ачыл! Хәбәр языгыз.",
    form_name: "Исемең", form_email: "Email", form_message: "Хәбәр", form_submit: "Җибәрү",

    footer_text: `&copy; ${new Date().getFullYear()} EW Studio. Einir тарафыннан <span class="text-red-500">♥</span> белән эшләнде`
  },

  // -------------------------------------------------------------------------
  // АНГЛИЙСКИЙ (EN)
  // -------------------------------------------------------------------------
  en: {
    page_title: "Developer Portfolio — EW Studio",
    nav_about: "About", nav_projects: "Projects", nav_blog: "Blog", nav_contact: "Contact",
    hero_subtitle: "Indie 2D Game Dev · Web Practice",
    hero_title: "Hi — I'm Einir",
    hero_description: "Indie developer mastering **Godot 4** to craft compelling 2D games, while sharpening web skills (React / Three.js) to present my work.",
    hero_button: "View Projects",

    about_title: "About EW Studio", about_subtitle: "Who I am — what I build",
    about_p1: "EW Studio (Eclipse Work Studio) is my personal game project. I'm a solo developer focused on **Godot 4**, building deep, atmospheric worlds in 2D. 3D can wait — I prefer polishing pixels and mechanics for now.",
    about_p2: "At the same time, I'm learning web development (JavaScript, React) so the portfolio looks as good as the games. This site is part of that journey. (Yes — I fix bugs with coffee.)",

    projects_title: "My Projects",
    project_atlas_title: "Project Atlas: Destination",
    project_atlas_subtitle: "2D Pixel Art Godot game — pre-alpha",
    project_atlas_desc: "A Cosmic Techno-Horror flavored **Reverse Bullet Hell / Action Survival**. Actively in development.",
    project_atlas_tags: ['Godot 4', '2D', 'Pixel Art', 'Pre-Alpha', 'In Development'],

    project_atlas_lore_title: "Lore",
    project_atlas_lore: `Project Atlas doesn't pick heroes — it selects those whose Skill can be harvested. You are uploaded into Code Zero: a neutral, clinical simulation designed to test and extract. Terminal, your mentor, gives a single rule: survive for 120 minutes. Everything else is the experiment.`,

    project_atlas_challenges_title: "Challenges & Solutions",
    project_atlas_challenges: [
      'Style: achieve a dark, high-contrast look in Godot 4 while keeping gameplay readable.',
      'Optimization: handle hundreds of enemies on screen in 2D without FPS drops.',
      'Lore: weave deep narrative through in-game texts and environmental cues.',
    ],

    project_wip_title: "Project in progress...", project_wip_subtitle: "More updates coming soon.",
    project_wip_desc: "Early stage — stay tuned for updates.",
    project_wip_tags: ['Coming Soon'],

    btn_back_to_projects: "← Back to projects", btn_view_details: "View details", btn_steam_page: "Steam Page", btn_playmarket_page: "Play Market", status_soon: "Coming Soon",

    blog_title: "Development Blog", btn_read_more: "Read more →", btn_back_to_blog: "← Back to blog",

    post1_title: "Why I switched from JS to Godot 4", post1_date: "October 06, 2025",
    post1_summary: "Comparing pure Canvas/JS vs Godot for 2D games — what went smoother with an engine.",
    post1_content: `<p>Making your first game is a cocktail of excitement and hard lessons. My first project used pure JavaScript; managing the game loop and collisions demanded a lot of attention.</p>
      <h3>Mistakes I learned from in JS:</h3>
      <ul>
        <li><strong>Monolithic code</strong>: squeezing all logic into one file becomes a mess fast.</li>
        <li><strong>FPS pitfalls</strong>: using <strong>setInterval</strong> instead of <strong>requestAnimationFrame</strong>.</li>
      </ul>
      <p>With **Godot 4**, many routine issues are handled by the engine, leaving me more time to iterate on design and mechanics.</p>`,

    post2_title: "5 Libraries for Web Animations", post2_date: "September 28, 2025",
    post2_summary: "Tools I use to bring the portfolio to life — from lightweight CSS tricks to powerful JS frameworks.",
    post2_content: `<p>Animation is the soul of modern web UI. Five tools I rely on:</p>
      <ol>
        <li><strong>Tailwind CSS Transitions</strong> — quick UI polish.</li>
        <li><strong>GSAP (GreenSock)</strong> — pro level for complex timing.</li>
        <li><strong>Lottie</strong> — import After Effects animations.</li>
        <li><strong>Three.js</strong> — when 3D is needed.</li>
        <li><strong>Framer Motion</strong> — elegant transitions for React apps.</li>
      </ol>`,

    post3_title: "Game design thoughts: surviving in 2D", post3_date: "September 15, 2025",
    post3_summary: "Graphics vs gameplay: why mechanics usually win.",
    post3_content: `<p>In indie gamedev you make trade-offs. Great graphics don't save poor mechanics.</p>
      <h3>Gameplay is king</h3>
      <p>Players forgive simple visuals if the core mechanics are engaging. As a solo dev focused on 2D, that principle drives my process: prototype mechanics first, polish later.</p>`,

    contact_title: "Contact EW Studio",
    contact_subtitle: "Open to projects and conversations — send a message!",
    form_name: "Your name", form_email: "Your email", form_message: "Message", form_submit: "Send",

    footer_text: `&copy; ${new Date().getFullYear()} EW Studio. Developed by Einir with <span class="text-red-500">♥</span>`
  },

  // -------------------------------------------------------------------------
  // ЯПОНСКИЙ (JP)
  // -------------------------------------------------------------------------
  jp: {
    page_title: "開発者ポートフォリオ — EW Studio",
    nav_about: "スタジオについて", nav_projects: "プロジェクト", nav_blog: "ブログ", nav_contact: "お問い合わせ",
    hero_subtitle: "インディー2Dゲーム開発・ウェブ実践",
    hero_title: "こんにちは、Einir です",
    hero_description: "2Dの魅力的なゲームを作るために **Godot 4** を習得中のインディー開発者です。ポートフォリオ用にウェブ開発（React / Three.js）も学んでいます。",
    hero_button: "プロジェクトを見る",

    about_title: "EW Studio について", about_subtitle: "自己紹介と制作物",
    about_p1: "EW Studio（Eclipse Work Studio）は私の個人プロジェクトです。一人で開発を行い、主に **Godot 4** を用いて2Dゲームを作っています。3Dはいつか挑戦したいですが、今は2Dの表現とゲーム性に集中しています。",
    about_p2: "並行してウェブ（JavaScript, React）を学び、作品を最良の形で見せる努力をしています。このサイトはその学びの一部です。（夜中のバグ修正はコーヒーと共に。）",

    projects_title: "プロジェクト",
    project_atlas_title: "Project Atlas: Destination",
    project_atlas_subtitle: "Godot製のピクセル2Dゲーム — プレアルファ",
    project_atlas_desc: "コズミック・テクノホラーの雰囲気を持つ **Reverse Bullet Hell / Action Survival**。現在開発中です。",
    project_atlas_tags: ['Godot 4', '2D', 'Pixel Art', 'Pre-Alpha', '開発中'],

    project_atlas_lore_title: "世界観",
    project_atlas_lore: `Project Atlas は「最強」を選ぶわけではない。抽出すべき“Skill”を持つ者を選ぶ。あなたは「Code Zero（コード・ゼロ）スペース」という、中立で冷たいシミュレーションに配置された。指導者のターミナルが示すのは一つ ― 120分間生き延びること。残りは試練だ。`,

    project_atlas_challenges_title: "課題と対応",
    project_atlas_challenges: [
      'スタイル：Godot 4でダークかつハイコントラストな見た目を実現しつつ、視認性を保つこと。',
      '最適化：2Dで画面内に数百体の敵がいてもFPSを維持すること。',
      '物語：ゲーム内のテキストや環境で深い世界観を自然に語らせること。',
    ],

    project_wip_title: "開発中のプロジェクト...", project_wip_subtitle: "詳細は順次公開します。",
    project_wip_desc: "現段階はプレアルファ。続報をお待ちください。",
    project_wip_tags: ['近日公開'],

    btn_back_to_projects: "← プロジェクト一覧へ", btn_view_details: "詳細を見る", btn_steam_page: "Steam", btn_playmarket_page: "Play Market", status_soon: "近日公開",

    blog_title: "開発ブログ", btn_read_more: "続きを読む →", btn_back_to_blog: "← ブログへ",

    post1_title: "なぜJSからGodot 4へ移ったのか", post1_date: "2025年10月06日",
    post1_summary: "Canvas/JSとGodotでの2D開発を比較し、エンジンがもたらす利点を語ります。",
    post1_content: `<p>初めてのゲーム制作は喜びと学びの連続です。最初は純粋なJavaScriptで作りましたが、ゲームループや衝突判定の管理が大変でした。</p>
      <h3>JSでの学び：</h3>
      <ul>
        <li><strong>ロジックの集中</strong>：すべてを一つにまとめると可読性が落ちます。</li>
        <li><strong>FPSの罠</strong>：requestAnimationFrameではなくsetIntervalを使う失敗。</li>
      </ul>
      <p>しかし **Godot 4** によって多くの煩雑さが解消され、ゲームデザインに集中できるようになりました。</p>`,

    post2_title: "ウェブアニメーションのための5つのライブラリ", post2_date: "2025年09月28日",
    post2_summary: "軽量なCSSから強力なJSまで、ポートフォリオを生き生きとさせるツールの紹介です。",
    post2_content: `<p>アニメーションはウェブの表情です。私が使う5つのツール：</p>
      <ol>
        <li><strong>Tailwind CSS Transitions</strong> — 素早いUIアニメーション。</li>
        <li><strong>GSAP (GreenSock)</strong> — 複雑な表現向け。</li>
        <li><strong>Lottie</strong> — After Effectsの取り込み。</li>
        <li><strong>Three.js</strong> — 3D表現が必要なときに。</li>
        <li><strong>Framer Motion</strong> — Reactでのトランジションに便利。</li>
      </ol>`,

    post3_title: "ゲームデザインの考察：2Dで生き残る方法", post3_date: "2025年09月15日",
    post3_summary: "ビジュアルかメカニクスか？ 真に大切なものについて。",
    post3_content: `<p>インディー開発では取捨選択が重要です。美しい見た目だけでは足りません。</p>
      <h3>ゲームプレイが王様</h3>
      <p>深いメカニクスがあれば、シンプルなグラフィックも魅力になります。まずは遊びのコア、次に磨き上げる――これが私の流儀です。</p>`,

    contact_title: "EW Studio へお問い合わせ", contact_subtitle: "新しい案件や会話を歓迎します。メッセージをどうぞ。",
    form_name: "お名前", form_email: "メールアドレス", form_message: "メッセージ", form_submit: "送信",

    footer_text: `&copy; ${new Date().getFullYear()} EW Studio. Einir が <span class="text-red-500">♥</span> を込めて制作`
  },

  // -------------------------------------------------------------------------
  // КОРЕЙСКИЙ (KO)
  // -------------------------------------------------------------------------
  ko: {
    page_title: "개발자 포트폴리오 — EW Studio",
    nav_about: "스튜디오 소개", nav_projects: "프로젝트", nav_blog: "블로그", nav_contact: "연락",
    hero_subtitle: "인디 2D 게임 개발 · 웹 연습",
    hero_title: "안녕하세요, Einir입니다",
    hero_description: "매력적인 2D 게임을 만들기 위해 **Godot 4**를 익히고 있는 인디 개발자입니다. 포트폴리오를 위해 웹(React / Three.js)도 공부 중입니다.",
    hero_button: "프로젝트 보기",

    about_title: "EW Studio 소개", about_subtitle: "저는 누구이고 무엇을 만드는가",
    about_p1: "EW Studio(Eclipse Work Studio)는 제 개인 프로젝트입니다. 저는 단독 개발자로서 **Godot 4**를 중심으로 2D 세계를 제작합니다. 3D는 나중에 — 지금은 픽셀과 메커닉에 집중합니다.",
    about_p2: "동시에 웹 개발(JavaScript, React)을 배우며 작업물을 보기 좋게 배치하는 법을 익히고 있습니다. 이 사이트는 그 과정의 일부입니다. (밤샘 디버그는 제 일상의 일부입니다.)",

    projects_title: "내 프로젝트들",
    project_atlas_title: "Project Atlas: Destination",
    project_atlas_subtitle: "프리알파 단계의 Godot 기반 2D 픽셀 게임",
    project_atlas_desc: "코스믹 테크노-호러 분위기의 **Reverse Bullet Hell / Action Survival**. 현재 활발히 개발 중입니다.",
    project_atlas_tags: ['Godot 4', '2D', 'Pixel Art', 'Pre-Alpha', '개발 중'],

    project_atlas_lore_title: "세계관",
    project_atlas_lore: `Project Atlas는 최강자를 고르지 않는다. 추출되어야 할 'Skill'을 가진 자를 선택한다. 당신은 감정이 배제된 시뮬레이션 'Code Zero Space'에 배치되었다. 멘토 'Terminal'의 요구는 단 하나: 120분 동안 생존하라. 나머지는 실험이다.`,

    project_atlas_challenges_title: "도전 과제 및 해결",
    project_atlas_challenges: [
      '스타일: Godot 4에서 다크하고 하이 콘트라스트한 비주얼을 구현하되 가독성을 유지.',
      '최적화: 2D에서 수백의 적을 처리하면서 FPS를 지키기.',
      '스토리텔링: 게임 내 텍스트와 환경으로 깊은 세계관을 자연스럽게 전달하기.',
    ],

    project_wip_title: "개발 중...", project_wip_subtitle: "곧 흥미로운 소식이 올라옵니다.",
    project_wip_desc: "프로젝트는 초기 단계입니다. 더 많은 정보는 추후 공개됩니다.",
    project_wip_tags: ['곧 공개'],

    btn_back_to_projects: "← 프로젝트로", btn_view_details: "자세히 보기", btn_steam_page: "Steam", btn_playmarket_page: "Play Market", status_soon: "곧 공개",

    blog_title: "개발 블로그", btn_read_more: "더 읽기 →", btn_back_to_blog: "← 블로그로",

    post1_title: "왜 JS에서 Godot 4로 옮겼나", post1_date: "2025년 10월 06일",
    post1_summary: "순수 Canvas/JS와 Godot 엔진에서의 2D 개발 비교 — 엔진의 장점은 무엇인가?",
    post1_content: `<p>첫 게임 제작은 설렘과 시행착오의 연속입니다. 저는 처음에 순수 JavaScript로 시작했고, 게임 루프와 충돌 처리가 큰 부담이었습니다.</p>
      <h3>JS에서 배운 점:</h3>
      <ul>
        <li><strong>코드 뭉치기</strong>: 모든 것을 한 파일에 넣으면 관리가 어려워집니다.</li>
        <li><strong>FPS 문제</strong>: setInterval 대신 requestAnimationFrame을 써야 합니다.</li>
      </ul>
      <p>**Godot 4** 덕분에 많은 반복 작업이 줄어들어 디자인에 더 집중할 수 있게 되었습니다.</p>`,

    post2_title: "웹 애니메이션을 위한 5가지 라이브러리", post2_date: "2025년 09월 28일",
    post2_summary: "가벼운 CSS부터 강력한 JS까지 — 포트폴리오에 생기를 불어넣는 도구들.",
    post2_content: `<p>애니메이션은 현대 웹의 표정입니다. 제가 쓰는 5가지 툴:</p>
      <ol>
        <li><strong>Tailwind CSS Transitions</strong> — 빠른 UI 애니메이션.</li>
        <li><strong>GSAP (GreenSock)</strong> — 복잡한 애니메이션의 표준.</li>
        <li><strong>Lottie</strong> — After Effects 애니메이션 불러오기.</li>
        <li><strong>Three.js</strong> — 3D가 필요할 때.</li>
        <li><strong>Framer Motion</strong> — React 전환 효과에 편리.</li>
      </ol>`,

    post3_title: "게임디자인 생각: 2D에서 살아남기", post3_date: "2025년 09월 15일",
    post3_summary: "그래픽 vs 게임성 — 어떤 것이 더 중요한가?",
    post3_content: `<p>인디 게임 개발에서는 선택이 중요합니다. 멋진 그래픽보다 재미있는 플레이가 우선입니다.</p>
      <h3>게임플레이가 왕이다</h3>
      <p>좋은 메커닉이 있다면 단순한 비주얼도 플레이어에게 받아들여집니다. 저는 항상 먼저 핵심을 만들고 나중에 다듬습니다.</p>`,

    contact_title: "EW Studio에 연락하기", contact_subtitle: "새 프로젝트나 대화 환영합니다. 메시지를 보내주세요!",
    form_name: "이름", form_email: "이메일", form_message: "메시지", form_submit: "보내기",

    footer_text: `&copy; ${new Date().getFullYear()} EW Studio. Einir가 <span class="text-red-500">♥</span> 를 담아 개발했습니다`
  },

  // -------------------------------------------------------------------------
  // КИТАЙСКИЙ (ZH-CN) - 简体中文
  // -------------------------------------------------------------------------
  zh: {
    page_title: "开发者作品集 — EW Studio",
    nav_about: "关于工作室", nav_projects: "项目", nav_blog: "博客", nav_contact: "联系我们",
    hero_subtitle: "独立 2D 游戏开发 · Web 练习",
    hero_title: "大家好，我是 Einir",
    hero_description: "独立开发者，正在精通 **Godot 4**，制作有吸引力的 2D 游戏，同时学习（React / Three.js）完善作品集。",
    hero_button: "查看项目",

    about_title: "关于 EW Studio", about_subtitle: "我是谁，我在做什么",
    about_p1: "EW Studio（Eclipse Work Studio）是我的个人项目。我是独立开发者，专注用 **Godot 4** 打磨 2D 世界与玩法。3D 很酷，但当前我更喜欢把注意力放在像素与机制上。",
    about_p2: "同时我在学习 Web（JavaScript, React），希望以更专业的方式展示我的作品。这个网站就是其中一部分。——是的，我也会深夜修 Bug。",

    projects_title: "我的项目",
    project_atlas_title: "Project Atlas: Destination",
    project_atlas_subtitle: "基于 Godot 的 2D 像素游戏 — 预 Alpha",
    project_atlas_desc: "一款带有宇宙科技恐怖气氛的 **Reverse Bullet Hell / Action Survival**，项目正在开发中。",
    project_atlas_tags: ['Godot 4', '2D', 'Pixel Art', 'Pre-Alpha', '开发中'],

    project_atlas_lore_title: "背景故事",
    project_atlas_lore: `Project Atlas 并不选择最强者，而是选择那些其“Skill（技能）”可被提取的人。你被放入代号「Code Zero」的中立模拟空间，一个冷漠且精密的试验场。你的导师 Terminal 唯一的命令是：存活 120 分钟。其余的，交给探索。`,

    project_atlas_challenges_title: "挑战与解决方案",
    project_atlas_challenges: [
      '视觉：在 Godot 4 中实现暗系、高对比的美术同时保证可读性。',
      '优化：在 2D 画面中处理数百个敌人且不掉帧。',
      '叙事：通过内置文本与环境自然嵌入深层背景故事。',
    ],

    project_wip_title: "项目进行中...", project_wip_subtitle: "有趣的内容即将上线。",
    project_wip_desc: "项目处于早期阶段，后续会逐步公布细节。",
    project_wip_tags: ['即将推出'],

    btn_back_to_projects: "← 返回项目", btn_view_details: "查看详情", btn_steam_page: "Steam 页面", btn_playmarket_page: "Play Market 页面", status_soon: "即将推出",

    blog_title: "开发日志", btn_read_more: "继续阅读 →", btn_back_to_blog: "← 返回博客",

    post1_title: "我为何从 JS 转向 Godot 4", post1_date: "2025-10-06",
    post1_summary: "比较纯 Canvas/JS 与 Godot 引擎的 2D 开发，探讨引擎带来的便利。",
    post1_content: `<p>做第一款游戏是既兴奋又反复试错的过程。最初我用纯 JavaScript 开发，游戏循环与碰撞处理消耗大量精力。</p>
      <h3>在 JS 中学到的教训：</h3>
      <ul>
        <li><strong>逻辑堆积</strong>：尝试把所有逻辑塞进同一个文件会出问题。</li>
        <li><strong>FPS 问题</strong>：使用 <strong>setInterval</strong> 而非 <strong>requestAnimationFrame</strong> 是常见错误。</li>
      </ul>
      <p>现在借助 **Godot 4**，很多基础问题由引擎处理，我能更多地专注于玩法与关卡设计。</p>`,

    post2_title: "5 个 Web 动画库", post2_date: "2025-09-28",
    post2_summary: "从轻量 CSS 到强力 JS，这些工具帮我为作品集注入活力。",
    post2_content: `<p>动画是现代网页的灵魂。我常用的五个工具：</p>
      <ol>
        <li><strong>Tailwind CSS Transitions</strong> — 适合快速 UI 动效。</li>
        <li><strong>GSAP (GreenSock)</strong> — 复杂动画的行业标准。</li>
        <li><strong>Lottie</strong> — 导入 After Effects 动画。</li>
        <li><strong>Three.js</strong> — 需要 3D 时使用。</li>
        <li><strong>Framer Motion</strong> — 在 React 中快速做过渡。</li>
      </ol>`,

    post3_title: "游戏设计思考：如何在 2D 中生存", post3_date: "2025-09-15",
    post3_summary: "画面还是玩法？关于让游戏真正出彩的思考。",
    post3_content: `<p>独立开发需要取舍。华丽的画面无法掩盖玩法的空洞。</p>
      <h3>玩法为王</h3>
      <p>如果机制足够吸引人，玩家会原谅简朴的画面。我的原则是先验证玩法，再去打磨表现。</p>`,

    contact_title: "联系 EW Studio", contact_subtitle: "欢迎新项目与交流，请留言！",
    form_name: "你的名字", form_email: "你的邮箱", form_message: "消息", form_submit: "发送",

    footer_text: `&copy; ${new Date().getFullYear()} EW Studio. 由 Einir 倾注 <span class="text-red-500">♥</span> 设计与开发`
  },

  // -------------------------------------------------------------------------
  // НЕМЕЦКИЙ (DE)
  // -------------------------------------------------------------------------
  de: {
    page_title: "Entwickler-Portfolio — EW Studio",
    nav_about: "Über", nav_projects: "Projekte", nav_blog: "Blog", nav_contact: "Kontakt",
    hero_subtitle: "Indie 2D-Spielentwicklung · Web-Praxis",
    hero_title: "Hallo, ich bin Einir",
    hero_description: "Ich bin Indie-Entwickler und lerne **Godot 4**, um fesselnde 2D-Spiele zu bauen. Parallel dazu vertiefe ich Web-Techniken (React / Three.js) für mein Portfolio.",
    hero_button: "Projekte ansehen",

    about_title: "Über EW Studio", about_subtitle: "Wer ich bin und was ich erschaffe",
    about_p1: "EW Studio (Eclipse Work Studio) ist mein persönliches Projekt. Als Ein-Mann-Team konzentriere ich mich auf **Godot 4** und die Schaffung atmosphärischer 2D-Welten. 3D ist interessant, aber derzeit nicht mein Fokus.",
    about_p2: "Gleichzeitig lerne ich Web-Technologien (JavaScript, React), um meine Arbeiten bestmöglich zu präsentieren. Diese Seite ist Teil dieser Reise. (Kaffee und Bugs gehören dazu.)",

    projects_title: "Meine Projekte",
    project_atlas_title: "Project Atlas: Destination",
    project_atlas_subtitle: "2D-Pixel-Art-Spiel mit Godot — Pre-Alpha",
    project_atlas_desc: "Ein **Reverse Bullet Hell / Action Survival** mit Cosmic Techno-Horror-Stimmung. Projekt in aktiver Entwicklung.",
    project_atlas_tags: ['Godot 4', '2D', 'Pixel Art', 'Pre-Alpha', 'In Entwicklung'],

    project_atlas_lore_title: "Lore",
    project_atlas_lore: `Project Atlas wählt keine "Helden" im klassischen Sinn — es selektiert jene, deren Fähigkeit (Skill) extrahiert werden kann. Du wurdest in den "Code Zero Space" transferiert, eine neutrale, emotionsarme Simulation. Dein Mentor, Terminal, gibt eine einzige Regel: Überlebe 120 Minuten. Der Rest ist Versuchsanordnung und Geheimnis.`,

    project_atlas_challenges_title: "Herausforderungen & Lösungen",
    project_atlas_challenges: [
      'Stil: einen dunklen, kontrastreichen Look in Godot 4 umsetzen und gleichzeitig die Spielbarkeit bewahren.',
      'Optimierung: Hunderte Gegner in 2D darstellen, ohne FPS-Einbrüche.',
      'Lore: Tiefenstory über In-Game-Texte und Umgebung vermitteln, ohne Spielrhythmus zu stören.',
    ],

    project_wip_title: "Projekt in Arbeit...", project_wip_subtitle: "Bald mehr Infos.",
    project_wip_desc: "Das Projekt befindet sich in einer frühen Phase — Updates folgen.",
    project_wip_tags: ['Kommt bald'],

    btn_back_to_projects: "← Zu den Projekten", btn_view_details: "Details", btn_steam_page: "Steam", btn_playmarket_page: "Play Market", status_soon: "Bald verfügbar",

    blog_title: "Entwickler-Blog", btn_read_more: "Weiterlesen →", btn_back_to_blog: "← Zum Blog",

    post1_title: "Warum ich von JS zu Godot 4 gewechselt bin", post1_date: "06. Oktober 2025",
    post1_summary: "Vergleich: 2D-Entwicklung in reinem Canvas/JS vs. mit Godot — welche Arbeit erleichtert der Engine?",
    post1_content: `<p>Das erste Spiel zu erstellen ist voller Euphorie und Lernmomente. Mein erstes Projekt war in reinem JavaScript; Game-Loop und Kollisionsmanagement waren zeitaufwendig.</p>
      <h3>Fehler, aus denen ich in JS gelernt habe:</h3>
      <ul>
        <li><strong>Monolithische Logik</strong>: Alles in eine Datei quetschen führt schnell ins Chaos.</li>
        <li><strong>FPS-Fallen</strong>: setInterval statt requestAnimationFrame verwenden.</li>
      </ul>
      <p>In **Godot 4** werden viele Grundprobleme vom Engine-Stack übernommen — dadurch bleibt mehr Raum für Gameplay-Design.</p>`,

    post2_title: "5 Bibliotheken für Web-Animationen", post2_date: "28. September 2025",
    post2_summary: "Von leichten CSS-Tricks bis zu mächtigen JS-Frameworks — Tools, die mein Portfolio lebendig machen.",
    post2_content: `<p>Animation ist das Herz moderner UIs. Fünf Werkzeuge, die ich nutze:</p>
      <ol>
        <li><strong>Tailwind CSS Transitions</strong> — schnelle UI-Politur.</li>
        <li><strong>GSAP (GreenSock)</strong> — Profi-Standard für komplexe Abläufe.</li>
        <li><strong>Lottie</strong> — Import von After Effects.</li>
        <li><strong>Three.js</strong> — wenn 3D nötig ist.</li>
        <li><strong>Framer Motion</strong> — elegante Transitions in React.</li>
      </ol>`,

    post3_title: "Gedanken zum Game Design: Wie man in 2D überlebt", post3_date: "15. September 2025",
    post3_summary: "Grafik oder Gameplay? Warum Mechanik oft wichtiger ist.",
    post3_content: `<p>In der Indie-Szene sind Entscheidungen gefragt. Gute Grafik ersetzt kein gutes Spiel.</p>
      <h3>Gameplay ist König</h3>
      <p>Tiefe Mechanik lässt Spieler einfache Optik verzeihen. Mein Prinzip: zuerst Gameplay, dann Feinschliff.</p>`,

    contact_title: "EW Studio kontaktieren", contact_subtitle: "Wir sind offen für Projekte und Austausch — schreib mir!",
    form_name: "Ihr Name", form_email: "Ihre E-Mail", form_message: "Nachricht", form_submit: "Senden",

    footer_text: `&copy; ${new Date().getFullYear()} EW Studio. Von Einir mit <span class="text-red-500">♥</span> entwickelt`
  }
};



