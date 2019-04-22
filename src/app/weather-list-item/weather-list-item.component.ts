import { Component, Input } from '@angular/core';
import { WeatherDay } from '../open-weather-data.model';

@Component({
    selector: 'weather-list-item',
    templateUrl: './weather-list-item.component.html',
    styleUrls: ['./weather-list-item.component.scss']
})

export class WeatherListItemComponent {
    @Input() day : WeatherDay;
}