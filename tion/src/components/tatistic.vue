<template>
  <div>
    <h3>入库文物</h3>
    <div class="big">
      <div class="bg_ct">
         <div class="first">
           <div class="first_ct">
            <div class="newG">
              <div class="hidd">
                <div class="let">
                  <p>藏品总登记号:</p>
                 </div>
                <div class="ipt">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
                </div>

                 <div class="hidd">
                    <div class="let">
                      <p>辅助账号:</p>
                    </div>
                    <div class="ipt">
                      <el-input v-model="input" placeholder="请输入内容"></el-input>
                    </div>
                </div>

                 <div class="hidd">
                    <div class="let">
                      <p>索书号:</p>
                    </div>
                    <div class="ipt">
                      <el-input v-model="input" placeholder="请输入内容"></el-input>
                    </div>
                    </div>
            </div>

             <div class="newG">
              <div class="hidd">
                <div class="let">
                  <p>档案编号:</p>
                 </div>
                <div class="ipt">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
                </div>

                 <div class="hidd">
                    <div class="let">
                      <p>固定资产号:</p>
                    </div>
                    <div class="ipt">
                      <el-input v-model="input" placeholder="请输入内容"></el-input>
                    </div>
                </div>

                 <div class="hidd">
                    <div class="let">
                      <p>财产登记号:</p>
                    </div>
                    <div class="ipt">
                      <el-input v-model="input" placeholder="请输入内容"></el-input>
                    </div>
                    </div>
            </div>
             <div class="newG">
              <div class="hidd">
                <div class="let">
                  <p>出水(土)登记号</p>
                 </div>
                <div class="ipt">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
                </div>

                 <div class="hidd">
                    <div class="let">
                      <p>其他编号:</p>
                    </div>
                    <div class="ipt">
                      <el-input v-model="input" placeholder="请输入内容"></el-input>
                    </div>
                </div>

                 <div class="hidd">
                    
                    </div>
            </div>
            </div>
         </div>
         
         <h3></h3>
         <div class="two">
           <div class="two_ct">
             <div class="newG">
                  <div class="hidd">
                    <div class="let">
                      <p>名称:</p>
                    </div>
                    <div class="ipt">
                      <el-input v-model="input" placeholder="请输入内容"></el-input>
                    </div>
                </div>

                 <div class="hidd">
                      <div class="let">
                        <p>原名:</p>
                      </div>
                      <div class="ipt">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                      </div>
                    </div>

                    <div class="hidd">
                        
                    </div>
             </div>
              <div class="newG">
                  <div class="hidd">
                    <div class="let">
                      <p>具体年代:</p>
                    </div>
                    <div class="ipt">
                      <el-input v-model="input" placeholder="请输入内容"></el-input>
                    </div>
                </div>

                 <div class="hidd" style="width:65%;">
                      <div class="let" style="width:16.2%">
                        <p>年代:</p>
                      </div>
                      <div class="ipt" style="width:80%;display:flex;">
                       <el-select style="width:30%;" v-model="input" slot="prepend" placeholder="请选择">
                          <el-option label="餐厅名" value="1"></el-option>
                          <el-option label="订单号" value="2"></el-option>
                          <el-option label="用户电话" value="3"></el-option>
                       </el-select>
                       
                        <el-select style="width:30%;" v-model="input" slot="prepend" placeholder="请选择">
                          <el-option label="餐厅名" value="1"></el-option>
                          <el-option label="订单号" value="2"></el-option>
                          <el-option label="用户电话" value="3"></el-option>
                       </el-select>

                      <el-select style="width:30%;" v-model="input" slot="prepend" placeholder="请选择">
                          <el-option label="餐厅名" value="1"></el-option>
                          <el-option label="订单号" value="2"></el-option>
                          <el-option label="用户电话" value="3"></el-option>
                       </el-select>

                      <el-select style="width:30%;" v-model="input" slot="prepend" placeholder="请选择">
                          <el-option label="餐厅名" value="1"></el-option>
                          <el-option label="订单号" value="2"></el-option>
                          <el-option label="用户电话" value="3"></el-option>
                       </el-select>
                      </div>
                    </div>

                    <!-- <div class="hidd">
                       
                    </div> -->
             </div>
              

               <div class="newG">
                  <div class="hidd">
                    <div class="let">
                      <p>文物类别:</p>
                    </div>
                    <div class="ipt">
                      <el-input v-model="input" placeholder="请输入内容"></el-input>
                    </div>
                </div>

                 <div class="hidd">
                      <div class="let">
                        <p>质地-类别1:</p>
                      </div>
                      <div class="ipt">
                        <el-select v-model="input" slot="prepend" placeholder="请选择">
                          <el-option label="餐厅名" value="1"></el-option>
                          <el-option label="订单号" value="2"></el-option>
                          <el-option label="用户电话" value="3"></el-option>
                       </el-select>
                      </div>
                    </div>

                   <div class="hidd">
                      <div class="let">
                        <p>质地-类别2:</p>
                      </div>
                      <div class="ipt">
                         <el-select v-model="input" slot="prepend" placeholder="请选择">
                          <el-option label="餐厅名" value="1"></el-option>
                          <el-option label="订单号" value="2"></el-option>
                          <el-option label="用户电话" value="3"></el-option>
                       </el-select>
                      </div>
                    </div>
             </div>

             <div class="newG">
                  <div class="hidd">
                    <div class="let">
                      <p>质地:</p>
                    </div>
                    <div class="ipt">
                       <el-select v-model="input" slot="prepend" placeholder="请选择">
                          <el-option label="餐厅名" value="1"></el-option>
                          <el-option label="订单号" value="2"></el-option>
                          <el-option label="用户电话" value="3"></el-option>
                       </el-select>
                    </div>
                </div>

                 <div class="hidd">
                      <div class="let">
                        <p>文物级别:</p>
                      </div>
                      <div class="ipt">
                         <el-select v-model="input" slot="prepend" placeholder="请选择">
                          <el-option label="餐厅名" value="1"></el-option>
                          <el-option label="订单号" value="2"></el-option>
                          <el-option label="用户电话" value="3"></el-option>
                       </el-select>
                      </div>
                    </div>

                   <div class="hidd">
                      <div class="let">
                        <p>文物来源:</p>
                      </div>
                      <div class="ipt">
                         <el-select v-model="input" slot="prepend" placeholder="请选择">
                          <el-option label="餐厅名" value="1"></el-option>
                          <el-option label="订单号" value="2"></el-option>
                          <el-option label="用户电话" value="3"></el-option>
                       </el-select>
                      </div>
                    </div>
             </div>


             <div class="newG">
                  <div class="hidd">
                    <div class="let">
                      <p>完残程度:</p>
                    </div>
                    <div class="ipt">
                      <el-select v-model="input" slot="prepend" placeholder="请选择">
                          <el-option label="餐厅名" value="1"></el-option>
                          <el-option label="订单号" value="2"></el-option>
                          <el-option label="用户电话" value="3"></el-option>
                       </el-select>
                    </div>
                </div>

                 <div class="hidd">
                      <div class="let">
                        <p>完残状况:</p>
                      </div>
                      <div class="ipt">
                         <el-select v-model="input" slot="prepend" placeholder="请选择">
                          <el-option label="餐厅名" value="1"></el-option>
                          <el-option label="订单号" value="2"></el-option>
                          <el-option label="用户电话" value="3"></el-option>
                       </el-select>
                      </div>
                    </div>

                   <div class="hidd">
                      <div class="let">
                        <p>保存状态:</p>
                      </div>
                      <div class="ipt">
                         <el-select v-model="input" slot="prepend" placeholder="请选择">
                          <el-option label="餐厅名" value="1"></el-option>
                          <el-option label="订单号" value="2"></el-option>
                          <el-option label="用户电话" value="3"></el-option>
                       </el-select>
                      </div>
                    </div>
             </div>

              <div class="newG">
                  <div class="hidd">
                    <div class="let">
                      <p>入藏时间范围:</p>
                    </div>
                    <div class="ipt">
                      <el-select v-model="input" slot="prepend" placeholder="请选择">
                          <el-option label="餐厅名" value="1"></el-option>
                          <el-option label="订单号" value="2"></el-option>
                          <el-option label="用户电话" value="3"></el-option>
                       </el-select>
                    </div>
                </div>

                 <div class="hidd">
                      <div class="let">
                        <p>入藏年度:</p>
                      </div>
                      <div class="ipt">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                      </div>
                    </div>

                    <div class="hidd">
                        
                    </div>
             </div>
             </div>
           </div>
             



      
      
         <h3></h3>
      <div class="three">
        <div class="three_ct">
               <div class="newG">
                  <div class="hidd">
                    <div class="let">
                      <p>著者:</p>
                    </div>
                    <div class="ipt">
                      <el-input v-model="input" placeholder="请输入内容"></el-input>
                    </div>
                </div>

                 <div class="hidd">
                      <div class="let">
                        <p>版本:</p>
                      </div>
                      <div class="ipt">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                      </div>
                    </div>

                   <div class="hidd">
                      <div class="let">
                        <p>存卷:</p>
                      </div>
                      <div class="ipt">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                      </div>
                    </div>
             </div>
              <p style="color:black;margin-top:12px;margin-bottom:12px">外形尺寸:</p>
             <div class="newG">
                  <div class="hidd">
                    <div class="let">
                      <p>数量:</p>
                    </div>
                    <div class="ipt">
                      <el-input v-model="input" placeholder="请输入内容"></el-input>
                    </div>
                </div>

                 <div class="hidd">
                      <div class="let">
                        <p>通长:</p>
                      </div>
                      <div class="ipt">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                      </div>
                    </div>

                   <div class="hidd">
                      <div class="let">
                        <p>通宽:</p>
                      </div>
                      <div class="ipt">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                      </div>
                    </div>
             </div>

             <div class="newG">
                  <div class="hidd">
                    <div class="let">
                      <p>通高:</p>
                    </div>
                    <div class="ipt">
                      <el-input v-model="input" placeholder="请输入内容"></el-input>
                    </div>
                </div>

                 <div class="hidd">
                      <div class="let">
                        <p>具体尺寸:</p>
                      </div>
                      <div class="ipt">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                      </div>
                    </div>

                   <div class="hidd">
                      
                    </div>
             </div>

               <p style="color:black;margin-top:12px;margin-bottom:12px">质量:</p>


              <div class="newG">
                  <div class="hidd">
                    <div class="let">
                      <p>质量范围:</p>
                    </div>
                    <div class="ipt">
                      <el-select v-model="input" slot="prepend" placeholder="请选择">
                          <el-option label="餐厅名" value="1"></el-option>
                          <el-option label="订单号" value="2"></el-option>
                          <el-option label="用户电话" value="3"></el-option>
                       </el-select>
                    </div>
                </div>

                 <div class="hidd">
                      <div class="let">
                        <p>具体质量:</p>
                      </div>
                      <div class="ipt">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                      </div>
                    </div>

                   <div class="hidd">
                      <div class="let">
                        <p>质量单位:</p>
                      </div>
                      <div class="ipt">
                         <el-select v-model="input" slot="prepend" placeholder="请选择">
                          <el-option label="餐厅名" value="1"></el-option>
                          <el-option label="订单号" value="2"></el-option>
                          <el-option label="用户电话" value="3"></el-option>
                       </el-select>
                      </div>
                    </div>
             </div> 


             <div class="newG">
                  <div class="hidd">
                    <div class="let">
                      <p>仓库:</p>
                    </div>
                    <div class="ipt">
                     <el-select v-model="input" slot="prepend" placeholder="请选择">
                          <el-option label="餐厅名" value="1"></el-option>
                          <el-option label="订单号" value="2"></el-option>
                          <el-option label="用户电话" value="3"></el-option>
                       </el-select>
                    </div>
                </div>

                 <div class="hidd">
                      <div class="let">
                        <p>存放位置:</p>
                      </div>
                      <div class="ipt">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                      </div>
                    </div>

                    <div class="hidd">
                        
                    </div>
             </div>
        </div>
      </div>

         </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
         input:""
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="less" scoped >
  h3{
  width: 80px;
  color: #0f6598;
  border-bottom: 3px #0f6598 solid;
 }
 .big{
   width: 100%;
   border-top: 2px #c6e3fb solid;
 }
 .bg_ct{
   width: 80%;
 }
 .first{
   width: 100%;
   height: 200px; 

 }
 .first_ct{
   width: 100%;
   height: 180px; 
   background: #f0f8fb;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   padding-right: 12px;
 }
 .two{
   width: 100%;
   height: 379px; 
  //  margin-top: 12px; 
   border-top: 2px#c6e3fb solid ;
 }
 .two_ct{
   width: 100%;
   height: 350px; 
   background: #f0f8fb;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   padding-right: 12px;
  
 }
 .three{
   
   width: 100%;
   height: 390px; 
  //  margin-top: 12px;
   
   border-top: 2px #c6e3fb solid;
 
 }
 .three_ct{

   width: 100%;
   height: 380px; 
   background: #f0f8fb;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   padding-right: 12px;
 }
 .newG{
   width: 100%;
  
   display: flex;
   justify-content: space-between;
 }
 .ipt .el-select:nth-child(1){
   margin-left: 0px;
 }
 .el-select{
   width: 100%;
   margin-left: 6px;
 }
 .hidd{
        width: 30%;
        height: 46px;
        display: flex;
        // justify-content: space-between;
        align-items: center;
        margin-top: 2px;
        .let{
          width: 35%;
          // width: 93px;
          height: 46px;
        }
        p{
          width: 100%;
          height: 46px;
          color: black;
          font-size: 12px;
          background: #c6e3fb;
          text-align: right;
          line-height: 46px;
          box-sizing: border-box;
          padding-right: 9px;
        }
        .ipt{
          width: 60%;
          // width: 160px;
          margin-left: 12px;
        }
        .el-input{
          width: 100%;
        }
  }
</style>
