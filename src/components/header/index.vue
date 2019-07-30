<template>
  <div class="vheader" ref="vHreader">
    <div class="container">
			<router-link to="/" class="i-logo">
        <img src="./images/logo.png" alt="公司logo">
      </router-link>
      <div class="right">
        <div class="nav-list">
          <router-link exact :to="{ path: '/' }">首页</router-link>
          <!-- <router-link :to="{ path: '/match' }">赛事列表</router-link> -->
          <router-link :to="{ path: '/news' }">赛事资讯</router-link>
          <!-- <router-link :to="{ path: '/guide' }">赛事指导</router-link> -->
          <router-link :to="{ path: '/about' }">关于我们</router-link>
        </div>
        <el-button type="primary" size="small" @click="dialogVisible = true">申请开通赛事平台</el-button>
      </div>
		</div>

    <v-open-match :value.sync="dialogVisible"></v-open-match>
  </div>
</template>
<script lang="ts">
  import vOpenMatch from 'components/openMatch/index.vue';
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {
      vOpenMatch
    }
  })
  export default class VHeader extends Vue {
    dialogVisible: boolean = false;
  }
</script>

<style scoped lang="scss">
  .vheader{
    height: 66px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 999;
    border-bottom: 1px solid #eee;

    .i-logo{
      float: left;
      width: auto;
      height: 66px;
      padding: 16px 0;

      img{
        width: auto;
        height: 100%;
        display: block;
      }
    }
    .right{
      float: right;

      .nav-list{
        float: left;
        line-height: 28px;
        padding: 19px 20px 19px 0;

        a{
          margin: 0 20px;
          font-size: 16px;
          color: #333;

          &.router-link-active:after{
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            height: 3px;
            width: 100%;
            background: #0084ff;
          }
          &:hover{
            color: #0084ff;
          }
        }
      }
      .el-button{
        float: right;
        margin: 17px 0;
        font-size: 15px;
      }
    }
  }

  iframe{
    border: none;
    width: 400px;
    display: block;
    margin: 0 auto;
    height: 550px;
    padding-bottom: 20px
  }
</style>
