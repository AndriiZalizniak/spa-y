export default {
  state: {
    ads: [
      {
        title: 'Squirrel',
        subtitle: 'First subtitle',
        promo: true,
        id: 'squirrel',
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        descr: 'descr text'
      },
      {
        title: 'Sky',
        subtitle: 'Second subtitle',
        promo: false,
        id: 'sky',
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        descr: 'descr text'
      },
      {
        title: 'Bird',
        subtitle: 'Third subtitle',
        promo: false,
        id: 'bird',
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        descr: 'descr text'
      }
    ]
  },
  mutations: {
    createdAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createdAd ({ commit, payload }) {
      payload.id = Math.random()
      commit('createAd', payload)
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
