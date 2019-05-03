import { Component, Input } from '@angular/core';
import { WeatherDay } from '../open-weather-data.model';

@Component({
    selector: 'app-weather-list',
    templateUrl: './weather-list.component.html',
    styleUrls: ['./weather-list.component.scss']
})

export class WeatherListComponent {
    @Input() daysList: Array<WeatherDay>;
}
