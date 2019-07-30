<template>
  <div id="app">
    <v-header />
    <router-view class="router-view" />
    <v-footer />
    <v-suspension />
  </div>
</template>
<script lang="ts">
import vHeader from 'components/header/index.vue';
import vFooter from 'components/footer/index.vue';
import vSuspension from 'components/suspension/index.vue';

import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    vHeader,
    vFooter,
    vSuspension
  },
})
export default class Home extends Vue {

}
</script>
<style lang="scss">
@import './assets/css/common.scss';

#app{
  height: 100%;
}
.router-view{
  padding-top: 66px;
}
</style>
