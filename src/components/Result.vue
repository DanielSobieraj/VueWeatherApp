<template>
    <v-container text-center>
        <v-row>
            <v-col >
<!--                :key="result.id" v-for="result in results"-->
                <h1>Pogoda dla</h1>
                <h2>
                    <v-icon color="rgb(255,193,7)">fa-city</v-icon>
                    {{  }}
                </h2>
                <br>
                <hr>
                <br>
                <h3>Dane dla dnia i godziny</h3>
                <p>
                    <v-icon color="rgb(255,193,7)">fa-temperature-low</v-icon>
                    Aktualna temperatura
                </p>
                <p>{{  }}</p>
                <p>
                    <v-icon color="rgb(255,193,7)">fa-wind</v-icon>
                    Aktualna prędkość wiatru
                </p>
                <p>
                    <v-icon color="rgb(255,193,7)">fa-smog</v-icon>
                    Aktualne ciśnienie wynosi
                </p>
                <p>
                    <v-icon color="rgb(255,193,7)">fa-sun</v-icon>
                    Wschód słońca
                </p>
                <p>
                    <v-icon color="rgb(255,193,7)">fa-moon</v-icon>
                    Zachód słońca
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Result",
        data() {
            return {
                result: [],
            }
        }
    }
</script>

<style scoped>

</style>
