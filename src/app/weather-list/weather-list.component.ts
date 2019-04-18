import { Component, Input } from '@angular/core';
import { WeatherDay } from '../open-weather-data.model';

@Component({
    selector: 'weather-list',
    templateUrl: './weather-list.component.html'
})

export class WeatherListComponent {
    @Input() daysList: Array<WeatherDay>;
}