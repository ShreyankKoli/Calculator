import { Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'calculator',
        pathMatch:'full'
    },
    {
        path:'calculator',
        component: CalculatorComponent
    },
    {
        path:'to-do-list',
        component: ToDoListComponent
    }
];
