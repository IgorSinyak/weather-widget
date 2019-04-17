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

class WeatherTime {
    dt_txt: string;
    dateObj: Date;
    weather: Array<WeatherMain>;
}

class WeatherMain {
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
