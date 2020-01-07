<template>
    <div class="nav">
      <div class="nav-item">
          <span>時給計算</span>
          <div class="children">
              <div class="product">
                  <a href="" target="_blank">
                      <div class="pro-img">
                          <img src="../../../assets/dentaku.png" alt="">
                      </div>
                      <div class="column">
                            <div class="pro-name">給料計算</div>
                            <div class="pro-content">紹介文紹介文紹介文紹介文</div>
                      </div>
                  </a>
              </div>
          </div>
      </div>
      <div class="nav-item">
          <span>何か</span>
      </div>
      <div class="nav-item">
          <span>何か</span>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
@Component({
  components:{}
})
export default class nav extends Vue{

}
</script>

<style scoped lang="scss">
.nav{
  display: inline-block;
  width: 580px;
  padding-left: 150px;
    .nav-item{
       display: inline-block;
       font-size: 16px;
       color: #333;
       line-height: 56px;
       margin-right: 20px;
       &:hover{
           color: #ec6149;
           .children{
               height: 120px;
           }
       }
       .children{
           background-color: white;
           border-top: 1px solid #f0f0f0;
           position: absolute;
           top: 56px;
           left: 0;
           width: 1226px;
           box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
           z-index: 10;
           height: 120px;
           .product{
               display: inline-block;
               width: 70%;
               height: 120px;
               text-align: center;
               a{
                   display: inline-block;
               }
               img{
                   width: auto;
                   height: 120px;
                   padding-right: 30px;
               }
               .pro-img{
                   float: left;
                   height: 100px;
               }
               .column{
                   display: flex;
                   flex-direction:column;
                   .pro-name{
                        float: left;
                        height: 25px;
                   }
                   .pro-content{
                        float: left;
                   }
               }
           }
       }
  }
}
</style>
