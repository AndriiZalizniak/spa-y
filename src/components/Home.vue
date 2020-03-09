<template>
  <div class="home-wrap">
    <v-container fluid class="carousel">
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="ad in promoAds"
              :key="ad.id"
              :src="ad.src"
            >
              <div class="carousel-link">
                <v-btn class="carouselLabel" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          v-for="ad in ads"
          :key="ad.id"
        >
          <v-card>
            <v-img
              :src="ad.src"
              height="200px"
            ></v-img>

            <v-card-title>
              {{ ad.title }}
            </v-card-title>

            <v-card-subtitle>
              {{ ad.subtitle }}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="warning"
                flat
                :to="'/ad/' + ad.id"
              >Open</v-btn>

              <v-btn
                color="success"
                reised
                width="150"
              >Buy
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                type="button"
                icon
                @click="show = !show"
              >
                <v-icon :id="ad.id">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  {{ ad.descr }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  computed: {
    promoAds () {
      return this.$store.getters.promoAds
    },
    ads () {
      return this.$store.getters.ads
    }
  },
  methods: {
    isShow () {}
  }
}
</script>

<style lang="scss">
  .home-wrap {
    .carousel {
      padding-top: 0 ;
    }
  }

  .carousel-link {
    position: absolute;
    bottom: 50px;
    right: 25px;
    background-color: rgba(0,0,0,0.3);
    border-radius: 5px 5px 0 0;
    padding: 15px;
  }
</style>
