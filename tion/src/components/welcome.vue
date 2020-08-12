<template>
  <div>



<div class="success">

  <div>
     <el-input v-model="forma.id"  placeholder="请输入搜索id">
      </el-input>
     <!-- <input type="text" placeholder="请输入您需要查询的内容" v-model="forma.id"> -->
       <el-input v-model="forma.name"  placeholder="请输入搜索内容">
      </el-input>
       
   
    <el-select v-model="forma.name" placeholder="请选择活动区域">
      <el-option label="借展归还" value="借展归还"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
 
  </div>
      <el-button type="primary" @click="searchCon(forma)" icon="el-icon-search">搜索</el-button>
      <el-button type="primary" @click="rest">重置</el-button>
      <el-button type="primary" @click="exportExcle ">导出</el-button>
      <el-button type="primary" @click="exportSelect">下拉框导出</el-button>
</div>
    
  



   <el-table 
      :data="listSearch.slice((currpage-1)*pagesize,currpage*pagesize)" border 
      style="width: 100%;"
      :header-cell-style="{
      'background-color': '#25a0fe',
      'color': 'white',
      'border': 'none'
    }"
    @selection-change="handleSelectionChange"
      >

      <el-table-column type="selection" align="center" width="55"  >
      </el-table-column>

      <el-table-column prop="id" label="入库单编号" align="center">
      </el-table-column>

      <el-table-column prop="date" label="文物日期" align="center">
      </el-table-column>

      <el-table-column prop="name" label="入库人" align="center">
      </el-table-column>

     <el-table-column prop="type" label="类型" align="center"
      :filters="[{ text: '借展归还', value: '借展归还' }, { text: '馆内入库', value: '馆内入库' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.tag === '借展归还' ? 'warning' : ''"
         
          disable-transitions>{{scope.row.tag}}</el-tag>
      </template>>
       
     </el-table-column>


      <el-table-column prop="num" label="数量" align="center">
      </el-table-column>

     
      <el-table-column prop="person" label="检验人" align="center">
      </el-table-column> 
      

      <el-table-column label="操作" align="center">
      <template slot-scope="scope">
        <el-button type="primary" size="small" @click="studentEdit(scope.$index, scope.row)">详情</el-button>
        <i class="el-icon-search"></i>
      </template>
      </el-table-column>
    </el-table>

   <el-pagination
      center
      background
      layout="prev, pager, next, sizes, total, jumper"
      :page-sizes="[4,6,8,10]"
      :page-size="pagesize"
      :total="listSearch.length"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    >

    </el-pagination>
    
    
   



   <p>{{eaydate|dateFilter}}</p>
  </div> 
  
</template>





<script>
export default {
  data() {
    return {
    isCollapse: true,
    search: "",
    eaydate:[1,2,3,4,5,6],
     
    forma:{
       id:"",
       name:""
    },
    list: [
      {id:1,date:"2020-07-22",name:"上路巩州遇虎熊",tag:"借展归还",num:6,person:"张三"},
      {id:2,date:"2020-07-22",name:"五百年前一场疯",tag:"馆内入库",num:6,person:"张三"},
      {id:3,date:"2020-07-22",name:"腾宵又是孙悟空",tag:"出土文物",num:6,person:"张三"},
      {id:4,date:"2020-07-22",name:"失马鹰愁涧白龙",tag:"盘点入库",num:6,person:"张三"},
      {id:5,date:"2020-07-22",name:"沙河阻断路难通",tag:"借展归还",num:6,person:"张三"},
      {id:6,date:"2020-07-22",name:"福陵山中收天蓬",tag:"借展归还",num:6,person:"张三"},
    ],
    listSearch: [],
    pagesize: 6,
    currpage: 1,

    multipleSelection:[]
    }
  },
  created(){

    this.searchCon({});
  },
  filters:{
    
  },
  methods: {
   toggle(){
     this.isCollapse=!this.isCollapse
   },
   rest(){
     this.forma.id="";
     this.forma.name="";
     this.listSearch=this.list
   },
   
   searchCon({id,name}){
 
        this.listSearch = this.list.filter((text) => { //使用过滤方法
          let matchid=true;
          let matchname=true;
          if(id){
          
            matchid=text.id==id;
          
          };
          if(name){
            // debugger
            const keys=name.toUpperCase().replace("","").split("");
            // console.log(keys)
            matchname=keys.every(key=>text.tag.toUpperCase().includes(key));
           
            // console.log(matchname)
          } 
          
          return matchid && matchname
         
        });
        
        // console.log( this.listSearch)

   },
    handleCurrentChange(cpage) {
        this.currpage = cpage;
        console.log(this.currpage);//1
      },
    handleSizeChange(psize) {
        this.pagesize = psize;
        console.log(this.pagesize);//6
      },
    filterTag(value, row) {
        return row.tag === value;
      },
    studentEdit(index,row){
        console.log(row);
         this.$alert(
        `<p><span>姓名:&nbsp</span>${row.name}</p>
        
         <p><span>日期:&nbsp</span>${row.date}</p>
         <p><span>类型:&nbsp</span>${row.tag}</p>
         <p><span>数量:&nbsp</span>${row.num}</p>
         <p><span>检验人:&nbsp</span>${row.person}</p>
         `, '详情', 
         {
          dangerouslyUseHTMLString: true
        });
    },
     exportExcle() {
         //excel数据导出
         require.ensure([], () => {
           const {
             export_json_to_excel
           } = require('../js/Export2Excel');
           const tHeader = ['入库单编号','文物日期', '入库人', '类型', '数量',"检验人"];
           const filterVal = ['id','date', 'name', 'tag', 'num',"person"];
           const list = this.listSearch;
           const data = this.formatJson(filterVal, list);
           export_json_to_excel(tHeader, data, '用户列表');
         })
       },
       formatJson(filterVal, jsonData) {
         return jsonData.map(v => filterVal.map(j => v[j]))
       },
       exportSelect(){
        
         require.ensure([], () => {
           const {
             export_json_to_excel
           } = require('../js/Export2Excel');
           const tHeader = ['入库单编号','文物日期', '入库人', '类型', '数量',"检验人"];
           const filterVal = ['id','date', 'name', 'tag', 'num',"person"];
           const list = this.multipleSelection;
           const data = this.formatJson(filterVal, list);
           export_json_to_excel(tHeader, data, '用户列表');
         })
        console.log(this.multipleSelection)
       },
       handleSelectionChange(val){
        this.multipleSelection=val;
       }

  },
   mounted(){
   
  },
  components: {

  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    /* min-height: 400px; */
  }
.el-table__header{
    width: 100% !important;
}
.el-table__body{
    width: 100% !important;
}
  .success{
      display: flex;
      justify-content: center;
      margin: 30px;
  }
  .success div{
    width: 65%;
    display: flex;
  }
  
  .el-input{
    margin-right: 12px;
  }
  .el-select{
    margin-right: 12px;
  }
  .el-pagination{
    text-align: center;
    margin-top: 12px;
  }
  .el-button{
    border-radius: 6px;
  }
  .el-icon-search{
    font-size: 20px;
    color: #25a0fe;
    margin-left: 6px;
  }
  p{
  color:black
}
  .el-message-box__message p{
    font-size: 20px;
    margin-top: 6px;
  }
  .has-gutter tr{
    border-right: 1px red solid;
  }
</style>
