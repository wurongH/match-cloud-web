<template>
  <div class="Home">
    <div class="swiper-container banner-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in bannerData">
          <img :src="item.imageUrl">
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination swiper-pagination-white"></div>
      </div>
      <!-- 缩略图 -->
      <div class="abbreviation" v-if="0">
        <div class="swiper-container abbreviation-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in bannerData" @click="slideTo(index)">
              <div :class="['swiper-slide-view', { active: abbreviationSwiperActive == index }]">
                <img :src="item.imageUrl">
              </div>
            </div>
          </div>
        </div>
        <p class="prev swiper-button" @click="abbreviationSwiper.slidePrev()"></p>
        <p class="next swiper-button" @click="abbreviationSwiper.slideNext()"></p>
      </div>
    </div>
    <div class="container">
      <div class="module clear">
        <div class="open-macth">
          <div class="title-view">
            <span>已开通赛事</span>
            <!-- <router-link class="more" :to="{ path: '/match' }">更多</router-link> -->
          </div>
          <!-- <div class="filter-view">
            <div class="item clear">
              <span>赛事级别:</span>
              <div class="clear">
                <router-link class="more" :to="{ path: '/match', query: { level: '' } }">全部</router-link>
                <router-link class="more" :to="{ path: '/match', query: { level: '1' } }">国家级</router-link>
                <router-link class="more" :to="{ path: '/match', query: { level: '2' } }">省级</router-link>
                <router-link class="more" :to="{ path: '/match', query: { level: '3' } }">市级</router-link>
                <router-link class="more" :to="{ path: '/match', query: { level: '4' } }">校级</router-link>
              </div>
            </div>
            <div class="item clear">
              <span>赛事类别:</span>
              <div class="clear">
                <router-link class="more" :to="{ path: '/match', query: { type: '' } }">全部</router-link>
                <router-link class="more" :to="{ path: '/match', query: { type: '1' } }">双创类</router-link>
                <router-link class="more" :to="{ path: '/match', query: { type: '2' } }">工业设计类</router-link>
                <router-link class="more" :to="{ path: '/match', query: { type: '3' } }">工业设计类</router-link>
              </div>
            </div>
          </div> -->
          <ul class="list">
            <li v-for="(item, index) in openMatch" :key="index">
              <i class="i-img lazyimg" :style="`background-image: url('${item.logoUrl}')`"></i>
              <div class="r">
                <p class="name">{{item.trackName}}</p>
                <p class="level">赛事级别: {{item.levelName}}</p>
                <p class="unit oe">主办单位: {{item.belong}}</p>
                <a type="button" :href="item.website" target="_blank" class="link">立即前往</a>
              </div>
            </li>
          </ul>
        </div>
        <div class="right">
          <div class="title-view">
            <span>热门校赛</span>
            <!-- <router-link class="more" :to="{ path: '/match' }">更多</router-link> -->
          </div>
          <div class="list school-match">
            <a :href="item.website" target="_blank" v-for="(item, index) in schoolMatchList"><span class="oe">{{item.trackName}}</span></a>
          </div>
          <div class="title-view">
            <span>赛事资讯</span>
            <router-link class="more" :to="{ path: '/news' }">更多</router-link>
          </div>
          <div class="list advisory">
            <router-link :to="{ name: 'newsDetails', params: { id: item.id } }" v-for="(item, index) in newsList" :key="index">
              <span class="oe">{{item.title}}</span>
              <time>{{item.publishDateStr}}</time>
            </router-link>
          </div>
        </div>
      </div>
      <!-- 赛事指导 -->
      <div class="match-guide">
        <div class="title-view">
          <span>赛事指导</span>
          <ul class="match-guide-nav">
            <li v-for="(item, index) in matchGuideNav" @click="matchGuideNavFn(item)" :key="index" :class="{ active: item.active }">{{item.name}}</li>
          </ul>
          <router-link class="more" :to="{ name: 'guideList' }">更多</router-link>
        </div>
        <div class="data-view">
          <ul class="clear">
            <li :class="[ item.fileFormat, 'oe']"
              v-for="(item, index) in matchGuide" :title="item.fileName" :key="index">
              {{item.fileName}}
              <a :href="item.imageUrl"></a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 赛事风采 -->
      <!-- <div class="match-style">
        <div class="title-view">
          <span>赛事风采</span>
          <router-link class="more" :to="{ path: '/' }">更多</router-link>
        </div>
        <ul class="clear">
          <li>
            <div>
              <div class="content-view">
                <i class="i-img lazyimg" :style="`background-image: url('${url}')`"></i>
                <p class="oetow">定格青春——新型漆艺定格青春——新型漆艺传承纪念品设计定格青春——新型漆艺传承纪念品设计传承纪念品设计</p>
              </div>
            </div>
          </li>
        </ul>
      </div> -->
      <!-- 指导单位 -->
      <div class="guide-unit" v-if="0">
        <div class="title-view">
          <span>指导单位</span>
        </div>
        <div class="link clear">
          <a v-for="(item, index) in guideData" :key="index" href="javescript:void(0)">
            <i class="i-logo default-unit" :style="`background-image: url('${item.logo}')`"></i>
            <p class="oe">{{item.name}}</p>
          </a>
        </div>
      </div>
      <!-- 服务单位 -->
      <div class="service-unit" v-if="0">
        <div class="title-view">
          <span>服务单位</span>
        </div>
        <div class="link clear">
          <a href="javascript:void(0)" v-for="(item, index) in serviceUnitData" :key="index">
            <i class="i-logo default-unit" :style="`background-image: url('${item.logo}')`"></i>
            <p class="oe">{{item.name}}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Swiper from 'swiper'
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  bannerData: Array<object> = [];
  bannerSwiper: any;
  abbreviationSwiper: any;
  abbreviationSwiperActive: number = 0;

  //已开通赛事
  openMatch: Array<object> = [];
  //校赛列表
  schoolMatchList: Array<object> = [];
  //新聞列表
  newsList: Array<object> = [];

  //赛事指导数据
  matchGuide: Array<object> = [];
  matchGuideNav: Array<any> = [
    // { id: 'POLICY_FILE', active: true, name: '指导文件' },
    { id: 'MATCH_TEMPLATE', active: true, name: '赛事模板' },
    // { id: 'WIN_LIST', active: false, name: '获奖名单' }
  ];
  moduleCode: string = 'MATCH_TEMPLATE';

  //指导单位数据
  guideData: Array<object> = [
    { logo: require('./images/guide2.png'), name: '中华职业教育社' },
    { logo: require('./images/guide2.png'), name: '福建省中华职业教育社' },
    { logo: require('./images/guide1.png'), name: '福建省教育厅' }
  ];

  //服务单位
  serviceUnitData: Array<object> = [
    { logo: require('./images/unit1.png'), name: '福建安溪陈利职业中专' },
    { logo: require('./images/unit2.png'), name: '福建工程学院' },
    { logo: require('./images/unit3.png'), name: '福建信息职业技术学院' },
    { logo: require('./images/unit4.png'), name: '福建中医药大学' },
    { logo: require('./images/unit5.png'), name: '泉州轻工职业学院' },
    { logo: require('./images/unit6.png'), name: '三明学院' }
  ];

  created() {
    this.getPageMasterTrack(1, 'openMatch');
    this.getPageMasterTrack(0, 'schoolMatchList');
    this.getPageDatum();
    this.getNews();
  }

  mounted() {
    this.getListSlideshow();
    window.onresize = (): void =>{
      if(this.$route.name == 'home'){
        this.init();
      }
    }
  }

  init(){
    var self = this;
    // this.abbreviationSwiper = new Swiper('.abbreviation-swiper', {
    //   direction : 'vertical',
    //   speed: 500,
    //   slidesPerView: 'auto',
    //   spaceBetween: 8,
    // });
    this.bannerSwiper = new Swiper('.banner-swiper', {
      loop: true,
      autoplay: true,
      speed: 500,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      on: {
        transitionEnd(this: Swiper){
          // self.abbreviationSwiperActive = this.realIndex
          // self.abbreviationSwiper.slideTo(this.realIndex, 500, false);
        },
      },
    });
  }
  matchGuideNavFn(item: any){
    if(item.active){
      return;
    }
    this.matchGuideNav.map(v =>{
      v.active = v.id == item.id;
    })
    this.moduleCode = item.id;
    this.getPageDatum();
  }
  //获取轮播图
  async getListSlideshow(){
    const d = await this.post(this.$api.home.listSlideshow, {
      moduleCode: 'TOP_SLIDESHOW'
    })
    if(d.code === 0){
      this.bannerData = d.data;
      this.$nextTick(() : void =>{
        this.init();
      })
    }
  }
  //获取新闻列表
  async getNews(){
    const d = await this.post(this.$api.news.pageNews, {
      fuzzySearch: '',
      pageNum: 1,
      pageSize: 15,
      labelName: '',
      orderByStr: ''
    })
    if(d.code === 0){
      this.newsList = d.data.data;
    }
  }
  //分页获取主赛道
  async getPageMasterTrack(officialFlag: number, dataName: 'schoolMatchList' | 'openMatch'){
    const d = await this.post(this.$api.home.pageMasterTrack, {
      officialFlag,
      pageNum: 1,
      pageSize: 6,
    })
    if(d.code === 0){
      this[dataName] = d.data.data
    }
  }
  //获取赛事指导数据
  async getPageDatum(){
    const d = await this.post(this.$api.home.pageDatum, {
      moduleCode: this.moduleCode,
      fuzzySearch: '',
      pageNum: 1,
      pageSize: 10,
    })
    if(d.code === 0){
      this.matchGuide = d.data.data;
    }
  }
  slideTo(index: number){
    this.abbreviationSwiperActive = index;
    this.bannerSwiper.slideToLoop(index, 500, false);
    this.abbreviationSwiper.slideTo(index, 500, false);
  }
}
</script>

<style lang="scss" scoped>
  @import './style';
</style>
