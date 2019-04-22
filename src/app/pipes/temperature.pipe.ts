import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'temperature'})

export class TemperaturePipe implements PipeTransform {
    transform(value: number): string {
        const KELVIN_TO_CELSIUS_KF: number = 273.15;
        let celsiusVal = Math.round(value - KELVIN_TO_CELSIUS_KF);
        return (celsiusVal < 0 ? '-' : '+') + celsiusVal + ' C';
    }
}