import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './includes/header/header.component';
import { CustomComponent } from './includes/observable/custom/custom.component';
import { FromEventComponent } from './includes/observable/from-event/from-event.component';
import { IntervalComponent } from './includes/observable/interval/interval.component';
import { ListComponent } from './includes/observable/list/list.component';

import { ObservableComponent } from './includes/observable/observable.component';
import { OfFromComponent } from './includes/observable/of-from/of-from.component';
import { ToArrayComponent } from './includes/observable/to-array/to-array.component';
import { PromiseComponent } from './promises/promise/promise.component';

const routes: Routes = [
  {path:'promise', component:PromiseComponent},
  {path:'observable', component:ObservableComponent, children:[
    {path:'', component:ListComponent},
    {path:'from-event', component:FromEventComponent},
    {path:'interval', component:IntervalComponent},
    {path:'of-from', component:OfFromComponent},
    {path:'toArray', component:ToArrayComponent},
    {path:'custom', component:CustomComponent}
  ]},
  {path:'**', redirectTo:'promise'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
