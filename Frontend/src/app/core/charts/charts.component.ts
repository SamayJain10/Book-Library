import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts; 
  chartOptions: Highcharts.Options = {};      

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'column' 
      },
      title: {
        text: 'Book Ratings Comparison'
      },
      xAxis: {
        categories: ['The Catcher in the Rye', 'To Kill a Mockingbird', 'The Great Gatsby', 'A Brief History of Time'] 
      },
      yAxis: {
        title: {
          text: 'Ratings'
        }
      },
      series: [{
        type: 'column',  
        name: 'Rating',
        data:[4.2, 4.7, 4.1, 4.5] 
      }]
    };
  }
}
