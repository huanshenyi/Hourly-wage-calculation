<template>
  <div>
    <Main/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Main from '@/components/main/index.vue';

@Component({
  components: {
    Main,
  },
})
export default class home extends Vue {}
</script>
