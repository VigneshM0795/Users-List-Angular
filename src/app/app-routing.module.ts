import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Child4Component } from './child4/child4.component';
import { Child5Component } from './child5/child5.component';
import { UserslistComponent } from './userslist/userslist.component';
const routes: Routes = [
  {path:'child', component: ChildComponent},
  {path:'child2', component: Child2Component},
  {path:'child3', component: Child3Component},
  {path:'child4', component: Child4Component},
  {path:'child5', component: Child5Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
