<template>
  <div>
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Main from '@/components/main/index.vue';
import Header from '@/components/Header/index.vue';
import Footer from '@/components/Footer/index.vue';

@Component({
  components: {
    Header,
    Main,
    Footer
  },
})
export default class home extends Vue {}
</script>
