<template>
    <v-app>
        <h1>Pogoda dla {{ city }}</h1>
        <h3>Dane dla dnia i godziny ...</h3>
        <v-icon>fa-temperature-high</v-icon>
        <p>Aktualna temperatura ...</p>
        <p>Aktualna prędkość wiatru ...</p>
        <p>Aktualne ciśnienie wynosi ...</p>
        <p>Wschód słońca ...</p>
        <p>Zachód słońca ...</p>
    </v-app>
</template>

<script>
    import App from "@/components/App";

    export default {
        name: "Result",
        data() {
            return {
                city: App.data().city,
                date: '',
                temp: '',
                wind: '',
                pressure: '',
                sunrise: '',
                sunset: '',
                error: '',
            }
        },
    }
</script>

<style scoped>

</style>