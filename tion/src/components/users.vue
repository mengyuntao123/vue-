<template>
  <div>



 <el-table
    :data="tableData"
    style="width: 100%"
    border
    >
    <el-table-column type="expand">
      <template slot-scope="props">
        <!-- 一级 -->
       <el-row class="row-outer" v-for="(item,index) in tok" :key="index"  >
          <el-col class="level-1" :span="5">
        <el-tag closable type="primary" @close="removeTag(roleId, level1.id)">
          {{ item.moduleGroupName }}
        </el-tag>
        <i class="el-icon-caret-right"></i>
      </el-col>

        <!-- 二级 -->
      <el-col class="level-3" :span="16">
            <el-tag
              v-for="(item1, i) in item.moduleList"
              :key="i"
              closable
              type="warning"
              @close="removeTag(roleId, level3.id)"
            >
              {{ item1.moduleGroupName }}
            </el-tag>
          </el-col>
       </el-row>
      </template>
    </el-table-column>
    <el-table-column
      label="商品 ID"
      prop="id">
    </el-table-column>
    <el-table-column
      label="商品名称"
      prop="name">
    </el-table-column>
    <el-table-column


      label="描述"
      prop="desc">
    </el-table-column>
    <el-table-column
      label="操作"
      prop="desc"
      >
      <template slot-scope="scope">
         <el-button type="primary" size="small" @click="showSetRightDialog(scope.row)">编辑</el-button>
          <!-- <el-button size="mini" type="warning" icon="el-icon-setting"
              @click="showSetRightDialog(scoped.row)">分配</el-button> -->
      </template>
    
    </el-table-column>
  </el-table>
    
 


<el-dialog title="分配" :visible.sync="setRightDialogVisible"
      width="50%">
      <!--内容主体区域-->
     <el-tree
  :data="treeLit"
  show-checkbox
  node-key="moduleGroupId"
  :default-expanded-keys="[1, 2]"
  :default-checked-keys="defKey"
  default-expand-all
  :props="defaultProps">
</el-tree>
      <!--底部按钮区域-->
      <span slot="footer" class="dialog-footer">
        <el-button @click="setRightDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="setRightDialogVisible = false">确 定</el-button>
      </span>
</el-dialog>




  </div>
</template>

<script>
export default {
  data() {
    return {
    treeLit:[],
    setRightDialogVisible: false,
    defaultProps: {
          children: 'moduleList',
          label: 'moduleGroupName'
        },
    defKey:[],
    tableData:[
      {
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }
    ],
    tok:[],
    rightsList:[]
       
    }
  },
  methods: {
   async showSetRightDialog(role){
      const {data:userPopedoms}= await this.axios.get("../../static/tok.json");
      this.rightsList=userPopedoms.data.userPopedoms;
      console.log(role.children); 
      this.setRightDialogVisible = true;
      this.getLeafKeys(role, this.defKey)
    },
    getLeafKeys(node, arr) { // 节点 数组
      console.log(node)
},
  
        
    
  },


created(){
  this.axios.get("../../static/mock.json")
  .then(data=>{
    this.treeLit=data.data.data.userPopedoms;
    console.log(this.treeLit)
  })
  this.axios.get("../../static/tok.json")
  .then(data=>{
    this.tok=data.data.data.userPopedoms;
    console.log(this.tok)
  })
  
},
  components: {

  }
}
</script>

<style scoped >

.el-table__header{
    width: 100% !important;
}
.el-table__body-wrappe /deep/ .el-table__body{
    width: 100% !important;
}
.el-row {
  border-bottom: 1px solid #dcdfe6;
}
.el-col {
  text-align: left !important;
}
.row-outer,
.row-inner {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
 
} 
.el-tag {
    margin-right: 10px;
  }


.el-tag {
  margin: 20px 10px;
}
</style>
