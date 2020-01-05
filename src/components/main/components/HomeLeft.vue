<template>
    <div class="home-left">
       <HelloWorld/>
       <div class="banner-context"></div>
       <div class="banner-image">
           <div class="banner-item" ></div>
           <div class="banner-item" ></div>
       </div>
    </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import HelloWorld from "@/components/util/HelloWorld.vue";
@Component({
  components:{
      HelloWorld
  }
})
export default class homeLeft extends Vue {

}
</script>

<style lang="scss">
.home-left{
  float: left;
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
}
.banner-context{
    width: 625px;
    height: 270px;
    background-color: #42b983;
}
.banner-image{
    margin-top: 30px;
    width: 625px;
    height: 250px;
    .banner-item{
       display: inline-block;
       height: 250px;
       line-height: 250px;
       width: 312px;
       background: url("https://hbb.afl.rakuten.co.jp/hsb/167c4762.bcf0ae97.15d5f5f0.5c115c53/?me_id=2100001&me_adv_id=1512353&t=pict") no-repeat center;
       background-size: contain;
  }
}
</style>
