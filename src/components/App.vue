<template>
    <v-app>
        <v-container fill-height>
            <v-row justify="center">

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
        <v-footer dark class="d-flex justify-center">
            <audio controls autoplay preload>
                <source src="../assets/music.mp3" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
            <br>
            <h3 style="width: 100%" class="text-end">Wykonał Daniel Sobieraj</h3>
        </v-footer>
    </v-app>
</template>

<script>
    import Form from './Form';
    import Result from "./Result";

    export default {
        name: 'App',
        data() {
            return {
                result: Form.data().result,
                error: Form.data().error
            }
        },
        components: {
            Form,
            Result
        },
    };
</script>
