import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'credit-card', loadChildren: () => import('./registeration-form/registeration-form.module').then(m => m.RegisterationFormModule) },
{path:'', redirectTo:'credit-card', pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
