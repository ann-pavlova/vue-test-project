<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <v-card>
                    <v-card-media height="300" src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"></v-card-media>
                    <v-card-text>
                        <h1 class="text--primary">Text</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, illo!</p>
                    </v-card-text>
                    <v-card-action>
                        <v-spacer></v-spacer>
                        <v-btn class="warning" flat>Edit</v-btn>
                        <v-btn class="success">Buy</v-btn>
                    </v-card-action>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {

            };
        }
    };
</script>
