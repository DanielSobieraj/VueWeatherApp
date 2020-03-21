<template>
    <v-container>
        <v-row class="d-flex justify-center">
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
                />
            </v-col>
            <v-col class="d-flex justify-center" md="2">
                <v-btn
                        color="rgb(255,193,7)"
                        dark
                        large
                        @click="citySubmit"
                        rounded>
                    Wyszukaj
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import axios from 'axios';
    import store from '../store'

    export default {
        name: 'Form',
        data() {
            return {
                city: 'Częstochowa',
                results: [],
                error: []
            }
        },
        methods: {
            citySubmit() {
                axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&APPID=cd24e008a27243e0786cb71906677d9a&units=metric')
                    .then(response => {
                        this.results = response.data;
                        this.city = '';
                        store.commit('result',this.results);
                        console.log(this.results);
                    })
                    .catch(error => {
                        this.error = error.message;
                        alert('Błąd - "' + error + '"')
                    });
            }
        }
    };
</script>
