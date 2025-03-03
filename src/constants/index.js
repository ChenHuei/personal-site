export const HEADER_ITEMS = [
  {
    id: 0,
    label: 'About',
  },
  {
    id: 1,
    label: 'Resume',
  },
  {
    id: 2,
    label: 'Works',
  },
]

export const ABOUT_INFORMATION = [
  {
    name: '陳振輝',
    jobs: '資深前端工程師 (Senior Front-End Engineer)',
    description:
      '擁有五年半的前端開發經驗，熟悉 React、Next.js、Typescript。追求簡潔易讀的程式碼，遵守 DRY 開發概念建立易讀、高擴充性的 Component。重視團隊的合作與溝通，正在尋找一個能夠讓我穩定發揮並且不斷成長的環境。以下將更詳細說明過往經歷，非常感謝您抽空觀看，請多多指教，謝謝！',
    phone: '0986-776-379',
    email: 'aaa830714@gmail.com',
  },
]

export const RESUME_INFORMATION = [
  {
    company: '鼎恒數位科技 (MAYO)',
    jobs: '資深前端工程師',
    year: '2022/06 ~ now',
    list: [
      {
        title: '🚀 技術升級與架構革新',
        description: [
          '技術升級：統一各專案的 React 版本 (v16.8)，確保 component 與邏輯復用，提升維護性與開發效率，同時避免多種版本的管理成本',
          '架構翻新：導入 monorepo 統一專案設定與共用套件，減少重複部署與維護成本',
        ],
      },
      {
        title: '⚡ 提升網站安全、效能與開發效率',
        description: [
          '網站安全：制定 CSP（Content Security Policy），減少潛在 XSS 攻擊風險，提升資安等級',
          '網站效能：減少專案 bundle size 約 40%，以打卡功能為例，彈出視窗顯示時間提升約 2.2 秒，大幅提升使用者體驗',
          '開發效率：參考 CRA 的方式實作更新語系包的工具，減少約 80% 的時間，提升團隊開發速度',
        ],
      },
      {
        title: '🌍 跨國開發',
        description: [
          '制定並落實時區標準，確保 UI/UX 符合各地使用習慣，並統一 API 時間格式避免時區錯誤，提升跨國用戶體驗',
        ],
      },
      {
        title: '📊 數據驅動決策',
        description: [
          '協助 PM 導入 GTM (Google Tag Manage)，提供數據深入分析用戶行為，推動產品優化與決策方向',
        ],
      },
      {
        title: '🎯 前端招募與面試優化',
        description: [
          '參與 20+ 位前端工程師面試，制定並優化面試流程與標準，確保團隊人才質量，提升招聘效率',
        ],
      },
    ],
  },
  {
    company: '香港電視購物網絡 (HKTVmall)',
    jobs: '前端工程師',
    year: '2021/07 ~ 2022/06',
    list: [
      {
        title: '🎨 技術選型',
        description: [
          '基於仿 APP 的產品特性，提出並成功導入 Ionic 取代 Ant Design 作為 UI 框架，優化使用者體驗',
        ],
      },
      {
        title: '📚 新人培育計畫',
        description: [
          '針對大學畢業生與 Junior 開發者，提供系統化 React 培訓課程，並制定階段性目標與 Mentor 制度，確保新人成長、快速上手開發',
        ],
      },
      {
        title: '💡 技術分享',
        description: ['分享 Next.js 的特點(v12)、Testing 的概念與實作，以及 airbnb 的 style guide'],
      },
      {
        title: '🛒 無人商店購物網站',
        description: [
          '從 0 到 1 建立網站，使用 Next.js 建立專案，負責第三方金流與 React Native 的串接，完整落實產品開發流程',
        ],
      },
    ],
  },
  {
    company: '雲端互動 (Cloud Interactive)',
    jobs: '前端工程師',
    year: '2019/09 ~ 2021/07',
    list: [
      {
        title: '💻 專案經驗：豪華郵輪 (Genting)、台塑電子商務、CEC 大陸工程、安麗簡訊...',
        description: [
          '從 0 到 1 建立網站，使用 Nuxt.js 以及 Typescript (vue-property-decorator) 建立專案',
        ],
      },
    ],
  },
  {
    company: '英特拉金融科技',
    jobs: '前端工程師',
    year: '2018/07 ~ 2019/05',
    list: [
      {
        title: '💻 專案經驗：Scan2Pay、漢堡王點餐系統、發票系統後台...',
      },
    ],
  },
  {
    company: 'IOH',
    jobs: '活動企劃',
    year: '2017/06 ~ 2018/04',
    list: [
      {
        title: '校系影音分享 (Link)',
        description: ['分享大學所學和課外活動的經驗及反思'],
        link: 'https://ioh.tw/talks/%E6%B7%A1%E6%B1%9F%E8%B3%87%E7%AE%A1%E7%B3%BB-%E9%99%B3%E6%8C%AF%E8%BC%9D-zhen-huei-chen-tw-study-tku-bde',
      },
      {
        title: '全台校園演講',
        description: ['曾至全台 19 所不同的高中職分享大學經歷'],
      },
    ],
  },
  {
    company: '私立淡江大學',
    jobs: '資管系',
    year: '2012/09 ~ 2016/06',
    list: [
      {
        title: '系學會會長',
        description: ['與 13 名幹部和近 30 名的學弟妹，一同討論及舉辦約 20 場的系內外活動'],
      },
      {
        title: '國際志工 (Link)',
        description: ['於大學的寒暑假，遠赴至柬埔寨和泰國進行電腦和中文的教學計畫'],
        link: 'https://www.youtube.com/watch?v=GiId2fo-GUI',
      },
    ],
  },
]

