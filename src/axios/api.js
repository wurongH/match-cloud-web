import Vue from 'vue'
var api = {
  /* 公共接口 */
  common: {
    // 文件上传
    upload: '/fastdfs-boot/upload',
    //发送验证码
    sendVerifyCode: '/message-boot/message/sms/sendVerifyCode',
    /* 申请赛道 */
    applyTrack: '/match-boot/admin/track/applyTrack'
  },

  /* 首页 */
  home: {
    //获取云平台首页轮播图
    listSlideshow: '/match-boot/master/listSlideshow',
    //分页获取主赛道(首页用)
    pageMasterTrack: '/match-boot/master/pageMasterTrack',
    //分页获取指导资料列表
    pageDatum: '/match-boot/master/pageDatum'
  },

  /* 申请平台专家 */
  applyPlatformTutors: '/match-boot/admin/demand/applyPlatformTutors',

  /* 赛事资讯 */
  news: {
    //分页获取新闻列表
    pageNews: '/match-boot/master/pageNews',
    getNewsDetail: '/match-boot/index/getNewsDetail',
  },
  guide: {
    //分页获取指导资料列表
    pageDatum: '/match-boot/master/pageDatum',
  }
}
Vue.prototype.$api = api;

export default api;
