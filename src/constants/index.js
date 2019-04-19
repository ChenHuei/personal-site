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
    description: '目前擔任 香港商英特拉金融科技 前端工程師 (2018/07/09 - Now)。這段時間除了使用 JQuery 維護公司舊有網站並開發新功能之外，更多心力投入在使用 Vue.js 配合 Vuex、Scss 等工具，串接 RESTful API 開發新的專案(如：漢堡王、佛光山 ...)。以下將更詳細地說明過往經歷，非常感謝您抽空觀看，請多多指教，謝謝！',
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
        title: '佛光山購物車、串接支付',
        description: 'Vue.js、Cookies'
      },
      {
        title: '特店平台增加報表功能',
        description: 'JQuery'
      },
      {
        title: '漢堡王點餐系統',
        description: 'Vue.js、Vuex、SCSS'
      },
      {
        title: '發票管理平台',
        description: 'Vue.js'
      }
    ]
  },
  {
    company: 'IOH',
    jobs: '活動企劃',
    year: '2017/06 ~ 2018/04',
    list: [
      {
        title: '全台校園演講'
      }
    ]
  },
  {
    company: '私立淡江大學',
    jobs: '資管系',
    year: '2012/09 ~ 2016/06',
    list: [
      {
        title: '系學會會長'
      },
      {
        title: '國際志工'
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
    description: '串接各種線上支付提供店家(買方)',
    logo: require('../assets/works/01.png'),
    view: 'https://dev.intella.co/intella#forward',
    skills: [
      'JQuery', 'HTML', 'CSS'
    ]
  },
  {
    name: '漢堡王',
    description: '串接支付的平板(iPad)點餐系統',
    logo: require('../assets/works/02.png'),
    view: 'https://dev.intella.co/order-system/#/',
    skills: [
      'Vue.js', 'Vuex', 'Vuetify', 'SCSS'
    ]
  },
  {
    name: 'Vue.js Theater',
    description: '以滾輪的方式移動畫面，並製作收入購物車時的動畫',
    logo: require('../assets/works/03.gif'),
    code: 'https://codepen.io/zhenhuei/pen/aQBOqK',
    view: 'https://s.codepen.io/zhenhuei/debug/aQBOqK/NQMzYqmLJJjk',
    skills: [
      'Vue.js', 'SCSS'
    ]
  },
  {
    name: 'Game',
    description: '以 Prototype 為基礎開發',
    logo: require('../assets/works/04.gif'),
    code: 'https://codepen.io/zhenhuei/pen/ZqgaQq',
    view: 'https://s.codepen.io/zhenhuei/debug/ZqgaQq/LDAmdPzjGjbr',
    skills: [
      'Javascript'
    ]
  },
  {
    name: '天氣盒子',
    description: '以純 SCSS 的方式模擬點擊，加入動畫並嘗試製作 svg ',
    logo: require('../assets/works/05.gif'),
    code: 'https://codepen.io/zhenhuei/pen/qMMgQX',
    view: 'https://s.codepen.io/zhenhuei/debug/qMMgQX/PNkvYGVazXvA',
    skills: [
      'SCSS', 'Pug', 'SVG'
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
