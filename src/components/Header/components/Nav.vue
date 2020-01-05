<template>
    <div class="nav">
      <div class="nav-item">
          <span>時給計算</span>
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
  }
}
</style>
