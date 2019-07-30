import { Vue, Prop, Watch, Component } from 'vue-property-decorator'

/**
* mixins
*/
@Component({})
export default class Modal extends Vue {
  @Prop({ default: false }) value!: boolean;
  private showValue: boolean = false;

  @Watch('value')
  valueChange(val: boolean){
    this.showValue = val;
  }

  @Watch('showValue')
  showValueChange(val: boolean){
    this.$emit('update:value', val);
  }
}
