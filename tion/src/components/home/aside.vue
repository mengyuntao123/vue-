<!--  -->
<template>
<div>
     <el-menu
        :default-active="$route.name"
        :collapse="isCollapse"
        class="el-menu-vertical-demo"
        :collapse-transition="false"
        router
        background-color="#333744"
        text-color="#fff"
        active-text-color="#409EFF"
  >

  <template v-for="item in menuLit">

<!-- 一级菜单 -->
    <el-submenu v-if="item.moduleList && item.moduleList.length" :key="item.requestMapping" :index="item.requestMapping">
      <template slot="title">
        <div class="menu-item">
          <i class="el-icon-menu"></i>
          <span class="menu-item-text">{{ item.moduleGroupName }}</span>
        </div>
      </template>
      <!-- 二级菜单 -->
          <el-menu-item v-for="child in item.moduleList" :index="child.requestMapping" :key="child.requestMapping">
                        {{child.moduleGroupName}}
             </el-menu-item>

           </el-submenu>


               <el-menu-item v-else :index="item.requestMapping" 
               :key="item.requestMapping">
                    <i class="el-icon-setting"></i>
                    <span slot="title">{{item.moduleGroupName}}</span>
                </el-menu-item>
              </template>
    
  </el-menu>
</div>
</template>

<script>

export default {
data() {
return {

 menuLit:[]
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

},
created(){
    this.axios.get("../../static/mock.json").then(res=>{
     this.menuLit=res.data.data.userPopedoms;
    //  console.log(this.menuLit)
    
     });
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.el-menu{
  border-right: none;
}
</style>