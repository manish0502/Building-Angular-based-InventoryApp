import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from '../product/list/list.component'
import { AddComponent } from '../product/add/add.component'
import { ViewComponent } from '../product/view/view.component'
const routes: Routes = [
  { path:'' , component: ListComponent},
  {
    path:'add',
    component:AddComponent
  },
  {
    path:'edit/:id',
    component:AddComponent
  },
  {
    path: 'view/:id',
    component:ViewComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
