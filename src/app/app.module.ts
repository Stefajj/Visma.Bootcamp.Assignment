import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsideViewComponent } from './inside-view/inside-view.component';
import { ControllerComponent } from './inside-view/controller/controller.component';
import { DoorsComponent } from './inside-view/doors/doors.component';

@NgModule({
  declarations: [
    AppComponent,
    InsideViewComponent,
    ControllerComponent,
    DoorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
