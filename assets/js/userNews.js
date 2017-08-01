/**
 * @Package: Complete Admin Responsive Theme
 * @Since: Complete Admin 1.0
 * This file is part of Complete Admin Responsive Theme.
 */


jQuery(function($) {

    'use strict';

    var CMPLTADMIN_SETTINGS = window.CMPLTADMIN_SETTINGS || {};


    /*--------------------------------
         Window Based Layout
     --------------------------------*/
    CMPLTADMIN_SETTINGS.dashboardEcharts = function() {
        /*-------------用户阅读行为分析----------------*/

   $.get('data/json/userBehavior.json'+"?t="+( new Date() ).getTime().toString()).done(function(data){
        var categories=[];
        var data_day=[];
        var data_total=[];
     for (var i = 0; i < data.length; i++) {
                categories.push(data[i].categories);
                data_day.push({
                    name:data[i].categories,
                    value:data[i].day_value
                });
                data_total.push({
                    name:data[i].categories,
                    value:data[i].total_value
                });
            }
 /*------------- Chart 1 用户行为当日情况----------------*/           
       var myChart1 = echarts.init(document.getElementById('userBehavior_day')); 
       myChart1.setOption(getPie("用户行为当日情况",categories,data_day));

        /*-------------- Chart 3 用户行为总数 ---------------*/
       var myChart3 = echarts.init(document.getElementById('userBehavior_total'));
        myChart3.setOption (getPie("用户行为总体分布",categories,data_total));
      });
        /*------------- Chart 2 ----------------*/
        /*---------------用户行为周排行-------------*/
    $.get('data/json/userBehavior_week.json'+"?t="+( new Date() ).getTime().toString()).done(function(data){
            var categories=['纯浏览','收藏','分析','点赞','转发'];
            var xAxisData=[];
            var read=[];
            var collect=[];
            var reply=[];
            var praise=[];
            var forward=[];
            var barwidth=10;
            for (var i = 0; i < data.length; i++) {
                xAxisData.push(data[i].time);
                read.push(data[i].read);
                collect.push(data[i].collect);
                reply.push(data[i].reply);
                praise.push(data[i].praise);
                forward.push(data[i].forward);
            }
        var myChart2 = echarts.init(document.getElementById('userBehavior_week'));
         myChart2.setOption({
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data:categories
                },
                grid: {
                    left: '2%',
                    right: '2%',
                    bottom: '1%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',

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
                        name:categories[0],
                        type:'bar',
                        stack: '广告',
                        barWidth:barwidth,
                        data:read
                    },
                    {
                        name:categories[1],
                        type:'bar',
                        barWidth:barwidth,
                        stack: '广告',
                        data:collect
                    },
                    {
                        name:categories[2],
                        barWidth:barwidth,
                        type:'bar',
                        stack: '广告',
                        data:reply
                    },
                    {
                        name:categories[3],
                        barWidth:barwidth,
                        type:'bar',
                        stack:'广告',
                        data:praise
                    },
                   {
                        name:categories[4],
                        barWidth:barwidth,
                        type:'bar',
                        stack:'广告',
                        data:forward
                    }
                ]
            });
    });


/*-----------------  新闻频道偏好 ------------------*/
$.get('data/json/newChannel.json'+"?t="+( new Date() ).getTime().toString()).done(function(data){
            var categories=[];
            var Data1=[];
            var Data2=[];
            for (var i = 0; i < data.length; i++) {
               categories.push(data[i].type);
               Data1.push(data[i].day_value);
               Data2.push(data[i].total_value);
            }

       var myChart4= echarts.init(document.getElementById('newChannel_day'));

         var itemStyle = {
            normal: {
            },
            emphasis: {
                barBorderWidth: 1,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0,0,0,0.5)'
            }
        }

        var option = {
            legend: {
                data: ['每日排行榜', '总排行榜'],
                align: 'left',
                left: 10
            },
            brush: {
                toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
                xAxisIndex: 0
            },
            toolbox: {
                feature: {
                    magicType: {
                        type: ['stack', 'tiled']
                    },
                    dataView: {}
                }
            },
            tooltip: {},
            xAxis: {
                data: categories,
                name: '频道',
                silent: false,
                axisLine: {onZero: true},
                splitLine: {show: false},
                splitArea: {show: false}
            },
            yAxis: {
                inverse: true,
                splitArea: {show: false}
            },
            grid: {
                left: 100
            },
            series: [
                {
                    name: '每日排行榜',
                    type: 'bar',
                    stack: 'one',
                    barWidth:15,
                    itemStyle: itemStyle,
                    data: Data1
                },
                {
                    name: '总排行榜',
                    type: 'bar',
                    barWidth:15,
                    stack: 'one',
                    itemStyle: itemStyle,
                    data: Data2
                }
            ]
        };

     myChart4.on('brushSelected', renderBrushed);

    function renderBrushed(params) {
        var brushed = [];
        var brushComponent = params.batch[0];

        for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
            var rawIndices = brushComponent.selected[sIdx].dataIndex;
            brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
        }

        myChart4.setOption({
            title: {
                backgroundColor: '#333',
                bottom: 0,
                right: 0,
                width: 100,
                textStyle: {
                    fontSize: 12,
                    color: '#fff'
                }
            }
        });
    }
        myChart4.setOption(option);
        
   });


    $.get('data/json/channel_behavior_total.json'+"?t="+( new Date() ).getTime().toString()).done(function(data){
            var categories=['纯浏览','分享','分析','点赞','转发'];
            var xAxisData=[];
            var read=[];
            var collect=[];
            var reply=[];
            var praise=[];
            var forward=[];
            var barwidth=10;
            for (var i = 0; i < data.length; i++) {
                xAxisData.push(data[i].type);
                read.push(data[i].read);
                collect.push(data[i].collect);
                reply.push(data[i].reply);
                praise.push(data[i].praise);
                forward.push(data[i].forward);
            }
        var myChart6 = echarts.init(document.getElementById('userChannel'));
         myChart6.setOption({
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data:categories
                },
                grid: {
                    left: '0%',
                    right: '0%',
                    bottom: '1%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
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
                        name:categories[0],
                        type:'bar',
                        barWidth:barwidth,
                        stack: '广告',
                        data:read
                    },
                    {
                        name:categories[1],
                        barWidth:barwidth,
                        type:'bar',
                        stack: '广告',
                        data:collect
                    },
                    {
                        name:categories[2],
                        barWidth:barwidth,
                        type:'bar',
                        stack: '广告',
                        data:reply
                    },
                    {
                        name:categories[3],
                        barWidth:barwidth,
                        type:'bar',
                        stack:'广告',
                        data:praise
                    },
                    {
                        name:categories[4],
                        barWidth:barwidth,
                        type:'bar',
                        stack:'广告',
                        data:forward
                    }

                ]
            });
    });

     //end    
     //clearInterval(timeTicket);

}

    /******************************
     initialize respective scripts 
     *****************************/
    $(document).ready(function() {
        CMPLTADMIN_SETTINGS.dashboardEcharts();
    });

    $(window).resize(function() {
        CMPLTADMIN_SETTINGS.dashboardEcharts();
    });

    $(window).load(function() {});

});
