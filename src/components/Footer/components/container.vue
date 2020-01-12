<template>
    <div class="container">
        <div class="footer-log">
            <img src="../../../assets/logo.png" alt="logo">
        </div>
        <div class="copyright">簡単な紹介文</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {

  },
})
export default class container extends Vue {}
</script>

<style lang="scss">
.container{
   font-size: 16px;
   text-align: center;
   .footer-log{
       margin-top: 23px;
       img{
           width: 53px;
           height: 53px;
           margin-bottom: 5px;
       }
   }
}
</style>
