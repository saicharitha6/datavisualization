import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartOptions } from 'chart.js'; // Import ChartOptions

declare var Chart: any; // Import Chart.js or install typings if necessary

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  data: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:9090/api/data/filterregion?region=World').subscribe((response: any) => {
      this.data = response;
      this.createPieChart();
    });
  }

  createPieChart() {
    const ctx = document.getElementById('pieChart') as HTMLCanvasElement;
    const labels = this.data.map(item => item.label);
    const values = this.data.map(item => item.value);

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          data: values,
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            // Add more colors as needed
          ],
        }]
      },
      options: {
        title: {
          display: true,
          text: 'My Pie Chart',
          fontSize: 18,
        },
        legend: {
          display: true,
          position: 'top',
        },
        tooltips: {
          enabled: true,
          mode: 'single',
        },
        animation: {
          animateRotate: true,
          animateScale: true,
        },
        maintainAspectRatio: false,
      } as ChartOptions, // Type cast the options to ChartOptions
    });
  }
}
