<template>
  <div id="app">
    <Header/>
    <HelloWorld/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Header/index.vue';

@Component({
  components: {
    HelloWorld,
    Header
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
}
</style>
