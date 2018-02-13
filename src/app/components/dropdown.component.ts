import { Component, Input } from '@angular/core';
import { FilterPipe } from '../pipes/filter.pipe';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  // pipes: [FilterPipe]
})

export class DropdownComponent {

  dropdownOptions = [];
  selectedValue: string;
  expandOptions: boolean = false;
  constructor() {
    this.dropdownOptions = [
      {
        label: 'Option 1',
        value: '01'
      },
      {
        label: 'Option 2',
        value: '02'
      },
      {
        label: 'Option 3',
        value: '03'
      },
      {
        label: 'Option 4',
        value: '04'
      },
      {
        label: 'Option 5',
        value: '05'
      }
    ]
  }

  selectOption(option) {
    this.selectedValue = option.label;
    this.expandOptions = false;
  }

  openOptions() {
    this.expandOptions = true;
  }

  clearOptions() {
    this.selectedValue = "";
  }

}
