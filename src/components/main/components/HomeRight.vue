<template>
    <div class="home-right">
        <div class="WriterWrapper"></div>
        <div class="WriterWrapper"></div>
        <div class="WriterWrapper"></div>
    </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
@Component({
  components:{}
})
export default class homeRight extends Vue {

}
</script>

<style scoped lang="css">
.home-right{
   width: 280px;
   float: right;
}
.WriterWrapper{
  width: 288px;
  height: 250px;
  line-height: 250px;
  text-align: center;
  background: url("https://hbb.afl.rakuten.co.jp/hsb/1656e6d0.3ccaa4cb.15d5f5f0.5c115c53/?me_id=1&me_adv_id=1553643&t=pict") no-repeat center;
  background-size: contain;
}
</style>
