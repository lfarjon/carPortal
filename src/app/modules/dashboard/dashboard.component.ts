import { Component, HostListener } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Car } from 'src/app/shared/models/car.model';
import { CarsService } from 'src/app/shared/services/cars/cars.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  cars: Car[] = [];
  // save first document in snapshot of cars received
  firstInResponse: any = [];
  // save last document in snapshot of cars received
  lastInResponse: any = [];

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _carService: CarsService,
  ) {
    const cars = this._carService.getCars()
    .pipe(takeUntil(this._unsubscribeAll));

    cars.subscribe(cars => {
      this.lastInResponse = cars.docs[cars.docs.length - 1];
      this.cars = cars.docs.map(car => {
        return car.data() as Car
      });
    });
  }

  loadMore() {
    const moreCars = this._carService.loadMore(this.lastInResponse)
    .pipe(takeUntil(this._unsubscribeAll));

    moreCars.subscribe(cars => {
      this.lastInResponse = cars.docs[cars.docs.length - 1];
      cars.docs.map(car => {
        return this.cars.push(car.data() as Car)
      });
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // 200 is the height from bottom from where you want to trigger the infintie scroll, can we zero to detect bottom of window
    if (window.innerHeight + window.scrollY === document.body.scrollHeight) {
        this.loadMore();
    }
  }

  ngOnDestroy(): void
  {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next(null);
      this._unsubscribeAll.complete();
  }

}
