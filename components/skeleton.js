// components/skeleton.js
// import SystemInfo from '../libs/getSystemInfo.js'
import { systemInfo } from '../utils/utils'

Component({
  properties: {
    // 唯一标识id 必传
    uniqueId: {
      type: String,
      value: ''
    },
    // 显示到上下几屏
    showNum: {
      type: Number,
      value: 2
    }
  },
  data: {
    height: 0, // 占位高度
    showSlot: true //控制是否xuanr
  },

  attached() {
    this.IntersectionObserver = null
  },

  detached() {
    if (this.IntersectionObserver) {
      this.IntersectionObserver.disconnect()
      this.IntersectionObserver = null
    }
  },
  ready() {
    // 修改了监听是否显示内容的方法，改为前后showNum屏高度渲染
    // 监听进入屏幕的范围relativeToViewport({top: xxx, bottom: xxx})
    const { windowHeight = 667 } = systemInfo()
    const showNum = this.data.showNum //超过屏幕的数量，目前这个设置是上下2屏
    try {
      this.IntersectionObserver = this.createIntersectionObserver()
      this.IntersectionObserver.relativeToViewport({
        top: showNum * windowHeight,
        bottom: showNum * windowHeight
      }).observe(`#list-item-${this.data.uniqueId}`, res => {
        let { intersectionRatio } = res
        if (intersectionRatio === 0) {
          console.log('【卸载】#', this.data.uniqueId, '超过预定范围，从页面卸载')
          this.setData({
            showSlot: false
          })
        } else {
          console.log('【进入】#', this.data.uniqueId, '达到预定范围，渲染进页面')
          this.setData({
            showSlot: true,
            height: res.boundingClientRect.height
          })
        }
      })
    } catch (error) {
      console.log(error)
    }
  },
  methods: {}
})
