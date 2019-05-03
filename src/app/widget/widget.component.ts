import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OpenWeatherModel, WeatherDay, WeatherTime } from '../open-weather-data.model';

@Component({
    selector: 'app-weather-widget',
    templateUrl: './widget.component.html',
    styleUrls: ['./widget.component.scss']
})

export class WidgetComponent implements OnInit {
    APIKEY = 'bf6d8515b71fe78339c1a582b2be986a';
    weatherData: OpenWeatherModel;
    daysList: Array<WeatherDay> = [];

    constructor(private httpClient: HttpClient) {}

    ngOnInit() {
        this.getCoords();
    }

    getCoords() {
        navigator.geolocation.getCurrentPosition(
            (pos) => { this.getWeatherData(pos.coords.latitude, pos.coords.longitude); },
            (err) => { console.error(err.message); },
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            }
        );
    }

    getWeatherData(lat: number, lon: number) {
        const url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${this.APIKEY}&lat=${lat}&lon=${lon}`;
        this.httpClient.get(url).subscribe((data: OpenWeatherModel) => {
            this.weatherData = data;
            data.list.forEach((item) => item.dateObj = new Date(item.dt_txt));
            while (data.list.length) {
                const dayWeatherList = data.list.filter((item) =>
                    data.list[0].dateObj.toLocaleDateString() === item.dateObj.toLocaleDateString());
                const date = new Date(dayWeatherList[0].dt_txt);
                this.daysList.push(new WeatherDay(date, dayWeatherList));
                data.list.splice(0, dayWeatherList.length);
            }
            this.fillFirstDay();
        });
    }

    fillFirstDay() {
        while (this.daysList[0].weatherList.length < 8) {
            const prevTime = new Date(this.daysList[0].weatherList[0].dateObj.valueOf() - 3 * 60 * 60 * 1000);
            this.daysList[0].weatherList.unshift(new WeatherTime(prevTime, null));
        }
    }
}
