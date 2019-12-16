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
  padding: 30px 0 10px 0;
  width: 278px;
  border-radius: 3px;
  height: 250px;
  line-height: 300px;
  text-align: center;
  background-image: url("https://hbb.afl.rakuten.co.jp/hsb/1656e6d0.3ccaa4cb.15d5f5f0.5c115c53/?me_id=1&me_adv_id=1553643&t=pict");
}
</style>