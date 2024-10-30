import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  serviceData: string = 'Service at Root Level';

  constructor() { }

  getData() {
    return this.serviceData;
  }

  setData(newData: string) {
    this.serviceData = newData;
  }
}
