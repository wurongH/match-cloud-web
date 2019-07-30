<template>
  <div class="match">
    <v-banner :data="bannerData"></v-banner>
    <div class="container">
  		<!-- 面包屑 -->
      <div class="crumbs">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>赛事列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-input placeholder="请输入赛事关键词" suffix-icon="el-icon-search" size="small" class="search" v-model="input1">
        </el-input>
      </div>
      <div class="filter-view">
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
      </div>

      <div class="title-view">
        <span>主赛道</span>
      </div>
      <div class="data-view clear">
        <ul class="track-view">
          <li>
            <i class="i-img lazyimg" :style="`background-image: url('${url}')`"></i>
            <div class="r">
              <p class="name oe">中华职业教育创新创业大赛</p>
              <p class="unit">主办单位: 中华职业教育社</p>
            </div>
          </li>
          <li class="active">
            <i class="i-img lazyimg" :style="`background-image: url('${url}')`"></i>
            <div class="r">
              <p class="name oe">中华职业教育创新创业大赛</p>
              <p class="unit">主办单位: 中华职业教育社</p>
            </div>
          </li>
        </ul>
        <div class="track-child-view">
          <div class="nav-view clear">
            <span>中华职教社各中华职教社各子赛道中华职教社各子赛道中华职教社各子赛道中华职教社各子赛道中华职教社各子赛道子赛道</span>
            <ul class="nav-list clear">
              <li class="active">国家级</li>
              <li>省级</li>
              <li>市级</li>
              <li>国家级</li>
              <li>省级</li>
              <li>市级</li>
              <li>国家级</li>
              <li>省级</li>
              <li>市级</li>
              <li>国家级</li>
              <li>省级</li>
              <li>市级</li>
            </ul>
          </div>
          <ul class="list">
            <li class="oe">
              福建信息职业技术学院创新创业大赛福建信息职业技术学院创新创业大赛福建信息职业技术学院创新创术学院创新创业大赛
              <a type="button" href="#" target="_blank" class="link">立即前往</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import vBanner from 'components/banner/index.vue'
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {
      vBanner
    }
  })
  export default class Match extends Vue {
    url: string = 'https://fxr-img.oss-cn-beijing.aliyuncs.com/001.6234790.jpg';
    input1: string = '';
    bannerData: object = {
      img: require('./images/1.jpg'),
      p: '赛事列表',
      span: '开启赛事，实现夺冠梦想',
    };

  }
</script>
<style lang="scss" scoped>
  @import './style';
</style>
