<template>
  <div>
 
 <div class="dormitory">
   <el-button   type="primary" @click="toggleSelection()">一堆删除</el-button>
   <el-button   type="primary" @click="addStudent()">新增按钮</el-button>
    <div class="searchWord">
      <!-- <div style="display: inline-block"> 搜索：</div> -->
      <el-input v-model="search" style="display: inline-block;width: 600px" 
        placeholder="请输入搜索内容"
        prefix-icon="el-icon-search"

        >
        
      </el-input>
    </div>
   
</div>


<el-dialog title="新增学生信息" :visible="addstudentForm" size="tiny" :modal-append-to-body='false' @close='closeDialog'>
 <el-form id="#addsForm" ref="addsForm" :model="addsForm" label-width="80px">
    <el-form-item label="学号" prop="idCr">
      <el-input  v-model="addsForm.idCr" max-length="10"></el-input>
    </el-form-item>
    <el-form-item label="姓名" prop="name">
      <el-input v-model="addsForm.name"></el-input>
    </el-form-item>
    <el-form-item label="年龄" prop="age">
      <el-input v-model="addsForm.age"></el-input>
    </el-form-item>
    <el-form-item label="性别" prop="sex">
      <el-input v-model="addsForm.sex"></el-input>
    </el-form-item>
    <el-form-item label="专业" prop="mar">
      <el-input v-model="addsForm.mar"></el-input>
    </el-form-item>
    <el-form-item label="院系" prop="depar">
      <el-input v-model="addsForm.depar"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="studentAdd()">确定</el-button>
      <el-button @click="addstudentForm = false;canceladdT('formt')">取消</el-button>
    </el-form-item>
  </el-form>
</el-dialog>




<el-dialog title="编辑学生信息" :visible="editstudentForm" size="tiny" :modal-append-to-body='false' @close='closeDialog'>
  <el-form ref="editsForm" :model="editsForm" label-width="80px">
    <el-form-item label="学号">
      <el-input  v-model="editsForm.idCr" max-length="10" disabled="disabled"></el-input>
    </el-form-item>
    <el-form-item label="姓名">
      <el-input v-model="editsForm.name"></el-input>
    </el-form-item>
    <el-form-item label="年龄">
      <el-input v-model="editsForm.age"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-input v-model="editsForm.sex"></el-input>
    </el-form-item>
    <el-form-item label="专业">
      <el-input v-model="editsForm.mar"></el-input>
    </el-form-item>
    <el-form-item label="院系">
      <el-input v-model="editsForm.depar"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="studentcEdit()">确定</el-button>
      <el-button @click="editstudentForm = false">取消</el-button>
    </el-form-item>
  </el-form>
</el-dialog>

                                                 
<el-table ref="studentData"  id="out-table" style="width: 100%"
:data="tableR.slice((currpage-1)*pagesize,currpage*pagesize)" border 



@selection-change="handleSelectionChange"
>
       <el-table-column
        type="selection"
        align="center"
        width="55" >
      </el-table-column>
  <el-table-column prop="idCr"  label="学号"   align="center"></el-table-column>
  <el-table-column prop="name"  label="姓名"   align="center"></el-table-column>
  <el-table-column prop="age"   label="年龄"   align="center"></el-table-column>
  <el-table-column prop="sex"   label="性别"   align="center"></el-table-column>
  <el-table-column prop="mar"   label="专业"   align="center"></el-table-column>
  <el-table-column prop="depar" label="院系"   align="center"></el-table-column>
  <el-table-column label="操作" align="center">
    <template slot-scope="scope">
      <el-button type="primary" size="small" @click="studentEdit(scope.$index, scope.row)">编辑</el-button>
      <el-button type="danger" size="small" @click.native.prevent="deleteRow(scope.$index, studentData)">删除</el-button>
    </template>
  </el-table-column>
</el-table>


  <el-pagination
      center
      background
      layout="prev, pager, next, sizes, total, jumper"
      :page-sizes="[4,6,8,10]"
      :page-size="pagesize"
      :total="tableR.length"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    >

    </el-pagination>

     <!-- <button @click="exportExcel">点击导出</button> -->
  </div>
</template>

<script>

