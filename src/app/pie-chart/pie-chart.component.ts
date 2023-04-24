import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  Highcharts= Highcharts
  chartOptions= {}
  constructor(){
    this.chartOptions={
      
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Monthly visitors by source',
            align: 'center'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: 'Course',
            colorByPoint: true,
            data: [{
                name: 'Google',
                y: 30.67,
                sliced: true,
                selected: true
            }, 
            {
                name: 'Facebook',
                y: 14.77
            },  {
                name: 'Linkedin',
                y: 14.86
            }, {
                name: 'Youtube',
                y: 12.63
            }, {
                name: 'Twitter',
                y: 11.53
            }]
        }],
        credits:{
          enabled:false 
        }
    }
    }
  }
