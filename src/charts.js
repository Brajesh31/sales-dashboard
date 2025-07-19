// Chart
const ctx = document.getElementById("ctx");
const ctx2 = document.getElementById("ctx2");
const ctx3 = document.getElementById("ctx3");

// Chart 1 (line)
new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['00:00', '01:30', '02:30', '03:30', '04:30', '05:30', '06:30'],
      datasets: [{
        label: 'Sales',
        data: [32 ,40 ,29 ,50 ,42 ,81 ,56],
        borderWidth: 1,
        borderColor: '#3979ef',
        tension: 0.4,
        fill:true,
        backgroundColor: '#3979ef49',
    } ,
    {
        label: 'Revenue',
        data: [10 ,30 ,45 ,30 ,36 ,55 ,42],
        borderWidth: 1,
        tension: 0.4,
        borderColor: '#2fef46',
        fill:true,
        backgroundColor: '#2fef4543',
        } ,
        {
            label: 'Custuomers',
            data: [18 ,10 ,35 ,19 ,8 ,22 ,10],
            borderWidth: 1 ,
            tension: 0.4,
            borderColor: '#f50',
            fill:true,
            backgroundColor: '#ff550037',
        }]
    },
    options: {
      responsive: true,
      animations: {
            duration: 3000,
            easing: 'easeOutQuart',
        },
      responsive: true,
      scales: {
        y: {
          beginAtZero: true ,
          grid: {
            display: true
          }
        },
        x: {
          beginAtZero: true ,
          grid: {
            display: false
          }
        }
      } ,
      
    }
});

// Chart 2 (Radar)
new Chart(ctx2 ,{
  type: 'radar',
  data :{
    labels : ['Sales' ,'Marketing' ,'Devolpment' ,'Customer support' ,'App Tech' ,'Administrator'],
    datasets: [{
      label: 'Actual Spending',
      data: [20 ,20 ,20 ,17 ,25 ,22],
      borderWidth: 2,
      borderColor: '#54ef39',
      } ,
      {
      label: 'Allocated Budget',
      data: [15 ,17 ,28 ,26 ,16 ,5],
      borderWidth: 2,
      borderColor: '#3f04be',
    }],
  } ,
  options:{
    responsive: true,
  }
});

// Chart 3 (pie)
new Chart(ctx3 ,{
  type: 'doughnut',
  data: {
    labels: ['SEO' ,'Direct' ,'Email' ,'Union Ads' ,'Video Ads'],
    datasets: [{
      data: [20 ,16 ,11 ,9 ,5],
      backgroundColor: ['#8124e4' ,'#35e325' ,'#e3c325' ,'#eb3f2c' ,'#2ca5eb']
    }]
  } ,
  options:{
    responsive: true,
  }
})