<template>
  <div class="news">
    <v-banner :data="bannerData"></v-banner>
    <div class="container">
      <div class="head">
        <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>赛事资讯</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="btn-wrap">
          <el-input
            placeholder="请输入赛事关键词"
            size="small"
            prefix-icon="el-icon-search"
            style="width:200px;margin-right:5px"
            v-model="fuzzySearch"
          ></el-input>
          <el-button size="small" @click="getList">搜索</el-button>
        </div>
      </div>
      <el-divider></el-divider>

      <div class="item">
        <span class="item-title">赛事类别:</span>
        <ul class="saishi">
          <li
            v-for="(item,index) in typeList"
            @click="matchType(item.label,index)"
            :class="item.isActive?'active':'qq'"
            :key="index"
          >{{item.value}}</li>
        </ul>
      </div>

      <div class="sorNo">
        <span class="item-title">资讯排序:</span>
        <ul class="sorNo sorNo-title">
          <li
            v-for="(item,index) in sorNoList"
            :key="index"
            :class="item.isActive?'active':'qq'"
            @click="informationSort(item.label,index)"
          >{{item.value}}</li>
        </ul>
      </div>
      <ul class="list">
        <li v-for="(item,index) in matchList" :key="index" @click="details(item.id)">
          <i class="i-img lazyimg" :style="`background-image: url('${item.indexImageUrl}')`"></i>
          <div class="r">
            <p class="name p1">{{item.title}}</p>
            <p class="level p2">{{item.summary}}</p>
            <p class="unit p3">{{item.createTime}}</p>
          </div>
        </li>
      </ul>
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
import vBanner from "components/banner/index.vue";

export default {
  name: "news",
  mixins: [tableMixin],
  data() {
    return {
      url: "https://fxr-img.oss-cn-beijing.aliyuncs.com/001.6234790.jpg",
      matchList: [],
      fuzzySearch: "",
      typeList: [
        { label: "", value: "全部", isActive: true },
        { label: "创新创业类", value: "创新创业类", isActive: false },
        { label: "文化创意类", value: "文化创意类", isActive: false },
        { label: "生涯规划类", value: "生涯规划类", isActive: false },
        { label: "其他", value: "其他", isActive: false }
      ],
      sorNoList: [
        { label: "topFlag desc", value: "推荐", isActive: false },
        { label: "createTime desc", value: "最新", isActive: false },
        { label: "viewCount desc", value: "热门", isActive: false }
      ],
      orderByStr: "",
      labelName: "",
      bannerData: {
        img: require("./images/banner.jpg"),
        p: "赛事资讯",
        span: "掌握最新赛事动态，了解当下最火三创资讯"
      }
    };
  },
  components: {
    vBanner
  },
  created() {},
  mounted() {
    this.getList();
  },
  methods: {
    informationSort(name, i) {
      this.sorNoList.forEach((item, index) => {
        if (index === i) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
      });
      this.orderByStr = name;
      this.getList();
    },
    details(id) {
      this.$router.push({ name: "newsDetails", params: { id } });
    },
    matchType(name, i) {
      this.typeList.forEach((item, index) => {
        if (index === i) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
      });
      this.labelName = name;
      this.getList();
    },
    async getList() {
      const d = await this.post(this.$api.news.pageNews, {
        pageNum: this.currentPage,
        pageSize: this.pageSize,
        labelName: this.labelName,
        orderByStr: this.orderByStr,
        fuzzySearch: this.fuzzySearch
      });
      if (d.code === 0) {
        this.matchList = d.data.data;
        this.total = d.data.total;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.news {
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
  .list {
    margin-bottom: 30px;
    li {
      height: 180px;
      width: 100%;
      margin-bottom: 10px;
      transition: 300ms;
      cursor: pointer;
      padding: 10px;
      display: flex;

      &:hover {
        box-shadow: 0 0 18px rgba(0, 0, 0, 0.1);
        transform: scale(1.01);
      }
      .i-img {
        width: 240px;
        height: 100%;
        border-radius: 3px;
        margin-right: 24px;
      }
      .r {
        padding: 3px 0;
        display: flex;
        flex-direction: column;
        p {
          line-height: 22px;
          height: 33%;
          width: 900px;
        }

        .name {
          color: #333;
          font-size: 18px;
          line-height: 27px;
          text-align: justify;
        }
        .level,
        .unit {
          color: #666;
          font-size: 14px;
          line-height: 32px;
        }
        .p3 {
          display: flex;
          align-items: flex-end;
        }
        .p2 {
          height: 80px;
          line-height: 23px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        .p1 {
          font-size: 20px;
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
  .active {
    color: #007be9;
  }
  .qq {
    color: rgb(0, 0, 0);
  }
  .sorNo {
    display: flex;
    .sorNo-title {
      margin-right: 10px;
    }
    li {
      padding: 0 9px;
      margin-right: 15px;
      margin-left: 15px;
      margin-bottom: 10px;
      height: 28px;
      line-height: 26px;

      font-size: 14px;
      color: #666;
      cursor: pointer;
      cursor: pointer;
      &.active,
      &:hover {
        color: #007be9;
      }
    }
  }
  .breadcrumb {
    display: flex;
    align-items: center;
    height: 50px;
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
  }
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .item-title {
    font-size: 14px;
    color: #666;
    line-height: 28px;
  }
  .btn-wrap{
    display: flex;

  }
}
</style>
