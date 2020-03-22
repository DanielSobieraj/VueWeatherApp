<template>
    <v-container text-center>
        <v-row>
            <v-col cols="12">
                <h1>Pogoda dla</h1>
                <h2>
                    <v-icon color="rgb(255,193,7)">fa-city</v-icon>
                    {{ weather.name }}
                </h2>
            </v-col>
            <v-col cols="12" md="12">
                <h3>Dane dla dnia i godziny</h3>
                <h3>{{ currentDate }}</h3>
            </v-col>
            <v-col cols="6" md="3">
                <p>
                    <v-icon color="rgb(255,193,7)">fa-temperature-low</v-icon>
                    Aktualna temperatura
                </p>
                <h3>{{ weather.main.temp }}&deg;C </h3>
            </v-col>
            <v-col cols="6" md="3">
                <p>
                    <v-icon color="rgb(255,193,7)">fa-wind</v-icon>
                    Aktualna prędkość wiatru
                </p>
                <h3>{{ weather.wind.speed }} km/h</h3>
            </v-col>
            <v-col cols="6" md="3">
                <p>
                    <v-icon color="rgb(255,193,7)">fa-smog</v-icon>
                    Aktualne ciśnienie wynosi
                </p>
                <h3>{{ weather.main.pressure }} hPa</h3>
            </v-col>
            <v-col cols="6" md="3">
                <p>
                    <v-icon color="rgb(255,193,7)">fa-sun</v-icon>
                    Wschód słońca
                </p>
                <h3>{{ sunriseTime }}</h3>
            </v-col>
            <v-col cols="6" md="3">
                <p>
                    <v-icon color="rgb(255,193,7)">fa-moon</v-icon>
                    Zachód słońca
                </p>
                <h3>{{ sunsetTime }}</h3>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import store from '../store'

    export default {
        name: "Result",
        data() {
            return {}
        },
        computed: {
            weather() {
                return store.getters.weather
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
                const date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
                const time = today.getHours() + ":" + today.getMinutes();
                const dateTime = date + ' ' + time;
                return dateTime
            }
        }
    }
</script>

<style scoped>

</style>
