import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { MainContentComponent } from './main-content/main-content.component';
import { VisitorsComponent } from './visitors/visitors.component';


const routes: Routes = [
  {
    path:'',component:MainContentComponent
  },
  {
    path:'employees',component:EmployeesComponent
  },
  {
    path:'visitors',component:VisitorsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
