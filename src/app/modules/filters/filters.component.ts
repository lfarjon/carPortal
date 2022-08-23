import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent implements OnInit {

  @Input() cars = [];

  constructor() { }

  ngOnInit(): void {
  }

  filterByColor(key: any) {
    console.log(key);
    this.cars = this.cars.filter((car: any) => {
      return car['color'] === key
    });
  }

}
