export default {
    state: {
        ads: [
            {
                title: 'First ad',
                descr: 'First ad',
                promo: false,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                id: '123'
            }, {
                title: 'Second ad',
                descr: 'Second ad',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                id: '45848'
            }, {
                title: 'Third ad',
                descr: 'Third ad',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                id: '488'
            }
        ]
    },
    mutations: {
        createAd(state, payload) {
            state.ads.push(payload);
        }
    },
    actions: {
        createAd({ commit }, payload) {
            payload.id = Math.floor(Math.random() * 6 + 1).toString();
            commit('createAd', payload);
        }
    },
    getters: {
        ads(state) {
            return state.ads;
        },
        promoAds(state) {
            return state.ads.filter(ad => ad.promo === true);
        },
        myAds(state) {
            return state.ads;
        },
        adById(state) {
            return adId => state.ads.find(ad => ad.id === adId);
        }
    }
};
