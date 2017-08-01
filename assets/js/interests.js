
var interestspie = echarts.init(document.getElementById('interests'),'roma');

var interestoption = {

    animation: 0,
    addDataAnimation: 1,
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"

    },

    series: [
        {

            name: '兴趣分布',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,

            itemStyle: {
                normal: {
                    label: {
                        show: 0,
                    },
                    labelLine: {
                        show: 0,
                        length: 20
                    }
                },

                emphasis: {
                    label: {
                        show: 1,
                        position: 'center',
                        textStyle: {
                        fontSize: '50',             
                    }
                    },
                    
                    labelLine: {
                        show: 0,
                    }

                }
            },

            data: [
            ]
        }
    ]
};

interestspie.setOption(interestoption);

function fSetinterestsData(Data) {
    interestoption.series[0].data=[];
    for (var i = 0; i < Data.length; i++) {
        interestoption.series[0].data.push(Data[i])
    }
    interestspie.setOption(interestoption);

}
