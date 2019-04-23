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
    jobs: '前端工程師 (Front-End)',
    description: '目前擔任 英特拉金融科技 前端工程師 (2018/07/09 - Now)。這段時間除了使用 JQuery 維護公司既有網站並開發新功能之外，也在新的專案中導入 Vue.js、Vuex、Scss 等工具，並和後端討論、串接 RESTful API 開發新的專案(如：漢堡王、佛光山 ...)。以下將更詳細說明過往經歷，非常感謝您抽空觀看，請多多指教，謝謝！',
    phone: '0986-776-379',
    email: 'aaa830714@gmail.com'
  }
]

export const RESUME_INFORMATION = [
  {
    company: '英特拉金融科技',
    jobs: '前端工程師',
    year: '2018/07 ~ Now',
    list: [
      {
        title: '佛光山購物車',
        description: '根據設計稿製作頁面，並透過 cookie 將購物資訊帶到公司既有的支付平台進行交易',
        skill: 'Vue.js、Cookies'
      },
      {
        title: '特店平台新增報表功能',
        description: '沿用專案既有技術 JQuery 串接 API 新增下載 Excel 的功能',
        skill: 'JQuery'
      },
      {
        title: '漢堡王點餐系統',
        description: '與業務及設計師討論使用者故事、規劃流程，並透過 API 串接線上和線下交易(悠遊卡)',
        skill: 'Vue.js、Vuex、SCSS'
      },
      {
        title: '發票管理平台',
        description: '與行政人員討論需求、規劃流程並串接 API 開發發票相關作業的線上平台',
        skill: 'Vue.js'
      }
    ]
  },
  {
    company: 'IOH',
    jobs: '活動企劃',
    year: '2017/06 ~ 2018/04',
    list: [
      {
        title: '校系影音分享',
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
        title: '國際志工',
        description: '於大學的寒暑假，遠赴至柬埔寨和泰國進行電腦和中文的教學計畫'
      }
    ]
  }
]

export const LINKS_ITEMS = [
  {
    name: 'Codepen',
    link: 'https://codepen.io/zhenhuei/'
  },
  {
    name: 'GitHub',
    link: 'https://github.com/ChenHuei'
  }
]

export const SKILL_INFORMATION = [
  {
    name: 'Javascript',
    list: [
      {
        name: 'Vue.js'
      },
      {
        name: 'JQuery'
      },
      {
        name: 'ES6'
      },
      {
        name: 'RESTful API 串接'
      }
    ]
  },
  {
    name: 'Tools',
    list: [
      {
        name: 'Pug'
      },
      {
        name: 'SASS / SCSS'
      },
      {
        name: 'RWD'
      },
      {
        name: 'Git'
      }
    ]
  }
]

export const WORKS_INFORMATION = [
  {
    name: 'Scan2Pay',
    description: '串接線上支付方式',
    logo: require('../assets/works/01.png'),
    view: 'https://dev.intella.co/intella#forward',
    skills: [
      'JQuery', 'HTML', 'CSS'
    ]
  },
  {
    name: '漢堡王',
    description: '平板(iPad)點餐系統',
    logo: require('../assets/works/02.png'),
    view: 'https://dev.intella.co/order-system/#/',
    skills: [
      'Vue.js', 'Vuex', 'Vuetify', 'SCSS'
    ]
  },
  {
    name: 'Vue.js Theater',
    description: '以滾動的方式移動畫面、製作收入購物車的動畫',
    logo: require('../assets/works/03.gif'),
    code: 'https://codepen.io/zhenhuei/pen/aQBOqK',
    view: 'https://s.codepen.io/zhenhuei/debug/aQBOqK/NQMzYqmLJJjk',
    skills: [
      'Vue.js', 'SCSS'
    ]
  },
  {
    name: 'Game',
    description: '以 Prototype 為基礎進行開發',
    logo: require('../assets/works/04.gif'),
    code: 'https://codepen.io/zhenhuei/pen/ZqgaQq',
    view: 'https://s.codepen.io/zhenhuei/debug/ZqgaQq/LDAmdPzjGjbr',
    skills: [
      'Javascript'
    ]
  },
  {
    name: '天氣盒子',
    description: '製作動畫、SVG',
    logo: require('../assets/works/05.gif'),
    code: 'https://codepen.io/zhenhuei/pen/qMMgQX',
    view: 'https://s.codepen.io/zhenhuei/debug/qMMgQX/PNkvYGVazXvA',
    skills: [
      'SCSS', 'PUG', 'SVG'
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
