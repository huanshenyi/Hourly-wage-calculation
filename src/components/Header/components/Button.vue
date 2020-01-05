<template>
    <a class="button" href="#" ref="input"
       @mouseover="mouseAction(1)"
       @mouseleave="mouseAction(2)" @click="submitSearchValue">
       検索
    </a>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component({
  components:{}
})
export default class button extends Vue{
    @Prop() searchValue:any;
    mouseAction(flag:number){
        switch (flag) {
          case 1:
              (this as any).$refs.input.style.background = '#ec6149';
               (this as any).$refs.input.style.color = 'white';
               break;
          case 2:
              (this as any).$refs.input.style.background = '#fef0f0';
              (this as any).$refs.input.style.color = '#f56c6c';
              break
        }
    }
    submitSearchValue() {
       console.log(this.searchValue.value);
       this.clickButton()
    }
    @Emit('clickButton')
    clickButton(){}
}
</script>

<style scoped lang="scss">
.button{
   margin-right:20px;
   padding: 0 20px;
   line-height: 38px;
   border-radius: 19px;
   background:#fef0f0 ;
   border: 1px solid #ec6149;
   font-size: 14px;
   color: #ec6149;
}
</style>
