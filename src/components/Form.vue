<template>

    <v-container>
        <v-row class="d-flex justify-center align-center">
            <v-col class="pb-0" cols="12" md="5">

                <v-text-field
                        clearable
                        color="rgb(255,193,7)"
                        label="Wpisz miasto"
                        outlined
                        rounded
                        @keyup.enter="citySubmit"
                        aria-autocomplete="none"
                        v-model="city"
                        hint="Naciśnij enter, aby zatwierdzić"
                        :error-messages="error"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import axios from 'axios';
    import store from '../store'

    const API = 'cd24e008a27243e0786cb71906677d9a';

    export default {
        name: 'Form',
        data() {
            return {
                city: 'Częstochowa',
                results: [],
                error: [],
            }
        },
        methods: {
            citySubmit() {
                axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&APPID=' + API + '&units=metric' + '&lang=pl')
                    .then(response => {
                        this.results = response.data;
                        this.city = '';
                        store.dispatch('result', this.results);
                    })
                    .catch(error => {
                        this.error = error.message;
                        if (this.error == "Request failed with status code 404") {
                            this.error = 'Nie znaleziono miasta'
                        } else if (this.error == "Request failed with status code 400") {
                            this.error = 'Błędne/puste zapytanie'
                        } else {
                            this.error('Błąd - "' + error + '"')
                        }
                    });
            }
        }
    };
</script>
