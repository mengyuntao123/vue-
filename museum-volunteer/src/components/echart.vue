<template>
  <div class="country" style="width:100%; height:560px">
      <!-- 123 -->
    <div id="Chart" :style="{width: '650px', height: '302px'}"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    
    }
  },
  methods: {
          Column(){
              // 基于准备好的dom，初始化echarts实例
              let Chart = this.$echarts.init(document.getElementById('Chart'))
              // 绘制图表
              Chart.setOption({
                title: {
                    text: '天气情况统计',
                    subtext: '虚构数据',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    // orient: 'vertical',
                    // top: 'middle',
                    bottom: 10,
                    left: 'center',
                    data: ['西凉', '益州', '兖州', '荆州', '幽州']
                },
                series: [
                    {
                        type: 'pie',
                        radius: '65%',
                        center: ['50%', '50%'],
                        selectedMode: 'single',
                        data: [
                            {
                                value: 1548,
                                name: '幽州',
                                label: {
                                    formatter: [
                                        '{title|{b}}{abg|}',
                                        '  {weatherHead|天气}{valueHead|天数}{rateHead|占比}',
                                        '{hr|}',
                                        '  {Sunny|}{value|202}{rate|55.3%}',
                                        '  {Cloudy|}{value|142}{rate|38.9%}',
                                        '  {Showers|}{value|21}{rate|5.8%}'
                                    ].join('\n'),
                                    backgroundColor: '#eee',
                                    borderColor: '#777',
                                    borderWidth: 1,
                                    borderRadius: 4,
                                    rich: {
                                        title: {
                                            color: '#eee',
                                            align: 'center'
                                        },
                                        abg: {
                                            backgroundColor: '#333',
                                            width: '100%',
                                            align: 'right',
                                            height: 25,
                                            borderRadius: [4, 4, 0, 0]
                                        },
                                        Sunny: {
                                            height: 30,
                                            align: 'left',
                                        
                                        },
                                        Cloudy: {
                                            height: 30,
                                            align: 'left',
                                        
                                        },
                                        Showers: {
                                            height: 30,
                                            align: 'left',
                                            
                                        },
                                        weatherHead: {
                                            color: '#333',
                                            height: 24,
                                            align: 'left'
                                        },
                                        hr: {
                                            borderColor: '#777',
                                            width: '100%',
                                            borderWidth: 0.5,
                                            height: 0
                                        },
                                        value: {
                                            width: 20,
                                            padding: [0, 20, 0, 30],
                                            align: 'left'
                                        },
                                        valueHead: {
                                            color: '#333',
                                            width: 20,
                                            padding: [0, 20, 0, 30],
                                            align: 'center'
                                        },
                                        rate: {
                                            width: 40,
                                            align: 'right',
                                            padding: [0, 10, 0, 0]
                                        },
                                        rateHead: {
                                            color: '#333',
                                            width: 40,
                                            align: 'center',
                                            padding: [0, 10, 0, 0]
                                        }
                                    }
                                }
                            },
                            {value: 535, name: '荆州'},
                            {value: 510, name: '兖州'},
                            {value: 634, name: '益州'},
                            {value: 735, name: '西凉'}
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
            }
        }
    ]
});
      },
  },
  mounted(){
    this.Column()
  },
  components: {

  }
}
</script>

<style scoped lang="less">
.country{
    width:100%;
    height: 560px;
    position: relative;
    #Chart{
     position: absolute;
     top: 50%;
     left: 39%;
     transform: translate(-50%,-46%);
    }
}

</style>
