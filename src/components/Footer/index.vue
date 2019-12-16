<template>
    <div class="footer">
        <Container/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Container from "@/components/Footer/components/container.vue";

@Component({
  components: {
     Container
  },
})
export default class index extends Vue {}
</script>

<style scoped lang="css">
.footer{
   border-top: 1px solid #f0f0f0;
   overflow: hidden;
   margin-top: 10px;
   padding-top: 10px;
}
</style>