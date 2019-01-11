// components/episode/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: String,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    year: 0,
    month: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  attached() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    this.setData({
      year,
      month:this.data.months[month]
    })
  },
  detached() {
    // 在组件实例被从页面节点树移除时执行
  },
})