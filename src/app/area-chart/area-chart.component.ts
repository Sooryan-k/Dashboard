import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {
Highcharts= Highcharts
chartOptions= {}
constructor(){
  this.chartOptions={
    chart: {
        type: 'area'
    },
    title: {
        text: 'Monthly Sign ups',
        align: 'center'
    },
    subtitle: {
        text: 'E-movie',
        align: 'center'
    },
    xAxis:{
      categories:['January','February','March','April','May','June','July','August','September','October','November','December']
    },
    yAxis: {
        title: {
            useHTML: true,
        }
    },
    credits:{
      enabled:false 
    },
    tooltip: {
        shared: true,
        headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
    },
    plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    series: [{
        name: 'New users',
        data: [1000, 910, 1456, 1600, 2189, 3498, 5789, 5234, 9000,10245,14378,18670]

     },
    {name: 'Revenue',
    data: [1225, 512, 1327, 1896, 2067, 4567, 6900, 6234, 9990,10648,16798,22345]}
    ]
}
    HC_exporting(Highcharts);
}
}
