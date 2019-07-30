<template>
  <div class="guide-list">
    <div class="head-bg"></div>
    <div class="container">
      <div class="head">
        <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/guide' }">赛事指导</el-breadcrumb-item>
          <el-breadcrumb-item>文件详情</el-breadcrumb-item>
        </el-breadcrumb>
        <el-input
          placeholder="请输入文件关键词"
          size="small"
          suffix-icon="el-icon-search"
          style="width:200px;"
          v-model="fuzzySearch"
          @input="getList()"
        ></el-input>
      </div>
      <el-divider></el-divider>



      <div class="item">
        <span class="item-title">赛事类别:</span>
        <ul class="saishi">
          <li
            v-for="(item,index) in newsList"
            @click="matchType(item.label,index)"
            :class="item.isActive?'active':'qq'"
            :key="index"
          >{{item.value}}</li>
        </ul>
      </div>

      <div class="data-view">
        <ul class="clear">
          <li
            :class="[ item.fileFormat, 'oe']"
            v-for="(item, index) in matchGuide"
            :title="item.fileName"
            :key="index"
          >
            {{item.fileName}}
            <span @click="downFile(item.imageUrl)"></span>
          </li>
        </ul>
      </div>
      <div class="page-bottom">
        <el-pagination
          background
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :total="total"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import tableMixin from "@/mixins/table";
export default {
  name: "guide-list",
  mixins: [tableMixin],
  data() {
    return {
      fuzzySearch: "",
      matchGuide: [],
      moduleCode:'',
      newsList: [
        { label: "", value: "全部", isActive: true },
        // { label: "POLICY_FILE", value: "指导文件", isActive: false },
        { label: "MATCH_TEMPLATE", value: "赛事模板", isActive: false },
        // { label: "WIN_LIST", value: "获奖名单", isActive: false }
      ]
    };
  },

  created() {},
  mounted() {
    this.getList();
  },
  methods: {
    // 点击类别
    matchType(name, i) {
      this.newsList.forEach((item, index) => {
        if (index === i) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
      });
      this.moduleCode = name;
      this.getList();
    },
    downFile(file) {
      if (file) {
        window.open(file);
      } else {
        this.$message.success("暂无文件");
      }
    },
    async getList() {
      const d = await this.post(this.$api.guide.pageDatum, {
        pageNum: this.currentPage,
        pageSize: this.pageSize,
        moduleCode: this.moduleCode,
        fuzzySearch: this.fuzzySearch
      });
      if (d.code === 0) {
        this.matchGuide = d.data.data;
        this.total = d.data.total;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.guide-list {
  .page-bottom {
    text-align: right;
    margin-bottom: 30px;
  }
  .container {
    .el-divider {
      margin-top: 5px;
      margin-bottom: 24px;
    }
  }
  .head-bg {
    background: url("./images/banner.png");
    height: 240px;
  }
  .active {
    color: #007be9;
  }
  .qq {
    color: rgb(0, 0, 0);
  }
  .breadcrumb {
    display: flex;
    align-items: center;
    height: 50px;
  }
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

    .item {
    margin-bottom: 20px;
    display: flex;
    .saishi {
      margin-left: 10px;
      display: flex;
    }
    li {
      border: 1px solid #b3b3b3;
      border-radius: 3px;
      height: 30px;
      margin-right: 10px;
      line-height: 28px;
      padding: 0 16px;
      font-size: 14px;
      color: #666;
      cursor: pointer;

      &.active,
      &:hover {
        background-color: #007be9;
        border-color: #007be9;
        color: #fff;
      }
    }
  }  .item-title {
    font-size: 14px;
    color: #666;
    line-height: 28px;
  }
  .data-view {
    height: auto;

    li {
      width: 100%;
      float: left;
      border-bottom: 1px dashed rgb(212, 212, 212);
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
