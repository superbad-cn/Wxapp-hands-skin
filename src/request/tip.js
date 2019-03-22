/**
 * 提示与加载工具类
 * @module tips
 */
const { $Toast } = require('@/components/iview/base/index');
const { $Message } = require('@/components/iview/base/index');

export default class tips {

  /**
   * 轻提示
   * @method show
   * @param {msg} 提示内容
   * @param {type} 提示类型（success,warning,error,loading）,类型为空时，只显示文本
   */
  static show(msg,type) {
    $Toast({
      content: msg,
      type: type
    });
  }

  /**
   * 自定义提示（使用内部图标）
   * @method icon
   * @param {msg} 提示内容
   * @param {icon} 提示图标，地址：https://weapp.iviewui.com/components/icon
   */
  static icon(msg,icon) {
    $Toast({
      content: msg,
      icon: icon
    });
  }

  /**
   * 自定义提示（使用自定义图片）
   * @method img
   * @param {msg} 提示内容
   * @param {img} 自定义图片路径
   */
  static img(msg,img) {
    $Toast({
      content: msg,
      img: img
    });
  }
  /**
   * 自定义提示（使用自定义时间）
   * @method img
   * @param {msg} 提示内容
   * @param {time} 显示时长，默认5S
   */
  static time (msg,time) {
    if(!time){
      time = 5000
    }
    $Toast({
      content: msg,
      icon: 'prompt',
      duration: 0,
      mask: false
    });
    setTimeout(() => {
        $Toast.hide();
    }, time);
  }
  /**
   * 自定义全局提示
   * @method img
   * @param {msg} 提示内容
   * @param {type} 提示类型（success,warning,error,loading）,类型为空时，只显示文本
   * @param {time} 显示时长，默认5S
   */
  static message (msg, type, time) {
    if(!time){
      time = 5
    }
    $Message({
      content: msg,
      type: type,
      duration: time
    });
  }
  /**
  * 弹出加载提示
  */
  static loading(title = "加载中") {
    if (tips.isLoading) {
      return;
    }
    tips.isLoading = true;
    wx.showLoading({
      title: title,
      mask: true
    });
  }
  /**
   * 加载完毕
   */
  static loaded() {
    if (tips.isLoading) {
      tips.isLoading = false;
      wx.hideLoading();
    }
  }
}
