import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  sum(liczba1: number, liczba2: number): number {
    return liczba1 + liczba2;
  }

  substract(liczba1: number, liczba2: number): number {
    return liczba1 - liczba2;
  }

  multiplay(liczba1: number, liczba2: number): number {
    return liczba1 * liczba2;
  }

  divide(liczba1: number, liczba2: number): number {
    if(liczba2 !== 0) {
      return liczba1 / liczba2;
    }
    else {
      alert("Nie dziel przez zero");
      return 0;
    }
    
  }

}
