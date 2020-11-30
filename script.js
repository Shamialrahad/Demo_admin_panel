var ctx = document.getElementById('myChart').getContext('2d');
var ctx1 = document.getElementById('myChart1').getContext('2d');
var chart = new Chart(ctx, {

    type: 'line',
    data: {
        datasets: [{
            label: 'Anual Income',
            backgroundColor: 'rgb(145,77,240)',
            borderColor: 'rgb(145,77,240)',
            data: [280, 230,100, 50],            
        }, {
            label: 'Profit',
            backgroundColor: 'rgb(63,174,163)',
            borderColor: 'rgb(63,174,163)',
            data: [400, 330,500, 100],
        },{
            label: 'loss',
            backgroundColor: 'rgb(244,162,108)',
            borderColor: 'rgb(244,162,108)',
            data: [707, 360, 580, 180],
        }],
        labels: ['2016', '2017', '2018', '2019'],
    },
    options:{
        legend:{
            display:true,
            position:'bottom',
        }
    }
});

var chart1 = new Chart(ctx1, {
    type: 'doughnut',

    data: {
        labels: ['KFC','FLAT-Chryster LLC','KLM','Aeroflot','Lukoil','American Express','Daimler'],
        datasets:[{
            label:"Project By Account",
            backgroundColor:['#EB5757','#EAAB00','#A84069','#00B2A9','#2D9CDB','#BB6BD9','#4CD964'],
            data:[10,20,10,10,10,30,20,20],
        }]
    },
    options:{
        legend:{
            display:true,
            position:'bottom',
        }
    }
});

