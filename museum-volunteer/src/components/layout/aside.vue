<!--  -->
<template>
<div>
     <el-menu
        :default-active="$route.path"
        :collapse="isCollapse"
        class="el-menu-vertical-demo"
        :collapse-transition="false"
        router
        background-color="#304156"
        text-color="#fff"
       
  >

  <template v-for="item in menuLit">

<!-- 一级菜单 -->
    <el-submenu v-if="item.children && item.children.length" :key="item.id" :index="item.id">
      <template slot="title">
        <div class="menu-item">
          <i :class="item.icon"></i>
          <span class="menu-item-text">{{ item.perName }}</span>
        </div>
      </template>
      <!-- 二级菜单 -->
          <el-menu-item v-for="child in item.children" :index="child.url" :key="child.id">
                        {{child.perName}}
           </el-menu-item>

           </el-submenu>


               <el-menu-item v-else :index="item.id" 
               :key="item.id">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.perName}}</span>
                </el-menu-item>
              </template>
    
  </el-menu>
</div>
</template>

<script>

export default {
data() {
return {

 menuLit:[],
}
},
props: {
    isCollapse: {
      type: Boolean,
      default: true
    }
  },
methods:{

},
mounted() {
      
      this.axios.post("/sys/menu/0")
      .then(res=>{
          // console.log(res)
            this.menuLit=res.data.data[0].children;
            // console.log(this.menuLit)
          })
},
created(){
    //  this.axios.get("../../static/mock.json").then(res=>{
    // //  this.menuLit=res.data.data.userPopedoms;
    //  console.log(res.data.data.userPopedoms)
    
    //  });
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.el-menu{
  border-right: none;
}

.el-menu--inline li{
  background-color:#1f2d3d !important;
}

.el-menu-item:hover{
	  background:rgb(26, 35, 48)!important;
	  /* color: #fff!important; */
	}
</style>