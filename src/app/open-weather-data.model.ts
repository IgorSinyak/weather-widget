export class OpenWeatherModel {
    city: WeatherCity;
    list: Array<WeatherTime>;
}

class WeatherCity {
    id: string;
    name: string;
    coord: Coordinates;
    country: string;
}

export class WeatherTime {
    dt_txt: string;
    dateObj: Date;
    weather: Array<WeatherMain>;

    constructor(date: Date, weather: Array<WeatherMain>) {
        this.dateObj = date;
        this.weather = weather;
    }
}

export class WeatherMain {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}

export class WeatherDay {
    date: Date;
    weatherList: Array<WeatherTime>;
    constructor(date: Date, weatherList: Array<WeatherTime>) {
        this.date = date;
        this.weatherList = weatherList;
    }
}
