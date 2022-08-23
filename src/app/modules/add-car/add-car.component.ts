import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from 'src/app/shared/models/car.model';
import { CarsService } from 'src/app/shared/services/cars/cars.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  submitting: boolean = false;

  carTypeForm: FormGroup = this._formBuilder.group({
    brand: ['Mercedes', Validators.required],
    model: ['AMG', Validators.required],
    km: ['100', Validators.required],
    year: ['2022', Validators.required],
    shift: ['Automatic', Validators.required],
    fuel: ['Diesel', Validators.required],
    color: ['Blue', Validators.required],
    car_type: ['Sedan', Validators.required],
    e_car: [false, Validators.required],
  });

  carDamagesForm: FormGroup = this._formBuilder.group({
    damages: this._formBuilder.array([])
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _carService: CarsService
    ) { }

  ngOnInit(): void {
  }

  get damages() {
    return this.carDamagesForm.controls["damages"] as FormArray;
  }

  addNewDamage() {
    const damagesForm = this._formBuilder.group({
      part: ['', Validators.required],
      cost: ['', Validators.required]
    });
   this.damages.push(damagesForm);
  }

  deleteDamage(damageIndex: number) {
    this.damages.removeAt(damageIndex);
  }

  saveCar() {
    this.submitting = true;
    const carData: Car = {
      ...this.carTypeForm.value,
      damages: this.carDamagesForm.value.damages
    };
    this._carService.addCar(carData)
    .then(() => {
      this.submitting = false;
    })
    .catch((err) => {
      window.alert(err);
    })
  }
}
