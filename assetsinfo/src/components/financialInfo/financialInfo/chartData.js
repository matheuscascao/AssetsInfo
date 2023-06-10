const chartData = (sparklineData) => {
    return ({

    type: 'area',
    height: '100%',
    colors: ['red'],
    options: {
      chart: {
        autoScaleYaxis: true,
        sparkline: {
                  enabled: true
              },
              animations: {
                enabled: true,
                easing: 'linear',
                speed: 500,
                animateGradually: {
                    enabled: true,
                    delay: 100
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 300
                },
                height: 'auto',
                
            },
            fontFamily: 'Raleway, Arial, sans-serif',          
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'bright',
              type: "horizontal",
              shadeIntensity: 0,
              opacityFrom: 0.55,
              opacityTo: 0,
              stops: [0, 95, 100],
              colorStops: []
            }
          },
          dataLabels: {
              enabled: false
          },
          stroke: {
              curve: 'smooth',
              width: 1
          },
          tooltip: {
              fixed: {
                  enabled: false
              },
              x: {
                  show: false
              },
              y: {
                  title: 'Price:'
              },
              marker: {
                  show: false
              }
          }
      },
    series: [
        {
            name: 'Price',
            data: sparklineData
        }
    ],
    })
};

export default chartData;