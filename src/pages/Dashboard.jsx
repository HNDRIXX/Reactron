import React, { useState, useEffect, useRef } from 'react'
import '../utils/styles/Dashboard.css'

import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsAccessibility from 'highcharts/modules/accessibility';

import Sidebar from '../component/sidebar/Sidebar'

// Initialize Highcharts modules
HighchartsMore(Highcharts);
HighchartsExporting(Highcharts);
HighchartsAccessibility(Highcharts);

function Dashboard({ onLogout }) {
    const chartContainerRef = useRef(null);
    const barChartRef = useRef(null)
    const lineChartRef = useRef(null)

    useEffect(() => {    
        if (lineChartRef.current){
            Highcharts.chart('lineGraph', {
                chart: {
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                },
                title: {
                    text: 'Active Graph',
                    align: 'left'
                },

                subtitle: {
                    text: 'Lorem ipsum dolor sit amet',
                    align: 'left'
                },
            
                yAxis: {
                    title: {
                        text: 'Number of Employees'
                    }
                },
            
                xAxis: {
                    accessibility: {
                        rangeDescription: 'Range: 2010 to 2020'
                    }
                },
            
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },
            
                plotOptions: {
                    series: {
                        label: {
                            connectorAllowed: false
                        },
                        pointStart: 2010
                    }
                },
            
                series: [{
                    name: 'Installation & Developers',
                    data: [43934, 48656, 65165, 81827, 112143, 142383,
                        171533, 165174, 155157, 161454, 154610]
                }, {
                    name: 'Manufacturing',
                    data: [24916, 37941, 29742, 29851, 32490, 30282,
                        38121, 36885, 33726, 34243, 31050]
                }, {
                    name: 'Sales & Distribution',
                    data: [11744, 30000, 16005, 19771, 20185, 24377,
                        32147, 30912, 29243, 29213, 25663]
                }, {
                    name: 'Operations & Maintenance',
                    data: [null, null, null, null, null, null, null,
                        null, 11164, 11218, 10077]
                }, {
                    name: 'Other',
                    data: [21908, 5548, 8105, 11248, 8989, 11816, 18274,
                        17300, 13053, 11906, 10073]
                }],
            
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 30,
                            maxWidth: 30,
                        },
                        chartOptions: {
                            legend: {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'bottom'
                            }
                        }
                    }]
                }
            })
        }

        if (barChartRef.current) {
            Highcharts.chart('barGraph', {
                chart: {
                    type: 'bar',
                    height: 360,
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                },
                title: {
                    text: 'Active Graph',
                    align: 'left'
                },
                subtitle: {
                    text: 'Lorem ipsum dolor sit amet',
                    align: 'left'
                },
                xAxis: {
                    categories: ['Africa', 'America', 'Asia', 'Europe'],
                    title: {
                        text: null
                    },
                    gridLineWidth: 1,
                    lineWidth: 0
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Population (millions)',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    },
                    gridLineWidth: 0
                },
                tooltip: {
                    valueSuffix: ' millions'
                },
                plotOptions: {
                    bar: {
                        borderRadius: '50%',
                        dataLabels: {
                            enabled: true
                        },
                        groupPadding: 0.1
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -40,
                    y: 80,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor:
                        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
                    shadow: true
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Year 1990',
                    data: [631, 727, 3202, 721]
                }, {
                    name: 'Year 2000',
                    data: [814, 841, 3714, 726]
                }, {
                    name: 'Year 2018',
                    data: [1276, 1007, 4561, 746]
                }]
            })
        }

        if (chartContainerRef.current) {
          Highcharts.chart('cntr', {
            chart: {
                type: 'pie',
                width: '450',
                height: '360',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                className: '',
                style: {
                    color: 'white',
                }
            },
            title: {
                text: 'Active Graph',
                align: 'left'
            },
            subtitle: {
                text: 'Lorem ipsum dolor sit amet',
                align: 'left'
            },
            tooltip: {
                valueSuffix: '%'
            },
            plotOptions: {
                series: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: [{
                        enabled: true,
                        distance: 20
                    }, {
                        enabled: true,
                        distance: -40,
                        format: '{point.percentage:.1f}%',
                        style: {
                            fontSize: '1.2em',
                            textOutline: 'none',
                            opacity: 0.7
                        },
                        filter: {
                            operator: '>',
                            property: 'percentage',
                            value: 10
                        }
                    }]
                }
            },
            series: [
                {
                    name: 'Percentage',
                    colorByPoint: true,
                    data: [
                        {
                            name: 'Water',
                            y: 55.02
                        },
                        {
                            name: 'Fat',
                            sliced: true,
                            selected: true,
                            y: 26.71
                        },
                        {
                            name: 'Carbohydrates',
                            y: 1.09
                        },
                        {
                            name: 'Protein',
                            y: 15.5
                        },
                        {
                            name: 'Ash',
                            y: 1.68
                        }
                    ]
                }
            ]
          });
        }
      }, []);

  return (
    <div className='h-screen flex'>
        <Sidebar 
            onLogout={onLogout}
        />

        <div id="container" className="bg-gray-100 overflow-hidden w-screen m-3 p-3 rounded">
            <div className='wrapper overflow-y-scroll w-full h-full'>
                <p className='text-2xl text-blue-400 font-bold'>Welcome, Patrick!</p>

                <div className='flex flex-row gap-5 items-center justify-center'>
                    <div className='flex bg-gray-200 w-1/2 items-center justify-center shadow-md rounded' >
                        <div ref={chartContainerRef} id="cntr"></div> 
                    </div>

                    <div className='bg-gray-200 w-1/2 shadow-md rounded'>
                        <div ref={barChartRef} id="barGraph"></div>
                    </div>
                </div>

                <div className='bg-gray-200 shadow-md mt-5 px-3 rounded'>
                    <div ref={lineChartRef} id="lineGraph" className=''></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
