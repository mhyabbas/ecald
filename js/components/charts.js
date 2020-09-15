$(document).ready(function() {

    // General chart settings

    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    });

    // Chart 1

    if($('#chart1').length) {

        var controller = new ScrollMagic.Controller();
        new ScrollMagic.Scene({triggerElement: '#chart1', triggerHook: 0.8, reverse: false})
            .addTo(controller)
            .on("start", function () {

                Highcharts.chart('chart1', {
                    chart: {
                        type: 'bar',
                        backgroundColor: 'rgba(0,0,0,0)',
                        spacingBottom: 40,
                        spacingTop: 40,
                        spacingLeft: 50,
                        spacingRight: 50,
                        height: 500,
                        scrollablePlotArea: {
                            minWidth: 500
                        }
                    },
                    colors: [
                    '#629fc3', '#8f5ea7', '#334154', '#e48e5e', '#448890'
                    ],
                    title: {
                        text: 'March 2010 - September 2019',
                        style: {
                            fontWeight: 'bold',
                            fontSize: '14px',
                            color: '#334154'
                        }
                    },
                    xAxis: {
                        categories: ['Waitemata DHB', 'Auckland DHB', 'Manukau DHB', 'Outside of Auckland DHB', 'Other'],
                        labels: {
                            align: 'right',
                            style: {
                                color: '#576784',
                                fontSize: '12px',
                                fontWeight: 'bold'
                            }
                        },
                        lineWidth: 1,
                        lineColor: '#979797',
                        tickWidth: 1,
                        tickLength: 10,
                        tickColor: '#979797'
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: null,
                        },
                        labels: {
                            style: {
                                color: '#576784',
                                fontSize: '12px',
                            },
                            autoRotation: false
                        },
                        tickInterval: 1000,
                        lineWidth: 1,
                        lineColor: '#979797',
                        gridLineColor: '#979797',
                        endOnTick: false,
                    },
                    plotOptions: {
                        bar: {
                            borderColor: 'none',
                            pointPadding: 0.15,
                            groupPadding: 0.1
                        }
                    },
                    legend: {
                        itemMarginTop: 20,
                        symbolRadius: 0,
                        itemStyle: {
                            color: '#576784',
                            fontSize: '12px',
                            fontWeight: 'normal'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    tooltip: {
                        backgroundColor: '#334154',
                        borderColor: 'white',
                        borderRadius: 15,
                        padding: 15,
                        style: {
                            color: 'white',
                        },
                        formatter: function () {
                            yNum = Highcharts.numberFormat(this.y, -1, '.', ',');

                            return '<span style="display: inline-block; margin-bottom: 8px; font-size: 12px;">' + this.x + '</span><br><span style="display: inline-block; margin-right: 8px; margin-bottom: 8px;"><svg height="12" width="12"><circle cx="50%" cy="50%" r="5" stroke="white" stroke-width="1" fill="' + this.point.color + '" /></svg></span><span style="display: inline-block; font-size: 12px; font-weight: bold;">' + this.series.name + '</span><br><span style="display: block; margin-left: 21px; font-size: 16px; font-weight: bold;">' + yNum + '</span>';
                        },
                        useHTML: true
                    },
                    series: [{
                        name: 'E-learning courses',
                        data: [6000, 8000, 7500, 4200, 3300]
                    }, {
                        name: 'Face-to-face courses',
                        data: [3600, 4800, 4700, 2500, 2200]
                    }, {
                        name: 'Total',
                        data: [9500, 11000, 12500, 6800, 5600]
                    }]
                    
                });

        });

    }

    // Chart 2

    if($('#chart2').length) {

        var controller = new ScrollMagic.Controller();
        new ScrollMagic.Scene({triggerElement: '#chart2', triggerHook: 0.8, reverse: false})
            .addTo(controller)
            .on("start", function () {

                Highcharts.chart('chart2', {
                    chart: {
                        type: 'column',
                        backgroundColor: 'rgba(0,0,0,0)',
                        spacingBottom: 40,
                        spacingTop: 40,
                        spacingLeft: 50,
                        spacingRight: 50,
                        height: 500,
                        scrollablePlotArea: {
                            minWidth: 500
                        }
                    },
                    colors: [
                        '#8f5ea7',
                    ],
                    title: {
                        text: 'Cumulative Trend',
                        style: {
                            fontWeight: 'bold',
                            fontSize: '14px',
                            color: '#334154'
                        }
                    },
                    subtitle: {
                        text: 'October 2018 - August 2019'
                    },
                    xAxis: {
                        categories: ['Oct 2018', 'Nov 2018', 'Dec 2018', 'Jan 2019', 'Feb 2019', 'Mar 2019', 'Apr 2019', 'May 2019', 'Jun 2019', 'Jul 2019', 'Aug 2019'],
                        labels: {
                            useHTML: true,
                            style: {
                                color: '#576784',
                                fontSize: '12px',
                            },
                            format: '{value:%b %Y}',
                            autoRotation: false
                        },
                        lineColor: '#979797',
                        gridLineColor: '#979797',
                        gridLineWidth: 1,
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: null,
                        },
                        labels: {
                            style: {
                                color: '#576784',
                                fontSize: '12px',
                                fontWeight: 'bold'
                            }
                        },
                        tickInterval: 5000,
                        gridLineWidth: 0,
                        lineWidth: 1,
                        lineColor: '#979797',
                        tickWidth: 1,
                        tickLength: 10,
                        tickColor: '#979797'
                    },
                    plotOptions: {
                        bar: {
                            borderColor: 'none',
                            pointPadding: 0.15,
                            groupPadding: 0.1
                        }
                    },
                    legend: {
                        itemMarginTop: 20,
                        symbolRadius: 0,
                        itemStyle: {
                            color: '#576784',
                            fontSize: '12px',
                            fontWeight: 'normal'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    tooltip: {
                        backgroundColor: '#334154',
                        borderColor: 'white',
                        borderRadius: 15,
                        padding: 15,
                        style: {
                            color: 'white',
                        },
                        formatter: function () {
                            // xDate = Highcharts.dateFormat('%B %Y', this.x);
                            yNum = Highcharts.numberFormat(this.y, -1, '.', ',');

                            return '<span style="display: inline-block; margin-bottom: 8px; font-size: 12px;">' + this.x + '</span><br><span style="display: inline-block; margin-right: 8px; margin-bottom: 8px;"><svg height="12" width="12"><circle cx="50%" cy="50%" r="5" stroke="white" stroke-width="1" fill="' + this.point.color + '" /></svg></span><span style="display: inline-block; font-size: 12px; font-weight: bold;">' + this.series.name + '</span><br><span style="display: block; margin-left: 21px; font-size: 16px; font-weight: bold;">' + yNum + '</span>';
                        },
                        useHTML: true
                    },
                    series: [{
                        name: 'Enrolled',
                        data: [17000, 22000, 24000, 24000, 26000, 27000, 29000, 30000, 31000, 35000, 37000],
                        color: {
                            linearGradient: {
                              x1: 0,
                              x2: 0,
                              y1: 0,
                              y2: 1
                            },
                            stops: [
                                [0, '#58307c'],
                                [1, '#8f5ea7']
                            ]
                        }
                    }]
                    
                });

        });

    }

    // Chart 3

    if($('#chart3').length) {

        var controller = new ScrollMagic.Controller();
        new ScrollMagic.Scene({triggerElement: '#chart3', triggerHook: 0.8, reverse: false})
            .addTo(controller)
            .on("start", function () {

                chart3 = Highcharts.chart('chart3', {
                    chart: {
                        backgroundColor: 'rgba(0,0,0,0)',
                        spacingBottom: 40,
                        spacingTop: 40,
                        spacingLeft: 50,
                        spacingRight: 50,
                        height: 500,
                        scrollablePlotArea: {
                            minWidth: 500
                        }
                    },
                    colors: [
                        '#8f5ea7',
                    ],
                    title: {
                        text: 'Cumulative Trend',
                        style: {
                            fontWeight: 'bold',
                            fontSize: '14px',
                            color: '#334154'
                        }
                    },
                    subtitle: {
                        text: 'October 2018 - August 2019'
                    },
                    xAxis: {
                        categories: ['Oct 2018', 'Nov 2018', 'Dec 2018', 'Jan 2019', 'Feb 2019', 'Mar 2019', 'Apr 2019', 'May 2019', 'Jun 2019', 'Jul 2019', 'Aug 2019'],
                        labels: {
                            useHTML: true,
                            style: {
                                color: '#576784',
                                fontSize: '12px'
                            },
                            format: '{value:%b %Y}',
                            autoRotation: false
                        },
                        lineColor: '#979797',
                        gridLineWidth: 1,
                        min: 0,
                        max: 10,
                        startOnTick:false,
                        endOnTick:false,
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: null,
                        },
                        labels: {
                            style: {
                                color: '#576784',
                                fontSize: '12px',
                                fontWeight: 'bold'
                            }
                        },
                        tickInterval: 5000,
                        gridLineWidth: 1,
                        lineWidth: 1,
                        lineColor: '#979797'
                    },
                    plotOptions: {
                        area: {
                            fillColor: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [0, Highcharts.Color('#8f5ea7').setOpacity(0.7).get('rgba')],
                                    [1, Highcharts.Color('#ffffff').setOpacity(0).get('rgba')]
                                ]
                            },
                            marker: {
                                radius: 6,
                                fillColor: 'white',
                                lineWidth: 3,
                                lineColor: '#8f5ea7',
                                states: {
                                    hover: {
                                        fillColor: '#8f5ea7',
                                        lineColor: 'white'
                                    }
                                }
                            },
                            lineWidth: 3
                        }
                    },
                    legend: {
                        itemMarginTop: 20,
                        symbolRadius: 0,
                        itemStyle: {
                            color: '#576784',
                            fontSize: '12px',
                            fontWeight: 'normal'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    tooltip: {
                        backgroundColor: '#334154',
                        borderColor: 'white',
                        borderRadius: 15,
                        padding: 15,
                        style: {
                            color: 'white',
                        },
                        formatter: function () {
                            yNum = Highcharts.numberFormat(this.y, -1, '.', ',');

                            return '<span style="display: inline-block; margin-bottom: 8px; font-size: 12px;">' + this.x + '</span><br><span style="display: inline-block; margin-right: 8px; margin-bottom: 8px;"><svg height="12" width="12"><circle cx="50%" cy="50%" r="5" stroke="white" stroke-width="1" fill="' + this.point.color + '" /></svg></span><span style="display: inline-block; font-size: 12px; font-weight: bold;">' + this.series.name + '</span><br><span style="display: block; margin-left: 21px; font-size: 16px; font-weight: bold;">' + yNum + '</span>';
                        },
                        useHTML: true
                    },
                    series: [{
                        type: 'area',
                        name: 'Enrolled',
                        data: [17000, 22000, 24000, 24000, 26000, 27000, 29000, 30000, 31000, 35000, 37000]
                    }]
                    
                });

        });

    }

    // Chart 4

    if($('#chart4').length) {

        var controller = new ScrollMagic.Controller();
        new ScrollMagic.Scene({triggerElement: '#chart4', triggerHook: 0.8, reverse: false})
            .addTo(controller)
            .on("start", function () {

                Highcharts.chart('chart4', {
                    chart: {
                        type: 'pie',
                        backgroundColor: 'rgba(0,0,0,0)',
                        spacingBottom: 40,
                        spacingTop: 40,
                        spacingLeft: 50,
                        spacingRight: 50,
                        height: 500,
                    },
                    colors: [
                    '#629fc3', '#8f5ea7', '#334154', '#e48e5e', '#448890'
                    ],
                    title: {
                        text: 'Course uptake by service group',
                        style: {
                            fontWeight: 'bold',
                            fontSize: '14px',
                            color: '#334154'
                        }
                    },
                    subtitle: {
                        text: 'The total course uptake: 33501, October 2018 - August 2019',
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: false
                            },
                            showInLegend: true,
                            borderWidth: 0,
                            states: {
                                hover: {
                                    halo: {
                                        size: 15
                                    }
                                },
                                inactive: {
                                    opacity: 1
                                }
                            }
                        }
                    },
                    legend: {
                        itemMarginTop: 20,
                        symbolRadius: 0,
                        itemStyle: {
                            color: '#576784',
                            fontSize: '12px',
                            fontWeight: 'normal'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    tooltip: {
                        followPointer: false,
                        backgroundColor: '#334154',
                        borderColor: 'white',
                        borderRadius: 15,
                        padding: 15,
                        style: {
                            color: 'white',
                        },
                        formatter: function () {
                            yNum = Highcharts.numberFormat(this.y, -1, '.', ',');

                            return '<span style="display: inline-block; margin-bottom: 8px; font-size: 12px;">' + this.point.name + '</span><br><span style="display: inline-block; margin-right: 8px; margin-bottom: 8px;"><svg height="12" width="12"><circle cx="50%" cy="50%" r="5" stroke="white" stroke-width="1" fill="' + this.point.color + '" /></svg></span><span style="display: inline-block; font-size: 12px; font-weight: bold;">Value</span><br><span style="display: block; margin-left: 21px; font-size: 16px; font-weight: bold;">' + yNum + '%</span>';
                        },
                        useHTML: true
                    },
                    series: [{
                        colorByPoint: true,
                        data: [{
                            name: 'Administration',
                            y: 57,
                        }, {
                            name: 'Allied Health',
                            y: 25
                        }, {
                            name: 'Doctor/Physician',
                            y: 10
                        }, {
                            name: 'Enrolled nurse',
                            y: 8
                        }]
                    }]
                });

        });

    }

    // Chart 5

    if($('#chart5').length) {

        var controller = new ScrollMagic.Controller();
        new ScrollMagic.Scene({triggerElement: '#chart5', triggerHook: 0.8, reverse: false})
            .addTo(controller)
            .on("start", function () {

                var chart = Highcharts.chart('chart5', {
                    chart: {
                        type: 'pie',
                        backgroundColor: 'rgba(0,0,0,0)',
                        spacingBottom: 40,
                        spacingTop: 40,
                        spacingLeft: 50,
                        spacingRight: 50,
                        height: 500,
                    },
                    colors: [
                    '#629fc3', '#8f5ea7', '#334154', '#e48e5e', '#448890'
                    ],
                    title: {
                        text: 'Course uptake by service group',
                        style: {
                            fontWeight: 'bold',
                            fontSize: '14px',
                            color: '#334154'
                        }
                    },
                    subtitle: {
                        text: 'The total course uptake: 33501, October 2018 - August 2019',
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: false
                            },
                            showInLegend: true,
                            borderWidth: 0,
                            states: {
                                hover: {
                                    halo: {
                                        size: 12,
                                        opacity: 1
                                    },
                                    brightness: 0
                                },
                                inactive: {
                                    opacity: 1
                                }                    
                            }
                        }
                    },
                    legend: {
                        itemMarginTop: 20,
                        symbolRadius: 0,
                        itemStyle: {
                            color: '#576784',
                            fontSize: '12px',
                            fontWeight: 'normal'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    tooltip: {
                        followPointer: false,
                        backgroundColor: '#334154',
                        borderColor: 'white',
                        borderRadius: 15,
                        padding: 15,
                        style: {
                            color: 'white',
                        },
                        formatter: function () {
                            yNum = Highcharts.numberFormat(this.y, -1, '.', ',');

                            return '<span style="display: inline-block; margin-bottom: 8px; font-size: 12px;">' + this.point.name + '</span><br><span style="display: inline-block; margin-right: 8px; margin-bottom: 8px;"><svg height="12" width="12"><circle cx="50%" cy="50%" r="5" stroke="white" stroke-width="1" fill="' + this.point.color + '" /></svg></span><span style="display: inline-block; font-size: 12px; font-weight: bold;">Value</span><br><span style="display: block; margin-left: 21px; font-size: 16px; font-weight: bold;">' + yNum + '%</span>';
                        },
                        useHTML: true
                    },
                    series: [{
                        innerSize: '80%',
                        colorByPoint: true,
                        data: [{
                            name: 'Administration',
                            y: 57,
                        }, {
                            name: 'Allied Health',
                            y: 25
                        }, {
                            name: 'Doctor/Physician',
                            y: 10
                        }, {
                            name: 'Enrolled nurse',
                            y: 8
                        }]
                    }]
                },
                function(chart) {
                    var text = 'The total course uptake';
                    var total = 33501;

                    var html = '<span style="font-size: 14px;">'
                    html += text
                    html += '</span><br><span style="font-size: 30px; font-weight: bold;">'
                    html += total
                    html += '</span>';
                    $(".center-text").append(html);
                });

            });

    }

});