import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomebasePage } from './pages/homebase/homebase.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomebasePage,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