var _index;
// import FileSaver from "file-saver";
// import XLSX from "xlsx";
export default {
  data() {
    return {
    studentData:[
      {
        idCr:1,
        name:"大",
        age:18,
        sex:"男",
        mar:"kl",
        depar:"ppp"
      },
      {
        idCr:8,
        name:"小",
        age:18,
        sex:"男",
        mar:"kl",
        depar:"ppp"
      },
      {
        idCr:56,
        name:"中",
        age:18,
        sex:"男",
        mar:"kl",
        depar:"ppp"
      },
      {
        idCr:69,
        name:"你",
        age:18,
        sex:"男",
        mar:"kl",
        depar:"ppp"
      },
      {
        idCr:32,
        name:"我",
        age:18,
        sex:"男",
        mar:"kl",
        depar:"ppp"
      },
      {
        idCr:50,
        name:"他",
        age:18,
        sex:"男",
        mar:"kl",
        depar:"ppp"
      }
    ],
    addstudentForm:false,
    editstudentForm:false,
    search: '',
    tableChecked:[],//被选中的记录数据
 
    addsForm:{
    idCr:'',
    name:'',
    age:"",
    sex:'',
    mar:'',
    depar:'',
},
   editsForm:{
  idCr:'',
  name:'',
  age:"",
  sex:'',
  mar:'',
  depar:'',
},

    search:'',
    pagesize: 6,
    currpage: 1,

    }
  },
  methods: {
     deleteRow(index,rows){//删除行
      //  console.log(index,rows);
       rows.splice(index, 1);
     },
     studentEdit(index,row){//编辑行
       console.log(index,row);
        this.editstudentForm = true; //编辑信息模态框显示
        this.editsForm = Object.assign({}, row);  //获得所有数据显示在编辑信息模态框里面
        console.log(this.editsForm)
        _index=index;
     },

     studentcEdit(){//把编辑的值赋给原来的数组
       console.log(_index);

         this.$confirm('确定修改此内容？', '确认信息', {
          distinguishCancelAndClose: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        })
          .then(() => {
              this.studentData[_index].idCr=this.editsForm.idCr;
              this.studentData[_index].name=this.editsForm.name;
              this.studentData[_index].age=this.editsForm.age;
              this.studentData[_index].sex=this.editsForm.sex;
              this.studentData[_index].mar=this.editsForm.mar;
              this.studentData[_index].depar=this.editsForm.depar;
              this.editstudentForm=false;

            this.$message({
              type: 'info',
              message: '修改成功'
            });
          })
          .catch(action => {
            this.$message({
              type: 'info',
              message: action === 'cancel'
                ? '修改'
                : '修格斯'
            })
          });
             
          
          
      

       

     },
     closeDialog(){//关闭模弹框
      this.addstudentForm = false;
      this.editstudentForm = false;
     }, 
     addStudent(){//打开按钮
       this.addstudentForm=true
     },
     studentAdd(){//增加和数组
       this.studentData.unshift({
         idCr:this.addsForm.idCr,
         name:this.addsForm.name,
         age:this.addsForm.age,
         sex:this.addsForm.sex,
         mar:this.addsForm.mar,
         depar:this.addsForm.depar
       });
       this.addstudentForm=false;
     },
     canceladdT(){
        this.addstudentForm=false;
     },

      handleCurrentChange(cpage) {
        this.currpage = cpage;
        console.log(this.currpage);//1
      },
      handleSizeChange(psize) {
        this.pagesize = psize;
        console.log(this.pagesize);//6
      },
      toggleSelection(){
       for (let i = 0; i <  this.tableChecked.length; i++) {
          let val =  this.tableChecked;
          
          // 获取选中行的索引的方法
          // 遍历表格中tableData数据和选中的val数据，比较它们的rowNum,相等则输出选中行的索引
          // rowNum的作用主要是为了让每一行有一个唯一的数据，方便比较，可以根据个人的开发需求从后台传入特定的数据
          val.forEach((val, index) => {
            console.log(val,index)
            this.tableR.forEach((v, i) => {
              
              if (val.idCr === v.idCr) {
                console.log(i)
                // i 为选中的索引
                this.tableR.splice(i, 1)
                
              }
            })
          })
        }
     },
     handleSelectionChange(val) {
        this.tableChecked = val;
      },

     },
  computed: {
      // 模糊搜索
      tableR () {
        const search = this.search
        if (search) {
          // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
          // 注意： filter() 不会对空数组进行检测。
          // 注意： filter() 不会改变原始数组。
          return this.studentData.filter(data => {
            // console.log(data.name)
            // some() 方法用于检测数组中的元素是否满足指定条件;
            // some() 方法会依次执行数组的每个元素：
            // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测;
            // 如果没有满足条件的元素，则返回false。
            // 注意： some() 不会对空数组进行检测。
            // 注意： some() 不会改变原始数组。
            return Object.keys(data.name).some(key => {
              
              // indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；
              // 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。
              return String(data.name[key]).toLowerCase().indexOf(search) > -1
            })
          })
        }
        return this.studentData
      }
    },
  mounted(){
   
  },

}
</script>

<style scoped>
.dormitory{
  display: flex;
  margin: 30px;
  margin-left: 0px;
}
.el-input{
  margin-left: 12px;
}
.el-pagination{
  text-align: center;
  margin-top: 12px;
}
</style>
