import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherListItemComponent } from './weather-list-item/weather-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    WeatherListComponent,
    WeatherListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
