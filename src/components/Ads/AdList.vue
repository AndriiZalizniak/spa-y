<template>
  <v-container>
    <v-layout class="pt-10">
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My ads</h1>

        <v-card
          class="elevation-10 mb-5"
          v-for="ad in myAds"
          :key="ad.id"
        >
          <v-layout>
            <v-flex xs4>
              <!-- <v-card-media
                :src="ad.src"
              > -->
              <img
                :src="ad.src"
                class="spa-ads-img"
                width="100%"
                height="100%"
                alt=""
              >
              <!-- </v-card-media> -->
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2 class="text--primary">{{ad.title}}</h2>
                <p>{{ ad.descr }}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  min-width="120"
                  outlined
                  :to="'/ad/' + ad.id"
                >Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    myAds () {
      return this.$store.getters.myAds
    }
  }
}
</script>

<style lang="scss">
  .spa-ads-img {
    object-fit: cover;
  }
</style>
