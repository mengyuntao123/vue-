<template>
  <div>


 
<div class="success">

  <div>
     <el-input v-model="forma.name"  placeholder="请输入搜索姓名">
      </el-input>
     <!-- <input type="text" placeholder="请输入您需要查询的内容" v-model="forma.id"> -->
       <el-input v-model="forma.username"  placeholder="请输入搜索昵称">
      </el-input>
       
   
    <el-select v-model="value" @change="currentSel">
     <el-option
        v-for="item in userStatus"
        :key="item.value"
        :label="item.label"
        :value="item.value">
 </el-option>
    </el-select>
 
  </div>
      <el-button type="primary" @click="searchCon" icon="el-icon-search">搜索</el-button>
      <el-button type="primary" @click="rest">重置</el-button>
</div>
    
  

<el-button class="btn" style="margin-bottom:12px;" type="primary" icon="el-icon-edit" @click="addDialog" >创建角色</el-button>

   <el-table 
      :data="list" border 
      style="width: 100%;"
      :header-cell-style="{
      'background-color': '#25a0fe',
      'color': 'white',
      'border': 'none'
    }"
    @selection-change="handleSelectionChange"
      >

      
      <!-- <el-table-column type="index" align="center">
      </el-table-column> -->


      <el-table-column prop="roleName" label="用户" align="center">
      </el-table-column>

      
     
       <el-table-column label="状态" prop="available" width="240" align="center">
           <template slot-scope="scope">
                  <el-tag type="success" v-if="scope.row.available == '0'">启用</el-tag>
                  <el-tag type="warning" v-if="scope.row.available == '1'">禁用</el-tag>
              </template>
      </el-table-column>


        <el-table-column label="描述" prop="remark" width="240" align="center">
                 
      </el-table-column>

      
       
      


      

      <el-table-column label="操作" align="center">
      <template slot-scope="scope">
        <el-button type="danger"  v-if="scope.row.enable" size="small" icon="el-icon-delete" @click="removeUserById(scope.$index, scope.row)" circle>禁用</el-button>
        <el-button type="primary"  v-else size="small" icon="el-icon-paperclip" @click="removeUserById(scope.$index, scope.row)" circle>启用</el-button>
       
       
        <el-button type="warning" icon="el-icon-setting" size="small" @click="showEditRightDialog(scope.row)">修改角色</el-button>
      </template>
      </el-table-column>
    </el-table>

   <el-pagination
      center
      background
      layout="prev, pager, next,  total, jumper"

      :page-size="limit"
      :total="this.total"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    >

    </el-pagination>
    
    
   
   <!--添加用户的对话框-->
<el-dialog title="创建用戶" :visible.sync="addDialogVisible" width="30%" @close="addDialogClosed('addForm')">
      <!--内容主体区域-->
      <el-form :model="addForm" :rules="addFormRules" ref="addForm" label-width="90px">
        
        <el-form-item label="角色名" prop="name">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        

        <el-form-item label="角色描述" prop="desrc">
          <el-input v-model="addForm.desrc"></el-input>
        </el-form-item>
        
        
      </el-form>
      <!--底部按钮区域-->
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addRole('addForm')">确 定</el-button>
      </span>
</el-dialog>


<el-dialog title="修改角色"
      :visible.sync="editDialogVisible"
      width="30%"
      @close="editDialogClosed()"
    >  
     
      <!--内容主体区域-->
      <el-form :model="editForm" :rules="addFormRules" ref="editForm" label-width="90px">
        
        <el-form-item label="角色名" prop="roleName">
          <el-input v-model="editForm.roleName"></el-input>
        </el-form-item>
        

        <el-form-item label="角色描述" prop="remark">
          <el-input v-model="editForm.remark"></el-input>
        </el-form-item>
        
        
      </el-form>
      <!--底部按钮区域-->
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editDialogVisible = false,editRoleInfo()">确 定</el-button>
      </span>
</el-dialog>
   <!-- <p>{{eaydate|dateFilter}}</p> -->
  </div> 
  
</template>





<script>
export default {
  data() {
    return {
    labelPosition: 'top',
    addDialogVisible: false, // 控制添加角色对话框是否显示
    editDialogVisible: false, // 控制修改角色信息对话框是否显示
    isCollapse: true,
    search: "",
    userStatus:[
      {value:"0",label:"启用"},
      {value:"1",label:"禁用"}
    ], 
    value:"0",
    //搜索的条件数据
    forma:{
       name:"",
       username:"",
    },
    list: [],
    page: 1,
    limit: 10,
    total:0,

    multipleSelection:[],
    addFormRules: {
        name: [
          { required: true, message: '请输入角色名称', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        desrc: [
          { required: true, message: '请输入角色描述', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ]
      },
    addForm: {
         username:"",
         desrc:"",
         name:"",
      },
     
     
    editForm:{
        remark:"",
        roleName:"",
      }
    }
  },
  created(){

       
  },
  methods: {

     
     
    getUserList(page,limit){
        this.axios.get("/sys/role?page="+ page +"&limit="+ limit )
        .then(res=>{
          console.log(res.data.data.records);
          this.list=res.data.data.records;
          this.total=res.data.data.total
        })
    },


    getRole(){
       
    },

    addDialog(){
      this.addDialogVisible=true;
      
    },
   
  
    
    toggle(){
        this.isCollapse=!this.isCollapse
    },
  
   
    handleCurrentChange(cpage) {
        this.page = cpage;
        // console.log(cpage);//1
        this.getUserList(this.page,this.limit)

      },
    handleSizeChange(psize) {
        this.limit = psize;
        // console.log(this.pagesize);//6
        
      },
    filterTag(value, row) {
        return row.tag === value;
      },
    //下拉框
    currentSel(value, item){
       console.log(value)
    },

  
    //查询
    searchCon(){
      
      
    },

    
    rest(){
        
      },
      

    
    //禁用或者启用
    removeUserById(index,rows){
        console.log(rows.id);
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        
          this.axios.delete("/sys/role/"+rows.id)
          .then(res=>{
              console.log(res);
          this.getUserList(this.page,this.limit);
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
        
          
       },
    
    handleSelectionChange(val){
         this.multipleSelection=val;
       },

    

    //添加角色
    addRole(formName){
        var addObj={
          remark:this.addForm.desrc,
          roleName:this.addForm.name,
          
        }
        // console.log(addObj)

       this.axios.post("/sys/role",
            addObj
       ).then(res=>{
         console.log(res);
         this.getUserList(this.page,this.limit);
         this.addDialogVisible=false
       })

       this.$refs[formName].resetFields();
    },



    addDialogClosed(formName) {
    // 表单内容重置为空
    this.$refs[formName].resetFields(); // 通过ref引用调用resetFields方法
    },

    //修改角色
    showEditRightDialog(row){
         console.log(row)
        //  this.id=row.id
        this.editForm = Object.assign({}, row);

         this.editDialogVisible=true;
      
       },

    editDialogClosed(){
        
    },
    
    //确定修改角色
    editRoleInfo(){
       this.axios.put("/sys/role",this.editForm)
       .then(res=>{
         console.log(res);
        if(res.data.code!=200) return  this.$message.error('修改失败');
        this.$message.success("修改成功")
         this.getUserList(this.page,this.limit);
       })
      
    }

  },

   created(){//调用方法获取数据
     this.getUserList(this.page,this.limit);
    //  this.getRole();

  },


  components: {

  }
}
</script>

<style scoped>
@import url("../../assets/css/index");
</style>
