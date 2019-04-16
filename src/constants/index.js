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

export const SKILL_INFORMATION = [
  {
    name: 'Vue.js',
    logo: require('../assets/logo.png'),
    list: [
      {
        name: 'Life Cycle',
        description: '區分在建立 Vue 實例時，各 Hook 的功用'
      },
      {
        name: 'Components',
        description: '適時切分避免重複、Props 傳遞參數並加入檢查、Emit 相關事件資料'
      },
      {
        name: 'Vue Router',
        description: '靜態或動態分配路由、傳遞參數、區分 History 和 Hash Mode'
      },
      {
        name: 'VueX',
        description: '區分 commit 修改 state 和 action 通常負責非同步處理'
      },
      {
        name: '相關 UI 套件',
        description: 'Element UI'
      }
    ]
  },
  {
    name: 'Tools',
    logo: require('../assets/tools.svg'),
    list: [
      {
        name: 'SASS / SCSS',
        description: '適時使用變數和 mixin'
      },
      {
        name: 'Pug',
        description: '正確使用縮排代替繁瑣的 Html Tag '
      }
    ]
  },
  {
    name: 'Other',
    logo: require('../assets/skill.svg'),
    list: [
      {
        name: 'RESTful API',
        description: '使用 Fetch 或 Axios 正確接收和傳遞 API'
      },
      {
        name: 'Async',
        description: '了解非同步使用時機並能用 Promise 處理 '
      },
      {
        name: 'Git',
        description: '正確版本控制專案'
      },
      {
        name: 'RWD',
        description: '在不同裝置時提供適合的使用者體驗'
      }
    ]
  }
]
