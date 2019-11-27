<template>
  <div class="layout">
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";
import Header from "../header/header.vue";
import Content from "../content/content.vue";
import Footer from "../footer/footer.vue";

@Component({
  components:{
    Header,
    Content,
    Footer
  }
})
export default class Layout extends Vue {
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import './layout.scss'
</style>
