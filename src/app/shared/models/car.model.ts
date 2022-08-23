import { Damage } from "./damage.model";

export interface Car {
  id: string;
  brand: string;
  model: string;
  km: string;
  year: string;
  shift: string;
  fuel: string;
  color: string;
  car_type: string;
  e_car: boolean;
  damages: Damage[];
}
