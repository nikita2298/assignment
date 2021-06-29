import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StateComponent } from './components/state/state.component';

const routes: Routes = [
  { path: ':id', component:StateComponent },
  { path: '', component:StateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateRoutingModule { }
