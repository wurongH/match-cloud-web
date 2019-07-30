<template>
  <div class="news-detail">
    <v-banner :data="bannerData"></v-banner>
    <div class="container">
      <div class="head">
        <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/news' }">赛事资讯</el-breadcrumb-item>
          <el-breadcrumb-item>资讯详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-divider></el-divider>
      <h2 style="text-align: center;">{{details.title}}</h2>
      <div id="content"></div>

      <div class="detail-bottom" v-if="details.attachmentJa &&details.attachmentJa.length >0">
        <p>点击下载>>></p>
        <span
          :title="item.fileName"
          @click="downNews(item.fileUrl)"
          class="down-item"
          v-for="(item,index) in details.attachmentJa"
          :key="index"
        >{{item.fileName}}</span>
      </div>

      <div class="data-view" v-if="details.attachmentUrlArray && details.attachmentUrlArray.length>0">
        <ul class="clear">
          <li
            :class="[ item.fileFormat, 'oe']"
            v-for="(item, index) in details.attachmentUrlArray"
            :key="index"
          >
            {{details.title}}
            <span @click="downNews(item.url)"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import vBanner from 'components/banner/index.vue'
export default {
  name: "news",
  data() {
    return {
      details: [],
      bannerData: {
        img: require('./images/banner.jpg'),
        p: '赛事资讯',
        span: '掌握最新赛事动态，了解当下最火三创资讯',
      }
    };
  },
  components: {
    vBanner
  },
  created() {},
  mounted() {
    this.getNewsDetail(this.$route.params.id);
  },
  methods: {
    downNews(url) {
      window.open(url);
    },
    async getNewsDetail(id) {
      const d = await this.post(this.$api.news.getNewsDetail, {
        id
      });
      if (d.code === 0) {
        this.details = d.data;
        if (this.details.attachmentUrlArray) {
          let index = this.details.attachmentUrlArray.lastIndexOf(".");
          let obj = {
            fileFormat: this.details.attachmentUrlArray.substring(index+1),
            url: this.details.attachmentUrlArray
          };
          this.details.attachmentUrlArray = [obj];
        }
        document.querySelector("#content").innerHTML = d.data.content;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.news-detail {
  .detail-bottom {
    margin-bottom: 50px;
  }
  .down-item {
    color: #007be9;
    cursor: pointer;
    display: inline-block;
    font-size: 15px;
    margin: 7px 0;
  }
  .breadcrumb {
    display: flex;
    align-items: center;
    height: 50px;
  }
  .container {
    .el-divider {
      margin-top: 5px;
      margin-bottom: 24px;
    }
  }
  .data-view {
    height: auto;
    margin: 30px 0;
    li {
      width: 100%;
      float: left;
      border-bottom: 1px dashed rgb(212, 212, 212);
      border-top: 1px dashed rgb(212, 212, 212);
      height: 65px;
      line-height: 65px;
      font-size: 16px;
      color: #333;
      padding-left: 26px;
      padding-right: 40px;
      background-repeat: no-repeat;
      background-position: 0 center;
      cursor: pointer;

      span {
        width: 16px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        background-repeat: no-repeat;
        background-position: center center;
        background-image: url("~@/assets/images/download.png");
      }
      &:hover {
        color: #0084ff;

        span {
          background-image: url("~@/assets/images/download-active.png");
        }
      }
      &:nth-of-type(even) {
        float: right;
      }
      &.doc {
        background-image: url("~@/assets/images/word.png");
      }
      $list: pdf ppt word xls;
      @each $item in $list {
        &.#{$item} {
          background-image: url("~@/assets/images/#{$item}.png");
        }
      }
    }
  }
}
</style>
