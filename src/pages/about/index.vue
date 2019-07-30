<template>
  <div class="about">
    <div class="head-bg"></div>
    <div class="container">
      <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>关于我们</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <div class="content">
        <div class="synopsis">
          <p class="synopsis-head">
            <span class="icon-common"></span>
            <span class="title-common">我们的特点</span>
          </p>
          <div class="synopsis-top">
            <ul class="lis">
              <li v-for="(item,index) in weList" :key="index">
                <div style="width: 200px">
                  <img :src="item.url" style="margin-bottom:21px"/>
                  <p style="font-size:18px;margin-bottom:10px">{{item.title}}</p>
                  <p style="line-height:23px;">{{item.content}}</p>
                </div>
              </li>
           
            </ul>
          </div>

           <p class="synopsis-head">
            <span class="icon-common"></span>
            <span class="title-common">我们的团队</span>
          </p>
          <div class="synopsis-bottom" >
           <ul class="lis steam">
              <li v-for="(item,index) in steamList" :key="index">
               <div style="width: 280px">
                  <img :src="item.url" style="margin-bottom:21px"/>
                  <p style="font-size:18px;margin-bottom:10px">{{item.title}}</p>
                  <p style="line-height:23px;">{{item.content}}</p>
                </div>
              </li>
           
            </ul>
          </div>
        </div>
        <div class="synopsis-footer">
          <div class="synopsis-footer-left" >
            <p class="title-wrap">
              <span class="icon-common"></span>
              <span class="title-common">申请开通校赛平台</span>
              <v-match></v-match>
            </p>
          </div>
          <div class="synopsis-footer-right">
            <p class="title-wrap">
              <span class="icon-common"></span>
              <span class="title-common">联系我们</span>
             
            </p>
            <div>
              <baidu-map class="map" :center="center" :zoom="zoom" @ready="handler">
                <bm-marker
                  :position="{lng: 119.22157, lat: 26.048023}"
                  animation="BMAP_ANIMATION_BOUNCE"
                ></bm-marker>
              </baidu-map>
            </div>
            <p class="synopsis-footer-info">地址： 福州市闽侯县科技东路8号创业大厦15楼</p>
            <p class="synopsis-footer-info">电话： 0591-22195193</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vMatch from 'components/openMatch/match';
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
export default {
  name: "about",
  components: {
    BaiduMap,
    vMatch
  },
  data() {
    return {
      center: { lng: 0, lat: 0 }, //经纬度
      zoom: 3, //地图展示级别
        weList:[
          {url:require('./images/icon01.png'),title:'全流程管理',content:'提供信息发布、材料收集、项目管理、专家管理等服务'},
          {url:require('./images/icon02.png'),title:'一站式定制',content:'提供自主管理、标准模块、个性设置、动态更新等服务'},
         {url:require('./images/icon03.png'),title:'专业化服务',content:'提供权威专家、资深评审、咨询辅导、技术支持等服务'},
           {url:require('./images/icon04.png'),title:'智能化评审',content:'提供一键分配、在线评分、自动统分、实时排序等服务'},
        ],
      steamList:[
          {url:require('./images/icon05.png'),title:'权威专家',content:'国家级创新创业大赛的核心专家，权威的大赛解读，专业的评审指导。'},
         {url:require('./images/icon06.png'),title:'资深评审',content:'国赛、省赛、校赛等各级评审团，融合高校教师、创业导师、行企精英、创投专家多领域。'},
          {url:require('./images/icon07.png'),title:'咨询辅导',content:'3000多名经验丰富导师提供定制化、多样化、系统化培训服务。'},
          {url:require('./images/icon08.png'),title:'技术支持',content:'10年以上互联网从业经验，提供7*24小时技术咨询与保障服务。'},
      ],
    };
  },

  created() {},
  mounted() {
    this.$nextTick( ()=>{
      let arr = document.getElementsByClassName('anchorBL')
      for(let i = 0; i<arr.length;i++){
        console.log(arr[i])
        arr[i].innerHTML = ''
      }
    })
  },
  methods: {
    handler({ BMap, map }) {
      this.center.lng = 119.22157;
      this.center.lat = 26.048023;
      this.zoom = 18;
    }
  }
};
</script>
<style lang="scss" scoped>
.map {
  height: 400px;
  width: 600px;
  margin-top: 20px;
}
  .icon-common {
    display: inline-block;
    width: 4px;
    height: 22px;
    background: #0084ff;
    position: relative;
    top: 3px;
    left: -9px;
    border-radius: 27%;
  }
.BMap_cpyCtrl {
  display: none;
}
.about {

  .title-common {
    font-size: 24px;
    color: black;
  }
  .container {
    .el-divider {
      margin-top: 5px;
      margin-bottom: 24px;
    }
  }
  .synopsis-footer {
    display: flex;
    justify-content: space-between;
  }
  .breadcrumb {
    display: flex;
    align-items: center;
    height: 50px;
  }
  .head-bg {
    background: url("./images/banner.png");
        height: 300px;
  }
  .synopsis {
    .synopsis-head {
      line-height: 18px;
      margin-bottom: 15px;
    }
    .steam{
      li{
         width: 300px;
      }
    }
    .lis {
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
      > li {
        display: flex;
        flex-wrap: nowrap;
        width: 240px;
        text-align: center;
        margin: 50px 30px;
        font-size: 13px;
        color: #6d6d6d;
      }
    }
    .synopsis-top {
      margin-bottom: 30px;
    }
    .synopsis-bottom {
      margin-bottom: 50px;
    }
  }
  .synopsis-footer-right {
    margin-left: 80px;
  }
  .synopsis-footer-info {
    margin: 10px 0;
    font-size: 13px;
    color: #6d6d6d;
  }
}
</style>
