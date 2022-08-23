import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCarComponent } from './add-car.component';
import { RouterModule } from '@angular/router';
import { addCarRoutes } from './add-car.routing';
import { ReactiveFormsModule } from '@angular/forms';

import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    AddCarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(addCarRoutes),
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class AddCarModule { }
