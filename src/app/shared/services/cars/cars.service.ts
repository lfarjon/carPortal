import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { uuidv4 } from '@firebase/util';
import { Car } from '../../models/car.model';
import { Damage } from '../../models/damage.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(
    private afs: AngularFirestore
  ) {}

  getCars() {
    return this.afs.collection("cars", ref => ref
            .limit(3)
            .orderBy('id', 'desc')
          ).get()

  }

   addCar(carData: Car) {
    const carId = uuidv4();
    carData['id'] = carId;
    const carRef: AngularFirestoreDocument<Car> = this.afs.doc(`cars/${carId}`);

    return carRef.set(carData, { merge: true });
  }

  loadMore(lastInResponse: Car) {
    return this.afs.collection("cars", ref => ref
            .limit(1)
            .orderBy('id', 'desc')
            .startAfter(lastInResponse)
    ).get()
  }
}
