<template>
  <div class="content">
    <!-- <transition :name="transitionName">
      <router-view class="content-body" />
    </transition>-->
    <router-view class="content-body" />
    <ContentFixed />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import ContentFixed from "../content-fixed/content-fixed.vue";

@Component({
  components: {
    ContentFixed
  }
})
export default class Content extends Vue {
  private transitionName: any = "";

  @Watch("$route")
  routeChange(to: any, from: any, next: any) {
    const toIndex = to.meta.index;
    const fromIndex = from.meta.index;
    this.transitionName = toIndex < fromIndex ? "slide-right" : "slide-left";
  }
}
</script>

<style rel="stylesheet/scss"  lang="scss" scoped>
@import "./content.scss";
</style>
