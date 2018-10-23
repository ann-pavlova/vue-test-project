<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <v-card v-if="!loading">
                    <v-img height="300" :src="ad.imageSrc"></v-img>
                    <v-card-text>
                        <h1 class="text--primary">{{ad.title}}</h1>
                        <p>{{ad.descr}}</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <appEditAdModal :ad="ad" v-if="isOwner"></appEditAdModal>
                        <app-buy-modal :ad="ad"></app-buy-modal>
                    </v-card-actions>
                </v-card>
                <div v-else class="text-xs-center">
                    <v-progress-circular
                        indeterminate
                        :size="100"
                        :width="4"
                        color="primary"
                    ></v-progress-circular>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import EditAdModal from './EditAdModal';

    export default {
        props: ['id'],
        components: {
            appEditAdModal: EditAdModal
        },
        computed: {
            ad() {
                const id = this.id;
                return this.$store.getters.adById(id);
            },
            loading() {
                return this.$store.getters.loading;
            },
            isOwner() {
                return this.ad.ownerId === this.$store.getters.user.id;
            }
        }
    };
</script>
