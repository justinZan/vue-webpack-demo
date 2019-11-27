<template>
  <div class="hello">
    <h1>{{ props }}</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";

@Component({})
export default class HelloWorld extends Vue {
  private name = "HelloWorld";
  get props() {
    return "string111111111111111111";
  }
}
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
