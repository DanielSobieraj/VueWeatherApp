<template>
    <v-container text-center>
        <v-row>
            <v-col>
                <h1>Pogoda dla</h1>
                <h2>
                    <v-icon color="rgb(255,193,7)">fa-city</v-icon>
                    {{ weather.name }}
                </h2>
                <br>
                <hr>
                <br>
                <h3>Dane dla dnia i godziny</h3>
                <p>
                    <v-icon color="rgb(255,193,7)">fa-temperature-low</v-icon>
                    Aktualna temperatura
                </p>
                <h3>{{ weather.main.temp }} &deg;C </h3>
                <p>
                    <v-icon color="rgb(255,193,7)">fa-wind</v-icon>
                    Aktualna prędkość wiatru
                </p>
                <h3>{{ weather.wind.speed }} km/h</h3>
                <p>
                    <v-icon color="rgb(255,193,7)">fa-smog</v-icon>
                    Aktualne ciśnienie wynosi
                </p>
                <h3>{{ weather.main.pressure }} hPa</h3>
                <p>
                    <v-icon color="rgb(255,193,7)">fa-sun</v-icon>
                    Wschód słońca
                </p>
                <h3>{{ weather.sys.sunrise }}</h3>
                <p>
                    <v-icon color="rgb(255,193,7)">fa-moon</v-icon>
                    Zachód słońca
                </p>
                <h3>{{ weather.sys.sunset }}</h3>
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
                result: [],
            }
        },
        computed: {
            weather() {
                return store.getters.weather
            }
        }
    }

    // const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
</script>

<style scoped>

</style>
