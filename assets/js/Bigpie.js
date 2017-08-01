var BigPie = echarts.init(document.getElementById('BigPie'), 'roma');

BigPieoption = {
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['V1.2', 'V1.3', 'V1.4', '安卓4.5', '安卓5.0', 'IOS10', '华为', '小米', '魅族', '2G', '3G', '4G', '移动', '联通', '电信']
    },
    series: [
        {
            name: 'APP版本号',
            type: 'pie',
            radius: ['60%', '65%'],
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
                },
            },
            data: [
                { value: 335, name: 'V1.2' },
                { value: 310, name: 'V1.3' },
                { value: 234, name: 'V1.4' }
            ]
        }
        ,
        {

            name: '系统版本',
            type: 'pie',
            radius: ['50%', '55%'],
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

                },
            },
            data: [
                { value: 335, name: '安卓4.5' },
                { value: 310, name: '安卓5.0' },
                { value: 234, name: 'IOS10' }
            ]
        },

        {
            name: '手机型号',
            type: 'pie',
            radius: ['40%', '45%'],
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
                },
            },
            data: [
                { value: 335, name: '华为' },
                { value: 310, name: '小米' },
                { value: 234, name: '魅族' }
            ]
        }
        ,
        {
            name: ' ',
            type: 'pie',
            radius: ['30%', '35%'],
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
                },
            },
            data: [
                { value: 335, name: '2G' },
                { value: 310, name: '3G' },
                { value: 234, name: '4G' }
            ]
        }
        ,
        {
            name: '服务提供商',
            type: 'pie',
            radius: ['20%', '25%'],
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
                },
            },
            data: [
                { value: 335, name: '移动' },
                { value: 310, name: '联通' },
                { value: 234, name: '电信' }
            ]
        }

    ]
};

BigPie.setOption(BigPieoption);
