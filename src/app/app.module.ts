import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsideViewComponent } from './inside-view/inside-view.component';
import { ControllerComponent } from './inside-view/controller/controller.component';
import { DoorsComponent } from './inside-view/doors/doors.component';
import { LevelIndicatorComponent } from './inside-view/level-indicator/level-indicator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InsideViewComponent,
    ControllerComponent,
    DoorsComponent,
    LevelIndicatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
