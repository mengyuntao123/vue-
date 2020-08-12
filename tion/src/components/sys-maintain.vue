<template>
  <div>


    <div class="search">
      <el-input
    placeholder="请输入内容"
    suffix-icon="el-icon-search">
   
  </el-input></div>
 
<!-- <button @click="btn()">搜索</button> -->
    <!-- <vue-particles  
        color="#fff"
        :particleOpacity="0.8"
        :particlesNumber="60"
        shapeType="circle"
        :particleSize="6"
        linesColor="#fff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.6"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
      >
      </vue-particles> -->
      


   <el-table 
      :data="orderLit"
      style="width: 100%;"
      border
     
      >
      <el-table-column
        prop="id"
        label="id"
        align="center"
        
         >
      </el-table-column>

      <el-table-column
        prop="name"
        label="姓名"
        align="center"
        >
      </el-table-column>

      <el-table-column
        prop="address"
        label="地址"
        align="center"
        >
      </el-table-column>

       <el-table-column
        prop="data"
        label="日期"
        align="center"
        >
      </el-table-column>

      <el-table-column
        prop="num"
        label="次数"
        align="center"
        >
      </el-table-column>

      <el-table-column
        prop="price"
        label="价钱"
        align="center"
        >
      </el-table-column>

      <el-table-column 
      label="操作"
      width=230
      >
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="studentEdit(scope.$index, scope.row)">修改</el-button>
            <el-button type="danger" size="small" @click.native.prevent="deleteRow(scope.$index, studentData)">上架</el-button>
             <el-button type="danger" size="small" @click.native.prevent="deleteRow(scope.$index, studentData)">启用</el-button>
          </template>
      </el-table-column>

      
    </el-table>

   
    </div>
</template>

<script>
export default {
  data() {
    return {
    orderLit:[],
    search:'',
    searchData:[],        
    }
  },
  methods: {
     async fg(){
      let {data}= await this.axios.get("../../static/da.json");
      // console.log(data);
     this.orderLit=data.orderLit
       },
      
  },
  mounted(){
    this.fg()
    // console.log(data)
  },
  components: {
      
  }

}
</script>

<style scoped>

.search{
  width: 65%;
  margin: 30px auto;
}
</style>
