import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsideViewComponent } from './inside-view/inside-view.component';

const routes: Routes = [
  {path: '',redirectTo: 'insideView',pathMatch:'full'},
  {path: 'insideView', component: InsideViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
