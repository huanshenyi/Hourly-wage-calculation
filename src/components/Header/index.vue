<template>
    <div class="headerWrapper">
        <Logo/>
        <Button/>
        <Nav/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Logo from "@/components/Header/components/Logo.vue";
import Nav from "@/components/Header/components/Nav.vue";
import Button from "@/components/Header/components/Button.vue";
@Component({
  components:{
      Logo,
      Nav,
      Button
  }
})
export default class index extends Vue{

}
</script>

<style scoped lang="css">
.headerWrapper{
   z-index: 1;
   position:relative ;
   height: 56px;
   border-bottom: 1px solid #f0f0f0;
}
</style>