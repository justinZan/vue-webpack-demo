<template>
  <div class="header">
    <div class="menu-list">
      <router-link
        v-for="(item, index) in menuList"
        :key="index"
        class="router-btn"
        active-class="active-router"
        :to="item.routerName"
      >
        <i :class="item.icon"></i>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Path } from "../../router/router-type";

@Component({})
export default class Header extends Vue {
  private menuList: any = [];

  created() {
    this.menuList = [
      {
        id: 1,
        name: "aa",
        routerName: Path.AddressBook,
        icon: "el-icon-user-solid"
      },
      {
        id: 2,
        name: "bb",
        routerName: Path.CommonLink,
        icon: "el-icon-star-off"
      }
    ];
  }
}
</script>

<style rel="stylesheet/scss"  lang="scss" scoped>
@import "./header.scss";
</style>
