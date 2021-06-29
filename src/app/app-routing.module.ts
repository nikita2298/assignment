import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/components/country/country.component';

const routes: Routes = [
  { path: 'state', loadChildren: () => import(`./state/state.module`).then(m => m.StateModule) },
  { path: '', component:CountryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
