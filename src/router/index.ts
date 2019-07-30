import Vue from 'vue'
import Router from 'vue-router'
import store from '../store';
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

//二级跳转通用视图
const routerView = () => import('components/router-view.vue'),

//首页
Home = () => import('pages/home/index.vue'),

//赛事列表
Match = () => import('pages/match/index.vue'),

//赛事资讯
News = () => import('pages/news/index.vue'),
//赛事资讯详情
NewsDetails = () => import('pages/news/details.vue'),

//赛事指导
Guide = () => import('pages/guide/index.vue'),
//赛事指导列表
GuideList = () => import('pages/guide/list.vue'),

//关于我们
About = () => import('pages/about/index.vue'),

//401
Page401 = () => import('pages/errorPage/401.vue'),
//404
Page404 = () => import('pages/errorPage/404.vue');



Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', name: 'home', component: Home, meta: { bodyClassName: 'white', title: '首页' } },

    { path: '/match', name: 'match', component: Match, meta: { bodyClassName: 'gray', title: '赛事列表' } },


    {
      path: '/news', component: routerView,
      children: [
        { path: '/', name: 'news', component: News, meta: { bodyClassName: 'white', title: '赛事资讯' } },
        { path: 'details/:id', name: 'newsDetails', component: NewsDetails, meta: { bodyClassName: 'white', title: '新闻详情' } },
      ]
    },

    {
      path: '/guide', component: routerView,
      children: [
        { path: '/', name: 'guide', component: Guide, meta: { bodyClassName: 'gray', title: '赛事指导' } },
        { path: 'list', name: 'guideList', component: GuideList, meta: { bodyClassName: 'white', title: '赛事指导' } },
      ]
    },

    { path: '/about', name: 'about', component: About, meta: { bodyClassName: 'white', title: '关于我们' } },

    { path: '401', name: 'page401', component: Page401, meta: { bodyClassName: 'white', title: '401' } },
    { path: '404', name: 'page404', component: Page404, meta: { bodyClassName: 'white', title: '404' } },
  ]
})
router.beforeEach((to, from, next) => {
  document.body.className = to.meta.bodyClassName;
  if(!to.name){
    next({ name: 'page404' });
    return;
  }
  next();
})

router.afterEach(function (to) {
})

export default router;
