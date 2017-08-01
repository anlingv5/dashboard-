
var ManWomenpie = echarts.init(document.getElementById('Man-women'),'roma');

var Sexoption = {
    animation: 0,
    addDataAnimation: 1,
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name: '男女比例',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,

            itemStyle: {
                normal: {
                    label: {
                        show: 1,
                         textStyle: {
                        fontSize: '30',             
                    }
                    },
                    labelLine: {
                        show: false,
                        length: -80
                    }
                }
            },

            data: [
    
            ]
        }
    ]
};
ManWomenpie.setOption(Sexoption);

function fSetManWomenData(Data){
    Sexoption.series[0].data=[];
    for(var i=0;i<Data.length;i++)
    {
        Sexoption.series[0].data.push(Data[i])
    }  
    ManWomenpie.setOption(Sexoption);
}
