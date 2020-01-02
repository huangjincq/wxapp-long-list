const app = getApp()

Page({
  data: {
    list: []
  },
  onLoad: function() {
    this.loadmore()
  },
  loadmore: function() {
    let newList = this.getList(10)
    this.setData({ list: [...this.data.list, ...newList] })
  },
  /**
   * 每次加载num条数据
   */
  getList(num) {
    let list = []
    for (let i = 0; i < num; i++) {
      list.push({
        height: this.getRadomHeight(),
        id: this.randomString(8)
      })
    }
    return list
  },
  /**
   * 生成随机(100, 400)高度
   */
  getRadomHeight() {
    return parseInt(Math.random() * 100 + 300)
  },
  // 生成随机字符串
  randomString(len) {
    len = len || 32
    var $chars = 'abcdefhijkmnprstwxyz2345678' /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    var maxPos = $chars.length
    var pwd = ''
    for (var i = 0; i < len; i++) {
      pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return pwd
  }
})
