<template>
  <div class="address-book">address-book</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Getter } from "vuex-class";
import { Apptypes } from "../../store/types/app-types";
import addressBookService from "../../api/address-book-service";

@Component({})
export default class AddressBook extends Vue {
  @Getter(Apptypes.getters.CONFIGS)
  configs: any;

  created() {
    console.log("-------------", this.configs);
    addressBookService.getAddressBook().then((res: any) => {
      console.log("----------------res", res);
    }).catch(() => {
      console.log('-------------报错啦')
    });
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "./address-book.scss";
</style>
