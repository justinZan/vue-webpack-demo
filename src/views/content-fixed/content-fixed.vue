<template>
  <div class="content-fixed">content-fix</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { rxevent } from "justin-event-bus";
import { EventKeys } from "../../common/constant/event-keys";

@Component({})
export default class ContentFixed extends Vue {
  created() {
    rxevent.subscribe(EventKeys.Justin, "ContentFixed", (item: any) => {
      console.log("-------------------item", item);
    });
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "./content-fixed.scss";
</style>
