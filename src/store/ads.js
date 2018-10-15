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
    mutations: {},
    actions: {},
    getters: {
        ads(state) {
            return state.ads;
        },
        promoAds(state) {
            return state.ads.filter(ad => {
                return ad.promo === true
            })
        },
        myAds(state) {
            return state.ads
        }
    }
}
