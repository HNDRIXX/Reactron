var data = [
    { name: 'Category 1', value: 100 },
    { name: 'Category 2', value: 200 },
    { name: 'Category 3', value: 300 },
    { name: 'Category 4', value: 400 }
  ]
  
  Highcharts.chart('cntr', {
    chart: {
      type: 'packedbubble',
      height: '100%'
    },
    title: {
      text: 'Packed Bubble Chart'
    },
    tooltip: {
      useHTML: true,
      pointFormat: '<b>{point.name}:</b> {point.value}'
    },
    plotOptions: {
      packedbubble: {
        minSize: '20%',
        maxSize: '100%',
        zMin: 0,
        zMax: 1000,
        layoutAlgorithm: {
          gravitationalConstant: 0.05,
          splitSeries: true,
          seriesInteraction: false,
          dragBetweenSeries: true,
          parentNodeLimit: true
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}',
          style: {
            color: 'black',
            textOutline: 'none',
            fontWeight: 'normal'
          }
        }
      }
    },
    series: [{
      name: 'Categories',
      data: data
    }]
  })