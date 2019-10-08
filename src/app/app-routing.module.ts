import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewRegistedComponent } from './view-registed/view-registed.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { RegisComponent } from './regis/regis.component';
import { RandomComponent } from './random/random.component';
import { ConfirmComponent } from './confirm/confirm.component';

const routes: Routes = [
  { path: '', redirectTo: 'regis', pathMatch: 'full' },
  { path: 'regis', component: RegisComponent},
  { path: 'confirm', component: ConfirmComponent},
  { path: 'addstu', component: AddStudentComponent},
  { path: 'viewregisted', component: ViewRegistedComponent},
  { path: 'random', component: RandomComponent},
  { path: '**', component: RegisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
