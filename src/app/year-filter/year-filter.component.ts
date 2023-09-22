import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
@Component({
  selector: 'app-year-filter',
  templateUrl: './year-filter.component.html',
  styleUrls: ['./year-filter.component.css']
})
export class YearFilterComponent {
  @Output() filterChange = new EventEmitter<string>();
  yearFilterForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.yearFilterForm = this.formBuilder.group({
      selectedYear: [''] // Initialize with an empty value
    });
  }

  applyFilter() {
    const selectedYearControl = this.yearFilterForm.get('selectedYear')?.value;
    this.filterChange.emit(selectedYearControl);
    
  }
}
