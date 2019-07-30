//获取数据方法名: getList
import { Vue, Component } from 'vue-property-decorator'

/**
* mixins
*/
@Component({})
export default class Table extends Vue {
  //当前页
  currentPage: number = 1;
  //每页大小
  pageSize: number = 10;
  //总页数
  total: number = 0;
  //页码数量
  pageSizeList: Array<number> = [10, 20, 30, 40, 50, 100];
  //表格数据
  tableData: Array<object> = [];
  //表格选中数据
  selectTbaleData: Array<object> = [];

  public getList(){};

  //存储表格选中数据
  selectionChange(selection: Array<object>){
    this.selectTbaleData = selection;
  }
  //选择每页显示条数触发
  handleSizeChange(val: number) {
    this.currentPage = 1;
    this.pageSize = val;
    this.getList();
  }
  //点击页码触发
  handleCurrentChange(val: number) {
    this.currentPage = val;
    this.getList();
  }
}
