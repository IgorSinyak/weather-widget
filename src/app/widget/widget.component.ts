import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OpenWeatherModel, WeatherDay } from '../open-weather-data.model';

@Component({
    selector: 'weather-widget',
    templateUrl: './widget.component.html',
    styleUrls: ['./widget.component.scss']
})

export class WidgetComponent implements OnInit {
    APIKEY = 'bf6d8515b71fe78339c1a582b2be986a';
    weatherData: OpenWeatherModel;
    daysList = [];

    constructor(private httpClient: HttpClient) {
    }

    ngOnInit() {
        this.getCoords();
    }

    getCoords() {
        navigator.geolocation.getCurrentPosition(
            (pos) => { this.getWeatherData(pos.coords.latitude, pos.coords.longitude) },
            (err) => { console.error(err.message) },
            {
                enableHighAccuracy: false,
                timeout: 5000,
                maximumAge: 0
            }
        )
    }

    getWeatherData(lat: number, lon: number) {
        let url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${this.APIKEY}&lat=${lat}&lon=${lon}`;
        this.httpClient.get(url).subscribe((data: OpenWeatherModel) => {            
            console.log('data', data);
            this.weatherData = data;
            data.list.forEach((item) => item.dateObj = new Date(item.dt_txt));
            while(data.list.length) {
                let dayWeatherList = data.list.filter((item) => data.list[0].dateObj.toLocaleDateString() === item.dateObj.toLocaleDateString() ? true : false );
                let date = new Date(dayWeatherList[0].dt_txt);
                this.daysList.push(new WeatherDay(date, dayWeatherList));
                data.list.splice(0, dayWeatherList.length);
            }
        })
    }
}