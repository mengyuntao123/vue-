<template>
  <div>
   <div class="echart">
     <div class="ech_left">
       <div class="left_top">
         <div class="left_top_ct">
           <div class="circle">
            <p class="sixn">666</p>
            <p>库房</p>
          </div>

          <div class="circle">
            <p class="sixn">666</p>
            <p>库房</p>
          </div>

          <div class="circle">
            <p class="sixn">666</p>
            <p>库房</p>
          </div>
         </div>
          
       </div>
       <div class="left_bottom">
        <div id="myChart" :style="{width: '90%', height: '302px'}"></div>
       </div>
     </div>
     <div class="ech_right">
       <Echar></Echar>
     </div>
   </div>

   <div class="tabl"> 
    
    <div class="tab_left">
      <div class="rlh">
      <div class="rl"><p><i class="el-icon-warning"></i> <span>待办任务</span></p> 
      <el-button type="primary" icon="el-icon-search">更多</el-button></div>
      </div>
       <el-table :data="orderLit" style="width: 100%;" border>
      <el-table-column  prop="id" label="id" align="center">
      </el-table-column>

      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>

      <el-table-column prop="address" label="地址" align="center">
      </el-table-column>

       <el-table-column prop="data" label="日期" align="center">
      </el-table-column>

      <el-table-column prop="num" label="次数" align="center">
      </el-table-column>

      <el-table-column prop="price" label="价钱" align="center">
      </el-table-column>
    </el-table>

    </div>


    <div class="tab_right">
    <div class="rlh">
      <div class="rl"><p><i class="el-icon-warning"></i> <span>安全事件</span></p> 
      <el-button type="primary" icon="el-icon-search">更多</el-button></div>
      </div>  
    <el-table :data="orderLit" style="width: 100%;" border>
      <el-table-column  prop="id" label="id" align="center">
      </el-table-column>

      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>

      <el-table-column prop="address" label="地址" align="center">
      </el-table-column>

       <el-table-column prop="data" label="日期" align="center">
      </el-table-column>

      <el-table-column prop="num" label="次数" align="center">
      </el-table-column>

      <el-table-column prop="price" label="价钱" align="center">
      </el-table-column>
    </el-table>
    </div>
   </div>
   
   <div class="foo" style=" width:100%; height:16px;"></div>
  </div>
</template>

<script>
import Echar from "./echart"
export default {
  data() {
    return {

       orderLit:[],

    }
  },
  methods: {
      drawLine(){

              // 基于准备好的dom，初始化echarts实例
              let myChart = this.$echarts.init(document.getElementById('myChart'))
              // 绘制图表
              myChart.setOption({
                  title: { text: '' },
                  tooltip: {},
                  xAxis: {
                      data: ["陶瓷","铜器","铁器","金器","玉器","陶器"]
                  },
                  yAxis: {},
                  series: [{
                      name: '销量',
                      type: 'bar',
                      data: [5, 20, 36, 10, 10, 20]
                  }]
              });
      },

      async fg(){
          // let {data}= await this.axios.get("../../static/da.json");
          // // console.log(data);
          // this.orderLit=data.orderLit
       },
  },
  mounted(){
    this.drawLine();
    this.fg();
  },
  // watch:{
  //     $route(to,form){
       
  //      console.log(to)
  //     }
  // },
  components: {
    Echar:Echar
  }
}
</script>

<style scoped lang="less">

.echart{
  width: 100%;
  height: 560px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .ech_left{
    width: 50%;
    // flex: 1;
    height: 560px;
    // box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .left_top{
      width:100%;
      height: 220px;
      box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28); 
      border-radius: 12px;
      
      .left_top_ct{
        width: 90%;
        height: 220px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        .left_top_ct :nth-of-type(2){
          background: #f64f77;
        }
        .circle{
            width: 135px;
            height: 100px;
            background: #1ca3ff;
            font-size: 16px;
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        .sixn{
            font-size: 20px;
            margin-bottom: 6px;
        }
      }
      }
      
    }
    .left_bottom{
      width: 100%;
      height: 300px;
      box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28); 
      border-radius: 12px;
      display: flex;
      justify-content: center;
    }
  }
  .ech_right{
    width: 50%;
    // flex: 1;
    height: 560px;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
    margin-left: 35px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
  }
}
.tabl{
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  margin-top: 12px;
  
  
  .tab_left{
    width: 50%;
    height: 300px;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28); 
    border-radius: 12px;
  }
  .tab_right{
    width: 50%;
    height: 300px;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28); 
    margin-left: 36px;
    border-radius: 12px;
  }
  .el-table{
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
}


.rlh{
  width: 100%;
  height: 55px;
  // border-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background: #fdf1dc;
  .rl{
  width: 98%;
  height: 55px;
  margin: 0 auto;
  // background: #fdf1dc;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .el-icon-warning{
    font-size: 20px;
    color: red;
  }
  span{
    color: #fdb855;
  }
    
}
}
</style>
