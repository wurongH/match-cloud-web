<template>
  <div class="guide">
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

<script>
  export default {
    name: "guide",
    data() {
      return {
        url: 'https://fxr-img.oss-cn-beijing.aliyuncs.com/001.6234790.jpg',
        input1: '',
      }
    },
    created() {
    },
    mounted() {

    },
    methods: {
    }
  }
</script>
<style lang="scss" scoped>
  .search{
    position: absolute;
    right: 0;
    top: 0;
    width: 210px;
  }
  .filter-view{
    font-size: 14px;
    color: #666;

    .item{
      margin-top: 20px;

      > span{
        width: 70px;
        line-height: 28px;
        float: left;
      }
      > div{
        float: float;

        a{
          height: 28px;
          float: left;
          border-radius: 3px;
          border: 1px solid #b3b3b3;
          line-height: 26px;
          padding: 0 9px;
          margin-right: 10px;
          cursor: pointer;
          color: #666;

          &.active, &:hover{
            background: #007be9;
            color: #fff;
            border-color: #007be9;
          }
        }
      }
    }
  }
  .title-view{
    height: 60px;
    line-height: 60px;

    span{
      font-size: 24px;
      color: #333;
      float: left;
      padding-left: 12px;

      &:after{
        content: '';
        position: absolute;
        left: 0;
        width: 4px;
        height: 20px;
        border-radius: 2px;
        background-color: #0084ff;
        top: 50%;
        margin-top: -10px;
      }
    }
    .match-guide-nav{
      height: 100%;
      padding: 15px 0 15px 20px;
      float: left;

      li{
        margin-right: 10px;
        border: 1px solid #b3b3b3;
        border-radius: 3px;
        height: 30px;
        line-height: 28px;
        float: left;
        padding: 0 16px;
        font-size: 14px;
        color: #666;
        cursor: pointer;

        &.active, &:hover{
          background-color: #007be9;
          border-color: #007be9;
          color: #fff;
        }
      }
    }
    .more{
      float: right;
      font-size: 16px;
      color: #666;
      padding-right: 20px;
      background: url('~@/assets/images/more.png') no-repeat center right;

      &:hover{
        text-decoration: underline;
      }
    }
  }

  .data-view{
    margin-bottom: 60px;

    .track-view{
      float: left;
      width: 430px;

      li{
        margin-bottom: 10px;
        width: 100%;
        height: 110px;
        padding: 10px;
        border-radius: 3px;
        cursor: pointer;


        .i-img{
          width: 136px;
          height: 90px;
          border: 1px solid #fff;
          border-radius: 2px;
          float: left;
        }
        .r{
          width: 268px;
          padding-right: 15px;

          float: right;

          .name{
            font-size: 18px;
            line-height: 37px;
            color: #333;
            margin-bottom: 25px;
          }
          .unit{
            font-size: 14px;
            line-height: 28px;
            color: #666;
          }
        }
        &.active{
          background-color: #007be9;

          &:after{
            content: '';
            position: absolute;
            right: -6px;
            top: 50%;
            margin-top: -6px;
            width: 0;
            height: 0;
            border-top: 6px solid transparent;
            border-left: 6px solid #007be9;
            border-bottom: 6px solid transparent;
          }
          .r .name,.unit{
            color: #fff;
          }
        }
      }
    }
    .track-child-view{
      padding: 20px;
      float: right;
      width: 750px;
      padding-top: 16px;
      border-radius: 5px;
      background: #fff;

      .nav-view{
        height: auto;

        span{
          font-size: 18px;
          color: #333;
          padding-left: 12px;
          float: left;
          line-height: 26px;
          margin-bottom: 10px;

          &:after{
            content: '';
            position: absolute;
            left: 0;
            width: 4px;
            height: 16px;
            border-radius: 2px;
            background-color: #0084ff;
            top: 5px;
          }
        }
        .nav-list{
          float: left;

          li{
            float: left;
            margin-left: 10px;
            margin-bottom: 10px;
            padding: 0 10px;
            height: 26px;
            line-height: 24px;
            font-size: 14px;
            border: 1px solid #666;
            color: #666;
            border-radius: 12px;
            cursor: pointer;

            &.active, &:hover{
              background-color: #007be9;
              border: 1px solid #007be9;
              color: #fff;
            }
          }
        }
      }
      .list li{
        height: 56px;
        border-bottom: 1px solid #f2f2f2;
        padding-right: 70px;
        line-height: 56px;
        font-size: 14px;
        color: #333;
        cursor: pointer;

        &:hover{
          color: #007be9;
        }
        .link{
          width: 66px;
          height: 24px;
          text-align: center;
          line-height: 24px;
          border-radius: 4px;
          background-color: #f2f3f4;
          font-size: 12px;
          color: #007be9;
          position: absolute;
          right: 0;
          top: 50%;
          margin-top: -12px;
        }
      }
    }
  }
</style>
