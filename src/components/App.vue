<template>
    <v-app>
        <v-container fill-height>
            <v-row>
                <v-col>
                    <v-img
                            alt="Sun logo"
                            contain
                            height="64px"
                            src="../assets/sun.png"
                    >
                    </v-img>
                    <h1 class="text-center">Aplikacja pogodowa</h1>
                </v-col>
            </v-row>
            <v-content>
                <Form/>
                <Result/>
            </v-content>
        </v-container>
    </v-app>
</template>

<script>
    import axios from 'axios'
    import Form from './Form';
    import Result from "./Result";

    const api = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=cd24e008a27243e0786cb71906677d9a&units=metric';

    export default {
        name: 'App',
        data() {
            return {
                value: Form.data().city,
                city: '',
                date: '',
                temp: '',
                wind: '',
                pressure: '',
                sunrise: '',
                sunset: '',
                error: '',
            }
        },
        mounted() {
            axios.get(api)
                .then(response => {
                    this.city = response.data.name;
                    this.date = response.data.date;
                    this.temp = response.data.temp;
                })
                .catch(error => {
                    this.error = error.message;
                    console.log(error)
                });
        },
        components: {
            Form,
            Result
        },
    };
</script>