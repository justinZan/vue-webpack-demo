<template>
  <div class="content-fixed">
    content-fix
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class ContentFixed extends Vue {
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import './content-fixed.scss'
</style>
