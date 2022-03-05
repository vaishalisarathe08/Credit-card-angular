import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterationFormComponent } from './registeration-form.component';

const routes: Routes = [{ path: '', component: RegisterationFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterationFormRoutingModule { }
