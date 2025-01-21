import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Model } from './service/model.model';
import { NgForOf } from '@angular/common';
import { CalculatorComponent } from "./components/calculator/calculator.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule, NgForOf, CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  list:Model[]=[]
  onSubmit(){
    alert("Submitted")
  }
  title = 'calculator';
}
