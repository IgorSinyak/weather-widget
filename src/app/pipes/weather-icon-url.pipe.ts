import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'weatherIconUrl'})

export class WeatherIconUrlPipe implements PipeTransform {
    transform(iconName: string): string {
        return `http://openweathermap.org/img/w/${iconName}.png`;
    }
}