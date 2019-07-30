<template>
  <!-- 开通赛事平台 -->
  <div class="v-open-match">
    <el-dialog
      title="开通赛事平台"
      :visible.sync="showValue"
      append-to-body
      width="700px"
      @close="_ =>{ this.$refs.vMatch.resetForm() }"
      class="dialog-open-match">
      <v-match @ok="ok" ref="vMatch"></v-match>
    </el-dialog>
  </div>
</template>
<script lang="ts">
  import modalMixin from "@/mixins/modal.ts";
  import vMatch from './match.vue';
  import { Component, Vue, Emit } from 'vue-property-decorator';

  @Component({
    components: {
      vMatch
    },
    mixins: [ modalMixin ]
  })
  export default class VOpenMatch extends Vue {

    // @Emit()
    ok() {
      this.$emit('update:value', false);
    }
  }
</script>

<style scoped lang="scss">
</style>
