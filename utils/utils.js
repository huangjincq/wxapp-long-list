/**
 * 惰性函数 获取系统信息
 */
export let systemInfo = function() {
  const res = wx.getSystemInfoSync()
  systemInfo = function() {
    return res
  }
  return systemInfo()
}