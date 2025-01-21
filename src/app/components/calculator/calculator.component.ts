import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  constructor(private router: Router){}

  title = 'Calculator';
  display: string = '';

  getInput(value: string): void {
      this.display += value;
      console.log(value);
  }

  clear(): void {
      this.display = '';
  }

  showData(): void {
      try {
          this.display = eval(this.display);
      } catch (e) {
          this.display = 'Error';
      }
  }





}



    

