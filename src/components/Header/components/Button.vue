<template>
    <div class="button">
       button
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components:{}
})
export default class button extends Vue{

}
</script>

<style scoped lang="css">
.button{
   float: right;
   margin-top: 9px;
   margin-right:20px;
   padding: 0 20px;
   line-height: 38px;
   border-radius: 19px;
   border: 1px solid #ec6149;
   font-size: 14px;
}
</style>