<template>
    <v-container text-center>
        <v-row>
            <v-col>
                <h1>Pogoda <br>dla</h1>
                <h2>
                    <v-icon color="rgb(255,193,7)">fa-city</v-icon>
                    {{ result.name }}, {{ result.sys.country }}
                </h2>
            </v-col>
            <v-col cols="12">
                <h3>Czas</h3>
                <h3>{{ currentDate }}</h3>
            </v-col>
            <v-col cols="12" xs="6" md="3">
                <v-icon color="rgb(255,193,7)">fa-temperature-low</v-icon>
                Temperatura rzeczywista
                <h3>{{ result.main.feels_like }}&deg;C </h3>
            </v-col>
            <v-col cols="12" xs="6" md="3">
                <v-icon color="rgb(255,193,7)">fa-temperature-high</v-icon>
                <span> Temperatura odczuwalna</span>
                <h3>{{ result.main.temp }}&deg;C </h3>
            </v-col>
            <v-col cols="12" xs="6" md="3">
                <v-icon color="rgb(255,193,7)">fa-wind</v-icon>
                <span> Prędkość wiatru</span>
                <h3>{{ result.wind.speed }} m/s</h3>
            </v-col>
            <v-col cols="12" xs="6" md="3">
                <v-icon color="rgb(255,193,7)">fa-cloud</v-icon>
                <span> Zachmurzenie</span>
                <div v-for="(main, id) in result.weather" :key="id">
                    <h3>{{ main.description }}</h3>
                    <img height="30px" :src="iconURL + main.icon + '.png'" alt="Weather icon">
                </div>
            </v-col>
            <v-col cols="12" xs="6" md="3">
                <v-icon color="rgb(255,193,7)">fa-water</v-icon>
                <span> Wilgotność powietrza</span>
                <h3>{{ result.main.humidity }}%</h3>
            </v-col>

            <v-col cols="12" xs="6" md="3">
                <span>
                    <v-icon color="rgb(255,193,7)">fa-smog</v-icon>
                    Ciśnienie atmosferyczne
                </span>
                <h3>{{ result.main.pressure }} hPa</h3>
            </v-col>
            <v-col cols="12" xs="6" md="3">
                <span>
                    <v-icon color="rgb(255,193,7)">fa-sun</v-icon>
                    Wschód słońca
                </span>
                <h3>{{ sunriseTime }}</h3>
            </v-col>
            <v-col cols="12" xs="6" md="3">
                <span>
                    <v-icon color="rgb(255,193,7)">fa-moon</v-icon>
                    Zachód słońca
                </span>
                <h3>{{ sunsetTime }}</h3>
            </v-col>
            <v-col cols="12">
                <iframe :src="mapURL + result.coord.lat + ',' + result.coord.lon + '&z=15&output=embed'"
                        width="100%" height="300"
                        tabindex="0"></iframe>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import store from '../store'

    export default {
        name: "Result",
        data() {
            return {
                iconURL: 'http://openweathermap.org/img/wn/',
                mapURL: 'https://maps.google.com/maps?q='
            }
        },
        computed: {
            result() {
                return store.getters.result
            },
            sunriseTime() {
                const sunrise = store.state.results.sys.sunrise;
                const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
                return sunriseTime
            },
            sunsetTime() {
                const sunset = store.state.results.sys.sunset;
                const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
                return sunsetTime
            },
            currentDate() {
                const today = new Date();
                const date = today.getDate() + '.' + ("0" + (today.getMonth() + 1)).slice(-2) + '.' + today.getFullYear();
                const time = ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2);
                const dateTime = date + ' ' + time;
                return dateTime
            },
        },
    }
</script>

<style scoped>

</style>
