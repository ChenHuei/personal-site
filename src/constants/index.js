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
    description: '目前擔任 香港商英特拉金融科技 前端工程師 (2018/07/09 - Now)。這段時間除了使用 JQuery 維護公司舊有網站並開發新功能之外，更多的時候在使用 Vue.js 配合 Vuex、Scss 等工具，串接 RESTful API 開發新的專案(如：漢堡王、佛光山 ...)。以下將更詳細地說明過往經歷，非常感謝您抽空觀看，請多多指教，謝謝！',
    phone: '0986-776-379',
    email: 'aaa830714@gmail.com'
  }
]

export const RESUME_INFORMATION = [
  {
    company: '私立淡江大學',
    jobs: '資管系',
    year: '2012/09 ~ 2016/06',
    list: [
      '系學會會長',
      '國際志工'
    ]
  },
  {
    company: 'IOH',
    jobs: '活動企劃',
    year: '2017/06 ~ 2018/04',
    list: [
      '全台校園演講'
    ]
  },
  {
    company: '英特拉金融科技',
    jobs: '前端工程師',
    year: '2018/07 ~ Now',
    list: [
      '使用 Vue.js'
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
    name: '支付頁面',
    description: '串接各個支付，提供買方',
    logo: require('../assets/works/01.png'),
    skills: [
      'JQuery'
    ]
  },
  {
    name: '點餐系統',
    description: 'iPad',
    logo: require('../assets/works/02.png'),
    skills: [
      'Vue.js', 'VueX', 'SCSS', 'Vuetify'
    ]
  },
  {
    name: 'Theater',
    description: 'Theater',
    logo: require('../assets/works/03.gif'),
    skills: [
      'Vue.js', 'SCSS'
    ]
  },
  {
    name: 'Game',
    description: 'Game',
    logo: require('../assets/works/04.gif'),
    skills: [
      'Javascript'
    ]
  },
  {
    name: '天氣盒子',
    description: '天氣盒子',
    logo: require('../assets/works/05.gif'),
    skills: [
      'Pug', 'SASS', 'Javascript'
    ]
  },
  {
    name: '手機',
    description: '手機',
    logo: require('../assets/works/06.gif'),
    skills: [
      'JQuery'
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
