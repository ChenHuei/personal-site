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
    title: 'Education',
    list: [
      {
        en: 'Information Of Management',
        zn: '私立淡江大學',
        yearStart: 2012,
        yearEnd: 2016,
        description: '應用大學四年所學的 C#、Java 和 OOP，實作 APP「治腎先師」協助台北榮總醫院腎臟科的病人，改良以往紙本紀錄全面電子化，並在校內評選優等以及參與校外比賽的資格。'
      }
    ]
  },
  {
    title: 'Experience',
    list: [
      {
        en: 'Extracurricular Activities',
        zn: '資管系學會、國際志工',
        yearStart: 2012,
        yearEnd: 2016,
        description: '除了在過程中培養許多團隊合作、表達能力、負責任和高抗壓等的軟實力之外，更於擔任會長及國際志工的過程中，開拓眼界並逐漸堆疊出自己的價值觀。'
      },
      {
        en: 'Innovation Open House',
        zn: '活動企劃專員',
        yearStart: 2017,
        yearEnd: 2018,
        description: '負責統整公司的線下活動，包括規劃公司內部的活動流程、訪談老師和學生、與學校討論教學合作以及超過 20 場至全台灣高中職學校上台分享的經驗等。'
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
    logo: require('../assets/works/01.png'),
    skills: [
      'Vue.js', 'VueX', 'SCSS', 'Vuetify'
    ]
  },
  {
    name: 'Theater',
    description: 'Theater',
    logo: require('../assets/works/01.png'),
    skills: [
      'Vue.js', 'SCSS'
    ]
  },
  {
    name: 'Game',
    description: 'Game',
    logo: require('../assets/works/01.png'),
    skills: [
      'Javascript'
    ]
  },
  {
    name: '手機',
    description: '手機',
    logo: require('../assets/works/01.png'),
    skills: [
      'JQuery'
    ]
  },
  {
    name: '天氣盒子',
    description: '天氣盒子',
    logo: require('../assets/works/01.png'),
    skills: [
      'Pug', 'SASS', 'Javascript'
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
