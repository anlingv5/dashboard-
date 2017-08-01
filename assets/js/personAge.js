var personAge = echarts.init(document.getElementById('personAge'),'roma');
var Ageoption = {
     color: ['#3398DB'],

    grid:{
        // show: 0
        x:20,
        y:40,
        x2:20,
        y2:40
    },


    xAxis : [
        {
            type : 'category',
            data:['0'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'年龄分布',
            type:'line',
            barWidth: '60%',
            data:[0],
            
        }
    ]
};
personAge.setOption(Ageoption);


function fSetpersonAgeData(AgeName,AgeNum) {
    Ageoption.xAxis[0].data=[];
    Ageoption.series[0].data=[];
    for (var i = 0; i < AgeName.length; i++) {
        Ageoption.xAxis[0].data.push(AgeName[i]);
    }

    for (var j = 0; j < AgeNum.length; j++) {
        Ageoption.series[0].data.push(AgeNum[j]);
    }
    personAge.setOption(Ageoption);
}