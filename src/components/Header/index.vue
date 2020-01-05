<template>
    <div class="headerWrapper">
        <div class="container">
            <Logo/>
            <Nav/>
            <Search @emitValue="getValue" ref="searchComponent"/>
            <Button :searchValue="searchValue" @clickButton="clickButton"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import Logo from "@/components/Header/components/Logo.vue";
import Nav from "@/components/Header/components/Nav.vue";
import Search from "@/components/Header/components/Search.vue";
import Button from "@/components/Header/components/Button.vue";
@Component({
  components:{
      Logo,
      Nav,
      Search,
      Button
  }
})
export default class index extends Vue{
    @Provide() searchValue:object= {value:''};
    getValue(value:any){
        this.searchValue = {value:value};
    }
    clickButton(){
        (this as any).$refs.searchComponent.searchValueClear();
    }
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/base";
.headerWrapper{
   z-index: 1;
   position:relative ;
   height: 56px;
   border-bottom: 1px solid #f0f0f0;
   .container{
       display: flex;
       justify-content: space-between;
       align-items: center;
   }
}
</style>
