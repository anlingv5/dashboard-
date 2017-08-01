var Parllel = echarts.init(document.getElementById('Parllel'),'roma');

var dataBJ = [
    ["V1.2","安卓4.5","华为","2G","移动"],
    ["V1.3","安卓5.0","小米","3G","联通"],
    ["V1.4","IOS10","魅族","4G","电信"]
];


var schema = [
    {name: 'APP版本号', index: 0, text: 'APP版本号'},
    {name: '手机系统', index: 1, text: '手机系统'},
    {name: '手机型号', index: 2, text: '手机型号'},
    {name: '网络', index: 3, text: '网络'},
    {name: '运营商', index: 4, text: ' 运营商'}
];

var lineStyle = {
    normal: {
        color: '#000000',
        width: 1,
        opacity: 0.5
    }
};


var Parlleloption = {
    backgroundColor: '#CCCCCC',
    
    parallelAxis: [
        {dim: 0, name: schema[0].text, inverse: true, max: 31, nameLocation: 'start',type: 'category', data: ['V1.2','V1.3','V1.4']},
        {dim: 1, name: schema[1].text,type: 'category', data: ['安卓4.5','安卓5.0','IOS10']},
        {dim: 2, name: schema[2].text,type: 'category', data: ['华为','小米','魅族']},
        {dim: 3, name: schema[3].text,type: 'category', data: ['2G','3G','4G']},
        {dim: 4, name: schema[4].text,type: 'category', data: ['移动','联通','电信']}
    ],
    
    parallel: {
        left: '3%',
        right: '8%',
        parallelAxisDefault: {
           
            type: 'value',
            name: '用户系统网络手机APP分布',
            nameLocation: 'end',
            nameGap: 20,
           
            nameTextStyle: {
                color: '#000000',
                fontSize: 12
            },

            axisLine: {
                lineStyle: {
                    color: '#000000'
                }
            },

            axisTick: {
                lineStyle: {
                    color: '#000000'
                }
            },

            splitLine: {
                show: false
            },

            axisLabel: {
                textStyle: {
                    color: '#000000'
                }
            }
        }
    },
    series: [
        {
            name: '用户系统网络手机APP分布',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataBJ
        },
    ]
};
Parllel.setOption(Parlleloption);


// function fSetpersonAgeData(AgeName,AgeNum) {
//     Ageoption.xAxis[0].data=[];
//     Ageoption.series[0].data=[];
//     for (var i = 0; i < AgeName.length; i++) {
//         Ageoption.xAxis[0].data.push(AgeName[i]);
//     }

//     for (var j = 0; j < AgeNum.length; j++) {
//         Ageoption.series[0].data.push(AgeNum[j]);
//     }
//     personAge.setOption(Ageoption);
// }