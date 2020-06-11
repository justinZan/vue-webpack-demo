<template>
  <div class="common-link">
    <div class="top-box">top-box</div>
    <div class="bottom-box">
      <div :class="['show-box',{'box-show':boxsShow}]">bottom-box</div>
      <p class="button" @click="clickMothed()">button</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class CommonLink extends Vue {
  private boxsShow = false;
  clickMothed() {
    this.boxsShow = !this.boxsShow;
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "./common-link.scss";
</style>
