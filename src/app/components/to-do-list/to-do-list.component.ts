import { Component } from '@angular/core';
import { Model } from '../../service/model.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServicesService } from '../../service/services.service';

@Component({
  selector: 'app-to-do-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
constructor(public services:ServicesService){}

list:Model[]=[]
name: any;
lastName: any;

onSubmit(){
  
  this.services.sharedData
  alert("Submitted");
}
  
}
