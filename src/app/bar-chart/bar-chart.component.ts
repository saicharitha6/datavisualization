import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  private svg: any;
  private margin = { top: 20, right: 20, bottom: 30, left: 40 };
  private width: number=10;
  private height: number=5;
  private x: any;
  private y: any;
  private g: any;
  data: any[] =[];
  filteredData: any[]=[]; // Store filtered data here
  selectedYear!: string;
  constructor(private dataService: DataserviceService) { }
  parameterizedData: any;
  ngOnInit() {
    const data = 'Singapore'; // Replace with the parameter value you want to send

    // Subscribe to the API call with the parameter
    this.dataService.getDataByCity(data).subscribe(
      (response: any) => {
        // Handle the API response here
        this.parameterizedData = response;
      },
      (error) => {
        // Handle any errors that occurred during the API call
        console.error('Error:', error);
      }
    );
    this.initChart();
  }

  private initChart(): void {
    this.width = 600 - this.margin.left - this.margin.right;
    this.height = 400 - this.margin.top - this.margin.bottom;

    this.svg = d3.select('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom);

    this.g = this.svg.append('g')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);

    this.x = d3.scaleBand()
      .rangeRound([0, this.width])
      .padding(0.1);

    this.y = d3.scaleLinear()
      .rangeRound([this.height, 0]);
  }

  private createChart(): void {
    this.x.domain(this.data.map(d => d.startyear));
    this.y.domain([0, d3.max(this.data, d => d.intensity)]);

    this.g.append('g')
      .attr('class', 'axis axis-x')
      .attr('transform', `translate(0,${this.height})`)
      .call(d3.axisBottom(this.x));

    this.g.append('g')
      .attr('class', 'axis axis-y')
      .call(d3.axisLeft(this.y).ticks(10, 's'))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('Intensity');

    this.g.selectAll('.bar')
      .data(this.data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', (d: { startyear: any; }) => this.x(d.startyear))
      .attr('y', (d: { intensity: any; }) => this.y(d.intensity))
      .attr('width', this.x.bandwidth())
      .attr('height', (d: { intensity: any; }) => this.height - this.y(d.intensity));
  }
  updateChart() {
    if (this.selectedYear) {
      this.filteredData = this.data.filter(item => item.year === this.selectedYear);
    } else {
      this.filteredData = this.data; // No year filter, show all data
    }
    // Call a function to update or recreate the chart using this.filteredData
    this.createChart();
  }
  onYearFilterChange(selectedYear: string) {
    this.selectedYear = selectedYear;
    // Update the chart based on the selected year
    this.updateChart();
  }
  
}
