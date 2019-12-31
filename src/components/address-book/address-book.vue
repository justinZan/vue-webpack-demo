<template>
  <div class="address-book">
    address-book
    <img :src="logo" alt />
    <el-button @click="clickMethod()"></el-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Getter } from "vuex-class";
import { Apptypes } from "../../store/types/app-types";
import addressBookService from "../../api/address-book-service";
import { rxevent } from 'justin-event-bus';
import { EventKeys } from "../../common/constant/event-keys";

@Component({})
export default class AddressBook extends Vue {
  @Getter(Apptypes.getters.CONFIGS)
  configs: any;
  private logo = require("../../assets/images/logo.png");

  created() {
    console.log("-------------", this.configs);
    addressBookService
      .getAddressBook()
      .then((res: any) => {
        console.log("----------------res", res);
      })
      .catch(() => {
        console.log("-------------报错啦");
      });
  }

  clickMethod() {
    console.log(";;;;;;;;;");
    rxevent.publish(EventKeys.Justin, "2312312312");
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "./address-book.scss";
</style>
