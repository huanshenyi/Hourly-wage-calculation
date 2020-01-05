<template>
    <div class="search">
        <el-input v-model="input" placeholder="機能検索" suffix-icon="el-icon-search"></el-input>
    </div>
</template>

<script lang="ts">
import { Component, Provide, Vue, Emit, Watch } from "vue-property-decorator";
@Component({
  components:{}
})
export default class search extends Vue{
 @Provide() input:string = '';
 @Watch('input')
 watchValue(){
     this.emitValue(this.input)
 }
 @Emit('emitValue')
 emitValue(value:any){}
 searchValueClear(){
     this.input = "";
 }
}
</script>

<style scoped lang="scss">

</style>