export const LINKS_ITEMS = [
  {
    name: 'Codepen',
    link: 'https://codepen.io/chenhuei/',
  },
  {
    name: 'GitHub',
    link: 'https://github.com/ChenHuei',
  },
]

export const WORKS_INFORMATION = [
  {
    name: '💰 Huei & Bei Money – 記帳',
    logo: require('../assets/works/huei-bei-money.png'),
    view: 'https://huei-bei-money.vercel.app',
    skills: [
      '⚡ Vite：超高速開發環境與高效打包',
      '📱 PWA（Progressive Web App）：支援離線模式與行動端優化，提升用戶體驗',
      '🔥 Firebase：提供即時資料庫、身份驗證，簡化後端管理',
      '📝 React Hook Form：處理表單驗證與管理，提升使用者輸入體驗',
    ],
  },

  {
    name: '💍 Huei & Bei Money – 婚禮',
    logo: require('../assets/works/huei-bei-wedding.png'),
    view: 'https://chenhuei.github.io/huei-bei-wedding',
    skills: [
      '📱 PWA（Progressive Web App）：(同上)',
      '⚡ 高效網站：網站效能評分 90+',
      '🎬 互動動畫：整合 GSAP 與 ScrollMagic，打造流暢的滾動動畫，提升視覺吸引力',
      '💬 即時彈幕：透過 LINE Bot 與 Server-Sent Events，讓賓客即時傳送祝福，增強互動體驗',
    ],
  },
  // {
  //   name: '豪華郵輪集團 (網站關閉中...)',
  //   logo: require('../assets/works/genting.png'),
  //   view: 'http://genting-cruise-www-sit.cloud-softwares.com/enUS',
  //   skills: ['Nuxt.js', 'RWD', 'WebView'],
  // },
  // {
  //   name: '台塑電子商務平台',
  //   description: '線上交易平台',
  //   logo: require('../assets/works/plastic.png'),
  //   view: 'https://formosa-pepp-web-sit.cloud-interactive.com/login',
  //   skills: ['Nuxt.js', '與台塑後端討論及介接 API', 'google sheet API', 'RWD'],
  // },
  // {
  //   name: 'Scan2Pay',
  //   description: '串接線上支付方式',
  //   logo: require('../assets/works/scan2pay.png'),
  //   view: 'https://dev.intella.co/intella#forward',
  //   skills: ['串接行動支付 (台灣Pay、LuckyPAY、ezPay...)', '前端介面優化'],
  // },
  // {
  //   name: '漢堡王',
  //   description: '平板(iPad)點餐系統',
  //   logo: require('../assets/works/burger-king.png'),
  //   view: 'https://dev.intella.co/order-system/#/',
  //   skills: ['前後端分離設計', 'Vuex、Vuetify']
  // }
  // {
  //   name: 'Facebook Login',
  //   description: '串接 Facebook 登入 API 並取得登入者名稱及大頭貼',
  //   logo: require('../assets/works/facebook.gif'),
  //   view: 'https://s.codepen.io/chenhuei/debug/dEYxZQ/LDAmdPaEaWOr',
  //   skills: [
  //     '介接 Facebook Login API',
  //     '樣板練習 ( 以 Vue.js 和 SCSS 為核心 )'
  //   ]
  // },
  // {
  //   name: 'Game',
  //   description: '實作 JS 原型鍊',
  //   logo: require('../assets/works/game.gif'),
  //   code: 'https://codepen.io/chenhuei/pen/eapJVV',
  //   view: 'https://s.codepen.io/chenhuei/debug/eapJVV/yoMZEWVOVKmk',
  //   skills: [
  //     '以 Prototype 為基礎，搭配 jQuery 開發',
  //     '樣板練習 ( 以 Pug 和 Sass 為核心 )'
  //   ]
  // },
  // {
  //   name: '天氣盒子',
  //   description: '模擬天氣預報',
  //   logo: require('../assets/works/weather.gif'),
  //   code: 'https://codepen.io/chenhuei/pen/jobOKE',
  //   view: 'https://s.codepen.io/chenhuei/debug/jobOKE/NQMzYqyByEQk',
  //   skills: [
  //     '使用 SCSS 撰寫動畫特效',
  //     '製作 SVG'
  //   ]
  // }
]

export const FOOTER_ITEMS = [
  {
    url: 'https://www.facebook.com/aaa830714',
    isBrand: true,
    tag: 'facebook',
  },
  {
    url: 'https://line.me/ti/p/UGvZHai6ji',
    isBrand: true,
    tag: 'line',
  },
  {
    url: 'mailto:aaa830714@gmail.com',
    isBrand: false,
    tag: 'envelope',
  },
  {
    url: 'https://github.com/ChenHuei',
    isBrand: true,
    tag: 'github',
  },
]
