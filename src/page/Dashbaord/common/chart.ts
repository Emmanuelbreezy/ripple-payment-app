

const options ={
    tooltip: {
      x: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
    },
    chart: {
      id: 'basic-line',
      type: 'line' as 'line', 
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: false as false
    },
    stroke: {
      curve: 'smooth' as 'smooth', // Explicitly specify the curve type as 'smooth'
    },
    xaxis: {
      categories: [
        'JAN',
        'FEB',
        'MAR',
        'APR',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC'
        ],
      axisBorder: {
        show: true, // Hide the x-axis line
      },
      axisTicks: {
        show: false, // Hide the x-axis ticks
      },
      
      labels: {
        style: {
          fontSize: '12px',
          fontFamily: 'Aeonik',
          lineHeight: '16px',
          fontWeight: 700,
          textTransform: 'uppercase',
          colors: '#8D8E8D',
        },
        hideOverlappingLabels: false,
      },
    },
    yaxis: [
      {
          axisTicks: {
            show: false
          },
          axisBorder: {
            show: true,
          },
          labels: {
            style: {
              fontSize: '12px',
              fontFamily: 'Aeonik',
              lineHeight: '16px',
              colors: "#8D8E8D",
              fontWeight: 700,
              textTransform: 'uppercase',

            }
          },
      }
    ],
  };

  const series =[
    {
      name: 'Inflow',
      data: [130, 140, 135, 550, 459, 60, 70, 401, 480, 85, 100, 120],
      color: '#219653',
    },
    {
      name: 'Outflow',
      data: [120, 135, 125, 445, 420, 145, 165, 150, 380, 350, 200, 290],
      color: '#EF4444',

    },
  ];


  export {
    options,
    series
  }