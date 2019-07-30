<script lang="tsx">
  import { Component, Vue } from 'vue-property-decorator';
  import logoImg from './images/logo.png';
  import codeImg from './images/code.png';

  @Component
  export default class VFooter extends Vue {
    protected render() {
      return (
        <div class="vfooter">
          <div class="container top clear">
            {
              false &&
              (<div class="left">
                <img src={ logoImg } />
                <span>青创未来云赛事</span>
          		</div>)
            }
        		<div class="center clear">
        			<div class="shortcut">
        				<p>友情链接</p>
        				<ul class="link-list">
                  <li><a href="http://www.mohrss.gov.cn/">中华人民共和国人力资源和社会保障部</a></li>
                  <li><a href="http://www.zhzjs.org/">中华职业教育社</a></li>
        					<li><a href="http://jyt.fujian.gov.cn/">福建省教育厅</a></li>
                  <li><a href="http://www.fjszhzjs.cn/">福建省中华职业教育社</a></li>
                  <li><a href="http://www.class.com.cn/">中国人力资源和社会保障出版集团有限公司</a></li>
        				</ul>
        			</div>
              <div class="shortcut">
        				<p>技术支持</p>
        				<ul class="link-list">
        					<li><a href="https://www.qcweilai.com/">青创未来集团</a></li>
                  <li><a href="http://www.11ready.com/plus/list.php?tid=551">福建省汇众创新创业研究院</a></li>
        				</ul>
        			</div>
              {/*
                <div class="shortcut">
          				<p>更多服务</p>
          				<ul class="link-list">
          					<li><a href="#">赛事指导</a></li>
          				</ul>
          			</div>
              */}
              <div class="shortcut">
                <p>联系我们</p>
        				<ul class="link-list">
        					<li><a href="javascript:void(0)">0591-22195193</a></li>
        				</ul>
        			</div>
        		</div>
        		<div class="right">
        			<img src={ codeImg } />
              <span>关注我们</span>
        		</div>
        	</div>
        	<p class="bottom">闽ICP备16026330号-6</p>
        </div>
      );
    }
  }
</script>

<style scoped lang="scss">
.vfooter{
  background: url('./images/map.png') no-repeat center center #22324e;
  background-size: 100% 100%;
  height: auto;
  color: #fff;

  .top{
    height: auto;
    padding: 56px 0;

    .left{
      float: left;
      width: 260px;
      height: 50px;
      line-height: 50px;

      img{
        width: 50px;
        height: 50px;
        float: left;
      }
      span{
        font-size: 20px;
        padding-left: 10px;
      }
    }
    .center{
      float: left;

      .shortcut{
        margin-right: 70px;
        float: left;
        width: auto;

        p{
          line-height: 40px;
          font-size: 22px;

          margin-bottom: 10px;
        }
        .link-list{
          padding: 0;

          li{
            line-height: 38px;

            a{
              font-size: 14px;
              color: #fff;

              &:hover{
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
    .right{
      width: 100px;
      height: 100px;
      float: right;
      text-align: center;

      img{
        width: 100%;
        height: 100%;
        display: block;
        padding: 6px;
        background: #fff;
      }
      span{
        line-height: 42px;
        font-size: 14px;
      }
    }
  }
  .bottom{
    width: 100%;
    text-align: center;
    line-height: 48px;
    height: 48px;
    font-size: 14px;
    color: #fff;
    background-color: rgba(255, 255, 255, .2)
  }
}
</style>
