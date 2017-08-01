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

/*-------------用户使用行为- 使用时长----------------*/
$.get('data/json/useTime.json'+"?t="+( new Date() ).getTime().toString()).done(function(data){
        var categories=[];
        var value=[];
        for (var i = 0; i < data.length; i++) {
            categories.push(data[i].type);
            value.push(data[i].value);
        }

     var myChart2=echarts.init(document.getElementById('sum_days'),'roma');
     myChart2.setOption(getBar('使用天数',categories,value));
 });

$.get('data/json/useTime.json'+"?t="+( new Date() ).getTime().toString()).done(function(data){
        var categories=[];
        var value=[];
        for (var i = 0; i < data.length; i++) {
            categories.push(data[i].type);
            value.push(data[i].value);
        }

     var myChart2=echarts.init(document.getElementById('use_frm'),'roma');
     myChart2.setOption(getBar('每日使用时长分布',categories,value));
 });

$.get('data/json/useTime.json'+"?t="+( new Date() ).getTime().toString()).done(function(data){
        var categories=[];
        var value=[];
        for (var i = 0; i < data.length; i++) {
            categories.push(data[i].type);
            value.push(data[i].value);
        }

     var myChart2=echarts.init(document.getElementById('today_time'),'roma');
     myChart2.setOption(getBar('当日使用时长分布',categories,value));
 });
/*-------------用户使用行为- 使用频率----------------*/
/*-------------每日使用总数----------------*/
$.get('data/json/today_fre.json'+"?t="+( new Date() ).getTime().toString()).done(function(data){
        var categories=[];
        var value=[];
        for (var i = 0; i < data.length; i++) {
            categories.push(data[i].date);
            value.push(data[i].value);
        }

    var myChart1=echarts.init(document.getElementById('day_fre'),'roma');
    myChart1.setOption(getFuline('每日使用频率',categories,value));
    });


 

/*-------------每周使用总数----------------*/
 $.get('data/json/week_fre.json'+"?t="+( new Date() ).getTime().toString()).done(function(data){
        var categories=[];
        var value=[];
        for (var i = 0; i < data.length; i++) {
            categories.push(data[i].date);
            value.push(data[i].value);
        }

     var myChart2=echarts.init(document.getElementById('week_fre'),'roma');
     myChart2.setOption(getBar('周使用',categories,value));
 });

 /*-------------每月使用总数----------------*/
  $.get('data/json/month_fre.json'+"?t="+( new Date() ).getTime().toString()).done(function(data){
        var categories=[];
        var value=[];
        for (var i = 0; i < data.length; i++) {
            categories.push(data[i].date);
            value.push(data[i].value);
        }

     var myChart3=echarts.init(document.getElementById('month_fre'),'roma');
     myChart3.setOption(getBar('月使用',categories,value));
 });


        /*-------------用户行为偏好----------------*/
$.get('data/json/userpreference.json'+"?t="+( new Date() ).getTime().toString()).done(function(data){
    var value=[];
    var categories=[];
    for (var i = data.length - 1; i >= 0; i--) {
        categories.push(data[i].type);
        value.push({
             name:data[i].type,
             value:data[i].value
        });
    }
    var myChart4=echarts.init(document.getElementById('userpreference'),'roma');
    myChart4.setOption(getPie("用户行为偏好",categories,value));
});
 /*----------------- 文章篇幅偏好 ------------------*/
$.get('data/json/newslength.json'+"?t="+( new Date() ).getTime().toString()).done(function(data){
            var categories=[];
            var Data1=[];
            for (var i = 0; i < data.length; i++) {
               categories.push(data[i].type);
               Data1.push(data[i].value);
            }
           var myChart4= echarts.init(document.getElementById('user_newslength'),'roma');
            myChart4.setOption(getBar2("文章长度偏好",categories,Data1));
    });

 /*----------------- 浏览形式偏好 ------------------*/

$.get('data/json/browseform.json'+"?t="+( new Date() ).getTime().toString()).done(function(data){
    var value=[];
    var categories=[];
    for (var i = data.length - 1; i >= 0; i--) {
        categories.push(data[i].type);
        value.push({
             name:data[i].type,
             value:data[i].value
        });
    }
    var myChart4=echarts.init(document.getElementById('user_browseform'),'roma');
    myChart4.setOption(getPie("用户浏览形式偏好",categories,value));
});

 /*-----------------使用时间点偏好 ------------------*/
$.get('data/json/fmnews_hour.json').done(function(value){
    var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a','7a', '8a', '9a','10a','11a','12p', '1p', '2p', '3p', '4p', '5p','6p', '7p', '8p', '9p', '10p', '11p'];    
    var data=[];
    data = value[0].data.map(function (item) {
        return [item[1], item[0], item[2] || '-'];
    });

    //data中[a,b,c]的含义，a表示hours,b表示days，c表示当天使用时间点所使用app的总数
    var option = {
        tooltip: {
            position: 'top'
        },
        animation: false,
        grid: {
            height: '50%',
            y: '10%'
        },
        xAxis: {
            type: 'category',
            data: hours,
            splitArea: {
                show: true
            }
        },
        yAxis: {
            type: 'category',
            data: value[0].days,
            splitArea: {
                show: true
            }
        },
        visualMap: {
            min: 0,
            max: 10,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '15%'
        },
        series: [{
            name: 'Punch Card',
            type: 'heatmap',
            data: data,
            label: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    var mychart=echarts.init(document.getElementById("fmnews_hours"),'roma');
    mychart.setOption(option);
})


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

