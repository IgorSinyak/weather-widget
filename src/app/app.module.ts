import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CitySearchComponent } from './city-search/city-search.component';
import { WidgetComponent } from './widget/widget.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherListItemComponent } from './weather-list-item/weather-list-item.component';

import { WeatherIconUrlPipe } from './pipes/weather-icon-url.pipe';
import { TemperaturePipe } from './pipes/temperature.pipe';

const appRoutes: Routes = [
  { path: 'search-city',
    component: CitySearchComponent,
  },
  {
    path: 'current-city',
    component: WidgetComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/current-city',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    WeatherListComponent,
    WeatherListItemComponent,
    WeatherIconUrlPipe,
    TemperaturePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
