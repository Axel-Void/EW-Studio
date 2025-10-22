// js/translations.js
export const translations = {
  
  ru: {
    page_title: "Портфолио разработчика — EW Studio",
    nav_about: "О студии", nav_projects: "Проекты", nav_blog: "Блог", nav_contact: "Контакты",
    hero_subtitle: "Инди-разработка 2D-игр · веб-практика",
    hero_title: "Привет — я Einir или просто Салих",
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




