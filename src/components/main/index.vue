<template>
    <div class="home-wrapper">
        <HomeLeft/>
        <HomeRight/>
    </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import HomeLeft from "@/components/main/components/HomeLeft.vue";
import HomeRight from "@/components/main/components/HomeRight.vue";
@Component({
  components:{
      HomeLeft,
      HomeRight
  }
})
export default class index extends Vue {

}
</script>

<style scoped lang="css">
.home-wrapper{
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
}
</style>