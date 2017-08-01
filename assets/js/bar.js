//使用雷达图
function getRadar(name,categories,seriesData){
   var option = {
        tooltip: {},
        legend: {
            data: categories
        },
        radar: {
            // shape: 'circle',
            indicator: [
               { name: '销售（sales）', max: 6500},
               { name: '管理（Administration）', max: 16000},
               { name: '信息技术（Information Techology）', max: 30000},
               { name: '客服（Customer Support）', max: 38000},
               { name: '研发（Development）', max: 52000},
               { name: '市场（Marketing）', max: 25000}
            ]
        },
        series: [{
            name: name,
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
                {
                    value :seriesData,
                    name : name
                }
            ]
        }]
    };
  return option;
}
 //使用填充曲线
function getFuline(name,xAxisData,seriesData){
  var option=  {
        tooltip : {
            trigger: 'axis'
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : xAxisData
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:name,
                type:'line',
                smooth:true,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:seriesData
            }
         ]
        }
        return option;
}


//使用柱状图
function getBar(name,xAxisData,seriesData) {
   var option= {
        tooltip : {
            trigger: 'axis'
        },
        toolbox: {
            show : true,
            feature : {
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data :xAxisData
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:name,
                type:'bar',
                barWidth:10,
                data:seriesData,
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                }
            }
          ]
     }
    return option;
 }

//使用饼状图
 function getPie(name,xAxisData,seriesData) {
   var option=  {
        legend: {
                    x:'center',
                    y:'bottom',
                    data:xAxisData
                },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: name,
                type: 'pie',
                radius : '55%',
                center: ['50%', '45%'],
                data:seriesData,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
      }
      return option;
 }

//使用排行榜柱状图
 function getBar2(name,categories,seriesData) {
   var option=  {
               tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '0%',
                    right: '0%',
                    bottom: '0%',
                    containLabel: true
                },
                xAxis : [
                    {
                        position:'top',
                        type : 'value'
                    }
                ],
                yAxis : [
                    {
                        type : 'category',
                        axisTick : {show: false},
                        data : categories
                    }
                ],
                series : [
                    {
                        name:'频道',
                        type:'bar',
                        barWidth:10,
                        label: {
                            normal: {
                                show: true,
                                position: 'inside'
                            }
                        },
                        data:seriesData
                    }
                ]
            }
            return option;
 }

//南丁格尔玫瑰图
function getRose(name,categories,seriesData){
    var option= {
                title : {
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    x : 'center',
                    y : 'bottom',
                    data:categories
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {
                            show: true,
                            type: ['pie', 'funnel']
                        },
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                series : [
                    {
                        name:name,
                        type:'pie',
                        radius : [20, 110],
                        center : ['45%', '50%'],
                        roseType : 'radius',
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        lableLine: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        data:seriesData
                    }
                ]
         }
}
 
