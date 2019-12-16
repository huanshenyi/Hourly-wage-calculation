<template>
  <div id="app">
    <Header/>
    <Main/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Header/index.vue';
import Main from './components/main/index.vue';

@Component({
  components: {
    HelloWorld,
    Header,
    Main
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
}
</style>
