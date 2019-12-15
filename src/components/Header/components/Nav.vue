<template>
    <div class="nav">
      <div class="nav-item">
          何か
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

<style scoped lang="css">
.nav{
  width: 960px;
  height: 100%;
  padding-right: 90px;
  box-sizing: border-box;
  margin: 0 auto;
}
.nav-item{
   line-height: 56px;
   padding: 0 15px;
   color: #333;
}
</style>