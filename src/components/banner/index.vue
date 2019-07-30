<template>
  <div class="vbanner">
    <img :src="data.img">
    <div class="container">
      <div class="content" :style="{ marginTop: data.marginTop ? data.marginTop : '-54px' }">
        <p>{{data.p}}</p>
        <span>{{data.span}}</span>
        <slot name="main"></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class VBanner extends Vue {
    @Prop({ default: {} }) data!: object;
  }
</script>
<style lang="scss" scoped>
  .vbanner{
    position: relative;

    img{
      display: block;
      width: 100%;
      height: auto;
      position: relative;
      z-index: 1;
    }

    .container{
      position: absolute;
      height: 100%;
      left: 50%;
      margin-left: -600px;
      top: 0;

      .content{
        position: absolute;
        left: 0;
        color: #fff;
        z-index: 10;
        top: 50%;

        p{
          font-size: 48px;
          margin: 0;
        }
        span{
          font-size: 28px;
          line-height: 80px;
          display: block;
          margin-bottom: 54px;
        }
        .btn-list{
          height: 60px;
        }
        a{
          float: left;
          margin-right: 28px;
        }
      }
    }
  }
</style>
