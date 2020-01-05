<template>
    <div>
        <Header/>
         <router-view/>
        <Footer/>
    </div>
</template>

<script lang="ts">
import Header from '@/components/Header/index.vue';
import Footer from '@/components/Footer/index.vue';
import { Component, Provide, Vue } from 'vue-property-decorator';
@Component({
  components:{
      Header,
      Footer
  }
})
export default class base extends Vue {

}
</script>

<style scoped>

</style>
