<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">Create new Ad</h1>
                <v-form v-model="valid" ref="form" validation class="mb-3">
                    <v-text-field
                        name="title"
                        label="Ad title"
                        type="text"
                        required
                        :rules="[v => !!v || 'Title is required']"
                        v-model="title">
                    </v-text-field>
                    <v-text-field
                        multi-line
                        name="descr"
                        label="Ad descr"
                        type="text"
                        :rules="[v => !!v || 'Descr is required']"
                        v-model="descr">
                    </v-text-field>
                </v-form>
                <v-layout row class="mb-3">
                    <v-flex xs12>
                        <v-btn class="warning">Upload image <v-icon right dark>cloud_upload</v-icon></v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <img src="" height="150" alt="">
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-switch
                        color="primary"
                        label="Add to promo"
                        v-model="promo"
                    ></v-switch>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-spacer></v-spacer>
                        <v-btn :loading="loading" :disabled="!valid || loading" class="success" @click="createAdd">Create add</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                title: '',
                descr: '',
                promo: false,
                valid: false
            };
        },
        computed: {
            loading() {
                return this.$store.getters.loading;
            }
        },
        methods: {
            createAdd() {
                if (this.$refs.form.validate()) {
                    const ad = {
                        title: this.title,
                        descr: this.descr,
                        promo: this.promo,
                        imageSrc: 'https://cdn-images-1.medium.com/max/2000/1*pofor4p-ig072eaChITOYQ.jpeg'
                    };
                    this.$store.dispatch('createAd', ad)
                        .then(() => {
                            this.$router.push('/list');
                        })
                        .catch(() => {});
                }
            }
        }
    };
</script>
