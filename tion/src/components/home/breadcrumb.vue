<!--  -->
<template>
<div>
     <div class="navbar clearfix">
       <el-breadcrumb separator="/" style="height: 100%; line-height: 60px;" >
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
    </div>
</div>
</template>

<script>
export default {
data() {
return {

}
},
 props: {
    levelList: {
      type: Array,
      default: () => []
    },
  },
methods:{

},
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>