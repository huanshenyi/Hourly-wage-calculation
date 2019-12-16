<template>
    <div class="home-left">
       <HelloWorld/>
    </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import HelloWorld from "@/components/HelloWorld.vue";
@Component({
  components:{
      HelloWorld
  }
})
export default class homeLeft extends Vue {

}
</script>

<style scoped lang="css">
.home-left{
  float: left;
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
}
</style>