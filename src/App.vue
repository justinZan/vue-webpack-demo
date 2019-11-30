<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
  created() {}
}
</script>

<style lang="scss">
@import "./assets/styles/index.scss";
</style>
