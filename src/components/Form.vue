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
                        autofocus
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
    export default {
        name: 'Form',
        data() {
            return {
                city: "Częstochowa",
                result: []
            }
        },
        methods: {
            citySubmit() {
                console.log(this.city);
                this.city = '';
            }
        },
    }
</script>
