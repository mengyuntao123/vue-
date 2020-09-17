<template>
  <!-- <div class="hello"> -->
   <el-container class="home-container">
    

  <el-aside class="el-aside" :class="isCollapse ? 'animate' : 'animatend'"  :width="isCollapse ? '64px' : '200px'">
    
 <div style="width:200px;height:100%">
  <!-- <happy-scroll color="rgba(0,0,0,0.5)" size="5" resize style="height:100%" :width="isCollapse ? '64px' : '200px' "> -->
       <el-scrollbar style="height:100%">
       <Aside 
          :menuLit="menuLit"
         
          :isCollapse="isCollapse">
          </Aside>
        
       </el-scrollbar>
  <!-- </happy-scroll> -->
  </div>
     </el-aside> 
   <el-container :class="isCollapse ? 'distance' : 'el-container'">
   
   <el-header class="el-header">
  
       <div class="header-ct"> 
         <div class="toggle-button" @click="toggleCollapse">
          <i
            :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
            class="toggle-icon"
          ></i>
        </div>
         <!-- <span>system</span> -->
      <el-button class="logout-btn" type="info" >退出</el-button></div>
      
    </el-header>
     <el-main>

       <Bread :levelList="levelList"></Bread>

       
       <router-view></router-view>
    
     </el-main>
   </el-container>
   </el-container>
  <!-- </div> -->
</template>

<script>
import Aside from "../components/layout/aside"
import Bread from "../components/layout/breadcrumb"
export default {
  
  data () {
    return {
     menuLit:[],
     isCollapse: false,
     
    }

  },
  methods:{
     toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
     getBreadcrumb() {
                let matched = this.$route.matched.filter(item => item.name);
                
                const first = matched[0];
                // console.log(first)
                if (first && first.name.trim().toLocaleLowerCase() !== 'home'.toLocaleLowerCase()) {
                    matched = [{ path: '/home', meta: { permitName: '首页' }}].concat(matched)
                }
                this.levelList = matched;
                console.log(this.levelList)
            },



             

  },
  computed:{

  
  },
  watch: {
      $route() {
                this.getBreadcrumb()
            },
      
        },

  mounted(){  
    
  },
  created(){
   this.axios.get("../../static/mock.json").then(res=>{
     this.menuLit=res.data.data.userPopedoms;
    //  console.log(this.menuLit)
    
     });
      this.getBreadcrumb()
  },
  components:{
    Aside,
    Bread
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style   scoped>

.header-ct{
  width:95%;
  height: 60px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}


.el-scrollbar /deep/ .el-scrollbar__wrap{
  overflow-x: hidden;
}
.happy-scroll .happy-scroll-container{
  height: 100% !important;
}


.home-container{
  height: 100%;
}
 .happy-scroll-content{
  width: 200px;
}


.toggle-button{
      /* height: 40px; */
      color: #fff;
      background-color: #4a5064;
      position: relative;
      z-index: 9;
}

.toggle-icon{
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
}
.el-header{
  background-color: #373d41;
   color:white;
}
.el-container{
  margin-left: 100px;
}


.distance{
  margin-left: -36px;
}

.el-aside{
  background-color: #333744;
  /* border: none; */
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  overflow-x: hidden;
  overflow-y: hidden;
}


/*  */


.animate{
   animation:myfirst .3s;
}
.animatend{
  animation: myend .3s;
}
.logout-btn{
  position: relative;
  right: 0;
}
@keyframes myfirst
{
from {width: 200px;}
to {width: 60px;}
}


@keyframes myend
{
from {width: 60px;}
to {width: 200px;}
}
.el-menu{
  border-right: none;
}
.el-main{
  background-color: #eaedf1;
   color:white;
}
</style>
