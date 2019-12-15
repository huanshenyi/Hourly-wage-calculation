<template>
    <div class="log"></div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
@Component({
  components:{}
})
export default class logo extends Vue{

}
</script>

<style scoped lang="css">
.log{
   position: absolute;
   top: 0;
   left: 0;
   display: block;
   width:80px;
   background: url("https://res.cloudinary.com/practicaldev/image/fetch/s--uVUxROsr--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/http://static.velvetcache.org/talks/2018/03/%255BNEJS%255D%2520Go%2C%2520JavaScript%2520and%2520You/Go%2C%2520JavaScript%2520and%2520You_files/gopherjs.png");
   height: 56px;
   background-size: contain;
}
</style>