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
    description: '先前任職於 英特拉金融科技 前端工程師 ( 2018/07/09 - 2019/05/31 )，除了負責使用 jQuery 維護公司既有網站並開發新功能之外，更在新的專案中導入 Vue.js、Vuex、SCSS 等工具，並和後端討論、串接 RESTful API 進行前後端分離式開發( 如：漢堡王、佛光山 ... )。以下將更詳細說明過往經歷，非常感謝您抽空觀看，請多多指教，謝謝！',
    phone: '0986-776-379',
    email: 'aaa830714@gmail.com'
  }
]

export const RESUME_INFORMATION = [
  {
    company: '英特拉金融科技',
    jobs: '前端工程師',
    year: '2018/07 ~ 2019/05',
    list: [
      {
        title: '佛光山購物車',
        description: '根據設計稿製作頁面，並透過 Cookies 將購物資訊帶到公司既有的支付平台進行交易',
        skill: 'Vue.js、Cookies'
      },
      {
        title: '漢堡王點餐系統',
        description: '與業務和設計師規劃流程、討論使用者故事，並透過 API 串接線上和線下交易(悠遊卡)',
        skill: 'Vue.js、Vuex、SCSS'
      },
      {
        title: '發票管理平台',
        description: '與行政人員討論需求、規劃流程並介接藍新金流的電子發票 API 開發線上平台',
        skill: 'Vue.js、Vuex、SCSS'
      },
      {
        title: '特店平台',
        description: '負責 ERP 系統前端介面，並沿用既有技術 jQuery 進行開發',
        skill: 'jQuery'
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
    name: 'Scan2Pay',
    description: '串接線上支付方式',
    logo: require('../assets/works/01.png'),
    view: 'https://dev.intella.co/intella#forward',
    skills: [
      '串接行動支付 ( 台灣Pay、LuckyPAY、ezPay... )',
      '前端介面優化'
    ]
  },
  {
    name: '漢堡王',
    description: '平板(iPad)點餐系統',
    logo: require('../assets/works/02.png'),
    view: 'https://dev.intella.co/order-system/#/',
    skills: [
      '前後端分離設計 ( Vue.js + RESTful API )',
      '使用 Vue 相關套件 ( Vuex、Vuetify )'
    ]
  },
  {
    name: 'Ass Photography',
    description: '個人工作室形象網站',
    logo: require('../assets/works/03.png'),
    view: 'https://chenhuei.github.io/assPhotography/',
    skills: [
      '串接 Firebase database',
      '串接 Google 會員登入',
      '規劃響應式網頁版型'
    ]
  },
  {
    name: 'Facebook Login',
    description: '串接 Facebook 登入 API 並取得登入者名稱及大頭貼',
    logo: require('../assets/works/04.gif'),
    view: 'https://s.codepen.io/chenhuei/debug/dEYxZQ/LDAmdPaEaWOr',
    skills: [
      '介接 Facebook Login API',
      '樣板練習 ( 以 Vue.js 和 SCSS 為核心 )'
    ]
  },
  {
    name: 'Game',
    description: '實作 JS 原型鍊',
    logo: require('../assets/works/05.gif'),
    code: 'https://codepen.io/chenhuei/pen/eapJVV',
    view: 'https://s.codepen.io/chenhuei/debug/eapJVV/yoMZEWVOVKmk',
    skills: [
      '以 Prototype 為基礎，搭配 jQuery 開發',
      '樣板練習 ( 以 Pug 和 Sass 為核心 )'
    ]
  },
  {
    name: '天氣盒子',
    description: '模擬天氣預報',
    logo: require('../assets/works/06.gif'),
    code: 'https://codepen.io/chenhuei/pen/jobOKE',
    view: 'https://s.codepen.io/chenhuei/debug/jobOKE/NQMzYqyByEQk',
    skills: [
      '使用 SCSS 撰寫動畫特效',
      '製作 SVG'
    ]
  }
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
