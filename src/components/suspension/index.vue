<template>
  <!-- 首页悬浮窗 -->
  <div class="v-suspension">
    <!-- <p class="item p1"><span>申请</br>办赛</span></p> -->
    <p class="item p2" @click="isShowExpertApply = true">
      <span>申请评</br>审专家</span>
    </p>
    <p class="item p3" @click="isShowTutor = true">
      <span>成为</br>导师</span>
    </p>
    <p class="item p4" @mouseover="isShowContact = true" @mouseout="isShowContact = false">
      <span>联系</br>我们</span>
    </p>

    <el-dialog
      title="成为导师"
      :visible.sync="isShowTutor"
      :modal-append-to-body="false"
      width="640">
      <iframe src="http://teacher-app.qcwlyss.com/#/recruit?id=386183353553915904"></iframe>
    </el-dialog>

    <!-- 申请评审专家 -->
    <v-expert-apply :value.sync="isShowExpertApply" />

    <!-- 联系我们 -->
    <transition name="slide-fade-left">
      <div class="contact" v-show="isShowContact">
        <span>电话：0591-22195193</span>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
  import vExpertApply from 'components/expertApply/index.vue';
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {
      vExpertApply
    }
  })
  export default class VSuspension extends Vue {
    isShowTutor: boolean = false;
    isShowContact: boolean = false;
    isShowExpertApply: boolean = false;
  }
</script>

<style scoped lang="scss">
  .v-suspension{
    position: fixed;
    right: 30px;
    top: 50%;
    margin-top: -130px;
    z-index: 100000;
    width: 60px;
    height: 260px;

    .item{
      border: 1px solid #f0f0f0;
      background-color: #fff;
      display: block;
      width: 100%;
      height: 60px;
      margin: 4px 0;
      cursor: pointer;
      background-repeat: no-repeat;
      background-position: center center;
      line-height: 20px;
      text-align: center;
      padding: 10px 0;
      color: #fff;
      font-size: 14px;

      @for $i from 1 through 4{
        &.p#{$i}{
          background-image: url('./images/icon0#{$i}.png');
        }
      }
      span{
        display: none;
      }
      &:hover{
        border-color: #0084ff;
        background-color: #0084ff;
        background-image: none;

        span{
          display: block;
        }
      }
    }
  }
  .contact{
    height: 60px;
    width: 226px;
    line-height: 60px;
    font-size: 16px;
    color: #666;
    bottom: 64px;
    left: -235px;
    padding-left: 44px;
    border-radius: 4px;
    background: url('./images/phone.png') no-repeat 16px center #fff;
    box-shadow: 0 0 15px rgba(0, 0, 0, .1);

    &:after{
      content: '';
      position: absolute;
      right: -7px;
      width: 7px;
      height: 12px;
      top: 50%;
      margin-top: -6px;
      background: url('./images/1.png');
    }
  }
  iframe{
    border: none;
    width: 400px;
    display: block;
    margin: 0 auto;
    height: 600px;
    padding-bottom: 20px
  }
</style>
