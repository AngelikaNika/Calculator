import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service'

@Component({
  selector: 'app-exapmle',
  templateUrl: './exapmle.component.html',
  styleUrls: ['./exapmle.component.scss']
})
export class ExapmleComponent implements OnInit {

  liczba1 = 0;
  liczba2 = 0;
  output = 0;
  digitals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  currentInputIndex: number = 0;

  constructor(private calculatorService: CalculatorService ) { }

  ngOnInit(): void {

  }

  sum() {
    this.output = this.calculatorService.sum(this.liczba1, this.liczba2);
  }
  substract() {
    this.output = this.calculatorService.substract(this.liczba1, this.liczba2);
  }
  
  multiplay() {
    this.output = this.calculatorService.multiplay(this.liczba1, this.liczba2);
  }

  divide() {
    this.output = this.calculatorService.divide(this.liczba1, this.liczba2);
  }
  
  addDigital(digit: number) {
    if (this.currentInputIndex === 0) {
      this.liczba1 = parseInt(this.liczba1.toString() + digit);
    } else {
      this.liczba2 = parseInt(this.liczba2.toString() + digit);
    }
  }
}
