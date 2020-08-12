<template>
  <div>
todo-list

<el-table :data="colori">
<el-table-column prop="colorId" label="颜色">
	<template slot-scope="scope">
		<el-tag :type="scope.row.colorId|getColorType()" size="small ">{{scope.row.colorId|getColorName()}}</el-tag>
	</template>
</el-table-column>

</el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colori:[
        {colorId:"红色"},
        {colorId:"蓝色"},
        {colorId:"绿色"},
        {colorId:"黄色"},
        {colorId:"灰色"}
      ]
    }
  },
  methods: {

  },
  filters:{

      //tag类型
      getColorType(colorId) {
        
        const colorMap = {
          0: 'danger',
          1: '',
          2: 'success',
          3: 'warning',
          4: 'info',
        };

        // console.log(colorMap[colorId])
        return colorMap[colorId]
      },
      //颜色名称
      getColorName(colorId) {
        const colorMap= {
          0: '红色',
          1: '蓝色',
          2: '绿色',
          3: '黄色',
          4: '灰色',
        };
        return colorMap[colorId]
      }
  
  },
  components: {

  }
}
</script>

<style scoped>

</style>
