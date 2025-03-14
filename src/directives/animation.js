import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  inserted(el) {
    const index = parseInt(el.dataset.index, 10) || 0
    const animationType = el.dataset.animate // 取得 data-animate 屬性

    let x = 0
    let y = 0
    if (animationType === 'top') {
      y = -50 // 從上往下
    } else if (animationType === 'left') {
      x = -50 // 從左往右
    } else if (animationType === 'right') {
      x = 50 // 從右往左
    } else {
      // 預設交錯動畫
      x = index % 2 === 0 ? -50 : 50
    }

    gsap.from(el, {
      opacity: 0,
      x,
      y,
      duration: 0.8,
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })
  },
}
