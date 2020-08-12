<template>
  <div>
<p class="ck">入库文物</p>

<div class="cultural ">
<div class="register">
  <div class="regi_ct">
     <div class="rt">
        <div class="regi_first">
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
            <p>档案编号:</p>
          </div>
          <div class="ipt">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
        </div>

        <div class="hidd">
          <div class="let">
            <p>出土(水)登记号:</p>
          </div>
          <div class="ipt">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
        </div>
    </div>
    <div class="regi_first"> 
      <div class="hidd">
          <div class="let">
            <p>辅助账号</p>
          </div>
          <div class="ipt">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
        </div>
          


      <div class="hidd">
          <div class="let">
            <p>固定财产账号:</p>
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
    </div>
    <div class="regi_first">

      <div class="hidd">
          <div class="let">
            <p>索书号:</p>
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
       </div>    
 
   
  </div>

  <div class="regi_ct">
     <div class="rtk">
       <div class="regi_first">
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
            <p>具体年代:</p>
          </div>
          <div class="ipt">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
        </div>

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
            <p>质地:</p>
          </div>
          <div class="ipt">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
        </div>

        <div class="hidd">
          <div class="let">
            <p>完残程度:</p>
          </div>
          <div class="ipt">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
        </div>

        <div class="hidd">
          <div class="let">
            <p>入藏时间范围:</p>
          </div>
          <div class="ipt">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
        </div>
       </div>

       <div class="regi_tw">
         <div class="newR">
          <div class="regi">
              <div class="hidd">
                <div class="let">
                  <p>原名:</p>
                </div>
                <div class="ipt">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
              </div>


               <div class="hidd">
                <div class="let">
                  <p>年代:</p>
                </div>
                <div class="ipt">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
              </div>

              
              <div class="bm">
                <div class="hidd">
                <div class="let">
                  <p>质地-类别1:</p>
                </div>
                <div class="ipt">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
              </div>

               <div class="hidd hidd2">
                <div class="let">
                  <p>质地-类别2:</p>
                </div>
                <div class="ipt">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
              </div>
              </div>


               <div class="bm">
                <div class="hidd">
                <div class="let">
                  <p>文物级别:</p>
                </div>
                <div class="ipt">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
              </div>

               <div class="hidd hidd2">
                <div class="let">
                  <p>文物来源:</p>
                </div>
                <div class="ipt">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
              </div>
              </div>


               <div class="bm">
                <div class="hidd">
                <div class="let">
                  <p>完残状况:</p>
                </div>
                <div class="ipt">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
              </div>

               <div class="hidd hidd2">
                <div class="let">
                  <p>保存状态:</p>
                </div>
                <div class="ipt">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
              </div>
              </div>

               <div class="bm">
                <div class="hidd">
                <div class="let">
                  <p>入藏年度:</p>
                </div>
                <div class="ipt">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
              </div>

              </div>
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
      input: '',
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang="less">
.ck{
  color: #0f6598;
  font-size: 20px;
  font-weight: 600;
}
.cultural{
  width: 100%;
  

  .register{
    width: 80%;
    // height: 180px;
    // background: #f0f8fb;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .regi_ct{
    width: 100%;
    // height: 180px;
    border-top: 2px #d5ebfc solid;
    
    
      }
      
    }
    .rt{
      width: 100%;
      height: 180px;
      background: #f0f8fb;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
   
    
    .rtk{
      width: 100%;
      height: 310px;
      background: #f0f8fb;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .regi_first{
        height: 285px;
      }
    }
    .regi_first{
      width: 30%;
      height: 150px;
      // border: 1px blue solid;
      .hidd{
        width: 100%;
        height: 46px;
        display: flex;
        // justify-content: space-between;
        align-items: center;
        margin-top: 2px;
        .let{
          // width: 35%;
          width: 93px;
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
          // width: 60%;
          width: 160px;
          margin-left: 12px;
        }
        .el-input{
          width: 100%;
        }
  }
}

 .regi_tw{
      width: 65%;
      height: 285px;
      // border: 1px blue solid;
      .newR{
        width: 100%;
      .regi{
        width: 100%;
        .hidd{
        width: 100%;
        height: 46px;
        display: flex;
        align-items: center;
        margin-top: 2px;
        }
      .let{
          // width: 35%;
          width: 93px;
          height: 46px;
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
      
        }
        .ipt{
          // width: 60%;
          width: 160px;
          margin-left: 12px;
        }
      }
      
      }
    }


.bm{
  width: 100%;
  display: flex;
}
</style>
