export const HEADER_ITEMS = [
  {
    id: 0,
    label: 'About'
  },
  {
    id: 1,
    label: 'Resume'
  },
  {
    id: 2,
    label: 'Works'
  }
]

export const ABOUT_INFORMATION = [
  {
    name: '陳振輝',
    jobs: '前端工程師 (Front-End Engineer)',
    description: '擁有兩年前端開發經驗，熟悉 Vue.js、Nuxt.js。追求簡潔易讀的程式碼，遵守 DRY 的開發概念建立易讀、高擴充性的 Component。重視團隊的合作與溝通，正在尋找一個能夠讓我穩定發揮並且不斷成長的環境。以下將更詳細說明過往經歷，非常感謝您抽空觀看，請多多指教，謝謝！',
    phone: '0986-776-379',
    email: 'aaa830714@gmail.com'
  }
]

export const RESUME_INFORMATION = [
  {
    company: '雲端互動 (Cloud Interactive)',
    jobs: '前端工程師',
    year: '2019/09 ~ now',
    list: [
      {
        title: '豪華郵輪集團 (Resorts World Genting)',
        description: '使用 Nuxt.js 處理 SSR，以及搭配 google sheet api 管理多國語系'
      },
      {
        title: '台塑電子商務平台',
        description: '串接台塑 API 建構 RWD 的線上交易平台'
      },
      {
        title: '安麗簡訊平台',
        description: '使用 Typescript 及 Decorator 建構發送簡訊的前後台系統'
      }
    ]
  },
  {
    company: '英特拉金融科技',
    jobs: '前端工程師',
    year: '2018/07 ~ 2019/05',
    list: [
      {
        title: '漢堡王點餐系統',
        description: '透過 API 串接線上和線下交易(悠遊卡)，開發線上點餐系統'
      },
      {
        title: '發票管理平台',
        description: '與行政人員討論需求、規劃流程和介接藍新金流 API 開發線上發票平台'
      },
      {
        title: '特店平台',
        description: '沿用既有技術 jQuery 進行維運和開發'
      }
    ]
  },
  {
    company: 'IOH',
    jobs: '活動企劃',
    year: '2017/06 ~ 2018/04',
    list: [
      {
        title: '校系影音分享 (Link)',
        description: '分享大學所學和課外活動的經驗及反思',
        link: 'https://ioh.tw/talks/%E6%B7%A1%E6%B1%9F%E8%B3%87%E7%AE%A1%E7%B3%BB-%E9%99%B3%E6%8C%AF%E8%BC%9D-zhen-huei-chen-tw-study-tku-bde'
      },
      {
        title: '全台校園演講',
        description: '曾至全台 19 所不同的高中職分享大學經歷'
      }
    ]
  },
  {
    company: '私立淡江大學',
    jobs: '資管系',
    year: '2012/09 ~ 2016/06',
    list: [
      {
        title: '系學會會長',
        description: '與 13 名幹部和近 30 名的學弟妹，一同討論及舉辦約 20 場的系內外活動'
      },
      {
        title: '國際志工 (Link)',
        description: '於大學的寒暑假，遠赴至柬埔寨和泰國進行電腦和中文的教學計畫',
        link: 'https://www.youtube.com/watch?v=GiId2fo-GUI'
      }
    ]
  }
]

export const LINKS_ITEMS = [
  {
    name: 'Codepen',
    link: 'https://codepen.io/chenhuei/'
  },
  {
    name: 'GitHub',
    link: 'https://github.com/ChenHuei'
  }
]

export const WORKS_INFORMATION = [
  {
    name: '豪華郵輪集團 (網站關閉中...)',
    description: '郵輪航線訂票平台系統 (前後台)',
    logo: require('../assets/works/genting.jpeg'),
    view: 'http://genting-cruise-www-sit.cloud-softwares.com/enUS',
    skills: [
      '使用 Nuxt.js 處理 SSR',
      'google sheet api 管理多國語系',
      'RWD'
    ]
  },
  {
    name: '台塑電子商務平台',
    description: '線上交易平台',
    logo: require('../assets/works/plastic.png'),
    view: 'https://formosa-pepp-web-sit.cloud-interactive.com/login',
    skills: [
      '介接台塑 API',
      'google sheet api 管理多國語系',
      'RWD'
    ]
  },
  {
    name: 'Scan2Pay',
    description: '串接線上支付方式',
    logo: require('../assets/works/scan2pay.png'),
    view: 'https://dev.intella.co/intella#forward',
    skills: [
      '串接行動支付 (台灣Pay、LuckyPAY、ezPay...)',
      '前端介面優化'
    ]
  },
  {
    name: '漢堡王',
    description: '平板(iPad)點餐系統',
    logo: require('../assets/works/burger-king.png'),
    view: 'https://dev.intella.co/order-system/#/',
    skills: [
      '前後端分離設計',
      'Vuex、Vuetify'
    ]
  },
  {
    name: 'Ass Photography',
    description: '個人工作室形象網站',
    logo: require('../assets/works/ass-photography.png'),
    view: 'https://chenhuei.github.io/AssPhotography-html/',
    skills: [
      '串接 Firebase database',
      '串接 Google 會員登入',
      '規劃響應式網頁版型'
    ]
  }
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
    tag: 'facebook'
  },
  {
    url: 'https://line.me/ti/p/UGvZHai6ji',
    isBrand: true,
    tag: 'line'
  },
  {
    url: 'mailto:aaa830714@gmail.com',
    isBrand: false,
    tag: 'envelope'
  },
  {
    url: 'https://github.com/ChenHuei',
    isBrand: true,
    tag: 'github'
  }
]
